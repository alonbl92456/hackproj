webpackJsonp([14],{

/***/ "./src/views/Buttons/Buttons/Buttons.js":
/*!**********************************************!*\
  !*** ./src/views/Buttons/Buttons/Buttons.js ***!
  \**********************************************/
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




var Buttons = function (_Component) {
  _inherits(Buttons, _Component);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  _createClass(Buttons, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Standard Buttons'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Normal'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'primary' },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'secondary' },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'success' },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'warning' },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'danger' },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'info' },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'light' },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'dark' },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'link' },
                  'Link'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Active State'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'primary', 'aria-pressed': 'true' },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'secondary', 'aria-pressed': 'true' },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'success', 'aria-pressed': 'true' },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'warning', 'aria-pressed': 'true' },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'danger', 'aria-pressed': 'true' },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'info', 'aria-pressed': 'true' },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'light', 'aria-pressed': 'true' },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'dark', 'aria-pressed': 'true' },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'link', 'aria-pressed': 'true' },
                  'Link'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Disabled'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'primary', disabled: true },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'secondary', disabled: true },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'success', disabled: true },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'warning', disabled: true },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'danger', disabled: true },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'info', disabled: true },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'light', disabled: true },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'dark', disabled: true },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'link', disabled: true },
                  'Link'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Outline Buttons'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Use ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'code',
                null,
                'outline'
              ),
              ' prop'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Normal'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'primary' },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'secondary' },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'success' },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'warning' },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'danger' },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'info' },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'light' },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'dark' },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */], { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Active State'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, active: true, color: 'primary', 'aria-pressed': 'true' },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, active: true, color: 'secondary', 'aria-pressed': 'true' },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, active: true, color: 'success', 'aria-pressed': 'true' },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, active: true, color: 'warning', 'aria-pressed': 'true' },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, active: true, color: 'danger', 'aria-pressed': 'true' },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, active: true, color: 'info', 'aria-pressed': 'true' },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, active: true, color: 'light', 'aria-pressed': 'true' },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, active: true, color: 'dark', 'aria-pressed': 'true' },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */], { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Disabled'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'primary', disabled: true },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'secondary', disabled: true },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'success', disabled: true },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'warning', disabled: true },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'danger', disabled: true },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'info', disabled: true },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'light', disabled: true },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, outline: true, color: 'dark', disabled: true },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */], { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Ghost Buttons'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Use',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'code',
                null,
                '.btn-ghost-*'
              ),
              ' class for ghost buttons.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Normal'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-primary' },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-secondary' },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-success' },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-warning' },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-danger' },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-info' },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-light' },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-dark' },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */], { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Active State'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, active: true, color: 'ghost-primary', 'aria-pressed': 'true' },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, active: true, color: 'ghost-secondary', 'aria-pressed': 'true' },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, active: true, color: 'ghost-success', 'aria-pressed': 'true' },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, active: true, color: 'ghost-warning', 'aria-pressed': 'true' },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, active: true, color: 'ghost-danger', 'aria-pressed': 'true' },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, active: true, color: 'ghost-info', 'aria-pressed': 'true' },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, active: true, color: 'ghost-light', 'aria-pressed': 'true' },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, active: true, color: 'ghost-dark', 'aria-pressed': 'true' },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */], { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Disabled'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-primary', disabled: true },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-secondary', disabled: true },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-success', disabled: true },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-warning', disabled: true },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-danger', disabled: true },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-info', disabled: true },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-light', disabled: true },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'ghost-dark', disabled: true },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */], { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Square Buttons'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Use',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'code',
                null,
                '.btn-square'
              ),
              ' class for square buttons.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Normal'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'primary', className: 'btn-square' },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'secondary', className: 'btn-square' },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'success', className: 'btn-square' },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'warning', className: 'btn-square' },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'danger', className: 'btn-square' },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'info', className: 'btn-square' },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'light', className: 'btn-square' },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'dark', className: 'btn-square' },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'link', className: 'btn-square' },
                  'Link'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Active State'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'primary', className: 'btn-square', 'aria-pressed': 'true' },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'secondary', className: 'btn-square', 'aria-pressed': 'true' },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'success', className: 'btn-square', 'aria-pressed': 'true' },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'warning', className: 'btn-square', 'aria-pressed': 'true' },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'danger', className: 'btn-square', 'aria-pressed': 'true' },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'info', className: 'btn-square', 'aria-pressed': 'true' },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'light', className: 'btn-square', 'aria-pressed': 'true' },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'dark', className: 'btn-square', 'aria-pressed': 'true' },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'link', className: 'btn-square', 'aria-pressed': 'true' },
                  'Link'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Disabled'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'primary', className: 'btn-square', disabled: true },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'secondary', className: 'btn-square', disabled: true },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'success', className: 'btn-square', disabled: true },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'warning', className: 'btn-square', disabled: true },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'danger', className: 'btn-square', disabled: true },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'info', className: 'btn-square', disabled: true },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'light', className: 'btn-square', disabled: true },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'dark', className: 'btn-square', disabled: true },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'link', className: 'btn-square', disabled: true },
                  'Link'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Pill Buttons'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Use',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'code',
                null,
                '.btn-pill'
              ),
              ' class for pill buttons.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Normal'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'primary', className: 'btn-pill' },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'secondary', className: 'btn-pill' },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'success', className: 'btn-pill' },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'warning', className: 'btn-pill' },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'danger', className: 'btn-pill' },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'info', className: 'btn-pill' },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'light', className: 'btn-pill' },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'dark', className: 'btn-pill' },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'link', className: 'btn-pill' },
                  'Link'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Active State'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'primary', className: 'btn-pill', 'aria-pressed': 'true' },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'secondary', className: 'btn-pill', 'aria-pressed': 'true' },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'success', className: 'btn-pill', 'aria-pressed': 'true' },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'warning', className: 'btn-pill', 'aria-pressed': 'true' },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'danger', className: 'btn-pill', 'aria-pressed': 'true' },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'info', className: 'btn-pill', 'aria-pressed': 'true' },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'light', className: 'btn-pill', 'aria-pressed': 'true' },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'dark', className: 'btn-pill', 'aria-pressed': 'true' },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { active: true, block: true, color: 'link', className: 'btn-pill', 'aria-pressed': 'true' },
                  'Link'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '12', xl: true, className: 'mb-3 mb-xl-0' },
                'Disabled'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'primary', className: 'btn-pill', disabled: true },
                  'Primary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'secondary', className: 'btn-pill', disabled: true },
                  'Secondary'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'success', className: 'btn-pill', disabled: true },
                  'Success'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'warning', className: 'btn-pill', disabled: true },
                  'Warning'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'danger', className: 'btn-pill', disabled: true },
                  'Danger'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'info', className: 'btn-pill', disabled: true },
                  'Info'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'light', className: 'btn-pill', disabled: true },
                  'Light'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'dark', className: 'btn-pill', disabled: true },
                  'Dark'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '6', sm: '4', md: '2', xl: true, className: 'mb-3 mb-xl-0' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { block: true, color: 'link', className: 'btn-pill', disabled: true },
                  'Link'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Sizes'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Fancy larger or smaller buttons? Add ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'code',
                null,
                'size="lg"'
              ),
              ' or ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'code',
                null,
                'size="sm"'
              ),
              ' for additional sizes.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', xl: true, className: 'mb-3 mb-xl-0' },
                'Small'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'primary', size: 'sm' },
                  'Standard Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'secondary', outline: true, size: 'sm' },
                  'Outline Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { size: 'sm', color: 'ghost-success' },
                  'Ghost Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'warning', size: 'sm', className: 'btn-square' },
                  'Square Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'danger', size: 'sm', className: 'btn-pill' },
                  'Pill Button'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', xl: true, className: 'mb-3 mb-xl-0' },
                'Normal'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'primary' },
                  'Standard Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { outline: true, color: 'secondary' },
                  'Outline Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'ghost-success' },
                  'Ghost Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'warning', className: 'btn-square' },
                  'Square Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'danger', className: 'btn-pill' },
                  'Pill Button'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', xl: true, className: 'mb-3 mb-xl-0' },
                'Large'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'primary', size: 'lg' },
                  'Standard Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { outline: true, color: 'secondary', size: 'lg' },
                  'Outline Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'ghost-success', size: 'lg' },
                  'Ghost Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'warning', size: 'lg', className: 'btn-square' },
                  'Square Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { col: '2', className: 'mb-3 mb-xl-0 text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'danger', size: 'lg', className: 'btn-pill' },
                  'Pill Button'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'With Icons'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
              { className: 'align-items-center mt-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { sm: true, xs: '12', className: 'text-center mt-3' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'primary' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-lightbulb-o' }),
                  '\xA0Standard Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { sm: true, xs: '12', className: 'text-center mt-3' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'secondary', outline: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-lightbulb-o' }),
                  '\xA0Outline Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { sm: true, xs: '12', className: 'text-center mt-3' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'ghost-success' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-lightbulb-o' }),
                  '\xA0Ghost Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { sm: true, xs: '12', className: 'text-center mt-3' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'warning', className: 'btn-square' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-lightbulb-o' }),
                  '\xA0Square Button'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                { sm: true, xs: '12', className: 'text-center mt-3' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'danger', className: 'btn-pill' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-lightbulb-o' }),
                  '\xA0Pill Button'
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
            { xs: '12', md: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Block Level Buttons'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Add prop ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    'block'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'secondary', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'primary', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'success', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'info', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'warning', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'danger', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'link', size: 'lg', block: true },
                  'Block level button'
                )
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Block Level Buttons'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Add prop ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    'block'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { outline: true, color: 'secondary', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { outline: true, color: 'primary', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { outline: true, color: 'success', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { outline: true, color: 'info', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { outline: true, color: 'warning', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { outline: true, color: 'danger', size: 'lg', block: true },
                  'Block level button'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'ghost-info', size: 'lg', block: true },
                  'Block level button'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Buttons;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ })

});
//# sourceMappingURL=14.chunk.js.map