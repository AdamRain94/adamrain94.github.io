/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n* {\r\n    font-family: 'Minecraft', sans-serif;\r\n    font-size: 36px;\r\n}\r\n\r\nhtml, body {\r\n    margin: 0;\r\n    background-color: #000000;\r\n}\r\n\r\n#canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 700px;\r\n}\r\n#get_ready{\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    height: 100%;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n#window_score{\r\n    position: fixed;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n}\r\n#btn_play_and_records{\r\n    position: fixed;\r\n}\r\n#btn_play{\r\n    position: absolute;\r\n    border: none;\r\n    left: 15%;\r\n    background-color: transparent;\r\n    background-position: center;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n#btn_records{\r\n    position: absolute;\r\n    border: none;\r\n    right: 15%;\r\n    background-color: transparent;\r\n    background-position: center;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n#best_score, #current_score{\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: #a66b52;\r\n    text-align: center;\r\n    -webkit-text-stroke: 1px #44200b;\r\n    text-shadow: 3px 3px black;\r\n}\r\n\r\n\r\n\r\n#btn_pause{\r\n    position: absolute;\r\n    background: none;\r\n    padding: 0;\r\n    top: 10px;\r\n    font-size: 5vh;\r\n    text-shadow: 3px 3px black;\r\n    border: none;\r\n    color: white;\r\n    -webkit-text-stroke: 2px #000000;\r\n}\r\n#score{\r\n    position: absolute;\r\n    background: none;\r\n    padding: 0;\r\n    top: 10px;\r\n    font-size: 5vh;\r\n    text-shadow: 3px 3px black;\r\n    border: none;\r\n    color: white;\r\n    -webkit-text-stroke: 2px #000000;\r\n}\r\n.pause{\r\n    position: absolute;\r\n    display: none;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    top: 50%;\r\n    padding: 30px;\r\n    background-color: #ff890b;\r\n    border: 4px solid #4b3842;\r\n    color: #4b3842;\r\n    border-radius: 5px;\r\n    z-index: 1;\r\n}\r\n.pause_text{\r\n    padding-bottom: 30px;\r\n}\r\n.pause_btn {\r\n    font-size: 16px;\r\n    background-color: #249f21;\r\n    border: 4px solid #4b3842;\r\n    color: #4b3842;\r\n}\r\n.container {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n@keyframes up_35 {\r\n    0%{\r\n        bottom: -105%;\r\n    }\r\n    100%{\r\n        bottom: 35%;\r\n    }\r\n}\r\n#btn_play_and_records {\r\n    animation: up_35 .5s linear;\r\n}\r\n@keyframes up_40 {\r\n    0%{\r\n        bottom: -100%;\r\n    }\r\n    100%{\r\n        bottom: 40%;\r\n    }\r\n}\r\n#window_score {\r\n    animation: up_40 .5s linear;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mygame/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mygame/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mygame/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/img/bird_1.png":
/*!****************************!*\
  !*** ./src/img/bird_1.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/bird_1-4b240833.png\");\n\n//# sourceURL=webpack://mygame/./src/img/bird_1.png?");

/***/ }),

/***/ "./src/img/bird_2.png":
/*!****************************!*\
  !*** ./src/img/bird_2.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/bird_2-a391efc3.png\");\n\n//# sourceURL=webpack://mygame/./src/img/bird_2.png?");

/***/ }),

/***/ "./src/img/bird_3.png":
/*!****************************!*\
  !*** ./src/img/bird_3.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/bird_3-f5186d88.png\");\n\n//# sourceURL=webpack://mygame/./src/img/bird_3.png?");

/***/ }),

/***/ "./src/img/fon.png":
/*!*************************!*\
  !*** ./src/img/fon.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/fon-f9ad1a7c.png\");\n\n//# sourceURL=webpack://mygame/./src/img/fon.png?");

/***/ }),

/***/ "./src/img/fon_to_score.png":
/*!**********************************!*\
  !*** ./src/img/fon_to_score.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/fon_to_score-aafbb2b2.png\");\n\n//# sourceURL=webpack://mygame/./src/img/fon_to_score.png?");

/***/ }),

/***/ "./src/img/get_ready.png":
/*!*******************************!*\
  !*** ./src/img/get_ready.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/get_ready-02e08ffe.png\");\n\n//# sourceURL=webpack://mygame/./src/img/get_ready.png?");

/***/ }),

