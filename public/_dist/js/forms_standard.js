/*!
 * 
 *  * Part of the Antares Project package.
 *  *
 *  * NOTICE OF LICENSE
 *  *
 *  * Licensed under the 3-clause BSD License.
 *  *
 *  * This source file is subject to the 3-clause BSD License that is
 *  * bundled with this package in the LICENSE file.
 *  *
 *  * @package    Global
 *  * @version    0.9.2
 *  * @author     Antares Team
 *  * @license    BSD License (3-clause)
 *  * @copyright  (c) 2017, Antares Project
 *  * @link       http://antaresproject.io
 *  * 
 * 
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 641);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	try {
		if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else if (typeof execScript !== "undefined") {
			execScript(src);
		} else {
			console.error("[Script Loader] EvalError: No eval function available");
		}
	} catch (error) {
		console.error("[Script Loader] ", error.message);
	}
}


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(642);


/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// EXTERNAL DEPS:
// var $ = require("script-loader!./../../../js/external/jquery.js");
// window.$ = $;
__webpack_require__(643); // css in package
__webpack_require__(645);
// require('script-loader!jquery-validation'); //no css
__webpack_require__(647); // css in package
__webpack_require__(648);
// require('script-loader!php-date-formatter'); //no css
__webpack_require__(649);
__webpack_require__(651);
__webpack_require__(653);
//CORE ANTARES
__webpack_require__(655);
__webpack_require__(657);
__webpack_require__(658);
//require('./../../../js/components/dropzone/dropzone.js');

// require("dialog-polyfill/dialog-polyfill.css");
// require("jquery-modal/jquery.modal.css");
// require('./../../js/external/modified/yii_forms.js');
// require("jquery-datetimepicker/jquery.datetimepicker.css");
// require("select2/dist/css/select2.css");
//wyjeabne by luaksh below - trzeba wywalic z forms

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(644))

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports = "/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */\n(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:\"true\"==a.attr(_indeterminate)||\"false\"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||\"toggle\"==d){if(!b)a[_callback](\"ifClicked\");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,\nv=b==n,s=u?_determinate:e?y:\"enabled\",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest(\"form\"),p='input[name=\"'+c.name+'\"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,\"force\")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find(\".\"+C).css(_cursor,\"default\");g[_add](B||l(a,b)||\"\");g.attr(\"role\")&&!u&&g.attr(\"aria-\"+(v?n:k),\"true\");\ng[_remove](F||l(a,s)||\"\")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:\"enabled\",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||\"force\"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find(\".\"+C).css(_cursor,\"pointer\");g[_remove](r||l(a,b)||\"\");g.attr(\"role\")&&!f&&g.attr(\"aria-\"+(m?n:k),\"false\");g[_add](q||l(a,s)||\"\")}function E(a,b){if(a.data(m)){a.parent().html(a.attr(\"style\",a.data(m).s||\"\"));if(b)a[_callback](b);a.off(\".i\").unwrap();\nf(_label+'[for=\"'+a[0].id+'\"]').add(a.closest(_label)).off(\".i\")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?\"\":\"Class\")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback](\"ifToggled\");a[_callback](\"ifChanged\")[_callback](\"if\"+t(f))}}var m=\"iCheck\",C=m+\"-helper\",r=\"radio\",k=\"checked\",y=\"un\"+k,n=\"disabled\";_determinate=\"determinate\";_indeterminate=\"in\"+_determinate;_update=\"update\";_type=\"type\";_click=\"click\";_touch=\"touchbegin.i touchend.i\";\n_add=\"addClass\";_remove=\"removeClass\";_callback=\"trigger\";_label=\"label\";_cursor=\"cursor\";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type=\"checkbox\"], input[type=\"'+r+'\"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=\nf(this);\"destroy\"==a?E(c,\"ifDestroyed\"):A(c,!0,a);f.isFunction(b)&&b()});if(\"object\"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||\"hover\",s=e.focusClass||\"focus\",t=e.activeClass||\"active\",B=!!e.labelHover,w=e.labelHoverClass||\"hover\",p=(\"\"+e.increaseArea).replace(\"%\",\"\")|0;if(\"checkbox\"==l||l==r)d='input[type=\"'+l+'\"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,\nb=c.id,g=-p+\"%\",d=100+2*p+\"%\",d={position:\"absolute\",top:g,left:g,display:\"block\",width:d,height:d,margin:0,padding:0,background:\"#fff\",border:0,opacity:0},g=_mobile?{position:\"absolute\",visibility:\"hidden\"}:p?d:{position:\"absolute\",opacity:0},l=\"checkbox\"==c[_type]?e.checkboxClass||\"icheckbox\":e.radioClass||\"i\"+r,z=f(_label+'[for=\"'+b+'\"]').add(a.closest(_label)),u=!!e.aria,y=m+\"-\"+Math.random().toString(36).substr(2,6),h='<div class=\"'+l+'\" '+(u?'role=\"'+c[_type]+'\" ':\"\");u&&z.each(function(){h+=\n'aria-labelledby=\"';this.id?h+=this.id:(this.id=y,h+=y);h+='\"'});h=a.wrap(h+\"/>\")[_callback](\"ifCreated\").parent().append(e.insert);d=f('<ins class=\"'+C+'\"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr(\"style\")}).css(g);e.inheritClass&&h[_add](c.className||\"\");e.inheritID&&b&&h.attr(\"id\",m+\"-\"+b);\"static\"==h.css(\"position\")&&h.css(\"position\",\"relative\");A(a,!0,_update);if(z.length)z.on(_click+\".i mouseover.i mouseout.i \"+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is(\"a\"))return;\nA(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+\".i focus.i blur.i keyup.i keydown.i keypress.i\",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if(\"keydown\"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if(\"keyup\"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h[\"blur\"==d?_remove:_add](s)});d.on(_click+\" mousedown mouseup mouseover mouseout \"+_touch,function(b){var d=\nb[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+\" \"+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);\n"

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(646))

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = "/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){\"function\"==typeof define&&define.amd?define([\"jquery\"],a):a(\"object\"==typeof exports?require(\"jquery\"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split(\"/\"),o=s.map,p=o&&o[\"*\"]||{};if(a&&\".\"===a.charAt(0))if(b){for(a=a.split(\"/\"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,\"\")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],\".\"===m)a.splice(k,1),k-=1;else if(\"..\"===m){if(1===k&&(\"..\"===a[2]||\"..\"===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join(\"/\")}else 0===a.indexOf(\"./\")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split(\"/\"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join(\"/\"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join(\"/\")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join(\"/\"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return\"string\"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error(\"No \"+a);return q[a]}function k(a){var b,c=a?a.indexOf(\"!\"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+\"!\"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return\"undefined\"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:\"\",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,\"undefined\"===v||\"function\"===v){for(c=!c.length&&d.length?[\"require\",\"exports\",\"module\"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,\"require\"===k)u[n]=p.require(a);else if(\"exports\"===k)u[n]=p.exports(a),s=!0;else if(\"module\"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+\" missing \"+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if(\"string\"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},\"function\"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if(\"string\"!=typeof a)throw new Error(\"See almond README: incorrect module build, no module name\");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define(\"almond\",function(){}),b.define(\"jquery\",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error(\"Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.\"),b}),b.define(\"select2/utils\",[\"jquery\"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];\"function\"==typeof e&&\"constructor\"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),\"*\"in this.listeners&&this.invoke(this.listeners[\"*\"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b=\"\",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split(\"-\"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||\"hidden\"!==f&&\"visible\"!==f?\"scroll\"===e||\"scroll\"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={\"\\\\\":\"&#92;\",\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\",\"'\":\"&#39;\",\"/\":\"&#47;\"};return\"string\"!=typeof a?a:String(a).replace(/[&<>\"'\\/\\\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if(\"1.7\"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define(\"select2/results\",[\"jquery\",\"./utils\"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class=\"select2-results__options\" role=\"tree\"></ul>');return this.options.get(\"multiple\")&&b.attr(\"aria-multiselectable\",\"true\"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get(\"escapeMarkup\");this.clear(),this.hideLoading();var d=a('<li role=\"treeitem\" aria-live=\"assertive\" class=\"select2-results__option\"></li>'),e=this.options.get(\"translations\").get(b.message);d.append(c(e(b.args))),d[0].className+=\" select2-results__message\",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(\".select2-results__message\").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger(\"results:message\",{message:\"noResults\"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(\".select2-results\");c.append(a)},c.prototype.sort=function(a){var b=this.options.get(\"sorter\");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(\".select2-results__option[aria-selected]\"),b=a.filter(\"[aria-selected=true]\");b.length>0?b.first().trigger(\"mouseenter\"):a.first().trigger(\"mouseenter\"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(\".select2-results__option[aria-selected]\");e.each(function(){var b=a(this),c=a.data(this,\"data\"),e=\"\"+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr(\"aria-selected\",\"true\"):b.attr(\"aria-selected\",\"false\")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get(\"translations\").get(\"searching\"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=\" loading-results\",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(\".loading-results\").remove()},c.prototype.option=function(b){var c=document.createElement(\"li\");c.className=\"select2-results__option\";var d={role:\"treeitem\",\"aria-selected\":\"false\"};b.disabled&&(delete d[\"aria-selected\"],d[\"aria-disabled\"]=\"true\"),null==b.id&&delete d[\"aria-selected\"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role=\"group\",d[\"aria-label\"]=b.text,delete d[\"aria-selected\"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement(\"strong\");h.className=\"select2-results__group\";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a(\"<ul></ul>\",{\"class\":\"select2-results__options select2-results__options--nested\"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,\"data\",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+\"-results\";this.$results.attr(\"id\",e),b.on(\"results:all\",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on(\"results:append\",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on(\"query\",function(a){d.hideMessages(),d.showLoading(a)}),b.on(\"select\",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on(\"unselect\",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on(\"open\",function(){d.$results.attr(\"aria-expanded\",\"true\"),d.$results.attr(\"aria-hidden\",\"false\"),d.setClasses(),d.ensureHighlightVisible()}),b.on(\"close\",function(){d.$results.attr(\"aria-expanded\",\"false\"),d.$results.attr(\"aria-hidden\",\"true\"),d.$results.removeAttr(\"aria-activedescendant\")}),b.on(\"results:toggle\",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger(\"mouseup\")}),b.on(\"results:select\",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data(\"data\");\"true\"==a.attr(\"aria-selected\")?d.trigger(\"close\",{}):d.trigger(\"select\",{data:b})}}),b.on(\"results:previous\",function(){var a=d.getHighlightedResults(),b=d.$results.find(\"[aria-selected]\"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger(\"mouseenter\");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on(\"results:next\",function(){var a=d.getHighlightedResults(),b=d.$results.find(\"[aria-selected]\"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger(\"mouseenter\");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on(\"results:focus\",function(a){a.element.addClass(\"select2-results__option--highlighted\")}),b.on(\"results:message\",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on(\"mousewheel\",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on(\"mouseup\",\".select2-results__option[aria-selected]\",function(b){var c=a(this),e=c.data(\"data\");return\"true\"===c.attr(\"aria-selected\")?void(d.options.get(\"multiple\")?d.trigger(\"unselect\",{originalEvent:b,data:e}):d.trigger(\"close\",{})):void d.trigger(\"select\",{originalEvent:b,data:e})}),this.$results.on(\"mouseenter\",\".select2-results__option[aria-selected]\",function(b){var c=a(this).data(\"data\");d.getHighlightedResults().removeClass(\"select2-results__option--highlighted\"),d.trigger(\"results:focus\",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(\".select2-results__option--highlighted\");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find(\"[aria-selected]\"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get(\"templateResult\"),e=this.options.get(\"escapeMarkup\"),f=d(b,c);null==f?c.style.display=\"none\":\"string\"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define(\"select2/keys\",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define(\"select2/selection/base\",[\"jquery\",\"../utils\",\"../keys\"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class=\"select2-selection\" role=\"combobox\"  aria-haspopup=\"true\" aria-expanded=\"false\"></span>');return this._tabindex=0,null!=this.$element.data(\"old-tabindex\")?this._tabindex=this.$element.data(\"old-tabindex\"):null!=this.$element.attr(\"tabindex\")&&(this._tabindex=this.$element.attr(\"tabindex\")),b.attr(\"title\",this.$element.attr(\"title\")),b.attr(\"tabindex\",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+\"-container\",a.id+\"-results\");this.container=a,this.$selection.on(\"focus\",function(a){d.trigger(\"focus\",a)}),this.$selection.on(\"blur\",function(a){d._handleBlur(a)}),this.$selection.on(\"keydown\",function(a){d.trigger(\"keypress\",a),a.which===c.SPACE&&a.preventDefault()}),a.on(\"results:focus\",function(a){d.$selection.attr(\"aria-activedescendant\",a.data._resultId)}),a.on(\"selection:update\",function(a){d.update(a.data)}),a.on(\"open\",function(){d.$selection.attr(\"aria-expanded\",\"true\"),d.$selection.attr(\"aria-owns\",e),d._attachCloseHandler(a)}),a.on(\"close\",function(){d.$selection.attr(\"aria-expanded\",\"false\"),d.$selection.removeAttr(\"aria-activedescendant\"),d.$selection.removeAttr(\"aria-owns\"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on(\"enable\",function(){d.$selection.attr(\"tabindex\",d._tabindex)}),a.on(\"disable\",function(){d.$selection.attr(\"tabindex\",\"-1\")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger(\"blur\",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on(\"mousedown.select2.\"+b.id,function(b){var c=a(b.target),d=c.closest(\".select2\"),e=a(\".select2.select2-container--open\");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data(\"element\");c.select2(\"close\")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off(\"mousedown.select2.\"+b.id)},d.prototype.position=function(a,b){var c=b.find(\".selection\");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error(\"The `update` method must be defined in child classes.\")},d}),b.define(\"select2/selection/single\",[\"jquery\",\"./base\",\"../utils\",\"../keys\"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass(\"select2-selection--single\"),a.html('<span class=\"select2-selection__rendered\"></span><span class=\"select2-selection__arrow\" role=\"presentation\"><b role=\"presentation\"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+\"-container\";this.$selection.find(\".select2-selection__rendered\").attr(\"id\",d),this.$selection.attr(\"aria-labelledby\",d),this.$selection.on(\"mousedown\",function(a){1===a.which&&c.trigger(\"toggle\",{originalEvent:a})}),this.$selection.on(\"focus\",function(a){}),this.$selection.on(\"blur\",function(a){}),a.on(\"focus\",function(b){a.isOpen()||c.$selection.focus()}),a.on(\"selection:update\",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(\".select2-selection__rendered\").empty()},e.prototype.display=function(a,b){var c=this.options.get(\"templateSelection\"),d=this.options.get(\"escapeMarkup\");return d(c(a,b))},e.prototype.selectionContainer=function(){return a(\"<span></span>\")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(\".select2-selection__rendered\"),d=this.display(b,c);c.empty().append(d),c.prop(\"title\",b.title||b.text)},e}),b.define(\"select2/selection/multiple\",[\"jquery\",\"./base\",\"../utils\"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass(\"select2-selection--multiple\"),a.html('<ul class=\"select2-selection__rendered\"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on(\"click\",function(a){e.trigger(\"toggle\",{originalEvent:a})}),this.$selection.on(\"click\",\".select2-selection__choice__remove\",function(b){if(!e.options.get(\"disabled\")){var c=a(this),d=c.parent(),f=d.data(\"data\");e.trigger(\"unselect\",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(\".select2-selection__rendered\").empty()},d.prototype.display=function(a,b){var c=this.options.get(\"templateSelection\"),d=this.options.get(\"escapeMarkup\");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class=\"select2-selection__choice\"><span class=\"select2-selection__choice__remove\" role=\"presentation\">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop(\"title\",e.title||e.text),f.data(\"data\",e),b.push(f)}var h=this.$selection.find(\".select2-selection__rendered\");c.appendMany(h,b)}},d}),b.define(\"select2/selection/placeholder\",[\"../utils\"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get(\"placeholder\")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return\"string\"==typeof b&&(b={id:\"\",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass(\"select2-selection__placeholder\").removeClass(\"select2-selection__choice\"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(\".select2-selection__rendered\").append(e)},b}),b.define(\"select2/selection/allowClear\",[\"jquery\",\"../keys\"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get(\"debug\")&&window.console&&console.error&&console.error(\"Select2: The `allowClear` option should be used in combination with the `placeholder` option.\"),this.$selection.on(\"mousedown\",\".select2-selection__clear\",function(a){d._handleClear(a)}),b.on(\"keypress\",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get(\"disabled\")){var c=this.$selection.find(\".select2-selection__clear\");if(0!==c.length){b.stopPropagation();for(var d=c.data(\"data\"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger(\"unselect\",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger(\"change\"),this.trigger(\"toggle\",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(\".select2-selection__placeholder\").length>0||0===c.length)){var d=a('<span class=\"select2-selection__clear\">&times;</span>');d.data(\"data\",c),this.$selection.find(\".select2-selection__rendered\").prepend(d)}},c}),b.define(\"select2/selection/search\",[\"jquery\",\"../utils\",\"../keys\"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class=\"select2-search select2-search--inline\"><input class=\"select2-search__field\" type=\"search\" tabindex=\"-1\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" role=\"textbox\" aria-autocomplete=\"list\" /></li>');this.$searchContainer=c,this.$search=c.find(\"input\");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on(\"open\",function(){e.$search.trigger(\"focus\")}),b.on(\"close\",function(){e.$search.val(\"\"),e.$search.removeAttr(\"aria-activedescendant\"),e.$search.trigger(\"focus\")}),b.on(\"enable\",function(){e.$search.prop(\"disabled\",!1),e._transferTabIndex()}),b.on(\"disable\",function(){e.$search.prop(\"disabled\",!0)}),b.on(\"focus\",function(a){e.$search.trigger(\"focus\")}),b.on(\"results:focus\",function(a){e.$search.attr(\"aria-activedescendant\",a.id)}),this.$selection.on(\"focusin\",\".select2-search--inline\",function(a){e.trigger(\"focus\",a)}),this.$selection.on(\"focusout\",\".select2-search--inline\",function(a){e._handleBlur(a)}),this.$selection.on(\"keydown\",\".select2-search--inline\",function(a){a.stopPropagation(),e.trigger(\"keypress\",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&\"\"===e.$search.val()){var d=e.$searchContainer.prev(\".select2-selection__choice\");if(d.length>0){var f=d.data(\"data\");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on(\"input.searchcheck\",\".select2-search--inline\",function(a){return g?void e.$selection.off(\"input.search input.searchcheck\"):void e.$selection.off(\"keyup.search\")}),this.$selection.on(\"keyup.search input.search\",\".select2-search--inline\",function(a){if(g&&\"input\"===a.type)return void e.$selection.off(\"input.search input.searchcheck\");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr(\"tabindex\",this.$selection.attr(\"tabindex\")),this.$selection.attr(\"tabindex\",\"-1\")},d.prototype.createPlaceholder=function(a,b){this.$search.attr(\"placeholder\",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr(\"placeholder\",\"\"),a.call(this,b),this.$selection.find(\".select2-selection__rendered\").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger(\"query\",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger(\"unselect\",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css(\"width\",\"25px\");var a=\"\";if(\"\"!==this.$search.attr(\"placeholder\"))a=this.$selection.find(\".select2-selection__rendered\").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+\"em\"}this.$search.css(\"width\",a)},d}),b.define(\"select2/selection/eventRelay\",[\"jquery\"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=[\"open\",\"opening\",\"close\",\"closing\",\"select\",\"selecting\",\"unselect\",\"unselecting\"],g=[\"opening\",\"closing\",\"selecting\",\"unselecting\"];b.call(this,c,d),c.on(\"*\",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event(\"select2:\"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define(\"select2/translation\",[\"jquery\",\"require\"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define(\"select2/diacritics\",[],function(){var a={\"Ⓐ\":\"A\",\"Ａ\":\"A\",\"À\":\"A\",\"Á\":\"A\",\"Â\":\"A\",\"Ầ\":\"A\",\"Ấ\":\"A\",\"Ẫ\":\"A\",\"Ẩ\":\"A\",\"Ã\":\"A\",\"Ā\":\"A\",\"Ă\":\"A\",\"Ằ\":\"A\",\"Ắ\":\"A\",\"Ẵ\":\"A\",\"Ẳ\":\"A\",\"Ȧ\":\"A\",\"Ǡ\":\"A\",\"Ä\":\"A\",\"Ǟ\":\"A\",\"Ả\":\"A\",\"Å\":\"A\",\"Ǻ\":\"A\",\"Ǎ\":\"A\",\"Ȁ\":\"A\",\"Ȃ\":\"A\",\"Ạ\":\"A\",\"Ậ\":\"A\",\"Ặ\":\"A\",\"Ḁ\":\"A\",\"Ą\":\"A\",\"Ⱥ\":\"A\",\"Ɐ\":\"A\",\"Ꜳ\":\"AA\",\"Æ\":\"AE\",\"Ǽ\":\"AE\",\"Ǣ\":\"AE\",\"Ꜵ\":\"AO\",\"Ꜷ\":\"AU\",\"Ꜹ\":\"AV\",\"Ꜻ\":\"AV\",\"Ꜽ\":\"AY\",\"Ⓑ\":\"B\",\"Ｂ\":\"B\",\"Ḃ\":\"B\",\"Ḅ\":\"B\",\"Ḇ\":\"B\",\"Ƀ\":\"B\",\"Ƃ\":\"B\",\"Ɓ\":\"B\",\"Ⓒ\":\"C\",\"Ｃ\":\"C\",\"Ć\":\"C\",\"Ĉ\":\"C\",\"Ċ\":\"C\",\"Č\":\"C\",\"Ç\":\"C\",\"Ḉ\":\"C\",\"Ƈ\":\"C\",\"Ȼ\":\"C\",\"Ꜿ\":\"C\",\"Ⓓ\":\"D\",\"Ｄ\":\"D\",\"Ḋ\":\"D\",\"Ď\":\"D\",\"Ḍ\":\"D\",\"Ḑ\":\"D\",\"Ḓ\":\"D\",\"Ḏ\":\"D\",\"Đ\":\"D\",\"Ƌ\":\"D\",\"Ɗ\":\"D\",\"Ɖ\":\"D\",\"Ꝺ\":\"D\",\"Ǳ\":\"DZ\",\"Ǆ\":\"DZ\",\"ǲ\":\"Dz\",\"ǅ\":\"Dz\",\"Ⓔ\":\"E\",\"Ｅ\":\"E\",\"È\":\"E\",\"É\":\"E\",\"Ê\":\"E\",\"Ề\":\"E\",\"Ế\":\"E\",\"Ễ\":\"E\",\"Ể\":\"E\",\"Ẽ\":\"E\",\"Ē\":\"E\",\"Ḕ\":\"E\",\"Ḗ\":\"E\",\"Ĕ\":\"E\",\"Ė\":\"E\",\"Ë\":\"E\",\"Ẻ\":\"E\",\"Ě\":\"E\",\"Ȅ\":\"E\",\"Ȇ\":\"E\",\"Ẹ\":\"E\",\"Ệ\":\"E\",\"Ȩ\":\"E\",\"Ḝ\":\"E\",\"Ę\":\"E\",\"Ḙ\":\"E\",\"Ḛ\":\"E\",\"Ɛ\":\"E\",\"Ǝ\":\"E\",\"Ⓕ\":\"F\",\"Ｆ\":\"F\",\"Ḟ\":\"F\",\"Ƒ\":\"F\",\"Ꝼ\":\"F\",\"Ⓖ\":\"G\",\"Ｇ\":\"G\",\"Ǵ\":\"G\",\"Ĝ\":\"G\",\"Ḡ\":\"G\",\"Ğ\":\"G\",\"Ġ\":\"G\",\"Ǧ\":\"G\",\"Ģ\":\"G\",\"Ǥ\":\"G\",\"Ɠ\":\"G\",\"Ꞡ\":\"G\",\"Ᵹ\":\"G\",\"Ꝿ\":\"G\",\"Ⓗ\":\"H\",\"Ｈ\":\"H\",\"Ĥ\":\"H\",\"Ḣ\":\"H\",\"Ḧ\":\"H\",\"Ȟ\":\"H\",\"Ḥ\":\"H\",\"Ḩ\":\"H\",\"Ḫ\":\"H\",\"Ħ\":\"H\",\"Ⱨ\":\"H\",\"Ⱶ\":\"H\",\"Ɥ\":\"H\",\"Ⓘ\":\"I\",\"Ｉ\":\"I\",\"Ì\":\"I\",\"Í\":\"I\",\"Î\":\"I\",\"Ĩ\":\"I\",\"Ī\":\"I\",\"Ĭ\":\"I\",\"İ\":\"I\",\"Ï\":\"I\",\"Ḯ\":\"I\",\"Ỉ\":\"I\",\"Ǐ\":\"I\",\"Ȉ\":\"I\",\"Ȋ\":\"I\",\"Ị\":\"I\",\"Į\":\"I\",\"Ḭ\":\"I\",\"Ɨ\":\"I\",\"Ⓙ\":\"J\",\"Ｊ\":\"J\",\"Ĵ\":\"J\",\"Ɉ\":\"J\",\"Ⓚ\":\"K\",\"Ｋ\":\"K\",\"Ḱ\":\"K\",\"Ǩ\":\"K\",\"Ḳ\":\"K\",\"Ķ\":\"K\",\"Ḵ\":\"K\",\"Ƙ\":\"K\",\"Ⱪ\":\"K\",\"Ꝁ\":\"K\",\"Ꝃ\":\"K\",\"Ꝅ\":\"K\",\"Ꞣ\":\"K\",\"Ⓛ\":\"L\",\"Ｌ\":\"L\",\"Ŀ\":\"L\",\"Ĺ\":\"L\",\"Ľ\":\"L\",\"Ḷ\":\"L\",\"Ḹ\":\"L\",\"Ļ\":\"L\",\"Ḽ\":\"L\",\"Ḻ\":\"L\",\"Ł\":\"L\",\"Ƚ\":\"L\",\"Ɫ\":\"L\",\"Ⱡ\":\"L\",\"Ꝉ\":\"L\",\"Ꝇ\":\"L\",\"Ꞁ\":\"L\",\"Ǉ\":\"LJ\",\"ǈ\":\"Lj\",\"Ⓜ\":\"M\",\"Ｍ\":\"M\",\"Ḿ\":\"M\",\"Ṁ\":\"M\",\"Ṃ\":\"M\",\"Ɱ\":\"M\",\"Ɯ\":\"M\",\"Ⓝ\":\"N\",\"Ｎ\":\"N\",\"Ǹ\":\"N\",\"Ń\":\"N\",\"Ñ\":\"N\",\"Ṅ\":\"N\",\"Ň\":\"N\",\"Ṇ\":\"N\",\"Ņ\":\"N\",\"Ṋ\":\"N\",\"Ṉ\":\"N\",\"Ƞ\":\"N\",\"Ɲ\":\"N\",\"Ꞑ\":\"N\",\"Ꞥ\":\"N\",\"Ǌ\":\"NJ\",\"ǋ\":\"Nj\",\"Ⓞ\":\"O\",\"Ｏ\":\"O\",\"Ò\":\"O\",\"Ó\":\"O\",\"Ô\":\"O\",\"Ồ\":\"O\",\"Ố\":\"O\",\"Ỗ\":\"O\",\"Ổ\":\"O\",\"Õ\":\"O\",\"Ṍ\":\"O\",\"Ȭ\":\"O\",\"Ṏ\":\"O\",\"Ō\":\"O\",\"Ṑ\":\"O\",\"Ṓ\":\"O\",\"Ŏ\":\"O\",\"Ȯ\":\"O\",\"Ȱ\":\"O\",\"Ö\":\"O\",\"Ȫ\":\"O\",\"Ỏ\":\"O\",\"Ő\":\"O\",\"Ǒ\":\"O\",\"Ȍ\":\"O\",\"Ȏ\":\"O\",\"Ơ\":\"O\",\"Ờ\":\"O\",\"Ớ\":\"O\",\"Ỡ\":\"O\",\"Ở\":\"O\",\"Ợ\":\"O\",\"Ọ\":\"O\",\"Ộ\":\"O\",\"Ǫ\":\"O\",\"Ǭ\":\"O\",\"Ø\":\"O\",\"Ǿ\":\"O\",\"Ɔ\":\"O\",\"Ɵ\":\"O\",\"Ꝋ\":\"O\",\"Ꝍ\":\"O\",\"Ƣ\":\"OI\",\"Ꝏ\":\"OO\",\"Ȣ\":\"OU\",\"Ⓟ\":\"P\",\"Ｐ\":\"P\",\"Ṕ\":\"P\",\"Ṗ\":\"P\",\"Ƥ\":\"P\",\"Ᵽ\":\"P\",\"Ꝑ\":\"P\",\"Ꝓ\":\"P\",\"Ꝕ\":\"P\",\"Ⓠ\":\"Q\",\"Ｑ\":\"Q\",\"Ꝗ\":\"Q\",\"Ꝙ\":\"Q\",\"Ɋ\":\"Q\",\"Ⓡ\":\"R\",\"Ｒ\":\"R\",\"Ŕ\":\"R\",\"Ṙ\":\"R\",\"Ř\":\"R\",\"Ȑ\":\"R\",\"Ȓ\":\"R\",\"Ṛ\":\"R\",\"Ṝ\":\"R\",\"Ŗ\":\"R\",\"Ṟ\":\"R\",\"Ɍ\":\"R\",\"Ɽ\":\"R\",\"Ꝛ\":\"R\",\"Ꞧ\":\"R\",\"Ꞃ\":\"R\",\"Ⓢ\":\"S\",\"Ｓ\":\"S\",\"ẞ\":\"S\",\"Ś\":\"S\",\"Ṥ\":\"S\",\"Ŝ\":\"S\",\"Ṡ\":\"S\",\"Š\":\"S\",\"Ṧ\":\"S\",\"Ṣ\":\"S\",\"Ṩ\":\"S\",\"Ș\":\"S\",\"Ş\":\"S\",\"Ȿ\":\"S\",\"Ꞩ\":\"S\",\"Ꞅ\":\"S\",\"Ⓣ\":\"T\",\"Ｔ\":\"T\",\"Ṫ\":\"T\",\"Ť\":\"T\",\"Ṭ\":\"T\",\"Ț\":\"T\",\"Ţ\":\"T\",\"Ṱ\":\"T\",\"Ṯ\":\"T\",\"Ŧ\":\"T\",\"Ƭ\":\"T\",\"Ʈ\":\"T\",\"Ⱦ\":\"T\",\"Ꞇ\":\"T\",\"Ꜩ\":\"TZ\",\"Ⓤ\":\"U\",\"Ｕ\":\"U\",\"Ù\":\"U\",\"Ú\":\"U\",\"Û\":\"U\",\"Ũ\":\"U\",\"Ṹ\":\"U\",\"Ū\":\"U\",\"Ṻ\":\"U\",\"Ŭ\":\"U\",\"Ü\":\"U\",\"Ǜ\":\"U\",\"Ǘ\":\"U\",\"Ǖ\":\"U\",\"Ǚ\":\"U\",\"Ủ\":\"U\",\"Ů\":\"U\",\"Ű\":\"U\",\"Ǔ\":\"U\",\"Ȕ\":\"U\",\"Ȗ\":\"U\",\"Ư\":\"U\",\"Ừ\":\"U\",\"Ứ\":\"U\",\"Ữ\":\"U\",\"Ử\":\"U\",\"Ự\":\"U\",\"Ụ\":\"U\",\"Ṳ\":\"U\",\"Ų\":\"U\",\"Ṷ\":\"U\",\"Ṵ\":\"U\",\"Ʉ\":\"U\",\"Ⓥ\":\"V\",\"Ｖ\":\"V\",\"Ṽ\":\"V\",\"Ṿ\":\"V\",\"Ʋ\":\"V\",\"Ꝟ\":\"V\",\"Ʌ\":\"V\",\"Ꝡ\":\"VY\",\"Ⓦ\":\"W\",\"Ｗ\":\"W\",\"Ẁ\":\"W\",\"Ẃ\":\"W\",\"Ŵ\":\"W\",\"Ẇ\":\"W\",\"Ẅ\":\"W\",\"Ẉ\":\"W\",\"Ⱳ\":\"W\",\"Ⓧ\":\"X\",\"Ｘ\":\"X\",\"Ẋ\":\"X\",\"Ẍ\":\"X\",\"Ⓨ\":\"Y\",\"Ｙ\":\"Y\",\"Ỳ\":\"Y\",\"Ý\":\"Y\",\"Ŷ\":\"Y\",\"Ỹ\":\"Y\",\"Ȳ\":\"Y\",\"Ẏ\":\"Y\",\"Ÿ\":\"Y\",\"Ỷ\":\"Y\",\"Ỵ\":\"Y\",\"Ƴ\":\"Y\",\"Ɏ\":\"Y\",\"Ỿ\":\"Y\",\"Ⓩ\":\"Z\",\"Ｚ\":\"Z\",\"Ź\":\"Z\",\"Ẑ\":\"Z\",\"Ż\":\"Z\",\"Ž\":\"Z\",\"Ẓ\":\"Z\",\"Ẕ\":\"Z\",\"Ƶ\":\"Z\",\"Ȥ\":\"Z\",\"Ɀ\":\"Z\",\"Ⱬ\":\"Z\",\"Ꝣ\":\"Z\",\"ⓐ\":\"a\",\"ａ\":\"a\",\"ẚ\":\"a\",\"à\":\"a\",\"á\":\"a\",\"â\":\"a\",\"ầ\":\"a\",\"ấ\":\"a\",\"ẫ\":\"a\",\"ẩ\":\"a\",\"ã\":\"a\",\"ā\":\"a\",\"ă\":\"a\",\"ằ\":\"a\",\"ắ\":\"a\",\"ẵ\":\"a\",\"ẳ\":\"a\",\"ȧ\":\"a\",\"ǡ\":\"a\",\"ä\":\"a\",\"ǟ\":\"a\",\"ả\":\"a\",\"å\":\"a\",\"ǻ\":\"a\",\"ǎ\":\"a\",\"ȁ\":\"a\",\"ȃ\":\"a\",\"ạ\":\"a\",\"ậ\":\"a\",\"ặ\":\"a\",\"ḁ\":\"a\",\"ą\":\"a\",\"ⱥ\":\"a\",\"ɐ\":\"a\",\"ꜳ\":\"aa\",\"æ\":\"ae\",\"ǽ\":\"ae\",\"ǣ\":\"ae\",\"ꜵ\":\"ao\",\"ꜷ\":\"au\",\"ꜹ\":\"av\",\"ꜻ\":\"av\",\"ꜽ\":\"ay\",\"ⓑ\":\"b\",\"ｂ\":\"b\",\"ḃ\":\"b\",\"ḅ\":\"b\",\"ḇ\":\"b\",\"ƀ\":\"b\",\"ƃ\":\"b\",\"ɓ\":\"b\",\"ⓒ\":\"c\",\"ｃ\":\"c\",\"ć\":\"c\",\"ĉ\":\"c\",\"ċ\":\"c\",\"č\":\"c\",\"ç\":\"c\",\"ḉ\":\"c\",\"ƈ\":\"c\",\"ȼ\":\"c\",\"ꜿ\":\"c\",\"ↄ\":\"c\",\"ⓓ\":\"d\",\"ｄ\":\"d\",\"ḋ\":\"d\",\"ď\":\"d\",\"ḍ\":\"d\",\"ḑ\":\"d\",\"ḓ\":\"d\",\"ḏ\":\"d\",\"đ\":\"d\",\"ƌ\":\"d\",\"ɖ\":\"d\",\"ɗ\":\"d\",\"ꝺ\":\"d\",\"ǳ\":\"dz\",\"ǆ\":\"dz\",\"ⓔ\":\"e\",\"ｅ\":\"e\",\"è\":\"e\",\"é\":\"e\",\"ê\":\"e\",\"ề\":\"e\",\"ế\":\"e\",\"ễ\":\"e\",\"ể\":\"e\",\"ẽ\":\"e\",\"ē\":\"e\",\"ḕ\":\"e\",\"ḗ\":\"e\",\"ĕ\":\"e\",\"ė\":\"e\",\"ë\":\"e\",\"ẻ\":\"e\",\"ě\":\"e\",\"ȅ\":\"e\",\"ȇ\":\"e\",\"ẹ\":\"e\",\"ệ\":\"e\",\"ȩ\":\"e\",\"ḝ\":\"e\",\"ę\":\"e\",\"ḙ\":\"e\",\"ḛ\":\"e\",\"ɇ\":\"e\",\"ɛ\":\"e\",\"ǝ\":\"e\",\"ⓕ\":\"f\",\"ｆ\":\"f\",\"ḟ\":\"f\",\"ƒ\":\"f\",\"ꝼ\":\"f\",\"ⓖ\":\"g\",\"ｇ\":\"g\",\"ǵ\":\"g\",\"ĝ\":\"g\",\"ḡ\":\"g\",\"ğ\":\"g\",\"ġ\":\"g\",\"ǧ\":\"g\",\"ģ\":\"g\",\"ǥ\":\"g\",\"ɠ\":\"g\",\"ꞡ\":\"g\",\"ᵹ\":\"g\",\"ꝿ\":\"g\",\"ⓗ\":\"h\",\"ｈ\":\"h\",\"ĥ\":\"h\",\"ḣ\":\"h\",\"ḧ\":\"h\",\"ȟ\":\"h\",\"ḥ\":\"h\",\"ḩ\":\"h\",\"ḫ\":\"h\",\"ẖ\":\"h\",\"ħ\":\"h\",\"ⱨ\":\"h\",\"ⱶ\":\"h\",\"ɥ\":\"h\",\"ƕ\":\"hv\",\"ⓘ\":\"i\",\"ｉ\":\"i\",\"ì\":\"i\",\"í\":\"i\",\"î\":\"i\",\"ĩ\":\"i\",\"ī\":\"i\",\"ĭ\":\"i\",\"ï\":\"i\",\"ḯ\":\"i\",\"ỉ\":\"i\",\"ǐ\":\"i\",\"ȉ\":\"i\",\"ȋ\":\"i\",\"ị\":\"i\",\"į\":\"i\",\"ḭ\":\"i\",\"ɨ\":\"i\",\"ı\":\"i\",\"ⓙ\":\"j\",\"ｊ\":\"j\",\"ĵ\":\"j\",\"ǰ\":\"j\",\"ɉ\":\"j\",\"ⓚ\":\"k\",\"ｋ\":\"k\",\"ḱ\":\"k\",\"ǩ\":\"k\",\"ḳ\":\"k\",\"ķ\":\"k\",\"ḵ\":\"k\",\"ƙ\":\"k\",\"ⱪ\":\"k\",\"ꝁ\":\"k\",\"ꝃ\":\"k\",\"ꝅ\":\"k\",\"ꞣ\":\"k\",\"ⓛ\":\"l\",\"ｌ\":\"l\",\"ŀ\":\"l\",\"ĺ\":\"l\",\"ľ\":\"l\",\"ḷ\":\"l\",\"ḹ\":\"l\",\"ļ\":\"l\",\"ḽ\":\"l\",\"ḻ\":\"l\",\"ſ\":\"l\",\"ł\":\"l\",\"ƚ\":\"l\",\"ɫ\":\"l\",\"ⱡ\":\"l\",\"ꝉ\":\"l\",\"ꞁ\":\"l\",\"ꝇ\":\"l\",\"ǉ\":\"lj\",\"ⓜ\":\"m\",\"ｍ\":\"m\",\"ḿ\":\"m\",\"ṁ\":\"m\",\"ṃ\":\"m\",\"ɱ\":\"m\",\"ɯ\":\"m\",\"ⓝ\":\"n\",\"ｎ\":\"n\",\"ǹ\":\"n\",\"ń\":\"n\",\"ñ\":\"n\",\"ṅ\":\"n\",\"ň\":\"n\",\"ṇ\":\"n\",\"ņ\":\"n\",\"ṋ\":\"n\",\"ṉ\":\"n\",\"ƞ\":\"n\",\"ɲ\":\"n\",\"ŉ\":\"n\",\"ꞑ\":\"n\",\"ꞥ\":\"n\",\"ǌ\":\"nj\",\"ⓞ\":\"o\",\"ｏ\":\"o\",\"ò\":\"o\",\"ó\":\"o\",\"ô\":\"o\",\"ồ\":\"o\",\"ố\":\"o\",\"ỗ\":\"o\",\"ổ\":\"o\",\"õ\":\"o\",\"ṍ\":\"o\",\"ȭ\":\"o\",\"ṏ\":\"o\",\"ō\":\"o\",\"ṑ\":\"o\",\"ṓ\":\"o\",\"ŏ\":\"o\",\"ȯ\":\"o\",\"ȱ\":\"o\",\"ö\":\"o\",\"ȫ\":\"o\",\"ỏ\":\"o\",\"ő\":\"o\",\"ǒ\":\"o\",\"ȍ\":\"o\",\"ȏ\":\"o\",\"ơ\":\"o\",\"ờ\":\"o\",\"ớ\":\"o\",\"ỡ\":\"o\",\"ở\":\"o\",\"ợ\":\"o\",\"ọ\":\"o\",\"ộ\":\"o\",\"ǫ\":\"o\",\"ǭ\":\"o\",\"ø\":\"o\",\"ǿ\":\"o\",\"ɔ\":\"o\",\"ꝋ\":\"o\",\"ꝍ\":\"o\",\"ɵ\":\"o\",\"ƣ\":\"oi\",\"ȣ\":\"ou\",\"ꝏ\":\"oo\",\"ⓟ\":\"p\",\"ｐ\":\"p\",\"ṕ\":\"p\",\"ṗ\":\"p\",\"ƥ\":\"p\",\"ᵽ\":\"p\",\"ꝑ\":\"p\",\"ꝓ\":\"p\",\"ꝕ\":\"p\",\"ⓠ\":\"q\",\"ｑ\":\"q\",\"ɋ\":\"q\",\"ꝗ\":\"q\",\"ꝙ\":\"q\",\"ⓡ\":\"r\",\"ｒ\":\"r\",\"ŕ\":\"r\",\"ṙ\":\"r\",\"ř\":\"r\",\"ȑ\":\"r\",\"ȓ\":\"r\",\"ṛ\":\"r\",\"ṝ\":\"r\",\"ŗ\":\"r\",\"ṟ\":\"r\",\"ɍ\":\"r\",\"ɽ\":\"r\",\"ꝛ\":\"r\",\"ꞧ\":\"r\",\"ꞃ\":\"r\",\"ⓢ\":\"s\",\"ｓ\":\"s\",\"ß\":\"s\",\"ś\":\"s\",\"ṥ\":\"s\",\"ŝ\":\"s\",\"ṡ\":\"s\",\"š\":\"s\",\"ṧ\":\"s\",\"ṣ\":\"s\",\"ṩ\":\"s\",\"ș\":\"s\",\"ş\":\"s\",\"ȿ\":\"s\",\"ꞩ\":\"s\",\"ꞅ\":\"s\",\"ẛ\":\"s\",\"ⓣ\":\"t\",\"ｔ\":\"t\",\"ṫ\":\"t\",\"ẗ\":\"t\",\"ť\":\"t\",\"ṭ\":\"t\",\"ț\":\"t\",\"ţ\":\"t\",\"ṱ\":\"t\",\"ṯ\":\"t\",\"ŧ\":\"t\",\"ƭ\":\"t\",\"ʈ\":\"t\",\"ⱦ\":\"t\",\"ꞇ\":\"t\",\"ꜩ\":\"tz\",\"ⓤ\":\"u\",\"ｕ\":\"u\",\"ù\":\"u\",\"ú\":\"u\",\"û\":\"u\",\"ũ\":\"u\",\"ṹ\":\"u\",\"ū\":\"u\",\"ṻ\":\"u\",\"ŭ\":\"u\",\"ü\":\"u\",\"ǜ\":\"u\",\"ǘ\":\"u\",\"ǖ\":\"u\",\"ǚ\":\"u\",\"ủ\":\"u\",\"ů\":\"u\",\"ű\":\"u\",\"ǔ\":\"u\",\"ȕ\":\"u\",\"ȗ\":\"u\",\"ư\":\"u\",\"ừ\":\"u\",\"ứ\":\"u\",\"ữ\":\"u\",\"ử\":\"u\",\"ự\":\"u\",\"ụ\":\"u\",\"ṳ\":\"u\",\"ų\":\"u\",\"ṷ\":\"u\",\"ṵ\":\"u\",\"ʉ\":\"u\",\"ⓥ\":\"v\",\"ｖ\":\"v\",\"ṽ\":\"v\",\"ṿ\":\"v\",\"ʋ\":\"v\",\"ꝟ\":\"v\",\"ʌ\":\"v\",\"ꝡ\":\"vy\",\"ⓦ\":\"w\",\"ｗ\":\"w\",\"ẁ\":\"w\",\"ẃ\":\"w\",\"ŵ\":\"w\",\"ẇ\":\"w\",\"ẅ\":\"w\",\"ẘ\":\"w\",\"ẉ\":\"w\",\"ⱳ\":\"w\",\"ⓧ\":\"x\",\"ｘ\":\"x\",\"ẋ\":\"x\",\"ẍ\":\"x\",\"ⓨ\":\"y\",\"ｙ\":\"y\",\"ỳ\":\"y\",\"ý\":\"y\",\"ŷ\":\"y\",\"ỹ\":\"y\",\"ȳ\":\"y\",\"ẏ\":\"y\",\"ÿ\":\"y\",\"ỷ\":\"y\",\"ẙ\":\"y\",\"ỵ\":\"y\",\"ƴ\":\"y\",\"ɏ\":\"y\",\"ỿ\":\"y\",\"ⓩ\":\"z\",\"ｚ\":\"z\",\"ź\":\"z\",\"ẑ\":\"z\",\"ż\":\"z\",\"ž\":\"z\",\"ẓ\":\"z\",\"ẕ\":\"z\",\"ƶ\":\"z\",\"ȥ\":\"z\",\"ɀ\":\"z\",\"ⱬ\":\"z\",\"ꝣ\":\"z\",\"Ά\":\"Α\",\"Έ\":\"Ε\",\"Ή\":\"Η\",\"Ί\":\"Ι\",\"Ϊ\":\"Ι\",\"Ό\":\"Ο\",\"Ύ\":\"Υ\",\"Ϋ\":\"Υ\",\"Ώ\":\"Ω\",\"ά\":\"α\",\"έ\":\"ε\",\"ή\":\"η\",\"ί\":\"ι\",\"ϊ\":\"ι\",\"ΐ\":\"ι\",\"ό\":\"ο\",\"ύ\":\"υ\",\"ϋ\":\"υ\",\"ΰ\":\"υ\",\"ω\":\"ω\",\"ς\":\"σ\"};return a}),b.define(\"select2/data/base\",[\"../utils\"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error(\"The `current` method must be defined in child classes.\")},b.prototype.query=function(a,b){throw new Error(\"The `query` method must be defined in child classes.\")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+\"-result-\";return d+=a.generateChars(4),d+=null!=c.id?\"-\"+c.id.toString():\"-\"+a.generateChars(4)},b}),b.define(\"select2/data/select\",[\"./base\",\"../utils\",\"jquery\"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(\":selected\").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is(\"option\"))return a.element.selected=!0,void this.$element.trigger(\"change\");\nif(this.$element.prop(\"multiple\"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger(\"change\")});else{var d=a.id;this.$element.val(d),this.$element.trigger(\"change\")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop(\"multiple\"))return a.selected=!1,c(a.element).is(\"option\")?(a.element.selected=!1,void this.$element.trigger(\"change\")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger(\"change\")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on(\"select\",function(a){c.select(a.data)}),a.on(\"unselect\",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find(\"*\").each(function(){c.removeData(this,\"data\")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is(\"option\")||b.is(\"optgroup\")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement(\"optgroup\"),b.label=a.text):(b=document.createElement(\"option\"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,\"data\",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],\"data\"),null!=b)return b;if(a.is(\"option\"))b={id:a.val(),text:a.text(),disabled:a.prop(\"disabled\"),selected:a.prop(\"selected\"),title:a.prop(\"title\")};else if(a.is(\"optgroup\")){b={text:a.prop(\"label\"),children:[],title:a.prop(\"title\")};for(var d=a.children(\"option\"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],\"data\",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:\"\"},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get(\"matcher\");return c(a,b)},d}),b.define(\"select2/data/array\",[\"./select\",\"../utils\",\"jquery\"],function(a,b,c){function d(a,b){var c=b.get(\"data\")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find(\"option\").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find(\"option\"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define(\"select2/data/ajax\",[\"./array\",\"../utils\",\"jquery\"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get(\"ajax\")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get(\"debug\")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error(\"Select2: The AJAX results did not return an array in the `results` key of the response.\")),b(f)},function(){d.status&&\"0\"===d.status||e.trigger(\"results:message\",{message:\"errorLoading\"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:\"GET\"},this.ajaxOptions);\"function\"==typeof f.url&&(f.url=f.url.call(this.$element,a)),\"function\"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define(\"select2/data/tags\",[\"jquery\"],function(a){function b(b,c,d){var e=d.get(\"tags\"),f=d.get(\"createTag\");void 0!==f&&(this.createTag=f);var g=d.get(\"insertTag\");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr(\"data-select2-tag\",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return\"\"===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find(\"option[data-select2-tag]\"));c.each(function(){this.selected||a(this).remove()})},b}),b.define(\"select2/data/tokenizer\",[\"jquery\"],function(a){function b(a,b,c){var d=c.get(\"tokenizer\");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(\".select2-search__field\")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find(\"option\").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr(\"data-select2-tag\",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger(\"select\",{data:a})}var g=this;c.term=c.term||\"\";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get(\"tokenSeparators\")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||\"\",h=0):h++}else h++}return{term:g}},b}),b.define(\"select2/data/minimumInputLength\",[],function(){function a(a,b,c){this.minimumInputLength=c.get(\"minimumInputLength\"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||\"\",b.term.length<this.minimumInputLength?void this.trigger(\"results:message\",{message:\"inputTooShort\",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define(\"select2/data/maximumInputLength\",[],function(){function a(a,b,c){this.maximumInputLength=c.get(\"maximumInputLength\"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||\"\",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger(\"results:message\",{message:\"inputTooLong\",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define(\"select2/data/maximumSelectionLength\",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get(\"maximumSelectionLength\"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger(\"results:message\",{message:\"maximumSelected\",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define(\"select2/dropdown\",[\"jquery\",\"./utils\"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class=\"select2-dropdown\"><span class=\"select2-results\"></span></span>');return b.attr(\"dir\",this.options.get(\"dir\")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define(\"select2/dropdown/search\",[\"jquery\",\"../utils\"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class=\"select2-search select2-search--dropdown\"><input class=\"select2-search__field\" type=\"search\" tabindex=\"-1\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" role=\"textbox\" /></span>');return this.$searchContainer=d,this.$search=d.find(\"input\"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on(\"keydown\",function(a){e.trigger(\"keypress\",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on(\"input\",function(b){a(this).off(\"keyup\")}),this.$search.on(\"keyup input\",function(a){e.handleSearch(a)}),c.on(\"open\",function(){e.$search.attr(\"tabindex\",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on(\"close\",function(){e.$search.attr(\"tabindex\",-1),e.$search.val(\"\")}),c.on(\"focus\",function(){c.isOpen()&&e.$search.focus()}),c.on(\"results:all\",function(a){if(null==a.query.term||\"\"===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass(\"select2-search--hide\"):e.$searchContainer.addClass(\"select2-search--hide\")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger(\"query\",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define(\"select2/dropdown/hidePlaceholder\",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get(\"placeholder\")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return\"string\"==typeof b&&(b={id:\"\",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define(\"select2/dropdown/infiniteScroll\",[\"jquery\"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on(\"query\",function(a){e.lastParams=a,e.loading=!0}),c.on(\"query:append\",function(a){e.lastParams=a,e.loading=!0}),this.$results.on(\"scroll\",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger(\"query:append\",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class=\"select2-results__option select2-results__option--load-more\"role=\"treeitem\" aria-disabled=\"true\"></li>'),c=this.options.get(\"translations\").get(\"loadingMore\");return b.html(c(this.lastParams)),b},b}),b.define(\"select2/dropdown/attachBody\",[\"jquery\",\"../utils\"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get(\"dropdownParent\")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on(\"open\",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on(\"results:all\",function(){d._positionDropdown(),d._resizeDropdown()}),b.on(\"results:append\",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on(\"close\",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on(\"mousedown\",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr(\"class\",c.attr(\"class\")),b.removeClass(\"select2\"),b.addClass(\"select2-container--open\"),b.css({position:\"absolute\",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a(\"<span></span>\"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f=\"scroll.select2.\"+d.id,g=\"resize.select2.\"+d.id,h=\"orientationchange.select2.\"+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data(\"select2-scroll-position\",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data(\"select2-scroll-position\");a(this).scrollTop(c.y)}),a(window).on(f+\" \"+g+\" \"+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e=\"scroll.select2.\"+d.id,f=\"resize.select2.\"+d.id,g=\"orientationchange.select2.\"+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+\" \"+f+\" \"+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass(\"select2-dropdown--above\"),d=this.$dropdown.hasClass(\"select2-dropdown--below\"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;\"static\"===m.css(\"position\")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e=\"below\"),k||!j||c?!j&&k&&c&&(e=\"below\"):e=\"above\",(\"above\"==e||c&&\"below\"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass(\"select2-dropdown--below select2-dropdown--above\").addClass(\"select2-dropdown--\"+e),this.$container.removeClass(\"select2-container--below select2-container--above\").addClass(\"select2-container--\"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+\"px\"};this.options.get(\"dropdownAutoWidth\")&&(a.minWidth=a.width,a.position=\"relative\",a.width=\"auto\"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define(\"select2/dropdown/minimumResultsForSearch\",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get(\"minimumResultsForSearch\"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define(\"select2/dropdown/selectOnClose\",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on(\"close\",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if(\"select\"===c._type||\"unselect\"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data(\"data\");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger(\"select\",{data:e})}},a}),b.define(\"select2/dropdown/closeOnSelect\",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on(\"select\",function(a){d._selectTriggered(a)}),b.on(\"unselect\",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger(\"close\",{originalEvent:c,originalSelect2Event:b})},a}),b.define(\"select2/i18n/en\",[],function(){return{errorLoading:function(){return\"The results could not be loaded.\"},inputTooLong:function(a){var b=a.input.length-a.maximum,c=\"Please delete \"+b+\" character\";return 1!=b&&(c+=\"s\"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c=\"Please enter \"+b+\" or more characters\";return c},loadingMore:function(){return\"Loading more results…\"},maximumSelected:function(a){var b=\"You can only select \"+a.maximum+\" item\";return 1!=a.maximum&&(b+=\"s\"),b},noResults:function(){return\"No results found\"},searching:function(){return\"Searching…\"}}}),b.define(\"select2/defaults\",[\"jquery\",\"require\",\"./results\",\"./selection/single\",\"./selection/multiple\",\"./selection/placeholder\",\"./selection/allowClear\",\"./selection/search\",\"./selection/eventRelay\",\"./utils\",\"./translation\",\"./diacritics\",\"./data/select\",\"./data/array\",\"./data/ajax\",\"./data/tags\",\"./data/tokenizer\",\"./data/minimumInputLength\",\"./data/maximumInputLength\",\"./data/maximumSelectionLength\",\"./dropdown\",\"./dropdown/search\",\"./dropdown/hidePlaceholder\",\"./dropdown/infiniteScroll\",\"./dropdown/attachBody\",\"./dropdown/minimumResultsForSearch\",\"./dropdown/selectOnClose\",\"./dropdown/closeOnSelect\",\"./i18n/en\"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+\"compat/query\");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+\"compat/initSelection\");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+\"compat/dropdownCss\");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+\"compat/containerCss\");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if(\"string\"==typeof l.language)if(l.language.indexOf(\"-\")>0){var H=l.language.split(\"-\"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push(\"en\");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for \"'+M+'\" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+\"en\"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\\u0000-\\u007E]/g,b)}function c(d,e){if(\"\"===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:\"./\",amdLanguageBase:\"./i18n/\",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:\"default\",width:\"resolve\"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define(\"select2/options\",[\"require\",\"jquery\",\"./defaults\",\"./utils\"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is(\"input\")){var f=a(this.get(\"amdBase\")+\"compat/inputData\");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=[\"select2\"];null==this.options.multiple&&(this.options.multiple=a.prop(\"multiple\")),null==this.options.disabled&&(this.options.disabled=a.prop(\"disabled\")),null==this.options.language&&(a.prop(\"lang\")?this.options.language=a.prop(\"lang\").toLowerCase():a.closest(\"[lang]\").prop(\"lang\")&&(this.options.language=a.closest(\"[lang]\").prop(\"lang\"))),null==this.options.dir&&(a.prop(\"dir\")?this.options.dir=a.prop(\"dir\"):a.closest(\"[dir]\").prop(\"dir\")?this.options.dir=a.closest(\"[dir]\").prop(\"dir\"):this.options.dir=\"ltr\"),a.prop(\"disabled\",this.options.disabled),a.prop(\"multiple\",this.options.multiple),a.data(\"select2Tags\")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags=\"true\"` attributes and will be removed in future versions of Select2.'),a.data(\"data\",a.data(\"select2Tags\")),a.data(\"tags\",!0)),a.data(\"ajaxUrl\")&&(this.options.debug&&window.console&&console.warn&&console.warn(\"Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.\"),a.attr(\"ajax--url\",a.data(\"ajaxUrl\")),a.data(\"ajax--url\",a.data(\"ajaxUrl\")));var e={};e=b.fn.jquery&&\"1.\"==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define(\"select2/core\",[\"jquery\",\"./options\",\"./utils\",\"./keys\"],function(a,b,c,d){var e=function(a,c){null!=a.data(\"select2\")&&a.data(\"select2\").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr(\"tabindex\")||0;a.data(\"old-tabindex\",d),a.attr(\"tabindex\",\"-1\");var f=this.options.get(\"dataAdapter\");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get(\"selectionAdapter\");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get(\"dropdownAdapter\");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get(\"resultsAdapter\");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger(\"selection:update\",{data:a})}),a.addClass(\"select2-hidden-accessible\"),a.attr(\"aria-hidden\",\"true\"),this._syncAttributes(),a.data(\"select2\",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b=\"\";return b=null!=a.attr(\"id\")?a.attr(\"id\"):null!=a.attr(\"name\")?a.attr(\"name\")+\"-\"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\\.|\\[|\\]|,)/g,\"\"),b=\"select2-\"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get(\"width\"));null!=b&&a.css(\"width\",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if(\"resolve\"==b){var d=this._resolveWidth(a,\"style\");return null!=d?d:this._resolveWidth(a,\"element\")}if(\"element\"==b){var e=a.outerWidth(!1);return 0>=e?\"auto\":e+\"px\"}if(\"style\"==b){var f=a.attr(\"style\");if(\"string\"!=typeof f)return null;for(var g=f.split(\";\"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\\s/g,\"\"),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on(\"change.select2\",function(){b.dataAdapter.current(function(a){b.trigger(\"selection:update\",{data:a})})}),this.$element.on(\"focus.select2\",function(a){b.trigger(\"focus\",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent(\"onpropertychange\",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener(\"DOMAttrModified\",b._syncA,!1),this.$element[0].addEventListener(\"DOMNodeInserted\",b._syncS,!1),this.$element[0].addEventListener(\"DOMNodeRemoved\",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on(\"*\",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=[\"toggle\",\"focus\"];this.selection.on(\"toggle\",function(){b.toggleDropdown()}),this.selection.on(\"focus\",function(a){b.focus(a)}),this.selection.on(\"*\",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on(\"*\",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on(\"*\",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on(\"open\",function(){a.$container.addClass(\"select2-container--open\")}),this.on(\"close\",function(){a.$container.removeClass(\"select2-container--open\")}),this.on(\"enable\",function(){a.$container.removeClass(\"select2-container--disabled\")}),this.on(\"disable\",function(){a.$container.addClass(\"select2-container--disabled\")}),this.on(\"blur\",function(){a.$container.removeClass(\"select2-container--focus\")}),this.on(\"query\",function(b){a.isOpen()||a.trigger(\"open\",{}),this.dataAdapter.query(b,function(c){a.trigger(\"results:all\",{data:c,query:b})})}),this.on(\"query:append\",function(b){this.dataAdapter.query(b,function(c){a.trigger(\"results:append\",{data:c,query:b})})}),this.on(\"keypress\",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger(\"results:select\",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger(\"results:toggle\",{}),b.preventDefault()):c===d.UP?(a.trigger(\"results:previous\",{}),b.preventDefault()):c===d.DOWN&&(a.trigger(\"results:next\",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set(\"disabled\",this.$element.prop(\"disabled\")),this.options.get(\"disabled\")?(this.isOpen()&&this.close(),this.trigger(\"disable\",{})):this.trigger(\"enable\",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||\"OPTION\"===a.target.nodeName||\"OPTGROUP\"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger(\"selection:update\",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:\"opening\",close:\"closing\",select:\"selecting\",unselect:\"unselecting\"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get(\"disabled\")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger(\"query\",{})},e.prototype.close=function(){this.isOpen()&&this.trigger(\"close\",{})},e.prototype.isOpen=function(){return this.$container.hasClass(\"select2-container--open\")},e.prototype.hasFocus=function(){return this.$container.hasClass(\"select2-container--focus\")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass(\"select2-container--focus\"),this.trigger(\"focus\",{}))},e.prototype.enable=function(a){this.options.get(\"debug\")&&window.console&&console.warn&&console.warn('Select2: The `select2(\"enable\")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop(\"disabled\") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop(\"disabled\",b)},e.prototype.data=function(){this.options.get(\"debug\")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2(\"data\")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get(\"debug\")&&window.console&&console.warn&&console.warn('Select2: The `select2(\"val\")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger(\"change\")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent(\"onpropertychange\",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener(\"DOMAttrModified\",this._syncA,!1),this.$element[0].removeEventListener(\"DOMNodeInserted\",this._syncS,!1),this.$element[0].removeEventListener(\"DOMNodeRemoved\",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(\".select2\"),this.$element.attr(\"tabindex\",this.$element.data(\"old-tabindex\")),this.$element.removeClass(\"select2-hidden-accessible\"),this.$element.attr(\"aria-hidden\",\"false\"),this.$element.removeData(\"select2\"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;\n},e.prototype.render=function(){var b=a('<span class=\"select2 select2-container\"><span class=\"selection\"></span><span class=\"dropdown-wrapper\" aria-hidden=\"true\"></span></span>');return b.attr(\"dir\",this.options.get(\"dir\")),this.$container=b,this.$container.addClass(\"select2-container--\"+this.options.get(\"theme\")),b.data(\"element\",this.$element),b},e}),b.define(\"select2/compat/utils\",[\"jquery\"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr(\"class\")),e&&(e=\"\"+e,a(e.split(/\\s+/)).each(function(){0===this.indexOf(\"select2-\")&&g.push(this)})),e=a.trim(c.attr(\"class\")),e&&(e=\"\"+e,a(e.split(/\\s+/)).each(function(){0!==this.indexOf(\"select2-\")&&(f=d(this),null!=f&&g.push(f))})),b.attr(\"class\",g.join(\" \"))}return{syncCssClasses:b}}),b.define(\"select2/compat/containerCss\",[\"jquery\",\"./utils\"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get(\"containerCssClass\")||\"\";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get(\"adaptContainerCssClass\");if(g=g||c,-1!==f.indexOf(\":all:\")){f=f.replace(\":all:\",\"\");var h=g;g=function(a){var b=h(a);return null!=b?b+\" \"+a:a}}var i=this.options.get(\"containerCss\")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define(\"select2/compat/dropdownCss\",[\"jquery\",\"./utils\"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get(\"dropdownCssClass\")||\"\";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get(\"adaptDropdownCssClass\");if(g=g||c,-1!==f.indexOf(\":all:\")){f=f.replace(\":all:\",\"\");var h=g;g=function(a){var b=h(a);return null!=b?b+\" \"+a:a}}var i=this.options.get(\"dropdownCss\")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define(\"select2/compat/initSelection\",[\"jquery\"],function(a){function b(a,b,c){c.get(\"debug\")&&window.console&&console.warn&&console.warn(\"Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2\"),this.initSelection=c.get(\"initSelection\"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;return this._isInitialized?void b.call(this,c):void this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define(\"select2/compat/inputData\",[\"jquery\"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get(\"valueSeparator\")||\",\",\"hidden\"===b.prop(\"type\")&&c.get(\"debug\")&&console&&console.warn&&console.warn(\"Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead.\"),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get(\"multiple\")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger(\"change\")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger(\"change\")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger(\"change\")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],\"data\")});this._currentData.push.apply(this._currentData,d)},b}),b.define(\"select2/compat/matcher\",[\"jquery\"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||\"\"===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f],h=b(c.term,g.text,g);h||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define(\"select2/compat/query\",[],function(){function a(a,b,c){c.get(\"debug\")&&window.console&&console.warn&&console.warn(\"Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2.\"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c;var d=this.options.get(\"query\");d.call(null,b)},a}),b.define(\"select2/dropdown/attachContainer\",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){var d=c.find(\".dropdown-wrapper\");d.append(b),b.addClass(\"select2-dropdown--below\"),c.addClass(\"select2-container--below\")},a}),b.define(\"select2/dropdown/stopPropagation\",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=[\"blur\",\"change\",\"click\",\"dblclick\",\"focus\",\"focusin\",\"focusout\",\"input\",\"keydown\",\"keyup\",\"keypress\",\"mousedown\",\"mouseenter\",\"mouseleave\",\"mousemove\",\"mouseover\",\"mouseup\",\"search\",\"touchend\",\"touchstart\"];this.$dropdown.on(d.join(\" \"),function(a){a.stopPropagation()})},a}),b.define(\"select2/selection/stopPropagation\",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=[\"blur\",\"change\",\"click\",\"dblclick\",\"focus\",\"focusin\",\"focusout\",\"input\",\"keydown\",\"keyup\",\"keypress\",\"mousedown\",\"mouseenter\",\"mouseleave\",\"mousemove\",\"mouseover\",\"mouseup\",\"search\",\"touchend\",\"touchstart\"];this.$selection.on(d.join(\" \"),function(a){a.stopPropagation()})},a}),function(c){\"function\"==typeof b.define&&b.define.amd?b.define(\"jquery-mousewheel\",[\"jquery\"],c):\"object\"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type=\"mousewheel\",\"detail\"in g&&(m=-1*g.detail),\"wheelDelta\"in g&&(m=g.wheelDelta),\"wheelDeltaY\"in g&&(m=g.wheelDeltaY),\"wheelDeltaX\"in g&&(l=-1*g.wheelDeltaX),\"axis\"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,\"deltaY\"in g&&(m=-1*g.deltaY,j=m),\"deltaX\"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,\"mousewheel-line-height\");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,\"mousewheel-page-height\");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?\"floor\":\"ceil\"](j/f),l=Math[l>=1?\"floor\":\"ceil\"](l/f),m=Math[m>=1?\"floor\":\"ceil\"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&\"mousewheel\"===a.type&&b%120===0}var e,f,g=[\"wheel\",\"mousewheel\",\"DOMMouseScroll\",\"MozMousePixelScroll\"],h=\"onwheel\"in document||document.documentMode>=9?[\"wheel\"]:[\"mousewheel\",\"DomMouseScroll\",\"MozMousePixelScroll\"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:\"3.1.12\",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,\"mousewheel-line-height\",k.getLineHeight(this)),a.data(this,\"mousewheel-page-height\",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,\"mousewheel-line-height\"),a.removeData(this,\"mousewheel-page-height\")},getLineHeight:function(b){var c=a(b),d=c[\"offsetParent\"in a.fn?\"offsetParent\":\"parent\"]();return d.length||(d=a(\"body\")),parseInt(d.css(\"fontSize\"),10)||parseInt(c.css(\"fontSize\"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind(\"mousewheel\",a):this.trigger(\"mousewheel\")},unmousewheel:function(a){return this.unbind(\"mousewheel\",a)}})}),b.define(\"jquery.select2\",[\"jquery\",\"jquery-mousewheel\",\"./select2/core\",\"./select2/defaults\"],function(a,b,c,d){if(null==a.fn.select2){var e=[\"open\",\"close\",\"destroy\"];a.fn.select2=function(b){if(b=b||{},\"object\"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if(\"string\"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data(\"select2\");null==c&&window.console&&console.error&&console.error(\"The select2('\"+b+\"') method was called on an element that is not using Select2.\"),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error(\"Invalid arguments for Select2: \"+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require(\"jquery.select2\");return a.fn.select2.amd=b,c});"

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * jQuery UI date range picker widget
 * Copyright (c) 2016 Tamble, Inc.
 * Licensed under MIT (https://github.com/tamble/jquery-ui-daterangepicker/raw/master/LICENSE.txt)
 *
 * Depends:
 *   - jQuery 1.8.3+
 *   - jQuery UI 1.9.0+ (widget factory, position utility, button, menu, datepicker)
 *   - moment.js 2.3.0+
 */

(function ($, window, undefined) {

	var uniqueId = 0; // used for unique ID generation within multiple plugin instances

	$.widget('comiseo.daterangepicker', {
		version: '0.5.0',

		options: {
			// presetRanges: array of objects; each object describes an item in the presets menu
			// and must have the properties: text, dateStart, dateEnd.
			// dateStart, dateEnd are functions returning a moment object
			presetRanges: [{ text: 'Today', dateStart: function dateStart() {
					return moment();
				}, dateEnd: function dateEnd() {
					return moment();
				} }, { text: 'Yesterday', dateStart: function dateStart() {
					return moment().subtract('days', 1);
				}, dateEnd: function dateEnd() {
					return moment().subtract('days', 1);
				} }, { text: 'Last 7 Days', dateStart: function dateStart() {
					return moment().subtract('days', 6);
				}, dateEnd: function dateEnd() {
					return moment();
				} }, { text: 'Last Week (Mo-Su)', dateStart: function dateStart() {
					return moment().subtract('days', 7).isoWeekday(1);
				}, dateEnd: function dateEnd() {
					return moment().subtract('days', 7).isoWeekday(7);
				} }, { text: 'Month to Date', dateStart: function dateStart() {
					return moment().startOf('month');
				}, dateEnd: function dateEnd() {
					return moment();
				} }, { text: 'Previous Month', dateStart: function dateStart() {
					return moment().subtract('month', 1).startOf('month');
				}, dateEnd: function dateEnd() {
					return moment().subtract('month', 1).endOf('month');
				} }, { text: 'Year to Date', dateStart: function dateStart() {
					return moment().startOf('year');
				}, dateEnd: function dateEnd() {
					return moment();
				} }],
			initialText: 'Select date range...', // placeholder text - shown when nothing is selected
			icon: 'ui-icon-triangle-1-s',
			applyButtonText: 'Apply', // use '' to get rid of the button
			clearButtonText: 'Clear', // use '' to get rid of the button
			cancelButtonText: 'Cancel', // use '' to get rid of the button
			rangeSplitter: ' - ', // string to use between dates
			dateFormat: 'M d, yy', // displayed date format. Available formats: http://api.jqueryui.com/datepicker/#utility-formatDate
			altFormat: 'yy-mm-dd', // submitted date format - inside JSON {"start":"...","end":"..."}
			verticalOffset: 0, // offset of the dropdown relative to the closest edge of the trigger button
			mirrorOnCollision: true, // reverse layout when there is not enough space on the right
			autoFitCalendars: true, // override datepicker's numberOfMonths option in order to fit widget width
			applyOnMenuSelect: true, // whether to auto apply menu selections
			open: null, // callback that executes when the dropdown opens
			close: null, // callback that executes when the dropdown closes
			change: null, // callback that executes when the date range changes
			clear: null, // callback that executes when the clear button is used
			cancel: null, // callback that executes when the cancel button is used
			onOpen: null, // @deprecated callback that executes when the dropdown opens
			onClose: null, // @deprecated callback that executes when the dropdown closes
			onChange: null, // @deprecated callback that executes when the date range changes
			onClear: null, // @deprecated callback that executes when the clear button is used
			datepickerOptions: { // object containing datepicker options. See http://api.jqueryui.com/datepicker/#options
				numberOfMonths: 3,
				//				showCurrentAtPos: 1 // bug; use maxDate instead
				maxDate: 0 // the maximum selectable date is today (also current month is displayed on the last position)
			}
		},

		_create: function _create() {
			this._dateRangePicker = buildDateRangePicker(this.element, this, this.options);
		},

		_destroy: function _destroy() {
			this._dateRangePicker.destroy();
		},

		_setOptions: function _setOptions(options) {
			this._super(options);
			this._dateRangePicker.enforceOptions();
		},

		open: function open() {
			this._dateRangePicker.open();
		},

		close: function close() {
			this._dateRangePicker.close();
		},

		setRange: function setRange(range) {
			this._dateRangePicker.setRange(range);
		},

		getRange: function getRange() {
			return this._dateRangePicker.getRange();
		},

		clearRange: function clearRange() {
			this._dateRangePicker.clearRange();
		},

		widget: function widget() {
			return this._dateRangePicker.getContainer();
		}
	});

	/**
  * factory for the trigger button (which visually replaces the original input form element)
  *
  * @param {jQuery} $originalElement jQuery object containing the input form element used to instantiate this widget instance
  * @param {String} classnameContext classname of the parent container
  * @param {Object} options
  */
	function buildTriggerButton($originalElement, classnameContext, options) {
		var $self, id;

		function fixReferences() {
			id = 'drp_autogen' + uniqueId++;
			$('label[for="' + $originalElement.attr('id') + '"]').attr('for', id);
		}

		function init() {
			fixReferences();
			$self = $('<button type="button"></button>').addClass(classnameContext + '-triggerbutton').attr({ 'title': $originalElement.attr('title'), 'tabindex': $originalElement.attr('tabindex'), id: id }).button({
				icons: {
					secondary: options.icon
				},
				label: options.initialText
			});
		}

		function getLabel() {
			return $self.button('option', 'label');
		}

		function setLabel(value) {
			$self.button('option', 'label', value);
		}

		function reset() {
			$originalElement.val('').change();
			setLabel(options.initialText);
		}

		function enforceOptions() {
			$self.button('option', {
				icons: {
					secondary: options.icon
				},
				label: options.initialText
			});
		}

		init();
		return {
			getElement: function getElement() {
				return $self;
			},
			getLabel: getLabel,
			setLabel: setLabel,
			reset: reset,
			enforceOptions: enforceOptions
		};
	}

	/**
  * factory for the presets menu (containing built-in date ranges)
  *
  * @param {String} classnameContext classname of the parent container
  * @param {Object} options
  * @param {Function} onClick callback that executes when a preset is clicked
  */
	function buildPresetsMenu(classnameContext, options, onClick) {
		var $self, $menu;

		function init() {
			$self = $('<div></div>').addClass(classnameContext + '-presets');

			$menu = $('<ul></ul>');

			$.each(options.presetRanges, function () {
				$('<li><a href="#">' + this.text + '</a></li>').data('dateStart', this.dateStart).data('dateEnd', this.dateEnd).click(onClick).appendTo($menu);
			});

			$self.append($menu);

			$menu.menu().data('ui-menu').delay = 0; // disable submenu delays
		}

		init();
		return {
			getElement: function getElement() {
				return $self;
			}
		};
	}

	/**
  * factory for the multiple month date picker
  *
  * @param {String} classnameContext classname of the parent container
  * @param {Object} options
  */
	function buildCalendar(classnameContext, options) {
		var $self,
		    range = { start: null, end: null }; // selected range

		function init() {
			$self = $('<div></div>', { 'class': classnameContext + '-calendar ui-widget-content' });

			$self.datepicker($.extend({}, options.datepickerOptions, { beforeShowDay: beforeShowDay, onSelect: onSelectDay }));
			updateAtMidnight();
		}

		function enforceOptions() {
			$self.datepicker('option', $.extend({}, options.datepickerOptions, { beforeShowDay: beforeShowDay, onSelect: onSelectDay }));
		}

		// called when a day is selected
		function onSelectDay(dateText, instance) {
			var dateFormat = options.datepickerOptions.dateFormat || $.datepicker._defaults.dateFormat,
			    selectedDate = $.datepicker.parseDate(dateFormat, dateText);

			if (!range.start || range.end) {
				// start not set, or both already set
				range.start = selectedDate;
				range.end = null;
			} else if (selectedDate < range.start) {
				// start set, but selected date is earlier
				range.end = range.start;
				range.start = selectedDate;
			} else {
				range.end = selectedDate;
			}
			if (options.datepickerOptions.hasOwnProperty('onSelect')) {
				options.datepickerOptions.onSelect(dateText, instance);
			}
		}

		// called for each day in the datepicker before it is displayed
		function beforeShowDay(date) {
			var result = [true, // selectable
			range.start && (+date === +range.start || range.end && range.start <= date && date <= range.end) ? 'ui-state-highlight' : '' // class to be added
			],
			    userResult = [true, '', ''];

			if (options.datepickerOptions.hasOwnProperty('beforeShowDay')) {
				userResult = options.datepickerOptions.beforeShowDay(date);
			}
			return [result[0] && userResult[0], result[1] + ' ' + userResult[1], userResult[2]];
		}

		function updateAtMidnight() {
			setTimeout(function () {
				refresh();
				updateAtMidnight();
			}, moment().endOf('day') - moment());
		}

		function _scrollToRangeStart() {
			if (range.start) {
				$self.datepicker('setDate', range.start);
			}
		}

		function refresh() {
			$self.datepicker('refresh');
			$self.datepicker('setDate', null); // clear the selected date
		}

		function reset() {
			range = { start: null, end: null };
			refresh();
		}

		init();
		return {
			getElement: function getElement() {
				return $self;
			},
			scrollToRangeStart: function scrollToRangeStart() {
				return _scrollToRangeStart();
			},
			getRange: function getRange() {
				return range;
			},
			setRange: function setRange(value) {
				range = value;refresh();
			},
			refresh: refresh,
			reset: reset,
			enforceOptions: enforceOptions
		};
	}

	/**
  * factory for the button panel
  *
  * @param {String} classnameContext classname of the parent container
  * @param {Object} options
  * @param {Object} handlers contains callbacks for each button
  */
	function buildButtonPanel(classnameContext, options, handlers) {
		var $self, applyButton, clearButton, cancelButton;

		function init() {
			$self = $('<div></div>').addClass(classnameContext + '-buttonpanel');

			if (options.applyButtonText) {
				applyButton = $('<button type="button" class="btn btn--primary btn--md mdl-button mdl-js-button mdl-js-ripple-effect mr8"></button>').text(options.applyButtonText).button();

				$self.append(applyButton);
			}

			if (options.clearButtonText) {
				clearButton = $('<button type="button" class="btn btn--dark btn--md mdl-button mdl-js-button mdl-js-ripple-effect mr8"></button>').text(options.clearButtonText).button();

				$self.append(clearButton);
			}

			if (options.cancelButtonText) {
				cancelButton = $('<button type="button" class="btn btn--red btn--md mdl-button mdl-js-button mdl-js-ripple-effect"></button>').text(options.cancelButtonText).button();

				$self.append(cancelButton);
			}

			bindEvents();
		}

		function enforceOptions() {
			if (applyButton) {
				applyButton.button('option', 'label', options.applyButtonText);
			}

			if (clearButton) {
				clearButton.button('option', 'label', options.clearButtonText);
			}

			if (cancelButton) {
				cancelButton.button('option', 'label', options.cancelButtonText);
			}
		}

		function bindEvents() {
			if (handlers) {
				if (applyButton) {
					applyButton.click(handlers.onApply);
				}

				if (clearButton) {
					clearButton.click(handlers.onClear);
				}

				if (cancelButton) {
					cancelButton.click(handlers.onCancel);
				}
			}
		}

		init();
		return {
			getElement: function getElement() {
				return $self;
			},
			enforceOptions: enforceOptions
		};
	}

	/**
  * factory for the widget
  *
  * @param {jQuery} $originalElement jQuery object containing the input form element used to instantiate this widget instance
  * @param {Object} instance
  * @param {Object} options
  */
	function buildDateRangePicker($originalElement, instance, options) {
		var classname = 'comiseo-daterangepicker',
		    $container,
		    // the dropdown
		$mask,
		    // ui helper (z-index fix)
		triggerButton,
		    presetsMenu,
		    calendar,
		    buttonPanel,
		    isOpen = false,
		    autoFitNeeded = false,
		    LEFT = 0,
		    RIGHT = 1,
		    TOP = 2,
		    BOTTOM = 3,
		    sides = ['left', 'right', 'top', 'bottom'],
		    hSide = RIGHT,
		    // initialized to pick layout styles from CSS
		vSide = null;

		function init() {
			triggerButton = buildTriggerButton($originalElement, classname, options);
			presetsMenu = buildPresetsMenu(classname, options, usePreset);
			calendar = buildCalendar(classname, options);
			autoFit.numberOfMonths = options.datepickerOptions.numberOfMonths; // save initial option!
			if (autoFit.numberOfMonths instanceof Array) {
				// not implemented
				options.autoFitCalendars = false;
			}
			buttonPanel = buildButtonPanel(classname, options, {
				onApply: function onApply(event) {
					close(event);
					setRange(null, event);
				},
				onClear: function onClear(event) {
					close(event);
					clearRange(event);
				},
				onCancel: function onCancel(event) {
					instance._trigger('cancel', event, { instance: instance });
					close(event);
					reset();
				}
			});
			render();
			autoFit();
			reset();
			bindEvents();
		}

		function render() {
			$container = $('<div></div>', { 'class': classname + ' ' + classname + '-' + sides[hSide] + ' ui-widget ui-widget-content ui-corner-all ui-front' }).append($('<div></div>', { 'class': classname + '-main ui-widget-content' }).append(presetsMenu.getElement()).append(calendar.getElement())).append($('<div class="ui-helper-clearfix"></div>').append(buttonPanel.getElement())).hide();
			$originalElement.hide().after(triggerButton.getElement());
			$mask = $('<div></div>', { 'class': 'ui-front ' + classname + '-mask' }).hide();
			$('body').append($mask).append($container);
		}

		// auto adjusts the number of months in the date picker
		function autoFit() {
			if (options.autoFitCalendars) {
				var maxWidth = $(window).width(),
				    initialWidth = $container.outerWidth(true),
				    $calendar = calendar.getElement(),
				    numberOfMonths = $calendar.datepicker('option', 'numberOfMonths'),
				    initialNumberOfMonths = numberOfMonths;

				if (initialWidth > maxWidth) {
					while (numberOfMonths > 1 && $container.outerWidth(true) > maxWidth) {
						$calendar.datepicker('option', 'numberOfMonths', --numberOfMonths);
					}
					if (numberOfMonths !== initialNumberOfMonths) {
						autoFit.monthWidth = (initialWidth - $container.outerWidth(true)) / (initialNumberOfMonths - numberOfMonths);
					}
				} else {
					while (numberOfMonths < autoFit.numberOfMonths && maxWidth - $container.outerWidth(true) >= autoFit.monthWidth) {
						$calendar.datepicker('option', 'numberOfMonths', ++numberOfMonths);
					}
				}
				reposition();
				autoFitNeeded = false;
			}
		}

		function destroy() {
			$container.remove();
			triggerButton.getElement().remove();
			$originalElement.show();
		}

		function bindEvents() {
			triggerButton.getElement().click(toggle);
			triggerButton.getElement().keydown(keyPressTriggerOpenOrClose);
			$mask.click(function (event) {
				close(event);
				reset();
			});
			$(window).resize(function () {
				isOpen ? autoFit() : autoFitNeeded = true;
			});
		}

		function formatRangeForDisplay(range) {
			var dateFormat = options.dateFormat;
			return $.datepicker.formatDate(dateFormat, range.start) + (+range.end !== +range.start ? options.rangeSplitter + $.datepicker.formatDate(dateFormat, range.end) : '');
		}

		// formats a date range as JSON
		function formatRange(range) {
			var dateFormat = options.altFormat,
			    formattedRange = {};
			formattedRange.start = $.datepicker.formatDate(dateFormat, range.start);
			formattedRange.end = $.datepicker.formatDate(dateFormat, range.end);
			return JSON.stringify(formattedRange);
		}

		// parses a date range in JSON format
		function parseRange(text) {
			var dateFormat = options.altFormat,
			    range = null;
			if (text) {
				try {
					range = JSON.parse(text, function (key, value) {
						return key ? $.datepicker.parseDate(dateFormat, value) : value;
					});
				} catch (e) {}
			}
			return range;
		}

		function reset() {
			var range = getRange();
			if (range) {
				triggerButton.setLabel(formatRangeForDisplay(range));
				calendar.setRange(range);
			} else {
				calendar.reset();
			}
		}

		function setRange(value, event) {
			var range = value || calendar.getRange();
			if (!range.start) {
				return;
			}
			if (!range.end) {
				range.end = range.start;
			}
			value && calendar.setRange(range);
			triggerButton.setLabel(formatRangeForDisplay(range));
			$originalElement.val(formatRange(range)).change();
			if (options.onChange) {
				options.onChange();
			}
			instance._trigger('change', event, { instance: instance });
		}

		function getRange() {
			return parseRange($originalElement.val());
		}

		function clearRange(event) {
			triggerButton.reset();
			calendar.reset();
			if (options.onClear) {
				options.onClear();
			}
			instance._trigger('clear', event, { instance: instance });
		}

		// callback - used when the user clicks a preset range
		function usePreset(event) {
			var $this = $(this),
			    start = $this.data('dateStart')().startOf('day').toDate(),
			    end = $this.data('dateEnd')().startOf('day').toDate();
			calendar.setRange({ start: start, end: end });
			if (options.applyOnMenuSelect) {
				close(event);
				setRange(null, event);
			}
			return false;
		}

		// adjusts dropdown's position taking into account the available space
		function reposition() {
			$container.position({
				my: 'left top',
				at: 'left bottom' + (options.verticalOffset < 0 ? options.verticalOffset : '+' + options.verticalOffset),
				of: triggerButton.getElement(),
				collision: 'flipfit flipfit',
				using: function using(coords, feedback) {
					var containerCenterX = feedback.element.left + feedback.element.width / 2,
					    triggerButtonCenterX = feedback.target.left + feedback.target.width / 2,
					    prevHSide = hSide,
					    last,
					    containerCenterY = feedback.element.top + feedback.element.height / 2,
					    triggerButtonCenterY = feedback.target.top + feedback.target.height / 2,
					    prevVSide = vSide,
					    vFit; // is the container fit vertically

					hSide = containerCenterX > triggerButtonCenterX ? RIGHT : LEFT;
					if (hSide !== prevHSide) {
						if (options.mirrorOnCollision) {
							last = hSide === LEFT ? presetsMenu : calendar;
							$container.children().first().append(last.getElement());
						}
						$container.removeClass(classname + '-' + sides[prevHSide]);
						$container.addClass(classname + '-' + sides[hSide]);
					}
					$container.css({
						left: coords.left,
						top: coords.top
					});

					vSide = containerCenterY > triggerButtonCenterY ? BOTTOM : TOP;
					if (vSide !== prevVSide) {
						if (prevVSide !== null) {
							triggerButton.getElement().removeClass(classname + '-' + sides[prevVSide]);
						}
						triggerButton.getElement().addClass(classname + '-' + sides[vSide]);
					}
					vFit = vSide === BOTTOM && feedback.element.top - feedback.target.top !== feedback.target.height + options.verticalOffset || vSide === TOP && feedback.target.top - feedback.element.top !== feedback.element.height + options.verticalOffset;
					triggerButton.getElement().toggleClass(classname + '-vfit', vFit);
				}
			});
		}

		function killEvent(event) {
			event.preventDefault();
			event.stopPropagation();
		}

		function keyPressTriggerOpenOrClose(event) {
			switch (event.which) {
				case $.ui.keyCode.UP:
				case $.ui.keyCode.DOWN:
					killEvent(event);
					open(event);
					return;
				case $.ui.keyCode.ESCAPE:
					killEvent(event);
					close(event);
					reset();
					return;
				case $.ui.keyCode.TAB:
					close(event);
					return;
			}
		}

		function open(event) {
			if (!isOpen) {
				triggerButton.getElement().addClass(classname + '-active');
				$mask.show();
				isOpen = true;
				autoFitNeeded && autoFit();
				calendar.scrollToRangeStart();
				$container.show();
				reposition();
			}
			if (options.onOpen) {
				options.onOpen();
			}
			instance._trigger('open', event, { instance: instance });
		}

		function close(event) {
			if (isOpen) {
				$container.hide();
				$mask.hide();
				triggerButton.getElement().removeClass(classname + '-active');
				isOpen = false;
			}
			if (options.onClose) {
				options.onClose();
			}
			instance._trigger('close', event, { instance: instance });
		}

		function toggle(event) {
			if (isOpen) {
				close(event);
				reset();
			} else {
				open(event);
			}
		}

		function getContainer() {
			return $container;
		}

		function enforceOptions() {
			var oldPresetsMenu = presetsMenu;
			presetsMenu = buildPresetsMenu(classname, options, usePreset);
			oldPresetsMenu.getElement().replaceWith(presetsMenu.getElement());
			calendar.enforceOptions();
			buttonPanel.enforceOptions();
			triggerButton.enforceOptions();
			var range = getRange();
			if (range) {
				triggerButton.setLabel(formatRangeForDisplay(range));
			}
		}

		init();
		return {
			toggle: toggle,
			destroy: destroy,
			open: open,
			close: close,
			setRange: setRange,
			getRange: getRange,
			clearRange: clearRange,
			reset: reset,
			enforceOptions: enforceOptions,
			getContainer: getContainer
		};
	}
})(jQuery, window);

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://raw.githubusercontent.com/T00rk/bootstrap-material-datetimepicker/gh-pages/js/bootstrap-material-datetimepicker.js

(function ($, moment) {
    var pluginName = "bootstrapMaterialDatePicker";
    var pluginDataName = "plugin_" + pluginName;

    moment.locale('en');

    function Plugin(element, options) {
        this.currentView = 0;

        this.minDate;
        this.maxDate;

        this._attachedEvents = [];

        this.element = element;
        this.$element = $(element);

        this.params = {
            date: true,
            time: true,
            format: 'YYYY-MM-DD',
            minDate: null,
            maxDate: null,
            currentDate: null,
            lang: 'en',
            weekStart: 0,
            shortTime: false,
            clearButton: false,
            nowButton: false,
            cancelText: 'Cancel',
            okText: 'OK',
            clearText: 'Clear',
            nowText: 'Now',
            switchOnClick: false,
            triggerEvent: 'focus'
        };
        this.params = $.fn.extend(this.params, options);

        this.name = "dtp_" + this.setName();
        this.$element.attr("data-dtp", this.name);

        moment.locale(this.params.lang);

        this.init();
    }

    $.fn[pluginName] = function (options, p) {
        this.each(function () {
            if (!$.data(this, pluginDataName)) {
                $.data(this, pluginDataName, new Plugin(this, options));
            } else {
                if (typeof $.data(this, pluginDataName)[options] === 'function') {
                    $.data(this, pluginDataName)[options](p);
                }
                if (options === 'destroy') {
                    delete $.data(this, pluginDataName);
                }
            }
        });
        return this;
    };

    Plugin.prototype = {
        init: function init() {
            this.initDays();
            this.initDates();

            this.initTemplate();

            this.initButtons();

            this._attachEvent($(window), 'resize', this._centerBox.bind(this));
            this._attachEvent(this.$dtpElement.find('.dtp-content'), 'click', this._onElementClick.bind(this));
            this._attachEvent(this.$dtpElement, 'click', this._onBackgroundClick.bind(this));
            this._attachEvent(this.$dtpElement.find('.dtp-close > a'), 'click', this._onCloseClick.bind(this));
            this._attachEvent(this.$element, this.params.triggerEvent, this._fireCalendar.bind(this));
        },
        initDays: function initDays() {
            this.days = [];
            for (var i = this.params.weekStart; this.days.length < 7; i++) {
                if (i > 6) {
                    i = 0;
                }
                this.days.push(i.toString());
            }
        },
        initDates: function initDates() {
            if (this.$element.val().length > 0) {
                if (typeof this.params.format !== 'undefined' && this.params.format !== null) {
                    this.currentDate = moment(this.$element.val(), this.params.format).locale(this.params.lang);
                } else {
                    this.currentDate = moment(this.$element.val()).locale(this.params.lang);
                }
            } else {
                if (typeof this.$element.attr('value') !== 'undefined' && this.$element.attr('value') !== null && this.$element.attr('value') !== "") {
                    if (typeof this.$element.attr('value') === 'string') {
                        if (typeof this.params.format !== 'undefined' && this.params.format !== null) {
                            this.currentDate = moment(this.$element.attr('value'), this.params.format).locale(this.params.lang);
                        } else {
                            this.currentDate = moment(this.$element.attr('value')).locale(this.params.lang);
                        }
                    }
                } else {
                    if (typeof this.params.currentDate !== 'undefined' && this.params.currentDate !== null) {
                        if (typeof this.params.currentDate === 'string') {
                            if (typeof this.params.format !== 'undefined' && this.params.format !== null) {
                                this.currentDate = moment(this.params.currentDate, this.params.format).locale(this.params.lang);
                            } else {
                                this.currentDate = moment(this.params.currentDate).locale(this.params.lang);
                            }
                        } else {
                            if (typeof this.params.currentDate.isValid === 'undefined' || typeof this.params.currentDate.isValid !== 'function') {
                                var x = this.params.currentDate.getTime();
                                this.currentDate = moment(x, "x").locale(this.params.lang);
                            } else {
                                this.currentDate = this.params.currentDate;
                            }
                        }
                        this.$element.val(this.currentDate.format(this.params.format));
                    } else this.currentDate = moment();
                }
            }

            if (typeof this.params.minDate !== 'undefined' && this.params.minDate !== null) {
                if (typeof this.params.minDate === 'string') {
                    if (typeof this.params.format !== 'undefined' && this.params.format !== null) {
                        this.minDate = moment(this.params.minDate, this.params.format).locale(this.params.lang);
                    } else {
                        this.minDate = moment(this.params.minDate).locale(this.params.lang);
                    }
                } else {
                    if (typeof this.params.minDate.isValid === 'undefined' || typeof this.params.minDate.isValid !== 'function') {
                        var x = this.params.minDate.getTime();
                        this.minDate = moment(x, "x").locale(this.params.lang);
                    } else {
                        this.minDate = this.params.minDate;
                    }
                }
            } else if (this.params.minDate === null) {
                this.minDate = null;
            }

            if (typeof this.params.maxDate !== 'undefined' && this.params.maxDate !== null) {
                if (typeof this.params.maxDate === 'string') {
                    if (typeof this.params.format !== 'undefined' && this.params.format !== null) {
                        this.maxDate = moment(this.params.maxDate, this.params.format).locale(this.params.lang);
                    } else {
                        this.maxDate = moment(this.params.maxDate).locale(this.params.lang);
                    }
                } else {
                    if (typeof this.params.maxDate.isValid === 'undefined' || typeof this.params.maxDate.isValid !== 'function') {
                        var x = this.params.maxDate.getTime();
                        this.maxDate = moment(x, "x").locale(this.params.lang);
                    } else {
                        this.maxDate = this.params.maxDate;
                    }
                }
            } else if (this.params.maxDate === null) {
                this.maxDate = null;
            }

            if (!this.isAfterMinDate(this.currentDate)) {
                this.currentDate = moment(this.minDate);
            }
            if (!this.isBeforeMaxDate(this.currentDate)) {
                this.currentDate = moment(this.maxDate);
            }
        },
        initTemplate: function initTemplate() {
            this.template = '<div class="dtp hidden" id="' + this.name + '">' + '<div class="dtp-content">' + '<div class="dtp-date-view">' + '<header class="dtp-header">' + '<div class="dtp-actual-day">Lundi</div>' + '<div class="dtp-close"><a href="javascript:void(0);"><i class="zmdi zmdi-close-circle-o"></i></a></div>' + '</header>' + '<div class="dtp-date hidden">' + '<div>' + '<div class="left center p10">' + '<a href="javascript:void(0);" class="dtp-select-month-before"><i class="zmdi zmdi-chevron-left"></i></a>' + '</div>' + '<div class="dtp-actual-month p80">MAR</div>' + '<div class="right center p10">' + '<a href="javascript:void(0);" class="dtp-select-month-after"><i class="zmdi zmdi-chevron-right"></i></a>' + '</div>' + '<div class="clearfix"></div>' + '</div>' + '<div class="dtp-actual-num">13</div>' + '<div>' + '<div class="left center p10">' + '<a href="javascript:void(0);" class="dtp-select-year-before"><i class="zmdi zmdi-chevron-left"></i></a>' + '</div>' + '<div class="dtp-actual-year p80">2014</div>' + '<div class="right center p10">' + '<a href="javascript:void(0);" class="dtp-select-year-after"><i class="zmdi zmdi-chevron-right"></i></a>' + '</div>' + '<div class="clearfix"></div>' + '</div>' + '</div>' + '<div class="dtp-time hidden">' + '<div class="dtp-actual-maxtime">23:55</div>' + '</div>' + '<div class="dtp-picker">' + '<div class="dtp-picker-calendar"></div>' + '<div class="dtp-picker-datetime hidden">' + '<div class="dtp-actual-meridien">' + '<div class="left p20">' + '<a class="dtp-meridien-am" href="javascript:void(0);">AM</a>' + '</div>' + '<div class="dtp-actual-time p60"></div>' + '<div class="right p20">' + '<a class="dtp-meridien-pm" href="javascript:void(0);">PM</a>' + '</div>' + '<div class="clearfix"></div>' + '</div>' + '<div id="dtp-svg-clock">' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="dtp-buttons">' + '<button class="dtp-btn-now btn btn--md btn--primary mdl-button mdl-js-button mdl-js-ripple-effect mr8 hidden">' + this.params.nowText + '</button>' + '<button class="dtp-btn-clear btn btn--default btn--md mdl-button mdl-js-button mdl-js-ripple-effect mr8 hidden">' + this.params.clearText + '</button>' + '<button class="dtp-btn-cancel btn btn--red btn--md mdl-button mdl-js-button mdl-js-ripple-effect mr8 mr8 btn-flat">' + this.params.cancelText + '</button>' + '<button class="dtp-btn-ok btn btn--md btn--primary mdl-button mdl-js-button mdl-js-ripple-effect">' + this.params.okText + '</button>' + '<div class="clearfix"></div>' + '</div>' + '</div>' + '</div>';

            if ($('body').find("#" + this.name).length <= 0) {
                $('body').append(this.template);

                if (this) this.dtpElement = $('body').find("#" + this.name);
                this.$dtpElement = $(this.dtpElement);
            }
        },
        initButtons: function initButtons() {
            this._attachEvent(this.$dtpElement.find('.dtp-btn-cancel'), 'click', this._onCancelClick.bind(this));
            this._attachEvent(this.$dtpElement.find('.dtp-btn-ok'), 'click', this._onOKClick.bind(this));
            this._attachEvent(this.$dtpElement.find('a.dtp-select-month-before'), 'click', this._onMonthBeforeClick.bind(this));
            this._attachEvent(this.$dtpElement.find('a.dtp-select-month-after'), 'click', this._onMonthAfterClick.bind(this));
            this._attachEvent(this.$dtpElement.find('a.dtp-select-year-before'), 'click', this._onYearBeforeClick.bind(this));
            this._attachEvent(this.$dtpElement.find('a.dtp-select-year-after'), 'click', this._onYearAfterClick.bind(this));

            if (this.params.clearButton === true) {
                this._attachEvent(this.$dtpElement.find('.dtp-btn-clear'), 'click', this._onClearClick.bind(this));
                this.$dtpElement.find('.dtp-btn-clear').removeClass('hidden');
            }

            if (this.params.nowButton === true) {
                this._attachEvent(this.$dtpElement.find('.dtp-btn-now'), 'click', this._onNowClick.bind(this));
                this.$dtpElement.find('.dtp-btn-now').removeClass('hidden');
            }

            if (this.params.nowButton === true && this.params.clearButton === true) {
                this.$dtpElement.find('.dtp-btn-clear, .dtp-btn-now, .dtp-btn-cancel, .dtp-btn-ok').addClass('btn-xs');
            } else if (this.params.nowButton === true || this.params.clearButton === true) {
                this.$dtpElement.find('.dtp-btn-clear, .dtp-btn-now, .dtp-btn-cancel, .dtp-btn-ok').addClass('btn-sm');
            }
        },
        initMeridienButtons: function initMeridienButtons() {
            this.$dtpElement.find('a.dtp-meridien-am').off('click').on('click', this._onSelectAM.bind(this));
            this.$dtpElement.find('a.dtp-meridien-pm').off('click').on('click', this._onSelectPM.bind(this));
        },
        initDate: function initDate(d) {
            this.currentView = 0;

            this.$dtpElement.find('.dtp-picker-calendar').removeClass('hidden');
            this.$dtpElement.find('.dtp-picker-datetime').addClass('hidden');

            var _date = typeof this.currentDate !== 'undefined' && this.currentDate !== null ? this.currentDate : null;
            var _calendar = this.generateCalendar(this.currentDate);

            if (typeof _calendar.week !== 'undefined' && typeof _calendar.days !== 'undefined') {
                var _template = this.constructHTMLCalendar(_date, _calendar);

                this.$dtpElement.find('a.dtp-select-day').off('click');
                this.$dtpElement.find('.dtp-picker-calendar').html(_template);

                this.$dtpElement.find('a.dtp-select-day').on('click', this._onSelectDate.bind(this));

                this.toggleButtons(_date);
            }

            this._centerBox();
            this.showDate(_date);
        },
        initHours: function initHours() {
            this.currentView = 1;

            this.showTime(this.currentDate);
            this.initMeridienButtons();

            if (this.currentDate.hour() < 12) {
                this.$dtpElement.find('a.dtp-meridien-am').click();
            } else {
                this.$dtpElement.find('a.dtp-meridien-pm').click();
            }

            var hFormat = this.params.shortTime ? 'h' : 'H';

            this.$dtpElement.find('.dtp-picker-datetime').removeClass('hidden');
            this.$dtpElement.find('.dtp-picker-calendar').addClass('hidden');

            var svgClockElement = this.createSVGClock(true);

            for (var i = 0; i < 12; i++) {
                var x = -(162 * Math.sin(-Math.PI * 2 * (i / 12)));
                var y = -(162 * Math.cos(-Math.PI * 2 * (i / 12)));

                var fill = this.currentDate.format(hFormat) == i ? "#02A8F3" : 'transparent';
                var color = this.currentDate.format(hFormat) == i ? "#fff" : '#000';

                var svgHourCircle = this.createSVGElement("circle", {
                    'id': 'h-' + i,
                    'class': 'dtp-select-hour',
                    'style': 'cursor:pointer',
                    r: '30',
                    cx: x,
                    cy: y,
                    fill: fill,
                    'data-hour': i
                });

                var svgHourText = this.createSVGElement("text", {
                    'id': 'th-' + i,
                    'class': 'dtp-select-hour-text',
                    'text-anchor': 'middle',
                    'style': 'cursor:pointer',
                    'font-weight': 'bold',
                    'font-size': '20',
                    x: x,
                    y: y + 7,
                    fill: color,
                    'data-hour': i
                });
                svgHourText.textContent = i === 0 ? this.params.shortTime ? 12 : i : i;

                if (!this.toggleTime(i, true)) {
                    svgHourCircle.className += " disabled";
                    svgHourText.className += " disabled";
                    svgHourText.setAttribute('fill', '#bdbdbd');
                } else {
                    svgHourCircle.addEventListener('click', this._onSelectHour.bind(this));
                    svgHourText.addEventListener('click', this._onSelectHour.bind(this));
                }

                svgClockElement.appendChild(svgHourCircle);
                svgClockElement.appendChild(svgHourText);
            }

            if (!this.params.shortTime) {
                for (var i = 0; i < 12; i++) {
                    var x = -(110 * Math.sin(-Math.PI * 2 * (i / 12)));
                    var y = -(110 * Math.cos(-Math.PI * 2 * (i / 12)));

                    var fill = this.currentDate.format(hFormat) == i + 12 ? "#02A8F3" : 'transparent';
                    var color = this.currentDate.format(hFormat) == i + 12 ? "#fff" : '#000';

                    var svgHourCircle = this.createSVGElement("circle", {
                        'id': 'h-' + (i + 12),
                        'class': 'dtp-select-hour',
                        'style': 'cursor:pointer',
                        r: '30',
                        cx: x,
                        cy: y,
                        fill: fill,
                        'data-hour': i + 12
                    });

                    var svgHourText = this.createSVGElement("text", {
                        'id': 'th-' + (i + 12),
                        'class': 'dtp-select-hour-text',
                        'text-anchor': 'middle',
                        'style': 'cursor:pointer',
                        'font-weight': 'bold',
                        'font-size': '22',
                        x: x,
                        y: y + 7,
                        fill: color,
                        'data-hour': i + 12
                    });
                    svgHourText.textContent = i + 12;

                    if (!this.toggleTime(i + 12, true)) {
                        svgHourCircle.className += " disabled";
                        svgHourText.className += " disabled";
                        svgHourText.setAttribute('fill', '#bdbdbd');
                    } else {
                        svgHourCircle.addEventListener('click', this._onSelectHour.bind(this));
                        svgHourText.addEventListener('click', this._onSelectHour.bind(this));
                    }

                    svgClockElement.appendChild(svgHourCircle);
                    svgClockElement.appendChild(svgHourText);
                }

                this.$dtpElement.find('a.dtp-meridien-am').addClass('hidden');
                this.$dtpElement.find('a.dtp-meridien-pm').addClass('hidden');
            }

            this._centerBox();
        },
        initMinutes: function initMinutes() {
            this.currentView = 2;

            this.showTime(this.currentDate);

            this.initMeridienButtons();

            if (this.currentDate.hour() < 12) {
                this.$dtpElement.find('a.dtp-meridien-am').click();
            } else {
                this.$dtpElement.find('a.dtp-meridien-pm').click();
            }

            this.$dtpElement.find('.dtp-picker-calendar').addClass('hidden');
            this.$dtpElement.find('.dtp-picker-datetime').removeClass('hidden');

            var svgClockElement = this.createSVGClock(false);

            for (var i = 0; i < 60; i++) {
                var s = i % 5 === 0 ? 162 : 158;
                var r = i % 5 === 0 ? 30 : 20;

                var x = -(s * Math.sin(-Math.PI * 2 * (i / 60)));
                var y = -(s * Math.cos(-Math.PI * 2 * (i / 60)));

                var color = this.currentDate.format("m") == i ? "#02A8F3" : 'transparent';

                var svgMinuteCircle = this.createSVGElement("circle", {
                    'id': 'm-' + i,
                    'class': 'dtp-select-minute',
                    'style': 'cursor:pointer',
                    r: r,
                    cx: x,
                    cy: y,
                    fill: color,
                    'data-minute': i
                });

                if (!this.toggleTime(i, false)) {
                    svgMinuteCircle.className += " disabled";
                } else {
                    svgMinuteCircle.addEventListener('click', this._onSelectMinute.bind(this));
                }

                svgClockElement.appendChild(svgMinuteCircle);
            }

            for (var i = 0; i < 60; i++) {
                if (i % 5 === 0) {
                    var x = -(162 * Math.sin(-Math.PI * 2 * (i / 60)));
                    var y = -(162 * Math.cos(-Math.PI * 2 * (i / 60)));

                    var color = this.currentDate.format("m") == i ? "#fff" : '#000';

                    var svgMinuteText = this.createSVGElement("text", {
                        'id': 'tm-' + i,
                        'class': 'dtp-select-minute-text',
                        'text-anchor': 'middle',
                        'style': 'cursor:pointer',
                        'font-weight': 'bold',
                        'font-size': '20',
                        x: x,
                        y: y + 7,
                        fill: color,
                        'data-minute': i
                    });
                    svgMinuteText.textContent = i;

                    if (!this.toggleTime(i, false)) {
                        svgMinuteText.className += " disabled";
                        svgMinuteText.setAttribute('fill', '#bdbdbd');
                    } else {
                        svgMinuteText.addEventListener('click', this._onSelectMinute.bind(this));
                    }

                    svgClockElement.appendChild(svgMinuteText);
                }
            }

            this._centerBox();
        },
        animateHands: function animateHands() {
            var H = this.currentDate.hour();
            var M = this.currentDate.minute();

            var hh = this.$dtpElement.find('.hour-hand');
            hh[0].setAttribute('transform', "rotate(" + 360 * H / 12 + ")");

            var mh = this.$dtpElement.find('.minute-hand');
            mh[0].setAttribute('transform', "rotate(" + 360 * M / 60 + ")");
        },
        createSVGClock: function createSVGClock(isHour) {
            var hl = this.params.shortTime ? -120 : -90;

            var svgElement = this.createSVGElement("svg", { class: 'svg-clock', viewBox: '0,0,400,400' });
            var svgGElement = this.createSVGElement("g", { transform: 'translate(200,200) ' });
            var svgClockFace = this.createSVGElement("circle", {
                r: '192',
                fill: '#eee',
                stroke: '#bdbdbd',
                'stroke-width': 2
            });
            var svgClockCenter = this.createSVGElement("circle", { r: '15', fill: '#757575' });

            svgGElement.appendChild(svgClockFace);

            if (isHour) {
                var svgMinuteHand = this.createSVGElement("line", {
                    class: 'minute-hand',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: -150,
                    stroke: '#bdbdbd',
                    'stroke-width': 2
                });
                var svgHourHand = this.createSVGElement("line", {
                    class: 'hour-hand',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: hl,
                    stroke: '#02A8F3',
                    'stroke-width': 8
                });

                svgGElement.appendChild(svgMinuteHand);
                svgGElement.appendChild(svgHourHand);
            } else {
                var svgMinuteHand = this.createSVGElement("line", {
                    class: 'minute-hand',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: -150,
                    stroke: '#02A8F3',
                    'stroke-width': 2
                });
                var svgHourHand = this.createSVGElement("line", {
                    class: 'hour-hand',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: hl,
                    stroke: '#bdbdbd',
                    'stroke-width': 8
                });

                svgGElement.appendChild(svgHourHand);
                svgGElement.appendChild(svgMinuteHand);
            }

            svgGElement.appendChild(svgClockCenter);

            svgElement.appendChild(svgGElement);

            this.$dtpElement.find("#dtp-svg-clock").empty();
            this.$dtpElement.find("#dtp-svg-clock")[0].appendChild(svgElement);

            this.animateHands();

            return svgGElement;
        },
        createSVGElement: function createSVGElement(tag, attrs) {
            var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
            for (var k in attrs) {
                el.setAttribute(k, attrs[k]);
            }
            return el;
        },
        isAfterMinDate: function isAfterMinDate(date, checkHour, checkMinute) {
            var _return = true;

            if (typeof this.minDate !== 'undefined' && this.minDate !== null) {
                var _minDate = moment(this.minDate);
                var _date = moment(date);

                if (!checkHour && !checkMinute) {
                    _minDate.hour(0);
                    _minDate.minute(0);

                    _date.hour(0);
                    _date.minute(0);
                }

                _minDate.second(0);
                _date.second(0);
                _minDate.millisecond(0);
                _date.millisecond(0);

                if (!checkMinute) {
                    _date.minute(0);
                    _minDate.minute(0);

                    _return = parseInt(_date.format("X")) >= parseInt(_minDate.format("X"));
                } else {
                    _return = parseInt(_date.format("X")) >= parseInt(_minDate.format("X"));
                }
            }

            return _return;
        },
        isBeforeMaxDate: function isBeforeMaxDate(date, checkTime, checkMinute) {
            var _return = true;

            if (typeof this.maxDate !== 'undefined' && this.maxDate !== null) {
                var _maxDate = moment(this.maxDate);
                var _date = moment(date);

                if (!checkTime && !checkMinute) {
                    _maxDate.hour(0);
                    _maxDate.minute(0);

                    _date.hour(0);
                    _date.minute(0);
                }

                _maxDate.second(0);
                _date.second(0);
                _maxDate.millisecond(0);
                _date.millisecond(0);

                if (!checkMinute) {
                    _date.minute(0);
                    _maxDate.minute(0);

                    _return = parseInt(_date.format("X")) <= parseInt(_maxDate.format("X"));
                } else {
                    _return = parseInt(_date.format("X")) <= parseInt(_maxDate.format("X"));
                }
            }

            return _return;
        },
        rotateElement: function rotateElement(el, deg) {
            $(el).css({
                WebkitTransform: 'rotate(' + deg + 'deg)',
                '-moz-transform': 'rotate(' + deg + 'deg)'
            });
        },
        showDate: function showDate(date) {
            if (date) {
                this.$dtpElement.find('.dtp-actual-day').html(date.locale(this.params.lang).format('dddd'));
                this.$dtpElement.find('.dtp-actual-month').html(date.locale(this.params.lang).format('MMM').toUpperCase());
                this.$dtpElement.find('.dtp-actual-num').html(date.locale(this.params.lang).format('DD'));
                this.$dtpElement.find('.dtp-actual-year').html(date.locale(this.params.lang).format('YYYY'));
            }
        },
        showTime: function showTime(date) {
            if (date) {
                var minutes = date.minute();
                var content = (this.params.shortTime ? date.format('hh') : date.format('HH')) + ':' + (minutes.toString().length == 2 ? minutes : '0' + minutes) + (this.params.shortTime ? ' ' + date.format('A') : '');

                if (this.params.date) this.$dtpElement.find('.dtp-actual-time').html(content);else {
                    if (this.params.shortTime) this.$dtpElement.find('.dtp-actual-day').html(date.format('A'));else this.$dtpElement.find('.dtp-actual-day').html('&nbsp;');

                    this.$dtpElement.find('.dtp-actual-maxtime').html(content);
                }
            }
        },
        selectDate: function selectDate(date) {
            if (date) {
                this.currentDate.date(date);

                this.showDate(this.currentDate);
                this.$element.trigger('dateSelected', this.currentDate);
            }
        },
        generateCalendar: function generateCalendar(date) {
            var _calendar = {};

            if (date !== null) {
                var startOfMonth = moment(date).locale(this.params.lang).startOf('month');
                var endOfMonth = moment(date).locale(this.params.lang).endOf('month');

                var iNumDay = startOfMonth.format('d');

                _calendar.week = this.days;
                _calendar.days = [];

                for (var i = startOfMonth.date(); i <= endOfMonth.date(); i++) {
                    if (i === startOfMonth.date()) {
                        var iWeek = _calendar.week.indexOf(iNumDay.toString());
                        if (iWeek > 0) {
                            for (var x = 0; x < iWeek; x++) {
                                _calendar.days.push(0);
                            }
                        }
                    }
                    _calendar.days.push(moment(startOfMonth).locale(this.params.lang).date(i));
                }
            }

            return _calendar;
        },
        constructHTMLCalendar: function constructHTMLCalendar(date, calendar) {
            var _template = "";

            _template += '<div class="dtp-picker-month">' + date.locale(this.params.lang).format('MMMM YYYY') + '</div>';
            _template += '<table class="table dtp-picker-days"><thead>';
            for (var i = 0; i < calendar.week.length; i++) {
                _template += '<th>' + moment(parseInt(calendar.week[i]), "d").locale(this.params.lang).format("dd").substring(0, 1) + '</th>';
            }

            _template += '</thead>';
            _template += '<tbody><tr>';

            for (var i = 0; i < calendar.days.length; i++) {
                if (i % 7 == 0) _template += '</tr><tr>';
                _template += '<td data-date="' + moment(calendar.days[i]).locale(this.params.lang).format("D") + '">';
                if (calendar.days[i] != 0) {
                    if (this.isBeforeMaxDate(moment(calendar.days[i]), false, false) === false || this.isAfterMinDate(moment(calendar.days[i]), false, false) === false) {
                        _template += '<span class="dtp-select-day">' + moment(calendar.days[i]).locale(this.params.lang).format("DD") + '</span>';
                    } else {
                        if (moment(calendar.days[i]).locale(this.params.lang).format("DD") === moment(this.currentDate).locale(this.params.lang).format("DD")) {
                            _template += '<a href="javascript:void(0);" class="dtp-select-day selected">' + moment(calendar.days[i]).locale(this.params.lang).format("DD") + '</a>';
                        } else {
                            _template += '<a href="javascript:void(0);" class="dtp-select-day">' + moment(calendar.days[i]).locale(this.params.lang).format("DD") + '</a>';
                        }
                    }

                    _template += '</td>';
                }
            }
            _template += '</tr></tbody></table>';

            return _template;
        },
        setName: function setName() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
        },
        isPM: function isPM() {
            return this.$dtpElement.find('a.dtp-meridien-pm').hasClass('selected');
        },
        setElementValue: function setElementValue() {
            this.$element.trigger('beforeChange', this.currentDate);
            if (typeof $.material !== 'undefined') {
                this.$element.removeClass('empty');
            }
            this.$element.val(moment(this.currentDate).locale(this.params.lang).format(this.params.format));
            this.$element.trigger('change', this.currentDate);
        },
        toggleButtons: function toggleButtons(date) {
            if (date && date.isValid()) {
                var startOfMonth = moment(date).locale(this.params.lang).startOf('month');
                var endOfMonth = moment(date).locale(this.params.lang).endOf('month');

                if (!this.isAfterMinDate(startOfMonth, false, false)) {
                    this.$dtpElement.find('a.dtp-select-month-before').addClass('invisible');
                } else {
                    this.$dtpElement.find('a.dtp-select-month-before').removeClass('invisible');
                }

                if (!this.isBeforeMaxDate(endOfMonth, false, false)) {
                    this.$dtpElement.find('a.dtp-select-month-after').addClass('invisible');
                } else {
                    this.$dtpElement.find('a.dtp-select-month-after').removeClass('invisible');
                }

                var startOfYear = moment(date).locale(this.params.lang).startOf('year');
                var endOfYear = moment(date).locale(this.params.lang).endOf('year');

                if (!this.isAfterMinDate(startOfYear, false, false)) {
                    this.$dtpElement.find('a.dtp-select-year-before').addClass('invisible');
                } else {
                    this.$dtpElement.find('a.dtp-select-year-before').removeClass('invisible');
                }

                if (!this.isBeforeMaxDate(endOfYear, false, false)) {
                    this.$dtpElement.find('a.dtp-select-year-after').addClass('invisible');
                } else {
                    this.$dtpElement.find('a.dtp-select-year-after').removeClass('invisible');
                }
            }
        },
        toggleTime: function toggleTime(value, isHours) {
            var result = false;

            if (isHours) {
                var _date = moment(this.currentDate);
                _date.hour(this.convertHours(value)).minute(0).second(0);

                result = !(this.isAfterMinDate(_date, true, false) === false || this.isBeforeMaxDate(_date, true, false) === false);
            } else {
                var _date = moment(this.currentDate);
                _date.minute(value).second(0);

                result = !(this.isAfterMinDate(_date, true, true) === false || this.isBeforeMaxDate(_date, true, true) === false);
            }

            return result;
        },
        _attachEvent: function _attachEvent(el, ev, fn) {
            el.on(ev, null, null, fn);
            this._attachedEvents.push([el, ev, fn]);
        },
        _detachEvents: function _detachEvents() {
            for (var i = this._attachedEvents.length - 1; i >= 0; i--) {
                this._attachedEvents[i][0].off(this._attachedEvents[i][1], this._attachedEvents[i][2]);
                this._attachedEvents.splice(i, 1);
            }
        },
        _fireCalendar: function _fireCalendar() {
            this.currentView = 0;
            this.$element.blur();

            this.initDates();

            this.show();

            if (this.params.date) {
                this.$dtpElement.find('.dtp-date').removeClass('hidden');
                this.initDate();
            } else {
                if (this.params.time) {
                    this.$dtpElement.find('.dtp-time').removeClass('hidden');
                    this.initHours();
                }
            }
        },
        _onBackgroundClick: function _onBackgroundClick(e) {
            e.stopPropagation();
            this.hide();
        },
        _onElementClick: function _onElementClick(e) {
            e.stopPropagation();
        },
        _onKeydown: function _onKeydown(e) {
            if (e.which === 27) {
                this.hide();
            }
        },
        _onCloseClick: function _onCloseClick() {
            this.hide();
        },
        _onClearClick: function _onClearClick() {
            this.currentDate = null;
            this.$element.trigger('beforeChange', this.currentDate);
            this.hide();
            if (typeof $.material !== 'undefined') {
                this.$element.addClass('empty');
            }
            this.$element.val('');
            this.$element.trigger('change', this.currentDate);
        },
        _onNowClick: function _onNowClick() {
            this.currentDate = moment();

            if (this.params.date === true) {
                this.showDate(this.currentDate);

                if (this.currentView === 0) {
                    this.initDate();
                }
            }

            if (this.params.time === true) {
                this.showTime(this.currentDate);

                switch (this.currentView) {
                    case 1:
                        this.initHours();
                        break;
                    case 2:
                        this.initMinutes();
                        break;
                }

                this.animateHands();
            }
        },
        _onOKClick: function _onOKClick() {
            switch (this.currentView) {
                case 0:
                    if (this.params.time === true) {
                        this.initHours();
                    } else {
                        this.setElementValue();
                        this.hide();
                    }
                    break;
                case 1:
                    this.initMinutes();
                    break;
                case 2:
                    this.setElementValue();
                    this.hide();
                    break;
            }
        },
        _onCancelClick: function _onCancelClick() {
            if (this.params.time) {
                switch (this.currentView) {
                    case 0:
                        this.hide();
                        break;
                    case 1:
                        if (this.params.date) {
                            this.initDate();
                        } else {
                            this.hide();
                        }
                        break;
                    case 2:
                        this.initHours();
                        break;
                }
            } else {
                this.hide();
            }
        },
        _onMonthBeforeClick: function _onMonthBeforeClick() {
            this.currentDate.subtract(1, 'months');
            this.initDate(this.currentDate);
        },
        _onMonthAfterClick: function _onMonthAfterClick() {
            this.currentDate.add(1, 'months');
            this.initDate(this.currentDate);
        },
        _onYearBeforeClick: function _onYearBeforeClick() {
            this.currentDate.subtract(1, 'years');
            this.initDate(this.currentDate);
        },
        _onYearAfterClick: function _onYearAfterClick() {
            this.currentDate.add(1, 'years');
            this.initDate(this.currentDate);
        },
        _onSelectDate: function _onSelectDate(e) {
            this.$dtpElement.find('a.dtp-select-day').removeClass('selected');
            $(e.currentTarget).addClass('selected');

            this.selectDate($(e.currentTarget).parent().data("date"));

            if (this.params.switchOnClick === true && this.params.time === true) setTimeout(this.initHours.bind(this), 200);

            if (this.params.switchOnClick === true && this.params.time === false) {
                setTimeout(this._onOKClick.bind(this), 200);
            }
        },
        _onSelectHour: function _onSelectHour(e) {
            if (!$(e.target).hasClass('disabled')) {
                var value = $(e.target).data('hour');
                var parent = $(e.target).parent();

                var h = parent.find('.dtp-select-hour');
                for (var i = 0; i < h.length; i++) {
                    $(h[i]).attr('fill', 'transparent');
                }
                var th = parent.find('.dtp-select-hour-text');
                for (var i = 0; i < th.length; i++) {
                    $(th[i]).attr('fill', '#000');
                }

                $(parent.find('#h-' + value)).attr('fill', '#02A8F3');
                $(parent.find('#th-' + value)).attr('fill', '#fff');

                this.currentDate.hour(parseInt(value));

                if (this.params.shortTime === true && this.isPM()) {
                    this.currentDate.add(12, 'hours');
                }

                this.showTime(this.currentDate);

                this.animateHands();

                if (this.params.switchOnClick === true) setTimeout(this.initMinutes.bind(this), 200);
            }
        },
        _onSelectMinute: function _onSelectMinute(e) {
            if (!$(e.target).hasClass('disabled')) {
                var value = $(e.target).data('minute');
                var parent = $(e.target).parent();

                var m = parent.find('.dtp-select-minute');
                for (var i = 0; i < m.length; i++) {
                    $(m[i]).attr('fill', 'transparent');
                }
                var tm = parent.find('.dtp-select-minute-text');
                for (var i = 0; i < tm.length; i++) {
                    $(tm[i]).attr('fill', '#000');
                }

                $(parent.find('#m-' + value)).attr('fill', '#02A8F3');
                $(parent.find('#tm-' + value)).attr('fill', '#fff');

                this.currentDate.minute(parseInt(value));
                this.showTime(this.currentDate);

                this.animateHands();

                if (this.params.switchOnClick === true) setTimeout(function () {
                    this.setElementValue();
                    this.hide();
                }.bind(this), 200);
            }
        },
        _onSelectAM: function _onSelectAM(e) {
            $('.dtp-actual-meridien').find('a').removeClass('selected');
            $(e.currentTarget).addClass('selected');

            if (this.currentDate.hour() >= 12) {
                if (this.currentDate.subtract(12, 'hours')) this.showTime(this.currentDate);
            }
            this.toggleTime(this.currentView === 1);
        },
        _onSelectPM: function _onSelectPM(e) {
            $('.dtp-actual-meridien').find('a').removeClass('selected');
            $(e.currentTarget).addClass('selected');

            if (this.currentDate.hour() < 12) {
                if (this.currentDate.add(12, 'hours')) this.showTime(this.currentDate);
            }
            this.toggleTime(this.currentView === 1);
        },
        convertHours: function convertHours(h) {
            var _return = h;

            if (this.params.shortTime === true) {
                if (h < 12 && this.isPM()) {
                    _return += 12;
                }
            }

            return _return;
        },
        setDate: function setDate(date) {
            this.params.currentDate = date;
            this.initDates();
        },
        setMinDate: function setMinDate(date) {
            this.params.minDate = date;
            this.initDates();
        },
        setMaxDate: function setMaxDate(date) {
            this.params.maxDate = date;
            this.initDates();
        },
        destroy: function destroy() {
            this._detachEvents();
            this.$dtpElement.remove();
        },
        show: function show() {
            this.$dtpElement.removeClass('hidden');
            this._attachEvent($(window), 'keydown', this._onKeydown.bind(this));
            this._centerBox();
        },
        hide: function hide() {
            $(window).off('keydown', null, null, this._onKeydown.bind(this));
            this.$dtpElement.addClass('hidden');
        },
        _centerBox: function _centerBox() {
            var h = (this.$dtpElement.height() - this.$dtpElement.find('.dtp-content').height()) / 2;
            this.$dtpElement.find('.dtp-content').css('marginLeft', -(this.$dtpElement.find('.dtp-content').width() / 2) + 'px');
            this.$dtpElement.find('.dtp-content').css('top', h + 'px');
        },
        enableDays: function enableDays() {
            var enableDays = this.params.enableDays;
            if (enableDays) {
                $(".dtp-picker-days tbody tr td").each(function () {
                    if (!($.inArray($(this).index(), enableDays) >= 0)) {
                        $(this).find('a').css({
                            "background": "#e3e3e3",
                            "cursor": "no-drop",
                            "opacity": "0.5"
                        }).off("click");
                    }
                });
            }
        }

    };
})(jQuery, moment);

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(650))

/***/ }),

/***/ 650:
/***/ (function(module, exports) {

module.exports = "var DateFormatter;!function(){\"use strict\";var e,t,a,r,n,o;n=864e5,o=3600,e=function(e,t){return\"string\"==typeof e&&\"string\"==typeof t&&e.toLowerCase()===t.toLowerCase()},t=function(e,a,r){var n=r||\"0\",o=e.toString();return o.length<a?t(n+o,a):o},a=function(e){var t,r;for(e=e||{},t=1;t<arguments.length;t++)if(r=arguments[t])for(var n in r)r.hasOwnProperty(n)&&(\"object\"==typeof r[n]?a(e[n],r[n]):e[n]=r[n]);return e},r={dateSettings:{days:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],daysShort:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],months:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],monthsShort:[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"],meridiem:[\"AM\",\"PM\"],ordinal:function(e){var t=e%10,a={1:\"st\",2:\"nd\",3:\"rd\"};return 1!==Math.floor(e%100/10)&&a[t]?a[t]:\"th\"}},separators:/[ \\-+\\/\\.T:@]/g,validParts:/[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,intParts:/[djwNzmnyYhHgGis]/g,tzParts:/\\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\\d{4})?)\\b/g,tzClip:/[^-+\\dA-Z]/g},DateFormatter=function(e){var t=this,n=a(r,e);t.dateSettings=n.dateSettings,t.separators=n.separators,t.validParts=n.validParts,t.intParts=n.intParts,t.tzParts=n.tzParts,t.tzClip=n.tzClip},DateFormatter.prototype={constructor:DateFormatter,parseDate:function(t,a){var r,n,o,i,s,d,u,l,f,c,m=this,h=!1,g=!1,p=m.dateSettings,y={date:null,year:null,month:null,day:null,hour:0,min:0,sec:0};if(!t)return void 0;if(t instanceof Date)return t;if(\"number\"==typeof t)return new Date(t);if(\"U\"===a)return o=parseInt(t),o?new Date(1e3*o):t;if(\"string\"!=typeof t)return\"\";if(r=a.match(m.validParts),!r||0===r.length)throw new Error(\"Invalid date format definition.\");for(n=t.replace(m.separators,\"\\x00\").split(\"\\x00\"),o=0;o<n.length;o++)switch(i=n[o],s=parseInt(i),r[o]){case\"y\":case\"Y\":f=i.length,2===f?y.year=parseInt((70>s?\"20\":\"19\")+i):4===f&&(y.year=s),h=!0;break;case\"m\":case\"n\":case\"M\":case\"F\":isNaN(i)?(d=p.monthsShort.indexOf(i),d>-1&&(y.month=d+1),d=p.months.indexOf(i),d>-1&&(y.month=d+1)):s>=1&&12>=s&&(y.month=s),h=!0;break;case\"d\":case\"j\":s>=1&&31>=s&&(y.day=s),h=!0;break;case\"g\":case\"h\":u=r.indexOf(\"a\")>-1?r.indexOf(\"a\"):r.indexOf(\"A\")>-1?r.indexOf(\"A\"):-1,c=n[u],u>-1?(l=e(c,p.meridiem[0])?0:e(c,p.meridiem[1])?12:-1,s>=1&&12>=s&&l>-1?y.hour=s+l-1:s>=0&&23>=s&&(y.hour=s)):s>=0&&23>=s&&(y.hour=s),g=!0;break;case\"G\":case\"H\":s>=0&&23>=s&&(y.hour=s),g=!0;break;case\"i\":s>=0&&59>=s&&(y.min=s),g=!0;break;case\"s\":s>=0&&59>=s&&(y.sec=s),g=!0}if(h===!0&&y.year&&y.month&&y.day)y.date=new Date(y.year,y.month-1,y.day,y.hour,y.min,y.sec,0);else{if(g!==!0)return!1;y.date=new Date(0,0,0,y.hour,y.min,y.sec,0)}return y.date},guessDate:function(e,t){if(\"string\"!=typeof e)return e;var a,r,n,o,i=this,s=e.replace(i.separators,\"\\x00\").split(\"\\x00\"),d=/^[djmn]/g,u=t.match(i.validParts),l=new Date,f=0;if(!d.test(u[0]))return e;for(r=0;r<s.length;r++){switch(f=2,n=s[r],o=parseInt(n.substr(0,2)),r){case 0:\"m\"===u[0]||\"n\"===u[0]?l.setMonth(o-1):l.setDate(o);break;case 1:\"m\"===u[0]||\"n\"===u[0]?l.setDate(o):l.setMonth(o-1);break;case 2:a=l.getFullYear(),n.length<4?(l.setFullYear(parseInt(a.toString().substr(0,4-n.length)+n)),f=n.length):(l.setFullYear=parseInt(n.substr(0,4)),f=4);break;case 3:l.setHours(o);break;case 4:l.setMinutes(o);break;case 5:l.setSeconds(o)}n.substr(f).length>0&&s.splice(r+1,0,n.substr(f))}return l},parseFormat:function(e,a){var r,i=this,s=i.dateSettings,d=/\\\\?(.?)/gi,u=function(e,t){return r[e]?r[e]():t};return r={d:function(){return t(r.j(),2)},D:function(){return s.daysShort[r.w()]},j:function(){return a.getDate()},l:function(){return s.days[r.w()]},N:function(){return r.w()||7},w:function(){return a.getDay()},z:function(){var e=new Date(r.Y(),r.n()-1,r.j()),t=new Date(r.Y(),0,1);return Math.round((e-t)/n)},W:function(){var e=new Date(r.Y(),r.n()-1,r.j()-r.N()+3),a=new Date(e.getFullYear(),0,4);return t(1+Math.round((e-a)/n/7),2)},F:function(){return s.months[a.getMonth()]},m:function(){return t(r.n(),2)},M:function(){return s.monthsShort[a.getMonth()]},n:function(){return a.getMonth()+1},t:function(){return new Date(r.Y(),r.n(),0).getDate()},L:function(){var e=r.Y();return e%4===0&&e%100!==0||e%400===0?1:0},o:function(){var e=r.n(),t=r.W(),a=r.Y();return a+(12===e&&9>t?1:1===e&&t>9?-1:0)},Y:function(){return a.getFullYear()},y:function(){return r.Y().toString().slice(-2)},a:function(){return r.A().toLowerCase()},A:function(){var e=r.G()<12?0:1;return s.meridiem[e]},B:function(){var e=a.getUTCHours()*o,r=60*a.getUTCMinutes(),n=a.getUTCSeconds();return t(Math.floor((e+r+n+o)/86.4)%1e3,3)},g:function(){return r.G()%12||12},G:function(){return a.getHours()},h:function(){return t(r.g(),2)},H:function(){return t(r.G(),2)},i:function(){return t(a.getMinutes(),2)},s:function(){return t(a.getSeconds(),2)},u:function(){return t(1e3*a.getMilliseconds(),6)},e:function(){var e=/\\((.*)\\)/.exec(String(a))[1];return e||\"Coordinated Universal Time\"},T:function(){var e=(String(a).match(i.tzParts)||[\"\"]).pop().replace(i.tzClip,\"\");return e||\"UTC\"},I:function(){var e=new Date(r.Y(),0),t=Date.UTC(r.Y(),0),a=new Date(r.Y(),6),n=Date.UTC(r.Y(),6);return e-t!==a-n?1:0},O:function(){var e=a.getTimezoneOffset(),r=Math.abs(e);return(e>0?\"-\":\"+\")+t(100*Math.floor(r/60)+r%60,4)},P:function(){var e=r.O();return e.substr(0,3)+\":\"+e.substr(3,2)},Z:function(){return 60*-a.getTimezoneOffset()},c:function(){return\"Y-m-d\\\\TH:i:sP\".replace(d,u)},r:function(){return\"D, d M Y H:i:s O\".replace(d,u)},U:function(){return a.getTime()/1e3||0}},u(e,e)},formatDate:function(e,t){var a,r,n,o,i,s=this,d=\"\";if(\"string\"==typeof e&&(e=s.parseDate(e,t),e===!1))return!1;if(e instanceof Date){for(n=t.length,a=0;n>a;a++)i=t.charAt(a),\"S\"!==i&&(o=s.parseFormat(i,e),a!==n-1&&s.intParts.test(i)&&\"S\"===t.charAt(a+1)&&(r=parseInt(o),o+=s.dateSettings.ordinal(r)),d+=o);return d}return\"\"}}}(),function(e){\"function\"==typeof define&&define.amd?define([\"jquery\",\"jquery-mousewheel\"],e):\"object\"==typeof exports?module.exports=e:e(jQuery)}(function(e){\"use strict\";function t(e,t,a){this.date=e,this.desc=t,this.style=a}var a={i18n:{ar:{months:[\"كانون الثاني\",\"شباط\",\"آذار\",\"نيسان\",\"مايو\",\"حزيران\",\"تموز\",\"آب\",\"أيلول\",\"تشرين الأول\",\"تشرين الثاني\",\"كانون الأول\"],dayOfWeekShort:[\"ن\",\"ث\",\"ع\",\"خ\",\"ج\",\"س\",\"ح\"],dayOfWeek:[\"الأحد\",\"الاثنين\",\"الثلاثاء\",\"الأربعاء\",\"الخميس\",\"الجمعة\",\"السبت\",\"الأحد\"]},ro:{months:[\"Ianuarie\",\"Februarie\",\"Martie\",\"Aprilie\",\"Mai\",\"Iunie\",\"Iulie\",\"August\",\"Septembrie\",\"Octombrie\",\"Noiembrie\",\"Decembrie\"],dayOfWeekShort:[\"Du\",\"Lu\",\"Ma\",\"Mi\",\"Jo\",\"Vi\",\"Sâ\"],dayOfWeek:[\"Duminică\",\"Luni\",\"Marţi\",\"Miercuri\",\"Joi\",\"Vineri\",\"Sâmbătă\"]},id:{months:[\"Januari\",\"Februari\",\"Maret\",\"April\",\"Mei\",\"Juni\",\"Juli\",\"Agustus\",\"September\",\"Oktober\",\"November\",\"Desember\"],dayOfWeekShort:[\"Min\",\"Sen\",\"Sel\",\"Rab\",\"Kam\",\"Jum\",\"Sab\"],dayOfWeek:[\"Minggu\",\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\",\"Sabtu\"]},is:{months:[\"Janúar\",\"Febrúar\",\"Mars\",\"Apríl\",\"Maí\",\"Júní\",\"Júlí\",\"Ágúst\",\"September\",\"Október\",\"Nóvember\",\"Desember\"],dayOfWeekShort:[\"Sun\",\"Mán\",\"Þrið\",\"Mið\",\"Fim\",\"Fös\",\"Lau\"],dayOfWeek:[\"Sunnudagur\",\"Mánudagur\",\"Þriðjudagur\",\"Miðvikudagur\",\"Fimmtudagur\",\"Föstudagur\",\"Laugardagur\"]},bg:{months:[\"Януари\",\"Февруари\",\"Март\",\"Април\",\"Май\",\"Юни\",\"Юли\",\"Август\",\"Септември\",\"Октомври\",\"Ноември\",\"Декември\"],dayOfWeekShort:[\"Нд\",\"Пн\",\"Вт\",\"Ср\",\"Чт\",\"Пт\",\"Сб\"],dayOfWeek:[\"Неделя\",\"Понеделник\",\"Вторник\",\"Сряда\",\"Четвъртък\",\"Петък\",\"Събота\"]},fa:{months:[\"فروردین\",\"اردیبهشت\",\"خرداد\",\"تیر\",\"مرداد\",\"شهریور\",\"مهر\",\"آبان\",\"آذر\",\"دی\",\"بهمن\",\"اسفند\"],dayOfWeekShort:[\"یکشنبه\",\"دوشنبه\",\"سه شنبه\",\"چهارشنبه\",\"پنجشنبه\",\"جمعه\",\"شنبه\"],dayOfWeek:[\"یک‌شنبه\",\"دوشنبه\",\"سه‌شنبه\",\"چهارشنبه\",\"پنج‌شنبه\",\"جمعه\",\"شنبه\",\"یک‌شنبه\"]},ru:{months:[\"Январь\",\"Февраль\",\"Март\",\"Апрель\",\"Май\",\"Июнь\",\"Июль\",\"Август\",\"Сентябрь\",\"Октябрь\",\"Ноябрь\",\"Декабрь\"],dayOfWeekShort:[\"Вс\",\"Пн\",\"Вт\",\"Ср\",\"Чт\",\"Пт\",\"Сб\"],dayOfWeek:[\"Воскресенье\",\"Понедельник\",\"Вторник\",\"Среда\",\"Четверг\",\"Пятница\",\"Суббота\"]},uk:{months:[\"Січень\",\"Лютий\",\"Березень\",\"Квітень\",\"Травень\",\"Червень\",\"Липень\",\"Серпень\",\"Вересень\",\"Жовтень\",\"Листопад\",\"Грудень\"],dayOfWeekShort:[\"Ндл\",\"Пнд\",\"Втр\",\"Срд\",\"Чтв\",\"Птн\",\"Сбт\"],dayOfWeek:[\"Неділя\",\"Понеділок\",\"Вівторок\",\"Середа\",\"Четвер\",\"П'ятниця\",\"Субота\"]},en:{months:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],dayOfWeekShort:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],dayOfWeek:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"]},el:{months:[\"Ιανουάριος\",\"Φεβρουάριος\",\"Μάρτιος\",\"Απρίλιος\",\"Μάιος\",\"Ιούνιος\",\"Ιούλιος\",\"Αύγουστος\",\"Σεπτέμβριος\",\"Οκτώβριος\",\"Νοέμβριος\",\"Δεκέμβριος\"],dayOfWeekShort:[\"Κυρ\",\"Δευ\",\"Τρι\",\"Τετ\",\"Πεμ\",\"Παρ\",\"Σαβ\"],dayOfWeek:[\"Κυριακή\",\"Δευτέρα\",\"Τρίτη\",\"Τετάρτη\",\"Πέμπτη\",\"Παρασκευή\",\"Σάββατο\"]},de:{months:[\"Januar\",\"Februar\",\"März\",\"April\",\"Mai\",\"Juni\",\"Juli\",\"August\",\"September\",\"Oktober\",\"November\",\"Dezember\"],dayOfWeekShort:[\"So\",\"Mo\",\"Di\",\"Mi\",\"Do\",\"Fr\",\"Sa\"],dayOfWeek:[\"Sonntag\",\"Montag\",\"Dienstag\",\"Mittwoch\",\"Donnerstag\",\"Freitag\",\"Samstag\"]},nl:{months:[\"januari\",\"februari\",\"maart\",\"april\",\"mei\",\"juni\",\"juli\",\"augustus\",\"september\",\"oktober\",\"november\",\"december\"],dayOfWeekShort:[\"zo\",\"ma\",\"di\",\"wo\",\"do\",\"vr\",\"za\"],dayOfWeek:[\"zondag\",\"maandag\",\"dinsdag\",\"woensdag\",\"donderdag\",\"vrijdag\",\"zaterdag\"]},tr:{months:[\"Ocak\",\"Şubat\",\"Mart\",\"Nisan\",\"Mayıs\",\"Haziran\",\"Temmuz\",\"Ağustos\",\"Eylül\",\"Ekim\",\"Kasım\",\"Aralık\"],dayOfWeekShort:[\"Paz\",\"Pts\",\"Sal\",\"Çar\",\"Per\",\"Cum\",\"Cts\"],dayOfWeek:[\"Pazar\",\"Pazartesi\",\"Salı\",\"Çarşamba\",\"Perşembe\",\"Cuma\",\"Cumartesi\"]},fr:{months:[\"Janvier\",\"Février\",\"Mars\",\"Avril\",\"Mai\",\"Juin\",\"Juillet\",\"Août\",\"Septembre\",\"Octobre\",\"Novembre\",\"Décembre\"],dayOfWeekShort:[\"Dim\",\"Lun\",\"Mar\",\"Mer\",\"Jeu\",\"Ven\",\"Sam\"],dayOfWeek:[\"dimanche\",\"lundi\",\"mardi\",\"mercredi\",\"jeudi\",\"vendredi\",\"samedi\"]},es:{months:[\"Enero\",\"Febrero\",\"Marzo\",\"Abril\",\"Mayo\",\"Junio\",\"Julio\",\"Agosto\",\"Septiembre\",\"Octubre\",\"Noviembre\",\"Diciembre\"],dayOfWeekShort:[\"Dom\",\"Lun\",\"Mar\",\"Mié\",\"Jue\",\"Vie\",\"Sáb\"],dayOfWeek:[\"Domingo\",\"Lunes\",\"Martes\",\"Miércoles\",\"Jueves\",\"Viernes\",\"Sábado\"]},th:{months:[\"มกราคม\",\"กุมภาพันธ์\",\"มีนาคม\",\"เมษายน\",\"พฤษภาคม\",\"มิถุนายน\",\"กรกฎาคม\",\"สิงหาคม\",\"กันยายน\",\"ตุลาคม\",\"พฤศจิกายน\",\"ธันวาคม\"],dayOfWeekShort:[\"อา.\",\"จ.\",\"อ.\",\"พ.\",\"พฤ.\",\"ศ.\",\"ส.\"],dayOfWeek:[\"อาทิตย์\",\"จันทร์\",\"อังคาร\",\"พุธ\",\"พฤหัส\",\"ศุกร์\",\"เสาร์\",\"อาทิตย์\"]},pl:{months:[\"styczeń\",\"luty\",\"marzec\",\"kwiecień\",\"maj\",\"czerwiec\",\"lipiec\",\"sierpień\",\"wrzesień\",\"październik\",\"listopad\",\"grudzień\"],dayOfWeekShort:[\"nd\",\"pn\",\"wt\",\"śr\",\"cz\",\"pt\",\"sb\"],dayOfWeek:[\"niedziela\",\"poniedziałek\",\"wtorek\",\"środa\",\"czwartek\",\"piątek\",\"sobota\"]},pt:{months:[\"Janeiro\",\"Fevereiro\",\"Março\",\"Abril\",\"Maio\",\"Junho\",\"Julho\",\"Agosto\",\"Setembro\",\"Outubro\",\"Novembro\",\"Dezembro\"],dayOfWeekShort:[\"Dom\",\"Seg\",\"Ter\",\"Qua\",\"Qui\",\"Sex\",\"Sab\"],dayOfWeek:[\"Domingo\",\"Segunda\",\"Terça\",\"Quarta\",\"Quinta\",\"Sexta\",\"Sábado\"]},ch:{months:[\"一月\",\"二月\",\"三月\",\"四月\",\"五月\",\"六月\",\"七月\",\"八月\",\"九月\",\"十月\",\"十一月\",\"十二月\"],dayOfWeekShort:[\"日\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\"]},se:{months:[\"Januari\",\"Februari\",\"Mars\",\"April\",\"Maj\",\"Juni\",\"Juli\",\"Augusti\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Sön\",\"Mån\",\"Tis\",\"Ons\",\"Tor\",\"Fre\",\"Lör\"]},kr:{months:[\"1월\",\"2월\",\"3월\",\"4월\",\"5월\",\"6월\",\"7월\",\"8월\",\"9월\",\"10월\",\"11월\",\"12월\"],dayOfWeekShort:[\"일\",\"월\",\"화\",\"수\",\"목\",\"금\",\"토\"],dayOfWeek:[\"일요일\",\"월요일\",\"화요일\",\"수요일\",\"목요일\",\"금요일\",\"토요일\"]},it:{months:[\"Gennaio\",\"Febbraio\",\"Marzo\",\"Aprile\",\"Maggio\",\"Giugno\",\"Luglio\",\"Agosto\",\"Settembre\",\"Ottobre\",\"Novembre\",\"Dicembre\"],dayOfWeekShort:[\"Dom\",\"Lun\",\"Mar\",\"Mer\",\"Gio\",\"Ven\",\"Sab\"],dayOfWeek:[\"Domenica\",\"Lunedì\",\"Martedì\",\"Mercoledì\",\"Giovedì\",\"Venerdì\",\"Sabato\"]},da:{months:[\"January\",\"Februar\",\"Marts\",\"April\",\"Maj\",\"Juni\",\"July\",\"August\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Søn\",\"Man\",\"Tir\",\"Ons\",\"Tor\",\"Fre\",\"Lør\"],dayOfWeek:[\"søndag\",\"mandag\",\"tirsdag\",\"onsdag\",\"torsdag\",\"fredag\",\"lørdag\"]},no:{months:[\"Januar\",\"Februar\",\"Mars\",\"April\",\"Mai\",\"Juni\",\"Juli\",\"August\",\"September\",\"Oktober\",\"November\",\"Desember\"],dayOfWeekShort:[\"Søn\",\"Man\",\"Tir\",\"Ons\",\"Tor\",\"Fre\",\"Lør\"],dayOfWeek:[\"Søndag\",\"Mandag\",\"Tirsdag\",\"Onsdag\",\"Torsdag\",\"Fredag\",\"Lørdag\"]},ja:{months:[\"1月\",\"2月\",\"3月\",\"4月\",\"5月\",\"6月\",\"7月\",\"8月\",\"9月\",\"10月\",\"11月\",\"12月\"],dayOfWeekShort:[\"日\",\"月\",\"火\",\"水\",\"木\",\"金\",\"土\"],dayOfWeek:[\"日曜\",\"月曜\",\"火曜\",\"水曜\",\"木曜\",\"金曜\",\"土曜\"]},vi:{months:[\"Tháng 1\",\"Tháng 2\",\"Tháng 3\",\"Tháng 4\",\"Tháng 5\",\"Tháng 6\",\"Tháng 7\",\"Tháng 8\",\"Tháng 9\",\"Tháng 10\",\"Tháng 11\",\"Tháng 12\"],dayOfWeekShort:[\"CN\",\"T2\",\"T3\",\"T4\",\"T5\",\"T6\",\"T7\"],dayOfWeek:[\"Chủ nhật\",\"Thứ hai\",\"Thứ ba\",\"Thứ tư\",\"Thứ năm\",\"Thứ sáu\",\"Thứ bảy\"]},sl:{months:[\"Januar\",\"Februar\",\"Marec\",\"April\",\"Maj\",\"Junij\",\"Julij\",\"Avgust\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Tor\",\"Sre\",\"Čet\",\"Pet\",\"Sob\"],dayOfWeek:[\"Nedelja\",\"Ponedeljek\",\"Torek\",\"Sreda\",\"Četrtek\",\"Petek\",\"Sobota\"]},cs:{months:[\"Leden\",\"Únor\",\"Březen\",\"Duben\",\"Květen\",\"Červen\",\"Červenec\",\"Srpen\",\"Září\",\"Říjen\",\"Listopad\",\"Prosinec\"],dayOfWeekShort:[\"Ne\",\"Po\",\"Út\",\"St\",\"Čt\",\"Pá\",\"So\"]},hu:{months:[\"Január\",\"Február\",\"Március\",\"Április\",\"Május\",\"Június\",\"Július\",\"Augusztus\",\"Szeptember\",\"Október\",\"November\",\"December\"],dayOfWeekShort:[\"Va\",\"Hé\",\"Ke\",\"Sze\",\"Cs\",\"Pé\",\"Szo\"],dayOfWeek:[\"vasárnap\",\"hétfő\",\"kedd\",\"szerda\",\"csütörtök\",\"péntek\",\"szombat\"]},az:{months:[\"Yanvar\",\"Fevral\",\"Mart\",\"Aprel\",\"May\",\"Iyun\",\"Iyul\",\"Avqust\",\"Sentyabr\",\"Oktyabr\",\"Noyabr\",\"Dekabr\"],dayOfWeekShort:[\"B\",\"Be\",\"Ça\",\"Ç\",\"Ca\",\"C\",\"Ş\"],dayOfWeek:[\"Bazar\",\"Bazar ertəsi\",\"Çərşənbə axşamı\",\"Çərşənbə\",\"Cümə axşamı\",\"Cümə\",\"Şənbə\"]},bs:{months:[\"Januar\",\"Februar\",\"Mart\",\"April\",\"Maj\",\"Jun\",\"Jul\",\"Avgust\",\"Septembar\",\"Oktobar\",\"Novembar\",\"Decembar\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Uto\",\"Sri\",\"Čet\",\"Pet\",\"Sub\"],dayOfWeek:[\"Nedjelja\",\"Ponedjeljak\",\"Utorak\",\"Srijeda\",\"Četvrtak\",\"Petak\",\"Subota\"]},ca:{months:[\"Gener\",\"Febrer\",\"Març\",\"Abril\",\"Maig\",\"Juny\",\"Juliol\",\"Agost\",\"Setembre\",\"Octubre\",\"Novembre\",\"Desembre\"],dayOfWeekShort:[\"Dg\",\"Dl\",\"Dt\",\"Dc\",\"Dj\",\"Dv\",\"Ds\"],dayOfWeek:[\"Diumenge\",\"Dilluns\",\"Dimarts\",\"Dimecres\",\"Dijous\",\"Divendres\",\"Dissabte\"]},\"en-GB\":{months:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],dayOfWeekShort:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],dayOfWeek:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"]},et:{months:[\"Jaanuar\",\"Veebruar\",\"Märts\",\"Aprill\",\"Mai\",\"Juuni\",\"Juuli\",\"August\",\"September\",\"Oktoober\",\"November\",\"Detsember\"],dayOfWeekShort:[\"P\",\"E\",\"T\",\"K\",\"N\",\"R\",\"L\"],dayOfWeek:[\"Pühapäev\",\"Esmaspäev\",\"Teisipäev\",\"Kolmapäev\",\"Neljapäev\",\"Reede\",\"Laupäev\"]},eu:{months:[\"Urtarrila\",\"Otsaila\",\"Martxoa\",\"Apirila\",\"Maiatza\",\"Ekaina\",\"Uztaila\",\"Abuztua\",\"Iraila\",\"Urria\",\"Azaroa\",\"Abendua\"],dayOfWeekShort:[\"Ig.\",\"Al.\",\"Ar.\",\"Az.\",\"Og.\",\"Or.\",\"La.\"],dayOfWeek:[\"Igandea\",\"Astelehena\",\"Asteartea\",\"Asteazkena\",\"Osteguna\",\"Ostirala\",\"Larunbata\"]},fi:{months:[\"Tammikuu\",\"Helmikuu\",\"Maaliskuu\",\"Huhtikuu\",\"Toukokuu\",\"Kesäkuu\",\"Heinäkuu\",\"Elokuu\",\"Syyskuu\",\"Lokakuu\",\"Marraskuu\",\"Joulukuu\"],dayOfWeekShort:[\"Su\",\"Ma\",\"Ti\",\"Ke\",\"To\",\"Pe\",\"La\"],dayOfWeek:[\"sunnuntai\",\"maanantai\",\"tiistai\",\"keskiviikko\",\"torstai\",\"perjantai\",\"lauantai\"]},gl:{months:[\"Xan\",\"Feb\",\"Maz\",\"Abr\",\"Mai\",\"Xun\",\"Xul\",\"Ago\",\"Set\",\"Out\",\"Nov\",\"Dec\"],dayOfWeekShort:[\"Dom\",\"Lun\",\"Mar\",\"Mer\",\"Xov\",\"Ven\",\"Sab\"],dayOfWeek:[\"Domingo\",\"Luns\",\"Martes\",\"Mércores\",\"Xoves\",\"Venres\",\"Sábado\"]},hr:{months:[\"Siječanj\",\"Veljača\",\"Ožujak\",\"Travanj\",\"Svibanj\",\"Lipanj\",\"Srpanj\",\"Kolovoz\",\"Rujan\",\"Listopad\",\"Studeni\",\"Prosinac\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Uto\",\"Sri\",\"Čet\",\"Pet\",\"Sub\"],dayOfWeek:[\"Nedjelja\",\"Ponedjeljak\",\"Utorak\",\"Srijeda\",\"Četvrtak\",\"Petak\",\"Subota\"]},ko:{months:[\"1월\",\"2월\",\"3월\",\"4월\",\"5월\",\"6월\",\"7월\",\"8월\",\"9월\",\"10월\",\"11월\",\"12월\"],dayOfWeekShort:[\"일\",\"월\",\"화\",\"수\",\"목\",\"금\",\"토\"],dayOfWeek:[\"일요일\",\"월요일\",\"화요일\",\"수요일\",\"목요일\",\"금요일\",\"토요일\"]},lt:{months:[\"Sausio\",\"Vasario\",\"Kovo\",\"Balandžio\",\"Gegužės\",\"Birželio\",\"Liepos\",\"Rugpjūčio\",\"Rugsėjo\",\"Spalio\",\"Lapkričio\",\"Gruodžio\"],dayOfWeekShort:[\"Sek\",\"Pir\",\"Ant\",\"Tre\",\"Ket\",\"Pen\",\"Šeš\"],dayOfWeek:[\"Sekmadienis\",\"Pirmadienis\",\"Antradienis\",\"Trečiadienis\",\"Ketvirtadienis\",\"Penktadienis\",\"Šeštadienis\"]},lv:{months:[\"Janvāris\",\"Februāris\",\"Marts\",\"Aprīlis \",\"Maijs\",\"Jūnijs\",\"Jūlijs\",\"Augusts\",\"Septembris\",\"Oktobris\",\"Novembris\",\"Decembris\"],dayOfWeekShort:[\"Sv\",\"Pr\",\"Ot\",\"Tr\",\"Ct\",\"Pk\",\"St\"],dayOfWeek:[\"Svētdiena\",\"Pirmdiena\",\"Otrdiena\",\"Trešdiena\",\"Ceturtdiena\",\"Piektdiena\",\"Sestdiena\"]},mk:{months:[\"јануари\",\"февруари\",\"март\",\"април\",\"мај\",\"јуни\",\"јули\",\"август\",\"септември\",\"октомври\",\"ноември\",\"декември\"],dayOfWeekShort:[\"нед\",\"пон\",\"вто\",\"сре\",\"чет\",\"пет\",\"саб\"],dayOfWeek:[\"Недела\",\"Понеделник\",\"Вторник\",\"Среда\",\"Четврток\",\"Петок\",\"Сабота\"]},mn:{months:[\"1-р сар\",\"2-р сар\",\"3-р сар\",\"4-р сар\",\"5-р сар\",\"6-р сар\",\"7-р сар\",\"8-р сар\",\"9-р сар\",\"10-р сар\",\"11-р сар\",\"12-р сар\"],dayOfWeekShort:[\"Дав\",\"Мяг\",\"Лха\",\"Пүр\",\"Бсн\",\"Бям\",\"Ням\"],dayOfWeek:[\"Даваа\",\"Мягмар\",\"Лхагва\",\"Пүрэв\",\"Баасан\",\"Бямба\",\"Ням\"]},\"pt-BR\":{months:[\"Janeiro\",\"Fevereiro\",\"Março\",\"Abril\",\"Maio\",\"Junho\",\"Julho\",\"Agosto\",\"Setembro\",\"Outubro\",\"Novembro\",\"Dezembro\"],dayOfWeekShort:[\"Dom\",\"Seg\",\"Ter\",\"Qua\",\"Qui\",\"Sex\",\"Sáb\"],dayOfWeek:[\"Domingo\",\"Segunda\",\"Terça\",\"Quarta\",\"Quinta\",\"Sexta\",\"Sábado\"]},sk:{months:[\"Január\",\"Február\",\"Marec\",\"Apríl\",\"Máj\",\"Jún\",\"Júl\",\"August\",\"September\",\"Október\",\"November\",\"December\"],dayOfWeekShort:[\"Ne\",\"Po\",\"Ut\",\"St\",\"Št\",\"Pi\",\"So\"],dayOfWeek:[\"Nedeľa\",\"Pondelok\",\"Utorok\",\"Streda\",\"Štvrtok\",\"Piatok\",\"Sobota\"]},sq:{months:[\"Janar\",\"Shkurt\",\"Mars\",\"Prill\",\"Maj\",\"Qershor\",\"Korrik\",\"Gusht\",\"Shtator\",\"Tetor\",\"Nëntor\",\"Dhjetor\"],dayOfWeekShort:[\"Die\",\"Hën\",\"Mar\",\"Mër\",\"Enj\",\"Pre\",\"Shtu\"],dayOfWeek:[\"E Diel\",\"E Hënë\",\"E Martē\",\"E Mërkurë\",\"E Enjte\",\"E Premte\",\"E Shtunë\"]},\"sr-YU\":{months:[\"Januar\",\"Februar\",\"Mart\",\"April\",\"Maj\",\"Jun\",\"Jul\",\"Avgust\",\"Septembar\",\"Oktobar\",\"Novembar\",\"Decembar\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Uto\",\"Sre\",\"čet\",\"Pet\",\"Sub\"],dayOfWeek:[\"Nedelja\",\"Ponedeljak\",\"Utorak\",\"Sreda\",\"Četvrtak\",\"Petak\",\"Subota\"]},sr:{months:[\"јануар\",\"фебруар\",\"март\",\"април\",\"мај\",\"јун\",\"јул\",\"август\",\"септембар\",\"октобар\",\"новембар\",\"децембар\"],dayOfWeekShort:[\"нед\",\"пон\",\"уто\",\"сре\",\"чет\",\"пет\",\"суб\"],dayOfWeek:[\"Недеља\",\"Понедељак\",\"Уторак\",\"Среда\",\"Четвртак\",\"Петак\",\"Субота\"]},sv:{months:[\"Januari\",\"Februari\",\"Mars\",\"April\",\"Maj\",\"Juni\",\"Juli\",\"Augusti\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Sön\",\"Mån\",\"Tis\",\"Ons\",\"Tor\",\"Fre\",\"Lör\"],dayOfWeek:[\"Söndag\",\"Måndag\",\"Tisdag\",\"Onsdag\",\"Torsdag\",\"Fredag\",\"Lördag\"]},\"zh-TW\":{months:[\"一月\",\"二月\",\"三月\",\"四月\",\"五月\",\"六月\",\"七月\",\"八月\",\"九月\",\"十月\",\"十一月\",\"十二月\"],dayOfWeekShort:[\"日\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\"],dayOfWeek:[\"星期日\",\"星期一\",\"星期二\",\"星期三\",\"星期四\",\"星期五\",\"星期六\"]},zh:{months:[\"一月\",\"二月\",\"三月\",\"四月\",\"五月\",\"六月\",\"七月\",\"八月\",\"九月\",\"十月\",\"十一月\",\"十二月\"],dayOfWeekShort:[\"日\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\"],dayOfWeek:[\"星期日\",\"星期一\",\"星期二\",\"星期三\",\"星期四\",\"星期五\",\"星期六\"]},he:{months:[\"ינואר\",\"פברואר\",\"מרץ\",\"אפריל\",\"מאי\",\"יוני\",\"יולי\",\"אוגוסט\",\"ספטמבר\",\"אוקטובר\",\"נובמבר\",\"דצמבר\"],dayOfWeekShort:[\"א'\",\"ב'\",\"ג'\",\"ד'\",\"ה'\",\"ו'\",\"שבת\"],dayOfWeek:[\"ראשון\",\"שני\",\"שלישי\",\"רביעי\",\"חמישי\",\"שישי\",\"שבת\",\"ראשון\"]},hy:{months:[\"Հունվար\",\"Փետրվար\",\"Մարտ\",\"Ապրիլ\",\"Մայիս\",\"Հունիս\",\"Հուլիս\",\"Օգոստոս\",\"Սեպտեմբեր\",\"Հոկտեմբեր\",\"Նոյեմբեր\",\"Դեկտեմբեր\"],dayOfWeekShort:[\"Կի\",\"Երկ\",\"Երք\",\"Չոր\",\"Հնգ\",\"Ուրբ\",\"Շբթ\"],dayOfWeek:[\"Կիրակի\",\"Երկուշաբթի\",\"Երեքշաբթի\",\"Չորեքշաբթի\",\"Հինգշաբթի\",\"Ուրբաթ\",\"Շաբաթ\"]},kg:{months:[\"Үчтүн айы\",\"Бирдин айы\",\"Жалган Куран\",\"Чын Куран\",\"Бугу\",\"Кулжа\",\"Теке\",\"Баш Оона\",\"Аяк Оона\",\"Тогуздун айы\",\"Жетинин айы\",\"Бештин айы\"],dayOfWeekShort:[\"Жек\",\"Дүй\",\"Шей\",\"Шар\",\"Бей\",\"Жум\",\"Ише\"],dayOfWeek:[\"Жекшемб\",\"Дүйшөмб\",\"Шейшемб\",\"Шаршемб\",\"Бейшемби\",\"Жума\",\"Ишенб\"]},rm:{months:[\"Schaner\",\"Favrer\",\"Mars\",\"Avrigl\",\"Matg\",\"Zercladur\",\"Fanadur\",\"Avust\",\"Settember\",\"October\",\"November\",\"December\"],dayOfWeekShort:[\"Du\",\"Gli\",\"Ma\",\"Me\",\"Gie\",\"Ve\",\"So\"],dayOfWeek:[\"Dumengia\",\"Glindesdi\",\"Mardi\",\"Mesemna\",\"Gievgia\",\"Venderdi\",\"Sonda\"]},ka:{months:[\"იანვარი\",\"თებერვალი\",\"მარტი\",\"აპრილი\",\"მაისი\",\"ივნისი\",\"ივლისი\",\"აგვისტო\",\"სექტემბერი\",\"ოქტომბერი\",\"ნოემბერი\",\"დეკემბერი\"],dayOfWeekShort:[\"კვ\",\"ორშ\",\"სამშ\",\"ოთხ\",\"ხუთ\",\"პარ\",\"შაბ\"],dayOfWeek:[\"კვირა\",\"ორშაბათი\",\"სამშაბათი\",\"ოთხშაბათი\",\"ხუთშაბათი\",\"პარასკევი\",\"შაბათი\"]}},value:\"\",rtl:!1,format:\"Y/m/d H:i\",formatTime:\"H:i\",formatDate:\"Y/m/d\",startDate:!1,step:60,monthChangeSpinner:!0,closeOnDateSelect:!1,closeOnTimeSelect:!0,closeOnWithoutClick:!0,closeOnInputClick:!0,timepicker:!0,datepicker:!0,weeks:!1,defaultTime:!1,defaultDate:!1,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,disabledMinTime:!1,disabledMaxTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,theme:\"\",onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onGetWeekOfYear:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:\"xdsoft_next\",prev:\"xdsoft_prev\",dayOfWeekStart:0,parentID:\"body\",timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,prevButton:!0,nextButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,monthStart:0,monthEnd:11,style:\"\",id:\"\",fixed:!1,roundTime:\"round\",className:\"\",weekends:[],highlightedDates:[],highlightedPeriods:[],allowDates:[],allowDateRe:null,disabledDates:[],disabledWeekDays:[],yearOffset:0,beforeShowDay:null,enterLikeTab:!0,showApplyButton:!1},r=null,n=\"en\",o=\"en\",i={meridiem:[\"AM\",\"PM\"]},s=function(){var t=a.i18n[o],n={days:t.dayOfWeek,daysShort:t.dayOfWeekShort,months:t.months,monthsShort:e.map(t.months,function(e){return e.substring(0,3)})};r=new DateFormatter({dateSettings:e.extend({},i,n)})};e.datetimepicker={setLocale:function(e){var t=a.i18n[e]?e:n;o!=t&&(o=t,s())},setDateFormatter:function(e){r=e},RFC_2822:\"D, d M Y H:i:s O\",ATOM:\"Y-m-dTH:i:sP\",ISO_8601:\"Y-m-dTH:i:sO\",RFC_822:\"D, d M y H:i:s O\",RFC_850:\"l, d-M-y H:i:s T\",RFC_1036:\"D, d M y H:i:s O\",RFC_1123:\"D, d M Y H:i:s O\",RSS:\"D, d M Y H:i:s O\",W3C:\"Y-m-dTH:i:sP\"},s(),window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var a=/(\\-([a-z]){1})/g;return\"float\"===t&&(t=\"styleFloat\"),a.test(t)&&(t=t.replace(a,function(e,t,a){return a.toUpperCase()})),e.currentStyle[t]||null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var a,r;for(a=t||0,r=this.length;r>a;a+=1)if(this[a]===e)return a;return-1}),Date.prototype.countDaysInMonth=function(){return new Date(this.getFullYear(),this.getMonth()+1,0).getDate()},e.fn.xdsoftScroller=function(t){return this.each(function(){var a,r,n,o,i,s=e(this),d=function(e){var t,a={x:0,y:0};return\"touchstart\"===e.type||\"touchmove\"===e.type||\"touchend\"===e.type||\"touchcancel\"===e.type?(t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a.x=t.clientX,a.y=t.clientY):(\"mousedown\"===e.type||\"mouseup\"===e.type||\"mousemove\"===e.type||\"mouseover\"===e.type||\"mouseout\"===e.type||\"mouseenter\"===e.type||\"mouseleave\"===e.type)&&(a.x=e.clientX,a.y=e.clientY),a},u=100,l=!1,f=0,c=0,m=0,h=!1,g=0,p=function(){};return\"hide\"===t?void s.find(\".xdsoft_scrollbar\").hide():(e(this).hasClass(\"xdsoft_scroller_box\")||(a=s.children().eq(0),r=s[0].clientHeight,n=a[0].offsetHeight,o=e('<div class=\"xdsoft_scrollbar\"></div>'),i=e('<div class=\"xdsoft_scroller\"></div>'),o.append(i),s.addClass(\"xdsoft_scroller_box\").append(o),p=function(e){var t=d(e).y-f+g;0>t&&(t=0),t+i[0].offsetHeight>m&&(t=m-i[0].offsetHeight),s.trigger(\"scroll_element.xdsoft_scroller\",[u?t/u:0])},i.on(\"touchstart.xdsoft_scroller mousedown.xdsoft_scroller\",function(a){r||s.trigger(\"resize_scroll.xdsoft_scroller\",[t]),f=d(a).y,g=parseInt(i.css(\"margin-top\"),10),m=o[0].offsetHeight,\"mousedown\"===a.type||\"touchstart\"===a.type?(document&&e(document.body).addClass(\"xdsoft_noselect\"),e([document.body,window]).on(\"touchend mouseup.xdsoft_scroller\",function n(){e([document.body,window]).off(\"touchend mouseup.xdsoft_scroller\",n).off(\"mousemove.xdsoft_scroller\",p).removeClass(\"xdsoft_noselect\")}),e(document.body).on(\"mousemove.xdsoft_scroller\",p)):(h=!0,a.stopPropagation(),a.preventDefault())}).on(\"touchmove\",function(e){h&&(e.preventDefault(),p(e))}).on(\"touchend touchcancel\",function(){h=!1,g=0}),s.on(\"scroll_element.xdsoft_scroller\",function(e,t){r||s.trigger(\"resize_scroll.xdsoft_scroller\",[t,!0]),t=t>1?1:0>t||isNaN(t)?0:t,i.css(\"margin-top\",u*t),setTimeout(function(){a.css(\"marginTop\",-parseInt((a[0].offsetHeight-r)*t,10))},10)}).on(\"resize_scroll.xdsoft_scroller\",function(e,t,d){var l,f;r=s[0].clientHeight,n=a[0].offsetHeight,l=r/n,f=l*o[0].offsetHeight,l>1?i.hide():(i.show(),i.css(\"height\",parseInt(f>10?f:10,10)),u=o[0].offsetHeight-i[0].offsetHeight,d!==!0&&s.trigger(\"scroll_element.xdsoft_scroller\",[t||Math.abs(parseInt(a.css(\"marginTop\"),10))/(n-r)]))}),s.on(\"mousewheel\",function(e){var t=Math.abs(parseInt(a.css(\"marginTop\"),10));return t-=20*e.deltaY,0>t&&(t=0),s.trigger(\"scroll_element.xdsoft_scroller\",[t/(n-r)]),e.stopPropagation(),!1}),s.on(\"touchstart\",function(e){l=d(e),c=Math.abs(parseInt(a.css(\"marginTop\"),10))}),s.on(\"touchmove\",function(e){if(l){e.preventDefault();var t=d(e);s.trigger(\"scroll_element.xdsoft_scroller\",[(c-(t.y-l.y))/(n-r)])}}),s.on(\"touchend touchcancel\",function(){l=!1,c=0})),void s.trigger(\"resize_scroll.xdsoft_scroller\",[t]))})},e.fn.datetimepicker=function(n,i){var s,d,u=this,l=48,f=57,c=96,m=105,h=17,g=46,p=13,y=27,v=8,b=37,D=38,k=39,x=40,T=9,S=116,w=65,O=67,M=86,_=90,W=89,F=!1,C=e.isPlainObject(n)||!n?e.extend(!0,{},a,n):e.extend(!0,{},a),P=0,A=function(e){e.on(\"open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart\",function t(){e.is(\":disabled\")||e.data(\"xdsoft_datetimepicker\")||(clearTimeout(P),P=setTimeout(function(){e.data(\"xdsoft_datetimepicker\")||s(e),e.off(\"open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart\",t).trigger(\"open.xdsoft\")},100))})};return s=function(a){function i(){var e,t=!1;return C.startDate?t=j.strToDate(C.startDate):(t=C.value||(a&&a.val&&a.val()?a.val():\"\"),t?t=j.strToDateTime(t):C.defaultDate&&(t=j.strToDateTime(C.defaultDate),C.defaultTime&&(e=j.strtotime(C.defaultTime),t.setHours(e.getHours()),t.setMinutes(e.getMinutes())))),t&&j.isValidDate(t)?J.data(\"changed\",!0):t=\"\",t||0}function s(t){var r=function(e,t){var a=e.replace(/([\\[\\]\\/\\{\\}\\(\\)\\-\\.\\+]{1})/g,\"\\\\$1\").replace(/_/g,\"{digit+}\").replace(/([0-9]{1})/g,\"{digit$1}\").replace(/\\{digit([0-9]{1})\\}/g,\"[0-$1_]{1}\").replace(/\\{digit[\\+]\\}/g,\"[0-9_]{1}\");return new RegExp(a).test(t)},n=function(e){try{if(document.selection&&document.selection.createRange){var t=document.selection.createRange();return t.getBookmark().charCodeAt(2)-2}if(e.setSelectionRange)return e.selectionStart}catch(a){return 0}},o=function(e,t){if(e=\"string\"==typeof e||e instanceof String?document.getElementById(e):e,!e)return!1;if(e.createTextRange){var a=e.createTextRange();return a.collapse(!0),a.moveEnd(\"character\",t),a.moveStart(\"character\",t),a.select(),!0}return e.setSelectionRange?(e.setSelectionRange(t,t),!0):!1};t.mask&&a.off(\"keydown.xdsoft\"),t.mask===!0&&(t.mask=\"undefined\"!=typeof moment?t.format.replace(/Y{4}/g,\"9999\").replace(/Y{2}/g,\"99\").replace(/M{2}/g,\"19\").replace(/D{2}/g,\"39\").replace(/H{2}/g,\"29\").replace(/m{2}/g,\"59\").replace(/s{2}/g,\"59\"):t.format.replace(/Y/g,\"9999\").replace(/F/g,\"9999\").replace(/m/g,\"19\").replace(/d/g,\"39\").replace(/H/g,\"29\").replace(/i/g,\"59\").replace(/s/g,\"59\")),\"string\"===e.type(t.mask)&&(r(t.mask,a.val())||(a.val(t.mask.replace(/[0-9]/g,\"_\")),o(a[0],0)),a.on(\"keydown.xdsoft\",function(i){var s,d,u=this.value,C=i.which;if(C>=l&&f>=C||C>=c&&m>=C||C===v||C===g){for(s=n(this),d=C!==v&&C!==g?String.fromCharCode(C>=c&&m>=C?C-l:C):\"_\",C!==v&&C!==g||!s||(s-=1,d=\"_\");/[^0-9_]/.test(t.mask.substr(s,1))&&s<t.mask.length&&s>0;)s+=C===v||C===g?-1:1;if(u=u.substr(0,s)+d+u.substr(s+1),\"\"===e.trim(u))u=t.mask.replace(/[0-9]/g,\"_\");else if(s===t.mask.length)return i.preventDefault(),!1;for(s+=C===v||C===g?0:1;/[^0-9_]/.test(t.mask.substr(s,1))&&s<t.mask.length&&s>0;)s+=C===v||C===g?-1:1;r(t.mask,u)?(this.value=u,o(this,s)):\"\"===e.trim(u)?this.value=t.mask.replace(/[0-9]/g,\"_\"):a.trigger(\"error_input.xdsoft\")}else if(-1!==[w,O,M,_,W].indexOf(C)&&F||-1!==[y,D,x,b,k,S,h,T,p].indexOf(C))return!0;return i.preventDefault(),!1}))}var d,u,P,A,Y,j,H,J=e('<div class=\"xdsoft_datetimepicker xdsoft_noselect\"></div>'),z=e('<div class=\"xdsoft_copyright\"><a target=\"_blank\" href=\"http://xdsoft.net/jqplugins/datetimepicker/\">xdsoft.net</a></div>'),I=e('<div class=\"xdsoft_datepicker active\"></div>'),N=e('<div class=\"xdsoft_mounthpicker\"><button type=\"button\" class=\"xdsoft_prev\"></button><button type=\"button\" class=\"xdsoft_today_button\"></button><div class=\"xdsoft_label xdsoft_month\"><span></span><i></i></div><div class=\"xdsoft_label xdsoft_year\"><span></span><i></i></div><button type=\"button\" class=\"xdsoft_next\"></button></div>'),L=e('<div class=\"xdsoft_calendar\"></div>'),E=e('<div class=\"xdsoft_timepicker active\"><button type=\"button\" class=\"xdsoft_prev\"></button><div class=\"xdsoft_time_box\"></div><button type=\"button\" class=\"xdsoft_next\"></button></div>'),R=E.find(\".xdsoft_time_box\").eq(0),B=e('<div class=\"xdsoft_time_variant\"></div>'),V=e('<button type=\"button\" class=\"xdsoft_save_selected blue-gradient-button\">Save Selected</button>'),G=e('<div class=\"xdsoft_select xdsoft_monthselect\"><div></div></div>'),U=e('<div class=\"xdsoft_select xdsoft_yearselect\"><div></div></div>'),q=!1,X=0;C.id&&J.attr(\"id\",C.id),C.style&&J.attr(\"style\",C.style),C.weeks&&J.addClass(\"xdsoft_showweeks\"),C.rtl&&J.addClass(\"xdsoft_rtl\"),J.addClass(\"xdsoft_\"+C.theme),J.addClass(C.className),N.find(\".xdsoft_month span\").after(G),N.find(\".xdsoft_year span\").after(U),N.find(\".xdsoft_month,.xdsoft_year\").on(\"touchstart mousedown.xdsoft\",function(t){var a,r,n=e(this).find(\".xdsoft_select\").eq(0),o=0,i=0,s=n.is(\":visible\");for(N.find(\".xdsoft_select\").hide(),j.currentTime&&(o=j.currentTime[e(this).hasClass(\"xdsoft_month\")?\"getMonth\":\"getFullYear\"]()),n[s?\"hide\":\"show\"](),a=n.find(\"div.xdsoft_option\"),r=0;r<a.length&&a.eq(r).data(\"value\")!==o;r+=1)i+=a[0].offsetHeight;return n.xdsoftScroller(i/(n.children()[0].offsetHeight-n[0].clientHeight)),t.stopPropagation(),!1}),N.find(\".xdsoft_select\").xdsoftScroller().on(\"touchstart mousedown.xdsoft\",function(e){e.stopPropagation(),e.preventDefault()}).on(\"touchstart mousedown.xdsoft\",\".xdsoft_option\",function(){(void 0===j.currentTime||null===j.currentTime)&&(j.currentTime=j.now());var t=j.currentTime.getFullYear();j&&j.currentTime&&j.currentTime[e(this).parent().parent().hasClass(\"xdsoft_monthselect\")?\"setMonth\":\"setFullYear\"](e(this).data(\"value\")),e(this).parent().parent().hide(),J.trigger(\"xchange.xdsoft\"),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data(\"input\")),t!==j.currentTime.getFullYear()&&e.isFunction(C.onChangeYear)&&C.onChangeYear.call(J,j.currentTime,J.data(\"input\"))}),J.getValue=function(){return j.getCurrentTime()},J.setOptions=function(n){var o={};C=e.extend(!0,{},C,n),n.allowTimes&&e.isArray(n.allowTimes)&&n.allowTimes.length&&(C.allowTimes=e.extend(!0,[],n.allowTimes)),n.weekends&&e.isArray(n.weekends)&&n.weekends.length&&(C.weekends=e.extend(!0,[],n.weekends)),n.allowDates&&e.isArray(n.allowDates)&&n.allowDates.length&&(C.allowDates=e.extend(!0,[],n.allowDates)),n.allowDateRe&&\"[object String]\"===Object.prototype.toString.call(n.allowDateRe)&&(C.allowDateRe=new RegExp(n.allowDateRe)),n.highlightedDates&&e.isArray(n.highlightedDates)&&n.highlightedDates.length&&(e.each(n.highlightedDates,function(a,n){var i,s=e.map(n.split(\",\"),e.trim),d=new t(r.parseDate(s[0],C.formatDate),s[1],s[2]),u=r.formatDate(d.date,C.formatDate);void 0!==o[u]?(i=o[u].desc,i&&i.length&&d.desc&&d.desc.length&&(o[u].desc=i+\"\\n\"+d.desc)):o[u]=d}),C.highlightedDates=e.extend(!0,[],o)),n.highlightedPeriods&&e.isArray(n.highlightedPeriods)&&n.highlightedPeriods.length&&(o=e.extend(!0,[],C.highlightedDates),\ne.each(n.highlightedPeriods,function(a,n){var i,s,d,u,l,f,c;if(e.isArray(n))i=n[0],s=n[1],d=n[2],c=n[3];else{var m=e.map(n.split(\",\"),e.trim);i=r.parseDate(m[0],C.formatDate),s=r.parseDate(m[1],C.formatDate),d=m[2],c=m[3]}for(;s>=i;)u=new t(i,d,c),l=r.formatDate(i,C.formatDate),i.setDate(i.getDate()+1),void 0!==o[l]?(f=o[l].desc,f&&f.length&&u.desc&&u.desc.length&&(o[l].desc=f+\"\\n\"+u.desc)):o[l]=u}),C.highlightedDates=e.extend(!0,[],o)),n.disabledDates&&e.isArray(n.disabledDates)&&n.disabledDates.length&&(C.disabledDates=e.extend(!0,[],n.disabledDates)),n.disabledWeekDays&&e.isArray(n.disabledWeekDays)&&n.disabledWeekDays.length&&(C.disabledWeekDays=e.extend(!0,[],n.disabledWeekDays)),!C.open&&!C.opened||C.inline||a.trigger(\"open.xdsoft\"),C.inline&&(q=!0,J.addClass(\"xdsoft_inline\"),a.after(J).hide()),C.inverseButton&&(C.next=\"xdsoft_prev\",C.prev=\"xdsoft_next\"),C.datepicker?I.addClass(\"active\"):I.removeClass(\"active\"),C.timepicker?E.addClass(\"active\"):E.removeClass(\"active\"),C.value&&(j.setCurrentTime(C.value),a&&a.val&&a.val(j.str)),C.dayOfWeekStart=isNaN(C.dayOfWeekStart)?0:parseInt(C.dayOfWeekStart,10)%7,C.timepickerScrollbar||R.xdsoftScroller(\"hide\"),C.minDate&&/^[\\+\\-](.*)$/.test(C.minDate)&&(C.minDate=r.formatDate(j.strToDateTime(C.minDate),C.formatDate)),C.maxDate&&/^[\\+\\-](.*)$/.test(C.maxDate)&&(C.maxDate=r.formatDate(j.strToDateTime(C.maxDate),C.formatDate)),V.toggle(C.showApplyButton),N.find(\".xdsoft_today_button\").css(\"visibility\",C.todayButton?\"visible\":\"hidden\"),N.find(\".\"+C.prev).css(\"visibility\",C.prevButton?\"visible\":\"hidden\"),N.find(\".\"+C.next).css(\"visibility\",C.nextButton?\"visible\":\"hidden\"),s(C),C.validateOnBlur&&a.off(\"blur.xdsoft\").on(\"blur.xdsoft\",function(){if(C.allowBlank&&(!e.trim(e(this).val()).length||\"string\"==typeof C.mask&&e.trim(e(this).val())===C.mask.replace(/[0-9]/g,\"_\")))e(this).val(null),J.data(\"xdsoft_datetime\").empty();else{var t=r.parseDate(e(this).val(),C.format);if(t)e(this).val(r.formatDate(t,C.format));else{var a=+[e(this).val()[0],e(this).val()[1]].join(\"\"),n=+[e(this).val()[2],e(this).val()[3]].join(\"\");e(this).val(!C.datepicker&&C.timepicker&&a>=0&&24>a&&n>=0&&60>n?[a,n].map(function(e){return e>9?e:\"0\"+e}).join(\":\"):r.formatDate(j.now(),C.format))}J.data(\"xdsoft_datetime\").setCurrentTime(e(this).val())}J.trigger(\"changedatetime.xdsoft\"),J.trigger(\"close.xdsoft\")}),C.dayOfWeekStartPrev=0===C.dayOfWeekStart?6:C.dayOfWeekStart-1,J.trigger(\"xchange.xdsoft\").trigger(\"afterOpen.xdsoft\")},J.data(\"options\",C).on(\"touchstart mousedown.xdsoft\",function(e){return e.stopPropagation(),e.preventDefault(),U.hide(),G.hide(),!1}),R.append(B),R.xdsoftScroller(),J.on(\"afterOpen.xdsoft\",function(){R.xdsoftScroller()}),J.append(I).append(E),C.withoutCopyright!==!0&&J.append(z),I.append(N).append(L).append(V),e(C.parentID).append(J),d=function(){var t=this;t.now=function(e){var a,r,n=new Date;return!e&&C.defaultDate&&(a=t.strToDateTime(C.defaultDate),n.setFullYear(a.getFullYear()),n.setMonth(a.getMonth()),n.setDate(a.getDate())),C.yearOffset&&n.setFullYear(n.getFullYear()+C.yearOffset),!e&&C.defaultTime&&(r=t.strtotime(C.defaultTime),n.setHours(r.getHours()),n.setMinutes(r.getMinutes())),n},t.isValidDate=function(e){return\"[object Date]\"!==Object.prototype.toString.call(e)?!1:!isNaN(e.getTime())},t.setCurrentTime=function(e,a){t.currentTime=\"string\"==typeof e?t.strToDateTime(e):t.isValidDate(e)?e:e||a||!C.allowBlank?t.now():null,J.trigger(\"xchange.xdsoft\")},t.empty=function(){t.currentTime=null},t.getCurrentTime=function(){return t.currentTime},t.nextMonth=function(){(void 0===t.currentTime||null===t.currentTime)&&(t.currentTime=t.now());var a,r=t.currentTime.getMonth()+1;return 12===r&&(t.currentTime.setFullYear(t.currentTime.getFullYear()+1),r=0),a=t.currentTime.getFullYear(),t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(),r+1,0).getDate(),t.currentTime.getDate())),t.currentTime.setMonth(r),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data(\"input\")),a!==t.currentTime.getFullYear()&&e.isFunction(C.onChangeYear)&&C.onChangeYear.call(J,j.currentTime,J.data(\"input\")),J.trigger(\"xchange.xdsoft\"),r},t.prevMonth=function(){(void 0===t.currentTime||null===t.currentTime)&&(t.currentTime=t.now());var a=t.currentTime.getMonth()-1;return-1===a&&(t.currentTime.setFullYear(t.currentTime.getFullYear()-1),a=11),t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(),a+1,0).getDate(),t.currentTime.getDate())),t.currentTime.setMonth(a),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data(\"input\")),J.trigger(\"xchange.xdsoft\"),a},t.getWeekOfYear=function(t){if(C.onGetWeekOfYear&&e.isFunction(C.onGetWeekOfYear)){var a=C.onGetWeekOfYear.call(J,t);if(\"undefined\"!=typeof a)return a}var r=new Date(t.getFullYear(),0,1);return 4!=r.getDay()&&r.setMonth(0,1+(4-r.getDay()+7)%7),Math.ceil(((t-r)/864e5+r.getDay()+1)/7)},t.strToDateTime=function(e){var a,n,o=[];return e&&e instanceof Date&&t.isValidDate(e)?e:(o=/^(\\+|\\-)(.*)$/.exec(e),o&&(o[2]=r.parseDate(o[2],C.formatDate)),o&&o[2]?(a=o[2].getTime()-6e4*o[2].getTimezoneOffset(),n=new Date(t.now(!0).getTime()+parseInt(o[1]+\"1\",10)*a)):n=e?r.parseDate(e,C.format):t.now(),t.isValidDate(n)||(n=t.now()),n)},t.strToDate=function(e){if(e&&e instanceof Date&&t.isValidDate(e))return e;var a=e?r.parseDate(e,C.formatDate):t.now(!0);return t.isValidDate(a)||(a=t.now(!0)),a},t.strtotime=function(e){if(e&&e instanceof Date&&t.isValidDate(e))return e;var a=e?r.parseDate(e,C.formatTime):t.now(!0);return t.isValidDate(a)||(a=t.now(!0)),a},t.str=function(){return r.formatDate(t.currentTime,C.format)},t.currentTime=this.now()},j=new d,V.on(\"touchend click\",function(e){e.preventDefault(),J.data(\"changed\",!0),j.setCurrentTime(i()),a.val(j.str()),J.trigger(\"close.xdsoft\")}),N.find(\".xdsoft_today_button\").on(\"touchend mousedown.xdsoft\",function(){J.data(\"changed\",!0),j.setCurrentTime(0,!0),J.trigger(\"afterOpen.xdsoft\")}).on(\"dblclick.xdsoft\",function(){var e,t,r=j.getCurrentTime();r=new Date(r.getFullYear(),r.getMonth(),r.getDate()),e=j.strToDate(C.minDate),e=new Date(e.getFullYear(),e.getMonth(),e.getDate()),e>r||(t=j.strToDate(C.maxDate),t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r>t||(a.val(j.str()),a.trigger(\"change\"),J.trigger(\"close.xdsoft\")))}),N.find(\".xdsoft_prev,.xdsoft_next\").on(\"touchend mousedown.xdsoft\",function(){var t=e(this),a=0,r=!1;!function n(e){t.hasClass(C.next)?j.nextMonth():t.hasClass(C.prev)&&j.prevMonth(),C.monthChangeSpinner&&(r||(a=setTimeout(n,e||100)))}(500),e([document.body,window]).on(\"touchend mouseup.xdsoft\",function o(){clearTimeout(a),r=!0,e([document.body,window]).off(\"touchend mouseup.xdsoft\",o)})}),E.find(\".xdsoft_prev,.xdsoft_next\").on(\"touchend mousedown.xdsoft\",function(){var t=e(this),a=0,r=!1,n=110;!function o(e){var i=R[0].clientHeight,s=B[0].offsetHeight,d=Math.abs(parseInt(B.css(\"marginTop\"),10));t.hasClass(C.next)&&s-i-C.timeHeightInTimePicker>=d?B.css(\"marginTop\",\"-\"+(d+C.timeHeightInTimePicker)+\"px\"):t.hasClass(C.prev)&&d-C.timeHeightInTimePicker>=0&&B.css(\"marginTop\",\"-\"+(d-C.timeHeightInTimePicker)+\"px\"),R.trigger(\"scroll_element.xdsoft_scroller\",[Math.abs(parseInt(B[0].style.marginTop,10)/(s-i))]),n=n>10?10:n-10,r||(a=setTimeout(o,e||n))}(500),e([document.body,window]).on(\"touchend mouseup.xdsoft\",function i(){clearTimeout(a),r=!0,e([document.body,window]).off(\"touchend mouseup.xdsoft\",i)})}),u=0,J.on(\"xchange.xdsoft\",function(t){clearTimeout(u),u=setTimeout(function(){if(void 0===j.currentTime||null===j.currentTime){if(C.allowBlank)return;j.currentTime=j.now()}for(var t,i,s,d,u,l,f,c,m,h,g=\"\",p=new Date(j.currentTime.getFullYear(),j.currentTime.getMonth(),1,12,0,0),y=0,v=j.now(),b=!1,D=!1,k=[],x=!0,T=\"\",S=\"\";p.getDay()!==C.dayOfWeekStart;)p.setDate(p.getDate()-1);for(g+=\"<table><thead><tr>\",C.weeks&&(g+=\"<th></th>\"),t=0;7>t;t+=1)g+=\"<th>\"+C.i18n[o].dayOfWeekShort[(t+C.dayOfWeekStart)%7]+\"</th>\";for(g+=\"</tr></thead>\",g+=\"<tbody>\",C.maxDate!==!1&&(b=j.strToDate(C.maxDate),b=new Date(b.getFullYear(),b.getMonth(),b.getDate(),23,59,59,999)),C.minDate!==!1&&(D=j.strToDate(C.minDate),D=new Date(D.getFullYear(),D.getMonth(),D.getDate()));y<j.currentTime.countDaysInMonth()||p.getDay()!==C.dayOfWeekStart||j.currentTime.getMonth()===p.getMonth();)k=[],y+=1,s=p.getDay(),d=p.getDate(),u=p.getFullYear(),l=p.getMonth(),f=j.getWeekOfYear(p),h=\"\",k.push(\"xdsoft_date\"),c=C.beforeShowDay&&e.isFunction(C.beforeShowDay.call)?C.beforeShowDay.call(J,p):null,C.allowDateRe&&\"[object RegExp]\"===Object.prototype.toString.call(C.allowDateRe)?C.allowDateRe.test(r.formatDate(p,C.formatDate))||k.push(\"xdsoft_disabled\"):C.allowDates&&C.allowDates.length>0?-1===C.allowDates.indexOf(r.formatDate(p,C.formatDate))&&k.push(\"xdsoft_disabled\"):b!==!1&&p>b||D!==!1&&D>p||c&&c[0]===!1?k.push(\"xdsoft_disabled\"):-1!==C.disabledDates.indexOf(r.formatDate(p,C.formatDate))?k.push(\"xdsoft_disabled\"):-1!==C.disabledWeekDays.indexOf(s)?k.push(\"xdsoft_disabled\"):a.is(\"[readonly]\")&&k.push(\"xdsoft_disabled\"),c&&\"\"!==c[1]&&k.push(c[1]),j.currentTime.getMonth()!==l&&k.push(\"xdsoft_other_month\"),(C.defaultSelect||J.data(\"changed\"))&&r.formatDate(j.currentTime,C.formatDate)===r.formatDate(p,C.formatDate)&&k.push(\"xdsoft_current\"),r.formatDate(v,C.formatDate)===r.formatDate(p,C.formatDate)&&k.push(\"xdsoft_today\"),(0===p.getDay()||6===p.getDay()||-1!==C.weekends.indexOf(r.formatDate(p,C.formatDate)))&&k.push(\"xdsoft_weekend\"),void 0!==C.highlightedDates[r.formatDate(p,C.formatDate)]&&(i=C.highlightedDates[r.formatDate(p,C.formatDate)],k.push(void 0===i.style?\"xdsoft_highlighted_default\":i.style),h=void 0===i.desc?\"\":i.desc),C.beforeShowDay&&e.isFunction(C.beforeShowDay)&&k.push(C.beforeShowDay(p)),x&&(g+=\"<tr>\",x=!1,C.weeks&&(g+=\"<th>\"+f+\"</th>\")),g+='<td data-date=\"'+d+'\" data-month=\"'+l+'\" data-year=\"'+u+'\" class=\"xdsoft_date xdsoft_day_of_week'+p.getDay()+\" \"+k.join(\" \")+'\" title=\"'+h+'\"><div>'+d+\"</div></td>\",p.getDay()===C.dayOfWeekStartPrev&&(g+=\"</tr>\",x=!0),p.setDate(d+1);if(g+=\"</tbody></table>\",L.html(g),N.find(\".xdsoft_label span\").eq(0).text(C.i18n[o].months[j.currentTime.getMonth()]),N.find(\".xdsoft_label span\").eq(1).text(j.currentTime.getFullYear()),T=\"\",S=\"\",l=\"\",m=function(t,n){var o,i,s=j.now(),d=C.allowTimes&&e.isArray(C.allowTimes)&&C.allowTimes.length;s.setHours(t),t=parseInt(s.getHours(),10),s.setMinutes(n),n=parseInt(s.getMinutes(),10),o=new Date(j.currentTime),o.setHours(t),o.setMinutes(n),k=[],C.minDateTime!==!1&&C.minDateTime>o||C.maxTime!==!1&&j.strtotime(C.maxTime).getTime()<s.getTime()||C.minTime!==!1&&j.strtotime(C.minTime).getTime()>s.getTime()?k.push(\"xdsoft_disabled\"):C.minDateTime!==!1&&C.minDateTime>o||C.disabledMinTime!==!1&&s.getTime()>j.strtotime(C.disabledMinTime).getTime()&&C.disabledMaxTime!==!1&&s.getTime()<j.strtotime(C.disabledMaxTime).getTime()?k.push(\"xdsoft_disabled\"):a.is(\"[readonly]\")&&k.push(\"xdsoft_disabled\"),i=new Date(j.currentTime),i.setHours(parseInt(j.currentTime.getHours(),10)),d||i.setMinutes(Math[C.roundTime](j.currentTime.getMinutes()/C.step)*C.step),(C.initTime||C.defaultSelect||J.data(\"changed\"))&&i.getHours()===parseInt(t,10)&&(!d&&C.step>59||i.getMinutes()===parseInt(n,10))&&(C.defaultSelect||J.data(\"changed\")?k.push(\"xdsoft_current\"):C.initTime&&k.push(\"xdsoft_init_time\")),parseInt(v.getHours(),10)===parseInt(t,10)&&parseInt(v.getMinutes(),10)===parseInt(n,10)&&k.push(\"xdsoft_today\"),T+='<div class=\"xdsoft_time '+k.join(\" \")+'\" data-hour=\"'+t+'\" data-minute=\"'+n+'\">'+r.formatDate(s,C.formatTime)+\"</div>\"},C.allowTimes&&e.isArray(C.allowTimes)&&C.allowTimes.length)for(y=0;y<C.allowTimes.length;y+=1)S=j.strtotime(C.allowTimes[y]).getHours(),l=j.strtotime(C.allowTimes[y]).getMinutes(),m(S,l);else for(y=0,t=0;y<(C.hours12?12:24);y+=1)for(t=0;60>t;t+=C.step)S=(10>y?\"0\":\"\")+y,l=(10>t?\"0\":\"\")+t,m(S,l);for(B.html(T),n=\"\",y=0,y=parseInt(C.yearStart,10)+C.yearOffset;y<=parseInt(C.yearEnd,10)+C.yearOffset;y+=1)n+='<div class=\"xdsoft_option '+(j.currentTime.getFullYear()===y?\"xdsoft_current\":\"\")+'\" data-value=\"'+y+'\">'+y+\"</div>\";for(U.children().eq(0).html(n),y=parseInt(C.monthStart,10),n=\"\";y<=parseInt(C.monthEnd,10);y+=1)n+='<div class=\"xdsoft_option '+(j.currentTime.getMonth()===y?\"xdsoft_current\":\"\")+'\" data-value=\"'+y+'\">'+C.i18n[o].months[y]+\"</div>\";G.children().eq(0).html(n),e(J).trigger(\"generate.xdsoft\")},10),t.stopPropagation()}).on(\"afterOpen.xdsoft\",function(){if(C.timepicker){var e,t,a,r;B.find(\".xdsoft_current\").length?e=\".xdsoft_current\":B.find(\".xdsoft_init_time\").length&&(e=\".xdsoft_init_time\"),e?(t=R[0].clientHeight,a=B[0].offsetHeight,r=B.find(e).index()*C.timeHeightInTimePicker+1,r>a-t&&(r=a-t),R.trigger(\"scroll_element.xdsoft_scroller\",[parseInt(r,10)/(a-t)])):R.trigger(\"scroll_element.xdsoft_scroller\",[0])}}),P=0,L.on(\"touchend click.xdsoft\",\"td\",function(t){t.stopPropagation(),P+=1;var r=e(this),n=j.currentTime;return(void 0===n||null===n)&&(j.currentTime=j.now(),n=j.currentTime),r.hasClass(\"xdsoft_disabled\")?!1:(n.setDate(1),n.setFullYear(r.data(\"year\")),n.setMonth(r.data(\"month\")),n.setDate(r.data(\"date\")),J.trigger(\"select.xdsoft\",[n]),a.val(j.str()),C.onSelectDate&&e.isFunction(C.onSelectDate)&&C.onSelectDate.call(J,j.currentTime,J.data(\"input\"),t),J.data(\"changed\",!0),J.trigger(\"xchange.xdsoft\"),J.trigger(\"changedatetime.xdsoft\"),(P>1||C.closeOnDateSelect===!0||C.closeOnDateSelect===!1&&!C.timepicker)&&!C.inline&&J.trigger(\"close.xdsoft\"),void setTimeout(function(){P=0},200))}),B.on(\"touchend click.xdsoft\",\"div\",function(t){t.stopPropagation();var a=e(this),r=j.currentTime;return(void 0===r||null===r)&&(j.currentTime=j.now(),r=j.currentTime),a.hasClass(\"xdsoft_disabled\")?!1:(r.setHours(a.data(\"hour\")),r.setMinutes(a.data(\"minute\")),J.trigger(\"select.xdsoft\",[r]),J.data(\"input\").val(j.str()),C.onSelectTime&&e.isFunction(C.onSelectTime)&&C.onSelectTime.call(J,j.currentTime,J.data(\"input\"),t),J.data(\"changed\",!0),J.trigger(\"xchange.xdsoft\"),J.trigger(\"changedatetime.xdsoft\"),void(C.inline!==!0&&C.closeOnTimeSelect===!0&&J.trigger(\"close.xdsoft\")))}),I.on(\"mousewheel.xdsoft\",function(e){return C.scrollMonth?(e.deltaY<0?j.nextMonth():j.prevMonth(),!1):!0}),a.on(\"mousewheel.xdsoft\",function(e){return C.scrollInput?!C.datepicker&&C.timepicker?(A=B.find(\".xdsoft_current\").length?B.find(\".xdsoft_current\").eq(0).index():0,A+e.deltaY>=0&&A+e.deltaY<B.children().length&&(A+=e.deltaY),B.children().eq(A).length&&B.children().eq(A).trigger(\"mousedown\"),!1):C.datepicker&&!C.timepicker?(I.trigger(e,[e.deltaY,e.deltaX,e.deltaY]),a.val&&a.val(j.str()),J.trigger(\"changedatetime.xdsoft\"),!1):void 0:!0}),J.on(\"changedatetime.xdsoft\",function(t){if(C.onChangeDateTime&&e.isFunction(C.onChangeDateTime)){var a=J.data(\"input\");C.onChangeDateTime.call(J,j.currentTime,a,t),delete C.value,a.trigger(\"change\")}}).on(\"generate.xdsoft\",function(){C.onGenerate&&e.isFunction(C.onGenerate)&&C.onGenerate.call(J,j.currentTime,J.data(\"input\")),q&&(J.trigger(\"afterOpen.xdsoft\"),q=!1)}).on(\"click.xdsoft\",function(e){e.stopPropagation()}),A=0,H=function(e,t){do if(e=e.parentNode,t(e)===!1)break;while(\"HTML\"!==e.nodeName)},Y=function(){var t,a,r,n,o,i,s,d,u,l,f,c,m;if(d=J.data(\"input\"),t=d.offset(),a=d[0],l=\"top\",r=t.top+a.offsetHeight-1,n=t.left,o=\"absolute\",u=e(window).width(),c=e(window).height(),m=e(window).scrollTop(),document.documentElement.clientWidth-t.left<I.parent().outerWidth(!0)){var h=I.parent().outerWidth(!0)-a.offsetWidth;n-=h}\"rtl\"===d.parent().css(\"direction\")&&(n-=J.outerWidth()-d.outerWidth()),C.fixed?(r-=m,n-=e(window).scrollLeft(),o=\"fixed\"):(s=!1,H(a,function(e){return\"fixed\"===window.getComputedStyle(e).getPropertyValue(\"position\")?(s=!0,!1):void 0}),s?(o=\"fixed\",r+J.outerHeight()>c+m?(l=\"bottom\",r=c+m-t.top):r-=m):r+a.offsetHeight>c+m&&(r=t.top-a.offsetHeight+1),0>r&&(r=0),n+a.offsetWidth>u&&(n=u-a.offsetWidth)),i=J[0],H(i,function(e){var t;return t=window.getComputedStyle(e).getPropertyValue(\"position\"),\"relative\"===t&&u>=e.offsetWidth?(n-=(u-e.offsetWidth)/2,!1):void 0}),f={position:o,left:n,top:\"\",bottom:\"\"},f[l]=r,J.css(f)},J.on(\"open.xdsoft\",function(t){var a=!0;C.onShow&&e.isFunction(C.onShow)&&(a=C.onShow.call(J,j.currentTime,J.data(\"input\"),t)),a!==!1&&(J.show(),Y(),e(window).off(\"resize.xdsoft\",Y).on(\"resize.xdsoft\",Y),C.closeOnWithoutClick&&e([document.body,window]).on(\"touchstart mousedown.xdsoft\",function r(){J.trigger(\"close.xdsoft\"),e([document.body,window]).off(\"touchstart mousedown.xdsoft\",r)}))}).on(\"close.xdsoft\",function(t){var a=!0;N.find(\".xdsoft_month,.xdsoft_year\").find(\".xdsoft_select\").hide(),C.onClose&&e.isFunction(C.onClose)&&(a=C.onClose.call(J,j.currentTime,J.data(\"input\"),t)),a===!1||C.opened||C.inline||J.hide(),t.stopPropagation()}).on(\"toggle.xdsoft\",function(){J.trigger(J.is(\":visible\")?\"close.xdsoft\":\"open.xdsoft\")}).data(\"input\",a),X=0,J.data(\"xdsoft_datetime\",j),J.setOptions(C),j.setCurrentTime(i()),a.data(\"xdsoft_datetimepicker\",J).on(\"open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart\",function(){a.is(\":disabled\")||a.data(\"xdsoft_datetimepicker\").is(\":visible\")&&C.closeOnInputClick||(clearTimeout(X),X=setTimeout(function(){a.is(\":disabled\")||(q=!0,j.setCurrentTime(i(),!0),C.mask&&s(C),J.trigger(\"open.xdsoft\"))},100))}).on(\"keydown.xdsoft\",function(t){var a,r=t.which;return-1!==[p].indexOf(r)&&C.enterLikeTab?(a=e(\"input:visible,textarea:visible,button:visible,a:visible\"),J.trigger(\"close.xdsoft\"),a.eq(a.index(this)+1).focus(),!1):-1!==[T].indexOf(r)?(J.trigger(\"close.xdsoft\"),!0):void 0}).on(\"blur.xdsoft\",function(){J.trigger(\"close.xdsoft\")})},d=function(t){var a=t.data(\"xdsoft_datetimepicker\");a&&(a.data(\"xdsoft_datetime\",null),a.remove(),t.data(\"xdsoft_datetimepicker\",null).off(\".xdsoft\"),e(window).off(\"resize.xdsoft\"),e([window,document.body]).off(\"mousedown.xdsoft touchstart\"),t.unmousewheel&&t.unmousewheel())},e(document).off(\"keydown.xdsoftctrl keyup.xdsoftctrl\").on(\"keydown.xdsoftctrl\",function(e){e.keyCode===h&&(F=!0)}).on(\"keyup.xdsoftctrl\",function(e){e.keyCode===h&&(F=!1)}),this.each(function(){var t,a=e(this).data(\"xdsoft_datetimepicker\");if(a){if(\"string\"===e.type(n))switch(n){case\"show\":e(this).select().focus(),a.trigger(\"open.xdsoft\");break;case\"hide\":a.trigger(\"close.xdsoft\");break;case\"toggle\":a.trigger(\"toggle.xdsoft\");break;case\"destroy\":d(e(this));break;case\"reset\":this.value=this.defaultValue,this.value&&a.data(\"xdsoft_datetime\").isValidDate(r.parseDate(this.value,C.format))||a.data(\"changed\",!1),a.data(\"xdsoft_datetime\").setCurrentTime(this.value);break;case\"validate\":t=a.data(\"input\"),t.trigger(\"blur.xdsoft\");break;default:a[n]&&e.isFunction(a[n])&&(u=a[n](i))}else a.setOptions(n);return 0}\"string\"!==e.type(n)&&(!C.lazyInit||C.open||C.inline?s(e(this)):A(e(this)))}),u},e.fn.datetimepicker.defaults=a}),function(e){\"function\"==typeof define&&define.amd?define([\"jquery\"],e):\"object\"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var i=t||window.event,s=d.call(arguments,1),u=0,f=0,c=0,m=0,h=0,g=0;if(t=e.event.fix(i),t.type=\"mousewheel\",\"detail\"in i&&(c=-1*i.detail),\"wheelDelta\"in i&&(c=i.wheelDelta),\"wheelDeltaY\"in i&&(c=i.wheelDeltaY),\"wheelDeltaX\"in i&&(f=-1*i.wheelDeltaX),\"axis\"in i&&i.axis===i.HORIZONTAL_AXIS&&(f=-1*c,c=0),u=0===c?f:c,\"deltaY\"in i&&(c=-1*i.deltaY,u=c),\"deltaX\"in i&&(f=i.deltaX,0===c&&(u=-1*f)),0!==c||0!==f){if(1===i.deltaMode){var p=e.data(this,\"mousewheel-line-height\");u*=p,c*=p,f*=p}else if(2===i.deltaMode){var y=e.data(this,\"mousewheel-page-height\");u*=y,c*=y,f*=y}if(m=Math.max(Math.abs(c),Math.abs(f)),(!o||o>m)&&(o=m,r(i,m)&&(o/=40)),r(i,m)&&(u/=40,f/=40,c/=40),u=Math[u>=1?\"floor\":\"ceil\"](u/o),f=Math[f>=1?\"floor\":\"ceil\"](f/o),c=Math[c>=1?\"floor\":\"ceil\"](c/o),l.settings.normalizeOffset&&this.getBoundingClientRect){var v=this.getBoundingClientRect();h=t.clientX-v.left,g=t.clientY-v.top}return t.deltaX=f,t.deltaY=c,t.deltaFactor=o,t.offsetX=h,t.offsetY=g,t.deltaMode=0,s.unshift(t,u,f,c),n&&clearTimeout(n),n=setTimeout(a,200),(e.event.dispatch||e.event.handle).apply(this,s)}}function a(){o=null}function r(e,t){return l.settings.adjustOldDeltas&&\"mousewheel\"===e.type&&t%120===0}var n,o,i=[\"wheel\",\"mousewheel\",\"DOMMouseScroll\",\"MozMousePixelScroll\"],s=\"onwheel\"in document||document.documentMode>=9?[\"wheel\"]:[\"mousewheel\",\"DomMouseScroll\",\"MozMousePixelScroll\"],d=Array.prototype.slice;if(e.event.fixHooks)for(var u=i.length;u;)e.event.fixHooks[i[--u]]=e.event.mouseHooks;var l=e.event.special.mousewheel={version:\"3.1.12\",setup:function(){if(this.addEventListener)for(var a=s.length;a;)this.addEventListener(s[--a],t,!1);else this.onmousewheel=t;e.data(this,\"mousewheel-line-height\",l.getLineHeight(this)),e.data(this,\"mousewheel-page-height\",l.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var a=s.length;a;)this.removeEventListener(s[--a],t,!1);else this.onmousewheel=null;e.removeData(this,\"mousewheel-line-height\"),e.removeData(this,\"mousewheel-page-height\")},getLineHeight:function(t){var a=e(t),r=a[\"offsetParent\"in e.fn?\"offsetParent\":\"parent\"]();return r.length||(r=e(\"body\")),parseInt(r.css(\"fontSize\"),10)||parseInt(a.css(\"fontSize\"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind(\"mousewheel\",e):this.trigger(\"mousewheel\")},unmousewheel:function(e){return this.unbind(\"mousewheel\",e)}})});"

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(652))

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = "// jQuery Mask Plugin v1.14.11\n// github.com/igorescobar/jQuery-Mask-Plugin\nvar $jscomp={scope:{},findInternal:function(a,l,d){a instanceof String&&(a=String(a));for(var p=a.length,h=0;h<p;h++){var b=a[h];if(l.call(d,b,h,a))return{i:h,v:b}}return{i:-1,v:void 0}}};$jscomp.defineProperty=\"function\"==typeof Object.defineProperties?Object.defineProperty:function(a,l,d){if(d.get||d.set)throw new TypeError(\"ES3 does not support getters and setters.\");a!=Array.prototype&&a!=Object.prototype&&(a[l]=d.value)};\n$jscomp.getGlobal=function(a){return\"undefined\"!=typeof window&&window===a?a:\"undefined\"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,l,d,p){if(l){d=$jscomp.global;a=a.split(\".\");for(p=0;p<a.length-1;p++){var h=a[p];h in d||(d[h]={});d=d[h]}a=a[a.length-1];p=d[a];l=l(p);l!=p&&null!=l&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:l})}};\n$jscomp.polyfill(\"Array.prototype.find\",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},\"es6-impl\",\"es3\");\n(function(a,l,d){\"function\"===typeof define&&define.amd?define([\"jquery\"],a):\"object\"===typeof exports?module.exports=a(require(\"jquery\")):a(l||d)})(function(a){var l=function(b,e,f){var c={invalid:[],getCaret:function(){try{var a,r=0,g=b.get(0),e=document.selection,f=g.selectionStart;if(e&&-1===navigator.appVersion.indexOf(\"MSIE 10\"))a=e.createRange(),a.moveStart(\"character\",-c.val().length),r=a.text.length;else if(f||\"0\"===f)r=f;return r}catch(C){}},setCaret:function(a){try{if(b.is(\":focus\")){var c,\ng=b.get(0);g.setSelectionRange?g.setSelectionRange(a,a):(c=g.createTextRange(),c.collapse(!0),c.moveEnd(\"character\",a),c.moveStart(\"character\",a),c.select())}}catch(B){}},events:function(){b.on(\"keydown.mask\",function(a){b.data(\"mask-keycode\",a.keyCode||a.which);b.data(\"mask-previus-value\",b.val());b.data(\"mask-previus-caret-pos\",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?\"input.mask\":\"keyup.mask\",c.behaviour).on(\"paste.mask drop.mask\",function(){setTimeout(function(){b.keydown().keyup()},\n100)}).on(\"change.mask\",function(){b.data(\"changed\",!0)}).on(\"blur.mask\",function(){d===c.val()||b.data(\"changed\")||b.trigger(\"change\");b.data(\"changed\",!1)}).on(\"blur.mask\",function(){d=c.val()}).on(\"focus.mask\",function(b){!0===f.selectOnFocus&&a(b.target).select()}).on(\"focusout.mask\",function(){f.clearIfNotMatch&&!h.test(c.val())&&c.val(\"\")})},getRegexMask:function(){for(var a=[],b,c,f,n,d=0;d<e.length;d++)(b=m.translation[e.charAt(d)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,\"\"),f=b.optional,\n(b=b.recursive)?(a.push(e.charAt(d)),n={digit:e.charAt(d),pattern:c}):a.push(f||b?c+\"?\":c)):a.push(e.charAt(d).replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g,\"\\\\$&\"));a=a.join(\"\");n&&(a=a.replace(new RegExp(\"(\"+n.digit+\"(.*\"+n.digit+\")?)\"),\"($1)?\").replace(new RegExp(n.digit,\"g\"),n.pattern));return new RegExp(a)},destroyEvents:function(){b.off(\"input keydown keyup paste drop blur focusout \".split(\" \").join(\".mask \"))},val:function(a){var c=b.is(\"input\")?\"val\":\"text\";if(0<arguments.length){if(b[c]()!==a)b[c](a);\nc=b}else c=b[c]();return c},calculateCaretPosition:function(){var a=b.data(\"mask-previus-value\")||\"\",e=c.getMasked(),g=c.getCaret();if(a!==e){var f=b.data(\"mask-previus-caret-pos\")||0,e=e.length,d=a.length,m=a=0,h=0,l=0,k;for(k=g;k<e&&c.maskDigitPosMap[k];k++)m++;for(k=g-1;0<=k&&c.maskDigitPosMap[k];k--)a++;for(k=g-1;0<=k;k--)c.maskDigitPosMap[k]&&h++;for(k=f-1;0<=k;k--)c.maskDigitPosMapOld[k]&&l++;g>d?g=e:f>=g&&f!==d?c.maskDigitPosMapOld[g]||(f=g,g=g-(l-h)-a,c.maskDigitPosMap[g]&&(g=f)):g>f&&(g=\ng+(h-l)+m)}return g},behaviour:function(f){f=f||window.event;c.invalid=[];var e=b.data(\"mask-keycode\");if(-1===a.inArray(e,m.byPassKeys)){var e=c.getMasked(),g=c.getCaret();setTimeout(function(){c.setCaret(c.calculateCaretPosition())},10);c.val(e);c.setCaret(g);return c.callbacks(f)}},getMasked:function(a,b){var g=[],d=void 0===b?c.val():b+\"\",n=0,h=e.length,q=0,l=d.length,k=1,r=\"push\",p=-1,t=0,y=[],v,z;f.reverse?(r=\"unshift\",k=-1,v=0,n=h-1,q=l-1,z=function(){return-1<n&&-1<q}):(v=h-1,z=function(){return n<\nh&&q<l});for(var A;z();){var x=e.charAt(n),w=d.charAt(q),u=m.translation[x];if(u)w.match(u.pattern)?(g[r](w),u.recursive&&(-1===p?p=n:n===v&&(n=p-k),v===p&&(n-=k)),n+=k):w===A?(t--,A=void 0):u.optional?(n+=k,q-=k):u.fallback?(g[r](u.fallback),n+=k,q-=k):c.invalid.push({p:q,v:w,e:u.pattern}),q+=k;else{if(!a)g[r](x);w===x?(y.push(q),q+=k):(A=x,y.push(q+t),t++);n+=k}}d=e.charAt(v);h!==l+1||m.translation[d]||g.push(d);g=g.join(\"\");c.mapMaskdigitPositions(g,y,l);return g},mapMaskdigitPositions:function(a,\nb,e){a=f.reverse?a.length-e:0;c.maskDigitPosMap={};for(e=0;e<b.length;e++)c.maskDigitPosMap[b[e]+a]=1},callbacks:function(a){var h=c.val(),g=h!==d,m=[h,a,b,f],q=function(a,b,c){\"function\"===typeof f[a]&&b&&f[a].apply(this,c)};q(\"onChange\",!0===g,m);q(\"onKeyPress\",!0===g,m);q(\"onComplete\",h.length===e.length,m);q(\"onInvalid\",0<c.invalid.length,[h,a,b,c.invalid,f])}};b=a(b);var m=this,d=c.val(),h;e=\"function\"===typeof e?e(c.val(),void 0,b,f):e;m.mask=e;m.options=f;m.remove=function(){var a=c.getCaret();\nc.destroyEvents();c.val(m.getCleanVal());c.setCaret(a);return b};m.getCleanVal=function(){return c.getMasked(!0)};m.getMaskedVal=function(a){return c.getMasked(!1,a)};m.init=function(d){d=d||!1;f=f||{};m.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;m.byPassKeys=a.jMaskGlobals.byPassKeys;m.translation=a.extend({},a.jMaskGlobals.translation,f.translation);m=a.extend(!0,{},m,f);h=c.getRegexMask();if(d)c.events(),c.val(c.getMasked());else{f.placeholder&&b.attr(\"placeholder\",f.placeholder);b.data(\"mask\")&&\nb.attr(\"autocomplete\",\"off\");d=0;for(var l=!0;d<e.length;d++){var g=m.translation[e.charAt(d)];if(g&&g.recursive){l=!1;break}}l&&b.attr(\"maxlength\",e.length);c.destroyEvents();c.events();d=c.getCaret();c.val(c.getMasked());c.setCaret(d)}};m.init(!b.is(\"input\"))};a.maskWatchers={};var d=function(){var b=a(this),e={},f=b.attr(\"data-mask\");b.attr(\"data-mask-reverse\")&&(e.reverse=!0);b.attr(\"data-mask-clearifnotmatch\")&&(e.clearIfNotMatch=!0);\"true\"===b.attr(\"data-mask-selectonfocus\")&&(e.selectOnFocus=\n!0);if(p(b,f,e))return b.data(\"mask\",new l(this,f,e))},p=function(b,e,f){f=f||{};var c=a(b).data(\"mask\"),d=JSON.stringify;b=a(b).val()||a(b).text();try{return\"function\"===typeof e&&(e=e(b)),\"object\"!==typeof c||d(c.options)!==d(f)||c.mask!==e}catch(t){}},h=function(a){var b=document.createElement(\"div\"),d;a=\"on\"+a;d=a in b;d||(b.setAttribute(a,\"return;\"),d=\"function\"===typeof b[a]);return d};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,h=c.watchInterval,c=d.watchInputs||c.watchInputs,\nt=function(){if(p(this,b,d))return a(this).data(\"mask\",new l(this,b,d))};a(this).each(t);e&&\"\"!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(t)},h));return this};a.fn.masked=function(a){return this.data(\"mask\").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data(\"mask\");b&&b.remove().removeData(\"mask\")})};a.fn.cleanVal=function(){return this.data(\"mask\").getCleanVal()};\na.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d)};h={maskElements:\"input,td,span,div\",dataMaskAttr:\"*[data-mask]\",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:!/Chrome\\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&h(\"input\"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\\d/},9:{pattern:/\\d/,optional:!0},\"#\":{pattern:/\\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},\nS:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};h=a.jMaskGlobals=a.extend(!0,{},h,a.jMaskGlobals);h.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},h.watchInterval)},window.jQuery,window.Zepto);\n"

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(654))

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = "/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */\n/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */\n!function(a){\"use strict\";function b(a){var b=a.length,d=c.type(a);return\"function\"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||(\"array\"===d||0===b||\"number\"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?\"object\"==typeof a||\"function\"==typeof a?e[g.call(a)]||\"object\":typeof a:a+\"\"},c.isArray=Array.isArray||function(a){return\"array\"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||\"object\"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,\"constructor\")&&!f.call(a.constructor.prototype,\"isPrototypeOf\"))return!1}catch(d){return!1}for(b in a);return b===undefined||f.call(a,b)},c.each=function(a,c,d){var e=0,f=a.length,g=b(a);if(d){if(g)for(;e<f&&c.apply(a[e],d)!==!1;e++);else for(e in a)if(a.hasOwnProperty(e)&&c.apply(a[e],d)===!1)break}else if(g)for(;e<f&&c.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(a.hasOwnProperty(e)&&c.call(a[e],e,a[e])===!1)break;return a},c.data=function(a,b,e){if(e===undefined){var f=a[c.expando],g=f&&d[f];if(b===undefined)return g;if(g&&b in g)return g[b]}else if(b!==undefined){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for(\"boolean\"==typeof h&&(k=h,h=arguments[i]||{},i++),\"object\"!=typeof h&&\"function\"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):d!==undefined&&(h[e]=d)));return h},c.queue=function(a,d,e){if(a){d=(d||\"fx\")+\"queue\";var f=c.data(a,d);return e?(!f||c.isArray(e)?f=c.data(a,d,function(a,c){var d=c||[];return a&&(b(Object(a))?function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;b[d]!==undefined;)a[e++]=b[d++];a.length=e,a}(d,\"string\"==typeof a?[a]:a):[].push.call(d,a)),d}(e)):f.push(e),f):f||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||\"fx\";var e=c.queue(d,b),f=e.shift();\"inprogress\"===f&&(f=e.shift()),f&&(\"fx\"===b&&e.unshift(\"inprogress\"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error(\"Not a DOM node.\")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var a=this[0],b=function(a){for(var b=a.offsetParent;b&&\"html\"!==b.nodeName.toLowerCase()&&b.style&&\"static\"===b.style.position;)b=b.offsetParent;return b||document}(a),d=this.offset(),e=/^(?:body|html)$/i.test(b.nodeName)?{top:0,left:0}:c(b).offset();return d.top-=parseFloat(a.style.marginTop)||0,d.left-=parseFloat(a.style.marginLeft)||0,b.style&&(e.top+=parseFloat(b.style.borderTopWidth)||0,e.left+=parseFloat(b.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando=\"velocity\"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h=\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"),i=0;i<h.length;i++)e[\"[object \"+h[i]+\"]\"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){\"use strict\";\"object\"==typeof module&&\"object\"==typeof module.exports?module.exports=a():\"function\"==typeof define&&define.amd?define(a):a()}(function(){\"use strict\";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return u.isWrapped(a)?a=s.call(a):u.isNode(a)&&(a=[a]),a}function g(a){var b=o.data(a,\"velocity\");return null===b?d:b}function h(a,b){var c=g(a);c&&c.delayTimer&&!c.delayPaused&&(c.delayRemaining=c.delay-b+c.delayBegin,c.delayPaused=!0,clearTimeout(c.delayTimer.setTimeout))}function i(a,b){var c=g(a);c&&c.delayTimer&&c.delayPaused&&(c.delayPaused=!1,c.delayTimer.setTimeout=setTimeout(c.delayTimer.next,c.delayRemaining))}function j(a){return function(b){return Math.round(b*a)*(1/a)}}function k(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;c-=(i(c,a,d)-b)/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do{g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g}while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v=\"Float32Array\"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if(\"number\"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A=\"generateBezier(\"+[a,c,d,e]+\")\";return z.toString=function(){return A},z}function l(a,b){var c=a;return u.isString(a)?y.Easings[a]||(c=!1):c=u.isArray(a)&&1===a.length?j.apply(null,a):u.isArray(a)&&2===a.length?z.apply(null,a.concat([b])):!(!u.isArray(a)||4!==a.length)&&k.apply(null,a),c===!1&&(c=y.Easings[y.defaults.easing]?y.defaults.easing:x),c}function m(a){if(a){var b=y.timestamp&&a!==!0?a:r.now(),c=y.State.calls.length;c>1e4&&(y.State.calls=e(y.State.calls),c=y.State.calls.length);for(var f=0;f<c;f++)if(y.State.calls[f]){var h=y.State.calls[f],i=h[0],j=h[2],k=h[3],l=!!k,q=null,s=h[5],t=h[6];if(k||(k=y.State.calls[f][3]=b-16),s){if(s.resume!==!0)continue;k=h[3]=Math.round(b-t-16),h[5]=null}t=h[6]=b-k;for(var v=Math.min(t/j.duration,1),w=0,x=i.length;w<x;w++){var z=i[w],B=z.element;if(g(B)){var D=!1;if(j.display!==d&&null!==j.display&&\"none\"!==j.display){if(\"flex\"===j.display){var E=[\"-webkit-box\",\"-moz-box\",\"-ms-flexbox\",\"-webkit-flex\"];o.each(E,function(a,b){A.setPropertyValue(B,\"display\",b)})}A.setPropertyValue(B,\"display\",j.display)}j.visibility!==d&&\"hidden\"!==j.visibility&&A.setPropertyValue(B,\"visibility\",j.visibility);for(var F in z)if(z.hasOwnProperty(F)&&\"element\"!==F){var G,H=z[F],I=u.isString(H.easing)?y.Easings[H.easing]:H.easing;if(u.isString(H.pattern)){var J=1===v?function(a,b,c){var d=H.endValue[b];return c?Math.round(d):d}:function(a,b,c){var d=H.startValue[b],e=H.endValue[b]-d,f=d+e*I(v,j,e);return c?Math.round(f):f};G=H.pattern.replace(/{(\\d+)(!)?}/g,J)}else if(1===v)G=H.endValue;else{var K=H.endValue-H.startValue;G=H.startValue+K*I(v,j,K)}if(!l&&G===H.currentValue)continue;if(H.currentValue=G,\"tween\"===F)q=G;else{var L;if(A.Hooks.registered[F]){L=A.Hooks.getRoot(F);var M=g(B).rootPropertyValueCache[L];M&&(H.rootPropertyValue=M)}var N=A.setPropertyValue(B,F,H.currentValue+(p<9&&0===parseFloat(G)?\"\":H.unitType),H.rootPropertyValue,H.scrollData);A.Hooks.registered[F]&&(A.Normalizations.registered[L]?g(B).rootPropertyValueCache[L]=A.Normalizations.registered[L](\"extract\",null,N[1]):g(B).rootPropertyValueCache[L]=N[1]),\"transform\"===N[0]&&(D=!0)}}j.mobileHA&&g(B).transformCache.translate3d===d&&(g(B).transformCache.translate3d=\"(0px, 0px, 0px)\",D=!0),D&&A.flushTransformCache(B)}}j.display!==d&&\"none\"!==j.display&&(y.State.calls[f][2].display=!1),j.visibility!==d&&\"hidden\"!==j.visibility&&(y.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],v,Math.max(0,k+j.duration-b),k,q),1===v&&n(f)}}y.State.isTicking&&C(m)}function n(a,b){if(!y.State.calls[a])return!1;for(var c=y.State.calls[a][0],e=y.State.calls[a][1],f=y.State.calls[a][2],h=y.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||(\"none\"===f.display&&A.setPropertyValue(l,\"display\",f.display),\"hidden\"===f.visibility&&A.setPropertyValue(l,\"visibility\",f.visibility));var m=g(l);if(f.loop!==!0&&(o.queue(l)[1]===d||!/\\.velocityQueueEntryFlag/i.test(o.queue(l)[1]))&&m){m.isAnimating=!1,m.rootPropertyValueCache={};var n=!1;o.each(A.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=m.transformCache[b];m.transformCache[b]!==d&&new RegExp(\"^\\\\(\"+c+\"[^.]\").test(e)&&(n=!0,delete m.transformCache[b])}),f.mobileHA&&(n=!0,delete m.transformCache.translate3d),n&&A.flushTransformCache(l),A.Values.removeClass(l,\"velocity-animating\")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(r){setTimeout(function(){throw r},1)}h&&f.loop!==!0&&h(e),m&&f.loop===!0&&!b&&(o.each(m.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360==0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&\"%\"===b.unitType&&(b.endValue=0,b.startValue=100)}),y(l,\"reverse\",{loop:!0,delay:f.delay})),f.queue!==!1&&o.dequeue(l,f.queue)}y.State.calls[a]=!1;for(var p=0,q=y.State.calls.length;p<q;p++)if(y.State.calls[p]!==!1){i=!0;break}i===!1&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var o,p=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement(\"div\");if(b.innerHTML=\"<!--[if IE \"+a+\"]><span></span><![endif]-->\",b.getElementsByTagName(\"span\").length)return b=null,a}return d}(),q=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),r=function(){var a=b.performance||{};if(\"function\"!=typeof a.now){var c=a.timing&&a.timing.navigationStart?a.timing.navigationStart:(new Date).getTime();a.now=function(){return(new Date).getTime()-c}}return a}(),s=function(){var a=Array.prototype.slice;try{return a.call(c.documentElement),a}catch(b){return function(b,c){var d=this.length;if(\"number\"!=typeof b&&(b=0),\"number\"!=typeof c&&(c=d),this.slice)return a.call(this,b,c);var e,f=[],g=b>=0?b:Math.max(0,d+b),h=c<0?d+c:Math.min(c,d),i=h-g;if(i>0)if(f=new Array(i),this.charAt)for(e=0;e<i;e++)f[e]=this.charAt(g+e);else for(e=0;e<i;e++)f[e]=this[g+e];return f}}}(),t=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:Array.prototype.indexOf?function(a,b){return a.indexOf(b)>=0}:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1}},u={isNumber:function(a){return\"number\"==typeof a},isString:function(a){return\"string\"==typeof a},isArray:Array.isArray||function(a){return\"[object Array]\"===Object.prototype.toString.call(a)},isFunction:function(a){return\"[object Function]\"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isWrapped:function(a){return a&&a!==b&&u.isNumber(a.length)&&!u.isString(a)&&!u.isFunction(a)&&!u.isNode(a)&&(0===a.length||u.isNode(a[0]))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},v=!1;if(a.fn&&a.fn.jquery?(o=a,v=!0):o=b.Velocity.Utilities,p<=8&&!v)throw new Error(\"Velocity: IE8 and below require jQuery to be loaded before Velocity.\");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var w=400,x=\"swing\",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\\.3\\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement(\"div\"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:o,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:\"\",duration:w,easing:x,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){o.data(a,\"velocity\",{isSVG:u.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]={resume:!1}}}),o.each(y.State.delayedElements,function(a,c){c&&h(c,b)})},resumeAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]&&(c[5].resume=!0)}}),o.each(y.State.delayedElements,function(a,c){c&&i(c,b)})}};b.pageYOffset!==d?(y.State.scrollAnchor=b,y.State.scrollPropertyLeft=\"pageXOffset\",y.State.scrollPropertyTop=\"pageYOffset\"):(y.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,y.State.scrollPropertyLeft=\"scrollLeft\",y.State.scrollPropertyTop=\"scrollTop\");var z=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*.016):g=.016;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>1e-4&&Math.abs(h.v)>1e-4))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();y.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},o.each([[\"ease\",[.25,.1,.25,1]],[\"ease-in\",[.42,0,1,1]],[\"ease-out\",[0,0,.58,1]],[\"ease-in-out\",[.42,0,.58,1]],[\"easeInSine\",[.47,0,.745,.715]],[\"easeOutSine\",[.39,.575,.565,1]],[\"easeInOutSine\",[.445,.05,.55,.95]],[\"easeInQuad\",[.55,.085,.68,.53]],[\"easeOutQuad\",[.25,.46,.45,.94]],[\"easeInOutQuad\",[.455,.03,.515,.955]],[\"easeInCubic\",[.55,.055,.675,.19]],[\"easeOutCubic\",[.215,.61,.355,1]],[\"easeInOutCubic\",[.645,.045,.355,1]],[\"easeInQuart\",[.895,.03,.685,.22]],[\"easeOutQuart\",[.165,.84,.44,1]],[\"easeInOutQuart\",[.77,0,.175,1]],[\"easeInQuint\",[.755,.05,.855,.06]],[\"easeOutQuint\",[.23,1,.32,1]],[\"easeInOutQuint\",[.86,0,.07,1]],[\"easeInExpo\",[.95,.05,.795,.035]],[\"easeOutExpo\",[.19,1,.22,1]],[\"easeInOutExpo\",[1,0,0,1]],[\"easeInCirc\",[.6,.04,.98,.335]],[\"easeOutCirc\",[.075,.82,.165,1]],[\"easeInOutCirc\",[.785,.135,.15,.86]]],function(a,b){y.Easings[b[0]]=k.apply(null,b[1])});var A=y.CSS={RegEx:{isHex:/^#([A-f\\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\\((.*)\\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\\(.+\\))|(([A-z0-9#-.]+?)(?=\\s|$))/gi},Lists:{colors:[\"fill\",\"stroke\",\"stopColor\",\"color\",\"backgroundColor\",\"borderColor\",\"borderTopColor\",\"borderRightColor\",\"borderBottomColor\",\"borderLeftColor\",\"outlineColor\"],transformsBase:[\"translateX\",\"translateY\",\"scale\",\"scaleX\",\"scaleY\",\"skewX\",\"skewY\",\"rotateZ\"],transforms3D:[\"transformPerspective\",\"translateZ\",\"scaleZ\",\"rotateX\",\"rotateY\"],units:[\"%\",\"em\",\"ex\",\"ch\",\"rem\",\"vw\",\"vh\",\"vmin\",\"vmax\",\"cm\",\"mm\",\"Q\",\"in\",\"pc\",\"pt\",\"px\",\"deg\",\"grad\",\"rad\",\"turn\",\"s\",\"ms\"],colorNames:{aliceblue:\"240,248,255\",antiquewhite:\"250,235,215\",aquamarine:\"127,255,212\",aqua:\"0,255,255\",azure:\"240,255,255\",beige:\"245,245,220\",bisque:\"255,228,196\",black:\"0,0,0\",blanchedalmond:\"255,235,205\",blueviolet:\"138,43,226\",blue:\"0,0,255\",brown:\"165,42,42\",burlywood:\"222,184,135\",cadetblue:\"95,158,160\",chartreuse:\"127,255,0\",chocolate:\"210,105,30\",coral:\"255,127,80\",cornflowerblue:\"100,149,237\",cornsilk:\"255,248,220\",crimson:\"220,20,60\",cyan:\"0,255,255\",darkblue:\"0,0,139\",darkcyan:\"0,139,139\",darkgoldenrod:\"184,134,11\",darkgray:\"169,169,169\",darkgrey:\"169,169,169\",darkgreen:\"0,100,0\",darkkhaki:\"189,183,107\",darkmagenta:\"139,0,139\",darkolivegreen:\"85,107,47\",darkorange:\"255,140,0\",darkorchid:\"153,50,204\",darkred:\"139,0,0\",darksalmon:\"233,150,122\",darkseagreen:\"143,188,143\",darkslateblue:\"72,61,139\",darkslategray:\"47,79,79\",darkturquoise:\"0,206,209\",darkviolet:\"148,0,211\",deeppink:\"255,20,147\",deepskyblue:\"0,191,255\",dimgray:\"105,105,105\",dimgrey:\"105,105,105\",dodgerblue:\"30,144,255\",firebrick:\"178,34,34\",floralwhite:\"255,250,240\",forestgreen:\"34,139,34\",fuchsia:\"255,0,255\",gainsboro:\"220,220,220\",ghostwhite:\"248,248,255\",gold:\"255,215,0\",goldenrod:\"218,165,32\",gray:\"128,128,128\",grey:\"128,128,128\",greenyellow:\"173,255,47\",green:\"0,128,0\",honeydew:\"240,255,240\",hotpink:\"255,105,180\",indianred:\"205,92,92\",indigo:\"75,0,130\",ivory:\"255,255,240\",khaki:\"240,230,140\",lavenderblush:\"255,240,245\",lavender:\"230,230,250\",lawngreen:\"124,252,0\",lemonchiffon:\"255,250,205\",lightblue:\"173,216,230\",lightcoral:\"240,128,128\",lightcyan:\"224,255,255\",lightgoldenrodyellow:\"250,250,210\",lightgray:\"211,211,211\",lightgrey:\"211,211,211\",lightgreen:\"144,238,144\",lightpink:\"255,182,193\",lightsalmon:\"255,160,122\",lightseagreen:\"32,178,170\",lightskyblue:\"135,206,250\",lightslategray:\"119,136,153\",lightsteelblue:\"176,196,222\",lightyellow:\"255,255,224\",limegreen:\"50,205,50\",lime:\"0,255,0\",linen:\"250,240,230\",magenta:\"255,0,255\",maroon:\"128,0,0\",mediumaquamarine:\"102,205,170\",mediumblue:\"0,0,205\",mediumorchid:\"186,85,211\",mediumpurple:\"147,112,219\",mediumseagreen:\"60,179,113\",mediumslateblue:\"123,104,238\",mediumspringgreen:\"0,250,154\",mediumturquoise:\"72,209,204\",mediumvioletred:\"199,21,133\",midnightblue:\"25,25,112\",mintcream:\"245,255,250\",mistyrose:\"255,228,225\",moccasin:\"255,228,181\",navajowhite:\"255,222,173\",navy:\"0,0,128\",oldlace:\"253,245,230\",olivedrab:\"107,142,35\",olive:\"128,128,0\",orangered:\"255,69,0\",orange:\"255,165,0\",orchid:\"218,112,214\",palegoldenrod:\"238,232,170\",palegreen:\"152,251,152\",paleturquoise:\"175,238,238\",palevioletred:\"219,112,147\",papayawhip:\"255,239,213\",peachpuff:\"255,218,185\",peru:\"205,133,63\",pink:\"255,192,203\",plum:\"221,160,221\",powderblue:\"176,224,230\",purple:\"128,0,128\",red:\"255,0,0\",rosybrown:\"188,143,143\",royalblue:\"65,105,225\",saddlebrown:\"139,69,19\",salmon:\"250,128,114\",sandybrown:\"244,164,96\",seagreen:\"46,139,87\",seashell:\"255,245,238\",sienna:\"160,82,45\",silver:\"192,192,192\",skyblue:\"135,206,235\",slateblue:\"106,90,205\",slategray:\"112,128,144\",snow:\"255,250,250\",springgreen:\"0,255,127\",steelblue:\"70,130,180\",tan:\"210,180,140\",teal:\"0,128,128\",thistle:\"216,191,216\",tomato:\"255,99,71\",turquoise:\"64,224,208\",violet:\"238,130,238\",wheat:\"245,222,179\",whitesmoke:\"245,245,245\",white:\"255,255,255\",yellowgreen:\"154,205,50\",yellow:\"255,255,0\"}},Hooks:{templates:{textShadow:[\"Color X Y Blur\",\"black 0px 0px 0px\"],boxShadow:[\"Color X Y Blur Spread\",\"black 0px 0px 0px 0px\"],clip:[\"Top Right Bottom Left\",\"0px 0px 0px 0px\"],backgroundPosition:[\"X Y\",\"0% 0%\"],transformOrigin:[\"X Y Z\",\"50% 50% 0px\"],perspectiveOrigin:[\"X Y\",\"50% 50%\"]},registered:{},register:function(){for(var a=0;a<A.Lists.colors.length;a++){var b=\"color\"===A.Lists.colors[a]?\"0 0 0 1\":\"255 255 255 1\";A.Hooks.templates[A.Lists.colors[a]]=[\"Red Green Blue Alpha\",b]}var c,d,e;if(p)for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(\" \");var f=d[1].match(A.RegEx.valueSplit);\"Color\"===e[0]&&(e.push(e.shift()),f.push(f.shift()),A.Hooks.templates[c]=[e.join(\" \"),f.join(\" \")])}for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(\" \");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;A.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=A.Hooks.registered[a];return b?b[0]:a},getUnit:function(a,b){var c=(a.substr(b||0,5).match(/^[a-z%]+/)||[])[0]||\"\";return c&&t(A.Lists.units,c)?c:\"\"},fixColors:function(a){return a.replace(/(rgba?\\(\\s*)?(\\b[a-z]+\\b)/g,function(a,b,c){return A.Lists.colorNames.hasOwnProperty(c)?(b?b:\"rgba(\")+A.Lists.colorNames[c]+(b?\"\":\",1)\"):b+c})},cleanRootPropertyValue:function(a,b){return A.RegEx.valueUnwrap.test(b)&&(b=b.match(A.RegEx.valueUnwrap)[1]),A.Values.isCSSNullValue(b)&&(b=A.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=A.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=A.Hooks.cleanRootPropertyValue(d,b),b.toString().match(A.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=A.Hooks.registered[a];if(d){var e,f=d[0],g=d[1];return c=A.Hooks.cleanRootPropertyValue(f,c),e=c.toString().match(A.RegEx.valueSplit),e[g]=b,e.join(\" \")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case\"name\":return\"clip\";case\"extract\":var d;return A.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(A.RegEx.valueUnwrap),d=d?d[1].replace(/,(\\s+)?/g,\" \"):c),d;case\"inject\":return\"rect(\"+c+\")\"}},blur:function(a,b,c){switch(a){case\"name\":return y.State.isFirefox?\"filter\":\"-webkit-filter\";case\"extract\":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\\(([0-9]+[A-z]+)\\)/i);d=e?e[1]:0}return d;case\"inject\":return parseFloat(c)?\"blur(\"+c+\")\":\"none\"}},opacity:function(a,b,c){if(p<=8)switch(a){case\"name\":return\"filter\";case\"extract\":var d=c.toString().match(/alpha\\(opacity=(.*)\\)/i);return c=d?d[1]/100:1;case\"inject\":return b.style.zoom=1,parseFloat(c)>=1?\"\":\"alpha(opacity=\"+parseInt(100*parseFloat(c),10)+\")\"}else switch(a){case\"name\":return\"opacity\";case\"extract\":return c;case\"inject\":return c}}},register:function(){function a(a,b,c){if(\"border-box\"===A.getPropertyValue(b,\"boxSizing\").toString().toLowerCase()===(c||!1)){var d,e,f=0,g=\"width\"===a?[\"Left\",\"Right\"]:[\"Top\",\"Bottom\"],h=[\"padding\"+g[0],\"padding\"+g[1],\"border\"+g[0]+\"Width\",\"border\"+g[1]+\"Width\"];for(d=0;d<h.length;d++)e=parseFloat(A.getPropertyValue(b,h[d])),isNaN(e)||(f+=e);return c?-f:f}return 0}function b(b,c){return function(d,e,f){switch(d){case\"name\":return b;case\"extract\":return parseFloat(f)+a(b,e,c);case\"inject\":return parseFloat(f)-a(b,e,c)+\"px\"}}}p&&!(p>9)||y.State.isGingerbread||(A.Lists.transformsBase=A.Lists.transformsBase.concat(A.Lists.transforms3D));for(var c=0;c<A.Lists.transformsBase.length;c++)!function(){var a=A.Lists.transformsBase[c];A.Normalizations.registered[a]=function(b,c,e){switch(b){case\"name\":return\"transform\";case\"extract\":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,\"\");case\"inject\":var f=!1;switch(a.substr(0,a.length-1)){case\"translate\":f=!/(%|px|em|rem|vw|vh|\\d)$/i.test(e);break;case\"scal\":case\"scale\":y.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\\d)$/i.test(e);break;case\"skew\":f=!/(deg|\\d)$/i.test(e);break;case\"rotate\":f=!/(deg|\\d)$/i.test(e)}return f||(g(c).transformCache[a]=\"(\"+e+\")\"),g(c).transformCache[a]}}}();for(var e=0;e<A.Lists.colors.length;e++)!function(){var a=A.Lists.colors[e];A.Normalizations.registered[a]=function(b,c,e){switch(b){case\"name\":return a;case\"extract\":var f;if(A.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:\"rgb(0, 0, 0)\",blue:\"rgb(0, 0, 255)\",gray:\"rgb(128, 128, 128)\",green:\"rgb(0, 128, 0)\",red:\"rgb(255, 0, 0)\",white:\"rgb(255, 255, 255)\"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:A.RegEx.isHex.test(e)?g=\"rgb(\"+A.Values.hexToRgb(e).join(\" \")+\")\":/^rgba?\\(/i.test(e)||(g=h.black),f=(g||e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\\s+)?/g,\" \")}return(!p||p>8)&&3===f.split(\" \").length&&(f+=\" 1\"),f;case\"inject\":return/^rgb/.test(e)?e:(p<=8?4===e.split(\" \").length&&(e=e.split(/\\s+/).slice(0,3).join(\" \")):3===e.split(\" \").length&&(e+=\" 1\"),(p<=8?\"rgb\":\"rgba\")+\"(\"+e.replace(/\\s+/g,\",\").replace(/\\.(\\d)+(?=,)/g,\"\")+\")\")}}}();A.Normalizations.registered.innerWidth=b(\"width\",!0),A.Normalizations.registered.innerHeight=b(\"height\",!0),A.Normalizations.registered.outerWidth=b(\"width\"),A.Normalizations.registered.outerHeight=b(\"height\")}},Names:{camelCase:function(a){return a.replace(/-(\\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b=\"width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2\";return(p||y.State.isAndroid&&!y.State.isChrome)&&(b+=\"|transform\"),new RegExp(\"^(\"+b+\")$\",\"i\").test(a)},prefixCheck:function(a){if(y.State.prefixMatches[a])return[y.State.prefixMatches[a],!0];for(var b=[\"\",\"Webkit\",\"Moz\",\"ms\",\"O\"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\\w/,function(a){return a.toUpperCase()}),u.isString(y.State.prefixElement.style[e]))return y.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i;return a=a.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,function(a,b,c,d){return b+b+c+c+d+d}),b=c.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\\(0, ?0, ?0, ?0\\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?\"deg\":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?\"\":\"px\"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?\"inline\":/^(li)$/i.test(b)?\"list-item\":/^(tr)$/i.test(b)?\"table-row\":/^(table)$/i.test(b)?\"table\":/^(tbody)$/i.test(b)?\"table-row-group\":\"block\"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(u.isString(a.className))a.className+=(a.className.length?\" \":\"\")+b;else{var c=a.getAttribute(p<=7?\"className\":\"class\")||\"\";a.setAttribute(\"class\",c+(c?\" \":\"\")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(u.isString(a.className))a.className=a.className.toString().replace(new RegExp(\"(^|\\\\s)\"+b.split(\" \").join(\"|\")+\"(\\\\s|$)\",\"gi\"),\" \");else{var c=a.getAttribute(p<=7?\"className\":\"class\")||\"\";a.setAttribute(\"class\",c.replace(new RegExp(\"(^|s)\"+b.split(\" \").join(\"|\")+\"(s|$)\",\"gi\"),\" \"))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(p<=8)e=o.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===A.getPropertyValue(a,\"display\")&&(i=!0,A.setPropertyValue(a,\"display\",A.Values.getDisplayType(a)));var j=function(){i&&A.setPropertyValue(a,\"display\",\"none\")};if(!f){if(\"height\"===c&&\"border-box\"!==A.getPropertyValue(a,\"boxSizing\").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(A.getPropertyValue(a,\"borderTopWidth\"))||0)-(parseFloat(A.getPropertyValue(a,\"borderBottomWidth\"))||0)-(parseFloat(A.getPropertyValue(a,\"paddingTop\"))||0)-(parseFloat(A.getPropertyValue(a,\"paddingBottom\"))||0);return j(),k}if(\"width\"===c&&\"border-box\"!==A.getPropertyValue(a,\"boxSizing\").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(A.getPropertyValue(a,\"borderLeftWidth\"))||0)-(parseFloat(A.getPropertyValue(a,\"borderRightWidth\"))||0)-(parseFloat(A.getPropertyValue(a,\"paddingLeft\"))||0)-(parseFloat(A.getPropertyValue(a,\"paddingRight\"))||0);return j(),l}}var m;m=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),\"borderColor\"===c&&(c=\"borderTopColor\"),e=9===p&&\"filter\"===c?m.getPropertyValue(c):m[c],\"\"!==e&&null!==e||(e=a.style[c]),j()}if(\"auto\"===e&&/^(top|right|bottom|left)$/i.test(c)){var n=h(a,\"position\");(\"fixed\"===n||\"absolute\"===n&&/top|left/i.test(c))&&(e=o(a).position()[c]+\"px\")}return e}var i;if(A.Hooks.registered[c]){var j=c,k=A.Hooks.getRoot(j);e===d&&(e=A.getPropertyValue(a,A.Names.prefixCheck(k)[0])),A.Normalizations.registered[k]&&(e=A.Normalizations.registered[k](\"extract\",a,e)),i=A.Hooks.extractValue(j,e)}else if(A.Normalizations.registered[c]){var l,m;l=A.Normalizations.registered[c](\"name\",a),\"transform\"!==l&&(m=h(a,A.Names.prefixCheck(l)[0]),A.Values.isCSSNullValue(m)&&A.Hooks.templates[c]&&(m=A.Hooks.templates[c][1])),i=A.Normalizations.registered[c](\"extract\",a,m)}if(!/^[\\d-]/.test(i)){var n=g(a);if(n&&n.isSVG&&A.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,A.Names.prefixCheck(c)[0])}return A.Values.isCSSNullValue(i)&&(i=0),y.debug>=2&&console.log(\"Get \"+c+\": \"+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if(\"scroll\"===c)f.container?f.container[\"scroll\"+f.direction]=d:\"Left\"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(A.Normalizations.registered[c]&&\"transform\"===A.Normalizations.registered[c](\"name\",a))A.Normalizations.registered[c](\"inject\",a,d),h=\"transform\",d=g(a).transformCache[c];else{if(A.Hooks.registered[c]){var i=c,j=A.Hooks.getRoot(c);e=e||A.getPropertyValue(a,j),d=A.Hooks.injectValue(i,d,e),c=j}if(A.Normalizations.registered[c]&&(d=A.Normalizations.registered[c](\"inject\",a,d),c=A.Normalizations.registered[c](\"name\",a)),h=A.Names.prefixCheck(c)[0],p<=8)try{a.style[h]=d}catch(l){y.debug&&console.log(\"Browser does not support [\"+d+\"] for [\"+h+\"]\")}else{var k=g(a);k&&k.isSVG&&A.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}y.debug>=2&&console.log(\"Set \"+c+\" (\"+h+\"): \"+d)}return[h,d]},flushTransformCache:function(a){var b=\"\",c=g(a);if((p||y.State.isAndroid&&!y.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(A.getPropertyValue(a,b))},e={translate:[d(\"translateX\"),d(\"translateY\")],skewX:[d(\"skewX\")],skewY:[d(\"skewY\")],scale:1!==d(\"scale\")?[d(\"scale\"),d(\"scale\")]:[d(\"scaleX\"),d(\"scaleY\")],rotate:[d(\"rotateZ\"),0,0]};o.each(g(a).transformCache,function(a){/^translate/i.test(a)?a=\"translate\":/^scale/i.test(a)?a=\"scale\":/^rotate/i.test(a)&&(a=\"rotate\"),e[a]&&(b+=a+\"(\"+e[a].join(\" \")+\") \",delete e[a])})}else{var f,h;o.each(g(a).transformCache,function(c){if(f=g(a).transformCache[c],\"transformPerspective\"===c)return h=f,!0;9===p&&\"rotateZ\"===c&&(c=\"rotate\"),b+=c+f+\" \"}),h&&(b=\"perspective\"+h+\" \"+b)}A.setPropertyValue(a,\"transform\",b)}};A.Hooks.register(),A.Normalizations.register(),y.hook=function(a,b,c){var e;return a=f(a),o.each(a,function(a,f){if(g(f)===d&&y.init(f),c===d)e===d&&(e=A.getPropertyValue(f,b));else{var h=A.setPropertyValue(f,b,c);\"transform\"===h[0]&&y.CSS.flushTransformCache(f),e=h}}),e};var B=function(){function a(){return k?z.promise||null:p}function e(a,e){function f(f){var k,n;if(i.begin&&0===D)try{i.begin.call(r,r)}catch(V){setTimeout(function(){throw V},1)}if(\"scroll\"===G){var p,q,w,x=/^x$/i.test(i.axis)?\"Left\":\"Top\",B=parseFloat(i.offset)||0;i.container?u.isWrapped(i.container)||u.isNode(i.container)?(i.container=i.container[0]||i.container,p=i.container[\"scroll\"+x],w=p+o(a).position()[x.toLowerCase()]+B):i.container=null:(p=y.State.scrollAnchor[y.State[\"scrollProperty\"+x]],q=y.State.scrollAnchor[y.State[\"scrollProperty\"+(\"Left\"===x?\"Top\":\"Left\")]],w=o(a).offset()[x.toLowerCase()]+B),j={scroll:{rootPropertyValue:!1,startValue:p,currentValue:p,endValue:w,unitType:\"\",easing:i.easing,scrollData:{container:i.container,direction:x,alternateValue:q}},element:a},y.debug&&console.log(\"tweensContainer (scroll): \",j.scroll,a)}else if(\"reverse\"===G){if(!(k=g(a)))return;if(!k.tweensContainer)return void o.dequeue(a,i.queue);\"none\"===k.opts.display&&(k.opts.display=\"auto\"),\"hidden\"===k.opts.visibility&&(k.opts.visibility=\"visible\"),k.opts.loop=!1,k.opts.begin=null,k.opts.complete=null,v.easing||delete i.easing,v.duration||delete i.duration,i=o.extend({},k.opts,i),n=o.extend(!0,{},k?k.tweensContainer:null);for(var E in n)if(n.hasOwnProperty(E)&&\"element\"!==E){var F=n[E].startValue;n[E].startValue=n[E].currentValue=n[E].endValue,n[E].endValue=F,u.isEmptyObject(v)||(n[E].easing=i.easing),y.debug&&console.log(\"reverse tweensContainer (\"+E+\"): \"+JSON.stringify(n[E]),a)}j=n}else if(\"start\"===G){k=g(a),k&&k.tweensContainer&&k.isAnimating===!0&&(n=k.tweensContainer);var H=function(e,f){var g,l=A.Hooks.getRoot(e),m=!1,p=f[0],q=f[1],r=f[2]\n;if(!(k&&k.isSVG||\"tween\"===l||A.Names.prefixCheck(l)[1]!==!1||A.Normalizations.registered[l]!==d))return void(y.debug&&console.log(\"Skipping [\"+l+\"] due to a lack of browser support.\"));(i.display!==d&&null!==i.display&&\"none\"!==i.display||i.visibility!==d&&\"hidden\"!==i.visibility)&&/opacity|filter/.test(e)&&!r&&0!==p&&(r=0),i._cacheValues&&n&&n[e]?(r===d&&(r=n[e].endValue+n[e].unitType),m=k.rootPropertyValueCache[l]):A.Hooks.registered[e]?r===d?(m=A.getPropertyValue(a,l),r=A.getPropertyValue(a,e,m)):m=A.Hooks.templates[l][1]:r===d&&(r=A.getPropertyValue(a,e));var s,t,v,w=!1,x=function(a,b){var c,d;return d=(b||\"0\").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,\"\"}),c||(c=A.Values.getUnitType(a)),[d,c]};if(r!==p&&u.isString(r)&&u.isString(p)){g=\"\";var z=0,B=0,C=[],D=[],E=0,F=0,G=0;for(r=A.Hooks.fixColors(r),p=A.Hooks.fixColors(p);z<r.length&&B<p.length;){var H=r[z],I=p[B];if(/[\\d\\.-]/.test(H)&&/[\\d\\.-]/.test(I)){for(var J=H,K=I,L=\".\",N=\".\";++z<r.length;){if((H=r[z])===L)L=\"..\";else if(!/\\d/.test(H))break;J+=H}for(;++B<p.length;){if((I=p[B])===N)N=\"..\";else if(!/\\d/.test(I))break;K+=I}var O=A.Hooks.getUnit(r,z),P=A.Hooks.getUnit(p,B);if(z+=O.length,B+=P.length,O===P)J===K?g+=J+O:(g+=\"{\"+C.length+(F?\"!\":\"\")+\"}\"+O,C.push(parseFloat(J)),D.push(parseFloat(K)));else{var Q=parseFloat(J),R=parseFloat(K);g+=(E<5?\"calc\":\"\")+\"(\"+(Q?\"{\"+C.length+(F?\"!\":\"\")+\"}\":\"0\")+O+\" + \"+(R?\"{\"+(C.length+(Q?1:0))+(F?\"!\":\"\")+\"}\":\"0\")+P+\")\",Q&&(C.push(Q),D.push(0)),R&&(C.push(0),D.push(R))}}else{if(H!==I){E=0;break}g+=H,z++,B++,0===E&&\"c\"===H||1===E&&\"a\"===H||2===E&&\"l\"===H||3===E&&\"c\"===H||E>=4&&\"(\"===H?E++:(E&&E<5||E>=4&&\")\"===H&&--E<5)&&(E=0),0===F&&\"r\"===H||1===F&&\"g\"===H||2===F&&\"b\"===H||3===F&&\"a\"===H||F>=3&&\"(\"===H?(3===F&&\"a\"===H&&(G=1),F++):G&&\",\"===H?++G>3&&(F=G=0):(G&&F<(G?5:4)||F>=(G?4:3)&&\")\"===H&&--F<(G?5:4))&&(F=G=0)}}z===r.length&&B===p.length||(y.debug&&console.error('Trying to pattern match mis-matched strings [\"'+p+'\", \"'+r+'\"]'),g=d),g&&(C.length?(y.debug&&console.log('Pattern found \"'+g+'\" -> ',C,D,\"[\"+r+\",\"+p+\"]\"),r=C,p=D,t=v=\"\"):g=d)}g||(s=x(e,r),r=s[0],v=s[1],s=x(e,p),p=s[0].replace(/^([+-\\/*])=/,function(a,b){return w=b,\"\"}),t=s[1],r=parseFloat(r)||0,p=parseFloat(p)||0,\"%\"===t&&(/^(fontSize|lineHeight)$/.test(e)?(p/=100,t=\"em\"):/^scale/.test(e)?(p/=100,t=\"\"):/(Red|Green|Blue)$/i.test(e)&&(p=p/100*255,t=\"\")));if(/[\\/*]/.test(w))t=v;else if(v!==t&&0!==r)if(0===p)t=v;else{h=h||function(){var d={myParent:a.parentNode||c.body,position:A.getPropertyValue(a,\"position\"),fontSize:A.getPropertyValue(a,\"fontSize\")},e=d.position===M.lastPosition&&d.myParent===M.lastParent,f=d.fontSize===M.lastFontSize;M.lastParent=d.myParent,M.lastPosition=d.position,M.lastFontSize=d.fontSize;var g={};if(f&&e)g.emToPx=M.lastEmToPx,g.percentToPxWidth=M.lastPercentToPxWidth,g.percentToPxHeight=M.lastPercentToPxHeight;else{var h=k&&k.isSVG?c.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\"):c.createElement(\"div\");y.init(h),d.myParent.appendChild(h),o.each([\"overflow\",\"overflowX\",\"overflowY\"],function(a,b){y.CSS.setPropertyValue(h,b,\"hidden\")}),y.CSS.setPropertyValue(h,\"position\",d.position),y.CSS.setPropertyValue(h,\"fontSize\",d.fontSize),y.CSS.setPropertyValue(h,\"boxSizing\",\"content-box\"),o.each([\"minWidth\",\"maxWidth\",\"width\",\"minHeight\",\"maxHeight\",\"height\"],function(a,b){y.CSS.setPropertyValue(h,b,\"100%\")}),y.CSS.setPropertyValue(h,\"paddingLeft\",\"100em\"),g.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(A.getPropertyValue(h,\"width\",null,!0))||1)/100,g.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(A.getPropertyValue(h,\"height\",null,!0))||1)/100,g.emToPx=M.lastEmToPx=(parseFloat(A.getPropertyValue(h,\"paddingLeft\"))||1)/100,d.myParent.removeChild(h)}return null===M.remToPx&&(M.remToPx=parseFloat(A.getPropertyValue(c.body,\"fontSize\"))||16),null===M.vwToPx&&(M.vwToPx=parseFloat(b.innerWidth)/100,M.vhToPx=parseFloat(b.innerHeight)/100),g.remToPx=M.remToPx,g.vwToPx=M.vwToPx,g.vhToPx=M.vhToPx,y.debug>=1&&console.log(\"Unit ratios: \"+JSON.stringify(g),a),g}();var S=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||\"x\"===e?\"x\":\"y\";switch(v){case\"%\":r*=\"x\"===S?h.percentToPxWidth:h.percentToPxHeight;break;case\"px\":break;default:r*=h[v+\"ToPx\"]}switch(t){case\"%\":r*=1/(\"x\"===S?h.percentToPxWidth:h.percentToPxHeight);break;case\"px\":break;default:r*=1/h[t+\"ToPx\"]}}switch(w){case\"+\":p=r+p;break;case\"-\":p=r-p;break;case\"*\":p*=r;break;case\"/\":p=r/p}j[e]={rootPropertyValue:m,startValue:r,currentValue:r,endValue:p,unitType:t,easing:q},g&&(j[e].pattern=g),y.debug&&console.log(\"tweensContainer (\"+e+\"): \"+JSON.stringify(j[e]),a)};for(var I in s)if(s.hasOwnProperty(I)){var J=A.Names.camelCase(I),K=function(b,c){var d,f,g;return u.isFunction(b)&&(b=b.call(a,e,C)),u.isArray(b)?(d=b[0],!u.isArray(b[1])&&/^[\\d-]/.test(b[1])||u.isFunction(b[1])||A.RegEx.isHex.test(b[1])?g=b[1]:u.isString(b[1])&&!A.RegEx.isHex.test(b[1])&&y.Easings[b[1]]||u.isArray(b[1])?(f=c?b[1]:l(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),u.isFunction(d)&&(d=d.call(a,e,C)),u.isFunction(g)&&(g=g.call(a,e,C)),[d||0,f,g]}(s[I]);if(t(A.Lists.colors,J)){var L=K[0],O=K[1],P=K[2];if(A.RegEx.isHex.test(L)){for(var Q=[\"Red\",\"Green\",\"Blue\"],R=A.Values.hexToRgb(L),S=P?A.Values.hexToRgb(P):d,T=0;T<Q.length;T++){var U=[R[T]];O&&U.push(O),S!==d&&U.push(S[T]),H(J+Q[T],U)}continue}}H(J,K)}j.element=a}j.element&&(A.Values.addClass(a,\"velocity-animating\"),N.push(j),k=g(a),k&&(\"\"===i.queue&&(k.tweensContainer=j,k.opts=i),k.isAnimating=!0),D===C-1?(y.State.calls.push([N,r,i,null,z.resolver,null,0]),y.State.isTicking===!1&&(y.State.isTicking=!0,m())):D++)}var h,i=o.extend({},y.defaults,v),j={};switch(g(a)===d&&y.init(a),parseFloat(i.delay)&&i.queue!==!1&&o.queue(a,i.queue,function(b){y.velocityQueueEntryFlag=!0;var c=y.State.delayedElements.count++;y.State.delayedElements[c]=a;var d=function(a){return function(){y.State.delayedElements[a]=!1,b()}}(c);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:d}}),i.duration.toString().toLowerCase()){case\"fast\":i.duration=200;break;case\"normal\":i.duration=w;break;case\"slow\":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}if(y.mock!==!1&&(y.mock===!0?i.duration=i.delay=1:(i.duration*=parseFloat(y.mock)||1,i.delay*=parseFloat(y.mock)||1)),i.easing=l(i.easing,i.duration),i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),\"auto\"===i.display&&(i.display=y.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,i.queue===!1)if(i.delay){var k=y.State.delayedElements.count++;y.State.delayedElements[k]=a;var n=function(a){return function(){y.State.delayedElements[a]=!1,f()}}(k);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(f,parseFloat(i.delay)),next:n}}else f();else o.queue(a,i.queue,function(a,b){if(b===!0)return z.promise&&z.resolver(r),!0;y.velocityQueueEntryFlag=!0,f(a)});\"\"!==i.queue&&\"fx\"!==i.queue||\"inprogress\"===o.queue(a)[0]||o.dequeue(a)}var j,k,p,q,r,s,v,x=arguments[0]&&(arguments[0].p||o.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));u.isWrapped(this)?(k=!1,q=0,r=this,p=this):(k=!0,q=1,r=x?arguments[0].elements||arguments[0].e:arguments[0]);var z={promise:null,resolver:null,rejecter:null};if(k&&y.Promise&&(z.promise=new y.Promise(function(a,b){z.resolver=a,z.rejecter=b})),x?(s=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(s=arguments[q],v=arguments[q+1]),!(r=f(r)))return void(z.promise&&(s&&v&&v.promiseRejectEmpty===!1?z.resolver():z.rejecter()));var C=r.length,D=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(s)&&!o.isPlainObject(v)){var E=q+1;v={};for(var F=E;F<arguments.length;F++)u.isArray(arguments[F])||!/^(fast|normal|slow)$/i.test(arguments[F])&&!/^\\d/.test(arguments[F])?u.isString(arguments[F])||u.isArray(arguments[F])?v.easing=arguments[F]:u.isFunction(arguments[F])&&(v.complete=arguments[F]):v.duration=arguments[F]}var G;switch(s){case\"scroll\":G=\"scroll\";break;case\"reverse\":G=\"reverse\";break;case\"pause\":var H=(new Date).getTime();return o.each(r,function(a,b){h(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?\"\":v;return f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1)||(o.each(r,function(a,d){if(d===e)return b[5]={resume:!1},c=!0,!1}),!c&&void 0)})}),a();case\"resume\":return o.each(r,function(a,b){i(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?\"\":v;return f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1)||(!b[5]||(o.each(r,function(a,d){if(d===e)return b[5].resume=!0,c=!0,!1}),!c&&void 0))})}),a();case\"finish\":case\"finishAll\":case\"stop\":o.each(r,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),\"finishAll\"!==s||v!==!0&&!u.isString(v)||(o.each(o.queue(b,u.isString(v)?v:\"\"),function(a,b){u.isFunction(b)&&b()}),o.queue(b,u.isString(v)?v:\"\",[]))});var I=[];return o.each(y.State.calls,function(a,b){b&&o.each(b[1],function(c,e){var f=v===d?\"\":v;if(f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1))return!0;o.each(r,function(c,d){if(d===e)if((v===!0||u.isString(v))&&(o.each(o.queue(d,u.isString(v)?v:\"\"),function(a,b){u.isFunction(b)&&b(null,!0)}),o.queue(d,u.isString(v)?v:\"\",[])),\"stop\"===s){var h=g(d);h&&h.tweensContainer&&f!==!1&&o.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),I.push(a)}else\"finish\"!==s&&\"finishAll\"!==s||(b[2].duration=1)})})}),\"stop\"===s&&(o.each(I,function(a,b){n(b,!0)}),z.promise&&z.resolver(r)),a();default:if(!o.isPlainObject(s)||u.isEmptyObject(s)){if(u.isString(s)&&y.Redirects[s]){j=o.extend({},v);var J=j.duration,K=j.delay||0;return j.backwards===!0&&(r=o.extend(!0,[],r).reverse()),o.each(r,function(a,b){parseFloat(j.stagger)?j.delay=K+parseFloat(j.stagger)*a:u.isFunction(j.stagger)&&(j.delay=K+j.stagger.call(b,a,C)),j.drag&&(j.duration=parseFloat(J)||(/^(callout|transition)/.test(s)?1e3:w),j.duration=Math.max(j.duration*(j.backwards?1-a/C:(a+1)/C),.75*j.duration,200)),y.Redirects[s].call(b,b,j||{},a,C,r,z.promise?z:d)}),a()}var L=\"Velocity: First argument (\"+s+\") was not a property map, a known action, or a registered redirect. Aborting.\";return z.promise?z.rejecter(new Error(L)):b.console&&console.log(L),a()}G=\"start\"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];o.each(r,function(a,b){u.isNode(b)&&e(b,a)}),j=o.extend({},y.defaults,v),j.loop=parseInt(j.loop,10);var O=2*j.loop-1;if(j.loop)for(var P=0;P<O;P++){var Q={delay:j.delay,progress:j.progress};P===O-1&&(Q.display=j.display,Q.visibility=j.visibility,Q.complete=j.complete),B(r,\"reverse\",Q)}return a()};y=o.extend(B,y),y.animate=B;var C=b.requestAnimationFrame||q;if(!y.State.isMobile&&c.hidden!==d){var D=function(){c.hidden?(C=function(a){return setTimeout(function(){a(!0)},16)},m()):C=b.requestAnimationFrame||q};D(),c.addEventListener(\"visibilitychange\",D)}return a.Velocity=y,a!==b&&(a.fn.velocity=B,a.fn.velocity.defaults=y.defaults),o.each([\"Down\",\"Up\"],function(a,b){y.Redirects[\"slide\"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.begin,k=i.complete,l={},m={height:\"\",marginTop:\"\",marginBottom:\"\",paddingTop:\"\",paddingBottom:\"\"};i.display===d&&(i.display=\"Down\"===b?\"inline\"===y.CSS.Values.getDisplayType(a)?\"inline-block\":\"block\":\"none\"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in m)if(m.hasOwnProperty(c)){l[c]=a.style[c];var d=A.getPropertyValue(a,c);m[c]=\"Down\"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow=\"hidden\"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},y(a,m,i)}}),o.each([\"In\",\"Out\"],function(a,b){y.Redirects[\"fade\"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.complete,k={opacity:\"In\"===b?1:0};0!==e&&(i.begin=null),i.complete=e!==f-1?null:function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display=\"In\"===b?\"auto\":\"none\"),y(this,k,i)}}),y}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});"

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _elements;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Part of the Antares Project package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the 3-clause BSD License.
 *
 * This source file is subject to the 3-clause BSD License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Global
 * @version    0.9.1
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 *

 */

/*global componentHandler enquire ready */

// import {antaresCfg} from './../config/antares_cfg';

var AntaresForms = {
    init: function init() {
        var self = this;
        this.helpers();

        self.elements.checkboxesAndRadios();
        self.elements.datePicker();
        self.elements.rangeSlider();
        self.elements.simplePaginationList();
        self.elements.select();
        self.elements.spinner();
        self.elements.tooltip();

        self.elements.activateWithSelected(); //only custom code
        self.elements.footerShadow(); //only custom code
        self.elements.mobileSelectMenu(); //only custom code
        self.elements.readOnly(); //only custom code
        self.elements.search(); //only custom code

        self.elements.tabsSwiper();
        // self.elements.closeDdownBreadcrumbs();

        self.elements.tablePagination();
        // self.elements.searchLogs();
        self.elements.disabledDashboardChartCompareMode();
        self.elements.stopScroll();
        self.elements.menuAsideCategoryActiveScroll();
        self.elements.logsCorrectTimelineBorder();
        self.elements.cardChartHeaderTruncate();
        self.elements.checkIfNeedTruncateTooltip();

        //MDL reinit
        componentHandler.upgradeAllRegistered();
    },
    helpers: function helpers() {
        document.onkeydown = function (e) {
            //#145
            var li;
            var oldScroll;
            var bottomScroll;
            if ($('.antares-ac li').hasClass('is-selected')) {
                li = $('.ac-open .is-selected').height();
                oldScroll = $('.ac-open .ps__scrollbar-y-rail').css('top');
                if (oldScroll === undefined) {
                    return;
                }
                oldScroll = oldScroll.substring(0, oldScroll.length - 2);
                bottomScroll = $('.ac-container--wrapper ul').height() - $('.ac-container--wrapper').height();
            }
            switch (e.keyCode) {
                case 38:
                    if (oldScroll <= 0) {
                        console.log('up if');
                        console.log('START');
                    } else {
                        console.log('up else');
                        var newScroll = parseInt(oldScroll) - li;
                        $('.ac-container--wrapper').scrollTop(newScroll).perfectScrollbar('update');
                        console.log(newScroll);
                    }
                    break;
                case 40:
                    if (oldScroll >= bottomScroll) {
                        console.log('down if');
                        console.log('END');
                    } else {
                        console.log('down else');
                        var newScroll = parseInt(oldScroll) + li;
                        $('.ac-container--wrapper').scrollTop(newScroll).perfectScrollbar('update');
                        console.log(newScroll);
                    }
                    break;
            }
        };

        // enquire.register('screen and (max-width: 1366px)', {
        //     //mobile readonly for multiple
        //     match: function () {
        //         $('select').on('select2:open', function () {
        //             $('input').prop('focus', 0);
        //         });
        //     }
        // });

        $(window).on('resize', function () {
            $('select').each(function () {
                if ($(this).hasClass('select2-hidden-accessible')) {
                    $(this).select2('close');
                }
            });
        });

        function menuAsideRWD() {
            // blue menu
            var mobileMenu = $('.menu-mobile-settings');
            //restrain
            if (!mobileMenu.length) {
                return;
            }
            mobileMenu.find('option').remove();
            var groups = [];
            $('.menu-aside li').each(function () {
                var link = $(this).find('> a').attr('href');
                var text = $(this).find('> a > span').eq(0).text();
                //validate if not empty
                if (!$(this).hasClass('menu-aside__title')) {
                    //if has submenu
                    if ($(this).hasClass('has-submenu')) {
                        //  create optgroup if none
                        if (!$('optgroup[label="' + text + '"]').length) {
                            mobileMenu.append('<optgroup label="' + text + '"></optgroup>');
                            groups.push(text);
                        }
                        //deal with submenu children
                    } else if ($(this).parent('.menu-aside__submenu').length) {
                        // console.log(groups)

                        mobileMenu.find('optgroup[label="' + groups[0] + '"]').append('<option value="' + link + '">' + text + '</option>');
                        // mobileMenu.find('optgroup').append('<option value="' + link + '">' + text + '</option>');
                    } else {
                        //normal options
                        groups = [];
                        mobileMenu.append('<option value="' + link + '">' + text + '</option>');
                    }
                }
            });
        }

        menuAsideRWD();
    },


    elements: (_elements = {
        closeDdownBreadcrumbs: function closeDdownBreadcrumbs() {
            // $('.breadcrumbs').click(function () {
            //     if ($('.ddown').hasClass('ddown--open')) {
            //         window.requestAnimationFrame(function () {
            //             AntaresDdownGeneral.closeAllDropdowns();
            //         });
            //     }
            // });
        },
        openSearchFilters: function openSearchFilters() {
            $('.tab-search .search-box .zmdi').click(function () {
                if ($('.tab-search').hasClass('tab-search--open-search')) {
                    $(this).closest('.tab-search').removeClass('tab-search--open-search');
                } else {
                    $(this).closest('.tab-search').addClass('tab-search--open-search').find('input').focus();
                }
            });
            //   }
            // });
        },
        tabsSwiper: function tabsSwiper() {
            var mySwiper = undefined;

            function activateSwiper() {
                var widthAllTabs = 0;
                for (var i = 1; i <= $('.swiper-mdl-tabs .swiper-slide').length; i++) {
                    widthAllTabs += $('.swiper-mdl-tabs .swiper-slide:nth-child(' + i + ')').width();
                }
                if ($('.swiper-container').width() < widthAllTabs) {
                    mySwiper = new Swiper('.swiper-mdl-tabs', {
                        slidesPerView: 'auto',
                        nextButton: '.swiper-mdl-tabs-next',
                        prevButton: '.swiper-mdl-tabs-prev'
                    });
                } else if (mySwiper !== undefined) {
                    mySwiper.destroy();
                    mySwiper = undefined;
                    $('.swiper-mdl-tabs').removeClass('swiper-container-horizontal');
                }
            }

            activateSwiper(true);
            $(window).resize(function () {
                activateSwiper();
            });
        },
        checkboxesAndRadios: function checkboxesAndRadios() {
            // init only when needed
            $('[data-icheck="true"]').each(function () {
                if (!$(this).closest('.icheckbox_billevo').length) {
                    $(this).iCheck({
                        checkboxClass: 'icheckbox_billevo',
                        radioClass: 'iradio_billevo',
                        increaseArea: '30%'
                    });
                }
            });
        },
        datePicker: function datePicker() {
            var dateRangeOptionsDashboard = {
                datepickerOptions: {
                    numberOfMonths: 2,
                    mirrorOnCollision: true, //
                    verticalOffset: 0
                }
            };

            //range
            $('[data-daterangepicker]').daterangepicker({
                onOpen: function onOpen() {
                    if ($('button').hasClass('comiseo-daterangepicker-bottom')) {
                        $('.comiseo-daterangepicker').addClass('arrow-bottom').removeClass('arrow-top');
                    } else {
                        $('.comiseo-daterangepicker').addClass('arrow-top').removeClass('arrow-bottom');
                    }
                }
            });

            $('.page-dashboard [data-daterangepicker]').daterangepicker($.extend({}, dateRangeOptionsDashboard, {
                initialText: 'Select time period to analize'
            }));

            //Screen Size <768
            enquire.register('screen and (max-width:768px)', {
                match: function match() {
                    $('.page-dashboard [data-daterangepicker]').daterangepicker('destroy');
                    $('.page-dashboard [data-daterangepicker]').daterangepicker($.extend({}, dateRangeOptionsDashboard, {
                        initialText: 'Select time period to analize'
                    }));
                }
            });

            // class cleanup
            var classesToRemove = ['ui-button', 'ui-widget', 'ui-state-default', 'ui-corner-all', 'ui-button-text-only'];

            var $target = $('.comiseo-daterangepicker-buttonpanel button');
            $.each(classesToRemove, function (i, v) {
                $target.removeClass(v);
            });
            $target.mouseover(function () {
                $(this).removeClass('ui-state-hover');
            });

            // time
            var timepicker = $('[data-timepicker]');
            var datepicker = $('[data-datepicker]');
            var datetimepicker = $('[data-datetimepicker]');

            timepicker.datetimepicker({
                datepicker: false,
                format: 'H:i',
                onGenerate: function onGenerate(ct, $input) {
                    $input.prop('readonly', true);
                    var $this = $(this);
                    $this.find('.xdsoft_date').removeClass('xdsoft_disabled');
                    $this.find('.xdsoft_time').removeClass('xdsoft_disabled');
                }
            });

            datepicker.datetimepicker({
                timepicker: false,
                format: 'Y-m-d',
                onGenerate: function onGenerate(ct, $input) {
                    $input.prop('readonly', true);
                    var $this = $(this);
                    $this.find('.xdsoft_date').removeClass('xdsoft_disabled');
                    $this.find('.xdsoft_time').removeClass('xdsoft_disabled');
                }
            });

            datetimepicker.datetimepicker({
                datepicker: true,
                onGenerate: function onGenerate(ct, $input) {
                    $input.prop('readonly', true);
                    var $this = $(this);
                    $this.find('.xdsoft_date').removeClass('xdsoft_disabled');
                    $this.find('.xdsoft_time').removeClass('xdsoft_disabled');
                }
            });

            $.datetimepicker.setLocale('en');

            // alt datepicker

            if ($('[data-alt-datepicker]').length) {
                $('[data-alt-datepicker]').bootstrapMaterialDatePicker({
                    switchOnClick: true,
                    weekStart: 0,
                    time: false
                });
            }

            if ($('[data-alt-timepicker]').length) {
                $('[data-alt-timepicker]').bootstrapMaterialDatePicker({
                    switchOnClick: true,
                    date: false
                });
            }

            if ($('[data-alt-datetimepicker]').length) {
                $('[data-alt-datetimepicker]').bootstrapMaterialDatePicker({
                    switchOnClick: true,
                    format: 'dddd DD MMMM YYYY - HH:mm'
                });
            }

            $(window).scroll(function () {
                $('.xdsoft_datetimepicker').css('display', 'none');
            });
        },
        rangeSlider: function rangeSlider() {
            var slider = $('[data-slider]'),
                rangeSlider = $('[data-slider-range]');

            slider.slider({
                range: 'min',
                slide: function slide(event, ui) {
                    //if validation - must contain sibling input
                    if ($(this).siblings('.slider-val').length) {
                        $(this).siblings('.slider-val').val(ui.value);
                        // $(this).siblings('.slider-val').valid();
                    }
                }
            });

            rangeSlider.slider({
                range: true,
                min: 0,
                max: 3000,
                values: [575, 2000],
                slide: function slide() {}
            });
        },
        simplePaginationList: function simplePaginationList() {
            //            // pagination
            __webpack_require__(656);
            //
            var perPage = 10; // dont change position in code of this variable!
            //
            //            function currentNumber(number) {
            //                // after click, variable perPage -> refresh simplePagination
            //                $('.current' + number).click(function () {
            //                    perPage = number;
            //                    let parent = $(this).closest('.datarow');
            //                    parent.find('.simple-pagination--list').pagination('updateItemsOnPage', number);
            //                    parent.find('.current10').removeClass('active'); // all disable
            //                    parent.find('.current25').removeClass('active');
            //                    parent.find('.current50').removeClass('active');
            //                    parent.find('.current100').removeClass('active');
            //
            //                    parent.find('.current' + number).addClass('active'); // enable correct
            //                    parent.find('> div').perfectScrollbar('update');
            //                    AntaresForms.elements.logsCorrectTimelineBorder()
            //                });
            //            }
            //
            //            currentNumber(10);
            //            currentNumber(25);
            //            currentNumber(50);
            //            currentNumber(100);
            //
            $('.simple-pagination--list').each(function () {
                var parent = $(this).closest('.datarow');
                var items = parent.find('.timeline li');
                var numItems = items.length;
                items.slice(perPage).hide();
                //                $(this).pagination({
                //                    items: numItems,
                //                    itemsOnPage: perPage,
                //                    cssStyle: 'antares-pagination',
                //                    prevText: '<i class="zmdi zmdi-long-arrow-left"></i>',
                //                    nextText: '<i class="zmdi zmdi-long-arrow-right"></i>',
                //                    displayedPages: 3,
                //                    ellipsePageSet: false,
                //                    edges: 1,
                ////                    onPageClick: function (pageNumber) {
                ////                        var showFrom = perPage * (pageNumber - 1);
                ////                        var showTo = showFrom + perPage;
                ////                        items
                ////                                .hide()
                ////                                .slice(showFrom, showTo)
                ////                                .show();
                ////                        parent.find('> div').perfectScrollbar('update');
                ////                        componentHandler.upgradeAllRegistered();
                ////                        parent.adjustCardHeight();
                ////                        AntaresForms.elements.logsCorrectTimelineBorder()
                ////                    }
                //                });
                parent.adjustCardHeight();
            });
            //
            //            componentHandler.upgradeAllRegistered();
        },
        select: function select() {
            //select close on remove option - fix

            var $element = $('select');

            $element.on('select2:unselect', function (e) {
                var $self = $(this);

                //tmp
                if ($self.closest('.ddown-multi__submenu').length) {
                    e.preventDefault();
                    setTimeout(function () {
                        $self.closest('.ddown-multi__submenu').css('display', 'block');
                    }, 10);
                }

                function cancelAndRemove(event) {
                    event.preventDefault();
                    removeEvents();
                }

                function removeEvents() {
                    $element.off('select2:opening', cancelAndRemove);
                    $element.off('select2:closing', cancelAndRemove);
                }

                $element.on('select2:opening', cancelAndRemove);
                $element.on('select2:closing', cancelAndRemove);
                setTimeout(removeEvents, 0);
            });

            var select2Base = {
                dropdownAutoWidth: true,
                theme: 'selectAR',
                allowClear: true
                // placeholder: 'Select an option',
                //disable search below
                // minimumResultsForSearch: Infinity
            };

            // $.fn.select2.defaults.set("theme", "AR");

            // Select2 Init - Standard
            $('[data-selectAR]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                var myData = $(this).attr('data-select2--class');
                if (myData === undefined) {
                    myData = '';
                }
                $(this).select2($.extend({}, select2Base, {
                    theme: 'selectAR ' + myData
                }));
            });

            // Select2 Init - Search
            $('[data-selectAR--search]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                var myData = $(this).attr('data-select2--class');
                if (myData === undefined) {
                    myData = '';
                }
                $(this).select2($.extend({}, select2Base, {
                    theme: 'selectAR ' + myData,
                    minimumResultsForSearch: 1
                }));
            });

            // Select2 Init - Tags
            $('[data-selectAR--tags-add-new]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                var myData = $(this).attr('data-select2--class');
                if (myData === undefined) {
                    myData = '';
                }
                $(this).select2($.extend({}, select2Base, {
                    theme: 'selectAR ' + myData,
                    tags: true
                }));
            });

            // Select2 Init - Mdl
            $('[data-selectAR--mdl]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                var myData = $(this).attr('data-select2--class');
                if (myData === undefined) {
                    myData = '';
                }
                $(this).select2($.extend({}, select2Base, {
                    theme: 'mdl' + myData
                }));
            });

            // Select2 Init - Mdl Big
            $('[data-selectAR--mdl-big]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                var myData = $(this).attr('data-select2--class');
                if (myData === undefined) {
                    myData = '';
                }
                $(this).select2($.extend({}, select2Base, {
                    theme: 'mdl-big ' + myData
                }));
            });

            // Select2 Init - Mdl Short
            $('[data-selectAR--mdl-short]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                var myData = $(this).attr('data-select2--class');
                if (myData === undefined) {
                    myData = '';
                }
                $(this).select2($.extend({}, select2Base, {
                    theme: 'mdl-short ' + myData
                }));
            });

            // Select2 Init - Tags
            $('[data-selectAR--tags]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                var myData = $(this).attr('data-select2--class');
                if (myData === undefined) {
                    myData = '';
                }
                $(this).select2($.extend({}, select2Base, {
                    theme: 'tags ' + myData
                }));
            });

            // Select2 Init - Tags with 1 option
            $('[data-selectAR--custom-input]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                $(this).select2($.extend({}, select2Base, {
                    createTag: function createTag(term, data) {
                        if ($(data).filter(function () {
                            return this.text.localeCompare(term) === 0;
                        }).length === 0) {
                            return {
                                text: term,
                                id: '123'
                            };
                        }
                    },
                    multiple: true,
                    tags: true,
                    theme: 'custom-input',
                    maximumSelectionLength: 1
                }));
            });

            //https://github.com/select2/select2/issues/3901
            // $('[data-selectAR]').select2(select2Base);
            // //https://github.com/select2/select2/issues/3901
            //Flags integration
            //on init

            // Select2 Init - Flag
            $('select[data-flag-select]').each(function () {
                if ($(this).find('option:selected').length) {
                    var flag = $(this).find('option:selected').data('country');
                } else {
                    return false;
                }

                $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
            });

            $('select[data-flag-select]').on('change', function () {
                if ($(this).find('option:selected').length) {
                    var flag = $(this).find('option:selected').data('country');
                } else {
                    return false;
                }

                $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
            });

            // Select2 Init - Flag 2
            $('[data-flag-select]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                $(this).select2({
                    minimumResultsForSearch: Infinity,
                    theme: 'selectAR',
                    dropdownAutoWidth: true,
                    templateResult: function templateResult(data) {
                        if (data.element && data.element.attributes['data-country']) {
                            // console.log(data);
                            var flagCode = data.element.attributes['data-country'].nodeValue;
                            var $state = $('<span class="flag-icon flag-icon-' + flagCode + '"></span><span>' + data.text + '</span>');
                            return $state;
                        } else {
                            return data.text;
                        }
                    }
                });
            });

            // Select2 Init - Flag with search
            $('select[data-flag-select--search]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                if ($(this).find('option:selected').length) {
                    var flag = $(this).find('option:selected').data('country');
                } else {
                    return false;
                }

                $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
            });

            // Select2 Init - Flag with search v2
            $('[data-flag-select--search]').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                $(this).select2({
                    dropdownAutoWidth: true,
                    theme: 'selectAR',
                    minimumResultsForSearch: 1,
                    closeOnSelect: false,
                    templateResult: function templateResult(data) {
                        if (data.element && data.element.attributes['data-country']) {
                            // console.log(data);
                            var flagCode = data.element.attributes['data-country'].nodeValue;
                            var $state = $('<span class="flag-icon flag-icon-' + flagCode + '"></span><span>' + data.text + '</span>');
                            return $state;
                        } else {
                            return data.text;
                        }
                    }
                });
            });

            $('select[data-flag-select--search]').on('change', function () {
                if ($(this).find('option:selected').length) {
                    var flag = $(this).find('option:selected').data('country');
                } else {
                    return false;
                }

                $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
            });

            // Select2 Init - Prefix Control
            $('select').each(function () {
                if ($(this).data('select2')) {
                    return false;
                }
                if ($(this).attr('data-prefix')) {
                    if (!$(this).next('.select2').find('.select__prefix').length) {
                        var prefixValue = $(this).data('prefix');
                        // $(this).siblings('.select2').find('.select2-selection__rendered').attr('data-prefix', prefixValue );
                        $(this).next('.select2').find('.select2-selection__rendered').prepend('<span class="select__prefix">' + prefixValue + '</span>');

                        $(this).on('change', function () {
                            $(this).next('.select2').find('.select2-selection__rendered').prepend('<span class="select__prefix">' + prefixValue + '</span>');
                        });
                    }
                }
            });
        },
        spinner: function spinner() {
            $('[data-spinner="true"]').spinner({
                min: 0,
                max: 3000,
                start: 0,
                culture: 'en-US',
                step: 1,
                numberFormat: 'C'
            });
        },
        tooltip: function tooltip() {
            $('[data-tooltip-inline]').qtip({
                hide: 'click'
            });

            $('.mdl-button__ripple-container').on('click', function () {
                $('[data-hasqtip]').qtip('hide');
                // tooltip;
            });

            function tooltipDesktop() {
                $(document).on('mouseover', "[data-tooltip-inline != '']", function (event) {
                    // Element already has a qTip? Return.
                    if ($(this).qtip('api')) {
                        return;
                    }

                    // Create our new one
                    $(this).qtip({
                        style: {
                            classes: 'ar',
                            tip: {
                                width: 9,
                                height: 5
                            }
                        },
                        position: {
                            viewport: $(window),
                            adjust: {
                                method: 'shift'
                            }
                        },
                        content: {
                            attr: 'data-tooltip-inline'
                        },
                        show: {
                            effect: function effect() {
                                $(this).fadeIn(300); // "this" refers to the tooltip
                            }
                        },
                        hide: {
                            effect: function effect() {
                                $(this).fadeOut(300); // "this" refers to the tooltipc1
                            }
                        },

                        events: {
                            show: function show(event, api) {
                                var $el = $(api.elements.target[0]);
                                $el.qtip('option', 'position.my', $el.data('tooltip-my-position') == undefined ? 'top center' : $el.data('tooltip-my-position'));
                                $el.qtip('option', 'position.at', $el.data('tooltip-target-position') == undefined ? 'bottom center' : $el.data('tooltip-target-position'));

                                // $(document).one("click", function() { $(".item-grp-single").qtip('hide'); });  issue #256
                            }
                        }
                    });

                    $(this).qtip('show');
                });

                $(document).on('mouseover', "[data-tooltip='true']", function (event) {
                    // Element already has a qTip? Return.
                    if ($(this).qtip('api')) {
                        return;
                    }

                    $(this).qtip({
                        style: {
                            classes: 'ar',
                            tip: {
                                width: 9,
                                height: 5
                            }
                        },
                        content: {
                            text: $(this).next('div.tooltip-content') // Use the "div" element next to this for the content
                        },
                        position: {
                            viewport: $(window),
                            adjust: {
                                method: 'shift'
                            }
                        },
                        show: {
                            effect: function effect() {
                                $(this).fadeIn(300); // "this" refers to the tooltip
                            }
                        },
                        hide: {
                            // effect: function () {
                            //     $(this).fadeOut(300); // "this" refers to the tooltip
                            // }
                        },
                        events: {
                            show: function show(event, api) {
                                var $el = $(api.elements.target[0]);
                                $el.qtip('option', 'position.my', $el.data('tooltip-my-position') == undefined ? 'top center' : $el.data('tooltip-my-position'));
                                $el.qtip('option', 'position.at', $el.data('tooltip-target-position') == undefined ? 'bottom center' : $el.data('tooltip-target-position'));
                                $('.cp-brand').off('click.tooltip');
                                $el.on('click.tooltip', function () {
                                    api.hide();
                                });
                            }
                        }
                    });

                    $(this).qtip('show');
                });
            }

            tooltipDesktop();
        }
    }, _defineProperty(_elements, 'spinner', function spinner() {
        $('[data-spinner="true"]').spinner({
            min: 0,
            max: 1000000000,
            start: 0,
            culture: 'en-US',
            step: 1,
            numberFormat: 'C'
        });
    }), _defineProperty(_elements, 'activateWithSelected', function activateWithSelected() {
        $('.card-ctrls').click();
        var table = $('#table-ma');
        table.click(function () {
            window.requestAnimationFrame(function () {
                if (table.attr('disabled')) {
                    console.log('AWS REMOVE');
                    table.closest('.ddown--left').removeClass('ddown--open');
                } else {
                    console.log('AWS ADD');
                    table.closest('.ddown--left').addClass('ddown--open');
                }
            });
        });
    }), _defineProperty(_elements, 'footerShadow', function footerShadow() {
        $(window).scroll(function () {
            if ($(window).scrollTop() > $(document).height() - $(window).height() - 100) {
                $('.app-content__footer').addClass('noboxshadow');
            } else {
                $('.app-content__footer').removeClass('noboxshadow');
            }
        });
        if ($('.app-content__footer').length) {
            setTimeout(function () {
                $('.app-content').on('ps-y-reach-end', function () {
                    $('.app-content__footer').addClass('noboxshadow');
                });
            }, 500);

            $('.app-content').on('ps-scroll-up', function () {
                $('.app-content__footer').removeClass('noboxshadow');
            });

            enquire.register('screen and (max-width:1199px)', {
                match: function match() {
                    var element = $('.app-content')[0];
                    element.addEventListener('scroll', function (event) {
                        var element = event.target;
                        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                            $('.app-content__footer').addClass('noboxshadow');
                        } else {
                            $('.app-content__footer').removeClass('noboxshadow');
                        }
                    });
                }
            });
        }

        if ($('.menu-aside-container').length) {
            $('.menu-aside-container').on('ps-y-reach-end', function (e) {
                e.preventDefault();
                return false;
            });
        }
    }), _defineProperty(_elements, 'mobileSelectMenu', function mobileSelectMenu() {
        $('#select-anchor').change(function (e) {
            var selectValue = $(this).select2('data')[0].id;
            setTimeout(function () {
                window.location.hash = selectValue;
            }, 50);
            e.preventDefault();
        });
    }), _defineProperty(_elements, 'readOnly', function readOnly() {
        // readonly state
        //checkbox
        $('.form-block').each(function () {
            var self = $(this);

            self.find('input[readonly]').on('ifChecked', function () {
                setTimeout(function () {
                    self.find('input[readonly]').iCheck('uncheck');
                }, 50);
            });
        });

        //swittch
        $('.switch-checkbox[readonly]').on('click', function () {
            return false;
        });
    }), _defineProperty(_elements, 'search', function search() {
        var search = $('.main-head '),
            searchSingle = $('.main-head .search-box');
        //Screen Size <768
        enquire.register('screen and (max-width:767px)', {
            // #62 768 -> 767
            match: function match() {
                $(document).on('click', '.main-head .search-box > i:first-child', function () {
                    $('.main-head').addClass('main-head--mobile--search'); // #62 toggle na add
                    searchSingle.addClass('search-box--toggled');
                    searchSingle.find('input').focus();
                    $(this).closest('.search-box').find('.search-box__mdl-textfield input').focus();
                });
                $(document).on('click', '.main-head .search-box .search-box__close', function () {
                    $('.main-head').removeClass('main-head--mobile--search'); // #62 toggle na remove
                    $(this).closest('.search-box').removeClass('search-box--toggled');
                });
            },
            unmatch: function unmatch() {
                search.show();
                $('.main-head').removeClass('main-head--mobile--search');
                // search.toggleClass('search-box--toggled');
                $(document).on('click', '.main-head .search-box i:first-child', function (e) {
                    $('.main-head').removeClass('main-head--mobile--search'); // #62 add line
                    $(this).closest('.search-box').removeClass('search-box--toggled'); // #62 add line
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                });
            }
        });
        //closable modificator action
        $('.search-box--closable').on('click', '.search-box__close', function () {
            $(this).closest('.search-box').find('.search-box__search-field').val('');
            $(this).hide();
        });
        $('.search-box--closable .search-box__search-field').on('input', function () {
            if ($(this).val().length === 0) {
                $(this).closest('.search-box').find('.search-box__close').hide();
            } else {
                $(this).closest('.search-box').find('.search-box__close').show();
            }
        });
    }), _defineProperty(_elements, 'tablePagination', function tablePagination() {
        setTimeout(function () {
            var table = $('.pagination--type2');
            table.find('a').addClass('mdl-js-button mdl-js-ripple-effect');
            componentHandler.upgradeAllRegistered();
            table.find('a').removeClass('prev');
            table.find('a').removeClass('next');
            table.find('a.current').prev().addClass('prev');
            table.find('a.current').next().addClass('next');
            table.click(function () {
                table.find('a').addClass('mdl-js-button mdl-js-ripple-effect');
                componentHandler.upgradeAllRegistered();
                table.find('a').removeClass('prev');
                table.find('a').removeClass('next');
                table.find('a.current').prev().addClass('prev');
                table.find('a.current').next().addClass('next');
            });
        }, 300);
    }), _defineProperty(_elements, 'searchLogs', function searchLogs() {
        var parent = $('.card--logs');

        function searchLogsAll() {
            var minlen = 2;
            var keyint = 350;
            var term = '';
            var time_keyup = 0;
            var time_search = 0;

            function dosearch() {
                term = parent.find('.mdl-textfield__input').val();
                parent.find('.timeline').addClass('search-logs--in-progress');
                $('.timeline__entry').removeClass('search-logs--this-line');
                $('span.logs-search').each(function () {
                    //delete old marked
                    $(this).after($(this).html()).remove();
                });
                var t = '';
                $('.timeline__padding > div').each(function () {
                    //  magic THIS
                    // console.log($(this).html())
                    var thisLine = $(this).html().replace(new RegExp(term, 'ig'), '<span class="logs-search">$&</span>');
                    // console.log(thisLine)
                    $(this).html(thisLine);
                });
                $('span.logs-search').closest('.timeline__entry').addClass('search-logs--this-line');
                $('.timeline').adjustCardHeight();
            }

            parent.find('.mdl-textfield__input').keyup(function () {
                var d1 = new Date();
                time_keyup = d1.getTime();
                if (parent.find('.mdl-textfield__input').val() !== term) {
                    // check if line is change
                    if (parent.find('.mdl-textfield__input').val().length >= minlen) {
                        // check size line
                        setTimeout(function () {
                            // wait next tick
                            var d2 = new Date();
                            time_search = d2.getTime();
                            if (time_search - time_keyup >= keyint // check the interval between clicks
                            ) dosearch(); // if all ok
                        }, keyint);
                    } else {
                        // else input line is empty
                        parent.find('.timeline').removeClass('search-logs--in-progress');
                        $('span.logs-search').each(function () {
                            // delete old marked
                            $(this).after($(this).html()).remove();
                        });
                        $('.timeline__entry').removeClass('search-logs--this-line');
                        $('.timeline').adjustCardHeight();
                    }
                    AntaresForms.elements.logsCorrectTimelineBorder();
                }
            });
        }

        searchLogsAll();

        $('select.card-ctrls--select2').select2().on('select2:select select2:unselect', function () {
            var dataTypeLogs = $(this).select2('val');
            parent.find('.timeline').addClass('select-logs--in-progress');
            for (var i = 0; i < parent.find('.timeline__padding > div').length; i++) {
                if ($(parent.find('.timeline__indicator')[i]).attr('data-logs-type') === dataTypeLogs) {
                    $(parent.find('.timeline__indicator')[i]).closest('.timeline__entry--ok,.timeline__entry').addClass('select-logs--this-line');
                }
            }
            if (dataTypeLogs === 'All') {
                setTimeout(function () {
                    $('.current10').click();
                    $('.timeline__entry').removeClass('select-logs--this-line');
                    parent.find('.timeline').removeClass('select-logs--in-progress');
                });
            }
            $('.search-box').adjustCardHeight();
            AntaresForms.elements.logsCorrectTimelineBorder();
        });
    }), _defineProperty(_elements, 'disabledDashboardChartCompareMode', function disabledDashboardChartCompareMode() {
        enquire.register('screen and (max-width: 1199px)', {
            unmatch: function unmatch() {
                $('.compare-mode--checkbox').iCheck('uncheck');
            }
        });
        enquire.register('screen and (min-width: 1200px)', {
            unmatch: function unmatch() {
                $('.compare-mode--checkbox').iCheck('uncheck');
            }
        });
    }), _defineProperty(_elements, 'stopScroll', function stopScroll() {
        function hoverStopScroll(selector) {
            $(selector).mouseenter(function () {
                $('.app-content').perfectScrollbar('destroy');
            }).mouseleave(function () {
                $('.app-content').perfectScrollbar();
            });
        }

        enquire.register('screen and (min-width: 1200px)', {
            match: function match() {
                hoverStopScroll('.ui-spinner');
            }
        });
    }), _defineProperty(_elements, 'updateHeightChartJS', function updateHeightChartJS() {
        function updateHeight(device) {
            setTimeout(function () {
                $('.card--chart').each(function () {
                    var target = void 0;
                    if (device === 'mob') {
                        target = $(this).find('.card__left');
                    } else if (device === 'desc') {
                        target = $(this);
                    }
                    var thisHeightChart = target.height() - 60;
                    $(this).find('.chart').css('height', thisHeightChart);
                });
            }, 200);
        }

        enquire.register('screen and (max-width: 1449px)', {
            match: function match() {
                updateHeight('mob');
                $(window).resize(_.debounce(function () {
                    updateHeight('mob');
                }, 300));
            },
            unmatch: function unmatch() {
                updateHeight('desc');
                $(window).resize(_.debounce(function () {
                    updateHeight('desc');
                }, 300));
            }
        });

        enquire.register('screen and (min-width: 1450px)', {
            match: function match() {
                updateHeight('desc');
                function updateHeightCharts(containerTarget) {
                    if (containerTarget === undefined) {
                        return false;
                    }
                    var thisHeightChart = containerTarget.find('.card--chart').height() - 60;

                    containerTarget.find('.chart').css('height', thisHeightChart);
                }

                var container;
                $('.ui-resizable-handle').mousedown(function () {
                    container = $(this).closest('.grid-stack-item');
                });
                $('.grid-stack').on('change.gridHEightCharts', function (event, ui) {
                    updateHeightCharts(container);
                });
            },
            unmatch: function unmatch() {
                $('.grid-stack').off('change.gridHEightCharts');
            }
        });
    }), _defineProperty(_elements, 'menuAsideCategoryActiveScroll', function menuAsideCategoryActiveScroll() {
        if ($('.menu-aside-container[data-disable-scroll]').length) {
            return;
        }

        var coef = 0;
        var lastScrollTop = 0;
        var el = $('.menu-aside-container');

        function updateMenuAsideActive() {
            var scrollOnPage = $('.app-content')[0].scrollTop;
            var toTop = $('.main-head').outerHeight(),
                isPositionFixed = el.css('position') === 'fixed';
            if (scrollOnPage > toTop && !isPositionFixed) {
                el.addClass('menu-aside-container--fixed');
            }
            if (scrollOnPage < toTop && isPositionFixed) {
                el.removeClass('menu-aside-container--fixed');
            }
            var allFormsA = $('section.generals-form a[name]');
            if (scrollOnPage > $('.app-content')[0].scrollHeight - $(document).height() - 400) {
                if (scrollOnPage > lastScrollTop) {
                    coef += $(document).height() / 5;
                    if (coef > $(document).height()) {
                        coef = $(document).height();
                    }
                } else {
                    coef -= $(document).height() / 5;
                    if (coef <= 0) {
                        coef = 0;
                    }
                }
                if (scrollOnPage !== $('.app-content')[0].scrollHeight - $(document).height()) {
                    lastScrollTop = scrollOnPage;
                }
            } else if (scrollOnPage <= $('.app-content')[0].scrollHeight - $(document).height() - 400) {
                coef = 0;
            }
            for (var i = 0; i < allFormsA.length; i++) {
                var thisA = allFormsA[i];
                var menuAside = $('.menu-aside');

                if (scrollOnPage > $(thisA).position().top - coef) {
                    for (var _i = 0; _i < menuAside.find('a[href]').length; _i++) {
                        if ($(menuAside.find('a[href]')[_i]).attr('href').slice(1) === $(thisA).attr('name')) {
                            menuAside.find('li').removeClass('is-active');
                            $(menuAside.find('li')[_i]).addClass('is-active');
                            $(menuAside.find('li')[_i]).parent('.menu-aside__submenu').closest('li').addClass('is-active');
                        }
                    }
                }
            }
        }

        $('.app-content').on('ps-scroll-y', function () {
            window.requestAnimationFrame(function () {
                updateMenuAsideActive();
            });
        });
        $('.grid-container.grid-container--2col .grid-col--menu .menu-aside:not(.menu-aside--links) li:not(.has-submenu) a').on('click touchstart', function (e) {
            el.addClass('menu-aside-container--fixed');
            el.find('li').removeClass('is-active');
            $(this).closest('li').addClass('is-active');
        });
    }), _defineProperty(_elements, 'logsCorrectTimelineBorder', function logsCorrectTimelineBorder() {
        $('.card--logs .timeline > li:visible:last').addClass('is-logs--show');
    }), _defineProperty(_elements, 'cardChartHeaderTruncate', function cardChartHeaderTruncate() {
        $('.card--chart .card__header').each(function () {
            var self = $(this);

            function giveTruncate() {
                var widthHeader = self.width();
                var thisNameSpan = self.find('.card__header-left span');
                var widthCardName = self.find('.card__header-left span').width();
                var widthDatePickerButton = self.find('.card__header-right > form').width();
                var widthForNameCard = widthHeader - widthDatePickerButton;
                if (widthForNameCard - 15 < widthCardName) {
                    var thisSpanText = thisNameSpan.text();
                    thisNameSpan.attr('data-tooltip-inline', thisSpanText);

                    $(document).on('mouseover', thisNameSpan, function (event) {
                        // Element already has a qTip? Return.
                        if ($(this).qtip('api')) {
                            return;
                        }
                        thisNameSpan.qtip({
                            style: {
                                classes: 'ar',
                                tip: {
                                    width: 9,
                                    height: 5
                                }
                            },
                            position: {
                                viewport: $(window),
                                adjust: {
                                    method: 'shift'
                                }
                            },
                            content: {
                                attr: 'data-tooltip-inline'
                            },
                            show: {
                                effect: function effect() {
                                    $(this).fadeIn(300); // "this" refers to the tooltip
                                }
                            },
                            hide: {
                                effect: function effect() {
                                    $(this).fadeOut(300); // "this" refers to the tooltipc1
                                }
                            },
                            events: {
                                show: function show(event, api) {
                                    var $el = $(api.elements.target[0]);
                                    $el.qtip('option', 'position.my', $el.data('tooltip-my-position') == undefined ? 'top center' : $el.data('tooltip-my-position'));
                                    $el.qtip('option', 'position.at', $el.data('tooltip-target-position') == undefined ? 'bottom center' : $el.data('tooltip-target-position'));

                                    // $(document).one("click", function() { $(".item-grp-single").qtip('hide'); });  issue #256
                                }
                            }
                        });
                        $(this).qtip('show');
                    });
                } else {
                    thisNameSpan.removeAttr('data-tooltip-inline');
                    thisNameSpan.qtip('destroy');
                }
            }

            $(window).resize(_.debounce(function () {
                giveTruncate();
            }, 300));
            $('.grid-stack').on('change.gridNameTruncate', function (event, ui) {
                giveTruncate();
            });
        });
    }), _defineProperty(_elements, 'checkIfNeedTruncateTooltip', function checkIfNeedTruncateTooltip() {
        $('.check-truncate-tooltip').each(function () {
            var $self = $(this);
            var thisSelfWidth = $self.width();
            var grandFatherWidth = $self.parent().parent().width();
            var positionLeft = $self.position().left;
            if (thisSelfWidth > grandFatherWidth && (positionLeft > 10 || grandFatherWidth - positionLeft > 10)) {
                var maxWidthForSelf = grandFatherWidth - positionLeft - 20;
                $self.attr('data-tooltip-inline', $self.text());
                $self.css('overflow', 'hidden').css('white-space', 'nowrap').css('text-overflow', 'ellipsis').css('max-width', maxWidthForSelf);
            }
        });
    }), _elements)
};

$(function () {
    window.AntaresForms = AntaresForms;
    AntaresForms.init();

    ready('select', function () {
        window.AntaresForms.elements.select();
    });
    ready('.dz-preview', function (element) {
        $(element).on('click', function () {
            $(this).closest('.dropzone').trigger('click');
        });
    });

    AntaresForms.elements.openSearchFilters();
    AntaresForms.elements.updateHeightChartJS();
});

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// https://github.com/flaviusmatis/simplePagination.js

(function ($) {

    var methods = {
        init: function init(options) {
            var o = $.extend({
                items: 1,
                itemsOnPage: 1,
                pages: 0,
                displayedPages: 5,
                edges: 2,
                currentPage: 0,
                useAnchors: true,
                hrefTextPrefix: '#page-',
                hrefTextSuffix: '',
                prevText: 'Prev',
                nextText: 'Next',
                ellipseText: '&hellip;',
                ellipsePageSet: true,
                cssStyle: 'light-theme',
                listStyle: '',
                labelMap: [],
                selectOnClick: true,
                nextAtFront: false,
                invertPageOrder: false,
                useStartEdge: true,
                useEndEdge: true,
                onPageClick: function onPageClick() {
                    // Callback triggered when a page is clicked
                    // Page number is given as an optional parameter
                },
                onInit: function onInit() {
                    // Callback triggered immediately after initialization
                }
            }, options || {});

            var self = this;

            o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
            if (o.currentPage) o.currentPage = o.currentPage - 1;else o.currentPage = !o.invertPageOrder ? 0 : o.pages - 1;
            o.halfDisplayed = o.displayedPages / 2;

            this.each(function () {
                self.addClass(o.cssStyle + ' simple-pagination').data('pagination', o);
                methods._draw.call(self);
            });

            o.onInit();

            return this;
        },

        selectPage: function selectPage(page) {
            methods._selectPage.call(this, page - 1);
            return this;
        },

        prevPage: function prevPage() {
            var o = this.data('pagination');
            if (!o.invertPageOrder) {
                if (o.currentPage > 0) {
                    methods._selectPage.call(this, o.currentPage - 1);
                }
            } else {
                if (o.currentPage < o.pages - 1) {
                    methods._selectPage.call(this, o.currentPage + 1);
                }
            }
            return this;
        },

        nextPage: function nextPage() {
            var o = this.data('pagination');
            if (!o.invertPageOrder) {
                if (o.currentPage < o.pages - 1) {
                    methods._selectPage.call(this, o.currentPage + 1);
                }
            } else {
                if (o.currentPage > 0) {
                    methods._selectPage.call(this, o.currentPage - 1);
                }
            }
            return this;
        },

        getPagesCount: function getPagesCount() {
            return this.data('pagination').pages;
        },

        setPagesCount: function setPagesCount(count) {
            this.data('pagination').pages = count;
        },

        getCurrentPage: function getCurrentPage() {
            return this.data('pagination').currentPage + 1;
        },

        destroy: function destroy() {
            this.empty();
            return this;
        },

        drawPage: function drawPage(page) {
            var o = this.data('pagination');
            o.currentPage = page - 1;
            this.data('pagination', o);
            methods._draw.call(this);
            return this;
        },

        redraw: function redraw() {
            methods._draw.call(this);
            return this;
        },

        disable: function disable() {
            var o = this.data('pagination');
            o.disabled = true;
            this.data('pagination', o);
            methods._draw.call(this);
            return this;
        },

        enable: function enable() {
            var o = this.data('pagination');
            o.disabled = false;
            this.data('pagination', o);
            methods._draw.call(this);
            return this;
        },

        updateItems: function updateItems(newItems) {
            var o = this.data('pagination');
            o.items = newItems;
            o.pages = methods._getPages(o);
            this.data('pagination', o);
            methods._draw.call(this);
        },

        updateItemsOnPage: function updateItemsOnPage(itemsOnPage) {
            var o = this.data('pagination');
            o.itemsOnPage = itemsOnPage;
            o.pages = methods._getPages(o);
            this.data('pagination', o);
            methods._selectPage.call(this, 0);
            return this;
        },

        getItemsOnPage: function getItemsOnPage() {
            return this.data('pagination').itemsOnPage;
        },

        _draw: function _draw() {
            var o = this.data('pagination'),
                interval = methods._getInterval(o),
                i,
                tagName;

            methods.destroy.call(this);

            tagName = typeof this.prop === 'function' ? this.prop('tagName') : this.attr('tagName');

            var $panel = tagName === 'UL' ? this : $('<ul' + (o.listStyle ? ' class="' + o.listStyle + '"' : '') + '></ul>').appendTo(this);

            // Generate Prev link
            if (o.prevText) {
                methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, { text: o.prevText, classes: 'prev' });
            }

            // Generate Next link (if option set for at front)
            if (o.nextText && o.nextAtFront) {
                methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, { text: o.nextText, classes: 'next' });
            }

            // Generate start edges
            if (!o.invertPageOrder) {
                if (interval.start > 0 && o.edges > 0) {
                    if (o.useStartEdge) {
                        var end = Math.min(o.edges, interval.start);
                        for (i = 0; i < end; i++) {
                            methods._appendItem.call(this, i);
                        }
                    }
                    if (o.edges < interval.start && interval.start - o.edges != 1) {
                        $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                    } else if (interval.start - o.edges == 1) {
                        methods._appendItem.call(this, o.edges);
                    }
                }
            } else {
                if (interval.end < o.pages && o.edges > 0) {
                    if (o.useStartEdge) {
                        var begin = Math.max(o.pages - o.edges, interval.end);
                        for (i = o.pages - 1; i >= begin; i--) {
                            methods._appendItem.call(this, i);
                        }
                    }

                    if (o.pages - o.edges > interval.end && o.pages - o.edges - interval.end != 1) {
                        $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                    } else if (o.pages - o.edges - interval.end == 1) {
                        methods._appendItem.call(this, interval.end);
                    }
                }
            }

            // Generate interval links
            if (!o.invertPageOrder) {
                for (i = interval.start; i < interval.end; i++) {
                    methods._appendItem.call(this, i);
                }
            } else {
                for (i = interval.end - 1; i >= interval.start; i--) {
                    methods._appendItem.call(this, i);
                }
            }

            // Generate end edges
            if (!o.invertPageOrder) {
                if (interval.end < o.pages && o.edges > 0) {
                    if (o.pages - o.edges > interval.end && o.pages - o.edges - interval.end != 1) {
                        $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                    } else if (o.pages - o.edges - interval.end == 1) {
                        methods._appendItem.call(this, interval.end);
                    }
                    if (o.useEndEdge) {
                        var begin = Math.max(o.pages - o.edges, interval.end);
                        for (i = begin; i < o.pages; i++) {
                            methods._appendItem.call(this, i);
                        }
                    }
                }
            } else {
                if (interval.start > 0 && o.edges > 0) {
                    if (o.edges < interval.start && interval.start - o.edges != 1) {
                        $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                    } else if (interval.start - o.edges == 1) {
                        methods._appendItem.call(this, o.edges);
                    }

                    if (o.useEndEdge) {
                        var end = Math.min(o.edges, interval.start);
                        for (i = end - 1; i >= 0; i--) {
                            methods._appendItem.call(this, i);
                        }
                    }
                }
            }

            // Generate Next link (unless option is set for at front)
            if (o.nextText && !o.nextAtFront) {
                methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, { text: o.nextText, classes: 'next' });
            }

            if (o.ellipsePageSet && !o.disabled) {
                methods._ellipseClick.call(this, $panel);
            }
        },

        _getPages: function _getPages(o) {
            var pages = Math.ceil(o.items / o.itemsOnPage);
            return pages || 1;
        },

        _getInterval: function _getInterval(o) {
            return {
                start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, o.pages - o.displayedPages), 0) : 0),
                end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
            };
        },

        _appendItem: function _appendItem(pageIndex, opts) {
            var self = this,
                options,
                $link,
                o = self.data('pagination'),
                $linkWrapper = $('<li></li>'),
                $ul = self.find('ul');

            pageIndex = pageIndex < 0 ? 0 : pageIndex < o.pages ? pageIndex : o.pages - 1;

            options = {
                text: pageIndex + 1,
                classes: ''
            };

            if (o.labelMap.length && o.labelMap[pageIndex]) {
                options.text = o.labelMap[pageIndex];
            }

            options = $.extend(options, opts || {});

            if (pageIndex == o.currentPage || o.disabled) {
                if (o.disabled || options.classes === 'prev' || options.classes === 'next') {
                    $linkWrapper.addClass('disabled');
                } else {
                    $linkWrapper.addClass('active');
                }
                $link = $('<span class="current  mdl-js-button mdl-js-ripple-effect">' + options.text + '</span>'); // changed for #114. add class ripple
            } else {
                if (o.useAnchors) {
                    $link = $('<a  class="page-link mdl-js-button mdl-js-ripple-effect">' + options.text + '</a>'); // changed for #114. add class ripple. Delete <<< href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" >>>
                } else {
                    $link = $('<span >' + options.text + '</span>');
                }
                $link.click(function (event) {
                    return methods._selectPage.call(self, pageIndex, event);
                });
            }

            if (options.classes) {
                $link.addClass(options.classes);
            }

            $linkWrapper.append($link);

            if ($ul.length) {
                $ul.append($linkWrapper);
            } else {
                self.append($linkWrapper);
            }
        },

        _selectPage: function _selectPage(pageIndex, event) {
            var o = this.data('pagination');
            o.currentPage = pageIndex;
            if (o.selectOnClick) {
                methods._draw.call(this);
            }
            return o.onPageClick(pageIndex + 1, event);
        },

        _ellipseClick: function _ellipseClick($panel) {
            var self = this,
                o = this.data('pagination'),
                $ellip = $panel.find('.ellipse');
            $ellip.addClass('clickable').parent().removeClass('disabled');
            $ellip.click(function (event) {
                if (!o.disable) {
                    var $this = $(this),
                        val = (parseInt($this.parent().prev().text(), 10) || 0) + 1;
                    $this.html('<input type="number" min="1" max="' + o.pages + '" step="1" value="' + val + '">').find('input').focus().click(function (event) {
                        // prevent input number arrows from bubbling a click event on $ellip
                        event.stopPropagation();
                    }).keyup(function (event) {
                        var val = $(this).val();
                        if (event.which === 13 && val !== '') {
                            // enter to accept
                            if (val > 0 && val <= o.pages) methods._selectPage.call(self, val - 1);
                        } else if (event.which === 27) {
                            // escape to cancel
                            $ellip.empty().html(o.ellipseText);
                        }
                    }).bind('blur', function (event) {
                        var val = $(this).val();
                        if (val !== '') {
                            methods._selectPage.call(self, val - 1);
                        }
                        $ellip.empty().html(o.ellipseText);
                        return false;
                    });
                }
                return false;
            });
        }

    };

    $.fn.pagination = function (method) {

        // Method calling logic
        if (methods[method] && method.charAt(0) != '_') {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.pagination');
        }
    };
})(jQuery);

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// magnific
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) {
    if (true) {
        // AMD. Register as an anonymous module. 
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        // Node/CommonJS 
        factory(require('jquery'));
    } else {
        // Browser globals 
        factory(window.jQuery || window.Zepto);
    }
})(function ($) {

    /*>>core*/
    /**
     * 
     * Magnific Popup Core JS file
     * 
     */

    /**
     * Private static constants
     */
    var CLOSE_EVENT = 'Close',
        BEFORE_CLOSE_EVENT = 'BeforeClose',
        AFTER_CLOSE_EVENT = 'AfterClose',
        BEFORE_APPEND_EVENT = 'BeforeAppend',
        MARKUP_PARSE_EVENT = 'MarkupParse',
        OPEN_EVENT = 'Open',
        CHANGE_EVENT = 'Change',
        NS = 'mfp',
        EVENT_NS = '.' + NS,
        READY_CLASS = 'mfp-ready',
        REMOVING_CLASS = 'mfp-removing',
        PREVENT_CLOSE_CLASS = 'mfp-prevent-close';

    /**
     * Private vars 
     */
    /*jshint -W079 */
    var mfp,
        // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
    MagnificPopup = function MagnificPopup() {},
        _isJQ = !!window.jQuery,
        _prevStatus,
        _window = $(window),
        _document,
        _prevContentType,
        _wrapClasses,
        _currPopupType;

    /**
     * Private functions
     */
    var _mfpOn = function _mfpOn(name, f) {
        mfp.ev.on(NS + name + EVENT_NS, f);
    },
        _getEl = function _getEl(className, appendTo, html, raw) {
        var el = document.createElement('div');
        el.className = 'mfp-' + className;
        if (html) {
            el.innerHTML = html;
        }
        if (!raw) {
            el = $(el);
            if (appendTo) {
                el.appendTo(appendTo);
            }
        } else if (appendTo) {
            appendTo.appendChild(el);
        }
        return el;
    },
        _mfpTrigger = function _mfpTrigger(e, data) {
        mfp.ev.triggerHandler(NS + e, data);

        if (mfp.st.callbacks) {
            // converts "mfpEventName" to "eventName" callback and triggers it if it's present
            e = e.charAt(0).toLowerCase() + e.slice(1);
            if (mfp.st.callbacks[e]) {
                mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
            }
        }
    },
        _getCloseBtn = function _getCloseBtn(type) {
        if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
            mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
            _currPopupType = type;
        }
        return mfp.currTemplate.closeBtn;
    },

    // Initialize Magnific Popup only when called at least once
    _checkInstance = function _checkInstance() {
        if (!$.magnificPopup.instance) {
            /*jshint -W020 */
            mfp = new MagnificPopup();
            mfp.init();
            $.magnificPopup.instance = mfp;
        }
    },

    // CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
    supportsTransitions = function supportsTransitions() {
        var s = document.createElement('p').style,
            // 's' for style. better to create an element if body yet to exist
        v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

        if (s['transition'] !== undefined) {
            return true;
        }

        while (v.length) {
            if (v.pop() + 'Transition' in s) {
                return true;
            }
        }

        return false;
    };

    /**
     * Public functions
     */
    MagnificPopup.prototype = {

        constructor: MagnificPopup,

        /**
         * Initializes Magnific Popup plugin. 
         * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
         */
        init: function init() {
            var appVersion = navigator.appVersion;
            mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
            mfp.isAndroid = /android/gi.test(appVersion);
            mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
            mfp.supportsTransition = supportsTransitions();

            // We disable fixed positioned lightbox on devices that don't handle it nicely.
            // If you know a better way of detecting this - let me know.
            mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            _document = $(document);

            mfp.popupsCache = {};
        },

        /**
         * Opens popup
         * @param  data [description]
         */
        open: function open(data) {

            var i;

            if (data.isObj === false) {
                // convert jQuery collection to array to avoid conflicts later
                mfp.items = data.items.toArray();

                mfp.index = 0;
                var items = data.items,
                    item;
                for (i = 0; i < items.length; i++) {
                    item = items[i];
                    if (item.parsed) {
                        item = item.el[0];
                    }
                    if (item === data.el[0]) {
                        mfp.index = i;
                        break;
                    }
                }
            } else {
                mfp.items = $.isArray(data.items) ? data.items : [data.items];
                mfp.index = data.index || 0;
            }

            // if popup is already opened - we just update the content
            if (mfp.isOpen) {
                mfp.updateItemHTML();
                return;
            }

            mfp.types = [];
            _wrapClasses = '';
            if (data.mainEl && data.mainEl.length) {
                mfp.ev = data.mainEl.eq(0);
            } else {
                mfp.ev = _document;
            }

            if (data.key) {
                if (!mfp.popupsCache[data.key]) {
                    mfp.popupsCache[data.key] = {};
                }
                mfp.currTemplate = mfp.popupsCache[data.key];
            } else {
                mfp.currTemplate = {};
            }

            mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
            mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

            if (mfp.st.modal) {
                mfp.st.closeOnContentClick = false;
                mfp.st.closeOnBgClick = false;
                mfp.st.showCloseBtn = false;
                mfp.st.enableEscapeKey = false;
            }

            // Building markup
            // main containers are created only once
            if (!mfp.bgOverlay) {

                // Dark overlay
                mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function () {
                    mfp.close();
                });

                mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function (e) {
                    if (mfp._checkIfClose(e.target)) {
                        mfp.close();
                    }
                });

                mfp.container = _getEl('container', mfp.wrap);
            }

            mfp.contentContainer = _getEl('content');
            if (mfp.st.preloader) {
                mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
            }

            // Initializing modules
            var modules = $.magnificPopup.modules;
            for (i = 0; i < modules.length; i++) {
                var n = modules[i];
                n = n.charAt(0).toUpperCase() + n.slice(1);
                mfp['init' + n].call(mfp);
            }
            _mfpTrigger('BeforeOpen');

            if (mfp.st.showCloseBtn) {
                // Close button
                if (!mfp.st.closeBtnInside) {
                    mfp.wrap.append(_getCloseBtn());
                } else {
                    _mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
                        values.close_replaceWith = _getCloseBtn(item.type);
                    });
                    _wrapClasses += ' mfp-close-btn-in';
                }
            }

            if (mfp.st.alignTop) {
                _wrapClasses += ' mfp-align-top';
            }

            if (mfp.fixedContentPos) {
                mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: 'hidden',
                    overflowY: mfp.st.overflowY
                });
            } else {
                mfp.wrap.css({
                    top: _window.scrollTop(),
                    position: 'absolute'
                });
            }
            if (mfp.st.fixedBgPos === false || mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) {
                mfp.bgOverlay.css({
                    height: _document.height(),
                    position: 'absolute'
                });
            }

            if (mfp.st.enableEscapeKey) {
                // Close on ESC key
                _document.on('keyup' + EVENT_NS, function (e) {
                    if (e.keyCode === 27) {
                        mfp.close();
                    }
                });
            }

            _window.on('resize' + EVENT_NS, function () {
                mfp.updateSize();
            });

            if (!mfp.st.closeOnContentClick) {
                _wrapClasses += ' mfp-auto-cursor';
            }

            if (_wrapClasses) mfp.wrap.addClass(_wrapClasses);

            // this triggers recalculation of layout, so we get it once to not to trigger twice
            var windowHeight = mfp.wH = _window.height();

            var windowStyles = {};

            if (mfp.fixedContentPos) {
                if (mfp._hasScrollBar(windowHeight)) {
                    var s = mfp._getScrollbarSize();
                    if (s) {
                        windowStyles.marginRight = s;
                    }
                }
            }

            if (mfp.fixedContentPos) {
                if (!mfp.isIE7) {
                    windowStyles.overflow = 'hidden';
                } else {
                    // ie7 double-scroll bug
                    $('body, html').css('overflow', 'hidden');
                }
            }

            var classesToadd = mfp.st.mainClass;
            if (mfp.isIE7) {
                classesToadd += ' mfp-ie7';
            }
            if (classesToadd) {
                mfp._addClassToMFP(classesToadd);
            }

            // add content
            mfp.updateItemHTML();

            _mfpTrigger('BuildControls');

            // remove scrollbar, add margin e.t.c
            $('html').css(windowStyles);

            // add everything to DOM
            mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));

            // Save last focused element
            mfp._lastFocusedEl = document.activeElement;

            // Wait for next cycle to allow CSS transition
            setTimeout(function () {

                if (mfp.content) {
                    mfp._addClassToMFP(READY_CLASS);
                    mfp._setFocus();
                } else {
                    // if content is not defined (not loaded e.t.c) we add class only for BG
                    mfp.bgOverlay.addClass(READY_CLASS);
                }

                // Trap the focus in popup
                _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
            }, 16);

            mfp.isOpen = true;
            mfp.updateSize(windowHeight);
            _mfpTrigger(OPEN_EVENT);

            return data;
        },

        /**
         * Closes the popup
         */
        close: function close() {
            if (!mfp.isOpen) return;
            _mfpTrigger(BEFORE_CLOSE_EVENT);

            mfp.isOpen = false;
            // for CSS3 animation
            if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                mfp._addClassToMFP(REMOVING_CLASS);
                setTimeout(function () {
                    mfp._close();
                }, mfp.st.removalDelay);
            } else {
                mfp._close();
            }
        },

        /**
         * Helper for close() function
         */
        _close: function _close() {
            _mfpTrigger(CLOSE_EVENT);

            var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

            mfp.bgOverlay.detach();
            mfp.wrap.detach();
            mfp.container.empty();

            if (mfp.st.mainClass) {
                classesToRemove += mfp.st.mainClass + ' ';
            }

            mfp._removeClassFromMFP(classesToRemove);

            if (mfp.fixedContentPos) {
                var windowStyles = { marginRight: '' };
                if (mfp.isIE7) {
                    $('body, html').css('overflow', '');
                } else {
                    windowStyles.overflow = '';
                }
                $('html').css(windowStyles);
            }

            _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
            mfp.ev.off(EVENT_NS);

            // clean up DOM elements that aren't removed
            mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
            mfp.bgOverlay.attr('class', 'mfp-bg');
            mfp.container.attr('class', 'mfp-container');

            // remove close button from target element
            if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
            }

            if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
                $(mfp._lastFocusedEl).focus(); // put tab focus back
            }
            mfp.currItem = null;
            mfp.content = null;
            mfp.currTemplate = null;
            mfp.prevHeight = 0;

            _mfpTrigger(AFTER_CLOSE_EVENT);
        },

        updateSize: function updateSize(winHeight) {

            if (mfp.isIOS) {
                // fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                var height = window.innerHeight * zoomLevel;
                mfp.wrap.css('height', height);
                mfp.wH = height;
            } else {
                mfp.wH = winHeight || _window.height();
            }
            // Fixes #84: popup incorrectly positioned with position:relative on body
            if (!mfp.fixedContentPos) {
                mfp.wrap.css('height', mfp.wH);
            }

            _mfpTrigger('Resize');
        },

        /**
         * Set content of popup based on current index
         */
        updateItemHTML: function updateItemHTML() {
            var item = mfp.items[mfp.index];

            // Detach and perform modifications
            mfp.contentContainer.detach();

            if (mfp.content) mfp.content.detach();

            if (!item.parsed) {
                item = mfp.parseEl(mfp.index);
            }

            var type = item.type;

            _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
            // BeforeChange event works like so:
            // _mfpOn('BeforeChange', function(e, prevType, newType) { });

            mfp.currItem = item;

            if (!mfp.currTemplate[type]) {
                var markup = mfp.st[type] ? mfp.st[type].markup : false;

                // allows to modify markup
                _mfpTrigger('FirstMarkupParse', markup);

                if (markup) {
                    mfp.currTemplate[type] = $(markup);
                } else {
                    // if there is no markup found we just define that template is parsed
                    mfp.currTemplate[type] = true;
                }
            }

            if (_prevContentType && _prevContentType !== item.type) {
                mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
            }

            var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type);

            item.preloaded = true;

            _mfpTrigger(CHANGE_EVENT, item);
            _prevContentType = item.type;

            // Append container back after its content changed
            mfp.container.prepend(mfp.contentContainer);

            _mfpTrigger('AfterChange');
        },

        /**
         * Set HTML content of popup
         */
        appendContent: function appendContent(newContent, type) {
            mfp.content = newContent;

            if (newContent) {
                if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
                    // if there is no markup, we just append close button element inside
                    if (!mfp.content.find('.mfp-close').length) {
                        mfp.content.append(_getCloseBtn());
                    }
                } else {
                    mfp.content = newContent;
                }
            } else {
                mfp.content = '';
            }

            _mfpTrigger(BEFORE_APPEND_EVENT);
            mfp.container.addClass('mfp-' + type + '-holder');

            mfp.contentContainer.append(mfp.content);
        },

        /**
         * Creates Magnific Popup data object based on given data
         * @param  {int} index Index of item to parse
         */
        parseEl: function parseEl(index) {
            var item = mfp.items[index],
                type;

            if (item.tagName) {
                item = { el: $(item) };
            } else {
                type = item.type;
                item = { data: item, src: item.src };
            }

            if (item.el) {
                var types = mfp.types;

                // check for 'mfp-TYPE' class
                for (var i = 0; i < types.length; i++) {
                    if (item.el.hasClass('mfp-' + types[i])) {
                        type = types[i];
                        break;
                    }
                }

                item.src = item.el.attr('data-mfp-src');
                if (!item.src) {
                    item.src = item.el.attr('href');
                }
            }

            item.type = type || mfp.st.type || 'inline';
            item.index = index;
            item.parsed = true;
            mfp.items[index] = item;
            _mfpTrigger('ElementParse', item);

            return mfp.items[index];
        },

        /**
         * Initializes single popup or a group of popups
         */
        addGroup: function addGroup(el, options) {
            var eHandler = function eHandler(e) {
                e.mfpEl = this;
                mfp._openClick(e, el, options);
            };

            if (!options) {
                options = {};
            }

            var eName = 'click.magnificPopup';
            options.mainEl = el;

            if (options.items) {
                options.isObj = true;
                el.off(eName).on(eName, eHandler);
            } else {
                options.isObj = false;
                if (options.delegate) {
                    el.off(eName).on(eName, options.delegate, eHandler);
                } else {
                    options.items = el;
                    el.off(eName).on(eName, eHandler);
                }
            }
        },
        _openClick: function _openClick(e, el, options) {
            var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;

            if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                return;
            }

            var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

            if (disableOn) {
                if ($.isFunction(disableOn)) {
                    if (!disableOn.call(mfp)) {
                        return true;
                    }
                } else {
                    // else it's number
                    if (_window.width() < disableOn) {
                        return true;
                    }
                }
            }

            if (e.type) {
                e.preventDefault();

                // This will prevent popup from closing if element is inside and popup is already opened
                if (mfp.isOpen) {
                    e.stopPropagation();
                }
            }

            options.el = $(e.mfpEl);
            if (options.delegate) {
                options.items = el.find(options.delegate);
            }
            mfp.open(options);
        },

        /**
         * Updates text on preloader
         */
        updateStatus: function updateStatus(status, text) {

            if (mfp.preloader) {
                if (_prevStatus !== status) {
                    mfp.container.removeClass('mfp-s-' + _prevStatus);
                }

                if (!text && status === 'loading') {
                    text = mfp.st.tLoading;
                }

                var data = {
                    status: status,
                    text: text
                };
                // allows to modify status
                _mfpTrigger('UpdateStatus', data);

                status = data.status;
                text = data.text;

                mfp.preloader.html(text);

                mfp.preloader.find('a').on('click', function (e) {
                    e.stopImmediatePropagation();
                });

                mfp.container.addClass('mfp-s-' + status);
                _prevStatus = status;
            }
        },

        /*
            "Private" helpers that aren't private at all
         */
        // Check to close popup or not
        // "target" is an element that was clicked
        _checkIfClose: function _checkIfClose(target) {

            if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
                return;
            }

            var closeOnContent = mfp.st.closeOnContentClick;
            var closeOnBg = mfp.st.closeOnBgClick;

            if (closeOnContent && closeOnBg) {
                return true;
            } else {

                // We close the popup if click is on close button or on preloader. Or if there is no content.
                if (!mfp.content || $(target).hasClass('mfp-close') || mfp.preloader && target === mfp.preloader[0]) {
                    return true;
                }

                // if click is outside the content
                if (target !== mfp.content[0] && !$.contains(mfp.content[0], target)) {
                    if (closeOnBg) {
                        // last check, if the clicked element is in DOM, (in case it's removed onclick)
                        if ($.contains(document, target)) {
                            return true;
                        }
                    }
                } else if (closeOnContent) {
                    return true;
                }
            }
            return false;
        },
        _addClassToMFP: function _addClassToMFP(cName) {
            mfp.bgOverlay.addClass(cName);
            mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function _removeClassFromMFP(cName) {
            this.bgOverlay.removeClass(cName);
            mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function _hasScrollBar(winHeight) {
            return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height());
        },
        _setFocus: function _setFocus() {
            (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
        },
        _onFocusIn: function _onFocusIn(e) {
            if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
                mfp._setFocus();
                return false;
            }
        },
        _parseMarkup: function _parseMarkup(template, values, item) {
            var arr;
            if (item.data) {
                values = $.extend(item.data, values);
            }
            _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

            $.each(values, function (key, value) {
                if (value === undefined || value === false) {
                    return true;
                }
                arr = key.split('_');
                if (arr.length > 1) {
                    var el = template.find(EVENT_NS + '-' + arr[0]);

                    if (el.length > 0) {
                        var attr = arr[1];
                        if (attr === 'replaceWith') {
                            if (el[0] !== value[0]) {
                                el.replaceWith(value);
                            }
                        } else if (attr === 'img') {
                            if (el.is('img')) {
                                el.attr('src', value);
                            } else {
                                el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
                            }
                        } else {
                            el.attr(arr[1], value);
                        }
                    }
                } else {
                    template.find(EVENT_NS + '-' + key).html(value);
                }
            });
        },

        _getScrollbarSize: function _getScrollbarSize() {
            // thx David
            if (mfp.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }

    }; /* MagnificPopup core prototype end */

    /**
     * Public static functions
     */
    $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],

        open: function open(options, index) {
            _checkInstance();

            if (!options) {
                options = {};
            } else {
                options = $.extend(true, {}, options);
            }

            options.isObj = true;
            options.index = index || 0;
            return this.instance.open(options);
        },

        close: function close() {
            return $.magnificPopup.instance && $.magnificPopup.instance.close();
        },

        registerModule: function registerModule(name, module) {
            if (module.options) {
                $.magnificPopup.defaults[name] = module.options;
            }
            $.extend(this.proto, module.proto);
            this.modules.push(name);
        },

        defaults: {

            // Info about options is in docs:
            // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

            disableOn: 0,

            key: null,

            midClick: false,

            mainClass: '',

            preloader: true,

            focus: '', // CSS selector of input to focus after popup is opened

            closeOnContentClick: false,

            closeOnBgClick: true,

            closeBtnInside: true,

            showCloseBtn: true,

            enableEscapeKey: true,

            modal: false,

            alignTop: false,

            removalDelay: 0,

            prependTo: null,

            fixedContentPos: 'auto',

            fixedBgPos: 'auto',

            overflowY: 'auto',

            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

            tClose: 'Close (Esc)',

            tLoading: 'Loading...',

            autoFocusLast: true

        }
    };

    $.fn.magnificPopup = function (options) {
        _checkInstance();

        var jqEl = $(this);

        // We call some API method of first param is a string
        if (typeof options === "string") {

            if (options === 'open') {
                var items,
                    itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
                    index = parseInt(arguments[1], 10) || 0;

                if (itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if (itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq(index);
                }
                mfp._openClick({ mfpEl: items }, jqEl, itemOpts);
            } else {
                if (mfp.isOpen) mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }
        } else {
            // clone options obj
            options = $.extend(true, {}, options);

            /*
             * As Zepto doesn't support .data() method for objects
             * and it works only in normal browsers
             * we assign "options" object directly to the DOM element. FTW!
             */
            if (_isJQ) {
                jqEl.data('magnificPopup', options);
            } else {
                jqEl[0].magnificPopup = options;
            }

            mfp.addGroup(jqEl, options);
        }
        return jqEl;
    };

    /*>>core*/

    /*>>inline*/

    var INLINE_NS = 'inline',
        _hiddenClass,
        _inlinePlaceholder,
        _lastInlineElement,
        _putInlineElementsBack = function _putInlineElementsBack() {
        if (_lastInlineElement) {
            _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
            _lastInlineElement = null;
        }
    };

    $.magnificPopup.registerModule(INLINE_NS, {
        options: {
            hiddenClass: 'hide', // will be appended with `mfp-` prefix
            markup: '',
            tNotFound: 'Content not found'
        },
        proto: {

            initInline: function initInline() {
                mfp.types.push(INLINE_NS);

                _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function () {
                    _putInlineElementsBack();
                });
            },

            getInline: function getInline(item, template) {

                _putInlineElementsBack();

                if (item.src) {
                    var inlineSt = mfp.st.inline,
                        el = $(item.src);

                    if (el.length) {

                        // If target element has parent - we replace it with placeholder and put it back after popup is closed
                        var parent = el[0].parentNode;
                        if (parent && parent.tagName) {
                            if (!_inlinePlaceholder) {
                                _hiddenClass = inlineSt.hiddenClass;
                                _inlinePlaceholder = _getEl(_hiddenClass);
                                _hiddenClass = 'mfp-' + _hiddenClass;
                            }
                            // replace target inline element with placeholder
                            _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }

                        mfp.updateStatus('ready');
                    } else {
                        mfp.updateStatus('error', inlineSt.tNotFound);
                        el = $('<div>');
                    }

                    item.inlineElement = el;
                    return el;
                }

                mfp.updateStatus('ready');
                mfp._parseMarkup(template, {}, item);
                return template;
            }
        }
    });

    /*>>inline*/

    /*>>ajax*/
    var AJAX_NS = 'ajax',
        _ajaxCur,
        _removeAjaxCursor = function _removeAjaxCursor() {
        if (_ajaxCur) {
            $(document.body).removeClass(_ajaxCur);
        }
    },
        _destroyAjaxRequest = function _destroyAjaxRequest() {
        _removeAjaxCursor();
        if (mfp.req) {
            mfp.req.abort();
        }
    };

    $.magnificPopup.registerModule(AJAX_NS, {

        options: {
            settings: null,
            cursor: 'mfp-ajax-cur',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },

        proto: {
            initAjax: function initAjax() {
                mfp.types.push(AJAX_NS);
                _ajaxCur = mfp.st.ajax.cursor;

                _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
                _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
            },
            getAjax: function getAjax(item) {

                if (_ajaxCur) {
                    $(document.body).addClass(_ajaxCur);
                }

                mfp.updateStatus('loading');

                var opts = $.extend({
                    url: item.src,
                    success: function success(data, textStatus, jqXHR) {
                        var temp = {
                            data: data,
                            xhr: jqXHR
                        };

                        _mfpTrigger('ParseAjax', temp);

                        mfp.appendContent($(temp.data), AJAX_NS);

                        item.finished = true;

                        _removeAjaxCursor();

                        mfp._setFocus();

                        setTimeout(function () {
                            mfp.wrap.addClass(READY_CLASS);
                        }, 16);

                        mfp.updateStatus('ready');

                        _mfpTrigger('AjaxContentAdded');
                    },
                    error: function error() {
                        _removeAjaxCursor();
                        item.finished = item.loadError = true;
                        mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                    }
                }, mfp.st.ajax.settings);

                mfp.req = $.ajax(opts);

                return '';
            }
        }
    });

    /*>>ajax*/

    /*>>image*/
    var _imgInterval,
        _getTitle = function _getTitle(item) {
        if (item.data && item.data.title !== undefined) return item.data.title;

        var src = mfp.st.image.titleSrc;

        if (src) {
            if ($.isFunction(src)) {
                return src.call(mfp, item);
            } else if (item.el) {
                return item.el.attr(src) || '';
            }
        }
        return '';
    };

    $.magnificPopup.registerModule('image', {

        options: {
            markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
            cursor: 'mfp-zoom-out-cur',
            titleSrc: 'title',
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },

        proto: {
            initImage: function initImage() {
                var imgSt = mfp.st.image,
                    ns = '.image';

                mfp.types.push('image');

                _mfpOn(OPEN_EVENT + ns, function () {
                    if (mfp.currItem.type === 'image' && imgSt.cursor) {
                        $(document.body).addClass(imgSt.cursor);
                    }
                });

                _mfpOn(CLOSE_EVENT + ns, function () {
                    if (imgSt.cursor) {
                        $(document.body).removeClass(imgSt.cursor);
                    }
                    _window.off('resize' + EVENT_NS);
                });

                _mfpOn('Resize' + ns, mfp.resizeImage);
                if (mfp.isLowIE) {
                    _mfpOn('AfterChange', mfp.resizeImage);
                }
            },
            resizeImage: function resizeImage() {
                var item = mfp.currItem;
                if (!item || !item.img) return;

                if (mfp.st.image.verticalFit) {
                    var decr = 0;
                    // fix box-sizing in ie7/8
                    if (mfp.isLowIE) {
                        decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
                    }
                    item.img.css('max-height', mfp.wH - decr);
                }
            },
            _onImageHasSize: function _onImageHasSize(item) {
                if (item.img) {

                    item.hasSize = true;

                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }

                    item.isCheckingImgSize = false;

                    _mfpTrigger('ImageHasSize', item);

                    if (item.imgHidden) {
                        if (mfp.content) mfp.content.removeClass('mfp-loading');

                        item.imgHidden = false;
                    }
                }
            },

            /**
             * Function that loops until the image has size to display elements that rely on it asap
             */
            findImageSize: function findImageSize(item) {

                var counter = 0,
                    img = item.img[0],
                    mfpSetInterval = function mfpSetInterval(delay) {

                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    // decelerating interval that checks for size of an image
                    _imgInterval = setInterval(function () {
                        if (img.naturalWidth > 0) {
                            mfp._onImageHasSize(item);
                            return;
                        }

                        if (counter > 200) {
                            clearInterval(_imgInterval);
                        }

                        counter++;
                        if (counter === 3) {
                            mfpSetInterval(10);
                        } else if (counter === 40) {
                            mfpSetInterval(50);
                        } else if (counter === 100) {
                            mfpSetInterval(500);
                        }
                    }, delay);
                };

                mfpSetInterval(1);
            },

            getImage: function getImage(item, template) {

                var guard = 0,


                // image load complete handler
                onLoadComplete = function onLoadComplete() {
                    if (item) {
                        if (item.img[0].complete) {
                            item.img.off('.mfploader');

                            if (item === mfp.currItem) {
                                mfp._onImageHasSize(item);

                                mfp.updateStatus('ready');
                            }

                            item.hasSize = true;
                            item.loaded = true;

                            _mfpTrigger('ImageLoadComplete');
                        } else {
                            // if image complete check fails 200 times (20 sec), we assume that there was an error.
                            guard++;
                            if (guard < 200) {
                                setTimeout(onLoadComplete, 100);
                            } else {
                                onLoadError();
                            }
                        }
                    }
                },


                // image error handler
                onLoadError = function onLoadError() {
                    if (item) {
                        item.img.off('.mfploader');
                        if (item === mfp.currItem) {
                            mfp._onImageHasSize(item);
                            mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                        }

                        item.hasSize = true;
                        item.loaded = true;
                        item.loadError = true;
                    }
                },
                    imgSt = mfp.st.image;

                var el = template.find('.mfp-img');
                if (el.length) {
                    var img = document.createElement('img');
                    img.className = 'mfp-img';
                    if (item.el && item.el.find('img').length) {
                        img.alt = item.el.find('img').attr('alt');
                    }
                    item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
                    img.src = item.src;

                    // without clone() "error" event is not firing when IMG is replaced by new IMG
                    // TODO: find a way to avoid such cloning
                    if (el.is('img')) {
                        item.img = item.img.clone();
                    }

                    img = item.img[0];
                    if (img.naturalWidth > 0) {
                        item.hasSize = true;
                    } else if (!img.width) {
                        item.hasSize = false;
                    }
                }

                mfp._parseMarkup(template, {
                    title: _getTitle(item),
                    img_replaceWith: item.img
                }, item);

                mfp.resizeImage();

                if (item.hasSize) {
                    if (_imgInterval) clearInterval(_imgInterval);

                    if (item.loadError) {
                        template.addClass('mfp-loading');
                        mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                    } else {
                        template.removeClass('mfp-loading');
                        mfp.updateStatus('ready');
                    }
                    return template;
                }

                mfp.updateStatus('loading');
                item.loading = true;

                if (!item.hasSize) {
                    item.imgHidden = true;
                    template.addClass('mfp-loading');
                    mfp.findImageSize(item);
                }

                return template;
            }
        }
    });

    /*>>image*/

    /*>>zoom*/
    var hasMozTransform,
        getHasMozTransform = function getHasMozTransform() {
        if (hasMozTransform === undefined) {
            hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
        }
        return hasMozTransform;
    };

    $.magnificPopup.registerModule('zoom', {

        options: {
            enabled: false,
            easing: 'ease-in-out',
            duration: 300,
            opener: function opener(element) {
                return element.is('img') ? element : element.find('img');
            }
        },

        proto: {

            initZoom: function initZoom() {
                var zoomSt = mfp.st.zoom,
                    ns = '.zoom',
                    image;

                if (!zoomSt.enabled || !mfp.supportsTransition) {
                    return;
                }

                var duration = zoomSt.duration,
                    getElToAnimate = function getElToAnimate(image) {
                    var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                        transition = 'all ' + zoomSt.duration / 1000 + 's ' + zoomSt.easing,
                        cssObj = {
                        position: 'fixed',
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        '-webkit-backface-visibility': 'hidden'
                    },
                        t = 'transition';

                    cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;

                    newImg.css(cssObj);
                    return newImg;
                },
                    showMainContent = function showMainContent() {
                    mfp.content.css('visibility', 'visible');
                },
                    openTimeout,
                    animatedImg;

                _mfpOn('BuildControls' + ns, function () {
                    if (mfp._allowZoom()) {

                        clearTimeout(openTimeout);
                        mfp.content.css('visibility', 'hidden');

                        // Basically, all code below does is clones existing image, puts in on top of the current one and animated it

                        image = mfp._getItemToZoom();

                        if (!image) {
                            showMainContent();
                            return;
                        }

                        animatedImg = getElToAnimate(image);

                        animatedImg.css(mfp._getOffset());

                        mfp.wrap.append(animatedImg);

                        openTimeout = setTimeout(function () {
                            animatedImg.css(mfp._getOffset(true));
                            openTimeout = setTimeout(function () {

                                showMainContent();

                                setTimeout(function () {
                                    animatedImg.remove();
                                    image = animatedImg = null;
                                    _mfpTrigger('ZoomAnimationEnded');
                                }, 16); // avoid blink when switching images
                            }, duration); // this timeout equals animation duration
                        }, 16); // by adding this timeout we avoid short glitch at the beginning of animation


                        // Lots of timeouts...
                    }
                });
                _mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
                    if (mfp._allowZoom()) {

                        clearTimeout(openTimeout);

                        mfp.st.removalDelay = duration;

                        if (!image) {
                            image = mfp._getItemToZoom();
                            if (!image) {
                                return;
                            }
                            animatedImg = getElToAnimate(image);
                        }

                        animatedImg.css(mfp._getOffset(true));
                        mfp.wrap.append(animatedImg);
                        mfp.content.css('visibility', 'hidden');

                        setTimeout(function () {
                            animatedImg.css(mfp._getOffset());
                        }, 16);
                    }
                });

                _mfpOn(CLOSE_EVENT + ns, function () {
                    if (mfp._allowZoom()) {
                        showMainContent();
                        if (animatedImg) {
                            animatedImg.remove();
                        }
                        image = null;
                    }
                });
            },

            _allowZoom: function _allowZoom() {
                return mfp.currItem.type === 'image';
            },

            _getItemToZoom: function _getItemToZoom() {
                if (mfp.currItem.hasSize) {
                    return mfp.currItem.img;
                } else {
                    return false;
                }
            },

            // Get element postion relative to viewport
            _getOffset: function _getOffset(isLarge) {
                var el;
                if (isLarge) {
                    el = mfp.currItem.img;
                } else {
                    el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                }

                var offset = el.offset();
                var paddingTop = parseInt(el.css('padding-top'), 10);
                var paddingBottom = parseInt(el.css('padding-bottom'), 10);
                offset.top -= $(window).scrollTop() - paddingTop;

                /*
                 Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.
                  */
                var obj = {
                    width: el.width(),
                    // fix Zepto height+padding issue
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };

                // I hate to do this, but there is no another option
                if (getHasMozTransform()) {
                    obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
                } else {
                    obj.left = offset.left;
                    obj.top = offset.top;
                }
                return obj;
            }

        }
    });

    /*>>zoom*/

    /*>>iframe*/

    var IFRAME_NS = 'iframe',
        _emptyPage = '//about:blank',
        _fixIframeBugs = function _fixIframeBugs(isShowing) {
        if (mfp.currTemplate[IFRAME_NS]) {
            var el = mfp.currTemplate[IFRAME_NS].find('iframe');
            if (el.length) {
                // reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
                if (!isShowing) {
                    el[0].src = _emptyPage;
                }

                // IE8 black screen bug fix
                if (mfp.isIE8) {
                    el.css('display', isShowing ? 'block' : 'none');
                }
            }
        }
    };

    $.magnificPopup.registerModule(IFRAME_NS, {

        options: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',

            srcAction: 'iframe_src',

            // we don't care and support only one default type of URL by default
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        },

        proto: {
            initIframe: function initIframe() {
                mfp.types.push(IFRAME_NS);

                _mfpOn('BeforeChange', function (e, prevType, newType) {
                    if (prevType !== newType) {
                        if (prevType === IFRAME_NS) {
                            _fixIframeBugs(); // iframe if removed
                        } else if (newType === IFRAME_NS) {
                            _fixIframeBugs(true); // iframe is showing
                        }
                    } // else {
                    // iframe source is switched, don't do anything
                    //}
                });

                _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function () {
                    _fixIframeBugs();
                });
            },

            getIframe: function getIframe(item, template) {
                var embedSrc = item.src;
                var iframeSt = mfp.st.iframe;

                $.each(iframeSt.patterns, function () {
                    if (embedSrc.indexOf(this.index) > -1) {
                        if (this.id) {
                            if (typeof this.id === 'string') {
                                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
                            } else {
                                embedSrc = this.id.call(this, embedSrc);
                            }
                        }
                        embedSrc = this.src.replace('%id%', embedSrc);
                        return false; // break;
                    }
                });

                var dataObj = {};
                if (iframeSt.srcAction) {
                    dataObj[iframeSt.srcAction] = embedSrc;
                }
                mfp._parseMarkup(template, dataObj, item);

                mfp.updateStatus('ready');

                return template;
            }
        }
    });

    /*>>iframe*/

    /*>>gallery*/
    /**
     * Get looped index depending on number of slides
     */
    var _getLoopedId = function _getLoopedId(index) {
        var numSlides = mfp.items.length;
        if (index > numSlides - 1) {
            return index - numSlides;
        } else if (index < 0) {
            return numSlides + index;
        }
        return index;
    },
        _replaceCurrTotal = function _replaceCurrTotal(text, curr, total) {
        return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };

    $.magnificPopup.registerModule('gallery', {

        options: {
            enabled: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: true,
            arrows: true,

            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% of %total%'
        },

        proto: {
            initGallery: function initGallery() {

                var gSt = mfp.st.gallery,
                    ns = '.mfp-gallery';

                mfp.direction = true; // true - next, false - prev

                if (!gSt || !gSt.enabled) return false;

                _wrapClasses += ' mfp-gallery';

                _mfpOn(OPEN_EVENT + ns, function () {

                    if (gSt.navigateByImgClick) {
                        mfp.wrap.on('click' + ns, '.mfp-img', function () {
                            if (mfp.items.length > 1) {
                                mfp.next();
                                return false;
                            }
                        });
                    }

                    _document.on('keydown' + ns, function (e) {
                        if (e.keyCode === 37) {
                            mfp.prev();
                        } else if (e.keyCode === 39) {
                            mfp.next();
                        }
                    });
                });

                _mfpOn('UpdateStatus' + ns, function (e, data) {
                    if (data.text) {
                        data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
                    }
                });

                _mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
                    var l = mfp.items.length;
                    values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
                });

                _mfpOn('BuildControls' + ns, function () {
                    if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                        var markup = gSt.arrowMarkup,
                            arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
                            arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);

                        arrowLeft.click(function () {
                            mfp.prev();
                        });
                        arrowRight.click(function () {
                            mfp.next();
                        });

                        mfp.container.append(arrowLeft.add(arrowRight));
                    }
                });

                _mfpOn(CHANGE_EVENT + ns, function () {
                    if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

                    mfp._preloadTimeout = setTimeout(function () {
                        mfp.preloadNearbyImages();
                        mfp._preloadTimeout = null;
                    }, 16);
                });

                _mfpOn(CLOSE_EVENT + ns, function () {
                    _document.off(ns);
                    mfp.wrap.off('click' + ns);
                    mfp.arrowRight = mfp.arrowLeft = null;
                });
            },
            next: function next() {
                mfp.direction = true;
                mfp.index = _getLoopedId(mfp.index + 1);
                mfp.updateItemHTML();
            },
            prev: function prev() {
                mfp.direction = false;
                mfp.index = _getLoopedId(mfp.index - 1);
                mfp.updateItemHTML();
            },
            goTo: function goTo(newIndex) {
                mfp.direction = newIndex >= mfp.index;
                mfp.index = newIndex;
                mfp.updateItemHTML();
            },
            preloadNearbyImages: function preloadNearbyImages() {
                var p = mfp.st.gallery.preload,
                    preloadBefore = Math.min(p[0], mfp.items.length),
                    preloadAfter = Math.min(p[1], mfp.items.length),
                    i;

                for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
                    mfp._preloadItem(mfp.index + i);
                }
                for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
                    mfp._preloadItem(mfp.index - i);
                }
            },
            _preloadItem: function _preloadItem(index) {
                index = _getLoopedId(index);

                if (mfp.items[index].preloaded) {
                    return;
                }

                var item = mfp.items[index];
                if (!item.parsed) {
                    item = mfp.parseEl(index);
                }

                _mfpTrigger('LazyLoad', item);

                if (item.type === 'image') {
                    item.img = $('<img class="mfp-img" />').on('load.mfploader', function () {
                        item.hasSize = true;
                    }).on('error.mfploader', function () {
                        item.hasSize = true;
                        item.loadError = true;
                        _mfpTrigger('LazyLoadError', item);
                    }).attr('src', item.src);
                }

                item.preloaded = true;
            }
        }
    });

    /*>>gallery*/

    /*>>retina*/

    var RETINA_NS = 'retina';

    $.magnificPopup.registerModule(RETINA_NS, {
        options: {
            replaceSrc: function replaceSrc(item) {
                return item.src.replace(/\.\w+$/, function (m) {
                    return '@2x' + m;
                });
            },
            ratio: 1 // Function or number.  Set to 1 to disable.
        },
        proto: {
            initRetina: function initRetina() {
                if (window.devicePixelRatio > 1) {

                    var st = mfp.st.retina,
                        ratio = st.ratio;

                    ratio = !isNaN(ratio) ? ratio : ratio();

                    if (ratio > 1) {
                        _mfpOn('ImageHasSize' + '.' + RETINA_NS, function (e, item) {
                            item.img.css({
                                'max-width': item.img[0].naturalWidth / ratio,
                                'width': '100%'
                            });
                        });
                        _mfpOn('ElementParse' + '.' + RETINA_NS, function (e, item) {
                            item.src = st.replaceSrc(item, ratio);
                        });
                    }
                }
            }
        }
    });

    /*>>retina*/
    _checkInstance();
});

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(659))

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "\n/*\n *\n * More info at [www.dropzonejs.com](http://www.dropzonejs.com)\n *\n * Copyright (c) 2012, Matias Meno\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n *\n */\n\n(function() {\n  var Dropzone, Emitter, ExifRestore, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,\n    slice = [].slice,\n    extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n    hasProp = {}.hasOwnProperty;\n\n  noop = function() {};\n\n  Emitter = (function() {\n    function Emitter() {}\n\n    Emitter.prototype.addEventListener = Emitter.prototype.on;\n\n    Emitter.prototype.on = function(event, fn) {\n      this._callbacks = this._callbacks || {};\n      if (!this._callbacks[event]) {\n        this._callbacks[event] = [];\n      }\n      this._callbacks[event].push(fn);\n      return this;\n    };\n\n    Emitter.prototype.emit = function() {\n      var args, callback, callbacks, event, j, len;\n      event = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];\n      this._callbacks = this._callbacks || {};\n      callbacks = this._callbacks[event];\n      if (callbacks) {\n        for (j = 0, len = callbacks.length; j < len; j++) {\n          callback = callbacks[j];\n          callback.apply(this, args);\n        }\n      }\n      return this;\n    };\n\n    Emitter.prototype.removeListener = Emitter.prototype.off;\n\n    Emitter.prototype.removeAllListeners = Emitter.prototype.off;\n\n    Emitter.prototype.removeEventListener = Emitter.prototype.off;\n\n    Emitter.prototype.off = function(event, fn) {\n      var callback, callbacks, i, j, len;\n      if (!this._callbacks || arguments.length === 0) {\n        this._callbacks = {};\n        return this;\n      }\n      callbacks = this._callbacks[event];\n      if (!callbacks) {\n        return this;\n      }\n      if (arguments.length === 1) {\n        delete this._callbacks[event];\n        return this;\n      }\n      for (i = j = 0, len = callbacks.length; j < len; i = ++j) {\n        callback = callbacks[i];\n        if (callback === fn) {\n          callbacks.splice(i, 1);\n          break;\n        }\n      }\n      return this;\n    };\n\n    return Emitter;\n\n  })();\n\n  Dropzone = (function(superClass) {\n    var extend, resolveOption;\n\n    extend1(Dropzone, superClass);\n\n    Dropzone.prototype.Emitter = Emitter;\n\n\n    /*\n    This is a list of all available events you can register on a dropzone object.\n    \n    You can register an event handler like this:\n    \n        dropzone.on(\"dragEnter\", function() { });\n     */\n\n    Dropzone.prototype.events = [\"drop\", \"dragstart\", \"dragend\", \"dragenter\", \"dragover\", \"dragleave\", \"addedfile\", \"addedfiles\", \"removedfile\", \"thumbnail\", \"error\", \"errormultiple\", \"processing\", \"processingmultiple\", \"uploadprogress\", \"totaluploadprogress\", \"sending\", \"sendingmultiple\", \"success\", \"successmultiple\", \"canceled\", \"canceledmultiple\", \"complete\", \"completemultiple\", \"reset\", \"maxfilesexceeded\", \"maxfilesreached\", \"queuecomplete\"];\n\n    Dropzone.prototype.defaultOptions = {\n      url: null,\n      method: \"post\",\n      withCredentials: false,\n      timeout: 30000,\n      parallelUploads: 2,\n      uploadMultiple: false,\n      maxFilesize: 256,\n      paramName: \"file\",\n      createImageThumbnails: true,\n      maxThumbnailFilesize: 10,\n      thumbnailWidth: 120,\n      thumbnailHeight: 120,\n      thumbnailMethod: 'crop',\n      resizeWidth: null,\n      resizeHeight: null,\n      resizeMimeType: null,\n      resizeQuality: 0.8,\n      resizeMethod: 'contain',\n      filesizeBase: 1000,\n      maxFiles: null,\n      params: {},\n      headers: null,\n      clickable: true,\n      ignoreHiddenFiles: true,\n      acceptedFiles: null,\n      acceptedMimeTypes: null,\n      autoProcessQueue: true,\n      autoQueue: true,\n      addRemoveLinks: false,\n      previewsContainer: null,\n      hiddenInputContainer: \"body\",\n      capture: null,\n      renameFilename: null,\n      renameFile: null,\n      forceFallback: false,\n      dictDefaultMessage: \"Drop files here to upload\",\n      dictFallbackMessage: \"Your browser does not support drag'n'drop file uploads.\",\n      dictFallbackText: \"Please use the fallback form below to upload your files like in the olden days.\",\n      dictFileTooBig: \"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.\",\n      dictInvalidFileType: \"You can't upload files of this type.\",\n      dictResponseError: \"Server responded with {{statusCode}} code.\",\n      dictCancelUpload: \"Cancel upload\",\n      dictCancelUploadConfirmation: \"Are you sure you want to cancel this upload?\",\n      dictRemoveFile: \"Remove file\",\n      dictRemoveFileConfirmation: null,\n      dictMaxFilesExceeded: \"You can not upload any more files.\",\n      dictFileSizeUnits: {\n        tb: \"TB\",\n        gb: \"GB\",\n        mb: \"MB\",\n        kb: \"KB\",\n        b: \"b\"\n      },\n      init: function() {\n        return noop;\n      },\n      accept: function(file, done) {\n        return done();\n      },\n      fallback: function() {\n        var child, j, len, messageElement, ref, span;\n        this.element.className = this.element.className + \" dz-browser-not-supported\";\n        ref = this.element.getElementsByTagName(\"div\");\n        for (j = 0, len = ref.length; j < len; j++) {\n          child = ref[j];\n          if (/(^| )dz-message($| )/.test(child.className)) {\n            messageElement = child;\n            child.className = \"dz-message\";\n            continue;\n          }\n        }\n        if (!messageElement) {\n          messageElement = Dropzone.createElement(\"<div class=\\\"dz-message\\\"><span></span></div>\");\n          this.element.appendChild(messageElement);\n        }\n        span = messageElement.getElementsByTagName(\"span\")[0];\n        if (span) {\n          if (span.textContent != null) {\n            span.textContent = this.options.dictFallbackMessage;\n          } else if (span.innerText != null) {\n            span.innerText = this.options.dictFallbackMessage;\n          }\n        }\n        return this.element.appendChild(this.getFallbackForm());\n      },\n      resize: function(file, width, height, resizeMethod) {\n        var info, srcRatio, trgRatio;\n        info = {\n          srcX: 0,\n          srcY: 0,\n          srcWidth: file.width,\n          srcHeight: file.height\n        };\n        srcRatio = file.width / file.height;\n        if ((width == null) && (height == null)) {\n          width = info.srcWidth;\n          height = info.srcHeight;\n        } else if (width == null) {\n          width = height * srcRatio;\n        } else if (height == null) {\n          height = width / srcRatio;\n        }\n        width = Math.min(width, info.srcWidth);\n        height = Math.min(height, info.srcHeight);\n        trgRatio = width / height;\n        if (info.srcWidth > width || info.srcHeight > height) {\n          if (resizeMethod === 'crop') {\n            if (srcRatio > trgRatio) {\n              info.srcHeight = file.height;\n              info.srcWidth = info.srcHeight * trgRatio;\n            } else {\n              info.srcWidth = file.width;\n              info.srcHeight = info.srcWidth / trgRatio;\n            }\n          } else if (resizeMethod === 'contain') {\n            if (srcRatio > trgRatio) {\n              height = width / srcRatio;\n            } else {\n              width = height * srcRatio;\n            }\n          } else {\n            throw new Error(\"Unknown resizeMethod '\" + resizeMethod + \"'\");\n          }\n        }\n        info.srcX = (file.width - info.srcWidth) / 2;\n        info.srcY = (file.height - info.srcHeight) / 2;\n        info.trgWidth = width;\n        info.trgHeight = height;\n        return info;\n      },\n      transformFile: function(file, done) {\n        if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {\n          return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);\n        } else {\n          return done(file);\n        }\n      },\n      previewTemplate: \"<div class=\\\"dz-preview dz-file-preview\\\">\\n  <div class=\\\"dz-image\\\"><img data-dz-thumbnail /></div>\\n  <div class=\\\"dz-details\\\">\\n    <div class=\\\"dz-size\\\"><span data-dz-size></span></div>\\n    <div class=\\\"dz-filename\\\"><span data-dz-name></span></div>\\n  </div>\\n  <div class=\\\"dz-progress\\\"><span class=\\\"dz-upload\\\" data-dz-uploadprogress></span></div>\\n  <div class=\\\"dz-error-message\\\"><span data-dz-errormessage></span></div>\\n  <div class=\\\"dz-success-mark\\\">\\n    <svg width=\\\"54px\\\" height=\\\"54px\\\" viewBox=\\\"0 0 54 54\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xmlns:sketch=\\\"http://www.bohemiancoding.com/sketch/ns\\\">\\n      <title>Check</title>\\n      <defs></defs>\\n      <g id=\\\"Page-1\\\" stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\" sketch:type=\\\"MSPage\\\">\\n        <path d=\\\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\\\" id=\\\"Oval-2\\\" stroke-opacity=\\\"0.198794158\\\" stroke=\\\"#747474\\\" fill-opacity=\\\"0.816519475\\\" fill=\\\"#FFFFFF\\\" sketch:type=\\\"MSShapeGroup\\\"></path>\\n      </g>\\n    </svg>\\n  </div>\\n  <div class=\\\"dz-error-mark\\\">\\n    <svg width=\\\"54px\\\" height=\\\"54px\\\" viewBox=\\\"0 0 54 54\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xmlns:sketch=\\\"http://www.bohemiancoding.com/sketch/ns\\\">\\n      <title>Error</title>\\n      <defs></defs>\\n      <g id=\\\"Page-1\\\" stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\" sketch:type=\\\"MSPage\\\">\\n        <g id=\\\"Check-+-Oval-2\\\" sketch:type=\\\"MSLayerGroup\\\" stroke=\\\"#747474\\\" stroke-opacity=\\\"0.198794158\\\" fill=\\\"#FFFFFF\\\" fill-opacity=\\\"0.816519475\\\">\\n          <path d=\\\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\\\" id=\\\"Oval-2\\\" sketch:type=\\\"MSShapeGroup\\\"></path>\\n        </g>\\n      </g>\\n    </svg>\\n  </div>\\n</div>\",\n\n      /*\n      Those functions register themselves to the events on init and handle all\n      the user interface specific stuff. Overwriting them won't break the upload\n      but can break the way it's displayed.\n      You can overwrite them if you don't like the default behavior. If you just\n      want to add an additional event handler, register it on the dropzone object\n      and don't overwrite those options.\n       */\n      drop: function(e) {\n        return this.element.classList.remove(\"dz-drag-hover\");\n      },\n      dragstart: noop,\n      dragend: function(e) {\n        return this.element.classList.remove(\"dz-drag-hover\");\n      },\n      dragenter: function(e) {\n        return this.element.classList.add(\"dz-drag-hover\");\n      },\n      dragover: function(e) {\n        return this.element.classList.add(\"dz-drag-hover\");\n      },\n      dragleave: function(e) {\n        return this.element.classList.remove(\"dz-drag-hover\");\n      },\n      paste: noop,\n      reset: function() {\n        return this.element.classList.remove(\"dz-started\");\n      },\n      addedfile: function(file) {\n        var j, k, l, len, len1, len2, node, ref, ref1, ref2, removeFileEvent, removeLink, results;\n        if (this.element === this.previewsContainer) {\n          this.element.classList.add(\"dz-started\");\n        }\n        if (this.previewsContainer) {\n          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());\n          file.previewTemplate = file.previewElement;\n          this.previewsContainer.appendChild(file.previewElement);\n          ref = file.previewElement.querySelectorAll(\"[data-dz-name]\");\n          for (j = 0, len = ref.length; j < len; j++) {\n            node = ref[j];\n            node.textContent = file.name;\n          }\n          ref1 = file.previewElement.querySelectorAll(\"[data-dz-size]\");\n          for (k = 0, len1 = ref1.length; k < len1; k++) {\n            node = ref1[k];\n            node.innerHTML = this.filesize(file.size);\n          }\n          if (this.options.addRemoveLinks) {\n            file._removeLink = Dropzone.createElement(\"<a class=\\\"dz-remove\\\" href=\\\"javascript:undefined;\\\" data-dz-remove>\" + this.options.dictRemoveFile + \"</a>\");\n            file.previewElement.appendChild(file._removeLink);\n          }\n          removeFileEvent = (function(_this) {\n            return function(e) {\n              e.preventDefault();\n              e.stopPropagation();\n              if (file.status === Dropzone.UPLOADING) {\n                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {\n                  return _this.removeFile(file);\n                });\n              } else {\n                if (_this.options.dictRemoveFileConfirmation) {\n                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {\n                    return _this.removeFile(file);\n                  });\n                } else {\n                  return _this.removeFile(file);\n                }\n              }\n            };\n          })(this);\n          ref2 = file.previewElement.querySelectorAll(\"[data-dz-remove]\");\n          results = [];\n          for (l = 0, len2 = ref2.length; l < len2; l++) {\n            removeLink = ref2[l];\n            results.push(removeLink.addEventListener(\"click\", removeFileEvent));\n          }\n          return results;\n        }\n      },\n      removedfile: function(file) {\n        var ref;\n        if (file.previewElement) {\n          if ((ref = file.previewElement) != null) {\n            ref.parentNode.removeChild(file.previewElement);\n          }\n        }\n        return this._updateMaxFilesReachedClass();\n      },\n      thumbnail: function(file, dataUrl) {\n        var j, len, ref, thumbnailElement;\n        if (file.previewElement) {\n          file.previewElement.classList.remove(\"dz-file-preview\");\n          ref = file.previewElement.querySelectorAll(\"[data-dz-thumbnail]\");\n          for (j = 0, len = ref.length; j < len; j++) {\n            thumbnailElement = ref[j];\n            thumbnailElement.alt = file.name;\n            thumbnailElement.src = dataUrl;\n          }\n          return setTimeout(((function(_this) {\n            return function() {\n              return file.previewElement.classList.add(\"dz-image-preview\");\n            };\n          })(this)), 1);\n        }\n      },\n      error: function(file, message) {\n        var j, len, node, ref, results;\n        if (file.previewElement) {\n          file.previewElement.classList.add(\"dz-error\");\n          if (typeof message !== \"String\" && message.error) {\n            message = message.error;\n          }\n          ref = file.previewElement.querySelectorAll(\"[data-dz-errormessage]\");\n          results = [];\n          for (j = 0, len = ref.length; j < len; j++) {\n            node = ref[j];\n            results.push(node.textContent = message);\n          }\n          return results;\n        }\n      },\n      errormultiple: noop,\n      processing: function(file) {\n        if (file.previewElement) {\n          file.previewElement.classList.add(\"dz-processing\");\n          if (file._removeLink) {\n            return file._removeLink.textContent = this.options.dictCancelUpload;\n          }\n        }\n      },\n      processingmultiple: noop,\n      uploadprogress: function(file, progress, bytesSent) {\n        var j, len, node, ref, results;\n        if (file.previewElement) {\n          ref = file.previewElement.querySelectorAll(\"[data-dz-uploadprogress]\");\n          results = [];\n          for (j = 0, len = ref.length; j < len; j++) {\n            node = ref[j];\n            if (node.nodeName === 'PROGRESS') {\n              results.push(node.value = progress);\n            } else {\n              results.push(node.style.width = progress + \"%\");\n            }\n          }\n          return results;\n        }\n      },\n      totaluploadprogress: noop,\n      sending: noop,\n      sendingmultiple: noop,\n      success: function(file) {\n        if (file.previewElement) {\n          return file.previewElement.classList.add(\"dz-success\");\n        }\n      },\n      successmultiple: noop,\n      canceled: function(file) {\n        return this.emit(\"error\", file, \"Upload canceled.\");\n      },\n      canceledmultiple: noop,\n      complete: function(file) {\n        if (file._removeLink) {\n          file._removeLink.textContent = this.options.dictRemoveFile;\n        }\n        if (file.previewElement) {\n          return file.previewElement.classList.add(\"dz-complete\");\n        }\n      },\n      completemultiple: noop,\n      maxfilesexceeded: noop,\n      maxfilesreached: noop,\n      queuecomplete: noop,\n      addedfiles: noop\n    };\n\n    extend = function() {\n      var j, key, len, object, objects, target, val;\n      target = arguments[0], objects = 2 <= arguments.length ? slice.call(arguments, 1) : [];\n      for (j = 0, len = objects.length; j < len; j++) {\n        object = objects[j];\n        for (key in object) {\n          val = object[key];\n          target[key] = val;\n        }\n      }\n      return target;\n    };\n\n    function Dropzone(element1, options) {\n      var elementOptions, fallback, ref;\n      this.element = element1;\n      this.version = Dropzone.version;\n      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\\n*/g, \"\");\n      this.clickableElements = [];\n      this.listeners = [];\n      this.files = [];\n      if (typeof this.element === \"string\") {\n        this.element = document.querySelector(this.element);\n      }\n      if (!(this.element && (this.element.nodeType != null))) {\n        throw new Error(\"Invalid dropzone element.\");\n      }\n      if (this.element.dropzone) {\n        throw new Error(\"Dropzone already attached.\");\n      }\n      Dropzone.instances.push(this);\n      this.element.dropzone = this;\n      elementOptions = (ref = Dropzone.optionsForElement(this.element)) != null ? ref : {};\n      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});\n      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {\n        return this.options.fallback.call(this);\n      }\n      if (this.options.url == null) {\n        this.options.url = this.element.getAttribute(\"action\");\n      }\n      if (!this.options.url) {\n        throw new Error(\"No URL provided.\");\n      }\n      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {\n        throw new Error(\"You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.\");\n      }\n      if (this.options.acceptedMimeTypes) {\n        this.options.acceptedFiles = this.options.acceptedMimeTypes;\n        delete this.options.acceptedMimeTypes;\n      }\n      if (this.options.renameFilename != null) {\n        this.options.renameFile = (function(_this) {\n          return function(file) {\n            return _this.options.renameFilename.call(_this, file.name, file);\n          };\n        })(this);\n      }\n      this.options.method = this.options.method.toUpperCase();\n      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {\n        fallback.parentNode.removeChild(fallback);\n      }\n      if (this.options.previewsContainer !== false) {\n        if (this.options.previewsContainer) {\n          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, \"previewsContainer\");\n        } else {\n          this.previewsContainer = this.element;\n        }\n      }\n      if (this.options.clickable) {\n        if (this.options.clickable === true) {\n          this.clickableElements = [this.element];\n        } else {\n          this.clickableElements = Dropzone.getElements(this.options.clickable, \"clickable\");\n        }\n      }\n      this.init();\n    }\n\n    Dropzone.prototype.getAcceptedFiles = function() {\n      var file, j, len, ref, results;\n      ref = this.files;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        if (file.accepted) {\n          results.push(file);\n        }\n      }\n      return results;\n    };\n\n    Dropzone.prototype.getRejectedFiles = function() {\n      var file, j, len, ref, results;\n      ref = this.files;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        if (!file.accepted) {\n          results.push(file);\n        }\n      }\n      return results;\n    };\n\n    Dropzone.prototype.getFilesWithStatus = function(status) {\n      var file, j, len, ref, results;\n      ref = this.files;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        if (file.status === status) {\n          results.push(file);\n        }\n      }\n      return results;\n    };\n\n    Dropzone.prototype.getQueuedFiles = function() {\n      return this.getFilesWithStatus(Dropzone.QUEUED);\n    };\n\n    Dropzone.prototype.getUploadingFiles = function() {\n      return this.getFilesWithStatus(Dropzone.UPLOADING);\n    };\n\n    Dropzone.prototype.getAddedFiles = function() {\n      return this.getFilesWithStatus(Dropzone.ADDED);\n    };\n\n    Dropzone.prototype.getActiveFiles = function() {\n      var file, j, len, ref, results;\n      ref = this.files;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {\n          results.push(file);\n        }\n      }\n      return results;\n    };\n\n    Dropzone.prototype.init = function() {\n      var eventName, j, len, noPropagation, ref, ref1, setupHiddenFileInput;\n      if (this.element.tagName === \"form\") {\n        this.element.setAttribute(\"enctype\", \"multipart/form-data\");\n      }\n      if (this.element.classList.contains(\"dropzone\") && !this.element.querySelector(\".dz-message\")) {\n        this.element.appendChild(Dropzone.createElement(\"<div class=\\\"dz-default dz-message\\\"><span>\" + this.options.dictDefaultMessage + \"</span></div>\"));\n      }\n      if (this.clickableElements.length) {\n        setupHiddenFileInput = (function(_this) {\n          return function() {\n            if (_this.hiddenFileInput) {\n              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);\n            }\n            _this.hiddenFileInput = document.createElement(\"input\");\n            _this.hiddenFileInput.setAttribute(\"type\", \"file\");\n            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {\n              _this.hiddenFileInput.setAttribute(\"multiple\", \"multiple\");\n            }\n            _this.hiddenFileInput.className = \"dz-hidden-input\";\n            if (_this.options.acceptedFiles != null) {\n              _this.hiddenFileInput.setAttribute(\"accept\", _this.options.acceptedFiles);\n            }\n            if (_this.options.capture != null) {\n              _this.hiddenFileInput.setAttribute(\"capture\", _this.options.capture);\n            }\n            _this.hiddenFileInput.style.visibility = \"hidden\";\n            _this.hiddenFileInput.style.position = \"absolute\";\n            _this.hiddenFileInput.style.top = \"0\";\n            _this.hiddenFileInput.style.left = \"0\";\n            _this.hiddenFileInput.style.height = \"0\";\n            _this.hiddenFileInput.style.width = \"0\";\n            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);\n            return _this.hiddenFileInput.addEventListener(\"change\", function() {\n              var file, files, j, len;\n              files = _this.hiddenFileInput.files;\n              if (files.length) {\n                for (j = 0, len = files.length; j < len; j++) {\n                  file = files[j];\n                  _this.addFile(file);\n                }\n              }\n              _this.emit(\"addedfiles\", files);\n              return setupHiddenFileInput();\n            });\n          };\n        })(this);\n        setupHiddenFileInput();\n      }\n      this.URL = (ref = window.URL) != null ? ref : window.webkitURL;\n      ref1 = this.events;\n      for (j = 0, len = ref1.length; j < len; j++) {\n        eventName = ref1[j];\n        this.on(eventName, this.options[eventName]);\n      }\n      this.on(\"uploadprogress\", (function(_this) {\n        return function() {\n          return _this.updateTotalUploadProgress();\n        };\n      })(this));\n      this.on(\"removedfile\", (function(_this) {\n        return function() {\n          return _this.updateTotalUploadProgress();\n        };\n      })(this));\n      this.on(\"canceled\", (function(_this) {\n        return function(file) {\n          return _this.emit(\"complete\", file);\n        };\n      })(this));\n      this.on(\"complete\", (function(_this) {\n        return function(file) {\n          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {\n            return setTimeout((function() {\n              return _this.emit(\"queuecomplete\");\n            }), 0);\n          }\n        };\n      })(this));\n      noPropagation = function(e) {\n        e.stopPropagation();\n        if (e.preventDefault) {\n          return e.preventDefault();\n        } else {\n          return e.returnValue = false;\n        }\n      };\n      this.listeners = [\n        {\n          element: this.element,\n          events: {\n            \"dragstart\": (function(_this) {\n              return function(e) {\n                return _this.emit(\"dragstart\", e);\n              };\n            })(this),\n            \"dragenter\": (function(_this) {\n              return function(e) {\n                noPropagation(e);\n                return _this.emit(\"dragenter\", e);\n              };\n            })(this),\n            \"dragover\": (function(_this) {\n              return function(e) {\n                var efct;\n                try {\n                  efct = e.dataTransfer.effectAllowed;\n                } catch (undefined) {}\n                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';\n                noPropagation(e);\n                return _this.emit(\"dragover\", e);\n              };\n            })(this),\n            \"dragleave\": (function(_this) {\n              return function(e) {\n                return _this.emit(\"dragleave\", e);\n              };\n            })(this),\n            \"drop\": (function(_this) {\n              return function(e) {\n                noPropagation(e);\n                return _this.drop(e);\n              };\n            })(this),\n            \"dragend\": (function(_this) {\n              return function(e) {\n                return _this.emit(\"dragend\", e);\n              };\n            })(this)\n          }\n        }\n      ];\n      this.clickableElements.forEach((function(_this) {\n        return function(clickableElement) {\n          return _this.listeners.push({\n            element: clickableElement,\n            events: {\n              \"click\": function(evt) {\n                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(\".dz-message\")))) {\n                  _this.hiddenFileInput.click();\n                }\n                return true;\n              }\n            }\n          });\n        };\n      })(this));\n      this.enable();\n      return this.options.init.call(this);\n    };\n\n    Dropzone.prototype.destroy = function() {\n      var ref;\n      this.disable();\n      this.removeAllFiles(true);\n      if ((ref = this.hiddenFileInput) != null ? ref.parentNode : void 0) {\n        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);\n        this.hiddenFileInput = null;\n      }\n      delete this.element.dropzone;\n      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);\n    };\n\n    Dropzone.prototype.updateTotalUploadProgress = function() {\n      var activeFiles, file, j, len, ref, totalBytes, totalBytesSent, totalUploadProgress;\n      totalBytesSent = 0;\n      totalBytes = 0;\n      activeFiles = this.getActiveFiles();\n      if (activeFiles.length) {\n        ref = this.getActiveFiles();\n        for (j = 0, len = ref.length; j < len; j++) {\n          file = ref[j];\n          totalBytesSent += file.upload.bytesSent;\n          totalBytes += file.upload.total;\n        }\n        totalUploadProgress = 100 * totalBytesSent / totalBytes;\n      } else {\n        totalUploadProgress = 100;\n      }\n      return this.emit(\"totaluploadprogress\", totalUploadProgress, totalBytes, totalBytesSent);\n    };\n\n    Dropzone.prototype._getParamName = function(n) {\n      if (typeof this.options.paramName === \"function\") {\n        return this.options.paramName(n);\n      } else {\n        return \"\" + this.options.paramName + (this.options.uploadMultiple ? \"[\" + n + \"]\" : \"\");\n      }\n    };\n\n    Dropzone.prototype._renameFile = function(file) {\n      if (typeof this.options.renameFile !== \"function\") {\n        return file.name;\n      }\n      return this.options.renameFile(file);\n    };\n\n    Dropzone.prototype.getFallbackForm = function() {\n      var existingFallback, fields, fieldsString, form;\n      if (existingFallback = this.getExistingFallback()) {\n        return existingFallback;\n      }\n      fieldsString = \"<div class=\\\"dz-fallback\\\">\";\n      if (this.options.dictFallbackText) {\n        fieldsString += \"<p>\" + this.options.dictFallbackText + \"</p>\";\n      }\n      fieldsString += \"<input type=\\\"file\\\" name=\\\"\" + (this._getParamName(0)) + \"\\\" \" + (this.options.uploadMultiple ? 'multiple=\"multiple\"' : void 0) + \" /><input type=\\\"submit\\\" value=\\\"Upload!\\\"></div>\";\n      fields = Dropzone.createElement(fieldsString);\n      if (this.element.tagName !== \"FORM\") {\n        form = Dropzone.createElement(\"<form action=\\\"\" + this.options.url + \"\\\" enctype=\\\"multipart/form-data\\\" method=\\\"\" + this.options.method + \"\\\"></form>\");\n        form.appendChild(fields);\n      } else {\n        this.element.setAttribute(\"enctype\", \"multipart/form-data\");\n        this.element.setAttribute(\"method\", this.options.method);\n      }\n      return form != null ? form : fields;\n    };\n\n    Dropzone.prototype.getExistingFallback = function() {\n      var fallback, getFallback, j, len, ref, tagName;\n      getFallback = function(elements) {\n        var el, j, len;\n        for (j = 0, len = elements.length; j < len; j++) {\n          el = elements[j];\n          if (/(^| )fallback($| )/.test(el.className)) {\n            return el;\n          }\n        }\n      };\n      ref = [\"div\", \"form\"];\n      for (j = 0, len = ref.length; j < len; j++) {\n        tagName = ref[j];\n        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {\n          return fallback;\n        }\n      }\n    };\n\n    Dropzone.prototype.setupEventListeners = function() {\n      var elementListeners, event, j, len, listener, ref, results;\n      ref = this.listeners;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        elementListeners = ref[j];\n        results.push((function() {\n          var ref1, results1;\n          ref1 = elementListeners.events;\n          results1 = [];\n          for (event in ref1) {\n            listener = ref1[event];\n            results1.push(elementListeners.element.addEventListener(event, listener, false));\n          }\n          return results1;\n        })());\n      }\n      return results;\n    };\n\n    Dropzone.prototype.removeEventListeners = function() {\n      var elementListeners, event, j, len, listener, ref, results;\n      ref = this.listeners;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        elementListeners = ref[j];\n        results.push((function() {\n          var ref1, results1;\n          ref1 = elementListeners.events;\n          results1 = [];\n          for (event in ref1) {\n            listener = ref1[event];\n            results1.push(elementListeners.element.removeEventListener(event, listener, false));\n          }\n          return results1;\n        })());\n      }\n      return results;\n    };\n\n    Dropzone.prototype.disable = function() {\n      var file, j, len, ref, results;\n      this.clickableElements.forEach(function(element) {\n        return element.classList.remove(\"dz-clickable\");\n      });\n      this.removeEventListeners();\n      ref = this.files;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        results.push(this.cancelUpload(file));\n      }\n      return results;\n    };\n\n    Dropzone.prototype.enable = function() {\n      this.clickableElements.forEach(function(element) {\n        return element.classList.add(\"dz-clickable\");\n      });\n      return this.setupEventListeners();\n    };\n\n    Dropzone.prototype.filesize = function(size) {\n      var cutoff, i, j, len, selectedSize, selectedUnit, unit, units;\n      selectedSize = 0;\n      selectedUnit = \"b\";\n      if (size > 0) {\n        units = ['tb', 'gb', 'mb', 'kb', 'b'];\n        for (i = j = 0, len = units.length; j < len; i = ++j) {\n          unit = units[i];\n          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;\n          if (size >= cutoff) {\n            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);\n            selectedUnit = unit;\n            break;\n          }\n        }\n        selectedSize = Math.round(10 * selectedSize) / 10;\n      }\n      return \"<strong>\" + selectedSize + \"</strong> \" + this.options.dictFileSizeUnits[selectedUnit];\n    };\n\n    Dropzone.prototype._updateMaxFilesReachedClass = function() {\n      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {\n        if (this.getAcceptedFiles().length === this.options.maxFiles) {\n          this.emit('maxfilesreached', this.files);\n        }\n        return this.element.classList.add(\"dz-max-files-reached\");\n      } else {\n        return this.element.classList.remove(\"dz-max-files-reached\");\n      }\n    };\n\n    Dropzone.prototype.drop = function(e) {\n      var files, items;\n      if (!e.dataTransfer) {\n        return;\n      }\n      this.emit(\"drop\", e);\n      files = e.dataTransfer.files;\n      this.emit(\"addedfiles\", files);\n      if (files.length) {\n        items = e.dataTransfer.items;\n        if (items && items.length && (items[0].webkitGetAsEntry != null)) {\n          this._addFilesFromItems(items);\n        } else {\n          this.handleFiles(files);\n        }\n      }\n    };\n\n    Dropzone.prototype.paste = function(e) {\n      var items, ref;\n      if ((e != null ? (ref = e.clipboardData) != null ? ref.items : void 0 : void 0) == null) {\n        return;\n      }\n      this.emit(\"paste\", e);\n      items = e.clipboardData.items;\n      if (items.length) {\n        return this._addFilesFromItems(items);\n      }\n    };\n\n    Dropzone.prototype.handleFiles = function(files) {\n      var file, j, len, results;\n      results = [];\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        results.push(this.addFile(file));\n      }\n      return results;\n    };\n\n    Dropzone.prototype._addFilesFromItems = function(items) {\n      var entry, item, j, len, results;\n      results = [];\n      for (j = 0, len = items.length; j < len; j++) {\n        item = items[j];\n        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {\n          if (entry.isFile) {\n            results.push(this.addFile(item.getAsFile()));\n          } else if (entry.isDirectory) {\n            results.push(this._addFilesFromDirectory(entry, entry.name));\n          } else {\n            results.push(void 0);\n          }\n        } else if (item.getAsFile != null) {\n          if ((item.kind == null) || item.kind === \"file\") {\n            results.push(this.addFile(item.getAsFile()));\n          } else {\n            results.push(void 0);\n          }\n        } else {\n          results.push(void 0);\n        }\n      }\n      return results;\n    };\n\n    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {\n      var dirReader, errorHandler, readEntries;\n      dirReader = directory.createReader();\n      errorHandler = function(error) {\n        return typeof console !== \"undefined\" && console !== null ? typeof console.log === \"function\" ? console.log(error) : void 0 : void 0;\n      };\n      readEntries = (function(_this) {\n        return function() {\n          return dirReader.readEntries(function(entries) {\n            var entry, j, len;\n            if (entries.length > 0) {\n              for (j = 0, len = entries.length; j < len; j++) {\n                entry = entries[j];\n                if (entry.isFile) {\n                  entry.file(function(file) {\n                    if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {\n                      return;\n                    }\n                    file.fullPath = path + \"/\" + file.name;\n                    return _this.addFile(file);\n                  });\n                } else if (entry.isDirectory) {\n                  _this._addFilesFromDirectory(entry, path + \"/\" + entry.name);\n                }\n              }\n              readEntries();\n            }\n            return null;\n          }, errorHandler);\n        };\n      })(this);\n      return readEntries();\n    };\n\n    Dropzone.prototype.accept = function(file, done) {\n      if (file.size > this.options.maxFilesize * 1024 * 1024) {\n        return done(this.options.dictFileTooBig.replace(\"{{filesize}}\", Math.round(file.size / 1024 / 10.24) / 100).replace(\"{{maxFilesize}}\", this.options.maxFilesize));\n      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {\n        return done(this.options.dictInvalidFileType);\n      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {\n        done(this.options.dictMaxFilesExceeded.replace(\"{{maxFiles}}\", this.options.maxFiles));\n        return this.emit(\"maxfilesexceeded\", file);\n      } else {\n        return this.options.accept.call(this, file, done);\n      }\n    };\n\n    Dropzone.prototype.addFile = function(file) {\n      file.upload = {\n        progress: 0,\n        total: file.size,\n        bytesSent: 0,\n        filename: this._renameFile(file)\n      };\n      this.files.push(file);\n      file.status = Dropzone.ADDED;\n      this.emit(\"addedfile\", file);\n      this._enqueueThumbnail(file);\n      return this.accept(file, (function(_this) {\n        return function(error) {\n          if (error) {\n            file.accepted = false;\n            _this._errorProcessing([file], error);\n          } else {\n            file.accepted = true;\n            if (_this.options.autoQueue) {\n              _this.enqueueFile(file);\n            }\n          }\n          return _this._updateMaxFilesReachedClass();\n        };\n      })(this));\n    };\n\n    Dropzone.prototype.enqueueFiles = function(files) {\n      var file, j, len;\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        this.enqueueFile(file);\n      }\n      return null;\n    };\n\n    Dropzone.prototype.enqueueFile = function(file) {\n      if (file.status === Dropzone.ADDED && file.accepted === true) {\n        file.status = Dropzone.QUEUED;\n        if (this.options.autoProcessQueue) {\n          return setTimeout(((function(_this) {\n            return function() {\n              return _this.processQueue();\n            };\n          })(this)), 0);\n        }\n      } else {\n        throw new Error(\"This file can't be queued because it has already been processed or was rejected.\");\n      }\n    };\n\n    Dropzone.prototype._thumbnailQueue = [];\n\n    Dropzone.prototype._processingThumbnail = false;\n\n    Dropzone.prototype._enqueueThumbnail = function(file) {\n      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {\n        this._thumbnailQueue.push(file);\n        return setTimeout(((function(_this) {\n          return function() {\n            return _this._processThumbnailQueue();\n          };\n        })(this)), 0);\n      }\n    };\n\n    Dropzone.prototype._processThumbnailQueue = function() {\n      var file;\n      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {\n        return;\n      }\n      this._processingThumbnail = true;\n      file = this._thumbnailQueue.shift();\n      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (function(_this) {\n        return function(dataUrl) {\n          _this.emit(\"thumbnail\", file, dataUrl);\n          _this._processingThumbnail = false;\n          return _this._processThumbnailQueue();\n        };\n      })(this));\n    };\n\n    Dropzone.prototype.removeFile = function(file) {\n      if (file.status === Dropzone.UPLOADING) {\n        this.cancelUpload(file);\n      }\n      this.files = without(this.files, file);\n      this.emit(\"removedfile\", file);\n      if (this.files.length === 0) {\n        return this.emit(\"reset\");\n      }\n    };\n\n    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {\n      var file, j, len, ref;\n      if (cancelIfNecessary == null) {\n        cancelIfNecessary = false;\n      }\n      ref = this.files.slice();\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {\n          this.removeFile(file);\n        }\n      }\n      return null;\n    };\n\n    Dropzone.prototype.resizeImage = function(file, width, height, resizeMethod, callback) {\n      return this.createThumbnail(file, width, height, resizeMethod, false, (function(_this) {\n        return function(dataUrl, canvas) {\n          var resizeMimeType, resizedDataURL;\n          if (canvas === null) {\n            return callback(file);\n          } else {\n            resizeMimeType = _this.options.resizeMimeType;\n            if (resizeMimeType == null) {\n              resizeMimeType = file.type;\n            }\n            resizedDataURL = canvas.toDataURL(resizeMimeType, _this.options.resizeQuality);\n            if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {\n              resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);\n            }\n            return callback(Dropzone.dataURItoBlob(resizedDataURL));\n          }\n        };\n      })(this));\n    };\n\n    Dropzone.prototype.createThumbnail = function(file, width, height, resizeMethod, fixOrientation, callback) {\n      var fileReader;\n      fileReader = new FileReader;\n      fileReader.onload = (function(_this) {\n        return function() {\n          file.dataURL = fileReader.result;\n          if (file.type === \"image/svg+xml\") {\n            if (callback != null) {\n              callback(fileReader.result);\n            }\n            return;\n          }\n          return _this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);\n        };\n      })(this);\n      return fileReader.readAsDataURL(file);\n    };\n\n    Dropzone.prototype.createThumbnailFromUrl = function(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {\n      var img;\n      img = document.createElement(\"img\");\n      if (crossOrigin) {\n        img.crossOrigin = crossOrigin;\n      }\n      img.onload = (function(_this) {\n        return function() {\n          var loadExif;\n          loadExif = function(callback) {\n            return callback(1);\n          };\n          if ((typeof EXIF !== \"undefined\" && EXIF !== null) && fixOrientation) {\n            loadExif = function(callback) {\n              return EXIF.getData(img, function() {\n                return callback(EXIF.getTag(this, 'Orientation'));\n              });\n            };\n          }\n          return loadExif(function(orientation) {\n            var canvas, ctx, ref, ref1, ref2, ref3, resizeInfo, thumbnail;\n            file.width = img.width;\n            file.height = img.height;\n            resizeInfo = _this.options.resize.call(_this, file, width, height, resizeMethod);\n            canvas = document.createElement(\"canvas\");\n            ctx = canvas.getContext(\"2d\");\n            canvas.width = resizeInfo.trgWidth;\n            canvas.height = resizeInfo.trgHeight;\n            if (orientation > 4) {\n              canvas.width = resizeInfo.trgHeight;\n              canvas.height = resizeInfo.trgWidth;\n            }\n            switch (orientation) {\n              case 2:\n                ctx.translate(canvas.width, 0);\n                ctx.scale(-1, 1);\n                break;\n              case 3:\n                ctx.translate(canvas.width, canvas.height);\n                ctx.rotate(Math.PI);\n                break;\n              case 4:\n                ctx.translate(0, canvas.height);\n                ctx.scale(1, -1);\n                break;\n              case 5:\n                ctx.rotate(0.5 * Math.PI);\n                ctx.scale(1, -1);\n                break;\n              case 6:\n                ctx.rotate(0.5 * Math.PI);\n                ctx.translate(0, -canvas.height);\n                break;\n              case 7:\n                ctx.rotate(0.5 * Math.PI);\n                ctx.translate(canvas.width, -canvas.height);\n                ctx.scale(-1, 1);\n                break;\n              case 8:\n                ctx.rotate(-0.5 * Math.PI);\n                ctx.translate(-canvas.width, 0);\n            }\n            drawImageIOSFix(ctx, img, (ref = resizeInfo.srcX) != null ? ref : 0, (ref1 = resizeInfo.srcY) != null ? ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (ref2 = resizeInfo.trgX) != null ? ref2 : 0, (ref3 = resizeInfo.trgY) != null ? ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);\n            thumbnail = canvas.toDataURL(\"image/png\");\n            if (callback != null) {\n              return callback(thumbnail, canvas);\n            }\n          });\n        };\n      })(this);\n      if (callback != null) {\n        img.onerror = callback;\n      }\n      return img.src = file.dataURL;\n    };\n\n    Dropzone.prototype.processQueue = function() {\n      var i, parallelUploads, processingLength, queuedFiles;\n      parallelUploads = this.options.parallelUploads;\n      processingLength = this.getUploadingFiles().length;\n      i = processingLength;\n      if (processingLength >= parallelUploads) {\n        return;\n      }\n      queuedFiles = this.getQueuedFiles();\n      if (!(queuedFiles.length > 0)) {\n        return;\n      }\n      if (this.options.uploadMultiple) {\n        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));\n      } else {\n        while (i < parallelUploads) {\n          if (!queuedFiles.length) {\n            return;\n          }\n          this.processFile(queuedFiles.shift());\n          i++;\n        }\n      }\n    };\n\n    Dropzone.prototype.processFile = function(file) {\n      return this.processFiles([file]);\n    };\n\n    Dropzone.prototype.processFiles = function(files) {\n      var file, j, len;\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        file.processing = true;\n        file.status = Dropzone.UPLOADING;\n        this.emit(\"processing\", file);\n      }\n      if (this.options.uploadMultiple) {\n        this.emit(\"processingmultiple\", files);\n      }\n      return this.uploadFiles(files);\n    };\n\n    Dropzone.prototype._getFilesWithXhr = function(xhr) {\n      var file, files;\n      return files = (function() {\n        var j, len, ref, results;\n        ref = this.files;\n        results = [];\n        for (j = 0, len = ref.length; j < len; j++) {\n          file = ref[j];\n          if (file.xhr === xhr) {\n            results.push(file);\n          }\n        }\n        return results;\n      }).call(this);\n    };\n\n    Dropzone.prototype.cancelUpload = function(file) {\n      var groupedFile, groupedFiles, j, k, len, len1, ref;\n      if (file.status === Dropzone.UPLOADING) {\n        groupedFiles = this._getFilesWithXhr(file.xhr);\n        for (j = 0, len = groupedFiles.length; j < len; j++) {\n          groupedFile = groupedFiles[j];\n          groupedFile.status = Dropzone.CANCELED;\n        }\n        file.xhr.abort();\n        for (k = 0, len1 = groupedFiles.length; k < len1; k++) {\n          groupedFile = groupedFiles[k];\n          this.emit(\"canceled\", groupedFile);\n        }\n        if (this.options.uploadMultiple) {\n          this.emit(\"canceledmultiple\", groupedFiles);\n        }\n      } else if ((ref = file.status) === Dropzone.ADDED || ref === Dropzone.QUEUED) {\n        file.status = Dropzone.CANCELED;\n        this.emit(\"canceled\", file);\n        if (this.options.uploadMultiple) {\n          this.emit(\"canceledmultiple\", [file]);\n        }\n      }\n      if (this.options.autoProcessQueue) {\n        return this.processQueue();\n      }\n    };\n\n    resolveOption = function() {\n      var args, option;\n      option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];\n      if (typeof option === 'function') {\n        return option.apply(this, args);\n      }\n      return option;\n    };\n\n    Dropzone.prototype.uploadFile = function(file) {\n      return this.uploadFiles([file]);\n    };\n\n    Dropzone.prototype.uploadFiles = function(files) {\n      var doneCounter, doneFunction, file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, j, k, key, l, len, len1, len2, len3, m, method, o, option, progressObj, ref, ref1, ref2, ref3, ref4, ref5, response, results, updateProgress, url, value, xhr;\n      xhr = new XMLHttpRequest();\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        file.xhr = xhr;\n      }\n      method = resolveOption(this.options.method, files);\n      url = resolveOption(this.options.url, files);\n      xhr.open(method, url, true);\n      xhr.timeout = resolveOption(this.options.timeout, files);\n      xhr.withCredentials = !!this.options.withCredentials;\n      response = null;\n      handleError = (function(_this) {\n        return function() {\n          var k, len1, results;\n          results = [];\n          for (k = 0, len1 = files.length; k < len1; k++) {\n            file = files[k];\n            results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace(\"{{statusCode}}\", xhr.status), xhr));\n          }\n          return results;\n        };\n      })(this);\n      updateProgress = (function(_this) {\n        return function(e) {\n          var allFilesFinished, k, l, len1, len2, len3, m, progress, results;\n          if (e != null) {\n            progress = 100 * e.loaded / e.total;\n            for (k = 0, len1 = files.length; k < len1; k++) {\n              file = files[k];\n              file.upload.progress = progress;\n              file.upload.total = e.total;\n              file.upload.bytesSent = e.loaded;\n            }\n          } else {\n            allFilesFinished = true;\n            progress = 100;\n            for (l = 0, len2 = files.length; l < len2; l++) {\n              file = files[l];\n              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {\n                allFilesFinished = false;\n              }\n              file.upload.progress = progress;\n              file.upload.bytesSent = file.upload.total;\n            }\n            if (allFilesFinished) {\n              return;\n            }\n          }\n          results = [];\n          for (m = 0, len3 = files.length; m < len3; m++) {\n            file = files[m];\n            results.push(_this.emit(\"uploadprogress\", file, progress, file.upload.bytesSent));\n          }\n          return results;\n        };\n      })(this);\n      xhr.onload = (function(_this) {\n        return function(e) {\n          var error1, ref;\n          if (files[0].status === Dropzone.CANCELED) {\n            return;\n          }\n          if (xhr.readyState !== 4) {\n            return;\n          }\n          if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {\n            response = xhr.responseText;\n            if (xhr.getResponseHeader(\"content-type\") && ~xhr.getResponseHeader(\"content-type\").indexOf(\"application/json\")) {\n              try {\n                response = JSON.parse(response);\n              } catch (error1) {\n                e = error1;\n                response = \"Invalid JSON response from server.\";\n              }\n            }\n          }\n          updateProgress();\n          if (!((200 <= (ref = xhr.status) && ref < 300))) {\n            return handleError();\n          } else {\n            return _this._finished(files, response, e);\n          }\n        };\n      })(this);\n      xhr.onerror = (function(_this) {\n        return function() {\n          if (files[0].status === Dropzone.CANCELED) {\n            return;\n          }\n          return handleError();\n        };\n      })(this);\n      progressObj = (ref = xhr.upload) != null ? ref : xhr;\n      progressObj.onprogress = updateProgress;\n      headers = {\n        \"Accept\": \"application/json\",\n        \"Cache-Control\": \"no-cache\",\n        \"X-Requested-With\": \"XMLHttpRequest\"\n      };\n      if (this.options.headers) {\n        extend(headers, this.options.headers);\n      }\n      for (headerName in headers) {\n        headerValue = headers[headerName];\n        if (headerValue) {\n          xhr.setRequestHeader(headerName, headerValue);\n        }\n      }\n      formData = new FormData();\n      if (this.options.params) {\n        ref1 = this.options.params;\n        for (key in ref1) {\n          value = ref1[key];\n          formData.append(key, value);\n        }\n      }\n      for (k = 0, len1 = files.length; k < len1; k++) {\n        file = files[k];\n        this.emit(\"sending\", file, xhr, formData);\n      }\n      if (this.options.uploadMultiple) {\n        this.emit(\"sendingmultiple\", files, xhr, formData);\n      }\n      if (this.element.tagName === \"FORM\") {\n        ref2 = this.element.querySelectorAll(\"input, textarea, select, button\");\n        for (l = 0, len2 = ref2.length; l < len2; l++) {\n          input = ref2[l];\n          inputName = input.getAttribute(\"name\");\n          inputType = input.getAttribute(\"type\");\n          if (input.tagName === \"SELECT\" && input.hasAttribute(\"multiple\")) {\n            ref3 = input.options;\n            for (m = 0, len3 = ref3.length; m < len3; m++) {\n              option = ref3[m];\n              if (option.selected) {\n                formData.append(inputName, option.value);\n              }\n            }\n          } else if (!inputType || ((ref4 = inputType.toLowerCase()) !== \"checkbox\" && ref4 !== \"radio\") || input.checked) {\n            formData.append(inputName, input.value);\n          }\n        }\n      }\n      doneCounter = 0;\n      results = [];\n      for (i = o = 0, ref5 = files.length - 1; 0 <= ref5 ? o <= ref5 : o >= ref5; i = 0 <= ref5 ? ++o : --o) {\n        doneFunction = (function(_this) {\n          return function(file, paramName, fileName) {\n            return function(transformedFile) {\n              formData.append(paramName, transformedFile, fileName);\n              if (++doneCounter === files.length) {\n                return _this.submitRequest(xhr, formData, files);\n              }\n            };\n          };\n        })(this);\n        results.push(this.options.transformFile.call(this, files[i], doneFunction(files[i], this._getParamName(i), files[i].upload.filename)));\n      }\n      return results;\n    };\n\n    Dropzone.prototype.submitRequest = function(xhr, formData, files) {\n      return xhr.send(formData);\n    };\n\n    Dropzone.prototype._finished = function(files, responseText, e) {\n      var file, j, len;\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        file.status = Dropzone.SUCCESS;\n        this.emit(\"success\", file, responseText, e);\n        this.emit(\"complete\", file);\n      }\n      if (this.options.uploadMultiple) {\n        this.emit(\"successmultiple\", files, responseText, e);\n        this.emit(\"completemultiple\", files);\n      }\n      if (this.options.autoProcessQueue) {\n        return this.processQueue();\n      }\n    };\n\n    Dropzone.prototype._errorProcessing = function(files, message, xhr) {\n      var file, j, len;\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        file.status = Dropzone.ERROR;\n        this.emit(\"error\", file, message, xhr);\n        this.emit(\"complete\", file);\n      }\n      if (this.options.uploadMultiple) {\n        this.emit(\"errormultiple\", files, message, xhr);\n        this.emit(\"completemultiple\", files);\n      }\n      if (this.options.autoProcessQueue) {\n        return this.processQueue();\n      }\n    };\n\n    return Dropzone;\n\n  })(Emitter);\n\n  Dropzone.version = \"5.1.1\";\n\n  Dropzone.options = {};\n\n  Dropzone.optionsForElement = function(element) {\n    if (element.getAttribute(\"id\")) {\n      return Dropzone.options[camelize(element.getAttribute(\"id\"))];\n    } else {\n      return void 0;\n    }\n  };\n\n  Dropzone.instances = [];\n\n  Dropzone.forElement = function(element) {\n    if (typeof element === \"string\") {\n      element = document.querySelector(element);\n    }\n    if ((element != null ? element.dropzone : void 0) == null) {\n      throw new Error(\"No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.\");\n    }\n    return element.dropzone;\n  };\n\n  Dropzone.autoDiscover = true;\n\n  Dropzone.discover = function() {\n    var checkElements, dropzone, dropzones, j, len, results;\n    if (document.querySelectorAll) {\n      dropzones = document.querySelectorAll(\".dropzone\");\n    } else {\n      dropzones = [];\n      checkElements = function(elements) {\n        var el, j, len, results;\n        results = [];\n        for (j = 0, len = elements.length; j < len; j++) {\n          el = elements[j];\n          if (/(^| )dropzone($| )/.test(el.className)) {\n            results.push(dropzones.push(el));\n          } else {\n            results.push(void 0);\n          }\n        }\n        return results;\n      };\n      checkElements(document.getElementsByTagName(\"div\"));\n      checkElements(document.getElementsByTagName(\"form\"));\n    }\n    results = [];\n    for (j = 0, len = dropzones.length; j < len; j++) {\n      dropzone = dropzones[j];\n      if (Dropzone.optionsForElement(dropzone) !== false) {\n        results.push(new Dropzone(dropzone));\n      } else {\n        results.push(void 0);\n      }\n    }\n    return results;\n  };\n\n  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\\/12/i];\n\n  Dropzone.isBrowserSupported = function() {\n    var capableBrowser, j, len, ref, regex;\n    capableBrowser = true;\n    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {\n      if (!(\"classList\" in document.createElement(\"a\"))) {\n        capableBrowser = false;\n      } else {\n        ref = Dropzone.blacklistedBrowsers;\n        for (j = 0, len = ref.length; j < len; j++) {\n          regex = ref[j];\n          if (regex.test(navigator.userAgent)) {\n            capableBrowser = false;\n            continue;\n          }\n        }\n      }\n    } else {\n      capableBrowser = false;\n    }\n    return capableBrowser;\n  };\n\n  Dropzone.dataURItoBlob = function(dataURI) {\n    var ab, byteString, i, ia, j, mimeString, ref;\n    byteString = atob(dataURI.split(',')[1]);\n    mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];\n    ab = new ArrayBuffer(byteString.length);\n    ia = new Uint8Array(ab);\n    for (i = j = 0, ref = byteString.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {\n      ia[i] = byteString.charCodeAt(i);\n    }\n    return new Blob([ab], {\n      type: mimeString\n    });\n  };\n\n  without = function(list, rejectedItem) {\n    var item, j, len, results;\n    results = [];\n    for (j = 0, len = list.length; j < len; j++) {\n      item = list[j];\n      if (item !== rejectedItem) {\n        results.push(item);\n      }\n    }\n    return results;\n  };\n\n  camelize = function(str) {\n    return str.replace(/[\\-_](\\w)/g, function(match) {\n      return match.charAt(1).toUpperCase();\n    });\n  };\n\n  Dropzone.createElement = function(string) {\n    var div;\n    div = document.createElement(\"div\");\n    div.innerHTML = string;\n    return div.childNodes[0];\n  };\n\n  Dropzone.elementInside = function(element, container) {\n    if (element === container) {\n      return true;\n    }\n    while (element = element.parentNode) {\n      if (element === container) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  Dropzone.getElement = function(el, name) {\n    var element;\n    if (typeof el === \"string\") {\n      element = document.querySelector(el);\n    } else if (el.nodeType != null) {\n      element = el;\n    }\n    if (element == null) {\n      throw new Error(\"Invalid `\" + name + \"` option provided. Please provide a CSS selector or a plain HTML element.\");\n    }\n    return element;\n  };\n\n  Dropzone.getElements = function(els, name) {\n    var e, el, elements, error1, j, k, len, len1, ref;\n    if (els instanceof Array) {\n      elements = [];\n      try {\n        for (j = 0, len = els.length; j < len; j++) {\n          el = els[j];\n          elements.push(this.getElement(el, name));\n        }\n      } catch (error1) {\n        e = error1;\n        elements = null;\n      }\n    } else if (typeof els === \"string\") {\n      elements = [];\n      ref = document.querySelectorAll(els);\n      for (k = 0, len1 = ref.length; k < len1; k++) {\n        el = ref[k];\n        elements.push(el);\n      }\n    } else if (els.nodeType != null) {\n      elements = [els];\n    }\n    if (!((elements != null) && elements.length)) {\n      throw new Error(\"Invalid `\" + name + \"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.\");\n    }\n    return elements;\n  };\n\n  Dropzone.confirm = function(question, accepted, rejected) {\n    if (window.confirm(question)) {\n      return accepted();\n    } else if (rejected != null) {\n      return rejected();\n    }\n  };\n\n  Dropzone.isValidFile = function(file, acceptedFiles) {\n    var baseMimeType, j, len, mimeType, validType;\n    if (!acceptedFiles) {\n      return true;\n    }\n    acceptedFiles = acceptedFiles.split(\",\");\n    mimeType = file.type;\n    baseMimeType = mimeType.replace(/\\/.*$/, \"\");\n    for (j = 0, len = acceptedFiles.length; j < len; j++) {\n      validType = acceptedFiles[j];\n      validType = validType.trim();\n      if (validType.charAt(0) === \".\") {\n        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {\n          return true;\n        }\n      } else if (/\\/\\*$/.test(validType)) {\n        if (baseMimeType === validType.replace(/\\/.*$/, \"\")) {\n          return true;\n        }\n      } else {\n        if (mimeType === validType) {\n          return true;\n        }\n      }\n    }\n    return false;\n  };\n\n  if (typeof jQuery !== \"undefined\" && jQuery !== null) {\n    jQuery.fn.dropzone = function(options) {\n      return this.each(function() {\n        return new Dropzone(this, options);\n      });\n    };\n  }\n\n  if (typeof module !== \"undefined\" && module !== null) {\n    module.exports = Dropzone;\n  } else {\n    window.Dropzone = Dropzone;\n  }\n\n  Dropzone.ADDED = \"added\";\n\n  Dropzone.QUEUED = \"queued\";\n\n  Dropzone.ACCEPTED = Dropzone.QUEUED;\n\n  Dropzone.UPLOADING = \"uploading\";\n\n  Dropzone.PROCESSING = Dropzone.UPLOADING;\n\n  Dropzone.CANCELED = \"canceled\";\n\n  Dropzone.ERROR = \"error\";\n\n  Dropzone.SUCCESS = \"success\";\n\n\n  /*\n  \n  Bugfix for iOS 6 and 7\n  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios\n  based on the work of https://github.com/stomita/ios-imagefile-megapixel\n   */\n\n  detectVerticalSquash = function(img) {\n    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;\n    iw = img.naturalWidth;\n    ih = img.naturalHeight;\n    canvas = document.createElement(\"canvas\");\n    canvas.width = 1;\n    canvas.height = ih;\n    ctx = canvas.getContext(\"2d\");\n    ctx.drawImage(img, 0, 0);\n    data = ctx.getImageData(1, 0, 1, ih).data;\n    sy = 0;\n    ey = ih;\n    py = ih;\n    while (py > sy) {\n      alpha = data[(py - 1) * 4 + 3];\n      if (alpha === 0) {\n        ey = py;\n      } else {\n        sy = py;\n      }\n      py = (ey + sy) >> 1;\n    }\n    ratio = py / ih;\n    if (ratio === 0) {\n      return 1;\n    } else {\n      return ratio;\n    }\n  };\n\n  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {\n    var vertSquashRatio;\n    vertSquashRatio = detectVerticalSquash(img);\n    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);\n  };\n\n  ExifRestore = (function() {\n    function ExifRestore() {}\n\n    ExifRestore.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\n    ExifRestore.encode64 = function(input) {\n      var chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;\n      output = '';\n      chr1 = void 0;\n      chr2 = void 0;\n      chr3 = '';\n      enc1 = void 0;\n      enc2 = void 0;\n      enc3 = void 0;\n      enc4 = '';\n      i = 0;\n      while (true) {\n        chr1 = input[i++];\n        chr2 = input[i++];\n        chr3 = input[i++];\n        enc1 = chr1 >> 2;\n        enc2 = (chr1 & 3) << 4 | chr2 >> 4;\n        enc3 = (chr2 & 15) << 2 | chr3 >> 6;\n        enc4 = chr3 & 63;\n        if (isNaN(chr2)) {\n          enc3 = enc4 = 64;\n        } else if (isNaN(chr3)) {\n          enc4 = 64;\n        }\n        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);\n        chr1 = chr2 = chr3 = '';\n        enc1 = enc2 = enc3 = enc4 = '';\n        if (!(i < input.length)) {\n          break;\n        }\n      }\n      return output;\n    };\n\n    ExifRestore.restore = function(origFileBase64, resizedFileBase64) {\n      var image, rawImage, segments;\n      if (!origFileBase64.match('data:image/jpeg;base64,')) {\n        return resizedFileBase64;\n      }\n      rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));\n      segments = this.slice2Segments(rawImage);\n      image = this.exifManipulation(resizedFileBase64, segments);\n      return 'data:image/jpeg;base64,' + this.encode64(image);\n    };\n\n    ExifRestore.exifManipulation = function(resizedFileBase64, segments) {\n      var aBuffer, exifArray, newImageArray;\n      exifArray = this.getExifArray(segments);\n      newImageArray = this.insertExif(resizedFileBase64, exifArray);\n      aBuffer = new Uint8Array(newImageArray);\n      return aBuffer;\n    };\n\n    ExifRestore.getExifArray = function(segments) {\n      var seg, x;\n      seg = void 0;\n      x = 0;\n      while (x < segments.length) {\n        seg = segments[x];\n        if (seg[0] === 255 & seg[1] === 225) {\n          return seg;\n        }\n        x++;\n      }\n      return [];\n    };\n\n    ExifRestore.insertExif = function(resizedFileBase64, exifArray) {\n      var array, ato, buf, imageData, mae, separatePoint;\n      imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');\n      buf = this.decode64(imageData);\n      separatePoint = buf.indexOf(255, 3);\n      mae = buf.slice(0, separatePoint);\n      ato = buf.slice(separatePoint);\n      array = mae;\n      array = array.concat(exifArray);\n      array = array.concat(ato);\n      return array;\n    };\n\n    ExifRestore.slice2Segments = function(rawImageArray) {\n      var endPoint, head, length, seg, segments;\n      head = 0;\n      segments = [];\n      while (true) {\n        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {\n          break;\n        }\n        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {\n          head += 2;\n        } else {\n          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];\n          endPoint = head + length + 2;\n          seg = rawImageArray.slice(head, endPoint);\n          segments.push(seg);\n          head = endPoint;\n        }\n        if (head > rawImageArray.length) {\n          break;\n        }\n      }\n      return segments;\n    };\n\n    ExifRestore.decode64 = function(input) {\n      var base64test, buf, chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;\n      output = '';\n      chr1 = void 0;\n      chr2 = void 0;\n      chr3 = '';\n      enc1 = void 0;\n      enc2 = void 0;\n      enc3 = void 0;\n      enc4 = '';\n      i = 0;\n      buf = [];\n      base64test = /[^A-Za-z0-9\\+\\/\\=]/g;\n      if (base64test.exec(input)) {\n        console.warning('There were invalid base64 characters in the input text.\\n' + 'Valid base64 characters are A-Z, a-z, 0-9, \\'+\\', \\'/\\',and \\'=\\'\\n' + 'Expect errors in decoding.');\n      }\n      input = input.replace(/[^A-Za-z0-9\\+\\/\\=]/g, '');\n      while (true) {\n        enc1 = this.KEY_STR.indexOf(input.charAt(i++));\n        enc2 = this.KEY_STR.indexOf(input.charAt(i++));\n        enc3 = this.KEY_STR.indexOf(input.charAt(i++));\n        enc4 = this.KEY_STR.indexOf(input.charAt(i++));\n        chr1 = enc1 << 2 | enc2 >> 4;\n        chr2 = (enc2 & 15) << 4 | enc3 >> 2;\n        chr3 = (enc3 & 3) << 6 | enc4;\n        buf.push(chr1);\n        if (enc3 !== 64) {\n          buf.push(chr2);\n        }\n        if (enc4 !== 64) {\n          buf.push(chr3);\n        }\n        chr1 = chr2 = chr3 = '';\n        enc1 = enc2 = enc3 = enc4 = '';\n        if (!(i < input.length)) {\n          break;\n        }\n      }\n      return buf;\n    };\n\n    return ExifRestore;\n\n  })();\n\n\n  /*\n   * contentloaded.js\n   *\n   * Author: Diego Perini (diego.perini at gmail.com)\n   * Summary: cross-browser wrapper for DOMContentLoaded\n   * Updated: 20101020\n   * License: MIT\n   * Version: 1.2\n   *\n   * URL:\n   * http://javascript.nwbox.com/ContentLoaded/\n   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE\n   */\n\n  contentLoaded = function(win, fn) {\n    var add, doc, done, init, poll, pre, rem, root, top;\n    done = false;\n    top = true;\n    doc = win.document;\n    root = doc.documentElement;\n    add = (doc.addEventListener ? \"addEventListener\" : \"attachEvent\");\n    rem = (doc.addEventListener ? \"removeEventListener\" : \"detachEvent\");\n    pre = (doc.addEventListener ? \"\" : \"on\");\n    init = function(e) {\n      if (e.type === \"readystatechange\" && doc.readyState !== \"complete\") {\n        return;\n      }\n      (e.type === \"load\" ? win : doc)[rem](pre + e.type, init, false);\n      if (!done && (done = true)) {\n        return fn.call(win, e.type || e);\n      }\n    };\n    poll = function() {\n      var e, error1;\n      try {\n        root.doScroll(\"left\");\n      } catch (error1) {\n        e = error1;\n        setTimeout(poll, 50);\n        return;\n      }\n      return init(\"poll\");\n    };\n    if (doc.readyState !== \"complete\") {\n      if (doc.createEventObject && root.doScroll) {\n        try {\n          top = !win.frameElement;\n        } catch (undefined) {}\n        if (top) {\n          poll();\n        }\n      }\n      doc[add](pre + \"DOMContentLoaded\", init, false);\n      doc[add](pre + \"readystatechange\", init, false);\n      return win[add](pre + \"load\", init, false);\n    }\n  };\n\n  Dropzone._autoDiscoverFunction = function() {\n    if (Dropzone.autoDiscover) {\n      return Dropzone.discover();\n    }\n  };\n\n  contentLoaded(window, Dropzone._autoDiscoverFunction);\n\n}).call(this);\n"

/***/ })

/******/ });