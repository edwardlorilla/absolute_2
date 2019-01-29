webpackJsonp([10],{

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(922)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(924)
/* template */
var __vue_template__ = __webpack_require__(928)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Medicine\\view.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c7d31a8", Component.options)
  } else {
    hotAPI.reload("data-v-7c7d31a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(923);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("4d68c1b5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c7d31a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c7d31a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Grid = __webpack_require__(925);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            columns: [{
                label: 'Name',
                prop: 'name',
                sort: true
            }],
            data: []
        };
    },

    components: {
        GridView: _Grid2.default
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        axios.get('/api/medicines', { params: to.query }).then(function (response) {
            next(function (vm) {
                return vm.setData(response.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        axios.get('/api/medicines', { params: to.query }).then(function (response) {
            vm.setData(response.data);
            next();
        });
    },

    methods: {
        setData: function setData(response) {
            this.data = response;
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

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(926)
/* template */
var __vue_template__ = __webpack_require__(927)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Medicine\\Grid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd6c3926", Component.options)
  } else {
    hotAPI.reload("data-v-dd6c3926", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 926:
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
    props: {
        createName: String,
        onCreateName: String,
        onEditName: {
            type: String,
            required: true
        },
        onDelete: {
            type: String,
            required: true
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

/***/ 927:
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
      _vm.data
        ? _c(
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
              _vm._l(_vm.columns, function(column, index, key) {
                return _c("el-table-column", {
                  key:
                    index + "-" + key + "-" + column.prop + "-" + column.label,
                  attrs: {
                    sortable: column.sort ? true : false,
                    label: column.label,
                    prop: column.prop
                  }
                })
              }),
              _vm._v(" "),
              _c("el-table-column", {
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
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.data
        ? _c("el-pagination", {
            attrs: {
              "current-page": _vm.data.current_page,
              "page-size": _vm.data.per_page,
              layout: "total, prev, pager, next, jumper",
              total: _vm.data.total
            },
            on: { "current-change": _vm.handleCurrentChange }
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
    require("vue-hot-reload-api")      .rerender("data-v-dd6c3926", module.exports)
  }
}

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("grid-view", {
        attrs: {
          columns: _vm.columns,
          data: _vm.data.model,
          "create-name": "Add Medicine",
          "on-delete": "/api/medicines",
          "on-edit-name": "edit-medicine",
          "on-create-name": "create-medicine"
        },
        on: {
          delete: function($event) {
            _vm.data.model.data.splice($event, 1)
          }
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-7c7d31a8", module.exports)
  }
}

/***/ })

});