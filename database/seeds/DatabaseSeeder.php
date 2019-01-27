<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call(LaratrustSeeder::class);
        \App\Category::create([
            'name' => 'Tablet',
        ]);
        \App\Category::create([
            'name' => 'Capsule',
        ]);
        \App\Category::create([
            'name' => 'Pill',
        ]);
        \App\Category::create(['name' => 'Syrup',]);
        \App\Category::create(['name' => 'Injectable',]);
        \App\Category::create(['name' => 'Drops',]);
        \App\Category::create(['name' => 'Suspension',]);
        \App\Medicine::create(['name' => 'actrapid',]);
        \App\Medicine::create(['name' => 'acyclovir',]);
        \App\Medicine::create(['name' => 'allopurino',]);
        \App\Medicine::create(['name' => 'aluminum magnesium',]);
        \App\Medicine::create(['name' => 'ambroxol',]);
        \App\Medicine::create(['name' => 'amlopidine',]);
        \App\Medicine::create(['name' => 'amoxiciline',]);
        \App\Medicine::create(['name' => 'ascorbic acid',]);
        \App\Medicine::create(['name' => 'aspirin',]);
        \App\Medicine::create(['name' => 'atropine surfate',]);
        \App\Medicine::create(['name' => 'azithromycin',]);
        \App\Medicine::create(['name' => 'betamethasone',]);
        \App\Medicine::create(['name' => 'calcium carbonate',]);
        \App\Medicine::create(['name' => 'calcuim gluconate',]);
        \App\Medicine::create(['name' => 'captopril',]);
        \App\Medicine::create(['name' => 'carbocisteine',]);
        \App\Medicine::create(['name' => 'cafelexin',]);
        \App\Medicine::create(['name' => 'cefurocime',]);

        \App\Package::create([
            'name' => 'Box',
        ]);
        \App\Package::create([
            'name' => 'Strip',
        ]);\App\Rack::create([
            'name' => 'Rack1',
        ]);\App\Rack::create([
            'name' => 'Rack2',
        ]);\App\Rack::create([
            'name' => 'Rack3',
        ]);


        \App\Location::create([
            'name' => 'Agdao',
        ]);\App\Location::create([
            'name' => 'Laboratory',
        ]);\App\Location::create([
            'name' => 'Talomo Central',
        ]);

        \App\Unit::create([
            'name' => 'piece',
        ]);\App\Unit::create([
            'name' => 'box/es',
        ]);\App\Unit::create([
            'name' => 'jar',
        ]);

        DB::table('settings')->insert(
            array('name' => 'ABSOLUTE')
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'view_Category','display_name' => 'view_Category')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'add_Category','display_name' => 'add_Category')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'edit_Category','display_name' => 'edit_Category')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'delete_Category','display_name' => 'delete_Category')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );


        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'view_Pack','display_name' => 'view_Pack')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'add_Pack','display_name' => 'add_Pack')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'edit_Pack','display_name' => 'edit_Pack')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'delete_Pack','display_name' => 'delete_Pack')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'view_Package','display_name' => 'view_Package')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'add_Package','display_name' => 'add_Package')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'edit_Package','display_name' => 'edit_Package')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'delete_Package','display_name' => 'delete_Package')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );

        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'view_Product','display_name' => 'view_Product')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'add_Product','display_name' => 'add_Product')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'edit_Product','display_name' => 'edit_Product')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );
        $perm_id=DB::table('permissions')->insertGetId(
            array('name' => 'delete_Product','display_name' => 'delete_Product')
        );
        DB::table('permission_role')->insert(
            array('permission_id' =>$perm_id,'role_id' => 1)
        );



    }
}
