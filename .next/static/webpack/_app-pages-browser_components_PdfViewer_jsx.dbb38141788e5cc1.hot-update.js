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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pdf */ \"(app-pages-browser)/./node_modules/react-pdf/node_modules/pdfjs-dist/build/pdf.mjs\");\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-pdf */ \"(app-pages-browser)/./node_modules/react-pdf/dist/esm/Document.js\");\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-pdf */ \"(app-pages-browser)/./node_modules/react-pdf/dist/esm/Page.js\");\n/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdf-lib */ \"(app-pages-browser)/./node_modules/pdf-lib/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _PdfViewer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PdfViewer.css */ \"(app-pages-browser)/./components/PdfViewer.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Use a local copy of the worker\nreact_pdf__WEBPACK_IMPORTED_MODULE_4__.GlobalWorkerOptions.workerSrc = \"/pdf.worker.min.js\";\nconst MyPdfViewer = (param)=>{\n    let { myFile } = param;\n    _s();\n    const [numPages, setNumPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [pageNumber, setPageNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [useIframe, setUseIframe] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pdfDoc, setPdfDoc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (myFile) {\n            if (myFile.startsWith(\"http\")) {\n                axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(myFile, {\n                    responseType: \"arraybuffer\"\n                }).then(async (response)=>{\n                    const arrayBuffer = response.data;\n                    const fileURL = URL.createObjectURL(new Blob([\n                        arrayBuffer\n                    ]));\n                    myFile = fileURL;\n                    // Load the PDF document\n                    const pdfDoc = await pdf_lib__WEBPACK_IMPORTED_MODULE_2__.PDFDocument.load(arrayBuffer);\n                    setPdfDoc(pdfDoc);\n                }).catch((error)=>{\n                    console.error(\"Error fetching PDF:\", error);\n                    setUseIframe(true);\n                });\n            } else {\n                // If myFile is a local file, load it directly\n                (async ()=>{\n                    const arrayBuffer = await fetch(myFile).then((res)=>res.arrayBuffer());\n                    const pdfDoc = await pdf_lib__WEBPACK_IMPORTED_MODULE_2__.PDFDocument.load(arrayBuffer);\n                    setPdfDoc(pdfDoc);\n                })();\n            }\n        }\n    }, [\n        myFile\n    ]);\n    const onDocumentLoadSuccess = (param)=>{\n        let { numPages } = param;\n        setNumPages(numPages);\n    };\n    const onDocumentLoadError = (error)=>{\n        console.error(\"Error loading PDF:\", error);\n        setUseIframe(true);\n    };\n    const onPreviousPage = ()=>{\n        setPageNumber((prevPageNumber)=>Math.max(prevPageNumber - 1, 1));\n    };\n    const onNextPage = ()=>{\n        setPageNumber((prevPageNumber)=>Math.min(prevPageNumber + 1, numPages));\n    };\n    const savePdf = async ()=>{\n        if (pdfDoc) {\n            const pdfBytes = await pdfDoc.save();\n            const blob = new Blob([\n                pdfBytes\n            ], {\n                type: \"application/pdf\"\n            });\n            const link = document.createElement(\"a\");\n            link.href = URL.createObjectURL(blob);\n            link.download = \"modified_document.pdf\";\n            link.click();\n        }\n    };\n    if (useIframe) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n            src: \"https://docs.google.com/viewer?url=\".concat(encodeURIComponent(myFile), \"&embedded=true\"),\n            width: \"100%\",\n            height: \"600px\",\n            style: {\n                border: \"none\"\n            },\n            title: \"PDF Viewer\"\n        }, void 0, false, {\n            fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pdf-viewer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                file: myFile,\n                onLoadSuccess: onDocumentLoadSuccess,\n                onLoadError: onDocumentLoadError,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    pageNumber: pageNumber\n                }, void 0, false, {\n                    fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pdf-controls\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Page \",\n                            pageNumber || (numPages ? 1 : \"--\"),\n                            \" of \",\n                            numPages || \"--\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onPreviousPage,\n                                disabled: pageNumber <= 1,\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onNextPage,\n                                disabled: pageNumber >= numPages,\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: savePdf,\n                                disabled: !pdfDoc,\n                                children: \"Save PDF\"\n                            }, void 0, false, {\n                                fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/gauri/PDF-Editor/components/PdfViewer.jsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyPdfViewer, \"QjZvxCJ4Sz8lKfxR9X/BIt7Lbjw=\");\n_c = MyPdfViewer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyPdfViewer);\nvar _c;\n$RefreshReg$(_c, \"MyPdfViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUGRmVmlld2VyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRDtBQUNaO0FBQ1o7QUFDRDtBQUV6QixpQ0FBaUM7QUFDakNLLDBEQUF5QixDQUFDSSxTQUFTLEdBQUk7QUFFdkMsTUFBTUMsY0FBYztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDN0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNlLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2lCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXJDQyxnREFBU0EsQ0FBQztRQUNSLElBQUlTLFFBQVE7WUFDVixJQUFJQSxPQUFPUyxVQUFVLENBQUMsU0FBUztnQkFDN0JiLDZDQUFLQSxDQUFDYyxHQUFHLENBQUNWLFFBQVE7b0JBQUVXLGNBQWM7Z0JBQWMsR0FDN0NDLElBQUksQ0FBQyxPQUFPQztvQkFDWCxNQUFNQyxjQUFjRCxTQUFTRSxJQUFJO29CQUNqQyxNQUFNQyxVQUFVQyxJQUFJQyxlQUFlLENBQUMsSUFBSUMsS0FBSzt3QkFBQ0w7cUJBQVk7b0JBQzFEZCxTQUFTZ0I7b0JBRVQsd0JBQXdCO29CQUN4QixNQUFNVCxTQUFTLE1BQU1aLGdEQUFXQSxDQUFDeUIsSUFBSSxDQUFDTjtvQkFDdENOLFVBQVVEO2dCQUNaLEdBQ0NjLEtBQUssQ0FBQ0MsQ0FBQUE7b0JBQ0xDLFFBQVFELEtBQUssQ0FBQyx1QkFBdUJBO29CQUNyQ2hCLGFBQWE7Z0JBQ2Y7WUFDSixPQUFPO2dCQUNMLDhDQUE4QztnQkFDN0M7b0JBQ0MsTUFBTVEsY0FBYyxNQUFNVSxNQUFNeEIsUUFBUVksSUFBSSxDQUFDYSxDQUFBQSxNQUFPQSxJQUFJWCxXQUFXO29CQUNuRSxNQUFNUCxTQUFTLE1BQU1aLGdEQUFXQSxDQUFDeUIsSUFBSSxDQUFDTjtvQkFDdENOLFVBQVVEO2dCQUNaO1lBQ0Y7UUFDRjtJQUNGLEdBQUc7UUFBQ1A7S0FBTztJQUVYLE1BQU0wQix3QkFBd0I7WUFBQyxFQUFFekIsUUFBUSxFQUFFO1FBQ3pDQyxZQUFZRDtJQUNkO0lBRUEsTUFBTTBCLHNCQUFzQixDQUFDTDtRQUMzQkMsUUFBUUQsS0FBSyxDQUFDLHNCQUFzQkE7UUFDcENoQixhQUFhO0lBQ2Y7SUFFQSxNQUFNc0IsaUJBQWlCO1FBQ3JCeEIsY0FBY3lCLENBQUFBLGlCQUFrQkMsS0FBS0MsR0FBRyxDQUFDRixpQkFBaUIsR0FBRztJQUMvRDtJQUVBLE1BQU1HLGFBQWE7UUFDakI1QixjQUFjeUIsQ0FBQUEsaUJBQWtCQyxLQUFLRyxHQUFHLENBQUNKLGlCQUFpQixHQUFHNUI7SUFDL0Q7SUFFQSxNQUFNaUMsVUFBVTtRQUNkLElBQUkzQixRQUFRO1lBQ1YsTUFBTTRCLFdBQVcsTUFBTTVCLE9BQU82QixJQUFJO1lBQ2xDLE1BQU1DLE9BQU8sSUFBSWxCLEtBQUs7Z0JBQUNnQjthQUFTLEVBQUU7Z0JBQUVHLE1BQU07WUFBa0I7WUFDNUQsTUFBTUMsT0FBT0MsU0FBU0MsYUFBYSxDQUFDO1lBQ3BDRixLQUFLRyxJQUFJLEdBQUd6QixJQUFJQyxlQUFlLENBQUNtQjtZQUNoQ0UsS0FBS0ksUUFBUSxHQUFHO1lBQ2hCSixLQUFLSyxLQUFLO1FBQ1o7SUFDRjtJQUVBLElBQUl2QyxXQUFXO1FBQ2IscUJBQ0UsOERBQUN3QztZQUNDQyxLQUFLLHNDQUFpRSxPQUEzQkMsbUJBQW1CL0MsU0FBUTtZQUN0RWdELE9BQU07WUFDTkMsUUFBTztZQUNQQyxPQUFPO2dCQUFFQyxRQUFRO1lBQU87WUFDeEJDLE9BQU07Ozs7OztJQUdaO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDOUQsaURBQVFBO2dCQUNQK0QsTUFBTXZEO2dCQUNOd0QsZUFBZTlCO2dCQUNmK0IsYUFBYTlCOzBCQUViLDRFQUFDbEMsaURBQUlBO29CQUFDVSxZQUFZQTs7Ozs7Ozs7Ozs7MEJBRXBCLDhEQUFDa0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSTs7NEJBQUU7NEJBQ0t2RCxjQUFlRixDQUFBQSxXQUFXLElBQUksSUFBRzs0QkFBRzs0QkFBS0EsWUFBWTs7Ozs7OztrQ0FFN0QsOERBQUNvRDs7MENBQ0MsOERBQUNNO2dDQUFPQyxTQUFTaEM7Z0NBQWdCaUMsVUFBVTFELGNBQWM7MENBQUc7Ozs7OzswQ0FDNUQsOERBQUN3RDtnQ0FBT0MsU0FBUzVCO2dDQUFZNkIsVUFBVTFELGNBQWNGOzBDQUFVOzs7Ozs7MENBQy9ELDhEQUFDMEQ7Z0NBQU9DLFNBQVMxQjtnQ0FBUzJCLFVBQVUsQ0FBQ3REOzBDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkQ7R0EvRk1SO0tBQUFBO0FBaUdOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGRmVmlld2VyLmpzeD9mMWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEb2N1bWVudCwgUGFnZSwgcGRmanMgfSBmcm9tIFwicmVhY3QtcGRmXCI7XG5pbXBvcnQgeyBQREZEb2N1bWVudCB9IGZyb20gJ3BkZi1saWInO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFwiLi9QZGZWaWV3ZXIuY3NzXCI7XG5cbi8vIFVzZSBhIGxvY2FsIGNvcHkgb2YgdGhlIHdvcmtlclxucGRmanMuR2xvYmFsV29ya2VyT3B0aW9ucy53b3JrZXJTcmMgPSBgL3BkZi53b3JrZXIubWluLmpzYDtcblxuY29uc3QgTXlQZGZWaWV3ZXIgPSAoeyBteUZpbGUgfSkgPT4ge1xuICBjb25zdCBbbnVtUGFnZXMsIHNldE51bVBhZ2VzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3VzZUlmcmFtZSwgc2V0VXNlSWZyYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BkZkRvYywgc2V0UGRmRG9jXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG15RmlsZSkge1xuICAgICAgaWYgKG15RmlsZS5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgICAgICBheGlvcy5nZXQobXlGaWxlLCB7IHJlc3BvbnNlVHlwZTogXCJhcnJheWJ1ZmZlclwiIH0pXG4gICAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBmaWxlVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbYXJyYXlCdWZmZXJdKSk7XG4gICAgICAgICAgICBteUZpbGUgPSBmaWxlVVJMO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBMb2FkIHRoZSBQREYgZG9jdW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHBkZkRvYyA9IGF3YWl0IFBERkRvY3VtZW50LmxvYWQoYXJyYXlCdWZmZXIpO1xuICAgICAgICAgICAgc2V0UGRmRG9jKHBkZkRvYyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIFBERjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0VXNlSWZyYW1lKHRydWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgbXlGaWxlIGlzIGEgbG9jYWwgZmlsZSwgbG9hZCBpdCBkaXJlY3RseVxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgZmV0Y2gobXlGaWxlKS50aGVuKHJlcyA9PiByZXMuYXJyYXlCdWZmZXIoKSk7XG4gICAgICAgICAgY29uc3QgcGRmRG9jID0gYXdhaXQgUERGRG9jdW1lbnQubG9hZChhcnJheUJ1ZmZlcik7XG4gICAgICAgICAgc2V0UGRmRG9jKHBkZkRvYyk7XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbbXlGaWxlXSk7XG5cbiAgY29uc3Qgb25Eb2N1bWVudExvYWRTdWNjZXNzID0gKHsgbnVtUGFnZXMgfSkgPT4ge1xuICAgIHNldE51bVBhZ2VzKG51bVBhZ2VzKTtcbiAgfTtcblxuICBjb25zdCBvbkRvY3VtZW50TG9hZEVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgUERGOlwiLCBlcnJvcik7XG4gICAgc2V0VXNlSWZyYW1lKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uUHJldmlvdXNQYWdlID0gKCkgPT4ge1xuICAgIHNldFBhZ2VOdW1iZXIocHJldlBhZ2VOdW1iZXIgPT4gTWF0aC5tYXgocHJldlBhZ2VOdW1iZXIgLSAxLCAxKSk7XG4gIH1cblxuICBjb25zdCBvbk5leHRQYWdlID0gKCkgPT4ge1xuICAgIHNldFBhZ2VOdW1iZXIocHJldlBhZ2VOdW1iZXIgPT4gTWF0aC5taW4ocHJldlBhZ2VOdW1iZXIgKyAxLCBudW1QYWdlcykpO1xuICB9XG5cbiAgY29uc3Qgc2F2ZVBkZiA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAocGRmRG9jKSB7XG4gICAgICBjb25zdCBwZGZCeXRlcyA9IGF3YWl0IHBkZkRvYy5zYXZlKCk7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3BkZkJ5dGVzXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vcGRmJyB9KTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgbGluay5kb3dubG9hZCA9ICdtb2RpZmllZF9kb2N1bWVudC5wZGYnO1xuICAgICAgbGluay5jbGljaygpO1xuICAgIH1cbiAgfTtcblxuICBpZiAodXNlSWZyYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpZnJhbWVcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vdmlld2VyP3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChteUZpbGUpfSZlbWJlZGRlZD10cnVlYH1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiNjAwcHhcIlxuICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwibm9uZVwiIH19XG4gICAgICAgIHRpdGxlPVwiUERGIFZpZXdlclwiXG4gICAgICA+PC9pZnJhbWU+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwZGYtdmlld2VyXCI+XG4gICAgICA8RG9jdW1lbnRcbiAgICAgICAgZmlsZT17bXlGaWxlfVxuICAgICAgICBvbkxvYWRTdWNjZXNzPXtvbkRvY3VtZW50TG9hZFN1Y2Nlc3N9XG4gICAgICAgIG9uTG9hZEVycm9yPXtvbkRvY3VtZW50TG9hZEVycm9yfVxuICAgICAgPlxuICAgICAgICA8UGFnZSBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfSAvPlxuICAgICAgPC9Eb2N1bWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGRmLWNvbnRyb2xzXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFBhZ2Uge3BhZ2VOdW1iZXIgfHwgKG51bVBhZ2VzID8gMSA6IFwiLS1cIil9IG9mIHtudW1QYWdlcyB8fCBcIi0tXCJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUHJldmlvdXNQYWdlfSBkaXNhYmxlZD17cGFnZU51bWJlciA8PSAxfT5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25OZXh0UGFnZX0gZGlzYWJsZWQ9e3BhZ2VOdW1iZXIgPj0gbnVtUGFnZXN9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVQZGZ9IGRpc2FibGVkPXshcGRmRG9jfT5TYXZlIFBERjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlQZGZWaWV3ZXI7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRG9jdW1lbnQiLCJQYWdlIiwicGRmanMiLCJQREZEb2N1bWVudCIsImF4aW9zIiwiR2xvYmFsV29ya2VyT3B0aW9ucyIsIndvcmtlclNyYyIsIk15UGRmVmlld2VyIiwibXlGaWxlIiwibnVtUGFnZXMiLCJzZXROdW1QYWdlcyIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwidXNlSWZyYW1lIiwic2V0VXNlSWZyYW1lIiwicGRmRG9jIiwic2V0UGRmRG9jIiwic3RhcnRzV2l0aCIsImdldCIsInJlc3BvbnNlVHlwZSIsInRoZW4iLCJyZXNwb25zZSIsImFycmF5QnVmZmVyIiwiZGF0YSIsImZpbGVVUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwibG9hZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2giLCJyZXMiLCJvbkRvY3VtZW50TG9hZFN1Y2Nlc3MiLCJvbkRvY3VtZW50TG9hZEVycm9yIiwib25QcmV2aW91c1BhZ2UiLCJwcmV2UGFnZU51bWJlciIsIk1hdGgiLCJtYXgiLCJvbk5leHRQYWdlIiwibWluIiwic2F2ZVBkZiIsInBkZkJ5dGVzIiwic2F2ZSIsImJsb2IiLCJ0eXBlIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwiaWZyYW1lIiwic3JjIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsImJvcmRlciIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlsZSIsIm9uTG9hZFN1Y2Nlc3MiLCJvbkxvYWRFcnJvciIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PdfViewer.jsx\n"));

/***/ })

});