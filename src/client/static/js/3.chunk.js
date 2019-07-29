webpackJsonp([3],{

/***/ "./src/views/Users/Users.js":
/*!**********************************!*\
  !*** ./src/views/Users/Users.js ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UsersData__ = __webpack_require__(/*! ./UsersData */ "./src/views/Users/UsersData.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function UserRow(props) {
  var user = props.user;
  var userLink = '#/users/' + user.id;

  var getBadge = function getBadge(status) {
    return status === 'Active' ? 'success' : status === 'Inactive' ? 'secondary' : status === 'Pending' ? 'warning' : status === 'Banned' ? 'danger' : 'primary';
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'tr',
    { key: user.id.toString() },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'th',
      { scope: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: userLink },
        user.id
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'td',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: userLink },
        user.name
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'td',
      null,
      user.registered
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'td',
      null,
      user.role
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'td',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Badge */],
        { href: userLink, color: getBadge(user.status) },
        user.status
      )
    )
  );
}

var Users = function (_Component) {
  _inherits(Users, _Component);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
  }

  _createClass(Users, [{
    key: 'render',
    value: function render() {

      var userList = __WEBPACK_IMPORTED_MODULE_2__UsersData__["a" /* default */].filter(function (user) {
        return user.id < 10;
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_7" /* Row */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["u" /* Col */],
            { xl: 6 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* Card */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["n" /* CardHeader */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-align-justify' }),
                ' Users ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'small',
                  { className: 'text-muted' },
                  'example'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* CardBody */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["_10" /* Table */],
                  { responsive: true, hover: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        { scope: 'col' },
                        'id'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        { scope: 'col' },
                        'name'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        { scope: 'col' },
                        'registered'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        { scope: 'col' },
                        'role'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        { scope: 'col' },
                        'status'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tbody',
                    null,
                    userList.map(function (user, index) {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(UserRow, { key: index, user: user });
                    })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Users;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./src/views/Users/UsersData.js":
/*!**************************************!*\
  !*** ./src/views/Users/UsersData.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var usersData = [{ id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending' }, { id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 7, name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 8, name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 9, name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 10, name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 11, name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 12, name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 13, name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 14, name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 15, name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 16, name: 'Pompeius René', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 17, name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 18, name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 19, name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 20, name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 21, name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 22, name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 23, name: 'Einar Randall', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 24, name: 'Félix Troels', registered: '2018/03/21', role: 'Staff', status: 'Active' }, { id: 25, name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', status: 'Pending' }, { id: 42, name: 'Ford Prefex', registered: '2001/05/21', role: 'Alien', status: 'Don\'t panic!' }];

/* harmony default export */ __webpack_exports__["a"] = (usersData);

/***/ })

});
//# sourceMappingURL=3.chunk.js.map