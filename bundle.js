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

/***/ "./src/audio/coin.mp3":
/*!****************************!*\
  !*** ./src/audio/coin.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e206b0f8566754353adbb4e6c12fdaf3.mp3\");\n\n//# sourceURL=webpack://mygame/./src/audio/coin.mp3?");

/***/ }),

/***/ "./src/audio/hit.mp3":
/*!***************************!*\
  !*** ./src/audio/hit.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"89fde639057840b2ce069669a548e78b.mp3\");\n\n//# sourceURL=webpack://mygame/./src/audio/hit.mp3?");

/***/ }),

/***/ "./src/audio/swing.mp3":
/*!*****************************!*\
  !*** ./src/audio/swing.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"ecca781f5e718f368ae7310362123f96.mp3\");\n\n//# sourceURL=webpack://mygame/./src/audio/swing.mp3?");

/***/ }),

/***/ "./src/img/fon2.png":
/*!**************************!*\
  !*** ./src/img/fon2.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"3b7d6f8ef36316411b8284702e3aebcf.png\");\n\n//# sourceURL=webpack://mygame/./src/img/fon2.png?");

/***/ }),

/***/ "./src/img/pipe.png":
/*!**************************!*\
  !*** ./src/img/pipe.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"81cc10d95418286514d808d4a77c41f2.png\");\n\n//# sourceURL=webpack://mygame/./src/img/pipe.png?");

/***/ }),

/***/ "./src/img/pngwing.png":
/*!*****************************!*\
  !*** ./src/img/pngwing.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"95757f2cc9ccd26b784c0842194693b1.png\");\n\n//# sourceURL=webpack://mygame/./src/img/pngwing.png?");

/***/ }),

