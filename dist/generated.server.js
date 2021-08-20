module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/cloudinary.config.js":
/*!*************************************!*\
  !*** ./config/cloudinary.config.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst CLOUDINARY_HOST = \"joi-de-vivro\";\nconst CLOUDINARY_API_KEY = \"615461439126173\";\nconst CLOUDINARY_API_SECRET = \"vVK2PxzDr8RQWmTwbCCO6Sd7UEQ\";\nconst cloudina = {\n  CLOUDINARY_HOST,\n  CLOUDINARY_API_KEY,\n  CLOUDINARY_API_SECRET\n};\nconst _default = cloudina;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CLOUDINARY_HOST, \"CLOUDINARY_HOST\", \"C:\\\\cooer\\\\cooerback\\\\config\\\\cloudinary.config.js\");\n  reactHotLoader.register(CLOUDINARY_API_KEY, \"CLOUDINARY_API_KEY\", \"C:\\\\cooer\\\\cooerback\\\\config\\\\cloudinary.config.js\");\n  reactHotLoader.register(CLOUDINARY_API_SECRET, \"CLOUDINARY_API_SECRET\", \"C:\\\\cooer\\\\cooerback\\\\config\\\\cloudinary.config.js\");\n  reactHotLoader.register(cloudina, \"cloudina\", \"C:\\\\cooer\\\\cooerback\\\\config\\\\cloudinary.config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\config\\\\cloudinary.config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/cloudinary.config.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst CONFIG = {\n  env: \"development\" || false,\n  port: process.env.PORT || 4066,\n  jwtSecret: process.env.JWT_SECRET || \"2fdDFG3353eegdDGGFHDGJvf\",\n  mongoUri: \"mongodb+srv://utdkelvin:kukuejubola1997@cluster0.zbmj6.mongodb.net/socmedia?retryWrites=true&w=majority\",\n  mongoUriDev: \"mongodb://localhost:27017/cooer2\"\n};\nconst _default = CONFIG;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CONFIG, \"CONFIG\", \"C:\\\\cooer\\\\cooerback\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./graph/graph.utility.js":
/*!********************************!*\
  !*** ./graph/graph.utility.js ***!
  \********************************/
/*! exports provided: baseURL, getRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseURL\", function() { return baseURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst baseURL = () => {\n  if (\"development\".trim() == \"production\") return \"https://shrouded-thicket-19388.herokuapp.com\";\n  return `http://localhost:${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port}`;\n};\nfunction getRandom(arr, n) {\n  var result = new Array(n),\n      len = arr.length,\n      taken = new Array(len);\n  if (n > len) throw new RangeError(\"getRandom: more elements taken than available\");\n\n  while (n--) {\n    var x = Math.floor(Math.random() * len);\n    result[n] = arr[x in taken ? taken[x] : x];\n    taken[x] = --len in taken ? taken[len] : len;\n  }\n\n  return result;\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(baseURL, \"baseURL\", \"C:\\\\cooer\\\\cooerback\\\\graph\\\\graph.utility.js\");\n  reactHotLoader.register(getRandom, \"getRandom\", \"C:\\\\cooer\\\\cooerback\\\\graph\\\\graph.utility.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./graph/graph.utility.js?");

/***/ }),

/***/ "./graph/graphSchema.graphql.js":
/*!**************************************!*\
  !*** ./graph/graphSchema.graphql.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_personType_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphql/personType.schema */ \"./graph/graphql/personType.schema.js\");\n/* harmony import */ var _graph_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph.utility */ \"./graph/graph.utility.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst QueryType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: 'Query',\n  description: \"the root of all...queries\",\n  fields: () => ({\n    allPeople: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLList\"](_graphql_personType_schema__WEBPACK_IMPORTED_MODULE_2__[\"PersonType\"]),\n      description: \"Graphql list of users...\",\n      args: {\n        limit: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLInt\"]\n        },\n        random: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLBoolean\"]\n        }\n      },\n      resolve: async (root, args) => {\n        if (args) {\n          if (args.random == undefined) {\n            args.random = false;\n          }\n\n          const result = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${Object(_graph_utility__WEBPACK_IMPORTED_MODULE_3__[\"baseURL\"])()}/_v1/api/users/suggest/${args.limit}/${args.random}`).then(res => res.json());\n          return result;\n        }\n\n        return node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${Object(_graph_utility__WEBPACK_IMPORTED_MODULE_3__[\"baseURL\"])()}/_v1/api/users`).then(res => res.json());\n      }\n    },\n    person: {\n      type: _graphql_personType_schema__WEBPACK_IMPORTED_MODULE_2__[\"PersonType\"],\n      description: \"individual info, this can't be seen except with authentication, if token isnot provided query return data of null\",\n      args: {\n        userName: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        },\n        token: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        }\n      },\n      resolve: (root, args) => node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${Object(_graph_utility__WEBPACK_IMPORTED_MODULE_3__[\"baseURL\"])()}/_v1/api/users/${args.userName}`, {\n        headers: {\n          \"Authorization\": `Bearer ${args.token}`\n        }\n      }).then(res => res.json()) //.then(json => console.log(json))\n\n    }\n  })\n});\n\nconst _default = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLSchema\"]({\n  query: QueryType\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(QueryType, \"QueryType\", \"C:\\\\cooer\\\\cooerback\\\\graph\\\\graphSchema.graphql.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\graph\\\\graphSchema.graphql.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./graph/graphSchema.graphql.js?");

/***/ }),

/***/ "./graph/graphql/personType.schema.js":
/*!********************************************!*\
  !*** ./graph/graphql/personType.schema.js ***!
  \********************************************/
