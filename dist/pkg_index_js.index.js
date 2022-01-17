"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwasm_test"] = self["webpackChunkwasm_test"] || []).push([["pkg_index_js"],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__wbg_log_618ac130e765181c\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_618ac130e765181c),\n/* harmony export */   \"__wbg_log_baf356b8ecdbe2b5\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_baf356b8ecdbe2b5),\n/* harmony export */   \"__wbg_log_ffd690e948cd2b91\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_ffd690e948cd2b91),\n/* harmony export */   \"run\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.run)\n/* harmony export */ });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__, _index_bg_js__WEBPACK_IMPORTED_MODULE_0__]);\n([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__, _index_bg_js__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_start();\n\n});\n\n//# sourceURL=webpack://wasm-test/./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"run\": () => (/* binding */ run),\n/* harmony export */   \"__wbg_log_ffd690e948cd2b91\": () => (/* binding */ __wbg_log_ffd690e948cd2b91),\n/* harmony export */   \"__wbg_log_baf356b8ecdbe2b5\": () => (/* binding */ __wbg_log_baf356b8ecdbe2b5),\n/* harmony export */   \"__wbg_log_618ac130e765181c\": () => (/* binding */ __wbg_log_618ac130e765181c)\n/* harmony export */ });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var TextDecoder = __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextDecoder\"];\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n/**\n*/\nfunction run() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.run();\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction logError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n            } catch(_) {\n                return \"<failed to stringify thrown value>\";\n            }\n        }());\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n        throw e;\n    }\n}\n\nfunction __wbg_log_ffd690e948cd2b91() { return logError(function (arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n}, arguments) };\n\nfunction __wbg_log_baf356b8ecdbe2b5() { return logError(function (arg0) {\n    console.log(arg0 >>> 0);\n}, arguments) };\n\nfunction __wbg_log_618ac130e765181c() { return logError(function (arg0, arg1, arg2, arg3) {\n    console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));\n}, arguments) };\n\n\n});\n\n//# sourceURL=webpack://wasm-test/./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"fd30ca4129c25a840d82\", {\n\t\t\"./index_bg.js\": {\n\t\t\t\"__wbg_log_ffd690e948cd2b91\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_ffd690e948cd2b91,\n\t\t\t\"__wbg_log_baf356b8ecdbe2b5\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_baf356b8ecdbe2b5,\n\t\t\t\"__wbg_log_618ac130e765181c\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_618ac130e765181c\n\t\t}\n\t});\n}\n__webpack_require__.a(module, (__webpack_handle_async_dependencies__) => {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\treturn __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);\n}, 1);\n\n//# sourceURL=webpack://wasm-test/./pkg/index_bg.wasm?");

/***/ })

}]);