/***/ "./src/img/pngwing_kill.png":
/*!**********************************!*\
  !*** ./src/img/pngwing_kill.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"961f39a266b090d9ffd8077eccf39259.png\");\n\n//# sourceURL=webpack://mygame/./src/img/pngwing_kill.png?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\r\n    constructor(x, y, size) {\r\n        this._x = x;\r\n        this._y = y;\r\n        this._size = size;\r\n    }\r\n\r\n    get x() {\r\n        return this._x;\r\n    }\r\n\r\n    set x(value) {\r\n        this._x = value;\r\n    }\r\n\r\n    get y() {\r\n        return this._y;\r\n    }\r\n\r\n    set y(value) {\r\n        this._y = value;\r\n    }\r\n\r\n    get size() {\r\n        return this._size;\r\n    }\r\n\r\n    set size(value) {\r\n        this._size = value;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mygame/./src/js/Player.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/js/Player.js\");\n/* harmony import */ var _Pipe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pipe.js */ \"./src/js/Pipe.js\");\n/* harmony import */ var _img_fon2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/fon2.png */ \"./src/img/fon2.png\");\n/* harmony import */ var _img_pngwing_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/pngwing.png */ \"./src/img/pngwing.png\");\n/* harmony import */ var _img_pngwing_kill_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/pngwing_kill.png */ \"./src/img/pngwing_kill.png\");\n/* harmony import */ var _img_pipe_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/pipe.png */ \"./src/img/pipe.png\");\n/* harmony import */ var _audio_coin_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../audio/coin.mp3 */ \"./src/audio/coin.mp3\");\n/* harmony import */ var _audio_hit_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../audio/hit.mp3 */ \"./src/audio/hit.mp3\");\n/* harmony import */ var _audio_swing_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../audio/swing.mp3 */ \"./src/audio/swing.mp3\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById('canvas');\r\nconst ctx = canvas.getContext('2d');\r\nconst startX = 110;\r\nconst startY = 330;\r\nconst fon = new Image();\r\nconst pipeIco = new Image();\r\nconst playerKill = new Image();\r\nconst coin = new Audio(_audio_coin_mp3__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\nconst hit = new Audio(_audio_hit_mp3__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\nconst swing = new Audio(_audio_swing_mp3__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\n\r\n\r\nlet playerIco;\r\nlet player;\r\nlet timer;\r\nlet speed = 1;\r\nlet stepPlayer = 0;\r\nlet stepPipe = 0;\r\nlet imgX = 0;\r\nlet score = 0;\r\nlet pipes = [];\r\n\r\nnewGame();\r\n\r\ndocument.addEventListener('keydown', function (e) {\r\n    if (e.key === 'ArrowUp') {\r\n        swing.currentTime = 0.0;\r\n        swing.play();\r\n        stepPlayer = 0;\r\n    }\r\n    if (e.key === ' ') {\r\n        clearInterval(timer);\r\n        newGame();\r\n    }\r\n});\r\ndocument.addEventListener('touchstart', (event) => {\r\n    swing.currentTime = 0.0;\r\n    swing.play();\r\n    stepPlayer = 0;\r\n})\r\nfunction game() {\r\n    printFon();\r\n    // printSetka();\r\n    setPipes();\r\n    printPlayer();\r\n    printScore();\r\n}\r\n\r\nfunction newGame() {\r\n    // ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    player = new _Player_js__WEBPACK_IMPORTED_MODULE_0__.Player(startX, startY, 40);\r\n    playerIco = new Image();\r\n    fon.src = _img_fon2_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n    playerIco.src = _img_pngwing_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n    playerKill.src = _img_pngwing_kill_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\n    pipeIco.src = _img_pipe_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\r\n    player.x = startX;\r\n    player.y = startY;\r\n    score = 0;\r\n    speed = 1;\r\n    stepPlayer = 0;\r\n    stepPipe = 0;\r\n    imgX = 0;\r\n    pipes = [];\r\n    timer = setInterval(game, speed);\r\n}\r\n\r\nfunction stopGame() {\r\n    playerIco = playerKill;\r\n    hit.currentTime = 0.4;\r\n    hit.volume = 0.5;\r\n    hit.play();\r\n    clearInterval(timer);\r\n}\r\n\r\nfunction printFon() {\r\n    ctx.drawImage(fon, 0 - imgX, 0, 900, 700);\r\n    imgX = imgX + speed;\r\n    if (imgX > 320) imgX = 0;\r\n}\r\n\r\nfunction printScore() {\r\n    ctx.font = 'bold 48px serif';\r\n    ctx.strokeText(score, 237, 80);\r\n}\r\n\r\nfunction printPlayer() {\r\n    player.y = player.y + ((-60 + stepPlayer) / 15);\r\n    ctx.save();\r\n    ctx.translate(player.x + 20, player.y + 20);\r\n    ctx.rotate(((-90 + stepPlayer) * Math.PI) / 180);\r\n    ctx.drawImage(playerIco, -32, -23, 62, 47);\r\n    ctx.restore();\r\n    // ctx.fillStyle = 'rgba(255,0,0,0.6)';\r\n    // ctx.fillRect(player.x, player.y, player.size, player.size);\r\n    stepPlayer++;\r\n}\r\n\r\nfunction setPipes() {\r\n    if (stepPipe > 280) {\r\n        let up = (Math.random() * 35 + 5) * 10; // 50-400px\r\n        let down = up + 200;\r\n        let pipe = new _Pipe_js__WEBPACK_IMPORTED_MODULE_1__.Pipe(600, 80, up, down);\r\n        pipes.push(pipe);\r\n        stepPipe = 0;\r\n    }\r\n    if (player.y > 600) stopGame();\r\n    pipes.forEach(pipe => printPipes(pipe));\r\n    pipes = pipes.filter(pipe => pipe.x + pipe.width > 0);\r\n    let pipeSuc = pipes.filter(pipe => {\r\n        let middle = pipe.x + (pipe.width / 2) - (player.size / 2);\r\n        return middle < player.x && middle >= player.x - 1;\r\n    }).length;\r\n    if (pipeSuc > 0) {\r\n        score++;\r\n        coin.pause();\r\n        coin.currentTime = 0.55;\r\n        coin.play();\r\n    }\r\n    stepPipe++;\r\n}\r\n\r\nfunction printPipes(pipe) {\r\n    pipe.x = pipe.x - speed;\r\n    ctx.save();\r\n    ctx.translate(pipe.x, pipe.y);\r\n    ctx.rotate((180 * Math.PI) / 180);\r\n    ctx.drawImage(pipeIco, -pipe.x - pipe.width - 4, -pipe.up - 3, pipe.width + 7, 600);\r\n    ctx.restore();\r\n    ctx.drawImage(pipeIco, pipe.x - 4, pipe.down - 3, pipe.width + 7, 600);\r\n\r\n    // ctx.fillStyle = 'rgba(255,0,0,0.6)';\r\n    // ctx.fillRect(pipe.x, 0, pipe.width, pipe.up);\r\n    // ctx.fillRect(pipe.x, pipe.down, pipe.width, 640 - pipe.down);\r\n\r\n    if ((player.y < pipe.up || player.y + player.size > pipe.down)\r\n        && ((player.x + player.size) > pipe.x && (player.x) < pipe.x + pipe.width)\r\n    ) {\r\n        stopGame(timer);\r\n    }\r\n}\r\n\r\nfunction printSetka() {\r\n    for (let i = 1; i < 70; i++) {\r\n        ctx.beginPath();\r\n        ctx.strokeStyle = 'rgba(0,0,0,0.3)';\r\n        ctx.moveTo(0, 10 * i);\r\n        ctx.lineTo(500, 10 * i);\r\n        ctx.stroke();\r\n    }\r\n    for (let i = 1; i < 50; i++) {\r\n        ctx.beginPath();\r\n        ctx.strokeStyle = 'rgba(0,0,0,0.3)';\r\n        ctx.moveTo(10 * i, 0);\r\n        ctx.lineTo(10 * i, 700);\r\n        ctx.stroke();\r\n    }\r\n\r\n    ctx.strokeStyle = 'rgba(0,0,0,0.3)';\r\n    ctx.beginPath();\r\n    ctx.moveTo(250, 0);\r\n    ctx.lineTo(250, 700);\r\n    ctx.stroke();\r\n    ctx.beginPath();\r\n    ctx.moveTo(0, 350);\r\n    ctx.lineTo(500, 350);\r\n    ctx.stroke();\r\n}\r\n\n\n//# sourceURL=webpack://mygame/./src/js/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;