/*! exports provided: PersonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PersonType\", function() { return PersonType; });\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graph_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../graph.utility */ \"./graph/graph.utility.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst FollowType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: \"Follow\",\n  fields: () => ({\n    length: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLInt\"],\n      resolve: f => f.length\n    },\n    details: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLList\"](PersonType),\n      resolve: f => f\n    }\n  })\n});\nconst PersonType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: \"Person\",\n  description: \"Somebody that you used to know\",\n  fields: () => ({\n    _id: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: person => person._id\n    },\n    join: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: person => person.join\n    },\n    name: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: person => person.name\n    },\n    bio: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: person => person.bio\n    },\n    email: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: person => person.email\n    },\n    id: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: person => person._id\n    },\n    username: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: person => person.username\n    },\n    photo: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: person => person.photo\n    },\n    following: {\n      type: FollowType,\n      resolve: person => person.following\n    },\n    followers: {\n      type: FollowType,\n      resolve: person => person.followers\n    }\n  })\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(FollowType, \"FollowType\", \"C:\\\\cooer\\\\cooerback\\\\graph\\\\graphql\\\\personType.schema.js\");\n  reactHotLoader.register(PersonType, \"PersonType\", \"C:\\\\cooer\\\\cooerback\\\\graph\\\\graphql\\\\personType.schema.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./graph/graphql/personType.schema.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst serverStarter = async () => {\n  const APP = express__WEBPACK_IMPORTED_MODULE_0___default()();\n  return Object(_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(APP);\n};\n\nconst _default = serverStarter();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(serverStarter, \"serverStarter\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\app.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\app.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst SIGNIN = async (req, res) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      \"email\": req.body.email\n    });\n\n    if (!user) {\n      return res.status('401').json({\n        error: \"User not found\"\n      });\n    }\n\n    ;\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').json({\n        error: \"Email and password don't match\"\n      });\n    }\n\n    ;\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret); //{ expires: new Date(Date.now() + 900000), httpOnly: true })\n\n    res.cookie(\"user\", user.username, {\n      expires: new Date(Date.now() + 9999999999),\n      sign: true,\n      httpOnly: true\n    });\n    res.cookie(\"token\", token, {\n      expires: new Date(Date.now() + 9999999999),\n      sign: true,\n      httpOnly: true\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        username: user.username,\n        email: user.email\n      }\n    });\n  } catch (err) {\n    return res.status(401).json({\n      error: \"could not sign in\"\n    });\n  }\n};\n\nconst SIGNOUT = (req, res) => {\n  res.clearCookie(\"token\");\n  return res.status(200).json({\n    message: \"signed out\"\n  });\n};\n\nconst REQUIRE_SIGNIN = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: \"auth\"\n});\n\nconst HAS_AUTHORIZATION = (req, res, next) => {\n  //console.log(req.auth)\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status(403).json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  ;\n  next();\n};\n\nconst _default = {\n  SIGNIN,\n  SIGNOUT,\n  REQUIRE_SIGNIN,\n  HAS_AUTHORIZATION\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(SIGNIN, \"SIGNIN\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(SIGNOUT, \"SIGNOUT\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(REQUIRE_SIGNIN, \"REQUIRE_SIGNIN\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(HAS_AUTHORIZATION, \"HAS_AUTHORIZATION\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/ayoze.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/ayoze.controller.js ***!
  \************************************************/
/*! exports provided: CREATE, LISTNEWFEEDS, SINGLEGOSSIP, LIKE, UNLIKE, REACT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE\", function() { return CREATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LISTNEWFEEDS\", function() { return LISTNEWFEEDS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SINGLEGOSSIP\", function() { return SINGLEGOSSIP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE\", function() { return LIKE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE\", function() { return UNLIKE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REACT\", function() { return REACT; });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/DBERRHANDLER */ \"./server/helpers/DBERRHANDLER.js\");\n/* harmony import */ var _models_ayoze_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/ayoze.model */ \"./server/models/ayoze.model.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst CREATE = (req, res) => {\n  let form = new formidable__WEBPACK_IMPORTED_MODULE_0___default.a.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"Image could not be uploaded\"\n      });\n    }\n\n    ;\n    let gist = new _models_ayoze_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](fields);\n    gist.postedBy = req.profile;\n\n    if (files.photo) {\n      gist.photo.data = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(files.photo.path);\n      gist.photo.contentType = files.photo.type;\n    }\n\n    try {\n      let result = await gist.save();\n      res.json(result);\n    } catch (err) {\n      return res.status(400).json({\n        error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n      });\n    }\n  });\n};\nconst LISTNEWFEEDS = async (req, res) => {\n  // let following = req.profile.following;\n  // following.push(req.profile._id);\n  try {\n    let gists = await _models_ayoze_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n      postedBy: {\n        $in: req.profile._id\n      }\n    }) // .populate('comments.postedBy', '_id name')\n    // .populate('postedBy', '_id name')\n    .sort('-created').exec();\n    res.json(gists);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst SINGLEGOSSIP = async (req, res, next, id) => {\n  try {\n    let gists = await _models_ayoze_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      _id: id\n    });\n    console.log(gists);\n    res.json(gists);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst LIKE = async (req, res) => {\n  try {\n    let result = await _models_ayoze_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(req.body.gistId, {\n      $push: {\n        likes: req.body.userId\n      }\n    }, {\n      new: true\n    });\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst UNLIKE = async (req, res) => {\n  try {\n    let result = await _models_ayoze_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(req.body.gistId, {\n      $pull: {\n        likes: req.body.userId\n      }\n    }, {\n      new: true\n    });\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst REACT = async (req, res) => {\n  let reaction = req.body.reaction;\n  reaction.postedBy = req.body.userId;\n\n  try {\n    let result = await _models_ayoze_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(req.body.ayozeId, {\n      $push: {\n        reactions: req.body.reaction\n      }\n    }, {\n      new: true\n    }).populate(\"reactions.postedBy\", \"_id name username\");\n    res.json(result);\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CREATE, \"CREATE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\ayoze.controller.js\");\n  reactHotLoader.register(LISTNEWFEEDS, \"LISTNEWFEEDS\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\ayoze.controller.js\");\n  reactHotLoader.register(SINGLEGOSSIP, \"SINGLEGOSSIP\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\ayoze.controller.js\");\n  reactHotLoader.register(LIKE, \"LIKE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\ayoze.controller.js\");\n  reactHotLoader.register(UNLIKE, \"UNLIKE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\ayoze.controller.js\");\n  reactHotLoader.register(REACT, \"REACT\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\ayoze.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/ayoze.controller.js?");

/***/ }),

/***/ "./server/controllers/gist.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/gist.controller.js ***!
  \***********************************************/
