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
exports.push([module.i, "body{\r\n  font-family: 'Raleway', sans-serif;\r\n  background-color: #2c3e50;\r\n}\r\n\r\n.wrapper{\r\n  color: #fff;\r\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n  font-size: 35px;\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n}\r\n\r\n.title{\r\n  margin: 20px;\r\n}\r\n\r\ndiv#change{\r\n  display: inline;\r\n}\r\n\r\ndiv#change span.fr{\r\n  display: inline;\r\n}\r\n\r\ndiv#change:hover span.fr{\r\n  display: none;\r\n}\r\n\r\ndiv#change span.en{\r\n  display: none;\r\n  color: #5381ff;\r\n}\r\n\r\ndiv#change:hover span.en{\r\n  display: inline;\r\n}\r\n\r\n.nav{\r\n  color: #aaaaaa;\r\n  margin: 20px;\r\n}\r\n\r\n.nav a{\r\n  color: #5381ff;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav a:hover{\r\n  color: #eeeeee;\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.timeline::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 3px;\r\n  background-color: #ffffff;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -1.5px;\r\n}\r\n\r\n.timeline-left {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 0;\r\n}\r\n\r\n.timeline-left::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #9ec0ff;\r\n  top: 23px;\r\n  border-radius: .5em;\r\n  z-index: 1;\r\n}\r\n\r\n.timeline-left::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  right: 30px;\r\n  border: medium solid #ffffff;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #ffffff;\r\n}\r\n\r\n.timeline-right {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 50%;\r\n}\r\n\r\n\r\n.timeline-right::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #9ec0ff;\r\n  top: 23px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  left: -9px;\r\n}\r\n\r\n.timeline-right::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  left: 30px;\r\n  border: medium solid #ffffff;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent white transparent transparent;\r\n}\r\n\r\n.timeline .content {\r\n  padding: 20px 30px;\r\n  background-color: #ffffff;\r\n  position: relative;\r\n  border-radius: 6px;\r\n}\r\n\r\n.timeline .thumbnail img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n@media screen and (max-width: 1290px) {\r\n  .back {\r\n    right: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .timeline::after {\r\n    left: 61px;\r\n  }\r\n  \r\n  .timeline-left, .timeline-right {\r\n    width: 97%;\r\n    padding-left: 100px;\r\n    padding-right: 15px;\r\n  }\r\n  \r\n  .timeline-left::before, .timeline-right::before {\r\n    left: 90px;\r\n    border: medium solid #ffffff;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n  }\r\n\r\n  .timeline-left::after, .timeline-right::after {\r\n    left: 53px;\r\n  }\r\n  \r\n  .timeline-right {\r\n    left: 0%;\r\n  }\r\n\r\n  .back {\r\n    top: 25px;\r\n    left: -8px;\r\n  }\r\n  \r\n  .about-wrapper .back {\r\n    top: 36px;\r\n  }\r\n\r\n  .about-wrapper p {\r\n    font-size: 18px !important;\r\n  }\r\n\r\n  .about {\r\n    position: absolute;\r\n    left: 10%;\r\n    right: 10%;\r\n    top: 40px;\r\n  }\r\n\r\n  .wrapper {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n.content .title {\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  margin: 7px;\r\n  margin-left: 0;\r\n}\r\n\r\n.content .description {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\n\r\n.content .links .link {\r\n  display: inline-block;\r\n  margin: 4px;\r\n  margin-left: 0;\r\n  font-style: italic;\r\n}\r\n\r\n.about {\r\n  color: #ffffff;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n\r\n.about-wrapper p {\r\n    \r\n  font-size: 20px;\r\n}\r\n\r\n.back{\r\n  position: absolute;\r\n  margin-left: 20px;\r\n  margin-top: 16px;\r\n  z-index: 1000;\r\n}\r\n\r\n.back-button {\r\n  color: #ffffff;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.about-wrapper .back {\r\n  margin-top: -20px;\r\n}", "",{"version":3,"sources":["E:/repos/github.com/Yurma/yurma.github.io/source/style.css"],"names":[],"mappings":"AAEA;EACE,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,mDAAmD;EACnD,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,MAAM;EACN,SAAS;EACT,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,UAAU;EACV,OAAO;AACT;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,SAAS;EACT,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,UAAU;EACV,WAAW;EACX,4BAA4B;EAC5B,8BAA8B;EAC9B,yDAAyD;AAC3D;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,UAAU;EACV,SAAS;AACX;;;AAGA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,SAAS;EACT,kBAAkB;EAClB,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,UAAU;EACV,UAAU;EACV,4BAA4B;EAC5B,8BAA8B;EAC9B,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,4BAA4B;IAC5B,8BAA8B;IAC9B,uDAAuD;EACzD;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB","file":"style.css","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\r\n\r\nbody{\r\n  font-family: 'Raleway', sans-serif;\r\n  background-color: #2c3e50;\r\n}\r\n\r\n.wrapper{\r\n  color: #fff;\r\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n  font-size: 35px;\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n}\r\n\r\n.title{\r\n  margin: 20px;\r\n}\r\n\r\ndiv#change{\r\n  display: inline;\r\n}\r\n\r\ndiv#change span.fr{\r\n  display: inline;\r\n}\r\n\r\ndiv#change:hover span.fr{\r\n  display: none;\r\n}\r\n\r\ndiv#change span.en{\r\n  display: none;\r\n  color: #5381ff;\r\n}\r\n\r\ndiv#change:hover span.en{\r\n  display: inline;\r\n}\r\n\r\n.nav{\r\n  color: #aaaaaa;\r\n  margin: 20px;\r\n}\r\n\r\n.nav a{\r\n  color: #5381ff;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav a:hover{\r\n  color: #eeeeee;\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.timeline::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 3px;\r\n  background-color: #ffffff;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -1.5px;\r\n}\r\n\r\n.timeline-left {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 0;\r\n}\r\n\r\n.timeline-left::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #9ec0ff;\r\n  top: 23px;\r\n  border-radius: .5em;\r\n  z-index: 1;\r\n}\r\n\r\n.timeline-left::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  right: 30px;\r\n  border: medium solid #ffffff;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #ffffff;\r\n}\r\n\r\n.timeline-right {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 50%;\r\n}\r\n\r\n\r\n.timeline-right::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #9ec0ff;\r\n  top: 23px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  left: -9px;\r\n}\r\n\r\n.timeline-right::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  left: 30px;\r\n  border: medium solid #ffffff;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent white transparent transparent;\r\n}\r\n\r\n.timeline .content {\r\n  padding: 20px 30px;\r\n  background-color: #ffffff;\r\n  position: relative;\r\n  border-radius: 6px;\r\n}\r\n\r\n.timeline .thumbnail img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n@media screen and (max-width: 1290px) {\r\n  .back {\r\n    right: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .timeline::after {\r\n    left: 61px;\r\n  }\r\n  \r\n  .timeline-left, .timeline-right {\r\n    width: 97%;\r\n    padding-left: 100px;\r\n    padding-right: 15px;\r\n  }\r\n  \r\n  .timeline-left::before, .timeline-right::before {\r\n    left: 90px;\r\n    border: medium solid #ffffff;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n  }\r\n\r\n  .timeline-left::after, .timeline-right::after {\r\n    left: 53px;\r\n  }\r\n  \r\n  .timeline-right {\r\n    left: 0%;\r\n  }\r\n\r\n  .back {\r\n    top: 25px;\r\n    left: -8px;\r\n  }\r\n  \r\n  .about-wrapper .back {\r\n    top: 36px;\r\n  }\r\n\r\n  .about-wrapper p {\r\n    font-size: 18px !important;\r\n  }\r\n\r\n  .about {\r\n    position: absolute;\r\n    left: 10%;\r\n    right: 10%;\r\n    top: 40px;\r\n  }\r\n\r\n  .wrapper {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n.content .title {\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  margin: 7px;\r\n  margin-left: 0;\r\n}\r\n\r\n.content .description {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\n\r\n.content .links .link {\r\n  display: inline-block;\r\n  margin: 4px;\r\n  margin-left: 0;\r\n  font-style: italic;\r\n}\r\n\r\n.about {\r\n  color: #ffffff;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n\r\n.about-wrapper p {\r\n    \r\n  font-size: 20px;\r\n}\r\n\r\n.back{\r\n  position: absolute;\r\n  margin-left: 20px;\r\n  margin-top: 16px;\r\n  z-index: 1000;\r\n}\r\n\r\n.back-button {\r\n  color: #ffffff;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.about-wrapper .back {\r\n  margin-top: -20px;\r\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDZEQUE2RCxtQkFBbUIscUNBQXFDLHVDQUF1QyxnRUFBZ0UsT0FBTyx5REFBeUQsbUJBQW1CLE9BQU8sNkJBQTZCLGlCQUFpQixPQUFPLGlCQUFpQixrQkFBa0IsbUJBQW1CLE9BQU8sa0NBQWtDLGtCQUFrQixPQUFPLDRCQUE0QixtQ0FBbUMsT0FBTyxrQkFBa0IsMkJBQTJCLGtCQUFrQixtQkFBbUIsa0JBQWtCLE9BQU8sb0JBQW9CLHdCQUF3QixPQUFPLEtBQUsseUJBQXlCLHVCQUF1QixzQkFBc0Isa0JBQWtCLHFCQUFxQixLQUFLLCtCQUErQix1QkFBdUIsc0JBQXNCLEtBQUssK0JBQStCLDRCQUE0QixrQkFBa0IscUJBQXFCLHlCQUF5QixLQUFLLGdCQUFnQixxQkFBcUIsdUJBQXVCLHNCQUFzQixLQUFLLDBCQUEwQiw4QkFBOEIsS0FBSyxjQUFjLHlCQUF5Qix3QkFBd0IsdUJBQXVCLG9CQUFvQixLQUFLLHNCQUFzQixxQkFBcUIsNEJBQTRCLEtBQUssOEJBQThCLHdCQUF3QixLQUFLLEdBQUc7QUFDNzZWO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZDNlMDY1ODNlMzFiOGM3NTlmMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlcntcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZXtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZXtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZSBzcGFuLmZye1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlOmhvdmVyIHNwYW4uZnJ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlIHNwYW4uZW57XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgY29sb3I6ICM1MzgxZmY7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2U6aG92ZXIgc3Bhbi5lbntcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdntcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGF7XFxyXFxuICBjb2xvcjogIzUzODFmZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBhOmhvdmVye1xcclxcbiAgY29sb3I6ICNlZWVlZWU7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmU6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTEuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtbGVmdCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1sZWZ0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgcmlnaHQ6IC05cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjMGZmO1xcclxcbiAgdG9wOiAyM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1sZWZ0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMnB4O1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcmlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxMHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtcmlnaHQge1xcclxcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aW1lbGluZS1yaWdodDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIHJpZ2h0OiAtOXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYzBmZjtcXHJcXG4gIHRvcDogMjNweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiAtOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtcmlnaHQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIycHg7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiBtZWRpdW0gc29saWQgI2ZmZmZmZjtcXHJcXG4gIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSAuY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUgLnRodW1ibmFpbCBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyOTBweCkge1xcclxcbiAgLmJhY2sge1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC50aW1lbGluZTo6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiA2MXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGltZWxpbmUtbGVmdCwgLnRpbWVsaW5lLXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IDk3JTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRpbWVsaW5lLWxlZnQ6OmJlZm9yZSwgLnRpbWVsaW5lLXJpZ2h0OjpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiA5MHB4O1xcclxcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZmZmZmZmO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGltZWxpbmUtbGVmdDo6YWZ0ZXIsIC50aW1lbGluZS1yaWdodDo6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiA1M3B4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGltZWxpbmUtcmlnaHQge1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iYWNrIHtcXHJcXG4gICAgdG9wOiAyNXB4O1xcclxcbiAgICBsZWZ0OiAtOHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYWJvdXQtd3JhcHBlciAuYmFjayB7XFxyXFxuICAgIHRvcDogMzZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC13cmFwcGVyIHAge1xcclxcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICByaWdodDogMTAlO1xcclxcbiAgICB0b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3JhcHBlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgLnRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBtYXJnaW46IDdweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAuZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgLmxpbmtzIC5saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbjogNHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC13cmFwcGVyIHAge1xcclxcbiAgICBcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2t7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1idXR0b24ge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC13cmFwcGVyIC5iYWNrIHtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi9yZXBvcy9naXRodWIuY29tL1l1cm1hL3l1cm1hLmdpdGh1Yi5pby9zb3VyY2Uvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtREFBbUQ7RUFDbkQsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixTQUFTO0VBQ1QsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixTQUFTO0FBQ1g7OztBQUdBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtFQUNWLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsdURBQXVEO0VBQ3pEOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVye1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogJ0F2ZW5pcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxle1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdle1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlIHNwYW4uZnJ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2U6aG92ZXIgc3Bhbi5mcntcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2Ugc3Bhbi5lbntcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjb2xvcjogIzUzODFmZjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZTpob3ZlciBzcGFuLmVue1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2e1xcclxcbiAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYgYXtcXHJcXG4gIGNvbG9yOiAjNTM4MWZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGE6aG92ZXJ7XFxyXFxuICBjb2xvcjogI2VlZWVlZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMS41cHg7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1sZWZ0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lLWxlZnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICByaWdodDogLTlweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWMwZmY7XFxyXFxuICB0b3A6IDIzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuNWVtO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lLWxlZnQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIycHg7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogbWVkaXVtIHNvbGlkICNmZmZmZmY7XFxyXFxuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDEwcHg7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1yaWdodCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRpbWVsaW5lLXJpZ2h0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgcmlnaHQ6IC05cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjMGZmO1xcclxcbiAgdG9wOiAyM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IC05cHg7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1yaWdodDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjJweDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lIC5jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSAudGh1bWJuYWlsIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI5MHB4KSB7XFxyXFxuICAuYmFjayB7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLnRpbWVsaW5lOjphZnRlciB7XFxyXFxuICAgIGxlZnQ6IDYxcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50aW1lbGluZS1sZWZ0LCAudGltZWxpbmUtcmlnaHQge1xcclxcbiAgICB3aWR0aDogOTclO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGltZWxpbmUtbGVmdDo6YmVmb3JlLCAudGltZWxpbmUtcmlnaHQ6OmJlZm9yZSB7XFxyXFxuICAgIGxlZnQ6IDkwcHg7XFxyXFxuICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkICNmZmZmZmY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aW1lbGluZS1sZWZ0OjphZnRlciwgLnRpbWVsaW5lLXJpZ2h0OjphZnRlciB7XFxyXFxuICAgIGxlZnQ6IDUzcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50aW1lbGluZS1yaWdodCB7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJhY2sge1xcclxcbiAgICB0b3A6IDI1cHg7XFxyXFxuICAgIGxlZnQ6IC04cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hYm91dC13cmFwcGVyIC5iYWNrIHtcXHJcXG4gICAgdG9wOiAzNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LXdyYXBwZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICAgIHJpZ2h0OiAxMCU7XFxyXFxuICAgIHRvcDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53cmFwcGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAudGl0bGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIG1hcmdpbjogN3B4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IC5kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAubGlua3MgLmxpbmsge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luOiA0cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXdyYXBwZXIgcCB7XFxyXFxuICAgIFxcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3tcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5iYWNrLWJ1dHRvbiB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXdyYXBwZXIgLmJhY2sge1xcclxcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxyXFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=