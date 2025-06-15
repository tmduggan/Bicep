(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bg={exports:{}},Il={},Fg={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),GE=Symbol.for("react.portal"),KE=Symbol.for("react.fragment"),QE=Symbol.for("react.strict_mode"),YE=Symbol.for("react.profiler"),XE=Symbol.for("react.provider"),JE=Symbol.for("react.context"),ZE=Symbol.for("react.forward_ref"),ew=Symbol.for("react.suspense"),tw=Symbol.for("react.memo"),nw=Symbol.for("react.lazy"),pp=Symbol.iterator;function rw(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bg=Object.assign,jg={};function zi(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Ug}zi.prototype.isReactComponent={};zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $g(){}$g.prototype=zi.prototype;function Ch(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Ug}var kh=Ch.prototype=new $g;kh.constructor=Ch;Bg(kh,zi.prototype);kh.isPureReactComponent=!0;var mp=Array.isArray,zg=Object.prototype.hasOwnProperty,Ph={current:null},Wg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zg.call(e,r)&&!Wg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:go,type:t,key:s,ref:o,props:i,_owner:Ph.current}}function iw(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function sw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gp=/\/+/g;function Au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sw(""+t.key):e.toString(36)}function ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case go:case GE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Au(o,0):r,mp(i)?(n="",t!=null&&(n=t.replace(gp,"$&/")+"/"),ga(i,e,n,"",function(h){return h})):i!=null&&(Nh(i)&&(i=iw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",mp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Au(s,l);o+=ga(s,e,n,u,i)}else if(u=rw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Au(s,l++),o+=ga(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Go(t,e,n){if(t==null)return t;var r=[],i=0;return ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ow(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},ya={transition:null},aw={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:ya,ReactCurrentOwner:Ph};function qg(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Go,forEach:function(t,e,n){Go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!Nh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=zi;ee.Fragment=KE;ee.Profiler=YE;ee.PureComponent=Ch;ee.StrictMode=QE;ee.Suspense=ew;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aw;ee.act=qg;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ph.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)zg.call(e,u)&&!Wg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:go,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:JE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:XE,_context:t},t.Consumer=t};ee.createElement=Hg;ee.createFactory=function(t){var e=Hg.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:ZE,render:t}};ee.isValidElement=Nh;ee.lazy=function(t){return{$$typeof:nw,_payload:{_status:-1,_result:t},_init:ow}};ee.memo=function(t,e){return{$$typeof:tw,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=ya.transition;ya.transition={};try{t()}finally{ya.transition=e}};ee.unstable_act=qg;ee.useCallback=function(t,e){return _t.current.useCallback(t,e)};ee.useContext=function(t){return _t.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};ee.useEffect=function(t,e){return _t.current.useEffect(t,e)};ee.useId=function(){return _t.current.useId()};ee.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return _t.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};ee.useRef=function(t){return _t.current.useRef(t)};ee.useState=function(t){return _t.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return _t.current.useTransition()};ee.version="18.3.1";Fg.exports=ee;var fe=Fg.exports;const lw=qE(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uw=fe,cw=Symbol.for("react.element"),hw=Symbol.for("react.fragment"),dw=Object.prototype.hasOwnProperty,fw=uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pw={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dw.call(e,r)&&!pw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cw,type:t,key:s,ref:o,props:i,_owner:fw.current}}Il.Fragment=hw;Il.jsx=Gg;Il.jsxs=Gg;bg.exports=Il;var F=bg.exports,cc={},Kg={exports:{}},Lt={},Qg={exports:{}},Yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,O){var Y=$.length;$.push(O);e:for(;0<Y;){var de=Y-1>>>1,le=$[de];if(0<i(le,O))$[de]=O,$[Y]=le,Y=de;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var O=$[0],Y=$.pop();if(Y!==O){$[0]=Y;e:for(var de=0,le=$.length,ke=le>>>1;de<ke;){var Wt=2*(de+1)-1,Ht=$[Wt],ge=Wt+1,bt=$[ge];if(0>i(Ht,Y))ge<le&&0>i(bt,Ht)?($[de]=bt,$[ge]=Y,de=ge):($[de]=Ht,$[Wt]=Y,de=Wt);else if(ge<le&&0>i(bt,Y))$[de]=bt,$[ge]=Y,de=ge;else break e}}return O}function i($,O){var Y=$.sortIndex-O.sortIndex;return Y!==0?Y:$.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,y=3,S=!1,C=!1,x=!1,V=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var O=n(h);O!==null;){if(O.callback===null)r(h);else if(O.startTime<=$)r(h),O.sortIndex=O.expirationTime,e(u,O);else break;O=n(h)}}function D($){if(x=!1,A($),!C)if(n(u)!==null)C=!0,Ce(U);else{var O=n(h);O!==null&&Ke(D,O.startTime-$)}}function U($,O){C=!1,x&&(x=!1,I(m),m=-1),S=!0;var Y=y;try{for(A(O),g=n(u);g!==null&&(!(g.expirationTime>O)||$&&!R());){var de=g.callback;if(typeof de=="function"){g.callback=null,y=g.priorityLevel;var le=de(g.expirationTime<=O);O=t.unstable_now(),typeof le=="function"?g.callback=le:g===n(u)&&r(u),A(O)}else r(u);g=n(u)}if(g!==null)var ke=!0;else{var Wt=n(h);Wt!==null&&Ke(D,Wt.startTime-O),ke=!1}return ke}finally{g=null,y=Y,S=!1}}var B=!1,w=null,m=-1,v=5,T=-1;function R(){return!(t.unstable_now()-T<v)}function P(){if(w!==null){var $=t.unstable_now();T=$;var O=!0;try{O=w(!0,$)}finally{O?_():(B=!1,w=null)}}else B=!1}var _;if(typeof E=="function")_=function(){E(P)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ve=re.port2;re.port1.onmessage=P,_=function(){ve.postMessage(null)}}else _=function(){V(P,0)};function Ce($){w=$,B||(B=!0,_())}function Ke($,O){m=V(function(){$(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,Ce(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var O=3;break;default:O=y}var Y=y;y=O;try{return $()}finally{y=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,O){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Y=y;y=$;try{return O()}finally{y=Y}},t.unstable_scheduleCallback=function($,O,Y){var de=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,$){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Y+le,$={id:f++,callback:O,priorityLevel:$,startTime:Y,expirationTime:le,sortIndex:-1},Y>de?($.sortIndex=Y,e(h,$),n(u)===null&&$===n(h)&&(x?(I(m),m=-1):x=!0,Ke(D,Y-de))):($.sortIndex=le,e(u,$),C||S||(C=!0,Ce(U))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var O=y;return function(){var Y=y;y=O;try{return $.apply(this,arguments)}finally{y=Y}}}})(Yg);Qg.exports=Yg;var mw=Qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gw=fe,Ot=mw;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,Ws={};function Gr(t,e){Ci(t,e),Ci(t+"Capture",e)}function Ci(t,e){for(Ws[t]=e,t=0;t<e.length;t++)Xg.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hc=Object.prototype.hasOwnProperty,yw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},_p={};function _w(t){return hc.call(_p,t)?!0:hc.call(yp,t)?!1:yw.test(t)?_p[t]=!0:(yp[t]=!0,!1)}function vw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ew(t,e,n,r){if(e===null||typeof e>"u"||vw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function Dh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xh,Dh);tt[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xh,Dh);tt[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xh,Dh);tt[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ew(e,n,i,r)&&(n=null),r||i===null?_w(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),si=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),Oh=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),Jg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),pc=Symbol.for("react.suspense_list"),Mh=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),ey=Symbol.for("react.offscreen"),vp=Symbol.iterator;function ds(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Ru;function Ts(t){if(Ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ru=e&&e[1]||""}return`
`+Ru+t}var Cu=!1;function ku(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ts(t):""}function ww(t){switch(t.tag){case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return t=ku(t.type,!1),t;case 11:return t=ku(t.type.render,!1),t;case 1:return t=ku(t.type,!0),t;default:return""}}function mc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case si:return"Portal";case dc:return"Profiler";case Oh:return"StrictMode";case fc:return"Suspense";case pc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zg:return(t.displayName||"Context")+".Consumer";case Jg:return(t._context.displayName||"Context")+".Provider";case Lh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mh:return e=t.displayName||null,e!==null?e:mc(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return mc(t(e))}catch{}}return null}function Tw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mc(e);case 8:return e===Oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ty(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Iw(t){var e=ty(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qo(t){t._valueTracker||(t._valueTracker=Iw(t))}function ny(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ty(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gc(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ry(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function yc(t,e){ry(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_c(t,e.type,n):e.hasOwnProperty("defaultValue")&&_c(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _c(t,e,n){(e!=="number"||ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Is(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function iy(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ip(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ec(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yo,oy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sw=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){Sw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function ay(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function ly(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ay(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Aw=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wc(t,e){if(e){if(Aw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Tc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ic=null;function bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sc=null,_i=null,vi=null;function Sp(t){if(t=vo(t)){if(typeof Sc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=kl(e),Sc(t.stateNode,t.type,e))}}function uy(t){_i?vi?vi.push(t):vi=[t]:_i=t}function cy(){if(_i){var t=_i,e=vi;if(vi=_i=null,Sp(t),e)for(t=0;t<e.length;t++)Sp(e[t])}}function hy(t,e){return t(e)}function dy(){}var Pu=!1;function fy(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return hy(t,e,n)}finally{Pu=!1,(_i!==null||vi!==null)&&(dy(),cy())}}function qs(t,e){var n=t.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Ac=!1;if(kn)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{Ac=!1}function Rw(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var xs=!1,Fa=null,Ua=!1,Rc=null,Cw={onError:function(t){xs=!0,Fa=t}};function kw(t,e,n,r,i,s,o,l,u){xs=!1,Fa=null,Rw.apply(Cw,arguments)}function Pw(t,e,n,r,i,s,o,l,u){if(kw.apply(this,arguments),xs){if(xs){var h=Fa;xs=!1,Fa=null}else throw Error(b(198));Ua||(Ua=!0,Rc=h)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function py(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ap(t){if(Kr(t)!==t)throw Error(b(188))}function Nw(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ap(i),t;if(s===r)return Ap(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function my(t){return t=Nw(t),t!==null?gy(t):null}function gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gy(t);if(e!==null)return e;t=t.sibling}return null}var yy=Ot.unstable_scheduleCallback,Rp=Ot.unstable_cancelCallback,xw=Ot.unstable_shouldYield,Dw=Ot.unstable_requestPaint,be=Ot.unstable_now,Vw=Ot.unstable_getCurrentPriorityLevel,Fh=Ot.unstable_ImmediatePriority,_y=Ot.unstable_UserBlockingPriority,Ba=Ot.unstable_NormalPriority,Ow=Ot.unstable_LowPriority,vy=Ot.unstable_IdlePriority,Sl=null,on=null;function Lw(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:Fw,Mw=Math.log,bw=Math.LN2;function Fw(t){return t>>>=0,t===0?32:31-(Mw(t)/bw|0)|0}var Xo=64,Jo=4194304;function Ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ss(l):(s&=o,s!==0&&(r=Ss(s)))}else o=n&~i,o!==0?r=Ss(o):s!==0&&(r=Ss(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function Uw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=Uw(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ey(){var t=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function jw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function wy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ty,Bh,Iy,Sy,Ay,kc=!1,Zo=[],Zn=null,er=null,tr=null,Gs=new Map,Ks=new Map,Hn=[],$w="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(e.pointerId)}}function ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vo(e),e!==null&&Bh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function zw(t,e,n,r,i){switch(e){case"focusin":return Zn=ps(Zn,t,e,n,r,i),!0;case"dragenter":return er=ps(er,t,e,n,r,i),!0;case"mouseover":return tr=ps(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gs.set(s,ps(Gs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ks.set(s,ps(Ks.get(s)||null,t,e,n,r,i)),!0}return!1}function Ry(t){var e=Pr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=py(n),e!==null){t.blockedOn=e,Ay(t.priority,function(){Iy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ic=r,n.target.dispatchEvent(r),Ic=null}else return e=vo(n),e!==null&&Bh(e),t.blockedOn=n,!1;e.shift()}return!0}function kp(t,e,n){_a(t)&&n.delete(e)}function Ww(){kc=!1,Zn!==null&&_a(Zn)&&(Zn=null),er!==null&&_a(er)&&(er=null),tr!==null&&_a(tr)&&(tr=null),Gs.forEach(kp),Ks.forEach(kp)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,kc||(kc=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,Ww)))}function Qs(t){function e(i){return ms(i,t)}if(0<Zo.length){ms(Zo[0],t);for(var n=1;n<Zo.length;n++){var r=Zo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&ms(Zn,t),er!==null&&ms(er,t),tr!==null&&ms(tr,t),Gs.forEach(e),Ks.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Ry(n),n.blockedOn===null&&Hn.shift()}var Ei=Mn.ReactCurrentBatchConfig,$a=!0;function Hw(t,e,n,r){var i=pe,s=Ei.transition;Ei.transition=null;try{pe=1,jh(t,e,n,r)}finally{pe=i,Ei.transition=s}}function qw(t,e,n,r){var i=pe,s=Ei.transition;Ei.transition=null;try{pe=4,jh(t,e,n,r)}finally{pe=i,Ei.transition=s}}function jh(t,e,n,r){if($a){var i=Pc(t,e,n,r);if(i===null)Bu(t,e,r,za,n),Cp(t,r);else if(zw(i,t,e,n,r))r.stopPropagation();else if(Cp(t,r),e&4&&-1<$w.indexOf(t)){for(;i!==null;){var s=vo(i);if(s!==null&&Ty(s),s=Pc(t,e,n,r),s===null&&Bu(t,e,r,za,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bu(t,e,r,null,n)}}var za=null;function Pc(t,e,n,r){if(za=null,t=bh(r),t=Pr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=py(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return za=t,null}function Cy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vw()){case Fh:return 1;case _y:return 4;case Ba:case Ow:return 16;case vy:return 536870912;default:return 16}default:return 16}}var Yn=null,$h=null,va=null;function ky(){if(va)return va;var t,e=$h,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return va=i.slice(t,1<r?1-r:void 0)}function Ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function Pp(){return!1}function Mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ea:Pp,this.isPropagationStopped=Pp,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),e}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zh=Mt(Wi),_o=xe({},Wi,{view:0,detail:0}),Gw=Mt(_o),xu,Du,gs,Al=xe({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?(xu=t.screenX-gs.screenX,Du=t.screenY-gs.screenY):Du=xu=0,gs=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),Np=Mt(Al),Kw=xe({},Al,{dataTransfer:0}),Qw=Mt(Kw),Yw=xe({},_o,{relatedTarget:0}),Vu=Mt(Yw),Xw=xe({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),Jw=Mt(Xw),Zw=xe({},Wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eT=Mt(Zw),tT=xe({},Wi,{data:0}),xp=Mt(tT),nT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iT[t])?!!e[t]:!1}function Wh(){return sT}var oT=xe({},_o,{key:function(t){if(t.key){var e=nT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wh,charCode:function(t){return t.type==="keypress"?Ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aT=Mt(oT),lT=xe({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Mt(lT),uT=xe({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wh}),cT=Mt(uT),hT=xe({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),dT=Mt(hT),fT=xe({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pT=Mt(fT),mT=[9,13,27,32],Hh=kn&&"CompositionEvent"in window,Ds=null;kn&&"documentMode"in document&&(Ds=document.documentMode);var gT=kn&&"TextEvent"in window&&!Ds,Py=kn&&(!Hh||Ds&&8<Ds&&11>=Ds),Vp=String.fromCharCode(32),Op=!1;function Ny(t,e){switch(t){case"keyup":return mT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function yT(t,e){switch(t){case"compositionend":return xy(e);case"keypress":return e.which!==32?null:(Op=!0,Vp);case"textInput":return t=e.data,t===Vp&&Op?null:t;default:return null}}function _T(t,e){if(ai)return t==="compositionend"||!Hh&&Ny(t,e)?(t=ky(),va=$h=Yn=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Py&&e.locale!=="ko"?null:e.data;default:return null}}var vT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vT[t.type]:e==="textarea"}function Dy(t,e,n,r){uy(r),e=Wa(e,"onChange"),0<e.length&&(n=new zh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vs=null,Ys=null;function ET(t){zy(t,0)}function Rl(t){var e=ci(t);if(ny(e))return t}function wT(t,e){if(t==="change")return e}var Vy=!1;if(kn){var Ou;if(kn){var Lu="oninput"in document;if(!Lu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),Lu=typeof Mp.oninput=="function"}Ou=Lu}else Ou=!1;Vy=Ou&&(!document.documentMode||9<document.documentMode)}function bp(){Vs&&(Vs.detachEvent("onpropertychange",Oy),Ys=Vs=null)}function Oy(t){if(t.propertyName==="value"&&Rl(Ys)){var e=[];Dy(e,Ys,t,bh(t)),fy(ET,e)}}function TT(t,e,n){t==="focusin"?(bp(),Vs=e,Ys=n,Vs.attachEvent("onpropertychange",Oy)):t==="focusout"&&bp()}function IT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(Ys)}function ST(t,e){if(t==="click")return Rl(e)}function AT(t,e){if(t==="input"||t==="change")return Rl(e)}function RT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:RT;function Xs(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hc.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,e){var n=Fp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fp(n)}}function Ly(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ly(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function My(){for(var t=window,e=ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ba(t.document)}return e}function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function CT(t){var e=My(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ly(n.ownerDocument.documentElement,n)){if(r!==null&&qh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Up(n,s);var o=Up(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kT=kn&&"documentMode"in document&&11>=document.documentMode,li=null,Nc=null,Os=null,xc=!1;function Bp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||li==null||li!==ba(r)||(r=li,"selectionStart"in r&&qh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&Xs(Os,r)||(Os=r,r=Wa(Nc,"onSelect"),0<r.length&&(e=new zh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},Mu={},by={};kn&&(by=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function Cl(t){if(Mu[t])return Mu[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in by)return Mu[t]=e[n];return t}var Fy=Cl("animationend"),Uy=Cl("animationiteration"),By=Cl("animationstart"),jy=Cl("transitionend"),$y=new Map,jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){$y.set(t,e),Gr(e,[t])}for(var bu=0;bu<jp.length;bu++){var Fu=jp[bu],PT=Fu.toLowerCase(),NT=Fu[0].toUpperCase()+Fu.slice(1);yr(PT,"on"+NT)}yr(Fy,"onAnimationEnd");yr(Uy,"onAnimationIteration");yr(By,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(jy,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xT=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function $p(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Pw(r,e,void 0,t),t.currentTarget=null}function zy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;$p(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;$p(i,l,h),s=u}}}if(Ua)throw t=Rc,Ua=!1,Rc=null,t}function Te(t,e){var n=e[Mc];n===void 0&&(n=e[Mc]=new Set);var r=t+"__bubble";n.has(r)||(Wy(e,t,2,!1),n.add(r))}function Uu(t,e,n){var r=0;e&&(r|=4),Wy(n,t,r,e)}var na="_reactListening"+Math.random().toString(36).slice(2);function Js(t){if(!t[na]){t[na]=!0,Xg.forEach(function(n){n!=="selectionchange"&&(xT.has(n)||Uu(n,!1,t),Uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[na]||(e[na]=!0,Uu("selectionchange",!1,e))}}function Wy(t,e,n,r){switch(Cy(e)){case 1:var i=Hw;break;case 4:i=qw;break;default:i=jh}n=i.bind(null,e,n,t),i=void 0,!Ac||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}fy(function(){var h=s,f=bh(n),g=[];e:{var y=$y.get(t);if(y!==void 0){var S=zh,C=t;switch(t){case"keypress":if(Ea(n)===0)break e;case"keydown":case"keyup":S=aT;break;case"focusin":C="focus",S=Vu;break;case"focusout":C="blur",S=Vu;break;case"beforeblur":case"afterblur":S=Vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Qw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=cT;break;case Fy:case Uy:case By:S=Jw;break;case jy:S=dT;break;case"scroll":S=Gw;break;case"wheel":S=pT;break;case"copy":case"cut":case"paste":S=eT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Dp}var x=(e&4)!==0,V=!x&&t==="scroll",I=x?y!==null?y+"Capture":null:y;x=[];for(var E=h,A;E!==null;){A=E;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,I!==null&&(D=qs(E,I),D!=null&&x.push(Zs(E,D,A)))),V)break;E=E.return}0<x.length&&(y=new S(y,C,null,n,f),g.push({event:y,listeners:x}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&n!==Ic&&(C=n.relatedTarget||n.fromElement)&&(Pr(C)||C[Pn]))break e;if((S||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=h,C=C?Pr(C):null,C!==null&&(V=Kr(C),C!==V||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=h),S!==C)){if(x=Np,D="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(x=Dp,D="onPointerLeave",I="onPointerEnter",E="pointer"),V=S==null?y:ci(S),A=C==null?y:ci(C),y=new x(D,E+"leave",S,n,f),y.target=V,y.relatedTarget=A,D=null,Pr(f)===h&&(x=new x(I,E+"enter",C,n,f),x.target=A,x.relatedTarget=V,D=x),V=D,S&&C)t:{for(x=S,I=C,E=0,A=x;A;A=ti(A))E++;for(A=0,D=I;D;D=ti(D))A++;for(;0<E-A;)x=ti(x),E--;for(;0<A-E;)I=ti(I),A--;for(;E--;){if(x===I||I!==null&&x===I.alternate)break t;x=ti(x),I=ti(I)}x=null}else x=null;S!==null&&zp(g,y,S,x,!1),C!==null&&V!==null&&zp(g,V,C,x,!0)}}e:{if(y=h?ci(h):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var U=wT;else if(Lp(y))if(Vy)U=AT;else{U=IT;var B=TT}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=ST);if(U&&(U=U(t,h))){Dy(g,U,n,f);break e}B&&B(t,y,h),t==="focusout"&&(B=y._wrapperState)&&B.controlled&&y.type==="number"&&_c(y,"number",y.value)}switch(B=h?ci(h):window,t){case"focusin":(Lp(B)||B.contentEditable==="true")&&(li=B,Nc=h,Os=null);break;case"focusout":Os=Nc=li=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Bp(g,n,f);break;case"selectionchange":if(kT)break;case"keydown":case"keyup":Bp(g,n,f)}var w;if(Hh)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else ai?Ny(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Py&&n.locale!=="ko"&&(ai||m!=="onCompositionStart"?m==="onCompositionEnd"&&ai&&(w=ky()):(Yn=f,$h="value"in Yn?Yn.value:Yn.textContent,ai=!0)),B=Wa(h,m),0<B.length&&(m=new xp(m,t,null,n,f),g.push({event:m,listeners:B}),w?m.data=w:(w=xy(n),w!==null&&(m.data=w)))),(w=gT?yT(t,n):_T(t,n))&&(h=Wa(h,"onBeforeInput"),0<h.length&&(f=new xp("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=w))}zy(g,e)})}function Zs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qs(t,n),s!=null&&r.unshift(Zs(t,s,i)),s=qs(t,e),s!=null&&r.push(Zs(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=qs(n,s),u!=null&&o.unshift(Zs(n,u,l))):i||(u=qs(n,s),u!=null&&o.push(Zs(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var DT=/\r\n?/g,VT=/\u0000|\uFFFD/g;function Wp(t){return(typeof t=="string"?t:""+t).replace(DT,`
`).replace(VT,"")}function ra(t,e,n){if(e=Wp(e),Wp(t)!==e&&n)throw Error(b(425))}function Ha(){}var Dc=null,Vc=null;function Oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,OT=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,LT=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(t){return Hp.resolve(null).then(t).catch(MT)}:Lc;function MT(t){setTimeout(function(){throw t})}function ju(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qs(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hi=Math.random().toString(36).slice(2),sn="__reactFiber$"+Hi,eo="__reactProps$"+Hi,Pn="__reactContainer$"+Hi,Mc="__reactEvents$"+Hi,bT="__reactListeners$"+Hi,FT="__reactHandles$"+Hi;function Pr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qp(t);t!==null;){if(n=t[sn])return n;t=qp(t)}return e}t=n,n=t.parentNode}return null}function vo(t){return t=t[sn]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function kl(t){return t[eo]||null}var bc=[],hi=-1;function _r(t){return{current:t}}function Se(t){0>hi||(t.current=bc[hi],bc[hi]=null,hi--)}function Ee(t,e){hi++,bc[hi]=t.current,t.current=e}var dr={},dt=_r(dr),St=_r(!1),Fr=dr;function ki(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function At(t){return t=t.childContextTypes,t!=null}function qa(){Se(St),Se(dt)}function Gp(t,e,n){if(dt.current!==dr)throw Error(b(168));Ee(dt,e),Ee(St,n)}function Hy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,Tw(t)||"Unknown",i));return xe({},n,r)}function Ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Fr=dt.current,Ee(dt,t),Ee(St,St.current),!0}function Kp(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Hy(t,e,Fr),r.__reactInternalMemoizedMergedChildContext=t,Se(St),Se(dt),Ee(dt,t)):Se(St),Ee(St,n)}var _n=null,Pl=!1,$u=!1;function qy(t){_n===null?_n=[t]:_n.push(t)}function UT(t){Pl=!0,qy(t)}function vr(){if(!$u&&_n!==null){$u=!0;var t=0,e=pe;try{var n=_n;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,Pl=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),yy(Fh,vr),i}finally{pe=e,$u=!1}}return null}var di=[],fi=0,Ka=null,Qa=0,Ft=[],Ut=0,Ur=null,En=1,wn="";function Rr(t,e){di[fi++]=Qa,di[fi++]=Ka,Ka=t,Qa=e}function Gy(t,e,n){Ft[Ut++]=En,Ft[Ut++]=wn,Ft[Ut++]=Ur,Ur=t;var r=En;t=wn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Xt(e)+i|n<<i|r,wn=s+t}else En=1<<s|n<<i|r,wn=t}function Gh(t){t.return!==null&&(Rr(t,1),Gy(t,1,0))}function Kh(t){for(;t===Ka;)Ka=di[--fi],di[fi]=null,Qa=di[--fi],di[fi]=null;for(;t===Ur;)Ur=Ft[--Ut],Ft[Ut]=null,wn=Ft[--Ut],Ft[Ut]=null,En=Ft[--Ut],Ft[Ut]=null}var Vt=null,xt=null,Ae=!1,Yt=null;function Ky(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vt=t,xt=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vt=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:En,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vt=t,xt=null,!0):!1;default:return!1}}function Fc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uc(t){if(Ae){var e=xt;if(e){var n=e;if(!Qp(t,e)){if(Fc(t))throw Error(b(418));e=nr(n.nextSibling);var r=Vt;e&&Qp(t,e)?Ky(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Vt=t)}}else{if(Fc(t))throw Error(b(418));t.flags=t.flags&-4097|2,Ae=!1,Vt=t}}}function Yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vt=t}function ia(t){if(t!==Vt)return!1;if(!Ae)return Yp(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oc(t.type,t.memoizedProps)),e&&(e=xt)){if(Fc(t))throw Qy(),Error(b(418));for(;e;)Ky(t,e),e=nr(e.nextSibling)}if(Yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=Vt?nr(t.stateNode.nextSibling):null;return!0}function Qy(){for(var t=xt;t;)t=nr(t.nextSibling)}function Pi(){xt=Vt=null,Ae=!1}function Qh(t){Yt===null?Yt=[t]:Yt.push(t)}var BT=Mn.ReactCurrentBatchConfig;function ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function sa(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xp(t){var e=t._init;return e(t._payload)}function Yy(t){function e(I,E){if(t){var A=I.deletions;A===null?(I.deletions=[E],I.flags|=16):A.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=or(I,E),I.index=0,I.sibling=null,I}function s(I,E,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<E?(I.flags|=2,E):A):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,A,D){return E===null||E.tag!==6?(E=Qu(A,I.mode,D),E.return=I,E):(E=i(E,A),E.return=I,E)}function u(I,E,A,D){var U=A.type;return U===oi?f(I,E,A.props.children,D,A.key):E!==null&&(E.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===$n&&Xp(U)===E.type)?(D=i(E,A.props),D.ref=ys(I,E,A),D.return=I,D):(D=Ca(A.type,A.key,A.props,null,I.mode,D),D.ref=ys(I,E,A),D.return=I,D)}function h(I,E,A,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=Yu(A,I.mode,D),E.return=I,E):(E=i(E,A.children||[]),E.return=I,E)}function f(I,E,A,D,U){return E===null||E.tag!==7?(E=Lr(A,I.mode,D,U),E.return=I,E):(E=i(E,A),E.return=I,E)}function g(I,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Qu(""+E,I.mode,A),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ko:return A=Ca(E.type,E.key,E.props,null,I.mode,A),A.ref=ys(I,null,E),A.return=I,A;case si:return E=Yu(E,I.mode,A),E.return=I,E;case $n:var D=E._init;return g(I,D(E._payload),A)}if(Is(E)||ds(E))return E=Lr(E,I.mode,A,null),E.return=I,E;sa(I,E)}return null}function y(I,E,A,D){var U=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return U!==null?null:l(I,E,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ko:return A.key===U?u(I,E,A,D):null;case si:return A.key===U?h(I,E,A,D):null;case $n:return U=A._init,y(I,E,U(A._payload),D)}if(Is(A)||ds(A))return U!==null?null:f(I,E,A,D,null);sa(I,A)}return null}function S(I,E,A,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(A)||null,l(E,I,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ko:return I=I.get(D.key===null?A:D.key)||null,u(E,I,D,U);case si:return I=I.get(D.key===null?A:D.key)||null,h(E,I,D,U);case $n:var B=D._init;return S(I,E,A,B(D._payload),U)}if(Is(D)||ds(D))return I=I.get(A)||null,f(E,I,D,U,null);sa(E,D)}return null}function C(I,E,A,D){for(var U=null,B=null,w=E,m=E=0,v=null;w!==null&&m<A.length;m++){w.index>m?(v=w,w=null):v=w.sibling;var T=y(I,w,A[m],D);if(T===null){w===null&&(w=v);break}t&&w&&T.alternate===null&&e(I,w),E=s(T,E,m),B===null?U=T:B.sibling=T,B=T,w=v}if(m===A.length)return n(I,w),Ae&&Rr(I,m),U;if(w===null){for(;m<A.length;m++)w=g(I,A[m],D),w!==null&&(E=s(w,E,m),B===null?U=w:B.sibling=w,B=w);return Ae&&Rr(I,m),U}for(w=r(I,w);m<A.length;m++)v=S(w,I,m,A[m],D),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?m:v.key),E=s(v,E,m),B===null?U=v:B.sibling=v,B=v);return t&&w.forEach(function(R){return e(I,R)}),Ae&&Rr(I,m),U}function x(I,E,A,D){var U=ds(A);if(typeof U!="function")throw Error(b(150));if(A=U.call(A),A==null)throw Error(b(151));for(var B=U=null,w=E,m=E=0,v=null,T=A.next();w!==null&&!T.done;m++,T=A.next()){w.index>m?(v=w,w=null):v=w.sibling;var R=y(I,w,T.value,D);if(R===null){w===null&&(w=v);break}t&&w&&R.alternate===null&&e(I,w),E=s(R,E,m),B===null?U=R:B.sibling=R,B=R,w=v}if(T.done)return n(I,w),Ae&&Rr(I,m),U;if(w===null){for(;!T.done;m++,T=A.next())T=g(I,T.value,D),T!==null&&(E=s(T,E,m),B===null?U=T:B.sibling=T,B=T);return Ae&&Rr(I,m),U}for(w=r(I,w);!T.done;m++,T=A.next())T=S(w,I,m,T.value,D),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?m:T.key),E=s(T,E,m),B===null?U=T:B.sibling=T,B=T);return t&&w.forEach(function(P){return e(I,P)}),Ae&&Rr(I,m),U}function V(I,E,A,D){if(typeof A=="object"&&A!==null&&A.type===oi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ko:e:{for(var U=A.key,B=E;B!==null;){if(B.key===U){if(U=A.type,U===oi){if(B.tag===7){n(I,B.sibling),E=i(B,A.props.children),E.return=I,I=E;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===$n&&Xp(U)===B.type){n(I,B.sibling),E=i(B,A.props),E.ref=ys(I,B,A),E.return=I,I=E;break e}n(I,B);break}else e(I,B);B=B.sibling}A.type===oi?(E=Lr(A.props.children,I.mode,D,A.key),E.return=I,I=E):(D=Ca(A.type,A.key,A.props,null,I.mode,D),D.ref=ys(I,E,A),D.return=I,I=D)}return o(I);case si:e:{for(B=A.key;E!==null;){if(E.key===B)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(I,E.sibling),E=i(E,A.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=Yu(A,I.mode,D),E.return=I,I=E}return o(I);case $n:return B=A._init,V(I,E,B(A._payload),D)}if(Is(A))return C(I,E,A,D);if(ds(A))return x(I,E,A,D);sa(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,A),E.return=I,I=E):(n(I,E),E=Qu(A,I.mode,D),E.return=I,I=E),o(I)):n(I,E)}return V}var Ni=Yy(!0),Xy=Yy(!1),Ya=_r(null),Xa=null,pi=null,Yh=null;function Xh(){Yh=pi=Xa=null}function Jh(t){var e=Ya.current;Se(Ya),t._currentValue=e}function Bc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function wi(t,e){Xa=t,Yh=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Yh!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(Xa===null)throw Error(b(308));pi=t,Xa.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var Nr=null;function Zh(t){Nr===null?Nr=[t]:Nr.push(t)}function Jy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,Zh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uh(t,n)}}function Jp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ja(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,S=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,x=l;switch(y=e,S=n,x.tag){case 1:if(C=x.payload,typeof C=="function"){g=C.call(S,g,y);break e}g=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=x.payload,y=typeof C=="function"?C.call(S,g,y):C,y==null)break e;g=xe({},g,y);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else S={eventTime:S,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=g):f=f.next=S,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=g}}function Zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Eo={},an=_r(Eo),to=_r(Eo),no=_r(Eo);function xr(t){if(t===Eo)throw Error(b(174));return t}function td(t,e){switch(Ee(no,e),Ee(to,t),Ee(an,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ec(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ec(e,t)}Se(an),Ee(an,e)}function xi(){Se(an),Se(to),Se(no)}function e_(t){xr(no.current);var e=xr(an.current),n=Ec(e,t.type);e!==n&&(Ee(to,t),Ee(an,n))}function nd(t){to.current===t&&(Se(an),Se(to))}var Pe=_r(0);function Za(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zu=[];function rd(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var Ta=Mn.ReactCurrentDispatcher,Wu=Mn.ReactCurrentBatchConfig,Br=0,Ne=null,je=null,qe=null,el=!1,Ls=!1,ro=0,jT=0;function ot(){throw Error(b(321))}function id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function sd(t,e,n,r,i,s){if(Br=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ta.current=t===null||t.memoizedState===null?HT:qT,t=n(r,i),Ls){s=0;do{if(Ls=!1,ro=0,25<=s)throw Error(b(301));s+=1,qe=je=null,e.updateQueue=null,Ta.current=GT,t=n(r,i)}while(Ls)}if(Ta.current=tl,e=je!==null&&je.next!==null,Br=0,qe=je=Ne=null,el=!1,e)throw Error(b(300));return t}function od(){var t=ro!==0;return ro=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ne.memoizedState=qe=t:qe=qe.next=t,qe}function zt(){if(je===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=qe===null?Ne.memoizedState:qe.next;if(e!==null)qe=e,je=t;else{if(t===null)throw Error(b(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},qe===null?Ne.memoizedState=qe=t:qe=qe.next=t}return qe}function io(t,e){return typeof e=="function"?e(t):e}function Hu(t){var e=zt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Br&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ne.lanes|=f,jr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,tn(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qu(t){var e=zt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(It=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function t_(){}function n_(t,e){var n=Ne,r=zt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,ad(s_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,so(9,i_.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(b(349));Br&30||r_(n,e,i)}return i}function r_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i_(t,e,n,r){e.value=n,e.getSnapshot=r,o_(e)&&a_(t)}function s_(t,e,n){return n(function(){o_(e)&&a_(t)})}function o_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function a_(t){var e=Nn(t,1);e!==null&&Jt(e,t,1,-1)}function em(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:t},e.queue=t,t=t.dispatch=WT.bind(null,Ne,t),[e.memoizedState,t]}function so(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function l_(){return zt().memoizedState}function Ia(t,e,n,r){var i=rn();Ne.flags|=t,i.memoizedState=so(1|e,n,void 0,r===void 0?null:r)}function Nl(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&id(r,o.deps)){i.memoizedState=so(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=so(1|e,n,s,r)}function tm(t,e){return Ia(8390656,8,t,e)}function ad(t,e){return Nl(2048,8,t,e)}function u_(t,e){return Nl(4,2,t,e)}function c_(t,e){return Nl(4,4,t,e)}function h_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d_(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,h_.bind(null,e,t),n)}function ld(){}function f_(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&id(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function p_(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&id(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function m_(t,e,n){return Br&21?(tn(n,e)||(n=Ey(),Ne.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function $T(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Wu.transition;Wu.transition={};try{t(!1),e()}finally{pe=n,Wu.transition=r}}function g_(){return zt().memoizedState}function zT(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},y_(t))__(e,n);else if(n=Jy(t,e,n,r),n!==null){var i=gt();Jt(n,t,r,i),v_(n,e,r)}}function WT(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(y_(t))__(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,tn(l,o)){var u=e.interleaved;u===null?(i.next=i,Zh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Jy(t,e,i,r),n!==null&&(i=gt(),Jt(n,t,r,i),v_(n,e,r))}}function y_(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function __(t,e){Ls=el=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uh(t,n)}}var tl={readContext:$t,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},HT={readContext:$t,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:tm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ia(4194308,4,h_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ia(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ia(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=zT.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:em,useDebugValue:ld,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=em(!1),e=t[0];return t=$T.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=rn();if(Ae){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Ge===null)throw Error(b(349));Br&30||r_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tm(s_.bind(null,r,s,t),[t]),r.flags|=2048,so(9,i_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=rn(),e=Ge.identifierPrefix;if(Ae){var n=wn,r=En;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qT={readContext:$t,useCallback:f_,useContext:$t,useEffect:ad,useImperativeHandle:d_,useInsertionEffect:u_,useLayoutEffect:c_,useMemo:p_,useReducer:Hu,useRef:l_,useState:function(){return Hu(io)},useDebugValue:ld,useDeferredValue:function(t){var e=zt();return m_(e,je.memoizedState,t)},useTransition:function(){var t=Hu(io)[0],e=zt().memoizedState;return[t,e]},useMutableSource:t_,useSyncExternalStore:n_,useId:g_,unstable_isNewReconciler:!1},GT={readContext:$t,useCallback:f_,useContext:$t,useEffect:ad,useImperativeHandle:d_,useInsertionEffect:u_,useLayoutEffect:c_,useMemo:p_,useReducer:qu,useRef:l_,useState:function(){return qu(io)},useDebugValue:ld,useDeferredValue:function(t){var e=zt();return je===null?e.memoizedState=t:m_(e,je.memoizedState,t)},useTransition:function(){var t=qu(io)[0],e=zt().memoizedState;return[t,e]},useMutableSource:t_,useSyncExternalStore:n_,useId:g_,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xl={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=sr(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Jt(e,t,i,r),wa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=sr(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Jt(e,t,i,r),wa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=sr(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&(Jt(e,t,r,n),wa(e,t,r))}};function nm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,r)||!Xs(i,s):!0}function E_(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=At(e)?Fr:dt.current,r=e.contextTypes,s=(r=r!=null)?ki(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function rm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xl.enqueueReplaceState(e,e.state,null)}function $c(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ed(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=At(e)?Fr:dt.current,i.context=ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xl.enqueueReplaceState(i,i.state,null),Ja(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Di(t,e){try{var n="",r=e;do n+=ww(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KT=typeof WeakMap=="function"?WeakMap:Map;function w_(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rl||(rl=!0,Zc=r),zc(t,e)},n}function T_(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zc(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function im(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new KT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=l1.bind(null,t,e,n),e.then(t,t))}function sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function om(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var QT=Mn.ReactCurrentOwner,It=!1;function mt(t,e,n,r){e.child=t===null?Xy(e,null,n,r):Ni(e,t.child,n,r)}function am(t,e,n,r,i){n=n.render;var s=e.ref;return wi(e,i),r=sd(t,e,n,r,s,i),n=od(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(Ae&&n&&Gh(e),e.flags|=1,mt(t,e,r,i),e.child)}function lm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,I_(t,e,s,r,i)):(t=Ca(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function I_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xs(s,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,xn(t,e,i)}return Wc(t,e,n,r,i)}function S_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(gi,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(gi,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(gi,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(gi,Nt),Nt|=r;return mt(t,e,i,n),e.child}function A_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wc(t,e,n,r,i){var s=At(n)?Fr:dt.current;return s=ki(e,s),wi(e,i),n=sd(t,e,n,r,s,i),r=od(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(Ae&&r&&Gh(e),e.flags|=1,mt(t,e,n,i),e.child)}function um(t,e,n,r,i){if(At(n)){var s=!0;Ga(e)}else s=!1;if(wi(e,i),e.stateNode===null)Sa(t,e),E_(e,n,r),$c(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=$t(h):(h=At(n)?Fr:dt.current,h=ki(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&rm(e,o,r,h),zn=!1;var y=e.memoizedState;o.state=y,Ja(e,r,o,i),u=e.memoizedState,l!==r||y!==u||St.current||zn?(typeof f=="function"&&(jc(e,n,f,r),u=e.memoizedState),(l=zn||nm(e,n,l,r,y,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Zy(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Kt(e.type,l),o.props=h,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=At(n)?Fr:dt.current,u=ki(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&rm(e,o,r,u),zn=!1,y=e.memoizedState,o.state=y,Ja(e,r,o,i);var C=e.memoizedState;l!==g||y!==C||St.current||zn?(typeof S=="function"&&(jc(e,n,S,r),C=e.memoizedState),(h=zn||nm(e,n,h,r,y,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Hc(t,e,n,r,s,i)}function Hc(t,e,n,r,i,s){A_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Kp(e,n,!1),xn(t,e,s);r=e.stateNode,QT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,s),e.child=Ni(e,null,l,s)):mt(t,e,l,s),e.memoizedState=r.state,i&&Kp(e,n,!0),e.child}function R_(t){var e=t.stateNode;e.pendingContext?Gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gp(t,e.context,!1),td(t,e.containerInfo)}function cm(t,e,n,r,i){return Pi(),Qh(i),e.flags|=256,mt(t,e,n,r),e.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function C_(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Pe,i&1),t===null)return Uc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ol(o,r,0,null),t=Lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gc(n),e.memoizedState=qc,t):ud(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return YT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=or(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=or(l,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qc,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ud(t,e){return e=Ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oa(t,e,n,r){return r!==null&&Qh(r),Ni(e,t.child,null,n),t=ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gu(Error(b(422))),oa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ol({mode:"visible",children:r.children},i,0,null),s=Lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=Gc(o),e.memoizedState=qc,s);if(!(e.mode&1))return oa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=Gu(s,r,void 0),oa(t,e,o,r)}if(l=(o&t.childLanes)!==0,It||l){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),Jt(r,t,i,-1))}return md(),r=Gu(Error(b(421))),oa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=u1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xt=nr(i.nextSibling),Vt=e,Ae=!0,Yt=null,t!==null&&(Ft[Ut++]=En,Ft[Ut++]=wn,Ft[Ut++]=Ur,En=t.id,wn=t.overflow,Ur=e),e=ud(e,r.children),e.flags|=4096,e)}function hm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bc(t.return,e,n)}function Ku(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function k_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,n,e);else if(t.tag===19)hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Za(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ku(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Za(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ku(e,!0,n,null,s);break;case"together":Ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XT(t,e,n){switch(e.tag){case 3:R_(e),Pi();break;case 5:e_(e);break;case 1:At(e.type)&&Ga(e);break;case 4:td(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(Ya,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?C_(t,e,n):(Ee(Pe,Pe.current&1),t=xn(t,e,n),t!==null?t.sibling:null);Ee(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return k_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,S_(t,e,n)}return xn(t,e,n)}var P_,Kc,N_,x_;P_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kc=function(){};N_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xr(an.current);var s=null;switch(n){case"input":i=gc(t,i),r=gc(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=vc(t,i),r=vc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ha)}wc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ws.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ws.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Te("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};x_=function(t,e,n,r){n!==r&&(e.flags|=4)};function _s(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JT(t,e,n){var r=e.pendingProps;switch(Kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return At(e.type)&&qa(),at(e),null;case 3:return r=e.stateNode,xi(),Se(St),Se(dt),rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(nh(Yt),Yt=null))),Kc(t,e),at(e),null;case 5:nd(e);var i=xr(no.current);if(n=e.type,t!==null&&e.stateNode!=null)N_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return at(e),null}if(t=xr(an.current),ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[eo]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<As.length;i++)Te(As[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Ep(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":Tp(r,s),Te("invalid",r)}wc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ra(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ra(r.textContent,l,t),i=["children",""+l]):Ws.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Qo(r),wp(r,s,!0);break;case"textarea":Qo(r),Ip(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ha)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[eo]=r,P_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Tc(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<As.length;i++)Te(As[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":Ep(t,r),i=gc(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),Te("invalid",t);break;case"textarea":Tp(t,r),i=vc(t,r),Te("invalid",t);break;default:i=r}wc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?ly(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&oy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hs(t,u):typeof u=="number"&&Hs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ws.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Te("scroll",t):u!=null&&Vh(t,s,u,o))}switch(n){case"input":Qo(t),wp(t,r,!1);break;case"textarea":Qo(t),Ip(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)x_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=xr(no.current),xr(an.current),ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=Vt,t!==null))switch(t.tag){case 3:ra(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return at(e),null;case 13:if(Se(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&xt!==null&&e.mode&1&&!(e.flags&128))Qy(),Pi(),e.flags|=98560,s=!1;else if(s=ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[sn]=e}else Pi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else Yt!==null&&(nh(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?ze===0&&(ze=3):md())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return xi(),Kc(t,e),t===null&&Js(e.stateNode.containerInfo),at(e),null;case 10:return Jh(e.type._context),at(e),null;case 17:return At(e.type)&&qa(),at(e),null;case 19:if(Se(Pe),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_s(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Za(t),o!==null){for(e.flags|=128,_s(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>Vi&&(e.flags|=128,r=!0,_s(s,!1),e.lanes=4194304)}else{if(!r)if(t=Za(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return at(e),null}else 2*be()-s.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,_s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=Pe.current,Ee(Pe,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return pd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function ZT(t,e){switch(Kh(e),e.tag){case 1:return At(e.type)&&qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xi(),Se(St),Se(dt),rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nd(e),null;case 13:if(Se(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Pe),null;case 4:return xi(),null;case 10:return Jh(e.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var aa=!1,ct=!1,e1=typeof WeakSet=="function"?WeakSet:Set,W=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Qc(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var dm=!1;function t1(t,e){if(Dc=$a,t=My(),qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,y=null;t:for(;;){for(var S;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(S=g.firstChild)!==null;)y=g,g=S;for(;;){if(g===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(S=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vc={focusedElem:t,selectionRange:n},$a=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var x=C.memoizedProps,V=C.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?x:Kt(e.type,x),V);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(D){Oe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return C=dm,dm=!1,C}function Ms(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qc(e,n,s)}i=i.next}while(i!==r)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D_(t){var e=t.alternate;e!==null&&(t.alternate=null,D_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[eo],delete e[Mc],delete e[bT],delete e[FT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V_(t){return t.tag===5||t.tag===3||t.tag===4}function fm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ha));else if(r!==4&&(t=t.child,t!==null))for(Xc(t,e,n),t=t.sibling;t!==null;)Xc(t,e,n),t=t.sibling}function Jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jc(t,e,n),t=t.sibling;t!==null;)Jc(t,e,n),t=t.sibling}var Ye=null,Qt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)O_(t,e,n),n=n.sibling}function O_(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:ct||mi(n,e);case 6:var r=Ye,i=Qt;Ye=null,Bn(t,e,n),Ye=r,Qt=i,Ye!==null&&(Qt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Qt?(t=Ye,n=n.stateNode,t.nodeType===8?ju(t.parentNode,n):t.nodeType===1&&ju(t,n),Qs(t)):ju(Ye,n.stateNode));break;case 4:r=Ye,i=Qt,Ye=n.stateNode.containerInfo,Qt=!0,Bn(t,e,n),Ye=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qc(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!ct&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,e,l)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,Bn(t,e,n),ct=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new e1),e.forEach(function(r){var i=c1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,Qt=!1;break e;case 3:Ye=l.stateNode.containerInfo,Qt=!0;break e;case 4:Ye=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(Ye===null)throw Error(b(160));O_(s,o,i),Ye=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Oe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L_(e,t),e=e.sibling}function L_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),nn(t),r&4){try{Ms(3,t,t.return),Dl(3,t)}catch(x){Oe(t,t.return,x)}try{Ms(5,t,t.return)}catch(x){Oe(t,t.return,x)}}break;case 1:Gt(e,t),nn(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(Gt(e,t),nn(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var i=t.stateNode;try{Hs(i,"")}catch(x){Oe(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ry(i,s),Tc(l,o);var h=Tc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?ly(i,g):f==="dangerouslySetInnerHTML"?oy(i,g):f==="children"?Hs(i,g):Vh(i,f,g,h)}switch(l){case"input":yc(i,s);break;case"textarea":iy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?yi(i,!!s.multiple,S,!1):y!==!!s.multiple&&(s.defaultValue!=null?yi(i,!!s.multiple,s.defaultValue,!0):yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[eo]=s}catch(x){Oe(t,t.return,x)}}break;case 6:if(Gt(e,t),nn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Oe(t,t.return,x)}}break;case 3:if(Gt(e,t),nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(x){Oe(t,t.return,x)}break;case 4:Gt(e,t),nn(t);break;case 13:Gt(e,t),nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dd=be())),r&4&&pm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(h=ct)||f,Gt(e,t),ct=h):Gt(e,t),nn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(g=W=f;W!==null;){switch(y=W,S=y.child,y.tag){case 0:case 11:case 14:case 15:Ms(4,y,y.return);break;case 1:mi(y,y.return);var C=y.stateNode;if(typeof C.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(x){Oe(r,n,x)}}break;case 5:mi(y,y.return);break;case 22:if(y.memoizedState!==null){gm(g);continue}}S!==null?(S.return=y,W=S):gm(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ay("display",o))}catch(x){Oe(t,t.return,x)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(x){Oe(t,t.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Gt(e,t),nn(t),r&4&&pm(t);break;case 21:break;default:Gt(e,t),nn(t)}}function nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V_(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hs(i,""),r.flags&=-33);var s=fm(t);Jc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=fm(t);Xc(t,l,o);break;default:throw Error(b(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function n1(t,e,n){W=t,M_(t)}function M_(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||aa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ct;l=aa;var h=ct;if(aa=o,(ct=u)&&!h)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?ym(i):u!==null?(u.return=o,W=u):ym(i);for(;s!==null;)W=s,M_(s),s=s.sibling;W=i,aa=l,ct=h}mm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):mm(t)}}function mm(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||Dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Qs(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ct||e.flags&512&&Yc(e)}catch(y){Oe(e,e.return,y)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function gm(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function ym(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{Yc(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{Yc(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var r1=Math.ceil,nl=Mn.ReactCurrentDispatcher,cd=Mn.ReactCurrentOwner,jt=Mn.ReactCurrentBatchConfig,ae=0,Ge=null,Ue=null,Ze=0,Nt=0,gi=_r(0),ze=0,oo=null,jr=0,Vl=0,hd=0,bs=null,wt=null,dd=0,Vi=1/0,yn=null,rl=!1,Zc=null,ir=null,la=!1,Xn=null,il=0,Fs=0,eh=null,Aa=-1,Ra=0;function gt(){return ae&6?be():Aa!==-1?Aa:Aa=be()}function sr(t){return t.mode&1?ae&2&&Ze!==0?Ze&-Ze:BT.transition!==null?(Ra===0&&(Ra=Ey()),Ra):(t=pe,t!==0||(t=window.event,t=t===void 0?16:Cy(t.type)),t):1}function Jt(t,e,n,r){if(50<Fs)throw Fs=0,eh=null,Error(b(185));yo(t,n,r),(!(ae&2)||t!==Ge)&&(t===Ge&&(!(ae&2)&&(Vl|=n),ze===4&&qn(t,Ze)),Rt(t,r),n===1&&ae===0&&!(e.mode&1)&&(Vi=be()+500,Pl&&vr()))}function Rt(t,e){var n=t.callbackNode;Bw(t,e);var r=ja(t,t===Ge?Ze:0);if(r===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?UT(_m.bind(null,t)):qy(_m.bind(null,t)),LT(function(){!(ae&6)&&vr()}),n=null;else{switch(wy(r)){case 1:n=Fh;break;case 4:n=_y;break;case 16:n=Ba;break;case 536870912:n=vy;break;default:n=Ba}n=W_(n,b_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b_(t,e){if(Aa=-1,Ra=0,ae&6)throw Error(b(327));var n=t.callbackNode;if(Ti()&&t.callbackNode!==n)return null;var r=ja(t,t===Ge?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sl(t,r);else{e=r;var i=ae;ae|=2;var s=U_();(Ge!==t||Ze!==e)&&(yn=null,Vi=be()+500,Or(t,e));do try{o1();break}catch(l){F_(t,l)}while(1);Xh(),nl.current=s,ae=i,Ue!==null?e=0:(Ge=null,Ze=0,e=ze)}if(e!==0){if(e===2&&(i=Cc(t),i!==0&&(r=i,e=th(t,i))),e===1)throw n=oo,Or(t,0),qn(t,r),Rt(t,be()),n;if(e===6)qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!i1(i)&&(e=sl(t,r),e===2&&(s=Cc(t),s!==0&&(r=s,e=th(t,s))),e===1))throw n=oo,Or(t,0),qn(t,r),Rt(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Cr(t,wt,yn);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=dd+500-be(),10<e)){if(ja(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lc(Cr.bind(null,t,wt,yn),e);break}Cr(t,wt,yn);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r1(r/1960))-r,10<r){t.timeoutHandle=Lc(Cr.bind(null,t,wt,yn),r);break}Cr(t,wt,yn);break;case 5:Cr(t,wt,yn);break;default:throw Error(b(329))}}}return Rt(t,be()),t.callbackNode===n?b_.bind(null,t):null}function th(t,e){var n=bs;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=sl(t,e),t!==2&&(e=wt,wt=n,e!==null&&nh(e)),t}function nh(t){wt===null?wt=t:wt.push.apply(wt,t)}function i1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~hd,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function _m(t){if(ae&6)throw Error(b(327));Ti();var e=ja(t,0);if(!(e&1))return Rt(t,be()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var r=Cc(t);r!==0&&(e=r,n=th(t,r))}if(n===1)throw n=oo,Or(t,0),qn(t,e),Rt(t,be()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,wt,yn),Rt(t,be()),null}function fd(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Vi=be()+500,Pl&&vr())}}function $r(t){Xn!==null&&Xn.tag===0&&!(ae&6)&&Ti();var e=ae;ae|=1;var n=jt.transition,r=pe;try{if(jt.transition=null,pe=1,t)return t()}finally{pe=r,jt.transition=n,ae=e,!(ae&6)&&vr()}}function pd(){Nt=gi.current,Se(gi)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,OT(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Kh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qa();break;case 3:xi(),Se(St),Se(dt),rd();break;case 5:nd(r);break;case 4:xi();break;case 13:Se(Pe);break;case 19:Se(Pe);break;case 10:Jh(r.type._context);break;case 22:case 23:pd()}n=n.return}if(Ge=t,Ue=t=or(t.current,null),Ze=Nt=e,ze=0,oo=null,hd=Vl=jr=0,wt=bs=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function F_(t,e){do{var n=Ue;try{if(Xh(),Ta.current=tl,el){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}el=!1}if(Br=0,qe=je=Ne=null,Ls=!1,ro=0,cd.current=null,n===null||n.return===null){ze=1,oo=e,Ue=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=sm(o);if(S!==null){S.flags&=-257,om(S,o,l,s,e),S.mode&1&&im(s,h,e),e=S,u=h;var C=e.updateQueue;if(C===null){var x=new Set;x.add(u),e.updateQueue=x}else C.add(u);break e}else{if(!(e&1)){im(s,h,e),md();break e}u=Error(b(426))}}else if(Ae&&l.mode&1){var V=sm(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),om(V,o,l,s,e),Qh(Di(u,l));break e}}s=u=Di(u,l),ze!==4&&(ze=2),bs===null?bs=[s]:bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=w_(s,u,e);Jp(s,I);break e;case 1:l=u;var E=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ir===null||!ir.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=T_(s,l,e);Jp(s,D);break e}}s=s.return}while(s!==null)}j_(n)}catch(U){e=U,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(1)}function U_(){var t=nl.current;return nl.current=tl,t===null?tl:t}function md(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(jr&268435455)&&!(Vl&268435455)||qn(Ge,Ze)}function sl(t,e){var n=ae;ae|=2;var r=U_();(Ge!==t||Ze!==e)&&(yn=null,Or(t,e));do try{s1();break}catch(i){F_(t,i)}while(1);if(Xh(),ae=n,nl.current=r,Ue!==null)throw Error(b(261));return Ge=null,Ze=0,ze}function s1(){for(;Ue!==null;)B_(Ue)}function o1(){for(;Ue!==null&&!xw();)B_(Ue)}function B_(t){var e=z_(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?j_(t):Ue=e,cd.current=null}function j_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZT(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Ue=null;return}}else if(n=JT(n,e,Nt),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);ze===0&&(ze=5)}function Cr(t,e,n){var r=pe,i=jt.transition;try{jt.transition=null,pe=1,a1(t,e,n,r)}finally{jt.transition=i,pe=r}return null}function a1(t,e,n,r){do Ti();while(Xn!==null);if(ae&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jw(t,s),t===Ge&&(Ue=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||la||(la=!0,W_(Ba,function(){return Ti(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=pe;pe=1;var l=ae;ae|=4,cd.current=null,t1(t,n),L_(n,t),CT(Vc),$a=!!Dc,Vc=Dc=null,t.current=n,n1(n),Dw(),ae=l,pe=o,jt.transition=s}else t.current=n;if(la&&(la=!1,Xn=t,il=i),s=t.pendingLanes,s===0&&(ir=null),Lw(n.stateNode),Rt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rl)throw rl=!1,t=Zc,Zc=null,t;return il&1&&t.tag!==0&&Ti(),s=t.pendingLanes,s&1?t===eh?Fs++:(Fs=0,eh=t):Fs=0,vr(),null}function Ti(){if(Xn!==null){var t=wy(il),e=jt.transition,n=pe;try{if(jt.transition=null,pe=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,il=0,ae&6)throw Error(b(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Ms(8,f,s)}var g=f.child;if(g!==null)g.return=f,W=g;else for(;W!==null;){f=W;var y=f.sibling,S=f.return;if(D_(f),f===h){W=null;break}if(y!==null){y.return=S,W=y;break}W=S}}}var C=s.alternate;if(C!==null){var x=C.child;if(x!==null){C.child=null;do{var V=x.sibling;x.sibling=null,x=V}while(x!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ms(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,W=I;break e}W=s.return}}var E=t.current;for(W=E;W!==null;){o=W;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,W=A;else e:for(o=E;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Dl(9,l)}}catch(U){Oe(l,l.return,U)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(ae=i,vr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Sl,t)}catch{}r=!0}return r}finally{pe=n,jt.transition=e}}return!1}function vm(t,e,n){e=Di(n,e),e=w_(t,e,1),t=rr(t,e,1),e=gt(),t!==null&&(yo(t,1,e),Rt(t,e))}function Oe(t,e,n){if(t.tag===3)vm(t,t,n);else for(;e!==null;){if(e.tag===3){vm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Di(n,t),t=T_(e,t,1),e=rr(e,t,1),t=gt(),e!==null&&(yo(e,1,t),Rt(e,t));break}}e=e.return}}function l1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Ze&n)===n&&(ze===4||ze===3&&(Ze&130023424)===Ze&&500>be()-dd?Or(t,0):hd|=n),Rt(t,e)}function $_(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=gt();t=Nn(t,e),t!==null&&(yo(t,e,n),Rt(t,n))}function u1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$_(t,n)}function c1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),$_(t,n)}var z_;z_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,XT(t,e,n);It=!!(t.flags&131072)}else It=!1,Ae&&e.flags&1048576&&Gy(e,Qa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sa(t,e),t=e.pendingProps;var i=ki(e,dt.current);wi(e,n),i=sd(null,e,r,t,i,n);var s=od();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,At(r)?(s=!0,Ga(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ed(e),i.updater=xl,e.stateNode=i,i._reactInternals=e,$c(e,r,t,n),e=Hc(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Gh(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=d1(r),t=Kt(r,t),i){case 0:e=Wc(null,e,r,t,n);break e;case 1:e=um(null,e,r,t,n);break e;case 11:e=am(null,e,r,t,n);break e;case 14:e=lm(null,e,r,Kt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Wc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),um(t,e,r,i,n);case 3:e:{if(R_(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Zy(t,e),Ja(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Di(Error(b(423)),e),e=cm(t,e,r,n,i);break e}else if(r!==i){i=Di(Error(b(424)),e),e=cm(t,e,r,n,i);break e}else for(xt=nr(e.stateNode.containerInfo.firstChild),Vt=e,Ae=!0,Yt=null,n=Xy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pi(),r===i){e=xn(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return e_(e),t===null&&Uc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Oc(r,i)?o=null:s!==null&&Oc(r,s)&&(e.flags|=32),A_(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&Uc(e),null;case 13:return C_(t,e,n);case 4:return td(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),am(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(Ya,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!St.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Rn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Bc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Bc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,wi(e,n),i=$t(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),lm(t,e,r,i,n);case 15:return I_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Sa(t,e),e.tag=1,At(r)?(t=!0,Ga(e)):t=!1,wi(e,n),E_(e,r,i),$c(e,r,i,n),Hc(null,e,r,!0,t,n);case 19:return k_(t,e,n);case 22:return S_(t,e,n)}throw Error(b(156,e.tag))};function W_(t,e){return yy(t,e)}function h1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new h1(t,e,n,r)}function gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function d1(t){if(typeof t=="function")return gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lh)return 11;if(t===Mh)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ca(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return Lr(n.children,i,s,e);case Oh:o=8,i|=8;break;case dc:return t=Bt(12,n,e,i|2),t.elementType=dc,t.lanes=s,t;case fc:return t=Bt(13,n,e,i),t.elementType=fc,t.lanes=s,t;case pc:return t=Bt(19,n,e,i),t.elementType=pc,t.lanes=s,t;case ey:return Ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jg:o=10;break e;case Zg:o=9;break e;case Lh:o=11;break e;case Mh:o=14;break e;case $n:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Lr(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function Ol(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=ey,t.lanes=n,t.stateNode={isHidden:!1},t}function Qu(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function Yu(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function f1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yd(t,e,n,r,i,s,o,l,u){return t=new f1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(s),t}function p1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function H_(t){if(!t)return dr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(At(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(At(n))return Hy(t,n,e)}return e}function q_(t,e,n,r,i,s,o,l,u){return t=yd(n,r,!0,t,i,s,o,l,u),t.context=H_(null),n=t.current,r=gt(),i=sr(n),s=Rn(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,yo(t,i,r),Rt(t,r),t}function Ll(t,e,n,r){var i=e.current,s=gt(),o=sr(i);return n=H_(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&(Jt(t,i,o,s),wa(t,i,o)),o}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _d(t,e){Em(t,e),(t=t.alternate)&&Em(t,e)}function m1(){return null}var G_=typeof reportError=="function"?reportError:function(t){console.error(t)};function vd(t){this._internalRoot=t}Ml.prototype.render=vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Ll(t,e,null,null)};Ml.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){Ll(null,t,null,null)}),e[Pn]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&Ry(t)}};function Ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wm(){}function g1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ol(o);s.call(h)}}var o=q_(e,r,t,0,null,!1,!1,"",wm);return t._reactRootContainer=o,t[Pn]=o.current,Js(t.nodeType===8?t.parentNode:t),$r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=ol(u);l.call(h)}}var u=yd(t,0,!1,null,null,!1,!1,"",wm);return t._reactRootContainer=u,t[Pn]=u.current,Js(t.nodeType===8?t.parentNode:t),$r(function(){Ll(e,u,n,r)}),u}function Fl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ol(o);l.call(u)}}Ll(e,o,t,i)}else o=g1(n,e,t,i,r);return ol(o)}Ty=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ss(e.pendingLanes);n!==0&&(Uh(e,n|1),Rt(e,be()),!(ae&6)&&(Vi=be()+500,vr()))}break;case 13:$r(function(){var r=Nn(t,1);if(r!==null){var i=gt();Jt(r,t,1,i)}}),_d(t,1)}};Bh=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=gt();Jt(e,t,134217728,n)}_d(t,134217728)}};Iy=function(t){if(t.tag===13){var e=sr(t),n=Nn(t,e);if(n!==null){var r=gt();Jt(n,t,e,r)}_d(t,e)}};Sy=function(){return pe};Ay=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Sc=function(t,e,n){switch(e){case"input":if(yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=kl(r);if(!i)throw Error(b(90));ny(r),yc(r,i)}}}break;case"textarea":iy(t,n);break;case"select":e=n.value,e!=null&&yi(t,!!n.multiple,e,!1)}};hy=fd;dy=$r;var y1={usingClientEntryPoint:!1,Events:[vo,ci,kl,uy,cy,fd]},vs={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_1={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=my(t),t===null?null:t.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||m1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{Sl=ua.inject(_1),on=ua}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(e))throw Error(b(200));return p1(t,e,null,n)};Lt.createRoot=function(t,e){if(!Ed(t))throw Error(b(299));var n=!1,r="",i=G_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yd(t,1,!1,null,null,n,!1,r,i),t[Pn]=e.current,Js(t.nodeType===8?t.parentNode:t),new vd(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=my(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return $r(t)};Lt.hydrate=function(t,e,n){if(!bl(e))throw Error(b(200));return Fl(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Ed(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=G_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q_(e,null,t,1,n??null,i,!1,s,o),t[Pn]=e.current,Js(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ml(e)};Lt.render=function(t,e,n){if(!bl(e))throw Error(b(200));return Fl(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!bl(t))throw Error(b(40));return t._reactRootContainer?($r(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1};Lt.unstable_batchedUpdates=fd;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bl(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Fl(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function K_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K_)}catch(t){console.error(t)}}K_(),Kg.exports=Lt;var v1=Kg.exports,Tm=v1;cc.createRoot=Tm.createRoot,cc.hydrateRoot=Tm.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},E1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(y=64)),r.push(n[f],n[g],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Q_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):E1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new w1;const y=s<<2|l>>4;if(r.push(y),h!==64){const S=l<<4&240|h>>2;if(r.push(S),g!==64){const C=h<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let w1=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const T1=function(t){const e=Q_(t);return Y_.encodeByteArray(e,!0)},X_=function(t){return T1(t).replace(/\./g,"")},I1=function(t){try{return Y_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=()=>S1().__FIREBASE_DEFAULTS__,R1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},C1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&I1(t[1]);return e&&JSON.parse(e)},k1=()=>{try{return A1()||R1()||C1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},J_=()=>{var t;return(t=k1())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function N1(){try{return typeof indexedDB=="object"}catch{return!1}}function x1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="FirebaseError";let wd=class Z_ extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=D1,Object.setPrototypeOf(this,Z_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ev.prototype.create)}},ev=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?V1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new wd(i,l,r)}};function V1(t,e){return t.replace(O1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const O1=/\{\$([^}]+)}/g;function rh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Im(s)&&Im(o)){if(!rh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Im(t){return t!==null&&typeof t=="object"}let al=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new P1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(b1(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M1(t){return t===kr?void 0:t}function b1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new L1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const U1={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},B1=Ie.INFO,j1={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},$1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=j1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let z1=class{constructor(e){this.name=e,this._logLevel=B1,this._logHandler=$1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}};const W1=(t,e)=>e.some(n=>t instanceof n);let Sm,Am;function H1(){return Sm||(Sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function q1(){return Am||(Am=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tv=new WeakMap,ih=new WeakMap,nv=new WeakMap,Xu=new WeakMap,Td=new WeakMap;function G1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tv.set(n,t)}).catch(()=>{}),Td.set(e,t),e}function K1(t){if(ih.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ih.set(t,e)}let sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Q1(t){sh=t(sh)}function Y1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ju(this),e,...n);return nv.set(r,e.sort?e.sort():[e]),ar(r)}:q1().includes(t)?function(...e){return t.apply(Ju(this),e),ar(tv.get(this))}:function(...e){return ar(t.apply(Ju(this),e))}}function X1(t){return typeof t=="function"?Y1(t):(t instanceof IDBTransaction&&K1(t),W1(t,H1())?new Proxy(t,sh):t)}function ar(t){if(t instanceof IDBRequest)return G1(t);if(Xu.has(t))return Xu.get(t);const e=X1(t);return e!==t&&(Xu.set(t,e),Td.set(e,t)),e}const Ju=t=>Td.get(t);function J1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ar(o.result),u.oldVersion,u.newVersion,ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Z1=["get","getKey","getAll","getAllKeys","count"],eI=["put","add","delete","clear"],Zu=new Map;function Rm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zu.get(e))return Zu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Z1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Zu.set(e,s),s}Q1(t=>({...t,get:(e,n,r)=>Rm(e,n)||t.get(e,n,r),has:(e,n)=>!!Rm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oh="@firebase/app",Cm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new z1("@firebase/app"),rI="@firebase/app-compat",iI="@firebase/analytics-compat",sI="@firebase/analytics",oI="@firebase/app-check-compat",aI="@firebase/app-check",lI="@firebase/auth",uI="@firebase/auth-compat",cI="@firebase/database",hI="@firebase/data-connect",dI="@firebase/database-compat",fI="@firebase/functions",pI="@firebase/functions-compat",mI="@firebase/installations",gI="@firebase/installations-compat",yI="@firebase/messaging",_I="@firebase/messaging-compat",vI="@firebase/performance",EI="@firebase/performance-compat",wI="@firebase/remote-config",TI="@firebase/remote-config-compat",II="@firebase/storage",SI="@firebase/storage-compat",AI="@firebase/firestore",RI="@firebase/vertexai-preview",CI="@firebase/firestore-compat",kI="firebase",PI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="[DEFAULT]",NI={[oh]:"fire-core",[rI]:"fire-core-compat",[sI]:"fire-analytics",[iI]:"fire-analytics-compat",[aI]:"fire-app-check",[oI]:"fire-app-check-compat",[lI]:"fire-auth",[uI]:"fire-auth-compat",[cI]:"fire-rtdb",[hI]:"fire-data-connect",[dI]:"fire-rtdb-compat",[fI]:"fire-fn",[pI]:"fire-fn-compat",[mI]:"fire-iid",[gI]:"fire-iid-compat",[yI]:"fire-fcm",[_I]:"fire-fcm-compat",[vI]:"fire-perf",[EI]:"fire-perf-compat",[wI]:"fire-rc",[TI]:"fire-rc-compat",[II]:"fire-gcs",[SI]:"fire-gcs-compat",[AI]:"fire-fst",[CI]:"fire-fst-compat",[RI]:"fire-vertex","fire-js":"fire-js",[kI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new Map,xI=new Map,lh=new Map;function km(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Oi(t){const e=t.name;if(lh.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;lh.set(e,t);for(const n of ll.values())km(n,t);for(const n of xI.values())km(n,t);return!0}function Id(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new ev("app","Firebase",DI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new al("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=PI;function rv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ah,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=J_()),!n)throw lr.create("no-options");const s=ll.get(i);if(s){if(rh(n,s.options)&&rh(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new F1(i);for(const u of lh.values())o.addComponent(u);const l=new VI(n,r,o);return ll.set(i,l),l}function iv(t=ah){const e=ll.get(t);if(!e&&t===ah&&J_())return rv();if(!e)throw lr.create("no-app",{appName:t});return e}function ur(t,e,n){var r;let i=(r=NI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}Oi(new al(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="firebase-heartbeat-database",LI=1,ao="firebase-heartbeat-store";let ec=null;function sv(){return ec||(ec=J1(OI,LI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),ec}async function MI(t){try{const n=(await sv()).transaction(ao),r=await n.objectStore(ao).get(ov(t));return await n.done,r}catch(e){if(e instanceof wd)Dn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function Pm(t,e){try{const r=(await sv()).transaction(ao,"readwrite");await r.objectStore(ao).put(e,ov(t)),await r.done}catch(n){if(n instanceof wd)Dn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function ov(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=1024,FI=30*24*60*60*1e3;class UI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=FI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nm(),{heartbeatsToSend:r,unsentEntries:i}=BI(this._heartbeatsCache.heartbeats),s=X_(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Dn.warn(n),""}}}function Nm(){return new Date().toISOString().substring(0,10)}function BI(t,e=bI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N1()?x1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xm(t){return X_(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t){Oi(new al("platform-logger",e=>new tI(e),"PRIVATE")),Oi(new al("heartbeat",e=>new UI(e),"PRIVATE")),ur(oh,Cm,t),ur(oh,Cm,"esm2017"),ur("fire-js","")}$I("");var zI="firebase",WI="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ur(zI,WI,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},HI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},lv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(y=64)),r.push(n[f],n[g],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(av(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new qI;const y=s<<2|l>>4;if(r.push(y),h!==64){const S=l<<4&240|h>>2;if(r.push(S),g!==64){const C=h<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let qI=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const GI=function(t){const e=av(t);return lv.encodeByteArray(e,!0)},Dm=function(t){return GI(t).replace(/\./g,"")},KI=function(t){try{return lv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=()=>QI().__FIREBASE_DEFAULTS__,XI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&KI(t[1]);return e&&JSON.parse(e)},uv=()=>{try{return YI()||XI()||JI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ZI=t=>{var e,n;return(n=(e=uv())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eS=t=>{const e=ZI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Dm(JSON.stringify(n)),Dm(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rS(){var t;const e=(t=uv())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iS(){return!rS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="FirebaseError";let cv=class hv extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sS,Object.setPrototypeOf(this,hv.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oS.prototype.create)}},oS=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?aS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cv(i,l,r)}};function aS(t,e){return t.replace(lS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t){return t&&t._delegate?t._delegate:t}let uS=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const cS={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},hS=oe.INFO,dS={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},fS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let pS=class{constructor(e){this.name=e,this._logLevel=hS,this._logHandler=fS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}};var Vm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,dv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,R,P){for(var _=Array(arguments.length-2),re=2;re<arguments.length;re++)_[re-2]=arguments[re];return m.prototype[R].apply(T,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var R=0;16>R;++R)T[R]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(R=0;16>R;++R)T[R]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],R=w.g[2];var P=w.g[3],_=m+(P^v&(R^P))+T[0]+3614090360&4294967295;m=v+(_<<7&4294967295|_>>>25),_=P+(R^m&(v^R))+T[1]+3905402710&4294967295,P=m+(_<<12&4294967295|_>>>20),_=R+(v^P&(m^v))+T[2]+606105819&4294967295,R=P+(_<<17&4294967295|_>>>15),_=v+(m^R&(P^m))+T[3]+3250441966&4294967295,v=R+(_<<22&4294967295|_>>>10),_=m+(P^v&(R^P))+T[4]+4118548399&4294967295,m=v+(_<<7&4294967295|_>>>25),_=P+(R^m&(v^R))+T[5]+1200080426&4294967295,P=m+(_<<12&4294967295|_>>>20),_=R+(v^P&(m^v))+T[6]+2821735955&4294967295,R=P+(_<<17&4294967295|_>>>15),_=v+(m^R&(P^m))+T[7]+4249261313&4294967295,v=R+(_<<22&4294967295|_>>>10),_=m+(P^v&(R^P))+T[8]+1770035416&4294967295,m=v+(_<<7&4294967295|_>>>25),_=P+(R^m&(v^R))+T[9]+2336552879&4294967295,P=m+(_<<12&4294967295|_>>>20),_=R+(v^P&(m^v))+T[10]+4294925233&4294967295,R=P+(_<<17&4294967295|_>>>15),_=v+(m^R&(P^m))+T[11]+2304563134&4294967295,v=R+(_<<22&4294967295|_>>>10),_=m+(P^v&(R^P))+T[12]+1804603682&4294967295,m=v+(_<<7&4294967295|_>>>25),_=P+(R^m&(v^R))+T[13]+4254626195&4294967295,P=m+(_<<12&4294967295|_>>>20),_=R+(v^P&(m^v))+T[14]+2792965006&4294967295,R=P+(_<<17&4294967295|_>>>15),_=v+(m^R&(P^m))+T[15]+1236535329&4294967295,v=R+(_<<22&4294967295|_>>>10),_=m+(R^P&(v^R))+T[1]+4129170786&4294967295,m=v+(_<<5&4294967295|_>>>27),_=P+(v^R&(m^v))+T[6]+3225465664&4294967295,P=m+(_<<9&4294967295|_>>>23),_=R+(m^v&(P^m))+T[11]+643717713&4294967295,R=P+(_<<14&4294967295|_>>>18),_=v+(P^m&(R^P))+T[0]+3921069994&4294967295,v=R+(_<<20&4294967295|_>>>12),_=m+(R^P&(v^R))+T[5]+3593408605&4294967295,m=v+(_<<5&4294967295|_>>>27),_=P+(v^R&(m^v))+T[10]+38016083&4294967295,P=m+(_<<9&4294967295|_>>>23),_=R+(m^v&(P^m))+T[15]+3634488961&4294967295,R=P+(_<<14&4294967295|_>>>18),_=v+(P^m&(R^P))+T[4]+3889429448&4294967295,v=R+(_<<20&4294967295|_>>>12),_=m+(R^P&(v^R))+T[9]+568446438&4294967295,m=v+(_<<5&4294967295|_>>>27),_=P+(v^R&(m^v))+T[14]+3275163606&4294967295,P=m+(_<<9&4294967295|_>>>23),_=R+(m^v&(P^m))+T[3]+4107603335&4294967295,R=P+(_<<14&4294967295|_>>>18),_=v+(P^m&(R^P))+T[8]+1163531501&4294967295,v=R+(_<<20&4294967295|_>>>12),_=m+(R^P&(v^R))+T[13]+2850285829&4294967295,m=v+(_<<5&4294967295|_>>>27),_=P+(v^R&(m^v))+T[2]+4243563512&4294967295,P=m+(_<<9&4294967295|_>>>23),_=R+(m^v&(P^m))+T[7]+1735328473&4294967295,R=P+(_<<14&4294967295|_>>>18),_=v+(P^m&(R^P))+T[12]+2368359562&4294967295,v=R+(_<<20&4294967295|_>>>12),_=m+(v^R^P)+T[5]+4294588738&4294967295,m=v+(_<<4&4294967295|_>>>28),_=P+(m^v^R)+T[8]+2272392833&4294967295,P=m+(_<<11&4294967295|_>>>21),_=R+(P^m^v)+T[11]+1839030562&4294967295,R=P+(_<<16&4294967295|_>>>16),_=v+(R^P^m)+T[14]+4259657740&4294967295,v=R+(_<<23&4294967295|_>>>9),_=m+(v^R^P)+T[1]+2763975236&4294967295,m=v+(_<<4&4294967295|_>>>28),_=P+(m^v^R)+T[4]+1272893353&4294967295,P=m+(_<<11&4294967295|_>>>21),_=R+(P^m^v)+T[7]+4139469664&4294967295,R=P+(_<<16&4294967295|_>>>16),_=v+(R^P^m)+T[10]+3200236656&4294967295,v=R+(_<<23&4294967295|_>>>9),_=m+(v^R^P)+T[13]+681279174&4294967295,m=v+(_<<4&4294967295|_>>>28),_=P+(m^v^R)+T[0]+3936430074&4294967295,P=m+(_<<11&4294967295|_>>>21),_=R+(P^m^v)+T[3]+3572445317&4294967295,R=P+(_<<16&4294967295|_>>>16),_=v+(R^P^m)+T[6]+76029189&4294967295,v=R+(_<<23&4294967295|_>>>9),_=m+(v^R^P)+T[9]+3654602809&4294967295,m=v+(_<<4&4294967295|_>>>28),_=P+(m^v^R)+T[12]+3873151461&4294967295,P=m+(_<<11&4294967295|_>>>21),_=R+(P^m^v)+T[15]+530742520&4294967295,R=P+(_<<16&4294967295|_>>>16),_=v+(R^P^m)+T[2]+3299628645&4294967295,v=R+(_<<23&4294967295|_>>>9),_=m+(R^(v|~P))+T[0]+4096336452&4294967295,m=v+(_<<6&4294967295|_>>>26),_=P+(v^(m|~R))+T[7]+1126891415&4294967295,P=m+(_<<10&4294967295|_>>>22),_=R+(m^(P|~v))+T[14]+2878612391&4294967295,R=P+(_<<15&4294967295|_>>>17),_=v+(P^(R|~m))+T[5]+4237533241&4294967295,v=R+(_<<21&4294967295|_>>>11),_=m+(R^(v|~P))+T[12]+1700485571&4294967295,m=v+(_<<6&4294967295|_>>>26),_=P+(v^(m|~R))+T[3]+2399980690&4294967295,P=m+(_<<10&4294967295|_>>>22),_=R+(m^(P|~v))+T[10]+4293915773&4294967295,R=P+(_<<15&4294967295|_>>>17),_=v+(P^(R|~m))+T[1]+2240044497&4294967295,v=R+(_<<21&4294967295|_>>>11),_=m+(R^(v|~P))+T[8]+1873313359&4294967295,m=v+(_<<6&4294967295|_>>>26),_=P+(v^(m|~R))+T[15]+4264355552&4294967295,P=m+(_<<10&4294967295|_>>>22),_=R+(m^(P|~v))+T[6]+2734768916&4294967295,R=P+(_<<15&4294967295|_>>>17),_=v+(P^(R|~m))+T[13]+1309151649&4294967295,v=R+(_<<21&4294967295|_>>>11),_=m+(R^(v|~P))+T[4]+4149444226&4294967295,m=v+(_<<6&4294967295|_>>>26),_=P+(v^(m|~R))+T[11]+3174756917&4294967295,P=m+(_<<10&4294967295|_>>>22),_=R+(m^(P|~v))+T[2]+718787259&4294967295,R=P+(_<<15&4294967295|_>>>17),_=v+(P^(R|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(R+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,T=this.B,R=this.h,P=0;P<m;){if(R==0)for(;P<=v;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<m;)if(T[R++]=w.charCodeAt(P++),R==this.blockSize){i(this,T),R=0;break}}else for(;P<m;)if(T[R++]=w[P++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)w[v++]=this.g[m]>>>T&255;return w};function s(w,m){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function o(w,m){this.h=m;for(var v=[],T=!0,R=w.length-1;0<=R;R--){var P=w[R]|0;T&&P==m||(v[R]=P,T=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(m){return new o([m|0],0>m?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return V(h(-w));for(var m=[],v=1,T=0;w>=v;T++)m[T]=w/v|0,v*=4294967296;return new o(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return V(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),T=g,R=0;R<w.length;R+=8){var P=Math.min(8,w.length-R),_=parseInt(w.substring(R,R+P),m);8>P?(P=h(Math.pow(m,P)),T=T.j(P).add(h(_))):(T=T.j(v),T=T.add(h(_)))}return T}var g=u(0),y=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-V(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(x(this))return"-"+V(this).toString(w);for(var m=h(Math.pow(w,6)),v=this,T="";;){var R=D(v,m).g;v=I(v,R.j(m));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=R,C(v))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function x(w){return w.h==-1}t.l=function(w){return w=I(this,w),x(w)?-1:C(w)?0:1};function V(w){for(var m=w.g.length,v=[],T=0;T<m;T++)v[T]=~w.g[T];return new o(v,~w.h).add(y)}t.abs=function(){return x(this)?V(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0,R=0;R<=m;R++){var P=T+(this.i(R)&65535)+(w.i(R)&65535),_=(P>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);T=_>>>16,P&=65535,_&=65535,v[R]=_<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(w,m){return w.add(V(m))}t.j=function(w){if(C(this)||C(w))return g;if(x(this))return x(w)?V(this).j(V(w)):V(V(this).j(w));if(x(w))return V(this.j(V(w)));if(0>this.l(S)&&0>w.l(S))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<w.g.length;R++){var P=this.i(T)>>>16,_=this.i(T)&65535,re=w.i(R)>>>16,ve=w.i(R)&65535;v[2*T+2*R]+=_*ve,E(v,2*T+2*R),v[2*T+2*R+1]+=P*ve,E(v,2*T+2*R+1),v[2*T+2*R+1]+=_*re,E(v,2*T+2*R+1),v[2*T+2*R+2]+=P*re,E(v,2*T+2*R+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new o(v,0)};function E(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function A(w,m){this.g=w,this.h=m}function D(w,m){if(C(m))throw Error("division by zero");if(C(w))return new A(g,g);if(x(w))return m=D(V(w),m),new A(V(m.g),V(m.h));if(x(m))return m=D(w,V(m)),new A(V(m.g),m.h);if(30<w.g.length){if(x(w)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,T=m;0>=T.l(w);)v=U(v),T=U(T);var R=B(v,1),P=B(T,1);for(T=B(T,2),v=B(v,2);!C(T);){var _=P.add(T);0>=_.l(w)&&(R=R.add(v),P=_),T=B(T,1),v=B(v,1)}return m=I(w,R.j(m)),new A(R,m)}for(R=g;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(v),_=P.j(m);x(_)||0<_.l(w);)v-=T,P=h(v),_=P.j(m);C(P)&&(P=y),R=R.add(P),w=I(w,_)}return new A(R,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&w.i(T);return new o(v,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|w.i(T);return new o(v,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^w.i(T);return new o(v,this.h^w.h)};function U(w){for(var m=w.g.length+1,v=[],T=0;T<m;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(v,w.h)}function B(w,m){var v=m>>5;m%=32;for(var T=w.g.length-v,R=[],P=0;P<T;P++)R[P]=0<m?w.i(P+v)>>>m|w.i(P+v+1)<<32-m:w.i(P+v);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Mr=o}).apply(typeof Vm<"u"?Vm:typeof self<"u"?self:typeof window<"u"?window:{});var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fv,Rs,pv,ka,uh,mv,gv,yv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ca=="object"&&ca];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var k=a[p];if(!(k in d))break e;d=d[k]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,k={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,p),a.apply(c,k)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,k,N){for(var j=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)j[ye-2]=arguments[ye];return c.prototype[k].apply(p,j)}}function x(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function V(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const k=a.length||0,N=p.length||0;a.length=k+N;for(let j=0;j<N;j++)a[k+j]=p[j]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var U=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function B(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function m(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,p;for(let k=1;k<arguments.length;k++){p=arguments[k];for(d in p)a[d]=p[d];for(let N=0;N<v.length;N++)d=v[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function _(){var a=O;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class re{constructor(){this.h=this.g=null}add(c,d){const p=ve.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ve=new I(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,$=!1,O=new re,Y=()=>{const a=l.Promise.resolve(void 0);Ke=()=>{a.then(de)}};var de=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(d){P(d)}var c=ve;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var Wt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Ht(a,c){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{D(c.nodeName);var k=!0;break e}catch{}k=!1}k||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ge[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ht.aa.h.call(this)}}C(Ht,ke);var ge={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var bt="closure_listenable_"+(1e6*Math.random()|0),z=0;function X(a,c,d,p,k){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=k,this.key=++z,this.da=this.fa=!1}function ue(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ie(a){this.src=a,this.g={},this.h=0}ie.prototype.add=function(a,c,d,p,k){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var j=Le(a,c,p,k);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new X(c,this.src,N,!!p,k),c.fa=d,a.push(c)),c};function se(a,c){var d=c.type;if(d in a.g){var p=a.g[d],k=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=k)&&Array.prototype.splice.call(p,k,1),N&&(ue(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Le(a,c,d,p){for(var k=0;k<a.length;++k){var N=a[k];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return k}return-1}var kt="closure_lm_"+(1e6*Math.random()|0),Be={};function Et(a,c,d,p,k){if(p&&p.once)return gf(a,c,d,p,k);if(Array.isArray(c)){for(var N=0;N<c.length;N++)Et(a,c[N],d,p,k);return null}return d=lu(d),a&&a[bt]?a.K(c,d,h(p)?!!p.capture:!!p,k):mf(a,c,d,!1,p,k)}function mf(a,c,d,p,k,N){if(!c)throw Error("Invalid event type");var j=h(k)?!!k.capture:!!k,ye=ou(a);if(ye||(a[kt]=ye=new ie(a)),d=ye.add(c,d,p,j,N),d.proxy)return d;if(p=_E(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Wt||(k=j),k===void 0&&(k=!1),a.addEventListener(c.toString(),p,k);else if(a.attachEvent)a.attachEvent(_f(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function _E(){function a(d){return c.call(a.src,a.listener,d)}const c=vE;return a}function gf(a,c,d,p,k){if(Array.isArray(c)){for(var N=0;N<c.length;N++)gf(a,c[N],d,p,k);return null}return d=lu(d),a&&a[bt]?a.L(c,d,h(p)?!!p.capture:!!p,k):mf(a,c,d,!0,p,k)}function yf(a,c,d,p,k){if(Array.isArray(c))for(var N=0;N<c.length;N++)yf(a,c[N],d,p,k);else p=h(p)?!!p.capture:!!p,d=lu(d),a&&a[bt]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=Le(N,d,p,k),-1<d&&(ue(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=ou(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Le(c,d,p,k)),(d=-1<a?c[a]:null)&&su(d))}function su(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[bt])se(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(_f(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=ou(c))?(se(d,a),d.h==0&&(d.src=null,c[kt]=null)):ue(a)}}}function _f(a){return a in Be?Be[a]:Be[a]="on"+a}function vE(a,c){if(a.da)a=!0;else{c=new Ht(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&su(a),a=d.call(p,c)}return a}function ou(a){return a=a[kt],a instanceof ie?a:null}var au="__closure_events_fn_"+(1e9*Math.random()>>>0);function lu(a){return typeof a=="function"?a:(a[au]||(a[au]=function(c){return a.handleEvent(c)}),a[au])}function rt(){le.call(this),this.i=new ie(this),this.M=this,this.F=null}C(rt,le),rt.prototype[bt]=!0,rt.prototype.removeEventListener=function(a,c,d,p){yf(this,a,c,d,p)};function ft(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new ke(c,a);else if(c instanceof ke)c.target=c.target||a;else{var k=c;c=new ke(p,a),T(c,k)}if(k=!0,d)for(var N=d.length-1;0<=N;N--){var j=c.g=d[N];k=xo(j,p,!0,c)&&k}if(j=c.g=a,k=xo(j,p,!0,c)&&k,k=xo(j,p,!1,c)&&k,d)for(N=0;N<d.length;N++)j=c.g=d[N],k=xo(j,p,!1,c)&&k}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)ue(d[p]);delete a.g[c],a.h--}}this.F=null},rt.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},rt.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function xo(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var k=!0,N=0;N<c.length;++N){var j=c[N];if(j&&!j.da&&j.capture==d){var ye=j.listener,Qe=j.ha||j.src;j.fa&&se(a.i,j),k=ye.call(Qe,p)!==!1&&k}}return k&&!p.defaultPrevented}function vf(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Ef(a){a.g=vf(()=>{a.g=null,a.i&&(a.i=!1,Ef(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class EE extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ef(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(a){le.call(this),this.h=a,this.g={}}C(Zi,le);var wf=[];function Tf(a){B(a.g,function(c,d){this.g.hasOwnProperty(d)&&su(c)},a),a.g={}}Zi.prototype.N=function(){Zi.aa.N.call(this),Tf(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uu=l.JSON.stringify,wE=l.JSON.parse,TE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function cu(){}cu.prototype.h=null;function If(a){return a.h||(a.h=a.i())}function Sf(){}var es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hu(){ke.call(this,"d")}C(hu,ke);function du(){ke.call(this,"c")}C(du,ke);var Tr={},Af=null;function Do(){return Af=Af||new rt}Tr.La="serverreachability";function Rf(a){ke.call(this,Tr.La,a)}C(Rf,ke);function ts(a){const c=Do();ft(c,new Rf(c))}Tr.STAT_EVENT="statevent";function Cf(a,c){ke.call(this,Tr.STAT_EVENT,a),this.stat=c}C(Cf,ke);function pt(a){const c=Do();ft(c,new Cf(c,a))}Tr.Ma="timingevent";function kf(a,c){ke.call(this,Tr.Ma,a),this.size=c}C(kf,ke);function ns(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function rs(){this.g=!0}rs.prototype.xa=function(){this.g=!1};function IE(a,c,d,p,k,N){a.info(function(){if(a.g)if(N)for(var j="",ye=N.split("&"),Qe=0;Qe<ye.length;Qe++){var ce=ye[Qe].split("=");if(1<ce.length){var it=ce[0];ce=ce[1];var st=it.split("_");j=2<=st.length&&st[1]=="type"?j+(it+"="+ce+"&"):j+(it+"=redacted&")}}else j=null;else j=N;return"XMLHTTP REQ ("+p+") [attempt "+k+"]: "+c+`
`+d+`
`+j})}function SE(a,c,d,p,k,N,j){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+k+"]: "+c+`
`+d+`
`+N+" "+j})}function Xr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+RE(a,d)+(p?" "+p:"")})}function AE(a,c){a.info(function(){return"TIMEOUT: "+c})}rs.prototype.info=function(){};function RE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var k=p[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var j=1;j<k.length;j++)k[j]=""}}}}return uu(d)}catch{return c}}var Vo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fu;function Oo(){}C(Oo,cu),Oo.prototype.g=function(){return new XMLHttpRequest},Oo.prototype.i=function(){return{}},fu=new Oo;function bn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nf}function Nf(){this.i=null,this.g="",this.h=!1}var xf={},pu={};function mu(a,c,d){a.L=1,a.v=Fo(mn(c)),a.m=d,a.P=!0,Df(a,null)}function Df(a,c){a.F=Date.now(),Lo(a),a.A=mn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),qf(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Nf,a.g=cp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new EE(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(wf[0]=k.toString()),k=wf);for(var N=0;N<k.length;N++){var j=Et(d,k[N],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ts(),IE(a.i,a.u,a.A,a.l,a.R,a.m)}bn.prototype.ca=function(a){a=a.target;const c=this.M;c&&gn(a)==3?c.j():this.Y(a)},bn.prototype.Y=function(a){try{if(a==this.g)e:{const st=gn(this.g);var c=this.g.Ba();const ei=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Zf(this.g)))){this.J||st!=4||c==7||(c==8||0>=ei?ts(3):ts(2)),gu(this);var d=this.g.Z();this.X=d;t:if(Vf(this)){var p=Zf(this.g);a="";var k=p.length,N=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),is(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<k;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==k-1)});p.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,SE(this.i,this.u,this.A,this.l,this.R,st,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,Qe=this.g;if((ye=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ye)){var ce=ye;break t}}ce=null}if(d=ce)Xr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yu(this,d);else{this.o=!1,this.s=3,pt(12),Ir(this),is(this);break e}}if(this.P){d=!0;let qt;for(;!this.J&&this.C<j.length;)if(qt=CE(this,j),qt==pu){st==4&&(this.s=4,pt(14),d=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==xf){this.s=4,pt(15),Xr(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Xr(this.i,this.l,qt,null),yu(this,qt);if(Vf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||j.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)Xr(this.i,this.l,j,"[Invalid Chunked Response]"),Ir(this),is(this);else if(0<j.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Iu(it),it.M=!0,pt(11))}}else Xr(this.i,this.l,j,null),yu(this,j);st==4&&Ir(this),this.o&&!this.J&&(st==4?op(this.j,this):(this.o=!1,Lo(this)))}else WE(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Ir(this),is(this)}}}catch{}finally{}};function Vf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function CE(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?pu:(d=Number(c.substring(d,p)),isNaN(d)?xf:(p+=1,p+d>c.length?pu:(c=c.slice(p,p+d),a.C=p+d,c)))}bn.prototype.cancel=function(){this.J=!0,Ir(this)};function Lo(a){a.S=Date.now()+a.I,Of(a,a.I)}function Of(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ns(y(a.ba,a),c)}function gu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(AE(this.i,this.A),this.L!=2&&(ts(),pt(17)),Ir(this),this.s=2,is(this)):Of(this,this.S-a)};function is(a){a.j.G==0||a.J||op(a.j,a)}function Ir(a){gu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Tf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function yu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||_u(d.h,a))){if(!a.K&&_u(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var k=p;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Wo(d),$o(d);else break e;Tu(d),pt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=ns(y(d.Za,d),6e3));if(1>=bf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ar(d,11)}else if((a.K||d.g==a)&&Wo(d),!E(c))for(k=d.Da.g.parse(c),c=0;c<k.length;c++){let ce=k[c];if(d.T=ce[0],ce=ce[1],d.G==2)if(ce[0]=="c"){d.K=ce[1],d.ia=ce[2];const it=ce[3];it!=null&&(d.la=it,d.j.info("VER="+d.la));const st=ce[4];st!=null&&(d.Aa=st,d.j.info("SVER="+d.Aa));const ei=ce[5];ei!=null&&typeof ei=="number"&&0<ei&&(p=1.5*ei,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const qt=a.g;if(qt){const qo=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qo){var N=p.h;N.g||qo.indexOf("spdy")==-1&&qo.indexOf("quic")==-1&&qo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(vu(N,N.h),N.h=null))}if(p.D){const Su=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Su&&(p.ya=Su,we(p.I,p.D,Su))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=a;if(p.qa=up(p,p.J?p.ia:null,p.W),j.K){Ff(p.h,j);var ye=j,Qe=p.L;Qe&&(ye.I=Qe),ye.B&&(gu(ye),Lo(ye)),p.g=j}else ip(p);0<d.i.length&&zo(d)}else ce[0]!="stop"&&ce[0]!="close"||Ar(d,7);else d.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Ar(d,7):wu(d):ce[0]!="noop"&&d.l&&d.l.ta(ce),d.v=0)}}ts(4)}catch{}}var kE=class{constructor(a,c){this.g=a,this.map=c}};function Lf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bf(a){return a.h?1:a.g?a.g.size:0}function _u(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function vu(a,c){a.g?a.g.add(c):a.h=c}function Ff(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Lf.prototype.cancel=function(){if(this.i=Uf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Uf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return x(a.i)}function PE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function NE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Bf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=NE(a),p=PE(a),k=p.length,N=0;N<k;N++)c.call(void 0,p[N],d&&d[N],a)}var jf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),k=null;if(0<=p){var N=a[d].substring(0,p);k=a[d].substring(p+1)}else N=a[d];c(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Sr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Sr){this.h=a.h,Mo(this,a.j),this.o=a.o,this.g=a.g,bo(this,a.s),this.l=a.l;var c=a.i,d=new as;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),$f(this,d),this.m=a.m}else a&&(c=String(a).match(jf))?(this.h=!1,Mo(this,c[1]||"",!0),this.o=ss(c[2]||""),this.g=ss(c[3]||"",!0),bo(this,c[4]),this.l=ss(c[5]||"",!0),$f(this,c[6]||"",!0),this.m=ss(c[7]||"")):(this.h=!1,this.i=new as(null,this.h))}Sr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(os(c,zf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(os(c,zf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(os(d,d.charAt(0)=="/"?OE:VE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",os(d,ME)),a.join("")};function mn(a){return new Sr(a)}function Mo(a,c,d){a.j=d?ss(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function bo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function $f(a,c,d){c instanceof as?(a.i=c,bE(a.i,a.h)):(d||(c=os(c,LE)),a.i=new as(c,a.h))}function we(a,c,d){a.i.set(c,d)}function Fo(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ss(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function os(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,DE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function DE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zf=/[#\/\?@]/g,VE=/[#\?:]/g,OE=/[#\?]/g,LE=/[#\?@]/g,ME=/#/g;function as(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&xE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=as.prototype,t.add=function(a,c){Fn(this),this.i=null,a=Jr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Wf(a,c){Fn(a),c=Jr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Hf(a,c){return Fn(a),c=Jr(a,c),a.g.has(c)}t.forEach=function(a,c){Fn(this),this.g.forEach(function(d,p){d.forEach(function(k){a.call(c,k,p,this)},this)},this)},t.na=function(){Fn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const k=a[p];for(let N=0;N<k.length;N++)d.push(c[p])}return d},t.V=function(a){Fn(this);let c=[];if(typeof a=="string")Hf(this,a)&&(c=c.concat(this.g.get(Jr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Fn(this),this.i=null,a=Jr(this,a),Hf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function qf(a,c,d){Wf(a,c),0<d.length&&(a.i=null,a.g.set(Jr(a,c),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var k=N;j[p]!==""&&(k+="="+encodeURIComponent(String(j[p]))),a.push(k)}}return this.i=a.join("&")};function Jr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function bE(a,c){c&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(d,p){var k=p.toLowerCase();p!=k&&(Wf(this,p),qf(this,k,d))},a)),a.j=c}function FE(a,c){const d=new rs;if(l.Image){const p=new Image;p.onload=S(Un,d,"TestLoadImage: loaded",!0,c,p),p.onerror=S(Un,d,"TestLoadImage: error",!1,c,p),p.onabort=S(Un,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=S(Un,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function UE(a,c){const d=new rs,p=new AbortController,k=setTimeout(()=>{p.abort(),Un(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(k),N.ok?Un(d,"TestPingServer: ok",!0,c):Un(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(k),Un(d,"TestPingServer: error",!1,c)})}function Un(a,c,d,p,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),p(d)}catch{}}function BE(){this.g=new TE}function jE(a,c,d){const p=d||"";try{Bf(a,function(k,N){let j=k;h(k)&&(j=uu(k)),c.push(p+N+"="+encodeURIComponent(j))})}catch(k){throw c.push(p+"type="+encodeURIComponent("_badmap")),k}}function Uo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Uo,cu),Uo.prototype.g=function(){return new Bo(this.l,this.j)},Uo.prototype.i=function(a){return function(){return a}}({});function Bo(a,c){rt.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Bo,rt),t=Bo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,us(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ls(this):us(this),this.readyState==3&&Gf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ls(this))},t.Qa=function(a){this.g&&(this.response=a,ls(this))},t.ga=function(){this.g&&ls(this)};function ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,us(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kf(a){let c="";return B(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Eu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Kf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):we(a,c,d))}function Ve(a){rt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ve,rt);var $E=/^https?$/i,zE=["POST","PUT"];t=Ve.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fu.g(),this.v=this.o?If(this.o):If(fu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){Qf(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var k in p)d.set(k,p[k]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(zE,c,void 0))||p||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of d)this.g.setRequestHeader(N,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jf(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Qf(this,N)}};function Qf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Yf(a),jo(a)}function Yf(a){a.A||(a.A=!0,ft(a,"complete"),ft(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ft(this,"complete"),ft(this,"abort"),jo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jo(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Xf(this):this.bb())},t.bb=function(){Xf(this)};function Xf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)vf(a.Ea,0,a);else if(ft(a,"readystatechange"),gn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=j===0){var k=String(a.D).match(jf)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),p=!$E.test(k?k.toLowerCase():"")}d=p}if(d)ft(a,"complete"),ft(a,"success");else{a.m=6;try{var N=2<gn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Yf(a)}}finally{jo(a)}}}}function jo(a,c){if(a.g){Jf(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ft(a,"ready");try{d.onreadystatechange=p}catch{}}}function Jf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),wE(c)}};function Zf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function WE(a){const c={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var d=R(a[p]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[k]||[];c[k]=N,N.push(d)}w(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function ep(a){this.Aa=0,this.i=[],this.j=new rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,a),this.cb=cs("retryDelaySeedMs",1e4,a),this.Wa=cs("forwardChannelMaxRetries",2,a),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Lf(a&&a.concurrentRequestLimit),this.Da=new BE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ep.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){pt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=up(this,null,this.W),zo(this)};function wu(a){if(tp(a),a.G==3){var c=a.U++,d=mn(a.I);if(we(d,"SID",a.K),we(d,"RID",c),we(d,"TYPE","terminate"),hs(a,d),c=new bn(a,a.j,c),c.L=2,c.v=Fo(mn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=cp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Lo(c)}lp(a)}function $o(a){a.g&&(Iu(a),a.g.cancel(),a.g=null)}function tp(a){$o(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function zo(a){if(!Mf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ke||Y(),$||(Ke(),$=!0),O.add(c,a),a.B=0}}function HE(a,c){return bf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ns(y(a.Ga,a,c),ap(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new bn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=m(N),T(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=rp(this,k,c),d=mn(this.I),we(d,"RID",a),we(d,"CVER",22),this.D&&we(d,"X-HTTP-Session-Id",this.D),hs(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(Kf(N)))+"&"+c:this.m&&Eu(d,this.m,N)),vu(this.h,k),this.Ua&&we(d,"TYPE","init"),this.P?(we(d,"$req",c),we(d,"SID","null"),k.T=!0,mu(k,d,null)):mu(k,d,c),this.G=2}}else this.G==3&&(a?np(this,a):this.i.length==0||Mf(this.h)||np(this))};function np(a,c){var d;c?d=c.l:d=a.U++;const p=mn(a.I);we(p,"SID",a.K),we(p,"RID",d),we(p,"AID",a.T),hs(a,p),a.m&&a.o&&Eu(p,a.m,a.o),d=new bn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=rp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),vu(a.h,d),mu(d,p,c)}function hs(a,c){a.H&&B(a.H,function(d,p){we(c,p,d)}),a.l&&Bf({},function(d,p){we(c,p,d)})}function rp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var k=a.i;let N=-1;for(;;){const j=["count="+d];N==-1?0<d?(N=k[0].g,j.push("ofs="+N)):N=0:j.push("ofs="+N);let ye=!0;for(let Qe=0;Qe<d;Qe++){let ce=k[Qe].g;const it=k[Qe].map;if(ce-=N,0>ce)N=Math.max(0,k[Qe].g-100),ye=!1;else try{jE(it,j,"req"+ce+"_")}catch{p&&p(it)}}if(ye){p=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function ip(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ke||Y(),$||(Ke(),$=!0),O.add(c,a),a.v=0}}function Tu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ns(y(a.Fa,a),ap(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,sp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ns(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),$o(this),sp(this))};function Iu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function sp(a){a.g=new bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=mn(a.qa);we(c,"RID","rpc"),we(c,"SID",a.K),we(c,"AID",a.T),we(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(c,"TO",a.ja),we(c,"TYPE","xmlhttp"),hs(a,c),a.m&&a.o&&Eu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Fo(mn(c)),d.m=null,d.P=!0,Df(d,a)}t.Za=function(){this.C!=null&&(this.C=null,$o(this),Tu(this),pt(19))};function Wo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function op(a,c){var d=null;if(a.g==c){Wo(a),Iu(a),a.g=null;var p=2}else if(_u(a.h,c))d=c.D,Ff(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var k=a.B;p=Do(),ft(p,new kf(p,d)),zo(a)}else ip(a);else if(k=c.s,k==3||k==0&&0<c.X||!(p==1&&HE(a,c)||p==2&&Tu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),k){case 1:Ar(a,5);break;case 4:Ar(a,10);break;case 3:Ar(a,6);break;default:Ar(a,2)}}}function ap(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Ar(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const k=!p;p=new Sr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mo(p,"https"),Fo(p),k?FE(p.toString(),d):UE(p.toString(),d)}else pt(2);a.G=0,a.l&&a.l.sa(c),lp(a),tp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function lp(a){if(a.G=0,a.ka=[],a.l){const c=Uf(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function up(a,c,d){var p=d instanceof Sr?mn(d):new Sr(d);if(p.g!="")c&&(p.g=c+"."+p.g),bo(p,p.s);else{var k=l.location;p=k.protocol,c=c?c+"."+k.hostname:k.hostname,k=+k.port;var N=new Sr(null);p&&Mo(N,p),c&&(N.g=c),k&&bo(N,k),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&we(p,d,c),we(p,"VER",a.la),hs(a,p),p}function cp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ve(new Uo({eb:d})):new Ve(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function hp(){}t=hp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ho(){}Ho.prototype.g=function(a,c){return new Pt(a,c)};function Pt(a,c){rt.call(this),this.g=new ep(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Zr(this)}C(Pt,rt),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){wu(this.g)},Pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=uu(a),a=d);c.i.push(new kE(c.Ya++,a)),c.G==3&&zo(c)},Pt.prototype.N=function(){this.g.l=null,delete this.j,wu(this.g),delete this.g,Pt.aa.N.call(this)};function dp(a){hu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(dp,hu);function fp(){du.call(this),this.status=1}C(fp,du);function Zr(a){this.g=a}C(Zr,hp),Zr.prototype.ua=function(){ft(this.g,"a")},Zr.prototype.ta=function(a){ft(this.g,new dp(a))},Zr.prototype.sa=function(a){ft(this.g,new fp)},Zr.prototype.ra=function(){ft(this.g,"b")},Ho.prototype.createWebChannel=Ho.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,yv=function(){return new Ho},gv=function(){return Do()},mv=Tr,uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vo.NO_ERROR=0,Vo.TIMEOUT=8,Vo.HTTP_ERROR=6,ka=Vo,Pf.COMPLETE="complete",pv=Pf,Sf.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",rt.prototype.listen=rt.prototype.K,Rs=Sf,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,fv=Ve}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});const Om="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new pS("@firebase/firestore");function Es(){return zr.logLevel}function H(t,...e){if(zr.logLevel<=oe.DEBUG){const n=e.map(Sd);zr.debug(`Firestore (${Gi}): ${t}`,...n)}}function Vn(t,...e){if(zr.logLevel<=oe.ERROR){const n=e.map(Sd);zr.error(`Firestore (${Gi}): ${t}`,...n)}}function Li(t,...e){if(zr.logLevel<=oe.WARN){const n=e.map(Sd);zr.warn(`Firestore (${Gi}): ${t}`,...n)}}function Sd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function me(t,e){t||Q()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends cv{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class gS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yS{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new _v(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new ut(e)}}class _S{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _S(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ES{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new ES(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TS(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Mi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new We(0,0))}static max(){return new J(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return lo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends lo{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const IS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends lo{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return IS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Re.fromString(e))}static fromName(e){return new G(Re.fromString(e).popFirst(5))}static empty(){return new G(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Re(e.slice()))}}function SS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new pr(i,G.empty(),e)}function AS(t){return new pr(t.readTime,t.key,-1)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(J.min(),G.empty(),-1)}static max(){return new pr(J.max(),G.empty(),-1)}}function RS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==CS)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function PS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function To(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ad.oe=-1;function Ul(t){return t==null}function ul(t){return t===0&&1/t==-1/0}function NS(t){return typeof t=="number"&&Number.isInteger(t)&&!ul(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ev(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ha(this.root,e,this.comparator,!0)}}class ha{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mm(this.data.getIterator())}getIteratorFrom(e){return new Mm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Mm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new et(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new wv("Invalid base64 string: "+s):s}}(e);return new nt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const xS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(me(!!t),typeof t=="string"){let e=0;const n=xS.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cd(t){const e=t.mapValue.fields.__previous_value__;return Rd(e)?Cd(e):e}function uo(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class co{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new co("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof co&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rd(t)?4:OS(t)?9007199254740991:VS(t)?10:11:Q()}function hn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mr(i.timestampValue),l=mr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Wr(i.bytesValue).isEqual(Wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),l=Me(s.doubleValue);return o===l?ul(o)===ul(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Mi(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Lm(o)!==Lm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!hn(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function ho(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function bi(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return bm(t.timestampValue,e.timestampValue);case 4:return bm(uo(t),uo(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Wr(s),u=Wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=he(l[h],u[h]);if(f!==0)return f}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(Me(s.latitude),Me(o.latitude));return l!==0?l:he(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const g=s.fields||{},y=o.fields||{},S=(l=g.value)===null||l===void 0?void 0:l.arrayValue,C=(u=y.value)===null||u===void 0?void 0:u.arrayValue,x=he(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Fm(S,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===da.mapValue&&o===da.mapValue)return 0;if(s===da.mapValue)return 1;if(o===da.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=he(u[g],f[g]);if(y!==0)return y;const S=bi(l[u[g]],h[f[g]]);if(S!==0)return S}return he(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function bm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=mr(t),r=mr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Fm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=bi(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function Fi(t){return ch(t)}function ch(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ch(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ch(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function hh(t){return!!t&&"integerValue"in t}function kd(t){return!!t&&"arrayValue"in t}function Um(t){return!!t&&"nullValue"in t}function Bm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pa(t){return!!t&&"mapValue"in t}function VS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Us(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(Us(this.value))}}function Tv(t){const e=[];return Qr(t.fields,(n,r)=>{const i=new Je([n]);if(Pa(r)){const s=Tv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,J.min(),J.min(),J.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,J.min(),J.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,J.min(),J.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.position=e,this.inclusive=n}}function jm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=bi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $m(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function LS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{}class $e extends Iv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bS(e,n,r):n==="array-contains"?new BS(e,r):n==="in"?new jS(e,r):n==="not-in"?new $S(e,r):n==="array-contains-any"?new zS(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FS(e,r):new US(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bi(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends Iv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dn(e,n)}matches(e){return Sv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sv(t){return t.op==="and"}function Av(t){return MS(t)&&Sv(t)}function MS(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function dh(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Fi(t.value);if(Av(t))return t.filters.map(e=>dh(e)).join(",");{const e=t.filters.map(n=>dh(n)).join(",");return`${t.op}(${e})`}}function Rv(t,e){return t instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.field.isEqual(i.field)&&hn(r.value,i.value)}(t,e):t instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Rv(o,i.filters[l]),!0):!1}(t,e):void Q()}function Cv(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${Fi(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(Cv).join(" ,")+"}"}(t):"Filter"}class bS extends $e{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class FS extends $e{constructor(e,n){super(e,"in",n),this.keys=kv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class US extends $e{constructor(e,n){super(e,"not-in",n),this.keys=kv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class BS extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kd(n)&&ho(n.arrayValue,this.value)}}class jS extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class $S extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class zS extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function zm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WS(t,e,n,r,i,s,o)}function Pd(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>dh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ul(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fi(r)).join(",")),e.ue=n}return e.ue}function Nd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Rv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$m(t.startAt,e.startAt)&&$m(t.endAt,e.endAt)}function fh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HS(t,e,n,r,i,s,o,l){return new Bl(t,e,n,r,i,s,o,l)}function xd(t){return new Bl(t)}function Wm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qS(t){return t.collectionGroup!==null}function Bs(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new et(Je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new hl(s,r))}),n.has(Je.keyField().canonicalString())||e.ce.push(new hl(Je.keyField(),r))}return e.ce}function ln(t){const e=Z(t);return e.le||(e.le=GS(e,Bs(t))),e.le}function GS(t,e){if(t.limitType==="F")return zm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new hl(i.field,s)});const n=t.endAt?new cl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cl(t.startAt.position,t.startAt.inclusive):null;return zm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ph(t,e,n){return new Bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jl(t,e){return Nd(ln(t),ln(e))&&t.limitType===e.limitType}function Pv(t){return`${Pd(ln(t))}|lt:${t.limitType}`}function ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Cv(i)).join(", ")}]`),Ul(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Fi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Fi(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function $l(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Bs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=jm(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Bs(r),i)||r.endAt&&!function(o,l,u){const h=jm(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Bs(r),i))}(t,e)}function KS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nv(t){return(e,n)=>{let r=!1;for(const i of Bs(t)){const s=QS(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function QS(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?bi(u,h):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ev(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=new De(G.comparator);function On(){return YS}const xv=new De(G.comparator);function Cs(...t){let e=xv;for(const n of t)e=e.insert(n.key,n);return e}function Dv(t){let e=xv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return js()}function Vv(){return js()}function js(){return new Ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const XS=new De(G.comparator),JS=new et(G.comparator);function te(...t){let e=JS;for(const n of t)e=e.add(n);return e}const ZS=new et(he);function eA(){return ZS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ul(e)?"-0":e}}function Ov(t){return{integerValue:""+t}}function tA(t,e){return NS(e)?Ov(e):Dd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this._=void 0}}function nA(t,e,n){return t instanceof dl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Rd(s)&&(s=Cd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof fo?Mv(t,e):t instanceof po?bv(t,e):function(i,s){const o=Lv(i,s),l=Hm(o)+Hm(i.Pe);return hh(o)&&hh(i.Pe)?Ov(l):Dd(i.serializer,l)}(t,e)}function rA(t,e,n){return t instanceof fo?Mv(t,e):t instanceof po?bv(t,e):n}function Lv(t,e){return t instanceof fl?function(r){return hh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class dl extends zl{}class fo extends zl{constructor(e){super(),this.elements=e}}function Mv(t,e){const n=Fv(e);for(const r of t.elements)n.some(i=>hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class po extends zl{constructor(e){super(),this.elements=e}}function bv(t,e){let n=Fv(e);for(const r of t.elements)n=n.filter(i=>!hn(i,r));return{arrayValue:{values:n}}}class fl extends zl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Hm(t){return Me(t.integerValue||t.doubleValue)}function Fv(t){return kd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fo&&i instanceof fo||r instanceof po&&i instanceof po?Mi(r.elements,i.elements,hn):r instanceof fl&&i instanceof fl?hn(r.Pe,i.Pe):r instanceof dl&&i instanceof dl}(t.transform,e.transform)}class sA{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Na(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wl{}function Uv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jv(t.key,Zt.none()):new Io(t.key,t.data,Zt.none());{const n=t.data,r=Tt.empty();let i=new et(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Er(t.key,r,new Dt(i.toArray()),Zt.none())}}function oA(t,e,n){t instanceof Io?function(i,s,o){const l=i.value.clone(),u=Gm(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Er?function(i,s,o){if(!Na(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Gm(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Bv(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function $s(t,e,n,r){return t instanceof Io?function(s,o,l,u){if(!Na(s.precondition,o))return l;const h=s.value.clone(),f=Km(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Er?function(s,o,l,u){if(!Na(s.precondition,o))return l;const h=Km(s.fieldTransforms,u,o),f=o.data;return f.setAll(Bv(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return Na(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function aA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Lv(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function qm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Mi(r,i,(s,o)=>iA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends Wl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Er extends Wl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gm(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,rA(o,l,n[i]))}return r}function Km(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nA(s,o,e))}return r}class jv extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lA extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&oA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Uv(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Mi(this.mutations,e.mutations,(n,r)=>qm(n,r))&&Mi(this.baseMutations,e.baseMutations,(n,r)=>qm(n,r))}}class Vd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return XS}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,ne;function dA(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function $v(t){if(t===void 0)return Vn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Fe.OK:return L.OK;case Fe.CANCELLED:return L.CANCELLED;case Fe.UNKNOWN:return L.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return L.INTERNAL;case Fe.UNAVAILABLE:return L.UNAVAILABLE;case Fe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Fe.NOT_FOUND:return L.NOT_FOUND;case Fe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Fe.ABORTED:return L.ABORTED;case Fe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Fe.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(ne=Fe||(Fe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new Mr([4294967295,4294967295],0);function Qm(t){const e=fA().encode(t),n=new dv;return n.update(e),new Uint8Array(n.digest())}function Ym(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mr([n,r],0),new Mr([i,s],0)]}class Od{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ks(`Invalid padding: ${n}`);if(r<0)throw new ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Mr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Mr.fromNumber(r)));return i.compare(pA)===1&&(i=new Mr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Qm(e),[r,i]=Ym(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Od(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Qm(e),[r,i]=Ym(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hl(J.min(),i,new De(he),On(),te())}}class So{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new So(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class zv{constructor(e,n){this.targetId=e,this.me=n}}class Wv{constructor(e,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xm{constructor(){this.fe=0,this.ge=Zm(),this.pe=nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new So(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Zm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mA{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=Jm(),this.Qe=new De(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(fh(s))if(r===0){const o=new G(s.path);this.Ue(n,o,ht.newNoDocument(o,J.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Wr(r).toUint8Array()}catch(u){if(u instanceof wv)return Li("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Od(o,i,s)}catch(u){return Li(u instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&fh(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ht.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Hl(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=Jm(),this.Qe=new De(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Xm,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new et(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Xm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Jm(){return new De(G.comparator)}function Zm(){return new De(G.comparator)}const gA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_A=(()=>({and:"AND",or:"OR"}))();class vA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mh(t,e){return t.useProto3Json||Ul(e)?e:{value:e}}function pl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function EA(t,e){return pl(t,e.toTimestamp())}function un(t){return me(!!t),J.fromTimestamp(function(n){const r=mr(n);return new We(r.seconds,r.nanos)}(t))}function Ld(t,e){return gh(t,e).canonicalString()}function gh(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qv(t){const e=Re.fromString(t);return me(Xv(e)),e}function yh(t,e){return Ld(t.databaseId,e.path)}function tc(t,e){const n=qv(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Kv(n))}function Gv(t,e){return Ld(t.databaseId,e)}function wA(t){const e=qv(t);return e.length===4?Re.emptyPath():Kv(e)}function _h(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Kv(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function eg(t,e,n){return{name:yh(t,e),fields:n.value.mapValue.fields}}function TA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(me(f===void 0||typeof f=="string"),nt.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),nt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:$v(h.code);return new q(f,h.message||"")}(o);n=new Wv(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=tc(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):J.min(),l=new Tt({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new xa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=tc(t,r.document),s=r.readTime?un(r.readTime):J.min(),o=ht.newNoDocument(i,s),l=r.removedTargetIds||[];n=new xa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=tc(t,r.document),s=r.removedTargetIds||[];n=new xa([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hA(i,s),l=r.targetId;n=new zv(l,o)}}return n}function IA(t,e){let n;if(e instanceof Io)n={update:eg(t,e.key,e.value)};else if(e instanceof jv)n={delete:yh(t,e.key)};else if(e instanceof Er)n={update:eg(t,e.key,e.data),updateMask:DA(e.fieldMask)};else{if(!(e instanceof lA))return Q();n={verify:yh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:EA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function SA(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(J.min())&&(o=un(s)),new sA(o,i.transformResults||[])}(n,e))):[]}function AA(t,e){return{documents:[Gv(t,e.path)]}}function RA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Gv(t,i);const s=function(h){if(h.length!==0)return Yv(dn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:ri(y.field),direction:PA(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=mh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function CA(t){let e=wA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const y=Qv(g);return y instanceof dn&&Av(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(C){return new hl(ii(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,Ul(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,S=g.values||[];return new cl(S,y)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const y=!g.before,S=g.values||[];return new cl(S,y)}(n.endAt)),HS(e,i,o,s,l,"F",u,h)}function kA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ii(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ii(n.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ii(n.unaryFilter.field);return $e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ii(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(ii(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>Qv(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function PA(t){return gA[t]}function NA(t){return yA[t]}function xA(t){return _A[t]}function ri(t){return{fieldPath:t.canonicalString()}}function ii(t){return Je.fromServerFormat(t.fieldPath)}function Yv(t){return t instanceof $e?function(n){if(n.op==="=="){if(Bm(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NAN"}};if(Um(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bm(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NAN"}};if(Um(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(n.field),op:NA(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(i=>Yv(i));return r.length===1?r[0]:{compositeFilter:{op:xA(n.op),filters:r}}}(t):Q()}function DA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r,i,s=J.min(),o=J.min(),l=nt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.ct=e}}function OA(t){const e=CA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ph(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.un=new MA}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(pr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class MA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new et(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ui(0)}static kn(){return new Ui(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&$s(r.mutation,i,Dt.empty(),We.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Cs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=On();const o=js(),l=function(){return js()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Er)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),$s(f.mutation,h,f.mutation.getFieldMask(),We.now())):o.set(h.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new FA(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=js();let i=new De((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Dt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=Vv();f.forEach(y=>{if(!s.has(y)){const S=Uv(n.get(y),r.get(y));S!==null&&g.set(y,S),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Dr());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:Dv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Cs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Cs();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(g,y){return new Bl(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ht.newInvalidDocument(f)))});let l=Cs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&$s(f.mutation,h,Dt.empty(),We.now()),$l(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:OA(i.bundledQuery),readTime:un(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this.overlays=new De(G.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Dr(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Dr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Dr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cA(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.Tr=new et(He.Er),this.dr=new et(He.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new He(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Re([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Re([])),r=new He(n,e),i=new He(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new et(He.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uA(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new He(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(he);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new He(new G(s),0);let l=new et(he);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new He(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.Mr=e,this.docs=function(){return new De(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=On();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||RS(AS(f),r)<=0||(i.has(f.key)||$l(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HA(this)}getSize(e){return M.resolve(this.size)}}class HA extends bA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.persistence=e,this.Nr=new Ki(n=>Pd(n),Nd),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Md,this.targetCount=0,this.kr=Ui.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ui(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ad(0),this.Kr=!1,this.Kr=!0,this.$r=new $A,this.referenceDelegate=e(this),this.Ur=new qA(this),this.indexManager=new LA,this.remoteDocumentCache=function(i){return new WA(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new VA(n),this.Gr=new BA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new zA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new KA(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class KA extends kS{constructor(e){super(),this.currentSequenceNumber=e}}class bd{constructor(e){this.persistence=e,this.Jr=new Md,this.Yr=null}static Zr(e){return new bd(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return iS()?8:PS(nS())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new QA;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Es()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Es()<=oe.DEBUG&&H("QueryEngine","Query:",ni(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Es()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):M.resolve())}Yi(e,n){if(Wm(n))return M.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ph(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,ph(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Wm(n)||i.isEqual(J.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(Es()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ni(n)),this.rs(e,o,n,SS(i,-1)).next(l=>l))})}ts(e,n){let r=new et(Nv(e));return n.forEach((i,s)=>{$l(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Es()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ni(n)),this.Ji.getDocumentsMatchingQuery(e,n,pr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new De(he),this._s=new Ki(s=>Pd(s),Nd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function JA(t,e,n,r){return new XA(t,e,n,r)}async function Jv(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function ZA(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,y=g.keys();let S=M.resolve();return y.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(x=>{const V=h.docVersions.get(C);me(V!==null),x.version.compareTo(V)<0&&(g.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Zv(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function eR(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let S=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(nt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(g,S),function(x,V,I){return x.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,S,f)&&l.push(n.Ur.updateTargetData(s,S))});let u=On(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(tR(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function tR(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=On();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function nR(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rR(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function vh(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!To(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function tg(t,e,n){const r=Z(t);let i=J.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=Z(u),y=g._s.get(f);return y!==void 0?M.resolve(g.os.get(y)):g.Ur.getTargetData(h,f)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:te())).next(l=>(iR(r,KS(e),l),{documents:l,Ts:s})))}function iR(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class ng{constructor(){this.activeTargetIds=eA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sR{constructor(){this.so=new ng,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ng,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa=null;function nc(){return fa===null?fa=function(){return 268435456+Math.round(2147483648*Math.random())}():fa++,"0x"+fa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class uR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=nc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Li("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=aR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=nc();return new Promise((o,l)=>{const u=new fv;u.setWithCredentials(!0),u.listenOnce(pv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ka.NO_ERROR:const f=u.getResponseJson();H(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case ka.TIMEOUT:H(lt,`RPC '${e}' ${s} timed out`),l(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case ka.HTTP_ERROR:const g=u.getStatus();if(H(lt,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const C=function(V){const I=V.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(I)>=0?I:L.UNKNOWN}(S.status);l(new q(C,S.message))}else l(new q(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{H(lt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(lt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=nc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yv(),l=gv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(lt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let y=!1,S=!1;const C=new lR({Io:V=>{S?H(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(y||(H(lt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),H(lt,`RPC '${e}' stream ${i} sending:`,V),g.send(V))},To:()=>g.close()}),x=(V,I,E)=>{V.listen(I,A=>{try{E(A)}catch(D){setTimeout(()=>{throw D},0)}})};return x(g,Rs.EventType.OPEN,()=>{S||(H(lt,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),x(g,Rs.EventType.CLOSE,()=>{S||(S=!0,H(lt,`RPC '${e}' stream ${i} transport closed`),C.So())}),x(g,Rs.EventType.ERROR,V=>{S||(S=!0,Li(lt,`RPC '${e}' stream ${i} transport errored:`,V),C.So(new q(L.UNAVAILABLE,"The operation could not be completed")))}),x(g,Rs.EventType.MESSAGE,V=>{var I;if(!S){const E=V.data[0];me(!!E);const A=E,D=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(D){H(lt,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let B=function(v){const T=Fe[v];if(T!==void 0)return $v(T)}(U),w=D.message;B===void 0&&(B=L.INTERNAL,w="Unknown error status: "+U+" with message "+D.message),S=!0,C.So(new q(B,w)),g.close()}else H(lt,`RPC '${e}' stream ${i} received:`,E),C.bo(E)}}),x(l,mv.STAT_EVENT,V=>{V.stat===uh.PROXY?H(lt,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===uh.NOPROXY&&H(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){return new vA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new e0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cR extends t0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=TA(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?un(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=_h(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=fh(u)?{documents:AA(s,u)}:{query:RA(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Hv(s,o.resumeToken);const h=mh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=pl(s,o.snapshotVersion.toTimestamp());const h=mh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=kA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=_h(this.serializer),n.removeTarget=e,this.a_(n)}}class hR extends t0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=SA(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=_h(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,gh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,gh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class fR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.L_.add(4),await Ao(h),h.q_.set("Unknown"),h.L_.delete(4),await Gl(h)}(this))})}),this.q_=new fR(r,i)}}async function Gl(t){if(Yr(t))for(const e of t.B_)await e(!0)}async function Ao(t){for(const e of t.B_)await e(!1)}function n0(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),$d(n)?jd(n):Qi(n).r_()&&Bd(n,e))}function Ud(t,e){const n=Z(t),r=Qi(n);n.N_.delete(e),r.r_()&&r0(n,e),n.N_.size===0&&(r.r_()?r.o_():Yr(n)&&n.q_.set("Unknown"))}function Bd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qi(t).A_(e)}function r0(t,e){t.Q_.xe(e),Qi(t).R_(e)}function jd(t){t.Q_=new mA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qi(t).start(),t.q_.v_()}function $d(t){return Yr(t)&&!Qi(t).n_()&&t.N_.size>0}function Yr(t){return Z(t).L_.size===0}function i0(t){t.Q_=void 0}async function mR(t){t.q_.set("Online")}async function gR(t){t.N_.forEach((e,n)=>{Bd(t,e)})}async function yR(t,e){i0(t),$d(t)?(t.q_.M_(e),jd(t)):t.q_.set("Unknown")}async function _R(t,e,n){if(t.q_.set("Online"),e instanceof Wv&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ml(t,r)}else if(e instanceof xa?t.Q_.Ke(e):e instanceof zv?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await Zv(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),r0(s,u);const g=new Jn(f.target,u,h,f.sequenceNumber);Bd(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await ml(t,r)}}async function ml(t,e,n){if(!To(e))throw e;t.L_.add(1),await Ao(t),t.q_.set("Offline"),n||(n=()=>Zv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Gl(t)})}function s0(t,e){return e().catch(n=>ml(t,n,e))}async function Kl(t){const e=Z(t),n=gr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;vR(e);)try{const i=await nR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ER(e,i)}catch(i){await ml(e,i)}o0(e)&&a0(e)}function vR(t){return Yr(t)&&t.O_.length<10}function ER(t,e){t.O_.push(e);const n=gr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function o0(t){return Yr(t)&&!gr(t).n_()&&t.O_.length>0}function a0(t){gr(t).start()}async function wR(t){gr(t).p_()}async function TR(t){const e=gr(t);for(const n of t.O_)e.m_(n.mutations)}async function IR(t,e,n){const r=t.O_.shift(),i=Vd.from(r,e,n);await s0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kl(t)}async function SR(t,e){e&&gr(t).V_&&await async function(r,i){if(function(o){return dA(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();gr(r).s_(),await s0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Kl(r)}}(t,e),o0(t)&&a0(t)}async function ig(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n.L_.add(3),await Ao(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Gl(n)}async function AR(t,e){const n=Z(t);e?(n.L_.delete(2),await Gl(n)):e||(n.L_.add(2),await Ao(n),n.q_.set("Unknown"))}function Qi(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new cR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:mR.bind(null,t),Ro:gR.bind(null,t),mo:yR.bind(null,t),d_:_R.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),$d(t)?jd(t):t.q_.set("Unknown")):(await t.K_.stop(),i0(t))})),t.K_}function gr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new hR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wR.bind(null,t),mo:SR.bind(null,t),f_:TR.bind(null,t),g_:IR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Kl(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new zd(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wd(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),To(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Cs(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.W_=new De(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Bi(e,n,Ii.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class CR{constructor(){this.queries=og(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=og(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function og(){return new Ki(t=>Pv(t),jl)}async function l0(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new RR,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Wd(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Hd(n)}async function u0(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kR(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Hd(n)}function PR(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Hd(t){t.Y_.forEach(e=>{e.next()})}var Eh,ag;(ag=Eh||(Eh={})).ea="default",ag.Cache="cache";class c0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Eh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.key=e}}class d0{constructor(e){this.key=e}}class NR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=Nv(e),this.Ra=new Ii(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new sg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const y=i.get(f),S=$l(this.query,g)?g:null,C=!!y&&this.mutatedKeys.has(y.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;y&&S?y.data.isEqual(S.data)?C!==x&&(r.track({type:3,doc:S}),V=!0):this.ga(y,S)||(r.track({type:2,doc:S}),V=!0,(u&&this.Aa(S,u)>0||h&&this.Aa(S,h)<0)&&(l=!0)):!y&&S?(r.track({type:0,doc:S}),V=!0):y&&!S&&(r.track({type:1,doc:y}),V=!0,(u||h)&&(l=!0)),V&&(S?(o=o.add(S),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(S,C){const x=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return x(S)-x(C)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Bi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new sg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new d0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new h0(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Bi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DR{constructor(e){this.key=e,this.va=!1}}class VR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ki(l=>Pv(l),jl),this.Ma=new Map,this.xa=new Set,this.Oa=new De(G.comparator),this.Na=new Map,this.La=new Md,this.Ba={},this.ka=new Map,this.qa=Ui.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function OR(t,e,n=!0){const r=_0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await f0(r,e,n,!0),i}async function LR(t,e){const n=_0(t);await f0(n,e,!0,!1)}async function f0(t,e,n,r){const i=await rR(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await MR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&n0(t.remoteStore,i),l}async function MR(t,e,n,r,i){t.Ka=(g,y,S)=>async function(x,V,I,E){let A=V.view.ma(I);A.ns&&(A=await tg(x.localStore,V.query,!1).then(({documents:w})=>V.view.ma(w,A)));const D=E&&E.targetChanges.get(V.targetId),U=E&&E.targetMismatches.get(V.targetId)!=null,B=V.view.applyChanges(A,x.isPrimaryClient,D,U);return ug(x,V.targetId,B.wa),B.snapshot}(t,g,y,S);const s=await tg(t.localStore,e,!0),o=new NR(e,s.Ts),l=o.ma(s.documents),u=So.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);ug(t,n,h.wa);const f=new xR(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function bR(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!jl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ud(r.remoteStore,i.targetId),wh(r,i.targetId)}).catch(wo)):(wh(r,i.targetId),await vh(r.localStore,i.targetId,!0))}async function FR(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ud(n.remoteStore,r.targetId))}async function UR(t,e,n){const r=qR(t);try{const i=await function(o,l){const u=Z(o),h=We.now(),f=l.reduce((S,C)=>S.add(C.key),te());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=On(),x=te();return u.cs.getEntries(S,f).next(V=>{C=V,C.forEach((I,E)=>{E.isValidDocument()||(x=x.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(V=>{g=V;const I=[];for(const E of l){const A=aA(E,g.get(E.key).overlayedDocument);A!=null&&I.push(new Er(E.key,A,Tv(A.value.mapValue),Zt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,I,l)}).next(V=>{y=V;const I=V.applyToLocalDocumentSet(g,x);return u.documentOverlayCache.saveOverlays(S,V.batchId,I)})}).then(()=>({batchId:y.batchId,changes:Dv(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new De(he)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ro(r,i.changes),await Kl(r.remoteStore)}catch(i){const s=Wd(i,"Failed to persist write");n.reject(s)}}async function p0(t,e){const n=Z(t);try{const r=await eR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Ro(n,r,e)}catch(r){await wo(r)}}function lg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(l)&&(h=!0)}),h&&Hd(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BR(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new De(G.comparator);o=o.insert(s,ht.newNoDocument(s,J.min()));const l=te().add(s),u=new Hl(J.min(),new Map,new De(he),o,l);await p0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),qd(r)}else await vh(r.localStore,e,!1).then(()=>wh(r,e,n)).catch(wo)}async function jR(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await ZA(n.localStore,e);g0(n,r,null),m0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,i)}catch(i){await wo(i)}}async function $R(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(me(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);g0(r,e,n),m0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,i)}catch(i){await wo(i)}}function m0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function g0(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function wh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||y0(t,r)})}function y0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ud(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),qd(t))}function ug(t,e,n){for(const r of n)r instanceof h0?(t.La.addReference(r.key,e),zR(t,r)):r instanceof d0?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||y0(t,r.key)):Q()}function zR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),qd(t))}function qd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new DR(n)),t.Oa=t.Oa.insert(n,r),n0(t.remoteStore,new Jn(ln(xd(n.path)),r,"TargetPurposeLimboResolution",Ad.oe))}}async function Ro(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=Fd.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(h,y=>M.forEach(y.$i,S=>f.persistence.referenceDelegate.addReference(g,y.targetId,S)).next(()=>M.forEach(y.Ui,S=>f.persistence.referenceDelegate.removeReference(g,y.targetId,S)))))}catch(g){if(!To(g))throw g;H("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const S=f.os.get(y),C=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(y,x)}}}(r.localStore,s))}async function WR(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Jv(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.hs)}}function HR(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function _0(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=p0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BR.bind(null,e),e.Ca.d_=kR.bind(null,e.eventManager),e.Ca.$a=PR.bind(null,e.eventManager),e}function qR(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$R.bind(null,e),e}class gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ql(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return JA(this.persistence,new YA,e.initialUser,this.serializer)}Ga(e){return new GA(bd.Zr,this.serializer)}Wa(e){return new sR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gl.provider={build:()=>new gl};class Th{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WR.bind(null,this.syncEngine),await AR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CR}()}createDatastore(e){const n=ql(e.databaseInfo.databaseId),r=function(s){return new uR(s)}(e.databaseInfo);return function(s,o,l,u){return new dR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new pR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>lg(this.syncEngine,n,0),function(){return rg.D()?new rg:new oR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const g=new VR(i,s,o,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ao(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Th.provider={build:()=>new Th};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=vv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ic(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Jv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KR(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ig(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ig(e.remoteStore,i)),t._onlineComponents=e}async function KR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await ic(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Li("Error using user provided cache. Falling back to memory cache: "+n),await ic(t,new gl)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await ic(t,new gl);return t._offlineComponents}async function E0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await cg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await cg(t,new Th))),t._onlineComponents}function QR(t){return E0(t).then(e=>e.syncEngine)}async function w0(t){const e=await E0(t),n=e.eventManager;return n.onListen=OR.bind(null,e.syncEngine),n.onUnlisten=bR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=LR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FR.bind(null,e.syncEngine),n}function YR(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new v0({next:y=>{f.Za(),o.enqueueAndForget(()=>u0(s,g));const S=y.docs.has(l);!S&&y.fromCache?h.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&u&&u.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new c0(xd(l.path),f,{includeMetadataChanges:!0,_a:!0});return l0(s,g)}(await w0(t),t.asyncQueue,e,n,r)),r.promise}function XR(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new v0({next:y=>{f.Za(),o.enqueueAndForget(()=>u0(s,g)),y.fromCache&&u.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new c0(l,f,{includeMetadataChanges:!0,_a:!0});return l0(s,g)}(await w0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JR(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dg(t){if(!G.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fg(t){if(G.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gd(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=T0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ql{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mS;switch(r.type){case"firstParty":return new vS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hg.get(n);r&&(H("ComponentProvider","Removing Datastore"),hg.delete(n),r.terminate())}(this),Promise.resolve()}}function ZR(t,e,n,r={}){var i;const s=(t=fn(t,Ql))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ut.MOCK_USER;else{l=tS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(h)}t._authCredentials=new gS(new _v(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yl(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class cr extends Yl{constructor(e,n,r){super(e,n,xd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new G(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function ws(t,e,...n){if(t=fr(t),I0("collection","path",e),t instanceof Ql){const r=Re.fromString(e,...n);return fg(r),new cr(t,null,r)}{if(!(t instanceof Ct||t instanceof cr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return fg(r),new cr(t.firestore,null,r)}}function Xl(t,e,...n){if(t=fr(t),arguments.length===1&&(e=vv.newId()),I0("doc","path",e),t instanceof Ql){const r=Re.fromString(e,...n);return dg(r),new Ct(t,null,new G(r))}{if(!(t instanceof Ct||t instanceof cr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return dg(r),new Ct(t.firestore,t instanceof cr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new e0(this,"async_queue_retry"),this.Vu=()=>{const r=rc();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=rc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Cn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!To(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=zd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Yi extends Ql{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new mg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mg(e),this._firestoreClient=void 0,await e}}}function eC(t,e){const n=typeof t=="object"?t:iv(),r=typeof t=="string"?t:e||"(default)",i=Id(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eS("firestore");s&&ZR(i,...s)}return i}function Kd(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tC(t),t._firestoreClient}function tC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new DS(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,T0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new GR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ji(nt.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ji(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=/^__.*__$/;class rC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Er(e,this.data,this.fieldMask,n,this.fieldTransforms):new Io(e,this.data,n,this.fieldTransforms)}}class S0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function A0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Jd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Jd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return yl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(A0(this.Cu)&&nC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class iC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ql(e)}Qu(e,n,r,i=!1){return new Jd({Cu:e,methodName:n,qu:r,path:Je.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zd(t){const e=t._freezeSettings(),n=ql(t._databaseId);return new iC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function R0(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);ef("Data must be an object, but it was:",o,r);const l=C0(r,o);let u,h;if(s.merge)u=new Dt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=Ih(e,g,n);if(!o.contains(y))throw new q(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);P0(f,y)||f.push(y)}u=new Dt(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new rC(new Tt(l),u,h)}class Zl extends Qd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zl}}function sC(t,e,n,r){const i=t.Qu(1,e,n);ef("Data must be an object, but it was:",i,r);const s=[],o=Tt.empty();Qr(r,(u,h)=>{const f=tf(e,u,n);h=fr(h);const g=i.Nu(f);if(h instanceof Zl)s.push(f);else{const y=eu(h,g);y!=null&&(s.push(f),o.set(f,y))}});const l=new Dt(s);return new S0(o,l,i.fieldTransforms)}function oC(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Ih(e,r,n)],u=[i];if(s.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Ih(e,s[y])),u.push(s[y+1]);const h=[],f=Tt.empty();for(let y=l.length-1;y>=0;--y)if(!P0(h,l[y])){const S=l[y];let C=u[y];C=fr(C);const x=o.Nu(S);if(C instanceof Zl)h.push(S);else{const V=eu(C,x);V!=null&&(h.push(S),f.set(S,V))}}const g=new Dt(h);return new S0(f,g,o.fieldTransforms)}function eu(t,e){if(k0(t=fr(t)))return ef("Unsupported field value:",e,t),C0(t,e);if(t instanceof Qd)return function(r,i){if(!A0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=eu(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=fr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=We.fromDate(r);return{timestampValue:pl(i.serializer,s)}}if(r instanceof We){const s=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pl(i.serializer,s)}}if(r instanceof Yd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ji)return{bytesValue:Hv(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ld(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xd)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Dd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Gd(r)}`)}(t,e)}function C0(t,e){const n={};return Ev(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,i)=>{const s=eu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function k0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Yd||t instanceof ji||t instanceof Ct||t instanceof Qd||t instanceof Xd)}function ef(t,e,n){if(!k0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Gd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ih(t,e,n){if((e=fr(e))instanceof Jl)return e._internalPath;if(typeof e=="string")return tf(t,e);throw yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const aC=new RegExp("[~\\*/\\[\\]]");function tf(t,e,n){if(e.search(aC)>=0)throw yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jl(...e.split("."))._internalPath}catch{throw yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function P0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(x0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lC extends N0{data(){return super.data()}}function x0(t,e){return typeof e=="string"?tf(t,e):e instanceof Jl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cC{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Me(o.doubleValue));return new Xd(s)}convertGeoPoint(e){return new Yd(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const n=mr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);me(Xv(r));const i=new co(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class V0 extends N0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(x0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Da extends V0{data(e={}){return super.data(e)}}class hC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Da(this._firestore,this._userDataWriter,r.key,r,new Ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Da(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ps(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Da(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ps(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:dC(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){t=fn(t,Ct);const e=fn(t.firestore,Yi);return YR(Kd(e),t._key).then(n=>gC(e,t,n))}class O0 extends cC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function sc(t){t=fn(t,Yl);const e=fn(t.firestore,Yi),n=Kd(e),r=new O0(e);return uC(t._query),XR(n,t._query).then(i=>new hC(e,r,t,i))}function pC(t,e,n){t=fn(t,Ct);const r=fn(t.firestore,Yi),i=D0(t.converter,e,n);return nf(r,[R0(Zd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function mC(t,e,n,...r){t=fn(t,Ct);const i=fn(t.firestore,Yi),s=Zd(i);let o;return o=typeof(e=fr(e))=="string"||e instanceof Jl?oC(s,"updateDoc",t._key,e,n,r):sC(s,"updateDoc",t._key,e),nf(i,[o.toMutation(t._key,Zt.exists(!0))])}function gg(t,e){const n=fn(t.firestore,Yi),r=Xl(t),i=D0(t.converter,e);return nf(n,[R0(Zd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function nf(t,e){return function(r,i){const s=new Cn;return r.asyncQueue.enqueueAndForget(async()=>UR(await QR(r),i,s)),s.promise}(Kd(t),e)}function gC(t,e,n){const r=n.docs.get(e._key),i=new O0(t);return new V0(t,i,e._key,r,new Ps(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Gi=i})(qi),Oi(new uS("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Yi(new yS(r.getProvider("auth-internal")),new wS(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new co(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ur(Om,"4.7.3",e),ur(Om,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_C=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vC={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(y=64)),r.push(n[f],n[g],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_C(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new EC;const y=s<<2|l>>4;if(r.push(y),h!==64){const S=l<<4&240|h>>2;if(r.push(S),g!==64){const C=h<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L0=function(t){try{return vC.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=()=>wC().__FIREBASE_DEFAULTS__,IC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&L0(t[1]);return e&&JSON.parse(e)},M0=()=>{try{return TC()||IC()||SC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},AC=t=>{var e,n;return(n=(e=M0())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},b0=t=>{var e;return(e=M0())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function CC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NC(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="FirebaseError";class Xi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xC,Object.setPrototypeOf(this,Xi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tu.prototype.create)}}class tu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xi(i,l,r)}}function DC(t,e){return t.replace(VC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VC=/\{\$([^}]+)}/g;function OC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F0(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yg(s)&&yg(o)){if(!F0(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function LC(t,e){const n=new MC(t,e);return n.subscribe.bind(n)}class MC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=oc),i.error===void 0&&(i.error=oc),i.complete===void 0&&(i.complete=oc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const FC={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},UC=_e.INFO,BC={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},jC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=BC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $C{constructor(e){this.name=e,this._logLevel=UC,this._logHandler=jC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}function rf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}class _g{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}function U0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zC=U0,B0=new tu("auth","Firebase",U0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=new $C("@firebase/auth");function WC(t,...e){_l.logLevel<=_e.WARN&&_l.warn(`Auth (${qi}): ${t}`,...e)}function Va(t,...e){_l.logLevel<=_e.ERROR&&_l.error(`Auth (${qi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw of(t,...e)}function en(t,...e){return of(t,...e)}function sf(t,e,n){const r=Object.assign(Object.assign({},zC()),{[e]:n});return new tu("auth","Firebase",r).create(e,{appName:t.name})}function br(t){return sf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pn(t,"argument-error"),sf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function of(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return B0.create(t,...e)}function K(t,e,...n){if(!t)throw of(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function Ln(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qC(){return vg()==="http:"||vg()==="https:"}function vg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qC()||kC()||"connection"in navigator)?navigator.onLine:!0}function KC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=RC()||PC()}get(){return GC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new ko(3e4,6e4);function lf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ji(t,e,n,r,i={}){return $0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Co(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return CC()||(h.referrerPolicy="no-referrer"),j0.fetch()(z0(t,t.config.apiHost,n,l),h)})}async function $0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QC),e);try{const i=new JC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sf(t,f,h);pn(t,f)}}catch(i){if(i instanceof Xi)throw i;pn(t,"network-request-failed",{message:String(i)})}}async function XC(t,e,n,r,i={}){const s=await Ji(t,e,n,r,i);return"mfaPendingCredential"in s&&pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function z0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?af(t.config,i):`${t.config.apiScheme}://${i}`}class JC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),YC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(t,e){return Ji(t,"POST","/v1/accounts:delete",e)}async function W0(t,e){return Ji(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ek(t,e=!1){const n=wr(t),r=await n.getIdToken(e),i=uf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zs(ac(i.auth_time)),issuedAtTime:zs(ac(i.iat)),expirationTime:zs(ac(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ac(t){return Number(t)*1e3}function uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const i=L0(n);return i?JSON.parse(i):(Va("Failed to decode base64 JWT payload"),null)}catch(i){return Va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Eg(t){const e=uf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xi&&tk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await mo(t,W0(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?H0(s.providerUserInfo):[],l=ik(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ah(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function rk(t){const e=wr(t);await vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ik(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function H0(t){return t.map(e=>{var{providerId:n}=e,r=rf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(t,e){const n=await $0(t,{},async()=>{const r=Co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=z0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",j0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ok(t,e){return Ji(t,"POST","/v2/accounts:revokeToken",lf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Eg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await sk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Si;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ah(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ek(this,e)}reload(){return rk(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await mo(this,ZC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:D,isAnonymous:U,providerData:B,stsTokenManager:w}=n;K(A&&w,e,"internal-error");const m=Si.fromJSON(this.name,w);K(typeof A=="string",e,"internal-error"),jn(g,e.name),jn(y,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof U=="boolean",e,"internal-error"),jn(S,e.name),jn(C,e.name),jn(x,e.name),jn(V,e.name),jn(I,e.name),jn(E,e.name);const v=new Sn({uid:A,auth:e,email:y,emailVerified:D,displayName:g,isAnonymous:U,photoURL:C,phoneNumber:S,tenantId:x,stsTokenManager:m,createdAt:I,lastLoginAt:E});return B&&Array.isArray(B)&&(v.providerData=B.map(T=>Object.assign({},T))),V&&(v._redirectEventId=V),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Si;i.updateFromServerResponse(n);const s=new Sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?H0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Si;l.updateFromIdToken(r);const u=new Sn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ah(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new Map;function An(t){Ln(t instanceof Function,"Expected a class definition");let e=wg.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}q0.type="NONE";const Tg=q0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(An(Tg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||An(Tg);const o=Oa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const g=Sn._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ai(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ai(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J0(e))return"Blackberry";if(Z0(e))return"Webos";if(K0(e))return"Safari";if((e.includes("chrome/")||Q0(e))&&!e.includes("edge/"))return"Chrome";if(X0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function G0(t=yt()){return/firefox\//i.test(t)}function K0(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Q0(t=yt()){return/crios\//i.test(t)}function Y0(t=yt()){return/iemobile/i.test(t)}function X0(t=yt()){return/android/i.test(t)}function J0(t=yt()){return/blackberry/i.test(t)}function Z0(t=yt()){return/webos/i.test(t)}function cf(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ak(t=yt()){var e;return cf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lk(){return NC()&&document.documentMode===10}function eE(t=yt()){return cf(t)||X0(t)||Z0(t)||J0(t)||/windows phone/i.test(t)||Y0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e=[]){let n;switch(t){case"Browser":n=Ig(yt());break;case"Worker":n=`${Ig(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(t,e={}){return Ji(t,"GET","/v2/passwordPolicy",lf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=6;class dk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sg(this),this.idTokenSubscription=new Sg(this),this.beforeStateQueue=new uk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await W0(this,{idToken:e}),r=await Sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(br(this));const n=e?wr(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ck(this),n=new dk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ok(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nu(t){return wr(t)}class Sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=LC(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pk(t){hf=t}function mk(t){return hf.loadJS(t)}function gk(){return hf.gapiScript}function yk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t,e){const n=Id(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(F0(s,e??{}))return i;pn(i,"already-initialized")}return n.initialize({options:e})}function vk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ek(t,e,n){const r=nu(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=nE(e),{host:o,port:l}=wk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Tk()}function nE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wk(t){const e=nE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ag(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ag(o)}}}function Ag(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Tk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t,e){return XC(t,"POST","/v1/accounts:signInWithIdp",lf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="http://localhost";class qr extends rE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:Ik,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Co(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends df{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Po{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Po{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Po{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sn._fromIdTokenResponse(e,r,i),o=Rg(r);return new $i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rg(r);return new $i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Xi{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new El(e,n,r,i)}}function iE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(t,s,e,r):s})}async function Sk(t,e,n=!1){const r=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(br(r));const i="reauthenticate";try{const s=await mo(t,iE(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=uf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),$i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e,n=!1){if(Tn(t.app))return Promise.reject(br(t));const r="signIn",i=await iE(t,r,e),s=await $i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Ck(t,e,n,r){return wr(t).onIdTokenChanged(e,n,r)}function kk(t,e,n){return wr(t).beforeAuthStateChanged(e,n)}function Pk(t,e,n,r){return wr(t).onAuthStateChanged(e,n,r)}function Nk(t){return wr(t).signOut()}const wl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wl,"1"),this.storage.removeItem(wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=1e3,Dk=10;class oE extends sE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oE.type="LOCAL";const Vk=oE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE extends sE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aE.type="SESSION";const lE=aE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await Ok(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ru.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=ff("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function Mk(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function bk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Uk(){return uE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="firebaseLocalStorageDb",Bk=1,Tl="firebaseLocalStorage",hE="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function iu(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function jk(){const t=indexedDB.deleteDatabase(cE);return new No(t).toPromise()}function Rh(){const t=indexedDB.open(cE,Bk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:hE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await jk(),e(await Rh()))})})}async function Cg(t,e,n){const r=iu(t,!0).put({[hE]:e,value:n});return new No(r).toPromise()}async function $k(t,e){const n=iu(t,!1).get(e),r=await new No(n).toPromise();return r===void 0?null:r.value}function kg(t,e){const n=iu(t,!0).delete(e);return new No(n).toPromise()}const zk=800,Wk=3;class dE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ru._getInstance(Uk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bk(),!this.activeServiceWorker)return;this.sender=new Lk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rh();return await Cg(e,wl,"1"),await kg(e,wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$k(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=iu(i,!1).getAll();return new No(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dE.type="LOCAL";const Hk=dE;new ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t,e){return e?An(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends rE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qk(t){return Rk(t.auth,new pf(t),t.bypassAuthState)}function Gk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Ak(n,new pf(t),t.bypassAuthState)}async function Kk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Sk(n,new pf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qk;case"linkViaPopup":case"linkViaRedirect":return Kk;case"reauthViaPopup":case"reauthViaRedirect":return Gk;default:pn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=new ko(2e3,1e4);async function Yk(t,e,n){if(Tn(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=nu(t);HC(t,e,df);const i=fE(r,n);return new Vr(r,"signInViaPopup",e,i).executeNotNull()}class Vr extends pE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qk.get())};e()}}Vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="pendingRedirect",La=new Map;class Jk extends pE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=La.get(this.auth._key());if(!e){try{const r=await Zk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}La.set(this.auth._key(),e)}return this.bypassAuthState||La.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zk(t,e){const n=nP(e),r=tP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eP(t,e){La.set(t._key(),e)}function tP(t){return An(t._redirectPersistence)}function nP(t){return Oa(Xk,t.config.apiKey,t.name)}async function rP(t,e,n=!1){if(Tn(t.app))return Promise.reject(br(t));const r=nu(t),i=fE(r,e),o=await new Jk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=10*60*1e3;class sP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pg(e))}saveEventToCache(e){this.cachedEventUids.add(Pg(e)),this.lastProcessedEventTime=Date.now()}}function Pg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e={}){return Ji(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uP=/^https?/;async function cP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aP(t);for(const n of e)try{if(hP(n))return}catch{}pn(t,"unauthorized-domain")}function hP(t){const e=Sh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uP.test(n))return!1;if(lP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new ko(3e4,6e4);function Ng(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fP(t){return new Promise((e,n)=>{var r,i,s;function o(){Ng(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ng(),n(en(t,"network-request-failed"))},timeout:dP.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const l=yk("iframefcb");return cn()[l]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},mk(`${gk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ma=null,e})}let Ma=null;function pP(t){return Ma=Ma||fP(t),Ma}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=new ko(5e3,15e3),gP="__/auth/iframe",yP="emulator/auth/iframe",_P={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EP(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?af(e,yP):`https://${t.config.authDomain}/${gP}`,r={apiKey:e.apiKey,appName:t.name,v:qi},i=vP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Co(r).slice(1)}`}async function wP(t){const e=await pP(t),n=cn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:EP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_P,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=cn().setTimeout(()=>{s(o)},mP.get());function u(){cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IP=500,SP=600,AP="_blank",RP="http://localhost";class xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CP(t,e,n,r=IP,i=SP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},TP),{width:r.toString(),height:i.toString(),top:s,left:o}),h=yt().toLowerCase();n&&(l=Q0(h)?AP:n),G0(h)&&(e=e||RP,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[S,C])=>`${y}${S}=${C},`,"");if(ak(h)&&l!=="_self")return kP(e||"",l),new xg(null);const g=window.open(e||"",l,f);K(g,t,"popup-blocked");try{g.focus()}catch{}return new xg(g)}function kP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="__/auth/handler",NP="emulator/auth/handler",xP=encodeURIComponent("fac");async function Dg(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qi,eventId:i};if(e instanceof df){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries(s||{}))o[f]=g}if(e instanceof Po){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${xP}=${encodeURIComponent(u)}`:"";return`${DP(t)}?${Co(l).slice(1)}${h}`}function DP({config:t}){return t.emulator?af(t,NP):`https://${t.authDomain}/${PP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="webStorageSupport";class VP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lE,this._completeRedirectFn=rP,this._overrideRedirectResult=eP}async _openPopup(e,n,r,i){var s;Ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Dg(e,n,r,Sh(),i);return CP(e,o,ff())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Dg(e,n,r,Sh(),i);return Mk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wP(e),r=new sP(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lc,{type:lc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[lc];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eE()||K0()||cf()}}const OP=VP;var Vg="@firebase/auth",Og="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bP(t){Oi(new _g("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tE(t)},h=new fk(r,i,s,u);return vk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Oi(new _g("auth-internal",e=>{const n=nu(e.getProvider("auth").getImmediate());return(r=>new LP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ur(Vg,Og,MP(t)),ur(Vg,Og,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=5*60,UP=b0("authIdTokenMaxAge")||FP;let Lg=null;const BP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UP)return;const i=n==null?void 0:n.token;Lg!==i&&(Lg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jP(t=iv()){const e=Id(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_k(t,{popupRedirectResolver:OP,persistence:[Hk,Vk,lE]}),r=b0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=BP(s.toString());kk(n,o,()=>o(n.currentUser)),Ck(n,l=>o(l))}}const i=AC("auth");return i&&Ek(n,`http://${i}`),n}function $P(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$P().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bP("Browser");const zP={apiKey:"AIzaSyCqQDp516xqq_qEqAGYoafBT8gGEqqQ4zI",authDomain:"bicep-b6ad7.firebaseapp.com",projectId:"bicep-b6ad7",storageBucket:"bicep-b6ad7.firebasestorage.app",messagingSenderId:"1005111771441",appId:"1:1005111771441:web:b7c73a2d31766cec6ff010",measurementId:"G-30TK4S0NW4"},gE=rv(zP),Wn=eC(gE),uc=jP(gE),WP=new vn;async function yE(t){const e=Xl(Wn,"userProfiles",t),n=await fC(e);return n.exists()?n.data():null}async function HP(t,e){const n=Xl(Wn,"userProfiles",t);await pC(n,e,{merge:!0})}const qP=({stats:t,selectedCategory:e,selectedExerciseName:n})=>F.jsxs("div",{className:"bg-white rounded-xl shadow p-3 mb-3 w-full flex flex-col gap-1 border border-gray-200 text-left text-[13px]",children:[F.jsxs("div",{className:"font-semibold text-gray-700",children:[e," last worked:",F.jsx("span",{className:"ml-2 font-normal text-gray-900",children:t.categoryLastWorked&&t.categoryLastWorked.daysAgo!==void 0?t.categoryLastWorked.daysAgo===0?"Today":t.categoryLastWorked.daysAgo===1?"1 day ago":`${t.categoryLastWorked.daysAgo} days ago`:"Never"})]}),F.jsxs("div",{className:"font-semibold text-gray-700",children:[n||"Exercise"," last worked:",F.jsx("span",{className:"ml-2 font-normal text-gray-900",children:t.exerciseLastWorked&&t.exerciseLastWorked.daysAgo!==void 0?t.exerciseLastWorked.daysAgo===0?"Today":t.exerciseLastWorked.daysAgo===1?"1 day ago":`${t.exerciseLastWorked.daysAgo} days ago`:"Never"})]}),F.jsxs("div",{className:"font-semibold text-gray-700",children:["1RM:",F.jsx("span",{className:"ml-2 font-bold text-blue-700",children:t.exercise1RM?`${t.exercise1RM.weight} lbs (${t.exercise1RM.weight} lbs x ${t.exercise1RM.reps} reps) `+(Math.floor((new Date().getTime()-t.exercise1RM.date.getTime())/(1e3*60*60*24))===0?"Today":Math.floor((new Date().getTime()-t.exercise1RM.date.getTime())/(1e3*60*60*24))===1?"1 day ago":`${Math.floor((new Date().getTime()-t.exercise1RM.date.getTime())/(1e3*60*60*24))} days ago`):"Never"})]})]}),GP={"Upper Body Pull":"bg-blue-100","Upper Body Push":"bg-pink-100","Lower Body":"bg-orange-100","Core/Stability":"bg-purple-100",Cardio:"bg-green-100","Full Body/Functional":"bg-yellow-100"},KP=({categories:t,exercises:e,onAdd:n,onUpdate:r,editingEntry:i,onCancelEdit:s,entries:o=[],onAddExercise:l,muscleGroups:u=[],hideDataEntry:h=!1,user:f})=>{const[g,y]=fe.useState("Upper Body Push"),[S,C]=fe.useState(""),[x,V]=fe.useState(""),[I,E]=fe.useState(""),[A,D]=fe.useState(""),[U,B]=fe.useState(""),[w,m]=fe.useState(""),[v,T]=fe.useState(!1),[R,P]=fe.useState(""),[_,re]=fe.useState([]),[ve,Ce]=fe.useState(""),[Ke,$]=fe.useState({categoryLastWorked:null,exerciseLastWorked:null,exercise1RM:null}),O=e.find(z=>z.name===S);fe.useEffect(()=>{var z;if(i){C(i.exercise),V(""),y((O==null?void 0:O.category)||"Upper Body Push");const X=((z=i.sets)==null?void 0:z[0])||{};E(X.weight?X.weight.toString():""),D(X.reps?X.reps.toString():""),T(!1)}else C(""),V(""),E(""),D(""),T(!1);re([]),Ce("")},[i]);const Y=()=>{C(""),V(""),E(""),D(""),T(!0)};fe.useEffect(()=>{re([]),Ce("")},[S,v]);const de=()=>{let z={};O==null||O.fields.forEach(X=>{z[X]=""}),re(X=>[...X,z])},le=(z,X,ue)=>{re(ie=>ie.map((se,Le)=>Le===z?{...se,[X]:ue}:se))};function ke(z){const X=z.replace(/\D/g,"");if(!X)return"";let ue="",ie="";return X.length<=2?(ue="0",ie=X.padStart(2,"0")):(ue=X.slice(0,-2),ie=X.slice(-2)),`${parseInt(ue,10)}:${ie}`}function Wt(z){const[X,ue]=z.split(":");return(parseInt(X,10)||0)*60+(parseInt(ue,10)||0)}const Ht=async z=>{z.preventDefault();const X=v?x:S;if(!X)return;let ue={exercise:X};if(O!=null&&O.fields.includes("distance")||X==="Run"){if(!w&&!U)return;ue.sets=[{distance:w?parseFloat(w):0,duration:U?parseFloat(U):0}]}else if(O!=null&&O.fields.includes("duration")){const ie=Wt(ve);if(!ie)return;ue.sets=[{seconds:ie}]}else if(_.length>0){for(const ie of _)for(const se of(O==null?void 0:O.fields)||[])if(se==="reps"&&!ie[se]||se==="weight"&&(!ie[se]||!ie.reps)||se==="duration"&&(!ie[se]||!ie.distance))return;ue.sets=_.map(ie=>{const se={};for(const Le of(O==null?void 0:O.fields)||[])ie[Le]&&(se[Le]=parseFloat(ie[Le]));return se})}else{const ie={};for(const se of(O==null?void 0:O.fields)||[]){if(se==="reps"&&!A||se==="weight"&&!I||se==="weight"&&!A||se==="duration"&&!U)return;ie[se]=se==="reps"?parseInt(A,10):se==="weight"?parseFloat(I):se==="duration"?parseFloat(U):null}ue.sets=[ie]}v&&l&&await l({name:X,category:(O==null?void 0:O.category)||"Upper Body Push",fields:(O==null?void 0:O.fields)||[],primaryMuscles:[],secondaryMuscles:[],majorMuscleGroup:R,iconUrl:""}),i?r(ue):n(ue),C(""),V(""),E(""),D(""),T(!1),re([])},ge=v?[]:(O==null?void 0:O.fields)||[];fe.useEffect(()=>{async function z(){if(!f)return;const X=await yE(f.uid);if(!X){$({categoryLastWorked:null,exerciseLastWorked:null,exercise1RM:null});return}let ue=null,ie=null,se=null;if(g&&X.lastWorkedByCategory&&X.lastWorkedByCategory[g]){const Le=new Date(X.lastWorkedByCategory[g]);ue={category:g,daysAgo:Math.floor((Date.now()-Le.getTime())/(1e3*60*60*24))}}if(S&&X.lastWorkedByExercise&&X.lastWorkedByExercise[S]){const Le=new Date(X.lastWorkedByExercise[S]);ie={name:S,daysAgo:Math.floor((Date.now()-Le.getTime())/(1e3*60*60*24))}}if(S&&X.oneRepMaxByExercise&&X.oneRepMaxByExercise[S]){const Le=X.oneRepMaxByExercise[S];se={weight:Le.value,reps:Le.reps,date:new Date(Le.date)}}$({categoryLastWorked:ue,exerciseLastWorked:ie,exercise1RM:se})}z()},[f,g,S]);const bt=z=>{C(z.name),y(z.category),E(""),D(""),m(""),B(""),T(!1),P(z.majorMuscleGroup||""),re([{weight:0,reps:0,distance:0,duration:0}])};return F.jsx("div",{className:"bg-white rounded-lg shadow-md p-6",children:F.jsxs("form",{onSubmit:Ht,className:"space-y-4 mb-6",children:[F.jsxs("div",{className:"grid grid-cols-4 gap-2 mb-2 justify-center",children:[e.map(z=>F.jsxs("button",{type:"button",className:`flex flex-col items-center justify-center min-w-[90px] max-w-[90px] h-[40px] px-1 py-1 rounded shadow text-[11px] font-medium border border-gray-300 transition leading-tight break-words overflow-hidden ${S===z.name&&!v?"ring-2 ring-blue-400":""} ${GP[z.category]||"bg-gray-100"} hover:bg-blue-100`,onClick:()=>bt(z),disabled:!!i,children:[z.iconUrl&&F.jsx("div",{className:"w-5 h-5 flex items-center justify-center mb-0.5",children:F.jsx("img",{src:z.iconUrl,alt:z.name,className:"w-5 h-5 object-cover rounded"})}),F.jsx("span",{className:"text-center w-full",children:z.name})]},z.name)),F.jsx("button",{type:"button",className:"flex flex-col items-center justify-center px-1 py-1 rounded shadow text-xs font-bold border border-gray-300 bg-gray-100 hover:bg-green-100 transition min-w-[90px] max-w-[90px] h-[40px]",onClick:Y,disabled:!!i,title:"Add new exercise",children:"+"})]}),F.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-200 rounded-xl shadow-md p-6 mb-6 min-h-[120px] flex flex-col justify-center items-center transition-all duration-200",children:[F.jsx(qP,{stats:Ke,selectedCategory:g,selectedExerciseName:(O==null?void 0:O.name)||""}),h?null:F.jsxs(F.Fragment,{children:[v&&!i&&F.jsxs(F.Fragment,{children:[F.jsxs("div",{className:"flex gap-2 mb-2",children:[F.jsx("input",{className:"border rounded px-2 py-1 flex-1",placeholder:"New exercise name",value:x,onChange:z=>V(z.target.value)}),ge.includes("distance")&&F.jsx("input",{className:"border rounded px-2 py-1 w-28",type:"number",min:"0",step:"0.01",placeholder:"Distance (miles)",value:w,onChange:z=>m(z.target.value)}),ge.includes("duration")&&F.jsx("input",{className:"border rounded px-2 py-1 w-28",type:"number",min:"0",step:"1",placeholder:"Duration (sec)",value:U,onChange:z=>B(z.target.value)}),ge.includes("weight")&&F.jsx("input",{className:"border rounded px-2 py-1 w-28",type:"number",min:"0",step:"1",placeholder:"Weight",value:I,onChange:z=>E(z.target.value)}),ge.includes("reps")&&F.jsx("input",{className:"border rounded px-2 py-1 w-28",type:"number",min:"0",step:"1",placeholder:"Reps",value:A,onChange:z=>D(z.target.value)})]}),F.jsxs("div",{className:"flex gap-2",children:[F.jsx("select",{className:"border rounded px-2 py-1",value:O!=null&&O.fields.includes("distance")?"Distance":O!=null&&O.fields.includes("duration")?"Duration":"Reps",onChange:z=>{},children:O==null?void 0:O.fields.map(z=>F.jsx("option",{value:z,children:z.charAt(0).toUpperCase()+z.slice(1)},z))}),F.jsxs("select",{className:"border rounded px-2 py-1",value:R,onChange:z=>P(z.target.value),children:[F.jsx("option",{value:"",children:"Select Muscle Group"}),u.map(z=>F.jsx("option",{value:z,children:z},z))]})]})]}),!v&&!!O&&F.jsxs(F.Fragment,{children:[F.jsxs("div",{className:"flex flex-col gap-2 mb-2",children:[_.length===0&&F.jsxs("div",{className:"flex gap-2 items-end",children:[ge.includes("distance")&&F.jsx("input",{className:"border rounded px-2 py-1 w-20",type:"number",min:"0",step:"0.01",placeholder:"Distance (miles)",value:w,onChange:z=>m(z.target.value)}),ge.includes("duration")&&F.jsx("input",{className:"border rounded px-2 py-1 w-20",type:"number",min:"0",step:"1",placeholder:"Duration (sec)",value:U,onChange:z=>B(z.target.value)}),ge.includes("weight")&&F.jsx("input",{className:"border rounded px-2 py-1 w-20",type:"number",min:"0",step:"1",placeholder:"Weight",value:I,onChange:z=>E(z.target.value)}),ge.includes("reps")&&F.jsx("input",{className:"border rounded px-2 py-1 w-20",type:"number",min:"0",step:"1",placeholder:"Reps",value:A,onChange:z=>D(z.target.value)}),!(ge.includes("distance")&&ge.includes("duration"))&&F.jsx("button",{type:"button",className:"ml-1 w-7 h-7 flex items-center justify-center rounded-full bg-green-200 hover:bg-green-300 text-green-800 border border-green-300",onClick:de,title:"Add Set",children:F.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-4 h-4",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),_.map((z,X)=>F.jsxs("div",{className:"flex gap-2 items-end",children:[ge.includes("distance")&&F.jsx("input",{className:"border rounded px-2 py-1 w-20",type:"number",min:"0",step:"0.01",placeholder:"Distance (miles)",value:z.distance,onChange:ue=>le(X,"distance",ue.target.value)}),ge.includes("duration")&&F.jsx("input",{className:"border rounded px-2 py-1 w-20",type:"number",min:"0",step:"1",placeholder:"Duration (sec)",value:z.duration,onChange:ue=>le(X,"duration",ue.target.value)}),ge.includes("weight")&&F.jsx("input",{className:"border rounded px-2 py-1 w-20",type:"number",min:"0",step:"1",placeholder:"Weight",value:z.weight,onChange:ue=>le(X,"weight",ue.target.value)}),ge.includes("reps")&&F.jsx("input",{className:"border rounded px-2 py-1 w-20",type:"number",min:"0",step:"1",placeholder:"Reps",value:z.reps,onChange:ue=>le(X,"reps",ue.target.value)}),!(ge.includes("distance")&&ge.includes("duration"))&&F.jsx("button",{type:"button",className:"ml-1 w-7 h-7 flex items-center justify-center rounded-full bg-green-200 hover:bg-green-300 text-green-800 border border-green-300",onClick:de,title:"Add Set",children:F.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-4 h-4",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]},X))]}),ge.includes("duration")&&(O==null?void 0:O.fields.includes("duration"))&&F.jsxs("div",{className:"flex items-end gap-2 mb-2",children:[F.jsx("input",{className:"border rounded px-2 py-1 w-20 text-center",type:"text",placeholder:"0:00",value:ke(ve),onChange:z=>Ce(z.target.value),maxLength:5}),F.jsx("button",{type:"button",className:"w-7 h-7 flex items-center justify-center rounded-full bg-green-200 hover:bg-green-300 text-green-800 border border-green-300",onClick:de,title:"Add Set",children:F.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-4 h-4",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),!v&&(O==null?void 0:O.fields.includes("weight"))&&(()=>{const z=new Date,X=new Date(z.getFullYear(),z.getMonth()-2,z.getDate()),ue=o.filter(kt=>kt.exercise===O.name&&kt.sets&&Array.isArray(kt.sets)&&new Date(kt.date)>=X);let ie=0,se=null,Le=null;if(ue.forEach(kt=>{kt.sets.forEach(Be=>{if(Be.weight&&Be.reps){const Et=Be.weight*(1+Be.reps/30);Et>ie&&(ie=Et,se=Be,Le=kt.date)}})}),ie>0&&se&&Le){const kt=new Date(Le),Be=Math.floor((z.getTime()-kt.getTime())/(1e3*60*60*24));let Et="";return Be===0?Et="Today":Be===1?Et="1 day ago":Be<7?Et=`${Be} days ago`:Be<14?Et="1 week ago":Be<30?Et=`${Math.floor(Be/7)} weeks ago`:Be<60?Et="1 month ago":Et=`${Math.floor(Be/30)} months ago`,F.jsxs("div",{className:"mb-2 text-[13px] text-gray-700 text-center",children:[F.jsxs("div",{children:[F.jsx("b",{children:"1RM:"})," ",Math.round(ie)," lbs"]}),F.jsxs("div",{className:"text-gray-500 text-xs",children:["(",se.weight," x ",se.reps,") ",Et]})]})}return null})()]})]})]}),F.jsx("div",{className:"flex justify-end gap-2",children:i?F.jsxs(F.Fragment,{children:[F.jsx("button",{type:"button",className:"px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100",onClick:s,children:"Cancel"}),F.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center",disabled:!v&&!O||v&&(!x||!R),title:"Save",children:F.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75v-1.5A2.25 2.25 0 0 0 15 3H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V8.25a1.5 1.5 0 0 0-1.5-1.5h-6.75a.75.75 0 0 1-.75-.75V4.5"})})})]}):F.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center",disabled:!v&&!O||v&&(!x||!R),title:"Save",children:F.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75v-1.5A2.25 2.25 0 0 0 15 3H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V8.25a1.5 1.5 0 0 0-1.5-1.5h-6.75a.75.75 0 0 1-.75-.75V4.5"})})})})]})})},ma=["Upper Body Push","Upper Body Pull","Lower Body","Core/Stability","Cardio","Full Body/Functional"],QP={"Upper Body Pull":"bg-blue-100","Upper Body Push":"bg-pink-100","Lower Body":"bg-orange-100","Core/Stability":"bg-purple-100",Cardio:"bg-green-100","Full Body/Functional":"bg-yellow-100"};async function Mg(t,e){if(!e)return;const n=await yE(e)||{},r=new Date().toISOString(),i={...n.lastWorkedByCategory||{}},s={...n.lastWorkedByExercise||{}};i[t.category]=r,s[t.exercise]=r;let o={...n.oneRepMaxByExercise||{}};if(t.sets&&t.sets.length>0){let l=0,u=0;if(t.sets.forEach(h=>{h.weight&&h.reps&&h.weight>l&&(l=h.weight,u=h.reps)}),l>0){const h=o[t.exercise];(!h||l>h.value)&&(o[t.exercise]={value:l,reps:u,date:r})}}await HP(e,{lastWorkedByCategory:i,lastWorkedByExercise:s,oneRepMaxByExercise:o})}const YP=()=>{const[t,e]=fe.useState([]),[n,r]=fe.useState([]),[i,s]=fe.useState(!0),[o,l]=fe.useState(!0),[u,h]=fe.useState(null),[f,g]=fe.useState([]),[y,S]=fe.useState(null),[C,x]=fe.useState(null),[V,I]=fe.useState(!1),E=async()=>{s(!0);const re=(await sc(ws(Wn,"workoutLibrary"))).docs.map(ve=>ve.data());r(re),s(!1)};fe.useEffect(()=>{E()},[]),fe.useEffect(()=>{async function _(){l(!0);const ve=(await sc(ws(Wn,"workoutLogs"))).docs.map(Ce=>({...Ce.data(),id:Ce.id}));ve.sort((Ce,Ke)=>new Date(Ke.date).getTime()-new Date(Ce.date).getTime()),e(ve),l(!1)}_()},[]);const A=async()=>{const re=(await sc(ws(Wn,"muscleGroups"))).docs.map(ve=>ve.data().name);g(re)};fe.useEffect(()=>{A()},[]),fe.useEffect(()=>{const _=Pk(uc,re=>{x(re)});return()=>_()},[]);const D=async()=>{await Yk(uc,WP)},U=async()=>{await Nk(uc),I(!1)},B=async _=>{const re=new Date().toISOString(),ve={..._,date:re,userID:C==null?void 0:C.uid},Ce=await gg(ws(Wn,"workoutLogs"),ve);e(Ke=>[{...ve,id:Ce.id},...Ke]),C!=null&&C.uid&&await Mg(ve,C.uid)},w=async(_,re,ve)=>{const Ce=re||u;if(!Ce)return;const Ke=Xl(Wn,"workoutLogs",Ce),$=ve||new Date().toISOString(),O={..._,date:$,userID:C==null?void 0:C.uid};await mC(Ke,O),e(Y=>Y.map(de=>de.id===Ce?{...de,...O}:de)),h(null),C!=null&&C.uid&&await Mg(O,C.uid)},m=()=>{h(null)},v=u?t.find(_=>_.id===u):null,T=async _=>{await gg(ws(Wn,"workoutLibrary"),_),await E()},R=[...n].sort((_,re)=>{const ve=ma.indexOf(_.category),Ce=ma.indexOf(re.category);return ve!==Ce?ve-Ce:_.name.localeCompare(re.name)}),P=y?R.filter(_=>_.category===y):R;return F.jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center py-8",children:F.jsxs("div",{className:"w-full max-w-xl bg-white rounded-xl shadow-lg p-6 relative",children:[F.jsx("div",{className:"absolute top-4 right-4 z-10",children:C?F.jsxs("div",{className:"relative",children:[F.jsx("button",{onClick:()=>I(_=>!_),className:"flex items-center gap-2 focus:outline-none",title:C.displayName||C.email||"Profile",children:F.jsx("img",{src:C.photoURL||"",alt:"Profile",className:"w-8 h-8 rounded-full border border-gray-300 shadow"})}),V&&F.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-2 z-20",children:[F.jsx("div",{className:"px-4 py-2 text-gray-700 font-semibold border-b border-gray-100",children:C.displayName||C.email}),F.jsx("button",{onClick:U,className:"w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700",children:"Log out"}),F.jsx("button",{className:"w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700",disabled:!0,children:"Set Goals (coming soon)"})]})]}):F.jsx("button",{onClick:D,className:"bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition",children:"Sign in with Google"})}),F.jsx("h1",{className:"text-2xl font-bold mb-4 text-center",children:"💪 BICEP 💪"}),F.jsx("div",{className:"grid grid-cols-3 grid-rows-2 gap-0 mb-4 w-full max-w-xs mx-auto rounded overflow-hidden",children:ma.map(_=>F.jsx("button",{className:`flex items-center justify-center px-2 py-2 text-xs font-medium transition min-h-[40px] min-w-[90px] max-w-[120px] w-full h-full text-center break-words ${y===_?QP[_]:"bg-gray-100"}`,style:{border:"none",borderRadius:0},onClick:()=>S(y===_?null:_),children:_},_))}),i?F.jsx("div",{className:"text-center text-gray-400 mb-4",children:"Loading exercises..."}):F.jsx(F.Fragment,{children:F.jsx(KP,{categories:ma,exercises:P,onAdd:B,onUpdate:w,editingEntry:v,onCancelEdit:m,entries:t,onAddExercise:T,muscleGroups:f,user:C})}),o?F.jsx("div",{className:"text-center text-gray-400 mb-4",children:"Loading logs..."}):null]})})};cc.createRoot(document.getElementById("root")).render(F.jsx(lw.StrictMode,{children:F.jsx(YP,{})}));
