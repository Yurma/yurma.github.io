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
exports.push([module.i, "body{\r\n  font-family: 'Raleway', sans-serif;\r\n  background-color: #2c3e50;\r\n}\r\n\r\n.wrapper{\r\n  color: #fff;\r\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n  font-size: 35px;\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n}\r\n\r\n.title{\r\n  margin: 20px;\r\n}\r\n\r\ndiv#change{\r\n  display: inline;\r\n}\r\n\r\ndiv#change span.fr{\r\n  display: inline;\r\n}\r\n\r\ndiv#change:hover span.fr{\r\n  display: none;\r\n}\r\n\r\ndiv#change span.en{\r\n  display: none;\r\n  color: #5381ff;\r\n}\r\n\r\ndiv#change:hover span.en{\r\n  display: inline;\r\n}\r\n\r\n.nav{\r\n  color: #aaaaaa;\r\n  margin: 20px;\r\n}\r\n\r\n.nav a{\r\n  color: #5381ff;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav a:hover{\r\n  color: #eeeeee;\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.timeline::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 3px;\r\n  background-color: #ffffff;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -1.5px;\r\n}\r\n\r\n.timeline-left {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 0;\r\n}\r\n\r\n.timeline-left::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #9ec0ff;\r\n  top: 23px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n\r\n.timeline-left::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  right: 30px;\r\n  border: medium solid #ffffff;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #ffffff;\r\n}\r\n\r\n.timeline-right {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 50%;\r\n}\r\n\r\n\r\n.timeline-right::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #9ec0ff;\r\n  top: 23px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  left: -9px;\r\n}\r\n\r\n.timeline-right::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  left: 30px;\r\n  border: medium solid #ffffff;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent white transparent transparent;\r\n}\r\n\r\n.timeline .content {\r\n  padding: 20px 30px;\r\n  background-color: #ffffff;\r\n  position: relative;\r\n  border-radius: 6px;\r\n}\r\n\r\n@media screen and (max-width: 1290px) {\r\n  .back {\r\n    right: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .timeline::after {\r\n    left: 61px;\r\n  }\r\n  \r\n  .timeline-left, .timeline-right {\r\n    width: 90%;\r\n    padding-left: 100px;\r\n    padding-right: 15px;\r\n  }\r\n  \r\n  .timeline-left::before, .timeline-right::before {\r\n    left: 90px;\r\n    border: medium solid #ffffff;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n  }\r\n\r\n  .timeline-left::after, .timeline-right::after {\r\n    left: 53px;\r\n  }\r\n  \r\n  .timeline-right {\r\n    left: 0%;\r\n  }\r\n\r\n  .back {\r\n    top: 25px;\r\n    left: -8px;\r\n  }\r\n  \r\n  .about-wrapper .back {\r\n    top: 36px;\r\n  }\r\n\r\n  .about-wrapper p {\r\n    font-size: 18px !important;\r\n  }\r\n\r\n  .about {\r\n    position: absolute;\r\n    left: 10%;\r\n    right: 10%;\r\n    top: 40px;\r\n  }\r\n\r\n  .wrapper {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n.content .title {\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  margin: 7px;\r\n  margin-left: 0;\r\n}\r\n\r\n.content .description {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\n\r\n.content .links .link {\r\n  display: inline-block;\r\n  margin: 4px;\r\n  margin-left: 0;\r\n  font-style: italic;\r\n}\r\n\r\n.about {\r\n  color: #ffffff;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n\r\n.about-wrapper p {\r\n    \r\n  font-size: 20px;\r\n}\r\n\r\n.back{\r\n  position: absolute;\r\n  margin-left: 20px;\r\n  margin-top: 16px;\r\n  z-index: 1000;\r\n}\r\n\r\n.back-button {\r\n  color: #ffffff;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.about-wrapper .back {\r\n  margin-top: -20px;\r\n}", "",{"version":3,"sources":["E:/repos/github.com/Yurma/yurma.github.io/source/style.css"],"names":[],"mappings":"AAEA;EACE,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,mDAAmD;EACnD,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,MAAM;EACN,SAAS;EACT,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,UAAU;EACV,OAAO;AACT;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,SAAS;EACT,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,UAAU;EACV,WAAW;EACX,4BAA4B;EAC5B,8BAA8B;EAC9B,yDAAyD;AAC3D;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,UAAU;EACV,SAAS;AACX;;;AAGA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,SAAS;EACT,kBAAkB;EAClB,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,UAAU;EACV,UAAU;EACV,4BAA4B;EAC5B,8BAA8B;EAC9B,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,4BAA4B;IAC5B,8BAA8B;IAC9B,uDAAuD;EACzD;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB","file":"style.css","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\r\n\r\nbody{\r\n  font-family: 'Raleway', sans-serif;\r\n  background-color: #2c3e50;\r\n}\r\n\r\n.wrapper{\r\n  color: #fff;\r\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n  font-size: 35px;\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n}\r\n\r\n.title{\r\n  margin: 20px;\r\n}\r\n\r\ndiv#change{\r\n  display: inline;\r\n}\r\n\r\ndiv#change span.fr{\r\n  display: inline;\r\n}\r\n\r\ndiv#change:hover span.fr{\r\n  display: none;\r\n}\r\n\r\ndiv#change span.en{\r\n  display: none;\r\n  color: #5381ff;\r\n}\r\n\r\ndiv#change:hover span.en{\r\n  display: inline;\r\n}\r\n\r\n.nav{\r\n  color: #aaaaaa;\r\n  margin: 20px;\r\n}\r\n\r\n.nav a{\r\n  color: #5381ff;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav a:hover{\r\n  color: #eeeeee;\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.timeline::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 3px;\r\n  background-color: #ffffff;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -1.5px;\r\n}\r\n\r\n.timeline-left {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 0;\r\n}\r\n\r\n.timeline-left::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #9ec0ff;\r\n  top: 23px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n\r\n.timeline-left::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  right: 30px;\r\n  border: medium solid #ffffff;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #ffffff;\r\n}\r\n\r\n.timeline-right {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n  left: 50%;\r\n}\r\n\r\n\r\n.timeline-right::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  right: -9px;\r\n  background-color: #9ec0ff;\r\n  top: 23px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  left: -9px;\r\n}\r\n\r\n.timeline-right::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  left: 30px;\r\n  border: medium solid #ffffff;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent white transparent transparent;\r\n}\r\n\r\n.timeline .content {\r\n  padding: 20px 30px;\r\n  background-color: #ffffff;\r\n  position: relative;\r\n  border-radius: 6px;\r\n}\r\n\r\n@media screen and (max-width: 1290px) {\r\n  .back {\r\n    right: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .timeline::after {\r\n    left: 61px;\r\n  }\r\n  \r\n  .timeline-left, .timeline-right {\r\n    width: 90%;\r\n    padding-left: 100px;\r\n    padding-right: 15px;\r\n  }\r\n  \r\n  .timeline-left::before, .timeline-right::before {\r\n    left: 90px;\r\n    border: medium solid #ffffff;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n  }\r\n\r\n  .timeline-left::after, .timeline-right::after {\r\n    left: 53px;\r\n  }\r\n  \r\n  .timeline-right {\r\n    left: 0%;\r\n  }\r\n\r\n  .back {\r\n    top: 25px;\r\n    left: -8px;\r\n  }\r\n  \r\n  .about-wrapper .back {\r\n    top: 36px;\r\n  }\r\n\r\n  .about-wrapper p {\r\n    font-size: 18px !important;\r\n  }\r\n\r\n  .about {\r\n    position: absolute;\r\n    left: 10%;\r\n    right: 10%;\r\n    top: 40px;\r\n  }\r\n\r\n  .wrapper {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n.content .title {\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  margin: 7px;\r\n  margin-left: 0;\r\n}\r\n\r\n.content .description {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\n\r\n.content .links .link {\r\n  display: inline-block;\r\n  margin: 4px;\r\n  margin-left: 0;\r\n  font-style: italic;\r\n}\r\n\r\n.about {\r\n  color: #ffffff;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n\r\n.about-wrapper p {\r\n    \r\n  font-size: 20px;\r\n}\r\n\r\n.back{\r\n  position: absolute;\r\n  margin-left: 20px;\r\n  margin-top: 16px;\r\n  z-index: 1000;\r\n}\r\n\r\n.back-button {\r\n  color: #ffffff;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.about-wrapper .back {\r\n  margin-top: -20px;\r\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFPLGlCQUFpQixrQkFBa0IsbUJBQW1CLE9BQU8sa0NBQWtDLGtCQUFrQixPQUFPLDRCQUE0QixtQ0FBbUMsT0FBTyxrQkFBa0IsMkJBQTJCLGtCQUFrQixtQkFBbUIsa0JBQWtCLE9BQU8sb0JBQW9CLHdCQUF3QixPQUFPLEtBQUsseUJBQXlCLHVCQUF1QixzQkFBc0Isa0JBQWtCLHFCQUFxQixLQUFLLCtCQUErQix1QkFBdUIsc0JBQXNCLEtBQUssK0JBQStCLDRCQUE0QixrQkFBa0IscUJBQXFCLHlCQUF5QixLQUFLLGdCQUFnQixxQkFBcUIsdUJBQXVCLHNCQUFzQixLQUFLLDBCQUEwQiw4QkFBOEIsS0FBSyxjQUFjLHlCQUF5Qix3QkFBd0IsdUJBQXVCLG9CQUFvQixLQUFLLHNCQUFzQixxQkFBcUIsNEJBQTRCLEtBQUssOEJBQThCLHdCQUF3QixLQUFLLEdBQUc7QUFDcHZWO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuOTA2NzZiODg3Yjc3ZGFiMjlkMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlcntcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZXtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZXtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZSBzcGFuLmZye1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlOmhvdmVyIHNwYW4uZnJ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlIHNwYW4uZW57XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgY29sb3I6ICM1MzgxZmY7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2U6aG92ZXIgc3Bhbi5lbntcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdntcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGF7XFxyXFxuICBjb2xvcjogIzUzODFmZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBhOmhvdmVye1xcclxcbiAgY29sb3I6ICNlZWVlZWU7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmU6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTEuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtbGVmdCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1sZWZ0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgcmlnaHQ6IC05cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjMGZmO1xcclxcbiAgdG9wOiAyM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lLWxlZnQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIycHg7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogbWVkaXVtIHNvbGlkICNmZmZmZmY7XFxyXFxuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDEwcHg7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1yaWdodCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRpbWVsaW5lLXJpZ2h0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgcmlnaHQ6IC05cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjMGZmO1xcclxcbiAgdG9wOiAyM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IC05cHg7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1yaWdodDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjJweDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lIC5jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyOTBweCkge1xcclxcbiAgLmJhY2sge1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC50aW1lbGluZTo6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiA2MXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGltZWxpbmUtbGVmdCwgLnRpbWVsaW5lLXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRpbWVsaW5lLWxlZnQ6OmJlZm9yZSwgLnRpbWVsaW5lLXJpZ2h0OjpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiA5MHB4O1xcclxcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZmZmZmZmO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGltZWxpbmUtbGVmdDo6YWZ0ZXIsIC50aW1lbGluZS1yaWdodDo6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiA1M3B4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGltZWxpbmUtcmlnaHQge1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iYWNrIHtcXHJcXG4gICAgdG9wOiAyNXB4O1xcclxcbiAgICBsZWZ0OiAtOHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYWJvdXQtd3JhcHBlciAuYmFjayB7XFxyXFxuICAgIHRvcDogMzZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC13cmFwcGVyIHAge1xcclxcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICByaWdodDogMTAlO1xcclxcbiAgICB0b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3JhcHBlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgLnRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBtYXJnaW46IDdweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAuZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgLmxpbmtzIC5saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbjogNHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC13cmFwcGVyIHAge1xcclxcbiAgICBcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2t7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1idXR0b24ge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC13cmFwcGVyIC5iYWNrIHtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi9yZXBvcy9naXRodWIuY29tL1l1cm1hL3l1cm1hLmdpdGh1Yi5pby9zb3VyY2Uvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtREFBbUQ7RUFDbkQsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixTQUFTO0VBQ1QsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixTQUFTO0FBQ1g7OztBQUdBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtFQUNWLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qix1REFBdUQ7RUFDekQ7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJmaWxlXCI6XCJzdHlsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbmJvZHl7XFxyXFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXJ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGV7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2V7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2Ugc3Bhbi5mcntcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZTpob3ZlciBzcGFuLmZye1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZSBzcGFuLmVue1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNTM4MWZmO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlOmhvdmVyIHNwYW4uZW57XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZ7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBhe1xcclxcbiAgY29sb3I6ICM1MzgxZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYgYTpob3ZlcntcXHJcXG4gIGNvbG9yOiAjZWVlZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lLWxlZnQge1xcclxcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtbGVmdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIHJpZ2h0OiAtOXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYzBmZjtcXHJcXG4gIHRvcDogMjNweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZS1sZWZ0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMnB4O1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcmlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxMHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtcmlnaHQge1xcclxcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aW1lbGluZS1yaWdodDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIHJpZ2h0OiAtOXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYzBmZjtcXHJcXG4gIHRvcDogMjNweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiAtOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUtcmlnaHQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIycHg7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiBtZWRpdW0gc29saWQgI2ZmZmZmZjtcXHJcXG4gIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSAuY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjkwcHgpIHtcXHJcXG4gIC5iYWNrIHtcXHJcXG4gICAgcmlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAudGltZWxpbmU6OmFmdGVyIHtcXHJcXG4gICAgbGVmdDogNjFweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRpbWVsaW5lLWxlZnQsIC50aW1lbGluZS1yaWdodCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50aW1lbGluZS1sZWZ0OjpiZWZvcmUsIC50aW1lbGluZS1yaWdodDo6YmVmb3JlIHtcXHJcXG4gICAgbGVmdDogOTBweDtcXHJcXG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgI2ZmZmZmZjtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xcclxcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpbWVsaW5lLWxlZnQ6OmFmdGVyLCAudGltZWxpbmUtcmlnaHQ6OmFmdGVyIHtcXHJcXG4gICAgbGVmdDogNTNweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRpbWVsaW5lLXJpZ2h0IHtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmFjayB7XFxyXFxuICAgIHRvcDogMjVweDtcXHJcXG4gICAgbGVmdDogLThweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmFib3V0LXdyYXBwZXIgLmJhY2sge1xcclxcbiAgICB0b3A6IDM2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtd3JhcHBlciBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDEwJTtcXHJcXG4gICAgcmlnaHQ6IDEwJTtcXHJcXG4gICAgdG9wOiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLndyYXBwZXIge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IC50aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbWFyZ2luOiA3cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IC5saW5rcyAubGluayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW46IDRweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtd3JhcHBlciBwIHtcXHJcXG4gICAgXFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5iYWNre1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2stYnV0dG9uIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtd3JhcHBlciAuYmFjayB7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==