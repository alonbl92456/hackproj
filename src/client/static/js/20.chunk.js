webpackJsonp([20],{

/***/ "./src/views/Base/Tables/Tables.js":
/*!*****************************************!*\
  !*** ./src/views/Base/Tables/Tables.js ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Tables = function (_Component) {
  _inherits(Tables, _Component);

  function Tables() {
    _classCallCheck(this, Tables);

    return _possibleConstructorReturn(this, (Tables.__proto__ || Object.getPrototypeOf(Tables)).apply(this, arguments));
  }

  _createClass(Tables, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', lg: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
                ' Simple Table'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_10" /* Table */],
                  { responsive: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Username'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Date registered'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Role'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tbody',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Samppa Nori'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/01/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'success' },
                          'Active'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Estavan Lykos'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'danger' },
                          'Banned'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Chetan Mohamed'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Admin'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'secondary' },
                          'Inactive'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Derick Maximinus'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/03/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'warning' },
                          'Pending'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Friderik D\xE1vid'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/01/21'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'success' },
                          'Active'
                        )
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_0" /* Pagination */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */], { previous: true, tag: 'button' })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    { active: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '1'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '2'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '3'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '4'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */], { next: true, tag: 'button' })
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', lg: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
                ' Striped Table'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_10" /* Table */],
                  { responsive: true, striped: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Username'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Date registered'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Role'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tbody',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Yiorgos Avraamu'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/01/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'success' },
                          'Active'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Avram Tarasios'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'danger' },
                          'Banned'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Quintin Ed'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Admin'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'secondary' },
                          'Inactive'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'En\xE9as Kwadwo'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/03/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'warning' },
                          'Pending'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Agapetus Tade\xE1\u0161'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/01/21'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'success' },
                          'Active'
                        )
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_0" /* Pagination */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    { disabled: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { previous: true, tag: 'button' },
                      'Prev'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    { active: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '1'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '2'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '3'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '4'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { next: true, tag: 'button' },
                      'Next'
                    )
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', lg: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
                ' Condensed Table'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_10" /* Table */],
                  { responsive: true, size: 'sm' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Username'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Date registered'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Role'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tbody',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Carwyn Fachtna'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/01/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'success' },
                          'Active'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Nehemiah Tatius'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'danger' },
                          'Banned'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Ebbe Gemariah'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Admin'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'secondary' },
                          'Inactive'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Eustorgios Amulius'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/03/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'warning' },
                          'Pending'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Leopold G\xE1sp\xE1r'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/01/21'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'success' },
                          'Active'
                        )
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_0" /* Pagination */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { previous: true, tag: 'button' },
                      'Prev'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    { active: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '1'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '2'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '3'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '4'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { next: true, tag: 'button' },
                      'Next'
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', lg: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
                ' Bordered Table'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_10" /* Table */],
                  { responsive: true, bordered: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Username'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Date registered'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Role'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tbody',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Pompeius Ren\xE9'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/01/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'success' },
                          'Active'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Pa\u0109jo Jadon'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'danger' },
                          'Banned'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Micheal Mercurius'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Admin'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'secondary' },
                          'Inactive'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Ganesha Dubhghall'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/03/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'warning' },
                          'Pending'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Hiroto \u0160imun'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/01/21'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'success' },
                          'Active'
                        )
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_0" /* Pagination */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { previous: true, tag: 'button' },
                      'Prev'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    { active: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '1'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    { className: 'page-item' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '2'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '3'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { tag: 'button' },
                      '4'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                      { next: true, tag: 'button' },
                      'Next'
                    )
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
                ' Combined All Table'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_10" /* Table */],
                  { hover: true, bordered: true, striped: true, responsive: true, size: 'sm' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Username'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Date registered'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Role'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tbody',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Vishnu Serghei'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/01/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'success' },
                          'Active'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Zbyn\u011Bk Phoibos'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'danger' },
                          'Banned'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Einar Randall'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Admin'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'secondary' },
                          'Inactive'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'F\xE9lix Troels'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/03/01'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'warning' },
                          'Pending'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Aulus Agmundr'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '2012/01/21'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          { color: 'success' },
                          'Active'
                        )
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'nav',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_0" /* Pagination */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                        { previous: true, tag: 'button' },
                        'Prev'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                      { active: true },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                        { tag: 'button' },
                        '1'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                        { tag: 'button' },
                        '2'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                        { tag: 'button' },
                        '3'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                        { tag: 'button' },
                        '4'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_1" /* PaginationItem */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_2" /* PaginationLink */],
                        { next: true, tag: 'button' },
                        'Next'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Tables;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tables);

/***/ })

});
//# sourceMappingURL=20.chunk.js.map