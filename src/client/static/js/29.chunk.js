webpackJsonp([29],{

/***/ "./src/views/Base/Forms/Forms.js":
/*!***************************************!*\
  !*** ./src/views/Base/Forms/Forms.js ***!
  \***************************************/
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




var Forms = function (_Component) {
  _inherits(Forms, _Component);

  function Forms(props) {
    _classCallCheck(this, Forms);

    var _this = _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.toggleFade = _this.toggleFade.bind(_this);
    _this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
    return _this;
  }

  _createClass(Forms, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ collapse: !this.state.collapse });
    }
  }, {
    key: 'toggleFade',
    value: function toggleFade() {
      this.setState(function (prevState) {
        return { fadeIn: !prevState };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', sm: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Credit Card'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  null,
                  ' Form'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                    { xs: '12' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'name' },
                        'Name'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'name', placeholder: 'Enter your name', required: true })
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                    { xs: '12' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'ccnumber' },
                        'Credit Card Number'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'ccnumber', placeholder: '0000 0000 0000 0000', required: true })
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                    { xs: '4' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'ccmonth' },
                        'Month'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */],
                        { type: 'select', name: 'ccmonth', id: 'ccmonth' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '1' },
                          '1'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '2' },
                          '2'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '3' },
                          '3'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '4' },
                          '4'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '5' },
                          '5'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '6' },
                          '6'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '7' },
                          '7'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '8' },
                          '8'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '9' },
                          '9'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '10' },
                          '10'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '11' },
                          '11'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '12' },
                          '12'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                    { xs: '4' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'ccyear' },
                        'Year'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */],
                        { type: 'select', name: 'ccyear', id: 'ccyear' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          null,
                          '2017'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          null,
                          '2018'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          null,
                          '2019'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          null,
                          '2020'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          null,
                          '2021'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          null,
                          '2022'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          null,
                          '2023'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          null,
                          '2024'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          null,
                          '2025'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          null,
                          '2026'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                    { xs: '4' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'cvv' },
                        'CVV/CVC'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'cvv', placeholder: '123', required: true })
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', sm: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Company'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  null,
                  ' Form'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                    { htmlFor: 'company' },
                    'Company'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'company', placeholder: 'Enter your company name' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                    { htmlFor: 'vat' },
                    'VAT'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'vat', placeholder: 'DE1234567890' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                    { htmlFor: 'street' },
                    'Street'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'street', placeholder: 'Enter street name' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                  { row: true, className: 'my-0' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                    { xs: '8' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'city' },
                        'City'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'city', placeholder: 'Enter your city' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                    { xs: '4' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'postal-code' },
                        'Postal Code'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'postal-code', placeholder: 'Postal Code' })
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                    { htmlFor: 'country' },
                    'Country'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'country', placeholder: 'Country name' })
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
                  'Basic Form'
                ),
                ' Elements'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post', encType: 'multipart/form-data', className: 'form-horizontal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        null,
                        'Static'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: 'form-control-static' },
                        'Username'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'text-input' },
                        'Text Input'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'text-input', name: 'text-input', placeholder: 'Text' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* FormText */],
                        { color: 'muted' },
                        'This is a help text'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'email-input' },
                        'Email Input'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'email-input', name: 'email-input', placeholder: 'Enter Email', autoComplete: 'email' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* FormText */],
                        { className: 'help-block' },
                        'Please enter your email'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'password-input' },
                        'Password'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'password', id: 'password-input', name: 'password-input', placeholder: 'Password', autoComplete: 'new-password' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* FormText */],
                        { className: 'help-block' },
                        'Please enter a complex password'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'date-input' },
                        'Date Input ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
                          null,
                          'NEW'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'date', id: 'date-input', name: 'date-input', placeholder: 'date' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'disabled-input' },
                        'Disabled Input'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'disabled-input', name: 'disabled-input', placeholder: 'Disabled', disabled: true })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'textarea-input' },
                        'Textarea'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'textarea', name: 'textarea-input', id: 'textarea-input', rows: '9',
                        placeholder: 'Content...' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'select' },
                        'Select'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */],
                        { type: 'select', name: 'select', id: 'select' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '0' },
                          'Please select'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '1' },
                          'Option #1'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '2' },
                          'Option #2'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '3' },
                          'Option #3'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'selectLg' },
                        'Select Large'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9', size: 'lg' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */],
                        { type: 'select', name: 'selectLg', id: 'selectLg', bsSize: 'lg' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '0' },
                          'Please select'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '1' },
                          'Option #1'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '2' },
                          'Option #2'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '3' },
                          'Option #3'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'selectSm' },
                        'Select Small'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */],
                        { type: 'select', name: 'selectSm', id: 'SelectLm', bsSize: 'sm' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '0' },
                          'Please select'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '1' },
                          'Option #1'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '2' },
                          'Option #2'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '3' },
                          'Option #3'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '4' },
                          'Option #4'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '5' },
                          'Option #5'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'disabledSelect' },
                        'Disabled Select'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */],
                        { type: 'select', name: 'disabledSelect', id: 'disabledSelect', disabled: true, autoComplete: 'name' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '0' },
                          'Please select'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '1' },
                          'Option #1'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '2' },
                          'Option #2'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '3' },
                          'Option #3'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'multiple-select' },
                        'Multiple select'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */],
                        { type: 'select', name: 'multiple-select', id: 'multiple-select', multiple: true },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '1' },
                          'Option #1'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '2' },
                          'Option #2'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '3' },
                          'Option #3'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '4' },
                          'Option #4'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '5' },
                          'Option #5'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '6' },
                          'Option #6'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '7' },
                          'Option #7'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '8' },
                          'Option #8'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '9' },
                          'Option #9'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: '10' },
                          'Option #10'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        null,
                        'Radios'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, className: 'radio' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'radio', id: 'radio1', name: 'radios', value: 'option1' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { check: true, className: 'form-check-label', htmlFor: 'radio1' },
                          'Option 1'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, className: 'radio' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'radio', id: 'radio2', name: 'radios', value: 'option2' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { check: true, className: 'form-check-label', htmlFor: 'radio2' },
                          'Option 2'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, className: 'radio' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'radio', id: 'radio3', name: 'radios', value: 'option3' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { check: true, className: 'form-check-label', htmlFor: 'radio3' },
                          'Option 3'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        null,
                        'Inline Radios'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, inline: true },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'radio', id: 'inline-radio1', name: 'inline-radios', value: 'option1' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { className: 'form-check-label', check: true, htmlFor: 'inline-radio1' },
                          'One'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, inline: true },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'radio', id: 'inline-radio2', name: 'inline-radios', value: 'option2' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { className: 'form-check-label', check: true, htmlFor: 'inline-radio2' },
                          'Two'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, inline: true },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'radio', id: 'inline-radio3', name: 'inline-radios', value: 'option3' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { className: 'form-check-label', check: true, htmlFor: 'inline-radio3' },
                          'Three'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        null,
                        'Checkboxes'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, className: 'checkbox' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'checkbox', id: 'checkbox1', name: 'checkbox1', value: 'option1' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { check: true, className: 'form-check-label', htmlFor: 'checkbox1' },
                          'Option 1'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, className: 'checkbox' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'checkbox', id: 'checkbox2', name: 'checkbox2', value: 'option2' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { check: true, className: 'form-check-label', htmlFor: 'checkbox2' },
                          'Option 2'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, className: 'checkbox' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'checkbox', id: 'checkbox3', name: 'checkbox3', value: 'option3' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { check: true, className: 'form-check-label', htmlFor: 'checkbox3' },
                          'Option 3'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        null,
                        'Inline Checkboxes'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, inline: true },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'checkbox', id: 'inline-checkbox1', name: 'inline-checkbox1', value: 'option1' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { className: 'form-check-label', check: true, htmlFor: 'inline-checkbox1' },
                          'One'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, inline: true },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'checkbox', id: 'inline-checkbox2', name: 'inline-checkbox2', value: 'option2' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { className: 'form-check-label', check: true, htmlFor: 'inline-checkbox2' },
                          'Two'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        { check: true, inline: true },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'form-check-input', type: 'checkbox', id: 'inline-checkbox3', name: 'inline-checkbox3', value: 'option3' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { className: 'form-check-label', check: true, htmlFor: 'inline-checkbox3' },
                          'Three'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'file-input' },
                        'File input'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'file', id: 'file-input', name: 'file-input' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'file-multiple-input' },
                        'Multiple File input'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'file', id: 'file-multiple-input', name: 'file-multiple-input', multiple: true })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true, hidden: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { className: 'custom-file', htmlFor: 'custom-file-input' },
                        'Custom file input'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { className: 'custom-file' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { className: 'custom-file', type: 'file', id: 'custom-file-input', name: 'file-input' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'custom-file-control' })
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'primary' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'reset', size: 'sm', color: 'danger' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
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
                  'Inline'
                ),
                ' Form'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post', inline: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { className: 'pr-1' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                      { htmlFor: 'exampleInputName2', className: 'pr-1' },
                      'Name'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'exampleInputName2', placeholder: 'Jane Doe', required: true })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { className: 'pr-1' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                      { htmlFor: 'exampleInputEmail2', className: 'pr-1' },
                      'Email'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'exampleInputEmail2', placeholder: 'jane.doe@example.com', required: true })
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'primary' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'reset', size: 'sm', color: 'danger' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
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
                  'Horizontal'
                ),
                ' Form'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post', className: 'form-horizontal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'hf-email' },
                        'Email'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'hf-email', name: 'hf-email', placeholder: 'Enter Email...', autoComplete: 'email' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* FormText */],
                        { className: 'help-block' },
                        'Please enter your email'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                        { htmlFor: 'hf-password' },
                        'Password'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '12', md: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'password', id: 'hf-password', name: 'hf-password', placeholder: 'Enter Password...', autoComplete: 'current-password' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* FormText */],
                        { className: 'help-block' },
                        'Please enter your password'
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'primary' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'reset', size: 'sm', color: 'danger' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
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
                  'Normal'
                ),
                ' Form'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                      { htmlFor: 'nf-email' },
                      'Email'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'nf-email', name: 'nf-email', placeholder: 'Enter Email..', autoComplete: 'email' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* FormText */],
                      { className: 'help-block' },
                      'Please enter your email'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                      { htmlFor: 'nf-password' },
                      'Password'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'password', id: 'nf-password', name: 'nf-password', placeholder: 'Enter Password..', autoComplete: 'current-password' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["F" /* FormText */],
                      { className: 'help-block' },
                      'Please enter your password'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'primary' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'reset', size: 'sm', color: 'danger' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Input ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Grid'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post', className: 'form-horizontal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '3' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-sm-3' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '4' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-sm-4' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '5' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-sm-5' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '6' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-sm-6' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '7' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-sm-7' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-sm-8' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '9' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-sm-9' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '10' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-sm-10' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '11' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-sm-11' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '12' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-sm-12' })
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'primary' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-user' }),
                  ' Login'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'reset', size: 'sm', color: 'danger' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Input ',
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
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post', className: 'form-horizontal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                      { sm: '5', size: 'sm', htmlFor: 'input-small' },
                      'Small Input'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '6' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { bsSize: 'sm', type: 'text', id: 'input-small', name: 'input-small', className: 'input-sm', placeholder: '.form-control-sm' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                      { sm: '5', htmlFor: 'input-normal' },
                      'Normal Input'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '6' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'input-normal', name: 'input-normal', placeholder: 'Normal' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                      { sm: '5', size: 'lg', htmlFor: 'input-large' },
                      'Large Input'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { sm: '6' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { bsSize: 'lg', type: 'text', id: 'input-large', name: 'input-large', className: 'input-lg', placeholder: '.form-control-lg' })
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'primary' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'reset', size: 'sm', color: 'danger' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
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
            { xs: '12', sm: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Validation feedback'
                ),
                ' Form'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                    { htmlFor: 'inputIsValid' },
                    'Input is valid'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', valid: true, id: 'inputIsValid' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* FormFeedback */],
                    { valid: true },
                    'Cool! Input is valid'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                    { htmlFor: 'inputIsInvalid' },
                    'Input is invalid'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', invalid: true, id: 'inputIsInvalid' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* FormFeedback */],
                    null,
                    'Houston, we have a problem...'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', sm: '6' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Validation feedback'
                ),
                ' Form'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { className: 'was-validated' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                      { htmlFor: 'inputSuccess2i' },
                      'Non-required input'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', className: 'form-control-success', id: 'inputSuccess2i' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* FormFeedback */],
                      { valid: true },
                      'Non-required'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                      { htmlFor: 'inputWarning2i' },
                      'Required input'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', className: 'form-control-warning', id: 'inputWarning2i', required: true }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* FormFeedback */],
                      { className: 'help-block' },
                      'Please provide a valid information'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["D" /* FormFeedback */],
                      { valid: true, className: 'help-block' },
                      'Input provided'
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
            { xs: '12', md: '4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Icon/Text'
                ),
                ' Groups'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post', className: 'form-horizontal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '12' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'prepend' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-user' })
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'input1-group1', name: 'input1-group1', placeholder: 'Username' })
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '12' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'input2-group1', name: 'input2-group1', placeholder: 'Email' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'append' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-envelope-o' })
                          )
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '12' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'prepend' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-euro' })
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'input3-group1', name: 'input3-group1', placeholder: '..' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'append' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                            null,
                            '.00'
                          )
                        )
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'success' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'reset', size: 'sm', color: 'danger' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Button'
                ),
                ' Groups'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post', className: 'form-horizontal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '12' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'prepend' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                            { type: 'button', color: 'primary' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-search' }),
                            ' Search'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'input1-group2', name: 'input1-group2', placeholder: 'Username' })
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '12' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'input2-group2', name: 'input2-group2', placeholder: 'Email' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'append' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                            { type: 'button', color: 'primary' },
                            'Submit'
                          )
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '12' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'prepend' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                            { type: 'button', color: 'primary' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-facebook' })
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'input3-group2', name: 'input3-group2', placeholder: 'Search' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'append' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                            { type: 'button', color: 'primary' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-twitter' })
                          )
                        )
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'success' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'reset', size: 'sm', color: 'danger' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', md: '4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Dropdowns'
                ),
                ' Groups'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { className: 'form-horizontal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '12' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'prepend' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* ButtonDropdown */],
                            { isOpen: this.state.first,
                              toggle: function toggle() {
                                _this2.setState({ first: !_this2.state.first });
                              } },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["A" /* DropdownToggle */],
                              { caret: true, color: 'primary' },
                              'Dropdown'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["z" /* DropdownMenu */],
                              { className: this.state.first ? 'show' : '' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Action'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Another Action'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Something else here'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */], { divider: true }),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Separated link'
                              )
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'input1-group3', name: 'input1-group3', placeholder: 'Username' })
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '12' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'input2-group3', name: 'input2-group3', placeholder: 'Email' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'append' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* ButtonDropdown */],
                            { isOpen: this.state.second,
                              toggle: function toggle() {
                                _this2.setState({ second: !_this2.state.second });
                              } },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["A" /* DropdownToggle */],
                              { caret: true, color: 'primary' },
                              'Dropdown'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["z" /* DropdownMenu */],
                              { className: this.state.second ? 'show' : '' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Action'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Another Action'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Something else here'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */], { divider: true }),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Separated link'
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '12' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'prepend' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* ButtonDropdown */],
                            { isOpen: this.state.third,
                              toggle: function toggle() {
                                _this2.setState({ third: !_this2.state.third });
                              } },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["A" /* DropdownToggle */],
                              { caret: true, color: 'primary' },
                              'Action'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["z" /* DropdownMenu */],
                              { className: this.state.third ? 'show' : '' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Action'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Another Action'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Something else here'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */], { divider: true }),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Separated link'
                              )
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'input3-group3', name: 'input3-group3', placeholder: '..' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                          { addonType: 'append' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* ButtonDropdown */],
                            { isOpen: this.state.fourth,
                              toggle: function toggle() {
                                _this2.setState({ fourth: !_this2.state.fourth });
                              } },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["A" /* DropdownToggle */],
                              { caret: true, color: 'primary' },
                              'Dropdown'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["z" /* DropdownMenu */],
                              { className: this.state.fourth ? 'show' : '' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Action'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Another Action'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Something else here'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */], { divider: true }),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["y" /* DropdownItem */],
                                null,
                                'Separated link'
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'success' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'reset', size: 'sm', color: 'danger' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
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
                'Use the grid for big devices!',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    '.col-lg-*'
                  ),
                  ' ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    '.col-md-*'
                  ),
                  ' ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    '.col-sm-*'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post', className: 'form-horizontal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-md-8' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '4' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-md-4' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '7' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-md-7' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '5' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-md-5' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '6' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-md-6' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '6' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-md-6' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '5' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-md-5' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '7' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-md-7' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '4' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-md-4' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { md: '8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-md-8' })
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'primary' },
                  'Action'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { size: 'sm', color: 'danger' },
                  'Action'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { size: 'sm', color: 'warning' },
                  'Action'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { size: 'sm', color: 'info' },
                  'Action'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { size: 'sm', color: 'success' },
                  'Action'
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
                'Input Grid for small devices!',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    null,
                    '.col-*'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post', className: 'form-horizontal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '4' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-4' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-8' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '5' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-5' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '7' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-7' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '6' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-6' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '6' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-6' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '7' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-5' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '5' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-5' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { row: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-8' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
                      { xs: '4' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', placeholder: '.col-4' })
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* CardFooter */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { type: 'submit', size: 'sm', color: 'primary' },
                  'Action'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { size: 'sm', color: 'danger' },
                  'Action'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { size: 'sm', color: 'warning' },
                  'Action'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { size: 'sm', color: 'info' },
                  'Action'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { size: 'sm', color: 'success' },
                  'Action'
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
            { xs: '12', sm: '4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Example Form'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'prepend' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          'Username'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'username3', name: 'username3', autoComplete: 'name' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'append' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-user' })
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'prepend' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          'Email'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'email3', name: 'email3', autoComplete: 'username' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'append' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-envelope' })
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'prepend' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          'Password'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'password', id: 'password3', name: 'password3', autoComplete: 'current-password' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'append' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-asterisk' })
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { className: 'form-actions' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { type: 'submit', size: 'sm', color: 'primary' },
                      'Submit'
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', sm: '4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Example Form'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'username2', name: 'username2', placeholder: 'Username', autoComplete: 'name' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'append' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-user' })
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'email2', name: 'email2', placeholder: 'Email', autoComplete: 'username' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'append' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-envelope' })
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'password', id: 'password2', name: 'password2', placeholder: 'Password', autoComplete: 'current-password' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'append' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-asterisk' })
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { className: 'form-actions' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { type: 'submit', size: 'sm', color: 'secondary' },
                      'Submit'
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xs: '12', sm: '4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                'Example Form'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                  { action: '', method: 'post' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'prepend' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-user' })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'text', id: 'username1', name: 'username1', placeholder: 'Username', autoComplete: 'name' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'prepend' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-envelope' })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'email', id: 'email1', name: 'email1', placeholder: 'Email', autoComplete: 'username' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                        { addonType: 'prepend' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                          null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-asterisk' })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { type: 'password', id: 'password1', name: 'password1', placeholder: 'Password', autoComplete: 'current-password' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                    { className: 'form-actions' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { type: 'submit', size: 'sm', color: 'success' },
                      'Submit'
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
            { xs: '12' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["B" /* Fade */],
              { timeout: this.state.timeout, 'in': this.state.fadeIn },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-edit' }),
                  'Form Elements',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-header-actions' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'link', className: 'card-header-action btn-setting' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-settings' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'link', className: 'card-header-action btn-minimize', 'data-target': '#collapseExample', onClick: this.toggle },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-arrow-up' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'link', className: 'card-header-action btn-close', onClick: this.toggleFade },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-close' })
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["v" /* Collapse */],
                  { isOpen: this.state.collapse, id: 'collapseExample' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["C" /* Form */],
                      { className: 'form-horizontal' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { htmlFor: 'prependedInput' },
                          'Prepended text'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'controls' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                            { className: 'input-prepend' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                              { addonType: 'prepend' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                                null,
                                '@'
                              )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { id: 'prependedInput', size: '16', type: 'text' })
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'p',
                            { className: 'help-block' },
                            'Here\'s some help text'
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { htmlFor: 'appendedInput' },
                          'Appended text'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'controls' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { id: 'appendedInput', size: '16', type: 'text' }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                              { addonType: 'append' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                                null,
                                '.00'
                              )
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'help-block' },
                            'Here\'s more help text'
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { htmlFor: 'appendedPrependedInput' },
                          'Append and prepend'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'controls' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                            { className: 'input-prepend' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                              { addonType: 'prepend' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                                null,
                                '$'
                              )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { id: 'appendedPrependedInput', size: '16', type: 'text' }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                              { addonType: 'append' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["J" /* InputGroupText */],
                                null,
                                '.00'
                              )
                            )
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { htmlFor: 'appendedInputButton' },
                          'Append with button'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'controls' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { id: 'appendedInputButton', size: '16', type: 'text' }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                              { addonType: 'append' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                                { color: 'secondary' },
                                'Go!'
                              )
                            )
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["E" /* FormGroup */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["L" /* Label */],
                          { htmlFor: 'appendedInputButtons' },
                          'Two-button append'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'controls' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["H" /* InputGroup */],
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["G" /* Input */], { id: 'appendedInputButtons', size: '16', type: 'text' }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["I" /* InputGroupAddon */],
                              { addonType: 'append' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                                { color: 'secondary' },
                                'Search'
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                                { color: 'secondary' },
                                'Options'
                              )
                            )
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-actions' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                          { type: 'submit', color: 'primary' },
                          'Save changes'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                          { color: 'secondary' },
                          'Cancel'
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

  return Forms;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

});
//# sourceMappingURL=29.chunk.js.map