/*! exports provided: LIST_A_COMMENT, GET_GIST_ID, CREATE, LISTBYUSER, LISTNEWFEEDS, LIST_A_FEED, RATE_GOSSIP, LIKE, UNLIKE, COMMENT, UNCOMMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIST_A_COMMENT\", function() { return LIST_A_COMMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_GIST_ID\", function() { return GET_GIST_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE\", function() { return CREATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LISTBYUSER\", function() { return LISTBYUSER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LISTNEWFEEDS\", function() { return LISTNEWFEEDS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIST_A_FEED\", function() { return LIST_A_FEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RATE_GOSSIP\", function() { return RATE_GOSSIP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE\", function() { return LIKE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE\", function() { return UNLIKE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COMMENT\", function() { return COMMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNCOMMENT\", function() { return UNCOMMENT; });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/DBERRHANDLER */ \"./server/helpers/DBERRHANDLER.js\");\n/* harmony import */ var _models_gist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/gist.model */ \"./server/models/gist.model.js\");\n/* harmony import */ var _models_comment_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/comment.model */ \"./server/models/comment.model.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst LIST_A_COMMENT = async (req, res) => {\n  try {\n    let comment = await _models_comment_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n      _id: req.params.commentId\n    }).populate('comments').populate({\n      path: \"comments\",\n      populate: {\n        path: \"postedBy\",\n        select: \"_id name username bio\"\n      }\n    }).populate('postedBy', 'name username').lean();\n    res.json(comment);\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst GET_GIST_ID = async (req, res, next, gistID) => {\n  try {\n    let gist = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].where({\n      _id: gistID\n    }).findOne().lean();\n\n    if (gist == null) {\n      gist = await _models_comment_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].where({\n        _id: gistID\n      }).findOne().lean();\n    }\n\n    if (!gist) {\n      return res.status(400).json({\n        error: \"this gist is not found\"\n      });\n    }\n\n    req.gist = gist;\n    next();\n  } catch (e) {\n    co;\n  }\n};\nconst CREATE = (req, res) => {\n  let form = new formidable__WEBPACK_IMPORTED_MODULE_0___default.a.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"Image could not be uploaded\"\n      });\n    }\n\n    ;\n    let gist = new _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](fields);\n    gist.postedBy = req.profile;\n\n    if (files.photo) {\n      gist.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path);\n      gist.photo.contentType = files.photo.type;\n    }\n\n    try {\n      let result = await gist.save();\n      res.json(result);\n    } catch (err) {\n      return res.status(400).json({\n        error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n      });\n    }\n  });\n};\nconst LISTBYUSER = async (req, res) => {\n  try {\n    let gists = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n      postedBy: req.profile._id\n    }).populate('comments').populate({\n      path: \"comments\",\n      populate: {\n        path: \"postedBy\",\n        select: \"_id name username bio\"\n      }\n    }).populate('postedBy', '_id name username').sort('-created').exec();\n    res.json(gists);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst LISTNEWFEEDS = async (req, res) => {\n  //console.log(\"gist.controller.js Line 34\",req.profile)\n  let following = req.profile.following;\n  following.push(req.profile._id);\n\n  try {\n    let gists = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n      postedBy: {\n        $in: req.profile.following\n      }\n    }).populate('comments').populate({\n      path: \"comments\",\n      populate: {\n        path: \"postedBy\",\n        select: \"_id name username bio\"\n      }\n    }).populate('postedBy', '_id name username').sort('-created').exec();\n    res.json(gists);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst LIST_A_FEED = async (req, res) => {\n  let ref2 = await _models_comment_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n    _id: req.gist._id\n  });\n\n  try {\n    if (ref2.length < 1) {\n      let gists = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n        _id: req.gist._id\n      }).populate('comments').populate({\n        path: \"comments\",\n        populate: {\n          path: \"postedBy\",\n          select: \"_id name username bio\"\n        }\n      }).populate('postedBy', 'name username').lean();\n      res.json(gists);\n    } else {\n      let gists = await _models_comment_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n        _id: req.gist._id\n      }).populate('comments').populate({\n        path: \"comments\",\n        populate: {\n          path: \"postedBy\",\n          select: \"_id name username bio\"\n        }\n      }).populate('postedBy', 'name username').lean();\n      res.json(gists);\n    }\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst RATE_GOSSIP = async (req, res) => {\n  try {\n    let checker = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      _id: req.body.gistId\n    }).lean();\n\n    if (checker) {\n      let result = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(req.body.gistId, {\n        $push: {\n          savages: req.body.userId\n        }\n      }, {\n        new: true\n      }).lean();\n      res.json(result);\n    } else {\n      let result = await _models_comment_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findByIdAndUpdate(req.body.gistId, {\n        $push: {\n          savages: req.body.userId\n        }\n      }, {\n        new: true\n      }).lean();\n      res.json(result);\n    }\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst LIKE = async (req, res) => {\n  try {\n    let checker = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      _id: req.body.gistId\n    }).lean();\n\n    if (checker) {\n      let result = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(req.body.gistId, {\n        $push: {\n          likes: req.body.userId\n        }\n      }, {\n        new: true\n      }).populate(\"comments.postedBy\", \"_id username name\").populate(\"postedBy\", \"_id username name\").lean();\n      res.json(result);\n    } else {\n      let result = await _models_comment_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findByIdAndUpdate(req.body.gistId, {\n        $push: {\n          likes: req.body.userId\n        }\n      }, {\n        new: true\n      }).populate(\"comments.postedBy\", \"_id username name\").populate(\"postedBy\", \"_id username name\").lean();\n      res.json(result);\n    }\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst UNLIKE = async (req, res) => {\n  let checker = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n    _id: req.body.gistId\n  }).lean();\n\n  try {\n    if (checker) {\n      let result = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(req.body.gistId, {\n        $pull: {\n          likes: req.body.userId\n        }\n      }, {\n        new: true\n      }).populate(\"comments.postedBy\", \"_id username name\").populate(\"postedBy\", \"_id username name\").lean();\n      res.json(result);\n    } else {\n      let result = await _models_comment_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findByIdAndUpdate(req.body.gistId, {\n        $pull: {\n          likes: req.body.userId\n        }\n      }, {\n        new: true\n      }).populate(\"comments.postedBy\", \"_id username name\").populate(\"postedBy\", \"_id username name\").lean();\n      res.json(result);\n    }\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst COMMENT = async (req, res) => {\n  let comment = req.body.comment;\n  comment.postedBy = req.body.userId;\n  let checker = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(req.body.gistId).lean();\n\n  try {\n    const cc = new _models_comment_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"](comment);\n    let savedComment = await cc.save();\n\n    if (checker) {\n      let result = await Promise.all([_models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(req.body.gistId)]);\n      [result] = result;\n      result.comments.unshift(savedComment);\n      await Promise.all([result.save()]);\n      result = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(req.body.gistId).populate(\"comments\").populate({\n        path: \"comments\",\n        populate: {\n          path: \"postedBy\",\n          select: \"_id name username bio\"\n        }\n      }).populate('postedBy', 'name username').exec();\n      res.json(result);\n    } else {\n      let result = await Promise.all([_models_comment_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(req.body.gistId)]);\n      [result] = result;\n      result.comments.unshift(savedComment);\n      await Promise.all([result.save()]);\n      result = await _models_comment_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(req.body.gistId).populate(\"comments\").populate({\n        path: \"comments\",\n        populate: {\n          path: \"postedBy\",\n          select: \"_id name username bio\"\n        }\n      }).populate('postedBy', 'name username').exec();\n      res.json(result);\n    }\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\nconst UNCOMMENT = async (req, res) => {\n  let comment = req.body.comment;\n\n  try {\n    let result = await _models_gist_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(req.body.gistId, {\n      $pull: {\n        comments: {\n          _id: comments._id\n        }\n      }\n    }, {\n      new: true\n    }).populate(\"comments.postedBy\", \"_id username name\").populate(\"postedBy\", \"_id username name\").lean();\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(LIST_A_COMMENT, \"LIST_A_COMMENT\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n  reactHotLoader.register(GET_GIST_ID, \"GET_GIST_ID\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n  reactHotLoader.register(CREATE, \"CREATE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n  reactHotLoader.register(LISTBYUSER, \"LISTBYUSER\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n  reactHotLoader.register(LISTNEWFEEDS, \"LISTNEWFEEDS\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n  reactHotLoader.register(LIST_A_FEED, \"LIST_A_FEED\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n  reactHotLoader.register(RATE_GOSSIP, \"RATE_GOSSIP\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n  reactHotLoader.register(LIKE, \"LIKE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n  reactHotLoader.register(UNLIKE, \"UNLIKE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n  reactHotLoader.register(COMMENT, \"COMMENT\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n  reactHotLoader.register(UNCOMMENT, \"UNCOMMENT\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\gist.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/gist.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: listUserByInstructions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listUserByInstructions\", function() { return listUserByInstructions; });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/DBERRHANDLER */ \"./server/helpers/DBERRHANDLER.js\");\n/* harmony import */ var _images_anonymprofile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/anonymprofile.png */ \"./server/images/anonymprofile.png\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! process */ \"process\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config_cloudinary_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../config/cloudinary.config */ \"./config/cloudinary.config.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_7__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\ncloudinary__WEBPACK_IMPORTED_MODULE_5___default.a.config({\n  cloud_name: _config_cloudinary_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CLOUDINARY_HOST,\n  api_key: _config_cloudinary_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CLOUDINARY_API_KEY,\n  api_secret: _config_cloudinary_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CLOUDINARY_API_SECRET\n});\n\nconst CREATE_NEW_USER = async (req, res) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n\n  try {\n    await user.save();\n    return res.status(201).json({\n      message: \"Successfully signed up!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\n\nconst LIST_ALL_USERS = async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().lean().select('username email name photo bio');\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\n\nconst listUserByInstructions = (req, res) => {\n  let r = 0;\n  let {\n    limit,\n    random\n  } = req.params;\n\n  if (random == \"true\") {\n    r = 1;\n  }\n\n  try {\n    _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].countDocuments().exec(async (err, count) => {\n      if (err) {\n        return res.status(500).json({\n          error: \"there was an error counting the user\"\n        });\n      }\n\n      if (r > 0) {\n        r = Math.floor(Math.random() * count);\n        console.log(\"discoverRandom--user.controller\", r);\n      }\n\n      let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().lean().limit(Number(limit)).skip(Number(r)).select('username email name photo bio');\n      res.status(200).json(users);\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\n\nconst USER_BY_ID = async (req, res, next, username) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      username\n    }).populate(\"following\", \"_id name username\").populate(\"followers\", \"_id name username\").exec();\n\n    if (!user) {\n      return res.status(400).json({\n        error: \"User not found\"\n      });\n    }\n\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: \"could not retrieve user\"\n    });\n  }\n};\n\nconst READ = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\n\n\nconst UPDATE = async (req, res) => {\n  let form = new formidable__WEBPACK_IMPORTED_MODULE_7___default.a.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(500).json({\n        error: \"Photo could not be uploaded\\n\" + err\n      });\n    }\n\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(user, fields);\n    user.updated = Date.now();\n\n    if (files.photo) {\n      //user.photo = fs.readFileSync(files.photo.path)       \n      //user.photo.contentType = files.photo.type  \n      //parser.single(\"photo\")\n      await cloudinary__WEBPACK_IMPORTED_MODULE_5___default.a.v2.uploader.upload(files.photo.path, (err, result) => {\n        if (err) return err;\n        user.photo = result.secure_url;\n      });\n    }\n\n    try {\n      await user.save();\n      user.hashed_password = undefined;\n      user.salt = undefined;\n      res.json(user);\n    } catch (err) {\n      console.log(error);\n      return res.status(400).json({\n        error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GET_ERROR_MESSAGE(err)\n      });\n    }\n  });\n};\n\nconst PHOTO = (req, res, next) => {\n  if (req.profile.photo) {\n    return res.send(req.profile.photo);\n  }\n\n  next();\n};\n\nconst DEFAULTPHOTO = (req, res) => {\n  return res.sendFile(process__WEBPACK_IMPORTED_MODULE_4___default.a.cwd() + \"/server/\" + _images_anonymprofile_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n};\n\nconst ADDFOLLOWING = async (req, res, next) => {\n  try {\n    await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.ID, {\n      $push: {\n        following: req.body.followId\n      }\n    });\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\n\nconst ADDFOLLOWER = async (req, res) => {\n  try {\n    let result = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.followId, {\n      $push: {\n        followers: req.body.ID\n      }\n    }, {\n      new: true\n    }).populate('following', '_id name').populate('followers', '_id name').exec();\n    result.hashed_password = undefined;\n    result.salt = undefined;\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\n\nconst REMOVEFOLLOWING = async (req, res, next) => {\n  try {\n    await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.ID, {\n      $pull: {\n        following: req.body.unfollowId\n      }\n    });\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\n\nconst REMOVEFOLLOWER = async (req, res) => {\n  try {\n    let result = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.unfollowId, {\n      $pull: {\n        followers: req.body.ID\n      }\n    }, {\n      new: true\n    }).populate('following', '_id name').populate('followers', '_id name').exec();\n    result.hashed_password = undefined;\n    result.salt = undefined;\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\n\nconst REMOVE = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_DBERRHANDLER__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GET_ERROR_MESSAGE(err)\n    });\n  }\n};\n\nconst DISABLE_ME = (req, res) => {\n  res.status(200).send(\"It will be done soon\");\n};\n\nconst _default = {\n  CREATE_NEW_USER,\n  LIST_ALL_USERS,\n  USER_BY_ID,\n  READ,\n  UPDATE,\n  ADDFOLLOWER,\n  ADDFOLLOWING,\n  REMOVEFOLLOWING,\n  REMOVEFOLLOWER,\n  REMOVE,\n  DISABLE_ME,\n  PHOTO,\n  DEFAULTPHOTO\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CREATE_NEW_USER, \"CREATE_NEW_USER\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(LIST_ALL_USERS, \"LIST_ALL_USERS\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(listUserByInstructions, \"listUserByInstructions\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(USER_BY_ID, \"USER_BY_ID\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(READ, \"READ\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(UPDATE, \"UPDATE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(PHOTO, \"PHOTO\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(DEFAULTPHOTO, \"DEFAULTPHOTO\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(ADDFOLLOWING, \"ADDFOLLOWING\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(ADDFOLLOWER, \"ADDFOLLOWER\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(REMOVEFOLLOWING, \"REMOVEFOLLOWING\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(REMOVEFOLLOWER, \"REMOVEFOLLOWER\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(REMOVE, \"REMOVE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(DISABLE_ME, \"DISABLE_ME\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\controllers\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/db/mongoose.js":
/*!*******************************!*\
  !*** ./server/db/mongoose.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst mongoURL = () => {\n  if (\"development\".trim() == \"production\") return _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUri;\n  return _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUriDev;\n};\n\nconst options = {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true,\n  useFindAndModify: false\n};\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(mongoURL(), options, function (err, db) {\n  //assert.equal(null, err);\n  console.log('Connected successfully to database'); // db.close(); turn on for testing\n});\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on(\"error\", () => {\n  throw new Error(`unable to connect to database: ${mongoURL()}`);\n}); //mongoose.set('debug', true);\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(mongoURL, \"mongoURL\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\db\\\\mongoose.js\");\n  reactHotLoader.register(options, \"options\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\db\\\\mongoose.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\db\\\\mongoose.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/db/mongoose.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _infrastructure_routeManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infrastructure/routeManager */ \"./server/infrastructure/routeManager.js\");\n/* harmony import */ var _infrastructure_configManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infrastructure/configManager */ \"./server/infrastructure/configManager.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n/*************\r\n ************\r\n ***********\r\n **********\r\n *********\r\n ******** \r\n ******* \r\n ****** \r\n ***** \r\n ****\r\n ***\r\n **\r\n *\r\n * welcome to the land,\r\n * start breaking the WEB king\r\n * DO NOT STOP TO FORGET KELVIN, YOU ARE THE BEST \r\n * ********************************************\r\n * ********************************************\r\n * ********************************************\r\n * ********************************************\r\n * ###################################################\r\n */\n\n\n\n\nfunction app(APP) {\n  APP.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\n  APP.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({\n    extended: true\n  }));\n  APP.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n  APP.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\n  APP.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()());\n  APP.use(cors__WEBPACK_IMPORTED_MODULE_3___default()()); //App.get(\"/\", (req, res)=>res.send(\"this is a backend app, visit the /graphql to play with data\"))\n\n  _infrastructure_configManager__WEBPACK_IMPORTED_MODULE_6__[\"default\"].handle(APP);\n  _infrastructure_routeManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"].handle(APP);\n  APP.use((err, req, res, next) => {\n    if (err.name === 'UnauthorizedError') {\n      res.status(401).json({\n        \"error\": err.name + \": \" + err.message\n      });\n    } else if (err) {\n      res.status(400).json({\n        \"error\": err.name + \": \" + err.message\n      });\n      console.log(err);\n    }\n  });\n  return APP;\n}\n\nconst _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\express.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/DBERRHANDLER.js":
/*!****************************************!*\
  !*** ./server/helpers/DBERRHANDLER.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst GET_ERROR_MESSAGE = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = GET_UNIQUE_ERR_MESSAGE(err).substring(GET_UNIQUE_ERR_MESSAGE(err).indexOf(\":\"), GET_UNIQUE_ERR_MESSAGE(err).length);\n        break;\n\n      default:\n        message = \"something went wrong\";\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) {\n        message = err.errors[errName].message;\n      }\n    }\n  }\n\n  ;\n  return message;\n};\n\nconst GET_UNIQUE_ERR_MESSAGE = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + \" already exists\";\n  } catch (ex) {\n    output = \"Unique field already exists\";\n  }\n\n  return output;\n};\n\nconst _default = {\n  GET_ERROR_MESSAGE\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(GET_ERROR_MESSAGE, \"GET_ERROR_MESSAGE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\helpers\\\\DBERRHANDLER.js\");\n  reactHotLoader.register(GET_UNIQUE_ERR_MESSAGE, \"GET_UNIQUE_ERR_MESSAGE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\helpers\\\\DBERRHANDLER.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\helpers\\\\DBERRHANDLER.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/DBERRHANDLER.js?");

/***/ }),

/***/ "./server/helpers/autoPopulate.js":
/*!****************************************!*\
  !*** ./server/helpers/autoPopulate.js ***!
  \****************************************/
/*! exports provided: autopopulate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autopopulate\", function() { return autopopulate; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst autopopulate = field => function (next) {\n  this.populate(field);\n  next();\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(autopopulate, \"autopopulate\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\helpers\\\\autoPopulate.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/autoPopulate.js?");

/***/ }),

/***/ "./server/helpers/mailer.js":
/*!**********************************!*\
  !*** ./server/helpers/mailer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nconf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nconf */ \"nconf\");\n/* harmony import */ var nconf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nconf__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst sendEmail = async (email, subject, text) => {\n  try {\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default.a.createTransport({\n      host: process.env.HOST,\n      service: process.env.SERVICE,\n      port: 587,\n      secure: true,\n      auth: {\n        user: `//process.env.USER,replace with nconf`,\n        pass: `//process.env.PASS, ''`\n      }\n    });\n    await transporter.sendMail({\n      from: process.env.USER,\n      to: email,\n      subject: subject,\n      text: text\n    });\n    console.log(\"email sent sucessfully\");\n  } catch (error) {\n    console.log(error, \"email not sent\");\n  }\n};\n\nconst _default = sendEmail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(sendEmail, \"sendEmail\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\helpers\\\\mailer.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\helpers\\\\mailer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/mailer.js?");

/***/ }),

