webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway&display=swap);"]);
// Module
exports.push([module.i, "body{\r\n  font-family: 'Raleway', sans-serif;\r\n  background-color: #2c3e50;\r\n}\r\n\r\n.wrapper{\r\n  color: #fff;\r\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n  font-size: 35px;\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n}\r\n\r\n.title{\r\n  margin: 20px;\r\n}\r\n\r\ndiv#change{\r\n  display: inline;\r\n}\r\n\r\ndiv#change span.fr{\r\n  display: inline;\r\n}\r\n\r\ndiv#change:hover span.fr{\r\n  display: none;\r\n}\r\n\r\ndiv#change span.en{\r\n  display: none;\r\n  color: #5381ff;\r\n}\r\n\r\ndiv#change:hover span.en{\r\n  display: inline;\r\n}\r\n\r\n.nav{\r\n  color: #aaaaaa;\r\n  margin: 20px;\r\n}\r\n\r\n.nav a{\r\n  color: #5381ff;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav a:hover{\r\n  color: #eeeeee;\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  max-width: 1500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.timeline::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 3px;\r\n  background-color: #ffffff;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -1.5px;\r\n}\r\n\r\n.timeline-left {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 0;\r\n}\r\n\r\n.timeline-left::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #d4ffe6;\r\n  top: 10px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n\r\n.timeline-left::before {\r\n  content: '';\r\n  height: 0;\r\n  position: absolute;\r\n  top: 10px;\r\n  width: 0;\r\n  z-index: 1;\r\n  right: 30px;\r\n  border: 1px solid #ffffff;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #b8b8b8;\r\n}\r\n\r\n.timeline-right {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 50%;\r\n}\r\n\r\n.link a {\r\n  padding: 5px;\r\n  font-weight: 800;\r\n}\r\n\r\n.timeline-right::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #9ec0ff;\r\n  top: 10px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  left: -9px;\r\n}\r\n\r\n.timeline-right::before {\r\n  content: '';\r\n  height: 0;\r\n  position: absolute;\r\n  top: 10px;\r\n  width: 0;\r\n  z-index: 1;\r\n  left: 30px;\r\n  border: 1px solid #ffffff;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent #b8b8b8 transparent transparent;\r\n}\r\n\r\n.timeline .content {\r\n  padding: 20px 30px;\r\n  background-color: #f1f1f1;\r\n  position: relative;\r\n  border-radius: 1em;\r\n}\r\n\r\n.timeline-left .content {\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.timeline-right .content {\r\n  border-top-left-radius: 0;\r\n}\r\n\r\n.timeline .thumbnail img {\r\n  width: 100%;\r\n  border-radius: .8em;\r\n  height: auto;\r\n}\r\n\r\n@media screen and (max-width: 1570px) {\r\n  .back {\r\n    right: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .timeline::after {\r\n    left: 61px;\r\n  }\r\n  \r\n  .timeline-left, .timeline-right {\r\n    width: 97%;\r\n    padding-left: 100px;\r\n    padding-right: 15px;\r\n  }\r\n  \r\n  .timeline-left::before, .timeline-right::before {\r\n    left: 90px;\r\n    border: 1px solid #ffffff;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n  }\r\n\r\n  .timeline-left::after, .timeline-right::after {\r\n    left: 53px;\r\n  }\r\n\r\n  .timeline-left .content {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 1em;\r\n  }\r\n  \r\n  .timeline-right {\r\n    left: 0%;\r\n  }\r\n\r\n  .back {\r\n    top: 25px;\r\n    left: -8px;\r\n  }\r\n  \r\n  .about-wrapper .back {\r\n    top: 36px;\r\n  }\r\n\r\n  .about-wrapper p {\r\n    font-size: 18px !important;\r\n  }\r\n\r\n  .about {\r\n    position: absolute;\r\n    left: 10%;\r\n    right: 10%;\r\n    top: 40px;\r\n  }\r\n\r\n  .wrapper {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n.content .title {\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  margin: 7px;\r\n  margin-left: 0;\r\n}\r\n\r\n.content .description {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\n\r\n.content .links .link {\r\n  display: inline-block;\r\n  margin: 4px;\r\n  margin-left: 0;\r\n  font-style: italic;\r\n}\r\n\r\n.about {\r\n  color: #ffffff;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n\r\n.about-wrapper p {\r\n    \r\n  font-size: 20px;\r\n}\r\n\r\n.back{\r\n  position: absolute;\r\n  margin-left: 20px;\r\n  margin-top: 16px;\r\n  z-index: 1000;\r\n}\r\n\r\n.back-button {\r\n  color: #ffffff;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.about-wrapper .back {\r\n  margin-top: -20px;\r\n}", "",{"version":3,"sources":["E:/repos/github.com/Yurma/yurma.github.io/source/style.css"],"names":[],"mappings":"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","file":"style.css","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\r\n\r\nbody{\r\n  font-family: 'Raleway', sans-serif;\r\n  background-color: #2c3e50;\r\n}\r\n\r\n.wrapper{\r\n  color: #fff;\r\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n  font-size: 35px;\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n}\r\n\r\n.title{\r\n  margin: 20px;\r\n}\r\n\r\ndiv#change{\r\n  display: inline;\r\n}\r\n\r\ndiv#change span.fr{\r\n  display: inline;\r\n}\r\n\r\ndiv#change:hover span.fr{\r\n  display: none;\r\n}\r\n\r\ndiv#change span.en{\r\n  display: none;\r\n  color: #5381ff;\r\n}\r\n\r\ndiv#change:hover span.en{\r\n  display: inline;\r\n}\r\n\r\n.nav{\r\n  color: #aaaaaa;\r\n  margin: 20px;\r\n}\r\n\r\n.nav a{\r\n  color: #5381ff;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav a:hover{\r\n  color: #eeeeee;\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  max-width: 1500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.timeline::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 3px;\r\n  background-color: #ffffff;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -1.5px;\r\n}\r\n\r\n.timeline-left {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 0;\r\n}\r\n\r\n.timeline-left::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #d4ffe6;\r\n  top: 10px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n\r\n.timeline-left::before {\r\n  content: '';\r\n  height: 0;\r\n  position: absolute;\r\n  top: 10px;\r\n  width: 0;\r\n  z-index: 1;\r\n  right: 30px;\r\n  border: 1px solid #ffffff;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #b8b8b8;\r\n}\r\n\r\n.timeline-right {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 50%;\r\n}\r\n\r\n.link a {\r\n  padding: 5px;\r\n  font-weight: 800;\r\n}\r\n\r\n.timeline-right::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #9ec0ff;\r\n  top: 10px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  left: -9px;\r\n}\r\n\r\n.timeline-right::before {\r\n  content: '';\r\n  height: 0;\r\n  position: absolute;\r\n  top: 10px;\r\n  width: 0;\r\n  z-index: 1;\r\n  left: 30px;\r\n  border: 1px solid #ffffff;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent #b8b8b8 transparent transparent;\r\n}\r\n\r\n.timeline .content {\r\n  padding: 20px 30px;\r\n  background-color: #f1f1f1;\r\n  position: relative;\r\n  border-radius: 1em;\r\n}\r\n\r\n.timeline-left .content {\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.timeline-right .content {\r\n  border-top-left-radius: 0;\r\n}\r\n\r\n.timeline .thumbnail img {\r\n  width: 100%;\r\n  border-radius: .8em;\r\n  height: auto;\r\n}\r\n\r\n@media screen and (max-width: 1570px) {\r\n  .back {\r\n    right: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .timeline::after {\r\n    left: 61px;\r\n  }\r\n  \r\n  .timeline-left, .timeline-right {\r\n    width: 97%;\r\n    padding-left: 100px;\r\n    padding-right: 15px;\r\n  }\r\n  \r\n  .timeline-left::before, .timeline-right::before {\r\n    left: 90px;\r\n    border: 1px solid #ffffff;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n  }\r\n\r\n  .timeline-left::after, .timeline-right::after {\r\n    left: 53px;\r\n  }\r\n\r\n  .timeline-left .content {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 1em;\r\n  }\r\n  \r\n  .timeline-right {\r\n    left: 0%;\r\n  }\r\n\r\n  .back {\r\n    top: 25px;\r\n    left: -8px;\r\n  }\r\n  \r\n  .about-wrapper .back {\r\n    top: 36px;\r\n  }\r\n\r\n  .about-wrapper p {\r\n    font-size: 18px !important;\r\n  }\r\n\r\n  .about {\r\n    position: absolute;\r\n    left: 10%;\r\n    right: 10%;\r\n    top: 40px;\r\n  }\r\n\r\n  .wrapper {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n.content .title {\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  margin: 7px;\r\n  margin-left: 0;\r\n}\r\n\r\n.content .description {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\n\r\n.content .links .link {\r\n  display: inline-block;\r\n  margin: 4px;\r\n  margin-left: 0;\r\n  font-style: italic;\r\n}\r\n\r\n.about {\r\n  color: #ffffff;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n\r\n.about-wrapper p {\r\n    \r\n  font-size: 20px;\r\n}\r\n\r\n.back{\r\n  position: absolute;\r\n  margin-left: 20px;\r\n  margin-top: 16px;\r\n  z-index: 1000;\r\n}\r\n\r\n.back-button {\r\n  color: #ffffff;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.about-wrapper .back {\r\n  margin-top: -20px;\r\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVkseUhBQXlILGFBQWEseUNBQXlDLGdDQUFnQyxLQUFLLGlCQUFpQixrQkFBa0IsMERBQTBELHNCQUFzQixnQkFBZ0IseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1QyxnQ0FBZ0MseUJBQXlCLEtBQUssZUFBZSxtQkFBbUIsS0FBSyxtQkFBbUIsc0JBQXNCLEtBQUssMkJBQTJCLHNCQUFzQixLQUFLLGlDQUFpQyxvQkFBb0IsS0FBSywyQkFBMkIsb0JBQW9CLHFCQUFxQixLQUFLLGlDQUFpQyxzQkFBc0IsS0FBSyxhQUFhLHFCQUFxQixtQkFBbUIsS0FBSyxlQUFlLHFCQUFxQiw0QkFBNEIsS0FBSyxxQkFBcUIscUJBQXFCLEtBQUssbUJBQW1CLHlCQUF5Qix3QkFBd0IscUJBQXFCLEtBQUssMEJBQTBCLGtCQUFrQix5QkFBeUIsaUJBQWlCLGdDQUFnQyxhQUFhLGdCQUFnQixnQkFBZ0IsMEJBQTBCLEtBQUssd0JBQXdCLHlCQUF5Qix5QkFBeUIsZ0NBQWdDLGlCQUFpQixjQUFjLEtBQUssK0JBQStCLGtCQUFrQix5QkFBeUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsZ0NBQWdDLGdCQUFnQix5QkFBeUIsaUJBQWlCLEtBQUssZ0NBQWdDLGtCQUFrQixnQkFBZ0IseUJBQXlCLGdCQUFnQixlQUFlLGlCQUFpQixrQkFBa0IsZ0NBQWdDLHFDQUFxQyxnRUFBZ0UsS0FBSyx5QkFBeUIseUJBQXlCLHlCQUF5QixnQ0FBZ0MsaUJBQWlCLGdCQUFnQixLQUFLLGlCQUFpQixtQkFBbUIsdUJBQXVCLEtBQUssZ0NBQWdDLGtCQUFrQix5QkFBeUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsZ0NBQWdDLGdCQUFnQix5QkFBeUIsaUJBQWlCLGlCQUFpQixLQUFLLGlDQUFpQyxrQkFBa0IsZ0JBQWdCLHlCQUF5QixnQkFBZ0IsZUFBZSxpQkFBaUIsaUJBQWlCLGdDQUFnQyxxQ0FBcUMsZ0VBQWdFLEtBQUssNEJBQTRCLHlCQUF5QixnQ0FBZ0MseUJBQXlCLHlCQUF5QixLQUFLLGlDQUFpQyxpQ0FBaUMsS0FBSyxrQ0FBa0MsZ0NBQWdDLEtBQUssa0NBQWtDLGtCQUFrQiwwQkFBMEIsbUJBQW1CLEtBQUssK0NBQStDLGFBQWEsb0JBQW9CLE9BQU8sS0FBSyw4Q0FBOEMsd0JBQXdCLG1CQUFtQixPQUFPLDZDQUE2QyxtQkFBbUIsNEJBQTRCLDRCQUE0QixPQUFPLDZEQUE2RCxtQkFBbUIsa0NBQWtDLHVDQUF1QyxnRUFBZ0UsT0FBTyx5REFBeUQsbUJBQW1CLE9BQU8sbUNBQW1DLGtDQUFrQyxxQ0FBcUMsT0FBTyw2QkFBNkIsaUJBQWlCLE9BQU8saUJBQWlCLGtCQUFrQixtQkFBbUIsT0FBTyxrQ0FBa0Msa0JBQWtCLE9BQU8sNEJBQTRCLG1DQUFtQyxPQUFPLGtCQUFrQiwyQkFBMkIsa0JBQWtCLG1CQUFtQixrQkFBa0IsT0FBTyxvQkFBb0Isd0JBQXdCLE9BQU8sS0FBSyx5QkFBeUIsdUJBQXVCLHNCQUFzQixrQkFBa0IscUJBQXFCLEtBQUssK0JBQStCLHVCQUF1QixzQkFBc0IsS0FBSywrQkFBK0IsNEJBQTRCLGtCQUFrQixxQkFBcUIseUJBQXlCLEtBQUssZ0JBQWdCLHFCQUFxQix1QkFBdUIsc0JBQXNCLEtBQUssMEJBQTBCLDhCQUE4QixLQUFLLGNBQWMseUJBQXlCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLEtBQUssc0JBQXNCLHFCQUFxQiw0QkFBNEIsS0FBSyw4QkFBOEIsd0JBQXdCLEtBQUssR0FBRztBQUM5clg7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy4yZjEwZjAxYmFhNGU4ZDJmMzRiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcclxcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVye1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogJ0F2ZW5pcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxle1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdle1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlIHNwYW4uZnJ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2U6aG92ZXIgc3Bhbi5mcntcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2Ugc3Bhbi5lbntcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjb2xvcjogIzUzODFmZjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZTpob3ZlciBzcGFuLmVue1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2e1xcclxcbiAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYgYXtcXHJcXG4gIGNvbG9yOiAjNTM4MWZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGE6aG92ZXJ7XFxyXFxuICBjb2xvcjogI2VlZWVlZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1heC13aWR0aDogMTUwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMS41cHg7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1sZWZ0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lLWxlZnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICByaWdodDogLTlweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGZmZTY7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtbGVmdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcmlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxMHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYjhiOGI4O1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtcmlnaHQge1xcclxcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5saW5rIGEge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lLXJpZ2h0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgcmlnaHQ6IC05cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjMGZmO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IC05cHg7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1yaWdodDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbGVmdDogMzBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XFxyXFxuICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNiOGI4YjggdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSAuY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtbGVmdCAuY29udGVudCB7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lLXJpZ2h0IC5jb250ZW50IHtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSAudGh1bWJuYWlsIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC44ZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NzBweCkge1xcclxcbiAgLmJhY2sge1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC50aW1lbGluZTo6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiA2MXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGltZWxpbmUtbGVmdCwgLnRpbWVsaW5lLXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IDk3JTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRpbWVsaW5lLWxlZnQ6OmJlZm9yZSwgLnRpbWVsaW5lLXJpZ2h0OjpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiA5MHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGltZWxpbmUtbGVmdDo6YWZ0ZXIsIC50aW1lbGluZS1yaWdodDo6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiA1M3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpbWVsaW5lLWxlZnQgLmNvbnRlbnQge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMWVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGltZWxpbmUtcmlnaHQge1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iYWNrIHtcXHJcXG4gICAgdG9wOiAyNXB4O1xcclxcbiAgICBsZWZ0OiAtOHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYWJvdXQtd3JhcHBlciAuYmFjayB7XFxyXFxuICAgIHRvcDogMzZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC13cmFwcGVyIHAge1xcclxcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICByaWdodDogMTAlO1xcclxcbiAgICB0b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3JhcHBlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgLnRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBtYXJnaW46IDdweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAuZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgLmxpbmtzIC5saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbjogNHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC13cmFwcGVyIHAge1xcclxcbiAgICBcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2t7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1idXR0b24ge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC13cmFwcGVyIC5iYWNrIHtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi9yZXBvcy9naXRodWIuY29tL1l1cm1hL3l1cm1hLmdpdGh1Yi5pby9zb3VyY2Uvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtREFBbUQ7RUFDbkQsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixTQUFTO0VBQ1QsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIseURBQXlEO0FBQzNEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLHVEQUF1RDtFQUN6RDs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJmaWxlXCI6XCJzdHlsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbmJvZHl7XFxyXFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXJ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGV7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2V7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2Ugc3Bhbi5mcntcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZTpob3ZlciBzcGFuLmZye1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZSBzcGFuLmVue1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNTM4MWZmO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlOmhvdmVyIHNwYW4uZW57XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZ7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBhe1xcclxcbiAgY29sb3I6ICM1MzgxZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYgYTpob3ZlcntcXHJcXG4gIGNvbG9yOiAjZWVlZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lLWxlZnQge1xcclxcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtbGVmdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIHJpZ2h0OiAtOXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZmZlNjtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1sZWZ0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XFxyXFxuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDEwcHg7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNiOGI4Yjg7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1yaWdodCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmsgYSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtcmlnaHQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICByaWdodDogLTlweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWMwZmY7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbGVmdDogLTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lLXJpZ2h0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcXHJcXG4gIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2I4YjhiOCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lIC5jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1sZWZ0IC5jb250ZW50IHtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtcmlnaHQgLmNvbnRlbnQge1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lIC50aHVtYm5haWwgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjhlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU3MHB4KSB7XFxyXFxuICAuYmFjayB7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLnRpbWVsaW5lOjphZnRlciB7XFxyXFxuICAgIGxlZnQ6IDYxcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50aW1lbGluZS1sZWZ0LCAudGltZWxpbmUtcmlnaHQge1xcclxcbiAgICB3aWR0aDogOTclO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGltZWxpbmUtbGVmdDo6YmVmb3JlLCAudGltZWxpbmUtcmlnaHQ6OmJlZm9yZSB7XFxyXFxuICAgIGxlZnQ6IDkwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aW1lbGluZS1sZWZ0OjphZnRlciwgLnRpbWVsaW5lLXJpZ2h0OjphZnRlciB7XFxyXFxuICAgIGxlZnQ6IDUzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGltZWxpbmUtbGVmdCAuY29udGVudCB7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50aW1lbGluZS1yaWdodCB7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJhY2sge1xcclxcbiAgICB0b3A6IDI1cHg7XFxyXFxuICAgIGxlZnQ6IC04cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hYm91dC13cmFwcGVyIC5iYWNrIHtcXHJcXG4gICAgdG9wOiAzNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LXdyYXBwZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICAgIHJpZ2h0OiAxMCU7XFxyXFxuICAgIHRvcDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53cmFwcGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAudGl0bGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIG1hcmdpbjogN3B4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IC5kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAubGlua3MgLmxpbmsge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luOiA0cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXdyYXBwZXIgcCB7XFxyXFxuICAgIFxcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3tcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5iYWNrLWJ1dHRvbiB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXdyYXBwZXIgLmJhY2sge1xcclxcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxyXFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=