/***/ "./src/img/ground.png":
/*!****************************!*\
  !*** ./src/img/ground.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/ground-45410464.png\");\n\n//# sourceURL=webpack://mygame/./src/img/ground.png?");

/***/ }),

/***/ "./src/img/pipe_down.png":
/*!*******************************!*\
  !*** ./src/img/pipe_down.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/pipe_down-c1b37738.png\");\n\n//# sourceURL=webpack://mygame/./src/img/pipe_down.png?");

/***/ }),

/***/ "./src/img/pipe_up.png":
/*!*****************************!*\
  !*** ./src/img/pipe_up.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/pipe_up-3450bcbe.png\");\n\n//# sourceURL=webpack://mygame/./src/img/pipe_up.png?");

/***/ }),

/***/ "./src/img/play.png":
/*!**************************!*\
  !*** ./src/img/play.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/play-d723766c.png\");\n\n//# sourceURL=webpack://mygame/./src/img/play.png?");

/***/ }),

/***/ "./src/img/records.png":
/*!*****************************!*\
  !*** ./src/img/records.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/records-161cc513.png\");\n\n//# sourceURL=webpack://mygame/./src/img/records.png?");

/***/ }),

/***/ "./src/audio/coin.wav":
/*!****************************!*\
  !*** ./src/audio/coin.wav ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/coin-6171c8ca.wav\");\n\n//# sourceURL=webpack://mygame/./src/audio/coin.wav?");

/***/ }),

/***/ "./src/audio/fall.wav":
/*!****************************!*\
  !*** ./src/audio/fall.wav ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/fall-bc49294e.wav\");\n\n//# sourceURL=webpack://mygame/./src/audio/fall.wav?");

/***/ }),

/***/ "./src/audio/hit.wav":
/*!***************************!*\
  !*** ./src/audio/hit.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/hit-5f7ce8b7.wav\");\n\n//# sourceURL=webpack://mygame/./src/audio/hit.wav?");

/***/ }),

/***/ "./src/audio/swing.wav":
/*!*****************************!*\
  !*** ./src/audio/swing.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/swing-a9c38daf.wav\");\n\n//# sourceURL=webpack://mygame/./src/audio/swing.wav?");

/***/ }),

/***/ "./src/fonts/minecraft-ten.ttf":
/*!*************************************!*\
  !*** ./src/fonts/minecraft-ten.ttf ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/minecraft-ten.ttf\");\n\n//# sourceURL=webpack://mygame/./src/fonts/minecraft-ten.ttf?");

/***/ }),

