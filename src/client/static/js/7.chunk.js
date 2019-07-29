webpackJsonp([7],{

/***/ "./src/views/Notifications/Modals/Modals.js":
/*!**************************************************!*\
  !*** ./src/views/Notifications/Modals/Modals.js ***!
  \**************************************************/
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




var Modals = function (_Component) {
  _inherits(Modals, _Component);

  function Modals(props) {
    _classCallCheck(this, Modals);

    var _this = _possibleConstructorReturn(this, (Modals.__proto__ || Object.getPrototypeOf(Modals)).call(this, props));

    _this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false
    };

    _this.toggle = _this.toggle.bind(_this);
    _this.toggleLarge = _this.toggleLarge.bind(_this);
    _this.toggleSmall = _this.toggleSmall.bind(_this);
    _this.togglePrimary = _this.togglePrimary.bind(_this);
    _this.toggleSuccess = _this.toggleSuccess.bind(_this);
    _this.toggleWarning = _this.toggleWarning.bind(_this);
    _this.toggleDanger = _this.toggleDanger.bind(_this);
    _this.toggleInfo = _this.toggleInfo.bind(_this);
    return _this;
  }

  _createClass(Modals, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: 'toggleLarge',
    value: function toggleLarge() {
      this.setState({
        large: !this.state.large
      });
    }
  }, {
    key: 'toggleSmall',
    value: function toggleSmall() {
      this.setState({
        small: !this.state.small
      });
    }
  }, {
    key: 'togglePrimary',
    value: function togglePrimary() {
      this.setState({
        primary: !this.state.primary
      });
    }
  }, {
    key: 'toggleSuccess',
    value: function toggleSuccess() {
      this.setState({
        success: !this.state.success
      });
    }
  }, {
    key: 'toggleWarning',
    value: function toggleWarning() {
      this.setState({
        warning: !this.state.warning
      });
    }
  }, {
    key: 'toggleDanger',
    value: function toggleDanger() {
      this.setState({
        danger: !this.state.danger
      });
    }
  }, {
    key: 'toggleInfo',
    value: function toggleInfo() {
      this.setState({
        info: !this.state.info
      });
    }
  }, {
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
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
                ' Bootstrap Modals'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { onClick: this.toggle, className: 'mr-1' },
                  'Launch demo modal'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["Q" /* Modal */],
                  { isOpen: this.state.modal, toggle: this.toggle, className: this.props.className },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["T" /* ModalHeader */],
                    { toggle: this.toggle },
                    'Modal title'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["R" /* ModalBody */],
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["S" /* ModalFooter */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'primary', onClick: this.toggle },
                      'Do Something'
                    ),
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'secondary', onClick: this.toggle },
                      'Cancel'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { onClick: this.toggleLarge, className: 'mr-1' },
                  'Launch large modal'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["Q" /* Modal */],
                  { isOpen: this.state.large, toggle: this.toggleLarge,
                    className: 'modal-lg ' + this.props.className },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["T" /* ModalHeader */],
                    { toggle: this.toggleLarge },
                    'Modal title'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["R" /* ModalBody */],
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["S" /* ModalFooter */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'primary', onClick: this.toggleLarge },
                      'Do Something'
                    ),
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'secondary', onClick: this.toggleLarge },
                      'Cancel'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { onClick: this.toggleSmall, className: 'mr-1' },
                  'Launch small modal'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["Q" /* Modal */],
                  { isOpen: this.state.small, toggle: this.toggleSmall,
                    className: 'modal-sm ' + this.props.className },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["T" /* ModalHeader */],
                    { toggle: this.toggleSmall },
                    'Modal title'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["R" /* ModalBody */],
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["S" /* ModalFooter */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'primary', onClick: this.toggleSmall },
                      'Do Something'
                    ),
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'secondary', onClick: this.toggleSmall },
                      'Cancel'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'primary', onClick: this.togglePrimary, className: 'mr-1' },
                  'Primary modal'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["Q" /* Modal */],
                  { isOpen: this.state.primary, toggle: this.togglePrimary,
                    className: 'modal-primary ' + this.props.className },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["T" /* ModalHeader */],
                    { toggle: this.togglePrimary },
                    'Modal title'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["R" /* ModalBody */],
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["S" /* ModalFooter */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'primary', onClick: this.togglePrimary },
                      'Do Something'
                    ),
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'secondary', onClick: this.togglePrimary },
                      'Cancel'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'success', onClick: this.toggleSuccess, className: 'mr-1' },
                  'Success modal'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["Q" /* Modal */],
                  { isOpen: this.state.success, toggle: this.toggleSuccess,
                    className: 'modal-success ' + this.props.className },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["T" /* ModalHeader */],
                    { toggle: this.toggleSuccess },
                    'Modal title'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["R" /* ModalBody */],
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["S" /* ModalFooter */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'success', onClick: this.toggleSuccess },
                      'Do Something'
                    ),
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'secondary', onClick: this.toggleSuccess },
                      'Cancel'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'warning', onClick: this.toggleWarning, className: 'mr-1' },
                  'Warning modal'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["Q" /* Modal */],
                  { isOpen: this.state.warning, toggle: this.toggleWarning,
                    className: 'modal-warning ' + this.props.className },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["T" /* ModalHeader */],
                    { toggle: this.toggleWarning },
                    'Modal title'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["R" /* ModalBody */],
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["S" /* ModalFooter */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'warning', onClick: this.toggleWarning },
                      'Do Something'
                    ),
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'secondary', onClick: this.toggleWarning },
                      'Cancel'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'danger', onClick: this.toggleDanger, className: 'mr-1' },
                  'Danger modal'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["Q" /* Modal */],
                  { isOpen: this.state.danger, toggle: this.toggleDanger,
                    className: 'modal-danger ' + this.props.className },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["T" /* ModalHeader */],
                    { toggle: this.toggleDanger },
                    'Modal title'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["R" /* ModalBody */],
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["S" /* ModalFooter */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'danger', onClick: this.toggleDanger },
                      'Do Something'
                    ),
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'secondary', onClick: this.toggleDanger },
                      'Cancel'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                  { color: 'info', onClick: this.toggleInfo, className: 'mr-1' },
                  'Info modal'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["Q" /* Modal */],
                  { isOpen: this.state.info, toggle: this.toggleInfo,
                    className: 'modal-info ' + this.props.className },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["T" /* ModalHeader */],
                    { toggle: this.toggleInfo },
                    'Modal title'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["R" /* ModalBody */],
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_reactstrap__["S" /* ModalFooter */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'primary', onClick: this.toggleInfo },
                      'Do Something'
                    ),
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
                      { color: 'secondary', onClick: this.toggleInfo },
                      'Cancel'
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

  return Modals;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modals);

/***/ })

});
//# sourceMappingURL=7.chunk.js.map