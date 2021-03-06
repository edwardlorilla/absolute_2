<?php

namespace App\Http\Controllers;

use App\Pending;
use Illuminate\Http\Request;

class PendingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Pending::with('subject', 'user')->searchPaginateAndOrder();
        $columns = Pending::$columns;
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request['division'] = \App\User::whereId(auth()->id())->with('division')->first()['division']['id'];
        $input = $this->validate($request, [
            'division' => 'required',
            "request_date" => 'required',
            "request_year_code" => 'required',
            "products" => 'required',
        ]);


        $users = \App\User::whereHas('roles', function ($q) {
            $q->where('name', 'superadministrator');
        })->where('id', '!=', auth()->id())->get();
        auth()->user()->notify(new \App\Notifications\ApprovedRequest('Your medicine requests currently under review.', $input['products'], 'medicine-approved'));
        $id = auth()->user()->unreadNotifications[0]->id;
        foreach ($users as $user) {
            $user->notify(new \App\Notifications\Pending(auth()->user(), $input, $id));
        }

        \App\Product::where('disabled', true)
            ->update(['disabled' => false]);
        return response()->json([], 200);
    }

    public function supply(Request $request)
    {
        $request['division'] = \App\User::whereId(auth()->id())->with('division')->first()['division']['id'];
        $input = $request->validate([
            'division' => 'required',
            'request_date' => '',
            'request_year_code' => 'required',
            'year' => 'required',
            'supplies' => 'required|array|min:1',
        ]);

        $users = \App\User::whereHas('roles', function ($q) {
            $q->where('name', 'superadministrator');
        })->where('id', '!=', auth()->id())->get();
        auth()->user()->notify(new \App\Notifications\ApprovedRequest('Your supply request currently under review.', $input['supplies'], 'supply-approved'));
        $id = auth()->user()->unreadNotifications[0]->id;
        foreach ($users as $user) {
            $user->notify(new \App\Notifications\PendingSupply(auth()->user(), $input, request()->type == '0' ? 0 : 1, $id));
        }
        \App\Supply::where('disabled', true)
            ->update(['disabled' => false]);
        return response()->json([], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pending $pending
     * @return \Illuminate\Http\Response
     */
    public function show($pending)
    {
        return response()->json(auth()->user()->notifications()->whereId($pending)->first());
    }

    public function approved_supply_request($pending, Request $request)
    {

        $input = $request->validate([
            'division' => 'required',
            'request_date' => '',
            'request_year_code' => 'required',
            'year' => 'required',
            'user_id' => 'required',
            'supplies' => 'required|array|min:1',
        ]);
        $users = \App\User::whereHas('roles', function ($q) {
            $q->where('name', 'superadministrator');
        })->get();
        foreach ($input['supplies'] as $item) {
            $supply = \App\Supply::whereId($item['id'])->first();
            $supply->disabled = false;
            $supply->save();
            $supply->tracks()->save(new \App\Track(['division_id' => $input['division'], 'check' => $item['out_quantity'], 'type' => 0]));
            if ($supply->quantity <= $supply->reorder_point) {
                if (\App\Notification::where('data', 'like', '%"supply_id":' . $supply->id . '%')->exists()) {
                    \App\Notification::where('data', 'like', '%"supply_id":' . $supply->id . '%')->delete();
                }
                foreach ($users as $user) {
                    $user->notify(new \App\Notifications\Reorder('The supply "' . $supply->name . '" quantity has reached the reorder level.', $supply->reorder_point, $supply->quantity, $supply->id, $supply->type));
                }
            } else if (\App\Notification::where('data', 'like', '%"supply_id":' . $supply->id . '%')->exists()) {
                \App\Notification::where('data', 'like', '%"supply_id":' . $supply->id . '%')->delete();
            }
        }
        $userNotification = \App\Notification::whereId($pending)->first();
        $userId = $userNotification->data['notification_id'];
        \App\User::whereId($input['user_id'])->first()->notifications()->whereId($userId)->first()->update(['read_at' => now(), 'data->status' => 'approved', 'data->message' => 'Your supply requests been approved by ' . auth()->user()->name]);
        \App\Notification::whereData(json_encode($userNotification->data, false))->delete();
        //$user->notify(new \App\Notifications\ApprovedRequest('Your supply requests been approved by '. auth()->user()->name, $input['supplies'], request()->type == '0' ? 'office-supply-approved': 'supply-approved'));
        return response()->json();
    }

    public function rejected_supply_request($pending, Request $request)
    {
        $input = $request->validate([
            'division' => 'required',
            'request_date' => '',
            'request_year_code' => 'required',
            'year' => 'required',
            'user_id' => 'required',
            'supplies' => 'required|array|min:1',
        ]);
        $userNotification = \App\Notification::whereId($pending)->first();
        $userId = $userNotification->data['notification_id'];
        \App\User::whereId($input['user_id'])->first()->notifications()->whereId($userId)->first()->update(['read_at' => now(), 'data->status' => 'rejected', 'data->message' => 'Your supply requests been rejected by ' . auth()->user()->name]);
        auth()->user()->notifications()->whereData(json_encode($userNotification->data, false))->delete();
        //$user->notify(new \App\Notifications\ApprovedRequest('Your supply requests been approved by '. auth()->user()->name, $input['supplies'], request()->type == '0' ? 'office-supply-approved': 'supply-approved'));
        return response()->json();
    }

    public function approved_medicine_request($pending, Request $request)
    {

        $input = $this->validate($request, [
            "division" => 'required',
            "request_date" => 'required',
            "request_year_code" => 'required',
            "user_id" => 'required',
            "products" => 'required',
        ]);
        $user = \App\User::whereId($input['user_id'])->first();
        $productId = [];
        $users = \App\User::whereHas('roles', function ($q) {
            $q->where('name', 'superadministrator');
        })->get();
        foreach ($input['products'] as $product) {
            $transaction = new \App\Transaction;
            $transaction->out_quantity = $product['out_quantity'];
            $transaction->type = 0;
            $transaction->user_id = $user->id;
            $transaction->product_id = $product['id'];
            $transaction->save();
            $transactions[] = $transaction->id;
            $recipient = \App\Transaction::whereProductId($product['id'])
                ->whereDate('expiry_date', '>', \Carbon\Carbon::parse()->format('Y-m-d'))
                ->orderBy('expiry_date', 'asc')
                ->with(['orders' => function ($query) {
                    $query->first();
                }])->first();
            $receiptment = new \App\Receiptment;
            $receiptment->product_id = $product['id'];
            $receiptment->division_id = $request->division;
            $receiptment->po_number = $recipient['orders'][0]['po_number'];
            //$receiptment->ris_number = $recipient['orders'][0]['pr_number'];
            $receiptment->date_release = $request->request_date;
            $receiptment->date_print = $request->request_date;
            $receiptment->save();
            $productId[] = $product['id'];
            $product = \App\Product::whereId($product['id'])->first();
            if ($product->quantity <= $product->reorder_point) {
                if (\App\Notification::where('data', 'like', '%"product_id":' . $product->id . '%')->exists()) {
                    \App\Notification::where('data', 'like', '%"product_id":' . $product->id . '%')->delete();
                }
                foreach ($users as $user) {
                    $user->notify(new \App\Notifications\ReorderMedicine('The product "' . $product->name . '" quantity has reached the reorder level.', $product->reorder_point, $product->quantity, $product->id));
                }
            } else if (\App\Notification::where('data', 'like', '%"product_id":' . $product->id . '%')->exists()) {
                \App\Notification::where('data', 'like', '%"product_id":' . $product->id . '%')->delete();
            }
        }

        $requests = $user->requests()->save(new \App\Request([
            'division_id' => $request->division,
            'request_date' => $request->request_date,
            'request_year_code' => $request->request_year_code
        ]));
        $requests->transactions()->attach($transactions);
        $userNotification = \App\Notification::whereId($pending)->first();
        $userId = $userNotification->data['notification_id'];
        $markAsRead = \App\User::whereId($input['user_id'])->first()->notifications()->whereId($userId)->first()->update(['read_at' => now(), 'data->status' => 'approved', 'data->message' => 'Your medicine requests been approved by ' . auth()->user()->name]);
        \App\Notification::whereData(json_encode($userNotification->data, false))->delete();
//        $user->notify(new \App\Notifications\ApprovedRequest('Your medicine requests been approved by '. auth()->user()->name, $input['products'], 'medicine-approved'));
        return response()->json($markAsRead, 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pending $pending
     * @return \Illuminate\Http\Response
     */
    public function edit(Pending $pending)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Pending $pending
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pending $pending)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pending $pending
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pending $pending)
    {
        //
    }
}