/***/ "./src/fonts/minecraft.otf":
/*!*********************************!*\
  !*** ./src/fonts/minecraft.otf ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/minecraft.otf\");\n\n//# sourceURL=webpack://mygame/./src/fonts/minecraft.otf?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mygame/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mygame/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mygame/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mygame/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mygame/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mygame/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mygame/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/Html.js":
/*!************************!*\
  !*** ./src/js/Html.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_get_ready_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/get_ready.png */ \"./src/img/get_ready.png\");\n/* harmony import */ var _img_fon_to_score_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/fon_to_score.png */ \"./src/img/fon_to_score.png\");\n/* harmony import */ var _img_play_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/play.png */ \"./src/img/play.png\");\n/* harmony import */ var _img_records_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/records.png */ \"./src/img/records.png\");\n\r\n\r\n\r\n\r\n\r\nconst window_pause = document.getElementById('window_pause');\r\nconst btn_continue = document.getElementById('btn_continue');\r\nconst container = document.getElementById('container');\r\nconst canvas = document.getElementById('canvas');\r\n\r\nlet btn_pause;\r\nlet score_print;\r\nlet get_ready;\r\nlet btn_records;\r\nlet btn_play;\r\nlet btn_play_and_records;\r\nlet window_score;\r\nlet best_score;\r\nlet current_score;\r\n\r\nfunction createHtml() {\r\n    if (document.getElementById('btn_pause') == null) {\r\n        btn_pause = document.createElement('button');\r\n        btn_pause.id = 'btn_pause';\r\n        btn_pause.style.left = ((innerWidth / 2) - (canvas.offsetWidth / 2) + 20) + 'px';\r\n        btn_pause.innerText = 'II';\r\n    }\r\n    if (document.getElementById('score') == null) {\r\n        score_print = document.createElement('div');\r\n        score_print.id = 'score';\r\n    }\r\n    if (document.getElementById('get_ready') == null) {\r\n        get_ready = document.createElement('get_ready');\r\n        get_ready.id = 'get_ready';\r\n        get_ready.style.backgroundImage = 'url(\"' + _img_get_ready_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"] + '\")';\r\n        get_ready.style.border = 'inset ' + canvas.offsetWidth / 40 + 'vh transparent';\r\n        get_ready.style.width = canvas.offsetWidth + 'px';\r\n        container.append(get_ready);\r\n    }\r\n    if (document.getElementById('window_score') == null) {\r\n        window_score = document.createElement('div');\r\n        window_score.id = 'window_score';\r\n        window_score.style.backgroundImage = 'url(' + _img_fon_to_score_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"] + ')';\r\n        window_score.style.bottom = 40 + '%'\r\n        window_score.style.width = canvas.offsetWidth / 100 * 70 + 'px';\r\n        window_score.style.height = (canvas.offsetWidth / 100 * 70) / (768 / 492) + 'px';\r\n    }\r\n    if (document.getElementById('best_score') == null) {\r\n        best_score = document.createElement('div');\r\n        best_score.id = 'best_score';\r\n        best_score.style.fontSize = canvas.offsetWidth / 15 + 'px';\r\n        best_score.style.top = '30%';\r\n        window_score.append(best_score);\r\n    }\r\n    if (document.getElementById('current_score') == null) {\r\n        current_score = document.createElement('div');\r\n        current_score.id = 'current_score';\r\n        current_score.style.fontSize = canvas.offsetWidth / 15 + 'px';\r\n        current_score.style.top = '60%';\r\n        window_score.append(current_score);\r\n    }\r\n\r\n\r\n    if (document.getElementById('btn_play_and_records') == null) {\r\n\r\n        btn_play_and_records = document.createElement('div');\r\n        btn_play_and_records.id = 'btn_play_and_records';\r\n        btn_play_and_records.style.bottom = 35 + '%'\r\n        btn_play_and_records.style.width = canvas.offsetWidth + 'px';\r\n\r\n        if (document.getElementById('btn_play') == null) {\r\n            btn_play = document.createElement('button');\r\n            btn_play.id = 'btn_play';\r\n            btn_play.style.backgroundImage = 'url(' + _img_play_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"] + ')';\r\n            btn_play.style.width = canvas.offsetWidth / 3 + 'px';\r\n            btn_play.style.height = (canvas.offsetWidth / 3) / (330 / 196) + 'px'; //330 - width btn   192 - height btn\r\n            btn_play_and_records.append(btn_play);\r\n        }\r\n        if (document.getElementById('btn_records') == null) {\r\n            btn_records = document.createElement('button');\r\n            btn_records.id = 'btn_records';\r\n            btn_records.style.backgroundImage = 'url(' + _img_records_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"] + ')';\r\n            btn_records.style.width = canvas.offsetWidth / 3 + 'px';\r\n            btn_records.style.height = (canvas.offsetWidth / 3) / (330 / 196) + 'px';\r\n            btn_play_and_records.append(btn_records);\r\n        }\r\n    }\r\n    return {\r\n        btn_pause,\r\n        score_print,\r\n        get_ready,\r\n        window_score,\r\n        window_pause,\r\n        btn_continue,\r\n        container,\r\n        btn_records,\r\n        btn_play,\r\n        btn_play_and_records,\r\n        best_score,\r\n        current_score\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHtml);\r\n\n\n//# sourceURL=webpack://mygame/./src/js/Html.js?");

/***/ }),