/***/ "./server/images/anonymprofile.png":
/*!*****************************************!*\
  !*** ./server/images/anonymprofile.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"images/anonymprofile.png\");\n\n//# sourceURL=webpack:///./server/images/anonymprofile.png?");

/***/ }),

/***/ "./server/infrastructure/apiManager.js":
/*!*********************************************!*\
  !*** ./server/infrastructure/apiManager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_gist_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../routes/gist.routes */ \"./server/routes/gist.routes.js\");\n/* harmony import */ var _routes_ayoze_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../routes/ayoze.routes */ \"./server/routes/ayoze.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _routes_passwordReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../routes/passwordReset */ \"./server/routes/passwordReset.js\");\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-graphql */ \"express-graphql\");\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _graph_graphSchema_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../graph/graphSchema.graphql */ \"./graph/graphSchema.graphql.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n //graphql...\n// in the building...\n\n\n\nconst API = {\n  createApiRouter(app) {\n    app.use(\"/_v1\", _routes_auth_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    app.use(\"/graphql\", Object(express_graphql__WEBPACK_IMPORTED_MODULE_5__[\"graphqlHTTP\"])({\n      schema: _graph_graphSchema_graphql__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      graphiql: true\n    }));\n    app.use(\"/_v1\", _routes_gist_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    app.use(\"/_v1\", _routes_ayoze_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    app.use(\"/_v1\", _routes_user_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    app.use(\"/_v1\", _routes_passwordReset__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  }\n\n};\nconst _default = API;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(API, \"API\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\apiManager.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\apiManager.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/infrastructure/apiManager.js?");

