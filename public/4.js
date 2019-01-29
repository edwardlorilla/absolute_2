webpackJsonp([4],{

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(899)
/* template */
var __vue_template__ = __webpack_require__(911)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Dashboard\\wrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a9d63220", Component.options)
  } else {
    hotAPI.reload("data-v-a9d63220", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(862)
/* template */
var __vue_template__ = __webpack_require__(863)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Pending\\medical-request.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d3ebb73", Component.options)
  } else {
    hotAPI.reload("data-v-3d3ebb73", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    props: ['data']
};

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-table",
    { staticStyle: { width: "100%" }, attrs: { data: _vm.data.products } },
    [
      _c("el-table-column", { attrs: { prop: "name", label: "Product Name" } }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { prop: "out_quantity", label: "Quantity" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d3ebb73", module.exports)
  }
}

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(865)
/* template */
var __vue_template__ = __webpack_require__(866)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Pending\\medical-supply.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49ee6cbb", Component.options)
  } else {
    hotAPI.reload("data-v-49ee6cbb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    props: ['data']
};

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-table",
    { staticStyle: { width: "100%" }, attrs: { data: _vm.data.supplies } },
    [
      _c("el-table-column", { attrs: { prop: "name", label: "Product Name" } }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { prop: "description", label: "Description" }
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { prop: "out_quantity", label: "Quantity" }
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { prop: "out_quantity", label: "Quantity" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-49ee6cbb", module.exports)
  }
}

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _chart = __webpack_require__(900);

var _chart2 = _interopRequireDefault(_chart);

var _LineChart = __webpack_require__(905);

var _LineChart2 = _interopRequireDefault(_LineChart);

var _Notifications = __webpack_require__(908);

var _Notifications2 = _interopRequireDefault(_Notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        Transaction: _chart2.default,
        Product: _LineChart2.default,
        Notifications: _Notifications2.default
    },
    data: function data() {
        return {
            transactions: [],
            notifications: [],
            columns: [{
                label: 'User Name',
                prop: 'notifiable.name',
                sort: true
            }, {
                label: 'Email',
                prop: 'notifiable.email',
                sort: true
            }, {
                label: 'Message',
                prop: 'data.message',
                sort: true
            }]
        };
    },
    beforeRouteEnter: function beforeRouteEnter(a, b, c) {
        axios.get('/api/dashboard').then(function (d) {
            c(function (e) {
                return e.setData(d.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(a, b, c) {
        var d = this;
        axios.get('/api/dashboard').then(function (e) {
            d.setData(e.data), c();
        });
    },

    methods: {
        setData: function setData(a) {
            var b = this;
            b.transactions = a.transactions;
            b.notifications = a.notifications;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(901)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(903)
/* template */
var __vue_template__ = __webpack_require__(904)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Chart\\Transactions\\chart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b5caf740", Component.options)
  } else {
    hotAPI.reload("data-v-b5caf740", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(902);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("41a174fb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b5caf740\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chart.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b5caf740\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//

exports.default = {
    props: ['data$'],
    data: function data() {
        return {
            transform: { chart: [{ "name": "IN", "data": {} }, { "name": "OUT", "data": {} }] }
        };
    },

    computed: {
        getChartData: function getChartData() {
            var vm = this;
            var counter = {};
            var date = [];
            _.map(vm.data$, function (response) {
                var index = _.findIndex(vm.transform.chart, ['name', response.type === 0 ? 'OUT' : 'IN']);
                var pick = {};
                date.push("" + response.created_at.split(' ')[0]);
                pick["" + response.created_at.split(' ')[0]] = response.type === 0 ? counter[response.created_at.split(' ')[0] + "_out"] >= 0 ? ++counter[response.created_at.split(' ')[0] + "_out"] : counter[response.created_at.split(' ')[0] + "_out"] = 1 : counter[response.created_at.split(' ')[0] + "_in"] >= 0 ? ++counter[response.created_at.split(' ')[0] + "_in"] : counter[response.created_at.split(' ')[0] + "_in"] = 1;
                _.merge(vm.transform.chart[index].data, _.clone(pick));
            });
            var i,
                j,
                undefinedObject = {},
                k,
                unique = _.uniq(date);

            for (i = 0; i < vm.transform.chart.length; i++) {
                undefinedObject = {};
                for (j = 0; j < unique.length; j++) {
                    if (_.isUndefined(vm.transform.chart[i].data[unique[j]])) {
                        undefinedObject[unique[j]] = 0;
                    }
                }
                _.merge(vm.transform.chart[i].data, undefinedObject);
            }
            return unique;
        }
    }
};

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.getChartData.length != 0
        ? _c("line-chart", {
            attrs: { download: true, data: _vm.transform.chart }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b5caf740", module.exports)
  }
}

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(906)
/* template */
var __vue_template__ = __webpack_require__(907)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Chart\\Product\\LineChart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cb648c4", Component.options)
  } else {
    hotAPI.reload("data-v-4cb648c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//

exports.default = {
    props: ['data$'],
    data: function data() {
        return {
            reload: true,
            transform: { chart: [] }
        };
    },

    computed: {
        getChartData: function getChartData() {
            var vm = this;
            var counter = {};
            var date = [];
            _.map(vm.data$, function (response) {
                var index = _.findIndex(vm.transform.chart, ['name', response.product.medicine.name]);
                if (index === -1) {
                    vm.transform.chart.push({ name: response.product.medicine.name, data: {} });
                    index = _.findIndex(vm.transform.chart, ['name', response.product.medicine.name]);
                }
                var pick = {};
                date.push('' + response.created_at.split(' ')[0]);
                if (response.type === 0) {
                    pick['' + response.created_at.split(' ')[0]] = !_.isUndefined(counter[response.created_at.split(' ')[0] + '-out-' + response.product.id]) ? counter[response.created_at.split(' ')[0] + '-out-' + response.product.id] += response.out_quantity : counter[response.created_at.split(' ')[0] + '-out-' + response.product.id] = response.out_quantity;
                }
                _.merge(vm.transform.chart[index].data, pick);
            });
            var i,
                j,
                undefinedObject = {},
                k,
                unique = _.uniq(date);

            for (i = 0; i < vm.transform.chart.length; i++) {
                undefinedObject = {};
                for (j = 0; j < unique.length; j++) {
                    if (_.isUndefined(vm.transform.chart[i].data[unique[j]])) {
                        undefinedObject[unique[j]] = 0;
                    }
                }
                _.merge(vm.transform.chart[i].data, undefinedObject);
            }
            return unique;
        }
    }

};

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.getChartData.length != 0
    ? _c("line-chart", { attrs: { download: true, data: _vm.transform.chart } })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4cb648c4", module.exports)
  }
}

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(909)
/* template */
var __vue_template__ = __webpack_require__(910)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Chart\\Notifications.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d2b0cba2", Component.options)
  } else {
    hotAPI.reload("data-v-d2b0cba2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _medicalRequest = __webpack_require__(861);

var _medicalRequest2 = _interopRequireDefault(_medicalRequest);

var _medicalSupply = __webpack_require__(864);

var _medicalSupply2 = _interopRequireDefault(_medicalSupply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        medicalRequest: _medicalRequest2.default,
        medicalSupply: _medicalSupply2.default
    },
    props: {
        createName: String,
        onCreateName: String,
        onEditName: {
            type: String,
            required: false
        },
        onDelete: {
            type: String,
            required: false
        },
        data: {},
        columns: Array,
        showEdit: {
            default: true,
            type: Boolean
        },
        showCreate: {
            default: true,
            type: Boolean
        },
        showDelete: {
            default: true,
            type: Boolean
        }
    },
    data: function data() {
        var vm = this;
        return {
            search: vm.$route.query.search ? vm.$route.query.search : '',
            loading: false
        };
    },

    methods: {
        handleSortChange: function handleSortChange(val) {
            var vm = this;
            var option = _.clone(vm.$route.query);
            option.column = val.prop;
            option.direction = val.order == 'ascending' ? 'asc' : 'desc';
            vm.onRouteChange(option);
        },
        handleCurrentChange: function handleCurrentChange(val) {
            var vm = this;
            var option = _.clone(vm.$route.query);
            option.page = val;
            vm.onRouteChange(option);
        },
        onRouteChange: function onRouteChange(option) {
            var vm = this;
            vm.loading = true;
            vm.$router.push({
                path: '' + vm.$route.path,
                query: option
            }, function () {
                vm.loading = false;
            }, function () {
                vm.loading = false;
            });
        },
        search_: function search_() {
            var vm = this;
            vm.onSearch(vm.search, vm);
        },

        onSearch: _.debounce(function (query, vm) {
            var vm = this;
            vm.loading = true;
            vm.$router.push({
                path: '' + vm.$route.path,
                query: { search: query }
            }, function () {
                vm.loading = false;
            }, function () {
                vm.loading = false;
            });
        }, 500),
        handleEdit: function handleEdit(index, row) {
            var vm = this;
            vm.$router.push({ name: vm.onEditName, params: { id: row.id } });
        },
        handleDelete: function handleDelete(index, row) {
            var _this = this;

            var vm = this;
            vm.loading = true;
            vm.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(function () {
                axios.delete((vm.onDelete ? vm.onDelete : '/api/agencies') + '/' + row.id);
                vm.$emit('delete', index);
                _this.$message({
                    type: 'success',
                    message: 'Delete completed'
                });
                vm.loading = false;
            }).catch(function () {
                _this.$message({
                    type: 'info',
                    message: 'Delete canceled'
                });
                vm.loading = false;
            });
        }
    }
};

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        [
          _vm.onCreateName && _vm.showCreate
            ? _c(
                "el-col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.$router.push({ name: _vm.onCreateName })
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.createName))]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticStyle: { width: "100%" },
          attrs: { data: _vm.data.data },
          on: { "sort-change": _vm.handleSortChange }
        },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { type: "expand" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _c(props.row.data.type, {
                      tag: "component",
                      attrs: { data: props.row.data.data }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _vm._l(_vm.columns, function(column, index, key) {
            return _c("el-table-column", {
              key: index + "-" + key + "-" + column.prop + "-" + column.label,
              attrs: {
                sortable: column.sort ? true : false,
                label: column.label,
                prop: column.prop
              }
            })
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Status", prop: "data.status" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-tag",
                      {
                        attrs: {
                          type:
                            scope.row.data.status === "pending"
                              ? "primary"
                              : scope.row.data.status === "rejected"
                                ? "danger"
                                : "success"
                        }
                      },
                      [_vm._v(_vm._s(scope.row.data.status))]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _vm.showEdit || _vm.showDelete
            ? _c("el-table-column", {
                attrs: { align: "right" },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(scope) {
                      return [
                        _c("el-input", {
                          attrs: {
                            size: "mini",
                            placeholder: "Type to search"
                          },
                          on: { input: _vm.search_ },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _vm.showEdit
                          ? _c(
                              "el-button",
                              {
                                attrs: { size: "mini" },
                                on: {
                                  click: function($event) {
                                    _vm.handleEdit(scope.$index, scope.row)
                                  }
                                }
                              },
                              [_vm._v("Edit\n                ")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.showDelete
                          ? _c(
                              "el-button",
                              {
                                attrs: { size: "mini", type: "danger" },
                                on: {
                                  click: function($event) {
                                    _vm.handleDelete(scope.$index, scope.row)
                                  }
                                }
                              },
                              [_vm._v("Delete\n                ")]
                            )
                          : _vm._e()
                      ]
                    }
                  }
                ])
              })
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("el-pagination", {
        attrs: {
          "current-page": _vm.data.current_page,
          "page-size": _vm.data.per_page,
          layout: "total, prev, pager, next, jumper",
          total: _vm.data.total
        },
        on: { "current-change": _vm.handleCurrentChange }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d2b0cba2", module.exports)
  }
}

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.transactions.length
              ? _c(
                  "div",
                  [_c("transaction", { attrs: { data$: _vm.transactions } })],
                  1
                )
              : _c("div", [
                  _vm._v(
                    "\n                        You don't have any data\n                    "
                  )
                ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.transactions.length
              ? _c(
                  "div",
                  [_c("product", { attrs: { data$: _vm.transactions } })],
                  1
                )
              : _c("div", [
                  _vm._v(
                    "\n                        You don't have any data\n                    "
                  )
                ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.notifications
              ? _c(
                  "div",
                  [
                    _vm.notifications.data
                      ? _c("notifications", {
                          attrs: {
                            columns: _vm.columns,
                            data: _vm.notifications,
                            "show-edit": false,
                            "show-create": false,
                            "show-delete": false
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              : _c("div", [
                  _vm._v(
                    "\n                        You don't have any data\n                    "
                  )
                ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header d-flex p-0 ui-sortable-handle",
        staticStyle: { cursor: "move" }
      },
      [
        _c("h3", { staticClass: "card-title p-3" }, [
          _c("i", { staticClass: "fa fa-pie-chart mr-1" }),
          _vm._v("\n                        Transactions")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header d-flex p-0 ui-sortable-handle",
        staticStyle: { cursor: "move" }
      },
      [
        _c("h3", { staticClass: "card-title p-3" }, [
          _c("i", { staticClass: "fa fa-pie-chart mr-1" }),
          _vm._v("\n                        Products\n                    ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header d-flex p-0 ui-sortable-handle",
        staticStyle: { cursor: "move" }
      },
      [
        _c("h3", { staticClass: "card-title p-3" }, [
          _c("i", { staticClass: "fa fa-pie-chart mr-1" }),
          _vm._v("\n                        Notifications")
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a9d63220", module.exports)
  }
}

/***/ })

});