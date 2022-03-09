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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Lato-Regular.ttf */ \"./src/fonts/Lato-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Lato-Bold.ttf */ \"./src/fonts/Lato-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Lato-Thin.ttf */ \"./src/fonts/Lato-Thin.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Lato\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-style: normal;\\n  font-weight: 400;\\n}\\n@font-face {\\n  font-family: \\\"Lato\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-style: normal;\\n  font-weight: 700;\\n}\\n@font-face {\\n  font-family: \\\"Lato\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  font-style: normal;\\n  font-weight: 250;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  font-family: \\\"Lato\\\";\\n  transition: all 0.3s linear;\\n}\\n\\nbody {\\n  width: 100%;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgb(64, 77, 72);\\n}\\n\\n.container {\\n  position: relative;\\n  width: 70%;\\n  min-height: 80vh;\\n  display: grid;\\n  grid-template-rows: 1fr 10fr;\\n  grid-template-columns: 1fr 3fr;\\n  border-radius: 12px;\\n  /* overflow: hidden; */\\n}\\n\\n.blackout {\\n  position: absolute;\\n  display: none;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.39);\\n  z-index: 9;\\n  border-radius: 12px;\\n}\\n\\n.pop-up-task {\\n  background-color: rgb(231, 231, 231);\\n  border: 5px solid rgb(30, 155, 97);\\n  border-radius: 10px;\\n  position: absolute;\\n  min-width: 900px;\\n  min-height: 500px;\\n  left: calc(50% - 450px);\\n  top: calc(50% - 300px);\\n  z-index: 10;\\n  flex-direction: column;\\n  display: none;\\n}\\n\\n.pop-up-task > * {\\n  margin: 1rem 5rem;\\n}\\n\\n.pop-up-comments {\\n  background-color: rgb(231, 231, 231);\\n  border: 5px solid rgb(30, 155, 97);\\n  border-radius: 10px;\\n  position: absolute;\\n  min-width: 900px;\\n  min-height: 500px;\\n  left: calc(50% - 450px);\\n  top: calc(50% - 300px);\\n  z-index: 10;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  display: none;\\n}\\n\\n#comments-titles {\\n  min-width: 400px;\\n  display: flex;\\n  justify-content: space-between;\\n  font-size: 16px;\\n  border-bottom: 2px solid rgba(30, 155, 97, 0.5);\\n  padding-bottom: 6px;\\n}\\n\\n#task-title-c {\\n  font-weight: 700;\\n}\\n\\n#close-button {\\n  position: absolute;\\n  top: 8px;\\n  right: 8px;\\n  height: 20px;\\n  width: 20px;\\n  border-radius: 50%;\\n  border: 2px solid rgb(64, 77, 72);\\n  background-color: rgb(30, 155, 97);\\n  color: white;\\n  height: 2rem;\\n  width: 2rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-weight: 700;\\n  font-size: 16px;\\n}\\n\\n#description-container {\\n  background-color: white;\\n  border: 2px rgb(63, 182, 89) solid;\\n  min-height: 200px;\\n  min-width: 400px;\\n  margin-top: 15px;\\n}\\n\\n#complete-button {\\n  background-color: white;\\n  border: solid 3px rgb(30, 155, 97);\\n  padding: 3px 6px;\\n  font-size: 16px;\\n}\\n\\n#complete-button.toggle {\\n  background-color: rgb(223, 223, 223);\\n  border: solid 3px rgb(105, 105, 105);\\n  color: white;\\n}\\n\\n/* */\\n\\n.comments > p {\\n  font-size: 16px;\\n  font-weight: 400;\\n}\\n\\n#due-date {\\n  width: 20%;\\n}\\nlabel {\\n  margin-bottom: 0 !important;\\n}\\n\\n.radio {\\n  margin-left: 1rem;\\n  margin-right: 0.2rem;\\n}\\nselect {\\n  color: rgb(16, 102, 62);\\n  font-weight: 700;\\n  width: 40%;\\n  background-color: white;\\n  border: none;\\n  height: 1.4rem;\\n  border: 1px solid gray;\\n}\\noption {\\n  font-family: \\\"Lato\\\", monospace;\\n  color: rgb(16, 102, 62);\\n  font-weight: 700;\\n}\\n\\n#urgent {\\n  background-color: red;\\n}\\n\\n.confirm {\\n  width: 20%;\\n  align-self: center;\\n  border: none;\\n  background-color: rgb(30, 155, 97);\\n  border-radius: 5px;\\n  height: 30px;\\n  font-size: 18px;\\n  color: white;\\n}\\n\\n.confirm:hover {\\n  color: rgb(30, 155, 97);\\n}\\n\\n.pop-up-project {\\n  display: none;\\n}\\n\\n.header {\\n  grid-row: 1/2;\\n  grid-column: 1/3;\\n  width: 100%;\\n  background-color: rgb(21, 179, 105);\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 2rem;\\n  color: white;\\n  font-weight: 700;\\n  font-size: 24px;\\n  border-radius: 12px 12px 0 0;\\n}\\n\\n.right {\\n  border: 2px solid rgb(64, 77, 72);\\n  background-color: rgb(30, 155, 97);\\n  height: 2rem;\\n  width: 2rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 50%;\\n}\\n\\n.right:hover {\\n  scale: 1.05;\\n}\\n\\n.control-panel {\\n  grid-row: 2/3;\\n  grid-column: 1/2;\\n  background-color: rgb(231, 231, 231);\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 0 0 0 12px;\\n}\\n\\nul li {\\n  margin-bottom: 1rem;\\n}\\n\\n.control-panel > * {\\n  margin: 2rem;\\n}\\n\\n.projects {\\n  margin-right: 0;\\n  margin-top: 0;\\n}\\n\\n.projects-title {\\n  margin-left: 1rem;\\n  margin-bottom: 2rem;\\n  border-bottom: 1px rgb(187, 187, 187) solid;\\n  text-indent: 1rem;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.add-project-button {\\n  margin-right: 1rem;\\n  font-weight: 400;\\n  border: none;\\n  font-size: 20px;\\n  transition: all 0.1s linear;\\n}\\nbutton:hover {\\n  scale: 1.2;\\n  background: none;\\n}\\n\\nbutton {\\n  transition: all 0.15s ease-in-out;\\n}\\n\\n/* this selects the tasks listed below projects*/\\n.projects-ul li ul li {\\n  margin-left: 2rem;\\n  margin-top: 1rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.work-ul {\\n  margin: 1rem 0 1rem 2.5rem;\\n}\\n\\n.personal-ul {\\n  margin: 1rem 0 1rem 2.5rem;\\n}\\n\\n.urgent::before {\\n  content: \\\"\\\";\\n  height: 10px;\\n  width: 10px;\\n  margin-right: 5px;\\n  border-radius: 50%;\\n  background-color: rgb(226, 79, 79);\\n  display: inline-block;\\n}\\n\\n.medium::before {\\n  content: \\\"\\\";\\n  height: 10px;\\n  width: 10px;\\n  margin-right: 5px;\\n  border-radius: 50%;\\n  background-color: rgb(226, 226, 94);\\n  display: inline-block;\\n}\\n\\n.relax::before {\\n  content: \\\"\\\";\\n  height: 10px;\\n  width: 10px;\\n  margin-right: 5px;\\n  border-radius: 50%;\\n  background-color: rgb(97, 207, 97);\\n  display: inline-block;\\n}\\n\\n.none::before {\\n  content: \\\"\\\";\\n  height: 10px;\\n  width: 10px;\\n  margin-right: 5px;\\n  border-radius: 50%;\\n  background-color: rgb(204, 204, 204);\\n  display: inline-block;\\n}\\n\\n.display {\\n  background-color: rgb(247, 247, 247);\\n  padding: 4rem;\\n  border-radius: 0 0 12px 0;\\n}\\n\\n.display-title {\\n  margin-bottom: 1rem;\\n}\\n\\n.tasks-container {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.task {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  border-bottom: 1px solid rgb(187, 187, 187);\\n  margin-bottom: 1rem;\\n  padding: 0.5rem;\\n  height: 20px;\\n}\\n\\n.task-left {\\n  display: flex;\\n  align-items: center;\\n  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);\\n}\\n\\n.task-right {\\n  display: flex;\\n  align-items: center;\\n  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);\\n}\\n\\n.task-right > p + p {\\n  margin-left: 1rem;\\n  color: rgb(114, 114, 114);\\n}\\n\\n.urgent-task::before {\\n  content: \\\"\\\";\\n  height: 10px;\\n  width: 10px;\\n  margin-right: 10px;\\n  border-radius: 50%;\\n  background-color: rgb(241, 154, 154);\\n  border: 2px rgb(199, 0, 0) solid;\\n  display: inline-block;\\n}\\n\\n.medium-task::before {\\n  content: \\\"\\\";\\n  height: 10px;\\n  width: 10px;\\n  margin-right: 10px;\\n  border-radius: 50%;\\n  background-color: rgb(241, 241, 188);\\n  border: 2px rgb(226, 209, 54) solid;\\n  display: inline-block;\\n}\\n\\n.relax-task::before {\\n  content: \\\"\\\";\\n  height: 10px;\\n  width: 10px;\\n  margin-right: 10px;\\n  border-radius: 50%;\\n  background-color: rgb(192, 247, 175);\\n  border: 2px rgb(73, 197, 57) solid;\\n  display: inline-block;\\n}\\n\\n.add-task-left {\\n  display: flex;\\n  align-items: center;\\n}\\n.add-task-button {\\n  margin-right: 1rem;\\n  font-weight: 400;\\n  border: none;\\n  font-size: 20px;\\n  background: none;\\n}\\n\\n.grey-done::before {\\n  background-color: rgb(235, 235, 235) !important;\\n  border: 2px rgb(168, 168, 168) solid !important;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ thisPlay)\n/* harmony export */ });\n/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask */ \"./src/newTask.js\");\n/* harmony import */ var _projList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projList */ \"./src/projList.js\");\n\n\n\n\n\n\nfunction thisPlay(){\n    const container = document.querySelector(\".tasks-container\");\n    const toAdd = latestTask();\n    const taskLeft = document.createElement('div');\n    const taskRight = document.createElement('div');\n    const taskDiv = document.createElement('div');\n    const taskDateArray = toAdd.dueDate.toString().split(\" \").slice(0, 4);\n    const taskDateDisplay = taskDateArray.join(\" \");\n    const description = toAdd.description;\n    taskDiv.classList.add(\"task\");\n    taskLeft.classList.add(\"task-left\");\n    taskLeft.setAttribute('id', toAdd.id);\n    taskRight.classList.add(\"task-right\");\n    taskLeft.textContent = toAdd.title;\n    let family = toAdd.projectFamily.split(\"-\"); \n        family.shift(); \n        family.pop(); \n        let displayFamily = family.join(' ');\n    taskRight.textContent = `${taskDateDisplay}\\u00A0\\u00A0\\u00A0\\u00A0${displayFamily}`\n    taskLeft.classList.add(`${toAdd.priority}-task`);\n    taskDiv.append(taskLeft, taskRight);\n    taskLeft.style.color = \"black\";\n    taskLeft.addEventListener('click', (e)=> {\n            taskInfo(e, displayFamily, description);\n    });\n    container.appendChild(taskDiv);\n};\n\nfunction opTaskInfo(w){\n    w.style.display = \"flex\";\n};\n\nfunction closeTaskInfo(w){\n    w.style.display = \"none\";\n};\n\n\nfunction taskInfo(ev, fam, description){\n    const closeButton = document.querySelector(\"#close-button\");\n    const completeButton = document.querySelector(\"#complete-button\");\n    const window = document.querySelector(\".pop-up-comments\");\n    const taskTitleDOM = document.querySelector(\"#task-title-c\");\n    const taskFamilyDOM = document.querySelector(\"#task-project-c\");\n    const descriptionDOM = document.querySelector(\"#description-container\");\n    taskTitleDOM.innerText = ev.target.textContent;\n    taskFamilyDOM.innerText = fam;\n    descriptionDOM.innerText = description;\n\n    if(ev.target.classList.contains(\"grey-done\")){\n        completeButton.classList.add(\"toggle\");\n        completeButton.textContent = \"Complete\";\n    }else{\n        completeButton.classList.remove(\"toggle\");\n        completeButton.textContent = \"Mark as complete\";\n    }\n\n    opTaskInfo(window);\n    (0,_newTask__WEBPACK_IMPORTED_MODULE_0__.blackOn)();\n    closeButton.addEventListener('click', ()=>{\n        (0,_newTask__WEBPACK_IMPORTED_MODULE_0__.blackOff)();\n        closeTaskInfo(window);\n        closeButton.replaceWith(closeButton.cloneNode(true));  //remove event listeners\n        completeButton.replaceWith(completeButton.cloneNode(true));  \n    });\n    completeButton.addEventListener('click', (e)=>{\n        toggleButton(e, ev);\n    });\n};\n\nfunction toggleButton(e, ev){\n    if(e.target.textContent == \"Mark as complete\"){\n        e.target.textContent = \"Complete\";\n        e.target.classList.add(\"toggle\");\n        greyOut(ev);\n    }else{\n        e.target.classList.remove(\"toggle\");\n        e.target.textContent = \"Mark as complete\";\n        greyOut(ev);\n    }\n};\n\nfunction greyOut(e){\n    if(e.target.style.color == \"black\"){\n        e.target.style.color = \"grey\";\n        e.target.parentNode.style.color = \"grey\";\n        e.target.classList.add(\"grey-done\");\n        (0,_projList__WEBPACK_IMPORTED_MODULE_1__.tasksColorGrey)(e.target.id);\n        \n    }else{\n        e.target.style.color = \"black\";\n        e.target.parentNode.style.color = \"black\";\n        e.target.classList.remove(\"grey-done\");\n        (0,_projList__WEBPACK_IMPORTED_MODULE_1__.tasksColorBlack)(e.target.id);\n    };\n}\n\n\nfunction latestTask(){\n    const taskArray = (0,_newTask__WEBPACK_IMPORTED_MODULE_0__.taskArrayUpdate)();\n    let latestTask = taskArray[taskArray.length-1];\n    return latestTask;\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _newProj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProj.js */ \"./src/newProj.js\");\n/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newTask.js */ \"./src/newTask.js\");\n\n\n\n\n\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_newProj_js__WEBPACK_IMPORTED_MODULE_2__.newProject)();\n(0,_newTask_js__WEBPACK_IMPORTED_MODULE_3__.newTask)();\n(0,_newProj_js__WEBPACK_IMPORTED_MODULE_2__.initProjectOnly)();\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/newProj.js":
/*!************************!*\
  !*** ./src/newProj.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProject\": () => (/* binding */ newProject),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"initProjectOnly\": () => (/* binding */ initProjectOnly)\n/* harmony export */ });\n\nconst projArray = [];\n\nconst projectList = function(){\n    let thisArray = projArray;\n    return thisArray;\n}\n\nconst ProjectFactory = (name) =>{\n    let noSpaceName = name.replace(/\\s/g, ''); //remove spaces from string for valid class name\n    const classTag = checkRepeatedClassName(`class-${noSpaceName}-ul`); //add 'class' to each name so if user creates project named '123' class name is still valid\n    let projTasks = [];\n    let greyedOut = false;\n    return {name, classTag, projTasks, greyedOut}\n};\n\nfunction newProject(){\n    const butt = document.querySelector(\".add-project-button\");\n    butt.addEventListener('click', projectAdd);\n}\n\nconst projectAdd = function(){\n    let projectObj = ProjectFactory(prompt(\"What will this project be called?\"));\n    if(!projectObj.name){\n        projectObj.name = \"Unnamed\";\n        projectObj.classTag = \"class-unnamed-ul\";\n    }\n    console.log(projectObj.name)\n    appendProj(projectObj);\n};\n\n\nconst appendProj = function(proj){\n    const container = document.querySelector(\".projects-ul\");\n    const projectCapsule = document.createElement(\"li\");\n    const subcategory = document.createElement(\"ul\");\n    subcategory.classList.add(proj.classTag);\n    projectCapsule.textContent = proj.name;\n    projectCapsule.appendChild(subcategory);\n    container.appendChild(projectCapsule);\n    projArray.push(proj);\n}\n\nconst checkRepeatedClassName = function(newTag){\n    const projects = projectList();\n    const classArray = projects.map(function(obj){\n        return obj.classTag;\n    });\n    let count = 0;\n    let className = \"\";\n    let fullName = newTag.split(\"-\"); \n        fullName.shift(); \n        fullName.pop(); \n    let middleName= fullName.join(' ');\n\n    for(let eachClass of classArray){\n        if(eachClass == newTag){\n            count ++;\n        }};\n        //////\n    count != 0 ? className = `class-${middleName+count}-ul` : className = newTag;\n    return className;\n};\n\n\n\n\nconst initProjectOnly = function(){\n    const Work = ProjectFactory(\"Work\");\n    appendProj(Work);\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/newProj.js?");

