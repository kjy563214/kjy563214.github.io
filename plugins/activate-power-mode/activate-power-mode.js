var _typeof5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof5(t)},_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof4(t)},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof3(t)},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof2(t)};!function(t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"object"===("undefined"==typeof module?"undefined":_typeof(module))?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?exports.POWERMODE=t():(void 0).POWERMODE=t()}(function(){return r={},o.m=n=[function(t,e,r){"use strict";var i=document.createElement("canvas");i.width=window.innerWidth,i.height=window.innerHeight,i.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",function(){i.width=window.innerWidth,i.height=window.innerHeight}),document.body.appendChild(i);var d=i.getContext("2d"),f=[],l=0,a=!1;function o(t,e){return Math.random()*(e-t)+t}function u(t){if(p.colorful){var e=o(0,360);return"hsla("+o(e-10,e+10)+", 100%, "+o(50,80)+"%, 1)"}return window.getComputedStyle(t).color}function p(){for(var t,e,o=function(){var t=document.activeElement;if("TEXTAREA"===t.tagName||"INPUT"===t.tagName&&"text"===t.getAttribute("type")){var e=r(1)(t,t.selectionEnd),o=t.getBoundingClientRect();return{x:e.left+o.left,y:e.top+o.top,color:u(t)}}return(e=window.getSelection()).rangeCount?((e=(t=e.getRangeAt(0)).startContainer).nodeType===document.TEXT_NODE&&(e=e.parentNode),{x:(o=t.getBoundingClientRect()).left,y:o.top,color:u(e)}):{x:0,y:0,color:"transparent"}}(),n=5+Math.round(10*Math.random());n--;)f[l]={x:o.x,y:o.y,alpha:1,color:o.color,velocity:{x:2*Math.random()-1,y:2*Math.random()-3.5}},l=(l+1)%500;p.shake&&(t=(e=1+2*Math.random())*(.5<Math.random()?-1:1),e*=.5<Math.random()?-1:1,document.body.style.marginLeft=t+"px",document.body.style.marginTop=e+"px",setTimeout(function(){document.body.style.marginLeft="",document.body.style.marginTop=""},75)),a||requestAnimationFrame(y)}function y(){a=!0,d.clearRect(0,0,i.width,i.height);for(var t=!1,e=i.getBoundingClientRect(),o=0;o<f.length;++o){var n=f[o];n.alpha<=.1||(n.velocity.y+=.075,n.x+=n.velocity.x,n.y+=n.velocity.y,n.alpha*=.96,d.globalAlpha=n.alpha,d.fillStyle=n.color,d.fillRect(Math.round(n.x-1.5)-e.left,Math.round(n.y-1.5)-e.top,3,3),t=!0)}t?requestAnimationFrame(y):a=!1}p.shake=!0,p.colorful=!1,t.exports=p},function(t,e){function o(t,e,o){var n=o&&o.debug||!1;!n||(d=document.querySelector("#input-textarea-caret-position-mirror-div"))&&d.parentNode.removeChild(d),(o=document.createElement("div")).id="input-textarea-caret-position-mirror-div",document.body.appendChild(o);var r=o.style,i=window.getComputedStyle?getComputedStyle(t):t.currentStyle;r.whiteSpace="pre-wrap","INPUT"!==t.nodeName&&(r.wordWrap="break-word"),r.position="absolute",n||(r.visibility="hidden"),f.forEach(function(t){r[t]=i[t]}),l?t.scrollHeight>parseInt(i.height)&&(r.overflowY="scroll"):r.overflow="hidden",o.textContent=t.value.substring(0,e),"INPUT"===t.nodeName&&(o.textContent=o.textContent.replace(/\s/g," "));var d=document.createElement("span");return d.textContent=t.value.substring(e)||".",o.appendChild(d),e={top:d.offsetTop+parseInt(i.borderTopWidth),left:d.offsetLeft+parseInt(i.borderLeftWidth)},n?d.style.backgroundColor="#aaa":document.body.removeChild(o),e}var f=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],l=null!=window.mozInnerScreenX;void 0!==t&&void 0!==t.exports?t.exports=o:window.getCaretCoordinates=o}],o.c=r,o.p="",o(0);function o(t){if(r[t])return r[t].exports;var e=r[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,o),e.loaded=!0,e.exports}var n,r});