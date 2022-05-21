(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{2079:function(e,r,t){"use strict";t.d(r,{c:function(){return m},M:function(){return v}});var n=t(4051),a=t.n(n),o=t(5893);function l(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"font-sans w-full p-1 text-gray-500",children:[(0,o.jsx)("p",{className:"text-base",children:e.label}),e.password?(0,o.jsx)("input",{type:"password",name:e.name,className:"w-full rounded-2xl bg-gray-50 p-2 h-12"}):(0,o.jsx)("input",{type:"text",name:e.name,className:"w-full rounded-2xl bg-gray-50 p-2 h-12"})]})})}var u=t(1163),i=t(9275);function c(e,r,t,n,a,o,l){try{var u=e[o](l),i=u.value}catch(c){return void t(c)}u.done?r(i):Promise.resolve(i).then(n,a)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function l(e){c(o,n,a,l,u,"next",e)}function u(e){c(o,n,a,l,u,"throw",e)}l(void 0)}))}}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function d(e){var r=e.label,t=e.children,n=e.onSubmit,a=p(e,["label","children","onSubmit"]);return(0,o.jsx)("form",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){f(e,r,t[r])}))}return e}({className:"flex flex-col items-center px-4 py-6 bg-white w-[448px] rounded-2xl shadow font-sans",onSubmit:n},a,{children:(0,o.jsxs)("div",{className:"flex flex-col w-full h-full items-center gap-6",children:[(0,o.jsx)("h1",{className:"text-3xl pb-4",children:r}),t,(0,o.jsx)("div",{className:"flex flex-col items-center w-full bg-primary font-[Gilroy-Light] text-2xl text-white rounded-2xl hover:opacity-80 py-4 mt-10",children:(0,o.jsx)("input",{type:"submit",className:"w-full text-center",value:r})})]})}))}function m(){var e=(0,u.useRouter)(),r=function(){var r=s(a().mark((function r(t){var n,o,l,u,c;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),o=t.target,l=[o.username.value,o.password.value,null===(n=o.email)||void 0===n?void 0:n.value],u=l[0],c=l[1],l[2],r.abrupt("return",i.W4.login(u,c).then((function(){var r=e.query.returnUrl||"/";e.push(r)})).catch(alert));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,o.jsxs)(d,{label:"Sign In",onSubmit:r,children:[(0,o.jsx)(l,{label:"Username",name:"username"}),(0,o.jsx)(l,{label:"Password",name:"password",password:!0}),(0,o.jsx)("div",{className:"w-full px-1",children:(0,o.jsx)("a",{href:"#",className:"font-medium text-md",children:"Forgot password?"})})]})}function v(){var e=(0,u.useRouter)(),r=function(){var r=s(a().mark((function r(t){var n,o,l,u,c,s;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),o=t.target,l=[o.username.value,o.password.value,null===(n=o.email)||void 0===n?void 0:n.value],u=l[0],c=l[1],s=l[2],r.abrupt("return",i.W4.register({username:u,password:c,email:s}).then((function(){alert("Registration successful. Please sign in."),e.push("/signIn")})).catch(alert));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,o.jsxs)(d,{label:"Sign Up",onSubmit:r,children:[(0,o.jsx)(l,{label:"Username",name:"username"}),(0,o.jsx)(l,{label:"Email",name:"email"}),(0,o.jsx)(l,{label:"Password",name:"password",password:!0}),(0,o.jsx)(l,{label:"Repeat password",password:!0})]})}},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,u=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(i){u=!0,a=i}finally{try{l||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,l=(o=t(7294))&&o.__esModule?o:{default:o},u=t(6273),i=t(387),c=t(7190);var s={};function f(e,r,t,n){if(e&&u.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(a?"%"+a:"")]=!0}}var p=function(e){var r,t=!1!==e.prefetch,n=i.useRouter(),o=l.default.useMemo((function(){var r=a(u.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?u.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),p=o.href,d=o.as,m=e.children,v=e.replace,y=e.shallow,h=e.scroll,b=e.locale;"string"===typeof m&&(m=l.default.createElement("a",null,m));var g=(r=l.default.Children.only(m))&&"object"===typeof r&&r.ref,w=a(c.useIntersection({rootMargin:"200px"}),2),x=w[0],j=w[1],O=l.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);l.default.useEffect((function(){var e=j&&t&&u.isLocalURL(p),r="undefined"!==typeof b?b:n&&n.locale,a=s[p+"%"+d+(r?"%"+r:"")];e&&!a&&f(n,p,d,{locale:r})}),[d,p,j,b,t,n]);var S={ref:O,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,l,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),r[a?"replace":"push"](t,n,{shallow:o,locale:i,scroll:l}))}(e,n,p,d,v,y,h,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u.isLocalURL(p)&&f(n,p,d,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof b?b:n&&n.locale,I=n&&n.isLocaleDomain&&u.getDomainLocale(d,E,n&&n.locales,n&&n.domainLocales);S.href=I||u.addBasePath(u.addLocale(d,E,n&&n.defaultLocale))}return l.default.cloneElement(r,S)};r.default=p},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,u=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(i){u=!0,a=i}finally{try{l||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!u,s=o.useRef(),f=a(o.useState(!1),2),p=f[0],d=f[1],m=a(o.useState(r?r.current:null),2),v=m[0],y=m[1],h=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||p||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=i.get(n):(r=i.get(t),c.push(t));if(r)return r;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(t,r={id:t,observer:o,elements:a}),r}(t),a=n.id,o=n.observer,l=n.elements;return l.set(e,r),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(a);var r=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:t}))}),[n,v,t,p]);return o.useEffect((function(){if(!u&&!p){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){r&&y(r.current)}),[r]),[h,p]};var o=t(7294),l=t(9311),u="undefined"!==typeof IntersectionObserver;var i=new Map,c=[]},1664:function(e,r,t){e.exports=t(8418)}}]);