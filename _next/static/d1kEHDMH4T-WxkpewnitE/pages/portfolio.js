(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=r,t.useAmp=function(){return r(s.default.useContext(i.AmpStateContext))};var n,s=(n=a("q1tI"))&&n.__esModule?n:{default:n},i=a("lwAK");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,s=void 0!==n&&n,i=e.hasQuery;return a||s&&(void 0!==i&&i)}},"1OyB":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},"8Kt/":function(e,t,a){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var n=l(a("q1tI")),s=l(a("Xuae")),i=a("lwAK"),r=a("FYa8"),o=a("/0+H");function l(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var a=n.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(s){var i=!0;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){var r=s.key.slice(s.key.indexOf("$")+1);e.has(r)?i=!1:e.add(r)}switch(s.type){case"title":case"base":t.has(s.type)?i=!1:t.add(s.type);break;case"meta":for(var o=0,l=d.length;o<l;o++){var c=d[o];if(s.props.hasOwnProperty(c))if("charSet"===c)a.has(c)?i=!1:a.add(c);else{var u=s.props[c],m=n[c]||new Set;m.has(u)?i=!1:(m.add(u),n[c]=m)}}}return i}}()).reverse().map((function(e,t){var a=e.key||t;return n.default.cloneElement(e,{key:a})}))}var f=(0,s.default)();function p(e){var t=e.children;return(n.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return n.default.createElement(r.HeadManagerContext.Consumer,null,(function(a){return n.default.createElement(f,{reduceComponentsToState:m,handleStateChange:a,inAmpMode:(0,o.isInAmpMode)(e)},t)}))})))}p.rewind=f.rewind;var h=p;t.default=h},AGzW:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return a("eAkX")}])},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,a){var n=a("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Ji7U:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return s}))},RIqP:function(e,t,a){var n=a("Ijbi"),s=a("EbDI"),i=a("ZhPi"),r=a("Bnag");e.exports=function(e){return n(e)||s(e)||i(e)||r()}},Xuae:function(e,t,a){"use strict";var n=a("lwsE"),s=a("PJYZ"),i=a("W8MJ"),r=a("7W2i"),o=a("a1gu"),l=a("Nsbk"),c=a("RIqP");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=l(e);if(t){var s=l(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return o(this,a)}}t.__esModule=!0,t.default=void 0;var d=a("q1tI"),m=!1;t.default=function(){var e,t=new Set;function a(a){e=a.props.reduceComponentsToState(c(t),a.props),a.props.handleStateChange&&a.props.handleStateChange(e)}return(function(o){r(c,o);var l=u(c);function c(e){var i;return n(this,c),i=l.call(this,e),m&&(t.add(s(i)),a(s(i))),i}return i(c,null,[{key:"rewind",value:function(){var a=e;return e=void 0,t.clear(),a}}]),i(c,[{key:"componentDidMount",value:function(){t.add(this),a(this)}},{key:"componentDidUpdate",value:function(){a(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),a(this)}},{key:"render",value:function(){return null}}]),c}(d.Component))}},eAkX:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),s=a("vuIU"),i=a("Ji7U"),r=a("md7G"),o=a("foSv"),l=a("q1tI"),c=a.n(l),u=a("nOHt"),d=a.n(u),m=a("8Kt/"),f=a.n(m),p=c.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(o.a)(e);if(t){var s=Object(o.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(r.a)(this,a)}}var v=function(e){Object(i.a)(a,e);var t=h(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return p("div",{className:"portfolio"},p(f.a,null,p("title",null,"Portfolio - Fran Jurmanovic")),p("div",{className:"back"},p("button",{className:"btn btn-icon-round btn-white back-button",onClick:function(){return d.a.push("/")}},p("div",{className:"gg-arrow-left"}))),p("div",{className:"timeline"},p("div",{className:"timeline-left"},p("div",{className:"content"},p("div",{className:"title"},"Shopping cart"),p("div",{className:"thumbnail"},p("a",{href:"https://yurma.wtf/shopping-cart"},p("img",{src:"/shopping-cart.webp"}))),p("div",{className:"labels"},p("span",{className:"label mr-2"},"Angular"),p("span",{className:"label"},"Typescript")),p("div",{className:"description"},"First front-end project that I created. It was for an assigment Cobe set for their internship. Shopping cart helped me start front-end journey and this is where I started to settle with what I wanted to do as a programmer."),p("div",{className:"links"},p("div",{className:"link"},p("a",{href:"https://github.com/Yurma/shopping-cart"},"Github")),p("div",{className:"link"}," | "),p("div",{className:"link"},p("a",{href:"https://yurma.wtf/shopping-cart"},"Demo"))))),p("div",{className:"timeline-right"},p("div",{className:"content"},p("div",{className:"title"},"Todo list"),p("div",{className:"thumbnail"},p("a",{href:"https://yurma.wtf/todo-list"},p("img",{src:"/todo-list.webp"}))),p("div",{className:"labels"},p("span",{className:"label mr-2"},"React"),p("span",{className:"label"},"Javascript")),p("div",{className:"description"},"My first React project. It was the basic todo-list project with material elements. In this project I learned basics of react."),p("div",{className:"links"},p("div",{className:"link"},p("a",{href:"https://github.com/Yurma/todo-list"},"Github")),p("div",{className:"link"}," | "),p("div",{className:"link"},p("a",{href:"https://yurma.wtf/todo-list"},"Demo"))))),p("div",{className:"timeline-left"},p("div",{className:"content"},p("div",{className:"title"},"PHP Movie Database"),p("div",{className:"thumbnail"},p("a",{href:"https://php-movie-database.herokuapp.com/"},p("img",{src:"/movie-database.webp"}))),p("div",{className:"labels"},p("span",{className:"label mr-2"},"PHP"),p("span",{className:"label"},"MySQL")),p("div",{className:"description"},"PHP movie database was created as final work for Algebra's PHP course. It was created in PHP and mySQL as course demanded it. "),p("div",{className:"links"},p("div",{className:"link"},p("a",{href:"https://github.com/Yurma/php_movie_database"},"Github")),p("div",{className:"link"}," | "),p("div",{className:"link"},p("a",{href:"https://php-movie-database.herokuapp.com/"},"Demo"))))),p("div",{className:"timeline-right"},p("div",{className:"content"},p("div",{className:"title"},"Schnitzel"),p("div",{className:"thumbnail"},p("a",{href:"https://schnitzel.yurma.wtf/"},p("img",{src:"/schnitzel.webp"}))),p("div",{className:"labels"},p("span",{className:"label mr-2"},"React"),p("span",{className:"label mr-2"},"Javascript"),p("span",{className:"label mr-2"},"Express.js"),p("span",{className:"label"},"MongoDB")),p("div",{className:"description"},"This is my biggest project so far. Schnitzel is my first full-stack project where I wanted to test and improve my front-end and back-end skills. I started developing it 6 months after my first front-end project, and I believe it shows how I am evolving as front-end developer. It is a social network for sharing recipes. I learned a lot of new things while I was developing it, like backend-frontend connection, using redux states, react routing, balancing stability with more complex project."),p("div",{className:"links"},p("div",{className:"link"},p("a",{href:"https://github.com/Yurma/schnitzel"},"Github(front-end)")),p("div",{className:"link"}," | "),p("div",{className:"link"},p("a",{href:"https://github.com/Yurma/schnitzel_backend"},"Github(back-end)")),p("div",{className:"link"}," | "),p("div",{className:"link"},p("a",{href:"https://schnitzel.yurma.wtf/"},"Demo"))))),p("div",{className:"timeline-left"},p("div",{className:"content"},p("div",{className:"title"},"Thorn CSS"),p("div",{className:"labels"},p("span",{className:"label mr-2"},"SCSS"),p("span",{className:"label"},"Gulp")),p("div",{className:"description"},"I started developing thorn-css because I wanted to have signature design for all my projects. "),p("div",{className:"links"},p("div",{className:"link"},p("a",{href:"https://github.com/Yurma/thorn"},"Github"))))),p("div",{className:"timeline-right"},p("div",{className:"content"},p("div",{className:"title"},"Boards"),p("div",{className:"thumbnail"},p("a",{href:"https://yurma.wtf/boards"},p("img",{src:"/boards.webp"}))),p("div",{className:"labels"},p("span",{className:"label mr-2"},"React"),p("span",{className:"label"},"Javascript")),p("div",{className:"description"},"This project was actually my experimentation with drag and drop package and project where I tried using more react hooks. I plan on making it default kanban boards for my projects in the future."),p("div",{className:"links"},p("div",{className:"link"},p("a",{href:"https://github.com/Yurma/boards"},"Github")),p("div",{className:"link"}," | "),p("div",{className:"link"},p("a",{href:"https://yurma.wtf/boards"},"Demo"))))),p("div",{className:"timeline-left"},p("div",{className:"content"},p("div",{className:"title"},"This personal site"),p("div",{className:"labels"},p("span",{className:"label mr-2"},"Next.js"),p("span",{className:"label mr-2"},"React"),p("span",{className:"label"},"Javascript")),p("div",{className:"description"},'This site is powerwed by Next.js and uses thorn-css. It is not as big project as "schnitzel" but it still shows my front-end capabilities.'),p("div",{className:"links"},p("div",{className:"link"},p("a",{href:"https://github.com/Yurma/yurma.github.io"},"Github"))))),p("div",{className:"timeline-right"},p("div",{className:"content"},p("div",{className:"title"},"Angular Boards"),p("div",{className:"thumbnail"},p("a",{href:"https://yurma.wtf/angular-boards"},p("img",{src:"/angular-boards.webp"}))),p("div",{className:"labels"},p("span",{className:"label mr-2"},"Angular"),p("span",{className:"label"},"Typescript")),p("div",{className:"description"},"Made out of curiosity to see if I could create the same thing in react and angular. And actually created a better version."),p("div",{className:"links"},p("div",{className:"link"},p("a",{href:"https://github.com/Yurma/angular-boards"},"Github")),p("div",{className:"link"}," | "),p("div",{className:"link"},p("a",{href:"https://yurma.wtf/angular-boards"},"Demo"))))),p("div",{className:"timeline-left"},p("div",{className:"content"},p("div",{className:"title"},"Todo Typescript"),p("div",{className:"thumbnail"},p("a",{href:"https://yurma.wtf/todo-ts"},p("img",{src:"/todo-ts.webp"}))),p("div",{className:"labels"},p("span",{className:"label mr-2"},"Webpack"),p("span",{className:"label"},"Typescript")),p("div",{className:"description"},"I wanted to challenge myself so I created pure typescript todo list (like the one I created in reactjs) and built it with webpack."),p("div",{className:"links"},p("div",{className:"link"},p("a",{href:"https://github.com/Yurma/todo-ts"},"Github")),p("div",{className:"link"}," | "),p("div",{className:"link"},p("a",{href:"https://yurma.wtf/todo-ts"},"Demo")))))))}}]),a}(l.Component);t.default=v},foSv:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return n}))},lwAK:function(e,t,a){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var s=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=s},md7G:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}a.d(t,"a",(function(){return s}))},vuIU:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return s}))}},[["AGzW",0,2,1]]]);