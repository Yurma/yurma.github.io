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
exports.push([module.i, "body{\r\n    font-family: 'Raleway', sans-serif;\r\n    background-color: #2c3e50;\r\n}\r\n\r\n.wrapper{\r\n    color: #fff;\r\n    font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n    font-size: 250%;\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n\r\n.title{\r\n    margin: 20px;\r\n}\r\n\r\ndiv#change{\r\n    display: inline;\r\n}\r\n\r\ndiv#change span.fr{\r\n    display: inline;\r\n}\r\n\r\ndiv#change:hover span.fr{\r\n    display: none;\r\n}\r\n\r\ndiv#change span.en{\r\n    display: none;\r\n    color: #5381ff;\r\n}\r\n\r\ndiv#change:hover span.en{\r\n    display: inline;\r\n}\r\n\r\n.nav{\r\n    color: #aaaaaa;\r\n    margin: 20px;\r\n}\r\n\r\n.nav a{\r\n    color: #5381ff;\r\n    text-decoration: none;\r\n}\r\n\r\n.nav a:hover{\r\n    color: #eeeeee;\r\n}\r\n\r\n.timeline {\r\n    position: relative;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  /* The actual timeline (the vertical ruler) */\r\n  .timeline::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    background-color: white;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -3px;\r\n  }\r\n  \r\n  /* Container around content */\r\n  .container {\r\n    padding: 10px 40px;\r\n    position: relative;\r\n    background-color: inherit;\r\n    width: 50%;\r\n  }\r\n  \r\n  /* The circles on the timeline */\r\n  .container::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    right: -17px;\r\n    background-color: white;\r\n    border: 4px solid #FF9F55;\r\n    top: 15px;\r\n    border-radius: 50%;\r\n    z-index: 1;\r\n  }\r\n  \r\n  /* Place the container to the left */\r\n  .left {\r\n    left: 0;\r\n  }\r\n  \r\n  /* Place the container to the right */\r\n  .right {\r\n    left: 50%;\r\n  }\r\n  \r\n  /* Add arrows to the left container (pointing right) */\r\n  .left::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 22px;\r\n    width: 0;\r\n    z-index: 1;\r\n    right: 30px;\r\n    border: medium solid white;\r\n    border-width: 10px 0 10px 10px;\r\n    border-color: transparent transparent transparent white;\r\n  }\r\n  \r\n  /* Add arrows to the right container (pointing left) */\r\n  .right::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 22px;\r\n    width: 0;\r\n    z-index: 1;\r\n    left: 30px;\r\n    border: medium solid white;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n  }\r\n  \r\n  /* Fix the circle for containers on the right side */\r\n  .right::after {\r\n    left: -16px;\r\n  }\r\n  \r\n  /* The actual content */\r\n  .content {\r\n    padding: 20px 30px;\r\n    background-color: white;\r\n    position: relative;\r\n    border-radius: 6px;\r\n  }\r\n  \r\n  /* Media queries - Responsive timeline on screens less than 600px wide */\r\n  @media screen and (max-width: 600px) {\r\n    /* Place the timelime to the left */\r\n    .timeline::after {\r\n    left: 31px;\r\n    }\r\n    \r\n    /* Full-width containers */\r\n    .container {\r\n    width: 100%;\r\n    padding-left: 70px;\r\n    padding-right: 25px;\r\n    }\r\n    \r\n    /* Make sure that all arrows are pointing leftwards */\r\n    .container::before {\r\n    left: 60px;\r\n    border: medium solid white;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n    }\r\n  \r\n    /* Make sure all circles are at the same spot */\r\n    .left::after, .right::after {\r\n    left: 15px;\r\n    }\r\n    \r\n    /* Make all right containers behave like the left ones */\r\n    .right {\r\n    left: 0%;\r\n    }\r\n  }", "",{"version":3,"sources":["E:/repos/github.com/Yurma/yurma.github.io/style.css"],"names":[],"mappings":"AAEA;IACI,kCAAkC;IAClC,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,mDAAmD;IACnD,eAAe;IACf,SAAS;IACT,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;EAChB;;EAEA,6CAA6C;EAC7C;IACE,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,MAAM;IACN,SAAS;IACT,SAAS;IACT,iBAAiB;EACnB;;EAEA,6BAA6B;EAC7B;IACE,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,UAAU;EACZ;;EAEA,gCAAgC;EAChC;IACE,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;IACzB,SAAS;IACT,kBAAkB;IAClB,UAAU;EACZ;;EAEA,oCAAoC;EACpC;IACE,OAAO;EACT;;EAEA,qCAAqC;EACrC;IACE,SAAS;EACX;;EAEA,sDAAsD;EACtD;IACE,YAAY;IACZ,SAAS;IACT,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,UAAU;IACV,WAAW;IACX,0BAA0B;IAC1B,8BAA8B;IAC9B,uDAAuD;EACzD;;EAEA,sDAAsD;EACtD;IACE,YAAY;IACZ,SAAS;IACT,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,UAAU;IACV,UAAU;IACV,0BAA0B;IAC1B,8BAA8B;IAC9B,uDAAuD;EACzD;;EAEA,oDAAoD;EACpD;IACE,WAAW;EACb;;EAEA,uBAAuB;EACvB;IACE,kBAAkB;IAClB,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA,wEAAwE;EACxE;IACE,mCAAmC;IACnC;IACA,UAAU;IACV;;IAEA,0BAA0B;IAC1B;IACA,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB;;IAEA,qDAAqD;IACrD;IACA,UAAU;IACV,0BAA0B;IAC1B,8BAA8B;IAC9B,uDAAuD;IACvD;;IAEA,+CAA+C;IAC/C;IACA,UAAU;IACV;;IAEA,wDAAwD;IACxD;IACA,QAAQ;IACR;EACF","file":"style.css","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\r\n\r\nbody{\r\n    font-family: 'Raleway', sans-serif;\r\n    background-color: #2c3e50;\r\n}\r\n\r\n.wrapper{\r\n    color: #fff;\r\n    font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n    font-size: 250%;\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n\r\n.title{\r\n    margin: 20px;\r\n}\r\n\r\ndiv#change{\r\n    display: inline;\r\n}\r\n\r\ndiv#change span.fr{\r\n    display: inline;\r\n}\r\n\r\ndiv#change:hover span.fr{\r\n    display: none;\r\n}\r\n\r\ndiv#change span.en{\r\n    display: none;\r\n    color: #5381ff;\r\n}\r\n\r\ndiv#change:hover span.en{\r\n    display: inline;\r\n}\r\n\r\n.nav{\r\n    color: #aaaaaa;\r\n    margin: 20px;\r\n}\r\n\r\n.nav a{\r\n    color: #5381ff;\r\n    text-decoration: none;\r\n}\r\n\r\n.nav a:hover{\r\n    color: #eeeeee;\r\n}\r\n\r\n.timeline {\r\n    position: relative;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  /* The actual timeline (the vertical ruler) */\r\n  .timeline::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    background-color: white;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -3px;\r\n  }\r\n  \r\n  /* Container around content */\r\n  .container {\r\n    padding: 10px 40px;\r\n    position: relative;\r\n    background-color: inherit;\r\n    width: 50%;\r\n  }\r\n  \r\n  /* The circles on the timeline */\r\n  .container::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    right: -17px;\r\n    background-color: white;\r\n    border: 4px solid #FF9F55;\r\n    top: 15px;\r\n    border-radius: 50%;\r\n    z-index: 1;\r\n  }\r\n  \r\n  /* Place the container to the left */\r\n  .left {\r\n    left: 0;\r\n  }\r\n  \r\n  /* Place the container to the right */\r\n  .right {\r\n    left: 50%;\r\n  }\r\n  \r\n  /* Add arrows to the left container (pointing right) */\r\n  .left::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 22px;\r\n    width: 0;\r\n    z-index: 1;\r\n    right: 30px;\r\n    border: medium solid white;\r\n    border-width: 10px 0 10px 10px;\r\n    border-color: transparent transparent transparent white;\r\n  }\r\n  \r\n  /* Add arrows to the right container (pointing left) */\r\n  .right::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 22px;\r\n    width: 0;\r\n    z-index: 1;\r\n    left: 30px;\r\n    border: medium solid white;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n  }\r\n  \r\n  /* Fix the circle for containers on the right side */\r\n  .right::after {\r\n    left: -16px;\r\n  }\r\n  \r\n  /* The actual content */\r\n  .content {\r\n    padding: 20px 30px;\r\n    background-color: white;\r\n    position: relative;\r\n    border-radius: 6px;\r\n  }\r\n  \r\n  /* Media queries - Responsive timeline on screens less than 600px wide */\r\n  @media screen and (max-width: 600px) {\r\n    /* Place the timelime to the left */\r\n    .timeline::after {\r\n    left: 31px;\r\n    }\r\n    \r\n    /* Full-width containers */\r\n    .container {\r\n    width: 100%;\r\n    padding-left: 70px;\r\n    padding-right: 25px;\r\n    }\r\n    \r\n    /* Make sure that all arrows are pointing leftwards */\r\n    .container::before {\r\n    left: 60px;\r\n    border: medium solid white;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n    }\r\n  \r\n    /* Make sure all circles are at the same spot */\r\n    .left::after, .right::after {\r\n    left: 15px;\r\n    }\r\n    \r\n    /* Make all right containers behave like the left ones */\r\n    .right {\r\n    left: 0%;\r\n    }\r\n  }"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvR0FBK0M7QUFDekY7QUFDQSxjQUFjLFFBQVMsNkVBQTZFO0FBQ3BHO0FBQ0EsY0FBYyxRQUFTLFFBQVEsMkNBQTJDLGtDQUFrQyxLQUFLLGlCQUFpQixvQkFBb0IsNERBQTRELHdCQUF3QixrQkFBa0IsMkJBQTJCLGlCQUFpQixrQkFBa0IseUNBQXlDLGtDQUFrQywyQkFBMkIsS0FBSyxlQUFlLHFCQUFxQixLQUFLLG1CQUFtQix3QkFBd0IsS0FBSywyQkFBMkIsd0JBQXdCLEtBQUssaUNBQWlDLHNCQUFzQixLQUFLLDJCQUEyQixzQkFBc0IsdUJBQXVCLEtBQUssaUNBQWlDLHdCQUF3QixLQUFLLGFBQWEsdUJBQXVCLHFCQUFxQixLQUFLLGVBQWUsdUJBQXVCLDhCQUE4QixLQUFLLHFCQUFxQix1QkFBdUIsS0FBSyxtQkFBbUIsMkJBQTJCLDBCQUEwQix1QkFBdUIsT0FBTyxrRkFBa0Ysb0JBQW9CLDJCQUEyQixtQkFBbUIsZ0NBQWdDLGVBQWUsa0JBQWtCLGtCQUFrQiwwQkFBMEIsT0FBTyw0REFBNEQsMkJBQTJCLDJCQUEyQixrQ0FBa0MsbUJBQW1CLE9BQU8sc0VBQXNFLG9CQUFvQiwyQkFBMkIsb0JBQW9CLHFCQUFxQixxQkFBcUIsZ0NBQWdDLGtDQUFrQyxrQkFBa0IsMkJBQTJCLG1CQUFtQixPQUFPLDhEQUE4RCxnQkFBZ0IsT0FBTyxnRUFBZ0Usa0JBQWtCLE9BQU8sd0ZBQXdGLHVCQUF1QixrQkFBa0IsMkJBQTJCLGtCQUFrQixpQkFBaUIsbUJBQW1CLG9CQUFvQixtQ0FBbUMsdUNBQXVDLGdFQUFnRSxPQUFPLHlGQUF5Rix1QkFBdUIsa0JBQWtCLDJCQUEyQixrQkFBa0IsaUJBQWlCLG1CQUFtQixtQkFBbUIsbUNBQW1DLHVDQUF1QyxnRUFBZ0UsT0FBTyxzRkFBc0Ysb0JBQW9CLE9BQU8sb0RBQW9ELDJCQUEyQixnQ0FBZ0MsMkJBQTJCLDJCQUEyQixPQUFPLGlJQUFpSSxzRUFBc0UsbUJBQW1CLFNBQVMsK0RBQStELG9CQUFvQiwyQkFBMkIsNEJBQTRCLFNBQVMsa0dBQWtHLG1CQUFtQixtQ0FBbUMsdUNBQXVDLGdFQUFnRSxTQUFTLG1HQUFtRyxtQkFBbUIsU0FBUyx5RkFBeUYsaUJBQWlCLFNBQVMsT0FBTyxPQUFPLDBHQUEwRyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsS0FBSyx3SEFBd0gsYUFBYSwyQ0FBMkMsa0NBQWtDLEtBQUssaUJBQWlCLG9CQUFvQiw0REFBNEQsd0JBQXdCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGtCQUFrQix5Q0FBeUMsa0NBQWtDLDJCQUEyQixLQUFLLGVBQWUscUJBQXFCLEtBQUssbUJBQW1CLHdCQUF3QixLQUFLLDJCQUEyQix3QkFBd0IsS0FBSyxpQ0FBaUMsc0JBQXNCLEtBQUssMkJBQTJCLHNCQUFzQix1QkFBdUIsS0FBSyxpQ0FBaUMsd0JBQXdCLEtBQUssYUFBYSx1QkFBdUIscUJBQXFCLEtBQUssZUFBZSx1QkFBdUIsOEJBQThCLEtBQUsscUJBQXFCLHVCQUF1QixLQUFLLG1CQUFtQiwyQkFBMkIsMEJBQTBCLHVCQUF1QixPQUFPLGtGQUFrRixvQkFBb0IsMkJBQTJCLG1CQUFtQixnQ0FBZ0MsZUFBZSxrQkFBa0Isa0JBQWtCLDBCQUEwQixPQUFPLDREQUE0RCwyQkFBMkIsMkJBQTJCLGtDQUFrQyxtQkFBbUIsT0FBTyxzRUFBc0Usb0JBQW9CLDJCQUEyQixvQkFBb0IscUJBQXFCLHFCQUFxQixnQ0FBZ0Msa0NBQWtDLGtCQUFrQiwyQkFBMkIsbUJBQW1CLE9BQU8sOERBQThELGdCQUFnQixPQUFPLGdFQUFnRSxrQkFBa0IsT0FBTyx3RkFBd0YsdUJBQXVCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLGlCQUFpQixtQkFBbUIsb0JBQW9CLG1DQUFtQyx1Q0FBdUMsZ0VBQWdFLE9BQU8seUZBQXlGLHVCQUF1QixrQkFBa0IsMkJBQTJCLGtCQUFrQixpQkFBaUIsbUJBQW1CLG1CQUFtQixtQ0FBbUMsdUNBQXVDLGdFQUFnRSxPQUFPLHNGQUFzRixvQkFBb0IsT0FBTyxvREFBb0QsMkJBQTJCLGdDQUFnQywyQkFBMkIsMkJBQTJCLE9BQU8saUlBQWlJLHNFQUFzRSxtQkFBbUIsU0FBUywrREFBK0Qsb0JBQW9CLDJCQUEyQiw0QkFBNEIsU0FBUyxrR0FBa0csbUJBQW1CLG1DQUFtQyx1Q0FBdUMsZ0VBQWdFLFNBQVMsbUdBQW1HLG1CQUFtQixTQUFTLHlGQUF5RixpQkFBaUIsU0FBUyxPQUFPLEdBQUc7QUFDeHdTO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNTExYzIxMGJmMjA0NzJhNGRiNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXJ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjUwJTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZXtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdle1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2Ugc3Bhbi5mcntcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlOmhvdmVyIHNwYW4uZnJ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2Ugc3Bhbi5lbntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY29sb3I6ICM1MzgxZmY7XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGFuZ2U6aG92ZXIgc3Bhbi5lbntcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2e1xcclxcbiAgICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGF7XFxyXFxuICAgIGNvbG9yOiAjNTM4MWZmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYgYTpob3ZlcntcXHJcXG4gICAgY29sb3I6ICNlZWVlZWU7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXFxyXFxuICAudGltZWxpbmU6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXFxyXFxuICAuY29udGFpbmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHJpZ2h0OiAtMTdweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNGRjlGNTU7XFxyXFxuICAgIHRvcDogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXFxyXFxuICAubGVmdCB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIHJpZ2h0ICovXFxyXFxuICAucmlnaHQge1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEFkZCBhcnJvd3MgdG8gdGhlIGxlZnQgY29udGFpbmVyIChwb2ludGluZyByaWdodCkgKi9cXHJcXG4gIC5sZWZ0OjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIycHg7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTBweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQWRkIGFycm93cyB0byB0aGUgcmlnaHQgY29udGFpbmVyIChwb2ludGluZyBsZWZ0KSAqL1xcclxcbiAgLnJpZ2h0OjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIycHg7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBsZWZ0OiAzMHB4O1xcclxcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xcclxcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBGaXggdGhlIGNpcmNsZSBmb3IgY29udGFpbmVycyBvbiB0aGUgcmlnaHQgc2lkZSAqL1xcclxcbiAgLnJpZ2h0OjphZnRlciB7XFxyXFxuICAgIGxlZnQ6IC0xNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBUaGUgYWN0dWFsIGNvbnRlbnQgKi9cXHJcXG4gIC5jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIE1lZGlhIHF1ZXJpZXMgLSBSZXNwb25zaXZlIHRpbWVsaW5lIG9uIHNjcmVlbnMgbGVzcyB0aGFuIDYwMHB4IHdpZGUgKi9cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xcclxcbiAgICAudGltZWxpbmU6OmFmdGVyIHtcXHJcXG4gICAgbGVmdDogMzFweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLyogRnVsbC13aWR0aCBjb250YWluZXJzICovXFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCBhbGwgYXJyb3dzIGFyZSBwb2ludGluZyBsZWZ0d2FyZHMgKi9cXHJcXG4gICAgLmNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgbGVmdDogNjBweDtcXHJcXG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xcclxcbiAgICAubGVmdDo6YWZ0ZXIsIC5yaWdodDo6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAvKiBNYWtlIGFsbCByaWdodCBjb250YWluZXJzIGJlaGF2ZSBsaWtlIHRoZSBsZWZ0IG9uZXMgKi9cXHJcXG4gICAgLnJpZ2h0IHtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi9yZXBvcy9naXRodWIuY29tL1l1cm1hL3l1cm1hLmdpdGh1Yi5pby9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1EQUFtRDtJQUNuRCxlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUEsNkNBQTZDO0VBQzdDO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixTQUFTO0lBQ1QsU0FBUztJQUNULGlCQUFpQjtFQUNuQjs7RUFFQSw2QkFBNkI7RUFDN0I7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7O0VBRUEsZ0NBQWdDO0VBQ2hDO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBLG9DQUFvQztFQUNwQztJQUNFLE9BQU87RUFDVDs7RUFFQSxxQ0FBcUM7RUFDckM7SUFDRSxTQUFTO0VBQ1g7O0VBRUEsc0RBQXNEO0VBQ3REO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsdURBQXVEO0VBQ3pEOztFQUVBLHNEQUFzRDtFQUN0RDtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHVEQUF1RDtFQUN6RDs7RUFFQSxvREFBb0Q7RUFDcEQ7SUFDRSxXQUFXO0VBQ2I7O0VBRUEsdUJBQXVCO0VBQ3ZCO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBLHdFQUF3RTtFQUN4RTtJQUNFLG1DQUFtQztJQUNuQztJQUNBLFVBQVU7SUFDVjs7SUFFQSwwQkFBMEI7SUFDMUI7SUFDQSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQjs7SUFFQSxxREFBcUQ7SUFDckQ7SUFDQSxVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5Qix1REFBdUQ7SUFDdkQ7O0lBRUEsK0NBQStDO0lBQy9DO0lBQ0EsVUFBVTtJQUNWOztJQUVBLHdEQUF3RDtJQUN4RDtJQUNBLFFBQVE7SUFDUjtFQUNGXCIsXCJmaWxlXCI6XCJzdHlsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVye1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDI1MCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGV7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZXtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlIHNwYW4uZnJ7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoYW5nZTpob3ZlciBzcGFuLmZye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlIHNwYW4uZW57XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjNTM4MWZmO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjY2hhbmdlOmhvdmVyIHNwYW4uZW57XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdntcXHJcXG4gICAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBhe1xcclxcbiAgICBjb2xvcjogIzUzODFmZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGE6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiAjZWVlZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xcclxcbiAgLnRpbWVsaW5lOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiA2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xcclxcbiAgLmNvbnRhaW5lcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICByaWdodDogLTE3cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjRkY5RjU1O1xcclxcbiAgICB0b3A6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xcclxcbiAgLmxlZnQge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSByaWdodCAqL1xcclxcbiAgLnJpZ2h0IHtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBBZGQgYXJyb3dzIHRvIHRoZSBsZWZ0IGNvbnRhaW5lciAocG9pbnRpbmcgcmlnaHQpICovXFxyXFxuICAubGVmdDo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMnB4O1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcmlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEFkZCBhcnJvd3MgdG8gdGhlIHJpZ2h0IGNvbnRhaW5lciAocG9pbnRpbmcgbGVmdCkgKi9cXHJcXG4gIC5yaWdodDo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMnB4O1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgbGVmdDogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogRml4IHRoZSBjaXJjbGUgZm9yIGNvbnRhaW5lcnMgb24gdGhlIHJpZ2h0IHNpZGUgKi9cXHJcXG4gIC5yaWdodDo6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiAtMTZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogVGhlIGFjdHVhbCBjb250ZW50ICovXFxyXFxuICAuY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBNZWRpYSBxdWVyaWVzIC0gUmVzcG9uc2l2ZSB0aW1lbGluZSBvbiBzY3JlZW5zIGxlc3MgdGhhbiA2MDBweCB3aWRlICovXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAvKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cXHJcXG4gICAgLnRpbWVsaW5lOjphZnRlciB7XFxyXFxuICAgIGxlZnQ6IDMxcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC8qIEZ1bGwtd2lkdGggY29udGFpbmVycyAqL1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNzBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLyogTWFrZSBzdXJlIHRoYXQgYWxsIGFycm93cyBhcmUgcG9pbnRpbmcgbGVmdHdhcmRzICovXFxyXFxuICAgIC5jb250YWluZXI6OmJlZm9yZSB7XFxyXFxuICAgIGxlZnQ6IDYwcHg7XFxyXFxuICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAvKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cXHJcXG4gICAgLmxlZnQ6OmFmdGVyLCAucmlnaHQ6OmFmdGVyIHtcXHJcXG4gICAgbGVmdDogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLyogTWFrZSBhbGwgcmlnaHQgY29udGFpbmVycyBiZWhhdmUgbGlrZSB0aGUgbGVmdCBvbmVzICovXFxyXFxuICAgIC5yaWdodCB7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbiAgICB9XFxyXFxuICB9XCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==