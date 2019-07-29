webpackJsonp([21],{

/***/ "./src/views/Base/Switches/Switches.js":
/*!*********************************************!*\
  !*** ./src/views/Base/Switches/Switches.js ***!
  \*********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coreui_react__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Switches = function (_Component) {
  _inherits(Switches, _Component);

  function Switches() {
    _classCallCheck(this, Switches);

    return _possibleConstructorReturn(this, (Switches.__proto__ || Object.getPrototypeOf(Switches)).apply(this, arguments));
  }

  _createClass(Switches, [{
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
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch default'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'secondary', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'success', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'warning', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'info', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'danger', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'light', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'dark', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch pills'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'secondary', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'success', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'warning', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'info', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'danger', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'light', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'dark', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                '3d Switch'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary', defaultChecked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'secondary', defaultChecked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'success', defaultChecked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'warning', defaultChecked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'info', defaultChecked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'danger', defaultChecked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'light', defaultChecked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'dark', defaultChecked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                '3d Switch ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    'disabled'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary', checked: true, disabled: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'secondary', checked: true, disabled: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'success', checked: true, disabled: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'warning', checked: true, disabled: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'info', checked: true, disabled: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'danger', checked: true, disabled: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'light', checked: true, disabled: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'dark', checked: true, disabled: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary', disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                '3d Switch ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    'outline="alt"'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary', checked: true, outline: 'alt' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'secondary', checked: true, outline: 'alt' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'success', checked: true, outline: 'alt' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'warning', checked: true, outline: 'alt' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'info', checked: true, outline: 'alt' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'danger', checked: true, outline: 'alt' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'light', checked: true, outline: 'alt' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'dark', checked: true, outline: 'alt' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary', outline: 'alt', disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                '3d Switch ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    'label'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'secondary', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'success', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'warning', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'info', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'danger', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'light', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'dark', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary', label: true, dataOn: '\u2713', dataOff: '\u2715' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                '3d Switch ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    'outline="alt" label'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'primary', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'secondary', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'success', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'warning', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'info', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'danger', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'light', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'dark', defaultChecked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'primary', label: true, dataOn: '\u2713', dataOff: '\u2715' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                '3d Switch ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    'outline="alt" label'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'primary', defaultChecked: true, label: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'secondary', defaultChecked: true, label: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'success', defaultChecked: true, label: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'warning', defaultChecked: true, label: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'info', defaultChecked: true, label: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'danger', defaultChecked: true, label: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'light', defaultChecked: true, label: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'dark', defaultChecked: true, label: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', outline: 'alt', color: 'primary', label: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch outline'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'secondary', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'success', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'warning', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'info', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'danger', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'light', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'dark', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: true, disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch outline pills'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'secondary', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'success', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'warning', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'info', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'danger', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'light', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'dark', outline: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: true, disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch outline alternative'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'secondary', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'success', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'warning', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'info', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'danger', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'light', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'dark', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: 'alt', disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch outline alternative - pills'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'secondary', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'success', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'warning', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'info', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'danger', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'light', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'dark', outline: 'alt', checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: 'alt', disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch with text'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'secondary', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'success', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'warning', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'info', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'danger', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'light', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'dark', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', label: true, disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch with text pills'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'secondary', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'success', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'warning', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'info', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'danger', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'light', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'dark', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', label: true, disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch with text outline'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'secondary', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'success', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'warning', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'info', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'danger', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'light', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'dark', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: true, label: true, disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch with text outline pills'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'secondary', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'success', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'warning', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'info', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'danger', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'light', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'dark', outline: true, label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: true, label: true, disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch with text outline alternative pills'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'secondary', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'success', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'warning', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'info', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'danger', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'light', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'dark', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: 'alt', label: true, disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch with text outline alternative pills'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'secondary', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'success', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'warning', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'info', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'danger', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'light', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'dark', outline: 'alt', label: true, checked: true }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: 'alt', label: true, disabled: true })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch with text outline alternative'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'secondary', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'success', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'warning', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'info', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'danger', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'light', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'dark', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: true, disabled: true, label: true, dataOn: '\u2713', dataOff: '\u2715' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch with text outline alternative pills'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'secondary', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'success', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'warning', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'info', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'danger', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'light', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'dark', outline: true, checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: true, disabled: true, label: true, dataOn: '\u2713', dataOff: '\u2715' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch with text outline alternative'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'secondary', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'success', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'warning', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'info', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'danger', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'light', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'dark', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', color: 'primary', outline: 'alt', disabled: true, label: true, dataOn: '\u2713', dataOff: '\u2715' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Switch with text outline alternative pills'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'secondary', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'success', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'warning', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'info', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'danger', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'light', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'dark', outline: 'alt', checked: true, label: true, dataOn: '\u2713', dataOff: '\u2715' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: 'pill', color: 'primary', outline: 'alt', disabled: true, label: true, dataOn: '\u2713', dataOff: '\u2715' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Sizes'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                { className: 'p-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_10" /* Table */],
                  { hover: true, striped: true, className: 'table-align-middle mb-0' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Size'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Example'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        null,
                        'Props'
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
                        'Large'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary', checked: true, size: 'lg' })
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Add ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'code',
                          null,
                          'size=',
                          'lg'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Normal'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary', checked: true })
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        '-'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Small'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coreui_react__["o" /* AppSwitch */], { className: 'mx-1', variant: '3d', color: 'primary', checked: true, size: 'sm' })
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        'Add ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'code',
                          null,
                          'size=',
                          'sm'
                        )
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

  return Switches;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Switches);

/***/ })

});
//# sourceMappingURL=21.chunk.js.map