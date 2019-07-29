webpackJsonp([6],{

/***/ "./src/views/Theme/Typography/Typography.js":
/*!**************************************************!*\
  !*** ./src/views/Theme/Typography/Typography.js ***!
  \**************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Typography = function (_Component) {
  _inherits(Typography, _Component);

  function Typography() {
    _classCallCheck(this, Typography);

    return _possibleConstructorReturn(this, (Typography.__proto__ || Object.getPrototypeOf(Typography)).apply(this, arguments));
  }

  _createClass(Typography, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "animated fadeIn" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "card" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-header" },
            "Headings"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-body" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "p",
              null,
              "Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "table",
              { className: "table" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "thead",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "tr",
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "th",
                    null,
                    "Heading"
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "th",
                    null,
                    "Example"
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "tbody",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "tr",
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "p",
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "code",
                        { className: "highlighter-rouge" },
                        "<h1></h1>"
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "span",
                      { className: "h1" },
                      "h1. Bootstrap heading"
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "tr",
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "p",
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "code",
                        { className: "highlighter-rouge" },
                        "<h2></h2>"
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "span",
                      { className: "h2" },
                      "h2. Bootstrap heading"
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "tr",
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "p",
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "code",
                        { className: "highlighter-rouge" },
                        "<h3></h3>"
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "span",
                      { className: "h3" },
                      "h3. Bootstrap heading"
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "tr",
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "p",
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "code",
                        { className: "highlighter-rouge" },
                        "<h4></h4>"
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "span",
                      { className: "h4" },
                      "h4. Bootstrap heading"
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "tr",
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "p",
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "code",
                        { className: "highlighter-rouge" },
                        "<h5></h5>"
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "span",
                      { className: "h5" },
                      "h5. Bootstrap heading"
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "tr",
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "p",
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "code",
                        { className: "highlighter-rouge" },
                        "<h6></h6>"
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "td",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "span",
                      { className: "h6" },
                      "h6. Bootstrap heading"
                    )
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "card" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-header" },
            "Headings"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-body" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "p",
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "code",
                { className: "highlighter-rouge" },
                ".h1"
              ),
              " through ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "code",
                { className: "highlighter-rouge" },
                ".h6"
              ),
              " classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "bd-example" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { className: "h1" },
                "h1. Bootstrap heading"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { className: "h2" },
                "h2. Bootstrap heading"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { className: "h3" },
                "h3. Bootstrap heading"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { className: "h4" },
                "h4. Bootstrap heading"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { className: "h5" },
                "h5. Bootstrap heading"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { className: "h6" },
                "h6. Bootstrap heading"
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "card" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-header" },
            "Display headings"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-body" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "p",
              null,
              "Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "strong",
                null,
                "display heading"
              ),
              "\u2014a larger, slightly more opinionated heading style."
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "bd-example bd-example-type" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "table",
                { className: "table" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "tbody",
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "tr",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "td",
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "display-1" },
                        "Display 1"
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "tr",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "td",
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "display-2" },
                        "Display 2"
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "tr",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "td",
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "display-3" },
                        "Display 3"
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "tr",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "td",
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "display-4" },
                        "Display 4"
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "card" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-header" },
            "Inline text elements"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-body" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "p",
              null,
              "Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "strong",
                null,
                "display heading"
              ),
              "\u2014a larger, slightly more opinionated heading style."
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "bd-example" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                "You can use the mark tag to ",
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "mark",
                  null,
                  "highlight"
                ),
                " text."
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "del",
                  null,
                  "This line of text is meant to be treated as deleted text."
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "s",
                  null,
                  "This line of text is meant to be treated as no longer accurate."
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "ins",
                  null,
                  "This line of text is meant to be treated as an addition to the document."
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "u",
                  null,
                  "This line of text will render as underlined"
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "small",
                  null,
                  "This line of text is meant to be treated as fine print."
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "strong",
                  null,
                  "This line rendered as bold text."
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "em",
                  null,
                  "This line rendered as italicized text."
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "card" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-header" },
            "Description list alignment"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-body" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "p",
              null,
              "Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "code",
                { className: "highlighter-rouge" },
                ".text-truncate"
              ),
              " class to truncate the text with an ellipsis."
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "bd-example" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dl",
                { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "dt",
                  { className: "col-sm-3" },
                  "Description lists"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "dd",
                  { className: "col-sm-9" },
                  "A description list is perfect for defining terms."
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "dt",
                  { className: "col-sm-3" },
                  "Euismod"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "dd",
                  { className: "col-sm-9" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    null,
                    "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    null,
                    "Donec id elit non mi porta gravida at eget metus."
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "dt",
                  { className: "col-sm-3" },
                  "Malesuada porta"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "dd",
                  { className: "col-sm-9" },
                  "Etiam porta sem malesuada magna mollis euismod."
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "dt",
                  { className: "col-sm-3 text-truncate" },
                  "Truncated term is truncated"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "dd",
                  { className: "col-sm-9" },
                  "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "dt",
                  { className: "col-sm-3" },
                  "Nesting"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "dd",
                  { className: "col-sm-9" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "dl",
                    { className: "row" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "dt",
                      { className: "col-sm-4" },
                      "Nested definition list"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "dd",
                      { className: "col-sm-8" },
                      "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."
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

  return Typography;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ })

});
//# sourceMappingURL=6.chunk.js.map