/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"taskArrayUpdate\": () => (/* binding */ taskArrayUpdate),\n/* harmony export */   \"returnTasks\": () => (/* binding */ returnTasks),\n/* harmony export */   \"blackOn\": () => (/* binding */ blackOn),\n/* harmony export */   \"blackOff\": () => (/* binding */ blackOff)\n/* harmony export */ });\n/* harmony import */ var _projList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projList.js */ \"./src/projList.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* harmony import */ var _newProj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProj.js */ \"./src/newProj.js\");\n\n\n\n\nconst taskArray = [];\nlet updatedArray = [];\n\nconst TaskFactory = (family) =>{\n    let titleCheck = \"\"\n    if(document.querySelector(\"#name\").value == \"\"){\n        titleCheck = \"Unnamed Task\";\n    }else{\n        titleCheck = document.querySelector(\"#name\").value;\n    };\n    const title = checkForRepeatedTaskName(titleCheck);\n    const description = document.querySelector(\"#description\").value;\n    const dueDate = new Date(document.querySelector(\"#due-date\").value); //\n    const priority = document.querySelector('input[name=\"prio\"]:checked').value; //selected checked value from radio\n    const projectFamily = family;\n    const id = `${title}+${priority[0]}`;\n    return {title, description, priority, dueDate, projectFamily, id}\n};\n\nconst taskAdd = function(selectWindow){\n    const projectsData = (0,_projList_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplay)(selectWindow);\n    const thisClass = projectsData.thisClass;\n    const task = TaskFactory(thisClass);\n    const thisProj = projectsData.thisProject;\n    thisProj.projTasks.push(task)\n    taskArray.push(task);\n    (0,_projList_js__WEBPACK_IMPORTED_MODULE_0__.taskToProjectList)(projectsData, task);\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\nlet count = 0;\nconst checkForRepeatedTaskName = function(toCheck){\n    let boolean = false;\n    for(let task of taskArray){\n        if(task.title ==toCheck){\n            boolean = true;\n            count ++;\n        };\n    };\n    if(boolean == true){\n        return toCheck + count;\n    }else{\n        return toCheck;\n    }\n};\n\nconst newTask = function(){\n    const popUpTaskScreen = document.querySelector(\".pop-up-task\");\n    const confirmButton = document.querySelector(\".confirm\");  \n    const openPopUpButton = document.querySelector(\".add-task-button\");\n    const selectWindow = document.querySelector(\"#proj-names\");\n    openPopUpButton.addEventListener('click',  ()=> {\n        document.querySelector(\"#name\").value = \"New Project\";\n        popUp(popUpTaskScreen);\n        (0,_projList_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectList)(selectWindow);\n    });\n    confirmButton.addEventListener('click', ()=>{\n        taskAdd(selectWindow);\n        popDown(popUpTaskScreen);\n    });\n    \n};\n\nconst blackOff = function(){\n    const blackoutSc = document.querySelector(\".blackout\");\n    blackoutSc.style.display = \"none\";\n}\n\nconst blackOn = function(){\n    const blackoutSc = document.querySelector(\".blackout\");\n    blackoutSc.style.display = \"block\";\n}\n\nconst popDown = function(popUpSc){\n    popUpSc.style.display = \"none\";\n    blackOff();\n};\nconst popUp = function(popUpSc){\n    popUpSc.style.display = \"flex\";\n    blackOn();\n    let nameArea = document.getElementById('name');\n    nameArea.focus();\n};\n\nconst taskArrayUpdate = function(){\n    updatedArray = taskArray;\n    return updatedArray;\n};\n\nconst returnTasks = function(){\n    return taskArray;\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/newTask.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appSkeleton)\n/* harmony export */ });\nfunction appSkeleton(){\n    const htmlSkelly =\n`<div class=\"container\">\n<div class=\"blackout\"> </div>\n<div class=\"pop-up-project\"> </div>\n<div class=\"pop-up-comments\">\n  <button id=\"close-button\">X</button>\n  <div id=\"comments-titles\"><span id=\"task-title-c\">Example</span>  <span id=\"task-project-c\"> Proj</span> </div>\n  <div class=\"comments\">\n    <p> Description: </p>\n    <textarea id=\"description-container\">  </textarea>\n  </div>\n  <button id=\"complete-button\">Mark as complete</button>\n</div>\n<div class=\"pop-up-task\"> \n  <label for=\"name\">Title (up to 20 characters):</label>\n  <input type=\"text\" id=\"name\" name=\"name\" maxlength=\"20\" size=\"13\" placeholder=\"Potassium is very important\" onFocus=\"this.select()\">\n\n  <label for=\"description\">Task description:</label>\n  <textarea id=\"description\" name=\"description\" rows=\"5\" cols=\"33\" onFocus=\"this.select()\">I mustn't forget to peel the banana before I eat it... </textarea>\n\n  <label for=\"due-date\">Due date:</label>\n  <input type=\"date\" id=\"due-date\" name=\"due-date\" value=\"2023-03-23\" min=\"2018-01-01\" max=\"2030-12-31\"> \n\n  <div class=\"radio-container\"> Priority:\n  <input type=\"radio\" id=\"urgent\" name=\"prio\" value=\"urgent\" checked class=\"radio\">\n  <label for=\"urgent\">Urgent</label>\n  \n  <input type=\"radio\" id=\"medium\" name=\"prio\" value=\"medium\" class=\"radio\">\n  <label for=\"medium\">Medium</label>\n\n  <input type=\"radio\" id=\"relax\" name=\"prio\" value=\"relax\" class=\"radio\">\n  <label for=\"relax\">Relax</label>\n  </div>\n  <button class=\"confirm\">Add task</button>\n</div>\n\n<div class=\"header\">\n  <div class=\"left\">To Do App</div>\n  <div class=\"right\">?</div>\n</div>\n\n<div class=\"control-panel\">\n  <ul class=\"date-panel\">\n    <li class=\"today\">Today</li>\n    <li class=\"next-week\">Next week</li>\n    <li class=\"all\">All</li>\n  </ul>\n  <div class=\"projects\">\n    <div class=\"projects-title\">\n      <h2>Projects</h2>\n      <button class=\"add-project-button\">+</button>\n    </div>\n    <ul class=\"projects-ul\">\n\n      \n    </ul>\n  </div>\n</div>\n\n    <div class=\"display\">\n        <h2 class=\"display-title\">All</h2>\n        <div class=\"tasks-container\"></div>\n        <div class=\"add-task-container\">\n            <div class=\"add-task-left\">\n                <button class=\"add-task-button\">+</button>\n                <h4>Add task</h4>\n            </div>\n        </div>\n    </div>\n</div>`;\n\ndocument.body.innerHTML = htmlSkelly;\n\nconst popUpTaskScreen = document.querySelector(\".pop-up-task\");\nconst confirmButton = document.querySelector(\".confirm\");  \nconst projectSelectionWindow = (()=>{\n    const select = document.createElement(\"select\");\n    select.name = \"proj-names\";\n    select.id = \"proj-names\";\n \n    let label = document.createElement(\"label\");\n    label.innerHTML = \"Select project for this task: \";\n    label.htmlFor = \"proj-names\";\n\n    popUpTaskScreen.insertBefore(label, confirmButton);\n    popUpTaskScreen.insertBefore(select, confirmButton);\n})();\n}\n\n\n//# sourceURL=webpack://to-do/./src/pageLoad.js?");

