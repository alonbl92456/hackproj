webpackJsonp([5],{

/***/ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@coreui/coreui/dist/js/coreui-utilities.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! exports used: getStyle, hexToRgba, rgbToHex */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * CoreUI v2.0.4 (https://coreui.io)
  * Copyright 2018 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.utilities = {})));
}(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.0.4): get-style.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var getCssCustomProperties = function getCssCustomProperties() {
    var cssCustomProperties = {};
    var sheets = document.styleSheets;
    var cssText = '';

    for (var i = sheets.length - 1; i > -1; i--) {
      var rules = sheets[i].cssRules;

      for (var j = rules.length - 1; j > -1; j--) {
        if (rules[j].selectorText === '.ie-custom-properties') {
          cssText = rules[j].cssText;
          break;
        }
      }

      if (cssText) {
        break;
      }
    }

    cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
    cssText.split(';').forEach(function (property) {
      if (property) {
        var name = property.split(': ')[0];
        var value = property.split(': ')[1];

        if (name && value) {
          cssCustomProperties["--" + name.trim()] = value.trim();
        }
      }
    });
    return cssCustomProperties;
  };

  var minIEVersion = 10;

  var isIE1x = function isIE1x() {
    return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
  };

  var isCustomProperty = function isCustomProperty(property) {
    return property.match(/^--.*/i);
  };

  var getStyle = function getStyle(property, element) {
    if (element === void 0) {
      element = document.body;
    }

    var style;

    if (isCustomProperty(property) && isIE1x()) {
      var cssCustomProperties = getCssCustomProperties();
      style = cssCustomProperties[property];
    } else {
      style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    }

    return style;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.0.4): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgb = function hexToRgb(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.0.4): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgba = function hexToRgba(color, opacity) {
    if (opacity === void 0) {
      opacity = 100;
    }

    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.0.4): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var rgbToHex = function rgbToHex(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    if (!rgb) {
      throw new Error(color + " is not a valid rgb color");
    }

    var r = "0" + parseInt(rgb[1], 10).toString(16);
    var g = "0" + parseInt(rgb[2], 10).toString(16);
    var b = "0" + parseInt(rgb[3], 10).toString(16);
    return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
  };

  exports.getStyle = getStyle;
  exports.hexToRgb = hexToRgb;
  exports.hexToRgba = hexToRgba;
  exports.rgbToHex = rgbToHex;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=coreui-utilities.js.map


/***/ }),

/***/ "./src/views/Theme/Colors/Colors.js":
/*!******************************************!*\
  !*** ./src/views/Theme/Colors/Colors.js ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coreui_coreui_dist_js_coreui_utilities__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coreui_coreui_dist_js_coreui_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__coreui_coreui_dist_js_coreui_utilities__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ThemeView = function (_Component) {
  _inherits(ThemeView, _Component);

  function ThemeView(props) {
    _classCallCheck(this, ThemeView);

    var _this = _possibleConstructorReturn(this, (ThemeView.__proto__ || Object.getPrototypeOf(ThemeView)).call(this, props));

    _this.state = {
      bgColor: 'rgb(255, 255, 255)'
    };
    return _this;
  }

  _createClass(ThemeView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var elem = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this).parentNode.firstChild;
      var color = window.getComputedStyle(elem).getPropertyValue('background-color');
      this.setState({
        bgColor: color || this.state.bgColor
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'table',
        { className: 'w-100' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'tbody',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tr',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'td',
              { className: 'text-muted' },
              'HEX:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'td',
              { className: 'font-weight-bold' },
              Object(__WEBPACK_IMPORTED_MODULE_4__coreui_coreui_dist_js_coreui_utilities__["rgbToHex"])(this.state.bgColor)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tr',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'td',
              { className: 'text-muted' },
              'RGB:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'td',
              { className: 'font-weight-bold' },
              this.state.bgColor
            )
          )
        )
      );
    }
  }]);

  return ThemeView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var ThemeColor = function (_Component2) {
  _inherits(ThemeColor, _Component2);

  function ThemeColor() {
    _classCallCheck(this, ThemeColor);

    return _possibleConstructorReturn(this, (ThemeColor.__proto__ || Object.getPrototypeOf(ThemeColor)).apply(this, arguments));
  }

  _createClass(ThemeColor, [{
    key: 'render',

    // constructor(props) {
    //   super(props);
    // }
    value: function render() {

      // const { className, children, ...attributes } = this.props
      var _props = this.props,
          className = _props.className,
          children = _props.children;


      var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'theme-color w-75 rounded mb-3');

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["u" /* Col */],
        { xl: '2', md: '4', sm: '6', xs: '12', className: 'mb-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes, style: { paddingTop: '75%' } }),
        children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ThemeView, null)
      );
    }
  }]);

  return ThemeColor;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Colors = function (_Component3) {
  _inherits(Colors, _Component3);

  function Colors() {
    _classCallCheck(this, Colors);

    return _possibleConstructorReturn(this, (Colors.__proto__ || Object.getPrototypeOf(Colors)).apply(this, arguments));
  }

  _createClass(Colors, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-drop' }),
            ' Theme colors'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_reactstrap__["_7" /* Row */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-primary' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Brand Primary Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-secondary' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Brand Secondary Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-success' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Brand Success Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-danger' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Brand Danger Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-warning' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Brand Warning Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-info' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Brand Info Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-light' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Brand Light Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-dark' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Brand Dark Color'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-drop' }),
            ' Grays'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_reactstrap__["_7" /* Row */],
              { className: 'mb-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-gray-100' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Gray 100 Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-gray-200' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Gray 200 Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-gray-300' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Gray 300 Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-gray-400' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Gray 400 Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-gray-500' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Gray 500 Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-gray-600' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Gray 600 Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-gray-700' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Gray 700 Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-gray-800' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Gray 800 Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-gray-900' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Gray 900 Color'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-drop' }),
            ' Additional colors'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_reactstrap__["_7" /* Row */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-blue' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Blue Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-light-blue' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Light Blue Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-indigo' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Indigo Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-purple' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Purple Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-pink' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Pink Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-red' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Red Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-orange' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Orange Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-yellow' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Yellow Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-green' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Green Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-teal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Teal Color'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ThemeColor,
                { className: 'bg-cyan' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h6',
                  null,
                  'Cyan Color'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Colors;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Colors);

/***/ })

});
//# sourceMappingURL=5.chunk.js.map