/***/ "./src/js/Images.js":
/*!**************************!*\
  !*** ./src/js/Images.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_fon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/fon.png */ \"./src/img/fon.png\");\n/* harmony import */ var _img_ground_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/ground.png */ \"./src/img/ground.png\");\n/* harmony import */ var _img_pipe_up_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/pipe_up.png */ \"./src/img/pipe_up.png\");\n/* harmony import */ var _img_pipe_down_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/pipe_down.png */ \"./src/img/pipe_down.png\");\n\r\n\r\n\r\n\r\n\r\nconst fon = new Image();\r\nconst pipeUp = new Image();\r\nconst pipeDown = new Image();\r\nconst ground = new Image();\r\n\r\nfon.src = _img_fon_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\nground.src = _img_ground_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\npipeUp.src = _img_pipe_up_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\npipeDown.src = _img_pipe_down_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({fon, ground, pipeUp, pipeDown});\r\n\n\n//# sourceURL=webpack://mygame/./src/js/Images.js?");

/***/ }),

/***/ "./src/js/Pipe.js":
/*!************************!*\
  !*** ./src/js/Pipe.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pipe: () => (/* binding */ Pipe)\n/* harmony export */ });\nclass Pipe {\r\n\r\n    constructor(x, width, up, down) {\r\n        this._x = x;\r\n        this._width = width;\r\n        this._up = up;\r\n        this._down = down;\r\n        this._width = width;\r\n    }\r\n\r\n    get x() {\r\n        return this._x;\r\n    }\r\n\r\n    set x(value) {\r\n        this._x = value;\r\n    }\r\n\r\n    get width() {\r\n        return this._width;\r\n    }\r\n\r\n    set width(value) {\r\n        this._width = value;\r\n    }\r\n\r\n    get up() {\r\n        return this._up;\r\n    }\r\n\r\n    set up(value) {\r\n        this._up = value;\r\n    }\r\n\r\n    get down() {\r\n        return this._down;\r\n    }\r\n\r\n    set down(value) {\r\n        this._down = value;\r\n    }\r\n}\n\n//# sourceURL=webpack://mygame/./src/js/Pipe.js?");

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _img_bird_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/bird_1.png */ \"./src/img/bird_1.png\");\n/* harmony import */ var _img_bird_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bird_2.png */ \"./src/img/bird_2.png\");\n/* harmony import */ var _img_bird_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/bird_3.png */ \"./src/img/bird_3.png\");\n\r\n\r\n\r\n\r\nlet img1 = new Image()\r\nlet img2 = new Image()\r\nlet img3 = new Image()\r\n\r\nimg1.src = _img_bird_1_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\nimg2.src = _img_bird_2_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\nimg3.src = _img_bird_3_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\nclass Player {\r\n    constructor(x, y, width, height) {\r\n        this._x = x;\r\n        this._y = y;\r\n        this._width = width;\r\n        this._height = height;\r\n    }\r\n\r\n    get x() {\r\n        return this._x;\r\n    }\r\n\r\n    set x(value) {\r\n        this._x = value;\r\n    }\r\n\r\n    get y() {\r\n        return this._y;\r\n    }\r\n\r\n    set y(value) {\r\n        this._y = value;\r\n    }\r\n\r\n    get width() {\r\n        return this._width;\r\n    }\r\n\r\n    set width(value) {\r\n        this._width = value;\r\n    }\r\n\r\n    get height() {\r\n        return this._height;\r\n    }\r\n\r\n    set height(value) {\r\n        this._height = value;\r\n    }\r\n\r\n    get fon() {\r\n        let imgs = [];\r\n        imgs.push(img1)\r\n        imgs.push(img2)\r\n        imgs.push(img3)\r\n        return imgs;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mygame/./src/js/Player.js?");

/***/ }),