/***/ }),

/***/ "./server/infrastructure/baseManager.js":
/*!**********************************************!*\
  !*** ./server/infrastructure/baseManager.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var nconf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nconf */ \"nconf\");\n/* harmony import */ var nconf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nconf__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst baseManager = {\n  handle(app) {\n    this.configureCommon(app);\n\n    if (nconf__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"development\")) {\n      this.configureDevEnv(app);\n    } else {\n      this.configureProductionEnv(app);\n    }\n  },\n\n  configureCommon() {},\n\n  configureProductionEnv() {},\n\n  configureDevEnv() {}\n\n};\nconst _default = baseManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(baseManager, \"baseManager\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\baseManager.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\baseManager.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/infrastructure/baseManager.js?");

/***/ }),

/***/ "./server/infrastructure/configManager.js":
/*!************************************************!*\
  !*** ./server/infrastructure/configManager.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var nconf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nconf */ \"nconf\");\n/* harmony import */ var nconf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nconf__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _baseManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseManager */ \"./server/infrastructure/baseManager.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst content = 'config/default.json';\nconst defaultConfig = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(process.cwd(), content);\nnconf__WEBPACK_IMPORTED_MODULE_0___default.a.argv().env().file({\n  file: defaultConfig\n}).defaults({\n  ENV: 'development'\n});\nconst configManager = Object.assign({}, _baseManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconst _default = configManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(content, \"content\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\configManager.js\");\n  reactHotLoader.register(defaultConfig, \"defaultConfig\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\configManager.js\");\n  reactHotLoader.register(configManager, \"configManager\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\configManager.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\configManager.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/infrastructure/configManager.js?");

