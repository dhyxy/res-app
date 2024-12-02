/*! For license information please see main.3f5b1a9d.js.LICENSE.txt */
(()=>{var e={730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e,t,n,r,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(m,e)||!d.call(f,e)&&(p.test(e)?m[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,b);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,b);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,b);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),O=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var I=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var D,A=Object.assign;function M(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var F=!1;function B(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),a=r.stack.split("\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l]){var s="\n"+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function $(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case E:return"Profiler";case C:return"StrictMode";case z:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case O:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case _:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function K(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){X(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ae(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(fe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ve=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ce=null;function Ee(e){if(e=xo(e)){if("function"!==typeof Se)throw Error(a(280));var t=e.stateNode;t&&(t=So(t),Se(e.stateNode,e.type,t))}}function je(e){ke?Ce?Ce.push(e):Ce=[e]:ke=e}function Oe(){if(ke){var e=ke,t=Ce;if(Ce=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function ze(){}var Te=!1;function _e(e,t,n){if(Te)return e(t,n);Te=!0;try{return Pe(e,t,n)}finally{Te=!1,(null!==ke||null!==Ce)&&(ze(),Oe())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=So(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Ie=!1;if(u)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Ie=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(ue){Ie=!1}function Le(e,t,n,r,o,a,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var De=!1,Ae=null,Me=!1,Fe=null,Be={onError:function(e){De=!0,Ae=e}};function $e(e,t,n,r,o,a,i,l,s){De=!1,Ae=null,Le.apply(Be,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(He(e)!==e)throw Error(a(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return We(o),e;if(i===r)return We(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ye=o.unstable_scheduleCallback,Qe=o.unstable_cancelCallback,Ke=o.unstable_shouldYield,Ge=o.unstable_requestPaint,Xe=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,at=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~o;0!==l?r=dt(l):0!==(a&=i)&&(r=dt(a))}else 0!==(i=n&~o)?r=dt(i):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(a=t&-t)||16===o&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-it(t)),r|=e[n],t&=~o;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Ct,Et,jt=!1,Ot=[],Pt=null,zt=null,Tt=null,_t=new Map,Nt=new Map,It=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":_t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function Dt(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function At(e){var t=yo(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Et(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xo(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ft(e,t,n){Mt(e)&&n.delete(t)}function Bt(){jt=!1,null!==Pt&&Mt(Pt)&&(Pt=null),null!==zt&&Mt(zt)&&(zt=null),null!==Tt&&Mt(Tt)&&(Tt=null),_t.forEach(Ft),Nt.forEach(Ft)}function $t(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Bt)))}function Ht(e){function t(t){return $t(t,e)}if(0<Ot.length){$t(Ot[0],e);for(var n=1;n<Ot.length;n++){var r=Ot[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&$t(Pt,e),null!==zt&&$t(zt,e),null!==Tt&&$t(Tt,e),_t.forEach(t),Nt.forEach(t),n=0;n<It.length;n++)(r=It[n]).blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&null===(n=It[0]).blockedOn;)At(n),null===n.blockedOn&&It.shift()}var Ut=x.ReactCurrentBatchConfig,Wt=!0;function Vt(e,t,n,r){var o=yt,a=Ut.transition;Ut.transition=null;try{yt=1,Yt(e,t,n,r)}finally{yt=o,Ut.transition=a}}function qt(e,t,n,r){var o=yt,a=Ut.transition;Ut.transition=null;try{yt=4,Yt(e,t,n,r)}finally{yt=o,Ut.transition=a}}function Yt(e,t,n,r){if(Wt){var o=Kt(e,t,n,r);if(null===o)Wr(e,t,r,Qt,n),Lt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Pt=Dt(Pt,e,t,n,r,o),!0;case"dragenter":return zt=Dt(zt,e,t,n,r,o),!0;case"mouseover":return Tt=Dt(Tt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return _t.set(a,Dt(_t.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Nt.set(a,Dt(Nt.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<Rt.indexOf(e)){for(;null!==o;){var a=xo(o);if(null!==a&&wt(a),null===(a=Kt(e,t,n,r))&&Wr(e,t,r,Qt,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Qt=null;function Kt(e,t,n,r){if(Qt=null,null!==(e=yo(e=we(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,o="value"in Xt?Xt.value:Xt.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=A({},cn,{view:0,detail:0}),pn=on(dn),fn=A({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=on(fn),hn=on(A({},fn,{dataTransfer:0})),gn=on(A({},dn,{relatedTarget:0})),vn=on(A({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=A({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=on(bn),xn=on(A({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return Cn}var jn=A({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),On=on(jn),Pn=on(A({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=on(A({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Tn=on(A({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),_n=A({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=on(_n),In=[9,13,27,32],Rn=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var Dn=u&&"TextEvent"in window&&!Ln,An=u&&(!Rn||Ln&&8<Ln&&11>=Ln),Mn=String.fromCharCode(32),Fn=!1;function Bn(e,t){switch(e){case"keyup":return-1!==In.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $n(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Vn(e,t,n,r){je(r),0<(t=qr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Yn=null;function Qn(e){Mr(e,0)}function Kn(e){if(Y(wo(e)))return e}function Gn(e,t){if("change"===e)return t}var Xn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){qn&&(qn.detachEvent("onpropertychange",nr),Yn=qn=null)}function nr(e){if("value"===e.propertyName&&Kn(Yn)){var t=[];Vn(t,Yn,e,we(e)),_e(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kn(Yn)}function ar(e,t){if("click"===e)return Kn(t)}function ir(e,t){if("input"===e||"change"===e)return Kn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=void 0===r.end?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=ur(n,a);var i=ur(n,r);o&&i&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,br=null,yr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&sr(br,r)||(br=r,0<(r=qr(vr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Cr={};function Er(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Cr)return kr[e]=n[t];return e}u&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var jr=Er("animationend"),Or=Er("animationiteration"),Pr=Er("animationstart"),zr=Er("transitionend"),Tr=new Map,_r="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Tr.set(e,t),s(t,[e])}for(var Ir=0;Ir<_r.length;Ir++){var Rr=_r[Ir];Nr(Rr.toLowerCase(),"on"+(Rr[0].toUpperCase()+Rr.slice(1)))}Nr(jr,"onAnimationEnd"),Nr(Or,"onAnimationIteration"),Nr(Pr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(zr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Ar(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,i,l,s,c){if($e.apply(this,arguments),De){if(!De)throw Error(a(198));var u=Ae;De=!1,Ae=null,Me||(Me=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Ar(o,l,c),a=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Ar(o,l,c),a=s}}}if(Me)throw e=Fe,Me=!1,Fe=null,e}function Fr(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Ur(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Ur(n,e,r,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[$r]){e[$r]=!0,i.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[$r]||(t[$r]=!0,Br("selectionchange",!1,t))}}function Ur(e,t,n,r){switch(Gt(t)){case 1:var o=Vt;break;case 4:o=qt;break;default:o=Yt}n=o.bind(null,t,n,e),o=void 0,!Ie||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,o){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=yo(l)))return;if(5===(s=i.tag)||6===s){r=a=i;continue e}l=l.parentNode}}r=r.return}_e((function(){var r=a,o=we(n),i=[];e:{var l=Tr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=On;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=zn;break;case jr:case Or:case Pr:s=vn;break;case zr:s=Tn;break;case"scroll":s=pn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,m=r;null!==m;){var h=(f=m).stateNode;if(5===f.tag&&null!==h&&(f=h,null!==p&&(null!=(h=Ne(m,p))&&u.push(Vr(m,h,f)))),d)break;m=m.return}0<u.length&&(l=new s(l,c,null,n,o),i.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(c=n.relatedTarget||n.fromElement)||!yo(c)&&!c[ho])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?yo(c):null)&&(c!==(d=He(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=mn,h="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(u=Pn,h="onPointerLeave",p="onPointerEnter",m="pointer"),d=null==s?l:wo(s),f=null==c?l:wo(c),(l=new u(h,m+"leave",s,n,o)).target=d,l.relatedTarget=f,h=null,yo(o)===r&&((u=new u(p,m+"enter",c,n,o)).target=f,u.relatedTarget=d,h=u),d=h,s&&c)e:{for(p=c,m=0,f=u=s;f;f=Yr(f))m++;for(f=0,h=p;h;h=Yr(h))f++;for(;0<m-f;)u=Yr(u),m--;for(;0<f-m;)p=Yr(p),f--;for(;m--;){if(u===p||null!==p&&u===p.alternate)break e;u=Yr(u),p=Yr(p)}u=null}else u=null;null!==s&&Qr(i,l,s,u,!1),null!==c&&null!==d&&Qr(i,d,c,u,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Gn;else if(Wn(l))if(Xn)g=ir;else{g=or;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ar);switch(g&&(g=g(e,r))?Vn(i,g,n,o):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?wo(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,br=null);break;case"focusout":br=vr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(i,n,o);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":xr(i,n,o)}var b;if(Rn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hn?Bn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(An&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Hn&&(b=en()):(Jt="value"in(Xt=o)?Xt.value:Xt.textContent,Hn=!0)),0<(v=qr(r,y)).length&&(y=new xn(y,e,null,n,o),i.push({event:y,listeners:v}),b?y.data=b:null!==(b=$n(n))&&(y.data=b))),(b=Dn?function(e,t){switch(e){case"compositionend":return $n(t);case"keypress":return 32!==t.which?null:(Fn=!0,Mn);case"textInput":return(e=t.data)===Mn&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!Rn&&Bn(e,t)?(e=en(),Zt=Jt=Xt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return An&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(o=new xn("onBeforeInput","beforeinput",null,n,o),i.push({event:o,listeners:r}),o.data=b))}Mr(i,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Ne(e,n))&&r.unshift(Vr(e,a,o)),null!=(a=Ne(e,t))&&r.push(Vr(e,a,o))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,o?null!=(s=Ne(n,a))&&i.unshift(Vr(n,s,l)):o||null!=(s=Ne(n,a))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Kr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Kr,"\n").replace(Gr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(a(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,ao="function"===typeof Promise?Promise:void 0,io="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ao?function(e){return ao.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout((function(){throw e}))}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Ht(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),fo="__reactFiber$"+po,mo="__reactProps$"+po,ho="__reactContainer$"+po,go="__reactEvents$"+po,vo="__reactListeners$"+po,bo="__reactHandles$"+po;function yo(e){var t=e[fo];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ho]||n[fo]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uo(e);null!==e;){if(n=e[fo])return n;e=uo(e)}return t}n=(e=n).parentNode}return null}function xo(e){return!(e=e[fo]||e[ho])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function So(e){return e[mo]||null}var ko=[],Co=-1;function Eo(e){return{current:e}}function jo(e){0>Co||(e.current=ko[Co],ko[Co]=null,Co--)}function Oo(e,t){Co++,ko[Co]=e.current,e.current=t}var Po={},zo=Eo(Po),To=Eo(!1),_o=Po;function No(e,t){var n=e.type.contextTypes;if(!n)return Po;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Io(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ro(){jo(To),jo(zo)}function Lo(e,t,n){if(zo.current!==Po)throw Error(a(168));Oo(zo,t),Oo(To,n)}function Do(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(a(108,U(e)||"Unknown",o));return A({},n,r)}function Ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Po,_o=zo.current,Oo(zo,e),Oo(To,To.current),!0}function Mo(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Do(e,t,_o),r.__reactInternalMemoizedMergedChildContext=e,jo(To),jo(zo),Oo(zo,e)):jo(To),Oo(To,n)}var Fo=null,Bo=!1,$o=!1;function Ho(e){null===Fo?Fo=[e]:Fo.push(e)}function Uo(){if(!$o&&null!==Fo){$o=!0;var e=0,t=yt;try{var n=Fo;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Fo=null,Bo=!1}catch(o){throw null!==Fo&&(Fo=Fo.slice(e+1)),Ye(Ze,Uo),o}finally{yt=t,$o=!1}}return null}var Wo=[],Vo=0,qo=null,Yo=0,Qo=[],Ko=0,Go=null,Xo=1,Jo="";function Zo(e,t){Wo[Vo++]=Yo,Wo[Vo++]=qo,qo=e,Yo=t}function ea(e,t,n){Qo[Ko++]=Xo,Qo[Ko++]=Jo,Qo[Ko++]=Go,Go=e;var r=Xo;e=Jo;var o=32-it(r)-1;r&=~(1<<o),n+=1;var a=32-it(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Xo=1<<32-it(t)+o|n<<o|r,Jo=a+e}else Xo=1<<a|n<<o|r,Jo=e}function ta(e){null!==e.return&&(Zo(e,1),ea(e,1,0))}function na(e){for(;e===qo;)qo=Wo[--Vo],Wo[Vo]=null,Yo=Wo[--Vo],Wo[Vo]=null;for(;e===Go;)Go=Qo[--Ko],Qo[Ko]=null,Jo=Qo[--Ko],Qo[Ko]=null,Xo=Qo[--Ko],Qo[Ko]=null}var ra=null,oa=null,aa=!1,ia=null;function la(e,t){var n=_c(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,oa=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,oa=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Go?{id:Xo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=_c(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,oa=null,!0);default:return!1}}function ca(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ua(e){if(aa){var t=oa;if(t){var n=t;if(!sa(e,t)){if(ca(e))throw Error(a(418));t=co(n.nextSibling);var r=ra;t&&sa(e,t)?la(r,n):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(ca(e))throw Error(a(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function pa(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oa)){if(ca(e))throw fa(),Error(a(418));for(;t;)la(e,t),t=co(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oa=co(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oa=null}}else oa=ra?co(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=oa;e;)e=co(e.nextSibling)}function ma(){oa=ra=null,aa=!1}function ha(e){null===ia?ia=[e]:ia.push(e)}var ga=x.ReactCurrentBatchConfig;function va(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ba(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){return(0,e._init)(e._payload)}function xa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Ic(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Ac(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===N&&ya(a)===t.type)?((r=o(t,n.props)).ref=va(e,t,n),r.return=e,r):((r=Rc(n.type,n.key,n.props,null,e.mode,r)).ref=va(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mc(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ac(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Rc(t.type,t.key,t.props,null,e.mode,n)).ref=va(e,null,t),n.return=e,n;case S:return(t=Mc(t,e.mode,n)).return=e,t;case N:return p(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;ba(e,t)}return null}function f(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?c(e,t,n,r):null;case S:return n.key===o?u(e,t,n,r):null;case N:return f(e,t,(o=n._init)(n._payload),r)}if(te(n)||L(n))return null!==o?null:d(e,t,n,r,null);ba(e,n)}return null}function m(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case S:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case N:return m(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,o,null);ba(t,r)}return null}function h(o,a,l,s){for(var c=null,u=null,d=a,h=a=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var v=f(o,d,l[h],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,h),null===u?c=v:u.sibling=v,u=v,d=g}if(h===l.length)return n(o,d),aa&&Zo(o,h),c;if(null===d){for(;h<l.length;h++)null!==(d=p(o,l[h],s))&&(a=i(d,a,h),null===u?c=d:u.sibling=d,u=d);return aa&&Zo(o,h),c}for(d=r(o,d);h<l.length;h++)null!==(g=m(d,o,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),a=i(g,a,h),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(o,e)})),aa&&Zo(o,h),c}function g(o,l,s,c){var u=L(s);if("function"!==typeof u)throw Error(a(150));if(null==(s=u.call(s)))throw Error(a(151));for(var d=u=null,h=l,g=l=0,v=null,b=s.next();null!==h&&!b.done;g++,b=s.next()){h.index>g?(v=h,h=null):v=h.sibling;var y=f(o,h,b.value,c);if(null===y){null===h&&(h=v);break}e&&h&&null===y.alternate&&t(o,h),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y,h=v}if(b.done)return n(o,h),aa&&Zo(o,g),u;if(null===h){for(;!b.done;g++,b=s.next())null!==(b=p(o,b.value,c))&&(l=i(b,l,g),null===d?u=b:d.sibling=b,d=b);return aa&&Zo(o,g),u}for(h=r(o,h);!b.done;g++,b=s.next())null!==(b=m(h,o,g,b.value,c))&&(e&&null!==b.alternate&&h.delete(null===b.key?g:b.key),l=i(b,l,g),null===d?u=b:d.sibling=b,d=b);return e&&h.forEach((function(e){return t(o,e)})),aa&&Zo(o,g),u}return function e(r,a,i,s){if("object"===typeof i&&null!==i&&i.type===k&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var c=i.key,u=a;null!==u;){if(u.key===c){if((c=i.type)===k){if(7===u.tag){n(r,u.sibling),(a=o(u,i.props.children)).return=r,r=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===N&&ya(c)===u.type){n(r,u.sibling),(a=o(u,i.props)).ref=va(r,u,i),a.return=r,r=a;break e}n(r,u);break}t(r,u),u=u.sibling}i.type===k?((a=Lc(i.props.children,r.mode,s,i.key)).return=r,r=a):((s=Rc(i.type,i.key,i.props,null,r.mode,s)).ref=va(r,a,i),s.return=r,r=s)}return l(r);case S:e:{for(u=i.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===i.containerInfo&&a.stateNode.implementation===i.implementation){n(r,a.sibling),(a=o(a,i.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Mc(i,r.mode,s)).return=r,r=a}return l(r);case N:return e(r,a,(u=i._init)(i._payload),s)}if(te(i))return h(r,a,i,s);if(L(i))return g(r,a,i,s);ba(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==a&&6===a.tag?(n(r,a.sibling),(a=o(a,i)).return=r,r=a):(n(r,a),(a=Ac(i,r.mode,s)).return=r,r=a),l(r)):n(r,a)}}var wa=xa(!0),Sa=xa(!1),ka=Eo(null),Ca=null,Ea=null,ja=null;function Oa(){ja=Ea=Ca=null}function Pa(e){var t=ka.current;jo(ka),e._currentValue=t}function za(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ta(e,t){Ca=e,ja=Ea=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function _a(e){var t=e._currentValue;if(ja!==e)if(e={context:e,memoizedValue:t,next:null},null===Ea){if(null===Ca)throw Error(a(308));Ea=e,Ca.dependencies={lanes:0,firstContext:e}}else Ea=Ea.next=e;return t}var Na=null;function Ia(e){null===Na?Na=[e]:Na.push(e)}function Ra(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Ia(t)):(n.next=o.next,o.next=n),t.interleaved=n,La(e,r)}function La(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Da=!1;function Aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ma(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,La(e,n)}return null===(o=r.interleaved)?(t.next=t,Ia(r)):(t.next=o.next,o.next=t),r.interleaved=t,La(e,n)}function $a(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var o=e.updateQueue;Da=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?a=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(i=0,u=c=s=null,l=a;;){var p=l.lane,f=l.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(p=t,f=n,h.tag){case 1:if("function"===typeof(m=h.payload)){d=m.call(f,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=h.payload)?m.call(f,d,p):m)||void 0===p)break e;d=A({},d,p);break e;case 2:Da=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,i|=p;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(p=l).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{i|=o.lane,o=o.next}while(o!==t)}else null===a&&(o.shared.lanes=0);Ds|=i,e.lanes=i,e.memoizedState=d}}function Wa(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(a(191,o));o.call(r)}}}var Va={},qa=Eo(Va),Ya=Eo(Va),Qa=Eo(Va);function Ka(e){if(e===Va)throw Error(a(174));return e}function Ga(e,t){switch(Oo(Qa,t),Oo(Ya,e),Oo(qa,Va),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}jo(qa),Oo(qa,t)}function Xa(){jo(qa),jo(Ya),jo(Qa)}function Ja(e){Ka(Qa.current);var t=Ka(qa.current),n=se(t,e.type);t!==n&&(Oo(Ya,e),Oo(qa,n))}function Za(e){Ya.current===e&&(jo(qa),jo(Ya))}var ei=Eo(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var oi=x.ReactCurrentDispatcher,ai=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ci=null,ui=!1,di=!1,pi=0,fi=0;function mi(){throw Error(a(321))}function hi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,o,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=null===e||null===e.memoizedState?Zi:el,e=n(r,o),di){i=0;do{if(di=!1,pi=0,25<=i)throw Error(a(301));i+=1,ci=si=null,t.updateQueue=null,oi.current=tl,e=n(r,o)}while(di)}if(oi.current=Ji,t=null!==si&&null!==si.next,ii=0,ci=si=li=null,ui=!1,t)throw Error(a(300));return e}function vi(){var e=0!==pi;return pi=0,e}function bi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ci?li.memoizedState=ci=e:ci=ci.next=e,ci}function yi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ci?li.memoizedState:ci.next;if(null!==t)ci=t,si=e;else{if(null===e)throw Error(a(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ci?li.memoizedState=ci=e:ci=ci.next=e}return ci}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=yi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=si,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(null!==o){i=o.next,r=r.baseState;var s=l=null,c=null,u=i;do{var d=u.lane;if((ii&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=r):c=c.next=p,li.lanes|=d,Ds|=d}u=u.next}while(null!==u&&u!==i);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{i=o.lane,li.lanes|=i,Ds|=i,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=yi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);lr(i,t.memoizedState)||(yl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ki(){}function Ci(e,t){var n=li,r=yi(),o=t(),i=!lr(r.memoizedState,o);if(i&&(r.memoizedState=o,yl=!0),r=r.queue,Di(Oi.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ci&&1&ci.memoizedState.tag){if(n.flags|=2048,_i(9,ji.bind(null,n,r,o,t),void 0,null),null===zs)throw Error(a(349));0!==(30&ii)||Ei(n,t,o)}return o}function Ei(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ji(e,t,n,r){t.value=n,t.getSnapshot=r,Pi(t)&&zi(e)}function Oi(e,t,n){return n((function(){Pi(t)&&zi(e)}))}function Pi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function zi(e){var t=La(e,1);null!==t&&nc(t,e,1,-1)}function Ti(e){var t=bi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Qi.bind(null,li,e),[t.memoizedState,e]}function _i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ni(){return yi().memoizedState}function Ii(e,t,n,r){var o=bi();li.flags|=e,o.memoizedState=_i(1|t,n,void 0,void 0===r?null:r)}function Ri(e,t,n,r){var o=yi();r=void 0===r?null:r;var a=void 0;if(null!==si){var i=si.memoizedState;if(a=i.destroy,null!==r&&hi(r,i.deps))return void(o.memoizedState=_i(t,n,a,r))}li.flags|=e,o.memoizedState=_i(1|t,n,a,r)}function Li(e,t){return Ii(8390656,8,e,t)}function Di(e,t){return Ri(2048,8,e,t)}function Ai(e,t){return Ri(4,2,e,t)}function Mi(e,t){return Ri(4,4,e,t)}function Fi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Bi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ri(4,4,Fi.bind(null,t,e),n)}function $i(){}function Hi(e,t){var n=yi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&hi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ui(e,t){var n=yi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&hi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=ht(),li.lanes|=n,Ds|=n,e.baseState=!0),t)}function Vi(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{yt=n,ai.transition=r}}function qi(){return yi().memoizedState}function Yi(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ki(e))Gi(t,n);else if(null!==(n=Ra(e,t,n,r))){nc(n,e,r,ec()),Xi(n,t,r)}}function Qi(e,t,n){var r=tc(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ki(e))Gi(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(o.next=o,Ia(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(c){}null!==(n=Ra(e,t,o,r))&&(nc(n,e,r,o=ec()),Xi(n,t,r))}}function Ki(e){var t=e.alternate;return e===li||null!==t&&t===li}function Gi(e,t){di=ui=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Ji={readContext:_a,useCallback:mi,useContext:mi,useEffect:mi,useImperativeHandle:mi,useInsertionEffect:mi,useLayoutEffect:mi,useMemo:mi,useReducer:mi,useRef:mi,useState:mi,useDebugValue:mi,useDeferredValue:mi,useTransition:mi,useMutableSource:mi,useSyncExternalStore:mi,useId:mi,unstable_isNewReconciler:!1},Zi={readContext:_a,useCallback:function(e,t){return bi().memoizedState=[e,void 0===t?null:t],e},useContext:_a,useEffect:Li,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ii(4194308,4,Fi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ii(4,2,e,t)},useMemo:function(e,t){var n=bi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bi().memoizedState=e},useState:Ti,useDebugValue:$i,useDeferredValue:function(e){return bi().memoizedState=e},useTransition:function(){var e=Ti(!1),t=e[0];return e=Vi.bind(null,e[1]),bi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,o=bi();if(aa){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===zs)throw Error(a(349));0!==(30&ii)||Ei(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Li(Oi.bind(null,r,i,e),[e]),r.flags|=2048,_i(9,ji.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=bi(),t=zs.identifierPrefix;if(aa){var n=Jo;t=":"+t+"R"+(n=(Xo&~(1<<32-it(Xo)-1)).toString(32)+n),0<(n=pi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:_a,useCallback:Hi,useContext:_a,useEffect:Di,useImperativeHandle:Bi,useInsertionEffect:Ai,useLayoutEffect:Mi,useMemo:Ui,useReducer:wi,useRef:Ni,useState:function(){return wi(xi)},useDebugValue:$i,useDeferredValue:function(e){return Wi(yi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],yi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ci,useId:qi,unstable_isNewReconciler:!1},tl={readContext:_a,useCallback:Hi,useContext:_a,useEffect:Di,useImperativeHandle:Bi,useInsertionEffect:Ai,useLayoutEffect:Mi,useMemo:Ui,useReducer:Si,useRef:Ni,useState:function(){return Si(xi)},useDebugValue:$i,useDeferredValue:function(e){var t=yi();return null===si?t.memoizedState=e:Wi(t,si.memoizedState,e)},useTransition:function(){return[Si(xi)[0],yi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ci,useId:qi,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=A({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:A({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),a=Fa(r,o);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ba(e,a,o))&&(nc(t,e,o,r),$a(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),a=Fa(r,o);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ba(e,a,o))&&(nc(t,e,o,r),$a(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),o=Fa(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Ba(e,o,r))&&(nc(t,e,r,n),$a(t,e,r))}};function al(e,t,n,r,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,a))}function il(e,t,n){var r=!1,o=Po,a=t.contextType;return"object"===typeof a&&null!==a?a=_a(a):(o=Io(t)?_o:zo.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?No(e,o):Po),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Aa(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=_a(a):(a=Io(t)?_o:zo.current,o.context=No(e,a)),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rl(e,t,a,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Ua(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=$(r),r=r.return}while(r);var o=n}catch(a){o="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,n){(n=Fa(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,Vs=r),dl(0,t)},n}function ml(e,t,n){(n=Fa(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===qs?qs=new Set([this]):qs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function hl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ec.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fa(-1,1)).tag=2,Ba(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var bl=x.ReactCurrentOwner,yl=!1;function xl(e,t,n,r){t.child=null===e?Sa(t,null,n,r):wa(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var a=t.ref;return Ta(t,o),r=gi(e,t,n,r,a,o),n=vi(),null===e||yl?(aa&&n&&ta(t),t.flags|=1,xl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wl(e,t,o))}function Sl(e,t,n,r,o){if(null===e){var a=n.type;return"function"!==typeof a||Nc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Rc(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,kl(e,t,a,r,o))}if(a=e.child,0===(e.lanes&o)){var i=a.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Wl(e,t,o)}return t.flags|=1,(e=Ic(a,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=a,0===(e.lanes&o))return t.lanes=e.lanes,Wl(e,t,o);0!==(131072&e.flags)&&(yl=!0)}}return jl(e,t,n,r,o)}function Cl(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oo(Is,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oo(Is,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Oo(Is,Ns),Ns|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Oo(Is,Ns),Ns|=r;return xl(e,t,o,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,n,r,o){var a=Io(n)?_o:zo.current;return a=No(t,a),Ta(t,o),n=gi(e,t,n,r,a,o),r=vi(),null===e||yl?(aa&&r&&ta(t),t.flags|=1,xl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wl(e,t,o))}function Ol(e,t,n,r,o){if(Io(n)){var a=!0;Ao(t)}else a=!1;if(Ta(t,o),null===t.stateNode)Ul(e,t),il(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=n.contextType;"object"===typeof c&&null!==c?c=_a(c):c=No(t,c=Io(n)?_o:zo.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,i,r,c),Da=!1;var p=t.memoizedState;i.state=p,Ua(t,r,i,o),s=t.memoizedState,l!==r||p!==s||To.current||Da?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Da||al(t,n,l,r,p,s,c))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ma(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),i.props=c,d=t.pendingProps,p=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=_a(s):s=No(t,s=Io(n)?_o:zo.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,i,r,s),Da=!1,p=t.memoizedState,i.state=p,Ua(t,r,i,o);var m=t.memoizedState;l!==d||p!==m||To.current||Da?("function"===typeof f&&(rl(t,n,f,r),m=t.memoizedState),(c=Da||al(t,n,c,r,p,m,s)||!1)?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,m,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,m,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),i.props=r,i.state=m,i.context=s,r=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,a,o)}function Pl(e,t,n,r,o,a){El(e,t);var i=0!==(128&t.flags);if(!r&&!i)return o&&Mo(t,n,!1),Wl(e,t,a);r=t.stateNode,bl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,l,a)):xl(e,t,l,a),t.memoizedState=r.state,o&&Mo(t,n,!0),t.child}function zl(e){var t=e.stateNode;t.pendingContext?Lo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Lo(0,t.context,!1),Ga(e,t.containerInfo)}function Tl(e,t,n,r,o){return ma(),ha(o),t.flags|=256,xl(e,t,n,r),t.child}var _l,Nl,Il,Rl,Ll={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Al(e,t,n){var r,o=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Oo(ei,1&i),null===e)return ua(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Dc(s,o,0,null),e=Lc(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Ll,e):Ml(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,o,i,l){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,l,r=ul(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Dc({mode:"visible",children:r.children},o,0,null),(i=Lc(i,o,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wa(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Ll,i);if(0===(1&t.mode))return Fl(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,l,r=ul(i=Error(a(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=zs)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==i.retryLane&&(i.retryLane=o,La(e,o),nc(r,e,o,-1))}return hc(),Fl(e,t,l,r=ul(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Oc.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,oa=co(o.nextSibling),ra=t,aa=!0,ia=null,null!==e&&(Qo[Ko++]=Xo,Qo[Ko++]=Jo,Qo[Ko++]=Go,Xo=e.id,Jo=e.overflow,Go=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,i,n);if(l){l=o.fallback,s=t.mode,r=(i=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Ic(i,c)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Ic(r,l):(l=Lc(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,o}return e=(l=e.child).sibling,o=Ic(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ml(e,t){return(t=Dc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&ha(r),wa(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),za(e.return,t,n)}function $l(e,t,n,r,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Hl(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bl(e,n,t);else if(19===e.tag)Bl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oo(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$l(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ti(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$l(t,!0,n,null,a);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ul(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Ic(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ic(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yl(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ql(t),null;case 1:case 17:return Io(t.type)&&Ro(),ql(t),null;case 3:return r=t.stateNode,Xa(),jo(To),jo(zo),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(pa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ia&&(ic(ia),ia=null))),Nl(e,t),ql(t),null;case 5:Za(t);var o=Ka(Qa.current);if(n=t.type,null!==e&&null!=t.stateNode)Il(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return ql(t),null}if(e=Ka(qa.current),pa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fo]=t,r[mo]=i,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(o=0;o<Lr.length;o++)Fr(Lr[o],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":G(r,i),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fr("invalid",r);break;case"textarea":oe(r,i),Fr("invalid",r)}for(var s in be(n,i),o=null,i)if(i.hasOwnProperty(s)){var c=i[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,c,e),o=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,c,e),o=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":q(r),Z(r,i,!0);break;case"textarea":q(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fo]=t,e[mo]=r,_l(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),o=r;break;case"iframe":case"object":case"embed":Fr("load",e),o=r;break;case"video":case"audio":for(o=0;o<Lr.length;o++)Fr(Lr[o],e);o=r;break;case"source":Fr("error",e),o=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),o=r;break;case"details":Fr("toggle",e),o=r;break;case"input":G(e,r),o=K(e,r),Fr("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=A({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Fr("invalid",e)}for(i in be(n,o),c=o)if(c.hasOwnProperty(i)){var u=c[i];"style"===i?ge(e,u):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===i?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=u&&"onScroll"===i&&Fr("scroll",e):null!=u&&y(e,i,u,s))}switch(n){case"input":q(e),Z(e,r,!1);break;case"textarea":q(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ql(t),null;case 6:if(e&&null!=t.stateNode)Rl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Ka(Qa.current),Ka(qa.current),pa(t)){if(r=t.stateNode,n=t.memoizedProps,r[fo]=t,(i=r.nodeValue!==n)&&null!==(e=ra))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fo]=t,t.stateNode=r}return ql(t),null;case 13:if(jo(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==oa&&0!==(1&t.mode)&&0===(128&t.flags))fa(),ma(),t.flags|=98560,i=!1;else if(i=pa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[fo]=t}else ma(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ql(t),i=!1}else null!==ia&&(ic(ia),ia=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Rs&&(Rs=3):hc())),null!==t.updateQueue&&(t.flags|=4),ql(t),null);case 4:return Xa(),Nl(e,t),null===e&&Hr(t.stateNode.containerInfo),ql(t),null;case 10:return Pa(t.type._context),ql(t),null;case 19:if(jo(ei),null===(i=t.memoizedState))return ql(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==Rs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oo(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Xe()>Hs&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!aa)return ql(t),null}else 2*Xe()-i.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,n=ei.current,Oo(ei,r?1&n|2:1&n),t):(ql(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(ql(t),6&t.subtreeFlags&&(t.flags|=8192)):ql(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Ql(e,t){switch(na(t),t.tag){case 1:return Io(t.type)&&Ro(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xa(),jo(To),jo(zo),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(jo(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ma()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return jo(ei),null;case 4:return Xa(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}_l=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Il=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ka(qa.current);var a,i=null;switch(n){case"input":o=K(e,o),r=K(e,r),i=[];break;case"select":o=A({},o,{value:void 0}),r=A({},r,{value:void 0}),i=[];break;case"textarea":o=re(e,o),r=re(e,r),i=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in be(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(i=i||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(i=i||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},Rl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Kl=!1,Gl=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Cc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Cc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&es(t,n,a)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fo],delete t[mo],delete t[go],delete t[vo],delete t[bo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function ps(e,t,n){for(n=n.child;null!==n;)fs(e,t,n),n=n.sibling}function fs(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:Gl||Zl(n,t);case 6:var r=us,o=ds;us=null,ps(e,t,n),ds=o,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Ht(e)):so(us,n.stateNode));break;case 4:r=us,o=ds,us=n.stateNode.containerInfo,ds=!0,ps(e,t,n),us=r,ds=o;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,void 0!==i&&(0!==(2&a)||0!==(4&a))&&es(n,t,i),o=o.next}while(o!==r)}ps(e,t,n);break;case 1:if(!Gl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Cc(n,t,l)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,ps(e,t,n),Gl=r):ps(e,t,n);break;default:ps(e,t,n)}}function ms(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=Pc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function hs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(a(160));fs(i,l,o),us=null,ds=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){Cc(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hs(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Cc(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Cc(e,e.return,g)}}break;case 1:hs(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(hs(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){Cc(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===i.type&&null!=i.name&&X(o,i),ye(s,l);var u=ye(s,i);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?ge(o,p):"dangerouslySetInnerHTML"===d?de(o,p):"children"===d?pe(o,p):y(o,d,p,u)}switch(s){case"input":J(o,i);break;case"textarea":ae(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;null!=m?ne(o,!!i.multiple,m,!1):f!==!!i.multiple&&(null!=i.defaultValue?ne(o,!!i.multiple,i.defaultValue,!0):ne(o,!!i.multiple,i.multiple?[]:"",!1))}o[mo]=i}catch(g){Cc(e,e.return,g)}}break;case 6:if(hs(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){Cc(e,e.return,g)}}break;case 3:if(hs(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){Cc(e,e.return,g)}break;case 4:default:hs(t,e),vs(e);break;case 13:hs(t,e),vs(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,!i||null!==o.alternate&&null!==o.alternate.memoizedState||($s=Xe())),4&r&&ms(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(u=Gl)||d,hs(t,e),Gl=u):hs(t,e),vs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(p=Jl=d;null!==Jl;){switch(m=(f=Jl).child,f.tag){case 0:case 11:case 14:case 15:ns(4,f,f.return);break;case 1:Zl(f,f.return);var h=f.stateNode;if("function"===typeof h.componentWillUnmount){r=f,n=f.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){Cc(r,n,g)}}break;case 5:Zl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==m?(m.return=f,Jl=m):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,u?"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=he("display",l))}catch(g){Cc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Cc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hs(t,e),vs(e),4&r&&ms(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(pe(o,""),r.flags&=-33),cs(e,ls(e),o);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(a(161))}}catch(l){Cc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){Jl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var o=Jl,a=o.child;if(22===o.tag&&r){var i=null!==o.memoizedState||Kl;if(!i){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=Kl;var c=Gl;if(Kl=i,(Gl=s)&&!c)for(Jl=o;null!==Jl;)s=(i=Jl).child,22===i.tag&&null!==i.memoizedState?Ss(o):null!==s?(s.return=i,Jl=s):Ss(o);for(;null!==a;)Jl=a,ys(a,t,n),a=a.sibling;Jl=o,Kl=l,Gl=c}xs(e)}else 0!==(8772&o.subtreeFlags)&&null!==a?(a.return=o,Jl=a):xs(e)}}function xs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Wa(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wa(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ht(p)}}}break;default:throw Error(a(163))}Gl||512&t.flags&&os(t)}catch(f){Cc(t,t.return,f)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function Ss(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Cc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){Cc(t,o,s)}}var a=t.return;try{os(t)}catch(s){Cc(t,a,s)}break;case 5:var i=t.return;try{os(t)}catch(s){Cc(t,i,s)}}}catch(s){Cc(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var ks,Cs=Math.ceil,Es=x.ReactCurrentDispatcher,js=x.ReactCurrentOwner,Os=x.ReactCurrentBatchConfig,Ps=0,zs=null,Ts=null,_s=0,Ns=0,Is=Eo(0),Rs=0,Ls=null,Ds=0,As=0,Ms=0,Fs=null,Bs=null,$s=0,Hs=1/0,Us=null,Ws=!1,Vs=null,qs=null,Ys=!1,Qs=null,Ks=0,Gs=0,Xs=null,Js=-1,Zs=0;function ec(){return 0!==(6&Ps)?Xe():-1!==Js?Js:Js=Xe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==_s?_s&-_s:null!==ga.transition?(0===Zs&&(Zs=ht()),Zs):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nc(e,t,n,r){if(50<Gs)throw Gs=0,Xs=null,Error(a(185));vt(e,n,r),0!==(2&Ps)&&e===zs||(e===zs&&(0===(2&Ps)&&(As|=n),4===Rs&&lc(e,_s)),rc(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Hs=Xe()+500,Bo&&Uo()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-it(a),l=1<<i,s=o[i];-1===s?0!==(l&n)&&0===(l&r)||(o[i]=ft(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var r=pt(e,e===zs?_s:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Bo=!0,Ho(e)}(sc.bind(null,e)):Ho(sc.bind(null,e)),io((function(){0===(6&Ps)&&Uo()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=zc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Js=-1,Zs=0,0!==(6&Ps))throw Error(a(327));var n=e.callbackNode;if(Sc()&&e.callbackNode!==n)return null;var r=pt(e,e===zs?_s:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var o=Ps;Ps|=2;var i=mc();for(zs===e&&_s===t||(Us=null,Hs=Xe()+500,pc(e,t));;)try{bc();break}catch(s){fc(e,s)}Oa(),Es.current=i,Ps=o,null!==Ts?t=0:(zs=null,_s=0,t=Rs)}if(0!==t){if(2===t&&(0!==(o=mt(e))&&(r=o,t=ac(e,o))),1===t)throw n=Ls,pc(e,0),lc(e,r),rc(e,Xe()),n;if(6===t)lc(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!lr(a(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,r))&&(0!==(i=mt(e))&&(r=i,t=ac(e,i))),1===t))throw n=Ls,pc(e,0),lc(e,r),rc(e,Xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Bs,Us);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=$s+500-Xe())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wc.bind(null,e,Bs,Us),t);break}wc(e,Bs,Us);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>o&&(o=l),r&=~i}if(r=o,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cs(r/1960))-r)){e.timeoutHandle=ro(wc.bind(null,e,Bs,Us),r);break}wc(e,Bs,Us);break;default:throw Error(a(329))}}}return rc(e,Xe()),e.callbackNode===n?oc.bind(null,e):null}function ac(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Bs,Bs=n,null!==t&&ic(t)),e}function ic(e){null===Bs?Bs=e:Bs.push.apply(Bs,e)}function lc(e,t){for(t&=~Ms,t&=~As,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&Ps))throw Error(a(327));Sc();var t=pt(e,0);if(0===(1&t))return rc(e,Xe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Ls,pc(e,0),lc(e,t),rc(e,Xe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Bs,Us),rc(e,Xe()),null}function cc(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Hs=Xe()+500,Bo&&Uo())}}function uc(e){null!==Qs&&0===Qs.tag&&0===(6&Ps)&&Sc();var t=Ps;Ps|=1;var n=Os.transition,r=yt;try{if(Os.transition=null,yt=1,e)return e()}finally{yt=r,Os.transition=n,0===(6&(Ps=t))&&Uo()}}function dc(){Ns=Is.current,jo(Is)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Ts)for(n=Ts.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ro();break;case 3:Xa(),jo(To),jo(zo),ri();break;case 5:Za(r);break;case 4:Xa();break;case 13:case 19:jo(ei);break;case 10:Pa(r.type._context);break;case 22:case 23:dc()}n=n.return}if(zs=e,Ts=e=Ic(e.current,null),_s=Ns=t,Rs=0,Ls=null,Ms=As=Ds=0,Bs=Fs=null,null!==Na){for(t=0;t<Na.length;t++)if(null!==(r=(n=Na[t]).interleaved)){n.interleaved=null;var o=r.next,a=n.pending;if(null!==a){var i=a.next;a.next=o,r.next=i}n.pending=r}Na=null}return e}function fc(e,t){for(;;){var n=Ts;try{if(Oa(),oi.current=Ji,ui){for(var r=li.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ui=!1}if(ii=0,ci=si=li=null,di=!1,pi=0,js.current=null,null===n||null===n.return){Rs=1,Ls=t,Ts=null;break}e:{var i=e,l=n.return,s=n,c=t;if(t=_s,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=gl(l);if(null!==m){m.flags&=-257,vl(m,l,s,0,t),1&m.mode&&hl(i,u,t),c=u;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(c),t.updateQueue=g}else h.add(c);break e}if(0===(1&t)){hl(i,u,t),hc();break e}c=Error(a(426))}else if(aa&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),ha(cl(c,s));break e}}i=c=cl(c,s),4!==Rs&&(Rs=2),null===Fs?Fs=[i]:Fs.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Ha(i,fl(0,c,t));break e;case 1:s=c;var b=i.type,y=i.stateNode;if(0===(128&i.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===qs||!qs.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t,Ha(i,ml(i,s,t));break e}}i=i.return}while(null!==i)}xc(n)}catch(x){t=x,Ts===n&&null!==n&&(Ts=n=n.return);continue}break}}function mc(){var e=Es.current;return Es.current=Ji,null===e?Ji:e}function hc(){0!==Rs&&3!==Rs&&2!==Rs||(Rs=4),null===zs||0===(268435455&Ds)&&0===(268435455&As)||lc(zs,_s)}function gc(e,t){var n=Ps;Ps|=2;var r=mc();for(zs===e&&_s===t||(Us=null,pc(e,t));;)try{vc();break}catch(o){fc(e,o)}if(Oa(),Ps=n,Es.current=r,null!==Ts)throw Error(a(261));return zs=null,_s=0,Rs}function vc(){for(;null!==Ts;)yc(Ts)}function bc(){for(;null!==Ts&&!Ke();)yc(Ts)}function yc(e){var t=ks(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?xc(e):Ts=t,js.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Yl(n,t,Ns)))return void(Ts=n)}else{if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Ts=n);if(null===e)return Rs=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===Rs&&(Rs=5)}function wc(e,t,n){var r=yt,o=Os.transition;try{Os.transition=null,yt=1,function(e,t,n,r){do{Sc()}while(null!==Qs);if(0!==(6&Ps))throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-it(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}(e,i),e===zs&&(Ts=zs=null,_s=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ys||(Ys=!0,zc(tt,(function(){return Sc(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=Os.transition,Os.transition=null;var l=yt;yt=1;var s=Ps;Ps|=4,js.current=null,function(e,t){if(eo=Wt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||0!==o&&3!==p.nodeType||(s=l+o),p!==i||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===o&&(s=l),f===i&&++d===r&&(c=l),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Wt=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(w){Cc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}h=ts,ts=!1}(e,n),gs(n,e),mr(to),Wt=!!eo,to=eo=null,e.current=n,bs(n,e,o),Ge(),Ps=s,yt=l,Os.transition=i}else e.current=n;if(Ys&&(Ys=!1,Qs=e,Ks=o),i=e.pendingLanes,0===i&&(qs=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ws)throw Ws=!1,e=Vs,Vs=null,e;0!==(1&Ks)&&0!==e.tag&&Sc(),i=e.pendingLanes,0!==(1&i)?e===Xs?Gs++:(Gs=0,Xs=e):Gs=0,Uo()}(e,t,n,r)}finally{Os.transition=o,yt=r}return null}function Sc(){if(null!==Qs){var e=xt(Ks),t=Os.transition,n=yt;try{if(Os.transition=null,yt=16>e?16:e,null===Qs)var r=!1;else{if(e=Qs,Qs=null,Ks=0,0!==(6&Ps))throw Error(a(331));var o=Ps;for(Ps|=4,Jl=e.current;null!==Jl;){var i=Jl,l=i.child;if(0!==(16&Jl.flags)){var s=i.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Jl=u;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var p=d.child;if(null!==p)p.return=d,Jl=p;else for(;null!==Jl;){var f=(d=Jl).sibling,m=d.return;if(as(d),d===u){Jl=null;break}if(null!==f){f.return=m,Jl=f;break}Jl=m}}}var h=i.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Jl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(i=Jl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var b=i.sibling;if(null!==b){b.return=i.return,Jl=b;break e}Jl=i.return}}var y=e.current;for(Jl=y;null!==Jl;){var x=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Jl=x;else e:for(l=y;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Cc(s,s.return,S)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(Ps=o,Uo(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(ot,e)}catch(S){}r=!0}return r}finally{yt=n,Os.transition=t}}return!1}function kc(e,t,n){e=Ba(e,t=fl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(vt(e,1,t),rc(e,t))}function Cc(e,t,n){if(3===e.tag)kc(e,e,n);else for(;null!==t;){if(3===t.tag){kc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===qs||!qs.has(r))){t=Ba(t,e=ml(t,e=cl(n,e),1),1),e=ec(),null!==t&&(vt(t,1,e),rc(t,e));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,zs===e&&(_s&n)===n&&(4===Rs||3===Rs&&(130023424&_s)===_s&&500>Xe()-$s?pc(e,0):Ms|=n),rc(e,t)}function jc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=La(e,t))&&(vt(e,t,n),rc(e,n))}function Oc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),jc(e,n)}function Pc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),jc(e,n)}function zc(e,t){return Ye(e,t)}function Tc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _c(e,t,n,r){return new Tc(e,t,n,r)}function Nc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ic(e,t){var n=e.alternate;return null===n?((n=_c(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rc(e,t,n,r,o,i){var l=2;if(r=e,"function"===typeof e)Nc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Lc(n.children,o,i,t);case C:l=8,o|=8;break;case E:return(e=_c(12,n,t,2|o)).elementType=E,e.lanes=i,e;case z:return(e=_c(13,n,t,o)).elementType=z,e.lanes=i,e;case T:return(e=_c(19,n,t,o)).elementType=T,e.lanes=i,e;case I:return Dc(n,o,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:l=10;break e;case O:l=9;break e;case P:l=11;break e;case _:l=14;break e;case N:l=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=_c(l,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Lc(e,t,n,r){return(e=_c(7,e,r,t)).lanes=n,e}function Dc(e,t,n,r){return(e=_c(22,e,r,t)).elementType=I,e.lanes=n,e.stateNode={isHidden:!1},e}function Ac(e,t,n){return(e=_c(6,e,null,t)).lanes=n,e}function Mc(e,t,n){return(t=_c(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,o,a,i,l,s){return e=new Fc(e,t,n,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=_c(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Aa(a),e}function $c(e){if(!e)return Po;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Io(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Io(n))return Do(e,n,t)}return t}function Hc(e,t,n,r,o,a,i,l,s){return(e=Bc(n,r,!0,e,0,a,0,l,s)).context=$c(null),n=e.current,(a=Fa(r=ec(),o=tc(n))).callback=void 0!==t&&null!==t?t:null,Ba(n,a,o),e.current.lanes=o,vt(e,o,r),rc(e,r),e}function Uc(e,t,n,r){var o=t.current,a=ec(),i=tc(o);return n=$c(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fa(a,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ba(o,t,i))&&(nc(e,o,i,a),$a(e,o,i)),i}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||To.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:zl(t),ma();break;case 5:Ja(t);break;case 1:Io(t.type)&&Ao(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Oo(ka,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Oo(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Al(e,t,n):(Oo(ei,1&ei.current),null!==(e=Wl(e,t,n))?e.sibling:null);Oo(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Oo(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,Cl(e,t,n)}return Wl(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,aa&&0!==(1048576&t.flags)&&ea(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ul(e,t),e=t.pendingProps;var o=No(t,zo.current);Ta(t,n),o=gi(null,t,r,e,o,n);var i=vi();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Io(r)?(i=!0,Ao(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Aa(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=Pl(null,t,r,!0,i,n)):(t.tag=0,aa&&i&&ta(t),xl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ul(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Nc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===_)return 14}return 2}(r),e=nl(r,e),o){case 0:t=jl(null,t,r,e,n);break e;case 1:t=Ol(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,jl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,Ol(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(zl(t),null===e)throw Error(a(387));r=t.pendingProps,o=(i=t.memoizedState).element,Ma(e,t),Ua(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Tl(e,t,r,n,o=cl(Error(a(423)),t));break e}if(r!==o){t=Tl(e,t,r,n,o=cl(Error(a(424)),t));break e}for(oa=co(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,ia=null,n=Sa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ma(),r===o){t=Wl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Ja(t),null===e&&ua(t),r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==i&&no(r,i)&&(t.flags|=32),El(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ua(t),null;case 13:return Al(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Oo(ka,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===o.children&&!To.current){t=Wl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===i.tag){(c=Fa(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,null!==(c=i.alternate)&&(c.lanes|=n),za(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(a(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),za(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ta(t,n),r=r(o=_a(o)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),Sl(e,t,r,o=nl(r.type,o),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Ul(e,t),t.tag=1,Io(r)?(e=!0,Ao(t)):e=!1,Ta(t,n),il(t,r,o),sl(t,r,o,n),Pl(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return Cl(e,t,n)}throw Error(a(156,t.tag))};var Yc="function"===typeof reportError?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}function Kc(e){this._internalRoot=e}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if("function"===typeof o){var l=o;o=function(){var e=Wc(i);l.call(e)}}Uc(t,i,e,o)}else i=function(e,t,n,r,o){if(o){if("function"===typeof r){var a=r;r=function(){var e=Wc(i);a.call(e)}}var i=Hc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=i,e[ho]=i.current,Hr(8===e.nodeType?e.parentNode:e),uc(),i}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=Wc(s);l.call(e)}}var s=Bc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=s,e[ho]=s.current,Hr(8===e.nodeType?e.parentNode:e),uc((function(){Uc(t,s,n,r)})),s}(n,t,e,o,r);return Wc(i)}Kc.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Uc(e,t,null,null)},Kc.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Uc(null,e,null,null)})),t[ho]=null}},Kc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&0!==t&&t<It[n].priority;n++);It.splice(n,0,e),0===n&&At(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),rc(t,Xe()),0===(6&Ps)&&(Hs=Xe()+500,Uo()))}break;case 13:uc((function(){var t=La(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),qc(e,1)}},St=function(e){if(13===e.tag){var t=La(e,134217728);if(null!==t)nc(t,e,134217728,ec());qc(e,134217728)}},kt=function(e){if(13===e.tag){var t=tc(e),n=La(e,t);if(null!==n)nc(n,e,t,ec());qc(e,t)}},Ct=function(){return yt},Et=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},Se=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=So(r);if(!o)throw Error(a(90));Y(r),J(r,o)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=cc,ze=uc;var eu={usingClientEntryPoint:!1,Events:[xo,wo,So,je,Oe,cc]},tu={findFiberByHostInstance:yo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ot=ru.inject(nu),at=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gc(e))throw Error(a(299));var n=!1,r="",o=Yc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Bc(e,1,!1,null,0,n,0,r,o),e[ho]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Qc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Xc(t))throw Error(a(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,o=!1,i="",l=Yc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hc(t,null,e,1,null!=n?n:null,o,0,i,l),e[ho]=t.current,Hr(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Kc(t)},t.render=function(e,t,n){if(!Xc(t))throw Error(a(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ho]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},634:(e,t,n)=>{(()=>{var t={181:(e,t,n)=>{var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,u=s||c||Function("return this")(),d=Object.prototype.toString,p=Math.max,f=Math.min,m=function(){return u.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,a,i,l,s,c=0,u=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n)}function y(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=a}function x(){var e=m();if(y(e))return w(e);l=setTimeout(x,function(e){var n=t-(e-s);return d?f(n,a-(e-c)):n}(e))}function w(e){return l=void 0,v&&r?b(e):(r=o=void 0,i)}function S(){var e=m(),n=y(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(x,t),u?b(e):i}(s);if(d)return l=setTimeout(x,t),b(s)}return void 0===l&&(l=setTimeout(x,t)),i}return t=g(t)||0,h(n)&&(u=!!n.leading,a=(d="maxWait"in n)?p(g(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},S.flush=function(){return void 0===l?i:w(m())},S}},858:(e,t,n)=>{var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,d=c||u||Function("return this")(),p=Object.prototype.toString,f=Math.max,m=Math.min,h=function(){return d.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),function(e,t,n){var o,a,i,l,s,c,u=0,d=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=a;return o=a=void 0,u=t,l=e.apply(r,n)}function x(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=i}function w(){var e=h();if(x(e))return S(e);s=setTimeout(w,function(e){var n=t-(e-c);return p?m(n,i-(e-u)):n}(e))}function S(e){return s=void 0,b&&o?y(e):(o=a=void 0,l)}function k(){var e=h(),n=x(e);if(o=arguments,a=this,c=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(w,t),d?y(e):l}(c);if(p)return s=setTimeout(w,t),y(c)}return void 0===s&&(s=setTimeout(w,t)),l}return t=v(t)||0,g(n)&&(d=!!n.leading,i=(p="maxWait"in n)?f(v(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),k.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=c=a=s=void 0},k.flush=function(){return void 0===s?l:S(h())},k}(e,t,{leading:o,maxWait:t,trailing:a})}},694:(e,t,n)=>{"use strict";var r=n(925);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},556:(e,t,n)=>{e.exports=n(694)()},925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{"use strict";o.r(a),o.d(a,{LazyLoadComponent:()=>Q,LazyLoadImage:()=>ie,trackWindowScroll:()=>R});const e=n(43);var t=o.n(e),r=o(556);function i(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=function(e){if("object"!=l(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}var m=function(e){e.forEach((function(e){e.isIntersecting&&e.target.onVisible()}))},h={},g=function(e){function n(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=function(e,t,n){return t=p(t),function(e,t){if(t&&("object"==l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,d()?Reflect.construct(t,n||[],p(e).constructor):t.apply(e,n))}(this,n,[e])).supportsObserver=!e.scrollPosition&&e.useIntersectionObserver&&i(),t.supportsObserver){var r=e.threshold;t.observer=function(e){return h[e]=h[e]||new IntersectionObserver(m,{rootMargin:e+"px"}),h[e]}(r)}return t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(n,e),r=n,o=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),n=this.placeholder.style,r=parseInt(n.getPropertyValue("margin-left"),10)||0,o=parseInt(n.getPropertyValue("margin-top"),10)||0;return{bottom:e.y+t.bottom+o,left:e.x+t.left+r,right:e.x+t.right+r,top:e.y+t.top+o}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,n=e.threshold,r=this.getPlaceholderBoundingBox(t),o=t.y+window.innerHeight,a=t.x,i=t.x+window.innerWidth,l=t.y;return Boolean(l-n<=r.bottom&&o+n>=r.top&&a-n<=r.right&&i+n>=r.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,n=this.props,r=n.className,o=n.height,a=n.placeholder,i=n.style,l=n.width;if(a&&"function"!=typeof a.type)return t().cloneElement(a,{ref:function(t){return e.placeholder=t}});var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({display:"inline-block"},i);return void 0!==l&&(u.width=l),void 0!==o&&(u.height=o),t().createElement("span",{className:r,ref:function(t){return e.placeholder=t},style:u},a)}}],o&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(t().Component);g.propTypes={onVisible:r.PropTypes.func.isRequired,className:r.PropTypes.string,height:r.PropTypes.oneOfType([r.PropTypes.number,r.PropTypes.string]),placeholder:r.PropTypes.element,threshold:r.PropTypes.number,useIntersectionObserver:r.PropTypes.bool,scrollPosition:r.PropTypes.shape({x:r.PropTypes.number.isRequired,y:r.PropTypes.number.isRequired}),width:r.PropTypes.oneOfType([r.PropTypes.number,r.PropTypes.string])},g.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const v=g;var b=o(181),y=o.n(b),x=o(858),w=o.n(x),S=function(e){var t=getComputedStyle(e,null);return t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x")};const k=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t instanceof HTMLElement;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window};function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}var E=["delayMethod","delayTime"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(null,arguments)}function O(e){var t=function(e){if("object"!=C(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==C(t)?t:t+""}function P(e,t){if(t&&("object"==C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(z=function(){return!!e})()}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}var N=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},I=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset};const R=function(e){var n=function(n){function r(e){var n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(n=function(e,t,n){return t=T(t),P(e,z()?Reflect.construct(t,n||[],T(e).constructor):t.apply(e,n))}(this,r,[e])).useIntersectionObserver=e.useIntersectionObserver&&i(),n.useIntersectionObserver)return P(n);var o=n.onChangeScroll.bind(n);return"debounce"===e.delayMethod?n.delayedScroll=y()(o,e.delayTime):"throttle"===e.delayMethod&&(n.delayedScroll=w()(o,e.delayTime)),n.state={scrollPosition:{x:N(),y:I()}},n.baseComponentRef=t().createRef(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(r,n),o=r,a=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||this.useIntersectionObserver||k(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement=k(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:N(),y:I()}})}},{key:"render",value:function(){var n=this.props,r=(n.delayMethod,n.delayTime,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(n,E)),o=this.useIntersectionObserver?null:this.state.scrollPosition;return t().createElement(e,j({forwardRef:this.baseComponentRef,scrollPosition:o},r))}}],a&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}(o.prototype,a),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,a}(t().Component);return n.propTypes={delayMethod:r.PropTypes.oneOf(["debounce","throttle"]),delayTime:r.PropTypes.number,useIntersectionObserver:r.PropTypes.bool},n.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},n};function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function D(e){var t=function(e){if("object"!=L(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==L(t)?t:t+""}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}var B=function(e){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t,n){return t=M(t),function(e,t){if(t&&("object"==L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,A()?Reflect.construct(t,n||[],M(e).constructor):t.apply(e,n))}(this,n,[e])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(n,e),r=n,(o=[{key:"render",value:function(){return t().createElement(v,this.props)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,D(r.key),r)}}(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(t().Component);const $=R(B);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function U(e){var t=function(e){if("object"!=H(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==H(t)?t:t+""}function W(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(W=function(){return!!e})()}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}var Y=function(e){function n(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=function(e,t,n){return t=V(t),function(e,t){if(t&&("object"==H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,W()?Reflect.construct(t,n||[],V(e).constructor):t.apply(e,n))}(this,n,[e]);var r=e.afterLoad,o=e.beforeLoad,a=e.scrollPosition,i=e.visibleByDefault;return t.state={visible:i},i&&(o(),r()),t.onVisible=t.onVisible.bind(t),t.isScrollTracked=Boolean(a&&Number.isFinite(a.x)&&a.x>=0&&Number.isFinite(a.y)&&a.y>=0),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(n,e),r=n,(o=[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,n=e.className,r=e.delayMethod,o=e.delayTime,a=e.height,l=e.placeholder,s=e.scrollPosition,c=e.style,u=e.threshold,d=e.useIntersectionObserver,p=e.width;return this.isScrollTracked||d&&i()?t().createElement(v,{className:n,height:a,onVisible:this.onVisible,placeholder:l,scrollPosition:s,style:c,threshold:u,useIntersectionObserver:d,width:p}):t().createElement($,{className:n,delayMethod:r,delayTime:o,height:a,onVisible:this.onVisible,placeholder:l,style:c,threshold:u,width:p})}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,U(r.key),r)}}(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(t().Component);Y.propTypes={afterLoad:r.PropTypes.func,beforeLoad:r.PropTypes.func,useIntersectionObserver:r.PropTypes.bool,visibleByDefault:r.PropTypes.bool},Y.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Q=Y;function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}var G=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return(t=te(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(null,arguments)}function te(e){var t=function(e){if("object"!=K(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=K(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==K(t)?t:t+""}function ne(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(ne=function(){return!!e})()}function re(e){return re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},re(e)}function oe(e,t){return oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},oe(e,t)}var ae=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=function(e,t,n){return t=re(t),function(e,t){if(t&&("object"==K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,ne()?Reflect.construct(t,n||[],re(e).constructor):t.apply(e,n))}(this,n,[e])).state={loaded:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&oe(e,t)}(n,e),r=n,o=[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(t){e.props.onLoad(t),e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,n=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.useIntersectionObserver,e.visibleByDefault,e.wrapperClassName,e.wrapperProps,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,G));return t().createElement("img",ee({},n,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var e=this.props,n=e.beforeLoad,r=e.className,o=e.delayMethod,a=e.delayTime,i=e.height,l=e.placeholder,s=e.scrollPosition,c=e.style,u=e.threshold,d=e.useIntersectionObserver,p=e.visibleByDefault,f=e.width;return t().createElement(Q,{beforeLoad:n,className:r,delayMethod:o,delayTime:a,height:i,placeholder:l,scrollPosition:s,style:c,threshold:u,useIntersectionObserver:d,visibleByDefault:p,width:f},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(e){var n=this.props,r=n.effect,o=n.height,a=n.placeholderSrc,i=n.width,l=n.wrapperClassName,s=n.wrapperProps,c=this.state.loaded,u=c?" lazy-load-image-loaded":"",d=c||!a?{}:{backgroundImage:"url(".concat(a,")"),backgroundSize:"100% 100%"};return t().createElement("span",ee({className:l+" lazy-load-image-background "+r+u,style:J(J({},d),{},{color:"transparent",display:"inline-block",height:o,width:i})},s),e)}},{key:"render",value:function(){var e=this.props,t=e.effect,n=e.placeholderSrc,r=e.visibleByDefault,o=e.wrapperClassName,a=e.wrapperProps,i=this.getLazyLoadImage();return(t||n)&&!r||o||a?this.getWrappedLazyLoadImage(i):i}}],o&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,te(r.key),r)}}(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(t().Component);ae.propTypes={onLoad:r.PropTypes.func,afterLoad:r.PropTypes.func,beforeLoad:r.PropTypes.func,delayMethod:r.PropTypes.string,delayTime:r.PropTypes.number,effect:r.PropTypes.string,placeholderSrc:r.PropTypes.string,threshold:r.PropTypes.number,useIntersectionObserver:r.PropTypes.bool,visibleByDefault:r.PropTypes.bool,wrapperClassName:r.PropTypes.string,wrapperProps:r.PropTypes.object},ae.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const ie=ae})(),e.exports=a})()},534:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,h(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:l,props:a,_owner:k.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function z(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===a?"."+P(s,0):a,w(i)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),z(i,t,o,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+P(l=e[c],c);s+=z(l,t,o,u,i)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=z(l=l.value,t,o,u=a+P(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],o=0;return z(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},I={transition:null},R={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=y,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)S.call(t,c)&&!C.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:_}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(534)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,n))c<o&&0>a(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<o&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,x(e),!h)if(null!==r(c))h=!0,I(S);else{var t=r(u);null!==t&&R(w,t.startTime-e)}}function S(e,n){h=!1,g&&(g=!1,b(j),j=-1),m=!0;var a=f;try{for(x(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!z());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(c)&&o(c),x(n)}else o(c);p=r(c)}if(null!==p)var s=!0;else{var d=r(u);null!==d&&R(w,d.startTime-n),s=!1}return s}finally{p=null,f=a,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,C=!1,E=null,j=-1,O=5,P=-1;function z(){return!(t.unstable_now()-P<O)}function T(){if(null!==E){var e=t.unstable_now();P=e;var n=!0;try{n=E(!0,e)}finally{n?k():(C=!1,E=null)}}else C=!1}if("function"===typeof y)k=function(){y(T)};else if("undefined"!==typeof MessageChannel){var _=new MessageChannel,N=_.port2;_.port1.onmessage=T,k=function(){N.postMessage(null)}}else k=function(){v(T,0)};function I(e){E=e,C||(C=!0,k())}function R(e,n){j=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,I(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(b(j),j=-1):g=!0,R(w,a-i))):(e.sortIndex=l,n(c,e),h||m||(h=!0,I(S))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var c=a[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(a,i),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/res-app/",n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),o=n(391);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const i="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n,r){return void 0===n&&(n=null),a({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function f(t,n,r,o){void 0===o&&(o={});let{window:s=document.defaultView,v5Compat:p=!1}=o,f=s.history,m=e.Pop,h=null,g=v();function v(){return(f.state||{idx:null}).idx}function b(){m=e.Pop;let t=v(),n=null==t?null:t-g;g=t,h&&h({action:m,location:x.location,delta:n})}function y(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"===typeof e?e:d(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,f.replaceState(a({},f.state,{idx:g}),""));let x={get action(){return m},get location(){return t(s,f)},listen(e){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(i,b),h=e,()=>{s.removeEventListener(i,b),h=null}},createHref:e=>n(s,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){m=e.Push;let o=u(x.location,t,n);r&&r(o,t),g=v()+1;let a=c(o,g),i=x.createHref(o);try{f.pushState(a,"",i)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(i)}p&&h&&h({action:m,location:x.location,delta:1})},replace:function(t,n){m=e.Replace;let o=u(x.location,t,n);r&&r(o,t),g=v();let a=c(o,g),i=x.createHref(o);f.replaceState(a,"",i),p&&h&&h({action:m,location:x.location,delta:0})},go:e=>f.go(e)};return x}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function h(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,r){let o=T(("string"===typeof t?p(t):t).pathname||"/",n);if(null==o)return null;let a=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let i=null;for(let l=0;null==i&&l<a.length;++l){let e=z(o);i=O(a[l],e,r)}return i}function v(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let s=L([r,i.relativePath]),c=n.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),v(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:j(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of b(e.path))o(e,t,r);else o(e,t)})),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let i=b(r.join("/")),l=[];return l.push(...i.map((e=>""===e?a:[a,e].join("/")))),o&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const y=/^:[\w-]+$/,x=3,w=2,S=1,k=10,C=-2,E=e=>"*"===e;function j(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=C),t&&(r+=w),n.filter((e=>!E(e))).reduce(((e,t)=>e+(y.test(t)?x:""===t?S:k)),r)}function O(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),i.push({params:o,pathname:L([a,u.pathname]),pathnameBase:D(L([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=L([a,u.pathnameBase]))}return i}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let a=new RegExp(o,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function z(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function T(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function _(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function N(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function I(e,t){let n=N(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function R(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=p(e):(o=a({},e),l(!o.pathname||!o.pathname.includes("?"),_("?","pathname","search",o)),l(!o.pathname||!o.pathname.includes("#"),_("#","pathname","hash",o)),l(!o.search||!o.search.includes("#"),_("#","search","hash",o)));let i,s=""===e||""===o.pathname,c=s?"/":o.pathname;if(null==c)i=n;else{let e=t.length-1;if(!r&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?p(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:A(r),hash:M(o)}}(o,i),d=c&&"/"!==c&&c.endsWith("/"),f=(s||"."===c)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const L=e=>e.join("/").replace(/\/\/+/g,"/"),D=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const B=["post","put","patch","delete"],$=(new Set(B),["get",...B]);new Set($),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}const U=t.createContext(null);const W=t.createContext(null);const V=t.createContext(null);const q=t.createContext(null);const Y=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Q=t.createContext(null);function K(){return null!=t.useContext(q)}function G(){return K()||l(!1),t.useContext(q).location}function X(e){t.useContext(V).static||t.useLayoutEffect(e)}function J(){let{isDataRoute:e}=t.useContext(Y);return e?function(){let{router:e}=se(ie.UseNavigateStable),n=ue(le.UseNavigateStable),r=t.useRef(!1);return X((()=>{r.current=!0})),t.useCallback((function(t,o){void 0===o&&(o={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,H({fromRouteId:n},o)))}),[e,n])}():function(){K()||l(!1);let e=t.useContext(U),{basename:n,future:r,navigator:o}=t.useContext(V),{matches:a}=t.useContext(Y),{pathname:i}=G(),s=JSON.stringify(I(a,r.v7_relativeSplatPath)),c=t.useRef(!1);return X((()=>{c.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!c.current)return;if("number"===typeof t)return void o.go(t);let a=R(t,JSON.parse(s),i,"path"===r.relative);null==e&&"/"!==n&&(a.pathname="/"===a.pathname?n:L([n,a.pathname])),(r.replace?o.replace:o.push)(a,r.state,r)}),[n,o,s,i,e])}()}function Z(e,n){let{relative:r}=void 0===n?{}:n,{future:o}=t.useContext(V),{matches:a}=t.useContext(Y),{pathname:i}=G(),l=JSON.stringify(I(a,o.v7_relativeSplatPath));return t.useMemo((()=>R(e,JSON.parse(l),i,"path"===r)),[e,l,i,r])}function ee(n,r,o,a){K()||l(!1);let{navigator:i}=t.useContext(V),{matches:s}=t.useContext(Y),c=s[s.length-1],u=c?c.params:{},d=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let f,m=G();if(r){var g;let e="string"===typeof r?p(r):r;"/"===d||(null==(g=e.pathname)?void 0:g.startsWith(d))||l(!1),f=e}else f=m;let v=f.pathname||"/",b=v;if("/"!==d){let e=d.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=h(n,{pathname:b});let x=ae(y&&y.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:L([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:L([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,o,a);return r&&x?t.createElement(q.Provider,{value:{location:H({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},x):x}function te(){let e=function(){var e;let n=t.useContext(Q),r=ce(le.UseRouteError),o=ue(le.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[o]}(),n=F(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:a},r):null,null)}const ne=t.createElement(te,null);class re extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Y.Provider,{value:this.props.routeContext},t.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:n,match:r,children:o}=e,a=t.useContext(U);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Y.Provider,{value:n},o)}function ae(e,n,r,o){var a;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=o)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,c=null==(a=r)?void 0:a.errors;if(null!=c){let e=s.findIndex((e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id])));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){u=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight(((e,o,a)=>{let i,l=!1,p=null,f=null;var m;r&&(i=c&&o.route.id?c[o.route.id]:void 0,p=o.route.errorElement||ne,u&&(d<0&&0===a?(m="route-fallback",!1||de[m]||(de[m]=!0),l=!0,f=null):d===a&&(l=!0,f=o.route.hydrateFallbackElement||null)));let h=n.concat(s.slice(0,a+1)),g=()=>{let n;return n=i?p:l?f:o.route.Component?t.createElement(o.route.Component,null):o.route.element?o.route.element:e,t.createElement(oe,{match:o,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?t.createElement(re,{location:r.location,revalidation:r.revalidation,component:p,error:i,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()}),null)}var ie=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ie||{}),le=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(le||{});function se(e){let n=t.useContext(U);return n||l(!1),n}function ce(e){let n=t.useContext(W);return n||l(!1),n}function ue(e){let n=function(){let e=t.useContext(Y);return e||l(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||l(!1),r.route.id}const de={};const pe={};const fe=(e,t,n)=>{var r;pe[r="\u26a0\ufe0f React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+n+"."]||(pe[r]=!0,console.warn(r))};function me(e,t){null!=e&&e.v7_startTransition||fe("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),null!=e&&e.v7_relativeSplatPath||t&&t.v7_relativeSplatPath||fe("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(t.v7_fetcherPersist||fe("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),t.v7_normalizeFormMethod||fe("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),t.v7_partialHydration||fe("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),t.v7_skipActionErrorRevalidation||fe("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}r.startTransition;function he(e){l(!1)}function ge(n){let{basename:r="/",children:o=null,location:a,navigationType:i=e.Pop,navigator:s,static:c=!1,future:u}=n;K()&&l(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:d,navigator:s,static:c,future:H({v7_relativeSplatPath:!1},u)})),[d,u,s,c]);"string"===typeof a&&(a=p(a));let{pathname:m="/",search:h="",hash:g="",state:v=null,key:b="default"}=a,y=t.useMemo((()=>{let e=T(m,d);return null==e?null:{location:{pathname:e,search:h,hash:g,state:v,key:b},navigationType:i}}),[d,m,h,g,v,b,i]);return null==y?null:t.createElement(V.Provider,{value:f},t.createElement(q.Provider,{children:o,value:y}))}function ve(e){let{children:t,location:n}=e;return ee(be(t),n)}new Promise((()=>{}));t.Component;function be(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,o)=>{if(!t.isValidElement(e))return;let a=[...n,o];if(e.type===t.Fragment)return void r.push.apply(r,be(e.props.children,a));e.type!==he&&l(!1),e.props.index&&e.props.children&&l(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=be(e.props.children,a)),r.push(i)})),r}var ye=n(950),xe=n.t(ye,2);function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const ke=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(bs){}new Map;const Ce=r.startTransition;xe.flushSync,r.useId;function Ee(e){let{basename:n,children:r,future:o,window:a}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),f((function(e,t){let{pathname:n="/",search:r="",hash:o=""}=p(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),u("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:d(t))}),(function(e,t){s("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),l)));let c=i.current,[m,h]=t.useState({action:c.action,location:c.location}),{v7_startTransition:g}=o||{},v=t.useCallback((e=>{g&&Ce?Ce((()=>h(e))):h(e)}),[h,g]);return t.useLayoutEffect((()=>c.listen(v)),[c,v]),t.useEffect((()=>me(o)),[o]),t.createElement(ge,{basename:n,children:r,location:m.location,navigationType:m.action,navigator:c,future:o})}const je="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Oe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=t.forwardRef((function(e,n){let r,{onClick:o,relative:a,reloadDocument:i,replace:s,state:c,target:u,to:p,preventScrollReset:f,viewTransition:m}=e,h=Se(e,ke),{basename:g}=t.useContext(V),v=!1;if("string"===typeof p&&Oe.test(p)&&(r=p,je))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=T(t.pathname,g);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:v=!0}catch(bs){}let b=function(e,n){let{relative:r}=void 0===n?{}:n;K()||l(!1);let{basename:o,navigator:a}=t.useContext(V),{hash:i,pathname:s,search:c}=Z(e,{relative:r}),u=s;return"/"!==o&&(u="/"===s?o:L([o,s])),a.createHref({pathname:u,search:c,hash:i})}(p,{relative:a}),y=function(e,n){let{target:r,replace:o,state:a,preventScrollReset:i,relative:l,viewTransition:s}=void 0===n?{}:n,c=J(),u=G(),p=Z(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==o?o:d(u)===d(p);c(e,{replace:n,state:a,preventScrollReset:i,relative:l,viewTransition:s})}}),[u,c,p,o,a,r,e,i,l,s])}(p,{replace:s,state:c,target:u,preventScrollReset:f,relative:a,viewTransition:m});return t.createElement("a",we({},h,{href:r||b,onClick:v||i?o:function(e){o&&o(e),e.defaultPrevented||y(e)},ref:n,target:u}))}));var ze,Te;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ze||(ze={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Te||(Te={}));var _e=function(){return _e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},_e.apply(this,arguments)};Object.create;function Ne(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Ie=n(324),Re=n.n(Ie),Le="-ms-",De="-moz-",Ae="-webkit-",Me="comm",Fe="rule",Be="decl",$e="@keyframes",He=Math.abs,Ue=String.fromCharCode,We=Object.assign;function Ve(e){return e.trim()}function qe(e,t){return(e=t.exec(e))?e[0]:e}function Ye(e,t,n){return e.replace(t,n)}function Qe(e,t,n){return e.indexOf(t,n)}function Ke(e,t){return 0|e.charCodeAt(t)}function Ge(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function Je(e){return e.length}function Ze(e,t){return t.push(e),e}function et(e,t){return e.filter((function(e){return!qe(e,t)}))}var tt=1,nt=1,rt=0,ot=0,at=0,it="";function lt(e,t,n,r,o,a,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:tt,column:nt,length:i,return:"",siblings:l}}function st(e,t){return We(lt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ct(e){for(;e.root;)e=st(e.root,{children:[e]});Ze(e,e.siblings)}function ut(){return at=ot>0?Ke(it,--ot):0,nt--,10===at&&(nt=1,tt--),at}function dt(){return at=ot<rt?Ke(it,ot++):0,nt++,10===at&&(nt=1,tt++),at}function pt(){return Ke(it,ot)}function ft(){return ot}function mt(e,t){return Ge(it,e,t)}function ht(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gt(e){return tt=nt=1,rt=Xe(it=e),ot=0,[]}function vt(e){return it="",e}function bt(e){return Ve(mt(ot-1,wt(91===e?e+2:40===e?e+1:e)))}function yt(e){for(;(at=pt())&&at<33;)dt();return ht(e)>2||ht(at)>3?"":" "}function xt(e,t){for(;--t&&dt()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return mt(e,ft()+(t<6&&32==pt()&&32==dt()))}function wt(e){for(;dt();)switch(at){case e:return ot;case 34:case 39:34!==e&&39!==e&&wt(at);break;case 40:41===e&&wt(e);break;case 92:dt()}return ot}function St(e,t){for(;dt()&&e+at!==57&&(e+at!==84||47!==pt()););return"/*"+mt(t,ot-1)+"*"+Ue(47===e?e:dt())}function kt(e){for(;!ht(pt());)dt();return mt(e,ot)}function Ct(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Et(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Be:return e.return=e.return||e.value;case Me:return"";case $e:return e.return=e.value+"{"+Ct(e.children,r)+"}";case Fe:if(!Xe(e.value=e.props.join(",")))return""}return Xe(n=Ct(e.children,r))?e.return=e.value+"{"+n+"}":""}function jt(e,t,n){switch(function(e,t){return 45^Ke(e,0)?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}(e,t)){case 5103:return Ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+e+e;case 4789:return De+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+e+De+e+Le+e+e;case 5936:switch(Ke(e,t+11)){case 114:return Ae+e+Le+Ye(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ae+e+Le+Ye(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ae+e+Le+Ye(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ae+e+Le+e+e;case 6165:return Ae+e+Le+"flex-"+e+e;case 5187:return Ae+e+Ye(e,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return Ae+e+Le+"flex-item-"+Ye(e,/flex-|-self/g,"")+(qe(e,/flex-|baseline/)?"":Le+"grid-row-"+Ye(e,/flex-|-self/g,""))+e;case 4675:return Ae+e+Le+"flex-line-pack"+Ye(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ae+e+Le+Ye(e,"shrink","negative")+e;case 5292:return Ae+e+Le+Ye(e,"basis","preferred-size")+e;case 6060:return Ae+"box-"+Ye(e,"-grow","")+Ae+e+Le+Ye(e,"grow","positive")+e;case 4554:return Ae+Ye(e,/([^-])(transform)/g,"$1"+Ae+"$2")+e;case 6187:return Ye(Ye(Ye(e,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),e,"")+e;case 5495:case 3959:return Ye(e,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return Ye(Ye(e,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+e+e;case 4200:if(!qe(e,/flex-|baseline/))return Le+"grid-column-align"+Ge(e,t)+e;break;case 2592:case 3360:return Le+Ye(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,qe(e.props,/grid-\w+-end/)}))?~Qe(e+(n=n[t].value),"span",0)?e:Le+Ye(e,"-start","")+e+Le+"grid-row-span:"+(~Qe(n,"span",0)?qe(n,/\d+/):+qe(n,/\d+/)-+qe(e,/\d+/))+";":Le+Ye(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return qe(e.props,/grid-\w+-start/)}))?e:Le+Ye(Ye(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ye(e,/(.+)-inline(.+)/,Ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(45!==Ke(e,t+4))break;case 102:return Ye(e,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+De+(108==Ke(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Qe(e,"stretch",0)?jt(Ye(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Ye(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,a,i,l){return Le+n+":"+r+l+(o?Le+n+"-span:"+(a?i:+i-+r)+l:"")+e}));case 4949:if(121===Ke(e,t+6))return Ye(e,":",":"+Ae)+e;break;case 6444:switch(Ke(e,45===Ke(e,14)?18:11)){case 120:return Ye(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(45===Ke(e,14)?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+Le+"$2box$3")+e;case 100:return Ye(e,":",":"+Le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ye(e,"scroll-","scroll-snap-")+e}return e}function Ot(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Be:return void(e.return=jt(e.value,e.length,n));case $e:return Ct([st(e,{value:Ye(e.value,"@","@"+Ae)})],r);case Fe:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(qe(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ct(st(e,{props:[Ye(t,/:(read-\w+)/,":-moz-$1")]})),ct(st(e,{props:[t]})),We(e,{props:et(n,r)});break;case"::placeholder":ct(st(e,{props:[Ye(t,/:(plac\w+)/,":"+Ae+"input-$1")]})),ct(st(e,{props:[Ye(t,/:(plac\w+)/,":-moz-$1")]})),ct(st(e,{props:[Ye(t,/:(plac\w+)/,Le+"input-$1")]})),ct(st(e,{props:[t]})),We(e,{props:et(n,r)})}return""}))}}function Pt(e){return vt(zt("",null,null,null,[""],e=gt(e),0,[0],e))}function zt(e,t,n,r,o,a,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,m=0,h=1,g=1,v=1,b=0,y="",x=o,w=a,S=r,k=y;g;)switch(m=b,b=dt()){case 40:if(108!=m&&58==Ke(k,d-1)){-1!=Qe(k+=Ye(bt(b),"&","&\f"),"&\f",He(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=bt(b);break;case 9:case 10:case 13:case 32:k+=yt(m);break;case 92:k+=xt(ft()-1,7);continue;case 47:switch(pt()){case 42:case 47:Ze(_t(St(dt(),ft()),t,n,s),s);break;default:k+="/"}break;case 123*h:l[c++]=Xe(k)*v;case 125*h:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:-1==v&&(k=Ye(k,/\f/g,"")),f>0&&Xe(k)-d&&Ze(f>32?Nt(k+";",r,n,d-1,s):Nt(Ye(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Ze(S=Tt(k,t,n,c,u,o,l,y,x=[],w=[],d,a),a),123===b)if(0===u)zt(k,t,S,S,x,a,d,l,w);else switch(99===p&&110===Ke(k,3)?100:p){case 100:case 108:case 109:case 115:zt(e,S,S,r&&Ze(Tt(e,S,S,0,0,o,l,y,o,x=[],d,w),w),o,w,d,l,r?x:w);break;default:zt(k,S,S,S,[""],w,0,l,w)}}c=u=f=0,h=v=1,y=k="",d=i;break;case 58:d=1+Xe(k),f=m;default:if(h<1)if(123==b)--h;else if(125==b&&0==h++&&125==ut())continue;switch(k+=Ue(b),b*h){case 38:v=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(Xe(k)-1)*v,v=1;break;case 64:45===pt()&&(k+=bt(dt())),p=pt(),u=d=Xe(y=k+=kt(ft())),b++;break;case 45:45===m&&2==Xe(k)&&(h=0)}}return a}function Tt(e,t,n,r,o,a,i,l,s,c,u,d){for(var p=o-1,f=0===o?a:[""],m=Je(f),h=0,g=0,v=0;h<r;++h)for(var b=0,y=Ge(e,p+1,p=He(g=i[h])),x=e;b<m;++b)(x=Ve(g>0?f[b]+" "+y:Ye(y,/&\f/g,f[b])))&&(s[v++]=x);return lt(e,t,n,0===o?Fe:l,s,c,u,d)}function _t(e,t,n,r){return lt(e,t,n,Me,Ue(at),Ge(e,2,-2),0,r)}function Nt(e,t,n,r,o){return lt(e,t,n,Be,Ge(e,0,r),Ge(e,r+1,-1),r,o)}var It={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Lt="active",Dt="data-styled-version",At="6.1.13",Mt="/*!sc*/\n",Ft="undefined"!=typeof window&&"HTMLElement"in window,Bt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/res-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),$t={},Ht=(new Set,Object.freeze([])),Ut=Object.freeze({});function Wt(e,t,n){return void 0===n&&(n=Ut),e.theme!==n.theme&&e.theme||t||n.theme}var Vt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yt=/(^-|-$)/g;function Qt(e){return e.replace(qt,"-").replace(Yt,"")}var Kt=/(a)(d)/gi,Gt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Gt(t%52)+n;return(Gt(t%52)+n).replace(Kt,"$1-$2")}var Jt,Zt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},en=function(e){return Zt(5381,e)};function tn(e){return Xt(en(e)>>>0)}function nn(e){return e.displayName||e.name||"Component"}function rn(e){return"string"==typeof e&&!0}var on="function"==typeof Symbol&&Symbol.for,an=on?Symbol.for("react.memo"):60115,ln=on?Symbol.for("react.forward_ref"):60112,sn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},un={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dn=((Jt={})[ln]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jt[an]=un,Jt);function pn(e){return("type"in(t=e)&&t.type.$$typeof)===an?un:"$$typeof"in e?dn[e.$$typeof]:sn;var t}var fn=Object.defineProperty,mn=Object.getOwnPropertyNames,hn=Object.getOwnPropertySymbols,gn=Object.getOwnPropertyDescriptor,vn=Object.getPrototypeOf,bn=Object.prototype;function yn(e,t,n){if("string"!=typeof t){if(bn){var r=vn(t);r&&r!==bn&&yn(e,r,n)}var o=mn(t);hn&&(o=o.concat(hn(t)));for(var a=pn(e),i=pn(t),l=0;l<o.length;++l){var s=o[l];if(!(s in cn||n&&n[s]||i&&s in i||a&&s in a)){var c=gn(t,s);try{fn(e,s,c)}catch(e){}}}}return e}function xn(e){return"function"==typeof e}function wn(e){return"object"==typeof e&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function kn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Cn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function En(e,t,n){if(void 0===n&&(n=!1),!n&&!Cn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=En(e[r],t[r]);else if(Cn(t))for(var r in t)e[r]=En(e[r],t[r]);return e}function jn(e,t){Object.defineProperty(e,"toString",{value:t})}function On(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Pn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw On(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(Mt);return t},e}(),zn=new Map,Tn=new Map,_n=1,Nn=function(e){if(zn.has(e))return zn.get(e);for(;Tn.has(_n);)_n++;var t=_n++;return zn.set(e,t),Tn.set(t,e),t},In=function(e,t){_n=t+1,zn.set(e,t),Tn.set(t,e)},Rn="style[".concat(Rt,"][").concat(Dt,'="').concat(At,'"]'),Ln=new RegExp("^".concat(Rt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Dn=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},An=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Mt),o=[],a=0,i=r.length;a<i;a++){var l=r[a].trim();if(l){var s=l.match(Ln);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(In(u,c),Dn(e,u,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},Mn=function(e){for(var t=document.querySelectorAll(Rn),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Rt)!==Lt&&(An(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Fn(){return n.nc}var Bn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Rt,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(Rt,Lt),r.setAttribute(Dt,At);var i=Fn();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},$n=function(){function e(e){this.element=Bn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw On(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Hn=function(){function e(e){this.element=Bn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Un=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Wn=Ft,Vn={isServer:!Ft,useCSSOMInjection:!Bt},qn=function(){function e(e,t,n){void 0===e&&(e=Ut),void 0===t&&(t={});var r=this;this.options=_e(_e({},Vn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ft&&Wn&&(Wn=!1,Mn(this)),jn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Tn.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(n);if(void 0===a||!a.size||0===i.length)return"continue";var l="".concat(Rt,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==a&&a.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(Mt)},a=0;a<n;a++)o(a);return r}(r)}))}return e.registerId=function(e){return Nn(e)},e.prototype.rehydrate=function(){!this.server&&Ft&&Mn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(_e(_e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Un(n):t?new $n(n):new Hn(n)}(this.options),new Pn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Nn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Nn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Nn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yn=/&/g,Qn=/^\s*\/\/.*$/gm;function Kn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Kn(e.children,t)),e}))}function Gn(e){var t,n,r,o=void 0===e?Ut:e,a=o.options,i=void 0===a?Ut:a,l=o.plugins,s=void 0===l?Ht:l,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===Fe&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Yn,n).replace(r,c))})),i.prefix&&u.push(Ot),u.push(Et);var d=function(e,o,a,l){void 0===o&&(o=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Qn,""),c=Pt(a||o?"".concat(a," ").concat(o," { ").concat(s," }"):s);i.namespace&&(c=Kn(c,i.namespace));var d,p=[];return Ct(c,function(e){var t=Je(e);return function(n,r,o,a){for(var i="",l=0;l<t;l++)i+=e[l](n,r,o,a)||"";return i}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce((function(e,t){return t.name||On(15),Zt(e,t.name)}),5381).toString():"",d}var Xn=new qn,Jn=Gn(),Zn=t.createContext({shouldForwardProp:void 0,styleSheet:Xn,stylis:Jn}),er=(Zn.Consumer,t.createContext(void 0));function tr(){return(0,t.useContext)(Zn)}function nr(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],o=n[1],a=tr().styleSheet,i=(0,t.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,a]),l=(0,t.useMemo)((function(){return Gn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Re()(r,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return t.createElement(Zn.Provider,{value:s},t.createElement(er.Provider,{value:l},e.children))}var rr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Jn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,jn(this,(function(){throw On(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Jn),this.name+e.hash},e}(),or=function(e){return e>="A"&&e<="Z"};function ar(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;or(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ir=function(e){return null==e||!1===e||""===e},lr=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!ir(a)&&(Array.isArray(a)&&a.isCss||xn(a)?r.push("".concat(ar(o),":"),a,";"):Cn(a)?r.push.apply(r,Ne(Ne(["".concat(o," {")],lr(a),!1),["}"],!1)):r.push("".concat(ar(o),": ").concat((t=o,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in It||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function sr(e,t,n,r){return ir(e)?[]:wn(e)?[".".concat(e.styledComponentId)]:xn(e)?!xn(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:sr(e(t),t,n,r):e instanceof rr?n?(e.inject(n,r),[e.getName(r)]):[e]:Cn(e)?lr(e):Array.isArray(e)?Array.prototype.concat.apply(Ht,e.map((function(e){return sr(e,t,n,r)}))):[e.toString()];var o}function cr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xn(n)&&!wn(n))return!1}return!0}var ur=en(At),dr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&cr(e),this.componentId=t,this.baseHash=Zt(ur,t),this.baseStyle=n,qn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Sn(r,this.staticRulesId);else{var o=kn(sr(this.rules,e,t,n)),a=Xt(Zt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}r=Sn(r,a),this.staticRulesId=a}else{for(var l=Zt(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=kn(sr(u,e,t,n));l=Zt(l,d+c),s+=d}}if(s){var p=Xt(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=Sn(r,p)}}return r},e}(),pr=t.createContext(void 0);pr.Consumer;var fr={};new Set;function mr(e,n,r){var o=wn(e),a=e,i=!rn(e),l=n.attrs,s=void 0===l?Ht:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Qt(e);fr[n]=(fr[n]||0)+1;var r="".concat(n,"-").concat(tn(At+n+fr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return rn(e)?"styled.".concat(e):"Styled(".concat(nn(e),")")}(e):d,f=n.displayName&&n.componentId?"".concat(Qt(n.displayName),"-").concat(n.componentId):n.componentId||u,m=o&&a.attrs?a.attrs.concat(s).filter(Boolean):s,h=n.shouldForwardProp;if(o&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;h=function(e,t){return g(e,t)&&v(e,t)}}else h=g}var b=new dr(r,f,o?a.componentStyle:void 0);function y(e,n){return function(e,n,r){var o=e.attrs,a=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(pr),d=tr(),p=e.shouldForwardProp||d.shouldForwardProp,f=Wt(n,u,i)||Ut,m=function(e,t,n){for(var r,o=_e(_e({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var i=xn(r=e[a])?r(o):r;for(var l in i)o[l]="className"===l?Sn(o[l],i[l]):"style"===l?_e(_e({},o[l]),i[l]):i[l]}return t.className&&(o.className=Sn(o.className,t.className)),o}(o,n,f),h=m.as||c,g={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===f||("forwardedAs"===v?g.as=m.forwardedAs:p&&!p(v,h)||(g[v]=m[v]));var b=function(e,t){var n=tr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,m),y=Sn(l,s);return b&&(y+=" "+b),m.className&&(y+=" "+m.className),g[rn(h)&&!Vt.has(h)?"class":"className"]=y,g.ref=r,(0,t.createElement)(h,g)}(x,e,n)}y.displayName=p;var x=t.forwardRef(y);return x.attrs=m,x.componentStyle=b,x.displayName=p,x.shouldForwardProp=h,x.foldedComponentIds=o?Sn(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=f,x.target=o?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)En(e,o[r],!0);return e}({},a.defaultProps,e):e}}),jn(x,(function(){return".".concat(x.styledComponentId)})),i&&yn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function hr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var gr=function(e){return Object.assign(e,{isCss:!0})};function vr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(xn(e)||Cn(e))return gr(sr(hr(Ht,Ne([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?sr(r):gr(sr(hr(r,t)))}function br(e,t,n){if(void 0===n&&(n=Ut),!t)throw On(1,t);var r=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,vr.apply(void 0,Ne([r],o,!1)))};return r.attrs=function(r){return br(e,t,_e(_e({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return br(e,t,_e(_e({},n),r))},r}var yr=function(e){return br(mr,e)},xr=yr;Vt.forEach((function(e){xr[e]=yr(e)}));var wr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=cr(e),qn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(kn(sr(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&qn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Sr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=kn(vr.apply(void 0,Ne([e],t,!1))),o=tn(r);return new rr(o,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Fn(),r=kn([n&&'nonce="'.concat(n,'"'),"".concat(Rt,'="true"'),"".concat(Dt,'="').concat(At,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw On(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw On(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[Rt]="",n[Dt]=At,n.dangerouslySetInnerHTML={__html:r},n),a=Fn();return a&&(o.nonce=a),[t.createElement("style",_e({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new qn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw On(2);return t.createElement(nr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw On(3)}})(),"__sc-".concat(Rt,"__");const kr=n.p+"static/media/logo.3ed23c80d2905d88db1d.png";var Cr=n(579);const Er=(0,t.createContext)(),jr={items:[]},Or=(e,t)=>{if(!e&&!t)return!0;if(!e||!t)return!1;const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++){const a=n[o];if(a!==r[o])return!1;const i=e[a],l=t[a];if(Array.isArray(i)&&Array.isArray(l)){if(i.sort().join(",")!==l.sort().join(","))return!1}else if(i!==l)return!1}return!0};function Pr(e,t){switch(t.type){case"ADD_ITEM":try{const{id:n,name:r,price:o,customizations:a}=t.payload;if("number"!==typeof n&&"string"!==typeof n||"string"!==typeof r||"number"!==typeof o)throw new Error("Invalid item data.");const i=n.toString(),l=e.items.findIndex((e=>e.id.toString()===i&&Or(e.customizations,a)));if(-1!==l){const t=[...e.items];return t[l].quantity+=1,{...e,items:t}}return{...e,items:[...e.items,{id:i,name:r,price:o,quantity:1,customizations:a}]}}catch(n){return console.error("Error in ADD_ITEM action:",n),e}case"REMOVE_ITEM":try{const{id:n,customizations:r}=t.payload,o=n.toString();return{...e,items:e.items.filter((e=>!(e.id.toString()===o&&Or(e.customizations,r))))}}catch(n){return console.error("Error in REMOVE_ITEM action:",n),e}case"INCREASE_QUANTITY":try{const{id:n,customizations:r}=t.payload,o=n.toString();return{...e,items:e.items.map((e=>e.id.toString()===o&&Or(e.customizations,r)?{...e,quantity:e.quantity+1}:e))}}catch(n){return console.error("Error in INCREASE_QUANTITY action:",n),e}case"DECREASE_QUANTITY":try{const{id:n,customizations:r}=t.payload,o=n.toString();return{...e,items:e.items.map((e=>e.id.toString()===o&&Or(e.customizations,r)?{...e,quantity:e.quantity-1}:e)).filter((e=>e.quantity>0))}}catch(n){return console.error("Error in DECREASE_QUANTITY action:",n),e}case"CLEAR_CART":return{...e,items:[]};case"UPDATE_CUSTOMIZATIONS":try{const{id:n,oldCustomizations:r,newCustomizations:o}=t.payload;if("number"!==typeof n&&"string"!==typeof n)throw new Error("Invalid payload for UPDATE_CUSTOMIZATIONS.");const a=n.toString(),i=e.items.map((e=>e.id.toString()===a&&Or(e.customizations,r)?{...e,customizations:o}:e));return{...e,items:i}}catch(n){return console.error("Error in UPDATE_CUSTOMIZATIONS action:",n),e}default:return e}}const zr=e=>{let{children:n}=e;const[r,o]=(0,t.useReducer)(Pr,jr);return(0,Cr.jsx)(Er.Provider,{value:{items:r.items,addItem:e=>{o({type:"ADD_ITEM",payload:e})},removeItem:e=>{o({type:"REMOVE_ITEM",payload:e})},increaseQuantity:e=>{o({type:"INCREASE_QUANTITY",payload:e})},decreaseQuantity:e=>{o({type:"DECREASE_QUANTITY",payload:e})},clearCart:()=>{o({type:"CLEAR_CART"})},updateCustomizations:(e,t)=>{o({type:"UPDATE_CUSTOMIZATIONS",payload:{id:e.id,oldCustomizations:e.customizations,newCustomizations:t}})}},children:n})};var Tr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_r=t.createContext&&t.createContext(Tr),Nr=["attr","size","title"];function Ir(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Rr(){return Rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rr.apply(this,arguments)}function Lr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Dr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Lr(Object(n),!0).forEach((function(t){Ar(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ar(e,t,n){return t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mr(e){return e&&e.map(((e,n)=>t.createElement(e.tag,Dr({key:n},e.attr),Mr(e.child))))}function Fr(e){return n=>t.createElement(Br,Rr({attr:Dr({},e.attr)},n),Mr(e.child))}function Br(e){var n=n=>{var r,{attr:o,size:a,title:i}=e,l=Ir(e,Nr),s=a||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",Rr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,l,{className:r,style:Dr(Dr({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&t.createElement("title",null,i),e.children)};return void 0!==_r?t.createElement(_r.Consumer,null,(e=>n(e))):n(Tr)}function $r(e){return Fr({tag:"svg",attr:{viewBox:"0 0 400 512"},child:[{tag:"path",attr:{d:"M88 8.1S221.4-.1 209 112.5c0 0 19.1-74.9 103-40.6 0 0-17.7 74-88 56 0 0 14.6-54.6 66.1-56.6 0 0-39.9-10.3-82.1 48.8 0 0-19.8-94.5-93.6-99.7 0 0 75.2 19.4 77.6 107.5 0 .1-106.4 7-104-119.8zm312 315.6c0 48.5-9.7 95.3-32 132.3-42.2 30.9-105 48-168 48-62.9 0-125.8-17.1-168-48C9.7 419 0 372.2 0 323.7 0 275.3 17.7 229 40 192c42.2-30.9 97.1-48.6 160-48.6 63 0 117.8 17.6 160 48.6 22.3 37 40 83.3 40 131.7zM120 428c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm0-66.2c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm0-66.2c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zM192 428c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm0-66.2c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm0-66.2c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zM264 428c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm0-66.2c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm0-66.2c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zM336 428c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm0-66.2c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm0-66.2c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm24-39.6c-4.8-22.3-7.4-36.9-16-56-38.8-19.9-90.5-32-144-32S94.8 180.1 56 200c-8.8 19.5-11.2 33.9-16 56 42.2-7.9 98.7-14.8 160-14.8s117.8 6.9 160 14.8z"},child:[]}]})(e)}function Hr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function Ur(e){return Fr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Wr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"},child:[]}]})(e)}function Vr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function qr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(e)}function Yr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function Qr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"},child:[]}]})(e)}function Kr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(e)}function Gr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}function Xr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function Jr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z"},child:[]}]})(e)}function Zr(e){return Fr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L224 271.64V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40h-56V271.64L502.05 57.6zM443.77 48l-48 48H116.24l-48-48h375.53z"},child:[]}]})(e)}function eo(e){return Fr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"},child:[]}]})(e)}function to(e){return Fr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function no(e){return Fr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(e)}function ro(e){return Fr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(e)}function oo(e){return Fr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M272 191.91c-17.6 0-32 14.4-32 32v80c0 8.84-7.16 16-16 16s-16-7.16-16-16v-76.55c0-17.39 4.72-34.47 13.69-49.39l77.75-129.59c9.09-15.16 4.19-34.81-10.97-43.91-14.45-8.67-32.72-4.3-42.3 9.21-.2.23-.62.21-.79.48l-117.26 175.9C117.56 205.9 112 224.31 112 243.29v80.23l-90.12 30.04A31.974 31.974 0 0 0 0 383.91v96c0 10.82 8.52 32 32 32 2.69 0 5.41-.34 8.06-1.03l179.19-46.62C269.16 449.99 304 403.8 304 351.91v-128c0-17.6-14.4-32-32-32zm346.12 161.73L528 323.6v-80.23c0-18.98-5.56-37.39-16.12-53.23L394.62 14.25c-.18-.27-.59-.24-.79-.48-9.58-13.51-27.85-17.88-42.3-9.21-15.16 9.09-20.06 28.75-10.97 43.91l77.75 129.59c8.97 14.92 13.69 32 13.69 49.39V304c0 8.84-7.16 16-16 16s-16-7.16-16-16v-80c0-17.6-14.4-32-32-32s-32 14.4-32 32v128c0 51.89 34.84 98.08 84.75 112.34l179.19 46.62c2.66.69 5.38 1.03 8.06 1.03 23.48 0 32-21.18 32-32v-96c0-13.77-8.81-25.99-21.88-30.35z"},child:[]}]})(e)}function ao(e){return Fr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function io(e){return Fr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"},child:[]}]})(e)}function lo(e){return Fr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)}function so(e){return Fr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function co(e){return Fr({tag:"svg",attr:{viewBox:"0 0 536 512"},child:[{tag:"path",attr:{d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"},child:[]}]})(e)}function uo(e){return Fr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function po(e){return Fr({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function fo(e){return Fr({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}function mo(e){return Fr({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function ho(e){return Fr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M507.31 72.57L439.43 4.69c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l-76.67 76.67c-46.58-19.7-102.4-10.73-140.37 27.23L18.75 312.23c-24.99 24.99-24.99 65.52 0 90.51l90.51 90.51c24.99 24.99 65.52 24.99 90.51 0l158.39-158.39c37.96-37.96 46.93-93.79 27.23-140.37l76.67-76.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.24-6.24 6.24-16.37-.01-22.62zM179.22 423.29l-90.51-90.51 122.04-122.04 90.51 90.51-122.04 122.04z"},child:[]}]})(e)}function go(e){return Fr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"},child:[]}]})(e)}const vo=Sr`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,bo=xr.header`
  background-color: #333;
  color: #f5f5f5;
  padding: 4px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  animation: ${vo} 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 4px 15px;
  }
`,yo=xr(Pe)`
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
`,xo=xr.nav`
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
`,wo=xr.div`
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
`,So=xr.button`
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
`,ko=()=>{const{items:e}=(0,t.useContext)(Er),n=J(),[r,o]=(0,t.useState)(!1),a=e.reduce(((e,t)=>e+t.quantity),0);return(0,Cr.jsxs)(bo,{children:[(0,Cr.jsxs)(yo,{to:"/",children:[(0,Cr.jsx)("img",{src:kr,alt:"Restaurant Logo",loading:"lazy"}),(0,Cr.jsx)("h1",{children:"Skip The Server"})]}),(0,Cr.jsx)(So,{onClick:()=>o(!r),children:r?(0,Cr.jsx)(po,{}):(0,Cr.jsx)(Ur,{})}),(0,Cr.jsx)(xo,{isOpen:r,children:(0,Cr.jsxs)("ul",{children:[(0,Cr.jsx)("li",{children:(0,Cr.jsx)(Pe,{to:"/menu",children:"Menu"})}),(0,Cr.jsx)("li",{children:(0,Cr.jsx)(Pe,{to:"/about",children:"About Us"})}),(0,Cr.jsx)("li",{children:(0,Cr.jsx)(Pe,{to:"/contact",children:"Contact"})}),(0,Cr.jsx)("li",{children:(0,Cr.jsx)("button",{onClick:()=>{n("/order-status")},children:"Track Order"})}),(0,Cr.jsx)("li",{children:(0,Cr.jsx)("button",{className:"request-services",onClick:()=>{n("/request-services")},children:"Services"})})]})}),(0,Cr.jsx)(wo,{children:(0,Cr.jsxs)(Pe,{to:"/checkout","aria-label":"Proceed to Checkout",children:[(0,Cr.jsx)(lo,{}),a>0&&(0,Cr.jsx)("span",{className:"cart-count",children:a})]})})]})},Co=xr.footer`
  text-align: center;
  padding: 10px;
  background: #333;
  color: #f5f5f5;
  font-size: 0.8rem;
  width: 100%;
  /* Removed fixed positioning to make the footer non-sticky */

  a {
    color: #4a90e2;
    text-decoration: none;
  }

  a:hover {
    color: #f5f5f5;
  }

  @media (max-width: 768px) {
    font-size: clamp(0.7rem, 1.5vw, 0.8rem);
    padding: 20px;
  }
`,Eo=()=>(0,Cr.jsx)(Co,{children:(0,Cr.jsxs)("p",{children:["\xa9 2024 Skip The Server. Crafted with \u2764\ufe0f by"," ",(0,Cr.jsx)("a",{href:"https://yourteamwebsite.com",target:"_blank",rel:"noopener noreferrer",children:"Group 3"}),"."]})}),jo=xr.div`
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
`;class Oo extends t.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error:",e,t)}render(){return this.state.hasError?(0,Cr.jsxs)(jo,{children:[(0,Cr.jsx)("h1",{children:"Something Went Wrong."}),(0,Cr.jsx)("p",{children:"We're sorry for the inconvenience. Please try refreshing the page."})]}):this.props.children}}const Po=Oo;const zo=n.p+"static/media/coolbackground.63295083ea39e4f991d370f20aba4a9c.svg",To=Sr`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,_o=xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: url(${zo}) no-repeat center center;
  background-size: cover;
  color: #f5f5f5;
  animation: ${To} 1.5s ease;
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
`,No=()=>{const e=J();return(0,Cr.jsxs)(_o,{children:[(0,Cr.jsx)("h1",{children:"Welcome to Skip The Server!"}),(0,Cr.jsx)("p",{children:"Savor chef-crafted dishes made with the freshest ingredients. Enjoy a seamless online ordering experience."}),(0,Cr.jsxs)("div",{className:"button-container",children:[(0,Cr.jsx)("button",{onClick:()=>e("/menu"),"aria-label":"Start Order",children:"Start Order"}),(0,Cr.jsx)("button",{onClick:()=>e("/about"),"aria-label":"Learn More",children:"Learn More"})]})]})},Io=n.p+"static/media/avocadotoast.a407bf3dd77e7e47d2bd.webp",Ro=n.p+"static/media/beer.9ec63d8bc17900a9fb10.webp",Lo=n.p+"static/media/breakfastburrito.fde7ddcfaa146ec6d41a.webp",Do=n.p+"static/media/caesarsalad.09094dd4838515e60c53.jpeg",Ao=n.p+"static/media/cheesecake.2909fb2464e6023aa6d4.webp",Mo=n.p+"static/media/chocolatecake.e5cbb8d7b1a3ad919d0a.webp",Fo=n.p+"static/media/garlicbread.d9ef5ef2adcc22901e91.webp",Bo=n.p+"static/media/icedtea.0f5f519341ff6503e1e0.webp",$o=n.p+"static/media/lemonade.e6a30fff45a737d7e76e.webp",Ho=n.p+"static/media/margarita.cf1aba547205a5bb6e01.webp",Uo=n.p+"static/media/mojito.c14140d1d971570e0f8b.webp",Wo=n.p+"static/media/omelette.9abef29835119a40363d.jpg",Vo=n.p+"static/media/pancakes.525f0b02a0460ba722bf.webp",qo=n.p+"static/media/pepsi.33a1ac257fd277d3e0f9.webp",Yo=n.p+"static/media/redwine.c68f645b19ed551919bc.webp",Qo=n.p+"static/media/rootbeer.255982371aeed3de177d.webp",Ko=n.p+"static/media/salmon.dcf302a92e81d6792ade.webp",Go=n.p+"static/media/smoothie.01f2790550d7a5b70682.webp",Xo=n.p+"static/media/spaghetti.0503d745b235dea087e0.webp",Jo=n.p+"static/media/steakfrites.220749ea242a8840d509.webp",Zo=n.p+"static/media/stuffedmushrooms.8020fa023b25d3c85ac8.webp",ea=n.p+"static/media/sundae.1555646d54754e3e759b.webp",ta=n.p+"static/media/whitewine.6b1c265ca5a62415b8c4.webp",na=n.p+"static/media/wings.352bd2b76b3f707368bf.webp",ra=n.p+"static/media/cocacola.15fa322f927af687dc41.webp",oa=n.p+"static/media/7up.41595b1c1cdc125cc495.webp",aa=[{id:1,name:"Avocado Toast",category:"Food",price:12.99,popularity:95,rating:4.5,numReviews:150,image:Io,tags:["Breakfast","Vegan"],estimatedTime:10,description:"Deliciously creamy avocado spread generously on perfectly toasted sourdough bread, garnished with fresh tomatoes, red pepper flakes, and chives for an extra burst of flavor.",customizations:[{name:"Toppings",options:["Tomatoes","Red Pepper Flakes","Chives","Extra Avocado"],removable:!0}]},{id:2,name:"Pizza",category:"Food",price:14.99,popularity:95,rating:4.5,numReviews:150,image:n.p+"static/media/pizza.9b03d680b9e43844f463.webp",tags:["Lunch","Dinner"],estimatedTime:20,description:"Classic pepperoni pizza with a golden, crispy crust, topped with melted mozzarella cheese, pepperoni slices, and a vibrant tomato sauce. Perfect for a satisfying lunch or dinner.",customizations:[{name:"Toppings",options:["Extra Cheese","Pepperoni","Mushrooms","Olives","Onions","Green Peppers"],removable:!0}],reviews:[{username:"Charlie",rating:5,comment:"Best pizza in town!",date:"2023-09-20"},{username:"Dana",rating:4,comment:"Good taste but a bit too greasy.",date:"2023-09-22"}]},{id:3,name:"Breakfast Burrito",category:"Food",price:9.99,popularity:90,rating:4.7,numReviews:200,image:Lo,tags:["Breakfast","Spicy"],estimatedTime:15,description:"A hearty flour tortilla filled with fluffy scrambled eggs, melted cheese, savory salsa, and your choice of fillings, perfect for a satisfying start to your day.",customizations:[{name:"Fillings",options:["Beans","Cheese","Ham","Bell Peppers","Onions"],removable:!0},{name:"Salsa Level",options:["Mild","Medium","Hot"],removable:!1}]},{id:4,name:"Caesar Salad",category:"Food",price:10.99,popularity:80,rating:4.3,numReviews:120,image:Do,tags:["Lunch","Vegetarian"],estimatedTime:10,description:"Crisp romaine lettuce tossed in our signature Caesar dressing, topped with crunchy croutons and freshly grated Parmesan cheese for a classic and refreshing meal.",customizations:[{name:"Add-ons",options:["Grilled Chicken","Parmesan Cheese","Bacon Bits"],removable:!1},{name:"Croutons",options:["With Croutons","No Croutons"],removable:!0}]},{id:5,name:"Garlic Bread",category:"Food",price:5.49,popularity:85,rating:4.6,numReviews:180,image:Fo,tags:["Appetizer","Vegetarian"],estimatedTime:8,description:"Warm, toasted bread generously slathered with garlic butter and herbs, creating a savory side that pairs perfectly with any meal.",customizations:[{name:"Additional Toppings",options:["Cheese","Extra Garlic","Herbs"],removable:!0}]},{id:6,name:"Omelette",category:"Food",price:7.99,popularity:88,rating:4.4,numReviews:160,image:Wo,tags:["Breakfast"],estimatedTime:12,description:"A fluffy three-egg omelette filled with your choice of fresh ingredients, including cheese, mushrooms, ham, spinach, and onions, cooked to perfection.",customizations:[{name:"Fillings",options:["Cheese","Mushrooms","Ham","Spinach","Onions"],removable:!0}]},{id:7,name:"Pancakes",category:"Food",price:8.49,popularity:89,rating:4.8,numReviews:220,image:Vo,tags:["Breakfast","Sweet"],estimatedTime:10,description:"Fluffy golden pancakes stacked high and served with rich maple syrup and creamy butter, offering a delightful sweet start to your morning.",customizations:[{name:"Toppings",options:["Fresh Berries","Chocolate Chips","Whipped Cream","Bananas"],removable:!0},{name:"Extra Syrup",options:["Yes","No"],removable:!1}]},{id:8,name:"Salmon",category:"Food",price:18.99,popularity:92,rating:4.9,numReviews:250,image:Ko,tags:["Dinner","Gluten-Free"],estimatedTime:25,description:"Premium grilled salmon fillet drizzled with a zesty lemon butter sauce, served alongside your choice of steamed vegetables, rice, or mashed potatoes.",customizations:[{name:"Sauce",options:["Lemon Butter","Teriyaki","Garlic Herb"],removable:!1},{name:"Side Dishes",options:["Steamed Vegetables","Rice","Mashed Potatoes"],removable:!1}]},{id:9,name:"Spaghetti",category:"Food",price:12.49,popularity:87,rating:4.5,numReviews:190,image:Xo,tags:["Lunch","Spicy"],estimatedTime:20,description:"Classic spaghetti noodles smothered in our homemade marinara sauce, with an option to add meatballs or grilled chicken for a protein-packed meal.",customizations:[{name:"Sauce",options:["Marinara","Alfredo","Pesto"],removable:!1},{name:"Protein",options:["Meatballs","Grilled Chicken","None"],removable:!1}]},{id:10,name:"Steak Frites",category:"Food",price:19.99,popularity:98,rating:4.9,numReviews:300,image:Jo,tags:["Dinner","Gluten-Free"],estimatedTime:30,description:"Juicy grilled steak cooked to your preferred doneness, served with a side of crispy golden french fries and your choice of seasoning.",customizations:[{name:"Seasoning",options:["Salt","Pepper","Garlic"],removable:!0},{name:"Steak Doneness",options:["Rare","Medium Rare","Medium","Well Done"],removable:!1}]},{id:11,name:"Stuffed Mushrooms",category:"Food",price:8.99,popularity:81,rating:4.2,numReviews:130,image:Zo,tags:["Appetizer","Vegetarian"],estimatedTime:15,description:"Plump mushrooms stuffed with a savory mixture of cheeses and herbs, baked to golden perfection for a delightful appetizer.",customizations:[{name:"Cheese Type",options:["Parmesan","Mozzarella","Goat Cheese"],removable:!1}]},{id:12,name:"Wings",category:"Food",price:10.99,popularity:86,rating:4.7,numReviews:210,image:na,tags:["Appetizer","Spicy"],estimatedTime:15,description:"Tender and juicy chicken wings tossed in your choice of flavorful sauces, served with creamy ranch dressing on the side.",customizations:[{name:"Sauce",options:["Buffalo","BBQ","Honey Mustard","Garlic Parmesan"],removable:!1},{name:"Spiciness Level",options:["Mild","Medium","Hot","Extra Hot"],removable:!1},{name:"Boneless",options:["Yes","No"],removable:!1}]},{id:13,name:"Cheesecake",category:"Desserts",price:6.99,popularity:75,rating:4.6,numReviews:140,image:Ao,tags:["Sweet"],estimatedTime:5,description:"Rich and creamy cheesecake nestled on a buttery graham cracker crust, topped with your choice of fresh berries, chocolate sauce, or caramel.",customizations:[{name:"Crust Type",options:["Graham Cracker","Chocolate","Oreo"],removable:!1},{name:"Toppings",options:["Fresh Berries","Chocolate Sauce","Caramel","Nuts"],removable:!0},{name:"Extra Slice",options:["Yes","No"],removable:!1}]},{id:14,name:"Kunafa",category:"Desserts",price:12.99,popularity:90,rating:4.8,numReviews:200,image:n.p+"static/media/kunafa.a62addc2b9b2d6e71a3d.webp",tags:["Sweet"],estimatedTime:15,description:"A traditional Middle Eastern dessert made with thin, crispy shredded phyllo dough, filled with sweet cheese or cream, and soaked in a fragrant sugar syrup. Topped with crushed pistachios for a perfect finishing touch.",customizations:[{name:"Filling Type",options:["Sweet Cheese","Cream"],removable:!1},{name:"Toppings",options:["Crushed Pistachios","Extra Syrup","Rose Petals"],removable:!0},{name:"Serving Size",options:["Regular","Extra Large"],removable:!1}]},{id:15,name:"Chocolate Cake",category:"Desserts",price:6.99,popularity:80,rating:4.8,numReviews:170,image:Mo,tags:["Sweet"],estimatedTime:5,description:"Decadent chocolate cake layered with rich chocolate frosting, perfect for chocolate lovers seeking an indulgent treat.",customizations:[{name:"Frosting Type",options:["Milk Chocolate","Dark Chocolate","White Chocolate"],removable:!1},{name:"Extra Layers",options:["Yes","No"],removable:!1},{name:"Toppings",options:["Sprinkles","Cherry","Whipped Cream"],removable:!0}]},{id:16,name:"Sundae",category:"Desserts",price:4.99,popularity:70,rating:4.3,numReviews:110,image:ea,tags:["Sweet"],estimatedTime:5,description:"Classic vanilla ice cream topped with your choice of decadent sauces, crunchy marshmallows, and Oreo crumbles for a delightful dessert experience.",customizations:[{name:"Toppings",options:["Caramel Sauce","Strawberry Sauce","Marshmallows","Oreo Crumbles"],removable:!0},{name:"Extra Scoop",options:["Yes","No"],removable:!1},{name:"Whipped Cream",options:["Yes","No"],removable:!0}]},{id:17,name:"Beer",category:"Drinks",price:4.99,popularity:85,rating:4.5,numReviews:190,image:Ro,tags:["Alcoholic"],estimatedTime:2,description:"A diverse selection of local and imported beers, ranging from crisp lagers to robust stouts, perfect for any beer enthusiast.",customizations:[{name:"Type",options:["Lager","Ale","IPA","Stout","Pilsner"],removable:!1},{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1},{name:"Add Lemon",options:["Yes","No"],removable:!1}]},{id:18,name:"Iced Tea",category:"Drinks",price:3.99,popularity:70,rating:4,numReviews:90,image:Bo,tags:["Non-Alcoholic","Sweet"],estimatedTime:2,description:"Refreshing iced tea brewed daily, available in various sweetness levels and enhanced with a slice of lemon for added zest.",customizations:[{name:"Sweetness Level",options:["Unsweetened","Less Sweet","Regular"],removable:!1},{name:"Add Lemon",options:["Yes","No"],removable:!1},{name:"Ice Level",options:["No Ice","Less Ice","Regular Ice","Extra Ice"],removable:!1}]},{id:19,name:"Lemonade",category:"Drinks",price:3.49,popularity:72,rating:4.4,numReviews:100,image:$o,tags:["Non-Alcoholic","Sweet"],estimatedTime:2,description:"Homemade lemonade infused with a hint of fresh mint, customizable in sweetness and size to perfectly quench your thirst.",customizations:[{name:"Sweetness Level",options:["Less Sweet","Regular","Extra Sweet"],removable:!1},{name:"Add Mint",options:["Yes","No"],removable:!1},{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1}]},{id:20,name:"Margarita",category:"Drinks",price:8.99,popularity:90,rating:4.7,numReviews:220,image:Ho,tags:["Alcoholic"],estimatedTime:5,description:"Classic margarita crafted with fresh lime juice and premium tequila, available in various flavors and sizes to suit your preference.",customizations:[{name:"Salt Rim",options:["Yes","No"],removable:!1},{name:"Flavor",options:["Classic","Strawberry","Mango","Peach"],removable:!1},{name:"Size",options:["Regular (12oz)","Large (16oz)"],removable:!1}]},{id:21,name:"Mojito",category:"Drinks",price:7.99,popularity:88,rating:4.6,numReviews:180,image:Uo,tags:["Alcoholic"],estimatedTime:5,description:"A refreshing blend of premium rum, fresh mint leaves, and zesty lime, customizable in flavor and sweetness to your liking.",customizations:[{name:"Flavor",options:["Classic","Strawberry","Blueberry","Pineapple"],removable:!1},{name:"Sweetness Level",options:["Less Sweet","Regular","Extra Sweet"],removable:!1},{name:"Size",options:["Regular (12oz)","Large (16oz)"],removable:!1}]},{id:22,name:"Pepsi",category:"Drinks",price:2.99,popularity:60,rating:3.8,numReviews:80,image:qo,tags:["Non-Alcoholic"],estimatedTime:1,description:"Chilled can of Pepsi, a classic carbonated soft drink that pairs well with any meal or snack.",customizations:[{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1},{name:"Ice Level",options:["No Ice","Less Ice","Regular Ice","Extra Ice"],removable:!1}]},{id:23,name:"Red Wine",category:"Drinks",price:9.99,popularity:95,rating:4.9,numReviews:300,image:Yo,tags:["Alcoholic"],estimatedTime:2,description:"A curated selection of fine red wines from renowned vineyards around the world, available by the bottle or glass with options for vintage and size.",customizations:[{name:"Bottle or Glass",options:["Bottle","Glass"],removable:!1},{name:"Vintage",options:["2018","2019","2020","2021"],removable:!1},{name:"Size",options:["Standard (750ml)","Half Bottle (375ml)"],removable:!1}]},{id:24,name:"Root Beer",category:"Drinks",price:3.49,popularity:65,rating:4.1,numReviews:95,image:Qo,tags:["Non-Alcoholic","Sweet"],estimatedTime:1,description:"Classic root beer served chilled, offering a sweet and creamy flavor that's perfect for any occasion.",customizations:[{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1},{name:"Ice Level",options:["No Ice","Less Ice","Regular Ice","Extra Ice"],removable:!1},{name:"Add Cream",options:["Yes","No"],removable:!1}]},{id:25,name:"Smoothie",category:"Drinks",price:5.99,popularity:85,rating:4.5,numReviews:160,image:Go,tags:["Non-Alcoholic","Sweet","Vegetarian"],estimatedTime:5,description:"Fruit smoothie made with fresh ingredients, available in a variety of flavors and customizable with optional protein additions for an extra boost.",customizations:[{name:"Flavor",options:["Strawberry","Mango","Blueberry","Green","Banana"],removable:!1},{name:"Add Protein",options:["Yes","No"],removable:!1},{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1}]},{id:26,name:"White Wine",category:"Drinks",price:8.99,popularity:92,rating:4.8,numReviews:240,image:ta,tags:["Alcoholic"],estimatedTime:2,description:"A premium selection of white wines from various regions, available by the bottle or glass with options for vintage and size to suit your preference.",customizations:[{name:"Bottle or Glass",options:["Bottle","Glass"],removable:!1},{name:"Vintage",options:["2018","2019","2020","2021"],removable:!1},{name:"Size",options:["Standard (750ml)","Half Bottle (375ml)"],removable:!1}]},{id:27,name:"Coca Cola",category:"Drinks",price:2.99,popularity:92,rating:4.8,numReviews:240,image:ra,tags:["Non-Alcoholic"],estimatedTime:1,description:"Chilled can or glass of Coca-Cola, a classic carbonated soft drink that pairs well with any meal or snack.",customizations:[{name:"Can or Glass",options:["Can","Glass"],removable:!1},{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1}]},{id:28,name:"7 Up",category:"Drinks",price:2.99,popularity:92,rating:4.8,numReviews:240,image:oa,tags:["Non-Alcoholic"],estimatedTime:1,description:"Chilled can or glass of 7Up, a classic carbonated soft drink that pairs well with any meal or snack.",customizations:[{name:"Can or Glass",options:["Can","Glass"],removable:!1},{name:"Size",options:["Small (12oz)","Medium (16oz)","Large (24oz)"],removable:!1}]}],ia=n.p+"static/media/fallback.50d024375441c952b303.png";function la(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=la(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const sa=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=la(e))&&(r&&(r+=" "),r+=t);return r},ca=e=>"number"==typeof e&&!isNaN(e),ua=e=>"string"==typeof e,da=e=>"function"==typeof e,pa=e=>ua(e)||da(e)?e:null,fa=e=>(0,t.isValidElement)(e)||ua(e)||da(e)||ca(e);function ma(e){let{enter:n,exit:r,appendPosition:o=!1,collapse:a=!0,collapseDuration:i=300}=e;return function(e){let{children:l,position:s,preventExitTransition:c,done:u,nodeRef:d,isIn:p,playToast:f}=e;const m=o?`${n}--${s}`:n,h=o?`${r}--${s}`:r,g=(0,t.useRef)(0);return(0,t.useLayoutEffect)((()=>{const e=d.current,t=m.split(" "),n=r=>{r.target===d.current&&(f(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,t.useEffect)((()=>{const e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,i):u()};p||(c?t():(g.current=1,e.className+=` ${h}`,e.addEventListener("animationend",t)))}),[p]),t.createElement(t.Fragment,null,l)}}function ha(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const ga=new Map;let va=[];const ba=new Set,ya=e=>ba.forEach((t=>t(e))),xa=()=>ga.size>0;function wa(e,t){var n;if(t)return!(null==(n=ga.get(t))||!n.isToastActive(e));let r=!1;return ga.forEach((t=>{t.isToastActive(e)&&(r=!0)})),r}function Sa(e,t){fa(e)&&(xa()||va.push({content:e,options:t}),ga.forEach((n=>{n.buildToast(e,t)})))}function ka(e,t){ga.forEach((n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)}))}function Ca(e){const{subscribe:n,getSnapshot:r,setProps:o}=(0,t.useRef)(function(e){const n=e.containerId||1;return{subscribe(r){const o=function(e,n,r){let o=1,a=0,i=[],l=[],s=[],c=n;const u=new Map,d=new Set,p=()=>{s=Array.from(u.values()),d.forEach((e=>e()))},f=e=>{l=null==e?[]:l.filter((t=>t!==e)),p()},m=e=>{const{toastId:n,onOpen:o,updateId:a,children:i}=e.props,s=null==a;e.staleId&&u.delete(e.staleId),u.set(n,e),l=[...l,e.props.toastId].filter((t=>t!==e.staleId)),p(),r(ha(e,s?"added":"updated")),s&&da(o)&&o((0,t.isValidElement)(i)&&i.props)};return{id:e,props:c,observe:e=>(d.add(e),()=>d.delete(e)),toggle:(e,t)=>{u.forEach((n=>{null!=t&&t!==n.props.toastId||da(n.toggle)&&n.toggle(e)}))},removeToast:f,toasts:u,clearQueue:()=>{a-=i.length,i=[]},buildToast:(n,l)=>{if((t=>{let{containerId:n,toastId:r,updateId:o}=t;const a=n?n!==e:1!==e,i=u.has(r)&&null==o;return a||i})(l))return;const{toastId:s,updateId:d,data:h,staleId:g,delay:v}=l,b=()=>{f(s)},y=null==d;y&&a++;const x={...c,style:c.toastStyle,key:o++,...Object.fromEntries(Object.entries(l).filter((e=>{let[t,n]=e;return null!=n}))),toastId:s,updateId:d,data:h,closeToast:b,isIn:!1,className:pa(l.className||c.toastClassName),bodyClassName:pa(l.bodyClassName||c.bodyClassName),progressClassName:pa(l.progressClassName||c.progressClassName),autoClose:!l.isLoading&&(w=l.autoClose,S=c.autoClose,!1===w||ca(w)&&w>0?w:S),deleteToast(){const e=u.get(s),{onClose:n,children:o}=e.props;da(n)&&n((0,t.isValidElement)(o)&&o.props),r(ha(e,"removed")),u.delete(s),a--,a<0&&(a=0),i.length>0?m(i.shift()):p()}};var w,S;x.closeButton=c.closeButton,!1===l.closeButton||fa(l.closeButton)?x.closeButton=l.closeButton:!0===l.closeButton&&(x.closeButton=!fa(c.closeButton)||c.closeButton);let k=n;(0,t.isValidElement)(n)&&!ua(n.type)?k=(0,t.cloneElement)(n,{closeToast:b,toastProps:x,data:h}):da(n)&&(k=n({closeToast:b,toastProps:x,data:h}));const C={content:k,props:x,staleId:g};c.limit&&c.limit>0&&a>c.limit&&y?i.push(C):ca(v)?setTimeout((()=>{m(C)}),v):m(C)},setProps(e){c=e},setToggle:(e,t)=>{u.get(e).toggle=t},isToastActive:e=>l.some((t=>t===e)),getSnapshot:()=>s}}(n,e,ya);ga.set(n,o);const a=o.observe(r);return va.forEach((e=>Sa(e.content,e.options))),va=[],()=>{a(),ga.delete(n)}},setProps(e){var t;null==(t=ga.get(n))||t.setProps(e)},getSnapshot(){var e;return null==(e=ga.get(n))?void 0:e.getSnapshot()}}}(e)).current;o(e);const a=(0,t.useSyncExternalStore)(n,r,r);return{getToastToRender:function(t){if(!a)return[];const n=new Map;return e.newestOnTop&&a.reverse(),a.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},isToastActive:wa,count:null==a?void 0:a.length}}function Ea(e){let{delay:n,isRunning:r,closeToast:o,type:a="default",hide:i,className:l,style:s,controlledProgress:c,progress:u,rtl:d,isIn:p,theme:f}=e;const m=i||c&&0===u,h={...s,animationDuration:`${n}ms`,animationPlayState:r?"running":"paused"};c&&(h.transform=`scaleX(${u})`);const g=sa("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":d}),v=da(l)?l({rtl:d,type:a,defaultClassName:g}):sa(g,l),b={[c&&u>=1?"onTransitionEnd":"onAnimationEnd"]:c&&u<1?null:()=>{p&&o()}};return t.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},t.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${a}`}),t.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:v,style:h,...b}))}let ja=1;const Oa=()=>""+ja++;function Pa(e){return e&&(ua(e.toastId)||ca(e.toastId))?e.toastId:Oa()}function za(e,t){return Sa(e,t),t.toastId}function Ta(e,t){return{...t,type:t&&t.type||e,toastId:Pa(t)}}function _a(e){return(t,n)=>za(t,Ta(e,n))}function Na(e,t){return za(e,Ta("default",t))}Na.loading=(e,t)=>za(e,Ta("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Na.promise=function(e,t,n){let r,{pending:o,error:a,success:i}=t;o&&(r=ua(o)?Na.loading(o,n):Na.loading(o.render,{...n,...o}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,o)=>{if(null==t)return void Na.dismiss(r);const a={type:e,...l,...n,data:o},i=ua(t)?{render:t}:t;return r?Na.update(r,{...a,...i}):Na(i.render,{...a,...i}),o},c=da(e)?e():e;return c.then((e=>s("success",i,e))).catch((e=>s("error",a,e))),c},Na.success=_a("success"),Na.info=_a("info"),Na.error=_a("error"),Na.warning=_a("warning"),Na.warn=Na.warning,Na.dark=(e,t)=>za(e,Ta("default",{theme:"dark",...t})),Na.dismiss=function(e){!function(e){var t;if(xa()){if(null==e||ua(t=e)||ca(t))ga.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){const t=ga.get(e.containerId);t?t.removeToast(e.id):ga.forEach((t=>{t.removeToast(e.id)}))}}else va=va.filter((t=>null!=e&&t.options.toastId!==e))}(e)},Na.clearWaitingQueue=function(e){void 0===e&&(e={}),ga.forEach((t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()}))},Na.isActive=wa,Na.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:r}=t;return null==(n=ga.get(r||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:r,content:o}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:Oa()};a.toastId!==e&&(a.staleId=e);const i=a.render||o;delete a.render,za(i,a)}},Na.done=e=>{Na.update(e,{progress:1})},Na.onChange=function(e){return ba.add(e),()=>{ba.delete(e)}},Na.play=e=>ka(!0,e),Na.pause=e=>ka(!1,e);const Ia="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,Ra=e=>{let{theme:n,type:r,isLoading:o,...a}=e;return t.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${r})`,...a})},La={info:function(e){return t.createElement(Ra,{...e},t.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return t.createElement(Ra,{...e},t.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return t.createElement(Ra,{...e},t.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return t.createElement(Ra,{...e},t.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return t.createElement("div",{className:"Toastify__spinner"})}},Da=e=>{const{isRunning:n,preventExitTransition:r,toastRef:o,eventHandlers:a,playToast:i}=function(e){const[n,r]=(0,t.useState)(!1),[o,a]=(0,t.useState)(!1),i=(0,t.useRef)(null),l=(0,t.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:p}=e;var f,m;function h(){r(!0)}function g(){r(!1)}function v(t){const r=i.current;l.canDrag&&r&&(l.didMove=!0,n&&g(),l.delta="x"===e.draggableDirection?t.clientX-l.start:t.clientY-l.start,l.start!==t.clientX&&(l.canCloseOnClick=!1),r.style.transform=`translate3d(${"x"===e.draggableDirection?`${l.delta}px, var(--y)`:`0, calc(${l.delta}px + var(--y))`},0)`,r.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function b(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",b);const t=i.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return a(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(m=ga.get((f={id:e.toastId,containerId:e.containerId,fn:r}).containerId||1))||m.setToggle(f.id,f.fn),(0,t.useEffect)((()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",h),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",g)}}),[e.pauseOnFocusLoss]);const y={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){l.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",b);const n=i.current;l.canCloseOnClick=!0,l.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(l.start=t.clientX,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=t.clientY,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){const{top:n,bottom:r,left:o,right:a}=i.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=o&&t.clientX<=a&&t.clientY>=n&&t.clientY<=r?g():h()}};return s&&c&&(y.onMouseEnter=g,e.stacked||(y.onMouseLeave=h)),p&&(y.onClick=e=>{d&&d(e),l.canCloseOnClick&&u()}),{playToast:h,pauseToast:g,isRunning:n,preventExitTransition:o,toastRef:i,eventHandlers:y}}(e),{closeButton:l,children:s,autoClose:c,onClick:u,type:d,hideProgressBar:p,closeToast:f,transition:m,position:h,className:g,style:v,bodyClassName:b,bodyStyle:y,progressClassName:x,progressStyle:w,updateId:S,role:k,progress:C,rtl:E,toastId:j,deleteToast:O,isIn:P,isLoading:z,closeOnClick:T,theme:_}=e,N=sa("Toastify__toast",`Toastify__toast-theme--${_}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":T}),I=da(g)?g({rtl:E,position:h,type:d,defaultClassName:N}):sa(N,g),R=function(e){let{theme:n,type:r,isLoading:o,icon:a}=e,i=null;const l={theme:n,type:r};return!1===a||(da(a)?i=a({...l,isLoading:o}):(0,t.isValidElement)(a)?i=(0,t.cloneElement)(a,l):o?i=La.spinner():(e=>e in La)(r)&&(i=La[r](l))),i}(e),L=!!C||!c,D={closeToast:f,type:d,theme:_};let A=null;return!1===l||(A=da(l)?l(D):(0,t.isValidElement)(l)?(0,t.cloneElement)(l,D):function(e){let{closeToast:n,theme:r,ariaLabel:o="close"}=e;return t.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),n(e)},"aria-label":o},t.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},t.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(D)),t.createElement(m,{isIn:P,done:O,position:h,preventExitTransition:r,nodeRef:o,playToast:i},t.createElement("div",{id:j,onClick:u,"data-in":P,className:I,...a,style:v,ref:o},t.createElement("div",{...P&&{role:k},className:da(b)?b({type:d}):sa("Toastify__toast-body",b),style:y},null!=R&&t.createElement("div",{className:sa("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!z})},R),t.createElement("div",null,s)),A,t.createElement(Ea,{...S&&!L?{key:`pb-${S}`}:{},rtl:E,theme:_,delay:c,isRunning:n,isIn:P,closeToast:f,hide:p,type:d,style:w,className:x,controlledProgress:L,progress:C||0})))},Aa=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Ma=ma(Aa("bounce",!0)),Fa=(ma(Aa("slide",!0)),ma(Aa("zoom")),ma(Aa("flip")),{position:"top-right",transition:Ma,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function Ba(e){let n={...Fa,...e};const r=e.stacked,[o,a]=(0,t.useState)(!0),i=(0,t.useRef)(null),{getToastToRender:l,isToastActive:s,count:c}=Ca(n),{className:u,style:d,rtl:p,containerId:f}=n;function m(e){const t=sa("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":p});return da(u)?u({position:e,rtl:p,defaultClassName:t}):sa(t,pa(u))}function h(){r&&(a(!0),Na.play())}return Ia((()=>{if(r){var e;const t=i.current.querySelectorAll('[data-in="true"]'),r=12,a=null==(e=n.position)?void 0:e.includes("top");let l=0,s=0;Array.from(t).reverse().forEach(((e,t)=>{const n=e;n.classList.add("Toastify__toast--stacked"),t>0&&(n.dataset.collapsed=`${o}`),n.dataset.pos||(n.dataset.pos=a?"top":"bot");const i=l*(o?.2:1)+(o?0:r*t);n.style.setProperty("--y",`${a?i:-1*i}px`),n.style.setProperty("--g",`${r}`),n.style.setProperty("--s",""+(1-(o?s:0))),l+=n.offsetHeight,s+=.025}))}}),[o,c,r]),t.createElement("div",{ref:i,className:"Toastify",id:f,onMouseEnter:()=>{r&&(a(!1),Na.pause())},onMouseLeave:h},l(((e,n)=>{const o=n.length?{...d}:{...d,pointerEvents:"none"};return t.createElement("div",{className:m(e),style:o,key:`container-${e}`},n.map((e=>{let{content:n,props:o}=e;return t.createElement(Da,{...o,stacked:r,collapseAll:h,isIn:s(o.toastId,o.containerId),style:o.style,key:`toast-${o.key}`},n)})))})))}var $a=n(634);const Ha=xr.div`
  margin-top: 20px;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #333;
  }
`,Ua=xr.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`,Wa=xr.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  .icon {
    font-size: 2rem;
    color: #4a90e2;
  }

  .content {
    flex: 1;

    .username {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 1rem;
      color: #333;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 2px;
      margin-bottom: 5px;
    }

    .comment {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 5px;
    }

    .date {
      font-size: 0.8rem;
      color: #888;
    }
  }
`,Va=xr.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #ddd;
  padding-top: 20px;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
  }

  input[type="text"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: #4a90e2;
    }
  }

  textarea {
    width: 100%;
    min-height: 80px;
    resize: vertical;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: #4a90e2;
    }
  }

  .rating-select {
    display: flex;
    align-items: center;
    gap: 10px;

    label {
      font-size: 1rem;
    }

    .stars {
      display: flex;
      gap: 5px;

      .star {
        font-size: 1.5rem;
        color: #ccc;
        cursor: pointer;

        &.selected {
          color: #ffd700;
        }

        &:hover,
        &:hover ~ .star {
          color: #ffd700;
        }
      }
    }
  }

  button {
    align-self: flex-end;
    background-color: #4a90e2;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;

    &:hover {
      background-color: #357ab8;
    }

    &:disabled {
      background-color: #a0c4e3;
      cursor: not-allowed;
    }
  }
`,qa=e=>{let{reviews:n,onAddReview:r,itemName:o}=e;const[a,i]=(0,t.useState)(""),[l,s]=(0,t.useState)(""),[c,u]=(0,t.useState)(5),[d,p]=(0,t.useState)(!1),f=e=>{const t=[];for(let n=1;n<=5;n++)t.push((0,Cr.jsx)(uo,{className:"star "+(n<=e?"selected":""),onClick:()=>u(n),color:n<=e?"#FFD700":"#ccc"},n));return t};return(0,Cr.jsxs)(Ha,{children:[(0,Cr.jsx)("h4",{children:"Customer Reviews"}),(0,Cr.jsx)(Ua,{children:n&&n.length>0?n.map(((e,t)=>(0,Cr.jsxs)(Wa,{children:[(0,Cr.jsx)("div",{className:"icon",children:(0,Cr.jsx)(fo,{})}),(0,Cr.jsxs)("div",{className:"content",children:[(0,Cr.jsx)("div",{className:"username",children:e.username}),(0,Cr.jsx)("div",{className:"rating",children:f(e.rating)}),(0,Cr.jsx)("div",{className:"comment",children:e.comment}),(0,Cr.jsx)("div",{className:"date",children:e.date})]})]},t))):(0,Cr.jsx)("p",{children:"No reviews yet. Be the first to review!"})}),(0,Cr.jsxs)(Va,{onSubmit:e=>{if(e.preventDefault(),""===a.trim())return;p(!0);const t={username:""===l.trim()?"Anonymous":l.trim(),rating:parseFloat(c),comment:a.trim(),date:(new Date).toISOString().split("T")[0]};setTimeout((()=>{r(t),i(""),s(""),u(5),p(!1)}),500)},children:[(0,Cr.jsx)("h4",{children:"Leave a Review"}),(0,Cr.jsx)("input",{type:"text",placeholder:"Your Name (Leave blank for anonymous review)",value:l,onChange:e=>s(e.target.value),maxLength:50}),(0,Cr.jsx)("textarea",{placeholder:`Write your review for ${o}`,value:a,onChange:e=>i(e.target.value),maxLength:500,required:!0}),(0,Cr.jsxs)("div",{className:"rating-select",children:[(0,Cr.jsx)("label",{children:"Your Rating:"}),(0,Cr.jsx)("div",{className:"stars",children:f(c)})]}),(0,Cr.jsxs)("button",{type:"submit",disabled:d||""===a.trim(),children:[d?"Submitting...":"Submit Review",(0,Cr.jsx)(ro,{})]})]})]})},Ya=xr.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  .image-wrapper {
    width: 100%;
    height: 180px;
    background-color: #f9f9f9;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .food-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .details {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: left;

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 8px;

      span {
        display: flex;
        align-items: center;
        gap: 3px;
        background-color: #eef2f3;
        color: #4a90e2;
        padding: 3px 7px;
        border-radius: 15px;
        font-size: 0.7rem;
      }
    }

    h3 {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 3px;
      margin-bottom: 8px;

      .stars {
        display: flex;
        align-items: center;
        gap: 1px;
      }

      .num-reviews {
        font-size: 0.7rem;
        color: #666;
      }
    }

    .estimated-time {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.85rem;
      color: #555;
      margin-bottom: 8px;
    }

    .description {
      margin: 5px 0;
      font-size: 0.85rem;
      color: #666;
    }

    .read-more-button {
      background: none;
      border: none;
      color: #4a90e2;
      cursor: pointer;
      font-size: 0.85rem;
      padding: 0;
      margin-top: 5px;
      text-decoration: underline;

      &:hover {
        color: #357ab8;
      }

      &:focus {
        outline: none;
        text-decoration: none;
      }
    }

    .price {
      font-weight: bold;
      font-size: 1.1rem;
      color: #4a90e2;
      margin-top: 8px;
    }

    .buttons-container {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;

      /* Ensure buttons have consistent sizes */
      button {
        flex: 1; /* Each button takes equal space */
        max-width: 150px; /* Optional: Limit maximum width to prevent excessive stretching */
      }

      /* Responsive styles */
      @media (max-width: 768px) {
        gap: 8px; /* Adjust gap between buttons */
      }

      @media (max-width: 480px) {
        flex-direction: row; /* Keep buttons side by side */
        gap: 6px; /* Further reduce gap */
        justify-content: center; /* Center-align buttons */
        button {
          flex: 1; /* Buttons remain evenly sized */
        }
      }
    }
  }
`,Qa=xr.button`
  padding: 8px 12px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.85rem;
  flex: 1;
  text-align: center;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 0.8rem; /* Slightly smaller font */
    padding: 6px 10px; /* Reduce padding */
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* Even smaller font for narrow screens */
    padding: 10px 8px; /* Further reduce padding */
  }
`,Ka=xr.button`
  padding: 8px 12px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.85rem;
  flex: 1;
  text-align: center;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 0.8rem; /* Slightly smaller font */
    padding: 6px 10px; /* Reduce padding */
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* Even smaller font for narrow screens */
    padding: 17px 8px; /* Further reduce padding */
  }
`,Ga=xr.div`
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
`,Xa=xr.div`
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;

  h2 {
    margin-top: 0;
    color: #333;
    font-size: 1.4rem;
  }

  .customization-options {
    margin: 15px 0;
    text-align: left;

    h4 {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;

      input {
        transform: scale(1.1);
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
  }
`,Ja=xr.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #4a90e2;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
  }
`,Za=xr.button`
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
  }
`,ei=xr.button`
  background-color: #ccc;
  color: #333333;
  border: none;
  border-radius: 5px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #aaa;
  }

  &:focus {
    outline: 2px solid rgba(204, 204, 204, 0.7);
  }
`,ti={Vegan:(0,Cr.jsx)(to,{}),Vegetarian:(0,Cr.jsx)(io,{}),"Gluten-Free":(0,Cr.jsx)(to,{}),Spicy:(0,Cr.jsx)(Xr,{}),Alcoholic:(0,Cr.jsx)(ho,{}),"Non-Alcoholic":(0,Cr.jsx)(Jr,{}),Sweet:(0,Cr.jsx)(Kr,{}),Breakfast:(0,Cr.jsx)(Qr,{}),Lunch:(0,Cr.jsx)(eo,{}),Dinner:(0,Cr.jsx)(mo,{}),Appetizer:(0,Cr.jsx)(Zr,{}),Kosher:(0,Cr.jsx)(oo,{}),Halal:(0,Cr.jsx)(oo,{}),"Contains Nuts":(0,Cr.jsx)($r,{}),Miscellaneous:(0,Cr.jsx)(Gr,{})},ni=e=>{let{id:n,image:r,name:o,tags:a,price:i,description:l,customizations:s,rating:c,numReviews:u,reviews:d,estimatedTime:p}=e;const[f,m]=(0,t.useState)(r||ia),{addItem:h}=(0,t.useContext)(Er),[g,v]=(0,t.useState)(!1),[b,y]=(0,t.useState)(!1),[x,w]=(0,t.useState)({}),[S,k]=(0,t.useState)(!1),[C,E]=(0,t.useState)(d||[]),[j,O]=(0,t.useState)(!1),P=e=>{try{if(v(!0),!n||!o||"number"!==typeof i)throw new Error("Missing essential item data.");h({id:n,name:o,price:i,customizations:e,estimatedTime:p}),Na.success(`${o} has been added to your cart!`,{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\ud83d\uded2"})}catch(t){console.error("Error adding item to cart:",t),Na.error(`Failed to add ${o||"item"} to cart.`,{position:"bottom-right",autoClose:3e3})}finally{v(!1)}},z=()=>{y(!1),w({})},T=l&&l.split(" ").length>6,_=j?l:((e,t)=>{const n=e.split(" ");if(n.length<=t)return e;return n.slice(0,t).join(" ")})(l,6);return(0,Cr.jsxs)(Cr.Fragment,{children:[(0,Cr.jsxs)(Ya,{children:[(0,Cr.jsx)("div",{className:"image-wrapper",children:(0,Cr.jsx)($a.LazyLoadImage,{src:f,alt:o||"Menu Item",onError:()=>{m(ia),Na.warn(`Image failed to load for ${o}.`,{position:"bottom-right",autoClose:2e3})},effect:"blur",className:"food-image"})}),(0,Cr.jsxs)("div",{className:"details",children:[(0,Cr.jsx)("div",{className:"tags",children:a&&Array.isArray(a)&&a.length>0?a.map(((e,t)=>(0,Cr.jsxs)("span",{children:[ti[e]||(0,Cr.jsx)(mo,{})," ",e]},t))):(0,Cr.jsx)("span",{children:"No Tags"})}),(0,Cr.jsxs)("h3",{children:[o||"Unnamed Item"," ",a&&(a.includes("Vegan")||a.includes("Vegetarian"))&&(0,Cr.jsx)(to,{title:"Vegetarian/Vegan"})]}),(0,Cr.jsxs)("div",{className:"rating",children:[(0,Cr.jsx)("div",{className:"stars",children:c?(e=>{const t=[],n=Math.floor(e),r=e-n>=.5;for(let o=0;o<n;o++)t.push((0,Cr.jsx)(uo,{color:"#FFD700"},`star-full-${o}`));for(r&&t.push((0,Cr.jsx)(co,{color:"#FFD700"},"star-half"));t.length<5;)t.push((0,Cr.jsx)(go,{color:"#FFD700"},`star-empty-${t.length}`));return t})(c):(0,Cr.jsx)(go,{color:"#FFD700"})}),(0,Cr.jsx)("div",{className:"num-reviews",children:u?`(${u} reviews)`:"(No reviews)"})]}),"number"===typeof p&&(0,Cr.jsxs)("div",{className:"estimated-time",children:[(0,Cr.jsx)(Yr,{})," Estimated Time: ",p," min"]}),(0,Cr.jsxs)("p",{className:"description",children:[_,T&&(0,Cr.jsx)("button",{className:"read-more-button",onClick:()=>{O((e=>!e))},"aria-label":j?`Read less about ${o||"item"}`:`Read more about ${o||"item"}`,children:j?" Read Less":" ...Read More"})]}),(0,Cr.jsx)("p",{className:"price",children:"number"===typeof i?`$${i.toFixed(2)}`:"Price Unavailable"}),(0,Cr.jsxs)("div",{className:"buttons-container",children:[(0,Cr.jsx)(Ka,{onClick:()=>k(!0),"aria-label":`View reviews for ${o}`,children:"Reviews"}),(0,Cr.jsx)(Qa,{onClick:()=>{s&&Array.isArray(s)&&s.length>0?y(!0):P({})},"aria-label":`Add ${o||"item"} to Order`,disabled:g,children:g?"Adding...":"Add to Order"})]})]})]}),b&&(0,Cr.jsx)(Ga,{onClick:e=>{e.target===e.currentTarget&&z()},role:"dialog","aria-modal":"true",children:(0,Cr.jsxs)(Xa,{children:[(0,Cr.jsx)(Ja,{onClick:z,"aria-label":"Close Customization Modal",children:"\xd7"}),(0,Cr.jsxs)("h2",{children:["Customize Your ",o||"Item"]}),s&&Array.isArray(s)&&s.length>0?s.map(((e,t)=>(0,Cr.jsxs)("div",{className:"customization-options",children:[(0,Cr.jsx)("h4",{children:e.name}),e.options&&Array.isArray(e.options)?e.options.map(((t,n)=>(0,Cr.jsxs)("label",{children:[(0,Cr.jsx)("input",{type:e.removable?"checkbox":"radio",name:e.name,value:t,checked:e.removable?Array.isArray(x[e.name])&&x[e.name].includes(t):x[e.name]===t,onChange:()=>e.removable?((e,t)=>{w((n=>{const r=Array.isArray(n[e])?n[e]:[];return r.includes(t)?{...n,[e]:r.filter((e=>e!==t))}:{...n,[e]:[...r,t]}}))})(e.name,t):w((n=>({...n,[e.name]:t}))),"aria-label":e.removable?`Toggle ${t}`:`Select ${t}`}),e.removable?` Remove ${t}`:` Add ${t}`]},n))):(0,Cr.jsx)("span",{children:"No options available"})]},t))):(0,Cr.jsx)("p",{children:"No customization options available for this item."}),(0,Cr.jsxs)("div",{className:"buttons",children:[(0,Cr.jsx)(ei,{onClick:z,children:"Cancel"}),(0,Cr.jsx)(Za,{onClick:()=>{P(x),y(!1),w({})},disabled:g,children:g?"Adding...":"Confirm"})]})]})}),S&&(0,Cr.jsx)(Ga,{onClick:e=>{e.target===e.currentTarget&&k(!1)},role:"dialog","aria-modal":"true",children:(0,Cr.jsxs)(Xa,{children:[(0,Cr.jsx)(Ja,{onClick:()=>k(!1),"aria-label":"Close Review Modal",children:"\xd7"}),(0,Cr.jsxs)("h2",{children:["Reviews for ",o]}),(0,Cr.jsx)(qa,{reviews:C,onAddReview:e=>{E((t=>[e,...t]))},itemName:o})]})})]})},ri=xr.button`
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
`,oi=()=>{const e=J(),t=window.history.length>1;return(0,Cr.jsxs)(ri,{onClick:()=>{window.history.length>1?e(-1):e("/")},disabled:!t,"aria-label":"Go Back",children:[(0,Cr.jsx)(Hr,{})," ","Back"]})},ai=xr.div`
  padding: 20px;
  max-width: 1200px; /* Set a maximum width */
  margin: 0 auto; /* Center the container */

  @media (max-width: 768px) {
    padding: 10px;
  }
`,ii=xr.div`
  display: flex;
  align-items: center; /* Ensure vertical alignment */
  gap: 15px; /* Space between Back Button and title */
  margin-bottom: 20px;
  margin-top: 10px; /* Add space between header and navbar */

  .back-button {
    padding: 8px 16px;
    border-radius: 5px; /* Optional for better button style */

    @media (max-width: 768px) {
      /* Adjust BackButton on mobile */
      padding: 6px 12px;
    }
  }

  h1 {
    font-size: 1.8rem;
    color: #333;
    margin: 0;
    flex: 1; /* Push the title to occupy remaining space */
    text-align: center; /* Center align title on larger screens */

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: left; /* Align title to the left on mobile */
    }
  }

  @media (max-width: 768px) {
    /* Adjust header layout on mobile */
    justify-content: flex-start;
  }
`,li=xr.div`
  display: flex;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,si=xr.aside`
  width: 250px;
  height: 100%; /* Maintain a consistent height */
  margin-right: 20px;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
  overflow-y: auto; /* Enable scrolling if content overflows */

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
  }

  .clear-filters {
    margin-bottom: 20px;
    text-align: center;

    button {
      padding: 10px 20px;
      border: none;
      background-color: #ff4d4d;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      font-size: 1rem;

      &:hover {
        background-color: #e04343;
      }
    }
  }

  .filter-group {
    margin-bottom: 20px;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      text-align: left;
    }

    .filter-options {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`,ci=xr.main`
  flex: 1;

  .top-controls {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;

    /* Ensure search bar and sort dropdown are on the same line on all devices */
    flex-wrap: nowrap;

    @media (max-width: 768px) {
      /* Remove column direction to keep elements on the same line */
      flex-wrap: nowrap;
      /* Optionally adjust gap for smaller screens */
      gap: 10px;
    }

    .search-bar {
      flex: 1;
      position: relative;

      input {
        width: 100%;
        padding: 12px 40px 12px 35px;
        border: 2px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;

        &:focus {
          border-color: #4a90e2;
          outline: none;
        }
      }

      svg {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        font-size: 1.2rem;
        color: #aaa;
      }
    }

    .sort-dropdown select {
      padding: 12px 40px 12px 12px; /* Match the input padding */
      line-height: 1; /* Adjust to match the height alignment */
      border: 2px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;

      &:focus {
        border-color: #4a90e2;
        outline: none;
      }

      label {
        font-weight: bold;
        font-size: 1rem;
      }

      select {
        padding: 8px 12px;
        border: 2px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;

        &:focus {
          border-color: #4a90e2;
          outline: none;
        }
      }
    }
  }

  .category-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 5px 10px; /* Add padding for better spacing */
    max-width: 100%; /* Ensure it doesn’t exceed the container width */

    /* Hide scrollbar but allow scrolling */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }

    button {
      padding: 8px 16px;
      border: none;
      background-color: #fff;
      color: #555;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: background-color 0.3s, border-color 0.3s;
      flex-shrink: 0; /* Prevent buttons from shrinking */

      &.active {
        color: #4a90e2;
        border-color: #4a90e2;
        font-weight: bold;
      }

      &:hover {
        background-color: #f9f9f9;
      }
    }

    @media (max-width: 768px) {
      /* Ensure all categories are on one line */
      justify-content: center;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 5px; /* Reduce gap for smaller screens */
      padding: 5px; /* Adjust padding for compact display */

      /* Hide scrollbar but allow scrolling */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none;
      }

      button {
        font-size: 0.9rem; /* Slightly smaller text */
        padding: 6px 10px; /* Adjust padding for compact buttons */
      }
    }
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns for desktop screens */
    gap: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr); /* 3 columns for smaller screens */
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(
        2,
        1fr
      ); /* 2 columns for extra small screens */
    }
  }

  .no-results {
    text-align: center;
    font-size: 1.3rem;
    color: #777;
    margin-top: 40px;
  }
`,ui=xr.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    font-size: 1.2rem;
    color: ${e=>{let{checked:t}=e;return t?"#4a90e2":"#ccc"}};
  }

  span {
    font-size: 1rem;
    color: #333;
  }
`,di=xr.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 15px;
  }

  .dropdown-button {
    width: 100%;
    padding: 12px 16px;
    background-color: #4a90e2;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background-color: #357ab8;
    }
  }

  .dropdown-content {
    position: absolute;
    top: 50px; /* Adjust based on button height */
    left: 0;
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;

    .close-button {
      position: absolute;
      top: 15px; /* Adjusted spacing from the top */
      right: 15px; /* Adjusted spacing from the right */
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #333;
    }

    .clear-filters {
      margin-top: 40px; /* Added spacing from the "X" button */
      margin-bottom: 20px;
      text-align: center;

      button {
        padding: 8px 16px;
        border: none;
        background-color: #ff4d4d;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        font-size: 1rem;

        &:hover {
          background-color: #e04343;
        }
      }
    }

    .filter-group {
      margin-bottom: 20px;

      h3 {
        font-size: 1.3rem;
        margin-bottom: 10px;
        text-align: left;
      }

      .filter-options {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    }
  }
`,pi=()=>{const e=(0,t.useMemo)((()=>[{name:"All Items",icon:(0,Cr.jsx)(no,{})},{name:"Food",icon:(0,Cr.jsx)(mo,{})},{name:"Drinks",icon:(0,Cr.jsx)(Jr,{})},{name:"Desserts",icon:(0,Cr.jsx)(Kr,{})}]),[]),[n,r]=(0,t.useState)([]),[o,a]=(0,t.useState)("All Items"),[i,l]=(0,t.useState)("popularity"),[s,c]=(0,t.useState)(""),[u,d]=(0,t.useState)(!1),[p,f]=(0,t.useState)(!1),{addItem:m}=(0,t.useContext)(Er),h=["popularity","priceLowHigh","priceHighLow"],g=(0,t.useMemo)((()=>e.map((e=>e.name))),[e]),v=(0,t.useMemo)((()=>{const e=new Set;return aa.forEach((t=>{Array.isArray(t.tags)&&t.tags.forEach((t=>e.add(t)))})),Array.from(e)}),[]),b=(0,t.useMemo)((()=>{try{const e={};aa.forEach((t=>{t.tags&&Array.isArray(t.tags)&&t.tags.forEach((t=>{["Alcoholic","Non-Alcoholic"].includes(t)?(e["Beverage Type"]=e["Beverage Type"]||new Set,e["Beverage Type"].add(t)):["Vegan","Vegetarian","Gluten-Free"].includes(t)?(e.Dietary=e.Dietary||new Set,e.Dietary.add(t)):["Breakfast","Lunch","Dinner","Appetizer"].includes(t)?(e["Meal Type"]=e["Meal Type"]||new Set,e["Meal Type"].add(t)):["Spicy","Sweet"].includes(t)?(e["Flavor Profile"]=e["Flavor Profile"]||new Set,e["Flavor Profile"].add(t)):(e.Miscellaneous=e.Miscellaneous||new Set,e.Miscellaneous.add(t))}))}));const t={};return Object.keys(e).forEach((n=>{t[n]=Array.from(e[n]).sort()})),t}catch(e){return console.error("Error processing filter categories:",e),Na.error("Failed to load filter categories.",{position:"bottom-right",autoClose:3e3}),{}}}),[aa]),y=e=>{v.includes(e)?r((t=>t.includes(e)?t.filter((t=>t!==e)):[...t,e])):Na.error(`Invalid tag selection: ${e}`,{position:"bottom-right",autoClose:3e3})},x=(0,t.useCallback)((()=>{try{r([]),a("All Items"),c(""),Na.info("All filters have been cleared.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:(0,Cr.jsx)(po,{})}),f(!1)}catch(e){console.error("Error clearing filters:",e),Na.error("Failed to clear filters.",{position:"bottom-right",autoClose:3e3})}}),[]),w=(0,t.useMemo)((()=>{try{let e=[...aa];if("All Items"!==o&&(e=e.filter((e=>e.category&&e.category.toLowerCase()===o.toLowerCase()))),n.length>0&&(e=e.filter((e=>n.every((t=>Array.isArray(e.tags)&&e.tags.includes(t)))))),""!==s.trim()){const t=s.replace(/[<>]/g,"");e=e.filter((e=>e.name&&e.name.toLowerCase().includes(t.toLowerCase())))}const t=[...e].sort(((e,t)=>"priceLowHigh"===i?e.price-t.price:"priceHighLow"===i?t.price-e.price:"popularity"===i?t.popularity-e.popularity:0));return t}catch(e){return console.error("Error filtering and sorting menu:",e),Na.error("Failed to load menu items.",{position:"bottom-right",autoClose:3e3}),[]}}),[o,n,i,s,aa]),S=()=>{f((e=>!e))},k=(0,t.useCallback)((e=>{try{if(!e||!e.id||!e.name||!e.price)throw new Error("Invalid item data.");m(e),Na.success(`${e.name} added to cart!`)}catch(t){console.error("Error adding item to cart:",t),Na.error(`Failed to add ${(null===e||void 0===e?void 0:e.name)||"item"} to cart.`)}}),[m]);return(0,t.useEffect)((()=>{Array.isArray(aa)||Na.error("Menu data is corrupted.",{position:"bottom-right",autoClose:3e3})}),[]),(0,Cr.jsxs)(ai,{children:[(0,Cr.jsxs)(ii,{children:[(0,Cr.jsx)(oi,{className:"back-button","aria-label":"Go Back"}),(0,Cr.jsx)("h1",{children:"Our Delicious Menu"})]}),(0,Cr.jsxs)(li,{children:[(0,Cr.jsxs)(si,{children:[(0,Cr.jsx)("div",{className:"clear-filters",children:(0,Cr.jsx)("button",{onClick:x,"aria-label":"Clear All Filters",children:"Clear Filters"})}),0===Object.keys(b).length?(0,Cr.jsx)("p",{children:"No filters available."}):Object.keys(b).map((e=>(0,Cr.jsxs)("div",{className:"filter-group",children:[(0,Cr.jsx)("h3",{children:e}),(0,Cr.jsx)("div",{className:"filter-options",children:b[e].map((e=>(0,Cr.jsxs)(ui,{checked:n.includes(e),htmlFor:`filter-${e}`,children:[(0,Cr.jsx)("input",{id:`filter-${e}`,type:"checkbox",checked:n.includes(e),onChange:()=>y(e),"aria-label":`Filter by ${e}`}),n.includes(e)?(0,Cr.jsx)(Wr,{"aria-hidden":"true"}):(0,Cr.jsx)(so,{"aria-hidden":"true"}),(0,Cr.jsx)("span",{children:e})]},e)))})]},e)))]}),(0,Cr.jsxs)(ci,{children:[(0,Cr.jsxs)(di,{children:[(0,Cr.jsxs)("button",{className:"dropdown-button",onClick:S,"aria-label":"Toggle Filters","aria-expanded":p,children:[(0,Cr.jsxs)("span",{children:[(0,Cr.jsx)(Gr,{})," Filters"]}),p?(0,Cr.jsx)(qr,{}):(0,Cr.jsx)(Vr,{})]}),p&&(0,Cr.jsxs)("div",{className:"dropdown-content",children:[(0,Cr.jsx)("button",{className:"close-button",onClick:S,"aria-label":"Close Filters",children:(0,Cr.jsx)(po,{})}),(0,Cr.jsx)("div",{className:"clear-filters",children:(0,Cr.jsx)("button",{onClick:x,"aria-label":"Clear All Filters",children:"Clear Filters"})}),0===Object.keys(b).length?(0,Cr.jsx)("p",{children:"No filters available."}):Object.keys(b).map((e=>(0,Cr.jsxs)("div",{className:"filter-group",children:[(0,Cr.jsx)("h3",{children:e}),(0,Cr.jsx)("div",{className:"filter-options",children:b[e].map((e=>(0,Cr.jsxs)(ui,{checked:n.includes(e),htmlFor:`mobile-filter-${e}`,children:[(0,Cr.jsx)("input",{id:`mobile-filter-${e}`,type:"checkbox",checked:n.includes(e),onChange:()=>y(e),"aria-label":`Filter by ${e}`}),n.includes(e)?(0,Cr.jsx)(Wr,{"aria-hidden":"true"}):(0,Cr.jsx)(so,{"aria-hidden":"true"}),(0,Cr.jsx)("span",{children:e})]},e)))})]},e)))]})]}),(0,Cr.jsxs)("div",{className:"top-controls",children:[(0,Cr.jsxs)("div",{className:"search-bar",children:[(0,Cr.jsx)(ao,{"aria-hidden":"true"}),(0,Cr.jsx)("input",{type:"text",placeholder:"Search Items...",value:s,onChange:e=>{try{const t=e.target.value;if(t.length<=100){const e=t.replace(/[<>]/g,"");c(e)}else Na.warn("Search query cannot exceed 100 characters.",{position:"bottom-right",autoClose:2e3})}catch(t){console.error("Error handling search input:",t),Na.error("Failed to process search input.",{position:"bottom-right",autoClose:3e3})}},"aria-label":"Search Menu Items",maxLength:100})]}),(0,Cr.jsx)("div",{className:"sort-dropdown",children:(0,Cr.jsxs)("select",{id:"sort-select",value:i,onChange:e=>{const t=e.target.value;if(!h.includes(t))return Na.error(`Invalid sort option selected: ${t}`,{position:"bottom-right",autoClose:3e3}),void l("popularity");l(t)},"aria-label":"Sort Menu Items",children:[(0,Cr.jsx)("option",{value:"popularity",children:"Popularity"}),(0,Cr.jsx)("option",{value:"priceLowHigh",children:"Price: Low to High"}),(0,Cr.jsx)("option",{value:"priceHighLow",children:"Price: High to Low"})]})})]}),(0,Cr.jsx)("div",{className:"category-tabs",role:"tablist",children:e.map((e=>(0,Cr.jsxs)("button",{className:o===e.name?"active":"",onClick:()=>(e=>{g.includes(e)?a(e):Na.error(`Invalid category selection: ${e}`,{position:"bottom-right",autoClose:3e3})})(e.name),role:"tab","aria-selected":o===e.name,"aria-label":`Filter by category ${e.name}`,children:[e.icon," ",e.name]},e.name)))}),0===w.length?(0,Cr.jsx)("p",{className:"no-results",children:"No menu items match the selected filters."}):(0,Cr.jsx)("div",{className:"menu-grid",children:w.map((e=>(0,Cr.jsx)(ni,{...e,onAddToCart:()=>k(e)},e.id)))})]})]})]})},fi=n.p+"static/media/johndoe.3545932b972a2d34ee23.webp",mi=n.p+"static/media/janesmith.db9ccd66296314b636fa.webp",hi=n.p+"static/media/mikejohnson.7907a9478fefd9dd257f.webp",gi=xr.div`
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
`,vi=()=>(0,Cr.jsxs)(gi,{children:[(0,Cr.jsx)(oi,{})," ",(0,Cr.jsx)("h1",{children:"About Us"}),(0,Cr.jsx)("p",{children:"At Skip The Server, we believe in providing an exceptional dining experience without the wait. Our mission is to deliver delicious, chef-crafted dishes made with the freshest ingredients, all available at your fingertips. Whether you're craving a hearty meal, a sweet dessert, or a refreshing drink, we've got you covered."}),(0,Cr.jsxs)("div",{className:"team",children:[(0,Cr.jsxs)("div",{className:"team-member",children:[(0,Cr.jsx)("img",{src:fi,alt:"Team Member 1",loading:"lazy"}),(0,Cr.jsx)("h3",{children:"John Doe"}),(0,Cr.jsx)("p",{children:"Head Chef"})]}),(0,Cr.jsxs)("div",{className:"team-member",children:[(0,Cr.jsx)("img",{src:mi,alt:"Team Member 2",loading:"lazy"}),(0,Cr.jsx)("h3",{children:"Jane Smith"}),(0,Cr.jsx)("p",{children:"Restaurant Manager"})]}),(0,Cr.jsxs)("div",{className:"team-member",children:[(0,Cr.jsx)("img",{src:hi,alt:"Team Member 3",loading:"lazy"}),(0,Cr.jsx)("h3",{children:"Mike Johnson"}),(0,Cr.jsx)("p",{children:"Lead Server"})]})]})]}),bi=xr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,yi=xr.div`
  background: ${e=>{let{theme:t}=e;return t.modalBg||"#fff"}};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  text-align: center;
  position: relative;

  @media (max-width: 480px) {
    padding: 15px;
  }
`,xi=xr.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #4a90e2;
  }

  &:focus {
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 8px;
    font-size: 20px;
  }
`,wi=xr.p`
  font-size: 1.2rem;
  color: #333;
`,Si=xr.p`
  font-size: 1.1rem;
  color: #555;
  margin-top: 10px;
  font-weight: bold;
`,ki=xr.p`
  font-size: 0.95rem;
  color: #777;
  margin-top: 15px;
  line-height: 1.4;
`,Ci=xr.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`,Ei=xr.button`
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }

  &:focus {
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 0.95rem;
  }
`,ji=e=>{let{onClose:n,message:r,orderId:o}=e;const a=J();return t.useEffect((()=>{const e=e=>{"Escape"===e.key&&n()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[n]),(0,Cr.jsx)(bi,{role:"dialog","aria-modal":"true",onClick:n,children:(0,Cr.jsxs)(yi,{onClick:e=>e.stopPropagation(),children:[(0,Cr.jsx)(xi,{type:"button",onClick:n,"aria-label":"Close Modal",children:"\xd7"}),(0,Cr.jsx)(wi,{children:r}),(0,Cr.jsxs)(Si,{children:["Your Order ID: ",o]}),(0,Cr.jsx)(ki,{children:"Please save this Order ID for future reference. You can use it to track your order or request additional services. We recommend taking a screenshot for your convenience."}),(0,Cr.jsxs)(Ci,{children:[(0,Cr.jsx)(Ei,{type:"button",onClick:()=>{a("/menu"),n()},"aria-label":"Continue Shopping",children:"Continue Shopping"}),(0,Cr.jsx)(Ei,{type:"button",onClick:()=>{a("/order-status",{state:{orderId:o}}),n()},"aria-label":"Track Order",children:"Track Order"}),(0,Cr.jsx)(Ei,{type:"button",onClick:()=>{a("/request-services",{state:{orderId:o}}),n()},"aria-label":"Request Services",children:"Request Services"})]})]})})},Oi=xr.div`
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
`,Pi=()=>{const[e,n]=(0,t.useState)({name:"",email:"",message:""}),[r,o]=(0,t.useState)(!1),a=t=>{const{name:r,value:o}=t.target;n({...e,[r]:o})};return(0,Cr.jsxs)(Oi,{children:[(0,Cr.jsx)(oi,{})," ",(0,Cr.jsx)("h1",{children:"Contact Us"}),(0,Cr.jsxs)("div",{className:"contact-info",children:[(0,Cr.jsxs)("p",{children:[(0,Cr.jsx)("strong",{children:"Address:"})," 1234 Culinary Blvd, Flavor Town, FT 56789"]}),(0,Cr.jsxs)("p",{children:[(0,Cr.jsx)("strong",{children:"Phone:"})," (123) 456-7890"]}),(0,Cr.jsxs)("p",{children:[(0,Cr.jsx)("strong",{children:"Email:"})," contact@skiptheserver.com"]})]}),(0,Cr.jsx)("div",{className:"contact-form",children:(0,Cr.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o(!0),n({name:"",email:"",message:""})},"aria-label":"Contact Form",children:[(0,Cr.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,Cr.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:a,required:!0,"aria-required":"true"}),(0,Cr.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,Cr.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:a,required:!0,"aria-required":"true"}),(0,Cr.jsx)("label",{htmlFor:"message",children:"Message:"}),(0,Cr.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:a,required:!0,"aria-required":"true"}),(0,Cr.jsx)("button",{type:"submit","aria-label":"Submit Contact Form",children:"Submit"})]})}),r&&(0,Cr.jsx)(ji,{message:"Thank you for contacting us! We'll get back to you shortly.",onClose:()=>o(!1)})]})},zi=(0,t.createContext)(),Ti={orders:[]};function _i(e,t){switch(t.type){case"ADD_ORDER":return t.payload.orderId&&Array.isArray(t.payload.items)&&"number"===typeof t.payload.total?{...e,orders:[...e.orders,t.payload]}:(console.error("Invalid order structure:",t.payload),e);case"UPDATE_ORDER_STATUS":return t.payload.status&&"string"===typeof t.payload.status?{...e,orders:e.orders.map((e=>e.orderId===t.payload.orderId?{...e,status:t.payload.status}:e))}:(console.error("Invalid status:",t.payload.status),e);default:return e}}const Ni=e=>{let{children:n}=e;const[r,o]=(0,t.useReducer)(_i,Ti);return(0,Cr.jsx)(zi.Provider,{value:{orders:r.orders,addOrder:e=>{try{o({type:"ADD_ORDER",payload:e})}catch(t){console.error("Error adding order:",t),Na.error("Failed to add order. Please try again.",{position:"bottom-right",autoClose:3e3,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})}},updateOrderStatus:(e,t)=>{try{o({type:"UPDATE_ORDER_STATUS",payload:{orderId:e,status:t}})}catch(n){console.error("Error updating order status:",n),Na.error("Failed to update order status. Please try again.",{position:"bottom-right",autoClose:3e3,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})}},getOrderById:e=>{const t=r.orders.find((t=>t.orderId===e));return t||(console.warn(`Order with ID ${e} not found.`),null)}},children:n})},Ii=Sr`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ri=xr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${e=>{let{isModalOpen:t}=e;return t?"flex":"none"}};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${Ii} 0.3s ease-out;
`,Li=xr.div`
  background: ${e=>{let{theme:t}=e;return t.modalBg||"#fff"}};
  padding: 30px;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius||"10px"}};
  width: 90%;
  max-width: 400px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  animation: ${Ii} 0.3s ease-out;
  position: relative;
`,Di=xr.button`
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

  &:focus {
    outline: 2px solid #4a90e2;
  }
`,Ai=xr.p`
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.textColor||"#333"}};
  text-align: center;
  margin: 20px 0;
`,Mi=xr.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`,Fi=xr.button`
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

  &:focus {
    outline: 2px solid #4a90e2;
  }
`,Bi=xr.button`
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

  &:focus {
    outline: 2px solid #ff4d4d;
  }
`,$i=e=>{let{isModalOpen:n,title:r,message:o,onConfirm:a,onCancel:i}=e;return t.useEffect((()=>{const e=e=>{"Escape"===e.key&&i()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[i]),(0,Cr.jsx)(Ri,{isModalOpen:n,onClick:e=>{e.target===e.currentTarget&&i()},role:"dialog","aria-modal":"true",children:(0,Cr.jsxs)(Li,{children:[(0,Cr.jsx)(Di,{type:"button",onClick:i,"aria-label":"Close Modal",children:"\xd7"}),(0,Cr.jsx)(Ai,{children:o}),(0,Cr.jsxs)(Mi,{children:[(0,Cr.jsx)(Fi,{type:"button",onClick:a,"aria-label":"Confirm",children:"Yes"}),(0,Cr.jsx)(Bi,{type:"button",onClick:i,"aria-label":"Cancel",children:"No"})]})]})})},Hi=xr.div`
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
`,Ui=xr.div`
  background: #fff;
  padding: 30px 25px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
  position: relative;
  display: flex;
  flex-direction: column;

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

  .total {
    font-weight: bold;
    font-size: 1.2rem;

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
`,Wi=xr.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #4a90e2;
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
`,Vi=xr.div`
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
`,qi=xr.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`,Yi=xr.button`
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
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.95rem;
  }
`,Qi=xr.button`
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
    outline: 2px solid #ccc;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.95rem;
  }
`,Ki=e=>{let{isOpen:t,onConfirm:n,onCancel:r,subtotal:o,taxes:a,discount:i,total:l,paymentMethod:s}=e;return t?(0,Cr.jsx)(Hi,{onClick:e=>{e.target===e.currentTarget&&r()},role:"dialog","aria-modal":"true",children:(0,Cr.jsxs)(Ui,{onClick:e=>e.stopPropagation(),children:[(0,Cr.jsx)(Wi,{onClick:r,"aria-label":"Close Modal",children:"\xd7"}),(0,Cr.jsx)("h2",{children:"Confirm Payment"}),(0,Cr.jsxs)(Vi,{children:[(0,Cr.jsxs)("div",{children:[(0,Cr.jsx)("span",{children:"Subtotal:"}),(0,Cr.jsxs)("span",{children:["$",o.toFixed(2)]})]}),(0,Cr.jsxs)("div",{children:[(0,Cr.jsx)("span",{children:"Taxes (5%):"}),(0,Cr.jsxs)("span",{children:["$",a.toFixed(2)]})]}),(0,Cr.jsxs)("div",{children:[(0,Cr.jsx)("span",{children:"Discount:"}),(0,Cr.jsxs)("span",{children:["-$",i.toFixed(2)]})]}),(0,Cr.jsxs)("div",{className:"total",children:[(0,Cr.jsx)("span",{children:"Total:"}),(0,Cr.jsxs)("span",{children:["$",l.toFixed(2)]})]}),(0,Cr.jsxs)("div",{children:[(0,Cr.jsx)("span",{children:"Payment Method:"}),(0,Cr.jsx)("span",{children:s})]})]}),(0,Cr.jsxs)(qi,{children:[(0,Cr.jsx)(Qi,{onClick:r,children:"Cancel"}),(0,Cr.jsx)(Yi,{onClick:n,children:"Confirm"})]})]})}):null};const Gi=n.p+"static/media/google-pay-logo.ffdcf7b7dc7b7f0aa82af7270f336bfd.svg";const Xi=n.p+"static/media/apple-pay-logo.6a31ca334047fea3d6b0be07897d540c.svg";const Ji=n.p+"static/media/paypal-logo.dea93e2dc715d21f1bbd52a694c4408c.svg",Zi={SAVE10:10,SAVE20:20},el=xr.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,tl=xr.div`
  background-color: #f9f9f9;
  padding: 25px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto 30px auto;
  max-width: 100%;

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`,nl=xr.h2`
  margin-top: 0;
  text-align: center;
  color: #333;
  font-size: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,rl=xr.button`
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

  &:focus {
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
    max-width: 180px;
    margin: 20px auto;
  }
`,ol=xr.div`
  overflow-x: auto;
  margin-bottom: 20px;
`,al=xr.table`
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
`,il=xr.ul`
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
`,ll=xr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 600px) {
    align-items: flex-start;
    gap: 5px;
  }
`,sl=xr.div`
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
      outline: 2px solid #4a90e2;
    }
  }

  span {
    font-size: 1rem;
    color: #333;
  }

  @media (max-width: 480px) {
    gap: 3px;

    button {
      padding: 4px 8px;
      font-size: 0.9rem;
    }

    span {
      font-size: 0.9rem;
    }
  }
`,cl=xr.button`
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 10px;
  font-size: 0.9rem;
  cursor: pointer;
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
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 5px 8px;
    font-size: 0.8rem;
  }
`,ul=xr(cl)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #cc0000;
  }
`,dl=xr.td`
  font-weight: bold;
  color: #4a90e2;
  text-align: right;

  @media (max-width: 600px) {
    text-align: left;
  }
`,pl=xr.div`
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
`,fl=xr.input`
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
    width: 100%;
  }
`,ml=xr.button`
  padding: 10px 12px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
  flex-shrink: 0;
  margin-top: 10px;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8rem;
    margin-top: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`,hl=xr.div`
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
`,gl=xr.div`
  margin-top: 30px;

  @media (max-width: 600px) {
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`,vl=xr.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`,bl=xr.div`
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
`,yl=xr.button`
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

  &:focus {
    outline: 2px solid #4a90e2;
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
`,xl=xr.div`
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
`,wl=xr.div`
  flex: 1;
  height: 1px;
  background-color: #ddd;
`,Sl=xr.div`
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
`,kl=xr.div`
  display: flex;
  flex-direction: column;
`,Cl=xr.label`
  margin-bottom: 6px;
  color: #333;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,El=xr.input`
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
`,jl=xr.button`
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
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 1rem;
    margin-top: 25px;
  }
`,Ol=xr.button`
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
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`,Pl=xr.div`
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
`,zl=xr.div`
  background: #fff;
  padding: 30px 25px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
  position: relative;
  display: flex;
  flex-direction: column;

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
`,Tl=xr.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #4a90e2;
  }

  &:focus {
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
`,_l=xr.button`
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
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.95rem;
  }
`,Nl=xr.button`
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
    outline: 2px solid #ccc;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.95rem;
  }
`,Il=e=>{const t=e.replace(/\s+/g,"");if(!/^\d{16}$/.test(t))return!1;let n=0;for(let r=0;r<16;r++){let e=parseInt(t.charAt(15-r),10);r%2===1&&(e*=2),e>9&&(e-=9),n+=e}return n%10===0},Rl=e=>{if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(e))return!1;const[t,n]=e.split("/").map((e=>parseInt(e,10))),r=new Date,o=parseInt(r.getFullYear().toString().slice(-2),10),a=r.getMonth()+1;return!(n<o)&&!(n===o&&t<a)},Ll=e=>/^\d{3,4}$/.test(e),Dl=()=>{var e;const{items:n,removeItem:r,increaseQuantity:o,decreaseQuantity:a,clearCart:i,updateCustomizations:l}=(0,t.useContext)(Er),{addOrder:s}=(0,t.useContext)(zi),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(!1),[f,m]=(0,t.useState)(!1),[h,g]=(0,t.useState)(""),[v,b]=(0,t.useState)(0),[y,x]=(0,t.useState)(null),[w,S]=(0,t.useState)(!1),[k,C]=(0,t.useState)(null),[E,j]=(0,t.useState)(null),[O,P]=(0,t.useState)(!1),[z,T]=(0,t.useState)(null),[_,N]=(0,t.useState)({name:"",cardNumber:"",expiry:"",cvv:""}),[I,R]=(0,t.useState)({nameOnCard:"",cardNumber:"",expiryDate:"",cvv:""}),L=(J(),(0,t.useMemo)((()=>n.reduce(((e,t)=>e+t.price*t.quantity),0)),[n])),D=(0,t.useMemo)((()=>.05*L),[L]),A=(0,t.useMemo)((()=>L*(v/100)),[L,v]),M=(0,t.useMemo)((()=>L+D-A),[L,D,A]),F=()=>"ORD"+Math.random().toString(36).substr(2,9).toUpperCase(),B=e=>{0!==n.length?(T(e),P(!0)):Na.warn("Your cart is empty.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"})},[$,H]=(0,t.useState)(!1),[U,W]=(0,t.useState)(null),[V,q]=(0,t.useState)({}),Y=()=>{H(!1),W(null),q({}),Na.info("Customization edit canceled.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})},Q=e=>{const{name:t,value:n}=e.target;switch(N((e=>({...e,[t]:n}))),t){case"name":""===n.trim()?R((e=>({...e,nameOnCard:"Name is required."}))):(e=>/^[a-zA-Z\s'-]+$/.test(e))(n.trim())?R((e=>({...e,nameOnCard:""}))):R((e=>({...e,nameOnCard:"Invalid name format. Please enter a valid name using a-z, A-Z, spaces, hyphens, and apostrophes."})));break;case"cardNumber":Il(n)?R((e=>({...e,cardNumber:""}))):R((e=>({...e,cardNumber:"Invalid card number. Please enter a 16-digit number with spaces in between each group (ex: 4539 1488 0343 6467)."})));break;case"expiry":Rl(n)?R((e=>({...e,expiryDate:""}))):R((e=>({...e,expiryDate:"Invalid expiration date. Please enter a valid MM/YY format."})));break;case"cvv":Ll(n)?R((e=>({...e,cvv:""}))):R((e=>({...e,cvv:"Invalid CVV."})))}};return(0,Cr.jsxs)(el,{children:[(0,Cr.jsx)(oi,{"aria-label":"Go Back to Menu"}),(0,Cr.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),0===n.length)return void Na.warn("Your cart is empty.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"});const t=_.name.trim(),r=_.cardNumber.trim(),o=_.expiry.trim(),a=_.cvv.trim();let i=!1;""===t&&(R((e=>({...e,nameOnCard:"Name on card is required."}))),i=!0),Il(r)||(R((e=>({...e,cardNumber:"Invalid card number. Please enter a valid 16-digit card number."}))),i=!0),Rl(o)||(R((e=>({...e,expiryDate:"Invalid expiration date. Please use MM/YY format."}))),i=!0),Ll(a)||(R((e=>({...e,cvv:"Invalid CVV. Please enter a 3 or 4-digit CVV."}))),i=!0),i||(T("Credit Card"),P(!0))},children:[(0,Cr.jsxs)(tl,{children:[(0,Cr.jsx)(nl,{children:"Your Order"}),(0,Cr.jsx)(rl,{type:"button",onClick:()=>{0!==n.length?m(!0):Na.warn("Your cart is already empty.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"})},disabled:c||0===n.length,"aria-label":"Empty Cart",children:"Empty Cart"}),0===n.length?(0,Cr.jsx)("p",{children:"Your cart is empty."}):(0,Cr.jsx)(ol,{children:(0,Cr.jsxs)(al,{children:[(0,Cr.jsx)("thead",{children:(0,Cr.jsxs)("tr",{children:[(0,Cr.jsx)("th",{style:{width:"25%"},children:"Item"}),(0,Cr.jsx)("th",{style:{width:"30%"},children:"Customization"}),(0,Cr.jsx)("th",{style:{width:"15%"},children:"Quantity"}),(0,Cr.jsx)("th",{style:{width:"15%"},children:"Price"}),(0,Cr.jsx)("th",{style:{width:"15%"},children:"Action"})]})}),(0,Cr.jsx)("tbody",{children:n.map((e=>(0,Cr.jsxs)("tr",{children:[(0,Cr.jsx)("td",{"data-label":"Item",children:e.name}),(0,Cr.jsx)("td",{"data-label":"Customization",children:(0,Cr.jsxs)(ll,{children:[(0,Cr.jsx)(Ol,{type:"button",onClick:()=>(e=>{const t=aa.find((t=>t.id.toString()===e.id.toString())),n={};null===t||void 0===t||t.customizations.forEach((t=>{var r,o;t.removable?n[t.name]=(null===(r=e.customizations)||void 0===r?void 0:r[t.name])||[]:n[t.name]=(null===(o=e.customizations)||void 0===o?void 0:o[t.name])||t.options[0]})),W(e),q(n),H(!0)})(e),"aria-label":`Edit customization for ${e.name}`,disabled:c,children:"Edit"}),e.customizations&&Object.keys(e.customizations).length>0?(0,Cr.jsx)(il,{children:Object.entries(e.customizations).map((t=>{var n;let[r,o]=t;const a=null===(n=aa.find((t=>t.id.toString()===e.id.toString())))||void 0===n?void 0:n.customizations.find((e=>e.name===r)),i=(null===a||void 0===a?void 0:a.removable)||!1;return(0,Cr.jsxs)("li",{children:[(0,Cr.jsxs)("strong",{children:[r,":"]}),i?(0,Cr.jsx)("ul",{children:Array.isArray(o)&&o.length>0?o.map(((e,t)=>(0,Cr.jsx)("li",{children:e},t))):(0,Cr.jsx)("span",{children:"No options selected"})}):(0,Cr.jsx)("span",{children:o||"No option selected"})]},r)}))}):(0,Cr.jsx)("span",{children:"None"})]})}),(0,Cr.jsx)("td",{"data-label":"Quantity",children:(0,Cr.jsxs)(sl,{children:[(0,Cr.jsx)("button",{type:"button",onClick:()=>(e=>{a(e)})(e),"aria-label":"Decrease quantity",disabled:c||e.quantity<=1,children:"-"}),(0,Cr.jsx)("span",{children:e.quantity}),(0,Cr.jsx)("button",{type:"button",onClick:()=>(e=>{o(e)})(e),"aria-label":"Increase quantity",disabled:c,children:"+"})]})}),(0,Cr.jsxs)(dl,{"data-label":"Price",children:["$",(e.price*e.quantity).toFixed(2)]}),(0,Cr.jsx)("td",{"data-label":"Action",children:(0,Cr.jsx)(ul,{type:"button",onClick:()=>(e=>{C(e),S(!0)})(e),"aria-label":`Remove ${e.name}`,disabled:c,children:"Remove"})})]},`${e.id}-${JSON.stringify(e.customizations)}`)))})]})})]}),n.length>0&&(0,Cr.jsx)(tl,{children:(0,Cr.jsxs)(hl,{children:[(0,Cr.jsxs)("div",{children:[(0,Cr.jsx)("span",{children:"Subtotal:"}),(0,Cr.jsxs)("span",{children:["$",L.toFixed(2)]})]}),(0,Cr.jsxs)("div",{children:[(0,Cr.jsx)("span",{children:"Taxes (5%):"}),(0,Cr.jsxs)("span",{children:["$",D.toFixed(2)]})]}),(0,Cr.jsxs)("div",{children:[(0,Cr.jsxs)("span",{children:["Discount (",v,"%):"]}),(0,Cr.jsxs)("span",{children:["-$",A.toFixed(2)]})]}),(0,Cr.jsxs)("div",{className:"total",children:[(0,Cr.jsx)("span",{children:"Total:"}),(0,Cr.jsxs)("span",{children:["$",(L+D-A).toFixed(2)]})]}),(0,Cr.jsxs)(pl,{children:[(0,Cr.jsx)(fl,{type:"text",placeholder:"Enter discount code",value:h,onChange:e=>g(e.target.value),"aria-label":"Discount code",maxLength:20}),(0,Cr.jsx)(ml,{type:"button",onClick:()=>{if(v>0)return;const e=h.trim().toUpperCase();if(e in Zi){b(Zi[e]),Na.success(`Discount code "${e}" applied!`,{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2714\ufe0f"}),g("")}else Na.error("Invalid discount code.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})},disabled:v>0||c||""===h.trim(),"aria-label":"Apply Discount Code",children:"Apply"})]})]})}),n.length>0&&(0,Cr.jsxs)(gl,{children:[(0,Cr.jsx)(vl,{children:"Pay with Wallet"}),(0,Cr.jsxs)(bl,{children:[(0,Cr.jsx)(yl,{type:"button",onClick:()=>B("PayPal"),disabled:c,"aria-label":"Pay with PayPal",children:(0,Cr.jsx)("img",{src:Ji,alt:"PayPal"})}),(0,Cr.jsx)(yl,{type:"button",onClick:()=>B("Apple Pay"),disabled:c,"aria-label":"Pay with Apple Pay",children:(0,Cr.jsx)("img",{src:Xi,alt:"Apple Pay"})}),(0,Cr.jsx)(yl,{type:"button",onClick:()=>B("Google Pay"),disabled:c,"aria-label":"Pay with Google Pay",children:(0,Cr.jsx)("img",{src:Gi,alt:"Google Pay"})})]}),(0,Cr.jsxs)(xl,{children:[(0,Cr.jsx)(wl,{}),(0,Cr.jsx)("span",{children:"OR"}),(0,Cr.jsx)(wl,{})]}),(0,Cr.jsxs)(Sl,{children:[(0,Cr.jsxs)(kl,{children:[(0,Cr.jsx)(Cl,{htmlFor:"name",children:"Name on Card"}),(0,Cr.jsx)(El,{type:"text",id:"name",name:"name",placeholder:"John Doe",required:!0,onChange:Q,"aria-required":"true","aria-invalid":I.nameOnCard?"true":"false"}),I.nameOnCard&&(0,Cr.jsx)("span",{role:"alert",style:{color:"red",fontSize:"0.8rem"},children:I.nameOnCard})]}),(0,Cr.jsxs)(kl,{children:[(0,Cr.jsx)(Cl,{htmlFor:"cardNumber",children:"Card Number"}),(0,Cr.jsx)(El,{type:"text",id:"cardNumber",name:"cardNumber",placeholder:"1234 5678 9012 3456",required:!0,onChange:Q,"aria-required":"true","aria-invalid":I.cardNumber?"true":"false"}),I.cardNumber&&(0,Cr.jsx)("span",{role:"alert",style:{color:"red",fontSize:"0.8rem"},children:I.cardNumber})]}),(0,Cr.jsxs)("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[(0,Cr.jsxs)(kl,{style:{flex:1,minWidth:"150px"},children:[(0,Cr.jsx)(Cl,{htmlFor:"expiry",children:"Expiration Date"}),(0,Cr.jsx)(El,{type:"text",id:"expiry",name:"expiry",placeholder:"MM/YY",required:!0,onChange:Q,"aria-required":"true","aria-invalid":I.expiryDate?"true":"false"}),I.expiryDate&&(0,Cr.jsx)("span",{role:"alert",style:{color:"red",fontSize:"0.8rem"},children:I.expiryDate})]}),(0,Cr.jsxs)(kl,{style:{flex:1,minWidth:"100px"},children:[(0,Cr.jsx)(Cl,{htmlFor:"cvv",children:"CVV"}),(0,Cr.jsx)(El,{type:"password",id:"cvv",name:"cvv",placeholder:"123",required:!0,onChange:Q,"aria-required":"true","aria-invalid":I.cvv?"true":"false"}),I.cvv&&(0,Cr.jsx)("span",{role:"alert",style:{color:"red",fontSize:"0.8rem"},children:I.cvv})]})]})]})]}),n.length>0&&(0,Cr.jsx)(jl,{type:"submit",disabled:c,children:c?"Processing...":"Complete Purchase"}),d&&(0,Cr.jsx)(ji,{message:"Order successfully placed!",orderId:y,onClose:()=>p(!1)}),f&&(0,Cr.jsx)($i,{isModalOpen:f,message:"Are you sure you want to empty your cart?",onConfirm:()=>{i(),Na.info("Your cart has been emptied.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\ud83d\uded2"}),m(!1)},onCancel:()=>{m(!1),Na.info("Empty cart action canceled.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})}}),w&&null!==k&&(0,Cr.jsx)($i,{isModalOpen:w,message:`Are you sure you want to remove "${k.name}" from your cart?`,onConfirm:()=>{if(null!==k){const e=k.name;r(k),Na.info(`Removed "${e}" from your cart.`,{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\ud83d\uddd1\ufe0f"}),C(null),S(!1)}},onCancel:()=>{C(null),S(!1),Na.info("Remove item action canceled.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"})}}),O&&(0,Cr.jsx)(Ki,{isOpen:O,onConfirm:()=>{u(!0),"Credit Card"===z?setTimeout((()=>{u(!1);const e=F();x(e),localStorage.setItem("lastOrderId",e),s({orderId:e,items:n,total:M,status:"Order Received"}),p(!0),i(),Na.success("Purchase completed successfully!",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\ud83c\udf89"}),P(!1)}),2e3):(Na.info(`Processing ${z} payment...`,{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\ud83d\udcb3"}),setTimeout((()=>{u(!1);const e=F();x(e),localStorage.setItem("lastOrderId",e),s({orderId:e,items:n,total:M,status:"Order Received"}),p(!0),i(),Na.success(`${z} payment successful!`,{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"}),P(!1)}),2e3))},onCancel:()=>P(!1),subtotal:L,taxes:D,discount:A,total:M,paymentMethod:z}),$&&null!==U&&(0,Cr.jsx)(Pl,{onClick:e=>{e.target===e.currentTarget&&Y()},role:"dialog","aria-modal":"true",children:(0,Cr.jsxs)(zl,{children:[(0,Cr.jsx)(Tl,{type:"button",onClick:Y,"aria-label":"Close Edit Customization Modal",children:"\xd7"}),(0,Cr.jsxs)("h2",{children:["Edit Customization for ",U.name]}),null===(e=aa.find((e=>e.id.toString()===U.id.toString())))||void 0===e?void 0:e.customizations.map(((e,t)=>(0,Cr.jsxs)("div",{className:"customization-options",children:[(0,Cr.jsx)("h4",{children:e.name}),e.options.map(((t,n)=>(0,Cr.jsxs)("label",{children:[(0,Cr.jsx)("input",{type:e.removable?"checkbox":"radio",name:e.name,value:t,checked:e.removable?Array.isArray(V[e.name])&&V[e.name].includes(t):V[e.name]===t,onChange:()=>((e,t,n)=>{q((r=>{if(n){const n=r[e]||[];return n.includes(t)?{...r,[e]:n.filter((e=>e!==t))}:{...r,[e]:[...n,t]}}return{...r,[e]:t}}))})(e.name,t,e.removable),"aria-label":e.removable?`Toggle ${t}`:`Select ${t}`}),e.removable?` Remove ${t}`:` Select ${t}`]},n)))]},t))),(0,Cr.jsxs)("div",{className:"buttons",children:[(0,Cr.jsx)(Nl,{type:"button",onClick:Y,children:"Cancel"}),(0,Cr.jsx)(_l,{type:"button",onClick:()=>{const e={...V},t=aa.find((e=>e.id.toString()===U.id.toString()));null===t||void 0===t||t.customizations.forEach((t=>{t.removable||Array.isArray(e[t.name])&&(e[t.name]=e[t.name][0]||"")}));(null===t||void 0===t?void 0:t.customizations.every((t=>!!t.removable||e[t.name]&&"string"===typeof e[t.name]&&""!==e[t.name].trim())))?(l(U,e),Na.success("Customization updated successfully!",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"}),H(!1),W(null),q({})):Na.error("Please select all required customization options.",{position:"bottom-right",autoClose:2e3})},disabled:c,children:c?"Updating...":"Update"})]})]})})]})]})},Al=()=>(0,Cr.jsx)(Dl,{}),Ml=xr.div`
  padding: 40px 20px;
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
`,Fl=xr.div`
  margin: 20px auto;
  max-width: 400px;
`,Bl=xr.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333;
`,$l=xr.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${e=>{let{hasError:t}=e;return t?"#ff4d4d":"#ddd"}};
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: ${e=>{let{hasError:t}=e;return t?"#ff4d4d":"#4a90e2"}};
  }
`,Hl=xr.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`,Ul=xr.button`
  padding: 12px 20px;
  font-size: 1rem;
  background-color: ${e=>{let{disabled:t}=e;return t?"#a0c4e3":"#4a90e2"}};
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: ${e=>{let{disabled:t}=e;return t?"not-allowed":"pointer"}};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${e=>{let{disabled:t}=e;return t?"#a0c4e3":"#357ab8"}};
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`,Wl=xr.div`
  margin-top: 30px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Vl=xr.div`
  position: relative;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  margin-top: 20px;
`,ql=xr.div`
  height: 100%;
  width: ${e=>{let{progress:t}=e;return t}}%;
  background-color: #4a90e2;
  border-radius: 10px;
  transition: width 0.5s ease;
`,Yl=xr.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
  color: ${e=>{let{isError:t}=e;return t?"#ff4d4d":"#333"}};
`,Ql=xr.p`
  font-size: 1rem;
  margin-top: 5px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 5px;
`,Kl=xr.div`
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
`,Gl=xr.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 15px;
  }
`,Xl=xr.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${e=>{let{cancel:t}=e;return t?"#ff4d4d":"#4a90e2"}};
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${e=>{let{cancel:t}=e;return t?"#cc0000":"#357ab8"}};
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`,Jl=xr.p`
  color: #ff4d4d;
  font-size: 0.9rem;
  margin-top: 5px;
`,Zl=()=>{const{getOrderById:e}=(0,t.useContext)(zi),n=G(),r=J(),[o,a]=(0,t.useState)(""),[i,l]=(0,t.useState)(null),[s,c]=(0,t.useState)(0),[u,d]=(0,t.useState)(""),[p,f]=(0,t.useState)(null),[m,h]=(0,t.useState)(!1),[g,v]=(0,t.useState)(!1),[b,y]=(0,t.useState)(""),[x,w]=(0,t.useState)(!1),[S,k]=(0,t.useState)(null),[C,E]=(0,t.useState)(null),[j,O]=(0,t.useState)(null);(0,t.useEffect)((()=>{var e,t;null!==(e=n.state)&&void 0!==e&&e.orderId&&!m?(a(n.state.orderId),P(n.state.orderId),h(!0)):null!==(t=n.state)&&void 0!==t&&t.orderId||!m||(p&&(clearInterval(p),f(null)),a(""),l(null),c(0),d(""),v(!1),y(""),h(!1))}),[n.state,m]);const P=function(){const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:o).trim();if(""===t)return y("Order ID cannot be empty."),void Na.warn("Please enter your Order ID.",{position:"bottom-right",autoClose:1500,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"});if(!(e=>/^[a-zA-Z0-9]{5,15}$/.test(e))(t))return y("Invalid Order ID format. It should be alphanumeric and 5-15 characters long."),void Na.warn("Invalid Order ID format.",{position:"bottom-right",autoClose:1500,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"});y(""),p&&clearInterval(p);try{const n=e(t);n?(l(n),v(!0),c(0),d("Order Received"),z(n.items),Na.success("Order found. Tracking started!",{position:"bottom-right",autoClose:1500,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"})):(l(null),v(!1),d("Order not found. Please check your Order ID."),Na.error("Order not found. Please check your Order ID.",{position:"bottom-right",autoClose:3e3,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"}))}catch(n){l(null),v(!1),d("An unexpected error occurred. Please try again later."),Na.error("An unexpected error occurred. Please try again later.",{position:"bottom-right",autoClose:3e3,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"}),console.error("Error fetching order:",n)}},z=e=>{let t=0;e.forEach((e=>{"number"===typeof e.estimatedTime?t+=e.estimatedTime*e.quantity:t+=20*e.quantity})),E(t),O(t),T(t)},T=e=>{const t=[{percent:0,text:"Order Received"},{percent:25,text:"Preparing your order"},{percent:50,text:"Cooking in progress"},{percent:75,text:"Order is almost ready"},{percent:100,text:"Your order will be served shortly!"}],n=[0,25,50,75,100];let r=0;p&&clearInterval(p);const o=setInterval((()=>{if(r>=n.length)return clearInterval(o),f(null),void E(0);const a=n[r];c(a);const i=t.find((e=>e.percent===a)).text;d(i);const l=Math.ceil(e*((100-a)/100));E(l),r++}),1e3);f(o)};(0,t.useEffect)((()=>()=>{p&&clearInterval(p)}),[p]);const _=()=>{k("trackAnother"),w(!0)},N=()=>{k("goHome"),w(!0)};return(0,Cr.jsxs)(Ml,{children:[(0,Cr.jsx)(oi,{}),(0,Cr.jsx)("h1",{children:"Track Your Order"}),!g&&(0,Cr.jsxs)(Fl,{children:[(0,Cr.jsx)(Bl,{htmlFor:"orderId",children:"Enter your Order ID"}),(0,Cr.jsx)($l,{id:"orderId",type:"text",value:o,onChange:e=>a(e.target.value),"aria-label":"Order ID","aria-describedby":"orderId-error","aria-invalid":b?"true":"false",hasError:b}),b&&(0,Cr.jsx)(Jl,{id:"orderId-error",children:b}),(0,Cr.jsx)(Hl,{children:(0,Cr.jsx)(Ul,{onClick:()=>P(),"aria-label":"Track Order",disabled:!!p,children:p?"Tracking...":"Track Order"})})]}),u&&(0,Cr.jsx)(Yl,{isError:!g&&!i,children:u}),g&&i&&(0,Cr.jsxs)(Wl,{children:[(0,Cr.jsx)(Vl,{children:(0,Cr.jsx)(ql,{progress:s})}),null!==C&&(0,Cr.jsxs)(Ql,{children:[(0,Cr.jsx)(Yr,{})," Estimated Time Remaining: ",C," min"]}),(0,Cr.jsxs)(Kl,{children:[(0,Cr.jsx)("h3",{children:"Order Details:"}),(0,Cr.jsx)("ul",{children:i.items.map(((e,t)=>(0,Cr.jsxs)("li",{children:[e.quantity," x ",e.name]},t)))}),(0,Cr.jsxs)("p",{children:["Total: $",i.total.toFixed(2)]})]}),(0,Cr.jsxs)(Gl,{children:[(0,Cr.jsx)(Xl,{onClick:_,children:"Track Another Order"}),(0,Cr.jsx)(Xl,{onClick:()=>{k("requestServices"),w(!0)},children:"Request Services"}),(0,Cr.jsx)(Xl,{onClick:N,children:"Home"})]})]}),g&&!i&&(0,Cr.jsxs)(Gl,{children:[(0,Cr.jsx)(Xl,{onClick:_,children:"Track Another Order"}),(0,Cr.jsx)(Xl,{onClick:N,children:"Home"})]}),(0,Cr.jsx)($i,{isModalOpen:x,title:"goHome"===S?"Confirm Navigation":"Confirm Action",message:"goHome"===S?"Are you sure you want to return to the Home page?":"trackAnother"===S?"Are you sure you want to track another order?":"Are you sure you want to request additional services?",onConfirm:()=>{"trackAnother"===S?(Na.info("Tracking another order.",{position:"bottom-right",autoClose:1500,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2139\ufe0f"}),r("/order-status")):"requestServices"===S?g&&i?r("/request-services",{state:{orderId:i.orderId}}):r("/request-services"):"goHome"===S&&r("/"),w(!1),k(null)},onCancel:()=>{w(!1),k(null)}})]})},es=xr.div`
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
`,ts=xr.div`
  margin: 20px auto;
  max-width: 500px;
  text-align: left;
`,ns=xr.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333;
  text-align: center;
`,rs=xr.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${e=>{let{hasError:t}=e;return t?"#ff4d4d":"#ddd"}};
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: ${e=>{let{hasError:t}=e;return t?"#ff4d4d":"#4a90e2"}};
  }
`,os=xr.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`,as=xr.button`
  padding: 12px 20px;
  font-size: 1rem;
  background-color: ${e=>{let{disabled:t}=e;return t?"#a0c4e3":"#4a90e2"}};
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: ${e=>{let{disabled:t}=e;return t?"not-allowed":"pointer"}};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${e=>{let{disabled:t}=e;return t?"#a0c4e3":"#357ab8"}};
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`,is=xr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 15px;
`,ls=xr.label`
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
`,ss=xr.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${e=>{let{hasError:t}=e;return t?"#ff4d4d":"#ddd"}};
  border-radius: 5px;
  margin-top: 10px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${e=>{let{hasError:t}=e;return t?"#ff4d4d":"#4a90e2"}};
  }
`,cs=xr.div`
  margin-top: 30px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,us=(xr.div`
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
`),ds=xr.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${e=>{let{cancel:t}=e;return t?"#ff4d4d":"#4a90e2"}};
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${e=>{let{cancel:t}=e;return t?"#cc0000":"#357ab8"}};
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`,ps=xr.p`
  color: #ff4d4d;
  font-size: 0.9rem;
  margin-top: 5px;
`,fs=(xr.p`
  color: #ff4d4d;
  font-size: 1rem;
  margin-top: 10px;
`,()=>{const{getOrderById:e}=(0,t.useContext)(zi),n=G(),r=J(),[o,a]=(0,t.useState)(""),[i,l]=(0,t.useState)(""),[s,c]=(0,t.useState)(!1),[u,d]=(0,t.useState)([]),[p,f]=(0,t.useState)(""),[m,h]=(0,t.useState)(!1),[g,v]=(0,t.useState)(!1),[b,y]=(0,t.useState)(null),[x,w]=(0,t.useState)(""),[S,k]=(0,t.useState)(""),[C,E]=(0,t.useState)(!1),[j,O]=(0,t.useState)(null);(0,t.useEffect)((()=>{var e,t;null!==(e=n.state)&&void 0!==e&&e.orderId&&!g?(a(n.state.orderId),P(n.state.orderId),v(!0)):null!==(t=n.state)&&void 0!==t&&t.orderId||!g||(a(""),l(""),c(!1),d([]),f(""),y(null),v(!1),w(""),k(""))}),[n.state,g]);const P=function(){const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:o).trim(),n=i.trim();if(""!==t){if(!(e=>/^[a-zA-Z0-9]{5,15}$/.test(e))(t))return w("Invalid Order ID format. It should be alphanumeric and 5-15 characters long."),void Na.warn("Invalid Order ID format.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"});try{const n=e(t);n?(c(!0),y(n),w(""),Na.success("Order ID verified!",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"})):(c(!1),y(null),w("Order not found. Please check your Order ID."),Na.error("Invalid Order ID. Please check and try again.",{position:"bottom-right",autoClose:3e3,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"}))}catch(r){c(!1),y(null),w("An unexpected error occurred. Please try again later."),Na.error("An unexpected error occurred. Please try again later.",{position:"bottom-right",autoClose:3e3,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u274c"}),console.error("Error verifying order ID:",r)}}else if(""!==n){if(!/^\d+$/.test(n))return w("Invalid Table Number. Please enter a valid number."),void Na.warn("Invalid Table Number. Please enter a valid number.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"});c(!0),y(null),w(""),Na.success("Table number verified!",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"})}else w("Please enter your Order ID or Table Number."),Na.warn("Please enter your Order ID or Table Number.",{position:"bottom-right",autoClose:1500,closeProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"})},z=()=>{O("requestAnother"),E(!0)},T=()=>{O("trackOrder"),E(!0)},_=()=>{O("goHome"),E(!0)};return(0,Cr.jsxs)(es,{children:[(0,Cr.jsx)(oi,{}),(0,Cr.jsx)("h1",{children:"Request Additional Services"}),!s&&(0,Cr.jsxs)(ts,{children:[(0,Cr.jsx)(ns,{htmlFor:"orderId",children:"Enter your Order ID"}),(0,Cr.jsx)(rs,{id:"orderId",type:"text",value:o,onChange:e=>a(e.target.value),"aria-label":"Order ID","aria-describedby":"orderId-error","aria-invalid":x?"true":"false",hasError:x}),x&&(0,Cr.jsx)(ps,{id:"orderId-error",children:x}),(0,Cr.jsx)(os,{children:(0,Cr.jsx)(as,{onClick:()=>P(),disabled:m,"aria-label":"Verify",children:m?"Verifying...":"Verify"})})]}),s&&(0,Cr.jsxs)(ts,{children:[(0,Cr.jsx)(is,{children:["Water","Napkins","Condiments","Cutlery","Assistance","Other"].map(((e,t)=>(0,Cr.jsxs)(ls,{children:[(0,Cr.jsx)("input",{type:"checkbox",value:e,onChange:()=>(e=>{u.includes(e)?d(u.filter((t=>t!==e))):d([...u,e])})(e),checked:u.includes(e),"aria-label":e}),(0,Cr.jsx)("span",{children:e})]},t)))}),u.includes("Other")&&(0,Cr.jsxs)(Cr.Fragment,{children:[(0,Cr.jsx)(ns,{htmlFor:"otherRequest",children:"Please specify:"}),(0,Cr.jsx)(ss,{id:"otherRequest",rows:"3",value:p,onChange:e=>f(e.target.value),"aria-label":"Other Service Request","aria-describedby":"otherRequest-error","aria-invalid":S?"true":"false",hasError:S}),S&&(0,Cr.jsx)(ps,{id:"otherRequest-error",children:S})]}),(0,Cr.jsx)(os,{children:(0,Cr.jsx)(as,{onClick:()=>{const e=p.trim();return u.includes("Other")&&""===e?(k("Please specify your other request."),void Na.warn("Please specify your other request.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"})):(k(""),0===u.length&&""===e?(k("Please select at least one service or enter a custom request."),void Na.warn("Please select at least one service or enter a custom request.",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u26a0\ufe0f"})):(h(!0),void setTimeout((()=>{h(!1),Na.success("Your service requests have been submitted!",{position:"bottom-right",autoClose:1500,closeButton:!0,hideProgressBar:!0,pauseOnHover:!0,draggable:!1,icon:"\u2705"}),a(""),l(""),c(!1),d([]),f(""),y(null),v(!1),w(""),k("")}),2e3)))},disabled:m,"aria-label":"Submit Request",children:m?"Submitting...":"Submit Request"})})]}),s&&b&&(0,Cr.jsxs)(cs,{children:[(0,Cr.jsx)("h3",{children:"Order Details:"}),(0,Cr.jsx)("ul",{children:b.items.map(((e,t)=>(0,Cr.jsxs)("li",{children:[e.quantity," x ",e.name]},t)))}),(0,Cr.jsxs)("p",{children:["Total: $",b.total.toFixed(2)]})]}),s&&(0,Cr.jsxs)(us,{children:[(0,Cr.jsx)(ds,{onClick:z,children:"Request Services for Another Order"}),(0,Cr.jsx)(ds,{onClick:T,children:"Track Order"}),(0,Cr.jsx)(ds,{onClick:_,children:"Home"})," "]}),s&&!b&&(0,Cr.jsxs)(us,{children:[(0,Cr.jsx)(ds,{onClick:z,children:"Request Services for Another Order"}),(0,Cr.jsx)(ds,{onClick:T,children:"Track Order"}),(0,Cr.jsx)(ds,{onClick:_,children:"Home"})," "]}),(0,Cr.jsx)($i,{isModalOpen:C,title:"goHome"===j?"Confirm Navigation":"Confirm Action",message:"goHome"===j?"Are you sure you want to return to the Home page?":"requestAnother"===j?"Are you sure you want to request services for another order?":"Are you sure you want to track this order?",onConfirm:()=>{"requestAnother"===j?r("/request-services"):"trackOrder"===j?s&&b?r("/order-status",{state:{orderId:b.orderId}}):r("/order-status"):"goHome"===j&&r("/"),E(!1),O(null)},onCancel:()=>{E(!1),O(null)}})]})}),ms=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=vr.apply(void 0,Ne([e],n,!1)),a="sc-global-".concat(tn(JSON.stringify(o))),i=new wr(o,a),l=function(e){var n=tr(),r=t.useContext(pr),o=t.useRef(n.styleSheet.allocateGSInstance(a)).current;return n.styleSheet.server&&s(o,e,n.styleSheet,r,n.stylis),t.useLayoutEffect((function(){if(!n.styleSheet.server)return s(o,e,n.styleSheet,r,n.stylis),function(){return i.removeStyles(o,n.styleSheet)}}),[o,e,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,$t,n,o);else{var a=_e(_e({},t),{theme:Wt(t,r,l.defaultProps)});i.renderStyles(e,a,n,o)}}return t.memo(l)})`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #fff;
    color: #333;
  }

  html {
    overflow-y: scroll;
  }

  * {
    box-sizing: border-box;
  }
`,hs=xr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,gs=xr.main`
  flex: 1;
  padding-top: 70px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;const vs=function(){return(0,Cr.jsx)(Po,{children:(0,Cr.jsxs)(hs,{children:[(0,Cr.jsx)(ms,{}),(0,Cr.jsx)(ko,{}),(0,Cr.jsx)(gs,{children:(0,Cr.jsxs)(ve,{children:[(0,Cr.jsx)(he,{path:"/",element:(0,Cr.jsx)(No,{})}),(0,Cr.jsx)(he,{path:"/menu",element:(0,Cr.jsx)(pi,{})}),(0,Cr.jsx)(he,{path:"/about",element:(0,Cr.jsx)(vi,{})}),(0,Cr.jsx)(he,{path:"/contact",element:(0,Cr.jsx)(Pi,{})}),(0,Cr.jsx)(he,{path:"/checkout",element:(0,Cr.jsx)(Al,{})}),(0,Cr.jsx)(he,{path:"/order-status",element:(0,Cr.jsx)(Zl,{})}),(0,Cr.jsx)(he,{path:"/request-services",element:(0,Cr.jsx)(fs,{})}),(0,Cr.jsx)(he,{path:"*",element:(0,Cr.jsx)("h1",{children:"404: Page Not Found"})})]})}),(0,Cr.jsx)(Eo,{})]})})};o.createRoot(document.getElementById("root")).render((0,Cr.jsx)(t.StrictMode,{children:(0,Cr.jsx)(zr,{children:(0,Cr.jsx)(Ni,{children:(0,Cr.jsxs)(Ee,{children:[(0,Cr.jsx)(vs,{}),(0,Cr.jsx)(Ba,{})]})})})}))})()})();
//# sourceMappingURL=main.3f5b1a9d.js.map