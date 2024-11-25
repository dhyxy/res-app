/*! For license information please see main.04e244a9.js.LICENSE.txt */
(()=>{var e={730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(m,e)||!d.call(f,e)&&(p.test(e)?m[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,b);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,b);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,b);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),_=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var D,A=Object.assign;function M(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var F=!1;function B(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function $(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case E:return"Profiler";case C:return"StrictMode";case P:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case O:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function K(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){X(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function oe(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(fe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ve=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ce=null;function Ee(e){if(e=ya(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=wa(t),Se(e.stateNode,e.type,t))}}function je(e){ke?Ce?Ce.push(e):Ce=[e]:ke=e}function _e(){if(ke){var e=ke,t=Ce;if(Ce=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function ze(e,t){return e(t)}function Pe(){}var Te=!1;function Oe(e,t,n){if(Te)return e(t,n);Te=!0;try{return ze(e,t,n)}finally{Te=!1,(null!==ke||null!==Ce)&&(Pe(),_e())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Re=!1;if(c)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){Re=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(ce){Re=!1}function Le(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var De=!1,Ae=null,Me=!1,Fe=null,Be={onError:function(e){De=!0,Ae=e}};function $e(e,t,n,r,a,o,i,l,s){De=!1,Ae=null,Le.apply(Be,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ue(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return We(a),e;if(i===r)return We(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ye=a.unstable_scheduleCallback,Qe=a.unstable_cancelCallback,Ke=a.unstable_shouldYield,Ge=a.unstable_requestPaint,Xe=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Ct,Et,jt=!1,_t=[],zt=null,Pt=null,Tt=null,Ot=new Map,Nt=new Map,Rt=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function Dt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ya(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function At(e){var t=ba(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Et(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ya(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ft(e,t,n){Mt(e)&&n.delete(t)}function Bt(){jt=!1,null!==zt&&Mt(zt)&&(zt=null),null!==Pt&&Mt(Pt)&&(Pt=null),null!==Tt&&Mt(Tt)&&(Tt=null),Ot.forEach(Ft),Nt.forEach(Ft)}function $t(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Bt)))}function Ut(e){function t(t){return $t(t,e)}if(0<_t.length){$t(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&$t(zt,e),null!==Pt&&$t(Pt,e),null!==Tt&&$t(Tt,e),Ot.forEach(t),Nt.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)At(n),null===n.blockedOn&&Rt.shift()}var Ht=x.ReactCurrentBatchConfig,Wt=!0;function Vt(e,t,n,r){var a=yt,o=Ht.transition;Ht.transition=null;try{yt=1,Yt(e,t,n,r)}finally{yt=a,Ht.transition=o}}function qt(e,t,n,r){var a=yt,o=Ht.transition;Ht.transition=null;try{yt=4,Yt(e,t,n,r)}finally{yt=a,Ht.transition=o}}function Yt(e,t,n,r){if(Wt){var a=Kt(e,t,n,r);if(null===a)Wr(e,t,r,Qt,n),Lt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return zt=Dt(zt,e,t,n,r,a),!0;case"dragenter":return Pt=Dt(Pt,e,t,n,r,a),!0;case"mouseover":return Tt=Dt(Tt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Ot.set(o,Dt(Ot.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Nt.set(o,Dt(Nt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==a;){var o=ya(a);if(null!==o&&wt(o),null===(o=Kt(e,t,n,r))&&Wr(e,t,r,Qt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Qt=null;function Kt(e,t,n,r){if(Qt=null,null!==(e=ba(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=A({},un,{view:0,detail:0}),pn=an(dn),fn=A({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=an(fn),hn=an(A({},fn,{dataTransfer:0})),gn=an(A({},dn,{relatedTarget:0})),vn=an(A({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=A({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(bn),xn=an(A({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return Cn}var jn=A({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=an(jn),zn=an(A({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=an(A({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Tn=an(A({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),On=A({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=an(On),Rn=[9,13,27,32],In=c&&"CompositionEvent"in window,Ln=null;c&&"documentMode"in document&&(Ln=document.documentMode);var Dn=c&&"TextEvent"in window&&!Ln,An=c&&(!In||Ln&&8<Ln&&11>=Ln),Mn=String.fromCharCode(32),Fn=!1;function Bn(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $n(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Vn(e,t,n,r){je(r),0<(t=qr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Yn=null;function Qn(e){Mr(e,0)}function Kn(e){if(Y(xa(e)))return e}function Gn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){qn&&(qn.detachEvent("onpropertychange",nr),Yn=qn=null)}function nr(e){if("value"===e.propertyName&&Kn(Yn)){var t=[];Vn(t,Yn,e,we(e)),Oe(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kn(Yn)}function or(e,t){if("click"===e)return Kn(t)}function ir(e,t){if("input"===e||"change"===e)return Kn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var i=cr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,br=null,yr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&sr(br,r)||(br=r,0<(r=qr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Cr={};function Er(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Cr)return kr[e]=n[t];return e}c&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var jr=Er("animationend"),_r=Er("animationiteration"),zr=Er("animationstart"),Pr=Er("transitionend"),Tr=new Map,Or="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Tr.set(e,t),s(t,[e])}for(var Rr=0;Rr<Or.length;Rr++){var Ir=Or[Rr];Nr(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}Nr(jr,"onAnimationEnd"),Nr(_r,"onAnimationIteration"),Nr(zr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Pr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Ar(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if($e.apply(this,arguments),De){if(!De)throw Error(o(198));var c=Ae;De=!1,Ae=null,Me||(Me=!0,Fe=c)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Ar(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Ar(a,l,u),o=s}}}if(Me)throw e=Fe,Me=!1,Fe=null,e}function Fr(e,t){var n=t[ha];void 0===n&&(n=t[ha]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[$r]){e[$r]=!0,i.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[$r]||(t[$r]=!0,Br("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Gt(t)){case 1:var a=Vt;break;case 4:a=qt;break;default:a=Yt}n=a.bind(null,t,n,e),a=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=ba(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Oe((function(){var r=o,a=we(n),i=[];e:{var l=Tr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case jr:case _r:case zr:s=vn;break;case Pr:s=Tn;break;case"scroll":s=pn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=zn}var c=0!==(4&t),d=!c&&"scroll"===e,p=c?null!==l?l+"Capture":null:l;c=[];for(var f,m=r;null!==m;){var h=(f=m).stateNode;if(5===f.tag&&null!==h&&(f=h,null!==p&&(null!=(h=Ne(m,p))&&c.push(Vr(m,h,f)))),d)break;m=m.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!ba(u)&&!u[ma])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ba(u):null)&&(u!==(d=Ue(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=mn,h="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=zn,h="onPointerLeave",p="onPointerEnter",m="pointer"),d=null==s?l:xa(s),f=null==u?l:xa(u),(l=new c(h,m+"leave",s,n,a)).target=d,l.relatedTarget=f,h=null,ba(a)===r&&((c=new c(p,m+"enter",u,n,a)).target=f,c.relatedTarget=d,h=c),d=h,s&&u)e:{for(p=u,m=0,f=c=s;f;f=Yr(f))m++;for(f=0,h=p;h;h=Yr(h))f++;for(;0<m-f;)c=Yr(c),m--;for(;0<f-m;)p=Yr(p),f--;for(;m--;){if(c===p||null!==p&&c===p.alternate)break e;c=Yr(c),p=Yr(p)}c=null}else c=null;null!==s&&Qr(i,l,s,c,!1),null!==u&&null!==d&&Qr(i,d,u,c,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Gn;else if(Wn(l))if(Xn)g=ir;else{g=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(i,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?xa(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,br=null);break;case"focusout":br=vr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(i,n,a);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":xr(i,n,a)}var b;if(In)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?Bn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(An&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(b=en()):(Jt="value"in(Xt=a)?Xt.value:Xt.textContent,Un=!0)),0<(v=qr(r,y)).length&&(y=new xn(y,e,null,n,a),i.push({event:y,listeners:v}),b?y.data=b:null!==(b=$n(n))&&(y.data=b))),(b=Dn?function(e,t){switch(e){case"compositionend":return $n(t);case"keypress":return 32!==t.which?null:(Fn=!0,Mn);case"textInput":return(e=t.data)===Mn&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!In&&Bn(e,t)?(e=en(),Zt=Jt=Xt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return An&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=b))}Mr(i,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Ne(e,n))&&r.unshift(Vr(e,o,a)),null!=(o=Ne(e,t))&&r.push(Vr(e,o,a))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Ne(n,o))&&i.unshift(Vr(n,s,l)):a||null!=(s=Ne(n,o))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Kr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Kr,"\n").replace(Gr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ut(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),pa="__reactFiber$"+da,fa="__reactProps$"+da,ma="__reactContainer$"+da,ha="__reactEvents$"+da,ga="__reactListeners$"+da,va="__reactHandles$"+da;function ba(e){var t=e[pa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ma]||n[pa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[pa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ya(e){return!(e=e[pa]||e[ma])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[fa]||null}var Sa=[],ka=-1;function Ca(e){return{current:e}}function Ea(e){0>ka||(e.current=Sa[ka],Sa[ka]=null,ka--)}function ja(e,t){ka++,Sa[ka]=e.current,e.current=t}var _a={},za=Ca(_a),Pa=Ca(!1),Ta=_a;function Oa(e,t){var n=e.type.contextTypes;if(!n)return _a;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Na(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ra(){Ea(Pa),Ea(za)}function Ia(e,t,n){if(za.current!==_a)throw Error(o(168));ja(za,t),ja(Pa,n)}function La(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,H(e)||"Unknown",a));return A({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_a,Ta=za.current,ja(za,e),ja(Pa,Pa.current),!0}function Aa(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=La(e,t,Ta),r.__reactInternalMemoizedMergedChildContext=e,Ea(Pa),Ea(za),ja(za,e)):Ea(Pa),ja(Pa,n)}var Ma=null,Fa=!1,Ba=!1;function $a(e){null===Ma?Ma=[e]:Ma.push(e)}function Ua(){if(!Ba&&null!==Ma){Ba=!0;var e=0,t=yt;try{var n=Ma;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ma=null,Fa=!1}catch(a){throw null!==Ma&&(Ma=Ma.slice(e+1)),Ye(Ze,Ua),a}finally{yt=t,Ba=!1}}return null}var Ha=[],Wa=0,Va=null,qa=0,Ya=[],Qa=0,Ka=null,Ga=1,Xa="";function Ja(e,t){Ha[Wa++]=qa,Ha[Wa++]=Va,Va=e,qa=t}function Za(e,t,n){Ya[Qa++]=Ga,Ya[Qa++]=Xa,Ya[Qa++]=Ka,Ka=e;var r=Ga;e=Xa;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ga=1<<32-it(t)+a|n<<a|r,Xa=o+e}else Ga=1<<o|n<<a|r,Xa=e}function eo(e){null!==e.return&&(Ja(e,1),Za(e,1,0))}function to(e){for(;e===Va;)Va=Ha[--Wa],Ha[Wa]=null,qa=Ha[--Wa],Ha[Wa]=null;for(;e===Ka;)Ka=Ya[--Qa],Ya[Qa]=null,Xa=Ya[--Qa],Ya[Qa]=null,Ga=Ya[--Qa],Ya[Qa]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=Ou(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ka?{id:Ga,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ou(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ua(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function po(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw fo(),Error(o(418));for(;t;)io(e,t),t=ua(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ua(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=ro;e;)e=ua(e.nextSibling)}function mo(){ro=no=null,ao=!1}function ho(e){null===oo?oo=[e]:oo.push(e)}var go=x.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){return(0,e._init)(e._payload)}function xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ru(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Au(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===N&&yo(o)===t.type)?((r=a(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Iu(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Lu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Au(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Iu(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case S:return(t=Mu(t,e.mode,n)).return=e,t;case N:return p(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lu(t,e.mode,n,null)).return=e,t;bo(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case S:return n.key===a?c(e,t,n,r):null;case N:return f(e,t,(a=n._init)(n._payload),r)}if(te(n)||L(n))return null!==a?null:d(e,t,n,r,null);bo(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case N:return m(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,a,null);bo(t,r)}return null}function h(a,o,l,s){for(var u=null,c=null,d=o,h=o=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var v=f(a,d,l[h],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,h),null===c?u=v:c.sibling=v,c=v,d=g}if(h===l.length)return n(a,d),ao&&Ja(a,h),u;if(null===d){for(;h<l.length;h++)null!==(d=p(a,l[h],s))&&(o=i(d,o,h),null===c?u=d:c.sibling=d,c=d);return ao&&Ja(a,h),u}for(d=r(a,d);h<l.length;h++)null!==(g=m(d,a,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),o=i(g,o,h),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Ja(a,h),u}function g(a,l,s,u){var c=L(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,h=l,g=l=0,v=null,b=s.next();null!==h&&!b.done;g++,b=s.next()){h.index>g?(v=h,h=null):v=h.sibling;var y=f(a,h,b.value,u);if(null===y){null===h&&(h=v);break}e&&h&&null===y.alternate&&t(a,h),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y,h=v}if(b.done)return n(a,h),ao&&Ja(a,g),c;if(null===h){for(;!b.done;g++,b=s.next())null!==(b=p(a,b.value,u))&&(l=i(b,l,g),null===d?c=b:d.sibling=b,d=b);return ao&&Ja(a,g),c}for(h=r(a,h);!b.done;g++,b=s.next())null!==(b=m(h,a,g,b.value,u))&&(e&&null!==b.alternate&&h.delete(null===b.key?g:b.key),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b);return e&&h.forEach((function(e){return t(a,e)})),ao&&Ja(a,g),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===k&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===k){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===N&&yo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=vo(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===k?((o=Lu(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Iu(i.type,i.key,i.props,null,r.mode,s)).ref=vo(r,o,i),s.return=r,r=s)}return l(r);case S:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Mu(i,r.mode,s)).return=r,r=o}return l(r);case N:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return h(r,o,i,s);if(L(i))return g(r,o,i,s);bo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Au(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=xo(!0),So=xo(!1),ko=Ca(null),Co=null,Eo=null,jo=null;function _o(){jo=Eo=Co=null}function zo(e){var t=ko.current;Ea(ko),e._currentValue=t}function Po(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function To(e,t){Co=e,jo=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Oo(e){var t=e._currentValue;if(jo!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===Co)throw Error(o(308));Eo=e,Co.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var No=null;function Ro(e){null===No?No=[e]:No.push(e)}function Io(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ro(t)):(n.next=a.next,a.next=n),t.interleaved=n,Lo(e,r)}function Lo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Do=!1;function Ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&zs)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Lo(e,n)}return null===(a=r.interleaved)?(t.next=t,Ro(r)):(t.next=a.next,a.next=t),r.interleaved=t,Lo(e,n)}function $o(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Uo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ho(e,t,n,r){var a=e.updateQueue;Do=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var p=l.lane,f=l.eventTime;if((r&p)===p){null!==c&&(c=c.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(p=t,f=n,h.tag){case 1:if("function"===typeof(m=h.payload)){d=m.call(f,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=h.payload)?m.call(f,d,p):m)||void 0===p)break e;d=A({},d,p);break e;case 2:Do=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=a.effects)?a.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=f,s=d):c=c.next=f,i|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(p=l).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Ds|=i,e.lanes=i,e.memoizedState=d}}function Wo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Vo={},qo=Ca(Vo),Yo=Ca(Vo),Qo=Ca(Vo);function Ko(e){if(e===Vo)throw Error(o(174));return e}function Go(e,t){switch(ja(Qo,t),ja(Yo,e),ja(qo,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(qo),ja(qo,t)}function Xo(){Ea(qo),Ea(Yo),Ea(Qo)}function Jo(e){Ko(Qo.current);var t=Ko(qo.current),n=se(t,e.type);t!==n&&(ja(Yo,e),ja(qo,n))}function Zo(e){Yo.current===e&&(Ea(qo),Ea(Yo))}var ei=Ca(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var ai=x.ReactCurrentDispatcher,oi=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ui=null,ci=!1,di=!1,pi=0,fi=0;function mi(){throw Error(o(321))}function hi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,a,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Zi:el,e=n(r,a),di){i=0;do{if(di=!1,pi=0,25<=i)throw Error(o(301));i+=1,ui=si=null,t.updateQueue=null,ai.current=tl,e=n(r,a)}while(di)}if(ai.current=Ji,t=null!==si&&null!==si.next,ii=0,ui=si=li=null,ci=!1,t)throw Error(o(300));return e}function vi(){var e=0!==pi;return pi=0,e}function bi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?li.memoizedState=ui=e:ui=ui.next=e,ui}function yi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ui?li.memoizedState:ui.next;if(null!==t)ui=t,si=e;else{if(null===e)throw Error(o(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ui?li.memoizedState=ui=e:ui=ui.next=e}return ui}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=yi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=si,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ii&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=p,l=r):u=u.next=p,li.lanes|=d,Ds|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,li.lanes|=i,Ds|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=yi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(yl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ki(){}function Ci(e,t){var n=li,r=yi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,yl=!0),r=r.queue,Di(_i.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ui&&1&ui.memoizedState.tag){if(n.flags|=2048,Oi(9,ji.bind(null,n,r,a,t),void 0,null),null===Ps)throw Error(o(349));0!==(30&ii)||Ei(n,t,a)}return a}function Ei(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ji(e,t,n,r){t.value=n,t.getSnapshot=r,zi(t)&&Pi(e)}function _i(e,t,n){return n((function(){zi(t)&&Pi(e)}))}function zi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Pi(e){var t=Lo(e,1);null!==t&&nu(t,e,1,-1)}function Ti(e){var t=bi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Qi.bind(null,li,e),[t.memoizedState,e]}function Oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ni(){return yi().memoizedState}function Ri(e,t,n,r){var a=bi();li.flags|=e,a.memoizedState=Oi(1|t,n,void 0,void 0===r?null:r)}function Ii(e,t,n,r){var a=yi();r=void 0===r?null:r;var o=void 0;if(null!==si){var i=si.memoizedState;if(o=i.destroy,null!==r&&hi(r,i.deps))return void(a.memoizedState=Oi(t,n,o,r))}li.flags|=e,a.memoizedState=Oi(1|t,n,o,r)}function Li(e,t){return Ri(8390656,8,e,t)}function Di(e,t){return Ii(2048,8,e,t)}function Ai(e,t){return Ii(4,2,e,t)}function Mi(e,t){return Ii(4,4,e,t)}function Fi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Bi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ii(4,4,Fi.bind(null,t,e),n)}function $i(){}function Ui(e,t){var n=yi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&hi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hi(e,t){var n=yi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&hi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=ht(),li.lanes|=n,Ds|=n,e.baseState=!0),t)}function Vi(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{yt=n,oi.transition=r}}function qi(){return yi().memoizedState}function Yi(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ki(e))Gi(t,n);else if(null!==(n=Io(e,t,n,r))){nu(n,e,r,eu()),Xi(n,t,r)}}function Qi(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ki(e))Gi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,Ro(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Io(e,t,a,r))&&(nu(n,e,r,a=eu()),Xi(n,t,r))}}function Ki(e){var t=e.alternate;return e===li||null!==t&&t===li}function Gi(e,t){di=ci=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Ji={readContext:Oo,useCallback:mi,useContext:mi,useEffect:mi,useImperativeHandle:mi,useInsertionEffect:mi,useLayoutEffect:mi,useMemo:mi,useReducer:mi,useRef:mi,useState:mi,useDebugValue:mi,useDeferredValue:mi,useTransition:mi,useMutableSource:mi,useSyncExternalStore:mi,useId:mi,unstable_isNewReconciler:!1},Zi={readContext:Oo,useCallback:function(e,t){return bi().memoizedState=[e,void 0===t?null:t],e},useContext:Oo,useEffect:Li,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ri(4194308,4,Fi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=bi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bi().memoizedState=e},useState:Ti,useDebugValue:$i,useDeferredValue:function(e){return bi().memoizedState=e},useTransition:function(){var e=Ti(!1),t=e[0];return e=Vi.bind(null,e[1]),bi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,a=bi();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ps)throw Error(o(349));0!==(30&ii)||Ei(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Li(_i.bind(null,r,i,e),[e]),r.flags|=2048,Oi(9,ji.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=bi(),t=Ps.identifierPrefix;if(ao){var n=Xa;t=":"+t+"R"+(n=(Ga&~(1<<32-it(Ga)-1)).toString(32)+n),0<(n=pi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Oo,useCallback:Ui,useContext:Oo,useEffect:Di,useImperativeHandle:Bi,useInsertionEffect:Ai,useLayoutEffect:Mi,useMemo:Hi,useReducer:wi,useRef:Ni,useState:function(){return wi(xi)},useDebugValue:$i,useDeferredValue:function(e){return Wi(yi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],yi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ci,useId:qi,unstable_isNewReconciler:!1},tl={readContext:Oo,useCallback:Ui,useContext:Oo,useEffect:Di,useImperativeHandle:Bi,useInsertionEffect:Ai,useLayoutEffect:Mi,useMemo:Hi,useReducer:Si,useRef:Ni,useState:function(){return Si(xi)},useDebugValue:$i,useDeferredValue:function(e){var t=yi();return null===si?t.memoizedState=e:Wi(t,si.memoizedState,e)},useTransition:function(){return[Si(xi)[0],yi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ci,useId:qi,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=A({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:A({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Fo(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Bo(e,o,a))&&(nu(t,e,a,r),$o(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Fo(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Bo(e,o,a))&&(nu(t,e,a,r),$o(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Fo(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Bo(e,a,r))&&(nu(t,e,r,n),$o(t,e,r))}};function ol(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function il(e,t,n){var r=!1,a=_a,o=t.contextType;return"object"===typeof o&&null!==o?o=Oo(o):(a=Na(t)?Ta:za.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Oa(e,a):_a),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ao(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=Oo(o):(o=Na(t)?Ta:za.current,a.context=Oa(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Ho(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=$(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,Vs=r),dl(0,t)},n}function ml(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===qs?qs=new Set([this]):qs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function hl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,Bo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var bl=x.ReactCurrentOwner,yl=!1;function xl(e,t,n,r){t.child=null===e?So(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var o=t.ref;return To(t,a),r=gi(e,t,n,r,o,a),n=vi(),null===e||yl?(ao&&n&&eo(t),t.flags|=1,xl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wl(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Nu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Iu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,kl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Wl(e,t,a)}return t.flags|=1,(e=Ru(o,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Wl(e,t,a);0!==(131072&e.flags)&&(yl=!0)}}return jl(e,t,n,r,a)}function Cl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ja(Rs,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ja(Rs,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,ja(Rs,Ns),Ns|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,ja(Rs,Ns),Ns|=r;return xl(e,t,a,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,n,r,a){var o=Na(n)?Ta:za.current;return o=Oa(t,o),To(t,a),n=gi(e,t,n,r,o,a),r=vi(),null===e||yl?(ao&&r&&eo(t),t.flags|=1,xl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wl(e,t,a))}function _l(e,t,n,r,a){if(Na(n)){var o=!0;Da(t)}else o=!1;if(To(t,a),null===t.stateNode)Hl(e,t),il(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=Oo(u):u=Oa(t,u=Na(n)?Ta:za.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,i,r,u),Do=!1;var p=t.memoizedState;i.state=p,Ho(t,r,i,a),s=t.memoizedState,l!==r||p!==s||Pa.current||Do?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Do||ol(t,n,l,r,p,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Mo(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),i.props=u,d=t.pendingProps,p=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Oo(s):s=Oa(t,s=Na(n)?Ta:za.current);var f=n.getDerivedStateFromProps;(c="function"===typeof f||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,i,r,s),Do=!1,p=t.memoizedState,i.state=p,Ho(t,r,i,a);var m=t.memoizedState;l!==d||p!==m||Pa.current||Do?("function"===typeof f&&(rl(t,n,f,r),m=t.memoizedState),(u=Do||ol(t,n,u,r,p,m,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,m,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,m,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),i.props=r,i.state=m,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,o,a)}function zl(e,t,n,r,a,o){El(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Aa(t,n,!1),Wl(e,t,o);r=t.stateNode,bl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):xl(e,t,l,o),t.memoizedState=r.state,a&&Aa(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Ia(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ia(0,t.context,!1),Go(e,t.containerInfo)}function Tl(e,t,n,r,a){return mo(),ho(a),t.flags|=256,xl(e,t,n,r),t.child}var Ol,Nl,Rl,Il,Ll={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Al(e,t,n){var r,a=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),ja(ei,1&i),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Du(s,a,0,null),e=Lu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Ll,e):Ml(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,l,r=cl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Du({mode:"visible",children:r.children},a,0,null),(i=Lu(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Ll,i);if(0===(1&t.mode))return Fl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,l,r=cl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Ps)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Lo(e,a),nu(r,e,a,-1))}return hu(),Fl(e,t,l,r=cl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ua(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Ya[Qa++]=Ga,Ya[Qa++]=Xa,Ya[Qa++]=Ka,Ga=e.id,Xa=e.overflow,Ka=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Ru(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Ru(r,l):(l=Lu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,a}return e=(l=e.child).sibling,a=Ru(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ml(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&ho(r),wo(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Po(e.return,t,n)}function $l(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Ul(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bl(e,n,t);else if(19===e.tag)Bl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ja(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$l(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$l(t,!0,n,null,o);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ru(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ru(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ql(t),null;case 1:case 17:return Na(t.type)&&Ra(),ql(t),null;case 3:return r=t.stateNode,Xo(),Ea(Pa),Ea(za),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(iu(oo),oo=null))),Nl(e,t),ql(t),null;case 5:Zo(t);var a=Ko(Qo.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return ql(t),null}if(e=Ko(qo.current),po(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pa]=t,r[fa]=i,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(a=0;a<Lr.length;a++)Fr(Lr[a],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":G(r,i),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fr("invalid",r);break;case"textarea":ae(r,i),Fr("invalid",r)}for(var s in be(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":q(r),Z(r,i,!0);break;case"textarea":q(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pa]=t,e[fa]=r,Ol(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),a=r;break;case"iframe":case"object":case"embed":Fr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Lr.length;a++)Fr(Lr[a],e);a=r;break;case"source":Fr("error",e),a=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),a=r;break;case"details":Fr("toggle",e),a=r;break;case"input":G(e,r),a=K(e,r),Fr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=A({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Fr("invalid",e)}for(i in be(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&pe(e,c):"number"===typeof c&&pe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Fr("scroll",e):null!=c&&y(e,i,c,s))}switch(n){case"input":q(e),Z(e,r,!1);break;case"textarea":q(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ql(t),null;case 6:if(e&&null!=t.stateNode)Il(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Ko(Qo.current),Ko(qo.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[pa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pa]=t,t.stateNode=r}return ql(t),null;case 13:if(Ea(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))fo(),mo(),t.flags|=98560,i=!1;else if(i=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[pa]=t}else mo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ql(t),i=!1}else null!==oo&&(iu(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Is&&(Is=3):hu())),null!==t.updateQueue&&(t.flags|=4),ql(t),null);case 4:return Xo(),Nl(e,t),null===e&&Ur(t.stateNode.containerInfo),ql(t),null;case 10:return zo(t.type._context),ql(t),null;case 19:if(Ea(ei),null===(i=t.memoizedState))return ql(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==Is||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ja(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Xe()>Us&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return ql(t),null}else 2*Xe()-i.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,n=ei.current,ja(ei,r?1&n|2:1&n),t):(ql(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(ql(t),6&t.subtreeFlags&&(t.flags|=8192)):ql(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Ql(e,t){switch(to(t),t.tag){case 1:return Na(t.type)&&Ra(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xo(),Ea(Pa),Ea(za),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ea(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));mo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(ei),null;case 4:return Xo(),null;case 10:return zo(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Ol=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Rl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ko(qo.current);var o,i=null;switch(n){case"input":a=K(e,a),r=K(e,r),i=[];break;case"select":a=A({},a,{value:void 0}),r=A({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in be(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Il=function(e,t,n,r){n!==r&&(t.flags|=4)};var Kl=!1,Gl=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Cu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Cu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pa],delete t[fa],delete t[ha],delete t[ga],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function ps(e,t,n){for(n=n.child;null!==n;)fs(e,t,n),n=n.sibling}function fs(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Gl||Zl(n,t);case 6:var r=cs,a=ds;cs=null,ps(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ut(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,ps(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&es(n,t,i),a=a.next}while(a!==r)}ps(e,t,n);break;case 1:if(!Gl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Cu(n,t,l)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,ps(e,t,n),Gl=r):ps(e,t,n);break;default:ps(e,t,n)}}function ms(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=zu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function hs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(o(160));fs(i,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Cu(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hs(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Cu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Cu(e,e.return,g)}}break;case 1:hs(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(hs(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var a=e.stateNode;try{pe(a,"")}catch(g){Cu(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&X(a,i),ye(s,l);var c=ye(s,i);for(l=0;l<u.length;l+=2){var d=u[l],p=u[l+1];"style"===d?ge(a,p):"dangerouslySetInnerHTML"===d?de(a,p):"children"===d?pe(a,p):y(a,d,p,c)}switch(s){case"input":J(a,i);break;case"textarea":oe(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var m=i.value;null!=m?ne(a,!!i.multiple,m,!1):f!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[fa]=i}catch(g){Cu(e,e.return,g)}}break;case 6:if(hs(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){Cu(e,e.return,g)}}break;case 3:if(hs(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Cu(e,e.return,g)}break;case 4:default:hs(t,e),vs(e);break;case 13:hs(t,e),vs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||($s=Xe())),4&r&&ms(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,hs(t,e),Gl=c):hs(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(p=Jl=d;null!==Jl;){switch(m=(f=Jl).child,f.tag){case 0:case 11:case 14:case 15:ns(4,f,f.return);break;case 1:Zl(f,f.return);var h=f.stateNode;if("function"===typeof h.componentWillUnmount){r=f,n=f.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){Cu(r,n,g)}}break;case 5:Zl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==m?(m.return=f,Jl=m):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{a=p.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=p.stateNode,l=void 0!==(u=p.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=he("display",l))}catch(g){Cu(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(g){Cu(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hs(t,e),vs(e),4&r&&ms(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(pe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(o(161))}}catch(l){Cu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){Jl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var a=Jl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||Kl;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=Kl;var u=Gl;if(Kl=i,(Gl=s)&&!u)for(Jl=a;null!==Jl;)s=(i=Jl).child,22===i.tag&&null!==i.memoizedState?Ss(a):null!==s?(s.return=i,Jl=s):Ss(a);for(;null!==o;)Jl=o,ys(o,t,n),o=o.sibling;Jl=a,Kl=l,Gl=u}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Jl=o):xs(e)}}function xs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Wo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(o(163))}Gl||512&t.flags&&as(t)}catch(f){Cu(t,t.return,f)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function Ss(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Cu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Cu(t,a,s)}}var o=t.return;try{as(t)}catch(s){Cu(t,o,s)}break;case 5:var i=t.return;try{as(t)}catch(s){Cu(t,i,s)}}}catch(s){Cu(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var ks,Cs=Math.ceil,Es=x.ReactCurrentDispatcher,js=x.ReactCurrentOwner,_s=x.ReactCurrentBatchConfig,zs=0,Ps=null,Ts=null,Os=0,Ns=0,Rs=Ca(0),Is=0,Ls=null,Ds=0,As=0,Ms=0,Fs=null,Bs=null,$s=0,Us=1/0,Hs=null,Ws=!1,Vs=null,qs=null,Ys=!1,Qs=null,Ks=0,Gs=0,Xs=null,Js=-1,Zs=0;function eu(){return 0!==(6&zs)?Xe():-1!==Js?Js:Js=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&zs)&&0!==Os?Os&-Os:null!==go.transition?(0===Zs&&(Zs=ht()),Zs):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,Xs=null,Error(o(185));vt(e,n,r),0!==(2&zs)&&e===Ps||(e===Ps&&(0===(2&zs)&&(As|=n),4===Is&&lu(e,Os)),ru(e,r),1===n&&0===zs&&0===(1&t.mode)&&(Us=Xe()+500,Fa&&Ua()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=ft(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=pt(e,e===Ps?Os:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Fa=!0,$a(e)}(su.bind(null,e)):$a(su.bind(null,e)),ia((function(){0===(6&zs)&&Ua()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Js=-1,Zs=0,0!==(6&zs))throw Error(o(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=pt(e,e===Ps?Os:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=zs;zs|=2;var i=mu();for(Ps===e&&Os===t||(Hs=null,Us=Xe()+500,pu(e,t));;)try{bu();break}catch(s){fu(e,s)}_o(),Es.current=i,zs=a,null!==Ts?t=0:(Ps=null,Os=0,t=Is)}if(0!==t){if(2===t&&(0!==(a=mt(e))&&(r=a,t=ou(e,a))),1===t)throw n=Ls,pu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(i=mt(e))&&(r=i,t=ou(e,i))),1===t))throw n=Ls,pu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,Bs,Hs);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=$s+500-Xe())){if(0!==pt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,Bs,Hs),t);break}wu(e,Bs,Hs);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cs(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,Bs,Hs),r);break}wu(e,Bs,Hs);break;default:throw Error(o(329))}}}return ru(e,Xe()),e.callbackNode===n?au.bind(null,e):null}function ou(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Bs,Bs=n,null!==t&&iu(t)),e}function iu(e){null===Bs?Bs=e:Bs.push.apply(Bs,e)}function lu(e,t){for(t&=~Ms,t&=~As,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&zs))throw Error(o(327));Su();var t=pt(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Ls,pu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Bs,Hs),ru(e,Xe()),null}function uu(e,t){var n=zs;zs|=1;try{return e(t)}finally{0===(zs=n)&&(Us=Xe()+500,Fa&&Ua())}}function cu(e){null!==Qs&&0===Qs.tag&&0===(6&zs)&&Su();var t=zs;zs|=1;var n=_s.transition,r=yt;try{if(_s.transition=null,yt=1,e)return e()}finally{yt=r,_s.transition=n,0===(6&(zs=t))&&Ua()}}function du(){Ns=Rs.current,Ea(Rs)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ts)for(n=Ts.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ra();break;case 3:Xo(),Ea(Pa),Ea(za),ri();break;case 5:Zo(r);break;case 4:Xo();break;case 13:case 19:Ea(ei);break;case 10:zo(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ps=e,Ts=e=Ru(e.current,null),Os=Ns=t,Is=0,Ls=null,Ms=As=Ds=0,Bs=Fs=null,null!==No){for(t=0;t<No.length;t++)if(null!==(r=(n=No[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}No=null}return e}function fu(e,t){for(;;){var n=Ts;try{if(_o(),ai.current=Ji,ci){for(var r=li.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ci=!1}if(ii=0,ui=si=li=null,di=!1,pi=0,js.current=null,null===n||null===n.return){Is=1,Ls=t,Ts=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Os,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=gl(l);if(null!==m){m.flags&=-257,vl(m,l,s,0,t),1&m.mode&&hl(i,c,t),u=c;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(u),t.updateQueue=g}else h.add(u);break e}if(0===(1&t)){hl(i,c,t),hu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),ho(ul(u,s));break e}}i=u=ul(u,s),4!==Is&&(Is=2),null===Fs?Fs=[i]:Fs.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Uo(i,fl(0,u,t));break e;case 1:s=u;var b=i.type,y=i.stateNode;if(0===(128&i.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===qs||!qs.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t,Uo(i,ml(i,s,t));break e}}i=i.return}while(null!==i)}xu(n)}catch(x){t=x,Ts===n&&null!==n&&(Ts=n=n.return);continue}break}}function mu(){var e=Es.current;return Es.current=Ji,null===e?Ji:e}function hu(){0!==Is&&3!==Is&&2!==Is||(Is=4),null===Ps||0===(268435455&Ds)&&0===(268435455&As)||lu(Ps,Os)}function gu(e,t){var n=zs;zs|=2;var r=mu();for(Ps===e&&Os===t||(Hs=null,pu(e,t));;)try{vu();break}catch(a){fu(e,a)}if(_o(),zs=n,Es.current=r,null!==Ts)throw Error(o(261));return Ps=null,Os=0,Is}function vu(){for(;null!==Ts;)yu(Ts)}function bu(){for(;null!==Ts&&!Ke();)yu(Ts)}function yu(e){var t=ks(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?xu(e):Ts=t,js.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Yl(n,t,Ns)))return void(Ts=n)}else{if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Ts=n);if(null===e)return Is=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===Is&&(Is=5)}function wu(e,t,n){var r=yt,a=_s.transition;try{_s.transition=null,yt=1,function(e,t,n,r){do{Su()}while(null!==Qs);if(0!==(6&zs))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Ps&&(Ts=Ps=null,Os=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ys||(Ys=!0,Pu(tt,(function(){return Su(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=_s.transition,_s.transition=null;var l=yt;yt=1;var s=zs;zs|=4,js.current=null,function(e,t){if(ea=Wt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||0!==a&&3!==p.nodeType||(s=l+a),p!==i||0!==r&&3!==p.nodeType||(u=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++c===a&&(s=l),f===i&&++d===r&&(u=l),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Wt=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(w){Cu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}h=ts,ts=!1}(e,n),gs(n,e),mr(ta),Wt=!!ea,ta=ea=null,e.current=n,bs(n,e,a),Ge(),zs=s,yt=l,_s.transition=i}else e.current=n;if(Ys&&(Ys=!1,Qs=e,Ks=a),i=e.pendingLanes,0===i&&(qs=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ws)throw Ws=!1,e=Vs,Vs=null,e;0!==(1&Ks)&&0!==e.tag&&Su(),i=e.pendingLanes,0!==(1&i)?e===Xs?Gs++:(Gs=0,Xs=e):Gs=0,Ua()}(e,t,n,r)}finally{_s.transition=a,yt=r}return null}function Su(){if(null!==Qs){var e=xt(Ks),t=_s.transition,n=yt;try{if(_s.transition=null,yt=16>e?16:e,null===Qs)var r=!1;else{if(e=Qs,Qs=null,Ks=0,0!==(6&zs))throw Error(o(331));var a=zs;for(zs|=4,Jl=e.current;null!==Jl;){var i=Jl,l=i.child;if(0!==(16&Jl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Jl=c;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var p=d.child;if(null!==p)p.return=d,Jl=p;else for(;null!==Jl;){var f=(d=Jl).sibling,m=d.return;if(os(d),d===c){Jl=null;break}if(null!==f){f.return=m,Jl=f;break}Jl=m}}}var h=i.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Jl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(i=Jl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var b=i.sibling;if(null!==b){b.return=i.return,Jl=b;break e}Jl=i.return}}var y=e.current;for(Jl=y;null!==Jl;){var x=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Jl=x;else e:for(l=y;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Cu(s,s.return,S)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(zs=a,Ua(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(S){}r=!0}return r}finally{yt=n,_s.transition=t}}return!1}function ku(e,t,n){e=Bo(e,t=fl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Cu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===qs||!qs.has(r))){t=Bo(t,e=ml(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(Os&n)===n&&(4===Is||3===Is&&(130023424&Os)===Os&&500>Xe()-$s?pu(e,0):Ms|=n),ru(e,t)}function ju(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Lo(e,t))&&(vt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),ju(e,n)}function zu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),ju(e,n)}function Pu(e,t){return Ye(e,t)}function Tu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ou(e,t,n,r){return new Tu(e,t,n,r)}function Nu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ru(e,t){var n=e.alternate;return null===n?((n=Ou(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Iu(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Nu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Lu(n.children,a,i,t);case C:l=8,a|=8;break;case E:return(e=Ou(12,n,t,2|a)).elementType=E,e.lanes=i,e;case P:return(e=Ou(13,n,t,a)).elementType=P,e.lanes=i,e;case T:return(e=Ou(19,n,t,a)).elementType=T,e.lanes=i,e;case R:return Du(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:l=10;break e;case _:l=9;break e;case z:l=11;break e;case O:l=14;break e;case N:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Ou(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Lu(e,t,n,r){return(e=Ou(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=Ou(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Au(e,t,n){return(e=Ou(6,e,null,t)).lanes=n,e}function Mu(e,t,n){return(t=Ou(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bu(e,t,n,r,a,o,i,l,s){return e=new Fu(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Ou(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ao(o),e}function $u(e){if(!e)return _a;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Na(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Na(n))return La(e,n,t)}return t}function Uu(e,t,n,r,a,o,i,l,s){return(e=Bu(n,r,!0,e,0,o,0,l,s)).context=$u(null),n=e.current,(o=Fo(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Bo(n,o,a),e.current.lanes=a,vt(e,a,r),ru(e,r),e}function Hu(e,t,n,r){var a=t.current,o=eu(),i=tu(a);return n=$u(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Bo(a,t,i))&&(nu(e,a,i,o),$o(e,a,i)),i}function Wu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pa.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),mo();break;case 5:Jo(t);break;case 1:Na(t.type)&&Da(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ja(ko,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ja(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Al(e,t,n):(ja(ei,1&ei.current),null!==(e=Wl(e,t,n))?e.sibling:null);ja(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ul(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),ja(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,Cl(e,t,n)}return Wl(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,ao&&0!==(1048576&t.flags)&&Za(t,qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hl(e,t),e=t.pendingProps;var a=Oa(t,za.current);To(t,n),a=gi(null,t,r,e,a,n);var i=vi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Na(r)?(i=!0,Da(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Ao(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=zl(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),xl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Nu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===z)return 11;if(e===O)return 14}return 2}(r),e=nl(r,e),a){case 0:t=jl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,jl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Pl(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Mo(e,t),Ho(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Tl(e,t,r,n,a=ul(Error(o(423)),t));break e}if(r!==a){t=Tl(e,t,r,n,a=ul(Error(o(424)),t));break e}for(ro=ua(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(mo(),r===a){t=Wl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Jo(t),null===e&&uo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),El(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Al(e,t,n);case 4:return Go(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,ja(ko,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!Pa.current){t=Wl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Fo(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),Po(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Po(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,To(t,n),r=r(a=Oo(a)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Sl(e,t,r,a=nl(r.type,a),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Hl(e,t),t.tag=1,Na(r)?(e=!0,Da(t)):e=!1,To(t,n),il(t,r,a),sl(t,r,a,n),zl(null,t,r,!0,e,n);case 19:return Ul(e,t,n);case 22:return Cl(e,t,n)}throw Error(o(156,t.tag))};var Yu="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Ku(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Wu(i);l.call(e)}}Hu(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Wu(i);o.call(e)}}var i=Uu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=i,e[ma]=i.current,Ur(8===e.nodeType?e.parentNode:e),cu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Wu(s);l.call(e)}}var s=Bu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=s,e[ma]=s.current,Ur(8===e.nodeType?e.parentNode:e),cu((function(){Hu(t,s,n,r)})),s}(n,t,e,a,r);return Wu(i)}Ku.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Hu(e,t,null,null)},Ku.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Hu(null,e,null,null)})),t[ma]=null}},Ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&At(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),ru(t,Xe()),0===(6&zs)&&(Us=Xe()+500,Ua()))}break;case 13:cu((function(){var t=Lo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),qu(e,1)}},St=function(e){if(13===e.tag){var t=Lo(e,134217728);if(null!==t)nu(t,e,134217728,eu());qu(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Lo(e,t);if(null!==n)nu(n,e,t,eu());qu(e,t)}},Ct=function(){return yt},Et=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},Se=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(o(90));Y(r),J(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},ze=uu,Pe=cu;var ec={usingClientEntryPoint:!1,Events:[ya,xa,wa,je,_e,uu]},tc={findFiberByHostInstance:ba,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(o(299));var n=!1,r="",a=Yu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Bu(e,1,!1,null,0,n,0,r,a),e[ma]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(o(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Yu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Uu(t,null,e,1,null!=n?n:null,a,0,i,l),e[ma]=t.current,Ur(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ku(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(o(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[ma]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},534:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,h(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,a)&&!C.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:k.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+z(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),P(i,t,a,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+z(l=e[u],u);s+=P(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=P(l=l.value,t,a,c=o+z(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},R={transition:null},I={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:R,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=y,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!C.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(534)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,p=null,f=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!h)if(null!==r(u))h=!0,R(S);else{var t=r(c);null!==t&&I(w,t.startTime-e)}}function S(e,n){h=!1,g&&(g=!1,b(j),j=-1),m=!0;var o=f;try{for(x(n),p=r(u);null!==p&&(!(p.expirationTime>n)||e&&!P());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(u)&&a(u),x(n)}else a(u);p=r(u)}if(null!==p)var s=!0;else{var d=r(c);null!==d&&I(w,d.startTime-n),s=!1}return s}finally{p=null,f=o,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,C=!1,E=null,j=-1,_=5,z=-1;function P(){return!(t.unstable_now()-z<_)}function T(){if(null!==E){var e=t.unstable_now();z=e;var n=!0;try{n=E(!0,e)}finally{n?k():(C=!1,E=null)}}else C=!1}if("function"===typeof y)k=function(){y(T)};else if("undefined"!==typeof MessageChannel){var O=new MessageChannel,N=O.port2;O.port1.onmessage=T,k=function(){N.postMessage(null)}}else k=function(){v(T,0)};function R(e){E=e,C||(C=!0,k())}function I(e,n){j=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,R(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(b(j),j=-1):g=!0,I(w,o-i))):(e.sortIndex=l,n(u,e),h||m||(h=!0,R(S))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/res-app/",n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),a=n(391);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const i="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,n,r){return void 0===n&&(n=null),o({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function f(t,n,r,a){void 0===a&&(a={});let{window:s=document.defaultView,v5Compat:p=!1}=a,f=s.history,m=e.Pop,h=null,g=v();function v(){return(f.state||{idx:null}).idx}function b(){m=e.Pop;let t=v(),n=null==t?null:t-g;g=t,h&&h({action:m,location:x.location,delta:n})}function y(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"===typeof e?e:d(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,f.replaceState(o({},f.state,{idx:g}),""));let x={get action(){return m},get location(){return t(s,f)},listen(e){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(i,b),h=e,()=>{s.removeEventListener(i,b),h=null}},createHref:e=>n(s,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){m=e.Push;let a=c(x.location,t,n);r&&r(a,t),g=v()+1;let o=u(a,g),i=x.createHref(a);try{f.pushState(o,"",i)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(i)}p&&h&&h({action:m,location:x.location,delta:1})},replace:function(t,n){m=e.Replace;let a=c(x.location,t,n);r&&r(a,t),g=v();let o=u(a,g),i=x.createHref(a);f.replaceState(o,"",i),p&&h&&h({action:m,location:x.location,delta:0})},go:e=>f.go(e)};return x}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function h(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,r){let a=T(("string"===typeof t?p(t):t).pathname||"/",n);if(null==a)return null;let o=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=P(a);i=_(o[l],e,r)}return i}function v(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let s=L([r,i.relativePath]),u=n.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),v(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:j(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of b(e.path))a(e,t,r);else a(e,t)})),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=b(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const y=/^:[\w-]+$/,x=3,w=2,S=1,k=10,C=-2,E=e=>"*"===e;function j(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=C),t&&(r+=w),n.filter((e=>!E(e))).reduce(((e,t)=>e+(y.test(t)?x:""===t?S:k)),r)}function _(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:L([o,c.pathname]),pathnameBase:D(L([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=L([o,c.pathnameBase]))}return i}function z(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function P(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function T(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function O(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function N(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function R(e,t){let n=N(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function I(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=p(e):(a=o({},e),l(!a.pathname||!a.pathname.includes("?"),O("?","pathname","search",a)),l(!a.pathname||!a.pathname.includes("#"),O("#","pathname","hash",a)),l(!a.search||!a.search.includes("#"),O("#","search","hash",a)));let i,s=""===e||""===a.pathname,u=s?"/":a.pathname;if(null==u)i=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?p(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:A(r),hash:M(a)}}(a,i),d=u&&"/"!==u&&u.endsWith("/"),f=(s||"."===u)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}const L=e=>e.join("/").replace(/\/\/+/g,"/"),D=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const B=["post","put","patch","delete"],$=(new Set(B),["get",...B]);new Set($),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}const H=t.createContext(null);const W=t.createContext(null);const V=t.createContext(null);const q=t.createContext(null);const Y=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Q=t.createContext(null);function K(){return null!=t.useContext(q)}function G(){return K()||l(!1),t.useContext(q).location}function X(e){t.useContext(V).static||t.useLayoutEffect(e)}function J(){let{isDataRoute:e}=t.useContext(Y);return e?function(){let{router:e}=se(ie.UseNavigateStable),n=ce(le.UseNavigateStable),r=t.useRef(!1);return X((()=>{r.current=!0})),t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,U({fromRouteId:n},a)))}),[e,n])}():function(){K()||l(!1);let e=t.useContext(H),{basename:n,future:r,navigator:a}=t.useContext(V),{matches:o}=t.useContext(Y),{pathname:i}=G(),s=JSON.stringify(R(o,r.v7_relativeSplatPath)),u=t.useRef(!1);return X((()=>{u.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!u.current)return;if("number"===typeof t)return void a.go(t);let o=I(t,JSON.parse(s),i,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:L([n,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[n,a,s,i,e])}()}function Z(e,n){let{relative:r}=void 0===n?{}:n,{future:a}=t.useContext(V),{matches:o}=t.useContext(Y),{pathname:i}=G(),l=JSON.stringify(R(o,a.v7_relativeSplatPath));return t.useMemo((()=>I(e,JSON.parse(l),i,"path"===r)),[e,l,i,r])}function ee(n,r,a,o){K()||l(!1);let{navigator:i}=t.useContext(V),{matches:s}=t.useContext(Y),u=s[s.length-1],c=u?u.params:{},d=(u&&u.pathname,u?u.pathnameBase:"/");u&&u.route;let f,m=G();if(r){var g;let e="string"===typeof r?p(r):r;"/"===d||(null==(g=e.pathname)?void 0:g.startsWith(d))||l(!1),f=e}else f=m;let v=f.pathname||"/",b=v;if("/"!==d){let e=d.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=h(n,{pathname:b});let x=oe(y&&y.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:L([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:L([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,a,o);return r&&x?t.createElement(q.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},x):x}function te(){let e=function(){var e;let n=t.useContext(Q),r=ue(le.UseRouteError),a=ce(le.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[a]}(),n=F(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const ne=t.createElement(te,null);class re extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Y.Provider,{value:this.props.routeContext},t.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:n,match:r,children:a}=e,o=t.useContext(H);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Y.Provider,{value:n},a)}function oe(e,n,r,a){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=a)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,u=null==(o=r)?void 0:o.errors;if(null!=u){let e=s.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight(((e,a,o)=>{let i,l=!1,p=null,f=null;var m;r&&(i=u&&a.route.id?u[a.route.id]:void 0,p=a.route.errorElement||ne,c&&(d<0&&0===o?(m="route-fallback",!1||de[m]||(de[m]=!0),l=!0,f=null):d===o&&(l=!0,f=a.route.hydrateFallbackElement||null)));let h=n.concat(s.slice(0,o+1)),g=()=>{let n;return n=i?p:l?f:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(ae,{match:a,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?t.createElement(re,{location:r.location,revalidation:r.revalidation,component:p,error:i,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()}),null)}var ie=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ie||{}),le=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(le||{});function se(e){let n=t.useContext(H);return n||l(!1),n}function ue(e){let n=t.useContext(W);return n||l(!1),n}function ce(e){let n=function(){let e=t.useContext(Y);return e||l(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||l(!1),r.route.id}const de={};const pe={};const fe=(e,t,n)=>{var r;pe[r="\u26a0\ufe0f React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+n+"."]||(pe[r]=!0,console.warn(r))};function me(e,t){null!=e&&e.v7_startTransition||fe("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),null!=e&&e.v7_relativeSplatPath||t&&t.v7_relativeSplatPath||fe("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(t.v7_fetcherPersist||fe("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),t.v7_normalizeFormMethod||fe("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),t.v7_partialHydration||fe("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),t.v7_skipActionErrorRevalidation||fe("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}r.startTransition;function he(e){l(!1)}function ge(n){let{basename:r="/",children:a=null,location:o,navigationType:i=e.Pop,navigator:s,static:u=!1,future:c}=n;K()&&l(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:d,navigator:s,static:u,future:U({v7_relativeSplatPath:!1},c)})),[d,c,s,u]);"string"===typeof o&&(o=p(o));let{pathname:m="/",search:h="",hash:g="",state:v=null,key:b="default"}=o,y=t.useMemo((()=>{let e=T(m,d);return null==e?null:{location:{pathname:e,search:h,hash:g,state:v,key:b},navigationType:i}}),[d,m,h,g,v,b,i]);return null==y?null:t.createElement(V.Provider,{value:f},t.createElement(q.Provider,{children:a,value:y}))}function ve(e){let{children:t,location:n}=e;return ee(be(t),n)}new Promise((()=>{}));t.Component;function be(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,a)=>{if(!t.isValidElement(e))return;let o=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,be(e.props.children,o));e.type!==he&&l(!1),e.props.index&&e.props.children&&l(!1);let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=be(e.props.children,o)),r.push(i)})),r}var ye=n(950),xe=n.t(ye,2);function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const ke=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Dl){}new Map;const Ce=r.startTransition;xe.flushSync,r.useId;function Ee(e){let{basename:n,children:r,future:a,window:o}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),f((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=p(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),c("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:d(t))}),(function(e,t){s("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),l)));let u=i.current,[m,h]=t.useState({action:u.action,location:u.location}),{v7_startTransition:g}=a||{},v=t.useCallback((e=>{g&&Ce?Ce((()=>h(e))):h(e)}),[h,g]);return t.useLayoutEffect((()=>u.listen(v)),[u,v]),t.useEffect((()=>me(a)),[a]),t.createElement(ge,{basename:n,children:r,location:m.location,navigationType:m.action,navigator:u,future:a})}const je="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,_e=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ze=t.forwardRef((function(e,n){let r,{onClick:a,relative:o,reloadDocument:i,replace:s,state:u,target:c,to:p,preventScrollReset:f,viewTransition:m}=e,h=Se(e,ke),{basename:g}=t.useContext(V),v=!1;if("string"===typeof p&&_e.test(p)&&(r=p,je))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=T(t.pathname,g);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:v=!0}catch(Dl){}let b=function(e,n){let{relative:r}=void 0===n?{}:n;K()||l(!1);let{basename:a,navigator:o}=t.useContext(V),{hash:i,pathname:s,search:u}=Z(e,{relative:r}),c=s;return"/"!==a&&(c="/"===s?a:L([a,s])),o.createHref({pathname:c,search:u,hash:i})}(p,{relative:o}),y=function(e,n){let{target:r,replace:a,state:o,preventScrollReset:i,relative:l,viewTransition:s}=void 0===n?{}:n,u=J(),c=G(),p=Z(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==a?a:d(c)===d(p);u(e,{replace:n,state:o,preventScrollReset:i,relative:l,viewTransition:s})}}),[c,u,p,a,o,r,e,i,l,s])}(p,{replace:s,state:u,target:c,preventScrollReset:f,relative:o,viewTransition:m});return t.createElement("a",we({},h,{href:r||b,onClick:v||i?a:function(e){a&&a(e),e.defaultPrevented||y(e)},ref:n,target:c}))}));var Pe,Te;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pe||(Pe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Te||(Te={}));var Oe=function(){return Oe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Oe.apply(this,arguments)};Object.create;function Ne(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Re=n(324),Ie=n.n(Re),Le="-ms-",De="-moz-",Ae="-webkit-",Me="comm",Fe="rule",Be="decl",$e="@keyframes",Ue=Math.abs,He=String.fromCharCode,We=Object.assign;function Ve(e){return e.trim()}function qe(e,t){return(e=t.exec(e))?e[0]:e}function Ye(e,t,n){return e.replace(t,n)}function Qe(e,t,n){return e.indexOf(t,n)}function Ke(e,t){return 0|e.charCodeAt(t)}function Ge(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function Je(e){return e.length}function Ze(e,t){return t.push(e),e}function et(e,t){return e.filter((function(e){return!qe(e,t)}))}var tt=1,nt=1,rt=0,at=0,ot=0,it="";function lt(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:tt,column:nt,length:i,return:"",siblings:l}}function st(e,t){return We(lt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ut(e){for(;e.root;)e=st(e.root,{children:[e]});Ze(e,e.siblings)}function ct(){return ot=at>0?Ke(it,--at):0,nt--,10===ot&&(nt=1,tt--),ot}function dt(){return ot=at<rt?Ke(it,at++):0,nt++,10===ot&&(nt=1,tt++),ot}function pt(){return Ke(it,at)}function ft(){return at}function mt(e,t){return Ge(it,e,t)}function ht(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gt(e){return tt=nt=1,rt=Xe(it=e),at=0,[]}function vt(e){return it="",e}function bt(e){return Ve(mt(at-1,wt(91===e?e+2:40===e?e+1:e)))}function yt(e){for(;(ot=pt())&&ot<33;)dt();return ht(e)>2||ht(ot)>3?"":" "}function xt(e,t){for(;--t&&dt()&&!(ot<48||ot>102||ot>57&&ot<65||ot>70&&ot<97););return mt(e,ft()+(t<6&&32==pt()&&32==dt()))}function wt(e){for(;dt();)switch(ot){case e:return at;case 34:case 39:34!==e&&39!==e&&wt(ot);break;case 40:41===e&&wt(e);break;case 92:dt()}return at}function St(e,t){for(;dt()&&e+ot!==57&&(e+ot!==84||47!==pt()););return"/*"+mt(t,at-1)+"*"+He(47===e?e:dt())}function kt(e){for(;!ht(pt());)dt();return mt(e,at)}function Ct(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Et(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Be:return e.return=e.return||e.value;case Me:return"";case $e:return e.return=e.value+"{"+Ct(e.children,r)+"}";case Fe:if(!Xe(e.value=e.props.join(",")))return""}return Xe(n=Ct(e.children,r))?e.return=e.value+"{"+n+"}":""}function jt(e,t,n){switch(function(e,t){return 45^Ke(e,0)?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}(e,t)){case 5103:return Ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+e+e;case 4789:return De+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+e+De+e+Le+e+e;case 5936:switch(Ke(e,t+11)){case 114:return Ae+e+Le+Ye(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ae+e+Le+Ye(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ae+e+Le+Ye(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ae+e+Le+e+e;case 6165:return Ae+e+Le+"flex-"+e+e;case 5187:return Ae+e+Ye(e,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return Ae+e+Le+"flex-item-"+Ye(e,/flex-|-self/g,"")+(qe(e,/flex-|baseline/)?"":Le+"grid-row-"+Ye(e,/flex-|-self/g,""))+e;case 4675:return Ae+e+Le+"flex-line-pack"+Ye(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ae+e+Le+Ye(e,"shrink","negative")+e;case 5292:return Ae+e+Le+Ye(e,"basis","preferred-size")+e;case 6060:return Ae+"box-"+Ye(e,"-grow","")+Ae+e+Le+Ye(e,"grow","positive")+e;case 4554:return Ae+Ye(e,/([^-])(transform)/g,"$1"+Ae+"$2")+e;case 6187:return Ye(Ye(Ye(e,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),e,"")+e;case 5495:case 3959:return Ye(e,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return Ye(Ye(e,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+e+e;case 4200:if(!qe(e,/flex-|baseline/))return Le+"grid-column-align"+Ge(e,t)+e;break;case 2592:case 3360:return Le+Ye(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,qe(e.props,/grid-\w+-end/)}))?~Qe(e+(n=n[t].value),"span",0)?e:Le+Ye(e,"-start","")+e+Le+"grid-row-span:"+(~Qe(n,"span",0)?qe(n,/\d+/):+qe(n,/\d+/)-+qe(e,/\d+/))+";":Le+Ye(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return qe(e.props,/grid-\w+-start/)}))?e:Le+Ye(Ye(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ye(e,/(.+)-inline(.+)/,Ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(45!==Ke(e,t+4))break;case 102:return Ye(e,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+De+(108==Ke(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Qe(e,"stretch",0)?jt(Ye(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Ye(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return Le+n+":"+r+l+(a?Le+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===Ke(e,t+6))return Ye(e,":",":"+Ae)+e;break;case 6444:switch(Ke(e,45===Ke(e,14)?18:11)){case 120:return Ye(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(45===Ke(e,14)?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+Le+"$2box$3")+e;case 100:return Ye(e,":",":"+Le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ye(e,"scroll-","scroll-snap-")+e}return e}function _t(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Be:return void(e.return=jt(e.value,e.length,n));case $e:return Ct([st(e,{value:Ye(e.value,"@","@"+Ae)})],r);case Fe:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(qe(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ut(st(e,{props:[Ye(t,/:(read-\w+)/,":-moz-$1")]})),ut(st(e,{props:[t]})),We(e,{props:et(n,r)});break;case"::placeholder":ut(st(e,{props:[Ye(t,/:(plac\w+)/,":"+Ae+"input-$1")]})),ut(st(e,{props:[Ye(t,/:(plac\w+)/,":-moz-$1")]})),ut(st(e,{props:[Ye(t,/:(plac\w+)/,Le+"input-$1")]})),ut(st(e,{props:[t]})),We(e,{props:et(n,r)})}return""}))}}function zt(e){return vt(Pt("",null,null,null,[""],e=gt(e),0,[0],e))}function Pt(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,p=0,f=0,m=0,h=1,g=1,v=1,b=0,y="",x=a,w=o,S=r,k=y;g;)switch(m=b,b=dt()){case 40:if(108!=m&&58==Ke(k,d-1)){-1!=Qe(k+=Ye(bt(b),"&","&\f"),"&\f",Ue(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=bt(b);break;case 9:case 10:case 13:case 32:k+=yt(m);break;case 92:k+=xt(ft()-1,7);continue;case 47:switch(pt()){case 42:case 47:Ze(Ot(St(dt(),ft()),t,n,s),s);break;default:k+="/"}break;case 123*h:l[u++]=Xe(k)*v;case 125*h:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+c:-1==v&&(k=Ye(k,/\f/g,"")),f>0&&Xe(k)-d&&Ze(f>32?Nt(k+";",r,n,d-1,s):Nt(Ye(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Ze(S=Tt(k,t,n,u,c,a,l,y,x=[],w=[],d,o),o),123===b)if(0===c)Pt(k,t,S,S,x,o,d,l,w);else switch(99===p&&110===Ke(k,3)?100:p){case 100:case 108:case 109:case 115:Pt(e,S,S,r&&Ze(Tt(e,S,S,0,0,a,l,y,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:Pt(k,S,S,S,[""],w,0,l,w)}}u=c=f=0,h=v=1,y=k="",d=i;break;case 58:d=1+Xe(k),f=m;default:if(h<1)if(123==b)--h;else if(125==b&&0==h++&&125==ct())continue;switch(k+=He(b),b*h){case 38:v=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(Xe(k)-1)*v,v=1;break;case 64:45===pt()&&(k+=bt(dt())),p=pt(),c=d=Xe(y=k+=kt(ft())),b++;break;case 45:45===m&&2==Xe(k)&&(h=0)}}return o}function Tt(e,t,n,r,a,o,i,l,s,u,c,d){for(var p=a-1,f=0===a?o:[""],m=Je(f),h=0,g=0,v=0;h<r;++h)for(var b=0,y=Ge(e,p+1,p=Ue(g=i[h])),x=e;b<m;++b)(x=Ve(g>0?f[b]+" "+y:Ye(y,/&\f/g,f[b])))&&(s[v++]=x);return lt(e,t,n,0===a?Fe:l,s,u,c,d)}function Ot(e,t,n,r){return lt(e,t,n,Me,He(ot),Ge(e,2,-2),0,r)}function Nt(e,t,n,r,a){return lt(e,t,n,Be,Ge(e,0,r),Ge(e,r+1,-1),r,a)}var Rt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},It="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Lt="active",Dt="data-styled-version",At="6.1.13",Mt="/*!sc*/\n",Ft="undefined"!=typeof window&&"HTMLElement"in window,Bt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),$t={},Ut=(new Set,Object.freeze([])),Ht=Object.freeze({});function Wt(e,t,n){return void 0===n&&(n=Ht),e.theme!==n.theme&&e.theme||t||n.theme}var Vt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yt=/(^-|-$)/g;function Qt(e){return e.replace(qt,"-").replace(Yt,"")}var Kt=/(a)(d)/gi,Gt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Gt(t%52)+n;return(Gt(t%52)+n).replace(Kt,"$1-$2")}var Jt,Zt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},en=function(e){return Zt(5381,e)};function tn(e){return Xt(en(e)>>>0)}function nn(e){return e.displayName||e.name||"Component"}function rn(e){return"string"==typeof e&&!0}var an="function"==typeof Symbol&&Symbol.for,on=an?Symbol.for("react.memo"):60115,ln=an?Symbol.for("react.forward_ref"):60112,sn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},un={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dn=((Jt={})[ln]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jt[on]=cn,Jt);function pn(e){return("type"in(t=e)&&t.type.$$typeof)===on?cn:"$$typeof"in e?dn[e.$$typeof]:sn;var t}var fn=Object.defineProperty,mn=Object.getOwnPropertyNames,hn=Object.getOwnPropertySymbols,gn=Object.getOwnPropertyDescriptor,vn=Object.getPrototypeOf,bn=Object.prototype;function yn(e,t,n){if("string"!=typeof t){if(bn){var r=vn(t);r&&r!==bn&&yn(e,r,n)}var a=mn(t);hn&&(a=a.concat(hn(t)));for(var o=pn(e),i=pn(t),l=0;l<a.length;++l){var s=a[l];if(!(s in un||n&&n[s]||i&&s in i||o&&s in o)){var u=gn(t,s);try{fn(e,s,u)}catch(e){}}}}return e}function xn(e){return"function"==typeof e}function wn(e){return"object"==typeof e&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function kn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Cn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function En(e,t,n){if(void 0===n&&(n=!1),!n&&!Cn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=En(e[r],t[r]);else if(Cn(t))for(var r in t)e[r]=En(e[r],t[r]);return e}function jn(e,t){Object.defineProperty(e,"toString",{value:t})}function _n(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw _n(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(Mt);return t},e}(),Pn=new Map,Tn=new Map,On=1,Nn=function(e){if(Pn.has(e))return Pn.get(e);for(;Tn.has(On);)On++;var t=On++;return Pn.set(e,t),Tn.set(t,e),t},Rn=function(e,t){On=t+1,Pn.set(e,t),Tn.set(t,e)},In="style[".concat(It,"][").concat(Dt,'="').concat(At,'"]'),Ln=new RegExp("^".concat(It,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Dn=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},An=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Mt),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(Ln);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(Rn(c,u),Dn(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},Mn=function(e){for(var t=document.querySelectorAll(In),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(It)!==Lt&&(An(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Fn(){return n.nc}var Bn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(It,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(It,Lt),r.setAttribute(Dt,At);var i=Fn();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},$n=function(){function e(e){this.element=Bn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw _n(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Un=function(){function e(e){this.element=Bn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Hn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Wn=Ft,Vn={isServer:!Ft,useCSSOMInjection:!Bt},qn=function(){function e(e,t,n){void 0===e&&(e=Ht),void 0===t&&(t={});var r=this;this.options=Oe(Oe({},Vn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ft&&Wn&&(Wn=!1,Mn(this)),jn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Tn.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(It,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(Mt)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return Nn(e)},e.prototype.rehydrate=function(){!this.server&&Ft&&Mn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Oe(Oe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Hn(n):t?new $n(n):new Un(n)}(this.options),new zn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Nn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Nn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Nn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yn=/&/g,Qn=/^\s*\/\/.*$/gm;function Kn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Kn(e.children,t)),e}))}function Gn(e){var t,n,r,a=void 0===e?Ht:e,o=a.options,i=void 0===o?Ht:o,l=a.plugins,s=void 0===l?Ut:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===Fe&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Yn,n).replace(r,u))})),i.prefix&&c.push(_t),c.push(Et);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Qn,""),u=zt(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(u=Kn(u,i.namespace));var d,p=[];return Ct(u,function(e){var t=Je(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce((function(e,t){return t.name||_n(15),Zt(e,t.name)}),5381).toString():"",d}var Xn=new qn,Jn=Gn(),Zn=t.createContext({shouldForwardProp:void 0,styleSheet:Xn,stylis:Jn}),er=(Zn.Consumer,t.createContext(void 0));function tr(){return(0,t.useContext)(Zn)}function nr(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],o=tr().styleSheet,i=(0,t.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,t.useMemo)((function(){return Gn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Ie()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return t.createElement(Zn.Provider,{value:s},t.createElement(er.Provider,{value:l},e.children))}var rr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Jn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,jn(this,(function(){throw _n(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Jn),this.name+e.hash},e}(),ar=function(e){return e>="A"&&e<="Z"};function or(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;ar(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ir=function(e){return null==e||!1===e||""===e},lr=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!ir(o)&&(Array.isArray(o)&&o.isCss||xn(o)?r.push("".concat(or(a),":"),o,";"):Cn(o)?r.push.apply(r,Ne(Ne(["".concat(a," {")],lr(o),!1),["}"],!1)):r.push("".concat(or(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Rt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function sr(e,t,n,r){return ir(e)?[]:wn(e)?[".".concat(e.styledComponentId)]:xn(e)?!xn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:sr(e(t),t,n,r):e instanceof rr?n?(e.inject(n,r),[e.getName(r)]):[e]:Cn(e)?lr(e):Array.isArray(e)?Array.prototype.concat.apply(Ut,e.map((function(e){return sr(e,t,n,r)}))):[e.toString()];var a}function ur(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xn(n)&&!wn(n))return!1}return!0}var cr=en(At),dr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ur(e),this.componentId=t,this.baseHash=Zt(cr,t),this.baseStyle=n,qn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Sn(r,this.staticRulesId);else{var a=kn(sr(this.rules,e,t,n)),o=Xt(Zt(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=Sn(r,o),this.staticRulesId=o}else{for(var l=Zt(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=kn(sr(c,e,t,n));l=Zt(l,d+u),s+=d}}if(s){var p=Xt(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=Sn(r,p)}}return r},e}(),pr=t.createContext(void 0);pr.Consumer;var fr={};new Set;function mr(e,n,r){var a=wn(e),o=e,i=!rn(e),l=n.attrs,s=void 0===l?Ut:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Qt(e);fr[n]=(fr[n]||0)+1;var r="".concat(n,"-").concat(tn(At+n+fr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,p=void 0===d?function(e){return rn(e)?"styled.".concat(e):"Styled(".concat(nn(e),")")}(e):d,f=n.displayName&&n.componentId?"".concat(Qt(n.displayName),"-").concat(n.componentId):n.componentId||c,m=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,h=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;h=function(e,t){return g(e,t)&&v(e,t)}}else h=g}var b=new dr(r,f,a?o.componentStyle:void 0);function y(e,n){return function(e,n,r){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=t.useContext(pr),d=tr(),p=e.shouldForwardProp||d.shouldForwardProp,f=Wt(n,c,i)||Ht,m=function(e,t,n){for(var r,a=Oe(Oe({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=xn(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?Sn(a[l],i[l]):"style"===l?Oe(Oe({},a[l]),i[l]):i[l]}return t.className&&(a.className=Sn(a.className,t.className)),a}(a,n,f),h=m.as||u,g={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===f||("forwardedAs"===v?g.as=m.forwardedAs:p&&!p(v,h)||(g[v]=m[v]));var b=function(e,t){var n=tr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),y=Sn(l,s);return b&&(y+=" "+b),m.className&&(y+=" "+m.className),g[rn(h)&&!Vt.has(h)?"class":"className"]=y,g.ref=r,(0,t.createElement)(h,g)}(x,e,n)}y.displayName=p;var x=t.forwardRef(y);return x.attrs=m,x.componentStyle=b,x.displayName=p,x.shouldForwardProp=h,x.foldedComponentIds=a?Sn(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=f,x.target=a?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)En(e,a[r],!0);return e}({},o.defaultProps,e):e}}),jn(x,(function(){return".".concat(x.styledComponentId)})),i&&yn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function hr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var gr=function(e){return Object.assign(e,{isCss:!0})};function vr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(xn(e)||Cn(e))return gr(sr(hr(Ut,Ne([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?sr(r):gr(sr(hr(r,t)))}function br(e,t,n){if(void 0===n&&(n=Ht),!t)throw _n(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,vr.apply(void 0,Ne([r],a,!1)))};return r.attrs=function(r){return br(e,t,Oe(Oe({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return br(e,t,Oe(Oe({},n),r))},r}var yr=function(e){return br(mr,e)},xr=yr;Vt.forEach((function(e){xr[e]=yr(e)}));var wr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ur(e),qn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(kn(sr(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&qn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Sr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=kn(vr.apply(void 0,Ne([e],t,!1))),a=tn(r);return new rr(a,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Fn(),r=kn([n&&'nonce="'.concat(n,'"'),"".concat(It,'="true"'),"".concat(Dt,'="').concat(At,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw _n(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw _n(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[It]="",n[Dt]=At,n.dangerouslySetInnerHTML={__html:r},n),o=Fn();return o&&(a.nonce=o),[t.createElement("style",Oe({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new qn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw _n(2);return t.createElement(nr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw _n(3)}})(),"__sc-".concat(It,"__");const kr=n.p+"static/media/logo.3ed23c80d2905d88db1d.png";var Cr=n(579);const Er=(0,t.createContext)(),jr={items:[]};function _r(e,t){switch(t.type){case"ADD_ITEM":const{id:n,name:r,price:a,customizations:o}=t.payload,i=e.items.findIndex((e=>e.id===n&&((e,t)=>{if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let a of n)if(e[a].sort().join(",")!==t[a].sort().join(","))return!1;return!0})(e.customizations,o)));if(-1!==i){const t=[...e.items];return t[i].quantity+=1,{...e,items:t}}return{...e,items:[...e.items,{id:n,name:r,price:a,quantity:1,customizations:o}]};case"REMOVE_ITEM":return{...e,items:e.items.filter(((e,n)=>n!==t.payload))};case"INCREASE_QUANTITY":return{...e,items:e.items.map(((e,n)=>n===t.payload?{...e,quantity:e.quantity+1}:e))};case"DECREASE_QUANTITY":return{...e,items:e.items.map(((e,n)=>n===t.payload?{...e,quantity:e.quantity-1}:e)).filter((e=>e.quantity>0))};case"CLEAR_CART":return jr;case"UPDATE_CUSTOMIZATIONS":const{index:l,newCustomizations:s}=t.payload,u=[...e.items];return u[l].customizations=s,{...e,items:u};default:return e}}const zr=e=>{let{children:n}=e;const[r,a]=(0,t.useReducer)(_r,jr);return(0,Cr.jsx)(Er.Provider,{value:{items:r.items,addItem:e=>{a({type:"ADD_ITEM",payload:e})},removeItem:e=>{a({type:"REMOVE_ITEM",payload:e})},increaseQuantity:e=>{a({type:"INCREASE_QUANTITY",payload:e})},decreaseQuantity:e=>{a({type:"DECREASE_QUANTITY",payload:e})},clearCart:()=>{a({type:"CLEAR_CART"})},updateCustomizations:(e,t)=>{a({type:"UPDATE_CUSTOMIZATIONS",payload:{index:e,newCustomizations:t}})}},children:n})};var Pr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tr=t.createContext&&t.createContext(Pr),Or=["attr","size","title"];function Nr(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Rr(){return Rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rr.apply(this,arguments)}function Ir(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Lr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ir(Object(n),!0).forEach((function(t){Dr(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ir(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Dr(e,t,n){return t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ar(e){return e&&e.map(((e,n)=>t.createElement(e.tag,Lr({key:n},e.attr),Ar(e.child))))}function Mr(e){return n=>t.createElement(Fr,Rr({attr:Lr({},e.attr)},n),Ar(e.child))}function Fr(e){var n=n=>{var r,{attr:a,size:o,title:i}=e,l=Nr(e,Or),s=o||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",Rr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:r,style:Lr(Lr({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&t.createElement("title",null,i),e.children)};return void 0!==Tr?t.createElement(Tr.Consumer,null,(e=>n(e))):n(Pr)}function Br(e){return Mr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function $r(e){return Mr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Ur(e){return Mr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"},child:[]}]})(e)}function Hr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(e)}function Wr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}function Vr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function qr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z"},child:[]}]})(e)}function Yr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L224 271.64V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40h-56V271.64L502.05 57.6zM443.77 48l-48 48H116.24l-48-48h375.53z"},child:[]}]})(e)}function Qr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"},child:[]}]})(e)}function Kr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function Gr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function Xr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)}function Jr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"},child:[]}]})(e)}function Zr(e){return Mr({tag:"svg",attr:{viewBox:"0 0 536 512"},child:[{tag:"path",attr:{d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"},child:[]}]})(e)}function ea(e){return Mr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function ta(e){return Mr({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function na(e){return Mr({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function ra(e){return Mr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M507.31 72.57L439.43 4.69c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l-76.67 76.67c-46.58-19.7-102.4-10.73-140.37 27.23L18.75 312.23c-24.99 24.99-24.99 65.52 0 90.51l90.51 90.51c24.99 24.99 65.52 24.99 90.51 0l158.39-158.39c37.96-37.96 46.93-93.79 27.23-140.37l76.67-76.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.24-6.24 6.24-16.37-.01-22.62zM179.22 423.29l-90.51-90.51 122.04-122.04 90.51 90.51-122.04 122.04z"},child:[]}]})(e)}function aa(e){return Mr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"},child:[]}]})(e)}const oa=Sr`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ia=xr.header`
  background-color: #333;
  color: #f5f5f5;
  padding: 4px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  animation: ${oa} 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 4px 15px;
  }
`,la=xr(ze)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`,sa=xr.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 20px;

    /* Default styles for larger screens */
    li a,
    li button {
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      color: #f5f5f5;
      border: 2px solid #4a90e2;
      border-radius: 20px;
      background-color: transparent;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 0 15px; /* Adjusted padding for better fit */
      height: 45px;
      min-width: 120px; /* Added consistent button width for larger screens */

      &:hover {
        background-color: #4a90e2;
        color: #333;
        transform: translateY(-3px);
      }

      &:focus {
        outline: none;
      }
    }

    /* Responsive styles for smaller screens */
    @media (max-width: 768px) {
      flex-direction: column;
      background-color: #333;
      position: absolute;
      top: 70px;
      right: 20px;
      width: 200px; /* Adjusted width for dropdown menu */
      max-height: ${e=>{let{isOpen:t}=e;return t?"500px":"0"}}; /* Allow enough space for items */
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
      z-index: 99;
      padding: ${e=>{let{isOpen:t}=e;return t?"10px":"0"}}; /* Add padding only when open */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      border-radius: 8px;

      li a,
      li button {
        width: 100%; /* Full-width buttons for mobile */
        margin: 5px auto; /* Center buttons */
      }
    }
  }
`,ua=xr.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.2rem;
    color: #f5f5f5;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #4a90e2;
    }

    .cart-count {
      position: absolute;
      top: -8px;
      right: -12px;
      background-color: #ff4d4d;
      color: #fff;
      border-radius: 50%;
      padding: 2px 6px;
      font-size: 0.7rem;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    position: relative;
  }
`,ca=xr.button`
  display: none;
  background: none;
  border: none;
  color: #f5f5f5;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: 10px; /* Aligns button neatly */
  }
`,da=()=>{const{items:e}=(0,t.useContext)(Er),n=J(),[r,a]=(0,t.useState)(!1),o=e.reduce(((e,t)=>e+t.quantity),0);return(0,Cr.jsxs)(ia,{children:[(0,Cr.jsxs)(la,{to:"/",children:[(0,Cr.jsx)("img",{src:kr,alt:"Restaurant Logo",loading:"lazy"}),(0,Cr.jsx)("h1",{children:"Skip The Server"})]}),(0,Cr.jsx)(ca,{onClick:()=>a(!r),children:r?(0,Cr.jsx)(ta,{}):(0,Cr.jsx)($r,{})}),(0,Cr.jsx)(sa,{isOpen:r,children:(0,Cr.jsxs)("ul",{children:[(0,Cr.jsx)("li",{children:(0,Cr.jsx)(ze,{to:"/menu",children:"Menu"})}),(0,Cr.jsx)("li",{children:(0,Cr.jsx)(ze,{to:"/about",children:"About Us"})}),(0,Cr.jsx)("li",{children:(0,Cr.jsx)(ze,{to:"/contact",children:"Contact"})}),(0,Cr.jsx)("li",{children:(0,Cr.jsx)("button",{onClick:()=>{n("/order-status")},children:"Track Order"})}),(0,Cr.jsx)("li",{children:(0,Cr.jsx)("button",{className:"request-services",onClick:()=>{n("/request-services")},children:"Services"})})]})}),(0,Cr.jsx)(ua,{children:(0,Cr.jsxs)(ze,{to:"/checkout","aria-label":"Proceed to Checkout",children:[(0,Cr.jsx)(Xr,{}),o>0&&(0,Cr.jsx)("span",{className:"cart-count",children:o})]})})]})},pa=xr.footer`
  text-align: center;
  padding: 20px;
  background: #333;
  color: #f5f5f5;
  font-size: 0.8rem;

  a {
    color: #4a90e2;
    text-decoration: none;
  }

  a:hover {
    color: #f5f5f5;
  }

  @media (max-width: 768px) {
    font-size: clamp(0.7rem, 1.5vw, 0.8rem);
    padding: 15px;
  }
`,fa=()=>(0,Cr.jsx)(pa,{children:(0,Cr.jsxs)("p",{children:["\xa9 2024 Skip The Server. Crafted with \u2764\ufe0f by"," ",(0,Cr.jsx)("a",{href:"https://yourteamwebsite.com",target:"_blank",rel:"noopener noreferrer",children:"Your Team"}),"."]})}),ma=xr.div`
  padding: 40px 20px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #ff4d4d;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;class ha extends t.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error:",e,t)}render(){return this.state.hasError?(0,Cr.jsxs)(ma,{children:[(0,Cr.jsx)("h1",{children:"Something Went Wrong."}),(0,Cr.jsx)("p",{children:"We're sorry for the inconvenience. Please try refreshing the page."})]}):this.props.children}}const ga=ha;const va=n.p+"static/media/coolbackground.63295083ea39e4f991d370f20aba4a9c.svg",ba=xr.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #357ab8;
    outline-offset: 2px;
  }
`,ya=()=>{const e=J(),t=window.history.length>1;return(0,Cr.jsxs)(ba,{onClick:()=>{window.history.length>1?e(-1):e("/")},disabled:!t,"aria-label":"Go Back",children:[(0,Cr.jsx)(Br,{})," ","Back"]})},xa=Sr`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,wa=xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: url(${va}) no-repeat center center;
  background-size: cover;
  color: #f5f5f5;
  animation: ${xa} 1.5s ease;
  padding: 20px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    margin-bottom: 30px;
    max-width: 500px;
  }

  .button-container {
    display: flex;
    gap: 15px;

    button {
      padding: 1.5% 4%;
      font-size: clamp(0.9rem, 2vw, 1rem);
      background-color: #4a90e2;
      border: none;
      border-radius: 8px;
      color: #f5f5f5;
      cursor: pointer;
      transition: transform 0.3s ease, background-color 0.3s ease,
        box-shadow 0.3s ease;
      width: auto;
      min-width: 150px;
      max-width: 250px;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

      &:hover {
        background-color: #333;
        color: #f5f5f5;
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
      }

      &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
    }

    .button-container {
      flex-direction: column;
      gap: 10px;

      button {
        padding: 4% 6%;
        font-size: 0.9rem;
        min-width: 100px;
        max-width: 200px;
      }
    }
  }
`,Sa=()=>{const e=J();return(0,Cr.jsxs)(wa,{children:[(0,Cr.jsx)("h1",{children:"Welcome to Skip The Server!"}),(0,Cr.jsx)("p",{children:"Savor chef-crafted dishes made with the freshest ingredients. Enjoy a seamless online ordering experience."}),(0,Cr.jsxs)("div",{className:"button-container",children:[(0,Cr.jsx)("button",{onClick:()=>e("/menu"),"aria-label":"Start Order",children:"Start Order"}),(0,Cr.jsx)("button",{onClick:()=>e("/about"),"aria-label":"Learn More",children:"Learn More"})]})]})},ka=n.p+"static/media/avocadotoast.a407bf3dd77e7e47d2bd.webp",Ca=n.p+"static/media/beer.9ec63d8bc17900a9fb10.webp",Ea=n.p+"static/media/breakfastburrito.fde7ddcfaa146ec6d41a.webp",ja=n.p+"static/media/caesarsalad.09094dd4838515e60c53.jpeg",_a=n.p+"static/media/cheesecake.2909fb2464e6023aa6d4.webp",za=n.p+"static/media/chocolatecake.e5cbb8d7b1a3ad919d0a.webp",Pa=n.p+"static/media/garlicbread.d9ef5ef2adcc22901e91.webp",Ta=n.p+"static/media/icedtea.0f5f519341ff6503e1e0.webp",Oa=n.p+"static/media/lemonade.e6a30fff45a737d7e76e.webp",Na=n.p+"static/media/margarita.cf1aba547205a5bb6e01.webp",Ra=n.p+"static/media/mojito.c14140d1d971570e0f8b.webp",Ia=n.p+"static/media/omelette.9abef29835119a40363d.jpg",La=n.p+"static/media/pancakes.525f0b02a0460ba722bf.webp",Da=n.p+"static/media/pepsi.33a1ac257fd277d3e0f9.webp",Aa=n.p+"static/media/redwine.c68f645b19ed551919bc.webp",Ma=n.p+"static/media/rootbeer.255982371aeed3de177d.webp",Fa=n.p+"static/media/salmon.4e8a8c0d707b7d6e9319.jpeg",Ba=n.p+"static/media/smoothie.01f2790550d7a5b70682.webp",$a=n.p+"static/media/spaghetti.0503d745b235dea087e0.webp",Ua=n.p+"static/media/steakfrites.220749ea242a8840d509.webp",Ha=n.p+"static/media/stuffedmushrooms.8020fa023b25d3c85ac8.webp",Wa=n.p+"static/media/sundae.1555646d54754e3e759b.webp",Va=n.p+"static/media/whitewine.6b1c265ca5a62415b8c4.webp",qa=n.p+"static/media/wings.352bd2b76b3f707368bf.webp",Ya=n.p+"static/media/cocacola.15fa322f927af687dc41.webp",Qa=n.p+"static/media/7up.41595b1c1cdc125cc495.webp",Ka=[{id:1,name:"Avocado Toast",category:"Food",price:12.99,popularity:95,rating:4.5,numReviews:150,image:ka,tags:["Breakfast","Vegan"],description:"Deliciously creamy avocado spread generously on perfectly toasted sourdough bread, garnished with fresh tomatoes, red pepper flakes, and chives for an extra burst of flavor.",customizations:[{name:"Toppings",options:["Tomatoes","Red Pepper Flakes","Chives","Extra Avocado"],removable:!0}]},{id:0,name:"Pizza",category:"Food",price:14.99,popularity:95,rating:4.5,numReviews:150,image:n.p+"static/media/pizza.9b03d680b9e43844f463.webp",tags:["Lunch","Dinner"],description:"Classic pepperoni pizza with a golden, crispy crust, topped with melted mozzarella cheese, pepperoni slices, and a vibrant tomato sauce. Perfect for a satisfying lunch or dinner.",customizations:[{name:"Toppings",options:["Extra Cheese","Pepperoni","Mushrooms","Olives","Onions","Green Peppers"],removable:!0}]},{id:2,name:"Breakfast Burrito",category:"Food",price:9.99,popularity:90,rating:4.7,numReviews:200,image:Ea,tags:["Breakfast","Spicy"],description:"A hearty flour tortilla filled with fluffy scrambled eggs, melted cheese, savory salsa, and your choice of fillings, perfect for a satisfying start to your day.",customizations:[{name:"Fillings",options:["Beans","Cheese","Ham","Bell Peppers","Onions"],removable:!0},{name:"Salsa Level",options:["Mild","Medium","Hot"],removable:!1}]},{id:3,name:"Caesar Salad",category:"Food",price:10.99,popularity:80,rating:4.3,numReviews:120,image:ja,tags:["Lunch","Vegetarian"],description:"Crisp romaine lettuce tossed in our signature Caesar dressing, topped with crunchy croutons and freshly grated Parmesan cheese for a classic and refreshing meal.",customizations:[{name:"Add-ons",options:["Grilled Chicken","Parmesan Cheese","Bacon Bits"],removable:!1},{name:"Croutons",options:["With Croutons","No Croutons"],removable:!0}]},{id:4,name:"Garlic Bread",category:"Food",price:5.49,popularity:85,rating:4.6,numReviews:180,image:Pa,tags:["Appetizer","Vegetarian"],description:"Warm, toasted bread generously slathered with garlic butter and herbs, creating a savory side that pairs perfectly with any meal.",customizations:[{name:"Additional Toppings",options:["Cheese","Extra Garlic","Herbs"],removable:!0}]},{id:5,name:"Omelette",category:"Food",price:7.99,popularity:88,rating:4.4,numReviews:160,image:Ia,tags:["Breakfast"],description:"A fluffy three-egg omelette filled with your choice of fresh ingredients, including cheese, mushrooms, ham, spinach, and onions, cooked to perfection.",customizations:[{name:"Fillings",options:["Cheese","Mushrooms","Ham","Spinach","Onions"],removable:!0}]},{id:6,name:"Pancakes",category:"Food",price:8.49,popularity:89,rating:4.8,numReviews:220,image:La,tags:["Breakfast","Sweet"],description:"Fluffy golden pancakes stacked high and served with rich maple syrup and creamy butter, offering a delightful sweet start to your morning.",customizations:[{name:"Toppings",options:["Fresh Berries","Chocolate Chips","Whipped Cream","Bananas"],removable:!0},{name:"Extra Syrup",options:["Yes","No"],removable:!1}]},{id:7,name:"Salmon",category:"Food",price:18.99,popularity:92,rating:4.9,numReviews:250,image:Fa,tags:["Dinner","Gluten-Free"],description:"Premium grilled salmon fillet drizzled with a zesty lemon butter sauce, served alongside your choice of steamed vegetables, rice, or mashed potatoes.",customizations:[{name:"Sauce",options:["Lemon Butter","Teriyaki","Garlic Herb"],removable:!1},{name:"Side Dishes",options:["Steamed Vegetables","Rice","Mashed Potatoes"],removable:!1}]},{id:8,name:"Spaghetti",category:"Food",price:12.49,popularity:87,rating:4.5,numReviews:190,image:$a,tags:["Lunch","Spicy"],description:"Classic spaghetti noodles smothered in our homemade marinara sauce, with an option to add meatballs or grilled chicken for a protein-packed meal.",customizations:[{name:"Sauce",options:["Marinara","Alfredo","Pesto"],removable:!1},{name:"Protein",options:["Meatballs","Grilled Chicken","None"],removable:!1}]},{id:9,name:"Steak Frites",category:"Food",price:19.99,popularity:98,rating:4.9,numReviews:300,image:Ua,tags:["Dinner","Gluten-Free"],description:"Juicy grilled steak cooked to your preferred doneness, served with a side of crispy golden french fries and your choice of seasoning.",customizations:[{name:"Seasoning",options:["Salt","Pepper","Garlic"],removable:!0},{name:"Steak Doneness",options:["Rare","Medium Rare","Medium","Well Done"],removable:!1}]},{id:10,name:"Stuffed Mushrooms",category:"Food",price:8.99,popularity:81,rating:4.2,numReviews:130,image:Ha,tags:["Appetizer","Vegetarian"],description:"Plump mushrooms stuffed with a savory mixture of cheeses and herbs, baked to golden perfection for a delightful appetizer.",customizations:[{name:"Cheese Type",options:["Parmesan","Mozzarella","Goat Cheese"],removable:!1}]},{id:11,name:"Wings",category:"Food",price:10.99,popularity:86,rating:4.7,numReviews:210,image:qa,tags:["Appetizer","Spicy"],description:"Tender and juicy chicken wings tossed in your choice of flavorful sauces, served with creamy ranch dressing on the side.",customizations:[{name:"Sauce",options:["Buffalo","BBQ","Honey Mustard","Garlic Parmesan"],removable:!1},{name:"Spiciness Level",options:["Mild","Medium","Hot","Extra Hot"],removable:!1},{name:"Boneless",options:["Yes","No"],removable:!1}]},{id:12,name:"Cheesecake",category:"Desserts",price:6.99,popularity:75,rating:4.6,numReviews:140,image:_a,tags:["Sweet"],description:"Rich and creamy cheesecake nestled on a buttery graham cracker crust, topped with your choice of fresh berries, chocolate sauce, or caramel.",customizations:[{name:"Crust Type",options:["Graham Cracker","Chocolate","Oreo"],removable:!1},{name:"Toppings",options:["Fresh Berries","Chocolate Sauce","Caramel","Nuts"],removable:!0},{name:"Extra Slice",options:["Yes","No"],removable:!1}]},{id:12,name:"Kunafa",category:"Desserts",price:12.99,popularity:90,rating:4.8,numReviews:200,image:n.p+"static/media/kunafa.a62addc2b9b2d6e71a3d.webp",tags:["Sweet"],description:"A traditional Middle Eastern dessert made with thin, crispy shredded phyllo dough, filled with sweet cheese or cream, and soaked in a fragrant sugar syrup. Topped with crushed pistachios for a perfect finishing touch.",customizations:[{name:"Filling Type",options:["Sweet Cheese","Cream"],removable:!1},{name:"Toppings",options:["Crushed Pistachios","Extra Syrup","Rose Petals"],removable:!0},{name:"Serving Size",options:["Regular","Extra Large"],removable:!1}]},{id:13,name:"Chocolate Cake",category:"Desserts",price:6.99,popularity:80,rating:4.8,numReviews:170,image:za,tags:["Sweet"],description:"Decadent chocolate cake layered with rich chocolate frosting, perfect for chocolate lovers seeking an indulgent treat.",customizations:[{name:"Frosting Type",options:["Milk Chocolate","Dark Chocolate","White Chocolate"],removable:!1},{name:"Extra Layers",options:["Yes","No"],removable:!1},{name:"Toppings",options:["Sprinkles","Cherry","Whipped Cream"],removable:!0}]},{id:14,name:"Sundae",category:"Desserts",price:4.99,popularity:70,rating:4.3,numReviews:110,image:Wa,tags:["Sweet"],description:"Classic vanilla ice cream topped with your choice of decadent sauces, crunchy marshmallows, and Oreo crumbles for a delightful dessert experience.",customizations:[{name:"Toppings",options:["Caramel Sauce","Strawberry Sauce","Marshmallows","Oreo Crumbles"],removable:!0},{name:"Extra Scoop",options:["Yes","No"],removable:!1},{name:"Whipped Cream",options:["Yes","No"],removable:!0}]},{id:15,name:"Beer",category:"Drinks",price:4.99,popularity:85,rating:4.5,numReviews:190,image:Ca,tags:["Alcoholic"],description:"A diverse selection of local and imported beers, ranging from crisp lagers to robust stouts, perfect for any beer enthusiast.",customizations:[{name:"Type",options:["Lager","Ale","IPA","Stout","Pilsner"],removable:!1},{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1},{name:"Add Lemon",options:["Yes","No"],removable:!1}]},{id:16,name:"Iced Tea",category:"Drinks",price:3.99,popularity:70,rating:4,numReviews:90,image:Ta,tags:["Non-Alcoholic","Sweet"],description:"Refreshing iced tea brewed daily, available in various sweetness levels and enhanced with a slice of lemon for added zest.",customizations:[{name:"Sweetness Level",options:["Unsweetened","Less Sweet","Regular"],removable:!1},{name:"Add Lemon",options:["Yes","No"],removable:!1},{name:"Ice Level",options:["No Ice","Less Ice","Regular Ice","Extra Ice"],removable:!1}]},{id:17,name:"Lemonade",category:"Drinks",price:3.49,popularity:72,rating:4.4,numReviews:100,image:Oa,tags:["Non-Alcoholic","Sweet"],description:"Homemade lemonade infused with a hint of fresh mint, customizable in sweetness and size to perfectly quench your thirst.",customizations:[{name:"Sweetness Level",options:["Less Sweet","Regular","Extra Sweet"],removable:!1},{name:"Add Mint",options:["Yes","No"],removable:!1},{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1}]},{id:18,name:"Margarita",category:"Drinks",price:8.99,popularity:90,rating:4.7,numReviews:220,image:Na,tags:["Alcoholic"],description:"Classic margarita crafted with fresh lime juice and premium tequila, available in various flavors and sizes to suit your preference.",customizations:[{name:"Salt Rim",options:["Yes","No"],removable:!1},{name:"Flavor",options:["Classic","Strawberry","Mango","Peach"],removable:!1},{name:"Size",options:["Regular (12oz)","Large (16oz)"],removable:!1}]},{id:19,name:"Mojito",category:"Drinks",price:7.99,popularity:88,rating:4.6,numReviews:180,image:Ra,tags:["Alcoholic"],description:"A refreshing blend of premium rum, fresh mint leaves, and zesty lime, customizable in flavor and sweetness to your liking.",customizations:[{name:"Flavor",options:["Classic","Strawberry","Blueberry","Pineapple"],removable:!1},{name:"Sweetness Level",options:["Less Sweet","Regular","Extra Sweet"],removable:!1},{name:"Size",options:["Regular (12oz)","Large (16oz)"],removable:!1}]},{id:20,name:"Pepsi",category:"Drinks",price:2.99,popularity:60,rating:3.8,numReviews:80,image:Da,tags:["Non-Alcoholic"],description:"Chilled can of Pepsi, a classic carbonated soft drink that pairs well with any meal or snack.",customizations:[{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1},{name:"Ice Level",options:["No Ice","Less Ice","Regular Ice","Extra Ice"],removable:!1}]},{id:21,name:"Red Wine",category:"Drinks",price:9.99,popularity:95,rating:4.9,numReviews:300,image:Aa,tags:["Alcoholic"],description:"A curated selection of fine red wines from renowned vineyards around the world, available by the bottle or glass with options for vintage and size.",customizations:[{name:"Bottle or Glass",options:["Bottle","Glass"],removable:!1},{name:"Vintage",options:["2018","2019","2020","2021"],removable:!1},{name:"Size",options:["Standard (750ml)","Half Bottle (375ml)"],removable:!1}]},{id:22,name:"Root Beer",category:"Drinks",price:3.49,popularity:65,rating:4.1,numReviews:95,image:Ma,tags:["Non-Alcoholic","Sweet"],description:"Classic root beer served chilled, offering a sweet and creamy flavor that's perfect for any occasion.",customizations:[{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1},{name:"Ice Level",options:["No Ice","Less Ice","Regular Ice","Extra Ice"],removable:!1},{name:"Add Cream",options:["Yes","No"],removable:!1}]},{id:23,name:"Smoothie",category:"Drinks",price:5.99,popularity:85,rating:4.5,numReviews:160,image:Ba,tags:["Non-Alcoholic","Sweet","Vegetarian"],description:"Fruit smoothie made with fresh ingredients, available in a variety of flavors and customizable with optional protein additions for an extra boost.",customizations:[{name:"Flavor",options:["Strawberry","Mango","Blueberry","Green","Banana"],removable:!1},{name:"Add Protein",options:["Yes","No"],removable:!1},{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1}]},{id:24,name:"White Wine",category:"Drinks",price:8.99,popularity:92,rating:4.8,numReviews:240,image:Va,tags:["Alcoholic"],description:"A premium selection of white wines from various regions, available by the bottle or glass with options for vintage and size to suit your preference.",customizations:[{name:"Bottle or Glass",options:["Bottle","Glass"],removable:!1},{name:"Vintage",options:["2018","2019","2020","2021"],removable:!1},{name:"Size",options:["Standard (750ml)","Half Bottle (375ml)"],removable:!1}]},{id:25,name:"Coca Cola",category:"Drinks",price:4.99,popularity:92,rating:4.8,numReviews:240,image:Ya,tags:["Non-Alcoholic"],description:"Chilled can or glass of Coca-Cola, a classic carbonated soft drink that pairs well with any meal or snack.",customizations:[{name:"Can or Glass",options:["Can","Glass"],removable:!1},{name:"Size",options:["Standard (750ml)","Half Bottle (375ml)"],removable:!1}]},{id:26,name:"7 Up",category:"Drinks",price:4.99,popularity:92,rating:4.8,numReviews:240,image:Qa,tags:["Non-Alcoholic"],description:"Chilled can or glass of 7Up, a classic carbonated soft drink that pairs well with any meal or snack.",customizations:[{name:"Can or Glass",options:["Can","Glass"],removable:!1},{name:"Size",options:["Standard (750ml)","Half Bottle (375ml)"],removable:!1}]}],Ga=n.p+"static/media/fallback.50d024375441c952b303.png";function Xa(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Xa(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const Ja=function(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Xa(e))&&(r&&(r+=" "),r+=t);return r},Za=e=>"number"==typeof e&&!isNaN(e),eo=e=>"string"==typeof e,to=e=>"function"==typeof e,no=e=>eo(e)||to(e)?e:null,ro=e=>(0,t.isValidElement)(e)||eo(e)||to(e)||Za(e);function ao(e){let{enter:n,exit:r,appendPosition:a=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(e){let{children:l,position:s,preventExitTransition:u,done:c,nodeRef:d,isIn:p,playToast:f}=e;const m=a?`${n}--${s}`:n,h=a?`${r}--${s}`:r,g=(0,t.useRef)(0);return(0,t.useLayoutEffect)((()=>{const e=d.current,t=m.split(" "),n=r=>{r.target===d.current&&(f(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,t.useEffect)((()=>{const e=d.current,t=()=>{e.removeEventListener("animationend",t),o?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:r,style:a}=e;requestAnimationFrame((()=>{a.minHeight="initial",a.height=r+"px",a.transition=`all ${n}ms`,requestAnimationFrame((()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,c,i):c()};p||(u?t():(g.current=1,e.className+=` ${h}`,e.addEventListener("animationend",t)))}),[p]),t.createElement(t.Fragment,null,l)}}function oo(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const io=new Map;let lo=[];const so=new Set,uo=e=>so.forEach((t=>t(e))),co=()=>io.size>0;function po(e,t){var n;if(t)return!(null==(n=io.get(t))||!n.isToastActive(e));let r=!1;return io.forEach((t=>{t.isToastActive(e)&&(r=!0)})),r}function fo(e,t){ro(e)&&(co()||lo.push({content:e,options:t}),io.forEach((n=>{n.buildToast(e,t)})))}function mo(e,t){io.forEach((n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)}))}function ho(e){const{subscribe:n,getSnapshot:r,setProps:a}=(0,t.useRef)(function(e){const n=e.containerId||1;return{subscribe(r){const a=function(e,n,r){let a=1,o=0,i=[],l=[],s=[],u=n;const c=new Map,d=new Set,p=()=>{s=Array.from(c.values()),d.forEach((e=>e()))},f=e=>{l=null==e?[]:l.filter((t=>t!==e)),p()},m=e=>{const{toastId:n,onOpen:a,updateId:o,children:i}=e.props,s=null==o;e.staleId&&c.delete(e.staleId),c.set(n,e),l=[...l,e.props.toastId].filter((t=>t!==e.staleId)),p(),r(oo(e,s?"added":"updated")),s&&to(a)&&a((0,t.isValidElement)(i)&&i.props)};return{id:e,props:u,observe:e=>(d.add(e),()=>d.delete(e)),toggle:(e,t)=>{c.forEach((n=>{null!=t&&t!==n.props.toastId||to(n.toggle)&&n.toggle(e)}))},removeToast:f,toasts:c,clearQueue:()=>{o-=i.length,i=[]},buildToast:(n,l)=>{if((t=>{let{containerId:n,toastId:r,updateId:a}=t;const o=n?n!==e:1!==e,i=c.has(r)&&null==a;return o||i})(l))return;const{toastId:s,updateId:d,data:h,staleId:g,delay:v}=l,b=()=>{f(s)},y=null==d;y&&o++;const x={...u,style:u.toastStyle,key:a++,...Object.fromEntries(Object.entries(l).filter((e=>{let[t,n]=e;return null!=n}))),toastId:s,updateId:d,data:h,closeToast:b,isIn:!1,className:no(l.className||u.toastClassName),bodyClassName:no(l.bodyClassName||u.bodyClassName),progressClassName:no(l.progressClassName||u.progressClassName),autoClose:!l.isLoading&&(w=l.autoClose,S=u.autoClose,!1===w||Za(w)&&w>0?w:S),deleteToast(){const e=c.get(s),{onClose:n,children:a}=e.props;to(n)&&n((0,t.isValidElement)(a)&&a.props),r(oo(e,"removed")),c.delete(s),o--,o<0&&(o=0),i.length>0?m(i.shift()):p()}};var w,S;x.closeButton=u.closeButton,!1===l.closeButton||ro(l.closeButton)?x.closeButton=l.closeButton:!0===l.closeButton&&(x.closeButton=!ro(u.closeButton)||u.closeButton);let k=n;(0,t.isValidElement)(n)&&!eo(n.type)?k=(0,t.cloneElement)(n,{closeToast:b,toastProps:x,data:h}):to(n)&&(k=n({closeToast:b,toastProps:x,data:h}));const C={content:k,props:x,staleId:g};u.limit&&u.limit>0&&o>u.limit&&y?i.push(C):Za(v)?setTimeout((()=>{m(C)}),v):m(C)},setProps(e){u=e},setToggle:(e,t)=>{c.get(e).toggle=t},isToastActive:e=>l.some((t=>t===e)),getSnapshot:()=>s}}(n,e,uo);io.set(n,a);const o=a.observe(r);return lo.forEach((e=>fo(e.content,e.options))),lo=[],()=>{o(),io.delete(n)}},setProps(e){var t;null==(t=io.get(n))||t.setProps(e)},getSnapshot(){var e;return null==(e=io.get(n))?void 0:e.getSnapshot()}}}(e)).current;a(e);const o=(0,t.useSyncExternalStore)(n,r,r);return{getToastToRender:function(t){if(!o)return[];const n=new Map;return e.newestOnTop&&o.reverse(),o.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},isToastActive:po,count:null==o?void 0:o.length}}function go(e){let{delay:n,isRunning:r,closeToast:a,type:o="default",hide:i,className:l,style:s,controlledProgress:u,progress:c,rtl:d,isIn:p,theme:f}=e;const m=i||u&&0===c,h={...s,animationDuration:`${n}ms`,animationPlayState:r?"running":"paused"};u&&(h.transform=`scaleX(${c})`);const g=Ja("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),v=to(l)?l({rtl:d,type:o,defaultClassName:g}):Ja(g,l),b={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{p&&a()}};return t.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},t.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${o}`}),t.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:v,style:h,...b}))}let vo=1;const bo=()=>""+vo++;function yo(e){return e&&(eo(e.toastId)||Za(e.toastId))?e.toastId:bo()}function xo(e,t){return fo(e,t),t.toastId}function wo(e,t){return{...t,type:t&&t.type||e,toastId:yo(t)}}function So(e){return(t,n)=>xo(t,wo(e,n))}function ko(e,t){return xo(e,wo("default",t))}ko.loading=(e,t)=>xo(e,wo("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),ko.promise=function(e,t,n){let r,{pending:a,error:o,success:i}=t;a&&(r=eo(a)?ko.loading(a,n):ko.loading(a.render,{...n,...a}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,a)=>{if(null==t)return void ko.dismiss(r);const o={type:e,...l,...n,data:a},i=eo(t)?{render:t}:t;return r?ko.update(r,{...o,...i}):ko(i.render,{...o,...i}),a},u=to(e)?e():e;return u.then((e=>s("success",i,e))).catch((e=>s("error",o,e))),u},ko.success=So("success"),ko.info=So("info"),ko.error=So("error"),ko.warning=So("warning"),ko.warn=ko.warning,ko.dark=(e,t)=>xo(e,wo("default",{theme:"dark",...t})),ko.dismiss=function(e){!function(e){var t;if(co()){if(null==e||eo(t=e)||Za(t))io.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){const t=io.get(e.containerId);t?t.removeToast(e.id):io.forEach((t=>{t.removeToast(e.id)}))}}else lo=lo.filter((t=>null!=e&&t.options.toastId!==e))}(e)},ko.clearWaitingQueue=function(e){void 0===e&&(e={}),io.forEach((t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()}))},ko.isActive=po,ko.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:r}=t;return null==(n=io.get(r||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:r,content:a}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:bo()};o.toastId!==e&&(o.staleId=e);const i=o.render||a;delete o.render,xo(i,o)}},ko.done=e=>{ko.update(e,{progress:1})},ko.onChange=function(e){return so.add(e),()=>{so.delete(e)}},ko.play=e=>mo(!0,e),ko.pause=e=>mo(!1,e);const Co="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,Eo=e=>{let{theme:n,type:r,isLoading:a,...o}=e;return t.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${r})`,...o})},jo={info:function(e){return t.createElement(Eo,{...e},t.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return t.createElement(Eo,{...e},t.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return t.createElement(Eo,{...e},t.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return t.createElement(Eo,{...e},t.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return t.createElement("div",{className:"Toastify__spinner"})}},_o=e=>{const{isRunning:n,preventExitTransition:r,toastRef:a,eventHandlers:o,playToast:i}=function(e){const[n,r]=(0,t.useState)(!1),[a,o]=(0,t.useState)(!1),i=(0,t.useRef)(null),l=(0,t.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:p}=e;var f,m;function h(){r(!0)}function g(){r(!1)}function v(t){const r=i.current;l.canDrag&&r&&(l.didMove=!0,n&&g(),l.delta="x"===e.draggableDirection?t.clientX-l.start:t.clientY-l.start,l.start!==t.clientX&&(l.canCloseOnClick=!1),r.style.transform=`translate3d(${"x"===e.draggableDirection?`${l.delta}px, var(--y)`:`0, calc(${l.delta}px + var(--y))`},0)`,r.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function b(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",b);const t=i.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(m=io.get((f={id:e.toastId,containerId:e.containerId,fn:r}).containerId||1))||m.setToggle(f.id,f.fn),(0,t.useEffect)((()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",h),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",g)}}),[e.pauseOnFocusLoss]);const y={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){l.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",b);const n=i.current;l.canCloseOnClick=!0,l.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(l.start=t.clientX,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=t.clientY,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){const{top:n,bottom:r,left:a,right:o}=i.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=a&&t.clientX<=o&&t.clientY>=n&&t.clientY<=r?g():h()}};return s&&u&&(y.onMouseEnter=g,e.stacked||(y.onMouseLeave=h)),p&&(y.onClick=e=>{d&&d(e),l.canCloseOnClick&&c()}),{playToast:h,pauseToast:g,isRunning:n,preventExitTransition:a,toastRef:i,eventHandlers:y}}(e),{closeButton:l,children:s,autoClose:u,onClick:c,type:d,hideProgressBar:p,closeToast:f,transition:m,position:h,className:g,style:v,bodyClassName:b,bodyStyle:y,progressClassName:x,progressStyle:w,updateId:S,role:k,progress:C,rtl:E,toastId:j,deleteToast:_,isIn:z,isLoading:P,closeOnClick:T,theme:O}=e,N=Ja("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":T}),R=to(g)?g({rtl:E,position:h,type:d,defaultClassName:N}):Ja(N,g),I=function(e){let{theme:n,type:r,isLoading:a,icon:o}=e,i=null;const l={theme:n,type:r};return!1===o||(to(o)?i=o({...l,isLoading:a}):(0,t.isValidElement)(o)?i=(0,t.cloneElement)(o,l):a?i=jo.spinner():(e=>e in jo)(r)&&(i=jo[r](l))),i}(e),L=!!C||!u,D={closeToast:f,type:d,theme:O};let A=null;return!1===l||(A=to(l)?l(D):(0,t.isValidElement)(l)?(0,t.cloneElement)(l,D):function(e){let{closeToast:n,theme:r,ariaLabel:a="close"}=e;return t.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),n(e)},"aria-label":a},t.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},t.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(D)),t.createElement(m,{isIn:z,done:_,position:h,preventExitTransition:r,nodeRef:a,playToast:i},t.createElement("div",{id:j,onClick:c,"data-in":z,className:R,...o,style:v,ref:a},t.createElement("div",{...z&&{role:k},className:to(b)?b({type:d}):Ja("Toastify__toast-body",b),style:y},null!=I&&t.createElement("div",{className:Ja("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},I),t.createElement("div",null,s)),A,t.createElement(go,{...S&&!L?{key:`pb-${S}`}:{},rtl:E,theme:O,delay:u,isRunning:n,isIn:z,closeToast:f,hide:p,type:d,style:w,className:x,controlledProgress:L,progress:C||0})))},zo=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Po=ao(zo("bounce",!0)),To=(ao(zo("slide",!0)),ao(zo("zoom")),ao(zo("flip")),{position:"top-right",transition:Po,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function Oo(e){let n={...To,...e};const r=e.stacked,[a,o]=(0,t.useState)(!0),i=(0,t.useRef)(null),{getToastToRender:l,isToastActive:s,count:u}=ho(n),{className:c,style:d,rtl:p,containerId:f}=n;function m(e){const t=Ja("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":p});return to(c)?c({position:e,rtl:p,defaultClassName:t}):Ja(t,no(c))}function h(){r&&(o(!0),ko.play())}return Co((()=>{if(r){var e;const t=i.current.querySelectorAll('[data-in="true"]'),r=12,o=null==(e=n.position)?void 0:e.includes("top");let l=0,s=0;Array.from(t).reverse().forEach(((e,t)=>{const n=e;n.classList.add("Toastify__toast--stacked"),t>0&&(n.dataset.collapsed=`${a}`),n.dataset.pos||(n.dataset.pos=o?"top":"bot");const i=l*(a?.2:1)+(a?0:r*t);n.style.setProperty("--y",`${o?i:-1*i}px`),n.style.setProperty("--g",`${r}`),n.style.setProperty("--s",""+(1-(a?s:0))),l+=n.offsetHeight,s+=.025}))}}),[a,u,r]),t.createElement("div",{ref:i,className:"Toastify",id:f,onMouseEnter:()=>{r&&(o(!1),ko.pause())},onMouseLeave:h},l(((e,n)=>{const a=n.length?{...d}:{...d,pointerEvents:"none"};return t.createElement("div",{className:m(e),style:a,key:`container-${e}`},n.map((e=>{let{content:n,props:a}=e;return t.createElement(_o,{...a,stacked:r,collapseAll:h,isIn:s(a.toastId,a.containerId),style:a.style,key:`toast-${a.key}`},n)})))})))}const No=xr.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transform: scale(1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 767px) {
    max-width: 90%;
    margin-bottom: 40px;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: #f9f9f9;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 12px; /* Adds rounded edges */
    }
  }

  .details {
    padding: 15px;
    text-align: left;
    text-align: justify;
    line-height: 1.5;

    h3 {
      font-size: 1.3rem;
      color: #333;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 10px;

      span {
        display: flex;
        align-items: center;
        gap: 4px;
        background-color: #eef2f3;
        color: #4a90e2;
        padding: 4px 8px;
        border-radius: 15px;
        font-size: 0.8rem;
      }
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 10px;

      .stars {
        display: flex;
        align-items: center;
        gap: 2px;
      }

      .num-reviews {
        font-size: 0.8rem;
        color: #666;
      }
    }

    p {
      margin: 5px 0;
      font-size: 0.9rem;
      color: #666;
    }

    .price {
      font-weight: bold;
      font-size: 1.2rem;
      color: #4a90e2;
      margin-top: 10px;
    }
  }
`,Ro=xr.button`
  margin-top: auto;
  padding: 10px 15px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`,Io=xr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Lo=xr.div`
  background: ${e=>{let{theme:t}=e;return t.modalBg||"#fff"}};
  padding: 30px;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius||"10px"}};
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
  position: relative;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    margin-top: 0;
    color: #333;
  }

  .customization-options {
    margin: 20px 0;
    text-align: left;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #333;

    input {
      margin-right: 10px;
    }
  }
`,Do=xr.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.textColor||"#333"}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.accentColor||"#4a90e2"}};
  }
`,Ao=xr.button`
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`,Mo=xr.button`
  background-color: #ccc;
  color: #333333;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #aaa;
  }
`,Fo={Vegan:(0,Cr.jsx)(Kr,{}),Vegetarian:(0,Cr.jsx)(Kr,{}),Spicy:(0,Cr.jsx)(Vr,{}),"Gluten-Free":(0,Cr.jsx)(na,{}),Alcoholic:(0,Cr.jsx)(ra,{}),"Non-Alcoholic":(0,Cr.jsx)(na,{}),Sweet:(0,Cr.jsx)(na,{}),Breakfast:(0,Cr.jsx)(na,{}),Lunch:(0,Cr.jsx)(na,{}),Dinner:(0,Cr.jsx)(na,{}),Appetizer:(0,Cr.jsx)(na,{})},Bo=t.memo((e=>{let{id:n,image:r,name:a,tags:o,price:i,description:l,customizations:s,rating:u,numReviews:c}=e;const[d,p]=(0,t.useState)(r),{addItem:f}=(0,t.useContext)(Er),[m,h]=(0,t.useState)(!1),[g,v]=(J(),(0,t.useState)(!1)),[b,y]=(0,t.useState)({}),x=e=>{h(!0),f({id:n,name:a,price:i,customizations:e}),ko.success(`${a} has been added to your cart!`,{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\ud83d\uded2"}),h(!1)},w=()=>{v(!1),y({})};return(0,Cr.jsxs)(Cr.Fragment,{children:[(0,Cr.jsxs)(No,{children:[(0,Cr.jsx)("div",{className:"image-wrapper",children:(0,Cr.jsx)("img",{src:d,alt:a,loading:"lazy",onError:()=>{p(Ga)}})}),(0,Cr.jsxs)("div",{className:"details",children:[(0,Cr.jsxs)("h3",{children:[a," ",o.includes("Vegan")||o.includes("Vegetarian")?(0,Cr.jsx)(Kr,{title:"Vegetarian/Vegan"}):null]}),(0,Cr.jsx)("div",{className:"tags",children:o.map(((e,t)=>(0,Cr.jsxs)("span",{children:[Fo[e]||(0,Cr.jsx)(na,{})," ",e]},t)))}),(0,Cr.jsxs)("div",{className:"rating",children:[(0,Cr.jsx)("div",{className:"stars",children:(e=>{const t=[],n=Math.floor(e),r=e-n>=.5;for(let a=0;a<n;a++)t.push((0,Cr.jsx)(ea,{color:"#FFD700"},`star-full-${a}`));for(r&&t.push((0,Cr.jsx)(Zr,{color:"#FFD700"},"star-half"));t.length<5;)t.push((0,Cr.jsx)(aa,{color:"#FFD700"},`star-empty-${t.length}`));return t})(u)}),(0,Cr.jsxs)("div",{className:"num-reviews",children:["(",c," reviews)"]})]}),(0,Cr.jsx)("p",{children:l}),(0,Cr.jsxs)("p",{className:"price",children:["$",i.toFixed(2)]})]}),(0,Cr.jsx)(Ro,{onClick:()=>{s&&s.length>0?v(!0):x({})},"aria-label":`Add ${a} to Order`,disabled:m,children:m?"Adding...":"Add to Order"})]}),g&&(0,Cr.jsx)(Io,{onClick:e=>{e.target===e.currentTarget&&w()},role:"dialog","aria-modal":"true",children:(0,Cr.jsxs)(Lo,{children:[(0,Cr.jsx)(Do,{onClick:w,"aria-label":"Close Customization Modal",children:"\xd7"}),(0,Cr.jsxs)("h2",{children:["Customize Your ",a]}),s&&Array.isArray(s)&&s.length>0?s.map(((e,t)=>(0,Cr.jsxs)("div",{className:"customization-options",children:[(0,Cr.jsx)("h4",{children:e.name}),Array.isArray(e.options)?e.options.map(((t,n)=>(0,Cr.jsxs)("label",{children:[(0,Cr.jsx)("input",{type:e.removable?"checkbox":"radio",name:e.name,value:t,checked:e.removable?Array.isArray(b[e.name])&&b[e.name].includes(t):b[e.name]===t,onChange:()=>e.removable?((e,t)=>{y((n=>{const r=Array.isArray(n[e])?n[e]:[];return r.includes(t)?{...n,[e]:r.filter((e=>e!==t))}:{...n,[e]:[...r,t]}}))})(e.name,t):y((n=>({...n,[e.name]:t}))),"aria-label":e.removable?`Toggle ${t}`:`Select ${t}`}),e.removable?` Remove ${t}`:` Add ${t}`]},n))):(0,Cr.jsx)("span",{children:"No options available"})]},t))):(0,Cr.jsx)("p",{children:"No customization options available for this item."}),(0,Cr.jsxs)("div",{className:"buttons",children:[(0,Cr.jsx)(Mo,{onClick:w,children:"Cancel"}),(0,Cr.jsx)(Ao,{onClick:()=>{x(b),v(!1),y({})},disabled:m,children:m?"Adding...":"Confirm"})]})]})})]})})),$o=Bo,Uo=xr.div`
  padding: 40px 20px;
  text-align: center;

  h1 {
    margin-bottom: 30px;
    font-size: 2.5rem;
    color: #333;
  }

  .filters {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    width: 100%;

    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .filter-sections {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;

      @media (min-width: 992px) {
        flex-direction: row;
        gap: 30px;
      }

      .filter-category {
        display: flex;
        flex-direction: column;
        align-items: center; /* Center align on all screen sizes */
        gap: 10px;
        width: 100%;

        /* Removed media query to keep alignment centered on all screen sizes
        @media (min-width: 992px) {
          align-items: flex-start;
          width: auto;
        }
        */

        .filter-title {
          display: flex;
          align-items: center;
          justify-content: center; /* Center the content horizontally */
          gap: 5px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px; /* Increased margin for better spacing */
          text-align: center;
          /* Removed width: 100% to prevent stretching */

          svg {
            color: #4a90e2;
          }
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center; /* Center justify on all screen sizes */

          /* Removed media query to keep tags centered on all screen sizes
          @media (min-width: 992px) {
            justify-content: flex-start;
          }
          */
        }
      }
    }

    .sort-search {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      width: 100%;
      font-weight: bold;

      @media (min-width: 992px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 30px;
        width: auto;
      }

      .sort {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-shrink: 0;
        font-weight: bold;

        label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 1rem;
          color: #333;
          white-space: nowrap;
        }

        .sort-select {
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #fff;
          cursor: pointer;
          transition: border-color 0.3s ease;
          font-size: 0.9rem;
          display: flex;
          align-items: center;

          &:hover {
            border-color: #4a90e2;
          }

          &:focus {
            outline: none;
            border-color: #4a90e2;
          }

          svg {
            margin-left: 5px;
          }
        }
      }

      .search {
        display: flex;
        align-items: center;
        gap: 10px;

        label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 1rem;
          font-weight: bold;
          color: #333;
        }

        .search-container {
          position: relative;
          width: 200px;

          input {
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 100%;
            transition: border-color 0.3s ease;
            font-size: 0.9rem;
            padding-left: 30px; /* Added padding for search icon */

            &:focus {
              outline: none;
              border-color: #4a90e2;
            }
          }

          svg {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            color: #aaa;
          }
        }
      }
    }

    .clear-filters-container {
      display: flex;
      justify-content: center;
      width: 100%;

      @media (min-width: 992px) {
        justify-content: flex-start;
        width: auto;
      }
    }
  }

  .category {
    margin: 30px 0;

    h2 {
      font-size: 1.8rem;
      color: #4a90e2;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: center; /* Center the category header */

      svg {
        color: #4a90e2;
      }
    }

    hr {
      border: 1px solid #ddd;
      margin-bottom: 20px;
    }
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 0 10px;

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 768px) and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column; /* Stack items vertically */
      align-items: center; /* Center items horizontally */
      gap: 20px; /* Add spacing between items */
    }
  }

  p.no-results {
    font-size: 1.2rem;
    color: #666;
    margin-top: 20px;
  }
`,Ho=xr.button`
  padding: 8px 12px;
  border: 1px solid #4a90e2;
  border-radius: 20px;
  background-color: ${e=>{let{selected:t}=e;return t?"#4a90e2":"#fff"}};
  color: ${e=>{let{selected:t}=e;return t?"#fff":"#4a90e2"}};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.9rem;
  box-sizing: border-box;
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: ${e=>{let{selected:t}=e;return t?"#357ab8":"#4a90e2"}};
    color: #fff;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
    outline-offset: 0px;
  }
`,Wo=xr.button`
  padding: 8px 12px;
  border: 1px solid #ff4d4d;
  border-radius: 20px;
  background-color: ${e=>{let{selected:t}=e;return t?"#ff4d4d":"#fff"}};
  color: ${e=>{let{selected:t}=e;return t?"#fff":"#ff4d4d"}};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: ${e=>{let{selected:t}=e;return t?"#cc0000":"#ff4d4d"}};
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid rgba(255, 77, 77, 0.5);
    outline-offset: 0px;
  }
`,Vo={Vegan:(0,Cr.jsx)(Kr,{}),Vegetarian:(0,Cr.jsx)(Kr,{}),Spicy:(0,Cr.jsx)(Vr,{}),"Gluten-Free":(0,Cr.jsx)(Kr,{}),Alcoholic:(0,Cr.jsx)(ra,{}),"Non-Alcoholic":(0,Cr.jsx)(qr,{}),Sweet:(0,Cr.jsx)(Hr,{}),Breakfast:(0,Cr.jsx)(Ur,{}),Lunch:(0,Cr.jsx)(Qr,{}),Dinner:(0,Cr.jsx)(na,{}),Appetizer:(0,Cr.jsx)(Yr,{}),Miscellaneous:(0,Cr.jsx)(Wr,{})},qo=()=>{const[e,n]=(0,t.useState)([]),[r,a]=(0,t.useState)("popularity"),[o,i]=(0,t.useState)(""),{addItem:l,removeItem:s}=(0,t.useContext)(Er),u=(0,t.useMemo)((()=>{const e={};Ka.forEach((t=>{t.tags.forEach((t=>{["Alcoholic","Non-Alcoholic"].includes(t)?(e["Beverage Type"]=e["Beverage Type"]||new Set,e["Beverage Type"].add(t)):["Vegan","Vegetarian","Gluten-Free"].includes(t)?(e.Dietary=e.Dietary||new Set,e.Dietary.add(t)):["Breakfast","Lunch","Dinner","Appetizer"].includes(t)?(e["Meal Type"]=e["Meal Type"]||new Set,e["Meal Type"].add(t)):["Spicy","Sweet"].includes(t)?(e["Flavor Profile"]=e["Flavor Profile"]||new Set,e["Flavor Profile"].add(t)):(e.Miscellaneous=e.Miscellaneous||new Set,e.Miscellaneous.add(t))}))}));const t={};return Object.keys(e).forEach((n=>{t[n]=Array.from(e[n]).sort()})),t}),[]),c=(0,t.useMemo)((()=>{let t=Ka;e.length>0&&(t=t.filter((t=>e.every((e=>t.tags.includes(e)))))),""!==o.trim()&&(t=t.filter((e=>e.name.toLowerCase().includes(o.toLowerCase()))));const n=[...t].sort(((e,t)=>"priceLowHigh"===r?e.price-t.price:"priceHighLow"===r?t.price-e.price:"popularity"===r?t.popularity-e.popularity:0));return n}),[e,r,o]),d=(0,t.useMemo)((()=>c.reduce(((e,t)=>(e[t.category]||(e[t.category]=[]),e[t.category].push(t),e)),{})),[c]),p={"Meal Type":(0,Cr.jsx)(na,{}),Dietary:(0,Cr.jsx)(Kr,{}),"Beverage Type":(0,Cr.jsx)(qr,{}),"Flavor Profile":(0,Cr.jsx)(Vr,{}),Miscellaneous:(0,Cr.jsx)(Wr,{})};return(0,Cr.jsxs)(Uo,{children:[(0,Cr.jsx)(ya,{})," ",(0,Cr.jsx)("h1",{children:"Our Delicious Menu"}),(0,Cr.jsxs)("div",{className:"filters",children:[(0,Cr.jsx)("div",{className:"filter-sections",children:Object.keys(u).map((t=>(0,Cr.jsxs)("div",{className:"filter-category",children:[(0,Cr.jsxs)("div",{className:"filter-title",children:[p[t]||(0,Cr.jsx)(Wr,{}),t]}),(0,Cr.jsx)("div",{className:"tags",children:u[t].map((t=>(0,Cr.jsxs)(Ho,{onClick:()=>(e=>{n((t=>t.includes(e)?t.filter((t=>t!==e)):[...t,e]))})(t),selected:e.includes(t),"aria-pressed":e.includes(t),"aria-label":`Filter by ${t}`,children:[Vo[t]||(0,Cr.jsx)(Wr,{})," ",t]},t)))})]},t)))}),e.length>0&&(0,Cr.jsx)("div",{className:"clear-filters-container",children:(0,Cr.jsxs)(Wo,{onClick:()=>{n([]),i(""),ko.info("All filters have been cleared.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:(0,Cr.jsx)(ta,{})})},disabled:0===e.length,"aria-label":"Clear All Filters",children:[(0,Cr.jsx)(ta,{})," Clear Filters"]})}),(0,Cr.jsxs)("div",{className:"sort-search",children:[(0,Cr.jsxs)("div",{className:"sort",children:[(0,Cr.jsxs)("label",{htmlFor:"sort-select",children:[(0,Cr.jsx)(Jr,{})," Sort By:"]}),(0,Cr.jsxs)("select",{id:"sort-select",className:"sort-select",value:r,onChange:e=>{a(e.target.value)},"aria-label":"Sort Menu Items",children:[(0,Cr.jsx)("option",{value:"popularity",children:"Popularity"}),(0,Cr.jsx)("option",{value:"priceLowHigh",children:"Price: Low to High"}),(0,Cr.jsx)("option",{value:"priceHighLow",children:"Price: High to Low"})]})]}),(0,Cr.jsxs)("div",{className:"search",children:[(0,Cr.jsxs)("label",{htmlFor:"search-input",children:[(0,Cr.jsx)(Gr,{})," Search:"]}),(0,Cr.jsxs)("div",{className:"search-container",children:[(0,Cr.jsx)("input",{id:"search-input",type:"text",placeholder:"Search for menu items...",value:o,onChange:e=>i(e.target.value),"aria-label":"Search Menu Items"}),(0,Cr.jsx)(Gr,{})]})]})]})]}),0===Object.keys(d).length?(0,Cr.jsx)("p",{className:"no-results",children:"No menu items match the selected filters."}):Object.keys(d).map((e=>(0,Cr.jsxs)("div",{className:"category",children:[(0,Cr.jsxs)("h2",{children:[e," ",(0,Cr.jsx)(na,{})]}),(0,Cr.jsx)("hr",{}),(0,Cr.jsx)("div",{className:"menu-grid",children:d[e].map((e=>(0,Cr.jsx)($o,{...e},e.id)))})]},e)))]})},Yo=n.p+"static/media/johndoe.3545932b972a2d34ee23.webp",Qo=n.p+"static/media/janesmith.db9ccd66296314b636fa.webp",Ko=n.p+"static/media/mikejohnson.7907a9478fefd9dd257f.webp",Go=xr.div`
  padding: 40px 20px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-size: 2.5rem;
    color: #333;
  }

  p {
    max-width: 800px;
    margin: 0 auto 30px;
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }

  .team {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .team-member {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 10px;
      width: 250px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 15px;
      }

      h3 {
        margin-bottom: 10px;
        color: #4a90e2;
      }

      p {
        font-size: 0.9rem;
        color: #666;
      }
    }
  }

  @media (max-width: 768px) {
    .team {
      flex-direction: column;
      align-items: center;
    }
  }
`,Xo=()=>(0,Cr.jsxs)(Go,{children:[(0,Cr.jsx)(ya,{})," ",(0,Cr.jsx)("h1",{children:"About Us"}),(0,Cr.jsx)("p",{children:"At Skip The Server, we believe in providing an exceptional dining experience without the wait. Our mission is to deliver delicious, chef-crafted dishes made with the freshest ingredients, all available at your fingertips. Whether you're craving a hearty meal, a sweet dessert, or a refreshing drink, we've got you covered."}),(0,Cr.jsxs)("div",{className:"team",children:[(0,Cr.jsxs)("div",{className:"team-member",children:[(0,Cr.jsx)("img",{src:Yo,alt:"Team Member 1",loading:"lazy"}),(0,Cr.jsx)("h3",{children:"John Doe"}),(0,Cr.jsx)("p",{children:"Head Chef"})]}),(0,Cr.jsxs)("div",{className:"team-member",children:[(0,Cr.jsx)("img",{src:Qo,alt:"Team Member 2",loading:"lazy"}),(0,Cr.jsx)("h3",{children:"Jane Smith"}),(0,Cr.jsx)("p",{children:"Restaurant Manager"})]}),(0,Cr.jsxs)("div",{className:"team-member",children:[(0,Cr.jsx)("img",{src:Ko,alt:"Team Member 3",loading:"lazy"}),(0,Cr.jsx)("h3",{children:"Mike Johnson"}),(0,Cr.jsx)("p",{children:"Lead Server"})]})]})]}),Jo=xr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Zo=xr.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  text-align: center;
  position: relative;
`,ei=xr.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`,ti=xr.p`
  font-size: 1rem;
  color: #333;
`,ni=xr.p`
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
  font-weight: bold;
`,ri=xr.p`
  font-size: 0.9rem;
  color: #777;
  margin-top: 15px;
  line-height: 1.4;
`,ai=xr.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`,oi=xr.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }

  &:focus {
    outline: none;
  }
`,ii=e=>{let{onClose:t,message:n,orderId:r}=e;const a=J();return(0,Cr.jsx)(Jo,{role:"dialog","aria-modal":"true",onClick:t,children:(0,Cr.jsxs)(Zo,{onClick:e=>e.stopPropagation(),children:[(0,Cr.jsx)(ei,{onClick:t,"aria-label":"Close Modal",children:"\xd7"}),(0,Cr.jsx)(ti,{children:n}),(0,Cr.jsxs)(ni,{children:["Your Order ID: ",r]}),(0,Cr.jsx)(ri,{children:"Please save this Order ID for future reference. You can use it to track your order or request additional services. We recommend taking a screenshot for your convenience."}),(0,Cr.jsxs)(ai,{children:[(0,Cr.jsx)(oi,{onClick:()=>{a("/menu"),t()},children:"Continue Shopping"}),(0,Cr.jsx)(oi,{onClick:()=>{a("/order-status",{state:{orderId:r}}),t()},children:"Track Order"}),(0,Cr.jsx)(oi,{onClick:()=>{a("/request-services",{state:{orderId:r}}),t()},children:"Request Services"})]})]})})},li=xr.div`
  padding: 40px 20px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-size: 2.5rem;
    color: #333;
  }

  .contact-info {
    margin-bottom: 30px;

    p {
      font-size: 1rem;
      color: #555;
      margin: 10px 0;
    }
  }

  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    label {
      font-size: 1rem;
      color: #333;
    }

    input,
    textarea {
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      width: 100%;
      box-sizing: border-box;

      &:focus {
        outline: none;
        border-color: #4a90e2;
      }
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    button {
      padding: 10px 20px;
      font-size: 1rem;
      background-color: #4a90e2;
      border: none;
      border-radius: 8px;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #357ab8;
      }
    }
  }
`,si=()=>{const[e,n]=(0,t.useState)({name:"",email:"",message:""}),[r,a]=(0,t.useState)(!1),o=t=>{const{name:r,value:a}=t.target;n({...e,[r]:a})};return(0,Cr.jsxs)(li,{children:[(0,Cr.jsx)(ya,{})," ",(0,Cr.jsx)("h1",{children:"Contact Us"}),(0,Cr.jsxs)("div",{className:"contact-info",children:[(0,Cr.jsxs)("p",{children:[(0,Cr.jsx)("strong",{children:"Address:"})," 1234 Culinary Blvd, Flavor Town, FT 56789"]}),(0,Cr.jsxs)("p",{children:[(0,Cr.jsx)("strong",{children:"Phone:"})," (123) 456-7890"]}),(0,Cr.jsxs)("p",{children:[(0,Cr.jsx)("strong",{children:"Email:"})," contact@skiptheserver.com"]})]}),(0,Cr.jsx)("div",{className:"contact-form",children:(0,Cr.jsxs)("form",{onSubmit:e=>{e.preventDefault(),a(!0),n({name:"",email:"",message:""})},"aria-label":"Contact Form",children:[(0,Cr.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,Cr.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:o,required:!0,"aria-required":"true"}),(0,Cr.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,Cr.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:o,required:!0,"aria-required":"true"}),(0,Cr.jsx)("label",{htmlFor:"message",children:"Message:"}),(0,Cr.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:o,required:!0,"aria-required":"true"}),(0,Cr.jsx)("button",{type:"submit","aria-label":"Submit Contact Form",children:"Submit"})]})}),r&&(0,Cr.jsx)(ii,{message:"Thank you for contacting us! We'll get back to you shortly.",onClose:()=>a(!1)})]})},ui=(0,t.createContext)(),ci={orders:[]};function di(e,t){switch(t.type){case"ADD_ORDER":return{...e,orders:[...e.orders,t.payload]};case"UPDATE_ORDER_STATUS":return{...e,orders:e.orders.map((e=>e.orderId===t.payload.orderId?{...e,status:t.payload.status}:e))};default:return e}}const pi=e=>{let{children:n}=e;const[r,a]=(0,t.useReducer)(di,ci);return(0,Cr.jsx)(ui.Provider,{value:{orders:r.orders,addOrder:e=>{a({type:"ADD_ORDER",payload:e})},updateOrderStatus:(e,t)=>{a({type:"UPDATE_ORDER_STATUS",payload:{orderId:e,status:t}})},getOrderById:e=>r.orders.find((t=>t.orderId===e))},children:n})},fi=Sr`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,mi=xr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,hi=xr.div`
  background: ${e=>{let{theme:t}=e;return t.modalBg||"#fff"}};
  padding: 30px;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius||"10px"}};
  width: 90%;
  max-width: 400px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  animation: ${fi} 0.3s ease-out;
  position: relative;
`,gi=xr.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.textColor||"#333"}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.accentColor||"#4a90e2"}};
  }
`,vi=xr.p`
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.textColor||"#333"}};
  text-align: center;
  margin: 20px 0;
`,bi=xr.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`,yi=xr.button`
  background-color: #ff4d4d;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`,xi=xr.button`
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }
`,wi=e=>{let{message:n,onConfirm:r,onCancel:a}=e;return t.useEffect((()=>{const e=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[a]),(0,Cr.jsx)(mi,{onClick:e=>{e.target===e.currentTarget&&a()},role:"dialog","aria-modal":"true",children:(0,Cr.jsxs)(hi,{children:[(0,Cr.jsx)(gi,{onClick:a,"aria-label":"Close Modal",children:"\xd7"}),(0,Cr.jsx)(vi,{children:n}),(0,Cr.jsxs)(bi,{children:[(0,Cr.jsx)(yi,{onClick:r,"aria-label":"Confirm",children:"Yes"}),(0,Cr.jsx)(xi,{onClick:a,"aria-label":"Cancel",children:"No"})]})]})})};const Si=n.p+"static/media/google-pay-logo.ffdcf7b7dc7b7f0aa82af7270f336bfd.svg";const ki=n.p+"static/media/apple-pay-logo.6a31ca334047fea3d6b0be07897d540c.svg";const Ci=n.p+"static/media/paypal-logo.dea93e2dc715d21f1bbd52a694c4408c.svg",Ei={SAVE10:10,SAVE20:20},ji=xr.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,_i=xr.div`
  background-color: #f9f9f9;
  padding: 25px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto 30px auto;
  max-width: 100%;

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`,zi=xr.h2`
  margin-top: 0;
  text-align: center;
  color: #333;
  font-size: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,Pi=xr.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 1rem;
  margin: 20px auto;
  display: block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }

  &:disabled {
    background-color: #ffa6a6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
    max-width: 180px;
    margin: 20px auto;
  }
`,Ti=xr.div`
  overflow-x: auto;
  margin-bottom: 20px;
`,Oi=xr.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  table-layout: fixed;

  th,
  td {
    padding: 12px 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    vertical-align: top;
    word-wrap: break-word;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
    font-size: 1rem;
  }

  td {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 10px 8px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    display: block;
    thead {
      display: none;
    }

    tbody {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    tr {
      display: block;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #fff;
      padding: 10px;
    }

    td {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      padding: 8px 0;
      border: none;

      &:before {
        content: attr(data-label);
        font-weight: bold;
        margin-right: 10px;
        color: #555;
        flex-shrink: 0;
      }
    }
  }
`,Ni=xr.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    margin-bottom: 15px;
  }

  ul {
    list-style: disc;
    margin-left: 20px;
    padding-left: 0;
    margin-top: 5px;
  }

  li {
    margin-bottom: 8px;
    color: #333;
  }

  strong {
    font-weight: bold;
    color: #555;
  }

  @media (max-width: 600px) {
    ul {
      margin-left: 0;
      padding-left: 20px;
    }

    li {
      margin-bottom: 5px;
    }
  }
`,Ri=xr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 600px) {
    align-items: flex-start;
    gap: 5px;
  }
`,Ii=xr.div`
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    background-color: #4a90e2;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 6px 12px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #357ab8;
    }

    &:disabled {
      background-color: #a0c4e3;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 480px) {
    gap: 3px;

    button {
      padding: 4px 8px;
      font-size: 0.9rem;
    }
  }
`,Li=xr.button`
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 10px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 5px 8px;
    font-size: 0.8rem;
  }
`,Di=xr(Li)`
  background-color: #ff4d4d;
  margin-left: auto;

  &:hover {
    background-color: #cc0000;
  }
`,Ai=xr.td`
  font-weight: bold;
  color: #4a90e2;
  text-align: right;

  @media (max-width: 600px) {
    text-align: left;
  }
`,Mi=xr.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`,Fi=xr.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
`,Bi=xr(Li)`
  flex-shrink: 0;
  padding: 10px 14px;

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`,$i=xr.div`
  margin-top: 20px;
  font-size: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;

      span:last-child {
        margin-top: 5px;
        font-weight: bold;
      }
    }
  }

  .total {
    font-weight: bold;
    font-size: 1.2rem;

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  input {
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    div {
      margin-bottom: 15px;
    }
  }
`,Ui=xr.div`
  margin-top: 30px;

  @media (max-width: 600px) {
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`,Hi=xr.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`,Wi=xr.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,Vi=xr.button`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  align-items: center;
  min-width: 120px;
  justify-content: center;

  img {
    width: 50px;
    height: auto;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    padding: 10px 14px;

    img {
      width: 45px;
    }
  }

  @media (max-width: 480px) {
    padding: 8px 12px;

    img {
      width: 40px;
    }

    min-width: 100px;
  }
`,qi=xr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 30px 0;

  span {
    color: #666;
    font-weight: bold;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    margin: 25px 0;
    span {
      font-size: 0.95rem;
    }
  }
`,Yi=xr.div`
  flex: 1;
  height: 1px;
  background-color: #ddd;
`,Qi=xr.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 600px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,Ki=xr.div`
  display: flex;
  flex-direction: column;
`,Gi=xr.label`
  margin-bottom: 6px;
  color: #333;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,Xi=xr.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
`,Ji=xr.button`
  width: 100%;
  padding: 14px;
  background-color: #4a90e2;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 30px;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 1rem;
    margin-top: 25px;
  }
`,Zi=xr.button`
  padding: 6px 12px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
  align-self: flex-start;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`,el=xr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,tl=xr.div`
  background: ${e=>{let{theme:t}=e;return t.modalBg||"#fff"}};
  padding: 30px 25px;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius||"10px"}};
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
  position: relative;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    margin-top: 0;
    color: #333;
    font-size: 1.5rem;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  .customization-options {
    margin: 20px 0;
    text-align: left;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 8px;
    }
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #333;

    input {
      margin-right: 10px;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 5px;
  }
`,nl=xr.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.textColor||"#333"}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.accentColor||"#4a90e2"}};
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
`,rl=xr.button`
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.95rem;
  }
`,al=xr.button`
  background-color: #ccc;
  color: #333333;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #aaa;
  }

  &:disabled {
    background-color: #e6e6e6;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.95rem;
  }
`,ol=()=>{var e;const{items:n,removeItem:r,increaseQuantity:a,decreaseQuantity:o,clearCart:i,updateCustomizations:l}=(0,t.useContext)(Er),{addOrder:s}=(0,t.useContext)(ui),[u,c]=(0,t.useState)(!1),[d,p]=(0,t.useState)(!1),[f,m]=(0,t.useState)(!1),[h,g]=(0,t.useState)(""),[v,b]=(0,t.useState)(0),[y,x]=(0,t.useState)(null),[w,S]=(0,t.useState)(!1),[k,C]=(0,t.useState)(null),E=(J(),n.reduce(((e,t)=>e+t.price*t.quantity),0)),j=.05*E,_=E*(v/100),z=E+j-_,P=()=>"ORD"+Math.random().toString(36).substr(2,9).toUpperCase(),T=e=>{0!==n.length?(c(!0),ko.info(`Processing ${e} payment...`,{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\ud83d\udcb3"}),setTimeout((()=>{c(!1);const t=P();x(t),localStorage.setItem("lastOrderId",t),s({orderId:t,items:n,total:z,status:"Order Received"}),p(!0),i(),ko.success(`${e} payment successful!`,{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"})}),2e3)):ko.warn("Your cart is empty.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"})},[O,N]=(0,t.useState)(!1),[R,I]=(0,t.useState)(null),[L,D]=(0,t.useState)({}),A=()=>{N(!1),I(null),D({}),ko.info("Customization edit canceled.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})};return(0,Cr.jsxs)(ji,{children:[(0,Cr.jsx)(ya,{}),(0,Cr.jsxs)("form",{onSubmit:e=>{e.preventDefault(),0!==n.length?(c(!0),setTimeout((()=>{c(!1);const e=P();x(e),localStorage.setItem("lastOrderId",e),s({orderId:e,items:n,total:z,status:"Order Received"}),p(!0),i(),ko.success("Purchase completed successfully!",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\ud83c\udf89"})}),2e3)):ko.warn("Your cart is empty.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"})},children:[(0,Cr.jsxs)(_i,{children:[(0,Cr.jsx)(zi,{children:"Your Order"}),(0,Cr.jsx)(Pi,{type:"button",onClick:()=>{0!==n.length?m(!0):ko.warn("Your cart is already empty.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"})},disabled:u||0===n.length,"aria-label":"Empty Cart",children:"Empty Cart"}),0===n.length?(0,Cr.jsx)("p",{children:"Your cart is empty."}):(0,Cr.jsx)(Ti,{children:(0,Cr.jsxs)(Oi,{children:[(0,Cr.jsx)("thead",{children:(0,Cr.jsxs)("tr",{children:[(0,Cr.jsx)("th",{style:{width:"25%"},children:"Item"}),(0,Cr.jsx)("th",{style:{width:"30%"},children:"Customization"}),(0,Cr.jsx)("th",{style:{width:"15%"},children:"Quantity"}),(0,Cr.jsx)("th",{style:{width:"15%"},children:"Price"}),(0,Cr.jsx)("th",{style:{width:"15%"},children:"Action"})]})}),(0,Cr.jsx)("tbody",{children:n.map(((e,t)=>(0,Cr.jsxs)("tr",{children:[(0,Cr.jsx)("td",{"data-label":"Item",children:e.name}),(0,Cr.jsx)("td",{"data-label":"Customization",children:(0,Cr.jsxs)(Ri,{children:[(0,Cr.jsx)(Zi,{type:"button",onClick:()=>(e=>{I(e);const t=n[e];D(t.customizations||{}),N(!0)})(t),"aria-label":`Edit customization for ${e.name}`,children:"Edit"}),e.customizations&&Object.keys(e.customizations).length>0?(0,Cr.jsx)(Ni,{children:Object.entries(e.customizations).map((t=>{var n;let[r,a]=t;const o=null===(n=Ka.find((t=>t.id===e.id)))||void 0===n?void 0:n.customizations.find((e=>e.name===r)),i=(null===o||void 0===o?void 0:o.removable)||!1;return(0,Cr.jsxs)("li",{children:[(0,Cr.jsxs)("strong",{children:[r,":"]}),i?(0,Cr.jsx)("ul",{children:Array.isArray(a)&&a.length>0?a.map(((e,t)=>(0,Cr.jsx)("li",{children:e},t))):(0,Cr.jsx)("span",{children:"No options selected"})}):(0,Cr.jsx)("span",{children:a||"No option selected"})]},r)}))}):(0,Cr.jsx)("span",{children:"None"})]})}),(0,Cr.jsx)("td",{"data-label":"Quantity",children:(0,Cr.jsxs)(Ii,{children:[(0,Cr.jsx)("button",{type:"button",onClick:()=>(e=>{o(e)})(t),"aria-label":"Decrease quantity",disabled:u||e.quantity<=1,children:"-"}),(0,Cr.jsx)("span",{children:e.quantity}),(0,Cr.jsx)("button",{type:"button",onClick:()=>(e=>{a(e)})(t),"aria-label":"Increase quantity",disabled:u,children:"+"})]})}),(0,Cr.jsxs)(Ai,{"data-label":"Price",children:["$",(e.price*e.quantity).toFixed(2)]}),(0,Cr.jsx)("td",{"data-label":"Action",children:(0,Cr.jsx)(Di,{type:"button",onClick:()=>(e=>{C(e),S(!0)})(t),"aria-label":`Remove ${e.name}`,disabled:u,children:"Remove"})})]},t)))})]})})]}),n.length>0&&(0,Cr.jsx)(_i,{children:(0,Cr.jsxs)($i,{children:[(0,Cr.jsxs)("div",{children:[(0,Cr.jsx)("span",{children:"Subtotal:"}),(0,Cr.jsxs)("span",{children:["$",E.toFixed(2)]})]}),(0,Cr.jsxs)("div",{children:[(0,Cr.jsx)("span",{children:"Taxes (5%):"}),(0,Cr.jsxs)("span",{children:["$",j.toFixed(2)]})]}),(0,Cr.jsxs)("div",{children:[(0,Cr.jsxs)("span",{children:["Discount (",v,"%):"]}),(0,Cr.jsxs)("span",{children:["-$",_.toFixed(2)]})]}),(0,Cr.jsxs)("div",{className:"total",children:[(0,Cr.jsx)("span",{children:"Total:"}),(0,Cr.jsxs)("span",{children:["$",z.toFixed(2)]})]}),(0,Cr.jsxs)(Mi,{children:[(0,Cr.jsx)(Fi,{type:"text",placeholder:"Enter discount code",value:h,onChange:e=>g(e.target.value),"aria-label":"Discount code"}),(0,Cr.jsx)(Bi,{type:"button",onClick:()=>{if(v>0)return;const e=h.trim().toUpperCase();if(e in Ei){b(Ei[e]),ko.success(`Discount code "${e}" applied!`,{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2714\ufe0f"}),g("")}else ko.error("Invalid discount code.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})},disabled:v>0||u,"aria-label":"Apply Discount Code",children:"Apply"})]})]})}),n.length>0&&(0,Cr.jsxs)(Ui,{children:[(0,Cr.jsx)(Hi,{children:"Pay with Wallet"}),(0,Cr.jsxs)(Wi,{children:[(0,Cr.jsx)(Vi,{type:"button",onClick:()=>T("PayPal"),disabled:u,"aria-label":"Pay with PayPal",children:(0,Cr.jsx)("img",{src:Ci,alt:"PayPal"})}),(0,Cr.jsx)(Vi,{type:"button",onClick:()=>T("Apple Pay"),disabled:u,"aria-label":"Pay with Apple Pay",children:(0,Cr.jsx)("img",{src:ki,alt:"Apple Pay"})}),(0,Cr.jsx)(Vi,{type:"button",onClick:()=>T("Google Pay"),disabled:u,"aria-label":"Pay with Google Pay",children:(0,Cr.jsx)("img",{src:Si,alt:"Google Pay"})})]}),(0,Cr.jsxs)(qi,{children:[(0,Cr.jsx)(Yi,{}),(0,Cr.jsx)("span",{children:"OR"}),(0,Cr.jsx)(Yi,{})]}),(0,Cr.jsxs)(Qi,{children:[(0,Cr.jsxs)(Ki,{children:[(0,Cr.jsx)(Gi,{htmlFor:"name",children:"Name on Card"}),(0,Cr.jsx)(Xi,{type:"text",id:"name",name:"name",placeholder:"John Doe",required:!0})]}),(0,Cr.jsxs)(Ki,{children:[(0,Cr.jsx)(Gi,{htmlFor:"cardNumber",children:"Card Number"}),(0,Cr.jsx)(Xi,{type:"text",id:"cardNumber",name:"cardNumber",placeholder:"1234 5678 9012 3456",required:!0})]}),(0,Cr.jsxs)("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[(0,Cr.jsxs)(Ki,{style:{flex:1,minWidth:"150px"},children:[(0,Cr.jsx)(Gi,{htmlFor:"expiry",children:"Expiration Date"}),(0,Cr.jsx)(Xi,{type:"text",id:"expiry",name:"expiry",placeholder:"MM/YY",required:!0})]}),(0,Cr.jsxs)(Ki,{style:{flex:1,minWidth:"100px"},children:[(0,Cr.jsx)(Gi,{htmlFor:"cvv",children:"CVV"}),(0,Cr.jsx)(Xi,{type:"text",id:"cvv",name:"cvv",placeholder:"123",required:!0})]})]})]})]}),n.length>0&&(0,Cr.jsx)(Ji,{type:"submit",disabled:u,children:u?"Processing...":"Complete Purchase"}),d&&(0,Cr.jsx)(ii,{message:"Order successfully placed!",orderId:y,onClose:()=>p(!1)}),f&&(0,Cr.jsx)(wi,{message:"Are you sure you want to empty your cart?",onConfirm:()=>{i(),ko.info("Your cart has been emptied.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\ud83d\uded2"}),m(!1)},onCancel:()=>{m(!1),ko.info("Empty cart action canceled.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})}}),w&&null!==k&&(0,Cr.jsx)(wi,{message:`Are you sure you want to remove "${n[k].name}" from your cart?`,onConfirm:()=>{if(null!==k){const e=n[k].name;r(k),ko.info(`Removed "${e}" from your cart.`,{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\ud83d\uddd1\ufe0f"}),C(null),S(!1)}},onCancel:()=>{C(null),S(!1),ko.info("Remove item action canceled.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})}}),O&&null!==R&&(0,Cr.jsx)(el,{onClick:e=>{e.target===e.currentTarget&&A()},role:"dialog","aria-modal":"true",children:(0,Cr.jsxs)(tl,{children:[(0,Cr.jsx)(nl,{onClick:A,"aria-label":"Close Edit Customization Modal",children:"\xd7"}),(0,Cr.jsxs)("h2",{children:["Edit Customization for ",n[R].name]}),null===(e=Ka.find((e=>e.id===n[R].id)))||void 0===e?void 0:e.customizations.map(((e,t)=>(0,Cr.jsxs)("div",{className:"customization-options",children:[(0,Cr.jsx)("h4",{children:e.name}),e.options.map(((t,n)=>(0,Cr.jsxs)("label",{children:[(0,Cr.jsx)("input",{type:e.removable?"checkbox":"radio",name:e.name,value:t,checked:e.removable?Array.isArray(L[e.name])&&L[e.name].includes(t):L[e.name]===t,onChange:()=>((e,t,n)=>{D((r=>{if(n){const n=r[e]||[];return n.includes(t)?{...r,[e]:n.filter((e=>e!==t))}:{...r,[e]:[...n,t]}}return{...r,[e]:t}}))})(e.name,t,e.removable),"aria-label":e.removable?`Toggle ${t}`:`Select ${t}`}),e.removable?` Remove ${t}`:` Select ${t}`]},n)))]},t))),(0,Cr.jsxs)("div",{className:"buttons",children:[(0,Cr.jsx)(al,{onClick:A,children:"Cancel"}),(0,Cr.jsx)(rl,{onClick:()=>{var e;const t={...L};null===(e=Ka.find((e=>e.id===n[R].id)))||void 0===e||e.customizations.forEach((e=>{e.removable||Array.isArray(t[e.name])&&(t[e.name]=t[e.name][0]||"")})),l(R,t),ko.success("Customization updated successfully!",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"}),N(!1),I(null),D({})},disabled:u,children:u?"Updating...":"Update"})]})]})})]})]})},il=()=>(0,Cr.jsx)(ol,{}),ll=xr.div`
  padding: 40px 20px; /* Match About Us page padding */
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
  }

  p {
    color: #555;
    margin-bottom: 15px;
  }
`,sl=xr.div`
  margin: 20px auto;
  max-width: 400px;
`,ul=xr.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333;
`,cl=xr.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`,dl=xr.button`
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4a90e2;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`,pl=xr.div`
  margin-top: 30px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,fl=xr.div`
  position: relative;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  margin-top: 20px;
`,ml=xr.div`
  height: 100%;
  width: ${e=>{let{progress:t}=e;return t}}%;
  background-color: #4a90e2;
  border-radius: 10px;
  transition: width 0.5s ease;
`,hl=xr.p`
  font-size: 1.2rem;
  font-weight: bold;
`,gl=xr.div`
  margin-top: 20px;
  text-align: left;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;
      font-size: 1rem;
      color: #333;
    }
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-top: 10px;
  }
`,vl=xr.div`
  display: flex;
  justify-content: center; /* Center the buttons horizontally */
  gap: 10px; /* Space between buttons */
  margin-top: 20px;
`,bl=xr.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4a90e2;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`,yl=()=>{const{getOrderById:e}=(0,t.useContext)(ui),n=G(),r=J(),[a,o]=(0,t.useState)(""),[i,l]=(0,t.useState)(null),[s,u]=(0,t.useState)(0),[c,d]=(0,t.useState)(""),[p,f]=(0,t.useState)(null),[m,h]=(0,t.useState)(!1),[g,v]=(0,t.useState)(!1);(0,t.useEffect)((()=>{var e;null!==(e=n.state)&&void 0!==e&&e.orderId&&!m&&(o(n.state.orderId),b(n.state.orderId),h(!0))}),[n.state,m]);const b=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if(""===t.trim())return void ko.warn("Please enter your Order ID.",{position:"bottom-right",autoClose:1500,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"});const n=e(t.trim());n?(l(n),v(!0),u(0),d("Order Received"),y()):(l(null),v(!1),d("Order not found. Please check your Order ID."),ko.error("Order not found. Please check your Order ID.",{position:"bottom-right",autoClose:3e3,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"}))},y=()=>{const e=[{percent:0,text:"Order Received"},{percent:25,text:"Preparing your order"},{percent:50,text:"Cooking in progress"},{percent:75,text:"Order is almost ready"},{percent:100,text:"Your order will be served to you shortly!"}];let t=0;const n=setInterval((()=>{t<e.length?(u(e[t].percent),d(e[t].text),t++):clearInterval(n)}),2e3);f(n)};(0,t.useEffect)((()=>()=>{p&&clearInterval(p)}),[p]);const x=()=>{v(!1),l(null),u(0),d(""),o(""),h(!1),p&&clearInterval(p)};return(0,Cr.jsxs)(ll,{children:[(0,Cr.jsx)(ya,{}),(0,Cr.jsx)("h1",{children:"Track Your Order"}),!g&&(0,Cr.jsxs)(sl,{children:[(0,Cr.jsx)(ul,{htmlFor:"orderId",children:"Enter your Order ID:"}),(0,Cr.jsx)(cl,{id:"orderId",type:"text",value:a,onChange:e=>o(e.target.value),"aria-label":"Order ID"}),(0,Cr.jsx)(dl,{onClick:()=>b(),"aria-label":"Track Order",children:"Track Order"})]}),c&&(0,Cr.jsx)(hl,{children:c}),g&&i&&(0,Cr.jsxs)(pl,{children:[(0,Cr.jsx)(fl,{children:(0,Cr.jsx)(ml,{progress:s})}),(0,Cr.jsxs)(gl,{children:[(0,Cr.jsx)("h3",{children:"Order Details:"}),(0,Cr.jsx)("ul",{children:i.items.map(((e,t)=>(0,Cr.jsxs)("li",{children:[e.quantity," x ",e.name]},t)))}),(0,Cr.jsxs)("p",{children:["Total: $",i.total.toFixed(2)]})]}),(0,Cr.jsxs)(vl,{children:[(0,Cr.jsx)(bl,{onClick:x,children:"Track Another Order"}),(0,Cr.jsx)(bl,{onClick:()=>{g&&i?r("/request-services",{state:{orderId:i.orderId}}):r("/request-services")},children:"Request Services"})]})]}),g&&!i&&(0,Cr.jsx)(vl,{children:(0,Cr.jsx)(bl,{onClick:x,children:"Track Another Order"})})]})},xl=xr.div`
  padding: 40px 20px; /* Match About Us page padding */
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
  }

  p {
    color: #555;
    margin-bottom: 15px;
  }
`,wl=xr.div`
  margin: 20px auto;
  max-width: 400px;
`,Sl=xr.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333;
`,kl=xr.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`,Cl=xr.button`
  margin-top: 15px;
  padding: 12px 20px;
  font-size: 1rem;
  background-color: #4a90e2;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`,El=xr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 15px;
`,jl=xr.label`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 18px;
    height: 18px;
    accent-color: #4a90e2;
  }

  span {
    font-size: 1rem;
    color: #333;
  }
`,_l=xr.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`,zl=xr.div`
  margin-top: 30px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Pl=(xr.div`
  margin-top: 20px;
  text-align: left;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;
      font-size: 1rem;
      color: #333;
    }
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-top: 10px;
  }
`,xr.div`
  display: flex;
  justify-content: center; /* Center the buttons horizontally */
  gap: 20px; /* Increased gap between buttons */
  margin-top: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 15px;
  }
`),Tl=xr.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4a90e2;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`,Ol=()=>{const{getOrderById:e}=(0,t.useContext)(ui),n=G(),r=J(),[a,o]=(0,t.useState)(""),[i,l]=(0,t.useState)(""),[s,u]=(0,t.useState)(!1),[c,d]=(0,t.useState)([]),[p,f]=(0,t.useState)(""),[m,h]=(0,t.useState)(!1),[g,v]=(0,t.useState)(!1),[b,y]=(0,t.useState)(null);(0,t.useEffect)((()=>{var e;null!==(e=n.state)&&void 0!==e&&e.orderId&&!g&&(o(n.state.orderId),x(n.state.orderId),v(!0))}),[n.state,g]);const x=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if(""!==t.trim()){const n=e(t.trim());n?(u(!0),y(n),ko.success("Order ID verified!",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"})):(u(!1),y(null),ko.error("Invalid Order ID. Please check and try again.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"}))}else""!==i.trim()?/^\d+$/.test(i.trim())?(u(!0),ko.success("Table number verified!",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"})):(u(!1),ko.error("Invalid Table Number. Please enter a valid number.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})):ko.warn("Please enter your Order ID or Table Number.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"})};return(0,Cr.jsxs)(xl,{children:[(0,Cr.jsx)(ya,{}),(0,Cr.jsx)("h1",{children:"Request Additional Services"}),!s&&(0,Cr.jsxs)(wl,{children:[(0,Cr.jsx)(Sl,{htmlFor:"orderId",children:"Enter your Order ID:"}),(0,Cr.jsx)(kl,{id:"orderId",type:"text",value:a,onChange:e=>o(e.target.value),"aria-label":"Order ID"}),(0,Cr.jsx)(Cl,{onClick:()=>x(),children:"Verify"})]}),s&&(0,Cr.jsxs)(wl,{children:[(0,Cr.jsx)(El,{children:["Water","Napkins","Condiments","Cutlery","Assistance","Other"].map(((e,t)=>(0,Cr.jsxs)(jl,{children:[(0,Cr.jsx)("input",{type:"checkbox",value:e,onChange:()=>(e=>{c.includes(e)?d(c.filter((t=>t!==e))):d([...c,e])})(e),checked:c.includes(e)}),(0,Cr.jsx)("span",{children:e})]},t)))}),c.includes("Other")&&(0,Cr.jsxs)(Cr.Fragment,{children:[(0,Cr.jsx)(Sl,{htmlFor:"otherRequest",children:"Please specify:"}),(0,Cr.jsx)(_l,{id:"otherRequest",rows:"3",value:p,onChange:e=>f(e.target.value),"aria-label":"Other Service Request"})]}),(0,Cr.jsx)(Cl,{onClick:()=>{0!==c.length||p.trim()?(h(!0),setTimeout((()=>{h(!1),ko.success("Your service requests have been submitted!",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"}),o(""),l(""),u(!1),d([]),f(""),y(null),v(!1)}),2e3)):ko.warn("Please select at least one service or enter a custom request.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"})},disabled:m,children:m?"Submitting...":"Submit Request"})]}),s&&b&&(0,Cr.jsxs)(zl,{children:[(0,Cr.jsx)("h3",{children:"Order Details:"}),(0,Cr.jsx)("ul",{children:b.items.map(((e,t)=>(0,Cr.jsxs)("li",{children:[e.quantity," x ",e.name]},t)))}),(0,Cr.jsxs)("p",{children:["Total: $",b.total.toFixed(2)]})]}),s&&(0,Cr.jsxs)(Pl,{children:[(0,Cr.jsx)(Tl,{onClick:()=>{u(!1),o(""),l(""),d([]),f(""),y(null),v(!1)},children:"Request Services for Another Order"}),(0,Cr.jsx)(Tl,{onClick:()=>{s&&b?r("/order-status",{state:{orderId:b.orderId}}):r("/order-status")},children:"Track Order"})]})]})},Nl=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=vr.apply(void 0,Ne([e],n,!1)),o="sc-global-".concat(tn(JSON.stringify(a))),i=new wr(a,o),l=function(e){var n=tr(),r=t.useContext(pr),a=t.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&s(a,e,n.styleSheet,r,n.stylis),t.useLayoutEffect((function(){if(!n.styleSheet.server)return s(a,e,n.styleSheet,r,n.stylis),function(){return i.removeStyles(a,n.styleSheet)}}),[a,e,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,$t,n,a);else{var o=Oe(Oe({},t),{theme:Wt(t,r,l.defaultProps)});i.renderStyles(e,o,n,a)}}return t.memo(l)})`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #fff;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }
`,Rl=xr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Il=xr.main`
  flex: 1;
  padding-top: 70px; /* Added padding to prevent overlap with fixed header */

  @media (max-width: 768px) {
    padding-top: 60px; /* Adjust padding for smaller screens if needed */
  }
`;const Ll=function(){return(0,Cr.jsx)(ga,{children:(0,Cr.jsxs)(Rl,{children:[(0,Cr.jsx)(Nl,{}),(0,Cr.jsx)(da,{}),(0,Cr.jsx)(Il,{children:(0,Cr.jsxs)(ve,{children:[(0,Cr.jsx)(he,{path:"/",element:(0,Cr.jsx)(Sa,{})}),(0,Cr.jsx)(he,{path:"/menu",element:(0,Cr.jsx)(qo,{})}),(0,Cr.jsx)(he,{path:"/about",element:(0,Cr.jsx)(Xo,{})}),(0,Cr.jsx)(he,{path:"/contact",element:(0,Cr.jsx)(si,{})}),(0,Cr.jsx)(he,{path:"/checkout",element:(0,Cr.jsx)(il,{})}),(0,Cr.jsx)(he,{path:"/order-status",element:(0,Cr.jsx)(yl,{})}),(0,Cr.jsx)(he,{path:"/request-services",element:(0,Cr.jsx)(Ol,{})})," ",(0,Cr.jsx)(he,{path:"*",element:(0,Cr.jsx)("h1",{children:"404: Page Not Found"})})]})}),(0,Cr.jsx)(fa,{})]})})};a.createRoot(document.getElementById("root")).render((0,Cr.jsx)(t.StrictMode,{children:(0,Cr.jsx)(zr,{children:(0,Cr.jsx)(pi,{children:(0,Cr.jsxs)(Ee,{children:[(0,Cr.jsx)(Ll,{}),(0,Cr.jsx)(Oo,{})]})})})}))})()})();
//# sourceMappingURL=main.04e244a9.js.map