/***/ "./src/js/Sound.js":
/*!*************************!*\
  !*** ./src/js/Sound.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _audio_coin_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audio/coin.wav */ \"./src/audio/coin.wav\");\n/* harmony import */ var _audio_hit_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio/hit.wav */ \"./src/audio/hit.wav\");\n/* harmony import */ var _audio_swing_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/swing.wav */ \"./src/audio/swing.wav\");\n/* harmony import */ var _audio_fall_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio/fall.wav */ \"./src/audio/fall.wav\");\n\r\n\r\n\r\n\r\n\r\nconst coin = new Audio(_audio_coin_wav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nconst hit = new Audio(_audio_hit_wav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nconst swing = new Audio(_audio_swing_wav__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\nconst fall = new Audio(_audio_fall_wav__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\nfunction playCoin(){\r\n    coin.pause();\r\n    coin.currentTime = 0;\r\n    coin.play();\r\n}\r\nfunction playHit(){\r\n    hit.pause();\r\n    hit.currentTime = 0;\r\n    hit.play();\r\n}\r\nfunction playSwing(){\r\n    swing.pause();\r\n    swing.currentTime = 0;\r\n    swing.play();\r\n}\r\nfunction playFall(){\r\n    fall.pause();\r\n    fall.currentTime = 0;\r\n    fall.play();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({playCoin, playHit, playSwing, playFall, coin, hit, swing, fall});\r\n\n\n//# sourceURL=webpack://mygame/./src/js/Sound.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/js/Player.js\");\n/* harmony import */ var _Pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pipe */ \"./src/js/Pipe.js\");\n/* harmony import */ var _Html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Html.js */ \"./src/js/Html.js\");\n/* harmony import */ var _Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Images */ \"./src/js/Images.js\");\n/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sound */ \"./src/js/Sound.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _fonts_minecraft_ten_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/minecraft-ten.ttf */ \"./src/fonts/minecraft-ten.ttf\");\n/* harmony import */ var _fonts_minecraft_otf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/minecraft.otf */ \"./src/fonts/minecraft.otf\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById('canvas');\r\nconst font = new FontFace('Minecraft', 'url(fonts/minecraft-ten.ttf)');\r\nconst ctx = canvas.getContext('2d');\r\nconst startX = 300;\r\nconst startY = 900; // middle canvas - player.height\r\n\r\nlet player = new _Player__WEBPACK_IMPORTED_MODULE_0__.Player(startX, startY, 98, 69);\r\nlet bird = 0;\r\nlet speed = 1;\r\nlet stepPlayer = 0;\r\nlet stepPipe = 0;\r\nlet fonX = 0;\r\nlet groundX = 0;\r\nlet score = 0;\r\nlet pipes = [];\r\nlet pipeOk = [];\r\nlet isPause = true;\r\nlet html;\r\nlet timer;\r\nlet timer_start_animation;\r\n\r\nwindow.addEventListener('load', () => {\r\n    resize();\r\n    html = (0,_Html_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    startAnimation();\r\n    addEventListener();\r\n});\r\n\r\nfunction game() {\r\n    printFon();\r\n    setPipes();\r\n    printGround();\r\n    printPlayer();\r\n    collision();\r\n}\r\n\r\nfunction pause() {\r\n    isPause = true;\r\n    html.window_pause.style.display = 'flex';\r\n    html.btn_pause.remove();\r\n    clearInterval(timer);\r\n}\r\n\r\nfunction _continue() {\r\n    isPause = false;\r\n    html.window_pause.style.display = 'none';\r\n    html.container.append(html.btn_pause);\r\n    timer = setInterval(game, speed);\r\n}\r\n\r\nfunction setStartAnimation() {\r\n    speed = 1.5\r\n    html.container.append(html.get_ready);\r\n    html.btn_play_and_records.remove();\r\n    html.window_score.remove();\r\n    startAnimation();\r\n}\r\n\r\nfunction newGame() {\r\n    clearInterval(timer_start_animation);\r\n    html.get_ready.removeEventListener('click', newGame);\r\n    html.get_ready.animate({opacity: 0}, {duration: 1000, iterations: 1}).finished.then(() => {\r\n        html.get_ready.remove();\r\n        html.get_ready.addEventListener('click', newGame);\r\n    })\r\n    isPause = false;\r\n    bird = 0;\r\n    speed = 1.5;\r\n    stepPlayer = 0;\r\n    stepPipe = 0;\r\n    score = 0;\r\n    pipes = [];\r\n    pipeOk = [];\r\n    html.score_print.innerText = '0';\r\n    html.container.append(html.btn_pause);\r\n    html.container.append(html.score_print);\r\n    timer = setInterval(game, speed);\r\n}\r\n\r\nfunction stopGame() {\r\n    if (score > localStorage.getItem('score')) localStorage.setItem('score', score);\r\n    _Sound__WEBPACK_IMPORTED_MODULE_4__[\"default\"].playHit()\r\n    clearInterval(timer);\r\n    isPause = true;\r\n    html.btn_pause.remove();\r\n    html.score_print.remove();\r\n    stepPlayer = player.y > 1470 ? stepPlayer : 20;\r\n    if (window.navigator.vibrate) window.navigator.vibrate(100);\r\n    canvas.animate([{filter: 'brightness(100%)'}, {filter: 'brightness(1000%)'}, {filter: 'brightness(100%)'}], {\r\n        duration: 100,\r\n        iterations: 1\r\n    }).finished.then(() => {\r\n        if (player.y < 1470) setTimeout(_Sound__WEBPACK_IMPORTED_MODULE_4__[\"default\"].playFall, 150);\r\n        let interval = setInterval(() => {\r\n            speed = 0;\r\n            printFon();\r\n            setPipes();\r\n            printGround();\r\n            printPlayer();\r\n            if (player.y > 1480) {\r\n                clearInterval(interval)\r\n                html.best_score.innerText = 'BEST: ' + (localStorage.getItem('score') || 0);\r\n                html.current_score.innerText = 'SCORE: ' + score;\r\n                html.container.append(html.btn_play_and_records);\r\n                html.container.append(html.window_score);\r\n                player.x = startX;\r\n                player.y = startY;\r\n            }\r\n        }, 1);\r\n    });\r\n\r\n}\r\n\r\nfunction printFon() {\r\n    ctx.drawImage(_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fon, 0 - fonX, 0, 1080, 1920);\r\n    ctx.drawImage(_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fon, 1079 - fonX, 0, 1080, 1920);\r\n    ctx.drawImage(_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fon, 2159 - fonX, 0, 1080, 1920);\r\n    fonX = fonX + speed * 0.2;\r\n    if (fonX > 1080) fonX = 0;\r\n}\r\n\r\nfunction printGround() {\r\n    ctx.drawImage(_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ground, 0 - groundX, 0, 1080, 1920);\r\n    ctx.drawImage(_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ground, 1079 - groundX, 0, 1080, 1920);\r\n    ctx.drawImage(_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ground, 2159 - groundX, 0, 1080, 1920);\r\n    groundX = groundX + speed;\r\n    if (groundX > 1080) groundX = 0;\r\n}\r\n\r\nfunction printPlayer() {\r\n    if (bird < 80) bird++;\r\n    player.y = player.y + ((-65 + stepPlayer) / 12);\r\n    ctx.save();\r\n    // ctx.beginPath();\r\n    ctx.translate(player.x, player.y);\r\n    ctx.rotate(((-60 + (stepPlayer / 2)) * Math.PI) / 180);\r\n    ctx.drawImage(player.fon[Math.floor(bird / 40)], -(player.width / 2), -(player.height / 2), player.width, player.height);\r\n    ctx.restore();\r\n    // ctx.fillStyle = 'rgba(76,255,0,0.6)';\r\n    // ctx.arc(player.x, player.y, player.height / 2, 0, (Math.PI / 180) * 360);\r\n    // ctx.fill();\r\n    stepPlayer++;\r\n}\r\n\r\nfunction setPipes() {\r\n    if (stepPipe > 540) {\r\n        let up = (Math.random() * 65 + 30) * 10; // 300-950px    1250 - 300 = 950px\r\n        let down = up + 300;\r\n        let pipe = new _Pipe__WEBPACK_IMPORTED_MODULE_1__.Pipe(1920, 180, up, down);  //1920 height canvas\r\n        pipes.push(pipe);\r\n        stepPipe = 0;\r\n    }\r\n\r\n    pipes.forEach(pipe => printPipes(pipe));\r\n    pipes = pipes.filter(pipe => pipe.x + pipe.width > 0);\r\n    stepPipe = stepPipe + speed;\r\n}\r\n\r\nfunction printPipes(pipe) {\r\n    pipe.x = pipe.x - speed;\r\n    ctx.drawImage(_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pipeUp, pipe.x, pipe.up - 1428, pipe.width, 1428); // 1428 - height pipe px\r\n    ctx.drawImage(_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pipeDown, pipe.x, pipe.down, pipe.width, 1428);\r\n    setScore(pipe);\r\n    // ctx.fillStyle = 'rgba(255,0,0,0.6)';\r\n    // ctx.fillRect(pipe.x, pipe.up - 1428, pipe.width, 1428);\r\n    // ctx.fillRect(pipe.x, pipe.down, pipe.width, 1428);\r\n\r\n}\r\n\r\nfunction setScore(pipe) {\r\n    let middle = pipe.x + (pipe.width / 2) - (player.width / 2);\r\n    if (middle < player.x) {\r\n        if (!pipeOk.includes(pipe)) {\r\n            pipeOk.push(pipe);\r\n            score++;\r\n            _Sound__WEBPACK_IMPORTED_MODULE_4__[\"default\"].playCoin();\r\n            html.score_print.innerText = score;\r\n        }\r\n    }\r\n    if (pipeOk.length > 1) pipeOk.shift();\r\n}\r\n\r\nfunction collision() {\r\n    if (player.y > 1470) stopGame(); // 1920 - height ground  = 1460 +- правки\r\n    pipes.forEach(pipe => {\r\n        let radius = player.height / 2;\r\n        let xPipe = Math.max(pipe.x, Math.min(player.x, pipe.x + pipe.width));\r\n        let yPipeUp = Math.max(Number.NEGATIVE_INFINITY, Math.min(player.y, pipe.up));\r\n        let yPipeDown = Math.max(pipe.down, Math.min(player.y, Number.POSITIVE_INFINITY));\r\n\r\n        const distanceToUpPipe = Math.sqrt((xPipe - player.x) ** 2 + (yPipeUp - player.y) ** 2);\r\n        const distanceToDownPipe = Math.sqrt((xPipe - player.x) ** 2 + (yPipeDown - player.y) ** 2);\r\n        if (distanceToUpPipe <= radius - 6 || distanceToDownPipe <= radius - 6) {  // -6 потому что столько пикселей занимает один нарисованный пиксель\r\n            stopGame(timer);\r\n        }\r\n    });\r\n}\r\n\r\nfunction resize() {\r\n    ctx.setTransform(1, 0, 0, 1, 0, 0);\r\n    let _width = innerHeight * (3 / 4); //максимальная ширина при разрешение 3/4\r\n    let width = innerWidth > _width ? _width : innerWidth; //максимальная ширина\r\n    canvas.style.height = innerHeight + 'px';\r\n    canvas.style.maxWidth = width + 'px';\r\n    let coefficient = 1 / (9 / 16) * (width / innerHeight);\r\n    ctx.scale(1 / coefficient, 1);\r\n    font.load().then((f) => {\r\n        document.fonts.add(font);\r\n    });\r\n}\r\n\r\nfunction startAnimation() {\r\n    player.x = startX;\r\n    player.y = startY;\r\n    timer_start_animation = setInterval(() => {\r\n        printFon();\r\n        printPlayer();\r\n        printGround();\r\n        if (player.y > startY) {\r\n            bird = 0;\r\n            player.y = startY;\r\n            stepPlayer = 0;\r\n        }\r\n    }, 7);\r\n}\r\n\r\nfunction addEventListener() {\r\n    html.get_ready.addEventListener('click', newGame);\r\n    html.btn_continue.addEventListener('click', _continue);\r\n    html.btn_pause.addEventListener('touchstart', pause);\r\n    html.btn_pause.addEventListener('click', pause);\r\n    html.btn_play.addEventListener('touchstart', (e) => {\r\n        e.preventDefault();\r\n        html.btn_play.style.filter = 'brightness(80%)';\r\n\r\n    });\r\n    html.btn_play.addEventListener('touchend', (e) => {\r\n        e.preventDefault();\r\n        html.btn_play.style.filter = 'none';\r\n        setStartAnimation();\r\n    });\r\n    html.btn_play.addEventListener('click', setStartAnimation);\r\n\r\n    document.addEventListener('keydown', function (e) {\r\n        if (!isPause) {\r\n            if (e.key === 'ArrowUp') {\r\n                bird = 0;\r\n                stepPlayer = 0;\r\n            }\r\n            if (e.key === ' ') {\r\n                clearInterval(timer);\r\n                newGame();\r\n            }\r\n            if (e.key === 'Escape') {\r\n                pause();\r\n            }\r\n        }\r\n    });\r\n\r\n    document.addEventListener('touchstart', () => {\r\n        if (!isPause) {\r\n            _Sound__WEBPACK_IMPORTED_MODULE_4__[\"default\"].playSwing()\r\n            bird = 0;\r\n            stepPlayer = 0;\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://mygame/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;