/***/ }),

/***/ "./src/projList.js":
/*!*************************!*\
  !*** ./src/projList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateProjectList\": () => (/* binding */ updateProjectList),\n/* harmony export */   \"removeAllChildNodes\": () => (/* binding */ removeAllChildNodes),\n/* harmony export */   \"taskToProjectList\": () => (/* binding */ taskToProjectList),\n/* harmony export */   \"projectDisplay\": () => (/* binding */ projectDisplay),\n/* harmony export */   \"tasksColorGrey\": () => (/* binding */ tasksColorGrey),\n/* harmony export */   \"tasksColorBlack\": () => (/* binding */ tasksColorBlack),\n/* harmony export */   \"listOfProjects\": () => (/* binding */ listOfProjects)\n/* harmony export */ });\n/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask */ \"./src/newTask.js\");\n/* harmony import */ var _newProj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProj */ \"./src/newProj.js\");\n\n\n\nconst listOfProjects = function(){\n    let list = (0,_newProj__WEBPACK_IMPORTED_MODULE_1__.projectList)();\n    let projectsNameArray = [];\n    let projectsClassArray = [];\n    for(let i = 0; i< list.length; i++){\n        projectsNameArray.push(list[i].name);\n        projectsClassArray.push(list[i].classTag);\n    }\n    return {list, projectsNameArray, projectsClassArray};\n};\n\nconst tasksColorGrey = function(elId){\n    const domList = tasksInProjs();\n    for(let task of domList){\n        if(task.id == elId){\n        task.style.color = \"grey\";\n        task.classList.add(\"grey-done\");\n    }};\n};\n\nconst tasksColorBlack = function(elId){\n    const domList = tasksInProjs();\n    for(let task of domList){\n        if(task.id == elId){\n        task.style.color = \"black\";\n        task.classList.remove(\"grey-done\");\n    }};\n};\n\nconst tasksInProjs = function(){\n    const tasksInProjs = document.querySelectorAll(\".projects-ul>li>ul>li\");\n    // const tasksArray = [].slice.call(tasksInProjs); //html collection to array\n    // const fullIdList = tasksArray.map(function(li){\n    //     return li.id;\n    // });\n    return tasksInProjs;\n}\n\n\nconst taskToProjectList = function(projectsData, task){\n    const taskCapsule = projectsData.taskCapsule;\n    const projectCapsule = projectsData.projectCapsule;\n    taskCapsule.classList.add(`${task.priority}`);\n    taskCapsule.classList.add(`${task.projectFamily}`);\n    taskCapsule.textContent = task.title;\n    taskCapsule.setAttribute('id', task.id);\n    projectCapsule.appendChild(taskCapsule);\n}\n\n\nconst projectDisplay = function(selectWindow){\n    const obj = listOfProjects();\n    const ulClass = obj.projectsClassArray;\n    const allProjs = obj.list;\n    const thisClass = ulClass[selectWindow.selectedIndex];\n    const thisProject = allProjs[selectWindow.selectedIndex];\n    const projectCapsule = document.querySelector(`.${thisClass}`);\n    const taskCapsule = document.createElement(\"li\");\n    return {taskCapsule, projectCapsule, thisClass, thisProject}\n}\n\nconst updateProjectList = function(selectWindow) {\n    removeAllChildNodes(selectWindow);\n    let obj = listOfProjects();\n    let classes = obj.projectsClassArray;\n    let useNames =[];\n    console.log(classes)\n    for(let fullName of classes){\n        let together = fullName.split(\"-\"); \n        together.shift(); \n        together.pop(); \n        let middleName = together.join(' ');\n        console.log(middleName);\n        useNames.push(middleName);\n    };\n    \n       for (let each of useNames){\n            let menuOption = document.createElement(\"option\");\n            menuOption.value = each;\n            menuOption.text = each;\n            selectWindow.appendChild(menuOption); \n        };\n};\n\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n};\n\n\n\n\n//# sourceURL=webpack://to-do/./src/projList.js?");

/***/ }),

/***/ "./src/fonts/Lato-Bold.ttf":
/*!*********************************!*\
  !*** ./src/fonts/Lato-Bold.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"636be8de934918e38ed9.ttf\";\n\n//# sourceURL=webpack://to-do/./src/fonts/Lato-Bold.ttf?");

/***/ }),

/***/ "./src/fonts/Lato-Regular.ttf":
/*!************************************!*\
  !*** ./src/fonts/Lato-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d883d540ee2b4de8024.ttf\";\n\n//# sourceURL=webpack://to-do/./src/fonts/Lato-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Lato-Thin.ttf":
/*!*********************************!*\
  !*** ./src/fonts/Lato-Thin.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5a60dde25d817751d590.ttf\";\n\n//# sourceURL=webpack://to-do/./src/fonts/Lato-Thin.ttf?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;