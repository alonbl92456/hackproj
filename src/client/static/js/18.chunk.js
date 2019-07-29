webpackJsonp([18],{

/***/ "./src/views/Base/Tooltips/Tooltips.js":
/*!*********************************************!*\
  !*** ./src/views/Base/Tooltips/Tooltips.js ***!
  \*********************************************/
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




var TooltipItem = function (_React$Component) {
  _inherits(TooltipItem, _React$Component);

  function TooltipItem(props) {
    _classCallCheck(this, TooltipItem);

    var _this = _possibleConstructorReturn(this, (TooltipItem.__proto__ || Object.getPrototypeOf(TooltipItem)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      tooltipOpen: false
    };
    return _this;
  }

  _createClass(TooltipItem, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Button */],
          { className: 'mr-1', color: 'secondary', id: 'Tooltip-' + this.props.id },
          this.props.item.text
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_11" /* Tooltip */],
          { placement: this.props.item.placement, isOpen: this.state.tooltipOpen, target: 'Tooltip-' + this.props.id, toggle: this.toggle },
          'Tooltip Content!'
        )
      );
    }
  }]);

  return TooltipItem;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Tooltips = function (_Component) {
  _inherits(Tooltips, _Component);

  function Tooltips(props) {
    _classCallCheck(this, Tooltips);

    var _this2 = _possibleConstructorReturn(this, (Tooltips.__proto__ || Object.getPrototypeOf(Tooltips)).call(this, props));

    _this2.toggle = _this2.toggle.bind(_this2);
    _this2.state = {
      tooltipOpen: [false, false],
      tooltips: [{
        placement: 'top',
        text: 'Top'
      }, {
        placement: 'bottom',
        text: 'Bottom'
      }, {
        placement: 'left',
        text: 'Left'
      }, {
        placement: 'right',
        text: 'Right'
      }]
    };
    return _this2;
  }

  _createClass(Tooltips, [{
    key: 'toggle',
    value: function toggle(i) {
      var newArray = this.state.tooltipOpen.map(function (element, index) {
        return index === i ? !element : false;
      });
      this.setState({
        tooltipOpen: newArray
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Tooltips'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'card-header-actions' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'https://reactstrap.github.io/components/tooltips/', rel: 'noreferrer noopener', target: '_blank', className: 'card-header-action' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  { className: 'text-muted' },
                  'docs'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Somewhere in here is a ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '#', id: 'TooltipExample' },
                'tooltip'
              ),
              '.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_11" /* Tooltip */],
              { placement: 'right', isOpen: this.state.tooltipOpen[0], target: 'TooltipExample', toggle: function toggle() {
                  _this3.toggle(0);
                } },
              'Hello world!'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Tooltip'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'small',
              null,
              ' disable autohide'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Sometimes you need to allow users to select text within a ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '#', id: 'DisabledAutoHideExample' },
                'tooltip'
              ),
              '.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_11" /* Tooltip */],
              { placement: 'top', isOpen: this.state.tooltipOpen[1], autohide: false, target: 'DisabledAutoHideExample', toggle: function toggle() {
                  _this3.toggle(1);
                } },
              'Try to select this text!'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Tooltip'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'small',
              null,
              ' list'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            this.state.tooltips.map(function (tooltip, i) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TooltipItem, { key: i, item: tooltip, id: i });
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Tooltip'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'small',
              null,
              ' uncontrolled'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Somewhere in here is a ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '#', id: 'UncontrolledTooltipExample' },
                'tooltip'
              ),
              '.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_13" /* UncontrolledTooltip */],
              { placement: 'right', target: 'UncontrolledTooltipExample' },
              'Hello world!'
            )
          )
        )
      );
    }
  }]);

  return Tooltips;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tooltips);

/***/ })

});
//# sourceMappingURL=18.chunk.js.map