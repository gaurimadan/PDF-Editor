"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_components_PdfViewer_jsx",{

/***/ "(app-pages-browser)/./components/PdfViewer.jsx":
/*!**********************************!*\
  !*** ./components/PdfViewer.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pdf */ \"(app-pages-browser)/./node_modules/react-pdf/node_modules/pdfjs-dist/build/pdf.mjs\");\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-pdf */ \"(app-pages-browser)/./node_modules/react-pdf/dist/esm/Document.js\");\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-pdf */ \"(app-pages-browser)/./node_modules/react-pdf/dist/esm/Page.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _PdfViewer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PdfViewer.css */ \"(app-pages-browser)/./components/PdfViewer.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Use a local copy of the worker\nreact_pdf__WEBPACK_IMPORTED_MODULE_3__.GlobalWorkerOptions.workerSrc = \"/pdf.worker.min.js\";\nconst MyPdfViewer = (param)=>{\n    let { myFile } = param;\n    _s();\n    const [numPages, setNumPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [pageNumber, setPageNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [useIframe, setUseIframe] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (myFile) {\n            if (myFile.startsWith(\"http\")) {\n                axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(myFile, {\n                    responseType: \"blob\"\n                }).then((response)=>{\n                    const fileURL = URL.createObjectURL(response.data);\n                    myFile = fileURL;\n                }).catch((error)=>{\n                    console.error(\"Error fetching PDF:\", error);\n                    setUseIframe(true);\n                });\n            }\n        }\n    }, [\n        myFile\n    ]);\n    const onDocumentLoadSuccess = (param)=>{\n        let { numPages } = param;\n        setNumPages(numPages);\n    };\n    const onDocumentLoadError = (error)=>{\n        console.error(\"Error loading PDF:\", error);\n        setUseIframe(true);\n    };\n    const onPreviousPage = ()=>{\n        setPageNumber((prevPageNumber)=>Math.max(prevPageNumber - 1, 1));\n    };\n    const onNextPage = ()=>{\n        setPageNumber((prevPageNumber)=>Math.min(prevPageNumber + 1, numPages));\n    };\n    if (useIframe) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n            src: \"https://docs.google.com/viewer?url=\".concat(encodeURIComponent(myFile), \"&embedded=true\"),\n            width: \"100%\",\n            height: \"600px\",\n            style: {\n                border: \"none\"\n            },\n            title: \"PDF Viewer\"\n        }, void 0, false, {\n            fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pdf-viewer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                file: myFile,\n                onLoadSuccess: onDocumentLoadSuccess,\n                onLoadError: onDocumentLoadError,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    pageNumber: pageNumber\n                }, void 0, false, {\n                    fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pdf-controls\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Page \",\n                            pageNumber || (numPages ? 1 : \"--\"),\n                            \" of \",\n                            numPages || \"--\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onPreviousPage,\n                                disabled: pageNumber <= 1,\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onNextPage,\n                                disabled: pageNumber >= numPages,\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyPdfViewer, \"gp5/368Z7t3zX2muyR/2VAyU2zs=\");\n_c = MyPdfViewer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyPdfViewer);\nvar _c;\n$RefreshReg$(_c, \"MyPdfViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUGRmVmlld2VyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNEO0FBQ3hCO0FBQ0Q7QUFFekIsaUNBQWlDO0FBQ2pDSywwREFBeUIsQ0FBQ0csU0FBUyxHQUFJO0FBRXZDLE1BQU1DLGNBQWM7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQzdCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYyxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSLElBQUlRLFFBQVE7WUFDVixJQUFJQSxPQUFPTyxVQUFVLENBQUMsU0FBUztnQkFDN0JYLDZDQUFLQSxDQUFDWSxHQUFHLENBQUNSLFFBQVE7b0JBQUVTLGNBQWM7Z0JBQU8sR0FDdENDLElBQUksQ0FBQ0MsQ0FBQUE7b0JBQ0osTUFBTUMsVUFBVUMsSUFBSUMsZUFBZSxDQUFDSCxTQUFTSSxJQUFJO29CQUNqRGYsU0FBU1k7Z0JBQ1gsR0FDQ0ksS0FBSyxDQUFDQyxDQUFBQTtvQkFDTEMsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7b0JBQ3JDWCxhQUFhO2dCQUNmO1lBQ0o7UUFDRjtJQUNGLEdBQUc7UUFBQ047S0FBTztJQUVYLE1BQU1tQix3QkFBd0I7WUFBQyxFQUFFbEIsUUFBUSxFQUFFO1FBQ3pDQyxZQUFZRDtJQUNkO0lBRUEsTUFBTW1CLHNCQUFzQixDQUFDSDtRQUMzQkMsUUFBUUQsS0FBSyxDQUFDLHNCQUFzQkE7UUFDcENYLGFBQWE7SUFDZjtJQUVBLE1BQU1lLGlCQUFpQjtRQUNyQmpCLGNBQWNrQixDQUFBQSxpQkFBa0JDLEtBQUtDLEdBQUcsQ0FBQ0YsaUJBQWlCLEdBQUc7SUFDL0Q7SUFFQSxNQUFNRyxhQUFhO1FBQ2pCckIsY0FBY2tCLENBQUFBLGlCQUFrQkMsS0FBS0csR0FBRyxDQUFDSixpQkFBaUIsR0FBR3JCO0lBQy9EO0lBRUEsSUFBSUksV0FBVztRQUNiLHFCQUNFLDhEQUFDc0I7WUFDQ0MsS0FBSyxzQ0FBaUUsT0FBM0JDLG1CQUFtQjdCLFNBQVE7WUFDdEU4QixPQUFNO1lBQ05DLFFBQU87WUFDUEMsT0FBTztnQkFBRUMsUUFBUTtZQUFPO1lBQ3hCQyxPQUFNOzs7Ozs7SUFHWjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQzNDLGlEQUFRQTtnQkFDUDRDLE1BQU1yQztnQkFDTnNDLGVBQWVuQjtnQkFDZm9CLGFBQWFuQjswQkFFYiw0RUFBQzFCLGlEQUFJQTtvQkFBQ1MsWUFBWUE7Ozs7Ozs7Ozs7OzBCQUVwQiw4REFBQ2dDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0k7OzRCQUFFOzRCQUNLckMsY0FBZUYsQ0FBQUEsV0FBVyxJQUFJLElBQUc7NEJBQUc7NEJBQUtBLFlBQVk7Ozs7Ozs7a0NBRTdELDhEQUFDa0M7OzBDQUNDLDhEQUFDTTtnQ0FBT0MsU0FBU3JCO2dDQUFnQnNCLFVBQVV4QyxjQUFjOzBDQUFHOzs7Ozs7MENBQzVELDhEQUFDc0M7Z0NBQU9DLFNBQVNqQjtnQ0FBWWtCLFVBQVV4QyxjQUFjRjswQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pFO0dBdEVNRjtLQUFBQTtBQXdFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BkZlZpZXdlci5qc3g/ZjFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRG9jdW1lbnQsIFBhZ2UsIHBkZmpzIH0gZnJvbSBcInJlYWN0LXBkZlwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFwiLi9QZGZWaWV3ZXIuY3NzXCI7XG5cbi8vIFVzZSBhIGxvY2FsIGNvcHkgb2YgdGhlIHdvcmtlclxucGRmanMuR2xvYmFsV29ya2VyT3B0aW9ucy53b3JrZXJTcmMgPSBgL3BkZi53b3JrZXIubWluLmpzYDtcblxuY29uc3QgTXlQZGZWaWV3ZXIgPSAoeyBteUZpbGUgfSkgPT4ge1xuICBjb25zdCBbbnVtUGFnZXMsIHNldE51bVBhZ2VzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3VzZUlmcmFtZSwgc2V0VXNlSWZyYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChteUZpbGUpIHtcbiAgICAgIGlmIChteUZpbGUuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgICAgYXhpb3MuZ2V0KG15RmlsZSwgeyByZXNwb25zZVR5cGU6IFwiYmxvYlwiIH0pXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBteUZpbGUgPSBmaWxlVVJMO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBQREY6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIHNldFVzZUlmcmFtZSh0cnVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtteUZpbGVdKTtcblxuICBjb25zdCBvbkRvY3VtZW50TG9hZFN1Y2Nlc3MgPSAoeyBudW1QYWdlcyB9KSA9PiB7XG4gICAgc2V0TnVtUGFnZXMobnVtUGFnZXMpO1xuICB9O1xuXG4gIGNvbnN0IG9uRG9jdW1lbnRMb2FkRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBQREY6XCIsIGVycm9yKTtcbiAgICBzZXRVc2VJZnJhbWUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25QcmV2aW91c1BhZ2UgPSAoKSA9PiB7XG4gICAgc2V0UGFnZU51bWJlcihwcmV2UGFnZU51bWJlciA9PiBNYXRoLm1heChwcmV2UGFnZU51bWJlciAtIDEsIDEpKTtcbiAgfVxuXG4gIGNvbnN0IG9uTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgc2V0UGFnZU51bWJlcihwcmV2UGFnZU51bWJlciA9PiBNYXRoLm1pbihwcmV2UGFnZU51bWJlciArIDEsIG51bVBhZ2VzKSk7XG4gIH1cblxuICBpZiAodXNlSWZyYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpZnJhbWVcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vdmlld2VyP3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChteUZpbGUpfSZlbWJlZGRlZD10cnVlYH1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiNjAwcHhcIlxuICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwibm9uZVwiIH19XG4gICAgICAgIHRpdGxlPVwiUERGIFZpZXdlclwiXG4gICAgICA+PC9pZnJhbWU+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwZGYtdmlld2VyXCI+XG4gICAgICA8RG9jdW1lbnRcbiAgICAgICAgZmlsZT17bXlGaWxlfVxuICAgICAgICBvbkxvYWRTdWNjZXNzPXtvbkRvY3VtZW50TG9hZFN1Y2Nlc3N9XG4gICAgICAgIG9uTG9hZEVycm9yPXtvbkRvY3VtZW50TG9hZEVycm9yfVxuICAgICAgPlxuICAgICAgICA8UGFnZSBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfSAvPlxuICAgICAgPC9Eb2N1bWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGRmLWNvbnRyb2xzXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFBhZ2Uge3BhZ2VOdW1iZXIgfHwgKG51bVBhZ2VzID8gMSA6IFwiLS1cIil9IG9mIHtudW1QYWdlcyB8fCBcIi0tXCJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUHJldmlvdXNQYWdlfSBkaXNhYmxlZD17cGFnZU51bWJlciA8PSAxfT5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25OZXh0UGFnZX0gZGlzYWJsZWQ9e3BhZ2VOdW1iZXIgPj0gbnVtUGFnZXN9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15UGRmVmlld2VyO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRvY3VtZW50IiwiUGFnZSIsInBkZmpzIiwiYXhpb3MiLCJHbG9iYWxXb3JrZXJPcHRpb25zIiwid29ya2VyU3JjIiwiTXlQZGZWaWV3ZXIiLCJteUZpbGUiLCJudW1QYWdlcyIsInNldE51bVBhZ2VzIiwicGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJ1c2VJZnJhbWUiLCJzZXRVc2VJZnJhbWUiLCJzdGFydHNXaXRoIiwiZ2V0IiwicmVzcG9uc2VUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwiZmlsZVVSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsIm9uRG9jdW1lbnRMb2FkU3VjY2VzcyIsIm9uRG9jdW1lbnRMb2FkRXJyb3IiLCJvblByZXZpb3VzUGFnZSIsInByZXZQYWdlTnVtYmVyIiwiTWF0aCIsIm1heCIsIm9uTmV4dFBhZ2UiLCJtaW4iLCJpZnJhbWUiLCJzcmMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwiYm9yZGVyIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWxlIiwib25Mb2FkU3VjY2VzcyIsIm9uTG9hZEVycm9yIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PdfViewer.jsx\n"));

/***/ })

});