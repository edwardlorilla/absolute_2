webpackJsonp([2],{

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(929)
/* template */
var __vue_template__ = __webpack_require__(930)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Medicine\\create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56936a43", Component.options)
  } else {
    hotAPI.reload("data-v-56936a43", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 929:
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

exports.default = {
    data: function data() {
        return {
            form: {
                name: ''
            },
            errors: {},
            loading: false,
            disabled: false
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        if (to.params.id) {
            axios.get('/api/medicines/' + to.params.id).then(function (response) {
                next(function (vm) {
                    return vm.setData(response.data);
                });
            }).catch(function (error) {
                if (error.response.statusText) {
                    next(function (vm) {
                        return vm.$message({
                            type: 'error',
                            message: error.response.statusText
                        });
                    });
                }
            });
        } else {
            next();
        }
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        if (to.params.id) {
            axios.get('/api/medicines/' + to.params.id).then(function (response) {
                vm.setData(response.data);
                next();
            }).catch(function (error) {
                if (error.response.statusText) {
                    vm.$message({
                        type: 'error',
                        message: error.response.statusText
                    });
                }
            });
        } else {
            next();
        }
    },

    methods: {
        setData: function setData(response) {
            this.form = response;
        },
        onCancel: function onCancel() {
            this.$router.push({ name: 'view-medicine' });
        },
        onSubmit: function onSubmit() {
            var vm = this;
            this.$refs.form.validate(function (valid) {
                if (valid) {
                    vm.disabled = true;
                    vm.errors = {};
                    var id = vm.$route.params.id;
                    axios[id ? 'put' : 'post']('/api/medicines' + (id ? '/' + id : ''), vm.form).then(function () {
                        vm.disabled = false;
                        vm.$message({
                            type: 'success',
                            message: 'Generic Medicine ' + (id ? 'has been updated' : 'has been created')
                        });
                    }).catch(function (error) {
                        vm.disabled = false;
                        if (error.response.data.errors && error.response.data.message) {
                            vm.errors = error.response.data.errors;
                            vm.$message({ message: error.response.data.message, type: 'error' });
                        }
                    });
                }
            });
        }
    }
};

/***/ }),

/***/ 930:
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
          _c(
            "el-col",
            { attrs: { span: 24 } },
            [
              _c(
                "el-card",
                { attrs: { shadow: "never" } },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.$route.params.id ? "Edit" : "Create") +
                          " Generic Medicine"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-form",
                    {
                      ref: "form",
                      attrs: { model: _vm.form, "label-width": "120px" },
                      nativeOn: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          class: _vm.errors.name ? "is-error is-required" : "",
                          attrs: { label: "Name", prop: "name" }
                        },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "Enter Name",
                              type: "text",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.name, function(error) {
                            return _vm.errors.name
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-button",
                            {
                              attrs: {
                                disabled: _vm.disabled,
                                type: "primary"
                              },
                              on: {
                                click: function($event) {
                                  _vm.onSubmit("form")
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$route.params.id ? "Edit" : "Create"
                                ) +
                                  " Generic Medicine\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("el-button", { on: { click: _vm.onCancel } }, [
                            _vm._v("Cancel")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-56936a43", module.exports)
  }
}

/***/ })

});