/***/ }),

/***/ "./server/infrastructure/routeManager.js":
/*!***********************************************!*\
  !*** ./server/infrastructure/routeManager.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _baseManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseManager */ \"./server/infrastructure/baseManager.js\");\n/* harmony import */ var _apiManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiManager */ \"./server/infrastructure/apiManager.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst newManager = {\n  configureDevEnv(app) {\n    const apiRouter = _apiManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createApiRouter;\n    apiRouter(app);\n  }\n\n};\nconst routeManager = Object.assign({}, _baseManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"], newManager);\nconst _default = routeManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(newManager, \"newManager\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\routeManager.js\");\n  reactHotLoader.register(routeManager, \"routeManager\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\routeManager.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\infrastructure\\\\routeManager.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/infrastructure/routeManager.js?");

/***/ }),

/***/ "./server/models/OTP.model.js":
/*!************************************!*\
  !*** ./server/models/OTP.model.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst {\n  Schema,\n  model\n} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;\nconst otpSchema = new Schema({\n  userId: {\n    type: Schema.Types.ObjectId,\n    required: true,\n    ref: \"User\"\n  },\n  token: {\n    type: String,\n    required: true\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now,\n    expires: 3600\n  }\n});\n\nconst _default = model(\"OTP\", otpSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Schema, \"Schema\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\OTP.model.js\");\n  reactHotLoader.register(model, \"model\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\OTP.model.js\");\n  reactHotLoader.register(otpSchema, \"otpSchema\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\OTP.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\OTP.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/OTP.model.js?");

/***/ }),

