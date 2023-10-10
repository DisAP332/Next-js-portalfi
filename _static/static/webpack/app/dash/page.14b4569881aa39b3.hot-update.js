"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dash/page",{

/***/ "(app-pages-browser)/./src/app/dash/page.tsx":
/*!*******************************!*\
  !*** ./src/app/dash/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_desktop_Body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/desktop/Body */ \"(app-pages-browser)/./src/components/desktop/Body.tsx\");\n/* harmony import */ var _components_desktop_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/desktop/Header */ \"(app-pages-browser)/./src/components/desktop/Header.tsx\");\n/* harmony import */ var _components_tablet_Body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/tablet/Body */ \"(app-pages-browser)/./src/components/tablet/Body.tsx\");\n/* harmony import */ var _components_tablet_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/tablet/Header */ \"(app-pages-browser)/./src/components/tablet/Header.tsx\");\n/* harmony import */ var _components_desktop_NavigationSide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/desktop/NavigationSide */ \"(app-pages-browser)/./src/components/desktop/NavigationSide.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_contentDataSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../slices/contentDataSlice */ \"(app-pages-browser)/./src/app/slices/contentDataSlice.ts\");\n/* harmony import */ var _components_global_Storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/global/Storage */ \"(app-pages-browser)/./src/components/global/Storage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Profile() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    let loggedIn = null;\n    if ( true && window.localStorage) {\n        loggedIn = localStorage.getItem(\"JBWtoken\");\n    }\n    // check if user is logged in. if not send them back to the login screen.\n    function checkIfLoggedIn() {\n        if (!loggedIn) {\n            router.push(\"/\");\n        }\n    }\n    function getDataFromLocalStorageToUpdateState() {\n        dispatch((0,_slices_contentDataSlice__WEBPACK_IMPORTED_MODULE_9__.dataActions)({\n            requested: \"drinks\",\n            data: _components_global_Storage__WEBPACK_IMPORTED_MODULE_10__[\"default\"].getItem(\"drinks\")\n        }));\n        dispatch((0,_slices_contentDataSlice__WEBPACK_IMPORTED_MODULE_9__.dataActions)({\n            requested: \"events\",\n            data: _components_global_Storage__WEBPACK_IMPORTED_MODULE_10__[\"default\"].getItem(\"events\")\n        }));\n        dispatch((0,_slices_contentDataSlice__WEBPACK_IMPORTED_MODULE_9__.dataActions)({\n            requested: \"food\",\n            data: _components_global_Storage__WEBPACK_IMPORTED_MODULE_10__[\"default\"].getItem(\"food\")\n        }));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        checkIfLoggedIn();\n        setTimeout(()=>{\n            getDataFromLocalStorageToUpdateState();\n            console.log(\"data ready\");\n        }, 1000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"app-desktop\",\n                className: \"h-screen w-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_desktop_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"app-desktop-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_desktop_NavigationSide__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_desktop_Body__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"app-tablet\",\n                className: \"h-screen w-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tablet_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"app-tablet-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tablet_Body__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"app-mobile\",\n                className: \"h-screen w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"MOBILE UNAVAILABLE FOR THIS APPLICATION\"\n                }, void 0, false, {\n                    fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dapvm/workFolder/REPOS/next-portalfi/portal-client/src/app/dash/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Profile, \"bjZflwr9yuHJ0eAg20MSTkw3ecc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ1c7QUFFTjtBQUVJO0FBQ1c7QUFDckI7QUFDVjtBQUNRO0FBQ2U7QUFDUDtBQUVuQyxTQUFTVTs7SUFDdEIsTUFBTUMsU0FBU04sMERBQVNBO0lBQ3hCLE1BQU1PLFdBQVdMLHdEQUFXQTtJQUU1QixJQUFJTSxXQUEwQjtJQUU5QixJQUFJLEtBQTZCLElBQUlDLE9BQU9DLFlBQVksRUFBRTtRQUN4REYsV0FBV0UsYUFBYUMsT0FBTyxDQUFDO0lBQ2xDO0lBRUEseUVBQXlFO0lBQ3pFLFNBQVNDO1FBQ1AsSUFBSSxDQUFDSixVQUFVO1lBQ2JGLE9BQU9PLElBQUksQ0FBQztRQUNkO0lBQ0Y7SUFFQSxTQUFTQztRQUNQUCxTQUNFSixxRUFBV0EsQ0FBQztZQUFFWSxXQUFXO1lBQVVDLE1BQU1aLG1FQUFPQSxDQUFDTyxPQUFPLENBQUM7UUFBVTtRQUVyRUosU0FDRUoscUVBQVdBLENBQUM7WUFBRVksV0FBVztZQUFVQyxNQUFNWixtRUFBT0EsQ0FBQ08sT0FBTyxDQUFDO1FBQVU7UUFFckVKLFNBQVNKLHFFQUFXQSxDQUFDO1lBQUVZLFdBQVc7WUFBUUMsTUFBTVosbUVBQU9BLENBQUNPLE9BQU8sQ0FBQztRQUFRO0lBQzFFO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ1JXO1FBQ0FLLFdBQVc7WUFDVEg7WUFDQUksUUFBUUMsR0FBRyxDQUFDO1FBQ2QsR0FBRztJQUNMO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUMsSUFBRztnQkFBY0MsV0FBVTs7a0NBQzlCLDhEQUFDMUIsa0VBQWFBOzs7OztrQ0FDZCw4REFBQ3dCO3dCQUFJRSxXQUFVOzswQ0FDYiw4REFBQ3ZCLDBFQUFjQTs7Ozs7MENBQ2YsOERBQUNKLGdFQUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUN5QjtnQkFBSUMsSUFBRztnQkFBYUMsV0FBVTs7a0NBQzdCLDhEQUFDeEIsaUVBQVlBOzs7OztrQ0FDYiw4REFBQ3NCO3dCQUFJRSxXQUFVO2tDQUNiLDRFQUFDekIsK0RBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdmLDhEQUFDdUI7Z0JBQUlDLElBQUc7Z0JBQWFDLFdBQVU7MEJBQzdCLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7OztBQUlaO0dBdkR3QmxCOztRQUNQTCxzREFBU0E7UUFDUEUsb0RBQVdBOzs7S0FGTkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoL3BhZ2UudHN4P2Y3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgQm9keSBmcm9tIFwiQC9jb21wb25lbnRzL2Rlc2t0b3AvQm9keVwiO1xuaW1wb3J0IEhlYWRlckRlc2t0b3AgZnJvbSBcIkAvY29tcG9uZW50cy9kZXNrdG9wL0hlYWRlclwiO1xuXG5pbXBvcnQgQm9keVRhYmxldCBmcm9tIFwiQC9jb21wb25lbnRzL3RhYmxldC9Cb2R5XCI7XG5cbmltcG9ydCBIZWFkZXJUYWJsZXQgZnJvbSBcIkAvY29tcG9uZW50cy90YWJsZXQvSGVhZGVyXCI7XG5pbXBvcnQgTmF2aWdhdGlvblNpZGUgZnJvbSBcIkAvY29tcG9uZW50cy9kZXNrdG9wL05hdmlnYXRpb25TaWRlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBkYXRhQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvY29udGVudERhdGFTbGljZVwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9nbG9iYWwvU3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGxldCBsb2dnZWRJbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgIGxvZ2dlZEluID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJKQld0b2tlblwiKTtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluLiBpZiBub3Qgc2VuZCB0aGVtIGJhY2sgdG8gdGhlIGxvZ2luIHNjcmVlbi5cbiAgZnVuY3Rpb24gY2hlY2tJZkxvZ2dlZEluKCkge1xuICAgIGlmICghbG9nZ2VkSW4pIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZVRvVXBkYXRlU3RhdGUoKSB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBkYXRhQWN0aW9ucyh7IHJlcXVlc3RlZDogXCJkcmlua3NcIiwgZGF0YTogU3RvcmFnZS5nZXRJdGVtKFwiZHJpbmtzXCIpIH0pXG4gICAgKTtcbiAgICBkaXNwYXRjaChcbiAgICAgIGRhdGFBY3Rpb25zKHsgcmVxdWVzdGVkOiBcImV2ZW50c1wiLCBkYXRhOiBTdG9yYWdlLmdldEl0ZW0oXCJldmVudHNcIikgfSlcbiAgICApO1xuICAgIGRpc3BhdGNoKGRhdGFBY3Rpb25zKHsgcmVxdWVzdGVkOiBcImZvb2RcIiwgZGF0YTogU3RvcmFnZS5nZXRJdGVtKFwiZm9vZFwiKSB9KSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrSWZMb2dnZWRJbigpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2VUb1VwZGF0ZVN0YXRlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImRhdGEgcmVhZHlcIik7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgaWQ9XCJhcHAtZGVza3RvcFwiIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuXCI+XG4gICAgICAgIDxIZWFkZXJEZXNrdG9wIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWRlc2t0b3AtY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb25TaWRlIC8+XG4gICAgICAgICAgPEJvZHkgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJhcHAtdGFibGV0XCIgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgICAgPEhlYWRlclRhYmxldCAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC10YWJsZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPEJvZHlUYWJsZXQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJhcHAtbW9iaWxlXCIgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgICAgPGgxPk1PQklMRSBVTkFWQUlMQUJMRSBGT1IgVEhJUyBBUFBMSUNBVElPTjwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb2R5IiwiSGVhZGVyRGVza3RvcCIsIkJvZHlUYWJsZXQiLCJIZWFkZXJUYWJsZXQiLCJOYXZpZ2F0aW9uU2lkZSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwiZGF0YUFjdGlvbnMiLCJTdG9yYWdlIiwiUHJvZmlsZSIsInJvdXRlciIsImRpc3BhdGNoIiwibG9nZ2VkSW4iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2hlY2tJZkxvZ2dlZEluIiwicHVzaCIsImdldERhdGFGcm9tTG9jYWxTdG9yYWdlVG9VcGRhdGVTdGF0ZSIsInJlcXVlc3RlZCIsImRhdGEiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dash/page.tsx\n"));

/***/ })

});