/***/ "./server/models/ayoze.model.js":
/*!**************************************!*\
  !*** ./server/models/ayoze.model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst AYOZE = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  text: {\n    type: String,\n    required: \"Text is required\"\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  postedBy: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: \"User\"\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  likes: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: \"User\"\n  }],\n  reactions: [{\n    text: String,\n    created: {\n      type: Date,\n      default: Date.now\n    },\n    postedBy: {\n      type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n      ref: 'User'\n    }\n  }]\n});\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Ayoze\", AYOZE);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(AYOZE, \"AYOZE\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\ayoze.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\ayoze.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/ayoze.model.js?");

/***/ }),

/***/ "./server/models/comment.model.js":
/*!****************************************!*\
  !*** ./server/models/comment.model.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_autoPopulate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/autoPopulate */ \"./server/helpers/autoPopulate.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst COMMENTSCHEMA = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  postedBy: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'User',\n    required: true\n  },\n  text: {\n    type: String,\n    required: \"Text is required\"\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  likes: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: \"User\"\n  }],\n  savages: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: \"User\"\n  }],\n  comments: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'Comment'\n  }]\n}, {\n  timestamps: true\n}); // Always populate the author field\n\nCOMMENTSCHEMA.pre('findOne', Object(_helpers_autoPopulate__WEBPACK_IMPORTED_MODULE_1__[\"autopopulate\"])('postedBy')).pre('find', Object(_helpers_autoPopulate__WEBPACK_IMPORTED_MODULE_1__[\"autopopulate\"])('postedBy')).pre('findOne', Object(_helpers_autoPopulate__WEBPACK_IMPORTED_MODULE_1__[\"autopopulate\"])('comments')).pre('find', Object(_helpers_autoPopulate__WEBPACK_IMPORTED_MODULE_1__[\"autopopulate\"])('comments'));\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Comment', COMMENTSCHEMA);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(COMMENTSCHEMA, \"COMMENTSCHEMA\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\comment.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\comment.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/comment.model.js?");

/***/ }),

/***/ "./server/models/gist.model.js":
/*!*************************************!*\
  !*** ./server/models/gist.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_autoPopulate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/autoPopulate */ \"./server/helpers/autoPopulate.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst GISTSCHEMA = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  text: {\n    type: String,\n    required: \"Text is required\"\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  postedBy: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: \"User\"\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  likes: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: \"User\"\n  }],\n  savages: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: \"User\"\n  }],\n  comments: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: \"Comment\"\n  }]\n}); // Always populate the postedBy field\n\nGISTSCHEMA.pre('findOne', Object(_helpers_autoPopulate__WEBPACK_IMPORTED_MODULE_1__[\"autopopulate\"])('postedBy')).pre('find', Object(_helpers_autoPopulate__WEBPACK_IMPORTED_MODULE_1__[\"autopopulate\"])('postedBy'));\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Gist\", GISTSCHEMA);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(GISTSCHEMA, \"GISTSCHEMA\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\gist.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\gist.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/gist.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst USERSCHEMA = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  photo: {\n    type: String,\n    default: \"https://res.cloudinary.com/joi-de-vivro/image/upload/v1626030848/sample.jpg\"\n  },\n  username: {\n    type: String,\n    trim: true,\n    required: 'Username is required',\n    unique: \"username already exists\"\n  },\n  name: {\n    type: String,\n    trim: true\n  },\n  bio: {\n    type: String,\n    trim: true,\n    default: \"Hey dear, I'm onstreet\"\n  },\n  gender: {\n    type: String,\n    required: \"Gender type is required\"\n  },\n  anonymousName: {\n    type: String,\n    trim: true\n  },\n  telephone: {\n    type: String,\n    trim: true,\n    required: \"telephone is required\"\n  },\n  securityQuestion: {\n    type: String,\n    trim: true\n  },\n  securityAnswer: {\n    type: String,\n    trim: true\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: \"Email already exists\",\n    match: [/.+\\@.+\\.com/, \"please fill a valid email address\"],\n    required: \"email field is required\"\n  },\n  following: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'User'\n  }],\n  followers: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'User'\n  }],\n  join: {\n    type: Date,\n    default: Date.now\n  },\n  update: Date,\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String\n});\nUSERSCHEMA.virtual(\"password\").set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUSERSCHEMA.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) == this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return '';\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac(\"sha1\", this.salt).update(password).digest(\"hex\");\n    } catch (error) {\n      return \"\";\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + \"\";\n  }\n};\nUSERSCHEMA.path(\"hashed_password\").validate(function (v) {\n  if (this._password && this._password.length < 8) {\n    this.invalidate(\"password\", \"password must be at least 8 characters long\");\n  }\n\n  ;\n\n  if (this.isNew && !this.password) {\n    this.invalidate(\"password\", \"password is required\");\n  }\n}, null);\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", USERSCHEMA);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(USERSCHEMA, \"USERSCHEMA\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\models\\\\user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.route(\"/auth/signin\").post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SIGNIN);\nrouter.route(\"/auth/signout\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SIGNOUT);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/ayoze.routes.js":
/*!***************************************!*\
  !*** ./server/routes/ayoze.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_ayoze_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/ayoze.controller */ \"./server/controllers/ayoze.controller.js\");\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.route(\"/api/ayozes/react\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_ayoze_controller__WEBPACK_IMPORTED_MODULE_2__[\"REACT\"]);\nrouter.route(\"/api/ayozes/like\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_ayoze_controller__WEBPACK_IMPORTED_MODULE_2__[\"LIKE\"]);\nrouter.route(\"/api/ayozes/unlike\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_ayoze_controller__WEBPACK_IMPORTED_MODULE_2__[\"UNLIKE\"]);\nrouter.route(\"/api/ayozes/new/:userId\").post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_ayoze_controller__WEBPACK_IMPORTED_MODULE_2__[\"CREATE\"]);\nrouter.route(\"/api/ayozes/feed/:userId\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_ayoze_controller__WEBPACK_IMPORTED_MODULE_2__[\"LISTNEWFEEDS\"]);\nrouter.route(\"/api/ayozes/single/feed/:gossip\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_ayoze_controller__WEBPACK_IMPORTED_MODULE_2__[\"SINGLEGOSSIP\"]);\nrouter.param(\"userId\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].USER_BY_ID);\nrouter.param(\"gossip\", _controllers_ayoze_controller__WEBPACK_IMPORTED_MODULE_2__[\"SINGLEGOSSIP\"]);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\ayoze.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\ayoze.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/ayoze.routes.js?");

/***/ }),

/***/ "./server/routes/gist.routes.js":
/*!**************************************!*\
  !*** ./server/routes/gist.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/gist.controller */ \"./server/controllers/gist.controller.js\");\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.route(\"/api/gists/comment\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"COMMENT\"]);\nrouter.route(\"/api/gists/uncomment\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"UNCOMMENT\"]);\nrouter.route(\"/api/gists/like\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"LIKE\"]);\nrouter.route(\"/api/gists/unlike\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"UNLIKE\"]);\nrouter.route(\"/api/gists/rateGossip\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"RATE_GOSSIP\"]);\nrouter.route(\"/api/gists/new/:userId\").post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"CREATE\"]);\nrouter.route(\"/api/gists/feed/:userId\").get(_controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"LISTNEWFEEDS\"]);\nrouter.route(\"/api/gists/feed/singlefeed/:gistId\").get(_controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"LIST_A_FEED\"]);\nrouter.route(\"/api/gists/feed/singlecomment/:commentId\").get(_controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"LIST_A_COMMENT\"]);\nrouter.route('/api/gists/by/:userId/getCoos').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REQUIRE_SIGNIN, _controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"LISTBYUSER\"]);\nrouter.param(\"userId\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].USER_BY_ID);\nrouter.param(\"gistId\", _controllers_gist_controller__WEBPACK_IMPORTED_MODULE_2__[\"GET_GIST_ID\"]);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\gist.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\gist.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/gist.routes.js?");

/***/ }),

/***/ "./server/routes/passwordReset.js":
/*!****************************************!*\
  !*** ./server/routes/passwordReset.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var _models_OTP_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/OTP.model */ \"./server/models/OTP.model.js\");\n/* harmony import */ var _helpers_mailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/mailer */ \"./server/helpers/mailer.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_4___default.a.Router();\nrouter.post(\"/api/password-reset\", async (req, res) => {\n  try {\n    // validate with express validator\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      email: req.body.email\n    });\n    if (!user) return res.status(400).json({\n      error: `user with ${req.body.email} do not match any in our records, sorry`\n    });\n    let token = await _models_OTP_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n      userId: user._id\n    });\n\n    if (!token) {\n      token = await new _models_OTP_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        userId: user._id,\n        token: crypto__WEBPACK_IMPORTED_MODULE_3___default.a.randomBytes(32).toString(\"hex\")\n      }).save();\n    }\n\n    const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;\n    await Object(_helpers_mailer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user.email, \"Password reset\", link);\n    res.json({\n      success: \"password reset link has been sent to this mail, check it\"\n    });\n  } catch (error) {\n    res.error(\"an error occured\");\n    console.log(error);\n  }\n});\nrouter.post(\"/api/password-reset/:userId/:token\", async (req, res) => {\n  try {\n    // validate with express-validator\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.userId);\n    if (!user) return res.status(400).json({\n      error: \"invalid link or expired\"\n    });\n    const token = await _models_OTP_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n      userId: user._id,\n      token: req.params.token\n    });\n    if (!token) return res.status(400).error({\n      error: \"Invalid link or expired\"\n    });\n    user.password = req.body.password;\n    await user.save();\n    await token.delete();\n    res.json({\n      success: \"password reset sucessfully.\"\n    });\n  } catch (error) {\n    res.json({\n      error: \"An error occured\"\n    });\n    console.log(error);\n  }\n});\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\passwordReset.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\passwordReset.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/passwordReset.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst ROUTER = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nROUTER.route(\"/api/users\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LIST_ALL_USERS).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].CREATE_NEW_USER);\nROUTER.route(\"/api/users/suggest/:limit/:random\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"listUserByInstructions\"]);\nconst undoUser = _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REMOVE;\nROUTER.route(\"/api/users/:userId\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REQUIRE_SIGNIN, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].READ).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REQUIRE_SIGNIN, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].HAS_AUTHORIZATION, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].UPDATE).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REQUIRE_SIGNIN, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].HAS_AUTHORIZATION, undoUser);\nROUTER.route(\"/api/users/:userId/follow\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REQUIRE_SIGNIN, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ADDFOLLOWING, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ADDFOLLOWER);\nROUTER.route(\"/api/users/:userId/unfollow\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REQUIRE_SIGNIN, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REMOVEFOLLOWING, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REMOVEFOLLOWER);\nROUTER.route('/api/users/u/photo/:userId').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PHOTO, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DEFAULTPHOTO);\nROUTER.route('/api/users/defaultphoto').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DEFAULTPHOTO);\nROUTER.param(\"userId\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].USER_BY_ID);\nconst _default = ROUTER;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ROUTER, \"ROUTER\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\user.routes.js\");\n  reactHotLoader.register(undoUser, \"undoUser\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\cooer\\\\cooerback\\\\server\\\\routes\\\\user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./server/app.js\");\n/* harmony import */ var _db_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db/mongoose */ \"./server/db/mongoose.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].then(app => app.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, (err, result) => {\n  if (err) console.log(err);\n  console.info(`server started on port ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port}`);\n}));\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\cooer\\cooerback\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cloudinary\");\n\n//# sourceURL=webpack:///external_%22cloudinary%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/extend\");\n\n//# sourceURL=webpack:///external_%22lodash/extend%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "nconf":
/*!************************!*\
  !*** external "nconf" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nconf\");\n\n//# sourceURL=webpack:///external_%22nconf%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"process\");\n\n//# sourceURL=webpack:///external_%22process%22?");

/***/ })

/******/ });