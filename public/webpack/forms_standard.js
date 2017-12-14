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
/******/ 	return __webpack_require__(__webpack_require__.s = 735);
/******/ })
/************************************************************************/
/******/ ({

/***/ 38:
/*!********************!*\
  !*** external "$" ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ 5:
/*!*************************************************!*\
  !*** ./node_modules/script-loader/addScript.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),

/***/ 735:
/*!**************************************************************!*\
  !*** multi ./_src/templates/webpack/forms/forms_standard.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_src/templates/webpack/forms/forms_standard.js */736);


/***/ }),

/***/ 736:
/*!********************************************************!*\
  !*** ./_src/templates/webpack/forms/forms_standard.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// EXTERNAL DEPS:
// var $ = require("script-loader!./../../../js/external/jquery.js");
// window.$ = $;
__webpack_require__(/*! script-loader!icheck */ 737); // css in package
__webpack_require__(/*! script-loader!select2 */ 739);
// require('script-loader!jquery-validation'); //no css
__webpack_require__(/*! ./../../../js/external/modified/jquery.comiseo.daterangepicker.js */ 741); // css in package
__webpack_require__(/*! ./../../../js/external/modified/bs_datepicker.js */ 742);
// require('script-loader!php-date-formatter'); //no css
__webpack_require__(/*! script-loader!jquery-datetimepicker */ 743);
__webpack_require__(/*! script-loader!jquery-mask-plugin */ 745);
__webpack_require__(/*! script-loader!velocity-animate */ 747);
//CORE ANTARES
__webpack_require__(/*! ./../../../js/antares_forms.js */ 749);
__webpack_require__(/*! ./../../../js/external/modified/magnific.js */ 751);
__webpack_require__(/*! ./../../../js/components/dropzone/dropzone.js */ 752);

// require("dialog-polyfill/dialog-polyfill.css");
// require("jquery-modal/jquery.modal.css");
// require('./../../js/external/modified/yii_forms.js');
// require("jquery-datetimepicker/jquery.datetimepicker.css");
// require("select2/dist/css/select2.css");
//wyjeabne by luaksh below - trzeba wywalic z forms

/***/ }),

/***/ 737:
/*!********************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/icheck/icheck.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ 5)(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/icheck/icheck.js */ 738))

/***/ }),

/***/ 738:
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/icheck/icheck.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/*!\n * iCheck v1.0.2, http://git.io/arlzeA\n * ===================================\n * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization\n *\n * (c) 2013 Damir Sultanov, http://fronteed.com\n * MIT Licensed\n */\n\n(function($) {\n\n  // Cached vars\n  var _iCheck = 'iCheck',\n    _iCheckHelper = _iCheck + '-helper',\n    _checkbox = 'checkbox',\n    _radio = 'radio',\n    _checked = 'checked',\n    _unchecked = 'un' + _checked,\n    _disabled = 'disabled',\n    _determinate = 'determinate',\n    _indeterminate = 'in' + _determinate,\n    _update = 'update',\n    _type = 'type',\n    _click = 'click',\n    _touch = 'touchbegin.i touchend.i',\n    _add = 'addClass',\n    _remove = 'removeClass',\n    _callback = 'trigger',\n    _label = 'label',\n    _cursor = 'cursor',\n    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);\n\n  // Plugin init\n  $.fn[_iCheck] = function(options, fire) {\n\n    // Walker\n    var handle = 'input[type=\"' + _checkbox + '\"], input[type=\"' + _radio + '\"]',\n      stack = $(),\n      walker = function(object) {\n        object.each(function() {\n          var self = $(this);\n\n          if (self.is(handle)) {\n            stack = stack.add(self);\n          } else {\n            stack = stack.add(self.find(handle));\n          }\n        });\n      };\n\n    // Check if we should operate with some method\n    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(options)) {\n\n      // Normalize method's name\n      options = options.toLowerCase();\n\n      // Find checkboxes and radio buttons\n      walker(this);\n\n      return stack.each(function() {\n        var self = $(this);\n\n        if (options == 'destroy') {\n          tidy(self, 'ifDestroyed');\n        } else {\n          operate(self, true, options);\n        }\n\n        // Fire method's callback\n        if ($.isFunction(fire)) {\n          fire();\n        }\n      });\n\n    // Customization\n    } else if (typeof options == 'object' || !options) {\n\n      // Check if any options were passed\n      var settings = $.extend({\n          checkedClass: _checked,\n          disabledClass: _disabled,\n          indeterminateClass: _indeterminate,\n          labelHover: true\n        }, options),\n\n        selector = settings.handle,\n        hoverClass = settings.hoverClass || 'hover',\n        focusClass = settings.focusClass || 'focus',\n        activeClass = settings.activeClass || 'active',\n        labelHover = !!settings.labelHover,\n        labelHoverClass = settings.labelHoverClass || 'hover',\n\n        // Setup clickable area\n        area = ('' + settings.increaseArea).replace('%', '') | 0;\n\n      // Selector limit\n      if (selector == _checkbox || selector == _radio) {\n        handle = 'input[type=\"' + selector + '\"]';\n      }\n\n      // Clickable area limit\n      if (area < -50) {\n        area = -50;\n      }\n\n      // Walk around the selector\n      walker(this);\n\n      return stack.each(function() {\n        var self = $(this);\n\n        // If already customized\n        tidy(self);\n\n        var node = this,\n          id = node.id,\n\n          // Layer styles\n          offset = -area + '%',\n          size = 100 + (area * 2) + '%',\n          layer = {\n            position: 'absolute',\n            top: offset,\n            left: offset,\n            display: 'block',\n            width: size,\n            height: size,\n            margin: 0,\n            padding: 0,\n            background: '#fff',\n            border: 0,\n            opacity: 0\n          },\n\n          // Choose how to hide input\n          hide = _mobile ? {\n            position: 'absolute',\n            visibility: 'hidden'\n          } : area ? layer : {\n            position: 'absolute',\n            opacity: 0\n          },\n\n          // Get proper class\n          className = node[_type] == _checkbox ? settings.checkboxClass || 'i' + _checkbox : settings.radioClass || 'i' + _radio,\n\n          // Find assigned labels\n          label = $(_label + '[for=\"' + id + '\"]').add(self.closest(_label)),\n\n          // Check ARIA option\n          aria = !!settings.aria,\n\n          // Set ARIA placeholder\n          ariaID = _iCheck + '-' + Math.random().toString(36).substr(2,6),\n\n          // Parent & helper\n          parent = '<div class=\"' + className + '\" ' + (aria ? 'role=\"' + node[_type] + '\" ' : ''),\n          helper;\n\n        // Set ARIA \"labelledby\"\n        if (aria) {\n          label.each(function() {\n            parent += 'aria-labelledby=\"';\n\n            if (this.id) {\n              parent += this.id;\n            } else {\n              this.id = ariaID;\n              parent += ariaID;\n            }\n\n            parent += '\"';\n          });\n        }\n\n        // Wrap input\n        parent = self.wrap(parent + '/>')[_callback]('ifCreated').parent().append(settings.insert);\n\n        // Layer addition\n        helper = $('<ins class=\"' + _iCheckHelper + '\"/>').css(layer).appendTo(parent);\n\n        // Finalize customization\n        self.data(_iCheck, {o: settings, s: self.attr('style')}).css(hide);\n        !!settings.inheritClass && parent[_add](node.className || '');\n        !!settings.inheritID && id && parent.attr('id', _iCheck + '-' + id);\n        parent.css('position') == 'static' && parent.css('position', 'relative');\n        operate(self, true, _update);\n\n        // Label events\n        if (label.length) {\n          label.on(_click + '.i mouseover.i mouseout.i ' + _touch, function(event) {\n            var type = event[_type],\n              item = $(this);\n\n            // Do nothing if input is disabled\n            if (!node[_disabled]) {\n\n              // Click\n              if (type == _click) {\n                if ($(event.target).is('a')) {\n                  return;\n                }\n                operate(self, false, true);\n\n              // Hover state\n              } else if (labelHover) {\n\n                // mouseout|touchend\n                if (/ut|nd/.test(type)) {\n                  parent[_remove](hoverClass);\n                  item[_remove](labelHoverClass);\n                } else {\n                  parent[_add](hoverClass);\n                  item[_add](labelHoverClass);\n                }\n              }\n\n              if (_mobile) {\n                event.stopPropagation();\n              } else {\n                return false;\n              }\n            }\n          });\n        }\n\n        // Input events\n        self.on(_click + '.i focus.i blur.i keyup.i keydown.i keypress.i', function(event) {\n          var type = event[_type],\n            key = event.keyCode;\n\n          // Click\n          if (type == _click) {\n            return false;\n\n          // Keydown\n          } else if (type == 'keydown' && key == 32) {\n            if (!(node[_type] == _radio && node[_checked])) {\n              if (node[_checked]) {\n                off(self, _checked);\n              } else {\n                on(self, _checked);\n              }\n            }\n\n            return false;\n\n          // Keyup\n          } else if (type == 'keyup' && node[_type] == _radio) {\n            !node[_checked] && on(self, _checked);\n\n          // Focus/blur\n          } else if (/us|ur/.test(type)) {\n            parent[type == 'blur' ? _remove : _add](focusClass);\n          }\n        });\n\n        // Helper events\n        helper.on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {\n          var type = event[_type],\n\n            // mousedown|mouseup\n            toggle = /wn|up/.test(type) ? activeClass : hoverClass;\n\n          // Do nothing if input is disabled\n          if (!node[_disabled]) {\n\n            // Click\n            if (type == _click) {\n              operate(self, false, true);\n\n            // Active and hover states\n            } else {\n\n              // State is on\n              if (/wn|er|in/.test(type)) {\n\n                // mousedown|mouseover|touchbegin\n                parent[_add](toggle);\n\n              // State is off\n              } else {\n                parent[_remove](toggle + ' ' + activeClass);\n              }\n\n              // Label hover\n              if (label.length && labelHover && toggle == hoverClass) {\n\n                // mouseout|touchend\n                label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);\n              }\n            }\n\n            if (_mobile) {\n              event.stopPropagation();\n            } else {\n              return false;\n            }\n          }\n        });\n      });\n    } else {\n      return this;\n    }\n  };\n\n  // Do something with inputs\n  function operate(input, direct, method) {\n    var node = input[0],\n      state = /er/.test(method) ? _indeterminate : /bl/.test(method) ? _disabled : _checked,\n      active = method == _update ? {\n        checked: node[_checked],\n        disabled: node[_disabled],\n        indeterminate: input.attr(_indeterminate) == 'true' || input.attr(_determinate) == 'false'\n      } : node[state];\n\n    // Check, disable or indeterminate\n    if (/^(ch|di|in)/.test(method) && !active) {\n      on(input, state);\n\n    // Uncheck, enable or determinate\n    } else if (/^(un|en|de)/.test(method) && active) {\n      off(input, state);\n\n    // Update\n    } else if (method == _update) {\n\n      // Handle states\n      for (var each in active) {\n        if (active[each]) {\n          on(input, each, true);\n        } else {\n          off(input, each, true);\n        }\n      }\n\n    } else if (!direct || method == 'toggle') {\n\n      // Helper or label was clicked\n      if (!direct) {\n        input[_callback]('ifClicked');\n      }\n\n      // Toggle checked state\n      if (active) {\n        if (node[_type] !== _radio) {\n          off(input, state);\n        }\n      } else {\n        on(input, state);\n      }\n    }\n  }\n\n  // Add checked, disabled or indeterminate state\n  function on(input, state, keep) {\n    var node = input[0],\n      parent = input.parent(),\n      checked = state == _checked,\n      indeterminate = state == _indeterminate,\n      disabled = state == _disabled,\n      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',\n      regular = option(input, callback + capitalize(node[_type])),\n      specific = option(input, state + capitalize(node[_type]));\n\n    // Prevent unnecessary actions\n    if (node[state] !== true) {\n\n      // Toggle assigned radio buttons\n      if (!keep && state == _checked && node[_type] == _radio && node.name) {\n        var form = input.closest('form'),\n          inputs = 'input[name=\"' + node.name + '\"]';\n\n        inputs = form.length ? form.find(inputs) : $(inputs);\n\n        inputs.each(function() {\n          if (this !== node && $(this).data(_iCheck)) {\n            off($(this), state);\n          }\n        });\n      }\n\n      // Indeterminate state\n      if (indeterminate) {\n\n        // Add indeterminate state\n        node[state] = true;\n\n        // Remove checked state\n        if (node[_checked]) {\n          off(input, _checked, 'force');\n        }\n\n      // Checked or disabled state\n      } else {\n\n        // Add checked or disabled state\n        if (!keep) {\n          node[state] = true;\n        }\n\n        // Remove indeterminate state\n        if (checked && node[_indeterminate]) {\n          off(input, _indeterminate, false);\n        }\n      }\n\n      // Trigger callbacks\n      callbacks(input, checked, state, keep);\n    }\n\n    // Add proper cursor\n    if (node[_disabled] && !!option(input, _cursor, true)) {\n      parent.find('.' + _iCheckHelper).css(_cursor, 'default');\n    }\n\n    // Add state class\n    parent[_add](specific || option(input, state) || '');\n\n    // Set ARIA attribute\n    if (!!parent.attr('role') && !indeterminate) {\n      parent.attr('aria-' + (disabled ? _disabled : _checked), 'true');\n    }\n\n    // Remove regular state class\n    parent[_remove](regular || option(input, callback) || '');\n  }\n\n  // Remove checked, disabled or indeterminate state\n  function off(input, state, keep) {\n    var node = input[0],\n      parent = input.parent(),\n      checked = state == _checked,\n      indeterminate = state == _indeterminate,\n      disabled = state == _disabled,\n      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',\n      regular = option(input, callback + capitalize(node[_type])),\n      specific = option(input, state + capitalize(node[_type]));\n\n    // Prevent unnecessary actions\n    if (node[state] !== false) {\n\n      // Toggle state\n      if (indeterminate || !keep || keep == 'force') {\n        node[state] = false;\n      }\n\n      // Trigger callbacks\n      callbacks(input, checked, callback, keep);\n    }\n\n    // Add proper cursor\n    if (!node[_disabled] && !!option(input, _cursor, true)) {\n      parent.find('.' + _iCheckHelper).css(_cursor, 'pointer');\n    }\n\n    // Remove state class\n    parent[_remove](specific || option(input, state) || '');\n\n    // Set ARIA attribute\n    if (!!parent.attr('role') && !indeterminate) {\n      parent.attr('aria-' + (disabled ? _disabled : _checked), 'false');\n    }\n\n    // Add regular state class\n    parent[_add](regular || option(input, callback) || '');\n  }\n\n  // Remove all traces\n  function tidy(input, callback) {\n    if (input.data(_iCheck)) {\n\n      // Remove everything except input\n      input.parent().html(input.attr('style', input.data(_iCheck).s || ''));\n\n      // Callback\n      if (callback) {\n        input[_callback](callback);\n      }\n\n      // Unbind events\n      input.off('.i').unwrap();\n      $(_label + '[for=\"' + input[0].id + '\"]').add(input.closest(_label)).off('.i');\n    }\n  }\n\n  // Get some option\n  function option(input, state, regular) {\n    if (input.data(_iCheck)) {\n      return input.data(_iCheck).o[state + (regular ? '' : 'Class')];\n    }\n  }\n\n  // Capitalize some string\n  function capitalize(string) {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n  }\n\n  // Executable handlers\n  function callbacks(input, checked, callback, keep) {\n    if (!keep) {\n      if (checked) {\n        input[_callback]('ifToggled');\n      }\n\n      input[_callback]('ifChanged')[_callback]('if' + capitalize(callback));\n    }\n  }\n})(window.jQuery || window.Zepto);\n"

/***/ }),

/***/ 739:
/*!******************************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/select2/dist/js/select2.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ 5)(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/select2/dist/js/select2.js */ 740))

/***/ }),

/***/ 740:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/select2/dist/js/select2.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Select2 4.0.4\r\n * https://select2.github.io\r\n *\r\n * Released under the MIT license\r\n * https://github.com/select2/select2/blob/master/LICENSE.md\r\n */\r\n(function (factory) {\r\n  if (typeof define === 'function' && define.amd) {\r\n    // AMD. Register as an anonymous module.\r\n    define(['jquery'], factory);\r\n  } else if (typeof module === 'object' && module.exports) {\r\n    // Node/CommonJS\r\n    module.exports = function (root, jQuery) {\r\n      if (jQuery === undefined) {\r\n        // require('jQuery') returns a factory that requires window to\r\n        // build a jQuery instance, we normalize how we use modules\r\n        // that require this pattern but the window provided is a noop\r\n        // if it's defined (how jquery works)\r\n        if (typeof window !== 'undefined') {\r\n          jQuery = require('jquery');\r\n        }\r\n        else {\r\n          jQuery = require('jquery')(root);\r\n        }\r\n      }\r\n      factory(jQuery);\r\n      return jQuery;\r\n    };\r\n  } else {\r\n    // Browser globals\r\n    factory(jQuery);\r\n  }\r\n} (function (jQuery) {\r\n  // This is needed so we can catch the AMD loader configuration and use it\r\n  // The inner file should be wrapped (by `banner.start.js`) in a function that\r\n  // returns the AMD loader references.\r\n  var S2 =(function () {\r\n  // Restore the Select2 AMD loader so it can be used\r\n  // Needed mostly in the language files, where the loader is not inserted\r\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {\r\n    var S2 = jQuery.fn.select2.amd;\r\n  }\r\nvar S2;(function () { if (!S2 || !S2.requirejs) {\r\nif (!S2) { S2 = {}; } else { require = S2; }\r\n/**\r\n * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.\r\n * Released under MIT license, http://github.com/requirejs/almond/LICENSE\r\n */\r\n//Going sloppy to avoid 'use strict' string cost, but strict practices should\r\n//be followed.\r\n/*global setTimeout: false */\r\n\r\nvar requirejs, require, define;\r\n(function (undef) {\r\n    var main, req, makeMap, handlers,\r\n        defined = {},\r\n        waiting = {},\r\n        config = {},\r\n        defining = {},\r\n        hasOwn = Object.prototype.hasOwnProperty,\r\n        aps = [].slice,\r\n        jsSuffixRegExp = /\\.js$/;\r\n\r\n    function hasProp(obj, prop) {\r\n        return hasOwn.call(obj, prop);\r\n    }\r\n\r\n    /**\r\n     * Given a relative module name, like ./something, normalize it to\r\n     * a real name that can be mapped to a path.\r\n     * @param {String} name the relative name\r\n     * @param {String} baseName a real name that the name arg is relative\r\n     * to.\r\n     * @returns {String} normalized name\r\n     */\r\n    function normalize(name, baseName) {\r\n        var nameParts, nameSegment, mapValue, foundMap, lastIndex,\r\n            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,\r\n            baseParts = baseName && baseName.split(\"/\"),\r\n            map = config.map,\r\n            starMap = (map && map['*']) || {};\r\n\r\n        //Adjust any relative paths.\r\n        if (name) {\r\n            name = name.split('/');\r\n            lastIndex = name.length - 1;\r\n\r\n            // If wanting node ID compatibility, strip .js from end\r\n            // of IDs. Have to do this here, and not in nameToUrl\r\n            // because node allows either .js or non .js to map\r\n            // to same file.\r\n            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {\r\n                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');\r\n            }\r\n\r\n            // Starts with a '.' so need the baseName\r\n            if (name[0].charAt(0) === '.' && baseParts) {\r\n                //Convert baseName to array, and lop off the last part,\r\n                //so that . matches that 'directory' and not name of the baseName's\r\n                //module. For instance, baseName of 'one/two/three', maps to\r\n                //'one/two/three.js', but we want the directory, 'one/two' for\r\n                //this normalization.\r\n                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);\r\n                name = normalizedBaseParts.concat(name);\r\n            }\r\n\r\n            //start trimDots\r\n            for (i = 0; i < name.length; i++) {\r\n                part = name[i];\r\n                if (part === '.') {\r\n                    name.splice(i, 1);\r\n                    i -= 1;\r\n                } else if (part === '..') {\r\n                    // If at the start, or previous value is still ..,\r\n                    // keep them so that when converted to a path it may\r\n                    // still work when converted to a path, even though\r\n                    // as an ID it is less than ideal. In larger point\r\n                    // releases, may be better to just kick out an error.\r\n                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {\r\n                        continue;\r\n                    } else if (i > 0) {\r\n                        name.splice(i - 1, 2);\r\n                        i -= 2;\r\n                    }\r\n                }\r\n            }\r\n            //end trimDots\r\n\r\n            name = name.join('/');\r\n        }\r\n\r\n        //Apply map config if available.\r\n        if ((baseParts || starMap) && map) {\r\n            nameParts = name.split('/');\r\n\r\n            for (i = nameParts.length; i > 0; i -= 1) {\r\n                nameSegment = nameParts.slice(0, i).join(\"/\");\r\n\r\n                if (baseParts) {\r\n                    //Find the longest baseName segment match in the config.\r\n                    //So, do joins on the biggest to smallest lengths of baseParts.\r\n                    for (j = baseParts.length; j > 0; j -= 1) {\r\n                        mapValue = map[baseParts.slice(0, j).join('/')];\r\n\r\n                        //baseName segment has  config, find if it has one for\r\n                        //this name.\r\n                        if (mapValue) {\r\n                            mapValue = mapValue[nameSegment];\r\n                            if (mapValue) {\r\n                                //Match, update name to the new value.\r\n                                foundMap = mapValue;\r\n                                foundI = i;\r\n                                break;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n\r\n                if (foundMap) {\r\n                    break;\r\n                }\r\n\r\n                //Check for a star map match, but just hold on to it,\r\n                //if there is a shorter segment match later in a matching\r\n                //config, then favor over this star map.\r\n                if (!foundStarMap && starMap && starMap[nameSegment]) {\r\n                    foundStarMap = starMap[nameSegment];\r\n                    starI = i;\r\n                }\r\n            }\r\n\r\n            if (!foundMap && foundStarMap) {\r\n                foundMap = foundStarMap;\r\n                foundI = starI;\r\n            }\r\n\r\n            if (foundMap) {\r\n                nameParts.splice(0, foundI, foundMap);\r\n                name = nameParts.join('/');\r\n            }\r\n        }\r\n\r\n        return name;\r\n    }\r\n\r\n    function makeRequire(relName, forceSync) {\r\n        return function () {\r\n            //A version of a require function that passes a moduleName\r\n            //value for items that may need to\r\n            //look up paths relative to the moduleName\r\n            var args = aps.call(arguments, 0);\r\n\r\n            //If first arg is not require('string'), and there is only\r\n            //one arg, it is the array form without a callback. Insert\r\n            //a null so that the following concat is correct.\r\n            if (typeof args[0] !== 'string' && args.length === 1) {\r\n                args.push(null);\r\n            }\r\n            return req.apply(undef, args.concat([relName, forceSync]));\r\n        };\r\n    }\r\n\r\n    function makeNormalize(relName) {\r\n        return function (name) {\r\n            return normalize(name, relName);\r\n        };\r\n    }\r\n\r\n    function makeLoad(depName) {\r\n        return function (value) {\r\n            defined[depName] = value;\r\n        };\r\n    }\r\n\r\n    function callDep(name) {\r\n        if (hasProp(waiting, name)) {\r\n            var args = waiting[name];\r\n            delete waiting[name];\r\n            defining[name] = true;\r\n            main.apply(undef, args);\r\n        }\r\n\r\n        if (!hasProp(defined, name) && !hasProp(defining, name)) {\r\n            throw new Error('No ' + name);\r\n        }\r\n        return defined[name];\r\n    }\r\n\r\n    //Turns a plugin!resource to [plugin, resource]\r\n    //with the plugin being undefined if the name\r\n    //did not have a plugin prefix.\r\n    function splitPrefix(name) {\r\n        var prefix,\r\n            index = name ? name.indexOf('!') : -1;\r\n        if (index > -1) {\r\n            prefix = name.substring(0, index);\r\n            name = name.substring(index + 1, name.length);\r\n        }\r\n        return [prefix, name];\r\n    }\r\n\r\n    //Creates a parts array for a relName where first part is plugin ID,\r\n    //second part is resource ID. Assumes relName has already been normalized.\r\n    function makeRelParts(relName) {\r\n        return relName ? splitPrefix(relName) : [];\r\n    }\r\n\r\n    /**\r\n     * Makes a name map, normalizing the name, and using a plugin\r\n     * for normalization if necessary. Grabs a ref to plugin\r\n     * too, as an optimization.\r\n     */\r\n    makeMap = function (name, relParts) {\r\n        var plugin,\r\n            parts = splitPrefix(name),\r\n            prefix = parts[0],\r\n            relResourceName = relParts[1];\r\n\r\n        name = parts[1];\r\n\r\n        if (prefix) {\r\n            prefix = normalize(prefix, relResourceName);\r\n            plugin = callDep(prefix);\r\n        }\r\n\r\n        //Normalize according\r\n        if (prefix) {\r\n            if (plugin && plugin.normalize) {\r\n                name = plugin.normalize(name, makeNormalize(relResourceName));\r\n            } else {\r\n                name = normalize(name, relResourceName);\r\n            }\r\n        } else {\r\n            name = normalize(name, relResourceName);\r\n            parts = splitPrefix(name);\r\n            prefix = parts[0];\r\n            name = parts[1];\r\n            if (prefix) {\r\n                plugin = callDep(prefix);\r\n            }\r\n        }\r\n\r\n        //Using ridiculous property names for space reasons\r\n        return {\r\n            f: prefix ? prefix + '!' + name : name, //fullName\r\n            n: name,\r\n            pr: prefix,\r\n            p: plugin\r\n        };\r\n    };\r\n\r\n    function makeConfig(name) {\r\n        return function () {\r\n            return (config && config.config && config.config[name]) || {};\r\n        };\r\n    }\r\n\r\n    handlers = {\r\n        require: function (name) {\r\n            return makeRequire(name);\r\n        },\r\n        exports: function (name) {\r\n            var e = defined[name];\r\n            if (typeof e !== 'undefined') {\r\n                return e;\r\n            } else {\r\n                return (defined[name] = {});\r\n            }\r\n        },\r\n        module: function (name) {\r\n            return {\r\n                id: name,\r\n                uri: '',\r\n                exports: defined[name],\r\n                config: makeConfig(name)\r\n            };\r\n        }\r\n    };\r\n\r\n    main = function (name, deps, callback, relName) {\r\n        var cjsModule, depName, ret, map, i, relParts,\r\n            args = [],\r\n            callbackType = typeof callback,\r\n            usingExports;\r\n\r\n        //Use name if no relName\r\n        relName = relName || name;\r\n        relParts = makeRelParts(relName);\r\n\r\n        //Call the callback to define the module, if necessary.\r\n        if (callbackType === 'undefined' || callbackType === 'function') {\r\n            //Pull out the defined dependencies and pass the ordered\r\n            //values to the callback.\r\n            //Default to [require, exports, module] if no deps\r\n            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;\r\n            for (i = 0; i < deps.length; i += 1) {\r\n                map = makeMap(deps[i], relParts);\r\n                depName = map.f;\r\n\r\n                //Fast path CommonJS standard dependencies.\r\n                if (depName === \"require\") {\r\n                    args[i] = handlers.require(name);\r\n                } else if (depName === \"exports\") {\r\n                    //CommonJS module spec 1.1\r\n                    args[i] = handlers.exports(name);\r\n                    usingExports = true;\r\n                } else if (depName === \"module\") {\r\n                    //CommonJS module spec 1.1\r\n                    cjsModule = args[i] = handlers.module(name);\r\n                } else if (hasProp(defined, depName) ||\r\n                           hasProp(waiting, depName) ||\r\n                           hasProp(defining, depName)) {\r\n                    args[i] = callDep(depName);\r\n                } else if (map.p) {\r\n                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});\r\n                    args[i] = defined[depName];\r\n                } else {\r\n                    throw new Error(name + ' missing ' + depName);\r\n                }\r\n            }\r\n\r\n            ret = callback ? callback.apply(defined[name], args) : undefined;\r\n\r\n            if (name) {\r\n                //If setting exports via \"module\" is in play,\r\n                //favor that over return value and exports. After that,\r\n                //favor a non-undefined return value over exports use.\r\n                if (cjsModule && cjsModule.exports !== undef &&\r\n                        cjsModule.exports !== defined[name]) {\r\n                    defined[name] = cjsModule.exports;\r\n                } else if (ret !== undef || !usingExports) {\r\n                    //Use the return value from the function.\r\n                    defined[name] = ret;\r\n                }\r\n            }\r\n        } else if (name) {\r\n            //May just be an object definition for the module. Only\r\n            //worry about defining if have a module name.\r\n            defined[name] = callback;\r\n        }\r\n    };\r\n\r\n    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {\r\n        if (typeof deps === \"string\") {\r\n            if (handlers[deps]) {\r\n                //callback in this case is really relName\r\n                return handlers[deps](callback);\r\n            }\r\n            //Just return the module wanted. In this scenario, the\r\n            //deps arg is the module name, and second arg (if passed)\r\n            //is just the relName.\r\n            //Normalize module name, if it contains . or ..\r\n            return callDep(makeMap(deps, makeRelParts(callback)).f);\r\n        } else if (!deps.splice) {\r\n            //deps is a config object, not an array.\r\n            config = deps;\r\n            if (config.deps) {\r\n                req(config.deps, config.callback);\r\n            }\r\n            if (!callback) {\r\n                return;\r\n            }\r\n\r\n            if (callback.splice) {\r\n                //callback is an array, which means it is a dependency list.\r\n                //Adjust args if there are dependencies\r\n                deps = callback;\r\n                callback = relName;\r\n                relName = null;\r\n            } else {\r\n                deps = undef;\r\n            }\r\n        }\r\n\r\n        //Support require(['a'])\r\n        callback = callback || function () {};\r\n\r\n        //If relName is a function, it is an errback handler,\r\n        //so remove it.\r\n        if (typeof relName === 'function') {\r\n            relName = forceSync;\r\n            forceSync = alt;\r\n        }\r\n\r\n        //Simulate async callback;\r\n        if (forceSync) {\r\n            main(undef, deps, callback, relName);\r\n        } else {\r\n            //Using a non-zero value because of concern for what old browsers\r\n            //do, and latest browsers \"upgrade\" to 4 if lower value is used:\r\n            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:\r\n            //If want a value immediately, use require('id') instead -- something\r\n            //that works in almond on the global level, but not guaranteed and\r\n            //unlikely to work in other AMD implementations.\r\n            setTimeout(function () {\r\n                main(undef, deps, callback, relName);\r\n            }, 4);\r\n        }\r\n\r\n        return req;\r\n    };\r\n\r\n    /**\r\n     * Just drops the config on the floor, but returns req in case\r\n     * the config return value is used.\r\n     */\r\n    req.config = function (cfg) {\r\n        return req(cfg);\r\n    };\r\n\r\n    /**\r\n     * Expose module registry for debugging and tooling\r\n     */\r\n    requirejs._defined = defined;\r\n\r\n    define = function (name, deps, callback) {\r\n        if (typeof name !== 'string') {\r\n            throw new Error('See almond README: incorrect module build, no module name');\r\n        }\r\n\r\n        //This module may not have dependencies\r\n        if (!deps.splice) {\r\n            //deps is not an array, so probably means\r\n            //an object literal or factory function for\r\n            //the value. Adjust args.\r\n            callback = deps;\r\n            deps = [];\r\n        }\r\n\r\n        if (!hasProp(defined, name) && !hasProp(waiting, name)) {\r\n            waiting[name] = [name, deps, callback];\r\n        }\r\n    };\r\n\r\n    define.amd = {\r\n        jQuery: true\r\n    };\r\n}());\r\n\r\nS2.requirejs = requirejs;S2.require = require;S2.define = define;\r\n}\r\n}());\r\nS2.define(\"almond\", function(){});\r\n\r\n/* global jQuery:false, $:false */\r\nS2.define('jquery',[],function () {\r\n  var _$ = jQuery || $;\r\n\r\n  if (_$ == null && console && console.error) {\r\n    console.error(\r\n      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +\r\n      'found. Make sure that you are including jQuery before Select2 on your ' +\r\n      'web page.'\r\n    );\r\n  }\r\n\r\n  return _$;\r\n});\r\n\r\nS2.define('select2/utils',[\r\n  'jquery'\r\n], function ($) {\r\n  var Utils = {};\r\n\r\n  Utils.Extend = function (ChildClass, SuperClass) {\r\n    var __hasProp = {}.hasOwnProperty;\r\n\r\n    function BaseConstructor () {\r\n      this.constructor = ChildClass;\r\n    }\r\n\r\n    for (var key in SuperClass) {\r\n      if (__hasProp.call(SuperClass, key)) {\r\n        ChildClass[key] = SuperClass[key];\r\n      }\r\n    }\r\n\r\n    BaseConstructor.prototype = SuperClass.prototype;\r\n    ChildClass.prototype = new BaseConstructor();\r\n    ChildClass.__super__ = SuperClass.prototype;\r\n\r\n    return ChildClass;\r\n  };\r\n\r\n  function getMethods (theClass) {\r\n    var proto = theClass.prototype;\r\n\r\n    var methods = [];\r\n\r\n    for (var methodName in proto) {\r\n      var m = proto[methodName];\r\n\r\n      if (typeof m !== 'function') {\r\n        continue;\r\n      }\r\n\r\n      if (methodName === 'constructor') {\r\n        continue;\r\n      }\r\n\r\n      methods.push(methodName);\r\n    }\r\n\r\n    return methods;\r\n  }\r\n\r\n  Utils.Decorate = function (SuperClass, DecoratorClass) {\r\n    var decoratedMethods = getMethods(DecoratorClass);\r\n    var superMethods = getMethods(SuperClass);\r\n\r\n    function DecoratedClass () {\r\n      var unshift = Array.prototype.unshift;\r\n\r\n      var argCount = DecoratorClass.prototype.constructor.length;\r\n\r\n      var calledConstructor = SuperClass.prototype.constructor;\r\n\r\n      if (argCount > 0) {\r\n        unshift.call(arguments, SuperClass.prototype.constructor);\r\n\r\n        calledConstructor = DecoratorClass.prototype.constructor;\r\n      }\r\n\r\n      calledConstructor.apply(this, arguments);\r\n    }\r\n\r\n    DecoratorClass.displayName = SuperClass.displayName;\r\n\r\n    function ctr () {\r\n      this.constructor = DecoratedClass;\r\n    }\r\n\r\n    DecoratedClass.prototype = new ctr();\r\n\r\n    for (var m = 0; m < superMethods.length; m++) {\r\n        var superMethod = superMethods[m];\r\n\r\n        DecoratedClass.prototype[superMethod] =\r\n          SuperClass.prototype[superMethod];\r\n    }\r\n\r\n    var calledMethod = function (methodName) {\r\n      // Stub out the original method if it's not decorating an actual method\r\n      var originalMethod = function () {};\r\n\r\n      if (methodName in DecoratedClass.prototype) {\r\n        originalMethod = DecoratedClass.prototype[methodName];\r\n      }\r\n\r\n      var decoratedMethod = DecoratorClass.prototype[methodName];\r\n\r\n      return function () {\r\n        var unshift = Array.prototype.unshift;\r\n\r\n        unshift.call(arguments, originalMethod);\r\n\r\n        return decoratedMethod.apply(this, arguments);\r\n      };\r\n    };\r\n\r\n    for (var d = 0; d < decoratedMethods.length; d++) {\r\n      var decoratedMethod = decoratedMethods[d];\r\n\r\n      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);\r\n    }\r\n\r\n    return DecoratedClass;\r\n  };\r\n\r\n  var Observable = function () {\r\n    this.listeners = {};\r\n  };\r\n\r\n  Observable.prototype.on = function (event, callback) {\r\n    this.listeners = this.listeners || {};\r\n\r\n    if (event in this.listeners) {\r\n      this.listeners[event].push(callback);\r\n    } else {\r\n      this.listeners[event] = [callback];\r\n    }\r\n  };\r\n\r\n  Observable.prototype.trigger = function (event) {\r\n    var slice = Array.prototype.slice;\r\n    var params = slice.call(arguments, 1);\r\n\r\n    this.listeners = this.listeners || {};\r\n\r\n    // Params should always come in as an array\r\n    if (params == null) {\r\n      params = [];\r\n    }\r\n\r\n    // If there are no arguments to the event, use a temporary object\r\n    if (params.length === 0) {\r\n      params.push({});\r\n    }\r\n\r\n    // Set the `_type` of the first object to the event\r\n    params[0]._type = event;\r\n\r\n    if (event in this.listeners) {\r\n      this.invoke(this.listeners[event], slice.call(arguments, 1));\r\n    }\r\n\r\n    if ('*' in this.listeners) {\r\n      this.invoke(this.listeners['*'], arguments);\r\n    }\r\n  };\r\n\r\n  Observable.prototype.invoke = function (listeners, params) {\r\n    for (var i = 0, len = listeners.length; i < len; i++) {\r\n      listeners[i].apply(this, params);\r\n    }\r\n  };\r\n\r\n  Utils.Observable = Observable;\r\n\r\n  Utils.generateChars = function (length) {\r\n    var chars = '';\r\n\r\n    for (var i = 0; i < length; i++) {\r\n      var randomChar = Math.floor(Math.random() * 36);\r\n      chars += randomChar.toString(36);\r\n    }\r\n\r\n    return chars;\r\n  };\r\n\r\n  Utils.bind = function (func, context) {\r\n    return function () {\r\n      func.apply(context, arguments);\r\n    };\r\n  };\r\n\r\n  Utils._convertData = function (data) {\r\n    for (var originalKey in data) {\r\n      var keys = originalKey.split('-');\r\n\r\n      var dataLevel = data;\r\n\r\n      if (keys.length === 1) {\r\n        continue;\r\n      }\r\n\r\n      for (var k = 0; k < keys.length; k++) {\r\n        var key = keys[k];\r\n\r\n        // Lowercase the first letter\r\n        // By default, dash-separated becomes camelCase\r\n        key = key.substring(0, 1).toLowerCase() + key.substring(1);\r\n\r\n        if (!(key in dataLevel)) {\r\n          dataLevel[key] = {};\r\n        }\r\n\r\n        if (k == keys.length - 1) {\r\n          dataLevel[key] = data[originalKey];\r\n        }\r\n\r\n        dataLevel = dataLevel[key];\r\n      }\r\n\r\n      delete data[originalKey];\r\n    }\r\n\r\n    return data;\r\n  };\r\n\r\n  Utils.hasScroll = function (index, el) {\r\n    // Adapted from the function created by @ShadowScripter\r\n    // and adapted by @BillBarry on the Stack Exchange Code Review website.\r\n    // The original code can be found at\r\n    // http://codereview.stackexchange.com/q/13338\r\n    // and was designed to be used with the Sizzle selector engine.\r\n\r\n    var $el = $(el);\r\n    var overflowX = el.style.overflowX;\r\n    var overflowY = el.style.overflowY;\r\n\r\n    //Check both x and y declarations\r\n    if (overflowX === overflowY &&\r\n        (overflowY === 'hidden' || overflowY === 'visible')) {\r\n      return false;\r\n    }\r\n\r\n    if (overflowX === 'scroll' || overflowY === 'scroll') {\r\n      return true;\r\n    }\r\n\r\n    return ($el.innerHeight() < el.scrollHeight ||\r\n      $el.innerWidth() < el.scrollWidth);\r\n  };\r\n\r\n  Utils.escapeMarkup = function (markup) {\r\n    var replaceMap = {\r\n      '\\\\': '&#92;',\r\n      '&': '&amp;',\r\n      '<': '&lt;',\r\n      '>': '&gt;',\r\n      '\"': '&quot;',\r\n      '\\'': '&#39;',\r\n      '/': '&#47;'\r\n    };\r\n\r\n    // Do not try to escape the markup if it's not a string\r\n    if (typeof markup !== 'string') {\r\n      return markup;\r\n    }\r\n\r\n    return String(markup).replace(/[&<>\"'\\/\\\\]/g, function (match) {\r\n      return replaceMap[match];\r\n    });\r\n  };\r\n\r\n  // Append an array of jQuery nodes to a given element.\r\n  Utils.appendMany = function ($element, $nodes) {\r\n    // jQuery 1.7.x does not support $.fn.append() with an array\r\n    // Fall back to a jQuery object collection using $.fn.add()\r\n    if ($.fn.jquery.substr(0, 3) === '1.7') {\r\n      var $jqNodes = $();\r\n\r\n      $.map($nodes, function (node) {\r\n        $jqNodes = $jqNodes.add(node);\r\n      });\r\n\r\n      $nodes = $jqNodes;\r\n    }\r\n\r\n    $element.append($nodes);\r\n  };\r\n\r\n  return Utils;\r\n});\r\n\r\nS2.define('select2/results',[\r\n  'jquery',\r\n  './utils'\r\n], function ($, Utils) {\r\n  function Results ($element, options, dataAdapter) {\r\n    this.$element = $element;\r\n    this.data = dataAdapter;\r\n    this.options = options;\r\n\r\n    Results.__super__.constructor.call(this);\r\n  }\r\n\r\n  Utils.Extend(Results, Utils.Observable);\r\n\r\n  Results.prototype.render = function () {\r\n    var $results = $(\r\n      '<ul class=\"select2-results__options\" role=\"tree\"></ul>'\r\n    );\r\n\r\n    if (this.options.get('multiple')) {\r\n      $results.attr('aria-multiselectable', 'true');\r\n    }\r\n\r\n    this.$results = $results;\r\n\r\n    return $results;\r\n  };\r\n\r\n  Results.prototype.clear = function () {\r\n    this.$results.empty();\r\n  };\r\n\r\n  Results.prototype.displayMessage = function (params) {\r\n    var escapeMarkup = this.options.get('escapeMarkup');\r\n\r\n    this.clear();\r\n    this.hideLoading();\r\n\r\n    var $message = $(\r\n      '<li role=\"treeitem\" aria-live=\"assertive\"' +\r\n      ' class=\"select2-results__option\"></li>'\r\n    );\r\n\r\n    var message = this.options.get('translations').get(params.message);\r\n\r\n    $message.append(\r\n      escapeMarkup(\r\n        message(params.args)\r\n      )\r\n    );\r\n\r\n    $message[0].className += ' select2-results__message';\r\n\r\n    this.$results.append($message);\r\n  };\r\n\r\n  Results.prototype.hideMessages = function () {\r\n    this.$results.find('.select2-results__message').remove();\r\n  };\r\n\r\n  Results.prototype.append = function (data) {\r\n    this.hideLoading();\r\n\r\n    var $options = [];\r\n\r\n    if (data.results == null || data.results.length === 0) {\r\n      if (this.$results.children().length === 0) {\r\n        this.trigger('results:message', {\r\n          message: 'noResults'\r\n        });\r\n      }\r\n\r\n      return;\r\n    }\r\n\r\n    data.results = this.sort(data.results);\r\n\r\n    for (var d = 0; d < data.results.length; d++) {\r\n      var item = data.results[d];\r\n\r\n      var $option = this.option(item);\r\n\r\n      $options.push($option);\r\n    }\r\n\r\n    this.$results.append($options);\r\n  };\r\n\r\n  Results.prototype.position = function ($results, $dropdown) {\r\n    var $resultsContainer = $dropdown.find('.select2-results');\r\n    $resultsContainer.append($results);\r\n  };\r\n\r\n  Results.prototype.sort = function (data) {\r\n    var sorter = this.options.get('sorter');\r\n\r\n    return sorter(data);\r\n  };\r\n\r\n  Results.prototype.highlightFirstItem = function () {\r\n    var $options = this.$results\r\n      .find('.select2-results__option[aria-selected]');\r\n\r\n    var $selected = $options.filter('[aria-selected=true]');\r\n\r\n    // Check if there are any selected options\r\n    if ($selected.length > 0) {\r\n      // If there are selected options, highlight the first\r\n      $selected.first().trigger('mouseenter');\r\n    } else {\r\n      // If there are no selected options, highlight the first option\r\n      // in the dropdown\r\n      $options.first().trigger('mouseenter');\r\n    }\r\n\r\n    this.ensureHighlightVisible();\r\n  };\r\n\r\n  Results.prototype.setClasses = function () {\r\n    var self = this;\r\n\r\n    this.data.current(function (selected) {\r\n      var selectedIds = $.map(selected, function (s) {\r\n        return s.id.toString();\r\n      });\r\n\r\n      var $options = self.$results\r\n        .find('.select2-results__option[aria-selected]');\r\n\r\n      $options.each(function () {\r\n        var $option = $(this);\r\n\r\n        var item = $.data(this, 'data');\r\n\r\n        // id needs to be converted to a string when comparing\r\n        var id = '' + item.id;\r\n\r\n        if ((item.element != null && item.element.selected) ||\r\n            (item.element == null && $.inArray(id, selectedIds) > -1)) {\r\n          $option.attr('aria-selected', 'true');\r\n        } else {\r\n          $option.attr('aria-selected', 'false');\r\n        }\r\n      });\r\n\r\n    });\r\n  };\r\n\r\n  Results.prototype.showLoading = function (params) {\r\n    this.hideLoading();\r\n\r\n    var loadingMore = this.options.get('translations').get('searching');\r\n\r\n    var loading = {\r\n      disabled: true,\r\n      loading: true,\r\n      text: loadingMore(params)\r\n    };\r\n    var $loading = this.option(loading);\r\n    $loading.className += ' loading-results';\r\n\r\n    this.$results.prepend($loading);\r\n  };\r\n\r\n  Results.prototype.hideLoading = function () {\r\n    this.$results.find('.loading-results').remove();\r\n  };\r\n\r\n  Results.prototype.option = function (data) {\r\n    var option = document.createElement('li');\r\n    option.className = 'select2-results__option';\r\n\r\n    var attrs = {\r\n      'role': 'treeitem',\r\n      'aria-selected': 'false'\r\n    };\r\n\r\n    if (data.disabled) {\r\n      delete attrs['aria-selected'];\r\n      attrs['aria-disabled'] = 'true';\r\n    }\r\n\r\n    if (data.id == null) {\r\n      delete attrs['aria-selected'];\r\n    }\r\n\r\n    if (data._resultId != null) {\r\n      option.id = data._resultId;\r\n    }\r\n\r\n    if (data.title) {\r\n      option.title = data.title;\r\n    }\r\n\r\n    if (data.children) {\r\n      attrs.role = 'group';\r\n      attrs['aria-label'] = data.text;\r\n      delete attrs['aria-selected'];\r\n    }\r\n\r\n    for (var attr in attrs) {\r\n      var val = attrs[attr];\r\n\r\n      option.setAttribute(attr, val);\r\n    }\r\n\r\n    if (data.children) {\r\n      var $option = $(option);\r\n\r\n      var label = document.createElement('strong');\r\n      label.className = 'select2-results__group';\r\n\r\n      var $label = $(label);\r\n      this.template(data, label);\r\n\r\n      var $children = [];\r\n\r\n      for (var c = 0; c < data.children.length; c++) {\r\n        var child = data.children[c];\r\n\r\n        var $child = this.option(child);\r\n\r\n        $children.push($child);\r\n      }\r\n\r\n      var $childrenContainer = $('<ul></ul>', {\r\n        'class': 'select2-results__options select2-results__options--nested'\r\n      });\r\n\r\n      $childrenContainer.append($children);\r\n\r\n      $option.append(label);\r\n      $option.append($childrenContainer);\r\n    } else {\r\n      this.template(data, option);\r\n    }\r\n\r\n    $.data(option, 'data', data);\r\n\r\n    return option;\r\n  };\r\n\r\n  Results.prototype.bind = function (container, $container) {\r\n    var self = this;\r\n\r\n    var id = container.id + '-results';\r\n\r\n    this.$results.attr('id', id);\r\n\r\n    container.on('results:all', function (params) {\r\n      self.clear();\r\n      self.append(params.data);\r\n\r\n      if (container.isOpen()) {\r\n        self.setClasses();\r\n        self.highlightFirstItem();\r\n      }\r\n    });\r\n\r\n    container.on('results:append', function (params) {\r\n      self.append(params.data);\r\n\r\n      if (container.isOpen()) {\r\n        self.setClasses();\r\n      }\r\n    });\r\n\r\n    container.on('query', function (params) {\r\n      self.hideMessages();\r\n      self.showLoading(params);\r\n    });\r\n\r\n    container.on('select', function () {\r\n      if (!container.isOpen()) {\r\n        return;\r\n      }\r\n\r\n      self.setClasses();\r\n      self.highlightFirstItem();\r\n    });\r\n\r\n    container.on('unselect', function () {\r\n      if (!container.isOpen()) {\r\n        return;\r\n      }\r\n\r\n      self.setClasses();\r\n      self.highlightFirstItem();\r\n    });\r\n\r\n    container.on('open', function () {\r\n      // When the dropdown is open, aria-expended=\"true\"\r\n      self.$results.attr('aria-expanded', 'true');\r\n      self.$results.attr('aria-hidden', 'false');\r\n\r\n      self.setClasses();\r\n      self.ensureHighlightVisible();\r\n    });\r\n\r\n    container.on('close', function () {\r\n      // When the dropdown is closed, aria-expended=\"false\"\r\n      self.$results.attr('aria-expanded', 'false');\r\n      self.$results.attr('aria-hidden', 'true');\r\n      self.$results.removeAttr('aria-activedescendant');\r\n    });\r\n\r\n    container.on('results:toggle', function () {\r\n      var $highlighted = self.getHighlightedResults();\r\n\r\n      if ($highlighted.length === 0) {\r\n        return;\r\n      }\r\n\r\n      $highlighted.trigger('mouseup');\r\n    });\r\n\r\n    container.on('results:select', function () {\r\n      var $highlighted = self.getHighlightedResults();\r\n\r\n      if ($highlighted.length === 0) {\r\n        return;\r\n      }\r\n\r\n      var data = $highlighted.data('data');\r\n\r\n      if ($highlighted.attr('aria-selected') == 'true') {\r\n        self.trigger('close', {});\r\n      } else {\r\n        self.trigger('select', {\r\n          data: data\r\n        });\r\n      }\r\n    });\r\n\r\n    container.on('results:previous', function () {\r\n      var $highlighted = self.getHighlightedResults();\r\n\r\n      var $options = self.$results.find('[aria-selected]');\r\n\r\n      var currentIndex = $options.index($highlighted);\r\n\r\n      // If we are already at te top, don't move further\r\n      if (currentIndex === 0) {\r\n        return;\r\n      }\r\n\r\n      var nextIndex = currentIndex - 1;\r\n\r\n      // If none are highlighted, highlight the first\r\n      if ($highlighted.length === 0) {\r\n        nextIndex = 0;\r\n      }\r\n\r\n      var $next = $options.eq(nextIndex);\r\n\r\n      $next.trigger('mouseenter');\r\n\r\n      var currentOffset = self.$results.offset().top;\r\n      var nextTop = $next.offset().top;\r\n      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);\r\n\r\n      if (nextIndex === 0) {\r\n        self.$results.scrollTop(0);\r\n      } else if (nextTop - currentOffset < 0) {\r\n        self.$results.scrollTop(nextOffset);\r\n      }\r\n    });\r\n\r\n    container.on('results:next', function () {\r\n      var $highlighted = self.getHighlightedResults();\r\n\r\n      var $options = self.$results.find('[aria-selected]');\r\n\r\n      var currentIndex = $options.index($highlighted);\r\n\r\n      var nextIndex = currentIndex + 1;\r\n\r\n      // If we are at the last option, stay there\r\n      if (nextIndex >= $options.length) {\r\n        return;\r\n      }\r\n\r\n      var $next = $options.eq(nextIndex);\r\n\r\n      $next.trigger('mouseenter');\r\n\r\n      var currentOffset = self.$results.offset().top +\r\n        self.$results.outerHeight(false);\r\n      var nextBottom = $next.offset().top + $next.outerHeight(false);\r\n      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;\r\n\r\n      if (nextIndex === 0) {\r\n        self.$results.scrollTop(0);\r\n      } else if (nextBottom > currentOffset) {\r\n        self.$results.scrollTop(nextOffset);\r\n      }\r\n    });\r\n\r\n    container.on('results:focus', function (params) {\r\n      params.element.addClass('select2-results__option--highlighted');\r\n    });\r\n\r\n    container.on('results:message', function (params) {\r\n      self.displayMessage(params);\r\n    });\r\n\r\n    if ($.fn.mousewheel) {\r\n      this.$results.on('mousewheel', function (e) {\r\n        var top = self.$results.scrollTop();\r\n\r\n        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;\r\n\r\n        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;\r\n        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();\r\n\r\n        if (isAtTop) {\r\n          self.$results.scrollTop(0);\r\n\r\n          e.preventDefault();\r\n          e.stopPropagation();\r\n        } else if (isAtBottom) {\r\n          self.$results.scrollTop(\r\n            self.$results.get(0).scrollHeight - self.$results.height()\r\n          );\r\n\r\n          e.preventDefault();\r\n          e.stopPropagation();\r\n        }\r\n      });\r\n    }\r\n\r\n    this.$results.on('mouseup', '.select2-results__option[aria-selected]',\r\n      function (evt) {\r\n      var $this = $(this);\r\n\r\n      var data = $this.data('data');\r\n\r\n      if ($this.attr('aria-selected') === 'true') {\r\n        if (self.options.get('multiple')) {\r\n          self.trigger('unselect', {\r\n            originalEvent: evt,\r\n            data: data\r\n          });\r\n        } else {\r\n          self.trigger('close', {});\r\n        }\r\n\r\n        return;\r\n      }\r\n\r\n      self.trigger('select', {\r\n        originalEvent: evt,\r\n        data: data\r\n      });\r\n    });\r\n\r\n    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',\r\n      function (evt) {\r\n      var data = $(this).data('data');\r\n\r\n      self.getHighlightedResults()\r\n          .removeClass('select2-results__option--highlighted');\r\n\r\n      self.trigger('results:focus', {\r\n        data: data,\r\n        element: $(this)\r\n      });\r\n    });\r\n  };\r\n\r\n  Results.prototype.getHighlightedResults = function () {\r\n    var $highlighted = this.$results\r\n    .find('.select2-results__option--highlighted');\r\n\r\n    return $highlighted;\r\n  };\r\n\r\n  Results.prototype.destroy = function () {\r\n    this.$results.remove();\r\n  };\r\n\r\n  Results.prototype.ensureHighlightVisible = function () {\r\n    var $highlighted = this.getHighlightedResults();\r\n\r\n    if ($highlighted.length === 0) {\r\n      return;\r\n    }\r\n\r\n    var $options = this.$results.find('[aria-selected]');\r\n\r\n    var currentIndex = $options.index($highlighted);\r\n\r\n    var currentOffset = this.$results.offset().top;\r\n    var nextTop = $highlighted.offset().top;\r\n    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);\r\n\r\n    var offsetDelta = nextTop - currentOffset;\r\n    nextOffset -= $highlighted.outerHeight(false) * 2;\r\n\r\n    if (currentIndex <= 2) {\r\n      this.$results.scrollTop(0);\r\n    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {\r\n      this.$results.scrollTop(nextOffset);\r\n    }\r\n  };\r\n\r\n  Results.prototype.template = function (result, container) {\r\n    var template = this.options.get('templateResult');\r\n    var escapeMarkup = this.options.get('escapeMarkup');\r\n\r\n    var content = template(result, container);\r\n\r\n    if (content == null) {\r\n      container.style.display = 'none';\r\n    } else if (typeof content === 'string') {\r\n      container.innerHTML = escapeMarkup(content);\r\n    } else {\r\n      $(container).append(content);\r\n    }\r\n  };\r\n\r\n  return Results;\r\n});\r\n\r\nS2.define('select2/keys',[\r\n\r\n], function () {\r\n  var KEYS = {\r\n    BACKSPACE: 8,\r\n    TAB: 9,\r\n    ENTER: 13,\r\n    SHIFT: 16,\r\n    CTRL: 17,\r\n    ALT: 18,\r\n    ESC: 27,\r\n    SPACE: 32,\r\n    PAGE_UP: 33,\r\n    PAGE_DOWN: 34,\r\n    END: 35,\r\n    HOME: 36,\r\n    LEFT: 37,\r\n    UP: 38,\r\n    RIGHT: 39,\r\n    DOWN: 40,\r\n    DELETE: 46\r\n  };\r\n\r\n  return KEYS;\r\n});\r\n\r\nS2.define('select2/selection/base',[\r\n  'jquery',\r\n  '../utils',\r\n  '../keys'\r\n], function ($, Utils, KEYS) {\r\n  function BaseSelection ($element, options) {\r\n    this.$element = $element;\r\n    this.options = options;\r\n\r\n    BaseSelection.__super__.constructor.call(this);\r\n  }\r\n\r\n  Utils.Extend(BaseSelection, Utils.Observable);\r\n\r\n  BaseSelection.prototype.render = function () {\r\n    var $selection = $(\r\n      '<span class=\"select2-selection\" role=\"combobox\" ' +\r\n      ' aria-haspopup=\"true\" aria-expanded=\"false\">' +\r\n      '</span>'\r\n    );\r\n\r\n    this._tabindex = 0;\r\n\r\n    if (this.$element.data('old-tabindex') != null) {\r\n      this._tabindex = this.$element.data('old-tabindex');\r\n    } else if (this.$element.attr('tabindex') != null) {\r\n      this._tabindex = this.$element.attr('tabindex');\r\n    }\r\n\r\n    $selection.attr('title', this.$element.attr('title'));\r\n    $selection.attr('tabindex', this._tabindex);\r\n\r\n    this.$selection = $selection;\r\n\r\n    return $selection;\r\n  };\r\n\r\n  BaseSelection.prototype.bind = function (container, $container) {\r\n    var self = this;\r\n\r\n    var id = container.id + '-container';\r\n    var resultsId = container.id + '-results';\r\n\r\n    this.container = container;\r\n\r\n    this.$selection.on('focus', function (evt) {\r\n      self.trigger('focus', evt);\r\n    });\r\n\r\n    this.$selection.on('blur', function (evt) {\r\n      self._handleBlur(evt);\r\n    });\r\n\r\n    this.$selection.on('keydown', function (evt) {\r\n      self.trigger('keypress', evt);\r\n\r\n      if (evt.which === KEYS.SPACE) {\r\n        evt.preventDefault();\r\n      }\r\n    });\r\n\r\n    container.on('results:focus', function (params) {\r\n      self.$selection.attr('aria-activedescendant', params.data._resultId);\r\n    });\r\n\r\n    container.on('selection:update', function (params) {\r\n      self.update(params.data);\r\n    });\r\n\r\n    container.on('open', function () {\r\n      // When the dropdown is open, aria-expanded=\"true\"\r\n      self.$selection.attr('aria-expanded', 'true');\r\n      self.$selection.attr('aria-owns', resultsId);\r\n\r\n      self._attachCloseHandler(container);\r\n    });\r\n\r\n    container.on('close', function () {\r\n      // When the dropdown is closed, aria-expanded=\"false\"\r\n      self.$selection.attr('aria-expanded', 'false');\r\n      self.$selection.removeAttr('aria-activedescendant');\r\n      self.$selection.removeAttr('aria-owns');\r\n\r\n      self.$selection.focus();\r\n\r\n      self._detachCloseHandler(container);\r\n    });\r\n\r\n    container.on('enable', function () {\r\n      self.$selection.attr('tabindex', self._tabindex);\r\n    });\r\n\r\n    container.on('disable', function () {\r\n      self.$selection.attr('tabindex', '-1');\r\n    });\r\n  };\r\n\r\n  BaseSelection.prototype._handleBlur = function (evt) {\r\n    var self = this;\r\n\r\n    // This needs to be delayed as the active element is the body when the tab\r\n    // key is pressed, possibly along with others.\r\n    window.setTimeout(function () {\r\n      // Don't trigger `blur` if the focus is still in the selection\r\n      if (\r\n        (document.activeElement == self.$selection[0]) ||\r\n        ($.contains(self.$selection[0], document.activeElement))\r\n      ) {\r\n        return;\r\n      }\r\n\r\n      self.trigger('blur', evt);\r\n    }, 1);\r\n  };\r\n\r\n  BaseSelection.prototype._attachCloseHandler = function (container) {\r\n    var self = this;\r\n\r\n    $(document.body).on('mousedown.select2.' + container.id, function (e) {\r\n      var $target = $(e.target);\r\n\r\n      var $select = $target.closest('.select2');\r\n\r\n      var $all = $('.select2.select2-container--open');\r\n\r\n      $all.each(function () {\r\n        var $this = $(this);\r\n\r\n        if (this == $select[0]) {\r\n          return;\r\n        }\r\n\r\n        var $element = $this.data('element');\r\n\r\n        $element.select2('close');\r\n      });\r\n    });\r\n  };\r\n\r\n  BaseSelection.prototype._detachCloseHandler = function (container) {\r\n    $(document.body).off('mousedown.select2.' + container.id);\r\n  };\r\n\r\n  BaseSelection.prototype.position = function ($selection, $container) {\r\n    var $selectionContainer = $container.find('.selection');\r\n    $selectionContainer.append($selection);\r\n  };\r\n\r\n  BaseSelection.prototype.destroy = function () {\r\n    this._detachCloseHandler(this.container);\r\n  };\r\n\r\n  BaseSelection.prototype.update = function (data) {\r\n    throw new Error('The `update` method must be defined in child classes.');\r\n  };\r\n\r\n  return BaseSelection;\r\n});\r\n\r\nS2.define('select2/selection/single',[\r\n  'jquery',\r\n  './base',\r\n  '../utils',\r\n  '../keys'\r\n], function ($, BaseSelection, Utils, KEYS) {\r\n  function SingleSelection () {\r\n    SingleSelection.__super__.constructor.apply(this, arguments);\r\n  }\r\n\r\n  Utils.Extend(SingleSelection, BaseSelection);\r\n\r\n  SingleSelection.prototype.render = function () {\r\n    var $selection = SingleSelection.__super__.render.call(this);\r\n\r\n    $selection.addClass('select2-selection--single');\r\n\r\n    $selection.html(\r\n      '<span class=\"select2-selection__rendered\"></span>' +\r\n      '<span class=\"select2-selection__arrow\" role=\"presentation\">' +\r\n        '<b role=\"presentation\"></b>' +\r\n      '</span>'\r\n    );\r\n\r\n    return $selection;\r\n  };\r\n\r\n  SingleSelection.prototype.bind = function (container, $container) {\r\n    var self = this;\r\n\r\n    SingleSelection.__super__.bind.apply(this, arguments);\r\n\r\n    var id = container.id + '-container';\r\n\r\n    this.$selection.find('.select2-selection__rendered').attr('id', id);\r\n    this.$selection.attr('aria-labelledby', id);\r\n\r\n    this.$selection.on('mousedown', function (evt) {\r\n      // Only respond to left clicks\r\n      if (evt.which !== 1) {\r\n        return;\r\n      }\r\n\r\n      self.trigger('toggle', {\r\n        originalEvent: evt\r\n      });\r\n    });\r\n\r\n    this.$selection.on('focus', function (evt) {\r\n      // User focuses on the container\r\n    });\r\n\r\n    this.$selection.on('blur', function (evt) {\r\n      // User exits the container\r\n    });\r\n\r\n    container.on('focus', function (evt) {\r\n      if (!container.isOpen()) {\r\n        self.$selection.focus();\r\n      }\r\n    });\r\n\r\n    container.on('selection:update', function (params) {\r\n      self.update(params.data);\r\n    });\r\n  };\r\n\r\n  SingleSelection.prototype.clear = function () {\r\n    this.$selection.find('.select2-selection__rendered').empty();\r\n  };\r\n\r\n  SingleSelection.prototype.display = function (data, container) {\r\n    var template = this.options.get('templateSelection');\r\n    var escapeMarkup = this.options.get('escapeMarkup');\r\n\r\n    return escapeMarkup(template(data, container));\r\n  };\r\n\r\n  SingleSelection.prototype.selectionContainer = function () {\r\n    return $('<span></span>');\r\n  };\r\n\r\n  SingleSelection.prototype.update = function (data) {\r\n    if (data.length === 0) {\r\n      this.clear();\r\n      return;\r\n    }\r\n\r\n    var selection = data[0];\r\n\r\n    var $rendered = this.$selection.find('.select2-selection__rendered');\r\n    var formatted = this.display(selection, $rendered);\r\n\r\n    $rendered.empty().append(formatted);\r\n    $rendered.prop('title', selection.title || selection.text);\r\n  };\r\n\r\n  return SingleSelection;\r\n});\r\n\r\nS2.define('select2/selection/multiple',[\r\n  'jquery',\r\n  './base',\r\n  '../utils'\r\n], function ($, BaseSelection, Utils) {\r\n  function MultipleSelection ($element, options) {\r\n    MultipleSelection.__super__.constructor.apply(this, arguments);\r\n  }\r\n\r\n  Utils.Extend(MultipleSelection, BaseSelection);\r\n\r\n  MultipleSelection.prototype.render = function () {\r\n    var $selection = MultipleSelection.__super__.render.call(this);\r\n\r\n    $selection.addClass('select2-selection--multiple');\r\n\r\n    $selection.html(\r\n      '<ul class=\"select2-selection__rendered\"></ul>'\r\n    );\r\n\r\n    return $selection;\r\n  };\r\n\r\n  MultipleSelection.prototype.bind = function (container, $container) {\r\n    var self = this;\r\n\r\n    MultipleSelection.__super__.bind.apply(this, arguments);\r\n\r\n    this.$selection.on('click', function (evt) {\r\n      self.trigger('toggle', {\r\n        originalEvent: evt\r\n      });\r\n    });\r\n\r\n    this.$selection.on(\r\n      'click',\r\n      '.select2-selection__choice__remove',\r\n      function (evt) {\r\n        // Ignore the event if it is disabled\r\n        if (self.options.get('disabled')) {\r\n          return;\r\n        }\r\n\r\n        var $remove = $(this);\r\n        var $selection = $remove.parent();\r\n\r\n        var data = $selection.data('data');\r\n\r\n        self.trigger('unselect', {\r\n          originalEvent: evt,\r\n          data: data\r\n        });\r\n      }\r\n    );\r\n  };\r\n\r\n  MultipleSelection.prototype.clear = function () {\r\n    this.$selection.find('.select2-selection__rendered').empty();\r\n  };\r\n\r\n  MultipleSelection.prototype.display = function (data, container) {\r\n    var template = this.options.get('templateSelection');\r\n    var escapeMarkup = this.options.get('escapeMarkup');\r\n\r\n    return escapeMarkup(template(data, container));\r\n  };\r\n\r\n  MultipleSelection.prototype.selectionContainer = function () {\r\n    var $container = $(\r\n      '<li class=\"select2-selection__choice\">' +\r\n        '<span class=\"select2-selection__choice__remove\" role=\"presentation\">' +\r\n          '&times;' +\r\n        '</span>' +\r\n      '</li>'\r\n    );\r\n\r\n    return $container;\r\n  };\r\n\r\n  MultipleSelection.prototype.update = function (data) {\r\n    this.clear();\r\n\r\n    if (data.length === 0) {\r\n      return;\r\n    }\r\n\r\n    var $selections = [];\r\n\r\n    for (var d = 0; d < data.length; d++) {\r\n      var selection = data[d];\r\n\r\n      var $selection = this.selectionContainer();\r\n      var formatted = this.display(selection, $selection);\r\n\r\n      $selection.append(formatted);\r\n      $selection.prop('title', selection.title || selection.text);\r\n\r\n      $selection.data('data', selection);\r\n\r\n      $selections.push($selection);\r\n    }\r\n\r\n    var $rendered = this.$selection.find('.select2-selection__rendered');\r\n\r\n    Utils.appendMany($rendered, $selections);\r\n  };\r\n\r\n  return MultipleSelection;\r\n});\r\n\r\nS2.define('select2/selection/placeholder',[\r\n  '../utils'\r\n], function (Utils) {\r\n  function Placeholder (decorated, $element, options) {\r\n    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));\r\n\r\n    decorated.call(this, $element, options);\r\n  }\r\n\r\n  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {\r\n    if (typeof placeholder === 'string') {\r\n      placeholder = {\r\n        id: '',\r\n        text: placeholder\r\n      };\r\n    }\r\n\r\n    return placeholder;\r\n  };\r\n\r\n  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {\r\n    var $placeholder = this.selectionContainer();\r\n\r\n    $placeholder.html(this.display(placeholder));\r\n    $placeholder.addClass('select2-selection__placeholder')\r\n                .removeClass('select2-selection__choice');\r\n\r\n    return $placeholder;\r\n  };\r\n\r\n  Placeholder.prototype.update = function (decorated, data) {\r\n    var singlePlaceholder = (\r\n      data.length == 1 && data[0].id != this.placeholder.id\r\n    );\r\n    var multipleSelections = data.length > 1;\r\n\r\n    if (multipleSelections || singlePlaceholder) {\r\n      return decorated.call(this, data);\r\n    }\r\n\r\n    this.clear();\r\n\r\n    var $placeholder = this.createPlaceholder(this.placeholder);\r\n\r\n    this.$selection.find('.select2-selection__rendered').append($placeholder);\r\n  };\r\n\r\n  return Placeholder;\r\n});\r\n\r\nS2.define('select2/selection/allowClear',[\r\n  'jquery',\r\n  '../keys'\r\n], function ($, KEYS) {\r\n  function AllowClear () { }\r\n\r\n  AllowClear.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    if (this.placeholder == null) {\r\n      if (this.options.get('debug') && window.console && console.error) {\r\n        console.error(\r\n          'Select2: The `allowClear` option should be used in combination ' +\r\n          'with the `placeholder` option.'\r\n        );\r\n      }\r\n    }\r\n\r\n    this.$selection.on('mousedown', '.select2-selection__clear',\r\n      function (evt) {\r\n        self._handleClear(evt);\r\n    });\r\n\r\n    container.on('keypress', function (evt) {\r\n      self._handleKeyboardClear(evt, container);\r\n    });\r\n  };\r\n\r\n  AllowClear.prototype._handleClear = function (_, evt) {\r\n    // Ignore the event if it is disabled\r\n    if (this.options.get('disabled')) {\r\n      return;\r\n    }\r\n\r\n    var $clear = this.$selection.find('.select2-selection__clear');\r\n\r\n    // Ignore the event if nothing has been selected\r\n    if ($clear.length === 0) {\r\n      return;\r\n    }\r\n\r\n    evt.stopPropagation();\r\n\r\n    var data = $clear.data('data');\r\n\r\n    for (var d = 0; d < data.length; d++) {\r\n      var unselectData = {\r\n        data: data[d]\r\n      };\r\n\r\n      // Trigger the `unselect` event, so people can prevent it from being\r\n      // cleared.\r\n      this.trigger('unselect', unselectData);\r\n\r\n      // If the event was prevented, don't clear it out.\r\n      if (unselectData.prevented) {\r\n        return;\r\n      }\r\n    }\r\n\r\n    this.$element.val(this.placeholder.id).trigger('change');\r\n\r\n    this.trigger('toggle', {});\r\n  };\r\n\r\n  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {\r\n    if (container.isOpen()) {\r\n      return;\r\n    }\r\n\r\n    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {\r\n      this._handleClear(evt);\r\n    }\r\n  };\r\n\r\n  AllowClear.prototype.update = function (decorated, data) {\r\n    decorated.call(this, data);\r\n\r\n    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||\r\n        data.length === 0) {\r\n      return;\r\n    }\r\n\r\n    var $remove = $(\r\n      '<span class=\"select2-selection__clear\">' +\r\n        '&times;' +\r\n      '</span>'\r\n    );\r\n    $remove.data('data', data);\r\n\r\n    this.$selection.find('.select2-selection__rendered').prepend($remove);\r\n  };\r\n\r\n  return AllowClear;\r\n});\r\n\r\nS2.define('select2/selection/search',[\r\n  'jquery',\r\n  '../utils',\r\n  '../keys'\r\n], function ($, Utils, KEYS) {\r\n  function Search (decorated, $element, options) {\r\n    decorated.call(this, $element, options);\r\n  }\r\n\r\n  Search.prototype.render = function (decorated) {\r\n    var $search = $(\r\n      '<li class=\"select2-search select2-search--inline\">' +\r\n        '<input class=\"select2-search__field\" type=\"search\" tabindex=\"-1\"' +\r\n        ' autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"' +\r\n        ' spellcheck=\"false\" role=\"textbox\" aria-autocomplete=\"list\" />' +\r\n      '</li>'\r\n    );\r\n\r\n    this.$searchContainer = $search;\r\n    this.$search = $search.find('input');\r\n\r\n    var $rendered = decorated.call(this);\r\n\r\n    this._transferTabIndex();\r\n\r\n    return $rendered;\r\n  };\r\n\r\n  Search.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('open', function () {\r\n      self.$search.trigger('focus');\r\n    });\r\n\r\n    container.on('close', function () {\r\n      self.$search.val('');\r\n      self.$search.removeAttr('aria-activedescendant');\r\n      self.$search.trigger('focus');\r\n    });\r\n\r\n    container.on('enable', function () {\r\n      self.$search.prop('disabled', false);\r\n\r\n      self._transferTabIndex();\r\n    });\r\n\r\n    container.on('disable', function () {\r\n      self.$search.prop('disabled', true);\r\n    });\r\n\r\n    container.on('focus', function (evt) {\r\n      self.$search.trigger('focus');\r\n    });\r\n\r\n    container.on('results:focus', function (params) {\r\n      self.$search.attr('aria-activedescendant', params.id);\r\n    });\r\n\r\n    this.$selection.on('focusin', '.select2-search--inline', function (evt) {\r\n      self.trigger('focus', evt);\r\n    });\r\n\r\n    this.$selection.on('focusout', '.select2-search--inline', function (evt) {\r\n      self._handleBlur(evt);\r\n    });\r\n\r\n    this.$selection.on('keydown', '.select2-search--inline', function (evt) {\r\n      evt.stopPropagation();\r\n\r\n      self.trigger('keypress', evt);\r\n\r\n      self._keyUpPrevented = evt.isDefaultPrevented();\r\n\r\n      var key = evt.which;\r\n\r\n      if (key === KEYS.BACKSPACE && self.$search.val() === '') {\r\n        var $previousChoice = self.$searchContainer\r\n          .prev('.select2-selection__choice');\r\n\r\n        if ($previousChoice.length > 0) {\r\n          var item = $previousChoice.data('data');\r\n\r\n          self.searchRemoveChoice(item);\r\n\r\n          evt.preventDefault();\r\n        }\r\n      }\r\n    });\r\n\r\n    // Try to detect the IE version should the `documentMode` property that\r\n    // is stored on the document. This is only implemented in IE and is\r\n    // slightly cleaner than doing a user agent check.\r\n    // This property is not available in Edge, but Edge also doesn't have\r\n    // this bug.\r\n    var msie = document.documentMode;\r\n    var disableInputEvents = msie && msie <= 11;\r\n\r\n    // Workaround for browsers which do not support the `input` event\r\n    // This will prevent double-triggering of events for browsers which support\r\n    // both the `keyup` and `input` events.\r\n    this.$selection.on(\r\n      'input.searchcheck',\r\n      '.select2-search--inline',\r\n      function (evt) {\r\n        // IE will trigger the `input` event when a placeholder is used on a\r\n        // search box. To get around this issue, we are forced to ignore all\r\n        // `input` events in IE and keep using `keyup`.\r\n        if (disableInputEvents) {\r\n          self.$selection.off('input.search input.searchcheck');\r\n          return;\r\n        }\r\n\r\n        // Unbind the duplicated `keyup` event\r\n        self.$selection.off('keyup.search');\r\n      }\r\n    );\r\n\r\n    this.$selection.on(\r\n      'keyup.search input.search',\r\n      '.select2-search--inline',\r\n      function (evt) {\r\n        // IE will trigger the `input` event when a placeholder is used on a\r\n        // search box. To get around this issue, we are forced to ignore all\r\n        // `input` events in IE and keep using `keyup`.\r\n        if (disableInputEvents && evt.type === 'input') {\r\n          self.$selection.off('input.search input.searchcheck');\r\n          return;\r\n        }\r\n\r\n        var key = evt.which;\r\n\r\n        // We can freely ignore events from modifier keys\r\n        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {\r\n          return;\r\n        }\r\n\r\n        // Tabbing will be handled during the `keydown` phase\r\n        if (key == KEYS.TAB) {\r\n          return;\r\n        }\r\n\r\n        self.handleSearch(evt);\r\n      }\r\n    );\r\n  };\r\n\r\n  /**\r\n   * This method will transfer the tabindex attribute from the rendered\r\n   * selection to the search box. This allows for the search box to be used as\r\n   * the primary focus instead of the selection container.\r\n   *\r\n   * @private\r\n   */\r\n  Search.prototype._transferTabIndex = function (decorated) {\r\n    this.$search.attr('tabindex', this.$selection.attr('tabindex'));\r\n    this.$selection.attr('tabindex', '-1');\r\n  };\r\n\r\n  Search.prototype.createPlaceholder = function (decorated, placeholder) {\r\n    this.$search.attr('placeholder', placeholder.text);\r\n  };\r\n\r\n  Search.prototype.update = function (decorated, data) {\r\n    var searchHadFocus = this.$search[0] == document.activeElement;\r\n\r\n    this.$search.attr('placeholder', '');\r\n\r\n    decorated.call(this, data);\r\n\r\n    this.$selection.find('.select2-selection__rendered')\r\n                   .append(this.$searchContainer);\r\n\r\n    this.resizeSearch();\r\n    if (searchHadFocus) {\r\n      this.$search.focus();\r\n    }\r\n  };\r\n\r\n  Search.prototype.handleSearch = function () {\r\n    this.resizeSearch();\r\n\r\n    if (!this._keyUpPrevented) {\r\n      var input = this.$search.val();\r\n\r\n      this.trigger('query', {\r\n        term: input\r\n      });\r\n    }\r\n\r\n    this._keyUpPrevented = false;\r\n  };\r\n\r\n  Search.prototype.searchRemoveChoice = function (decorated, item) {\r\n    this.trigger('unselect', {\r\n      data: item\r\n    });\r\n\r\n    this.$search.val(item.text);\r\n    this.handleSearch();\r\n  };\r\n\r\n  Search.prototype.resizeSearch = function () {\r\n    this.$search.css('width', '25px');\r\n\r\n    var width = '';\r\n\r\n    if (this.$search.attr('placeholder') !== '') {\r\n      width = this.$selection.find('.select2-selection__rendered').innerWidth();\r\n    } else {\r\n      var minimumWidth = this.$search.val().length + 1;\r\n\r\n      width = (minimumWidth * 0.75) + 'em';\r\n    }\r\n\r\n    this.$search.css('width', width);\r\n  };\r\n\r\n  return Search;\r\n});\r\n\r\nS2.define('select2/selection/eventRelay',[\r\n  'jquery'\r\n], function ($) {\r\n  function EventRelay () { }\r\n\r\n  EventRelay.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n    var relayEvents = [\r\n      'open', 'opening',\r\n      'close', 'closing',\r\n      'select', 'selecting',\r\n      'unselect', 'unselecting'\r\n    ];\r\n\r\n    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('*', function (name, params) {\r\n      // Ignore events that should not be relayed\r\n      if ($.inArray(name, relayEvents) === -1) {\r\n        return;\r\n      }\r\n\r\n      // The parameters should always be an object\r\n      params = params || {};\r\n\r\n      // Generate the jQuery event for the Select2 event\r\n      var evt = $.Event('select2:' + name, {\r\n        params: params\r\n      });\r\n\r\n      self.$element.trigger(evt);\r\n\r\n      // Only handle preventable events if it was one\r\n      if ($.inArray(name, preventableEvents) === -1) {\r\n        return;\r\n      }\r\n\r\n      params.prevented = evt.isDefaultPrevented();\r\n    });\r\n  };\r\n\r\n  return EventRelay;\r\n});\r\n\r\nS2.define('select2/translation',[\r\n  'jquery',\r\n  'require'\r\n], function ($, require) {\r\n  function Translation (dict) {\r\n    this.dict = dict || {};\r\n  }\r\n\r\n  Translation.prototype.all = function () {\r\n    return this.dict;\r\n  };\r\n\r\n  Translation.prototype.get = function (key) {\r\n    return this.dict[key];\r\n  };\r\n\r\n  Translation.prototype.extend = function (translation) {\r\n    this.dict = $.extend({}, translation.all(), this.dict);\r\n  };\r\n\r\n  // Static functions\r\n\r\n  Translation._cache = {};\r\n\r\n  Translation.loadPath = function (path) {\r\n    if (!(path in Translation._cache)) {\r\n      var translations = require(path);\r\n\r\n      Translation._cache[path] = translations;\r\n    }\r\n\r\n    return new Translation(Translation._cache[path]);\r\n  };\r\n\r\n  return Translation;\r\n});\r\n\r\nS2.define('select2/diacritics',[\r\n\r\n], function () {\r\n  var diacritics = {\r\n    '\\u24B6': 'A',\r\n    '\\uFF21': 'A',\r\n    '\\u00C0': 'A',\r\n    '\\u00C1': 'A',\r\n    '\\u00C2': 'A',\r\n    '\\u1EA6': 'A',\r\n    '\\u1EA4': 'A',\r\n    '\\u1EAA': 'A',\r\n    '\\u1EA8': 'A',\r\n    '\\u00C3': 'A',\r\n    '\\u0100': 'A',\r\n    '\\u0102': 'A',\r\n    '\\u1EB0': 'A',\r\n    '\\u1EAE': 'A',\r\n    '\\u1EB4': 'A',\r\n    '\\u1EB2': 'A',\r\n    '\\u0226': 'A',\r\n    '\\u01E0': 'A',\r\n    '\\u00C4': 'A',\r\n    '\\u01DE': 'A',\r\n    '\\u1EA2': 'A',\r\n    '\\u00C5': 'A',\r\n    '\\u01FA': 'A',\r\n    '\\u01CD': 'A',\r\n    '\\u0200': 'A',\r\n    '\\u0202': 'A',\r\n    '\\u1EA0': 'A',\r\n    '\\u1EAC': 'A',\r\n    '\\u1EB6': 'A',\r\n    '\\u1E00': 'A',\r\n    '\\u0104': 'A',\r\n    '\\u023A': 'A',\r\n    '\\u2C6F': 'A',\r\n    '\\uA732': 'AA',\r\n    '\\u00C6': 'AE',\r\n    '\\u01FC': 'AE',\r\n    '\\u01E2': 'AE',\r\n    '\\uA734': 'AO',\r\n    '\\uA736': 'AU',\r\n    '\\uA738': 'AV',\r\n    '\\uA73A': 'AV',\r\n    '\\uA73C': 'AY',\r\n    '\\u24B7': 'B',\r\n    '\\uFF22': 'B',\r\n    '\\u1E02': 'B',\r\n    '\\u1E04': 'B',\r\n    '\\u1E06': 'B',\r\n    '\\u0243': 'B',\r\n    '\\u0182': 'B',\r\n    '\\u0181': 'B',\r\n    '\\u24B8': 'C',\r\n    '\\uFF23': 'C',\r\n    '\\u0106': 'C',\r\n    '\\u0108': 'C',\r\n    '\\u010A': 'C',\r\n    '\\u010C': 'C',\r\n    '\\u00C7': 'C',\r\n    '\\u1E08': 'C',\r\n    '\\u0187': 'C',\r\n    '\\u023B': 'C',\r\n    '\\uA73E': 'C',\r\n    '\\u24B9': 'D',\r\n    '\\uFF24': 'D',\r\n    '\\u1E0A': 'D',\r\n    '\\u010E': 'D',\r\n    '\\u1E0C': 'D',\r\n    '\\u1E10': 'D',\r\n    '\\u1E12': 'D',\r\n    '\\u1E0E': 'D',\r\n    '\\u0110': 'D',\r\n    '\\u018B': 'D',\r\n    '\\u018A': 'D',\r\n    '\\u0189': 'D',\r\n    '\\uA779': 'D',\r\n    '\\u01F1': 'DZ',\r\n    '\\u01C4': 'DZ',\r\n    '\\u01F2': 'Dz',\r\n    '\\u01C5': 'Dz',\r\n    '\\u24BA': 'E',\r\n    '\\uFF25': 'E',\r\n    '\\u00C8': 'E',\r\n    '\\u00C9': 'E',\r\n    '\\u00CA': 'E',\r\n    '\\u1EC0': 'E',\r\n    '\\u1EBE': 'E',\r\n    '\\u1EC4': 'E',\r\n    '\\u1EC2': 'E',\r\n    '\\u1EBC': 'E',\r\n    '\\u0112': 'E',\r\n    '\\u1E14': 'E',\r\n    '\\u1E16': 'E',\r\n    '\\u0114': 'E',\r\n    '\\u0116': 'E',\r\n    '\\u00CB': 'E',\r\n    '\\u1EBA': 'E',\r\n    '\\u011A': 'E',\r\n    '\\u0204': 'E',\r\n    '\\u0206': 'E',\r\n    '\\u1EB8': 'E',\r\n    '\\u1EC6': 'E',\r\n    '\\u0228': 'E',\r\n    '\\u1E1C': 'E',\r\n    '\\u0118': 'E',\r\n    '\\u1E18': 'E',\r\n    '\\u1E1A': 'E',\r\n    '\\u0190': 'E',\r\n    '\\u018E': 'E',\r\n    '\\u24BB': 'F',\r\n    '\\uFF26': 'F',\r\n    '\\u1E1E': 'F',\r\n    '\\u0191': 'F',\r\n    '\\uA77B': 'F',\r\n    '\\u24BC': 'G',\r\n    '\\uFF27': 'G',\r\n    '\\u01F4': 'G',\r\n    '\\u011C': 'G',\r\n    '\\u1E20': 'G',\r\n    '\\u011E': 'G',\r\n    '\\u0120': 'G',\r\n    '\\u01E6': 'G',\r\n    '\\u0122': 'G',\r\n    '\\u01E4': 'G',\r\n    '\\u0193': 'G',\r\n    '\\uA7A0': 'G',\r\n    '\\uA77D': 'G',\r\n    '\\uA77E': 'G',\r\n    '\\u24BD': 'H',\r\n    '\\uFF28': 'H',\r\n    '\\u0124': 'H',\r\n    '\\u1E22': 'H',\r\n    '\\u1E26': 'H',\r\n    '\\u021E': 'H',\r\n    '\\u1E24': 'H',\r\n    '\\u1E28': 'H',\r\n    '\\u1E2A': 'H',\r\n    '\\u0126': 'H',\r\n    '\\u2C67': 'H',\r\n    '\\u2C75': 'H',\r\n    '\\uA78D': 'H',\r\n    '\\u24BE': 'I',\r\n    '\\uFF29': 'I',\r\n    '\\u00CC': 'I',\r\n    '\\u00CD': 'I',\r\n    '\\u00CE': 'I',\r\n    '\\u0128': 'I',\r\n    '\\u012A': 'I',\r\n    '\\u012C': 'I',\r\n    '\\u0130': 'I',\r\n    '\\u00CF': 'I',\r\n    '\\u1E2E': 'I',\r\n    '\\u1EC8': 'I',\r\n    '\\u01CF': 'I',\r\n    '\\u0208': 'I',\r\n    '\\u020A': 'I',\r\n    '\\u1ECA': 'I',\r\n    '\\u012E': 'I',\r\n    '\\u1E2C': 'I',\r\n    '\\u0197': 'I',\r\n    '\\u24BF': 'J',\r\n    '\\uFF2A': 'J',\r\n    '\\u0134': 'J',\r\n    '\\u0248': 'J',\r\n    '\\u24C0': 'K',\r\n    '\\uFF2B': 'K',\r\n    '\\u1E30': 'K',\r\n    '\\u01E8': 'K',\r\n    '\\u1E32': 'K',\r\n    '\\u0136': 'K',\r\n    '\\u1E34': 'K',\r\n    '\\u0198': 'K',\r\n    '\\u2C69': 'K',\r\n    '\\uA740': 'K',\r\n    '\\uA742': 'K',\r\n    '\\uA744': 'K',\r\n    '\\uA7A2': 'K',\r\n    '\\u24C1': 'L',\r\n    '\\uFF2C': 'L',\r\n    '\\u013F': 'L',\r\n    '\\u0139': 'L',\r\n    '\\u013D': 'L',\r\n    '\\u1E36': 'L',\r\n    '\\u1E38': 'L',\r\n    '\\u013B': 'L',\r\n    '\\u1E3C': 'L',\r\n    '\\u1E3A': 'L',\r\n    '\\u0141': 'L',\r\n    '\\u023D': 'L',\r\n    '\\u2C62': 'L',\r\n    '\\u2C60': 'L',\r\n    '\\uA748': 'L',\r\n    '\\uA746': 'L',\r\n    '\\uA780': 'L',\r\n    '\\u01C7': 'LJ',\r\n    '\\u01C8': 'Lj',\r\n    '\\u24C2': 'M',\r\n    '\\uFF2D': 'M',\r\n    '\\u1E3E': 'M',\r\n    '\\u1E40': 'M',\r\n    '\\u1E42': 'M',\r\n    '\\u2C6E': 'M',\r\n    '\\u019C': 'M',\r\n    '\\u24C3': 'N',\r\n    '\\uFF2E': 'N',\r\n    '\\u01F8': 'N',\r\n    '\\u0143': 'N',\r\n    '\\u00D1': 'N',\r\n    '\\u1E44': 'N',\r\n    '\\u0147': 'N',\r\n    '\\u1E46': 'N',\r\n    '\\u0145': 'N',\r\n    '\\u1E4A': 'N',\r\n    '\\u1E48': 'N',\r\n    '\\u0220': 'N',\r\n    '\\u019D': 'N',\r\n    '\\uA790': 'N',\r\n    '\\uA7A4': 'N',\r\n    '\\u01CA': 'NJ',\r\n    '\\u01CB': 'Nj',\r\n    '\\u24C4': 'O',\r\n    '\\uFF2F': 'O',\r\n    '\\u00D2': 'O',\r\n    '\\u00D3': 'O',\r\n    '\\u00D4': 'O',\r\n    '\\u1ED2': 'O',\r\n    '\\u1ED0': 'O',\r\n    '\\u1ED6': 'O',\r\n    '\\u1ED4': 'O',\r\n    '\\u00D5': 'O',\r\n    '\\u1E4C': 'O',\r\n    '\\u022C': 'O',\r\n    '\\u1E4E': 'O',\r\n    '\\u014C': 'O',\r\n    '\\u1E50': 'O',\r\n    '\\u1E52': 'O',\r\n    '\\u014E': 'O',\r\n    '\\u022E': 'O',\r\n    '\\u0230': 'O',\r\n    '\\u00D6': 'O',\r\n    '\\u022A': 'O',\r\n    '\\u1ECE': 'O',\r\n    '\\u0150': 'O',\r\n    '\\u01D1': 'O',\r\n    '\\u020C': 'O',\r\n    '\\u020E': 'O',\r\n    '\\u01A0': 'O',\r\n    '\\u1EDC': 'O',\r\n    '\\u1EDA': 'O',\r\n    '\\u1EE0': 'O',\r\n    '\\u1EDE': 'O',\r\n    '\\u1EE2': 'O',\r\n    '\\u1ECC': 'O',\r\n    '\\u1ED8': 'O',\r\n    '\\u01EA': 'O',\r\n    '\\u01EC': 'O',\r\n    '\\u00D8': 'O',\r\n    '\\u01FE': 'O',\r\n    '\\u0186': 'O',\r\n    '\\u019F': 'O',\r\n    '\\uA74A': 'O',\r\n    '\\uA74C': 'O',\r\n    '\\u01A2': 'OI',\r\n    '\\uA74E': 'OO',\r\n    '\\u0222': 'OU',\r\n    '\\u24C5': 'P',\r\n    '\\uFF30': 'P',\r\n    '\\u1E54': 'P',\r\n    '\\u1E56': 'P',\r\n    '\\u01A4': 'P',\r\n    '\\u2C63': 'P',\r\n    '\\uA750': 'P',\r\n    '\\uA752': 'P',\r\n    '\\uA754': 'P',\r\n    '\\u24C6': 'Q',\r\n    '\\uFF31': 'Q',\r\n    '\\uA756': 'Q',\r\n    '\\uA758': 'Q',\r\n    '\\u024A': 'Q',\r\n    '\\u24C7': 'R',\r\n    '\\uFF32': 'R',\r\n    '\\u0154': 'R',\r\n    '\\u1E58': 'R',\r\n    '\\u0158': 'R',\r\n    '\\u0210': 'R',\r\n    '\\u0212': 'R',\r\n    '\\u1E5A': 'R',\r\n    '\\u1E5C': 'R',\r\n    '\\u0156': 'R',\r\n    '\\u1E5E': 'R',\r\n    '\\u024C': 'R',\r\n    '\\u2C64': 'R',\r\n    '\\uA75A': 'R',\r\n    '\\uA7A6': 'R',\r\n    '\\uA782': 'R',\r\n    '\\u24C8': 'S',\r\n    '\\uFF33': 'S',\r\n    '\\u1E9E': 'S',\r\n    '\\u015A': 'S',\r\n    '\\u1E64': 'S',\r\n    '\\u015C': 'S',\r\n    '\\u1E60': 'S',\r\n    '\\u0160': 'S',\r\n    '\\u1E66': 'S',\r\n    '\\u1E62': 'S',\r\n    '\\u1E68': 'S',\r\n    '\\u0218': 'S',\r\n    '\\u015E': 'S',\r\n    '\\u2C7E': 'S',\r\n    '\\uA7A8': 'S',\r\n    '\\uA784': 'S',\r\n    '\\u24C9': 'T',\r\n    '\\uFF34': 'T',\r\n    '\\u1E6A': 'T',\r\n    '\\u0164': 'T',\r\n    '\\u1E6C': 'T',\r\n    '\\u021A': 'T',\r\n    '\\u0162': 'T',\r\n    '\\u1E70': 'T',\r\n    '\\u1E6E': 'T',\r\n    '\\u0166': 'T',\r\n    '\\u01AC': 'T',\r\n    '\\u01AE': 'T',\r\n    '\\u023E': 'T',\r\n    '\\uA786': 'T',\r\n    '\\uA728': 'TZ',\r\n    '\\u24CA': 'U',\r\n    '\\uFF35': 'U',\r\n    '\\u00D9': 'U',\r\n    '\\u00DA': 'U',\r\n    '\\u00DB': 'U',\r\n    '\\u0168': 'U',\r\n    '\\u1E78': 'U',\r\n    '\\u016A': 'U',\r\n    '\\u1E7A': 'U',\r\n    '\\u016C': 'U',\r\n    '\\u00DC': 'U',\r\n    '\\u01DB': 'U',\r\n    '\\u01D7': 'U',\r\n    '\\u01D5': 'U',\r\n    '\\u01D9': 'U',\r\n    '\\u1EE6': 'U',\r\n    '\\u016E': 'U',\r\n    '\\u0170': 'U',\r\n    '\\u01D3': 'U',\r\n    '\\u0214': 'U',\r\n    '\\u0216': 'U',\r\n    '\\u01AF': 'U',\r\n    '\\u1EEA': 'U',\r\n    '\\u1EE8': 'U',\r\n    '\\u1EEE': 'U',\r\n    '\\u1EEC': 'U',\r\n    '\\u1EF0': 'U',\r\n    '\\u1EE4': 'U',\r\n    '\\u1E72': 'U',\r\n    '\\u0172': 'U',\r\n    '\\u1E76': 'U',\r\n    '\\u1E74': 'U',\r\n    '\\u0244': 'U',\r\n    '\\u24CB': 'V',\r\n    '\\uFF36': 'V',\r\n    '\\u1E7C': 'V',\r\n    '\\u1E7E': 'V',\r\n    '\\u01B2': 'V',\r\n    '\\uA75E': 'V',\r\n    '\\u0245': 'V',\r\n    '\\uA760': 'VY',\r\n    '\\u24CC': 'W',\r\n    '\\uFF37': 'W',\r\n    '\\u1E80': 'W',\r\n    '\\u1E82': 'W',\r\n    '\\u0174': 'W',\r\n    '\\u1E86': 'W',\r\n    '\\u1E84': 'W',\r\n    '\\u1E88': 'W',\r\n    '\\u2C72': 'W',\r\n    '\\u24CD': 'X',\r\n    '\\uFF38': 'X',\r\n    '\\u1E8A': 'X',\r\n    '\\u1E8C': 'X',\r\n    '\\u24CE': 'Y',\r\n    '\\uFF39': 'Y',\r\n    '\\u1EF2': 'Y',\r\n    '\\u00DD': 'Y',\r\n    '\\u0176': 'Y',\r\n    '\\u1EF8': 'Y',\r\n    '\\u0232': 'Y',\r\n    '\\u1E8E': 'Y',\r\n    '\\u0178': 'Y',\r\n    '\\u1EF6': 'Y',\r\n    '\\u1EF4': 'Y',\r\n    '\\u01B3': 'Y',\r\n    '\\u024E': 'Y',\r\n    '\\u1EFE': 'Y',\r\n    '\\u24CF': 'Z',\r\n    '\\uFF3A': 'Z',\r\n    '\\u0179': 'Z',\r\n    '\\u1E90': 'Z',\r\n    '\\u017B': 'Z',\r\n    '\\u017D': 'Z',\r\n    '\\u1E92': 'Z',\r\n    '\\u1E94': 'Z',\r\n    '\\u01B5': 'Z',\r\n    '\\u0224': 'Z',\r\n    '\\u2C7F': 'Z',\r\n    '\\u2C6B': 'Z',\r\n    '\\uA762': 'Z',\r\n    '\\u24D0': 'a',\r\n    '\\uFF41': 'a',\r\n    '\\u1E9A': 'a',\r\n    '\\u00E0': 'a',\r\n    '\\u00E1': 'a',\r\n    '\\u00E2': 'a',\r\n    '\\u1EA7': 'a',\r\n    '\\u1EA5': 'a',\r\n    '\\u1EAB': 'a',\r\n    '\\u1EA9': 'a',\r\n    '\\u00E3': 'a',\r\n    '\\u0101': 'a',\r\n    '\\u0103': 'a',\r\n    '\\u1EB1': 'a',\r\n    '\\u1EAF': 'a',\r\n    '\\u1EB5': 'a',\r\n    '\\u1EB3': 'a',\r\n    '\\u0227': 'a',\r\n    '\\u01E1': 'a',\r\n    '\\u00E4': 'a',\r\n    '\\u01DF': 'a',\r\n    '\\u1EA3': 'a',\r\n    '\\u00E5': 'a',\r\n    '\\u01FB': 'a',\r\n    '\\u01CE': 'a',\r\n    '\\u0201': 'a',\r\n    '\\u0203': 'a',\r\n    '\\u1EA1': 'a',\r\n    '\\u1EAD': 'a',\r\n    '\\u1EB7': 'a',\r\n    '\\u1E01': 'a',\r\n    '\\u0105': 'a',\r\n    '\\u2C65': 'a',\r\n    '\\u0250': 'a',\r\n    '\\uA733': 'aa',\r\n    '\\u00E6': 'ae',\r\n    '\\u01FD': 'ae',\r\n    '\\u01E3': 'ae',\r\n    '\\uA735': 'ao',\r\n    '\\uA737': 'au',\r\n    '\\uA739': 'av',\r\n    '\\uA73B': 'av',\r\n    '\\uA73D': 'ay',\r\n    '\\u24D1': 'b',\r\n    '\\uFF42': 'b',\r\n    '\\u1E03': 'b',\r\n    '\\u1E05': 'b',\r\n    '\\u1E07': 'b',\r\n    '\\u0180': 'b',\r\n    '\\u0183': 'b',\r\n    '\\u0253': 'b',\r\n    '\\u24D2': 'c',\r\n    '\\uFF43': 'c',\r\n    '\\u0107': 'c',\r\n    '\\u0109': 'c',\r\n    '\\u010B': 'c',\r\n    '\\u010D': 'c',\r\n    '\\u00E7': 'c',\r\n    '\\u1E09': 'c',\r\n    '\\u0188': 'c',\r\n    '\\u023C': 'c',\r\n    '\\uA73F': 'c',\r\n    '\\u2184': 'c',\r\n    '\\u24D3': 'd',\r\n    '\\uFF44': 'd',\r\n    '\\u1E0B': 'd',\r\n    '\\u010F': 'd',\r\n    '\\u1E0D': 'd',\r\n    '\\u1E11': 'd',\r\n    '\\u1E13': 'd',\r\n    '\\u1E0F': 'd',\r\n    '\\u0111': 'd',\r\n    '\\u018C': 'd',\r\n    '\\u0256': 'd',\r\n    '\\u0257': 'd',\r\n    '\\uA77A': 'd',\r\n    '\\u01F3': 'dz',\r\n    '\\u01C6': 'dz',\r\n    '\\u24D4': 'e',\r\n    '\\uFF45': 'e',\r\n    '\\u00E8': 'e',\r\n    '\\u00E9': 'e',\r\n    '\\u00EA': 'e',\r\n    '\\u1EC1': 'e',\r\n    '\\u1EBF': 'e',\r\n    '\\u1EC5': 'e',\r\n    '\\u1EC3': 'e',\r\n    '\\u1EBD': 'e',\r\n    '\\u0113': 'e',\r\n    '\\u1E15': 'e',\r\n    '\\u1E17': 'e',\r\n    '\\u0115': 'e',\r\n    '\\u0117': 'e',\r\n    '\\u00EB': 'e',\r\n    '\\u1EBB': 'e',\r\n    '\\u011B': 'e',\r\n    '\\u0205': 'e',\r\n    '\\u0207': 'e',\r\n    '\\u1EB9': 'e',\r\n    '\\u1EC7': 'e',\r\n    '\\u0229': 'e',\r\n    '\\u1E1D': 'e',\r\n    '\\u0119': 'e',\r\n    '\\u1E19': 'e',\r\n    '\\u1E1B': 'e',\r\n    '\\u0247': 'e',\r\n    '\\u025B': 'e',\r\n    '\\u01DD': 'e',\r\n    '\\u24D5': 'f',\r\n    '\\uFF46': 'f',\r\n    '\\u1E1F': 'f',\r\n    '\\u0192': 'f',\r\n    '\\uA77C': 'f',\r\n    '\\u24D6': 'g',\r\n    '\\uFF47': 'g',\r\n    '\\u01F5': 'g',\r\n    '\\u011D': 'g',\r\n    '\\u1E21': 'g',\r\n    '\\u011F': 'g',\r\n    '\\u0121': 'g',\r\n    '\\u01E7': 'g',\r\n    '\\u0123': 'g',\r\n    '\\u01E5': 'g',\r\n    '\\u0260': 'g',\r\n    '\\uA7A1': 'g',\r\n    '\\u1D79': 'g',\r\n    '\\uA77F': 'g',\r\n    '\\u24D7': 'h',\r\n    '\\uFF48': 'h',\r\n    '\\u0125': 'h',\r\n    '\\u1E23': 'h',\r\n    '\\u1E27': 'h',\r\n    '\\u021F': 'h',\r\n    '\\u1E25': 'h',\r\n    '\\u1E29': 'h',\r\n    '\\u1E2B': 'h',\r\n    '\\u1E96': 'h',\r\n    '\\u0127': 'h',\r\n    '\\u2C68': 'h',\r\n    '\\u2C76': 'h',\r\n    '\\u0265': 'h',\r\n    '\\u0195': 'hv',\r\n    '\\u24D8': 'i',\r\n    '\\uFF49': 'i',\r\n    '\\u00EC': 'i',\r\n    '\\u00ED': 'i',\r\n    '\\u00EE': 'i',\r\n    '\\u0129': 'i',\r\n    '\\u012B': 'i',\r\n    '\\u012D': 'i',\r\n    '\\u00EF': 'i',\r\n    '\\u1E2F': 'i',\r\n    '\\u1EC9': 'i',\r\n    '\\u01D0': 'i',\r\n    '\\u0209': 'i',\r\n    '\\u020B': 'i',\r\n    '\\u1ECB': 'i',\r\n    '\\u012F': 'i',\r\n    '\\u1E2D': 'i',\r\n    '\\u0268': 'i',\r\n    '\\u0131': 'i',\r\n    '\\u24D9': 'j',\r\n    '\\uFF4A': 'j',\r\n    '\\u0135': 'j',\r\n    '\\u01F0': 'j',\r\n    '\\u0249': 'j',\r\n    '\\u24DA': 'k',\r\n    '\\uFF4B': 'k',\r\n    '\\u1E31': 'k',\r\n    '\\u01E9': 'k',\r\n    '\\u1E33': 'k',\r\n    '\\u0137': 'k',\r\n    '\\u1E35': 'k',\r\n    '\\u0199': 'k',\r\n    '\\u2C6A': 'k',\r\n    '\\uA741': 'k',\r\n    '\\uA743': 'k',\r\n    '\\uA745': 'k',\r\n    '\\uA7A3': 'k',\r\n    '\\u24DB': 'l',\r\n    '\\uFF4C': 'l',\r\n    '\\u0140': 'l',\r\n    '\\u013A': 'l',\r\n    '\\u013E': 'l',\r\n    '\\u1E37': 'l',\r\n    '\\u1E39': 'l',\r\n    '\\u013C': 'l',\r\n    '\\u1E3D': 'l',\r\n    '\\u1E3B': 'l',\r\n    '\\u017F': 'l',\r\n    '\\u0142': 'l',\r\n    '\\u019A': 'l',\r\n    '\\u026B': 'l',\r\n    '\\u2C61': 'l',\r\n    '\\uA749': 'l',\r\n    '\\uA781': 'l',\r\n    '\\uA747': 'l',\r\n    '\\u01C9': 'lj',\r\n    '\\u24DC': 'm',\r\n    '\\uFF4D': 'm',\r\n    '\\u1E3F': 'm',\r\n    '\\u1E41': 'm',\r\n    '\\u1E43': 'm',\r\n    '\\u0271': 'm',\r\n    '\\u026F': 'm',\r\n    '\\u24DD': 'n',\r\n    '\\uFF4E': 'n',\r\n    '\\u01F9': 'n',\r\n    '\\u0144': 'n',\r\n    '\\u00F1': 'n',\r\n    '\\u1E45': 'n',\r\n    '\\u0148': 'n',\r\n    '\\u1E47': 'n',\r\n    '\\u0146': 'n',\r\n    '\\u1E4B': 'n',\r\n    '\\u1E49': 'n',\r\n    '\\u019E': 'n',\r\n    '\\u0272': 'n',\r\n    '\\u0149': 'n',\r\n    '\\uA791': 'n',\r\n    '\\uA7A5': 'n',\r\n    '\\u01CC': 'nj',\r\n    '\\u24DE': 'o',\r\n    '\\uFF4F': 'o',\r\n    '\\u00F2': 'o',\r\n    '\\u00F3': 'o',\r\n    '\\u00F4': 'o',\r\n    '\\u1ED3': 'o',\r\n    '\\u1ED1': 'o',\r\n    '\\u1ED7': 'o',\r\n    '\\u1ED5': 'o',\r\n    '\\u00F5': 'o',\r\n    '\\u1E4D': 'o',\r\n    '\\u022D': 'o',\r\n    '\\u1E4F': 'o',\r\n    '\\u014D': 'o',\r\n    '\\u1E51': 'o',\r\n    '\\u1E53': 'o',\r\n    '\\u014F': 'o',\r\n    '\\u022F': 'o',\r\n    '\\u0231': 'o',\r\n    '\\u00F6': 'o',\r\n    '\\u022B': 'o',\r\n    '\\u1ECF': 'o',\r\n    '\\u0151': 'o',\r\n    '\\u01D2': 'o',\r\n    '\\u020D': 'o',\r\n    '\\u020F': 'o',\r\n    '\\u01A1': 'o',\r\n    '\\u1EDD': 'o',\r\n    '\\u1EDB': 'o',\r\n    '\\u1EE1': 'o',\r\n    '\\u1EDF': 'o',\r\n    '\\u1EE3': 'o',\r\n    '\\u1ECD': 'o',\r\n    '\\u1ED9': 'o',\r\n    '\\u01EB': 'o',\r\n    '\\u01ED': 'o',\r\n    '\\u00F8': 'o',\r\n    '\\u01FF': 'o',\r\n    '\\u0254': 'o',\r\n    '\\uA74B': 'o',\r\n    '\\uA74D': 'o',\r\n    '\\u0275': 'o',\r\n    '\\u01A3': 'oi',\r\n    '\\u0223': 'ou',\r\n    '\\uA74F': 'oo',\r\n    '\\u24DF': 'p',\r\n    '\\uFF50': 'p',\r\n    '\\u1E55': 'p',\r\n    '\\u1E57': 'p',\r\n    '\\u01A5': 'p',\r\n    '\\u1D7D': 'p',\r\n    '\\uA751': 'p',\r\n    '\\uA753': 'p',\r\n    '\\uA755': 'p',\r\n    '\\u24E0': 'q',\r\n    '\\uFF51': 'q',\r\n    '\\u024B': 'q',\r\n    '\\uA757': 'q',\r\n    '\\uA759': 'q',\r\n    '\\u24E1': 'r',\r\n    '\\uFF52': 'r',\r\n    '\\u0155': 'r',\r\n    '\\u1E59': 'r',\r\n    '\\u0159': 'r',\r\n    '\\u0211': 'r',\r\n    '\\u0213': 'r',\r\n    '\\u1E5B': 'r',\r\n    '\\u1E5D': 'r',\r\n    '\\u0157': 'r',\r\n    '\\u1E5F': 'r',\r\n    '\\u024D': 'r',\r\n    '\\u027D': 'r',\r\n    '\\uA75B': 'r',\r\n    '\\uA7A7': 'r',\r\n    '\\uA783': 'r',\r\n    '\\u24E2': 's',\r\n    '\\uFF53': 's',\r\n    '\\u00DF': 's',\r\n    '\\u015B': 's',\r\n    '\\u1E65': 's',\r\n    '\\u015D': 's',\r\n    '\\u1E61': 's',\r\n    '\\u0161': 's',\r\n    '\\u1E67': 's',\r\n    '\\u1E63': 's',\r\n    '\\u1E69': 's',\r\n    '\\u0219': 's',\r\n    '\\u015F': 's',\r\n    '\\u023F': 's',\r\n    '\\uA7A9': 's',\r\n    '\\uA785': 's',\r\n    '\\u1E9B': 's',\r\n    '\\u24E3': 't',\r\n    '\\uFF54': 't',\r\n    '\\u1E6B': 't',\r\n    '\\u1E97': 't',\r\n    '\\u0165': 't',\r\n    '\\u1E6D': 't',\r\n    '\\u021B': 't',\r\n    '\\u0163': 't',\r\n    '\\u1E71': 't',\r\n    '\\u1E6F': 't',\r\n    '\\u0167': 't',\r\n    '\\u01AD': 't',\r\n    '\\u0288': 't',\r\n    '\\u2C66': 't',\r\n    '\\uA787': 't',\r\n    '\\uA729': 'tz',\r\n    '\\u24E4': 'u',\r\n    '\\uFF55': 'u',\r\n    '\\u00F9': 'u',\r\n    '\\u00FA': 'u',\r\n    '\\u00FB': 'u',\r\n    '\\u0169': 'u',\r\n    '\\u1E79': 'u',\r\n    '\\u016B': 'u',\r\n    '\\u1E7B': 'u',\r\n    '\\u016D': 'u',\r\n    '\\u00FC': 'u',\r\n    '\\u01DC': 'u',\r\n    '\\u01D8': 'u',\r\n    '\\u01D6': 'u',\r\n    '\\u01DA': 'u',\r\n    '\\u1EE7': 'u',\r\n    '\\u016F': 'u',\r\n    '\\u0171': 'u',\r\n    '\\u01D4': 'u',\r\n    '\\u0215': 'u',\r\n    '\\u0217': 'u',\r\n    '\\u01B0': 'u',\r\n    '\\u1EEB': 'u',\r\n    '\\u1EE9': 'u',\r\n    '\\u1EEF': 'u',\r\n    '\\u1EED': 'u',\r\n    '\\u1EF1': 'u',\r\n    '\\u1EE5': 'u',\r\n    '\\u1E73': 'u',\r\n    '\\u0173': 'u',\r\n    '\\u1E77': 'u',\r\n    '\\u1E75': 'u',\r\n    '\\u0289': 'u',\r\n    '\\u24E5': 'v',\r\n    '\\uFF56': 'v',\r\n    '\\u1E7D': 'v',\r\n    '\\u1E7F': 'v',\r\n    '\\u028B': 'v',\r\n    '\\uA75F': 'v',\r\n    '\\u028C': 'v',\r\n    '\\uA761': 'vy',\r\n    '\\u24E6': 'w',\r\n    '\\uFF57': 'w',\r\n    '\\u1E81': 'w',\r\n    '\\u1E83': 'w',\r\n    '\\u0175': 'w',\r\n    '\\u1E87': 'w',\r\n    '\\u1E85': 'w',\r\n    '\\u1E98': 'w',\r\n    '\\u1E89': 'w',\r\n    '\\u2C73': 'w',\r\n    '\\u24E7': 'x',\r\n    '\\uFF58': 'x',\r\n    '\\u1E8B': 'x',\r\n    '\\u1E8D': 'x',\r\n    '\\u24E8': 'y',\r\n    '\\uFF59': 'y',\r\n    '\\u1EF3': 'y',\r\n    '\\u00FD': 'y',\r\n    '\\u0177': 'y',\r\n    '\\u1EF9': 'y',\r\n    '\\u0233': 'y',\r\n    '\\u1E8F': 'y',\r\n    '\\u00FF': 'y',\r\n    '\\u1EF7': 'y',\r\n    '\\u1E99': 'y',\r\n    '\\u1EF5': 'y',\r\n    '\\u01B4': 'y',\r\n    '\\u024F': 'y',\r\n    '\\u1EFF': 'y',\r\n    '\\u24E9': 'z',\r\n    '\\uFF5A': 'z',\r\n    '\\u017A': 'z',\r\n    '\\u1E91': 'z',\r\n    '\\u017C': 'z',\r\n    '\\u017E': 'z',\r\n    '\\u1E93': 'z',\r\n    '\\u1E95': 'z',\r\n    '\\u01B6': 'z',\r\n    '\\u0225': 'z',\r\n    '\\u0240': 'z',\r\n    '\\u2C6C': 'z',\r\n    '\\uA763': 'z',\r\n    '\\u0386': '\\u0391',\r\n    '\\u0388': '\\u0395',\r\n    '\\u0389': '\\u0397',\r\n    '\\u038A': '\\u0399',\r\n    '\\u03AA': '\\u0399',\r\n    '\\u038C': '\\u039F',\r\n    '\\u038E': '\\u03A5',\r\n    '\\u03AB': '\\u03A5',\r\n    '\\u038F': '\\u03A9',\r\n    '\\u03AC': '\\u03B1',\r\n    '\\u03AD': '\\u03B5',\r\n    '\\u03AE': '\\u03B7',\r\n    '\\u03AF': '\\u03B9',\r\n    '\\u03CA': '\\u03B9',\r\n    '\\u0390': '\\u03B9',\r\n    '\\u03CC': '\\u03BF',\r\n    '\\u03CD': '\\u03C5',\r\n    '\\u03CB': '\\u03C5',\r\n    '\\u03B0': '\\u03C5',\r\n    '\\u03C9': '\\u03C9',\r\n    '\\u03C2': '\\u03C3'\r\n  };\r\n\r\n  return diacritics;\r\n});\r\n\r\nS2.define('select2/data/base',[\r\n  '../utils'\r\n], function (Utils) {\r\n  function BaseAdapter ($element, options) {\r\n    BaseAdapter.__super__.constructor.call(this);\r\n  }\r\n\r\n  Utils.Extend(BaseAdapter, Utils.Observable);\r\n\r\n  BaseAdapter.prototype.current = function (callback) {\r\n    throw new Error('The `current` method must be defined in child classes.');\r\n  };\r\n\r\n  BaseAdapter.prototype.query = function (params, callback) {\r\n    throw new Error('The `query` method must be defined in child classes.');\r\n  };\r\n\r\n  BaseAdapter.prototype.bind = function (container, $container) {\r\n    // Can be implemented in subclasses\r\n  };\r\n\r\n  BaseAdapter.prototype.destroy = function () {\r\n    // Can be implemented in subclasses\r\n  };\r\n\r\n  BaseAdapter.prototype.generateResultId = function (container, data) {\r\n    var id = container.id + '-result-';\r\n\r\n    id += Utils.generateChars(4);\r\n\r\n    if (data.id != null) {\r\n      id += '-' + data.id.toString();\r\n    } else {\r\n      id += '-' + Utils.generateChars(4);\r\n    }\r\n    return id;\r\n  };\r\n\r\n  return BaseAdapter;\r\n});\r\n\r\nS2.define('select2/data/select',[\r\n  './base',\r\n  '../utils',\r\n  'jquery'\r\n], function (BaseAdapter, Utils, $) {\r\n  function SelectAdapter ($element, options) {\r\n    this.$element = $element;\r\n    this.options = options;\r\n\r\n    SelectAdapter.__super__.constructor.call(this);\r\n  }\r\n\r\n  Utils.Extend(SelectAdapter, BaseAdapter);\r\n\r\n  SelectAdapter.prototype.current = function (callback) {\r\n    var data = [];\r\n    var self = this;\r\n\r\n    this.$element.find(':selected').each(function () {\r\n      var $option = $(this);\r\n\r\n      var option = self.item($option);\r\n\r\n      data.push(option);\r\n    });\r\n\r\n    callback(data);\r\n  };\r\n\r\n  SelectAdapter.prototype.select = function (data) {\r\n    var self = this;\r\n\r\n    data.selected = true;\r\n\r\n    // If data.element is a DOM node, use it instead\r\n    if ($(data.element).is('option')) {\r\n      data.element.selected = true;\r\n\r\n      this.$element.trigger('change');\r\n\r\n      return;\r\n    }\r\n\r\n    if (this.$element.prop('multiple')) {\r\n      this.current(function (currentData) {\r\n        var val = [];\r\n\r\n        data = [data];\r\n        data.push.apply(data, currentData);\r\n\r\n        for (var d = 0; d < data.length; d++) {\r\n          var id = data[d].id;\r\n\r\n          if ($.inArray(id, val) === -1) {\r\n            val.push(id);\r\n          }\r\n        }\r\n\r\n        self.$element.val(val);\r\n        self.$element.trigger('change');\r\n      });\r\n    } else {\r\n      var val = data.id;\r\n\r\n      this.$element.val(val);\r\n      this.$element.trigger('change');\r\n    }\r\n  };\r\n\r\n  SelectAdapter.prototype.unselect = function (data) {\r\n    var self = this;\r\n\r\n    if (!this.$element.prop('multiple')) {\r\n      return;\r\n    }\r\n\r\n    data.selected = false;\r\n\r\n    if ($(data.element).is('option')) {\r\n      data.element.selected = false;\r\n\r\n      this.$element.trigger('change');\r\n\r\n      return;\r\n    }\r\n\r\n    this.current(function (currentData) {\r\n      var val = [];\r\n\r\n      for (var d = 0; d < currentData.length; d++) {\r\n        var id = currentData[d].id;\r\n\r\n        if (id !== data.id && $.inArray(id, val) === -1) {\r\n          val.push(id);\r\n        }\r\n      }\r\n\r\n      self.$element.val(val);\r\n\r\n      self.$element.trigger('change');\r\n    });\r\n  };\r\n\r\n  SelectAdapter.prototype.bind = function (container, $container) {\r\n    var self = this;\r\n\r\n    this.container = container;\r\n\r\n    container.on('select', function (params) {\r\n      self.select(params.data);\r\n    });\r\n\r\n    container.on('unselect', function (params) {\r\n      self.unselect(params.data);\r\n    });\r\n  };\r\n\r\n  SelectAdapter.prototype.destroy = function () {\r\n    // Remove anything added to child elements\r\n    this.$element.find('*').each(function () {\r\n      // Remove any custom data set by Select2\r\n      $.removeData(this, 'data');\r\n    });\r\n  };\r\n\r\n  SelectAdapter.prototype.query = function (params, callback) {\r\n    var data = [];\r\n    var self = this;\r\n\r\n    var $options = this.$element.children();\r\n\r\n    $options.each(function () {\r\n      var $option = $(this);\r\n\r\n      if (!$option.is('option') && !$option.is('optgroup')) {\r\n        return;\r\n      }\r\n\r\n      var option = self.item($option);\r\n\r\n      var matches = self.matches(params, option);\r\n\r\n      if (matches !== null) {\r\n        data.push(matches);\r\n      }\r\n    });\r\n\r\n    callback({\r\n      results: data\r\n    });\r\n  };\r\n\r\n  SelectAdapter.prototype.addOptions = function ($options) {\r\n    Utils.appendMany(this.$element, $options);\r\n  };\r\n\r\n  SelectAdapter.prototype.option = function (data) {\r\n    var option;\r\n\r\n    if (data.children) {\r\n      option = document.createElement('optgroup');\r\n      option.label = data.text;\r\n    } else {\r\n      option = document.createElement('option');\r\n\r\n      if (option.textContent !== undefined) {\r\n        option.textContent = data.text;\r\n      } else {\r\n        option.innerText = data.text;\r\n      }\r\n    }\r\n\r\n    if (data.id !== undefined) {\r\n      option.value = data.id;\r\n    }\r\n\r\n    if (data.disabled) {\r\n      option.disabled = true;\r\n    }\r\n\r\n    if (data.selected) {\r\n      option.selected = true;\r\n    }\r\n\r\n    if (data.title) {\r\n      option.title = data.title;\r\n    }\r\n\r\n    var $option = $(option);\r\n\r\n    var normalizedData = this._normalizeItem(data);\r\n    normalizedData.element = option;\r\n\r\n    // Override the option's data with the combined data\r\n    $.data(option, 'data', normalizedData);\r\n\r\n    return $option;\r\n  };\r\n\r\n  SelectAdapter.prototype.item = function ($option) {\r\n    var data = {};\r\n\r\n    data = $.data($option[0], 'data');\r\n\r\n    if (data != null) {\r\n      return data;\r\n    }\r\n\r\n    if ($option.is('option')) {\r\n      data = {\r\n        id: $option.val(),\r\n        text: $option.text(),\r\n        disabled: $option.prop('disabled'),\r\n        selected: $option.prop('selected'),\r\n        title: $option.prop('title')\r\n      };\r\n    } else if ($option.is('optgroup')) {\r\n      data = {\r\n        text: $option.prop('label'),\r\n        children: [],\r\n        title: $option.prop('title')\r\n      };\r\n\r\n      var $children = $option.children('option');\r\n      var children = [];\r\n\r\n      for (var c = 0; c < $children.length; c++) {\r\n        var $child = $($children[c]);\r\n\r\n        var child = this.item($child);\r\n\r\n        children.push(child);\r\n      }\r\n\r\n      data.children = children;\r\n    }\r\n\r\n    data = this._normalizeItem(data);\r\n    data.element = $option[0];\r\n\r\n    $.data($option[0], 'data', data);\r\n\r\n    return data;\r\n  };\r\n\r\n  SelectAdapter.prototype._normalizeItem = function (item) {\r\n    if (!$.isPlainObject(item)) {\r\n      item = {\r\n        id: item,\r\n        text: item\r\n      };\r\n    }\r\n\r\n    item = $.extend({}, {\r\n      text: ''\r\n    }, item);\r\n\r\n    var defaults = {\r\n      selected: false,\r\n      disabled: false\r\n    };\r\n\r\n    if (item.id != null) {\r\n      item.id = item.id.toString();\r\n    }\r\n\r\n    if (item.text != null) {\r\n      item.text = item.text.toString();\r\n    }\r\n\r\n    if (item._resultId == null && item.id && this.container != null) {\r\n      item._resultId = this.generateResultId(this.container, item);\r\n    }\r\n\r\n    return $.extend({}, defaults, item);\r\n  };\r\n\r\n  SelectAdapter.prototype.matches = function (params, data) {\r\n    var matcher = this.options.get('matcher');\r\n\r\n    return matcher(params, data);\r\n  };\r\n\r\n  return SelectAdapter;\r\n});\r\n\r\nS2.define('select2/data/array',[\r\n  './select',\r\n  '../utils',\r\n  'jquery'\r\n], function (SelectAdapter, Utils, $) {\r\n  function ArrayAdapter ($element, options) {\r\n    var data = options.get('data') || [];\r\n\r\n    ArrayAdapter.__super__.constructor.call(this, $element, options);\r\n\r\n    this.addOptions(this.convertToOptions(data));\r\n  }\r\n\r\n  Utils.Extend(ArrayAdapter, SelectAdapter);\r\n\r\n  ArrayAdapter.prototype.select = function (data) {\r\n    var $option = this.$element.find('option').filter(function (i, elm) {\r\n      return elm.value == data.id.toString();\r\n    });\r\n\r\n    if ($option.length === 0) {\r\n      $option = this.option(data);\r\n\r\n      this.addOptions($option);\r\n    }\r\n\r\n    ArrayAdapter.__super__.select.call(this, data);\r\n  };\r\n\r\n  ArrayAdapter.prototype.convertToOptions = function (data) {\r\n    var self = this;\r\n\r\n    var $existing = this.$element.find('option');\r\n    var existingIds = $existing.map(function () {\r\n      return self.item($(this)).id;\r\n    }).get();\r\n\r\n    var $options = [];\r\n\r\n    // Filter out all items except for the one passed in the argument\r\n    function onlyItem (item) {\r\n      return function () {\r\n        return $(this).val() == item.id;\r\n      };\r\n    }\r\n\r\n    for (var d = 0; d < data.length; d++) {\r\n      var item = this._normalizeItem(data[d]);\r\n\r\n      // Skip items which were pre-loaded, only merge the data\r\n      if ($.inArray(item.id, existingIds) >= 0) {\r\n        var $existingOption = $existing.filter(onlyItem(item));\r\n\r\n        var existingData = this.item($existingOption);\r\n        var newData = $.extend(true, {}, item, existingData);\r\n\r\n        var $newOption = this.option(newData);\r\n\r\n        $existingOption.replaceWith($newOption);\r\n\r\n        continue;\r\n      }\r\n\r\n      var $option = this.option(item);\r\n\r\n      if (item.children) {\r\n        var $children = this.convertToOptions(item.children);\r\n\r\n        Utils.appendMany($option, $children);\r\n      }\r\n\r\n      $options.push($option);\r\n    }\r\n\r\n    return $options;\r\n  };\r\n\r\n  return ArrayAdapter;\r\n});\r\n\r\nS2.define('select2/data/ajax',[\r\n  './array',\r\n  '../utils',\r\n  'jquery'\r\n], function (ArrayAdapter, Utils, $) {\r\n  function AjaxAdapter ($element, options) {\r\n    this.ajaxOptions = this._applyDefaults(options.get('ajax'));\r\n\r\n    if (this.ajaxOptions.processResults != null) {\r\n      this.processResults = this.ajaxOptions.processResults;\r\n    }\r\n\r\n    AjaxAdapter.__super__.constructor.call(this, $element, options);\r\n  }\r\n\r\n  Utils.Extend(AjaxAdapter, ArrayAdapter);\r\n\r\n  AjaxAdapter.prototype._applyDefaults = function (options) {\r\n    var defaults = {\r\n      data: function (params) {\r\n        return $.extend({}, params, {\r\n          q: params.term\r\n        });\r\n      },\r\n      transport: function (params, success, failure) {\r\n        var $request = $.ajax(params);\r\n\r\n        $request.then(success);\r\n        $request.fail(failure);\r\n\r\n        return $request;\r\n      }\r\n    };\r\n\r\n    return $.extend({}, defaults, options, true);\r\n  };\r\n\r\n  AjaxAdapter.prototype.processResults = function (results) {\r\n    return results;\r\n  };\r\n\r\n  AjaxAdapter.prototype.query = function (params, callback) {\r\n    var matches = [];\r\n    var self = this;\r\n\r\n    if (this._request != null) {\r\n      // JSONP requests cannot always be aborted\r\n      if ($.isFunction(this._request.abort)) {\r\n        this._request.abort();\r\n      }\r\n\r\n      this._request = null;\r\n    }\r\n\r\n    var options = $.extend({\r\n      type: 'GET'\r\n    }, this.ajaxOptions);\r\n\r\n    if (typeof options.url === 'function') {\r\n      options.url = options.url.call(this.$element, params);\r\n    }\r\n\r\n    if (typeof options.data === 'function') {\r\n      options.data = options.data.call(this.$element, params);\r\n    }\r\n\r\n    function request () {\r\n      var $request = options.transport(options, function (data) {\r\n        var results = self.processResults(data, params);\r\n\r\n        if (self.options.get('debug') && window.console && console.error) {\r\n          // Check to make sure that the response included a `results` key.\r\n          if (!results || !results.results || !$.isArray(results.results)) {\r\n            console.error(\r\n              'Select2: The AJAX results did not return an array in the ' +\r\n              '`results` key of the response.'\r\n            );\r\n          }\r\n        }\r\n\r\n        callback(results);\r\n      }, function () {\r\n        // Attempt to detect if a request was aborted\r\n        // Only works if the transport exposes a status property\r\n        if ($request.status && $request.status === '0') {\r\n          return;\r\n        }\r\n\r\n        self.trigger('results:message', {\r\n          message: 'errorLoading'\r\n        });\r\n      });\r\n\r\n      self._request = $request;\r\n    }\r\n\r\n    if (this.ajaxOptions.delay && params.term != null) {\r\n      if (this._queryTimeout) {\r\n        window.clearTimeout(this._queryTimeout);\r\n      }\r\n\r\n      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);\r\n    } else {\r\n      request();\r\n    }\r\n  };\r\n\r\n  return AjaxAdapter;\r\n});\r\n\r\nS2.define('select2/data/tags',[\r\n  'jquery'\r\n], function ($) {\r\n  function Tags (decorated, $element, options) {\r\n    var tags = options.get('tags');\r\n\r\n    var createTag = options.get('createTag');\r\n\r\n    if (createTag !== undefined) {\r\n      this.createTag = createTag;\r\n    }\r\n\r\n    var insertTag = options.get('insertTag');\r\n\r\n    if (insertTag !== undefined) {\r\n        this.insertTag = insertTag;\r\n    }\r\n\r\n    decorated.call(this, $element, options);\r\n\r\n    if ($.isArray(tags)) {\r\n      for (var t = 0; t < tags.length; t++) {\r\n        var tag = tags[t];\r\n        var item = this._normalizeItem(tag);\r\n\r\n        var $option = this.option(item);\r\n\r\n        this.$element.append($option);\r\n      }\r\n    }\r\n  }\r\n\r\n  Tags.prototype.query = function (decorated, params, callback) {\r\n    var self = this;\r\n\r\n    this._removeOldTags();\r\n\r\n    if (params.term == null || params.page != null) {\r\n      decorated.call(this, params, callback);\r\n      return;\r\n    }\r\n\r\n    function wrapper (obj, child) {\r\n      var data = obj.results;\r\n\r\n      for (var i = 0; i < data.length; i++) {\r\n        var option = data[i];\r\n\r\n        var checkChildren = (\r\n          option.children != null &&\r\n          !wrapper({\r\n            results: option.children\r\n          }, true)\r\n        );\r\n\r\n        var optionText = (option.text || '').toUpperCase();\r\n        var paramsTerm = (params.term || '').toUpperCase();\r\n\r\n        var checkText = optionText === paramsTerm;\r\n\r\n        if (checkText || checkChildren) {\r\n          if (child) {\r\n            return false;\r\n          }\r\n\r\n          obj.data = data;\r\n          callback(obj);\r\n\r\n          return;\r\n        }\r\n      }\r\n\r\n      if (child) {\r\n        return true;\r\n      }\r\n\r\n      var tag = self.createTag(params);\r\n\r\n      if (tag != null) {\r\n        var $option = self.option(tag);\r\n        $option.attr('data-select2-tag', true);\r\n\r\n        self.addOptions([$option]);\r\n\r\n        self.insertTag(data, tag);\r\n      }\r\n\r\n      obj.results = data;\r\n\r\n      callback(obj);\r\n    }\r\n\r\n    decorated.call(this, params, wrapper);\r\n  };\r\n\r\n  Tags.prototype.createTag = function (decorated, params) {\r\n    var term = $.trim(params.term);\r\n\r\n    if (term === '') {\r\n      return null;\r\n    }\r\n\r\n    return {\r\n      id: term,\r\n      text: term\r\n    };\r\n  };\r\n\r\n  Tags.prototype.insertTag = function (_, data, tag) {\r\n    data.unshift(tag);\r\n  };\r\n\r\n  Tags.prototype._removeOldTags = function (_) {\r\n    var tag = this._lastTag;\r\n\r\n    var $options = this.$element.find('option[data-select2-tag]');\r\n\r\n    $options.each(function () {\r\n      if (this.selected) {\r\n        return;\r\n      }\r\n\r\n      $(this).remove();\r\n    });\r\n  };\r\n\r\n  return Tags;\r\n});\r\n\r\nS2.define('select2/data/tokenizer',[\r\n  'jquery'\r\n], function ($) {\r\n  function Tokenizer (decorated, $element, options) {\r\n    var tokenizer = options.get('tokenizer');\r\n\r\n    if (tokenizer !== undefined) {\r\n      this.tokenizer = tokenizer;\r\n    }\r\n\r\n    decorated.call(this, $element, options);\r\n  }\r\n\r\n  Tokenizer.prototype.bind = function (decorated, container, $container) {\r\n    decorated.call(this, container, $container);\r\n\r\n    this.$search =  container.dropdown.$search || container.selection.$search ||\r\n      $container.find('.select2-search__field');\r\n  };\r\n\r\n  Tokenizer.prototype.query = function (decorated, params, callback) {\r\n    var self = this;\r\n\r\n    function createAndSelect (data) {\r\n      // Normalize the data object so we can use it for checks\r\n      var item = self._normalizeItem(data);\r\n\r\n      // Check if the data object already exists as a tag\r\n      // Select it if it doesn't\r\n      var $existingOptions = self.$element.find('option').filter(function () {\r\n        return $(this).val() === item.id;\r\n      });\r\n\r\n      // If an existing option wasn't found for it, create the option\r\n      if (!$existingOptions.length) {\r\n        var $option = self.option(item);\r\n        $option.attr('data-select2-tag', true);\r\n\r\n        self._removeOldTags();\r\n        self.addOptions([$option]);\r\n      }\r\n\r\n      // Select the item, now that we know there is an option for it\r\n      select(item);\r\n    }\r\n\r\n    function select (data) {\r\n      self.trigger('select', {\r\n        data: data\r\n      });\r\n    }\r\n\r\n    params.term = params.term || '';\r\n\r\n    var tokenData = this.tokenizer(params, this.options, createAndSelect);\r\n\r\n    if (tokenData.term !== params.term) {\r\n      // Replace the search term if we have the search box\r\n      if (this.$search.length) {\r\n        this.$search.val(tokenData.term);\r\n        this.$search.focus();\r\n      }\r\n\r\n      params.term = tokenData.term;\r\n    }\r\n\r\n    decorated.call(this, params, callback);\r\n  };\r\n\r\n  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {\r\n    var separators = options.get('tokenSeparators') || [];\r\n    var term = params.term;\r\n    var i = 0;\r\n\r\n    var createTag = this.createTag || function (params) {\r\n      return {\r\n        id: params.term,\r\n        text: params.term\r\n      };\r\n    };\r\n\r\n    while (i < term.length) {\r\n      var termChar = term[i];\r\n\r\n      if ($.inArray(termChar, separators) === -1) {\r\n        i++;\r\n\r\n        continue;\r\n      }\r\n\r\n      var part = term.substr(0, i);\r\n      var partParams = $.extend({}, params, {\r\n        term: part\r\n      });\r\n\r\n      var data = createTag(partParams);\r\n\r\n      if (data == null) {\r\n        i++;\r\n        continue;\r\n      }\r\n\r\n      callback(data);\r\n\r\n      // Reset the term to not include the tokenized portion\r\n      term = term.substr(i + 1) || '';\r\n      i = 0;\r\n    }\r\n\r\n    return {\r\n      term: term\r\n    };\r\n  };\r\n\r\n  return Tokenizer;\r\n});\r\n\r\nS2.define('select2/data/minimumInputLength',[\r\n\r\n], function () {\r\n  function MinimumInputLength (decorated, $e, options) {\r\n    this.minimumInputLength = options.get('minimumInputLength');\r\n\r\n    decorated.call(this, $e, options);\r\n  }\r\n\r\n  MinimumInputLength.prototype.query = function (decorated, params, callback) {\r\n    params.term = params.term || '';\r\n\r\n    if (params.term.length < this.minimumInputLength) {\r\n      this.trigger('results:message', {\r\n        message: 'inputTooShort',\r\n        args: {\r\n          minimum: this.minimumInputLength,\r\n          input: params.term,\r\n          params: params\r\n        }\r\n      });\r\n\r\n      return;\r\n    }\r\n\r\n    decorated.call(this, params, callback);\r\n  };\r\n\r\n  return MinimumInputLength;\r\n});\r\n\r\nS2.define('select2/data/maximumInputLength',[\r\n\r\n], function () {\r\n  function MaximumInputLength (decorated, $e, options) {\r\n    this.maximumInputLength = options.get('maximumInputLength');\r\n\r\n    decorated.call(this, $e, options);\r\n  }\r\n\r\n  MaximumInputLength.prototype.query = function (decorated, params, callback) {\r\n    params.term = params.term || '';\r\n\r\n    if (this.maximumInputLength > 0 &&\r\n        params.term.length > this.maximumInputLength) {\r\n      this.trigger('results:message', {\r\n        message: 'inputTooLong',\r\n        args: {\r\n          maximum: this.maximumInputLength,\r\n          input: params.term,\r\n          params: params\r\n        }\r\n      });\r\n\r\n      return;\r\n    }\r\n\r\n    decorated.call(this, params, callback);\r\n  };\r\n\r\n  return MaximumInputLength;\r\n});\r\n\r\nS2.define('select2/data/maximumSelectionLength',[\r\n\r\n], function (){\r\n  function MaximumSelectionLength (decorated, $e, options) {\r\n    this.maximumSelectionLength = options.get('maximumSelectionLength');\r\n\r\n    decorated.call(this, $e, options);\r\n  }\r\n\r\n  MaximumSelectionLength.prototype.query =\r\n    function (decorated, params, callback) {\r\n      var self = this;\r\n\r\n      this.current(function (currentData) {\r\n        var count = currentData != null ? currentData.length : 0;\r\n        if (self.maximumSelectionLength > 0 &&\r\n          count >= self.maximumSelectionLength) {\r\n          self.trigger('results:message', {\r\n            message: 'maximumSelected',\r\n            args: {\r\n              maximum: self.maximumSelectionLength\r\n            }\r\n          });\r\n          return;\r\n        }\r\n        decorated.call(self, params, callback);\r\n      });\r\n  };\r\n\r\n  return MaximumSelectionLength;\r\n});\r\n\r\nS2.define('select2/dropdown',[\r\n  'jquery',\r\n  './utils'\r\n], function ($, Utils) {\r\n  function Dropdown ($element, options) {\r\n    this.$element = $element;\r\n    this.options = options;\r\n\r\n    Dropdown.__super__.constructor.call(this);\r\n  }\r\n\r\n  Utils.Extend(Dropdown, Utils.Observable);\r\n\r\n  Dropdown.prototype.render = function () {\r\n    var $dropdown = $(\r\n      '<span class=\"select2-dropdown\">' +\r\n        '<span class=\"select2-results\"></span>' +\r\n      '</span>'\r\n    );\r\n\r\n    $dropdown.attr('dir', this.options.get('dir'));\r\n\r\n    this.$dropdown = $dropdown;\r\n\r\n    return $dropdown;\r\n  };\r\n\r\n  Dropdown.prototype.bind = function () {\r\n    // Should be implemented in subclasses\r\n  };\r\n\r\n  Dropdown.prototype.position = function ($dropdown, $container) {\r\n    // Should be implmented in subclasses\r\n  };\r\n\r\n  Dropdown.prototype.destroy = function () {\r\n    // Remove the dropdown from the DOM\r\n    this.$dropdown.remove();\r\n  };\r\n\r\n  return Dropdown;\r\n});\r\n\r\nS2.define('select2/dropdown/search',[\r\n  'jquery',\r\n  '../utils'\r\n], function ($, Utils) {\r\n  function Search () { }\r\n\r\n  Search.prototype.render = function (decorated) {\r\n    var $rendered = decorated.call(this);\r\n\r\n    var $search = $(\r\n      '<span class=\"select2-search select2-search--dropdown\">' +\r\n        '<input class=\"select2-search__field\" type=\"search\" tabindex=\"-1\"' +\r\n        ' autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"' +\r\n        ' spellcheck=\"false\" role=\"textbox\" />' +\r\n      '</span>'\r\n    );\r\n\r\n    this.$searchContainer = $search;\r\n    this.$search = $search.find('input');\r\n\r\n    $rendered.prepend($search);\r\n\r\n    return $rendered;\r\n  };\r\n\r\n  Search.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    this.$search.on('keydown', function (evt) {\r\n      self.trigger('keypress', evt);\r\n\r\n      self._keyUpPrevented = evt.isDefaultPrevented();\r\n    });\r\n\r\n    // Workaround for browsers which do not support the `input` event\r\n    // This will prevent double-triggering of events for browsers which support\r\n    // both the `keyup` and `input` events.\r\n    this.$search.on('input', function (evt) {\r\n      // Unbind the duplicated `keyup` event\r\n      $(this).off('keyup');\r\n    });\r\n\r\n    this.$search.on('keyup input', function (evt) {\r\n      self.handleSearch(evt);\r\n    });\r\n\r\n    container.on('open', function () {\r\n      self.$search.attr('tabindex', 0);\r\n\r\n      self.$search.focus();\r\n\r\n      window.setTimeout(function () {\r\n        self.$search.focus();\r\n      }, 0);\r\n    });\r\n\r\n    container.on('close', function () {\r\n      self.$search.attr('tabindex', -1);\r\n\r\n      self.$search.val('');\r\n    });\r\n\r\n    container.on('focus', function () {\r\n      if (!container.isOpen()) {\r\n        self.$search.focus();\r\n      }\r\n    });\r\n\r\n    container.on('results:all', function (params) {\r\n      if (params.query.term == null || params.query.term === '') {\r\n        var showSearch = self.showSearch(params);\r\n\r\n        if (showSearch) {\r\n          self.$searchContainer.removeClass('select2-search--hide');\r\n        } else {\r\n          self.$searchContainer.addClass('select2-search--hide');\r\n        }\r\n      }\r\n    });\r\n  };\r\n\r\n  Search.prototype.handleSearch = function (evt) {\r\n    if (!this._keyUpPrevented) {\r\n      var input = this.$search.val();\r\n\r\n      this.trigger('query', {\r\n        term: input\r\n      });\r\n    }\r\n\r\n    this._keyUpPrevented = false;\r\n  };\r\n\r\n  Search.prototype.showSearch = function (_, params) {\r\n    return true;\r\n  };\r\n\r\n  return Search;\r\n});\r\n\r\nS2.define('select2/dropdown/hidePlaceholder',[\r\n\r\n], function () {\r\n  function HidePlaceholder (decorated, $element, options, dataAdapter) {\r\n    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));\r\n\r\n    decorated.call(this, $element, options, dataAdapter);\r\n  }\r\n\r\n  HidePlaceholder.prototype.append = function (decorated, data) {\r\n    data.results = this.removePlaceholder(data.results);\r\n\r\n    decorated.call(this, data);\r\n  };\r\n\r\n  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {\r\n    if (typeof placeholder === 'string') {\r\n      placeholder = {\r\n        id: '',\r\n        text: placeholder\r\n      };\r\n    }\r\n\r\n    return placeholder;\r\n  };\r\n\r\n  HidePlaceholder.prototype.removePlaceholder = function (_, data) {\r\n    var modifiedData = data.slice(0);\r\n\r\n    for (var d = data.length - 1; d >= 0; d--) {\r\n      var item = data[d];\r\n\r\n      if (this.placeholder.id === item.id) {\r\n        modifiedData.splice(d, 1);\r\n      }\r\n    }\r\n\r\n    return modifiedData;\r\n  };\r\n\r\n  return HidePlaceholder;\r\n});\r\n\r\nS2.define('select2/dropdown/infiniteScroll',[\r\n  'jquery'\r\n], function ($) {\r\n  function InfiniteScroll (decorated, $element, options, dataAdapter) {\r\n    this.lastParams = {};\r\n\r\n    decorated.call(this, $element, options, dataAdapter);\r\n\r\n    this.$loadingMore = this.createLoadingMore();\r\n    this.loading = false;\r\n  }\r\n\r\n  InfiniteScroll.prototype.append = function (decorated, data) {\r\n    this.$loadingMore.remove();\r\n    this.loading = false;\r\n\r\n    decorated.call(this, data);\r\n\r\n    if (this.showLoadingMore(data)) {\r\n      this.$results.append(this.$loadingMore);\r\n    }\r\n  };\r\n\r\n  InfiniteScroll.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('query', function (params) {\r\n      self.lastParams = params;\r\n      self.loading = true;\r\n    });\r\n\r\n    container.on('query:append', function (params) {\r\n      self.lastParams = params;\r\n      self.loading = true;\r\n    });\r\n\r\n    this.$results.on('scroll', function () {\r\n      var isLoadMoreVisible = $.contains(\r\n        document.documentElement,\r\n        self.$loadingMore[0]\r\n      );\r\n\r\n      if (self.loading || !isLoadMoreVisible) {\r\n        return;\r\n      }\r\n\r\n      var currentOffset = self.$results.offset().top +\r\n        self.$results.outerHeight(false);\r\n      var loadingMoreOffset = self.$loadingMore.offset().top +\r\n        self.$loadingMore.outerHeight(false);\r\n\r\n      if (currentOffset + 50 >= loadingMoreOffset) {\r\n        self.loadMore();\r\n      }\r\n    });\r\n  };\r\n\r\n  InfiniteScroll.prototype.loadMore = function () {\r\n    this.loading = true;\r\n\r\n    var params = $.extend({}, {page: 1}, this.lastParams);\r\n\r\n    params.page++;\r\n\r\n    this.trigger('query:append', params);\r\n  };\r\n\r\n  InfiniteScroll.prototype.showLoadingMore = function (_, data) {\r\n    return data.pagination && data.pagination.more;\r\n  };\r\n\r\n  InfiniteScroll.prototype.createLoadingMore = function () {\r\n    var $option = $(\r\n      '<li ' +\r\n      'class=\"select2-results__option select2-results__option--load-more\"' +\r\n      'role=\"treeitem\" aria-disabled=\"true\"></li>'\r\n    );\r\n\r\n    var message = this.options.get('translations').get('loadingMore');\r\n\r\n    $option.html(message(this.lastParams));\r\n\r\n    return $option;\r\n  };\r\n\r\n  return InfiniteScroll;\r\n});\r\n\r\nS2.define('select2/dropdown/attachBody',[\r\n  'jquery',\r\n  '../utils'\r\n], function ($, Utils) {\r\n  function AttachBody (decorated, $element, options) {\r\n    this.$dropdownParent = options.get('dropdownParent') || $(document.body);\r\n\r\n    decorated.call(this, $element, options);\r\n  }\r\n\r\n  AttachBody.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    var setupResultsEvents = false;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('open', function () {\r\n      self._showDropdown();\r\n      self._attachPositioningHandler(container);\r\n\r\n      if (!setupResultsEvents) {\r\n        setupResultsEvents = true;\r\n\r\n        container.on('results:all', function () {\r\n          self._positionDropdown();\r\n          self._resizeDropdown();\r\n        });\r\n\r\n        container.on('results:append', function () {\r\n          self._positionDropdown();\r\n          self._resizeDropdown();\r\n        });\r\n      }\r\n    });\r\n\r\n    container.on('close', function () {\r\n      self._hideDropdown();\r\n      self._detachPositioningHandler(container);\r\n    });\r\n\r\n    this.$dropdownContainer.on('mousedown', function (evt) {\r\n      evt.stopPropagation();\r\n    });\r\n  };\r\n\r\n  AttachBody.prototype.destroy = function (decorated) {\r\n    decorated.call(this);\r\n\r\n    this.$dropdownContainer.remove();\r\n  };\r\n\r\n  AttachBody.prototype.position = function (decorated, $dropdown, $container) {\r\n    // Clone all of the container classes\r\n    $dropdown.attr('class', $container.attr('class'));\r\n\r\n    $dropdown.removeClass('select2');\r\n    $dropdown.addClass('select2-container--open');\r\n\r\n    $dropdown.css({\r\n      position: 'absolute',\r\n      top: -999999\r\n    });\r\n\r\n    this.$container = $container;\r\n  };\r\n\r\n  AttachBody.prototype.render = function (decorated) {\r\n    var $container = $('<span></span>');\r\n\r\n    var $dropdown = decorated.call(this);\r\n    $container.append($dropdown);\r\n\r\n    this.$dropdownContainer = $container;\r\n\r\n    return $container;\r\n  };\r\n\r\n  AttachBody.prototype._hideDropdown = function (decorated) {\r\n    this.$dropdownContainer.detach();\r\n  };\r\n\r\n  AttachBody.prototype._attachPositioningHandler =\r\n      function (decorated, container) {\r\n    var self = this;\r\n\r\n    var scrollEvent = 'scroll.select2.' + container.id;\r\n    var resizeEvent = 'resize.select2.' + container.id;\r\n    var orientationEvent = 'orientationchange.select2.' + container.id;\r\n\r\n    var $watchers = this.$container.parents().filter(Utils.hasScroll);\r\n    $watchers.each(function () {\r\n      $(this).data('select2-scroll-position', {\r\n        x: $(this).scrollLeft(),\r\n        y: $(this).scrollTop()\r\n      });\r\n    });\r\n\r\n    $watchers.on(scrollEvent, function (ev) {\r\n      var position = $(this).data('select2-scroll-position');\r\n      $(this).scrollTop(position.y);\r\n    });\r\n\r\n    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,\r\n      function (e) {\r\n      self._positionDropdown();\r\n      self._resizeDropdown();\r\n    });\r\n  };\r\n\r\n  AttachBody.prototype._detachPositioningHandler =\r\n      function (decorated, container) {\r\n    var scrollEvent = 'scroll.select2.' + container.id;\r\n    var resizeEvent = 'resize.select2.' + container.id;\r\n    var orientationEvent = 'orientationchange.select2.' + container.id;\r\n\r\n    var $watchers = this.$container.parents().filter(Utils.hasScroll);\r\n    $watchers.off(scrollEvent);\r\n\r\n    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);\r\n  };\r\n\r\n  AttachBody.prototype._positionDropdown = function () {\r\n    var $window = $(window);\r\n\r\n    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');\r\n    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');\r\n\r\n    var newDirection = null;\r\n\r\n    var offset = this.$container.offset();\r\n\r\n    offset.bottom = offset.top + this.$container.outerHeight(false);\r\n\r\n    var container = {\r\n      height: this.$container.outerHeight(false)\r\n    };\r\n\r\n    container.top = offset.top;\r\n    container.bottom = offset.top + container.height;\r\n\r\n    var dropdown = {\r\n      height: this.$dropdown.outerHeight(false)\r\n    };\r\n\r\n    var viewport = {\r\n      top: $window.scrollTop(),\r\n      bottom: $window.scrollTop() + $window.height()\r\n    };\r\n\r\n    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);\r\n    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);\r\n\r\n    var css = {\r\n      left: offset.left,\r\n      top: container.bottom\r\n    };\r\n\r\n    // Determine what the parent element is to use for calciulating the offset\r\n    var $offsetParent = this.$dropdownParent;\r\n\r\n    // For statically positoned elements, we need to get the element\r\n    // that is determining the offset\r\n    if ($offsetParent.css('position') === 'static') {\r\n      $offsetParent = $offsetParent.offsetParent();\r\n    }\r\n\r\n    var parentOffset = $offsetParent.offset();\r\n\r\n    css.top -= parentOffset.top;\r\n    css.left -= parentOffset.left;\r\n\r\n    if (!isCurrentlyAbove && !isCurrentlyBelow) {\r\n      newDirection = 'below';\r\n    }\r\n\r\n    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {\r\n      newDirection = 'above';\r\n    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {\r\n      newDirection = 'below';\r\n    }\r\n\r\n    if (newDirection == 'above' ||\r\n      (isCurrentlyAbove && newDirection !== 'below')) {\r\n      css.top = container.top - parentOffset.top - dropdown.height;\r\n    }\r\n\r\n    if (newDirection != null) {\r\n      this.$dropdown\r\n        .removeClass('select2-dropdown--below select2-dropdown--above')\r\n        .addClass('select2-dropdown--' + newDirection);\r\n      this.$container\r\n        .removeClass('select2-container--below select2-container--above')\r\n        .addClass('select2-container--' + newDirection);\r\n    }\r\n\r\n    this.$dropdownContainer.css(css);\r\n  };\r\n\r\n  AttachBody.prototype._resizeDropdown = function () {\r\n    var css = {\r\n      width: this.$container.outerWidth(false) + 'px'\r\n    };\r\n\r\n    if (this.options.get('dropdownAutoWidth')) {\r\n      css.minWidth = css.width;\r\n      css.position = 'relative';\r\n      css.width = 'auto';\r\n    }\r\n\r\n    this.$dropdown.css(css);\r\n  };\r\n\r\n  AttachBody.prototype._showDropdown = function (decorated) {\r\n    this.$dropdownContainer.appendTo(this.$dropdownParent);\r\n\r\n    this._positionDropdown();\r\n    this._resizeDropdown();\r\n  };\r\n\r\n  return AttachBody;\r\n});\r\n\r\nS2.define('select2/dropdown/minimumResultsForSearch',[\r\n\r\n], function () {\r\n  function countResults (data) {\r\n    var count = 0;\r\n\r\n    for (var d = 0; d < data.length; d++) {\r\n      var item = data[d];\r\n\r\n      if (item.children) {\r\n        count += countResults(item.children);\r\n      } else {\r\n        count++;\r\n      }\r\n    }\r\n\r\n    return count;\r\n  }\r\n\r\n  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {\r\n    this.minimumResultsForSearch = options.get('minimumResultsForSearch');\r\n\r\n    if (this.minimumResultsForSearch < 0) {\r\n      this.minimumResultsForSearch = Infinity;\r\n    }\r\n\r\n    decorated.call(this, $element, options, dataAdapter);\r\n  }\r\n\r\n  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {\r\n    if (countResults(params.data.results) < this.minimumResultsForSearch) {\r\n      return false;\r\n    }\r\n\r\n    return decorated.call(this, params);\r\n  };\r\n\r\n  return MinimumResultsForSearch;\r\n});\r\n\r\nS2.define('select2/dropdown/selectOnClose',[\r\n\r\n], function () {\r\n  function SelectOnClose () { }\r\n\r\n  SelectOnClose.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('close', function (params) {\r\n      self._handleSelectOnClose(params);\r\n    });\r\n  };\r\n\r\n  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {\r\n    if (params && params.originalSelect2Event != null) {\r\n      var event = params.originalSelect2Event;\r\n\r\n      // Don't select an item if the close event was triggered from a select or\r\n      // unselect event\r\n      if (event._type === 'select' || event._type === 'unselect') {\r\n        return;\r\n      }\r\n    }\r\n\r\n    var $highlightedResults = this.getHighlightedResults();\r\n\r\n    // Only select highlighted results\r\n    if ($highlightedResults.length < 1) {\r\n      return;\r\n    }\r\n\r\n    var data = $highlightedResults.data('data');\r\n\r\n    // Don't re-select already selected resulte\r\n    if (\r\n      (data.element != null && data.element.selected) ||\r\n      (data.element == null && data.selected)\r\n    ) {\r\n      return;\r\n    }\r\n\r\n    this.trigger('select', {\r\n        data: data\r\n    });\r\n  };\r\n\r\n  return SelectOnClose;\r\n});\r\n\r\nS2.define('select2/dropdown/closeOnSelect',[\r\n\r\n], function () {\r\n  function CloseOnSelect () { }\r\n\r\n  CloseOnSelect.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('select', function (evt) {\r\n      self._selectTriggered(evt);\r\n    });\r\n\r\n    container.on('unselect', function (evt) {\r\n      self._selectTriggered(evt);\r\n    });\r\n  };\r\n\r\n  CloseOnSelect.prototype._selectTriggered = function (_, evt) {\r\n    var originalEvent = evt.originalEvent;\r\n\r\n    // Don't close if the control key is being held\r\n    if (originalEvent && originalEvent.ctrlKey) {\r\n      return;\r\n    }\r\n\r\n    this.trigger('close', {\r\n      originalEvent: originalEvent,\r\n      originalSelect2Event: evt\r\n    });\r\n  };\r\n\r\n  return CloseOnSelect;\r\n});\r\n\r\nS2.define('select2/i18n/en',[],function () {\r\n  // English\r\n  return {\r\n    errorLoading: function () {\r\n      return 'The results could not be loaded.';\r\n    },\r\n    inputTooLong: function (args) {\r\n      var overChars = args.input.length - args.maximum;\r\n\r\n      var message = 'Please delete ' + overChars + ' character';\r\n\r\n      if (overChars != 1) {\r\n        message += 's';\r\n      }\r\n\r\n      return message;\r\n    },\r\n    inputTooShort: function (args) {\r\n      var remainingChars = args.minimum - args.input.length;\r\n\r\n      var message = 'Please enter ' + remainingChars + ' or more characters';\r\n\r\n      return message;\r\n    },\r\n    loadingMore: function () {\r\n      return 'Loading more results…';\r\n    },\r\n    maximumSelected: function (args) {\r\n      var message = 'You can only select ' + args.maximum + ' item';\r\n\r\n      if (args.maximum != 1) {\r\n        message += 's';\r\n      }\r\n\r\n      return message;\r\n    },\r\n    noResults: function () {\r\n      return 'No results found';\r\n    },\r\n    searching: function () {\r\n      return 'Searching…';\r\n    }\r\n  };\r\n});\r\n\r\nS2.define('select2/defaults',[\r\n  'jquery',\r\n  'require',\r\n\r\n  './results',\r\n\r\n  './selection/single',\r\n  './selection/multiple',\r\n  './selection/placeholder',\r\n  './selection/allowClear',\r\n  './selection/search',\r\n  './selection/eventRelay',\r\n\r\n  './utils',\r\n  './translation',\r\n  './diacritics',\r\n\r\n  './data/select',\r\n  './data/array',\r\n  './data/ajax',\r\n  './data/tags',\r\n  './data/tokenizer',\r\n  './data/minimumInputLength',\r\n  './data/maximumInputLength',\r\n  './data/maximumSelectionLength',\r\n\r\n  './dropdown',\r\n  './dropdown/search',\r\n  './dropdown/hidePlaceholder',\r\n  './dropdown/infiniteScroll',\r\n  './dropdown/attachBody',\r\n  './dropdown/minimumResultsForSearch',\r\n  './dropdown/selectOnClose',\r\n  './dropdown/closeOnSelect',\r\n\r\n  './i18n/en'\r\n], function ($, require,\r\n\r\n             ResultsList,\r\n\r\n             SingleSelection, MultipleSelection, Placeholder, AllowClear,\r\n             SelectionSearch, EventRelay,\r\n\r\n             Utils, Translation, DIACRITICS,\r\n\r\n             SelectData, ArrayData, AjaxData, Tags, Tokenizer,\r\n             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,\r\n\r\n             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,\r\n             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,\r\n\r\n             EnglishTranslation) {\r\n  function Defaults () {\r\n    this.reset();\r\n  }\r\n\r\n  Defaults.prototype.apply = function (options) {\r\n    options = $.extend(true, {}, this.defaults, options);\r\n\r\n    if (options.dataAdapter == null) {\r\n      if (options.ajax != null) {\r\n        options.dataAdapter = AjaxData;\r\n      } else if (options.data != null) {\r\n        options.dataAdapter = ArrayData;\r\n      } else {\r\n        options.dataAdapter = SelectData;\r\n      }\r\n\r\n      if (options.minimumInputLength > 0) {\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          MinimumInputLength\r\n        );\r\n      }\r\n\r\n      if (options.maximumInputLength > 0) {\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          MaximumInputLength\r\n        );\r\n      }\r\n\r\n      if (options.maximumSelectionLength > 0) {\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          MaximumSelectionLength\r\n        );\r\n      }\r\n\r\n      if (options.tags) {\r\n        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);\r\n      }\r\n\r\n      if (options.tokenSeparators != null || options.tokenizer != null) {\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          Tokenizer\r\n        );\r\n      }\r\n\r\n      if (options.query != null) {\r\n        var Query = require(options.amdBase + 'compat/query');\r\n\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          Query\r\n        );\r\n      }\r\n\r\n      if (options.initSelection != null) {\r\n        var InitSelection = require(options.amdBase + 'compat/initSelection');\r\n\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          InitSelection\r\n        );\r\n      }\r\n    }\r\n\r\n    if (options.resultsAdapter == null) {\r\n      options.resultsAdapter = ResultsList;\r\n\r\n      if (options.ajax != null) {\r\n        options.resultsAdapter = Utils.Decorate(\r\n          options.resultsAdapter,\r\n          InfiniteScroll\r\n        );\r\n      }\r\n\r\n      if (options.placeholder != null) {\r\n        options.resultsAdapter = Utils.Decorate(\r\n          options.resultsAdapter,\r\n          HidePlaceholder\r\n        );\r\n      }\r\n\r\n      if (options.selectOnClose) {\r\n        options.resultsAdapter = Utils.Decorate(\r\n          options.resultsAdapter,\r\n          SelectOnClose\r\n        );\r\n      }\r\n    }\r\n\r\n    if (options.dropdownAdapter == null) {\r\n      if (options.multiple) {\r\n        options.dropdownAdapter = Dropdown;\r\n      } else {\r\n        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);\r\n\r\n        options.dropdownAdapter = SearchableDropdown;\r\n      }\r\n\r\n      if (options.minimumResultsForSearch !== 0) {\r\n        options.dropdownAdapter = Utils.Decorate(\r\n          options.dropdownAdapter,\r\n          MinimumResultsForSearch\r\n        );\r\n      }\r\n\r\n      if (options.closeOnSelect) {\r\n        options.dropdownAdapter = Utils.Decorate(\r\n          options.dropdownAdapter,\r\n          CloseOnSelect\r\n        );\r\n      }\r\n\r\n      if (\r\n        options.dropdownCssClass != null ||\r\n        options.dropdownCss != null ||\r\n        options.adaptDropdownCssClass != null\r\n      ) {\r\n        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');\r\n\r\n        options.dropdownAdapter = Utils.Decorate(\r\n          options.dropdownAdapter,\r\n          DropdownCSS\r\n        );\r\n      }\r\n\r\n      options.dropdownAdapter = Utils.Decorate(\r\n        options.dropdownAdapter,\r\n        AttachBody\r\n      );\r\n    }\r\n\r\n    if (options.selectionAdapter == null) {\r\n      if (options.multiple) {\r\n        options.selectionAdapter = MultipleSelection;\r\n      } else {\r\n        options.selectionAdapter = SingleSelection;\r\n      }\r\n\r\n      // Add the placeholder mixin if a placeholder was specified\r\n      if (options.placeholder != null) {\r\n        options.selectionAdapter = Utils.Decorate(\r\n          options.selectionAdapter,\r\n          Placeholder\r\n        );\r\n      }\r\n\r\n      if (options.allowClear) {\r\n        options.selectionAdapter = Utils.Decorate(\r\n          options.selectionAdapter,\r\n          AllowClear\r\n        );\r\n      }\r\n\r\n      if (options.multiple) {\r\n        options.selectionAdapter = Utils.Decorate(\r\n          options.selectionAdapter,\r\n          SelectionSearch\r\n        );\r\n      }\r\n\r\n      if (\r\n        options.containerCssClass != null ||\r\n        options.containerCss != null ||\r\n        options.adaptContainerCssClass != null\r\n      ) {\r\n        var ContainerCSS = require(options.amdBase + 'compat/containerCss');\r\n\r\n        options.selectionAdapter = Utils.Decorate(\r\n          options.selectionAdapter,\r\n          ContainerCSS\r\n        );\r\n      }\r\n\r\n      options.selectionAdapter = Utils.Decorate(\r\n        options.selectionAdapter,\r\n        EventRelay\r\n      );\r\n    }\r\n\r\n    if (typeof options.language === 'string') {\r\n      // Check if the language is specified with a region\r\n      if (options.language.indexOf('-') > 0) {\r\n        // Extract the region information if it is included\r\n        var languageParts = options.language.split('-');\r\n        var baseLanguage = languageParts[0];\r\n\r\n        options.language = [options.language, baseLanguage];\r\n      } else {\r\n        options.language = [options.language];\r\n      }\r\n    }\r\n\r\n    if ($.isArray(options.language)) {\r\n      var languages = new Translation();\r\n      options.language.push('en');\r\n\r\n      var languageNames = options.language;\r\n\r\n      for (var l = 0; l < languageNames.length; l++) {\r\n        var name = languageNames[l];\r\n        var language = {};\r\n\r\n        try {\r\n          // Try to load it with the original name\r\n          language = Translation.loadPath(name);\r\n        } catch (e) {\r\n          try {\r\n            // If we couldn't load it, check if it wasn't the full path\r\n            name = this.defaults.amdLanguageBase + name;\r\n            language = Translation.loadPath(name);\r\n          } catch (ex) {\r\n            // The translation could not be loaded at all. Sometimes this is\r\n            // because of a configuration problem, other times this can be\r\n            // because of how Select2 helps load all possible translation files.\r\n            if (options.debug && window.console && console.warn) {\r\n              console.warn(\r\n                'Select2: The language file for \"' + name + '\" could not be ' +\r\n                'automatically loaded. A fallback will be used instead.'\r\n              );\r\n            }\r\n\r\n            continue;\r\n          }\r\n        }\r\n\r\n        languages.extend(language);\r\n      }\r\n\r\n      options.translations = languages;\r\n    } else {\r\n      var baseTranslation = Translation.loadPath(\r\n        this.defaults.amdLanguageBase + 'en'\r\n      );\r\n      var customTranslation = new Translation(options.language);\r\n\r\n      customTranslation.extend(baseTranslation);\r\n\r\n      options.translations = customTranslation;\r\n    }\r\n\r\n    return options;\r\n  };\r\n\r\n  Defaults.prototype.reset = function () {\r\n    function stripDiacritics (text) {\r\n      // Used 'uni range + named function' from http://jsperf.com/diacritics/18\r\n      function match(a) {\r\n        return DIACRITICS[a] || a;\r\n      }\r\n\r\n      return text.replace(/[^\\u0000-\\u007E]/g, match);\r\n    }\r\n\r\n    function matcher (params, data) {\r\n      // Always return the object if there is nothing to compare\r\n      if ($.trim(params.term) === '') {\r\n        return data;\r\n      }\r\n\r\n      // Do a recursive check for options with children\r\n      if (data.children && data.children.length > 0) {\r\n        // Clone the data object if there are children\r\n        // This is required as we modify the object to remove any non-matches\r\n        var match = $.extend(true, {}, data);\r\n\r\n        // Check each child of the option\r\n        for (var c = data.children.length - 1; c >= 0; c--) {\r\n          var child = data.children[c];\r\n\r\n          var matches = matcher(params, child);\r\n\r\n          // If there wasn't a match, remove the object in the array\r\n          if (matches == null) {\r\n            match.children.splice(c, 1);\r\n          }\r\n        }\r\n\r\n        // If any children matched, return the new object\r\n        if (match.children.length > 0) {\r\n          return match;\r\n        }\r\n\r\n        // If there were no matching children, check just the plain object\r\n        return matcher(params, match);\r\n      }\r\n\r\n      var original = stripDiacritics(data.text).toUpperCase();\r\n      var term = stripDiacritics(params.term).toUpperCase();\r\n\r\n      // Check if the text contains the term\r\n      if (original.indexOf(term) > -1) {\r\n        return data;\r\n      }\r\n\r\n      // If it doesn't contain the term, don't return anything\r\n      return null;\r\n    }\r\n\r\n    this.defaults = {\r\n      amdBase: './',\r\n      amdLanguageBase: './i18n/',\r\n      closeOnSelect: true,\r\n      debug: false,\r\n      dropdownAutoWidth: false,\r\n      escapeMarkup: Utils.escapeMarkup,\r\n      language: EnglishTranslation,\r\n      matcher: matcher,\r\n      minimumInputLength: 0,\r\n      maximumInputLength: 0,\r\n      maximumSelectionLength: 0,\r\n      minimumResultsForSearch: 0,\r\n      selectOnClose: false,\r\n      sorter: function (data) {\r\n        return data;\r\n      },\r\n      templateResult: function (result) {\r\n        return result.text;\r\n      },\r\n      templateSelection: function (selection) {\r\n        return selection.text;\r\n      },\r\n      theme: 'default',\r\n      width: 'resolve'\r\n    };\r\n  };\r\n\r\n  Defaults.prototype.set = function (key, value) {\r\n    var camelKey = $.camelCase(key);\r\n\r\n    var data = {};\r\n    data[camelKey] = value;\r\n\r\n    var convertedData = Utils._convertData(data);\r\n\r\n    $.extend(this.defaults, convertedData);\r\n  };\r\n\r\n  var defaults = new Defaults();\r\n\r\n  return defaults;\r\n});\r\n\r\nS2.define('select2/options',[\r\n  'require',\r\n  'jquery',\r\n  './defaults',\r\n  './utils'\r\n], function (require, $, Defaults, Utils) {\r\n  function Options (options, $element) {\r\n    this.options = options;\r\n\r\n    if ($element != null) {\r\n      this.fromElement($element);\r\n    }\r\n\r\n    this.options = Defaults.apply(this.options);\r\n\r\n    if ($element && $element.is('input')) {\r\n      var InputCompat = require(this.get('amdBase') + 'compat/inputData');\r\n\r\n      this.options.dataAdapter = Utils.Decorate(\r\n        this.options.dataAdapter,\r\n        InputCompat\r\n      );\r\n    }\r\n  }\r\n\r\n  Options.prototype.fromElement = function ($e) {\r\n    var excludedData = ['select2'];\r\n\r\n    if (this.options.multiple == null) {\r\n      this.options.multiple = $e.prop('multiple');\r\n    }\r\n\r\n    if (this.options.disabled == null) {\r\n      this.options.disabled = $e.prop('disabled');\r\n    }\r\n\r\n    if (this.options.language == null) {\r\n      if ($e.prop('lang')) {\r\n        this.options.language = $e.prop('lang').toLowerCase();\r\n      } else if ($e.closest('[lang]').prop('lang')) {\r\n        this.options.language = $e.closest('[lang]').prop('lang');\r\n      }\r\n    }\r\n\r\n    if (this.options.dir == null) {\r\n      if ($e.prop('dir')) {\r\n        this.options.dir = $e.prop('dir');\r\n      } else if ($e.closest('[dir]').prop('dir')) {\r\n        this.options.dir = $e.closest('[dir]').prop('dir');\r\n      } else {\r\n        this.options.dir = 'ltr';\r\n      }\r\n    }\r\n\r\n    $e.prop('disabled', this.options.disabled);\r\n    $e.prop('multiple', this.options.multiple);\r\n\r\n    if ($e.data('select2Tags')) {\r\n      if (this.options.debug && window.console && console.warn) {\r\n        console.warn(\r\n          'Select2: The `data-select2-tags` attribute has been changed to ' +\r\n          'use the `data-data` and `data-tags=\"true\"` attributes and will be ' +\r\n          'removed in future versions of Select2.'\r\n        );\r\n      }\r\n\r\n      $e.data('data', $e.data('select2Tags'));\r\n      $e.data('tags', true);\r\n    }\r\n\r\n    if ($e.data('ajaxUrl')) {\r\n      if (this.options.debug && window.console && console.warn) {\r\n        console.warn(\r\n          'Select2: The `data-ajax-url` attribute has been changed to ' +\r\n          '`data-ajax--url` and support for the old attribute will be removed' +\r\n          ' in future versions of Select2.'\r\n        );\r\n      }\r\n\r\n      $e.attr('ajax--url', $e.data('ajaxUrl'));\r\n      $e.data('ajax--url', $e.data('ajaxUrl'));\r\n    }\r\n\r\n    var dataset = {};\r\n\r\n    // Prefer the element's `dataset` attribute if it exists\r\n    // jQuery 1.x does not correctly handle data attributes with multiple dashes\r\n    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {\r\n      dataset = $.extend(true, {}, $e[0].dataset, $e.data());\r\n    } else {\r\n      dataset = $e.data();\r\n    }\r\n\r\n    var data = $.extend(true, {}, dataset);\r\n\r\n    data = Utils._convertData(data);\r\n\r\n    for (var key in data) {\r\n      if ($.inArray(key, excludedData) > -1) {\r\n        continue;\r\n      }\r\n\r\n      if ($.isPlainObject(this.options[key])) {\r\n        $.extend(this.options[key], data[key]);\r\n      } else {\r\n        this.options[key] = data[key];\r\n      }\r\n    }\r\n\r\n    return this;\r\n  };\r\n\r\n  Options.prototype.get = function (key) {\r\n    return this.options[key];\r\n  };\r\n\r\n  Options.prototype.set = function (key, val) {\r\n    this.options[key] = val;\r\n  };\r\n\r\n  return Options;\r\n});\r\n\r\nS2.define('select2/core',[\r\n  'jquery',\r\n  './options',\r\n  './utils',\r\n  './keys'\r\n], function ($, Options, Utils, KEYS) {\r\n  var Select2 = function ($element, options) {\r\n    if ($element.data('select2') != null) {\r\n      $element.data('select2').destroy();\r\n    }\r\n\r\n    this.$element = $element;\r\n\r\n    this.id = this._generateId($element);\r\n\r\n    options = options || {};\r\n\r\n    this.options = new Options(options, $element);\r\n\r\n    Select2.__super__.constructor.call(this);\r\n\r\n    // Set up the tabindex\r\n\r\n    var tabindex = $element.attr('tabindex') || 0;\r\n    $element.data('old-tabindex', tabindex);\r\n    $element.attr('tabindex', '-1');\r\n\r\n    // Set up containers and adapters\r\n\r\n    var DataAdapter = this.options.get('dataAdapter');\r\n    this.dataAdapter = new DataAdapter($element, this.options);\r\n\r\n    var $container = this.render();\r\n\r\n    this._placeContainer($container);\r\n\r\n    var SelectionAdapter = this.options.get('selectionAdapter');\r\n    this.selection = new SelectionAdapter($element, this.options);\r\n    this.$selection = this.selection.render();\r\n\r\n    this.selection.position(this.$selection, $container);\r\n\r\n    var DropdownAdapter = this.options.get('dropdownAdapter');\r\n    this.dropdown = new DropdownAdapter($element, this.options);\r\n    this.$dropdown = this.dropdown.render();\r\n\r\n    this.dropdown.position(this.$dropdown, $container);\r\n\r\n    var ResultsAdapter = this.options.get('resultsAdapter');\r\n    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);\r\n    this.$results = this.results.render();\r\n\r\n    this.results.position(this.$results, this.$dropdown);\r\n\r\n    // Bind events\r\n\r\n    var self = this;\r\n\r\n    // Bind the container to all of the adapters\r\n    this._bindAdapters();\r\n\r\n    // Register any DOM event handlers\r\n    this._registerDomEvents();\r\n\r\n    // Register any internal event handlers\r\n    this._registerDataEvents();\r\n    this._registerSelectionEvents();\r\n    this._registerDropdownEvents();\r\n    this._registerResultsEvents();\r\n    this._registerEvents();\r\n\r\n    // Set the initial state\r\n    this.dataAdapter.current(function (initialData) {\r\n      self.trigger('selection:update', {\r\n        data: initialData\r\n      });\r\n    });\r\n\r\n    // Hide the original select\r\n    $element.addClass('select2-hidden-accessible');\r\n    $element.attr('aria-hidden', 'true');\r\n\r\n    // Synchronize any monitored attributes\r\n    this._syncAttributes();\r\n\r\n    $element.data('select2', this);\r\n  };\r\n\r\n  Utils.Extend(Select2, Utils.Observable);\r\n\r\n  Select2.prototype._generateId = function ($element) {\r\n    var id = '';\r\n\r\n    if ($element.attr('id') != null) {\r\n      id = $element.attr('id');\r\n    } else if ($element.attr('name') != null) {\r\n      id = $element.attr('name') + '-' + Utils.generateChars(2);\r\n    } else {\r\n      id = Utils.generateChars(4);\r\n    }\r\n\r\n    id = id.replace(/(:|\\.|\\[|\\]|,)/g, '');\r\n    id = 'select2-' + id;\r\n\r\n    return id;\r\n  };\r\n\r\n  Select2.prototype._placeContainer = function ($container) {\r\n    $container.insertAfter(this.$element);\r\n\r\n    var width = this._resolveWidth(this.$element, this.options.get('width'));\r\n\r\n    if (width != null) {\r\n      $container.css('width', width);\r\n    }\r\n  };\r\n\r\n  Select2.prototype._resolveWidth = function ($element, method) {\r\n    var WIDTH = /^width:(([-+]?([0-9]*\\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;\r\n\r\n    if (method == 'resolve') {\r\n      var styleWidth = this._resolveWidth($element, 'style');\r\n\r\n      if (styleWidth != null) {\r\n        return styleWidth;\r\n      }\r\n\r\n      return this._resolveWidth($element, 'element');\r\n    }\r\n\r\n    if (method == 'element') {\r\n      var elementWidth = $element.outerWidth(false);\r\n\r\n      if (elementWidth <= 0) {\r\n        return 'auto';\r\n      }\r\n\r\n      return elementWidth + 'px';\r\n    }\r\n\r\n    if (method == 'style') {\r\n      var style = $element.attr('style');\r\n\r\n      if (typeof(style) !== 'string') {\r\n        return null;\r\n      }\r\n\r\n      var attrs = style.split(';');\r\n\r\n      for (var i = 0, l = attrs.length; i < l; i = i + 1) {\r\n        var attr = attrs[i].replace(/\\s/g, '');\r\n        var matches = attr.match(WIDTH);\r\n\r\n        if (matches !== null && matches.length >= 1) {\r\n          return matches[1];\r\n        }\r\n      }\r\n\r\n      return null;\r\n    }\r\n\r\n    return method;\r\n  };\r\n\r\n  Select2.prototype._bindAdapters = function () {\r\n    this.dataAdapter.bind(this, this.$container);\r\n    this.selection.bind(this, this.$container);\r\n\r\n    this.dropdown.bind(this, this.$container);\r\n    this.results.bind(this, this.$container);\r\n  };\r\n\r\n  Select2.prototype._registerDomEvents = function () {\r\n    var self = this;\r\n\r\n    this.$element.on('change.select2', function () {\r\n      self.dataAdapter.current(function (data) {\r\n        self.trigger('selection:update', {\r\n          data: data\r\n        });\r\n      });\r\n    });\r\n\r\n    this.$element.on('focus.select2', function (evt) {\r\n      self.trigger('focus', evt);\r\n    });\r\n\r\n    this._syncA = Utils.bind(this._syncAttributes, this);\r\n    this._syncS = Utils.bind(this._syncSubtree, this);\r\n\r\n    if (this.$element[0].attachEvent) {\r\n      this.$element[0].attachEvent('onpropertychange', this._syncA);\r\n    }\r\n\r\n    var observer = window.MutationObserver ||\r\n      window.WebKitMutationObserver ||\r\n      window.MozMutationObserver\r\n    ;\r\n\r\n    if (observer != null) {\r\n      this._observer = new observer(function (mutations) {\r\n        $.each(mutations, self._syncA);\r\n        $.each(mutations, self._syncS);\r\n      });\r\n      this._observer.observe(this.$element[0], {\r\n        attributes: true,\r\n        childList: true,\r\n        subtree: false\r\n      });\r\n    } else if (this.$element[0].addEventListener) {\r\n      this.$element[0].addEventListener(\r\n        'DOMAttrModified',\r\n        self._syncA,\r\n        false\r\n      );\r\n      this.$element[0].addEventListener(\r\n        'DOMNodeInserted',\r\n        self._syncS,\r\n        false\r\n      );\r\n      this.$element[0].addEventListener(\r\n        'DOMNodeRemoved',\r\n        self._syncS,\r\n        false\r\n      );\r\n    }\r\n  };\r\n\r\n  Select2.prototype._registerDataEvents = function () {\r\n    var self = this;\r\n\r\n    this.dataAdapter.on('*', function (name, params) {\r\n      self.trigger(name, params);\r\n    });\r\n  };\r\n\r\n  Select2.prototype._registerSelectionEvents = function () {\r\n    var self = this;\r\n    var nonRelayEvents = ['toggle', 'focus'];\r\n\r\n    this.selection.on('toggle', function () {\r\n      self.toggleDropdown();\r\n    });\r\n\r\n    this.selection.on('focus', function (params) {\r\n      self.focus(params);\r\n    });\r\n\r\n    this.selection.on('*', function (name, params) {\r\n      if ($.inArray(name, nonRelayEvents) !== -1) {\r\n        return;\r\n      }\r\n\r\n      self.trigger(name, params);\r\n    });\r\n  };\r\n\r\n  Select2.prototype._registerDropdownEvents = function () {\r\n    var self = this;\r\n\r\n    this.dropdown.on('*', function (name, params) {\r\n      self.trigger(name, params);\r\n    });\r\n  };\r\n\r\n  Select2.prototype._registerResultsEvents = function () {\r\n    var self = this;\r\n\r\n    this.results.on('*', function (name, params) {\r\n      self.trigger(name, params);\r\n    });\r\n  };\r\n\r\n  Select2.prototype._registerEvents = function () {\r\n    var self = this;\r\n\r\n    this.on('open', function () {\r\n      self.$container.addClass('select2-container--open');\r\n    });\r\n\r\n    this.on('close', function () {\r\n      self.$container.removeClass('select2-container--open');\r\n    });\r\n\r\n    this.on('enable', function () {\r\n      self.$container.removeClass('select2-container--disabled');\r\n    });\r\n\r\n    this.on('disable', function () {\r\n      self.$container.addClass('select2-container--disabled');\r\n    });\r\n\r\n    this.on('blur', function () {\r\n      self.$container.removeClass('select2-container--focus');\r\n    });\r\n\r\n    this.on('query', function (params) {\r\n      if (!self.isOpen()) {\r\n        self.trigger('open', {});\r\n      }\r\n\r\n      this.dataAdapter.query(params, function (data) {\r\n        self.trigger('results:all', {\r\n          data: data,\r\n          query: params\r\n        });\r\n      });\r\n    });\r\n\r\n    this.on('query:append', function (params) {\r\n      this.dataAdapter.query(params, function (data) {\r\n        self.trigger('results:append', {\r\n          data: data,\r\n          query: params\r\n        });\r\n      });\r\n    });\r\n\r\n    this.on('keypress', function (evt) {\r\n      var key = evt.which;\r\n\r\n      if (self.isOpen()) {\r\n        if (key === KEYS.ESC || key === KEYS.TAB ||\r\n            (key === KEYS.UP && evt.altKey)) {\r\n          self.close();\r\n\r\n          evt.preventDefault();\r\n        } else if (key === KEYS.ENTER) {\r\n          self.trigger('results:select', {});\r\n\r\n          evt.preventDefault();\r\n        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {\r\n          self.trigger('results:toggle', {});\r\n\r\n          evt.preventDefault();\r\n        } else if (key === KEYS.UP) {\r\n          self.trigger('results:previous', {});\r\n\r\n          evt.preventDefault();\r\n        } else if (key === KEYS.DOWN) {\r\n          self.trigger('results:next', {});\r\n\r\n          evt.preventDefault();\r\n        }\r\n      } else {\r\n        if (key === KEYS.ENTER || key === KEYS.SPACE ||\r\n            (key === KEYS.DOWN && evt.altKey)) {\r\n          self.open();\r\n\r\n          evt.preventDefault();\r\n        }\r\n      }\r\n    });\r\n  };\r\n\r\n  Select2.prototype._syncAttributes = function () {\r\n    this.options.set('disabled', this.$element.prop('disabled'));\r\n\r\n    if (this.options.get('disabled')) {\r\n      if (this.isOpen()) {\r\n        this.close();\r\n      }\r\n\r\n      this.trigger('disable', {});\r\n    } else {\r\n      this.trigger('enable', {});\r\n    }\r\n  };\r\n\r\n  Select2.prototype._syncSubtree = function (evt, mutations) {\r\n    var changed = false;\r\n    var self = this;\r\n\r\n    // Ignore any mutation events raised for elements that aren't options or\r\n    // optgroups. This handles the case when the select element is destroyed\r\n    if (\r\n      evt && evt.target && (\r\n        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'\r\n      )\r\n    ) {\r\n      return;\r\n    }\r\n\r\n    if (!mutations) {\r\n      // If mutation events aren't supported, then we can only assume that the\r\n      // change affected the selections\r\n      changed = true;\r\n    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {\r\n      for (var n = 0; n < mutations.addedNodes.length; n++) {\r\n        var node = mutations.addedNodes[n];\r\n\r\n        if (node.selected) {\r\n          changed = true;\r\n        }\r\n      }\r\n    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {\r\n      changed = true;\r\n    }\r\n\r\n    // Only re-pull the data if we think there is a change\r\n    if (changed) {\r\n      this.dataAdapter.current(function (currentData) {\r\n        self.trigger('selection:update', {\r\n          data: currentData\r\n        });\r\n      });\r\n    }\r\n  };\r\n\r\n  /**\r\n   * Override the trigger method to automatically trigger pre-events when\r\n   * there are events that can be prevented.\r\n   */\r\n  Select2.prototype.trigger = function (name, args) {\r\n    var actualTrigger = Select2.__super__.trigger;\r\n    var preTriggerMap = {\r\n      'open': 'opening',\r\n      'close': 'closing',\r\n      'select': 'selecting',\r\n      'unselect': 'unselecting'\r\n    };\r\n\r\n    if (args === undefined) {\r\n      args = {};\r\n    }\r\n\r\n    if (name in preTriggerMap) {\r\n      var preTriggerName = preTriggerMap[name];\r\n      var preTriggerArgs = {\r\n        prevented: false,\r\n        name: name,\r\n        args: args\r\n      };\r\n\r\n      actualTrigger.call(this, preTriggerName, preTriggerArgs);\r\n\r\n      if (preTriggerArgs.prevented) {\r\n        args.prevented = true;\r\n\r\n        return;\r\n      }\r\n    }\r\n\r\n    actualTrigger.call(this, name, args);\r\n  };\r\n\r\n  Select2.prototype.toggleDropdown = function () {\r\n    if (this.options.get('disabled')) {\r\n      return;\r\n    }\r\n\r\n    if (this.isOpen()) {\r\n      this.close();\r\n    } else {\r\n      this.open();\r\n    }\r\n  };\r\n\r\n  Select2.prototype.open = function () {\r\n    if (this.isOpen()) {\r\n      return;\r\n    }\r\n\r\n    this.trigger('query', {});\r\n  };\r\n\r\n  Select2.prototype.close = function () {\r\n    if (!this.isOpen()) {\r\n      return;\r\n    }\r\n\r\n    this.trigger('close', {});\r\n  };\r\n\r\n  Select2.prototype.isOpen = function () {\r\n    return this.$container.hasClass('select2-container--open');\r\n  };\r\n\r\n  Select2.prototype.hasFocus = function () {\r\n    return this.$container.hasClass('select2-container--focus');\r\n  };\r\n\r\n  Select2.prototype.focus = function (data) {\r\n    // No need to re-trigger focus events if we are already focused\r\n    if (this.hasFocus()) {\r\n      return;\r\n    }\r\n\r\n    this.$container.addClass('select2-container--focus');\r\n    this.trigger('focus', {});\r\n  };\r\n\r\n  Select2.prototype.enable = function (args) {\r\n    if (this.options.get('debug') && window.console && console.warn) {\r\n      console.warn(\r\n        'Select2: The `select2(\"enable\")` method has been deprecated and will' +\r\n        ' be removed in later Select2 versions. Use $element.prop(\"disabled\")' +\r\n        ' instead.'\r\n      );\r\n    }\r\n\r\n    if (args == null || args.length === 0) {\r\n      args = [true];\r\n    }\r\n\r\n    var disabled = !args[0];\r\n\r\n    this.$element.prop('disabled', disabled);\r\n  };\r\n\r\n  Select2.prototype.data = function () {\r\n    if (this.options.get('debug') &&\r\n        arguments.length > 0 && window.console && console.warn) {\r\n      console.warn(\r\n        'Select2: Data can no longer be set using `select2(\"data\")`. You ' +\r\n        'should consider setting the value instead using `$element.val()`.'\r\n      );\r\n    }\r\n\r\n    var data = [];\r\n\r\n    this.dataAdapter.current(function (currentData) {\r\n      data = currentData;\r\n    });\r\n\r\n    return data;\r\n  };\r\n\r\n  Select2.prototype.val = function (args) {\r\n    if (this.options.get('debug') && window.console && console.warn) {\r\n      console.warn(\r\n        'Select2: The `select2(\"val\")` method has been deprecated and will be' +\r\n        ' removed in later Select2 versions. Use $element.val() instead.'\r\n      );\r\n    }\r\n\r\n    if (args == null || args.length === 0) {\r\n      return this.$element.val();\r\n    }\r\n\r\n    var newVal = args[0];\r\n\r\n    if ($.isArray(newVal)) {\r\n      newVal = $.map(newVal, function (obj) {\r\n        return obj.toString();\r\n      });\r\n    }\r\n\r\n    this.$element.val(newVal).trigger('change');\r\n  };\r\n\r\n  Select2.prototype.destroy = function () {\r\n    this.$container.remove();\r\n\r\n    if (this.$element[0].detachEvent) {\r\n      this.$element[0].detachEvent('onpropertychange', this._syncA);\r\n    }\r\n\r\n    if (this._observer != null) {\r\n      this._observer.disconnect();\r\n      this._observer = null;\r\n    } else if (this.$element[0].removeEventListener) {\r\n      this.$element[0]\r\n        .removeEventListener('DOMAttrModified', this._syncA, false);\r\n      this.$element[0]\r\n        .removeEventListener('DOMNodeInserted', this._syncS, false);\r\n      this.$element[0]\r\n        .removeEventListener('DOMNodeRemoved', this._syncS, false);\r\n    }\r\n\r\n    this._syncA = null;\r\n    this._syncS = null;\r\n\r\n    this.$element.off('.select2');\r\n    this.$element.attr('tabindex', this.$element.data('old-tabindex'));\r\n\r\n    this.$element.removeClass('select2-hidden-accessible');\r\n    this.$element.attr('aria-hidden', 'false');\r\n    this.$element.removeData('select2');\r\n\r\n    this.dataAdapter.destroy();\r\n    this.selection.destroy();\r\n    this.dropdown.destroy();\r\n    this.results.destroy();\r\n\r\n    this.dataAdapter = null;\r\n    this.selection = null;\r\n    this.dropdown = null;\r\n    this.results = null;\r\n  };\r\n\r\n  Select2.prototype.render = function () {\r\n    var $container = $(\r\n      '<span class=\"select2 select2-container\">' +\r\n        '<span class=\"selection\"></span>' +\r\n        '<span class=\"dropdown-wrapper\" aria-hidden=\"true\"></span>' +\r\n      '</span>'\r\n    );\r\n\r\n    $container.attr('dir', this.options.get('dir'));\r\n\r\n    this.$container = $container;\r\n\r\n    this.$container.addClass('select2-container--' + this.options.get('theme'));\r\n\r\n    $container.data('element', this.$element);\r\n\r\n    return $container;\r\n  };\r\n\r\n  return Select2;\r\n});\r\n\r\nS2.define('jquery-mousewheel',[\r\n  'jquery'\r\n], function ($) {\r\n  // Used to shim jQuery.mousewheel for non-full builds.\r\n  return $;\r\n});\r\n\r\nS2.define('jquery.select2',[\r\n  'jquery',\r\n  'jquery-mousewheel',\r\n\r\n  './select2/core',\r\n  './select2/defaults'\r\n], function ($, _, Select2, Defaults) {\r\n  if ($.fn.select2 == null) {\r\n    // All methods that should return the element\r\n    var thisMethods = ['open', 'close', 'destroy'];\r\n\r\n    $.fn.select2 = function (options) {\r\n      options = options || {};\r\n\r\n      if (typeof options === 'object') {\r\n        this.each(function () {\r\n          var instanceOptions = $.extend(true, {}, options);\r\n\r\n          var instance = new Select2($(this), instanceOptions);\r\n        });\r\n\r\n        return this;\r\n      } else if (typeof options === 'string') {\r\n        var ret;\r\n        var args = Array.prototype.slice.call(arguments, 1);\r\n\r\n        this.each(function () {\r\n          var instance = $(this).data('select2');\r\n\r\n          if (instance == null && window.console && console.error) {\r\n            console.error(\r\n              'The select2(\\'' + options + '\\') method was called on an ' +\r\n              'element that is not using Select2.'\r\n            );\r\n          }\r\n\r\n          ret = instance[options].apply(instance, args);\r\n        });\r\n\r\n        // Check if we should be returning `this`\r\n        if ($.inArray(options, thisMethods) > -1) {\r\n          return this;\r\n        }\r\n\r\n        return ret;\r\n      } else {\r\n        throw new Error('Invalid arguments for Select2: ' + options);\r\n      }\r\n    };\r\n  }\r\n\r\n  if ($.fn.select2.defaults == null) {\r\n    $.fn.select2.defaults = Defaults;\r\n  }\r\n\r\n  return Select2;\r\n});\r\n\r\n  // Return the AMD loader configuration so it can be used outside of this file\r\n  return {\r\n    define: S2.define,\r\n    require: S2.require\r\n  };\r\n}());\r\n\r\n  // Autoload the jQuery bindings\r\n  // We know that all of the modules exist above this, so we're safe\r\n  var select2 = S2.require('jquery.select2');\r\n\r\n  // Hold the AMD module references on the jQuery function that was just loaded\r\n  // This allows Select2 to use the internal loader outside of this file, such\r\n  // as in the language files.\r\n  jQuery.fn.select2.amd = S2;\r\n\r\n  // Return the Select2 instance for anyone who is importing it.\r\n  return select2;\r\n}));\r\n"

/***/ }),

/***/ 741:
/*!*********************************************************************!*\
  !*** ./_src/js/external/modified/jquery.comiseo.daterangepicker.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
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

/***/ 742:
/*!****************************************************!*\
  !*** ./_src/js/external/modified/bs_datepicker.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
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

/***/ 743:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/jquery-datetimepicker/build/jquery.datetimepicker.full.min.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ 5)(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/jquery-datetimepicker/build/jquery.datetimepicker.full.min.js */ 744))

/***/ }),

/***/ 744:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/jquery-datetimepicker/build/jquery.datetimepicker.full.min.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "var DateFormatter;!function(){\"use strict\";var e,t,a,r,n,o;n=864e5,o=3600,e=function(e,t){return\"string\"==typeof e&&\"string\"==typeof t&&e.toLowerCase()===t.toLowerCase()},t=function(e,a,r){var n=r||\"0\",o=e.toString();return o.length<a?t(n+o,a):o},a=function(e){var t,r;for(e=e||{},t=1;t<arguments.length;t++)if(r=arguments[t])for(var n in r)r.hasOwnProperty(n)&&(\"object\"==typeof r[n]?a(e[n],r[n]):e[n]=r[n]);return e},r={dateSettings:{days:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],daysShort:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],months:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],monthsShort:[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"],meridiem:[\"AM\",\"PM\"],ordinal:function(e){var t=e%10,a={1:\"st\",2:\"nd\",3:\"rd\"};return 1!==Math.floor(e%100/10)&&a[t]?a[t]:\"th\"}},separators:/[ \\-+\\/\\.T:@]/g,validParts:/[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,intParts:/[djwNzmnyYhHgGis]/g,tzParts:/\\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\\d{4})?)\\b/g,tzClip:/[^-+\\dA-Z]/g},DateFormatter=function(e){var t=this,n=a(r,e);t.dateSettings=n.dateSettings,t.separators=n.separators,t.validParts=n.validParts,t.intParts=n.intParts,t.tzParts=n.tzParts,t.tzClip=n.tzClip},DateFormatter.prototype={constructor:DateFormatter,parseDate:function(t,a){var r,n,o,i,s,d,u,l,f,c,m=this,h=!1,g=!1,p=m.dateSettings,y={date:null,year:null,month:null,day:null,hour:0,min:0,sec:0};if(!t)return void 0;if(t instanceof Date)return t;if(\"number\"==typeof t)return new Date(t);if(\"U\"===a)return o=parseInt(t),o?new Date(1e3*o):t;if(\"string\"!=typeof t)return\"\";if(r=a.match(m.validParts),!r||0===r.length)throw new Error(\"Invalid date format definition.\");for(n=t.replace(m.separators,\"\\x00\").split(\"\\x00\"),o=0;o<n.length;o++)switch(i=n[o],s=parseInt(i),r[o]){case\"y\":case\"Y\":f=i.length,2===f?y.year=parseInt((70>s?\"20\":\"19\")+i):4===f&&(y.year=s),h=!0;break;case\"m\":case\"n\":case\"M\":case\"F\":isNaN(i)?(d=p.monthsShort.indexOf(i),d>-1&&(y.month=d+1),d=p.months.indexOf(i),d>-1&&(y.month=d+1)):s>=1&&12>=s&&(y.month=s),h=!0;break;case\"d\":case\"j\":s>=1&&31>=s&&(y.day=s),h=!0;break;case\"g\":case\"h\":u=r.indexOf(\"a\")>-1?r.indexOf(\"a\"):r.indexOf(\"A\")>-1?r.indexOf(\"A\"):-1,c=n[u],u>-1?(l=e(c,p.meridiem[0])?0:e(c,p.meridiem[1])?12:-1,s>=1&&12>=s&&l>-1?y.hour=s+l-1:s>=0&&23>=s&&(y.hour=s)):s>=0&&23>=s&&(y.hour=s),g=!0;break;case\"G\":case\"H\":s>=0&&23>=s&&(y.hour=s),g=!0;break;case\"i\":s>=0&&59>=s&&(y.min=s),g=!0;break;case\"s\":s>=0&&59>=s&&(y.sec=s),g=!0}if(h===!0&&y.year&&y.month&&y.day)y.date=new Date(y.year,y.month-1,y.day,y.hour,y.min,y.sec,0);else{if(g!==!0)return!1;y.date=new Date(0,0,0,y.hour,y.min,y.sec,0)}return y.date},guessDate:function(e,t){if(\"string\"!=typeof e)return e;var a,r,n,o,i=this,s=e.replace(i.separators,\"\\x00\").split(\"\\x00\"),d=/^[djmn]/g,u=t.match(i.validParts),l=new Date,f=0;if(!d.test(u[0]))return e;for(r=0;r<s.length;r++){switch(f=2,n=s[r],o=parseInt(n.substr(0,2)),r){case 0:\"m\"===u[0]||\"n\"===u[0]?l.setMonth(o-1):l.setDate(o);break;case 1:\"m\"===u[0]||\"n\"===u[0]?l.setDate(o):l.setMonth(o-1);break;case 2:a=l.getFullYear(),n.length<4?(l.setFullYear(parseInt(a.toString().substr(0,4-n.length)+n)),f=n.length):(l.setFullYear=parseInt(n.substr(0,4)),f=4);break;case 3:l.setHours(o);break;case 4:l.setMinutes(o);break;case 5:l.setSeconds(o)}n.substr(f).length>0&&s.splice(r+1,0,n.substr(f))}return l},parseFormat:function(e,a){var r,i=this,s=i.dateSettings,d=/\\\\?(.?)/gi,u=function(e,t){return r[e]?r[e]():t};return r={d:function(){return t(r.j(),2)},D:function(){return s.daysShort[r.w()]},j:function(){return a.getDate()},l:function(){return s.days[r.w()]},N:function(){return r.w()||7},w:function(){return a.getDay()},z:function(){var e=new Date(r.Y(),r.n()-1,r.j()),t=new Date(r.Y(),0,1);return Math.round((e-t)/n)},W:function(){var e=new Date(r.Y(),r.n()-1,r.j()-r.N()+3),a=new Date(e.getFullYear(),0,4);return t(1+Math.round((e-a)/n/7),2)},F:function(){return s.months[a.getMonth()]},m:function(){return t(r.n(),2)},M:function(){return s.monthsShort[a.getMonth()]},n:function(){return a.getMonth()+1},t:function(){return new Date(r.Y(),r.n(),0).getDate()},L:function(){var e=r.Y();return e%4===0&&e%100!==0||e%400===0?1:0},o:function(){var e=r.n(),t=r.W(),a=r.Y();return a+(12===e&&9>t?1:1===e&&t>9?-1:0)},Y:function(){return a.getFullYear()},y:function(){return r.Y().toString().slice(-2)},a:function(){return r.A().toLowerCase()},A:function(){var e=r.G()<12?0:1;return s.meridiem[e]},B:function(){var e=a.getUTCHours()*o,r=60*a.getUTCMinutes(),n=a.getUTCSeconds();return t(Math.floor((e+r+n+o)/86.4)%1e3,3)},g:function(){return r.G()%12||12},G:function(){return a.getHours()},h:function(){return t(r.g(),2)},H:function(){return t(r.G(),2)},i:function(){return t(a.getMinutes(),2)},s:function(){return t(a.getSeconds(),2)},u:function(){return t(1e3*a.getMilliseconds(),6)},e:function(){var e=/\\((.*)\\)/.exec(String(a))[1];return e||\"Coordinated Universal Time\"},T:function(){var e=(String(a).match(i.tzParts)||[\"\"]).pop().replace(i.tzClip,\"\");return e||\"UTC\"},I:function(){var e=new Date(r.Y(),0),t=Date.UTC(r.Y(),0),a=new Date(r.Y(),6),n=Date.UTC(r.Y(),6);return e-t!==a-n?1:0},O:function(){var e=a.getTimezoneOffset(),r=Math.abs(e);return(e>0?\"-\":\"+\")+t(100*Math.floor(r/60)+r%60,4)},P:function(){var e=r.O();return e.substr(0,3)+\":\"+e.substr(3,2)},Z:function(){return 60*-a.getTimezoneOffset()},c:function(){return\"Y-m-d\\\\TH:i:sP\".replace(d,u)},r:function(){return\"D, d M Y H:i:s O\".replace(d,u)},U:function(){return a.getTime()/1e3||0}},u(e,e)},formatDate:function(e,t){var a,r,n,o,i,s=this,d=\"\";if(\"string\"==typeof e&&(e=s.parseDate(e,t),e===!1))return!1;if(e instanceof Date){for(n=t.length,a=0;n>a;a++)i=t.charAt(a),\"S\"!==i&&(o=s.parseFormat(i,e),a!==n-1&&s.intParts.test(i)&&\"S\"===t.charAt(a+1)&&(r=parseInt(o),o+=s.dateSettings.ordinal(r)),d+=o);return d}return\"\"}}}(),function(e){\"function\"==typeof define&&define.amd?define([\"jquery\",\"jquery-mousewheel\"],e):\"object\"==typeof exports?module.exports=e:e(jQuery)}(function(e){\"use strict\";function t(e,t,a){this.date=e,this.desc=t,this.style=a}var a={i18n:{ar:{months:[\"كانون الثاني\",\"شباط\",\"آذار\",\"نيسان\",\"مايو\",\"حزيران\",\"تموز\",\"آب\",\"أيلول\",\"تشرين الأول\",\"تشرين الثاني\",\"كانون الأول\"],dayOfWeekShort:[\"ن\",\"ث\",\"ع\",\"خ\",\"ج\",\"س\",\"ح\"],dayOfWeek:[\"الأحد\",\"الاثنين\",\"الثلاثاء\",\"الأربعاء\",\"الخميس\",\"الجمعة\",\"السبت\",\"الأحد\"]},ro:{months:[\"Ianuarie\",\"Februarie\",\"Martie\",\"Aprilie\",\"Mai\",\"Iunie\",\"Iulie\",\"August\",\"Septembrie\",\"Octombrie\",\"Noiembrie\",\"Decembrie\"],dayOfWeekShort:[\"Du\",\"Lu\",\"Ma\",\"Mi\",\"Jo\",\"Vi\",\"Sâ\"],dayOfWeek:[\"Duminică\",\"Luni\",\"Marţi\",\"Miercuri\",\"Joi\",\"Vineri\",\"Sâmbătă\"]},id:{months:[\"Januari\",\"Februari\",\"Maret\",\"April\",\"Mei\",\"Juni\",\"Juli\",\"Agustus\",\"September\",\"Oktober\",\"November\",\"Desember\"],dayOfWeekShort:[\"Min\",\"Sen\",\"Sel\",\"Rab\",\"Kam\",\"Jum\",\"Sab\"],dayOfWeek:[\"Minggu\",\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\",\"Sabtu\"]},is:{months:[\"Janúar\",\"Febrúar\",\"Mars\",\"Apríl\",\"Maí\",\"Júní\",\"Júlí\",\"Ágúst\",\"September\",\"Október\",\"Nóvember\",\"Desember\"],dayOfWeekShort:[\"Sun\",\"Mán\",\"Þrið\",\"Mið\",\"Fim\",\"Fös\",\"Lau\"],dayOfWeek:[\"Sunnudagur\",\"Mánudagur\",\"Þriðjudagur\",\"Miðvikudagur\",\"Fimmtudagur\",\"Föstudagur\",\"Laugardagur\"]},bg:{months:[\"Януари\",\"Февруари\",\"Март\",\"Април\",\"Май\",\"Юни\",\"Юли\",\"Август\",\"Септември\",\"Октомври\",\"Ноември\",\"Декември\"],dayOfWeekShort:[\"Нд\",\"Пн\",\"Вт\",\"Ср\",\"Чт\",\"Пт\",\"Сб\"],dayOfWeek:[\"Неделя\",\"Понеделник\",\"Вторник\",\"Сряда\",\"Четвъртък\",\"Петък\",\"Събота\"]},fa:{months:[\"فروردین\",\"اردیبهشت\",\"خرداد\",\"تیر\",\"مرداد\",\"شهریور\",\"مهر\",\"آبان\",\"آذر\",\"دی\",\"بهمن\",\"اسفند\"],dayOfWeekShort:[\"یکشنبه\",\"دوشنبه\",\"سه شنبه\",\"چهارشنبه\",\"پنجشنبه\",\"جمعه\",\"شنبه\"],dayOfWeek:[\"یک‌شنبه\",\"دوشنبه\",\"سه‌شنبه\",\"چهارشنبه\",\"پنج‌شنبه\",\"جمعه\",\"شنبه\",\"یک‌شنبه\"]},ru:{months:[\"Январь\",\"Февраль\",\"Март\",\"Апрель\",\"Май\",\"Июнь\",\"Июль\",\"Август\",\"Сентябрь\",\"Октябрь\",\"Ноябрь\",\"Декабрь\"],dayOfWeekShort:[\"Вс\",\"Пн\",\"Вт\",\"Ср\",\"Чт\",\"Пт\",\"Сб\"],dayOfWeek:[\"Воскресенье\",\"Понедельник\",\"Вторник\",\"Среда\",\"Четверг\",\"Пятница\",\"Суббота\"]},uk:{months:[\"Січень\",\"Лютий\",\"Березень\",\"Квітень\",\"Травень\",\"Червень\",\"Липень\",\"Серпень\",\"Вересень\",\"Жовтень\",\"Листопад\",\"Грудень\"],dayOfWeekShort:[\"Ндл\",\"Пнд\",\"Втр\",\"Срд\",\"Чтв\",\"Птн\",\"Сбт\"],dayOfWeek:[\"Неділя\",\"Понеділок\",\"Вівторок\",\"Середа\",\"Четвер\",\"П'ятниця\",\"Субота\"]},en:{months:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],dayOfWeekShort:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],dayOfWeek:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"]},el:{months:[\"Ιανουάριος\",\"Φεβρουάριος\",\"Μάρτιος\",\"Απρίλιος\",\"Μάιος\",\"Ιούνιος\",\"Ιούλιος\",\"Αύγουστος\",\"Σεπτέμβριος\",\"Οκτώβριος\",\"Νοέμβριος\",\"Δεκέμβριος\"],dayOfWeekShort:[\"Κυρ\",\"Δευ\",\"Τρι\",\"Τετ\",\"Πεμ\",\"Παρ\",\"Σαβ\"],dayOfWeek:[\"Κυριακή\",\"Δευτέρα\",\"Τρίτη\",\"Τετάρτη\",\"Πέμπτη\",\"Παρασκευή\",\"Σάββατο\"]},de:{months:[\"Januar\",\"Februar\",\"März\",\"April\",\"Mai\",\"Juni\",\"Juli\",\"August\",\"September\",\"Oktober\",\"November\",\"Dezember\"],dayOfWeekShort:[\"So\",\"Mo\",\"Di\",\"Mi\",\"Do\",\"Fr\",\"Sa\"],dayOfWeek:[\"Sonntag\",\"Montag\",\"Dienstag\",\"Mittwoch\",\"Donnerstag\",\"Freitag\",\"Samstag\"]},nl:{months:[\"januari\",\"februari\",\"maart\",\"april\",\"mei\",\"juni\",\"juli\",\"augustus\",\"september\",\"oktober\",\"november\",\"december\"],dayOfWeekShort:[\"zo\",\"ma\",\"di\",\"wo\",\"do\",\"vr\",\"za\"],dayOfWeek:[\"zondag\",\"maandag\",\"dinsdag\",\"woensdag\",\"donderdag\",\"vrijdag\",\"zaterdag\"]},tr:{months:[\"Ocak\",\"Şubat\",\"Mart\",\"Nisan\",\"Mayıs\",\"Haziran\",\"Temmuz\",\"Ağustos\",\"Eylül\",\"Ekim\",\"Kasım\",\"Aralık\"],dayOfWeekShort:[\"Paz\",\"Pts\",\"Sal\",\"Çar\",\"Per\",\"Cum\",\"Cts\"],dayOfWeek:[\"Pazar\",\"Pazartesi\",\"Salı\",\"Çarşamba\",\"Perşembe\",\"Cuma\",\"Cumartesi\"]},fr:{months:[\"Janvier\",\"Février\",\"Mars\",\"Avril\",\"Mai\",\"Juin\",\"Juillet\",\"Août\",\"Septembre\",\"Octobre\",\"Novembre\",\"Décembre\"],dayOfWeekShort:[\"Dim\",\"Lun\",\"Mar\",\"Mer\",\"Jeu\",\"Ven\",\"Sam\"],dayOfWeek:[\"dimanche\",\"lundi\",\"mardi\",\"mercredi\",\"jeudi\",\"vendredi\",\"samedi\"]},es:{months:[\"Enero\",\"Febrero\",\"Marzo\",\"Abril\",\"Mayo\",\"Junio\",\"Julio\",\"Agosto\",\"Septiembre\",\"Octubre\",\"Noviembre\",\"Diciembre\"],dayOfWeekShort:[\"Dom\",\"Lun\",\"Mar\",\"Mié\",\"Jue\",\"Vie\",\"Sáb\"],dayOfWeek:[\"Domingo\",\"Lunes\",\"Martes\",\"Miércoles\",\"Jueves\",\"Viernes\",\"Sábado\"]},th:{months:[\"มกราคม\",\"กุมภาพันธ์\",\"มีนาคม\",\"เมษายน\",\"พฤษภาคม\",\"มิถุนายน\",\"กรกฎาคม\",\"สิงหาคม\",\"กันยายน\",\"ตุลาคม\",\"พฤศจิกายน\",\"ธันวาคม\"],dayOfWeekShort:[\"อา.\",\"จ.\",\"อ.\",\"พ.\",\"พฤ.\",\"ศ.\",\"ส.\"],dayOfWeek:[\"อาทิตย์\",\"จันทร์\",\"อังคาร\",\"พุธ\",\"พฤหัส\",\"ศุกร์\",\"เสาร์\",\"อาทิตย์\"]},pl:{months:[\"styczeń\",\"luty\",\"marzec\",\"kwiecień\",\"maj\",\"czerwiec\",\"lipiec\",\"sierpień\",\"wrzesień\",\"październik\",\"listopad\",\"grudzień\"],dayOfWeekShort:[\"nd\",\"pn\",\"wt\",\"śr\",\"cz\",\"pt\",\"sb\"],dayOfWeek:[\"niedziela\",\"poniedziałek\",\"wtorek\",\"środa\",\"czwartek\",\"piątek\",\"sobota\"]},pt:{months:[\"Janeiro\",\"Fevereiro\",\"Março\",\"Abril\",\"Maio\",\"Junho\",\"Julho\",\"Agosto\",\"Setembro\",\"Outubro\",\"Novembro\",\"Dezembro\"],dayOfWeekShort:[\"Dom\",\"Seg\",\"Ter\",\"Qua\",\"Qui\",\"Sex\",\"Sab\"],dayOfWeek:[\"Domingo\",\"Segunda\",\"Terça\",\"Quarta\",\"Quinta\",\"Sexta\",\"Sábado\"]},ch:{months:[\"一月\",\"二月\",\"三月\",\"四月\",\"五月\",\"六月\",\"七月\",\"八月\",\"九月\",\"十月\",\"十一月\",\"十二月\"],dayOfWeekShort:[\"日\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\"]},se:{months:[\"Januari\",\"Februari\",\"Mars\",\"April\",\"Maj\",\"Juni\",\"Juli\",\"Augusti\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Sön\",\"Mån\",\"Tis\",\"Ons\",\"Tor\",\"Fre\",\"Lör\"]},kr:{months:[\"1월\",\"2월\",\"3월\",\"4월\",\"5월\",\"6월\",\"7월\",\"8월\",\"9월\",\"10월\",\"11월\",\"12월\"],dayOfWeekShort:[\"일\",\"월\",\"화\",\"수\",\"목\",\"금\",\"토\"],dayOfWeek:[\"일요일\",\"월요일\",\"화요일\",\"수요일\",\"목요일\",\"금요일\",\"토요일\"]},it:{months:[\"Gennaio\",\"Febbraio\",\"Marzo\",\"Aprile\",\"Maggio\",\"Giugno\",\"Luglio\",\"Agosto\",\"Settembre\",\"Ottobre\",\"Novembre\",\"Dicembre\"],dayOfWeekShort:[\"Dom\",\"Lun\",\"Mar\",\"Mer\",\"Gio\",\"Ven\",\"Sab\"],dayOfWeek:[\"Domenica\",\"Lunedì\",\"Martedì\",\"Mercoledì\",\"Giovedì\",\"Venerdì\",\"Sabato\"]},da:{months:[\"January\",\"Februar\",\"Marts\",\"April\",\"Maj\",\"Juni\",\"July\",\"August\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Søn\",\"Man\",\"Tir\",\"Ons\",\"Tor\",\"Fre\",\"Lør\"],dayOfWeek:[\"søndag\",\"mandag\",\"tirsdag\",\"onsdag\",\"torsdag\",\"fredag\",\"lørdag\"]},no:{months:[\"Januar\",\"Februar\",\"Mars\",\"April\",\"Mai\",\"Juni\",\"Juli\",\"August\",\"September\",\"Oktober\",\"November\",\"Desember\"],dayOfWeekShort:[\"Søn\",\"Man\",\"Tir\",\"Ons\",\"Tor\",\"Fre\",\"Lør\"],dayOfWeek:[\"Søndag\",\"Mandag\",\"Tirsdag\",\"Onsdag\",\"Torsdag\",\"Fredag\",\"Lørdag\"]},ja:{months:[\"1月\",\"2月\",\"3月\",\"4月\",\"5月\",\"6月\",\"7月\",\"8月\",\"9月\",\"10月\",\"11月\",\"12月\"],dayOfWeekShort:[\"日\",\"月\",\"火\",\"水\",\"木\",\"金\",\"土\"],dayOfWeek:[\"日曜\",\"月曜\",\"火曜\",\"水曜\",\"木曜\",\"金曜\",\"土曜\"]},vi:{months:[\"Tháng 1\",\"Tháng 2\",\"Tháng 3\",\"Tháng 4\",\"Tháng 5\",\"Tháng 6\",\"Tháng 7\",\"Tháng 8\",\"Tháng 9\",\"Tháng 10\",\"Tháng 11\",\"Tháng 12\"],dayOfWeekShort:[\"CN\",\"T2\",\"T3\",\"T4\",\"T5\",\"T6\",\"T7\"],dayOfWeek:[\"Chủ nhật\",\"Thứ hai\",\"Thứ ba\",\"Thứ tư\",\"Thứ năm\",\"Thứ sáu\",\"Thứ bảy\"]},sl:{months:[\"Januar\",\"Februar\",\"Marec\",\"April\",\"Maj\",\"Junij\",\"Julij\",\"Avgust\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Tor\",\"Sre\",\"Čet\",\"Pet\",\"Sob\"],dayOfWeek:[\"Nedelja\",\"Ponedeljek\",\"Torek\",\"Sreda\",\"Četrtek\",\"Petek\",\"Sobota\"]},cs:{months:[\"Leden\",\"Únor\",\"Březen\",\"Duben\",\"Květen\",\"Červen\",\"Červenec\",\"Srpen\",\"Září\",\"Říjen\",\"Listopad\",\"Prosinec\"],dayOfWeekShort:[\"Ne\",\"Po\",\"Út\",\"St\",\"Čt\",\"Pá\",\"So\"]},hu:{months:[\"Január\",\"Február\",\"Március\",\"Április\",\"Május\",\"Június\",\"Július\",\"Augusztus\",\"Szeptember\",\"Október\",\"November\",\"December\"],dayOfWeekShort:[\"Va\",\"Hé\",\"Ke\",\"Sze\",\"Cs\",\"Pé\",\"Szo\"],dayOfWeek:[\"vasárnap\",\"hétfő\",\"kedd\",\"szerda\",\"csütörtök\",\"péntek\",\"szombat\"]},az:{months:[\"Yanvar\",\"Fevral\",\"Mart\",\"Aprel\",\"May\",\"Iyun\",\"Iyul\",\"Avqust\",\"Sentyabr\",\"Oktyabr\",\"Noyabr\",\"Dekabr\"],dayOfWeekShort:[\"B\",\"Be\",\"Ça\",\"Ç\",\"Ca\",\"C\",\"Ş\"],dayOfWeek:[\"Bazar\",\"Bazar ertəsi\",\"Çərşənbə axşamı\",\"Çərşənbə\",\"Cümə axşamı\",\"Cümə\",\"Şənbə\"]},bs:{months:[\"Januar\",\"Februar\",\"Mart\",\"April\",\"Maj\",\"Jun\",\"Jul\",\"Avgust\",\"Septembar\",\"Oktobar\",\"Novembar\",\"Decembar\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Uto\",\"Sri\",\"Čet\",\"Pet\",\"Sub\"],dayOfWeek:[\"Nedjelja\",\"Ponedjeljak\",\"Utorak\",\"Srijeda\",\"Četvrtak\",\"Petak\",\"Subota\"]},ca:{months:[\"Gener\",\"Febrer\",\"Març\",\"Abril\",\"Maig\",\"Juny\",\"Juliol\",\"Agost\",\"Setembre\",\"Octubre\",\"Novembre\",\"Desembre\"],dayOfWeekShort:[\"Dg\",\"Dl\",\"Dt\",\"Dc\",\"Dj\",\"Dv\",\"Ds\"],dayOfWeek:[\"Diumenge\",\"Dilluns\",\"Dimarts\",\"Dimecres\",\"Dijous\",\"Divendres\",\"Dissabte\"]},\"en-GB\":{months:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],dayOfWeekShort:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],dayOfWeek:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"]},et:{months:[\"Jaanuar\",\"Veebruar\",\"Märts\",\"Aprill\",\"Mai\",\"Juuni\",\"Juuli\",\"August\",\"September\",\"Oktoober\",\"November\",\"Detsember\"],dayOfWeekShort:[\"P\",\"E\",\"T\",\"K\",\"N\",\"R\",\"L\"],dayOfWeek:[\"Pühapäev\",\"Esmaspäev\",\"Teisipäev\",\"Kolmapäev\",\"Neljapäev\",\"Reede\",\"Laupäev\"]},eu:{months:[\"Urtarrila\",\"Otsaila\",\"Martxoa\",\"Apirila\",\"Maiatza\",\"Ekaina\",\"Uztaila\",\"Abuztua\",\"Iraila\",\"Urria\",\"Azaroa\",\"Abendua\"],dayOfWeekShort:[\"Ig.\",\"Al.\",\"Ar.\",\"Az.\",\"Og.\",\"Or.\",\"La.\"],dayOfWeek:[\"Igandea\",\"Astelehena\",\"Asteartea\",\"Asteazkena\",\"Osteguna\",\"Ostirala\",\"Larunbata\"]},fi:{months:[\"Tammikuu\",\"Helmikuu\",\"Maaliskuu\",\"Huhtikuu\",\"Toukokuu\",\"Kesäkuu\",\"Heinäkuu\",\"Elokuu\",\"Syyskuu\",\"Lokakuu\",\"Marraskuu\",\"Joulukuu\"],dayOfWeekShort:[\"Su\",\"Ma\",\"Ti\",\"Ke\",\"To\",\"Pe\",\"La\"],dayOfWeek:[\"sunnuntai\",\"maanantai\",\"tiistai\",\"keskiviikko\",\"torstai\",\"perjantai\",\"lauantai\"]},gl:{months:[\"Xan\",\"Feb\",\"Maz\",\"Abr\",\"Mai\",\"Xun\",\"Xul\",\"Ago\",\"Set\",\"Out\",\"Nov\",\"Dec\"],dayOfWeekShort:[\"Dom\",\"Lun\",\"Mar\",\"Mer\",\"Xov\",\"Ven\",\"Sab\"],dayOfWeek:[\"Domingo\",\"Luns\",\"Martes\",\"Mércores\",\"Xoves\",\"Venres\",\"Sábado\"]},hr:{months:[\"Siječanj\",\"Veljača\",\"Ožujak\",\"Travanj\",\"Svibanj\",\"Lipanj\",\"Srpanj\",\"Kolovoz\",\"Rujan\",\"Listopad\",\"Studeni\",\"Prosinac\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Uto\",\"Sri\",\"Čet\",\"Pet\",\"Sub\"],dayOfWeek:[\"Nedjelja\",\"Ponedjeljak\",\"Utorak\",\"Srijeda\",\"Četvrtak\",\"Petak\",\"Subota\"]},ko:{months:[\"1월\",\"2월\",\"3월\",\"4월\",\"5월\",\"6월\",\"7월\",\"8월\",\"9월\",\"10월\",\"11월\",\"12월\"],dayOfWeekShort:[\"일\",\"월\",\"화\",\"수\",\"목\",\"금\",\"토\"],dayOfWeek:[\"일요일\",\"월요일\",\"화요일\",\"수요일\",\"목요일\",\"금요일\",\"토요일\"]},lt:{months:[\"Sausio\",\"Vasario\",\"Kovo\",\"Balandžio\",\"Gegužės\",\"Birželio\",\"Liepos\",\"Rugpjūčio\",\"Rugsėjo\",\"Spalio\",\"Lapkričio\",\"Gruodžio\"],dayOfWeekShort:[\"Sek\",\"Pir\",\"Ant\",\"Tre\",\"Ket\",\"Pen\",\"Šeš\"],dayOfWeek:[\"Sekmadienis\",\"Pirmadienis\",\"Antradienis\",\"Trečiadienis\",\"Ketvirtadienis\",\"Penktadienis\",\"Šeštadienis\"]},lv:{months:[\"Janvāris\",\"Februāris\",\"Marts\",\"Aprīlis \",\"Maijs\",\"Jūnijs\",\"Jūlijs\",\"Augusts\",\"Septembris\",\"Oktobris\",\"Novembris\",\"Decembris\"],dayOfWeekShort:[\"Sv\",\"Pr\",\"Ot\",\"Tr\",\"Ct\",\"Pk\",\"St\"],dayOfWeek:[\"Svētdiena\",\"Pirmdiena\",\"Otrdiena\",\"Trešdiena\",\"Ceturtdiena\",\"Piektdiena\",\"Sestdiena\"]},mk:{months:[\"јануари\",\"февруари\",\"март\",\"април\",\"мај\",\"јуни\",\"јули\",\"август\",\"септември\",\"октомври\",\"ноември\",\"декември\"],dayOfWeekShort:[\"нед\",\"пон\",\"вто\",\"сре\",\"чет\",\"пет\",\"саб\"],dayOfWeek:[\"Недела\",\"Понеделник\",\"Вторник\",\"Среда\",\"Четврток\",\"Петок\",\"Сабота\"]},mn:{months:[\"1-р сар\",\"2-р сар\",\"3-р сар\",\"4-р сар\",\"5-р сар\",\"6-р сар\",\"7-р сар\",\"8-р сар\",\"9-р сар\",\"10-р сар\",\"11-р сар\",\"12-р сар\"],dayOfWeekShort:[\"Дав\",\"Мяг\",\"Лха\",\"Пүр\",\"Бсн\",\"Бям\",\"Ням\"],dayOfWeek:[\"Даваа\",\"Мягмар\",\"Лхагва\",\"Пүрэв\",\"Баасан\",\"Бямба\",\"Ням\"]},\"pt-BR\":{months:[\"Janeiro\",\"Fevereiro\",\"Março\",\"Abril\",\"Maio\",\"Junho\",\"Julho\",\"Agosto\",\"Setembro\",\"Outubro\",\"Novembro\",\"Dezembro\"],dayOfWeekShort:[\"Dom\",\"Seg\",\"Ter\",\"Qua\",\"Qui\",\"Sex\",\"Sáb\"],dayOfWeek:[\"Domingo\",\"Segunda\",\"Terça\",\"Quarta\",\"Quinta\",\"Sexta\",\"Sábado\"]},sk:{months:[\"Január\",\"Február\",\"Marec\",\"Apríl\",\"Máj\",\"Jún\",\"Júl\",\"August\",\"September\",\"Október\",\"November\",\"December\"],dayOfWeekShort:[\"Ne\",\"Po\",\"Ut\",\"St\",\"Št\",\"Pi\",\"So\"],dayOfWeek:[\"Nedeľa\",\"Pondelok\",\"Utorok\",\"Streda\",\"Štvrtok\",\"Piatok\",\"Sobota\"]},sq:{months:[\"Janar\",\"Shkurt\",\"Mars\",\"Prill\",\"Maj\",\"Qershor\",\"Korrik\",\"Gusht\",\"Shtator\",\"Tetor\",\"Nëntor\",\"Dhjetor\"],dayOfWeekShort:[\"Die\",\"Hën\",\"Mar\",\"Mër\",\"Enj\",\"Pre\",\"Shtu\"],dayOfWeek:[\"E Diel\",\"E Hënë\",\"E Martē\",\"E Mërkurë\",\"E Enjte\",\"E Premte\",\"E Shtunë\"]},\"sr-YU\":{months:[\"Januar\",\"Februar\",\"Mart\",\"April\",\"Maj\",\"Jun\",\"Jul\",\"Avgust\",\"Septembar\",\"Oktobar\",\"Novembar\",\"Decembar\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Uto\",\"Sre\",\"čet\",\"Pet\",\"Sub\"],dayOfWeek:[\"Nedelja\",\"Ponedeljak\",\"Utorak\",\"Sreda\",\"Četvrtak\",\"Petak\",\"Subota\"]},sr:{months:[\"јануар\",\"фебруар\",\"март\",\"април\",\"мај\",\"јун\",\"јул\",\"август\",\"септембар\",\"октобар\",\"новембар\",\"децембар\"],dayOfWeekShort:[\"нед\",\"пон\",\"уто\",\"сре\",\"чет\",\"пет\",\"суб\"],dayOfWeek:[\"Недеља\",\"Понедељак\",\"Уторак\",\"Среда\",\"Четвртак\",\"Петак\",\"Субота\"]},sv:{months:[\"Januari\",\"Februari\",\"Mars\",\"April\",\"Maj\",\"Juni\",\"Juli\",\"Augusti\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Sön\",\"Mån\",\"Tis\",\"Ons\",\"Tor\",\"Fre\",\"Lör\"],dayOfWeek:[\"Söndag\",\"Måndag\",\"Tisdag\",\"Onsdag\",\"Torsdag\",\"Fredag\",\"Lördag\"]},\"zh-TW\":{months:[\"一月\",\"二月\",\"三月\",\"四月\",\"五月\",\"六月\",\"七月\",\"八月\",\"九月\",\"十月\",\"十一月\",\"十二月\"],dayOfWeekShort:[\"日\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\"],dayOfWeek:[\"星期日\",\"星期一\",\"星期二\",\"星期三\",\"星期四\",\"星期五\",\"星期六\"]},zh:{months:[\"一月\",\"二月\",\"三月\",\"四月\",\"五月\",\"六月\",\"七月\",\"八月\",\"九月\",\"十月\",\"十一月\",\"十二月\"],dayOfWeekShort:[\"日\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\"],dayOfWeek:[\"星期日\",\"星期一\",\"星期二\",\"星期三\",\"星期四\",\"星期五\",\"星期六\"]},he:{months:[\"ינואר\",\"פברואר\",\"מרץ\",\"אפריל\",\"מאי\",\"יוני\",\"יולי\",\"אוגוסט\",\"ספטמבר\",\"אוקטובר\",\"נובמבר\",\"דצמבר\"],dayOfWeekShort:[\"א'\",\"ב'\",\"ג'\",\"ד'\",\"ה'\",\"ו'\",\"שבת\"],dayOfWeek:[\"ראשון\",\"שני\",\"שלישי\",\"רביעי\",\"חמישי\",\"שישי\",\"שבת\",\"ראשון\"]},hy:{months:[\"Հունվար\",\"Փետրվար\",\"Մարտ\",\"Ապրիլ\",\"Մայիս\",\"Հունիս\",\"Հուլիս\",\"Օգոստոս\",\"Սեպտեմբեր\",\"Հոկտեմբեր\",\"Նոյեմբեր\",\"Դեկտեմբեր\"],dayOfWeekShort:[\"Կի\",\"Երկ\",\"Երք\",\"Չոր\",\"Հնգ\",\"Ուրբ\",\"Շբթ\"],dayOfWeek:[\"Կիրակի\",\"Երկուշաբթի\",\"Երեքշաբթի\",\"Չորեքշաբթի\",\"Հինգշաբթի\",\"Ուրբաթ\",\"Շաբաթ\"]},kg:{months:[\"Үчтүн айы\",\"Бирдин айы\",\"Жалган Куран\",\"Чын Куран\",\"Бугу\",\"Кулжа\",\"Теке\",\"Баш Оона\",\"Аяк Оона\",\"Тогуздун айы\",\"Жетинин айы\",\"Бештин айы\"],dayOfWeekShort:[\"Жек\",\"Дүй\",\"Шей\",\"Шар\",\"Бей\",\"Жум\",\"Ише\"],dayOfWeek:[\"Жекшемб\",\"Дүйшөмб\",\"Шейшемб\",\"Шаршемб\",\"Бейшемби\",\"Жума\",\"Ишенб\"]},rm:{months:[\"Schaner\",\"Favrer\",\"Mars\",\"Avrigl\",\"Matg\",\"Zercladur\",\"Fanadur\",\"Avust\",\"Settember\",\"October\",\"November\",\"December\"],dayOfWeekShort:[\"Du\",\"Gli\",\"Ma\",\"Me\",\"Gie\",\"Ve\",\"So\"],dayOfWeek:[\"Dumengia\",\"Glindesdi\",\"Mardi\",\"Mesemna\",\"Gievgia\",\"Venderdi\",\"Sonda\"]},ka:{months:[\"იანვარი\",\"თებერვალი\",\"მარტი\",\"აპრილი\",\"მაისი\",\"ივნისი\",\"ივლისი\",\"აგვისტო\",\"სექტემბერი\",\"ოქტომბერი\",\"ნოემბერი\",\"დეკემბერი\"],dayOfWeekShort:[\"კვ\",\"ორშ\",\"სამშ\",\"ოთხ\",\"ხუთ\",\"პარ\",\"შაბ\"],dayOfWeek:[\"კვირა\",\"ორშაბათი\",\"სამშაბათი\",\"ოთხშაბათი\",\"ხუთშაბათი\",\"პარასკევი\",\"შაბათი\"]}},value:\"\",rtl:!1,format:\"Y/m/d H:i\",formatTime:\"H:i\",formatDate:\"Y/m/d\",startDate:!1,step:60,monthChangeSpinner:!0,closeOnDateSelect:!1,closeOnTimeSelect:!0,closeOnWithoutClick:!0,closeOnInputClick:!0,timepicker:!0,datepicker:!0,weeks:!1,defaultTime:!1,defaultDate:!1,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,disabledMinTime:!1,disabledMaxTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,theme:\"\",onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onGetWeekOfYear:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:\"xdsoft_next\",prev:\"xdsoft_prev\",dayOfWeekStart:0,parentID:\"body\",timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,prevButton:!0,nextButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,monthStart:0,monthEnd:11,style:\"\",id:\"\",fixed:!1,roundTime:\"round\",className:\"\",weekends:[],highlightedDates:[],highlightedPeriods:[],allowDates:[],allowDateRe:null,disabledDates:[],disabledWeekDays:[],yearOffset:0,beforeShowDay:null,enterLikeTab:!0,showApplyButton:!1},r=null,n=\"en\",o=\"en\",i={meridiem:[\"AM\",\"PM\"]},s=function(){var t=a.i18n[o],n={days:t.dayOfWeek,daysShort:t.dayOfWeekShort,months:t.months,monthsShort:e.map(t.months,function(e){return e.substring(0,3)})};r=new DateFormatter({dateSettings:e.extend({},i,n)})};e.datetimepicker={setLocale:function(e){var t=a.i18n[e]?e:n;o!=t&&(o=t,s())},setDateFormatter:function(e){r=e},RFC_2822:\"D, d M Y H:i:s O\",ATOM:\"Y-m-dTH:i:sP\",ISO_8601:\"Y-m-dTH:i:sO\",RFC_822:\"D, d M y H:i:s O\",RFC_850:\"l, d-M-y H:i:s T\",RFC_1036:\"D, d M y H:i:s O\",RFC_1123:\"D, d M Y H:i:s O\",RSS:\"D, d M Y H:i:s O\",W3C:\"Y-m-dTH:i:sP\"},s(),window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var a=/(\\-([a-z]){1})/g;return\"float\"===t&&(t=\"styleFloat\"),a.test(t)&&(t=t.replace(a,function(e,t,a){return a.toUpperCase()})),e.currentStyle[t]||null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var a,r;for(a=t||0,r=this.length;r>a;a+=1)if(this[a]===e)return a;return-1}),Date.prototype.countDaysInMonth=function(){return new Date(this.getFullYear(),this.getMonth()+1,0).getDate()},e.fn.xdsoftScroller=function(t){return this.each(function(){var a,r,n,o,i,s=e(this),d=function(e){var t,a={x:0,y:0};return\"touchstart\"===e.type||\"touchmove\"===e.type||\"touchend\"===e.type||\"touchcancel\"===e.type?(t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a.x=t.clientX,a.y=t.clientY):(\"mousedown\"===e.type||\"mouseup\"===e.type||\"mousemove\"===e.type||\"mouseover\"===e.type||\"mouseout\"===e.type||\"mouseenter\"===e.type||\"mouseleave\"===e.type)&&(a.x=e.clientX,a.y=e.clientY),a},u=100,l=!1,f=0,c=0,m=0,h=!1,g=0,p=function(){};return\"hide\"===t?void s.find(\".xdsoft_scrollbar\").hide():(e(this).hasClass(\"xdsoft_scroller_box\")||(a=s.children().eq(0),r=s[0].clientHeight,n=a[0].offsetHeight,o=e('<div class=\"xdsoft_scrollbar\"></div>'),i=e('<div class=\"xdsoft_scroller\"></div>'),o.append(i),s.addClass(\"xdsoft_scroller_box\").append(o),p=function(e){var t=d(e).y-f+g;0>t&&(t=0),t+i[0].offsetHeight>m&&(t=m-i[0].offsetHeight),s.trigger(\"scroll_element.xdsoft_scroller\",[u?t/u:0])},i.on(\"touchstart.xdsoft_scroller mousedown.xdsoft_scroller\",function(a){r||s.trigger(\"resize_scroll.xdsoft_scroller\",[t]),f=d(a).y,g=parseInt(i.css(\"margin-top\"),10),m=o[0].offsetHeight,\"mousedown\"===a.type||\"touchstart\"===a.type?(document&&e(document.body).addClass(\"xdsoft_noselect\"),e([document.body,window]).on(\"touchend mouseup.xdsoft_scroller\",function n(){e([document.body,window]).off(\"touchend mouseup.xdsoft_scroller\",n).off(\"mousemove.xdsoft_scroller\",p).removeClass(\"xdsoft_noselect\")}),e(document.body).on(\"mousemove.xdsoft_scroller\",p)):(h=!0,a.stopPropagation(),a.preventDefault())}).on(\"touchmove\",function(e){h&&(e.preventDefault(),p(e))}).on(\"touchend touchcancel\",function(){h=!1,g=0}),s.on(\"scroll_element.xdsoft_scroller\",function(e,t){r||s.trigger(\"resize_scroll.xdsoft_scroller\",[t,!0]),t=t>1?1:0>t||isNaN(t)?0:t,i.css(\"margin-top\",u*t),setTimeout(function(){a.css(\"marginTop\",-parseInt((a[0].offsetHeight-r)*t,10))},10)}).on(\"resize_scroll.xdsoft_scroller\",function(e,t,d){var l,f;r=s[0].clientHeight,n=a[0].offsetHeight,l=r/n,f=l*o[0].offsetHeight,l>1?i.hide():(i.show(),i.css(\"height\",parseInt(f>10?f:10,10)),u=o[0].offsetHeight-i[0].offsetHeight,d!==!0&&s.trigger(\"scroll_element.xdsoft_scroller\",[t||Math.abs(parseInt(a.css(\"marginTop\"),10))/(n-r)]))}),s.on(\"mousewheel\",function(e){var t=Math.abs(parseInt(a.css(\"marginTop\"),10));return t-=20*e.deltaY,0>t&&(t=0),s.trigger(\"scroll_element.xdsoft_scroller\",[t/(n-r)]),e.stopPropagation(),!1}),s.on(\"touchstart\",function(e){l=d(e),c=Math.abs(parseInt(a.css(\"marginTop\"),10))}),s.on(\"touchmove\",function(e){if(l){e.preventDefault();var t=d(e);s.trigger(\"scroll_element.xdsoft_scroller\",[(c-(t.y-l.y))/(n-r)])}}),s.on(\"touchend touchcancel\",function(){l=!1,c=0})),void s.trigger(\"resize_scroll.xdsoft_scroller\",[t]))})},e.fn.datetimepicker=function(n,i){var s,d,u=this,l=48,f=57,c=96,m=105,h=17,g=46,p=13,y=27,v=8,b=37,D=38,k=39,x=40,T=9,S=116,w=65,O=67,M=86,_=90,W=89,F=!1,C=e.isPlainObject(n)||!n?e.extend(!0,{},a,n):e.extend(!0,{},a),P=0,A=function(e){e.on(\"open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart\",function t(){e.is(\":disabled\")||e.data(\"xdsoft_datetimepicker\")||(clearTimeout(P),P=setTimeout(function(){e.data(\"xdsoft_datetimepicker\")||s(e),e.off(\"open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart\",t).trigger(\"open.xdsoft\")},100))})};return s=function(a){function i(){var e,t=!1;return C.startDate?t=j.strToDate(C.startDate):(t=C.value||(a&&a.val&&a.val()?a.val():\"\"),t?t=j.strToDateTime(t):C.defaultDate&&(t=j.strToDateTime(C.defaultDate),C.defaultTime&&(e=j.strtotime(C.defaultTime),t.setHours(e.getHours()),t.setMinutes(e.getMinutes())))),t&&j.isValidDate(t)?J.data(\"changed\",!0):t=\"\",t||0}function s(t){var r=function(e,t){var a=e.replace(/([\\[\\]\\/\\{\\}\\(\\)\\-\\.\\+]{1})/g,\"\\\\$1\").replace(/_/g,\"{digit+}\").replace(/([0-9]{1})/g,\"{digit$1}\").replace(/\\{digit([0-9]{1})\\}/g,\"[0-$1_]{1}\").replace(/\\{digit[\\+]\\}/g,\"[0-9_]{1}\");return new RegExp(a).test(t)},n=function(e){try{if(document.selection&&document.selection.createRange){var t=document.selection.createRange();return t.getBookmark().charCodeAt(2)-2}if(e.setSelectionRange)return e.selectionStart}catch(a){return 0}},o=function(e,t){if(e=\"string\"==typeof e||e instanceof String?document.getElementById(e):e,!e)return!1;if(e.createTextRange){var a=e.createTextRange();return a.collapse(!0),a.moveEnd(\"character\",t),a.moveStart(\"character\",t),a.select(),!0}return e.setSelectionRange?(e.setSelectionRange(t,t),!0):!1};t.mask&&a.off(\"keydown.xdsoft\"),t.mask===!0&&(t.mask=\"undefined\"!=typeof moment?t.format.replace(/Y{4}/g,\"9999\").replace(/Y{2}/g,\"99\").replace(/M{2}/g,\"19\").replace(/D{2}/g,\"39\").replace(/H{2}/g,\"29\").replace(/m{2}/g,\"59\").replace(/s{2}/g,\"59\"):t.format.replace(/Y/g,\"9999\").replace(/F/g,\"9999\").replace(/m/g,\"19\").replace(/d/g,\"39\").replace(/H/g,\"29\").replace(/i/g,\"59\").replace(/s/g,\"59\")),\"string\"===e.type(t.mask)&&(r(t.mask,a.val())||(a.val(t.mask.replace(/[0-9]/g,\"_\")),o(a[0],0)),a.on(\"keydown.xdsoft\",function(i){var s,d,u=this.value,C=i.which;if(C>=l&&f>=C||C>=c&&m>=C||C===v||C===g){for(s=n(this),d=C!==v&&C!==g?String.fromCharCode(C>=c&&m>=C?C-l:C):\"_\",C!==v&&C!==g||!s||(s-=1,d=\"_\");/[^0-9_]/.test(t.mask.substr(s,1))&&s<t.mask.length&&s>0;)s+=C===v||C===g?-1:1;if(u=u.substr(0,s)+d+u.substr(s+1),\"\"===e.trim(u))u=t.mask.replace(/[0-9]/g,\"_\");else if(s===t.mask.length)return i.preventDefault(),!1;for(s+=C===v||C===g?0:1;/[^0-9_]/.test(t.mask.substr(s,1))&&s<t.mask.length&&s>0;)s+=C===v||C===g?-1:1;r(t.mask,u)?(this.value=u,o(this,s)):\"\"===e.trim(u)?this.value=t.mask.replace(/[0-9]/g,\"_\"):a.trigger(\"error_input.xdsoft\")}else if(-1!==[w,O,M,_,W].indexOf(C)&&F||-1!==[y,D,x,b,k,S,h,T,p].indexOf(C))return!0;return i.preventDefault(),!1}))}var d,u,P,A,Y,j,H,J=e('<div class=\"xdsoft_datetimepicker xdsoft_noselect\"></div>'),z=e('<div class=\"xdsoft_copyright\"><a target=\"_blank\" href=\"http://xdsoft.net/jqplugins/datetimepicker/\">xdsoft.net</a></div>'),I=e('<div class=\"xdsoft_datepicker active\"></div>'),N=e('<div class=\"xdsoft_mounthpicker\"><button type=\"button\" class=\"xdsoft_prev\"></button><button type=\"button\" class=\"xdsoft_today_button\"></button><div class=\"xdsoft_label xdsoft_month\"><span></span><i></i></div><div class=\"xdsoft_label xdsoft_year\"><span></span><i></i></div><button type=\"button\" class=\"xdsoft_next\"></button></div>'),L=e('<div class=\"xdsoft_calendar\"></div>'),E=e('<div class=\"xdsoft_timepicker active\"><button type=\"button\" class=\"xdsoft_prev\"></button><div class=\"xdsoft_time_box\"></div><button type=\"button\" class=\"xdsoft_next\"></button></div>'),R=E.find(\".xdsoft_time_box\").eq(0),B=e('<div class=\"xdsoft_time_variant\"></div>'),V=e('<button type=\"button\" class=\"xdsoft_save_selected blue-gradient-button\">Save Selected</button>'),G=e('<div class=\"xdsoft_select xdsoft_monthselect\"><div></div></div>'),U=e('<div class=\"xdsoft_select xdsoft_yearselect\"><div></div></div>'),q=!1,X=0;C.id&&J.attr(\"id\",C.id),C.style&&J.attr(\"style\",C.style),C.weeks&&J.addClass(\"xdsoft_showweeks\"),C.rtl&&J.addClass(\"xdsoft_rtl\"),J.addClass(\"xdsoft_\"+C.theme),J.addClass(C.className),N.find(\".xdsoft_month span\").after(G),N.find(\".xdsoft_year span\").after(U),N.find(\".xdsoft_month,.xdsoft_year\").on(\"touchstart mousedown.xdsoft\",function(t){var a,r,n=e(this).find(\".xdsoft_select\").eq(0),o=0,i=0,s=n.is(\":visible\");for(N.find(\".xdsoft_select\").hide(),j.currentTime&&(o=j.currentTime[e(this).hasClass(\"xdsoft_month\")?\"getMonth\":\"getFullYear\"]()),n[s?\"hide\":\"show\"](),a=n.find(\"div.xdsoft_option\"),r=0;r<a.length&&a.eq(r).data(\"value\")!==o;r+=1)i+=a[0].offsetHeight;return n.xdsoftScroller(i/(n.children()[0].offsetHeight-n[0].clientHeight)),t.stopPropagation(),!1}),N.find(\".xdsoft_select\").xdsoftScroller().on(\"touchstart mousedown.xdsoft\",function(e){e.stopPropagation(),e.preventDefault()}).on(\"touchstart mousedown.xdsoft\",\".xdsoft_option\",function(){(void 0===j.currentTime||null===j.currentTime)&&(j.currentTime=j.now());var t=j.currentTime.getFullYear();j&&j.currentTime&&j.currentTime[e(this).parent().parent().hasClass(\"xdsoft_monthselect\")?\"setMonth\":\"setFullYear\"](e(this).data(\"value\")),e(this).parent().parent().hide(),J.trigger(\"xchange.xdsoft\"),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data(\"input\")),t!==j.currentTime.getFullYear()&&e.isFunction(C.onChangeYear)&&C.onChangeYear.call(J,j.currentTime,J.data(\"input\"))}),J.getValue=function(){return j.getCurrentTime()},J.setOptions=function(n){var o={};C=e.extend(!0,{},C,n),n.allowTimes&&e.isArray(n.allowTimes)&&n.allowTimes.length&&(C.allowTimes=e.extend(!0,[],n.allowTimes)),n.weekends&&e.isArray(n.weekends)&&n.weekends.length&&(C.weekends=e.extend(!0,[],n.weekends)),n.allowDates&&e.isArray(n.allowDates)&&n.allowDates.length&&(C.allowDates=e.extend(!0,[],n.allowDates)),n.allowDateRe&&\"[object String]\"===Object.prototype.toString.call(n.allowDateRe)&&(C.allowDateRe=new RegExp(n.allowDateRe)),n.highlightedDates&&e.isArray(n.highlightedDates)&&n.highlightedDates.length&&(e.each(n.highlightedDates,function(a,n){var i,s=e.map(n.split(\",\"),e.trim),d=new t(r.parseDate(s[0],C.formatDate),s[1],s[2]),u=r.formatDate(d.date,C.formatDate);void 0!==o[u]?(i=o[u].desc,i&&i.length&&d.desc&&d.desc.length&&(o[u].desc=i+\"\\n\"+d.desc)):o[u]=d}),C.highlightedDates=e.extend(!0,[],o)),n.highlightedPeriods&&e.isArray(n.highlightedPeriods)&&n.highlightedPeriods.length&&(o=e.extend(!0,[],C.highlightedDates),\ne.each(n.highlightedPeriods,function(a,n){var i,s,d,u,l,f,c;if(e.isArray(n))i=n[0],s=n[1],d=n[2],c=n[3];else{var m=e.map(n.split(\",\"),e.trim);i=r.parseDate(m[0],C.formatDate),s=r.parseDate(m[1],C.formatDate),d=m[2],c=m[3]}for(;s>=i;)u=new t(i,d,c),l=r.formatDate(i,C.formatDate),i.setDate(i.getDate()+1),void 0!==o[l]?(f=o[l].desc,f&&f.length&&u.desc&&u.desc.length&&(o[l].desc=f+\"\\n\"+u.desc)):o[l]=u}),C.highlightedDates=e.extend(!0,[],o)),n.disabledDates&&e.isArray(n.disabledDates)&&n.disabledDates.length&&(C.disabledDates=e.extend(!0,[],n.disabledDates)),n.disabledWeekDays&&e.isArray(n.disabledWeekDays)&&n.disabledWeekDays.length&&(C.disabledWeekDays=e.extend(!0,[],n.disabledWeekDays)),!C.open&&!C.opened||C.inline||a.trigger(\"open.xdsoft\"),C.inline&&(q=!0,J.addClass(\"xdsoft_inline\"),a.after(J).hide()),C.inverseButton&&(C.next=\"xdsoft_prev\",C.prev=\"xdsoft_next\"),C.datepicker?I.addClass(\"active\"):I.removeClass(\"active\"),C.timepicker?E.addClass(\"active\"):E.removeClass(\"active\"),C.value&&(j.setCurrentTime(C.value),a&&a.val&&a.val(j.str)),C.dayOfWeekStart=isNaN(C.dayOfWeekStart)?0:parseInt(C.dayOfWeekStart,10)%7,C.timepickerScrollbar||R.xdsoftScroller(\"hide\"),C.minDate&&/^[\\+\\-](.*)$/.test(C.minDate)&&(C.minDate=r.formatDate(j.strToDateTime(C.minDate),C.formatDate)),C.maxDate&&/^[\\+\\-](.*)$/.test(C.maxDate)&&(C.maxDate=r.formatDate(j.strToDateTime(C.maxDate),C.formatDate)),V.toggle(C.showApplyButton),N.find(\".xdsoft_today_button\").css(\"visibility\",C.todayButton?\"visible\":\"hidden\"),N.find(\".\"+C.prev).css(\"visibility\",C.prevButton?\"visible\":\"hidden\"),N.find(\".\"+C.next).css(\"visibility\",C.nextButton?\"visible\":\"hidden\"),s(C),C.validateOnBlur&&a.off(\"blur.xdsoft\").on(\"blur.xdsoft\",function(){if(C.allowBlank&&(!e.trim(e(this).val()).length||\"string\"==typeof C.mask&&e.trim(e(this).val())===C.mask.replace(/[0-9]/g,\"_\")))e(this).val(null),J.data(\"xdsoft_datetime\").empty();else{var t=r.parseDate(e(this).val(),C.format);if(t)e(this).val(r.formatDate(t,C.format));else{var a=+[e(this).val()[0],e(this).val()[1]].join(\"\"),n=+[e(this).val()[2],e(this).val()[3]].join(\"\");e(this).val(!C.datepicker&&C.timepicker&&a>=0&&24>a&&n>=0&&60>n?[a,n].map(function(e){return e>9?e:\"0\"+e}).join(\":\"):r.formatDate(j.now(),C.format))}J.data(\"xdsoft_datetime\").setCurrentTime(e(this).val())}J.trigger(\"changedatetime.xdsoft\"),J.trigger(\"close.xdsoft\")}),C.dayOfWeekStartPrev=0===C.dayOfWeekStart?6:C.dayOfWeekStart-1,J.trigger(\"xchange.xdsoft\").trigger(\"afterOpen.xdsoft\")},J.data(\"options\",C).on(\"touchstart mousedown.xdsoft\",function(e){return e.stopPropagation(),e.preventDefault(),U.hide(),G.hide(),!1}),R.append(B),R.xdsoftScroller(),J.on(\"afterOpen.xdsoft\",function(){R.xdsoftScroller()}),J.append(I).append(E),C.withoutCopyright!==!0&&J.append(z),I.append(N).append(L).append(V),e(C.parentID).append(J),d=function(){var t=this;t.now=function(e){var a,r,n=new Date;return!e&&C.defaultDate&&(a=t.strToDateTime(C.defaultDate),n.setFullYear(a.getFullYear()),n.setMonth(a.getMonth()),n.setDate(a.getDate())),C.yearOffset&&n.setFullYear(n.getFullYear()+C.yearOffset),!e&&C.defaultTime&&(r=t.strtotime(C.defaultTime),n.setHours(r.getHours()),n.setMinutes(r.getMinutes())),n},t.isValidDate=function(e){return\"[object Date]\"!==Object.prototype.toString.call(e)?!1:!isNaN(e.getTime())},t.setCurrentTime=function(e,a){t.currentTime=\"string\"==typeof e?t.strToDateTime(e):t.isValidDate(e)?e:e||a||!C.allowBlank?t.now():null,J.trigger(\"xchange.xdsoft\")},t.empty=function(){t.currentTime=null},t.getCurrentTime=function(){return t.currentTime},t.nextMonth=function(){(void 0===t.currentTime||null===t.currentTime)&&(t.currentTime=t.now());var a,r=t.currentTime.getMonth()+1;return 12===r&&(t.currentTime.setFullYear(t.currentTime.getFullYear()+1),r=0),a=t.currentTime.getFullYear(),t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(),r+1,0).getDate(),t.currentTime.getDate())),t.currentTime.setMonth(r),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data(\"input\")),a!==t.currentTime.getFullYear()&&e.isFunction(C.onChangeYear)&&C.onChangeYear.call(J,j.currentTime,J.data(\"input\")),J.trigger(\"xchange.xdsoft\"),r},t.prevMonth=function(){(void 0===t.currentTime||null===t.currentTime)&&(t.currentTime=t.now());var a=t.currentTime.getMonth()-1;return-1===a&&(t.currentTime.setFullYear(t.currentTime.getFullYear()-1),a=11),t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(),a+1,0).getDate(),t.currentTime.getDate())),t.currentTime.setMonth(a),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data(\"input\")),J.trigger(\"xchange.xdsoft\"),a},t.getWeekOfYear=function(t){if(C.onGetWeekOfYear&&e.isFunction(C.onGetWeekOfYear)){var a=C.onGetWeekOfYear.call(J,t);if(\"undefined\"!=typeof a)return a}var r=new Date(t.getFullYear(),0,1);return 4!=r.getDay()&&r.setMonth(0,1+(4-r.getDay()+7)%7),Math.ceil(((t-r)/864e5+r.getDay()+1)/7)},t.strToDateTime=function(e){var a,n,o=[];return e&&e instanceof Date&&t.isValidDate(e)?e:(o=/^(\\+|\\-)(.*)$/.exec(e),o&&(o[2]=r.parseDate(o[2],C.formatDate)),o&&o[2]?(a=o[2].getTime()-6e4*o[2].getTimezoneOffset(),n=new Date(t.now(!0).getTime()+parseInt(o[1]+\"1\",10)*a)):n=e?r.parseDate(e,C.format):t.now(),t.isValidDate(n)||(n=t.now()),n)},t.strToDate=function(e){if(e&&e instanceof Date&&t.isValidDate(e))return e;var a=e?r.parseDate(e,C.formatDate):t.now(!0);return t.isValidDate(a)||(a=t.now(!0)),a},t.strtotime=function(e){if(e&&e instanceof Date&&t.isValidDate(e))return e;var a=e?r.parseDate(e,C.formatTime):t.now(!0);return t.isValidDate(a)||(a=t.now(!0)),a},t.str=function(){return r.formatDate(t.currentTime,C.format)},t.currentTime=this.now()},j=new d,V.on(\"touchend click\",function(e){e.preventDefault(),J.data(\"changed\",!0),j.setCurrentTime(i()),a.val(j.str()),J.trigger(\"close.xdsoft\")}),N.find(\".xdsoft_today_button\").on(\"touchend mousedown.xdsoft\",function(){J.data(\"changed\",!0),j.setCurrentTime(0,!0),J.trigger(\"afterOpen.xdsoft\")}).on(\"dblclick.xdsoft\",function(){var e,t,r=j.getCurrentTime();r=new Date(r.getFullYear(),r.getMonth(),r.getDate()),e=j.strToDate(C.minDate),e=new Date(e.getFullYear(),e.getMonth(),e.getDate()),e>r||(t=j.strToDate(C.maxDate),t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r>t||(a.val(j.str()),a.trigger(\"change\"),J.trigger(\"close.xdsoft\")))}),N.find(\".xdsoft_prev,.xdsoft_next\").on(\"touchend mousedown.xdsoft\",function(){var t=e(this),a=0,r=!1;!function n(e){t.hasClass(C.next)?j.nextMonth():t.hasClass(C.prev)&&j.prevMonth(),C.monthChangeSpinner&&(r||(a=setTimeout(n,e||100)))}(500),e([document.body,window]).on(\"touchend mouseup.xdsoft\",function o(){clearTimeout(a),r=!0,e([document.body,window]).off(\"touchend mouseup.xdsoft\",o)})}),E.find(\".xdsoft_prev,.xdsoft_next\").on(\"touchend mousedown.xdsoft\",function(){var t=e(this),a=0,r=!1,n=110;!function o(e){var i=R[0].clientHeight,s=B[0].offsetHeight,d=Math.abs(parseInt(B.css(\"marginTop\"),10));t.hasClass(C.next)&&s-i-C.timeHeightInTimePicker>=d?B.css(\"marginTop\",\"-\"+(d+C.timeHeightInTimePicker)+\"px\"):t.hasClass(C.prev)&&d-C.timeHeightInTimePicker>=0&&B.css(\"marginTop\",\"-\"+(d-C.timeHeightInTimePicker)+\"px\"),R.trigger(\"scroll_element.xdsoft_scroller\",[Math.abs(parseInt(B[0].style.marginTop,10)/(s-i))]),n=n>10?10:n-10,r||(a=setTimeout(o,e||n))}(500),e([document.body,window]).on(\"touchend mouseup.xdsoft\",function i(){clearTimeout(a),r=!0,e([document.body,window]).off(\"touchend mouseup.xdsoft\",i)})}),u=0,J.on(\"xchange.xdsoft\",function(t){clearTimeout(u),u=setTimeout(function(){if(void 0===j.currentTime||null===j.currentTime){if(C.allowBlank)return;j.currentTime=j.now()}for(var t,i,s,d,u,l,f,c,m,h,g=\"\",p=new Date(j.currentTime.getFullYear(),j.currentTime.getMonth(),1,12,0,0),y=0,v=j.now(),b=!1,D=!1,k=[],x=!0,T=\"\",S=\"\";p.getDay()!==C.dayOfWeekStart;)p.setDate(p.getDate()-1);for(g+=\"<table><thead><tr>\",C.weeks&&(g+=\"<th></th>\"),t=0;7>t;t+=1)g+=\"<th>\"+C.i18n[o].dayOfWeekShort[(t+C.dayOfWeekStart)%7]+\"</th>\";for(g+=\"</tr></thead>\",g+=\"<tbody>\",C.maxDate!==!1&&(b=j.strToDate(C.maxDate),b=new Date(b.getFullYear(),b.getMonth(),b.getDate(),23,59,59,999)),C.minDate!==!1&&(D=j.strToDate(C.minDate),D=new Date(D.getFullYear(),D.getMonth(),D.getDate()));y<j.currentTime.countDaysInMonth()||p.getDay()!==C.dayOfWeekStart||j.currentTime.getMonth()===p.getMonth();)k=[],y+=1,s=p.getDay(),d=p.getDate(),u=p.getFullYear(),l=p.getMonth(),f=j.getWeekOfYear(p),h=\"\",k.push(\"xdsoft_date\"),c=C.beforeShowDay&&e.isFunction(C.beforeShowDay.call)?C.beforeShowDay.call(J,p):null,C.allowDateRe&&\"[object RegExp]\"===Object.prototype.toString.call(C.allowDateRe)?C.allowDateRe.test(r.formatDate(p,C.formatDate))||k.push(\"xdsoft_disabled\"):C.allowDates&&C.allowDates.length>0?-1===C.allowDates.indexOf(r.formatDate(p,C.formatDate))&&k.push(\"xdsoft_disabled\"):b!==!1&&p>b||D!==!1&&D>p||c&&c[0]===!1?k.push(\"xdsoft_disabled\"):-1!==C.disabledDates.indexOf(r.formatDate(p,C.formatDate))?k.push(\"xdsoft_disabled\"):-1!==C.disabledWeekDays.indexOf(s)?k.push(\"xdsoft_disabled\"):a.is(\"[readonly]\")&&k.push(\"xdsoft_disabled\"),c&&\"\"!==c[1]&&k.push(c[1]),j.currentTime.getMonth()!==l&&k.push(\"xdsoft_other_month\"),(C.defaultSelect||J.data(\"changed\"))&&r.formatDate(j.currentTime,C.formatDate)===r.formatDate(p,C.formatDate)&&k.push(\"xdsoft_current\"),r.formatDate(v,C.formatDate)===r.formatDate(p,C.formatDate)&&k.push(\"xdsoft_today\"),(0===p.getDay()||6===p.getDay()||-1!==C.weekends.indexOf(r.formatDate(p,C.formatDate)))&&k.push(\"xdsoft_weekend\"),void 0!==C.highlightedDates[r.formatDate(p,C.formatDate)]&&(i=C.highlightedDates[r.formatDate(p,C.formatDate)],k.push(void 0===i.style?\"xdsoft_highlighted_default\":i.style),h=void 0===i.desc?\"\":i.desc),C.beforeShowDay&&e.isFunction(C.beforeShowDay)&&k.push(C.beforeShowDay(p)),x&&(g+=\"<tr>\",x=!1,C.weeks&&(g+=\"<th>\"+f+\"</th>\")),g+='<td data-date=\"'+d+'\" data-month=\"'+l+'\" data-year=\"'+u+'\" class=\"xdsoft_date xdsoft_day_of_week'+p.getDay()+\" \"+k.join(\" \")+'\" title=\"'+h+'\"><div>'+d+\"</div></td>\",p.getDay()===C.dayOfWeekStartPrev&&(g+=\"</tr>\",x=!0),p.setDate(d+1);if(g+=\"</tbody></table>\",L.html(g),N.find(\".xdsoft_label span\").eq(0).text(C.i18n[o].months[j.currentTime.getMonth()]),N.find(\".xdsoft_label span\").eq(1).text(j.currentTime.getFullYear()),T=\"\",S=\"\",l=\"\",m=function(t,n){var o,i,s=j.now(),d=C.allowTimes&&e.isArray(C.allowTimes)&&C.allowTimes.length;s.setHours(t),t=parseInt(s.getHours(),10),s.setMinutes(n),n=parseInt(s.getMinutes(),10),o=new Date(j.currentTime),o.setHours(t),o.setMinutes(n),k=[],C.minDateTime!==!1&&C.minDateTime>o||C.maxTime!==!1&&j.strtotime(C.maxTime).getTime()<s.getTime()||C.minTime!==!1&&j.strtotime(C.minTime).getTime()>s.getTime()?k.push(\"xdsoft_disabled\"):C.minDateTime!==!1&&C.minDateTime>o||C.disabledMinTime!==!1&&s.getTime()>j.strtotime(C.disabledMinTime).getTime()&&C.disabledMaxTime!==!1&&s.getTime()<j.strtotime(C.disabledMaxTime).getTime()?k.push(\"xdsoft_disabled\"):a.is(\"[readonly]\")&&k.push(\"xdsoft_disabled\"),i=new Date(j.currentTime),i.setHours(parseInt(j.currentTime.getHours(),10)),d||i.setMinutes(Math[C.roundTime](j.currentTime.getMinutes()/C.step)*C.step),(C.initTime||C.defaultSelect||J.data(\"changed\"))&&i.getHours()===parseInt(t,10)&&(!d&&C.step>59||i.getMinutes()===parseInt(n,10))&&(C.defaultSelect||J.data(\"changed\")?k.push(\"xdsoft_current\"):C.initTime&&k.push(\"xdsoft_init_time\")),parseInt(v.getHours(),10)===parseInt(t,10)&&parseInt(v.getMinutes(),10)===parseInt(n,10)&&k.push(\"xdsoft_today\"),T+='<div class=\"xdsoft_time '+k.join(\" \")+'\" data-hour=\"'+t+'\" data-minute=\"'+n+'\">'+r.formatDate(s,C.formatTime)+\"</div>\"},C.allowTimes&&e.isArray(C.allowTimes)&&C.allowTimes.length)for(y=0;y<C.allowTimes.length;y+=1)S=j.strtotime(C.allowTimes[y]).getHours(),l=j.strtotime(C.allowTimes[y]).getMinutes(),m(S,l);else for(y=0,t=0;y<(C.hours12?12:24);y+=1)for(t=0;60>t;t+=C.step)S=(10>y?\"0\":\"\")+y,l=(10>t?\"0\":\"\")+t,m(S,l);for(B.html(T),n=\"\",y=0,y=parseInt(C.yearStart,10)+C.yearOffset;y<=parseInt(C.yearEnd,10)+C.yearOffset;y+=1)n+='<div class=\"xdsoft_option '+(j.currentTime.getFullYear()===y?\"xdsoft_current\":\"\")+'\" data-value=\"'+y+'\">'+y+\"</div>\";for(U.children().eq(0).html(n),y=parseInt(C.monthStart,10),n=\"\";y<=parseInt(C.monthEnd,10);y+=1)n+='<div class=\"xdsoft_option '+(j.currentTime.getMonth()===y?\"xdsoft_current\":\"\")+'\" data-value=\"'+y+'\">'+C.i18n[o].months[y]+\"</div>\";G.children().eq(0).html(n),e(J).trigger(\"generate.xdsoft\")},10),t.stopPropagation()}).on(\"afterOpen.xdsoft\",function(){if(C.timepicker){var e,t,a,r;B.find(\".xdsoft_current\").length?e=\".xdsoft_current\":B.find(\".xdsoft_init_time\").length&&(e=\".xdsoft_init_time\"),e?(t=R[0].clientHeight,a=B[0].offsetHeight,r=B.find(e).index()*C.timeHeightInTimePicker+1,r>a-t&&(r=a-t),R.trigger(\"scroll_element.xdsoft_scroller\",[parseInt(r,10)/(a-t)])):R.trigger(\"scroll_element.xdsoft_scroller\",[0])}}),P=0,L.on(\"touchend click.xdsoft\",\"td\",function(t){t.stopPropagation(),P+=1;var r=e(this),n=j.currentTime;return(void 0===n||null===n)&&(j.currentTime=j.now(),n=j.currentTime),r.hasClass(\"xdsoft_disabled\")?!1:(n.setDate(1),n.setFullYear(r.data(\"year\")),n.setMonth(r.data(\"month\")),n.setDate(r.data(\"date\")),J.trigger(\"select.xdsoft\",[n]),a.val(j.str()),C.onSelectDate&&e.isFunction(C.onSelectDate)&&C.onSelectDate.call(J,j.currentTime,J.data(\"input\"),t),J.data(\"changed\",!0),J.trigger(\"xchange.xdsoft\"),J.trigger(\"changedatetime.xdsoft\"),(P>1||C.closeOnDateSelect===!0||C.closeOnDateSelect===!1&&!C.timepicker)&&!C.inline&&J.trigger(\"close.xdsoft\"),void setTimeout(function(){P=0},200))}),B.on(\"touchend click.xdsoft\",\"div\",function(t){t.stopPropagation();var a=e(this),r=j.currentTime;return(void 0===r||null===r)&&(j.currentTime=j.now(),r=j.currentTime),a.hasClass(\"xdsoft_disabled\")?!1:(r.setHours(a.data(\"hour\")),r.setMinutes(a.data(\"minute\")),J.trigger(\"select.xdsoft\",[r]),J.data(\"input\").val(j.str()),C.onSelectTime&&e.isFunction(C.onSelectTime)&&C.onSelectTime.call(J,j.currentTime,J.data(\"input\"),t),J.data(\"changed\",!0),J.trigger(\"xchange.xdsoft\"),J.trigger(\"changedatetime.xdsoft\"),void(C.inline!==!0&&C.closeOnTimeSelect===!0&&J.trigger(\"close.xdsoft\")))}),I.on(\"mousewheel.xdsoft\",function(e){return C.scrollMonth?(e.deltaY<0?j.nextMonth():j.prevMonth(),!1):!0}),a.on(\"mousewheel.xdsoft\",function(e){return C.scrollInput?!C.datepicker&&C.timepicker?(A=B.find(\".xdsoft_current\").length?B.find(\".xdsoft_current\").eq(0).index():0,A+e.deltaY>=0&&A+e.deltaY<B.children().length&&(A+=e.deltaY),B.children().eq(A).length&&B.children().eq(A).trigger(\"mousedown\"),!1):C.datepicker&&!C.timepicker?(I.trigger(e,[e.deltaY,e.deltaX,e.deltaY]),a.val&&a.val(j.str()),J.trigger(\"changedatetime.xdsoft\"),!1):void 0:!0}),J.on(\"changedatetime.xdsoft\",function(t){if(C.onChangeDateTime&&e.isFunction(C.onChangeDateTime)){var a=J.data(\"input\");C.onChangeDateTime.call(J,j.currentTime,a,t),delete C.value,a.trigger(\"change\")}}).on(\"generate.xdsoft\",function(){C.onGenerate&&e.isFunction(C.onGenerate)&&C.onGenerate.call(J,j.currentTime,J.data(\"input\")),q&&(J.trigger(\"afterOpen.xdsoft\"),q=!1)}).on(\"click.xdsoft\",function(e){e.stopPropagation()}),A=0,H=function(e,t){do if(e=e.parentNode,t(e)===!1)break;while(\"HTML\"!==e.nodeName)},Y=function(){var t,a,r,n,o,i,s,d,u,l,f,c,m;if(d=J.data(\"input\"),t=d.offset(),a=d[0],l=\"top\",r=t.top+a.offsetHeight-1,n=t.left,o=\"absolute\",u=e(window).width(),c=e(window).height(),m=e(window).scrollTop(),document.documentElement.clientWidth-t.left<I.parent().outerWidth(!0)){var h=I.parent().outerWidth(!0)-a.offsetWidth;n-=h}\"rtl\"===d.parent().css(\"direction\")&&(n-=J.outerWidth()-d.outerWidth()),C.fixed?(r-=m,n-=e(window).scrollLeft(),o=\"fixed\"):(s=!1,H(a,function(e){return\"fixed\"===window.getComputedStyle(e).getPropertyValue(\"position\")?(s=!0,!1):void 0}),s?(o=\"fixed\",r+J.outerHeight()>c+m?(l=\"bottom\",r=c+m-t.top):r-=m):r+a.offsetHeight>c+m&&(r=t.top-a.offsetHeight+1),0>r&&(r=0),n+a.offsetWidth>u&&(n=u-a.offsetWidth)),i=J[0],H(i,function(e){var t;return t=window.getComputedStyle(e).getPropertyValue(\"position\"),\"relative\"===t&&u>=e.offsetWidth?(n-=(u-e.offsetWidth)/2,!1):void 0}),f={position:o,left:n,top:\"\",bottom:\"\"},f[l]=r,J.css(f)},J.on(\"open.xdsoft\",function(t){var a=!0;C.onShow&&e.isFunction(C.onShow)&&(a=C.onShow.call(J,j.currentTime,J.data(\"input\"),t)),a!==!1&&(J.show(),Y(),e(window).off(\"resize.xdsoft\",Y).on(\"resize.xdsoft\",Y),C.closeOnWithoutClick&&e([document.body,window]).on(\"touchstart mousedown.xdsoft\",function r(){J.trigger(\"close.xdsoft\"),e([document.body,window]).off(\"touchstart mousedown.xdsoft\",r)}))}).on(\"close.xdsoft\",function(t){var a=!0;N.find(\".xdsoft_month,.xdsoft_year\").find(\".xdsoft_select\").hide(),C.onClose&&e.isFunction(C.onClose)&&(a=C.onClose.call(J,j.currentTime,J.data(\"input\"),t)),a===!1||C.opened||C.inline||J.hide(),t.stopPropagation()}).on(\"toggle.xdsoft\",function(){J.trigger(J.is(\":visible\")?\"close.xdsoft\":\"open.xdsoft\")}).data(\"input\",a),X=0,J.data(\"xdsoft_datetime\",j),J.setOptions(C),j.setCurrentTime(i()),a.data(\"xdsoft_datetimepicker\",J).on(\"open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart\",function(){a.is(\":disabled\")||a.data(\"xdsoft_datetimepicker\").is(\":visible\")&&C.closeOnInputClick||(clearTimeout(X),X=setTimeout(function(){a.is(\":disabled\")||(q=!0,j.setCurrentTime(i(),!0),C.mask&&s(C),J.trigger(\"open.xdsoft\"))},100))}).on(\"keydown.xdsoft\",function(t){var a,r=t.which;return-1!==[p].indexOf(r)&&C.enterLikeTab?(a=e(\"input:visible,textarea:visible,button:visible,a:visible\"),J.trigger(\"close.xdsoft\"),a.eq(a.index(this)+1).focus(),!1):-1!==[T].indexOf(r)?(J.trigger(\"close.xdsoft\"),!0):void 0}).on(\"blur.xdsoft\",function(){J.trigger(\"close.xdsoft\")})},d=function(t){var a=t.data(\"xdsoft_datetimepicker\");a&&(a.data(\"xdsoft_datetime\",null),a.remove(),t.data(\"xdsoft_datetimepicker\",null).off(\".xdsoft\"),e(window).off(\"resize.xdsoft\"),e([window,document.body]).off(\"mousedown.xdsoft touchstart\"),t.unmousewheel&&t.unmousewheel())},e(document).off(\"keydown.xdsoftctrl keyup.xdsoftctrl\").on(\"keydown.xdsoftctrl\",function(e){e.keyCode===h&&(F=!0)}).on(\"keyup.xdsoftctrl\",function(e){e.keyCode===h&&(F=!1)}),this.each(function(){var t,a=e(this).data(\"xdsoft_datetimepicker\");if(a){if(\"string\"===e.type(n))switch(n){case\"show\":e(this).select().focus(),a.trigger(\"open.xdsoft\");break;case\"hide\":a.trigger(\"close.xdsoft\");break;case\"toggle\":a.trigger(\"toggle.xdsoft\");break;case\"destroy\":d(e(this));break;case\"reset\":this.value=this.defaultValue,this.value&&a.data(\"xdsoft_datetime\").isValidDate(r.parseDate(this.value,C.format))||a.data(\"changed\",!1),a.data(\"xdsoft_datetime\").setCurrentTime(this.value);break;case\"validate\":t=a.data(\"input\"),t.trigger(\"blur.xdsoft\");break;default:a[n]&&e.isFunction(a[n])&&(u=a[n](i))}else a.setOptions(n);return 0}\"string\"!==e.type(n)&&(!C.lazyInit||C.open||C.inline?s(e(this)):A(e(this)))}),u},e.fn.datetimepicker.defaults=a}),function(e){\"function\"==typeof define&&define.amd?define([\"jquery\"],e):\"object\"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var i=t||window.event,s=d.call(arguments,1),u=0,f=0,c=0,m=0,h=0,g=0;if(t=e.event.fix(i),t.type=\"mousewheel\",\"detail\"in i&&(c=-1*i.detail),\"wheelDelta\"in i&&(c=i.wheelDelta),\"wheelDeltaY\"in i&&(c=i.wheelDeltaY),\"wheelDeltaX\"in i&&(f=-1*i.wheelDeltaX),\"axis\"in i&&i.axis===i.HORIZONTAL_AXIS&&(f=-1*c,c=0),u=0===c?f:c,\"deltaY\"in i&&(c=-1*i.deltaY,u=c),\"deltaX\"in i&&(f=i.deltaX,0===c&&(u=-1*f)),0!==c||0!==f){if(1===i.deltaMode){var p=e.data(this,\"mousewheel-line-height\");u*=p,c*=p,f*=p}else if(2===i.deltaMode){var y=e.data(this,\"mousewheel-page-height\");u*=y,c*=y,f*=y}if(m=Math.max(Math.abs(c),Math.abs(f)),(!o||o>m)&&(o=m,r(i,m)&&(o/=40)),r(i,m)&&(u/=40,f/=40,c/=40),u=Math[u>=1?\"floor\":\"ceil\"](u/o),f=Math[f>=1?\"floor\":\"ceil\"](f/o),c=Math[c>=1?\"floor\":\"ceil\"](c/o),l.settings.normalizeOffset&&this.getBoundingClientRect){var v=this.getBoundingClientRect();h=t.clientX-v.left,g=t.clientY-v.top}return t.deltaX=f,t.deltaY=c,t.deltaFactor=o,t.offsetX=h,t.offsetY=g,t.deltaMode=0,s.unshift(t,u,f,c),n&&clearTimeout(n),n=setTimeout(a,200),(e.event.dispatch||e.event.handle).apply(this,s)}}function a(){o=null}function r(e,t){return l.settings.adjustOldDeltas&&\"mousewheel\"===e.type&&t%120===0}var n,o,i=[\"wheel\",\"mousewheel\",\"DOMMouseScroll\",\"MozMousePixelScroll\"],s=\"onwheel\"in document||document.documentMode>=9?[\"wheel\"]:[\"mousewheel\",\"DomMouseScroll\",\"MozMousePixelScroll\"],d=Array.prototype.slice;if(e.event.fixHooks)for(var u=i.length;u;)e.event.fixHooks[i[--u]]=e.event.mouseHooks;var l=e.event.special.mousewheel={version:\"3.1.12\",setup:function(){if(this.addEventListener)for(var a=s.length;a;)this.addEventListener(s[--a],t,!1);else this.onmousewheel=t;e.data(this,\"mousewheel-line-height\",l.getLineHeight(this)),e.data(this,\"mousewheel-page-height\",l.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var a=s.length;a;)this.removeEventListener(s[--a],t,!1);else this.onmousewheel=null;e.removeData(this,\"mousewheel-line-height\"),e.removeData(this,\"mousewheel-page-height\")},getLineHeight:function(t){var a=e(t),r=a[\"offsetParent\"in e.fn?\"offsetParent\":\"parent\"]();return r.length||(r=e(\"body\")),parseInt(r.css(\"fontSize\"),10)||parseInt(a.css(\"fontSize\"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind(\"mousewheel\",e):this.trigger(\"mousewheel\")},unmousewheel:function(e){return this.unbind(\"mousewheel\",e)}})});"

/***/ }),

/***/ 745:
/*!******************************************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/jquery-mask-plugin/dist/jquery.mask.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ 5)(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/jquery-mask-plugin/dist/jquery.mask.js */ 746))

/***/ }),

/***/ 746:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/jquery-mask-plugin/dist/jquery.mask.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/**\n * jquery.mask.js\n * @version: v1.14.11\n * @author: Igor Escobar\n *\n * Created by Igor Escobar on 2012-03-10. Please report any bug at http://blog.igorescobar.com\n *\n * Copyright (c) 2012 Igor Escobar http://blog.igorescobar.com\n *\n * The MIT License (http://www.opensource.org/licenses/mit-license.php)\n *\n * Permission is hereby granted, free of charge, to any person\n * obtaining a copy of this software and associated documentation\n * files (the \"Software\"), to deal in the Software without\n * restriction, including without limitation the rights to use,\n * copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the\n * Software is furnished to do so, subject to the following\n * conditions:\n *\n * The above copyright notice and this permission notice shall be\n * included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n * OTHER DEALINGS IN THE SOFTWARE.\n */\n\n/* jshint laxbreak: true */\n/* jshint maxcomplexity:17 */\n/* global define */\n\n'use strict';\n\n// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.\n// https://github.com/umdjs/umd/blob/master/jqueryPluginCommonjs.js\n(function (factory, jQuery, Zepto) {\n\n    if (typeof define === 'function' && define.amd) {\n        define(['jquery'], factory);\n    } else if (typeof exports === 'object') {\n        module.exports = factory(require('jquery'));\n    } else {\n        factory(jQuery || Zepto);\n    }\n\n}(function ($) {\n\n    var Mask = function (el, mask, options) {\n\n        var p = {\n            invalid: [],\n            getCaret: function () {\n                try {\n                    var sel,\n                        pos = 0,\n                        ctrl = el.get(0),\n                        dSel = document.selection,\n                        cSelStart = ctrl.selectionStart;\n\n                    // IE Support\n                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {\n                        sel = dSel.createRange();\n                        sel.moveStart('character', -p.val().length);\n                        pos = sel.text.length;\n                    }\n                    // Firefox support\n                    else if (cSelStart || cSelStart === '0') {\n                        pos = cSelStart;\n                    }\n\n                    return pos;\n                } catch (e) {}\n            },\n            setCaret: function(pos) {\n                try {\n                    if (el.is(':focus')) {\n                        var range, ctrl = el.get(0);\n\n                        // Firefox, WebKit, etc..\n                        if (ctrl.setSelectionRange) {\n                            ctrl.setSelectionRange(pos, pos);\n                        } else { // IE\n                            range = ctrl.createTextRange();\n                            range.collapse(true);\n                            range.moveEnd('character', pos);\n                            range.moveStart('character', pos);\n                            range.select();\n                        }\n                    }\n                } catch (e) {}\n            },\n            events: function() {\n                el\n                .on('keydown.mask', function(e) {\n                    el.data('mask-keycode', e.keyCode || e.which);\n                    el.data('mask-previus-value', el.val());\n                    el.data('mask-previus-caret-pos', p.getCaret());\n                    p.maskDigitPosMapOld = p.maskDigitPosMap;\n                })\n                .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)\n                .on('paste.mask drop.mask', function() {\n                    setTimeout(function() {\n                        el.keydown().keyup();\n                    }, 100);\n                })\n                .on('change.mask', function(){\n                    el.data('changed', true);\n                })\n                .on('blur.mask', function(){\n                    if (oldValue !== p.val() && !el.data('changed')) {\n                        el.trigger('change');\n                    }\n                    el.data('changed', false);\n                })\n                // it's very important that this callback remains in this position\n                // otherwhise oldValue it's going to work buggy\n                .on('blur.mask', function() {\n                    oldValue = p.val();\n                })\n                // select all text on focus\n                .on('focus.mask', function (e) {\n                    if (options.selectOnFocus === true) {\n                        $(e.target).select();\n                    }\n                })\n                // clear the value if it not complete the mask\n                .on('focusout.mask', function() {\n                    if (options.clearIfNotMatch && !regexMask.test(p.val())) {\n                       p.val('');\n                   }\n                });\n            },\n            getRegexMask: function() {\n                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;\n\n                for (var i = 0; i < mask.length; i++) {\n                    translation = jMask.translation[mask.charAt(i)];\n\n                    if (translation) {\n\n                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');\n                        optional = translation.optional;\n                        recursive = translation.recursive;\n\n                        if (recursive) {\n                            maskChunks.push(mask.charAt(i));\n                            oRecursive = {digit: mask.charAt(i), pattern: pattern};\n                        } else {\n                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));\n                        }\n\n                    } else {\n                        maskChunks.push(mask.charAt(i).replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&'));\n                    }\n                }\n\n                r = maskChunks.join('');\n\n                if (oRecursive) {\n                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')\n                         .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);\n                }\n\n                return new RegExp(r);\n            },\n            destroyEvents: function() {\n                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));\n            },\n            val: function(v) {\n                var isInput = el.is('input'),\n                    method = isInput ? 'val' : 'text',\n                    r;\n\n                if (arguments.length > 0) {\n                    if (el[method]() !== v) {\n                        el[method](v);\n                    }\n                    r = el;\n                } else {\n                    r = el[method]();\n                }\n\n                return r;\n            },\n            calculateCaretPosition: function() {\n                var oldVal = el.data('mask-previus-value') || '',\n                    newVal = p.getMasked(),\n                    caretPosNew = p.getCaret();\n                if (oldVal !== newVal) {\n                    var caretPosOld = el.data('mask-previus-caret-pos') || 0,\n                        newValL = newVal.length,\n                        oldValL = oldVal.length,\n                        maskDigitsBeforeCaret = 0,\n                        maskDigitsAfterCaret = 0,\n                        maskDigitsBeforeCaretAll = 0,\n                        maskDigitsBeforeCaretAllOld = 0,\n                        i = 0;\n\n                    for (i = caretPosNew; i < newValL; i++) {\n                        if (!p.maskDigitPosMap[i]) {\n                            break;\n                        }\n                        maskDigitsAfterCaret++;\n                    }\n\n                    for (i = caretPosNew - 1; i >= 0; i--) {\n                        if (!p.maskDigitPosMap[i]) {\n                            break;\n                        }\n                        maskDigitsBeforeCaret++;\n                    }\n\n                    for (i = caretPosNew - 1; i >= 0; i--) {\n                        if (p.maskDigitPosMap[i]) {\n                            maskDigitsBeforeCaretAll++;\n                        }\n                    }\n\n                    for (i = caretPosOld - 1; i >= 0; i--) {\n                        if (p.maskDigitPosMapOld[i]) {\n                            maskDigitsBeforeCaretAllOld++;\n                        }\n                    }\n\n                    if (caretPosNew > oldValL) {\n                      // if the cursor is at the end keep it there\n                      caretPosNew = newValL;\n                    }\n                    else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {\n                        if (!p.maskDigitPosMapOld[caretPosNew])  {\n                          var caretPos = caretPosNew;\n                          caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;\n                          caretPosNew -= maskDigitsBeforeCaret;\n                          if (p.maskDigitPosMap[caretPosNew])  {\n                            caretPosNew = caretPos;\n                          }\n                        }\n                    }\n                    else if (caretPosNew > caretPosOld) {\n                        caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;\n                        caretPosNew += maskDigitsAfterCaret;\n                    }\n                }\n                return caretPosNew;\n            },\n            behaviour: function(e) {\n                e = e || window.event;\n                p.invalid = [];\n\n                var keyCode = el.data('mask-keycode');\n\n                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {\n                    var newVal   = p.getMasked(),\n                        caretPos = p.getCaret();\n\n                    setTimeout(function() {\n                      p.setCaret(p.calculateCaretPosition());\n                    }, 10);\n\n                    p.val(newVal);\n                    p.setCaret(caretPos);\n                    return p.callbacks(e);\n                }\n            },\n            getMasked: function(skipMaskChars, val) {\n                var buf = [],\n                    value = val === undefined ? p.val() : val + '',\n                    m = 0, maskLen = mask.length,\n                    v = 0, valLen = value.length,\n                    offset = 1, addMethod = 'push',\n                    resetPos = -1,\n                    maskDigitCount = 0,\n                    maskDigitPosArr = [],\n                    lastMaskChar,\n                    check;\n\n                if (options.reverse) {\n                    addMethod = 'unshift';\n                    offset = -1;\n                    lastMaskChar = 0;\n                    m = maskLen - 1;\n                    v = valLen - 1;\n                    check = function () {\n                        return m > -1 && v > -1;\n                    };\n                } else {\n                    lastMaskChar = maskLen - 1;\n                    check = function () {\n                        return m < maskLen && v < valLen;\n                    };\n                }\n\n                var lastUntranslatedMaskChar;\n                while (check()) {\n                    var maskDigit = mask.charAt(m),\n                        valDigit = value.charAt(v),\n                        translation = jMask.translation[maskDigit];\n\n                    if (translation) {\n                        if (valDigit.match(translation.pattern)) {\n                            buf[addMethod](valDigit);\n                             if (translation.recursive) {\n                                if (resetPos === -1) {\n                                    resetPos = m;\n                                } else if (m === lastMaskChar) {\n                                    m = resetPos - offset;\n                                }\n\n                                if (lastMaskChar === resetPos) {\n                                    m -= offset;\n                                }\n                            }\n                            m += offset;\n                        } else if (valDigit === lastUntranslatedMaskChar) {\n                            // matched the last untranslated (raw) mask character that we encountered\n                            // likely an insert offset the mask character from the last entry; fall\n                            // through and only increment v\n                            maskDigitCount--;\n                            lastUntranslatedMaskChar = undefined;\n                        } else if (translation.optional) {\n                            m += offset;\n                            v -= offset;\n                        } else if (translation.fallback) {\n                            buf[addMethod](translation.fallback);\n                            m += offset;\n                            v -= offset;\n                        } else {\n                          p.invalid.push({p: v, v: valDigit, e: translation.pattern});\n                        }\n                        v += offset;\n                    } else {\n                        if (!skipMaskChars) {\n                            buf[addMethod](maskDigit);\n                        }\n\n                        if (valDigit === maskDigit) {\n                            maskDigitPosArr.push(v);\n                            v += offset;\n                        } else {\n                            lastUntranslatedMaskChar = maskDigit;\n                            maskDigitPosArr.push(v + maskDigitCount);\n                            maskDigitCount++;\n                        }\n\n                        m += offset;\n                    }\n                }\n\n                var lastMaskCharDigit = mask.charAt(lastMaskChar);\n                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {\n                    buf.push(lastMaskCharDigit);\n                }\n\n                var newVal = buf.join('');\n                p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);\n                return newVal;\n            },\n            mapMaskdigitPositions: function(newVal, maskDigitPosArr, valLen) {\n              var maskDiff = options.reverse ? newVal.length - valLen : 0;\n              p.maskDigitPosMap = {};\n              for (var i = 0; i < maskDigitPosArr.length; i++) {\n                p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;\n              }\n            },\n            callbacks: function (e) {\n                var val = p.val(),\n                    changed = val !== oldValue,\n                    defaultArgs = [val, e, el, options],\n                    callback = function(name, criteria, args) {\n                        if (typeof options[name] === 'function' && criteria) {\n                            options[name].apply(this, args);\n                        }\n                    };\n\n                callback('onChange', changed === true, defaultArgs);\n                callback('onKeyPress', changed === true, defaultArgs);\n                callback('onComplete', val.length === mask.length, defaultArgs);\n                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);\n            }\n        };\n\n        el = $(el);\n        var jMask = this, oldValue = p.val(), regexMask;\n\n        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;\n\n        // public methods\n        jMask.mask = mask;\n        jMask.options = options;\n        jMask.remove = function() {\n            var caret = p.getCaret();\n            p.destroyEvents();\n            p.val(jMask.getCleanVal());\n            p.setCaret(caret);\n            return el;\n        };\n\n        // get value without mask\n        jMask.getCleanVal = function() {\n           return p.getMasked(true);\n        };\n\n        // get masked value without the value being in the input or element\n        jMask.getMaskedVal = function(val) {\n           return p.getMasked(false, val);\n        };\n\n       jMask.init = function(onlyMask) {\n            onlyMask = onlyMask || false;\n            options = options || {};\n\n            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;\n            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;\n            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);\n\n            jMask = $.extend(true, {}, jMask, options);\n\n            regexMask = p.getRegexMask();\n\n            if (onlyMask) {\n                p.events();\n                p.val(p.getMasked());\n            } else {\n                if (options.placeholder) {\n                    el.attr('placeholder' , options.placeholder);\n                }\n\n                // this is necessary, otherwise if the user submit the form\n                // and then press the \"back\" button, the autocomplete will erase\n                // the data. Works fine on IE9+, FF, Opera, Safari.\n                if (el.data('mask')) {\n                  el.attr('autocomplete', 'off');\n                }\n\n                // detect if is necessary let the user type freely.\n                // for is a lot faster than forEach.\n                for (var i = 0, maxlength = true; i < mask.length; i++) {\n                    var translation = jMask.translation[mask.charAt(i)];\n                    if (translation && translation.recursive) {\n                        maxlength = false;\n                        break;\n                    }\n                }\n\n                if (maxlength) {\n                    el.attr('maxlength', mask.length);\n                }\n\n                p.destroyEvents();\n                p.events();\n\n                var caret = p.getCaret();\n                p.val(p.getMasked());\n                p.setCaret(caret);\n            }\n        };\n\n        jMask.init(!el.is('input'));\n    };\n\n    $.maskWatchers = {};\n    var HTMLAttributes = function () {\n        var input = $(this),\n            options = {},\n            prefix = 'data-mask-',\n            mask = input.attr('data-mask');\n\n        if (input.attr(prefix + 'reverse')) {\n            options.reverse = true;\n        }\n\n        if (input.attr(prefix + 'clearifnotmatch')) {\n            options.clearIfNotMatch = true;\n        }\n\n        if (input.attr(prefix + 'selectonfocus') === 'true') {\n           options.selectOnFocus = true;\n        }\n\n        if (notSameMaskObject(input, mask, options)) {\n            return input.data('mask', new Mask(this, mask, options));\n        }\n    },\n    notSameMaskObject = function(field, mask, options) {\n        options = options || {};\n        var maskObject = $(field).data('mask'),\n            stringify = JSON.stringify,\n            value = $(field).val() || $(field).text();\n        try {\n            if (typeof mask === 'function') {\n                mask = mask(value);\n            }\n            return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;\n        } catch (e) {}\n    },\n    eventSupported = function(eventName) {\n        var el = document.createElement('div'), isSupported;\n\n        eventName = 'on' + eventName;\n        isSupported = (eventName in el);\n\n        if ( !isSupported ) {\n            el.setAttribute(eventName, 'return;');\n            isSupported = typeof el[eventName] === 'function';\n        }\n        el = null;\n\n        return isSupported;\n    };\n\n    $.fn.mask = function(mask, options) {\n        options = options || {};\n        var selector = this.selector,\n            globals = $.jMaskGlobals,\n            interval = globals.watchInterval,\n            watchInputs = options.watchInputs || globals.watchInputs,\n            maskFunction = function() {\n                if (notSameMaskObject(this, mask, options)) {\n                    return $(this).data('mask', new Mask(this, mask, options));\n                }\n            };\n\n        $(this).each(maskFunction);\n\n        if (selector && selector !== '' && watchInputs) {\n            clearInterval($.maskWatchers[selector]);\n            $.maskWatchers[selector] = setInterval(function(){\n                $(document).find(selector).each(maskFunction);\n            }, interval);\n        }\n        return this;\n    };\n\n    $.fn.masked = function(val) {\n        return this.data('mask').getMaskedVal(val);\n    };\n\n    $.fn.unmask = function() {\n        clearInterval($.maskWatchers[this.selector]);\n        delete $.maskWatchers[this.selector];\n        return this.each(function() {\n            var dataMask = $(this).data('mask');\n            if (dataMask) {\n                dataMask.remove().removeData('mask');\n            }\n        });\n    };\n\n    $.fn.cleanVal = function() {\n        return this.data('mask').getCleanVal();\n    };\n\n    $.applyDataMask = function(selector) {\n        selector = selector || $.jMaskGlobals.maskElements;\n        var $selector = (selector instanceof $) ? selector : $(selector);\n        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);\n    };\n\n    var globals = {\n        maskElements: 'input,td,span,div',\n        dataMaskAttr: '*[data-mask]',\n        dataMask: true,\n        watchInterval: 300,\n        watchInputs: true,\n        // old versions of chrome dont work great with input event\n        useInput: !/Chrome\\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),\n        watchDataMask: false,\n        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],\n        translation: {\n            '0': {pattern: /\\d/},\n            '9': {pattern: /\\d/, optional: true},\n            '#': {pattern: /\\d/, recursive: true},\n            'A': {pattern: /[a-zA-Z0-9]/},\n            'S': {pattern: /[a-zA-Z]/}\n        }\n    };\n\n    $.jMaskGlobals = $.jMaskGlobals || {};\n    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);\n\n    // looking for inputs with data-mask attribute\n    if (globals.dataMask) {\n        $.applyDataMask();\n    }\n\n    setInterval(function() {\n        if ($.jMaskGlobals.watchDataMask) {\n            $.applyDataMask();\n        }\n    }, globals.watchInterval);\n}, window.jQuery, window.Zepto));\n"

/***/ }),

/***/ 747:
/*!********************************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/velocity-animate/velocity.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ 5)(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/velocity-animate/velocity.js */ 748))

/***/ }),

/***/ 748:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/velocity-animate/velocity.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */\n\n/*************************\n Velocity jQuery Shim\n *************************/\n\n/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */\n\n/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */\n/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */\n/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */\n\n(function(window) {\n\t\"use strict\";\n\t/***************\n\t Setup\n\t ***************/\n\n\t/* If jQuery is already loaded, there's no point in loading this shim. */\n\tif (window.jQuery) {\n\t\treturn;\n\t}\n\n\t/* jQuery base. */\n\tvar $ = function(selector, context) {\n\t\treturn new $.fn.init(selector, context);\n\t};\n\n\t/********************\n\t Private Methods\n\t ********************/\n\n\t/* jQuery */\n\t$.isWindow = function(obj) {\n\t\t/* jshint eqeqeq: false */\n\t\treturn obj && obj === obj.window;\n\t};\n\n\t/* jQuery */\n\t$.type = function(obj) {\n\t\tif (!obj) {\n\t\t\treturn obj + \"\";\n\t\t}\n\n\t\treturn typeof obj === \"object\" || typeof obj === \"function\" ?\n\t\t\t\tclass2type[toString.call(obj)] || \"object\" :\n\t\t\t\ttypeof obj;\n\t};\n\n\t/* jQuery */\n\t$.isArray = Array.isArray || function(obj) {\n\t\treturn $.type(obj) === \"array\";\n\t};\n\n\t/* jQuery */\n\tfunction isArraylike(obj) {\n\t\tvar length = obj.length,\n\t\t\t\ttype = $.type(obj);\n\n\t\tif (type === \"function\" || $.isWindow(obj)) {\n\t\t\treturn false;\n\t\t}\n\n\t\tif (obj.nodeType === 1 && length) {\n\t\t\treturn true;\n\t\t}\n\n\t\treturn type === \"array\" || length === 0 || typeof length === \"number\" && length > 0 && (length - 1) in obj;\n\t}\n\n\t/***************\n\t $ Methods\n\t ***************/\n\n\t/* jQuery: Support removed for IE<9. */\n\t$.isPlainObject = function(obj) {\n\t\tvar key;\n\n\t\tif (!obj || $.type(obj) !== \"object\" || obj.nodeType || $.isWindow(obj)) {\n\t\t\treturn false;\n\t\t}\n\n\t\ttry {\n\t\t\tif (obj.constructor &&\n\t\t\t\t\t!hasOwn.call(obj, \"constructor\") &&\n\t\t\t\t\t!hasOwn.call(obj.constructor.prototype, \"isPrototypeOf\")) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\n\t\tfor (key in obj) {\n\t\t}\n\n\t\treturn key === undefined || hasOwn.call(obj, key);\n\t};\n\n\t/* jQuery */\n\t$.each = function(obj, callback, args) {\n\t\tvar value,\n\t\t\t\ti = 0,\n\t\t\t\tlength = obj.length,\n\t\t\t\tisArray = isArraylike(obj);\n\n\t\tif (args) {\n\t\t\tif (isArray) {\n\t\t\t\tfor (; i < length; i++) {\n\t\t\t\t\tvalue = callback.apply(obj[i], args);\n\n\t\t\t\t\tif (value === false) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tfor (i in obj) {\n\t\t\t\t\tif (!obj.hasOwnProperty(i)) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tvalue = callback.apply(obj[i], args);\n\n\t\t\t\t\tif (value === false) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t} else {\n\t\t\tif (isArray) {\n\t\t\t\tfor (; i < length; i++) {\n\t\t\t\t\tvalue = callback.call(obj[i], i, obj[i]);\n\n\t\t\t\t\tif (value === false) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tfor (i in obj) {\n\t\t\t\t\tif (!obj.hasOwnProperty(i)) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tvalue = callback.call(obj[i], i, obj[i]);\n\n\t\t\t\t\tif (value === false) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn obj;\n\t};\n\n\t/* Custom */\n\t$.data = function(node, key, value) {\n\t\t/* $.getData() */\n\t\tif (value === undefined) {\n\t\t\tvar getId = node[$.expando],\n\t\t\t\t\tstore = getId && cache[getId];\n\n\t\t\tif (key === undefined) {\n\t\t\t\treturn store;\n\t\t\t} else if (store) {\n\t\t\t\tif (key in store) {\n\t\t\t\t\treturn store[key];\n\t\t\t\t}\n\t\t\t}\n\t\t\t/* $.setData() */\n\t\t} else if (key !== undefined) {\n\t\t\tvar setId = node[$.expando] || (node[$.expando] = ++$.uuid);\n\n\t\t\tcache[setId] = cache[setId] || {};\n\t\t\tcache[setId][key] = value;\n\n\t\t\treturn value;\n\t\t}\n\t};\n\n\t/* Custom */\n\t$.removeData = function(node, keys) {\n\t\tvar id = node[$.expando],\n\t\t\t\tstore = id && cache[id];\n\n\t\tif (store) {\n\t\t\t// Cleanup the entire store if no keys are provided.\n\t\t\tif (!keys) {\n\t\t\t\tdelete cache[id];\n\t\t\t} else {\n\t\t\t\t$.each(keys, function(_, key) {\n\t\t\t\t\tdelete store[key];\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t};\n\n\t/* jQuery */\n\t$.extend = function() {\n\t\tvar src, copyIsArray, copy, name, options, clone,\n\t\t\t\ttarget = arguments[0] || {},\n\t\t\t\ti = 1,\n\t\t\t\tlength = arguments.length,\n\t\t\t\tdeep = false;\n\n\t\tif (typeof target === \"boolean\") {\n\t\t\tdeep = target;\n\n\t\t\ttarget = arguments[i] || {};\n\t\t\ti++;\n\t\t}\n\n\t\tif (typeof target !== \"object\" && $.type(target) !== \"function\") {\n\t\t\ttarget = {};\n\t\t}\n\n\t\tif (i === length) {\n\t\t\ttarget = this;\n\t\t\ti--;\n\t\t}\n\n\t\tfor (; i < length; i++) {\n\t\t\tif ((options = arguments[i])) {\n\t\t\t\tfor (name in options) {\n\t\t\t\t\tif (!options.hasOwnProperty(name)) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tsrc = target[name];\n\t\t\t\t\tcopy = options[name];\n\n\t\t\t\t\tif (target === copy) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {\n\t\t\t\t\t\tif (copyIsArray) {\n\t\t\t\t\t\t\tcopyIsArray = false;\n\t\t\t\t\t\t\tclone = src && $.isArray(src) ? src : [];\n\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tclone = src && $.isPlainObject(src) ? src : {};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\ttarget[name] = $.extend(deep, clone, copy);\n\n\t\t\t\t\t} else if (copy !== undefined) {\n\t\t\t\t\t\ttarget[name] = copy;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn target;\n\t};\n\n\t/* jQuery 1.4.3 */\n\t$.queue = function(elem, type, data) {\n\t\tfunction $makeArray(arr, results) {\n\t\t\tvar ret = results || [];\n\n\t\t\tif (arr) {\n\t\t\t\tif (isArraylike(Object(arr))) {\n\t\t\t\t\t/* $.merge */\n\t\t\t\t\t(function(first, second) {\n\t\t\t\t\t\tvar len = +second.length,\n\t\t\t\t\t\t\t\tj = 0,\n\t\t\t\t\t\t\t\ti = first.length;\n\n\t\t\t\t\t\twhile (j < len) {\n\t\t\t\t\t\t\tfirst[i++] = second[j++];\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (len !== len) {\n\t\t\t\t\t\t\twhile (second[j] !== undefined) {\n\t\t\t\t\t\t\t\tfirst[i++] = second[j++];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tfirst.length = i;\n\n\t\t\t\t\t\treturn first;\n\t\t\t\t\t})(ret, typeof arr === \"string\" ? [arr] : arr);\n\t\t\t\t} else {\n\t\t\t\t\t[].push.call(ret, arr);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn ret;\n\t\t}\n\n\t\tif (!elem) {\n\t\t\treturn;\n\t\t}\n\n\t\ttype = (type || \"fx\") + \"queue\";\n\n\t\tvar q = $.data(elem, type);\n\n\t\tif (!data) {\n\t\t\treturn q || [];\n\t\t}\n\n\t\tif (!q || $.isArray(data)) {\n\t\t\tq = $.data(elem, type, $makeArray(data));\n\t\t} else {\n\t\t\tq.push(data);\n\t\t}\n\n\t\treturn q;\n\t};\n\n\t/* jQuery 1.4.3 */\n\t$.dequeue = function(elems, type) {\n\t\t/* Custom: Embed element iteration. */\n\t\t$.each(elems.nodeType ? [elems] : elems, function(i, elem) {\n\t\t\ttype = type || \"fx\";\n\n\t\t\tvar queue = $.queue(elem, type),\n\t\t\t\t\tfn = queue.shift();\n\n\t\t\tif (fn === \"inprogress\") {\n\t\t\t\tfn = queue.shift();\n\t\t\t}\n\n\t\t\tif (fn) {\n\t\t\t\tif (type === \"fx\") {\n\t\t\t\t\tqueue.unshift(\"inprogress\");\n\t\t\t\t}\n\n\t\t\t\tfn.call(elem, function() {\n\t\t\t\t\t$.dequeue(elem, type);\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t};\n\n\t/******************\n\t $.fn Methods\n\t ******************/\n\n\t/* jQuery */\n\t$.fn = $.prototype = {\n\t\tinit: function(selector) {\n\t\t\t/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */\n\t\t\tif (selector.nodeType) {\n\t\t\t\tthis[0] = selector;\n\n\t\t\t\treturn this;\n\t\t\t} else {\n\t\t\t\tthrow new Error(\"Not a DOM node.\");\n\t\t\t}\n\t\t},\n\t\toffset: function() {\n\t\t\t/* jQuery altered code: Dropped disconnected DOM node checking. */\n\t\t\tvar box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};\n\n\t\t\treturn {\n\t\t\t\ttop: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),\n\t\t\t\tleft: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)\n\t\t\t};\n\t\t},\n\t\tposition: function() {\n\t\t\t/* jQuery */\n\t\t\tfunction offsetParentFn(elem) {\n\t\t\t\tvar offsetParent = elem.offsetParent;\n\n\t\t\t\twhile (offsetParent && offsetParent.nodeName.toLowerCase() !== \"html\" && offsetParent.style && offsetParent.style.position === \"static\") {\n\t\t\t\t\toffsetParent = offsetParent.offsetParent;\n\t\t\t\t}\n\n\t\t\t\treturn offsetParent || document;\n\t\t\t}\n\n\t\t\t/* Zepto */\n\t\t\tvar elem = this[0],\n\t\t\t\t\toffsetParent = offsetParentFn(elem),\n\t\t\t\t\toffset = this.offset(),\n\t\t\t\t\tparentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();\n\n\t\t\toffset.top -= parseFloat(elem.style.marginTop) || 0;\n\t\t\toffset.left -= parseFloat(elem.style.marginLeft) || 0;\n\n\t\t\tif (offsetParent.style) {\n\t\t\t\tparentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;\n\t\t\t\tparentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;\n\t\t\t}\n\n\t\t\treturn {\n\t\t\t\ttop: offset.top - parentOffset.top,\n\t\t\t\tleft: offset.left - parentOffset.left\n\t\t\t};\n\t\t}\n\t};\n\n\t/**********************\n\t Private Variables\n\t **********************/\n\n\t/* For $.data() */\n\tvar cache = {};\n\t$.expando = \"velocity\" + (new Date().getTime());\n\t$.uuid = 0;\n\n\t/* For $.queue() */\n\tvar class2type = {},\n\t\t\thasOwn = class2type.hasOwnProperty,\n\t\t\ttoString = class2type.toString;\n\n\tvar types = \"Boolean Number String Function Array Date RegExp Object Error\".split(\" \");\n\tfor (var i = 0; i < types.length; i++) {\n\t\tclass2type[\"[object \" + types[i] + \"]\"] = types[i].toLowerCase();\n\t}\n\n\t/* Makes $(node) possible, without having to call init. */\n\t$.fn.init.prototype = $.fn;\n\n\t/* Globalize Velocity onto the window, and assign its Utilities property. */\n\twindow.Velocity = {Utilities: $};\n})(window);\n\n/******************\n Velocity.js\n ******************/\n\n(function(factory) {\n\t\"use strict\";\n\t/* CommonJS module. */\n\tif (typeof module === \"object\" && typeof module.exports === \"object\") {\n\t\tmodule.exports = factory();\n\t\t/* AMD module. */\n\t} else if (typeof define === \"function\" && define.amd) {\n\t\tdefine(factory);\n\t\t/* Browser globals. */\n\t} else {\n\t\tfactory();\n\t}\n}(function() {\n\t\"use strict\";\n\treturn function(global, window, document, undefined) {\n\n\t\t/***************\n\t\t Summary\n\t\t ***************/\n\n\t\t/*\n\t\t - CSS: CSS stack that works independently from the rest of Velocity.\n\t\t - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.\n\t\t - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.\n\t\t - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.\n\t\t Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).\n\t\t - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.\n\t\t - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.\n\t\t - completeCall(): Handles the cleanup process for each Velocity call.\n\t\t */\n\n\t\t/*********************\n\t\t Helper Functions\n\t\t *********************/\n\n\t\t/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */\n\t\tvar IE = (function() {\n\t\t\tif (document.documentMode) {\n\t\t\t\treturn document.documentMode;\n\t\t\t} else {\n\t\t\t\tfor (var i = 7; i > 4; i--) {\n\t\t\t\t\tvar div = document.createElement(\"div\");\n\n\t\t\t\t\tdiv.innerHTML = \"<!--[if IE \" + i + \"]><span></span><![endif]-->\";\n\n\t\t\t\t\tif (div.getElementsByTagName(\"span\").length) {\n\t\t\t\t\t\tdiv = null;\n\n\t\t\t\t\t\treturn i;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn undefined;\n\t\t})();\n\n\t\t/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */\n\t\tvar rAFShim = (function() {\n\t\t\tvar timeLast = 0;\n\n\t\t\treturn window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {\n\t\t\t\tvar timeCurrent = (new Date()).getTime(),\n\t\t\t\t\t\ttimeDelta;\n\n\t\t\t\t/* Dynamically set delay on a per-tick basis to match 60fps. */\n\t\t\t\t/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */\n\t\t\t\ttimeDelta = Math.max(0, 16 - (timeCurrent - timeLast));\n\t\t\t\ttimeLast = timeCurrent + timeDelta;\n\n\t\t\t\treturn setTimeout(function() {\n\t\t\t\t\tcallback(timeCurrent + timeDelta);\n\t\t\t\t}, timeDelta);\n\t\t\t};\n\t\t})();\n\n\t\tvar performance = (function() {\n\t\t\tvar perf = window.performance || {};\n\n\t\t\tif (typeof perf.now !== \"function\") {\n\t\t\t\tvar nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();\n\n\t\t\t\tperf.now = function() {\n\t\t\t\t\treturn (new Date()).getTime() - nowOffset;\n\t\t\t\t};\n\t\t\t}\n\t\t\treturn perf;\n\t\t})();\n\n\t\t/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */\n\t\tfunction compactSparseArray(array) {\n\t\t\tvar index = -1,\n\t\t\t\t\tlength = array ? array.length : 0,\n\t\t\t\t\tresult = [];\n\n\t\t\twhile (++index < length) {\n\t\t\t\tvar value = array[index];\n\n\t\t\t\tif (value) {\n\t\t\t\t\tresult.push(value);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn result;\n\t\t}\n\n\t\t/**\n\t\t * Shim for \"fixing\" IE's lack of support (IE < 9) for applying slice\n\t\t * on host objects like NamedNodeMap, NodeList, and HTMLCollection\n\t\t * (technically, since host objects have been implementation-dependent,\n\t\t * at least before ES2015, IE hasn't needed to work this way).\n\t\t * Also works on strings, fixes IE < 9 to allow an explicit undefined\n\t\t * for the 2nd argument (as in Firefox), and prevents errors when\n\t\t * called on other DOM objects.\n\t\t */\n\t\tvar _slice = (function() {\n\t\t\tvar slice = Array.prototype.slice;\n\n\t\t\ttry {\n\t\t\t\t// Can't be used with DOM elements in IE < 9\n\t\t\t\tslice.call(document.documentElement);\n\t\t\t\treturn slice;\n\t\t\t} catch (e) { // Fails in IE < 9\n\n\t\t\t\t// This will work for genuine arrays, array-like objects, \n\t\t\t\t// NamedNodeMap (attributes, entities, notations),\n\t\t\t\t// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),\n\t\t\t\t// and will not fail on other DOM objects (as do DOM elements in IE < 9)\n\t\t\t\treturn function(begin, end) {\n\t\t\t\t\tvar len = this.length;\n\n\t\t\t\t\tif (typeof begin !== \"number\") {\n\t\t\t\t\t\tbegin = 0;\n\t\t\t\t\t}\n\t\t\t\t\t// IE < 9 gets unhappy with an undefined end argument\n\t\t\t\t\tif (typeof end !== \"number\") {\n\t\t\t\t\t\tend = len;\n\t\t\t\t\t}\n\t\t\t\t\t// For native Array objects, we use the native slice function\n\t\t\t\t\tif (this.slice) {\n\t\t\t\t\t\treturn slice.call(this, begin, end);\n\t\t\t\t\t}\n\t\t\t\t\t// For array like object we handle it ourselves.\n\t\t\t\t\tvar i,\n\t\t\t\t\t\t\tcloned = [],\n\t\t\t\t\t\t\t// Handle negative value for \"begin\"\n\t\t\t\t\t\t\tstart = (begin >= 0) ? begin : Math.max(0, len + begin),\n\t\t\t\t\t\t\t// Handle negative value for \"end\"\n\t\t\t\t\t\t\tupTo = end < 0 ? len + end : Math.min(end, len),\n\t\t\t\t\t\t\t// Actual expected size of the slice\n\t\t\t\t\t\t\tsize = upTo - start;\n\n\t\t\t\t\tif (size > 0) {\n\t\t\t\t\t\tcloned = new Array(size);\n\t\t\t\t\t\tif (this.charAt) {\n\t\t\t\t\t\t\tfor (i = 0; i < size; i++) {\n\t\t\t\t\t\t\t\tcloned[i] = this.charAt(start + i);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (i = 0; i < size; i++) {\n\t\t\t\t\t\t\t\tcloned[i] = this[start + i];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\treturn cloned;\n\t\t\t\t};\n\t\t\t}\n\t\t})();\n\n\t\t/* .indexOf doesn't exist in IE<9 */\n\t\tvar _inArray = (function() {\n\t\t\tif (Array.prototype.includes) {\n\t\t\t\treturn function(arr, val) {\n\t\t\t\t\treturn arr.includes(val);\n\t\t\t\t};\n\t\t\t}\n\t\t\tif (Array.prototype.indexOf) {\n\t\t\t\treturn function(arr, val) {\n\t\t\t\t\treturn arr.indexOf(val) >= 0;\n\t\t\t\t};\n\t\t\t}\n\t\t\treturn function(arr, val) {\n\t\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t\t\t\tif (arr[i] === val) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn false;\n\t\t\t};\n\t\t});\n\n\t\tfunction sanitizeElements(elements) {\n\t\t\t/* Unwrap jQuery/Zepto objects. */\n\t\t\tif (Type.isWrapped(elements)) {\n\t\t\t\telements = _slice.call(elements);\n\t\t\t\t/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */\n\t\t\t} else if (Type.isNode(elements)) {\n\t\t\t\telements = [elements];\n\t\t\t}\n\n\t\t\treturn elements;\n\t\t}\n\n\t\tvar Type = {\n\t\t\tisNumber: function(variable) {\n\t\t\t\treturn (typeof variable === \"number\");\n\t\t\t},\n\t\t\tisString: function(variable) {\n\t\t\t\treturn (typeof variable === \"string\");\n\t\t\t},\n\t\t\tisArray: Array.isArray || function(variable) {\n\t\t\t\treturn Object.prototype.toString.call(variable) === \"[object Array]\";\n\t\t\t},\n\t\t\tisFunction: function(variable) {\n\t\t\t\treturn Object.prototype.toString.call(variable) === \"[object Function]\";\n\t\t\t},\n\t\t\tisNode: function(variable) {\n\t\t\t\treturn variable && variable.nodeType;\n\t\t\t},\n\t\t\t/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */\n\t\t\t/* NOTE: HTMLFormElements also have a length. */\n\t\t\tisWrapped: function(variable) {\n\t\t\t\treturn variable\n\t\t\t\t\t\t&& variable !== window\n\t\t\t\t\t\t&& Type.isNumber(variable.length)\n\t\t\t\t\t\t&& !Type.isString(variable)\n\t\t\t\t\t\t&& !Type.isFunction(variable)\n\t\t\t\t\t\t&& !Type.isNode(variable)\n\t\t\t\t\t\t&& (variable.length === 0 || Type.isNode(variable[0]));\n\t\t\t},\n\t\t\tisSVG: function(variable) {\n\t\t\t\treturn window.SVGElement && (variable instanceof window.SVGElement);\n\t\t\t},\n\t\t\tisEmptyObject: function(variable) {\n\t\t\t\tfor (var name in variable) {\n\t\t\t\t\tif (variable.hasOwnProperty(name)) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn true;\n\t\t\t}\n\t\t};\n\n\t\t/*****************\n\t\t Dependencies\n\t\t *****************/\n\n\t\tvar $,\n\t\t\t\tisJQuery = false;\n\n\t\tif (global.fn && global.fn.jquery) {\n\t\t\t$ = global;\n\t\t\tisJQuery = true;\n\t\t} else {\n\t\t\t$ = window.Velocity.Utilities;\n\t\t}\n\n\t\tif (IE <= 8 && !isJQuery) {\n\t\t\tthrow new Error(\"Velocity: IE8 and below require jQuery to be loaded before Velocity.\");\n\t\t} else if (IE <= 7) {\n\t\t\t/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */\n\t\t\tjQuery.fn.velocity = jQuery.fn.animate;\n\n\t\t\t/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */\n\t\t\treturn;\n\t\t}\n\n\t\t/*****************\n\t\t Constants\n\t\t *****************/\n\n\t\tvar DURATION_DEFAULT = 400,\n\t\t\t\tEASING_DEFAULT = \"swing\";\n\n\t\t/*************\n\t\t State\n\t\t *************/\n\n\t\tvar Velocity = {\n\t\t\t/* Container for page-wide Velocity state data. */\n\t\t\tState: {\n\t\t\t\t/* Detect mobile devices to determine if mobileHA should be turned on. */\n\t\t\t\tisMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),\n\t\t\t\t/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */\n\t\t\t\tisAndroid: /Android/i.test(navigator.userAgent),\n\t\t\t\tisGingerbread: /Android 2\\.3\\.[3-7]/i.test(navigator.userAgent),\n\t\t\t\tisChrome: window.chrome,\n\t\t\t\tisFirefox: /Firefox/i.test(navigator.userAgent),\n\t\t\t\t/* Create a cached element for re-use when checking for CSS property prefixes. */\n\t\t\t\tprefixElement: document.createElement(\"div\"),\n\t\t\t\t/* Cache every prefix match to avoid repeating lookups. */\n\t\t\t\tprefixMatches: {},\n\t\t\t\t/* Cache the anchor used for animating window scrolling. */\n\t\t\t\tscrollAnchor: null,\n\t\t\t\t/* Cache the browser-specific property names associated with the scroll anchor. */\n\t\t\t\tscrollPropertyLeft: null,\n\t\t\t\tscrollPropertyTop: null,\n\t\t\t\t/* Keep track of whether our RAF tick is running. */\n\t\t\t\tisTicking: false,\n\t\t\t\t/* Container for every in-progress call to Velocity. */\n\t\t\t\tcalls: [],\n\t\t\t\tdelayedElements: {\n\t\t\t\t\tcount: 0\n\t\t\t\t}\n\t\t\t},\n\t\t\t/* Velocity's custom CSS stack. Made global for unit testing. */\n\t\t\tCSS: {/* Defined below. */},\n\t\t\t/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */\n\t\t\tUtilities: $,\n\t\t\t/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */\n\t\t\tRedirects: {/* Manually registered by the user. */},\n\t\t\tEasings: {/* Defined below. */},\n\t\t\t/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */\n\t\t\tPromise: window.Promise,\n\t\t\t/* Velocity option defaults, which can be overriden by the user. */\n\t\t\tdefaults: {\n\t\t\t\tqueue: \"\",\n\t\t\t\tduration: DURATION_DEFAULT,\n\t\t\t\teasing: EASING_DEFAULT,\n\t\t\t\tbegin: undefined,\n\t\t\t\tcomplete: undefined,\n\t\t\t\tprogress: undefined,\n\t\t\t\tdisplay: undefined,\n\t\t\t\tvisibility: undefined,\n\t\t\t\tloop: false,\n\t\t\t\tdelay: false,\n\t\t\t\tmobileHA: true,\n\t\t\t\t/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */\n\t\t\t\t_cacheValues: true,\n\t\t\t\t/* Advanced: Set to false if the promise should always resolve on empty element lists. */\n\t\t\t\tpromiseRejectEmpty: true\n\t\t\t},\n\t\t\t/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */\n\t\t\tinit: function(element) {\n\t\t\t\t$.data(element, \"velocity\", {\n\t\t\t\t\t/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */\n\t\t\t\t\tisSVG: Type.isSVG(element),\n\t\t\t\t\t/* Keep track of whether the element is currently being animated by Velocity.\n\t\t\t\t\t This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */\n\t\t\t\t\tisAnimating: false,\n\t\t\t\t\t/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */\n\t\t\t\t\tcomputedStyle: null,\n\t\t\t\t\t/* Tween data is cached for each animation on the element so that data can be passed across calls --\n\t\t\t\t\t in particular, end values are used as subsequent start values in consecutive Velocity calls. */\n\t\t\t\t\ttweensContainer: null,\n\t\t\t\t\t/* The full root property values of each CSS hook being animated on this element are cached so that:\n\t\t\t\t\t 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.\n\t\t\t\t\t 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */\n\t\t\t\t\trootPropertyValueCache: {},\n\t\t\t\t\t/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */\n\t\t\t\t\ttransformCache: {}\n\t\t\t\t});\n\t\t\t},\n\t\t\t/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */\n\t\t\thook: null, /* Defined below. */\n\t\t\t/* Velocity-wide animation time remapping for testing purposes. */\n\t\t\tmock: false,\n\t\t\tversion: {major: 1, minor: 5, patch: 0},\n\t\t\t/* Set to 1 or 2 (most verbose) to output debug info to console. */\n\t\t\tdebug: false,\n\t\t\t/* Use rAF high resolution timestamp when available */\n\t\t\ttimestamp: true,\n\t\t\t/* Pause all animations */\n\t\t\tpauseAll: function(queueName) {\n\t\t\t\tvar currentTime = (new Date()).getTime();\n\n\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\n\n\t\t\t\t\tif (activeCall) {\n\n\t\t\t\t\t\t/* If we have a queueName and this call is not on that queue, skip */\n\t\t\t\t\t\tif (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Set call to paused */\n\t\t\t\t\t\tactiveCall[5] = {\n\t\t\t\t\t\t\tresume: false\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t\t/* Pause timers on any currently delayed calls */\n\t\t\t\t$.each(Velocity.State.delayedElements, function(k, element) {\n\t\t\t\t\tif (!element) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\tpauseDelayOnElement(element, currentTime);\n\t\t\t\t});\n\t\t\t},\n\t\t\t/* Resume all animations */\n\t\t\tresumeAll: function(queueName) {\n\t\t\t\tvar currentTime = (new Date()).getTime();\n\n\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\n\n\t\t\t\t\tif (activeCall) {\n\n\t\t\t\t\t\t/* If we have a queueName and this call is not on that queue, skip */\n\t\t\t\t\t\tif (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Set call to resumed if it was paused */\n\t\t\t\t\t\tif (activeCall[5]) {\n\t\t\t\t\t\t\tactiveCall[5].resume = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\t/* Resume timers on any currently delayed calls */\n\t\t\t\t$.each(Velocity.State.delayedElements, function(k, element) {\n\t\t\t\t\tif (!element) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\tresumeDelayOnElement(element, currentTime);\n\t\t\t\t});\n\t\t\t}\n\t\t};\n\n\t\t/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */\n\t\tif (window.pageYOffset !== undefined) {\n\t\t\tVelocity.State.scrollAnchor = window;\n\t\t\tVelocity.State.scrollPropertyLeft = \"pageXOffset\";\n\t\t\tVelocity.State.scrollPropertyTop = \"pageYOffset\";\n\t\t} else {\n\t\t\tVelocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;\n\t\t\tVelocity.State.scrollPropertyLeft = \"scrollLeft\";\n\t\t\tVelocity.State.scrollPropertyTop = \"scrollTop\";\n\t\t}\n\n\t\t/* Shorthand alias for jQuery's $.data() utility. */\n\t\tfunction Data(element) {\n\t\t\t/* Hardcode a reference to the plugin name. */\n\t\t\tvar response = $.data(element, \"velocity\");\n\n\t\t\t/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */\n\t\t\treturn response === null ? undefined : response;\n\t\t}\n\n\t\t/**************\n\t\t Delay Timer\n\t\t **************/\n\n\t\tfunction pauseDelayOnElement(element, currentTime) {\n\t\t\t/* Check for any delay timers, and pause the set timeouts (while preserving time data)\n\t\t\t to be resumed when the \"resume\" command is issued */\n\t\t\tvar data = Data(element);\n\t\t\tif (data && data.delayTimer && !data.delayPaused) {\n\t\t\t\tdata.delayRemaining = data.delay - currentTime + data.delayBegin;\n\t\t\t\tdata.delayPaused = true;\n\t\t\t\tclearTimeout(data.delayTimer.setTimeout);\n\t\t\t}\n\t\t}\n\n\t\tfunction resumeDelayOnElement(element, currentTime) {\n\t\t\t/* Check for any paused timers and resume */\n\t\t\tvar data = Data(element);\n\t\t\tif (data && data.delayTimer && data.delayPaused) {\n\t\t\t\t/* If the element was mid-delay, re initiate the timeout with the remaining delay */\n\t\t\t\tdata.delayPaused = false;\n\t\t\t\tdata.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);\n\t\t\t}\n\t\t}\n\n\n\n\t\t/**************\n\t\t Easing\n\t\t **************/\n\n\t\t/* Step easing generator. */\n\t\tfunction generateStep(steps) {\n\t\t\treturn function(p) {\n\t\t\t\treturn Math.round(p * steps) * (1 / steps);\n\t\t\t};\n\t\t}\n\n\t\t/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */\n\t\tfunction generateBezier(mX1, mY1, mX2, mY2) {\n\t\t\tvar NEWTON_ITERATIONS = 4,\n\t\t\t\t\tNEWTON_MIN_SLOPE = 0.001,\n\t\t\t\t\tSUBDIVISION_PRECISION = 0.0000001,\n\t\t\t\t\tSUBDIVISION_MAX_ITERATIONS = 10,\n\t\t\t\t\tkSplineTableSize = 11,\n\t\t\t\t\tkSampleStepSize = 1.0 / (kSplineTableSize - 1.0),\n\t\t\t\t\tfloat32ArraySupported = \"Float32Array\" in window;\n\n\t\t\t/* Must contain four arguments. */\n\t\t\tif (arguments.length !== 4) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\t/* Arguments must be numbers. */\n\t\t\tfor (var i = 0; i < 4; ++i) {\n\t\t\t\tif (typeof arguments[i] !== \"number\" || isNaN(arguments[i]) || !isFinite(arguments[i])) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/* X values must be in the [0, 1] range. */\n\t\t\tmX1 = Math.min(mX1, 1);\n\t\t\tmX2 = Math.min(mX2, 1);\n\t\t\tmX1 = Math.max(mX1, 0);\n\t\t\tmX2 = Math.max(mX2, 0);\n\n\t\t\tvar mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);\n\n\t\t\tfunction A(aA1, aA2) {\n\t\t\t\treturn 1.0 - 3.0 * aA2 + 3.0 * aA1;\n\t\t\t}\n\t\t\tfunction B(aA1, aA2) {\n\t\t\t\treturn 3.0 * aA2 - 6.0 * aA1;\n\t\t\t}\n\t\t\tfunction C(aA1) {\n\t\t\t\treturn 3.0 * aA1;\n\t\t\t}\n\n\t\t\tfunction calcBezier(aT, aA1, aA2) {\n\t\t\t\treturn ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;\n\t\t\t}\n\n\t\t\tfunction getSlope(aT, aA1, aA2) {\n\t\t\t\treturn 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);\n\t\t\t}\n\n\t\t\tfunction newtonRaphsonIterate(aX, aGuessT) {\n\t\t\t\tfor (var i = 0; i < NEWTON_ITERATIONS; ++i) {\n\t\t\t\t\tvar currentSlope = getSlope(aGuessT, mX1, mX2);\n\n\t\t\t\t\tif (currentSlope === 0.0) {\n\t\t\t\t\t\treturn aGuessT;\n\t\t\t\t\t}\n\n\t\t\t\t\tvar currentX = calcBezier(aGuessT, mX1, mX2) - aX;\n\t\t\t\t\taGuessT -= currentX / currentSlope;\n\t\t\t\t}\n\n\t\t\t\treturn aGuessT;\n\t\t\t}\n\n\t\t\tfunction calcSampleValues() {\n\t\t\t\tfor (var i = 0; i < kSplineTableSize; ++i) {\n\t\t\t\t\tmSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction binarySubdivide(aX, aA, aB) {\n\t\t\t\tvar currentX, currentT, i = 0;\n\n\t\t\t\tdo {\n\t\t\t\t\tcurrentT = aA + (aB - aA) / 2.0;\n\t\t\t\t\tcurrentX = calcBezier(currentT, mX1, mX2) - aX;\n\t\t\t\t\tif (currentX > 0.0) {\n\t\t\t\t\t\taB = currentT;\n\t\t\t\t\t} else {\n\t\t\t\t\t\taA = currentT;\n\t\t\t\t\t}\n\t\t\t\t} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);\n\n\t\t\t\treturn currentT;\n\t\t\t}\n\n\t\t\tfunction getTForX(aX) {\n\t\t\t\tvar intervalStart = 0.0,\n\t\t\t\t\t\tcurrentSample = 1,\n\t\t\t\t\t\tlastSample = kSplineTableSize - 1;\n\n\t\t\t\tfor (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {\n\t\t\t\t\tintervalStart += kSampleStepSize;\n\t\t\t\t}\n\n\t\t\t\t--currentSample;\n\n\t\t\t\tvar dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),\n\t\t\t\t\t\tguessForT = intervalStart + dist * kSampleStepSize,\n\t\t\t\t\t\tinitialSlope = getSlope(guessForT, mX1, mX2);\n\n\t\t\t\tif (initialSlope >= NEWTON_MIN_SLOPE) {\n\t\t\t\t\treturn newtonRaphsonIterate(aX, guessForT);\n\t\t\t\t} else if (initialSlope === 0.0) {\n\t\t\t\t\treturn guessForT;\n\t\t\t\t} else {\n\t\t\t\t\treturn binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tvar _precomputed = false;\n\n\t\t\tfunction precompute() {\n\t\t\t\t_precomputed = true;\n\t\t\t\tif (mX1 !== mY1 || mX2 !== mY2) {\n\t\t\t\t\tcalcSampleValues();\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tvar f = function(aX) {\n\t\t\t\tif (!_precomputed) {\n\t\t\t\t\tprecompute();\n\t\t\t\t}\n\t\t\t\tif (mX1 === mY1 && mX2 === mY2) {\n\t\t\t\t\treturn aX;\n\t\t\t\t}\n\t\t\t\tif (aX === 0) {\n\t\t\t\t\treturn 0;\n\t\t\t\t}\n\t\t\t\tif (aX === 1) {\n\t\t\t\t\treturn 1;\n\t\t\t\t}\n\n\t\t\t\treturn calcBezier(getTForX(aX), mY1, mY2);\n\t\t\t};\n\n\t\t\tf.getControlPoints = function() {\n\t\t\t\treturn [{x: mX1, y: mY1}, {x: mX2, y: mY2}];\n\t\t\t};\n\n\t\t\tvar str = \"generateBezier(\" + [mX1, mY1, mX2, mY2] + \")\";\n\t\t\tf.toString = function() {\n\t\t\t\treturn str;\n\t\t\t};\n\n\t\t\treturn f;\n\t\t}\n\n\t\t/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */\n\t\t/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass\n\t\t then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */\n\t\tvar generateSpringRK4 = (function() {\n\t\t\tfunction springAccelerationForState(state) {\n\t\t\t\treturn (-state.tension * state.x) - (state.friction * state.v);\n\t\t\t}\n\n\t\t\tfunction springEvaluateStateWithDerivative(initialState, dt, derivative) {\n\t\t\t\tvar state = {\n\t\t\t\t\tx: initialState.x + derivative.dx * dt,\n\t\t\t\t\tv: initialState.v + derivative.dv * dt,\n\t\t\t\t\ttension: initialState.tension,\n\t\t\t\t\tfriction: initialState.friction\n\t\t\t\t};\n\n\t\t\t\treturn {dx: state.v, dv: springAccelerationForState(state)};\n\t\t\t}\n\n\t\t\tfunction springIntegrateState(state, dt) {\n\t\t\t\tvar a = {\n\t\t\t\t\tdx: state.v,\n\t\t\t\t\tdv: springAccelerationForState(state)\n\t\t\t\t},\n\t\t\t\t\t\tb = springEvaluateStateWithDerivative(state, dt * 0.5, a),\n\t\t\t\t\t\tc = springEvaluateStateWithDerivative(state, dt * 0.5, b),\n\t\t\t\t\t\td = springEvaluateStateWithDerivative(state, dt, c),\n\t\t\t\t\t\tdxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),\n\t\t\t\t\t\tdvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);\n\n\t\t\t\tstate.x = state.x + dxdt * dt;\n\t\t\t\tstate.v = state.v + dvdt * dt;\n\n\t\t\t\treturn state;\n\t\t\t}\n\n\t\t\treturn function springRK4Factory(tension, friction, duration) {\n\n\t\t\t\tvar initState = {\n\t\t\t\t\tx: -1,\n\t\t\t\t\tv: 0,\n\t\t\t\t\ttension: null,\n\t\t\t\t\tfriction: null\n\t\t\t\t},\n\t\t\t\t\t\tpath = [0],\n\t\t\t\t\t\ttime_lapsed = 0,\n\t\t\t\t\t\ttolerance = 1 / 10000,\n\t\t\t\t\t\tDT = 16 / 1000,\n\t\t\t\t\t\thave_duration, dt, last_state;\n\n\t\t\t\ttension = parseFloat(tension) || 500;\n\t\t\t\tfriction = parseFloat(friction) || 20;\n\t\t\t\tduration = duration || null;\n\n\t\t\t\tinitState.tension = tension;\n\t\t\t\tinitState.friction = friction;\n\n\t\t\t\thave_duration = duration !== null;\n\n\t\t\t\t/* Calculate the actual time it takes for this animation to complete with the provided conditions. */\n\t\t\t\tif (have_duration) {\n\t\t\t\t\t/* Run the simulation without a duration. */\n\t\t\t\t\ttime_lapsed = springRK4Factory(tension, friction);\n\t\t\t\t\t/* Compute the adjusted time delta. */\n\t\t\t\t\tdt = time_lapsed / duration * DT;\n\t\t\t\t} else {\n\t\t\t\t\tdt = DT;\n\t\t\t\t}\n\n\t\t\t\twhile (true) {\n\t\t\t\t\t/* Next/step function .*/\n\t\t\t\t\tlast_state = springIntegrateState(last_state || initState, dt);\n\t\t\t\t\t/* Store the position. */\n\t\t\t\t\tpath.push(1 + last_state.x);\n\t\t\t\t\ttime_lapsed += 16;\n\t\t\t\t\t/* If the change threshold is reached, break. */\n\t\t\t\t\tif (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the\n\t\t\t\t computed path and returns a snapshot of the position according to a given percentComplete. */\n\t\t\t\treturn !have_duration ? time_lapsed : function(percentComplete) {\n\t\t\t\t\treturn path[ (percentComplete * (path.length - 1)) | 0 ];\n\t\t\t\t};\n\t\t\t};\n\t\t}());\n\n\t\t/* jQuery easings. */\n\t\tVelocity.Easings = {\n\t\t\tlinear: function(p) {\n\t\t\t\treturn p;\n\t\t\t},\n\t\t\tswing: function(p) {\n\t\t\t\treturn 0.5 - Math.cos(p * Math.PI) / 2;\n\t\t\t},\n\t\t\t/* Bonus \"spring\" easing, which is a less exaggerated version of easeInOutElastic. */\n\t\t\tspring: function(p) {\n\t\t\t\treturn 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));\n\t\t\t}\n\t\t};\n\n\t\t/* CSS3 and Robert Penner easings. */\n\t\t$.each(\n\t\t\t\t[\n\t\t\t\t\t[\"ease\", [0.25, 0.1, 0.25, 1.0]],\n\t\t\t\t\t[\"ease-in\", [0.42, 0.0, 1.00, 1.0]],\n\t\t\t\t\t[\"ease-out\", [0.00, 0.0, 0.58, 1.0]],\n\t\t\t\t\t[\"ease-in-out\", [0.42, 0.0, 0.58, 1.0]],\n\t\t\t\t\t[\"easeInSine\", [0.47, 0, 0.745, 0.715]],\n\t\t\t\t\t[\"easeOutSine\", [0.39, 0.575, 0.565, 1]],\n\t\t\t\t\t[\"easeInOutSine\", [0.445, 0.05, 0.55, 0.95]],\n\t\t\t\t\t[\"easeInQuad\", [0.55, 0.085, 0.68, 0.53]],\n\t\t\t\t\t[\"easeOutQuad\", [0.25, 0.46, 0.45, 0.94]],\n\t\t\t\t\t[\"easeInOutQuad\", [0.455, 0.03, 0.515, 0.955]],\n\t\t\t\t\t[\"easeInCubic\", [0.55, 0.055, 0.675, 0.19]],\n\t\t\t\t\t[\"easeOutCubic\", [0.215, 0.61, 0.355, 1]],\n\t\t\t\t\t[\"easeInOutCubic\", [0.645, 0.045, 0.355, 1]],\n\t\t\t\t\t[\"easeInQuart\", [0.895, 0.03, 0.685, 0.22]],\n\t\t\t\t\t[\"easeOutQuart\", [0.165, 0.84, 0.44, 1]],\n\t\t\t\t\t[\"easeInOutQuart\", [0.77, 0, 0.175, 1]],\n\t\t\t\t\t[\"easeInQuint\", [0.755, 0.05, 0.855, 0.06]],\n\t\t\t\t\t[\"easeOutQuint\", [0.23, 1, 0.32, 1]],\n\t\t\t\t\t[\"easeInOutQuint\", [0.86, 0, 0.07, 1]],\n\t\t\t\t\t[\"easeInExpo\", [0.95, 0.05, 0.795, 0.035]],\n\t\t\t\t\t[\"easeOutExpo\", [0.19, 1, 0.22, 1]],\n\t\t\t\t\t[\"easeInOutExpo\", [1, 0, 0, 1]],\n\t\t\t\t\t[\"easeInCirc\", [0.6, 0.04, 0.98, 0.335]],\n\t\t\t\t\t[\"easeOutCirc\", [0.075, 0.82, 0.165, 1]],\n\t\t\t\t\t[\"easeInOutCirc\", [0.785, 0.135, 0.15, 0.86]]\n\t\t\t\t], function(i, easingArray) {\n\t\t\tVelocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);\n\t\t});\n\n\t\t/* Determine the appropriate easing type given an easing input. */\n\t\tfunction getEasing(value, duration) {\n\t\t\tvar easing = value;\n\n\t\t\t/* The easing option can either be a string that references a pre-registered easing,\n\t\t\t or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */\n\t\t\tif (Type.isString(value)) {\n\t\t\t\t/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */\n\t\t\t\tif (!Velocity.Easings[value]) {\n\t\t\t\t\teasing = false;\n\t\t\t\t}\n\t\t\t} else if (Type.isArray(value) && value.length === 1) {\n\t\t\t\teasing = generateStep.apply(null, value);\n\t\t\t} else if (Type.isArray(value) && value.length === 2) {\n\t\t\t\t/* springRK4 must be passed the animation's duration. */\n\t\t\t\t/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing\n\t\t\t\t function generated with default tension and friction values. */\n\t\t\t\teasing = generateSpringRK4.apply(null, value.concat([duration]));\n\t\t\t} else if (Type.isArray(value) && value.length === 4) {\n\t\t\t\t/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */\n\t\t\t\teasing = generateBezier.apply(null, value);\n\t\t\t} else {\n\t\t\t\teasing = false;\n\t\t\t}\n\n\t\t\t/* Revert to the Velocity-wide default easing type, or fall back to \"swing\" (which is also jQuery's default)\n\t\t\t if the Velocity-wide default has been incorrectly modified. */\n\t\t\tif (easing === false) {\n\t\t\t\tif (Velocity.Easings[Velocity.defaults.easing]) {\n\t\t\t\t\teasing = Velocity.defaults.easing;\n\t\t\t\t} else {\n\t\t\t\t\teasing = EASING_DEFAULT;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn easing;\n\t\t}\n\n\t\t/*****************\n\t\t CSS Stack\n\t\t *****************/\n\n\t\t/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.\n\t\t It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */\n\t\t/* Note: A \"CSS\" shorthand is aliased so that our code is easier to read. */\n\t\tvar CSS = Velocity.CSS = {\n\t\t\t/*************\n\t\t\t RegEx\n\t\t\t *************/\n\n\t\t\tRegEx: {\n\t\t\t\tisHex: /^#([A-f\\d]{3}){1,2}$/i,\n\t\t\t\t/* Unwrap a property value's surrounding text, e.g. \"rgba(4, 3, 2, 1)\" ==> \"4, 3, 2, 1\" and \"rect(4px 3px 2px 1px)\" ==> \"4px 3px 2px 1px\". */\n\t\t\t\tvalueUnwrap: /^[A-z]+\\((.*)\\)$/i,\n\t\t\t\twrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,\n\t\t\t\t/* Split a multi-value property into an array of subvalues, e.g. \"rgba(4, 3, 2, 1) 4px 3px 2px 1px\" ==> [ \"rgba(4, 3, 2, 1)\", \"4px\", \"3px\", \"2px\", \"1px\" ]. */\n\t\t\t\tvalueSplit: /([A-z]+\\(.+\\))|(([A-z0-9#-.]+?)(?=\\s|$))/ig\n\t\t\t},\n\t\t\t/************\n\t\t\t Lists\n\t\t\t ************/\n\n\t\t\tLists: {\n\t\t\t\tcolors: [\"fill\", \"stroke\", \"stopColor\", \"color\", \"backgroundColor\", \"borderColor\", \"borderTopColor\", \"borderRightColor\", \"borderBottomColor\", \"borderLeftColor\", \"outlineColor\"],\n\t\t\t\ttransformsBase: [\"translateX\", \"translateY\", \"scale\", \"scaleX\", \"scaleY\", \"skewX\", \"skewY\", \"rotateZ\"],\n\t\t\t\ttransforms3D: [\"transformPerspective\", \"translateZ\", \"scaleZ\", \"rotateX\", \"rotateY\"],\n\t\t\t\tunits: [\n\t\t\t\t\t\"%\", // relative\n\t\t\t\t\t\"em\", \"ex\", \"ch\", \"rem\", // font relative\n\t\t\t\t\t\"vw\", \"vh\", \"vmin\", \"vmax\", // viewport relative\n\t\t\t\t\t\"cm\", \"mm\", \"Q\", \"in\", \"pc\", \"pt\", \"px\", // absolute lengths\n\t\t\t\t\t\"deg\", \"grad\", \"rad\", \"turn\", // angles\n\t\t\t\t\t\"s\", \"ms\" // time\n\t\t\t\t],\n\t\t\t\tcolorNames: {\n\t\t\t\t\t\"aliceblue\": \"240,248,255\",\n\t\t\t\t\t\"antiquewhite\": \"250,235,215\",\n\t\t\t\t\t\"aquamarine\": \"127,255,212\",\n\t\t\t\t\t\"aqua\": \"0,255,255\",\n\t\t\t\t\t\"azure\": \"240,255,255\",\n\t\t\t\t\t\"beige\": \"245,245,220\",\n\t\t\t\t\t\"bisque\": \"255,228,196\",\n\t\t\t\t\t\"black\": \"0,0,0\",\n\t\t\t\t\t\"blanchedalmond\": \"255,235,205\",\n\t\t\t\t\t\"blueviolet\": \"138,43,226\",\n\t\t\t\t\t\"blue\": \"0,0,255\",\n\t\t\t\t\t\"brown\": \"165,42,42\",\n\t\t\t\t\t\"burlywood\": \"222,184,135\",\n\t\t\t\t\t\"cadetblue\": \"95,158,160\",\n\t\t\t\t\t\"chartreuse\": \"127,255,0\",\n\t\t\t\t\t\"chocolate\": \"210,105,30\",\n\t\t\t\t\t\"coral\": \"255,127,80\",\n\t\t\t\t\t\"cornflowerblue\": \"100,149,237\",\n\t\t\t\t\t\"cornsilk\": \"255,248,220\",\n\t\t\t\t\t\"crimson\": \"220,20,60\",\n\t\t\t\t\t\"cyan\": \"0,255,255\",\n\t\t\t\t\t\"darkblue\": \"0,0,139\",\n\t\t\t\t\t\"darkcyan\": \"0,139,139\",\n\t\t\t\t\t\"darkgoldenrod\": \"184,134,11\",\n\t\t\t\t\t\"darkgray\": \"169,169,169\",\n\t\t\t\t\t\"darkgrey\": \"169,169,169\",\n\t\t\t\t\t\"darkgreen\": \"0,100,0\",\n\t\t\t\t\t\"darkkhaki\": \"189,183,107\",\n\t\t\t\t\t\"darkmagenta\": \"139,0,139\",\n\t\t\t\t\t\"darkolivegreen\": \"85,107,47\",\n\t\t\t\t\t\"darkorange\": \"255,140,0\",\n\t\t\t\t\t\"darkorchid\": \"153,50,204\",\n\t\t\t\t\t\"darkred\": \"139,0,0\",\n\t\t\t\t\t\"darksalmon\": \"233,150,122\",\n\t\t\t\t\t\"darkseagreen\": \"143,188,143\",\n\t\t\t\t\t\"darkslateblue\": \"72,61,139\",\n\t\t\t\t\t\"darkslategray\": \"47,79,79\",\n\t\t\t\t\t\"darkturquoise\": \"0,206,209\",\n\t\t\t\t\t\"darkviolet\": \"148,0,211\",\n\t\t\t\t\t\"deeppink\": \"255,20,147\",\n\t\t\t\t\t\"deepskyblue\": \"0,191,255\",\n\t\t\t\t\t\"dimgray\": \"105,105,105\",\n\t\t\t\t\t\"dimgrey\": \"105,105,105\",\n\t\t\t\t\t\"dodgerblue\": \"30,144,255\",\n\t\t\t\t\t\"firebrick\": \"178,34,34\",\n\t\t\t\t\t\"floralwhite\": \"255,250,240\",\n\t\t\t\t\t\"forestgreen\": \"34,139,34\",\n\t\t\t\t\t\"fuchsia\": \"255,0,255\",\n\t\t\t\t\t\"gainsboro\": \"220,220,220\",\n\t\t\t\t\t\"ghostwhite\": \"248,248,255\",\n\t\t\t\t\t\"gold\": \"255,215,0\",\n\t\t\t\t\t\"goldenrod\": \"218,165,32\",\n\t\t\t\t\t\"gray\": \"128,128,128\",\n\t\t\t\t\t\"grey\": \"128,128,128\",\n\t\t\t\t\t\"greenyellow\": \"173,255,47\",\n\t\t\t\t\t\"green\": \"0,128,0\",\n\t\t\t\t\t\"honeydew\": \"240,255,240\",\n\t\t\t\t\t\"hotpink\": \"255,105,180\",\n\t\t\t\t\t\"indianred\": \"205,92,92\",\n\t\t\t\t\t\"indigo\": \"75,0,130\",\n\t\t\t\t\t\"ivory\": \"255,255,240\",\n\t\t\t\t\t\"khaki\": \"240,230,140\",\n\t\t\t\t\t\"lavenderblush\": \"255,240,245\",\n\t\t\t\t\t\"lavender\": \"230,230,250\",\n\t\t\t\t\t\"lawngreen\": \"124,252,0\",\n\t\t\t\t\t\"lemonchiffon\": \"255,250,205\",\n\t\t\t\t\t\"lightblue\": \"173,216,230\",\n\t\t\t\t\t\"lightcoral\": \"240,128,128\",\n\t\t\t\t\t\"lightcyan\": \"224,255,255\",\n\t\t\t\t\t\"lightgoldenrodyellow\": \"250,250,210\",\n\t\t\t\t\t\"lightgray\": \"211,211,211\",\n\t\t\t\t\t\"lightgrey\": \"211,211,211\",\n\t\t\t\t\t\"lightgreen\": \"144,238,144\",\n\t\t\t\t\t\"lightpink\": \"255,182,193\",\n\t\t\t\t\t\"lightsalmon\": \"255,160,122\",\n\t\t\t\t\t\"lightseagreen\": \"32,178,170\",\n\t\t\t\t\t\"lightskyblue\": \"135,206,250\",\n\t\t\t\t\t\"lightslategray\": \"119,136,153\",\n\t\t\t\t\t\"lightsteelblue\": \"176,196,222\",\n\t\t\t\t\t\"lightyellow\": \"255,255,224\",\n\t\t\t\t\t\"limegreen\": \"50,205,50\",\n\t\t\t\t\t\"lime\": \"0,255,0\",\n\t\t\t\t\t\"linen\": \"250,240,230\",\n\t\t\t\t\t\"magenta\": \"255,0,255\",\n\t\t\t\t\t\"maroon\": \"128,0,0\",\n\t\t\t\t\t\"mediumaquamarine\": \"102,205,170\",\n\t\t\t\t\t\"mediumblue\": \"0,0,205\",\n\t\t\t\t\t\"mediumorchid\": \"186,85,211\",\n\t\t\t\t\t\"mediumpurple\": \"147,112,219\",\n\t\t\t\t\t\"mediumseagreen\": \"60,179,113\",\n\t\t\t\t\t\"mediumslateblue\": \"123,104,238\",\n\t\t\t\t\t\"mediumspringgreen\": \"0,250,154\",\n\t\t\t\t\t\"mediumturquoise\": \"72,209,204\",\n\t\t\t\t\t\"mediumvioletred\": \"199,21,133\",\n\t\t\t\t\t\"midnightblue\": \"25,25,112\",\n\t\t\t\t\t\"mintcream\": \"245,255,250\",\n\t\t\t\t\t\"mistyrose\": \"255,228,225\",\n\t\t\t\t\t\"moccasin\": \"255,228,181\",\n\t\t\t\t\t\"navajowhite\": \"255,222,173\",\n\t\t\t\t\t\"navy\": \"0,0,128\",\n\t\t\t\t\t\"oldlace\": \"253,245,230\",\n\t\t\t\t\t\"olivedrab\": \"107,142,35\",\n\t\t\t\t\t\"olive\": \"128,128,0\",\n\t\t\t\t\t\"orangered\": \"255,69,0\",\n\t\t\t\t\t\"orange\": \"255,165,0\",\n\t\t\t\t\t\"orchid\": \"218,112,214\",\n\t\t\t\t\t\"palegoldenrod\": \"238,232,170\",\n\t\t\t\t\t\"palegreen\": \"152,251,152\",\n\t\t\t\t\t\"paleturquoise\": \"175,238,238\",\n\t\t\t\t\t\"palevioletred\": \"219,112,147\",\n\t\t\t\t\t\"papayawhip\": \"255,239,213\",\n\t\t\t\t\t\"peachpuff\": \"255,218,185\",\n\t\t\t\t\t\"peru\": \"205,133,63\",\n\t\t\t\t\t\"pink\": \"255,192,203\",\n\t\t\t\t\t\"plum\": \"221,160,221\",\n\t\t\t\t\t\"powderblue\": \"176,224,230\",\n\t\t\t\t\t\"purple\": \"128,0,128\",\n\t\t\t\t\t\"red\": \"255,0,0\",\n\t\t\t\t\t\"rosybrown\": \"188,143,143\",\n\t\t\t\t\t\"royalblue\": \"65,105,225\",\n\t\t\t\t\t\"saddlebrown\": \"139,69,19\",\n\t\t\t\t\t\"salmon\": \"250,128,114\",\n\t\t\t\t\t\"sandybrown\": \"244,164,96\",\n\t\t\t\t\t\"seagreen\": \"46,139,87\",\n\t\t\t\t\t\"seashell\": \"255,245,238\",\n\t\t\t\t\t\"sienna\": \"160,82,45\",\n\t\t\t\t\t\"silver\": \"192,192,192\",\n\t\t\t\t\t\"skyblue\": \"135,206,235\",\n\t\t\t\t\t\"slateblue\": \"106,90,205\",\n\t\t\t\t\t\"slategray\": \"112,128,144\",\n\t\t\t\t\t\"snow\": \"255,250,250\",\n\t\t\t\t\t\"springgreen\": \"0,255,127\",\n\t\t\t\t\t\"steelblue\": \"70,130,180\",\n\t\t\t\t\t\"tan\": \"210,180,140\",\n\t\t\t\t\t\"teal\": \"0,128,128\",\n\t\t\t\t\t\"thistle\": \"216,191,216\",\n\t\t\t\t\t\"tomato\": \"255,99,71\",\n\t\t\t\t\t\"turquoise\": \"64,224,208\",\n\t\t\t\t\t\"violet\": \"238,130,238\",\n\t\t\t\t\t\"wheat\": \"245,222,179\",\n\t\t\t\t\t\"whitesmoke\": \"245,245,245\",\n\t\t\t\t\t\"white\": \"255,255,255\",\n\t\t\t\t\t\"yellowgreen\": \"154,205,50\",\n\t\t\t\t\t\"yellow\": \"255,255,0\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t/************\n\t\t\t Hooks\n\t\t\t ************/\n\n\t\t\t/* Hooks allow a subproperty (e.g. \"boxShadowBlur\") of a compound-value CSS property\n\t\t\t (e.g. \"boxShadow: X Y Blur Spread Color\") to be animated as if it were a discrete property. */\n\t\t\t/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only\n\t\t\t tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */\n\t\t\tHooks: {\n\t\t\t\t/********************\n\t\t\t\t Registration\n\t\t\t\t ********************/\n\n\t\t\t\t/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */\n\t\t\t\t/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */\n\t\t\t\ttemplates: {\n\t\t\t\t\t\"textShadow\": [\"Color X Y Blur\", \"black 0px 0px 0px\"],\n\t\t\t\t\t\"boxShadow\": [\"Color X Y Blur Spread\", \"black 0px 0px 0px 0px\"],\n\t\t\t\t\t\"clip\": [\"Top Right Bottom Left\", \"0px 0px 0px 0px\"],\n\t\t\t\t\t\"backgroundPosition\": [\"X Y\", \"0% 0%\"],\n\t\t\t\t\t\"transformOrigin\": [\"X Y Z\", \"50% 50% 0px\"],\n\t\t\t\t\t\"perspectiveOrigin\": [\"X Y\", \"50% 50%\"]\n\t\t\t\t},\n\t\t\t\t/* A \"registered\" hook is one that has been converted from its template form into a live,\n\t\t\t\t tweenable property. It contains data to associate it with its root property. */\n\t\t\t\tregistered: {\n\t\t\t\t\t/* Note: A registered hook looks like this ==> textShadowBlur: [ \"textShadow\", 3 ],\n\t\t\t\t\t which consists of the subproperty's name, the associated root property's name,\n\t\t\t\t\t and the subproperty's position in the root's value. */\n\t\t\t\t},\n\t\t\t\t/* Convert the templates into individual hooks then append them to the registered object above. */\n\t\t\t\tregister: function() {\n\t\t\t\t\t/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are\n\t\t\t\t\t currently set to \"transparent\" default to their respective template below when color-animated,\n\t\t\t\t\t and white is typically a closer match to transparent than black is. An exception is made for text (\"color\"),\n\t\t\t\t\t which is almost always set closer to black than white. */\n\t\t\t\t\tfor (var i = 0; i < CSS.Lists.colors.length; i++) {\n\t\t\t\t\t\tvar rgbComponents = (CSS.Lists.colors[i] === \"color\") ? \"0 0 0 1\" : \"255 255 255 1\";\n\t\t\t\t\t\tCSS.Hooks.templates[CSS.Lists.colors[i]] = [\"Red Green Blue Alpha\", rgbComponents];\n\t\t\t\t\t}\n\n\t\t\t\t\tvar rootProperty,\n\t\t\t\t\t\t\thookTemplate,\n\t\t\t\t\t\t\thookNames;\n\n\t\t\t\t\t/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.\n\t\t\t\t\t Thus, we re-arrange the templates accordingly. */\n\t\t\t\t\tif (IE) {\n\t\t\t\t\t\tfor (rootProperty in CSS.Hooks.templates) {\n\t\t\t\t\t\t\tif (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {\n\t\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\thookTemplate = CSS.Hooks.templates[rootProperty];\n\t\t\t\t\t\t\thookNames = hookTemplate[0].split(\" \");\n\n\t\t\t\t\t\t\tvar defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);\n\n\t\t\t\t\t\t\tif (hookNames[0] === \"Color\") {\n\t\t\t\t\t\t\t\t/* Reposition both the hook's name and its default value to the end of their respective strings. */\n\t\t\t\t\t\t\t\thookNames.push(hookNames.shift());\n\t\t\t\t\t\t\t\tdefaultValues.push(defaultValues.shift());\n\n\t\t\t\t\t\t\t\t/* Replace the existing template for the hook's root property. */\n\t\t\t\t\t\t\t\tCSS.Hooks.templates[rootProperty] = [hookNames.join(\" \"), defaultValues.join(\" \")];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t/* Hook registration. */\n\t\t\t\t\tfor (rootProperty in CSS.Hooks.templates) {\n\t\t\t\t\t\tif (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t\thookTemplate = CSS.Hooks.templates[rootProperty];\n\t\t\t\t\t\thookNames = hookTemplate[0].split(\" \");\n\n\t\t\t\t\t\tfor (var j in hookNames) {\n\t\t\t\t\t\t\tif (!hookNames.hasOwnProperty(j)) {\n\t\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar fullHookName = rootProperty + hookNames[j],\n\t\t\t\t\t\t\t\t\thookPosition = j;\n\n\t\t\t\t\t\t\t/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)\n\t\t\t\t\t\t\t and the hook's position in its template's default value string. */\n\t\t\t\t\t\t\tCSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t/*****************************\n\t\t\t\t Injection and Extraction\n\t\t\t\t *****************************/\n\n\t\t\t\t/* Look up the root property associated with the hook (e.g. return \"textShadow\" for \"textShadowBlur\"). */\n\t\t\t\t/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */\n\t\t\t\tgetRoot: function(property) {\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[property];\n\n\t\t\t\t\tif (hookData) {\n\t\t\t\t\t\treturn hookData[0];\n\t\t\t\t\t} else {\n\t\t\t\t\t\t/* If there was no hook match, return the property name untouched. */\n\t\t\t\t\t\treturn property;\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tgetUnit: function(str, start) {\n\t\t\t\t\tvar unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || \"\";\n\n\t\t\t\t\tif (unit && _inArray(CSS.Lists.units, unit)) {\n\t\t\t\t\t\treturn unit;\n\t\t\t\t\t}\n\t\t\t\t\treturn \"\";\n\t\t\t\t},\n\t\t\t\tfixColors: function(str) {\n\t\t\t\t\treturn str.replace(/(rgba?\\(\\s*)?(\\b[a-z]+\\b)/g, function($0, $1, $2) {\n\t\t\t\t\t\tif (CSS.Lists.colorNames.hasOwnProperty($2)) {\n\t\t\t\t\t\t\treturn ($1 ? $1 : \"rgba(\") + CSS.Lists.colorNames[$2] + ($1 ? \"\" : \",1)\");\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn $1 + $2;\n\t\t\t\t\t});\n\t\t\t\t},\n\t\t\t\t/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that\n\t\t\t\t the targeted hook can be injected or extracted at its standard position. */\n\t\t\t\tcleanRootPropertyValue: function(rootProperty, rootPropertyValue) {\n\t\t\t\t\t/* If the rootPropertyValue is wrapped with \"rgb()\", \"clip()\", etc., remove the wrapping to normalize the value before manipulation. */\n\t\t\t\t\tif (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {\n\t\t\t\t\t\trootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];\n\t\t\t\t\t}\n\n\t\t\t\t\t/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),\n\t\t\t\t\t default to the root's default value as defined in CSS.Hooks.templates. */\n\t\t\t\t\t/* Note: CSS null-values include \"none\", \"auto\", and \"transparent\". They must be converted into their\n\t\t\t\t\t zero-values (e.g. textShadow: \"none\" ==> textShadow: \"0px 0px 0px black\") for hook manipulation to proceed. */\n\t\t\t\t\tif (CSS.Values.isCSSNullValue(rootPropertyValue)) {\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.templates[rootProperty][1];\n\t\t\t\t\t}\n\n\t\t\t\t\treturn rootPropertyValue;\n\t\t\t\t},\n\t\t\t\t/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */\n\t\t\t\textractValue: function(fullHookName, rootPropertyValue) {\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[fullHookName];\n\n\t\t\t\t\tif (hookData) {\n\t\t\t\t\t\tvar hookRoot = hookData[0],\n\t\t\t\t\t\t\t\thookPosition = hookData[1];\n\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);\n\n\t\t\t\t\t\t/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */\n\t\t\t\t\t\treturn rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];\n\t\t\t\t\t} else {\n\t\t\t\t\t\t/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */\n\t\t\t\t\t\treturn rootPropertyValue;\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t/* Inject the hook's value into its root property's value. This is used to piece back together the root property\n\t\t\t\t once Velocity has updated one of its individually hooked values through tweening. */\n\t\t\t\tinjectValue: function(fullHookName, hookValue, rootPropertyValue) {\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[fullHookName];\n\n\t\t\t\t\tif (hookData) {\n\t\t\t\t\t\tvar hookRoot = hookData[0],\n\t\t\t\t\t\t\t\thookPosition = hookData[1],\n\t\t\t\t\t\t\t\trootPropertyValueParts,\n\t\t\t\t\t\t\t\trootPropertyValueUpdated;\n\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);\n\n\t\t\t\t\t\t/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,\n\t\t\t\t\t\t then reconstruct the rootPropertyValue string. */\n\t\t\t\t\t\trootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);\n\t\t\t\t\t\trootPropertyValueParts[hookPosition] = hookValue;\n\t\t\t\t\t\trootPropertyValueUpdated = rootPropertyValueParts.join(\" \");\n\n\t\t\t\t\t\treturn rootPropertyValueUpdated;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */\n\t\t\t\t\t\treturn rootPropertyValue;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t/*******************\n\t\t\t Normalizations\n\t\t\t *******************/\n\n\t\t\t/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)\n\t\t\t and reformatting special properties (e.g. clip, rgba) to look like standard ones. */\n\t\t\tNormalizations: {\n\t\t\t\t/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),\n\t\t\t\t the targeted element (which may need to be queried), and the targeted property value. */\n\t\t\t\tregistered: {\n\t\t\t\t\tclip: function(type, element, propertyValue) {\n\t\t\t\t\t\tswitch (type) {\n\t\t\t\t\t\t\tcase \"name\":\n\t\t\t\t\t\t\t\treturn \"clip\";\n\t\t\t\t\t\t\t\t/* Clip needs to be unwrapped and stripped of its commas during extraction. */\n\t\t\t\t\t\t\tcase \"extract\":\n\t\t\t\t\t\t\t\tvar extracted;\n\n\t\t\t\t\t\t\t\t/* If Velocity also extracted this value, skip extraction. */\n\t\t\t\t\t\t\t\tif (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {\n\t\t\t\t\t\t\t\t\textracted = propertyValue;\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t/* Remove the \"rect()\" wrapper. */\n\t\t\t\t\t\t\t\t\textracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);\n\n\t\t\t\t\t\t\t\t\t/* Strip off commas. */\n\t\t\t\t\t\t\t\t\textracted = extracted ? extracted[1].replace(/,(\\s+)?/g, \" \") : propertyValue;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn extracted;\n\t\t\t\t\t\t\t\t/* Clip needs to be re-wrapped during injection. */\n\t\t\t\t\t\t\tcase \"inject\":\n\t\t\t\t\t\t\t\treturn \"rect(\" + propertyValue + \")\";\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\tblur: function(type, element, propertyValue) {\n\t\t\t\t\t\tswitch (type) {\n\t\t\t\t\t\t\tcase \"name\":\n\t\t\t\t\t\t\t\treturn Velocity.State.isFirefox ? \"filter\" : \"-webkit-filter\";\n\t\t\t\t\t\t\tcase \"extract\":\n\t\t\t\t\t\t\t\tvar extracted = parseFloat(propertyValue);\n\n\t\t\t\t\t\t\t\t/* If extracted is NaN, meaning the value isn't already extracted. */\n\t\t\t\t\t\t\t\tif (!(extracted || extracted === 0)) {\n\t\t\t\t\t\t\t\t\tvar blurComponent = propertyValue.toString().match(/blur\\(([0-9]+[A-z]+)\\)/i);\n\n\t\t\t\t\t\t\t\t\t/* If the filter string had a blur component, return just the blur value and unit type. */\n\t\t\t\t\t\t\t\t\tif (blurComponent) {\n\t\t\t\t\t\t\t\t\t\textracted = blurComponent[1];\n\t\t\t\t\t\t\t\t\t\t/* If the component doesn't exist, default blur to 0. */\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\textracted = 0;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn extracted;\n\t\t\t\t\t\t\t\t/* Blur needs to be re-wrapped during injection. */\n\t\t\t\t\t\t\tcase \"inject\":\n\t\t\t\t\t\t\t\t/* For the blur effect to be fully de-applied, it needs to be set to \"none\" instead of 0. */\n\t\t\t\t\t\t\t\tif (!parseFloat(propertyValue)) {\n\t\t\t\t\t\t\t\t\treturn \"none\";\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\treturn \"blur(\" + propertyValue + \")\";\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */\n\t\t\t\t\topacity: function(type, element, propertyValue) {\n\t\t\t\t\t\tif (IE <= 8) {\n\t\t\t\t\t\t\tswitch (type) {\n\t\t\t\t\t\t\t\tcase \"name\":\n\t\t\t\t\t\t\t\t\treturn \"filter\";\n\t\t\t\t\t\t\t\tcase \"extract\":\n\t\t\t\t\t\t\t\t\t/* <=IE8 return a \"filter\" value of \"alpha(opacity=\\d{1,3})\".\n\t\t\t\t\t\t\t\t\t Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */\n\t\t\t\t\t\t\t\t\tvar extracted = propertyValue.toString().match(/alpha\\(opacity=(.*)\\)/i);\n\n\t\t\t\t\t\t\t\t\tif (extracted) {\n\t\t\t\t\t\t\t\t\t\t/* Convert to decimal value. */\n\t\t\t\t\t\t\t\t\t\tpropertyValue = extracted[1] / 100;\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */\n\t\t\t\t\t\t\t\t\t\tpropertyValue = 1;\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\treturn propertyValue;\n\t\t\t\t\t\t\t\tcase \"inject\":\n\t\t\t\t\t\t\t\t\t/* Opacified elements are required to have their zoom property set to a non-zero value. */\n\t\t\t\t\t\t\t\t\telement.style.zoom = 1;\n\n\t\t\t\t\t\t\t\t\t/* Setting the filter property on elements with certain font property combinations can result in a\n\t\t\t\t\t\t\t\t\t highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the\n\t\t\t\t\t\t\t\t\t value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */\n\t\t\t\t\t\t\t\t\tif (parseFloat(propertyValue) >= 1) {\n\t\t\t\t\t\t\t\t\t\treturn \"\";\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */\n\t\t\t\t\t\t\t\t\t\treturn \"alpha(opacity=\" + parseInt(parseFloat(propertyValue) * 100, 10) + \")\";\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t/* With all other browsers, normalization is not required; return the same values that were passed in. */\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tswitch (type) {\n\t\t\t\t\t\t\t\tcase \"name\":\n\t\t\t\t\t\t\t\t\treturn \"opacity\";\n\t\t\t\t\t\t\t\tcase \"extract\":\n\t\t\t\t\t\t\t\t\treturn propertyValue;\n\t\t\t\t\t\t\t\tcase \"inject\":\n\t\t\t\t\t\t\t\t\treturn propertyValue;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t/*****************************\n\t\t\t\t Batched Registrations\n\t\t\t\t *****************************/\n\n\t\t\t\t/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */\n\t\t\t\tregister: function() {\n\n\t\t\t\t\t/*****************\n\t\t\t\t\t Transforms\n\t\t\t\t\t *****************/\n\n\t\t\t\t\t/* Transforms are the subproperties contained by the CSS \"transform\" property. Transforms must undergo normalization\n\t\t\t\t\t so that they can be referenced in a properties map by their individual names. */\n\t\t\t\t\t/* Note: When transforms are \"set\", they are actually assigned to a per-element transformCache. When all transform\n\t\t\t\t\t setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.\n\t\t\t\t\t Transform setting is batched in this way to improve performance: the transform style only needs to be updated\n\t\t\t\t\t once when multiple transform subproperties are being animated simultaneously. */\n\t\t\t\t\t/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported\n\t\t\t\t\t transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values\n\t\t\t\t\t from being normalized for these browsers so that tweening skips these properties altogether\n\t\t\t\t\t (since it will ignore them as being unsupported by the browser.) */\n\t\t\t\t\tif ((!IE || IE > 9) && !Velocity.State.isGingerbread) {\n\t\t\t\t\t\t/* Note: Since the standalone CSS \"perspective\" property and the CSS transform \"perspective\" subproperty\n\t\t\t\t\t\t share the same name, the latter is given a unique token within Velocity: \"transformPerspective\". */\n\t\t\t\t\t\tCSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);\n\t\t\t\t\t}\n\n\t\t\t\t\tfor (var i = 0; i < CSS.Lists.transformsBase.length; i++) {\n\t\t\t\t\t\t/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is\n\t\t\t\t\t\t paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */\n\t\t\t\t\t\t(function() {\n\t\t\t\t\t\t\tvar transformName = CSS.Lists.transformsBase[i];\n\n\t\t\t\t\t\t\tCSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {\n\t\t\t\t\t\t\t\tswitch (type) {\n\t\t\t\t\t\t\t\t\t/* The normalized property name is the parent \"transform\" property -- the property that is actually set in CSS. */\n\t\t\t\t\t\t\t\t\tcase \"name\":\n\t\t\t\t\t\t\t\t\t\treturn \"transform\";\n\t\t\t\t\t\t\t\t\t\t/* Transform values are cached onto a per-element transformCache object. */\n\t\t\t\t\t\t\t\t\tcase \"extract\":\n\t\t\t\t\t\t\t\t\t\t/* If this transform has yet to be assigned a value, return its null value. */\n\t\t\t\t\t\t\t\t\t\tif (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {\n\t\t\t\t\t\t\t\t\t\t\t/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */\n\t\t\t\t\t\t\t\t\t\t\treturn /^scale/i.test(transformName) ? 1 : 0;\n\t\t\t\t\t\t\t\t\t\t\t/* When transform values are set, they are wrapped in parentheses as per the CSS spec.\n\t\t\t\t\t\t\t\t\t\t\t Thus, when extracting their values (for tween calculations), we strip off the parentheses. */\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\treturn Data(element).transformCache[transformName].replace(/[()]/g, \"\");\n\t\t\t\t\t\t\t\t\tcase \"inject\":\n\t\t\t\t\t\t\t\t\t\tvar invalid = false;\n\n\t\t\t\t\t\t\t\t\t\t/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.\n\t\t\t\t\t\t\t\t\t\t Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */\n\t\t\t\t\t\t\t\t\t\t/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */\n\t\t\t\t\t\t\t\t\t\tswitch (transformName.substr(0, transformName.length - 1)) {\n\t\t\t\t\t\t\t\t\t\t\t/* Whitelist unit types for each transform. */\n\t\t\t\t\t\t\t\t\t\t\tcase \"translate\":\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(%|px|em|rem|vw|vh|\\d)$/i.test(propertyValue);\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t\t\t/* Since an axis-free \"scale\" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */\n\t\t\t\t\t\t\t\t\t\t\tcase \"scal\":\n\t\t\t\t\t\t\t\t\t\t\tcase \"scale\":\n\t\t\t\t\t\t\t\t\t\t\t\t/* Chrome on Android has a bug in which scaled elements blur if their initial scale\n\t\t\t\t\t\t\t\t\t\t\t\t value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property\n\t\t\t\t\t\t\t\t\t\t\t\t and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */\n\t\t\t\t\t\t\t\t\t\t\t\tif (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {\n\t\t\t\t\t\t\t\t\t\t\t\t\tpropertyValue = 1;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(\\d)$/i.test(propertyValue);\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t\tcase \"skew\":\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(deg|\\d)$/i.test(propertyValue);\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t\tcase \"rotate\":\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(deg|\\d)$/i.test(propertyValue);\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\tif (!invalid) {\n\t\t\t\t\t\t\t\t\t\t\t/* As per the CSS spec, wrap the value in parentheses. */\n\t\t\t\t\t\t\t\t\t\t\tData(element).transformCache[transformName] = \"(\" + propertyValue + \")\";\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */\n\t\t\t\t\t\t\t\t\t\treturn Data(element).transformCache[transformName];\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t})();\n\t\t\t\t\t}\n\n\t\t\t\t\t/*************\n\t\t\t\t\t Colors\n\t\t\t\t\t *************/\n\n\t\t\t\t\t/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.\n\t\t\t\t\t Accordingly, color values must be normalized (e.g. \"#ff0000\", \"red\", and \"rgb(255, 0, 0)\" ==> \"255 0 0 1\") so that their components can be injected/extracted by CSS.Hooks logic. */\n\t\t\t\t\tfor (var j = 0; j < CSS.Lists.colors.length; j++) {\n\t\t\t\t\t\t/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.\n\t\t\t\t\t\t (Otherwise, all functions would take the final for loop's colorName.) */\n\t\t\t\t\t\t(function() {\n\t\t\t\t\t\t\tvar colorName = CSS.Lists.colors[j];\n\n\t\t\t\t\t\t\t/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */\n\t\t\t\t\t\t\tCSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {\n\t\t\t\t\t\t\t\tswitch (type) {\n\t\t\t\t\t\t\t\t\tcase \"name\":\n\t\t\t\t\t\t\t\t\t\treturn colorName;\n\t\t\t\t\t\t\t\t\t\t/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */\n\t\t\t\t\t\t\t\t\tcase \"extract\":\n\t\t\t\t\t\t\t\t\t\tvar extracted;\n\n\t\t\t\t\t\t\t\t\t\t/* If the color is already in its hookable form (e.g. \"255 255 255 1\") due to having been previously extracted, skip extraction. */\n\t\t\t\t\t\t\t\t\t\tif (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {\n\t\t\t\t\t\t\t\t\t\t\textracted = propertyValue;\n\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\tvar converted,\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolorNames = {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tblack: \"rgb(0, 0, 0)\",\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tblue: \"rgb(0, 0, 255)\",\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tgray: \"rgb(128, 128, 128)\",\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tgreen: \"rgb(0, 128, 0)\",\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tred: \"rgb(255, 0, 0)\",\n\t\t\t\t\t\t\t\t\t\t\t\t\t\twhite: \"rgb(255, 255, 255)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\t\t\t\t\t/* Convert color names to rgb. */\n\t\t\t\t\t\t\t\t\t\t\tif (/^[A-z]+$/i.test(propertyValue)) {\n\t\t\t\t\t\t\t\t\t\t\t\tif (colorNames[propertyValue] !== undefined) {\n\t\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames[propertyValue];\n\t\t\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\t\t\t/* If an unmatched color name is provided, default to black. */\n\t\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames.black;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t/* Convert hex values to rgb. */\n\t\t\t\t\t\t\t\t\t\t\t} else if (CSS.RegEx.isHex.test(propertyValue)) {\n\t\t\t\t\t\t\t\t\t\t\t\tconverted = \"rgb(\" + CSS.Values.hexToRgb(propertyValue).join(\" \") + \")\";\n\t\t\t\t\t\t\t\t\t\t\t\t/* If the provided color doesn't match any of the accepted color formats, default to black. */\n\t\t\t\t\t\t\t\t\t\t\t} else if (!(/^rgba?\\(/i.test(propertyValue))) {\n\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames.black;\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t/* Remove the surrounding \"rgb/rgba()\" string then replace commas with spaces and strip\n\t\t\t\t\t\t\t\t\t\t\t repeated spaces (in case the value included spaces to begin with). */\n\t\t\t\t\t\t\t\t\t\t\textracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\\s+)?/g, \" \");\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */\n\t\t\t\t\t\t\t\t\t\tif ((!IE || IE > 8) && extracted.split(\" \").length === 3) {\n\t\t\t\t\t\t\t\t\t\t\textracted += \" 1\";\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\treturn extracted;\n\t\t\t\t\t\t\t\t\tcase \"inject\":\n\t\t\t\t\t\t\t\t\t\t/* If we have a pattern then it might already have the right values */\n\t\t\t\t\t\t\t\t\t\tif (/^rgb/.test(propertyValue)) {\n\t\t\t\t\t\t\t\t\t\t\treturn propertyValue;\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t/* If this is IE<=8 and an alpha component exists, strip it off. */\n\t\t\t\t\t\t\t\t\t\tif (IE <= 8) {\n\t\t\t\t\t\t\t\t\t\t\tif (propertyValue.split(\" \").length === 4) {\n\t\t\t\t\t\t\t\t\t\t\t\tpropertyValue = propertyValue.split(/\\s+/).slice(0, 3).join(\" \");\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */\n\t\t\t\t\t\t\t\t\t\t} else if (propertyValue.split(\" \").length === 3) {\n\t\t\t\t\t\t\t\t\t\t\tpropertyValue += \" 1\";\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t/* Re-insert the browser-appropriate wrapper(\"rgb/rgba()\"), insert commas, and strip off decimal units\n\t\t\t\t\t\t\t\t\t\t on all values but the fourth (R, G, and B only accept whole numbers). */\n\t\t\t\t\t\t\t\t\t\treturn (IE <= 8 ? \"rgb\" : \"rgba\") + \"(\" + propertyValue.replace(/\\s+/g, \",\").replace(/\\.(\\d)+(?=,)/g, \"\") + \")\";\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t})();\n\t\t\t\t\t}\n\n\t\t\t\t\t/**************\n\t\t\t\t\t Dimensions\n\t\t\t\t\t **************/\n\t\t\t\t\tfunction augmentDimension(name, element, wantInner) {\n\t\t\t\t\t\tvar isBorderBox = CSS.getPropertyValue(element, \"boxSizing\").toString().toLowerCase() === \"border-box\";\n\n\t\t\t\t\t\tif (isBorderBox === (wantInner || false)) {\n\t\t\t\t\t\t\t/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */\n\t\t\t\t\t\t\tvar i,\n\t\t\t\t\t\t\t\t\tvalue,\n\t\t\t\t\t\t\t\t\taugment = 0,\n\t\t\t\t\t\t\t\t\tsides = name === \"width\" ? [\"Left\", \"Right\"] : [\"Top\", \"Bottom\"],\n\t\t\t\t\t\t\t\t\tfields = [\"padding\" + sides[0], \"padding\" + sides[1], \"border\" + sides[0] + \"Width\", \"border\" + sides[1] + \"Width\"];\n\n\t\t\t\t\t\t\tfor (i = 0; i < fields.length; i++) {\n\t\t\t\t\t\t\t\tvalue = parseFloat(CSS.getPropertyValue(element, fields[i]));\n\t\t\t\t\t\t\t\tif (!isNaN(value)) {\n\t\t\t\t\t\t\t\t\taugment += value;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\treturn wantInner ? -augment : augment;\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn 0;\n\t\t\t\t\t}\n\t\t\t\t\tfunction getDimension(name, wantInner) {\n\t\t\t\t\t\treturn function(type, element, propertyValue) {\n\t\t\t\t\t\t\tswitch (type) {\n\t\t\t\t\t\t\t\tcase \"name\":\n\t\t\t\t\t\t\t\t\treturn name;\n\t\t\t\t\t\t\t\tcase \"extract\":\n\t\t\t\t\t\t\t\t\treturn parseFloat(propertyValue) + augmentDimension(name, element, wantInner);\n\t\t\t\t\t\t\t\tcase \"inject\":\n\t\t\t\t\t\t\t\t\treturn (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + \"px\";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\t\t\t\t\tCSS.Normalizations.registered.innerWidth = getDimension(\"width\", true);\n\t\t\t\t\tCSS.Normalizations.registered.innerHeight = getDimension(\"height\", true);\n\t\t\t\t\tCSS.Normalizations.registered.outerWidth = getDimension(\"width\");\n\t\t\t\t\tCSS.Normalizations.registered.outerHeight = getDimension(\"height\");\n\t\t\t\t}\n\t\t\t},\n\t\t\t/************************\n\t\t\t CSS Property Names\n\t\t\t ************************/\n\n\t\t\tNames: {\n\t\t\t\t/* Camelcase a property name into its JavaScript notation (e.g. \"background-color\" ==> \"backgroundColor\").\n\t\t\t\t Camelcasing is used to normalize property names between and across calls. */\n\t\t\t\tcamelCase: function(property) {\n\t\t\t\t\treturn property.replace(/-(\\w)/g, function(match, subMatch) {\n\t\t\t\t\t\treturn subMatch.toUpperCase();\n\t\t\t\t\t});\n\t\t\t\t},\n\t\t\t\t/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */\n\t\t\t\tSVGAttribute: function(property) {\n\t\t\t\t\tvar SVGAttributes = \"width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2\";\n\n\t\t\t\t\t/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */\n\t\t\t\t\tif (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {\n\t\t\t\t\t\tSVGAttributes += \"|transform\";\n\t\t\t\t\t}\n\n\t\t\t\t\treturn new RegExp(\"^(\" + SVGAttributes + \")$\", \"i\").test(property);\n\t\t\t\t},\n\t\t\t\t/* Determine whether a property should be set with a vendor prefix. */\n\t\t\t\t/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.\n\t\t\t\t If the property is not at all supported by the browser, return a false flag. */\n\t\t\t\tprefixCheck: function(property) {\n\t\t\t\t\t/* If this property has already been checked, return the cached value. */\n\t\t\t\t\tif (Velocity.State.prefixMatches[property]) {\n\t\t\t\t\t\treturn [Velocity.State.prefixMatches[property], true];\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar vendors = [\"\", \"Webkit\", \"Moz\", \"ms\", \"O\"];\n\n\t\t\t\t\t\tfor (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {\n\t\t\t\t\t\t\tvar propertyPrefixed;\n\n\t\t\t\t\t\t\tif (i === 0) {\n\t\t\t\t\t\t\t\tpropertyPrefixed = property;\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */\n\t\t\t\t\t\t\t\tpropertyPrefixed = vendors[i] + property.replace(/^\\w/, function(match) {\n\t\t\t\t\t\t\t\t\treturn match.toUpperCase();\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* Check if the browser supports this property as prefixed. */\n\t\t\t\t\t\t\tif (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {\n\t\t\t\t\t\t\t\t/* Cache the match. */\n\t\t\t\t\t\t\t\tVelocity.State.prefixMatches[property] = propertyPrefixed;\n\n\t\t\t\t\t\t\t\treturn [propertyPrefixed, true];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */\n\t\t\t\t\t\treturn [property, false];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t/************************\n\t\t\t CSS Property Values\n\t\t\t ************************/\n\n\t\t\tValues: {\n\t\t\t\t/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */\n\t\t\t\thexToRgb: function(hex) {\n\t\t\t\t\tvar shortformRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,\n\t\t\t\t\t\t\tlongformRegex = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i,\n\t\t\t\t\t\t\trgbParts;\n\n\t\t\t\t\thex = hex.replace(shortformRegex, function(m, r, g, b) {\n\t\t\t\t\t\treturn r + r + g + g + b + b;\n\t\t\t\t\t});\n\n\t\t\t\t\trgbParts = longformRegex.exec(hex);\n\n\t\t\t\t\treturn rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];\n\t\t\t\t},\n\t\t\t\tisCSSNullValue: function(value) {\n\t\t\t\t\t/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.\n\t\t\t\t\t Thus, we check for both falsiness and these special strings. */\n\t\t\t\t\t/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook\n\t\t\t\t\t templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */\n\t\t\t\t\t/* Note: Chrome returns \"rgba(0, 0, 0, 0)\" for an undefined color whereas IE returns \"transparent\". */\n\t\t\t\t\treturn (!value || /^(none|auto|transparent|(rgba\\(0, ?0, ?0, ?0\\)))$/i.test(value));\n\t\t\t\t},\n\t\t\t\t/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */\n\t\t\t\tgetUnitType: function(property) {\n\t\t\t\t\tif (/^(rotate|skew)/i.test(property)) {\n\t\t\t\t\t\treturn \"deg\";\n\t\t\t\t\t} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {\n\t\t\t\t\t\t/* The above properties are unitless. */\n\t\t\t\t\t\treturn \"\";\n\t\t\t\t\t} else {\n\t\t\t\t\t\t/* Default to px for all other properties. */\n\t\t\t\t\t\treturn \"px\";\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t/* HTML elements default to an associated display type when they're not set to display:none. */\n\t\t\t\t/* Note: This function is used for correctly setting the non-\"none\" display value in certain Velocity redirects, such as fadeIn/Out. */\n\t\t\t\tgetDisplayType: function(element) {\n\t\t\t\t\tvar tagName = element && element.tagName.toString().toLowerCase();\n\n\t\t\t\t\tif (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {\n\t\t\t\t\t\treturn \"inline\";\n\t\t\t\t\t} else if (/^(li)$/i.test(tagName)) {\n\t\t\t\t\t\treturn \"list-item\";\n\t\t\t\t\t} else if (/^(tr)$/i.test(tagName)) {\n\t\t\t\t\t\treturn \"table-row\";\n\t\t\t\t\t} else if (/^(table)$/i.test(tagName)) {\n\t\t\t\t\t\treturn \"table\";\n\t\t\t\t\t} else if (/^(tbody)$/i.test(tagName)) {\n\t\t\t\t\t\treturn \"table-row-group\";\n\t\t\t\t\t\t/* Default to \"block\" when no match is found. */\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn \"block\";\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t/* The class add/remove functions are used to temporarily apply a \"velocity-animating\" class to elements while they're animating. */\n\t\t\t\taddClass: function(element, className) {\n\t\t\t\t\tif (element) {\n\t\t\t\t\t\tif (element.classList) {\n\t\t\t\t\t\t\telement.classList.add(className);\n\t\t\t\t\t\t} else if (Type.isString(element.className)) {\n\t\t\t\t\t\t\t// Element.className is around 15% faster then set/getAttribute\n\t\t\t\t\t\t\telement.className += (element.className.length ? \" \" : \"\") + className;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it\n\t\t\t\t\t\t\tvar currentClass = element.getAttribute(IE <= 7 ? \"className\" : \"class\") || \"\";\n\n\t\t\t\t\t\t\telement.setAttribute(\"class\", currentClass + (currentClass ? \" \" : \"\") + className);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tremoveClass: function(element, className) {\n\t\t\t\t\tif (element) {\n\t\t\t\t\t\tif (element.classList) {\n\t\t\t\t\t\t\telement.classList.remove(className);\n\t\t\t\t\t\t} else if (Type.isString(element.className)) {\n\t\t\t\t\t\t\t// Element.className is around 15% faster then set/getAttribute\n\t\t\t\t\t\t\t// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?\n\t\t\t\t\t\t\telement.className = element.className.toString().replace(new RegExp(\"(^|\\\\s)\" + className.split(\" \").join(\"|\") + \"(\\\\s|$)\", \"gi\"), \" \");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it\n\t\t\t\t\t\t\tvar currentClass = element.getAttribute(IE <= 7 ? \"className\" : \"class\") || \"\";\n\n\t\t\t\t\t\t\telement.setAttribute(\"class\", currentClass.replace(new RegExp(\"(^|\\s)\" + className.split(\" \").join(\"|\") + \"(\\s|$)\", \"gi\"), \" \"));\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t/****************************\n\t\t\t Style Getting & Setting\n\t\t\t ****************************/\n\n\t\t\t/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */\n\t\t\tgetPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {\n\t\t\t\t/* Get an element's computed property value. */\n\t\t\t\t/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's\n\t\t\t\t style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's\n\t\t\t\t *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */\n\t\t\t\tfunction computePropertyValue(element, property) {\n\t\t\t\t\t/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an\n\t\t\t\t\t element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate\n\t\t\t\t\t offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.\n\t\t\t\t\t We subtract border and padding to get the sum of interior + scrollbar. */\n\t\t\t\t\tvar computedValue = 0;\n\n\t\t\t\t\t/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array\n\t\t\t\t\t of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the\n\t\t\t\t\t codebase for a dying browser. The performance repercussions of using jQuery here are minimal since\n\t\t\t\t\t Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */\n\t\t\t\t\tif (IE <= 8) {\n\t\t\t\t\t\tcomputedValue = $.css(element, property); /* GET */\n\t\t\t\t\t\t/* All other browsers support getComputedStyle. The returned live object reference is cached onto its\n\t\t\t\t\t\t associated element so that it does not need to be refetched upon every GET. */\n\t\t\t\t\t} else {\n\t\t\t\t\t\t/* Browsers do not return height and width values for elements that are set to display:\"none\". Thus, we temporarily\n\t\t\t\t\t\t toggle display to the element type's default value. */\n\t\t\t\t\t\tvar toggleDisplay = false;\n\n\t\t\t\t\t\tif (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, \"display\") === 0) {\n\t\t\t\t\t\t\ttoggleDisplay = true;\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", CSS.Values.getDisplayType(element));\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tvar revertDisplay = function() {\n\t\t\t\t\t\t\tif (toggleDisplay) {\n\t\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", \"none\");\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tif (!forceStyleLookup) {\n\t\t\t\t\t\t\tif (property === \"height\" && CSS.getPropertyValue(element, \"boxSizing\").toString().toLowerCase() !== \"border-box\") {\n\t\t\t\t\t\t\t\tvar contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, \"borderTopWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"borderBottomWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingTop\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingBottom\")) || 0);\n\t\t\t\t\t\t\t\trevertDisplay();\n\n\t\t\t\t\t\t\t\treturn contentBoxHeight;\n\t\t\t\t\t\t\t} else if (property === \"width\" && CSS.getPropertyValue(element, \"boxSizing\").toString().toLowerCase() !== \"border-box\") {\n\t\t\t\t\t\t\t\tvar contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, \"borderLeftWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"borderRightWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingLeft\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingRight\")) || 0);\n\t\t\t\t\t\t\t\trevertDisplay();\n\n\t\t\t\t\t\t\t\treturn contentBoxWidth;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tvar computedStyle;\n\n\t\t\t\t\t\t/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf\n\t\t\t\t\t\t of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */\n\t\t\t\t\t\tif (Data(element) === undefined) {\n\t\t\t\t\t\t\tcomputedStyle = window.getComputedStyle(element, null); /* GET */\n\t\t\t\t\t\t\t/* If the computedStyle object has yet to be cached, do so now. */\n\t\t\t\t\t\t} else if (!Data(element).computedStyle) {\n\t\t\t\t\t\t\tcomputedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */\n\t\t\t\t\t\t\t/* If computedStyle is cached, use it. */\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tcomputedStyle = Data(element).computedStyle;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.\n\t\t\t\t\t\t Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.\n\t\t\t\t\t\t So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */\n\t\t\t\t\t\tif (property === \"borderColor\") {\n\t\t\t\t\t\t\tproperty = \"borderTopColor\";\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* IE9 has a bug in which the \"filter\" property must be accessed from computedStyle using the getPropertyValue method\n\t\t\t\t\t\t instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */\n\t\t\t\t\t\tif (IE === 9 && property === \"filter\") {\n\t\t\t\t\t\t\tcomputedValue = computedStyle.getPropertyValue(property); /* GET */\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tcomputedValue = computedStyle[property];\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Fall back to the property's style value (if defined) when computedValue returns nothing,\n\t\t\t\t\t\t which can happen when the element hasn't been painted. */\n\t\t\t\t\t\tif (computedValue === \"\" || computedValue === null) {\n\t\t\t\t\t\t\tcomputedValue = element.style[property];\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\trevertDisplay();\n\t\t\t\t\t}\n\n\t\t\t\t\t/* For top, right, bottom, and left (TRBL) values that are set to \"auto\" on elements of \"fixed\" or \"absolute\" position,\n\t\t\t\t\t defer to jQuery for converting \"auto\" to a numeric value. (For elements with a \"static\" or \"relative\" position, \"auto\" has the same\n\t\t\t\t\t effect as being set to 0, so no conversion is necessary.) */\n\t\t\t\t\t/* An example of why numeric conversion is necessary: When an element with \"position:absolute\" has an untouched \"left\"\n\t\t\t\t\t property, which reverts to \"auto\", left's value is 0 relative to its parent element, but is often non-zero relative\n\t\t\t\t\t to its *containing* (not parent) element, which is the nearest \"position:relative\" ancestor or the viewport (and always the viewport in the case of \"position:fixed\"). */\n\t\t\t\t\tif (computedValue === \"auto\" && /^(top|right|bottom|left)$/i.test(property)) {\n\t\t\t\t\t\tvar position = computePropertyValue(element, \"position\"); /* GET */\n\n\t\t\t\t\t\t/* For absolute positioning, jQuery's $.position() only returns values for top and left;\n\t\t\t\t\t\t right and bottom will have their \"auto\" value reverted to 0. */\n\t\t\t\t\t\t/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().\n\t\t\t\t\t\t Not a big deal since we're currently in a GET batch anyway. */\n\t\t\t\t\t\tif (position === \"fixed\" || (position === \"absolute\" && /top|left/i.test(property))) {\n\t\t\t\t\t\t\t/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */\n\t\t\t\t\t\t\tcomputedValue = $(element).position()[property] + \"px\"; /* GET */\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\treturn computedValue;\n\t\t\t\t}\n\n\t\t\t\tvar propertyValue;\n\n\t\t\t\t/* If this is a hooked property (e.g. \"clipLeft\" instead of the root property of \"clip\"),\n\t\t\t\t extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */\n\t\t\t\tif (CSS.Hooks.registered[property]) {\n\t\t\t\t\tvar hook = property,\n\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(hook);\n\n\t\t\t\t\t/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),\n\t\t\t\t\t query the DOM for the root property's value. */\n\t\t\t\t\tif (rootPropertyValue === undefined) {\n\t\t\t\t\t\t/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */\n\t\t\t\t\t\trootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */\n\t\t\t\t\t}\n\n\t\t\t\t\t/* If this root has a normalization registered, peform the associated normalization extraction. */\n\t\t\t\t\tif (CSS.Normalizations.registered[hookRoot]) {\n\t\t\t\t\t\trootPropertyValue = CSS.Normalizations.registered[hookRoot](\"extract\", element, rootPropertyValue);\n\t\t\t\t\t}\n\n\t\t\t\t\t/* Extract the hook's value. */\n\t\t\t\t\tpropertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);\n\n\t\t\t\t\t/* If this is a normalized property (e.g. \"opacity\" becomes \"filter\" in <=IE8) or \"translateX\" becomes \"transform\"),\n\t\t\t\t\t normalize the property's name and value, and handle the special case of transforms. */\n\t\t\t\t\t/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly\n\t\t\t\t\t numerical and therefore do not require normalization extraction. */\n\t\t\t\t} else if (CSS.Normalizations.registered[property]) {\n\t\t\t\t\tvar normalizedPropertyName,\n\t\t\t\t\t\t\tnormalizedPropertyValue;\n\n\t\t\t\t\tnormalizedPropertyName = CSS.Normalizations.registered[property](\"name\", element);\n\n\t\t\t\t\t/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.\n\t\t\t\t\t At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.\n\t\t\t\t\t This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;\n\t\t\t\t\t thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */\n\t\t\t\t\tif (normalizedPropertyName !== \"transform\") {\n\t\t\t\t\t\tnormalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */\n\n\t\t\t\t\t\t/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */\n\t\t\t\t\t\tif (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {\n\t\t\t\t\t\t\tnormalizedPropertyValue = CSS.Hooks.templates[property][1];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tpropertyValue = CSS.Normalizations.registered[property](\"extract\", element, normalizedPropertyValue);\n\t\t\t\t}\n\n\t\t\t\t/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */\n\t\t\t\tif (!/^[\\d-]/.test(propertyValue)) {\n\t\t\t\t\t/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via\n\t\t\t\t\t their HTML attribute values instead of their CSS style values. */\n\t\t\t\t\tvar data = Data(element);\n\n\t\t\t\t\tif (data && data.isSVG && CSS.Names.SVGAttribute(property)) {\n\t\t\t\t\t\t/* Since the height/width attribute values must be set manually, they don't reflect computed values.\n\t\t\t\t\t\t Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */\n\t\t\t\t\t\tif (/^(height|width)$/i.test(property)) {\n\t\t\t\t\t\t\t/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */\n\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\tpropertyValue = element.getBBox()[property];\n\t\t\t\t\t\t\t} catch (error) {\n\t\t\t\t\t\t\t\tpropertyValue = 0;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t/* Otherwise, access the attribute value directly. */\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tpropertyValue = element.getAttribute(property);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tpropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),\n\t\t\t\t convert CSS null-values to an integer of value 0. */\n\t\t\t\tif (CSS.Values.isCSSNullValue(propertyValue)) {\n\t\t\t\t\tpropertyValue = 0;\n\t\t\t\t}\n\n\t\t\t\tif (Velocity.debug >= 2) {\n\t\t\t\t\tconsole.log(\"Get \" + property + \": \" + propertyValue);\n\t\t\t\t}\n\n\t\t\t\treturn propertyValue;\n\t\t\t},\n\t\t\t/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */\n\t\t\tsetPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {\n\t\t\t\tvar propertyName = property;\n\n\t\t\t\t/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */\n\t\t\t\tif (property === \"scroll\") {\n\t\t\t\t\t/* If a container option is present, scroll the container instead of the browser window. */\n\t\t\t\t\tif (scrollData.container) {\n\t\t\t\t\t\tscrollData.container[\"scroll\" + scrollData.direction] = propertyValue;\n\t\t\t\t\t\t/* Otherwise, Velocity defaults to scrolling the browser window. */\n\t\t\t\t\t} else {\n\t\t\t\t\t\tif (scrollData.direction === \"Left\") {\n\t\t\t\t\t\t\twindow.scrollTo(propertyValue, scrollData.alternateValue);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\twindow.scrollTo(scrollData.alternateValue, propertyValue);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\t/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().\n\t\t\t\t\t Thus, for now, we merely cache transforms being SET. */\n\t\t\t\t\tif (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property](\"name\", element) === \"transform\") {\n\t\t\t\t\t\t/* Perform a normalization injection. */\n\t\t\t\t\t\t/* Note: The normalization logic handles the transformCache updating. */\n\t\t\t\t\t\tCSS.Normalizations.registered[property](\"inject\", element, propertyValue);\n\n\t\t\t\t\t\tpropertyName = \"transform\";\n\t\t\t\t\t\tpropertyValue = Data(element).transformCache[property];\n\t\t\t\t\t} else {\n\t\t\t\t\t\t/* Inject hooks. */\n\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\n\t\t\t\t\t\t\tvar hookName = property,\n\t\t\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(property);\n\n\t\t\t\t\t\t\t/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */\n\t\t\t\t\t\t\trootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */\n\n\t\t\t\t\t\t\tpropertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);\n\t\t\t\t\t\t\tproperty = hookRoot;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Normalize names and values. */\n\t\t\t\t\t\tif (CSS.Normalizations.registered[property]) {\n\t\t\t\t\t\t\tpropertyValue = CSS.Normalizations.registered[property](\"inject\", element, propertyValue);\n\t\t\t\t\t\t\tproperty = CSS.Normalizations.registered[property](\"name\", element);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Assign the appropriate vendor prefix before performing an official style update. */\n\t\t\t\t\t\tpropertyName = CSS.Names.prefixCheck(property)[0];\n\n\t\t\t\t\t\t/* A try/catch is used for IE<=8, which throws an error when \"invalid\" CSS values are set, e.g. a negative width.\n\t\t\t\t\t\t Try/catch is avoided for other browsers since it incurs a performance overhead. */\n\t\t\t\t\t\tif (IE <= 8) {\n\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\telement.style[propertyName] = propertyValue;\n\t\t\t\t\t\t\t} catch (error) {\n\t\t\t\t\t\t\t\tif (Velocity.debug) {\n\t\t\t\t\t\t\t\t\tconsole.log(\"Browser does not support [\" + propertyValue + \"] for [\" + propertyName + \"]\");\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */\n\t\t\t\t\t\t\t/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tvar data = Data(element);\n\n\t\t\t\t\t\t\tif (data && data.isSVG && CSS.Names.SVGAttribute(property)) {\n\t\t\t\t\t\t\t\t/* Note: For SVG attributes, vendor-prefixed property names are never used. */\n\t\t\t\t\t\t\t\t/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */\n\t\t\t\t\t\t\t\telement.setAttribute(property, propertyValue);\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\telement.style[propertyName] = propertyValue;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (Velocity.debug >= 2) {\n\t\t\t\t\t\t\tconsole.log(\"Set \" + property + \" (\" + propertyName + \"): \" + propertyValue);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */\n\t\t\t\treturn [propertyName, propertyValue];\n\t\t\t},\n\t\t\t/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */\n\t\t\t/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */\n\t\t\tflushTransformCache: function(element) {\n\t\t\t\tvar transformString = \"\",\n\t\t\t\t\t\tdata = Data(element);\n\n\t\t\t\t/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string\n\t\t\t\t (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */\n\t\t\t\tif ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {\n\t\t\t\t\t/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.\n\t\t\t\t\t Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */\n\t\t\t\t\tvar getTransformFloat = function(transformProperty) {\n\t\t\t\t\t\treturn parseFloat(CSS.getPropertyValue(element, transformProperty));\n\t\t\t\t\t};\n\n\t\t\t\t\t/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,\n\t\t\t\t\t we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */\n\t\t\t\t\tvar SVGTransforms = {\n\t\t\t\t\t\ttranslate: [getTransformFloat(\"translateX\"), getTransformFloat(\"translateY\")],\n\t\t\t\t\t\tskewX: [getTransformFloat(\"skewX\")], skewY: [getTransformFloat(\"skewY\")],\n\t\t\t\t\t\t/* If the scale property is set (non-1), use that value for the scaleX and scaleY values\n\t\t\t\t\t\t (this behavior mimics the result of animating all these properties at once on HTML elements). */\n\t\t\t\t\t\tscale: getTransformFloat(\"scale\") !== 1 ? [getTransformFloat(\"scale\"), getTransformFloat(\"scale\")] : [getTransformFloat(\"scaleX\"), getTransformFloat(\"scaleY\")],\n\t\t\t\t\t\t/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values\n\t\t\t\t\t\t defining the rotation's origin point. We ignore the origin values (default them to 0). */\n\t\t\t\t\t\trotate: [getTransformFloat(\"rotateZ\"), 0, 0]\n\t\t\t\t\t};\n\n\t\t\t\t\t/* Iterate through the transform properties in the user-defined property map order.\n\t\t\t\t\t (This mimics the behavior of non-SVG transform animation.) */\n\t\t\t\t\t$.each(Data(element).transformCache, function(transformName) {\n\t\t\t\t\t\t/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master\n\t\t\t\t\t\t properties so that they match up with SVG's accepted transform properties. */\n\t\t\t\t\t\tif (/^translate/i.test(transformName)) {\n\t\t\t\t\t\t\ttransformName = \"translate\";\n\t\t\t\t\t\t} else if (/^scale/i.test(transformName)) {\n\t\t\t\t\t\t\ttransformName = \"scale\";\n\t\t\t\t\t\t} else if (/^rotate/i.test(transformName)) {\n\t\t\t\t\t\t\ttransformName = \"rotate\";\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Check that we haven't yet deleted the property from the SVGTransforms container. */\n\t\t\t\t\t\tif (SVGTransforms[transformName]) {\n\t\t\t\t\t\t\t/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */\n\t\t\t\t\t\t\ttransformString += transformName + \"(\" + SVGTransforms[transformName].join(\" \") + \")\" + \" \";\n\n\t\t\t\t\t\t\t/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't\n\t\t\t\t\t\t\t re-insert the same master property if we encounter another one of its axis-specific properties. */\n\t\t\t\t\t\t\tdelete SVGTransforms[transformName];\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\tvar transformValue,\n\t\t\t\t\t\t\tperspective;\n\n\t\t\t\t\t/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */\n\t\t\t\t\t$.each(Data(element).transformCache, function(transformName) {\n\t\t\t\t\t\ttransformValue = Data(element).transformCache[transformName];\n\n\t\t\t\t\t\t/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */\n\t\t\t\t\t\tif (transformName === \"transformPerspective\") {\n\t\t\t\t\t\t\tperspective = transformValue;\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* IE9 only supports one rotation type, rotateZ, which it refers to as \"rotate\". */\n\t\t\t\t\t\tif (IE === 9 && transformName === \"rotateZ\") {\n\t\t\t\t\t\t\ttransformName = \"rotate\";\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\ttransformString += transformName + transformValue + \" \";\n\t\t\t\t\t});\n\n\t\t\t\t\t/* If present, set the perspective subproperty first. */\n\t\t\t\t\tif (perspective) {\n\t\t\t\t\t\ttransformString = \"perspective\" + perspective + \" \" + transformString;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tCSS.setPropertyValue(element, \"transform\", transformString);\n\t\t\t}\n\t\t};\n\n\t\t/* Register hooks and normalizations. */\n\t\tCSS.Hooks.register();\n\t\tCSS.Normalizations.register();\n\n\t\t/* Allow hook setting in the same fashion as jQuery's $.css(). */\n\t\tVelocity.hook = function(elements, arg2, arg3) {\n\t\t\tvar value;\n\n\t\t\telements = sanitizeElements(elements);\n\n\t\t\t$.each(elements, function(i, element) {\n\t\t\t\t/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */\n\t\t\t\tif (Data(element) === undefined) {\n\t\t\t\t\tVelocity.init(element);\n\t\t\t\t}\n\n\t\t\t\t/* Get property value. If an element set was passed in, only return the value for the first element. */\n\t\t\t\tif (arg3 === undefined) {\n\t\t\t\t\tif (value === undefined) {\n\t\t\t\t\t\tvalue = CSS.getPropertyValue(element, arg2);\n\t\t\t\t\t}\n\t\t\t\t\t/* Set property value. */\n\t\t\t\t} else {\n\t\t\t\t\t/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */\n\t\t\t\t\tvar adjustedSet = CSS.setPropertyValue(element, arg2, arg3);\n\n\t\t\t\t\t/* Transform properties don't automatically set. They have to be flushed to the DOM. */\n\t\t\t\t\tif (adjustedSet[0] === \"transform\") {\n\t\t\t\t\t\tVelocity.CSS.flushTransformCache(element);\n\t\t\t\t\t}\n\n\t\t\t\t\tvalue = adjustedSet;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\treturn value;\n\t\t};\n\n\t\t/*****************\n\t\t Animation\n\t\t *****************/\n\n\t\tvar animate = function() {\n\t\t\tvar opts;\n\n\t\t\t/******************\n\t\t\t Call Chain\n\t\t\t ******************/\n\n\t\t\t/* Logic for determining what to return to the call stack when exiting out of Velocity. */\n\t\t\tfunction getChain() {\n\t\t\t\t/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,\n\t\t\t\t default to null instead of returning the targeted elements so that utility function's return value is standardized. */\n\t\t\t\tif (isUtility) {\n\t\t\t\t\treturn promiseData.promise || null;\n\t\t\t\t\t/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */\n\t\t\t\t} else {\n\t\t\t\t\treturn elementsWrapped;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/*************************\n\t\t\t Arguments Assignment\n\t\t\t *************************/\n\n\t\t\t/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which \"elements\" (or \"e\"), \"properties\" (or \"p\"), and \"options\" (or \"o\")\n\t\t\t objects are defined on a container object that's passed in as Velocity's sole argument. */\n\t\t\t/* Note: Some browsers automatically populate arguments with a \"properties\" object. We detect it by checking for its default \"names\" property. */\n\t\t\tvar syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),\n\t\t\t\t\t/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */\n\t\t\t\t\tisUtility,\n\t\t\t\t\t/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly\n\t\t\t\t\t passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */\n\t\t\t\t\telementsWrapped,\n\t\t\t\t\targumentIndex;\n\n\t\t\tvar elements,\n\t\t\t\t\tpropertiesMap,\n\t\t\t\t\toptions;\n\n\t\t\t/* Detect jQuery/Zepto elements being animated via the $.fn method. */\n\t\t\tif (Type.isWrapped(this)) {\n\t\t\t\tisUtility = false;\n\n\t\t\t\targumentIndex = 0;\n\t\t\t\telements = this;\n\t\t\t\telementsWrapped = this;\n\t\t\t\t/* Otherwise, raw elements are being animated via the utility function. */\n\t\t\t} else {\n\t\t\t\tisUtility = true;\n\n\t\t\t\targumentIndex = 1;\n\t\t\t\telements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];\n\t\t\t}\n\n\t\t\t/***************\n\t\t\t Promises\n\t\t\t ***************/\n\n\t\t\tvar promiseData = {\n\t\t\t\tpromise: null,\n\t\t\t\tresolver: null,\n\t\t\t\trejecter: null\n\t\t\t};\n\n\t\t\t/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if\n\t\t\t promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve\n\t\t\t method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated\n\t\t\t call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */\n\t\t\t/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that\n\t\t\t triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are\n\t\t\t grouped together for the purposes of resolving and rejecting a promise. */\n\t\t\tif (isUtility && Velocity.Promise) {\n\t\t\t\tpromiseData.promise = new Velocity.Promise(function(resolve, reject) {\n\t\t\t\t\tpromiseData.resolver = resolve;\n\t\t\t\t\tpromiseData.rejecter = reject;\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tif (syntacticSugar) {\n\t\t\t\tpropertiesMap = arguments[0].properties || arguments[0].p;\n\t\t\t\toptions = arguments[0].options || arguments[0].o;\n\t\t\t} else {\n\t\t\t\tpropertiesMap = arguments[argumentIndex];\n\t\t\t\toptions = arguments[argumentIndex + 1];\n\t\t\t}\n\n\t\t\telements = sanitizeElements(elements);\n\n\t\t\tif (!elements) {\n\t\t\t\tif (promiseData.promise) {\n\t\t\t\t\tif (!propertiesMap || !options || options.promiseRejectEmpty !== false) {\n\t\t\t\t\t\tpromiseData.rejecter();\n\t\t\t\t\t} else {\n\t\t\t\t\t\tpromiseData.resolver();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a\n\t\t\t single raw DOM element is passed in (which doesn't contain a length property). */\n\t\t\tvar elementsLength = elements.length,\n\t\t\t\t\telementsIndex = 0;\n\n\t\t\t/***************************\n\t\t\t Argument Overloading\n\t\t\t ***************************/\n\n\t\t\t/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).\n\t\t\t Overloading is detected by checking for the absence of an object being passed into options. */\n\t\t\t/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */\n\t\t\tif (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {\n\t\t\t\t/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */\n\t\t\t\tvar startingArgumentPosition = argumentIndex + 1;\n\n\t\t\t\toptions = {};\n\n\t\t\t\t/* Iterate through all options arguments */\n\t\t\t\tfor (var i = startingArgumentPosition; i < arguments.length; i++) {\n\t\t\t\t\t/* Treat a number as a duration. Parse it out. */\n\t\t\t\t\t/* Note: The following RegEx will return true if passed an array with a number as its first item.\n\t\t\t\t\t Thus, arrays are skipped from this check. */\n\t\t\t\t\tif (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\\d/.test(arguments[i]))) {\n\t\t\t\t\t\toptions.duration = arguments[i];\n\t\t\t\t\t\t/* Treat strings and arrays as easings. */\n\t\t\t\t\t} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {\n\t\t\t\t\t\toptions.easing = arguments[i];\n\t\t\t\t\t\t/* Treat a function as a complete callback. */\n\t\t\t\t\t} else if (Type.isFunction(arguments[i])) {\n\t\t\t\t\t\toptions.complete = arguments[i];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/*********************\n\t\t\t Action Detection\n\t\t\t *********************/\n\n\t\t\t/* Velocity's behavior is categorized into \"actions\": Elements can either be specially scrolled into view,\n\t\t\t or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's\n\t\t\t first argument, the associated action is \"start\". Alternatively, \"scroll\", \"reverse\", \"pause\", \"resume\" or \"stop\" can be passed in \n\t\t\t instead of a properties map. */\n\t\t\tvar action;\n\n\t\t\tswitch (propertiesMap) {\n\t\t\t\tcase \"scroll\":\n\t\t\t\t\taction = \"scroll\";\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase \"reverse\":\n\t\t\t\t\taction = \"reverse\";\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase \"pause\":\n\n\t\t\t\t\t/*******************\n\t\t\t\t\t Action: Pause\n\t\t\t\t\t *******************/\n\n\t\t\t\t\tvar currentTime = (new Date()).getTime();\n\n\t\t\t\t\t/* Handle delay timers */\n\t\t\t\t\t$.each(elements, function(i, element) {\n\t\t\t\t\t\tpauseDelayOnElement(element, currentTime);\n\t\t\t\t\t});\n\n\t\t\t\t\t/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a \n\t\t\t\t\t single element will cause any calls that containt tweens for that element to be paused/resumed\n\t\t\t\t\t as well. */\n\n\t\t\t\t\t/* Iterate through all calls and pause any that contain any of our elements */\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\n\n\t\t\t\t\t\tvar found = false;\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\n\t\t\t\t\t\tif (activeCall) {\n\t\t\t\t\t\t\t/* Iterate through the active call's targeted elements. */\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? \"\" : options;\n\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\n\t\t\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\n\n\t\t\t\t\t\t\t\t\t\t/* Set call to paused */\n\t\t\t\t\t\t\t\t\t\tactiveCall[5] = {\n\t\t\t\t\t\t\t\t\t\t\tresume: false\n\t\t\t\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\t\t\t\t/* Once we match an element, we can bounce out to the next call entirely */\n\t\t\t\t\t\t\t\t\t\tfound = true;\n\t\t\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\t\t/* Proceed to check next call if we have already matched */\n\t\t\t\t\t\t\t\tif (found) {\n\t\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\n\t\t\t\t\t});\n\n\t\t\t\t\t/* Since pause creates no new tweens, exit out of Velocity. */\n\t\t\t\t\treturn getChain();\n\n\t\t\t\tcase \"resume\":\n\n\t\t\t\t\t/*******************\n\t\t\t\t\t Action: Resume\n\t\t\t\t\t *******************/\n\n\t\t\t\t\t/* Handle delay timers */\n\t\t\t\t\t$.each(elements, function(i, element) {\n\t\t\t\t\t\tresumeDelayOnElement(element, currentTime);\n\t\t\t\t\t});\n\n\t\t\t\t\t/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a \n\t\t\t\t\t single element will cause any calls that containt tweens for that element to be paused/resumed\n\t\t\t\t\t as well. */\n\n\t\t\t\t\t/* Iterate through all calls and pause any that contain any of our elements */\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\n\t\t\t\t\t\tvar found = false;\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\n\t\t\t\t\t\tif (activeCall) {\n\t\t\t\t\t\t\t/* Iterate through the active call's targeted elements. */\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? \"\" : options;\n\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\n\t\t\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t/* Skip any calls that have never been paused */\n\t\t\t\t\t\t\t\tif (!activeCall[5]) {\n\t\t\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\n\n\t\t\t\t\t\t\t\t\t\t/* Flag a pause object to be resumed, which will occur during the next tick. In\n\t\t\t\t\t\t\t\t\t\t addition, the pause object will at that time be deleted */\n\t\t\t\t\t\t\t\t\t\tactiveCall[5].resume = true;\n\n\t\t\t\t\t\t\t\t\t\t/* Once we match an element, we can bounce out to the next call entirely */\n\t\t\t\t\t\t\t\t\t\tfound = true;\n\t\t\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\t\t/* Proceed to check next call if we have already matched */\n\t\t\t\t\t\t\t\tif (found) {\n\t\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\n\t\t\t\t\t});\n\n\t\t\t\t\t/* Since resume creates no new tweens, exit out of Velocity. */\n\t\t\t\t\treturn getChain();\n\n\t\t\t\tcase \"finish\":\n\t\t\t\tcase \"finishAll\":\n\t\t\t\tcase \"stop\":\n\t\t\t\t\t/*******************\n\t\t\t\t\t Action: Stop\n\t\t\t\t\t *******************/\n\n\t\t\t\t\t/* Clear the currently-active delay on each targeted element. */\n\t\t\t\t\t$.each(elements, function(i, element) {\n\t\t\t\t\t\tif (Data(element) && Data(element).delayTimer) {\n\t\t\t\t\t\t\t/* Stop the timer from triggering its cached next() function. */\n\t\t\t\t\t\t\tclearTimeout(Data(element).delayTimer.setTimeout);\n\n\t\t\t\t\t\t\t/* Manually call the next() function so that the subsequent queue items can progress. */\n\t\t\t\t\t\t\tif (Data(element).delayTimer.next) {\n\t\t\t\t\t\t\t\tData(element).delayTimer.next();\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tdelete Data(element).delayTimer;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* If we want to finish everything in the queue, we have to iterate through it\n\t\t\t\t\t\t and call each function. This will make them active calls below, which will\n\t\t\t\t\t\t cause them to be applied via the duration setting. */\n\t\t\t\t\t\tif (propertiesMap === \"finishAll\" && (options === true || Type.isString(options))) {\n\t\t\t\t\t\t\t/* Iterate through the items in the element's queue. */\n\t\t\t\t\t\t\t$.each($.queue(element, Type.isString(options) ? options : \"\"), function(_, item) {\n\t\t\t\t\t\t\t\t/* The queue array can contain an \"inprogress\" string, which we skip. */\n\t\t\t\t\t\t\t\tif (Type.isFunction(item)) {\n\t\t\t\t\t\t\t\t\titem();\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\t/* Clearing the $.queue() array is achieved by resetting it to []. */\n\t\t\t\t\t\t\t$.queue(element, Type.isString(options) ? options : \"\", []);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\n\t\t\t\t\tvar callsToStop = [];\n\n\t\t\t\t\t/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have\n\t\t\t\t\t been applied to multiple elements, in which case all of the call's elements will be stopped. When an element\n\t\t\t\t\t is stopped, the next item in its animation queue is immediately triggered. */\n\t\t\t\t\t/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the \"fx\" queue)\n\t\t\t\t\t or a custom queue string can be passed in. */\n\t\t\t\t\t/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,\n\t\t\t\t\t regardless of the element's current queue state. */\n\n\t\t\t\t\t/* Iterate through every active call. */\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\n\t\t\t\t\t\tif (activeCall) {\n\t\t\t\t\t\t\t/* Iterate through the active call's targeted elements. */\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\n\t\t\t\t\t\t\t\t/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only\n\t\t\t\t\t\t\t\t clear calls associated with the relevant queue. */\n\t\t\t\t\t\t\t\t/* Call stopping logic works as follows:\n\t\t\t\t\t\t\t\t - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.\n\t\t\t\t\t\t\t\t - options === undefined --> stop current queue:\"\" call and all queue:false calls.\n\t\t\t\t\t\t\t\t - options === false --> stop only queue:false calls.\n\t\t\t\t\t\t\t\t - options === \"custom\" --> stop current queue:\"custom\" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:\"custom\" call). */\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? \"\" : options;\n\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\n\t\t\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\n\t\t\t\t\t\t\t\t\t\t/* Optionally clear the remaining queued calls. If we're doing \"finishAll\" this won't find anything,\n\t\t\t\t\t\t\t\t\t\t due to the queue-clearing above. */\n\t\t\t\t\t\t\t\t\t\tif (options === true || Type.isString(options)) {\n\t\t\t\t\t\t\t\t\t\t\t/* Iterate through the items in the element's queue. */\n\t\t\t\t\t\t\t\t\t\t\t$.each($.queue(element, Type.isString(options) ? options : \"\"), function(_, item) {\n\t\t\t\t\t\t\t\t\t\t\t\t/* The queue array can contain an \"inprogress\" string, which we skip. */\n\t\t\t\t\t\t\t\t\t\t\t\tif (Type.isFunction(item)) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t/* Pass the item's callback a flag indicating that we want to abort from the queue call.\n\t\t\t\t\t\t\t\t\t\t\t\t\t (Specifically, the queue will resolve the call's associated promise then abort.)  */\n\t\t\t\t\t\t\t\t\t\t\t\t\titem(null, true);\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\t\t\t\t\t/* Clearing the $.queue() array is achieved by resetting it to []. */\n\t\t\t\t\t\t\t\t\t\t\t$.queue(element, Type.isString(options) ? options : \"\", []);\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\tif (propertiesMap === \"stop\") {\n\t\t\t\t\t\t\t\t\t\t\t/* Since \"reverse\" uses cached start values (the previous call's endValues), these values must be\n\t\t\t\t\t\t\t\t\t\t\t changed to reflect the final value that the elements were actually tweened to. */\n\t\t\t\t\t\t\t\t\t\t\t/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer\n\t\t\t\t\t\t\t\t\t\t\t object. Also, queue:false animations can't be reversed. */\n\t\t\t\t\t\t\t\t\t\t\tvar data = Data(element);\n\t\t\t\t\t\t\t\t\t\t\tif (data && data.tweensContainer && queueName !== false) {\n\t\t\t\t\t\t\t\t\t\t\t\t$.each(data.tweensContainer, function(m, activeTween) {\n\t\t\t\t\t\t\t\t\t\t\t\t\tactiveTween.endValue = activeTween.currentValue;\n\t\t\t\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\tcallsToStop.push(i);\n\t\t\t\t\t\t\t\t\t\t} else if (propertiesMap === \"finish\" || propertiesMap === \"finishAll\") {\n\t\t\t\t\t\t\t\t\t\t\t/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that\n\t\t\t\t\t\t\t\t\t\t\t they finish upon the next rAf tick then proceed with normal call completion logic. */\n\t\t\t\t\t\t\t\t\t\t\tactiveCall[2].duration = 1;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\n\t\t\t\t\t/* Prematurely call completeCall() on each matched active call. Pass an additional flag for \"stop\" to indicate\n\t\t\t\t\t that the complete callback and display:none setting should be skipped since we're completing prematurely. */\n\t\t\t\t\tif (propertiesMap === \"stop\") {\n\t\t\t\t\t\t$.each(callsToStop, function(i, j) {\n\t\t\t\t\t\t\tcompleteCall(j, true);\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\tif (promiseData.promise) {\n\t\t\t\t\t\t\t/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */\n\t\t\t\t\treturn getChain();\n\n\t\t\t\tdefault:\n\t\t\t\t\t/* Treat a non-empty plain object as a literal properties map. */\n\t\t\t\t\tif ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {\n\t\t\t\t\t\taction = \"start\";\n\n\t\t\t\t\t\t/****************\n\t\t\t\t\t\t Redirects\n\t\t\t\t\t\t ****************/\n\n\t\t\t\t\t\t/* Check if a string matches a registered redirect (see Redirects above). */\n\t\t\t\t\t} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {\n\t\t\t\t\t\topts = $.extend({}, options);\n\n\t\t\t\t\t\tvar durationOriginal = opts.duration,\n\t\t\t\t\t\t\t\tdelayOriginal = opts.delay || 0;\n\n\t\t\t\t\t\t/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */\n\t\t\t\t\t\tif (opts.backwards === true) {\n\t\t\t\t\t\t\telements = $.extend(true, [], elements).reverse();\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */\n\t\t\t\t\t\t$.each(elements, function(elementIndex, element) {\n\t\t\t\t\t\t\t/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */\n\t\t\t\t\t\t\tif (parseFloat(opts.stagger)) {\n\t\t\t\t\t\t\t\topts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);\n\t\t\t\t\t\t\t} else if (Type.isFunction(opts.stagger)) {\n\t\t\t\t\t\t\t\topts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)\n\t\t\t\t\t\t\t the duration of each element's animation, using floors to prevent producing very short durations. */\n\t\t\t\t\t\t\tif (opts.drag) {\n\t\t\t\t\t\t\t\t/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */\n\t\t\t\t\t\t\t\topts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);\n\n\t\t\t\t\t\t\t\t/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,\n\t\t\t\t\t\t\t\t B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).\n\t\t\t\t\t\t\t\t The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */\n\t\t\t\t\t\t\t\topts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to\n\t\t\t\t\t\t\t reduce the opts checking logic required inside the redirect. */\n\t\t\t\t\t\t\tVelocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\t/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.\n\t\t\t\t\t\t (The performance overhead up to this point is virtually non-existant.) */\n\t\t\t\t\t\t/* Note: The jQuery call chain is kept intact by returning the complete element set. */\n\t\t\t\t\t\treturn getChain();\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar abortError = \"Velocity: First argument (\" + propertiesMap + \") was not a property map, a known action, or a registered redirect. Aborting.\";\n\n\t\t\t\t\t\tif (promiseData.promise) {\n\t\t\t\t\t\t\tpromiseData.rejecter(new Error(abortError));\n\t\t\t\t\t\t} else if (window.console) {\n\t\t\t\t\t\t\tconsole.log(abortError);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn getChain();\n\t\t\t\t\t}\n\t\t\t}\n\n\t\t\t/**************************\n\t\t\t Call-Wide Variables\n\t\t\t **************************/\n\n\t\t\t/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements\n\t\t\t being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore\n\t\t\t avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale\n\t\t\t conversion metrics across Velocity animations that are not immediately consecutively chained. */\n\t\t\tvar callUnitConversionData = {\n\t\t\t\tlastParent: null,\n\t\t\t\tlastPosition: null,\n\t\t\t\tlastFontSize: null,\n\t\t\t\tlastPercentToPxWidth: null,\n\t\t\t\tlastPercentToPxHeight: null,\n\t\t\t\tlastEmToPx: null,\n\t\t\t\tremToPx: null,\n\t\t\t\tvwToPx: null,\n\t\t\t\tvhToPx: null\n\t\t\t};\n\n\t\t\t/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide\n\t\t\t Velocity.State.calls array that is processed during animation ticking. */\n\t\t\tvar call = [];\n\n\t\t\t/************************\n\t\t\t Element Processing\n\t\t\t ************************/\n\n\t\t\t/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):\n\t\t\t 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.\n\t\t\t 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.\n\t\t\t 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.\n\t\t\t `elementArrayIndex` allows passing index of the element in the original array to value functions.\n\t\t\t If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.\n\t\t\t */\n\t\t\tfunction processElement(element, elementArrayIndex) {\n\n\t\t\t\t/*************************\n\t\t\t\t Part I: Pre-Queueing\n\t\t\t\t *************************/\n\n\t\t\t\t/***************************\n\t\t\t\t Element-Wide Variables\n\t\t\t\t ***************************/\n\n\t\t\t\tvar /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */\n\t\t\t\t\t\topts = $.extend({}, Velocity.defaults, options),\n\t\t\t\t\t\t/* A container for the processed data associated with each property in the propertyMap.\n\t\t\t\t\t\t (Each property in the map produces its own \"tween\".) */\n\t\t\t\t\t\ttweensContainer = {},\n\t\t\t\t\t\telementUnitConversionData;\n\n\t\t\t\t/******************\n\t\t\t\t Element Init\n\t\t\t\t ******************/\n\n\t\t\t\tif (Data(element) === undefined) {\n\t\t\t\t\tVelocity.init(element);\n\t\t\t\t}\n\n\t\t\t\t/******************\n\t\t\t\t Option: Delay\n\t\t\t\t ******************/\n\n\t\t\t\t/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */\n\t\t\t\t/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()\n\t\t\t\t (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */\n\t\t\t\tif (parseFloat(opts.delay) && opts.queue !== false) {\n\t\t\t\t\t$.queue(element, opts.queue, function(next) {\n\t\t\t\t\t\t/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */\n\t\t\t\t\t\tVelocity.velocityQueueEntryFlag = true;\n\n\t\t\t\t\t\t/* The ensuing queue item (which is assigned to the \"next\" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.\n\t\t\t\t\t\t The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's \"stop\" command, and\n\t\t\t\t\t\t delayBegin/delayTime is used to ensure we can \"pause\" and \"resume\" a tween that is still mid-delay. */\n\n\t\t\t\t\t\t/* Temporarily store delayed elements to facilite access for global pause/resume */\n\t\t\t\t\t\tvar callIndex = Velocity.State.delayedElements.count++;\n\t\t\t\t\t\tVelocity.State.delayedElements[callIndex] = element;\n\n\t\t\t\t\t\tvar delayComplete = (function(index) {\n\t\t\t\t\t\t\treturn function() {\n\t\t\t\t\t\t\t\t/* Clear the temporary element */\n\t\t\t\t\t\t\t\tVelocity.State.delayedElements[index] = false;\n\n\t\t\t\t\t\t\t\t/* Finally, issue the call */\n\t\t\t\t\t\t\t\tnext();\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t})(callIndex);\n\n\n\t\t\t\t\t\tData(element).delayBegin = (new Date()).getTime();\n\t\t\t\t\t\tData(element).delay = parseFloat(opts.delay);\n\t\t\t\t\t\tData(element).delayTimer = {\n\t\t\t\t\t\t\tsetTimeout: setTimeout(next, parseFloat(opts.delay)),\n\t\t\t\t\t\t\tnext: delayComplete\n\t\t\t\t\t\t};\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\t/*********************\n\t\t\t\t Option: Duration\n\t\t\t\t *********************/\n\n\t\t\t\t/* Support for jQuery's named durations. */\n\t\t\t\tswitch (opts.duration.toString().toLowerCase()) {\n\t\t\t\t\tcase \"fast\":\n\t\t\t\t\t\topts.duration = 200;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"normal\":\n\t\t\t\t\t\topts.duration = DURATION_DEFAULT;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase \"slow\":\n\t\t\t\t\t\topts.duration = 600;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tdefault:\n\t\t\t\t\t\t/* Remove the potential \"ms\" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */\n\t\t\t\t\t\topts.duration = parseFloat(opts.duration) || 1;\n\t\t\t\t}\n\n\t\t\t\t/************************\n\t\t\t\t Global Option: Mock\n\t\t\t\t ************************/\n\n\t\t\t\tif (Velocity.mock !== false) {\n\t\t\t\t\t/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.\n\t\t\t\t\t Alternatively, a multiplier can be passed in to time remap all delays and durations. */\n\t\t\t\t\tif (Velocity.mock === true) {\n\t\t\t\t\t\topts.duration = opts.delay = 1;\n\t\t\t\t\t} else {\n\t\t\t\t\t\topts.duration *= parseFloat(Velocity.mock) || 1;\n\t\t\t\t\t\topts.delay *= parseFloat(Velocity.mock) || 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t/*******************\n\t\t\t\t Option: Easing\n\t\t\t\t *******************/\n\n\t\t\t\topts.easing = getEasing(opts.easing, opts.duration);\n\n\t\t\t\t/**********************\n\t\t\t\t Option: Callbacks\n\t\t\t\t **********************/\n\n\t\t\t\t/* Callbacks must functions. Otherwise, default to null. */\n\t\t\t\tif (opts.begin && !Type.isFunction(opts.begin)) {\n\t\t\t\t\topts.begin = null;\n\t\t\t\t}\n\n\t\t\t\tif (opts.progress && !Type.isFunction(opts.progress)) {\n\t\t\t\t\topts.progress = null;\n\t\t\t\t}\n\n\t\t\t\tif (opts.complete && !Type.isFunction(opts.complete)) {\n\t\t\t\t\topts.complete = null;\n\t\t\t\t}\n\n\t\t\t\t/*********************************\n\t\t\t\t Option: Display & Visibility\n\t\t\t\t *********************************/\n\n\t\t\t\t/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */\n\t\t\t\t/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */\n\t\t\t\tif (opts.display !== undefined && opts.display !== null) {\n\t\t\t\t\topts.display = opts.display.toString().toLowerCase();\n\n\t\t\t\t\t/* Users can pass in a special \"auto\" value to instruct Velocity to set the element to its default display value. */\n\t\t\t\t\tif (opts.display === \"auto\") {\n\t\t\t\t\t\topts.display = Velocity.CSS.Values.getDisplayType(element);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== null) {\n\t\t\t\t\topts.visibility = opts.visibility.toString().toLowerCase();\n\t\t\t\t}\n\n\t\t\t\t/**********************\n\t\t\t\t Option: mobileHA\n\t\t\t\t **********************/\n\n\t\t\t\t/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)\n\t\t\t\t on animating elements. HA is removed from the element at the completion of its animation. */\n\t\t\t\t/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */\n\t\t\t\t/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */\n\t\t\t\topts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);\n\n\t\t\t\t/***********************\n\t\t\t\t Part II: Queueing\n\t\t\t\t ***********************/\n\n\t\t\t\t/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.\n\t\t\t\t In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */\n\t\t\t\t/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,\n\t\t\t\t the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */\n\t\t\t\tfunction buildQueue(next) {\n\t\t\t\t\tvar data, lastTweensContainer;\n\n\t\t\t\t\t/*******************\n\t\t\t\t\t Option: Begin\n\t\t\t\t\t *******************/\n\n\t\t\t\t\t/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */\n\t\t\t\t\tif (opts.begin && elementsIndex === 0) {\n\t\t\t\t\t\t/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\topts.begin.call(elements, elements);\n\t\t\t\t\t\t} catch (error) {\n\t\t\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\t\t\tthrow error;\n\t\t\t\t\t\t\t}, 1);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t/*****************************************\n\t\t\t\t\t Tween Data Construction (for Scroll)\n\t\t\t\t\t *****************************************/\n\n\t\t\t\t\t/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */\n\t\t\t\t\tif (action === \"scroll\") {\n\t\t\t\t\t\t/* The scroll action uniquely takes an optional \"offset\" option -- specified in pixels -- that offsets the targeted scroll position. */\n\t\t\t\t\t\tvar scrollDirection = (/^x$/i.test(opts.axis) ? \"Left\" : \"Top\"),\n\t\t\t\t\t\t\t\tscrollOffset = parseFloat(opts.offset) || 0,\n\t\t\t\t\t\t\t\tscrollPositionCurrent,\n\t\t\t\t\t\t\t\tscrollPositionCurrentAlternate,\n\t\t\t\t\t\t\t\tscrollPositionEnd;\n\n\t\t\t\t\t\t/* Scroll also uniquely takes an optional \"container\" option, which indicates the parent element that should be scrolled --\n\t\t\t\t\t\t as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */\n\t\t\t\t\t\tif (opts.container) {\n\t\t\t\t\t\t\t/* Ensure that either a jQuery object or a raw DOM element was passed in. */\n\t\t\t\t\t\t\tif (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {\n\t\t\t\t\t\t\t\t/* Extract the raw DOM element from the jQuery wrapper. */\n\t\t\t\t\t\t\t\topts.container = opts.container[0] || opts.container;\n\t\t\t\t\t\t\t\t/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes\n\t\t\t\t\t\t\t\t (due to the user's natural interaction with the page). */\n\t\t\t\t\t\t\t\tscrollPositionCurrent = opts.container[\"scroll\" + scrollDirection]; /* GET */\n\n\t\t\t\t\t\t\t\t/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions\n\t\t\t\t\t\t\t\t -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*\n\t\t\t\t\t\t\t\t the scroll container's current scroll position. */\n\t\t\t\t\t\t\t\tscrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */\n\t\t\t\t\t\t\t\t/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\topts.container = null;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using\n\t\t\t\t\t\t\t the appropriate cached property names (which differ based on browser type). */\n\t\t\t\t\t\t\tscrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State[\"scrollProperty\" + scrollDirection]]; /* GET */\n\t\t\t\t\t\t\t/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */\n\t\t\t\t\t\t\tscrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State[\"scrollProperty\" + (scrollDirection === \"Left\" ? \"Top\" : \"Left\")]]; /* GET */\n\n\t\t\t\t\t\t\t/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --\n\t\t\t\t\t\t\t and therefore end values do not need to be compounded onto current values. */\n\t\t\t\t\t\t\tscrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */\n\t\t\t\t\t\ttweensContainer = {\n\t\t\t\t\t\t\tscroll: {\n\t\t\t\t\t\t\t\trootPropertyValue: false,\n\t\t\t\t\t\t\t\tstartValue: scrollPositionCurrent,\n\t\t\t\t\t\t\t\tcurrentValue: scrollPositionCurrent,\n\t\t\t\t\t\t\t\tendValue: scrollPositionEnd,\n\t\t\t\t\t\t\t\tunitType: \"\",\n\t\t\t\t\t\t\t\teasing: opts.easing,\n\t\t\t\t\t\t\t\tscrollData: {\n\t\t\t\t\t\t\t\t\tcontainer: opts.container,\n\t\t\t\t\t\t\t\t\tdirection: scrollDirection,\n\t\t\t\t\t\t\t\t\talternateValue: scrollPositionCurrentAlternate\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\telement: element\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tif (Velocity.debug) {\n\t\t\t\t\t\t\tconsole.log(\"tweensContainer (scroll): \", tweensContainer.scroll, element);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/******************************************\n\t\t\t\t\t\t Tween Data Construction (for Reverse)\n\t\t\t\t\t\t ******************************************/\n\n\t\t\t\t\t\t/* Reverse acts like a \"start\" action in that a property map is animated toward. The only difference is\n\t\t\t\t\t\t that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate\n\t\t\t\t\t\t the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */\n\t\t\t\t\t\t/* Note: Reverse can be directly called via the \"reverse\" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */\n\t\t\t\t\t\t/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;\n\t\t\t\t\t\t there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined\n\t\t\t\t\t\t as reverting to the element's values as they were prior to the previous *Velocity* call. */\n\t\t\t\t\t} else if (action === \"reverse\") {\n\t\t\t\t\t\tdata = Data(element);\n\n\t\t\t\t\t\t/* Abort if there is no prior animation data to reverse to. */\n\t\t\t\t\t\tif (!data) {\n\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (!data.tweensContainer) {\n\t\t\t\t\t\t\t/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */\n\t\t\t\t\t\t\t$.dequeue(element, opts.queue);\n\n\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t/*********************\n\t\t\t\t\t\t\t Options Parsing\n\t\t\t\t\t\t\t *********************/\n\n\t\t\t\t\t\t\t/* If the element was hidden via the display option in the previous call,\n\t\t\t\t\t\t\t revert display to \"auto\" prior to reversal so that the element is visible again. */\n\t\t\t\t\t\t\tif (data.opts.display === \"none\") {\n\t\t\t\t\t\t\t\tdata.opts.display = \"auto\";\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tif (data.opts.visibility === \"hidden\") {\n\t\t\t\t\t\t\t\tdata.opts.visibility = \"visible\";\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* If the loop option was set in the previous call, disable it so that \"reverse\" calls aren't recursively generated.\n\t\t\t\t\t\t\t Further, remove the previous call's callback options; typically, users do not want these to be refired. */\n\t\t\t\t\t\t\tdata.opts.loop = false;\n\t\t\t\t\t\t\tdata.opts.begin = null;\n\t\t\t\t\t\t\tdata.opts.complete = null;\n\n\t\t\t\t\t\t\t/* Since we're extending an opts object that has already been extended with the defaults options object,\n\t\t\t\t\t\t\t we remove non-explicitly-defined properties that are auto-assigned values. */\n\t\t\t\t\t\t\tif (!options.easing) {\n\t\t\t\t\t\t\t\tdelete opts.easing;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tif (!options.duration) {\n\t\t\t\t\t\t\t\tdelete opts.duration;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* The opts object used for reversal is an extension of the options object optionally passed into this\n\t\t\t\t\t\t\t reverse call plus the options used in the previous Velocity call. */\n\t\t\t\t\t\t\topts = $.extend({}, data.opts, opts);\n\n\t\t\t\t\t\t\t/*************************************\n\t\t\t\t\t\t\t Tweens Container Reconstruction\n\t\t\t\t\t\t\t *************************************/\n\n\t\t\t\t\t\t\t/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */\n\t\t\t\t\t\t\tlastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);\n\n\t\t\t\t\t\t\t/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */\n\t\t\t\t\t\t\tfor (var lastTween in lastTweensContainer) {\n\t\t\t\t\t\t\t\t/* In addition to tween data, tweensContainers contain an element property that we ignore here. */\n\t\t\t\t\t\t\t\tif (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== \"element\") {\n\t\t\t\t\t\t\t\t\tvar lastStartValue = lastTweensContainer[lastTween].startValue;\n\n\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;\n\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].endValue = lastStartValue;\n\n\t\t\t\t\t\t\t\t\t/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).\n\t\t\t\t\t\t\t\t\t Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.\n\t\t\t\t\t\t\t\t\t The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */\n\t\t\t\t\t\t\t\t\tif (!Type.isEmptyObject(options)) {\n\t\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].easing = opts.easing;\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\n\t\t\t\t\t\t\t\t\t\tconsole.log(\"reverse tweensContainer (\" + lastTween + \"): \" + JSON.stringify(lastTweensContainer[lastTween]), element);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\ttweensContainer = lastTweensContainer;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/*****************************************\n\t\t\t\t\t\t Tween Data Construction (for Start)\n\t\t\t\t\t\t *****************************************/\n\n\t\t\t\t\t} else if (action === \"start\") {\n\n\t\t\t\t\t\t/*************************\n\t\t\t\t\t\t Value Transferring\n\t\t\t\t\t\t *************************/\n\n\t\t\t\t\t\t/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created\n\t\t\t\t\t\t while the element was in the process of being animated by Velocity, then this current call is safe to use\n\t\t\t\t\t\t the end values from the prior call as its start values. Velocity attempts to perform this value transfer\n\t\t\t\t\t\t process whenever possible in order to avoid requerying the DOM. */\n\t\t\t\t\t\t/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),\n\t\t\t\t\t\t then the DOM is queried for the element's current values as a last resort. */\n\t\t\t\t\t\t/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */\n\n\t\t\t\t\t\tdata = Data(element);\n\n\t\t\t\t\t\t/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)\n\t\t\t\t\t\t to transfer over end values to use as start values. If it's set to true and there is a previous\n\t\t\t\t\t\t Velocity call to pull values from, do so. */\n\t\t\t\t\t\tif (data && data.tweensContainer && data.isAnimating === true) {\n\t\t\t\t\t\t\tlastTweensContainer = data.tweensContainer;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/***************************\n\t\t\t\t\t\t Tween Data Calculation\n\t\t\t\t\t\t ***************************/\n\n\t\t\t\t\t\t/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */\n\t\t\t\t\t\t/* Property map values can either take the form of 1) a single value representing the end value,\n\t\t\t\t\t\t or 2) an array in the form of [ endValue, [, easing] [, startValue] ].\n\t\t\t\t\t\t The optional third parameter is a forcefed startValue to be used instead of querying the DOM for\n\t\t\t\t\t\t the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */\n\t\t\t\t\t\tvar parsePropertyValue = function(valueData, skipResolvingEasing) {\n\t\t\t\t\t\t\tvar endValue, easing, startValue;\n\n\t\t\t\t\t\t\t/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */\n\t\t\t\t\t\t\tif (Type.isFunction(valueData)) {\n\t\t\t\t\t\t\t\tvalueData = valueData.call(element, elementArrayIndex, elementsLength);\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* Handle the array format, which can be structured as one of three potential overloads:\n\t\t\t\t\t\t\t A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */\n\t\t\t\t\t\t\tif (Type.isArray(valueData)) {\n\t\t\t\t\t\t\t\t/* endValue is always the first item in the array. Don't bother validating endValue's value now\n\t\t\t\t\t\t\t\t since the ensuing property cycling logic does that. */\n\t\t\t\t\t\t\t\tendValue = valueData[0];\n\n\t\t\t\t\t\t\t\t/* Two-item array format: If the second item is a number, function, or hex string, treat it as a\n\t\t\t\t\t\t\t\t start value since easings can only be non-hex strings or arrays. */\n\t\t\t\t\t\t\t\tif ((!Type.isArray(valueData[1]) && /^[\\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {\n\t\t\t\t\t\t\t\t\tstartValue = valueData[1];\n\t\t\t\t\t\t\t\t\t/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */\n\t\t\t\t\t\t\t\t} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {\n\t\t\t\t\t\t\t\t\teasing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);\n\n\t\t\t\t\t\t\t\t\t/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */\n\t\t\t\t\t\t\t\t\tstartValue = valueData[2];\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\tstartValue = valueData[1] || valueData[2];\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t/* Handle the single-value format. */\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tendValue = valueData;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* Default to the call's easing if a per-property easing type was not defined. */\n\t\t\t\t\t\t\tif (!skipResolvingEasing) {\n\t\t\t\t\t\t\t\teasing = easing || opts.easing;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* If functions were passed in as values, pass the function the current element as its context,\n\t\t\t\t\t\t\t plus the element's index and the element set's size as arguments. Then, assign the returned value. */\n\t\t\t\t\t\t\tif (Type.isFunction(endValue)) {\n\t\t\t\t\t\t\t\tendValue = endValue.call(element, elementArrayIndex, elementsLength);\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tif (Type.isFunction(startValue)) {\n\t\t\t\t\t\t\t\tstartValue = startValue.call(element, elementArrayIndex, elementsLength);\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */\n\t\t\t\t\t\t\treturn [endValue || 0, easing, startValue];\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tvar fixPropertyValue = function(property, valueData) {\n\t\t\t\t\t\t\t/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */\n\t\t\t\t\t\t\tvar rootProperty = CSS.Hooks.getRoot(property),\n\t\t\t\t\t\t\t\t\trootPropertyValue = false,\n\t\t\t\t\t\t\t\t\t/* Parse out endValue, easing, and startValue from the property's data. */\n\t\t\t\t\t\t\t\t\tendValue = valueData[0],\n\t\t\t\t\t\t\t\t\teasing = valueData[1],\n\t\t\t\t\t\t\t\t\tstartValue = valueData[2],\n\t\t\t\t\t\t\t\t\tpattern;\n\n\t\t\t\t\t\t\t/**************************\n\t\t\t\t\t\t\t Start Value Sourcing\n\t\t\t\t\t\t\t **************************/\n\n\t\t\t\t\t\t\t/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will\n\t\t\t\t\t\t\t inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.\n\t\t\t\t\t\t\t Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */\n\t\t\t\t\t\t\t/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,\n\t\t\t\t\t\t\t there is no way to check for their explicit browser support, and so we skip skip this check for them. */\n\t\t\t\t\t\t\tif ((!data || !data.isSVG) && rootProperty !== \"tween\" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {\n\t\t\t\t\t\t\t\tif (Velocity.debug) {\n\t\t\t\t\t\t\t\t\tconsole.log(\"Skipping [\" + rootProperty + \"] due to a lack of browser support.\");\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* If the display option is being set to a non-\"none\" (e.g. \"block\") and opacity (filter on IE<=8) is being\n\t\t\t\t\t\t\t animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity\n\t\t\t\t\t\t\t a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */\n\t\t\t\t\t\t\tif (((opts.display !== undefined && opts.display !== null && opts.display !== \"none\") || (opts.visibility !== undefined && opts.visibility !== \"hidden\")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {\n\t\t\t\t\t\t\t\tstartValue = 0;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue\n\t\t\t\t\t\t\t for all of the current call's properties that were *also* animated in the previous call. */\n\t\t\t\t\t\t\t/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */\n\t\t\t\t\t\t\tif (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {\n\t\t\t\t\t\t\t\tif (startValue === undefined) {\n\t\t\t\t\t\t\t\t\tstartValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the\n\t\t\t\t\t\t\t\t instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue\n\t\t\t\t\t\t\t\t attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */\n\t\t\t\t\t\t\t\trootPropertyValue = data.rootPropertyValueCache[rootProperty];\n\t\t\t\t\t\t\t\t/* If values were not transferred from a previous Velocity call, query the DOM as needed. */\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t/* Handle hooked properties. */\n\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\n\t\t\t\t\t\t\t\t\tif (startValue === undefined) {\n\t\t\t\t\t\t\t\t\t\trootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */\n\t\t\t\t\t\t\t\t\t\t/* Note: The following getPropertyValue() call does not actually trigger a DOM query;\n\t\t\t\t\t\t\t\t\t\t getPropertyValue() will extract the hook from rootPropertyValue. */\n\t\t\t\t\t\t\t\t\t\tstartValue = CSS.getPropertyValue(element, property, rootPropertyValue);\n\t\t\t\t\t\t\t\t\t\t/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;\n\t\t\t\t\t\t\t\t\t\t just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual\n\t\t\t\t\t\t\t\t\t\t root property value (if one is set), but this is acceptable since the primary reason users forcefeed is\n\t\t\t\t\t\t\t\t\t\t to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t/* Grab this hook's zero-value template, e.g. \"0px 0px 0px black\". */\n\t\t\t\t\t\t\t\t\t\trootPropertyValue = CSS.Hooks.templates[rootProperty][1];\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t/* Handle non-hooked properties that haven't already been defined via forcefeeding. */\n\t\t\t\t\t\t\t\t} else if (startValue === undefined) {\n\t\t\t\t\t\t\t\t\tstartValue = CSS.getPropertyValue(element, property); /* GET */\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/**************************\n\t\t\t\t\t\t\t Value Data Extraction\n\t\t\t\t\t\t\t **************************/\n\n\t\t\t\t\t\t\tvar separatedValue,\n\t\t\t\t\t\t\t\t\tendValueUnitType,\n\t\t\t\t\t\t\t\t\tstartValueUnitType,\n\t\t\t\t\t\t\t\t\toperator = false;\n\n\t\t\t\t\t\t\t/* Separates a property value into its numeric value and its unit type. */\n\t\t\t\t\t\t\tvar separateValue = function(property, value) {\n\t\t\t\t\t\t\t\tvar unitType,\n\t\t\t\t\t\t\t\t\t\tnumericValue;\n\n\t\t\t\t\t\t\t\tnumericValue = (value || \"0\")\n\t\t\t\t\t\t\t\t\t\t.toString()\n\t\t\t\t\t\t\t\t\t\t.toLowerCase()\n\t\t\t\t\t\t\t\t\t\t/* Match the unit type at the end of the value. */\n\t\t\t\t\t\t\t\t\t\t.replace(/[%A-z]+$/, function(match) {\n\t\t\t\t\t\t\t\t\t\t\t/* Grab the unit type. */\n\t\t\t\t\t\t\t\t\t\t\tunitType = match;\n\n\t\t\t\t\t\t\t\t\t\t\t/* Strip the unit type off of value. */\n\t\t\t\t\t\t\t\t\t\t\treturn \"\";\n\t\t\t\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\t\t/* If no unit type was supplied, assign one that is appropriate for this property (e.g. \"deg\" for rotateZ or \"px\" for width). */\n\t\t\t\t\t\t\t\tif (!unitType) {\n\t\t\t\t\t\t\t\t\tunitType = CSS.Values.getUnitType(property);\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\treturn [numericValue, unitType];\n\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\tif (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {\n\t\t\t\t\t\t\t\tpattern = \"\";\n\t\t\t\t\t\t\t\tvar iStart = 0, // index in startValue\n\t\t\t\t\t\t\t\t\t\tiEnd = 0, // index in endValue\n\t\t\t\t\t\t\t\t\t\taStart = [], // array of startValue numbers\n\t\t\t\t\t\t\t\t\t\taEnd = [], // array of endValue numbers\n\t\t\t\t\t\t\t\t\t\tinCalc = 0, // Keep track of being inside a \"calc()\" so we don't duplicate it\n\t\t\t\t\t\t\t\t\t\tinRGB = 0, // Keep track of being inside an RGB as we can't use fractional values\n\t\t\t\t\t\t\t\t\t\tinRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel\n\n\t\t\t\t\t\t\t\tstartValue = CSS.Hooks.fixColors(startValue);\n\t\t\t\t\t\t\t\tendValue = CSS.Hooks.fixColors(endValue);\n\t\t\t\t\t\t\t\twhile (iStart < startValue.length && iEnd < endValue.length) {\n\t\t\t\t\t\t\t\t\tvar cStart = startValue[iStart],\n\t\t\t\t\t\t\t\t\t\t\tcEnd = endValue[iEnd];\n\n\t\t\t\t\t\t\t\t\tif (/[\\d\\.-]/.test(cStart) && /[\\d\\.-]/.test(cEnd)) {\n\t\t\t\t\t\t\t\t\t\tvar tStart = cStart, // temporary character buffer\n\t\t\t\t\t\t\t\t\t\t\t\ttEnd = cEnd, // temporary character buffer\n\t\t\t\t\t\t\t\t\t\t\t\tdotStart = \".\", // Make sure we can only ever match a single dot in a decimal\n\t\t\t\t\t\t\t\t\t\t\t\tdotEnd = \".\"; // Make sure we can only ever match a single dot in a decimal\n\n\t\t\t\t\t\t\t\t\t\twhile (++iStart < startValue.length) {\n\t\t\t\t\t\t\t\t\t\t\tcStart = startValue[iStart];\n\t\t\t\t\t\t\t\t\t\t\tif (cStart === dotStart) {\n\t\t\t\t\t\t\t\t\t\t\t\tdotStart = \"..\"; // Can never match two characters\n\t\t\t\t\t\t\t\t\t\t\t} else if (!/\\d/.test(cStart)) {\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\ttStart += cStart;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\twhile (++iEnd < endValue.length) {\n\t\t\t\t\t\t\t\t\t\t\tcEnd = endValue[iEnd];\n\t\t\t\t\t\t\t\t\t\t\tif (cEnd === dotEnd) {\n\t\t\t\t\t\t\t\t\t\t\t\tdotEnd = \"..\"; // Can never match two characters\n\t\t\t\t\t\t\t\t\t\t\t} else if (!/\\d/.test(cEnd)) {\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\ttEnd += cEnd;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tvar uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type\n\t\t\t\t\t\t\t\t\t\t\t\tuEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type\n\n\t\t\t\t\t\t\t\t\t\tiStart += uStart.length;\n\t\t\t\t\t\t\t\t\t\tiEnd += uEnd.length;\n\t\t\t\t\t\t\t\t\t\tif (uStart === uEnd) {\n\t\t\t\t\t\t\t\t\t\t\t// Same units\n\t\t\t\t\t\t\t\t\t\t\tif (tStart === tEnd) {\n\t\t\t\t\t\t\t\t\t\t\t\t// Same numbers, so just copy over\n\t\t\t\t\t\t\t\t\t\t\t\tpattern += tStart + uStart;\n\t\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\t\t// Different numbers, so store them\n\t\t\t\t\t\t\t\t\t\t\t\tpattern += \"{\" + aStart.length + (inRGB ? \"!\" : \"\") + \"}\" + uStart;\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(parseFloat(tStart));\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(parseFloat(tEnd));\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\t// Different units, so put into a \"calc(from + to)\" and animate each side to/from zero\n\t\t\t\t\t\t\t\t\t\t\tvar nStart = parseFloat(tStart),\n\t\t\t\t\t\t\t\t\t\t\t\t\tnEnd = parseFloat(tEnd);\n\n\t\t\t\t\t\t\t\t\t\t\tpattern += (inCalc < 5 ? \"calc\" : \"\") + \"(\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ (nStart ? \"{\" + aStart.length + (inRGB ? \"!\" : \"\") + \"}\" : \"0\") + uStart\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ \" + \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ (nEnd ? \"{\" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? \"!\" : \"\") + \"}\" : \"0\") + uEnd\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ \")\";\n\t\t\t\t\t\t\t\t\t\t\tif (nStart) {\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(nStart);\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(0);\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\tif (nEnd) {\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(0);\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(nEnd);\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t} else if (cStart === cEnd) {\n\t\t\t\t\t\t\t\t\t\tpattern += cStart;\n\t\t\t\t\t\t\t\t\t\tiStart++;\n\t\t\t\t\t\t\t\t\t\tiEnd++;\n\t\t\t\t\t\t\t\t\t\t// Keep track of being inside a calc()\n\t\t\t\t\t\t\t\t\t\tif (inCalc === 0 && cStart === \"c\"\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 1 && cStart === \"a\"\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 2 && cStart === \"l\"\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 3 && cStart === \"c\"\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc >= 4 && cStart === \"(\"\n\t\t\t\t\t\t\t\t\t\t\t\t) {\n\t\t\t\t\t\t\t\t\t\t\tinCalc++;\n\t\t\t\t\t\t\t\t\t\t} else if ((inCalc && inCalc < 5)\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc >= 4 && cStart === \")\" && --inCalc < 5) {\n\t\t\t\t\t\t\t\t\t\t\tinCalc = 0;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t// Keep track of being inside an rgb() / rgba()\n\t\t\t\t\t\t\t\t\t\tif (inRGB === 0 && cStart === \"r\"\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 1 && cStart === \"g\"\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 2 && cStart === \"b\"\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 3 && cStart === \"a\"\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB >= 3 && cStart === \"(\"\n\t\t\t\t\t\t\t\t\t\t\t\t) {\n\t\t\t\t\t\t\t\t\t\t\tif (inRGB === 3 && cStart === \"a\") {\n\t\t\t\t\t\t\t\t\t\t\t\tinRGBA = 1;\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\tinRGB++;\n\t\t\t\t\t\t\t\t\t\t} else if (inRGBA && cStart === \",\") {\n\t\t\t\t\t\t\t\t\t\t\tif (++inRGBA > 3) {\n\t\t\t\t\t\t\t\t\t\t\t\tinRGB = inRGBA = 0;\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB >= (inRGBA ? 4 : 3) && cStart === \")\" && --inRGB < (inRGBA ? 5 : 4)) {\n\t\t\t\t\t\t\t\t\t\t\tinRGB = inRGBA = 0;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\tinCalc = 0;\n\t\t\t\t\t\t\t\t\t\t// TODO: changing units, fixing colours\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tif (iStart !== startValue.length || iEnd !== endValue.length) {\n\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\n\t\t\t\t\t\t\t\t\t\tconsole.error(\"Trying to pattern match mis-matched strings [\\\"\" + endValue + \"\\\", \\\"\" + startValue + \"\\\"]\");\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tpattern = undefined;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tif (pattern) {\n\t\t\t\t\t\t\t\t\tif (aStart.length) {\n\t\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\n\t\t\t\t\t\t\t\t\t\t\tconsole.log(\"Pattern found \\\"\" + pattern + \"\\\" -> \", aStart, aEnd, \"[\" + startValue + \",\" + endValue + \"]\");\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tstartValue = aStart;\n\t\t\t\t\t\t\t\t\t\tendValue = aEnd;\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType = \"\";\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\tpattern = undefined;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tif (!pattern) {\n\t\t\t\t\t\t\t\t/* Separate startValue. */\n\t\t\t\t\t\t\t\tseparatedValue = separateValue(property, startValue);\n\t\t\t\t\t\t\t\tstartValue = separatedValue[0];\n\t\t\t\t\t\t\t\tstartValueUnitType = separatedValue[1];\n\n\t\t\t\t\t\t\t\t/* Separate endValue, and extract a value operator (e.g. \"+=\", \"-=\") if one exists. */\n\t\t\t\t\t\t\t\tseparatedValue = separateValue(property, endValue);\n\t\t\t\t\t\t\t\tendValue = separatedValue[0].replace(/^([+-\\/*])=/, function(match, subMatch) {\n\t\t\t\t\t\t\t\t\toperator = subMatch;\n\n\t\t\t\t\t\t\t\t\t/* Strip the operator off of the value. */\n\t\t\t\t\t\t\t\t\treturn \"\";\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\tendValueUnitType = separatedValue[1];\n\n\t\t\t\t\t\t\t\t/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */\n\t\t\t\t\t\t\t\tstartValue = parseFloat(startValue) || 0;\n\t\t\t\t\t\t\t\tendValue = parseFloat(endValue) || 0;\n\n\t\t\t\t\t\t\t\t/***************************************\n\t\t\t\t\t\t\t\t Property-Specific Value Conversion\n\t\t\t\t\t\t\t\t ***************************************/\n\n\t\t\t\t\t\t\t\t/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */\n\t\t\t\t\t\t\t\tif (endValueUnitType === \"%\") {\n\t\t\t\t\t\t\t\t\t/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),\n\t\t\t\t\t\t\t\t\t which is identical to the em unit's behavior, so we piggyback off of that. */\n\t\t\t\t\t\t\t\t\tif (/^(fontSize|lineHeight)$/.test(property)) {\n\t\t\t\t\t\t\t\t\t\t/* Convert % into an em decimal value. */\n\t\t\t\t\t\t\t\t\t\tendValue = endValue / 100;\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = \"em\";\n\t\t\t\t\t\t\t\t\t\t/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */\n\t\t\t\t\t\t\t\t\t} else if (/^scale/.test(property)) {\n\t\t\t\t\t\t\t\t\t\tendValue = endValue / 100;\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = \"\";\n\t\t\t\t\t\t\t\t\t\t/* For RGB components, take the defined percentage of 255 and strip off the unit type. */\n\t\t\t\t\t\t\t\t\t} else if (/(Red|Green|Blue)$/i.test(property)) {\n\t\t\t\t\t\t\t\t\t\tendValue = (endValue / 100) * 255;\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = \"\";\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/***************************\n\t\t\t\t\t\t\t Unit Ratio Calculation\n\t\t\t\t\t\t\t ***************************/\n\n\t\t\t\t\t\t\t/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of\n\t\t\t\t\t\t\t %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order\n\t\t\t\t\t\t\t for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred\n\t\t\t\t\t\t\t from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:\n\t\t\t\t\t\t\t 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels\n\t\t\t\t\t\t\t 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */\n\t\t\t\t\t\t\t/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,\n\t\t\t\t\t\t\t setting values with the target unit type then comparing the returned pixel value. */\n\t\t\t\t\t\t\t/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead\n\t\t\t\t\t\t\t of batching the SETs and GETs together upfront outweights the potential overhead\n\t\t\t\t\t\t\t of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */\n\t\t\t\t\t\t\t/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */\n\t\t\t\t\t\t\tvar calculateUnitRatios = function() {\n\n\t\t\t\t\t\t\t\t/************************\n\t\t\t\t\t\t\t\t Same Ratio Checks\n\t\t\t\t\t\t\t\t ************************/\n\n\t\t\t\t\t\t\t\t/* The properties below are used to determine whether the element differs sufficiently from this call's\n\t\t\t\t\t\t\t\t previously iterated element to also differ in its unit conversion ratios. If the properties match up with those\n\t\t\t\t\t\t\t\t of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,\n\t\t\t\t\t\t\t\t this is done to minimize DOM querying. */\n\t\t\t\t\t\t\t\tvar sameRatioIndicators = {\n\t\t\t\t\t\t\t\t\tmyParent: element.parentNode || document.body, /* GET */\n\t\t\t\t\t\t\t\t\tposition: CSS.getPropertyValue(element, \"position\"), /* GET */\n\t\t\t\t\t\t\t\t\tfontSize: CSS.getPropertyValue(element, \"fontSize\") /* GET */\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */\n\t\t\t\t\t\t\t\t\t\tsamePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),\n\t\t\t\t\t\t\t\t\t\t/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */\n\t\t\t\t\t\t\t\t\t\tsameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);\n\n\t\t\t\t\t\t\t\t/* Store these ratio indicators call-wide for the next element to compare against. */\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastParent = sameRatioIndicators.myParent;\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastPosition = sameRatioIndicators.position;\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;\n\n\t\t\t\t\t\t\t\t/***************************\n\t\t\t\t\t\t\t\t Element-Specific Units\n\t\t\t\t\t\t\t\t ***************************/\n\n\t\t\t\t\t\t\t\t/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement\n\t\t\t\t\t\t\t\t of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */\n\t\t\t\t\t\t\t\tvar measurement = 100,\n\t\t\t\t\t\t\t\t\t\tunitRatios = {};\n\n\t\t\t\t\t\t\t\tif (!sameEmRatio || !samePercentRatio) {\n\t\t\t\t\t\t\t\t\tvar dummy = data && data.isSVG ? document.createElementNS(\"http://www.w3.org/2000/svg\", \"rect\") : document.createElement(\"div\");\n\n\t\t\t\t\t\t\t\t\tVelocity.init(dummy);\n\t\t\t\t\t\t\t\t\tsameRatioIndicators.myParent.appendChild(dummy);\n\n\t\t\t\t\t\t\t\t\t/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.\n\t\t\t\t\t\t\t\t\t Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */\n\t\t\t\t\t\t\t\t\t/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */\n\t\t\t\t\t\t\t\t\t$.each([\"overflow\", \"overflowX\", \"overflowY\"], function(i, property) {\n\t\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, property, \"hidden\");\n\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"position\", sameRatioIndicators.position);\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"fontSize\", sameRatioIndicators.fontSize);\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"boxSizing\", \"content-box\");\n\n\t\t\t\t\t\t\t\t\t/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */\n\t\t\t\t\t\t\t\t\t$.each([\"minWidth\", \"maxWidth\", \"width\", \"minHeight\", \"maxHeight\", \"height\"], function(i, property) {\n\t\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, property, measurement + \"%\");\n\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\t/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"paddingLeft\", measurement + \"em\");\n\n\t\t\t\t\t\t\t\t\t/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, \"width\", null, true)) || 1) / measurement; /* GET */\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, \"height\", null, true)) || 1) / measurement; /* GET */\n\t\t\t\t\t\t\t\t\tunitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, \"paddingLeft\")) || 1) / measurement; /* GET */\n\n\t\t\t\t\t\t\t\t\tsameRatioIndicators.myParent.removeChild(dummy);\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\tunitRatios.emToPx = callUnitConversionData.lastEmToPx;\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t/***************************\n\t\t\t\t\t\t\t\t Element-Agnostic Units\n\t\t\t\t\t\t\t\t ***************************/\n\n\t\t\t\t\t\t\t\t/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked\n\t\t\t\t\t\t\t\t once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time\n\t\t\t\t\t\t\t\t that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,\n\t\t\t\t\t\t\t\t so we calculate it now. */\n\t\t\t\t\t\t\t\tif (callUnitConversionData.remToPx === null) {\n\t\t\t\t\t\t\t\t\t/* Default to browsers' default fontSize of 16px in the case of 0. */\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, \"fontSize\")) || 16; /* GET */\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t/* Similarly, viewport units are %-relative to the window's inner dimensions. */\n\t\t\t\t\t\t\t\tif (callUnitConversionData.vwToPx === null) {\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tunitRatios.remToPx = callUnitConversionData.remToPx;\n\t\t\t\t\t\t\t\tunitRatios.vwToPx = callUnitConversionData.vwToPx;\n\t\t\t\t\t\t\t\tunitRatios.vhToPx = callUnitConversionData.vhToPx;\n\n\t\t\t\t\t\t\t\tif (Velocity.debug >= 1) {\n\t\t\t\t\t\t\t\t\tconsole.log(\"Unit ratios: \" + JSON.stringify(unitRatios), element);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\treturn unitRatios;\n\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\t/********************\n\t\t\t\t\t\t\t Unit Conversion\n\t\t\t\t\t\t\t ********************/\n\n\t\t\t\t\t\t\t/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */\n\t\t\t\t\t\t\tif (/[\\/*]/.test(operator)) {\n\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType;\n\t\t\t\t\t\t\t\t/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType\n\t\t\t\t\t\t\t\t is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend\n\t\t\t\t\t\t\t\t on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio\n\t\t\t\t\t\t\t\t would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */\n\t\t\t\t\t\t\t\t/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */\n\t\t\t\t\t\t\t} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {\n\t\t\t\t\t\t\t\t/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */\n\t\t\t\t\t\t\t\t/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively\n\t\t\t\t\t\t\t\t match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,\n\t\t\t\t\t\t\t\t which remains past the point of the animation's completion. */\n\t\t\t\t\t\t\t\tif (endValue === 0) {\n\t\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType;\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).\n\t\t\t\t\t\t\t\t\t If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */\n\t\t\t\t\t\t\t\t\telementUnitConversionData = elementUnitConversionData || calculateUnitRatios();\n\n\t\t\t\t\t\t\t\t\t/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */\n\t\t\t\t\t\t\t\t\t/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */\n\t\t\t\t\t\t\t\t\tvar axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === \"x\") ? \"x\" : \"y\";\n\n\t\t\t\t\t\t\t\t\t/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:\n\t\t\t\t\t\t\t\t\t 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */\n\t\t\t\t\t\t\t\t\tswitch (startValueUnitType) {\n\t\t\t\t\t\t\t\t\t\tcase \"%\":\n\t\t\t\t\t\t\t\t\t\t\t/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.\n\t\t\t\t\t\t\t\t\t\t\t Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value\n\t\t\t\t\t\t\t\t\t\t\t to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= (axis === \"x\" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);\n\t\t\t\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\t\t\t\tcase \"px\":\n\t\t\t\t\t\t\t\t\t\t\t/* px acts as our midpoint in the unit conversion process; do nothing. */\n\t\t\t\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= elementUnitConversionData[startValueUnitType + \"ToPx\"];\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t/* Invert the px ratios to convert into to the target unit. */\n\t\t\t\t\t\t\t\t\tswitch (endValueUnitType) {\n\t\t\t\t\t\t\t\t\t\tcase \"%\":\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= 1 / (axis === \"x\" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);\n\t\t\t\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\t\t\t\tcase \"px\":\n\t\t\t\t\t\t\t\t\t\t\t/* startValue is already in px, do nothing; we're done. */\n\t\t\t\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= 1 / elementUnitConversionData[endValueUnitType + \"ToPx\"];\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/*********************\n\t\t\t\t\t\t\t Relative Values\n\t\t\t\t\t\t\t *********************/\n\n\t\t\t\t\t\t\t/* Operator logic must be performed last since it requires unit-normalized start and end values. */\n\t\t\t\t\t\t\t/* Note: Relative *percent values* do not behave how most people think; while one would expect \"+=50%\"\n\t\t\t\t\t\t\t to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:\n\t\t\t\t\t\t\t 50 points is added on top of the current % value. */\n\t\t\t\t\t\t\tswitch (operator) {\n\t\t\t\t\t\t\t\tcase \"+\":\n\t\t\t\t\t\t\t\t\tendValue = startValue + endValue;\n\t\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\t\tcase \"-\":\n\t\t\t\t\t\t\t\t\tendValue = startValue - endValue;\n\t\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\t\tcase \"*\":\n\t\t\t\t\t\t\t\t\tendValue = startValue * endValue;\n\t\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\t\tcase \"/\":\n\t\t\t\t\t\t\t\t\tendValue = startValue / endValue;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/**************************\n\t\t\t\t\t\t\t tweensContainer Push\n\t\t\t\t\t\t\t **************************/\n\n\t\t\t\t\t\t\t/* Construct the per-property tween object, and push it to the element's tweensContainer. */\n\t\t\t\t\t\t\ttweensContainer[property] = {\n\t\t\t\t\t\t\t\trootPropertyValue: rootPropertyValue,\n\t\t\t\t\t\t\t\tstartValue: startValue,\n\t\t\t\t\t\t\t\tcurrentValue: startValue,\n\t\t\t\t\t\t\t\tendValue: endValue,\n\t\t\t\t\t\t\t\tunitType: endValueUnitType,\n\t\t\t\t\t\t\t\teasing: easing\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tif (pattern) {\n\t\t\t\t\t\t\t\ttweensContainer[property].pattern = pattern;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tif (Velocity.debug) {\n\t\t\t\t\t\t\t\tconsole.log(\"tweensContainer (\" + property + \"): \" + JSON.stringify(tweensContainer[property]), element);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\t/* Create a tween out of each property, and append its associated data to tweensContainer. */\n\t\t\t\t\t\tfor (var property in propertiesMap) {\n\n\t\t\t\t\t\t\tif (!propertiesMap.hasOwnProperty(property)) {\n\t\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t/* The original property name's format must be used for the parsePropertyValue() lookup,\n\t\t\t\t\t\t\t but we then use its camelCase styling to normalize it for manipulation. */\n\t\t\t\t\t\t\tvar propertyName = CSS.Names.camelCase(property),\n\t\t\t\t\t\t\t\t\tvalueData = parsePropertyValue(propertiesMap[property]);\n\n\t\t\t\t\t\t\t/* Find shorthand color properties that have been passed a hex string. */\n\t\t\t\t\t\t\t/* Would be quicker to use CSS.Lists.colors.includes() if possible */\n\t\t\t\t\t\t\tif (_inArray(CSS.Lists.colors, propertyName)) {\n\t\t\t\t\t\t\t\t/* Parse the value data for each shorthand. */\n\t\t\t\t\t\t\t\tvar endValue = valueData[0],\n\t\t\t\t\t\t\t\t\t\teasing = valueData[1],\n\t\t\t\t\t\t\t\t\t\tstartValue = valueData[2];\n\n\t\t\t\t\t\t\t\tif (CSS.RegEx.isHex.test(endValue)) {\n\t\t\t\t\t\t\t\t\t/* Convert the hex strings into their RGB component arrays. */\n\t\t\t\t\t\t\t\t\tvar colorComponents = [\"Red\", \"Green\", \"Blue\"],\n\t\t\t\t\t\t\t\t\t\t\tendValueRGB = CSS.Values.hexToRgb(endValue),\n\t\t\t\t\t\t\t\t\t\t\tstartValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;\n\n\t\t\t\t\t\t\t\t\t/* Inject the RGB component tweens into propertiesMap. */\n\t\t\t\t\t\t\t\t\tfor (var i = 0; i < colorComponents.length; i++) {\n\t\t\t\t\t\t\t\t\t\tvar dataArray = [endValueRGB[i]];\n\n\t\t\t\t\t\t\t\t\t\tif (easing) {\n\t\t\t\t\t\t\t\t\t\t\tdataArray.push(easing);\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\tif (startValueRGB !== undefined) {\n\t\t\t\t\t\t\t\t\t\t\tdataArray.push(startValueRGB[i]);\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\tfixPropertyValue(propertyName + colorComponents[i], dataArray);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t/* If we have replaced a shortcut color value then don't update the standard property name */\n\t\t\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tfixPropertyValue(propertyName, valueData);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Along with its property data, store a reference to the element itself onto tweensContainer. */\n\t\t\t\t\t\ttweensContainer.element = element;\n\t\t\t\t\t}\n\n\t\t\t\t\t/*****************\n\t\t\t\t\t Call Push\n\t\t\t\t\t *****************/\n\n\t\t\t\t\t/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not\n\t\t\t\t\t being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */\n\t\t\t\t\tif (tweensContainer.element) {\n\t\t\t\t\t\t/* Apply the \"velocity-animating\" indicator class. */\n\t\t\t\t\t\tCSS.Values.addClass(element, \"velocity-animating\");\n\n\t\t\t\t\t\t/* The call array houses the tweensContainers for each element being animated in the current call. */\n\t\t\t\t\t\tcall.push(tweensContainer);\n\n\t\t\t\t\t\tdata = Data(element);\n\n\t\t\t\t\t\tif (data) {\n\t\t\t\t\t\t\t/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */\n\t\t\t\t\t\t\tif (opts.queue === \"\") {\n\n\t\t\t\t\t\t\t\tdata.tweensContainer = tweensContainer;\n\t\t\t\t\t\t\t\tdata.opts = opts;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* Switch on the element's animating flag. */\n\t\t\t\t\t\t\tdata.isAnimating = true;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Once the final element in this call's element set has been processed, push the call array onto\n\t\t\t\t\t\t Velocity.State.calls for the animation tick to immediately begin processing. */\n\t\t\t\t\t\tif (elementsIndex === elementsLength - 1) {\n\t\t\t\t\t\t\t/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.\n\t\t\t\t\t\t\t Anything on this call container is subjected to tick() processing. */\n\t\t\t\t\t\t\tVelocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);\n\n\t\t\t\t\t\t\t/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */\n\t\t\t\t\t\t\tif (Velocity.State.isTicking === false) {\n\t\t\t\t\t\t\t\tVelocity.State.isTicking = true;\n\n\t\t\t\t\t\t\t\t/* Start the tick loop. */\n\t\t\t\t\t\t\t\ttick();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\telementsIndex++;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t/* When the queue option is set to false, the call skips the element's queue and fires immediately. */\n\t\t\t\tif (opts.queue === false) {\n\t\t\t\t\t/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),\n\t\t\t\t\t we manually inject the delay property here with an explicit setTimeout. */\n\t\t\t\t\tif (opts.delay) {\n\n\t\t\t\t\t\t/* Temporarily store delayed elements to facilitate access for global pause/resume */\n\t\t\t\t\t\tvar callIndex = Velocity.State.delayedElements.count++;\n\t\t\t\t\t\tVelocity.State.delayedElements[callIndex] = element;\n\n\t\t\t\t\t\tvar delayComplete = (function(index) {\n\t\t\t\t\t\t\treturn function() {\n\t\t\t\t\t\t\t\t/* Clear the temporary element */\n\t\t\t\t\t\t\t\tVelocity.State.delayedElements[index] = false;\n\n\t\t\t\t\t\t\t\t/* Finally, issue the call */\n\t\t\t\t\t\t\t\tbuildQueue();\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t})(callIndex);\n\n\t\t\t\t\t\tData(element).delayBegin = (new Date()).getTime();\n\t\t\t\t\t\tData(element).delay = parseFloat(opts.delay);\n\t\t\t\t\t\tData(element).delayTimer = {\n\t\t\t\t\t\t\tsetTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),\n\t\t\t\t\t\t\tnext: delayComplete\n\t\t\t\t\t\t};\n\t\t\t\t\t} else {\n\t\t\t\t\t\tbuildQueue();\n\t\t\t\t\t}\n\t\t\t\t\t/* Otherwise, the call undergoes element queueing as normal. */\n\t\t\t\t\t/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */\n\t\t\t\t} else {\n\t\t\t\t\t$.queue(element, opts.queue, function(next, clearQueue) {\n\t\t\t\t\t\t/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,\n\t\t\t\t\t\t so it's fine if this is repeatedly triggered for each element in the associated call.) */\n\t\t\t\t\t\tif (clearQueue === true) {\n\t\t\t\t\t\t\tif (promiseData.promise) {\n\t\t\t\t\t\t\t\tpromiseData.resolver(elements);\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t/* Do not continue with animation queueing. */\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.\n\t\t\t\t\t\t See completeCall() for further details. */\n\t\t\t\t\t\tVelocity.velocityQueueEntryFlag = true;\n\n\t\t\t\t\t\tbuildQueue(next);\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\t/*********************\n\t\t\t\t Auto-Dequeuing\n\t\t\t\t *********************/\n\n\t\t\t\t/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element\n\t\t\t\t must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking\n\t\t\t\t for the \"inprogress\" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's\n\t\t\t\t queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's\n\t\t\t\t first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */\n\t\t\t\t/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until\n\t\t\t\t each one of the elements in the set has reached the end of its individually pre-existing queue chain. */\n\t\t\t\t/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.\n\t\t\t\t Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */\n\t\t\t\tif ((opts.queue === \"\" || opts.queue === \"fx\") && $.queue(element)[0] !== \"inprogress\") {\n\t\t\t\t\t$.dequeue(element);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/**************************\n\t\t\t Element Set Iteration\n\t\t\t **************************/\n\n\t\t\t/* If the \"nodeType\" property exists on the elements variable, we're animating a single element.\n\t\t\t Place it in an array so that $.each() can iterate over it. */\n\t\t\t$.each(elements, function(i, element) {\n\t\t\t\t/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */\n\t\t\t\tif (Type.isNode(element)) {\n\t\t\t\t\tprocessElement(element, i);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t/******************\n\t\t\t Option: Loop\n\t\t\t ******************/\n\n\t\t\t/* The loop option accepts an integer indicating how many times the element should loop between the values in the\n\t\t\t current call's properties map and the element's property values prior to this call. */\n\t\t\t/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs\n\t\t\t to undergo its queue insertion prior to the loop option generating its series of constituent \"reverse\" calls,\n\t\t\t which chain after the current call. Two reverse calls (two \"alternations\") constitute one loop. */\n\t\t\topts = $.extend({}, Velocity.defaults, options);\n\t\t\topts.loop = parseInt(opts.loop, 10);\n\t\t\tvar reverseCallsCount = (opts.loop * 2) - 1;\n\n\t\t\tif (opts.loop) {\n\t\t\t\t/* Double the loop count to convert it into its appropriate number of \"reverse\" calls.\n\t\t\t\t Subtract 1 from the resulting value since the current call is included in the total alternation count. */\n\t\t\t\tfor (var x = 0; x < reverseCallsCount; x++) {\n\t\t\t\t\t/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object\n\t\t\t\t\t isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse\n\t\t\t\t\t call so that the delay logic that occurs inside *Pre-Queueing* can process it. */\n\t\t\t\t\tvar reverseOptions = {\n\t\t\t\t\t\tdelay: opts.delay,\n\t\t\t\t\t\tprogress: opts.progress\n\t\t\t\t\t};\n\n\t\t\t\t\t/* If a complete callback was passed into this call, transfer it to the loop redirect's final \"reverse\" call\n\t\t\t\t\t so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */\n\t\t\t\t\tif (x === reverseCallsCount - 1) {\n\t\t\t\t\t\treverseOptions.display = opts.display;\n\t\t\t\t\t\treverseOptions.visibility = opts.visibility;\n\t\t\t\t\t\treverseOptions.complete = opts.complete;\n\t\t\t\t\t}\n\n\t\t\t\t\tanimate(elements, \"reverse\", reverseOptions);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/***************\n\t\t\t Chaining\n\t\t\t ***************/\n\n\t\t\t/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */\n\t\t\treturn getChain();\n\t\t};\n\n\t\t/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */\n\t\tVelocity = $.extend(animate, Velocity);\n\t\t/* For legacy support, also expose the literal animate method. */\n\t\tVelocity.animate = animate;\n\n\t\t/**************\n\t\t Timing\n\t\t **************/\n\n\t\t/* Ticker function. */\n\t\tvar ticker = window.requestAnimationFrame || rAFShim;\n\n\t\t/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.\n\t\t To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile\n\t\t devices to avoid wasting battery power on inactive tabs. */\n\t\t/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */\n\t\tif (!Velocity.State.isMobile && document.hidden !== undefined) {\n\t\t\tvar updateTicker = function() {\n\t\t\t\t/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */\n\t\t\t\tif (document.hidden) {\n\t\t\t\t\tticker = function(callback) {\n\t\t\t\t\t\t/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */\n\t\t\t\t\t\treturn setTimeout(function() {\n\t\t\t\t\t\t\tcallback(true);\n\t\t\t\t\t\t}, 16);\n\t\t\t\t\t};\n\n\t\t\t\t\t/* The rAF loop has been paused by the browser, so we manually restart the tick. */\n\t\t\t\t\ttick();\n\t\t\t\t} else {\n\t\t\t\t\tticker = window.requestAnimationFrame || rAFShim;\n\t\t\t\t}\n\t\t\t};\n\n\t\t\t/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */\n\t\t\tupdateTicker();\n\n\t\t\t/* And then run check again every time visibility changes */\n\t\t\tdocument.addEventListener(\"visibilitychange\", updateTicker);\n\t\t}\n\n\t\t/************\n\t\t Tick\n\t\t ************/\n\n\t\t/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */\n\t\tfunction tick(timestamp) {\n\t\t\t/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.\n\t\t\t We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever\n\t\t\t the browser's next tick sync time occurs, which results in the first elements subjected to Velocity\n\t\t\t calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore\n\t\t\t the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated\n\t\t\t by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */\n\t\t\tif (timestamp) {\n\t\t\t\t/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is\n\t\t\t\t under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.\n\t\t\t\t We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */\n\t\t\t\tvar timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();\n\n\t\t\t\t/********************\n\t\t\t\t Call Iteration\n\t\t\t\t ********************/\n\n\t\t\t\tvar callsLength = Velocity.State.calls.length;\n\n\t\t\t\t/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)\n\t\t\t\t when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation\n\t\t\t\t has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */\n\t\t\t\tif (callsLength > 10000) {\n\t\t\t\t\tVelocity.State.calls = compactSparseArray(Velocity.State.calls);\n\t\t\t\t\tcallsLength = Velocity.State.calls.length;\n\t\t\t\t}\n\n\t\t\t\t/* Iterate through each active call. */\n\t\t\t\tfor (var i = 0; i < callsLength; i++) {\n\t\t\t\t\t/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */\n\t\t\t\t\tif (!Velocity.State.calls[i]) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\n\t\t\t\t\t/************************\n\t\t\t\t\t Call-Wide Variables\n\t\t\t\t\t ************************/\n\n\t\t\t\t\tvar callContainer = Velocity.State.calls[i],\n\t\t\t\t\t\t\tcall = callContainer[0],\n\t\t\t\t\t\t\topts = callContainer[2],\n\t\t\t\t\t\t\ttimeStart = callContainer[3],\n\t\t\t\t\t\t\tfirstTick = !!timeStart,\n\t\t\t\t\t\t\ttweenDummyValue = null,\n\t\t\t\t\t\t\tpauseObject = callContainer[5],\n\t\t\t\t\t\t\tmillisecondsEllapsed = callContainer[6];\n\n\n\n\t\t\t\t\t/* If timeStart is undefined, then this is the first time that this call has been processed by tick().\n\t\t\t\t\t We assign timeStart now so that its value is as close to the real animation start time as possible.\n\t\t\t\t\t (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay\n\t\t\t\t\t between that time and now would cause the first few frames of the tween to be skipped since\n\t\t\t\t\t percentComplete is calculated relative to timeStart.) */\n\t\t\t\t\t/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the\n\t\t\t\t\t first tick iteration isn't wasted by animating at 0% tween completion, which would produce the\n\t\t\t\t\t same style value as the element's current value. */\n\t\t\t\t\tif (!timeStart) {\n\t\t\t\t\t\ttimeStart = Velocity.State.calls[i][3] = timeCurrent - 16;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* If a pause object is present, skip processing unless it has been set to resume */\n\t\t\t\t\tif (pauseObject) {\n\t\t\t\t\t\tif (pauseObject.resume === true) {\n\t\t\t\t\t\t\t/* Update the time start to accomodate the paused completion amount */\n\t\t\t\t\t\t\ttimeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);\n\n\t\t\t\t\t\t\t/* Remove pause object after processing */\n\t\t\t\t\t\t\tcallContainer[5] = null;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tmillisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;\n\n\t\t\t\t\t/* The tween's completion percentage is relative to the tween's start time, not the tween's start value\n\t\t\t\t\t (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).\n\t\t\t\t\t Accordingly, we ensure that percentComplete does not exceed 1. */\n\t\t\t\t\tvar percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);\n\n\t\t\t\t\t/**********************\n\t\t\t\t\t Element Iteration\n\t\t\t\t\t **********************/\n\n\t\t\t\t\t/* For every call, iterate through each of the elements in its set. */\n\t\t\t\t\tfor (var j = 0, callLength = call.length; j < callLength; j++) {\n\t\t\t\t\t\tvar tweensContainer = call[j],\n\t\t\t\t\t\t\t\telement = tweensContainer.element;\n\n\t\t\t\t\t\t/* Check to see if this element has been deleted midway through the animation by checking for the\n\t\t\t\t\t\t continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */\n\t\t\t\t\t\tif (!Data(element)) {\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tvar transformPropertyExists = false;\n\n\t\t\t\t\t\t/**********************************\n\t\t\t\t\t\t Display & Visibility Toggling\n\t\t\t\t\t\t **********************************/\n\n\t\t\t\t\t\t/* If the display option is set to non-\"none\", set it upfront so that the element can become visible before tweening begins.\n\t\t\t\t\t\t (Otherwise, display's \"none\" value is set in completeCall() once the animation has completed.) */\n\t\t\t\t\t\tif (opts.display !== undefined && opts.display !== null && opts.display !== \"none\") {\n\t\t\t\t\t\t\tif (opts.display === \"flex\") {\n\t\t\t\t\t\t\t\tvar flexValues = [\"-webkit-box\", \"-moz-box\", \"-ms-flexbox\", \"-webkit-flex\"];\n\n\t\t\t\t\t\t\t\t$.each(flexValues, function(i, flexValue) {\n\t\t\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", flexValue);\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", opts.display);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Same goes with the visibility option, but its \"none\" equivalent is \"hidden\". */\n\t\t\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== \"hidden\") {\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"visibility\", opts.visibility);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/************************\n\t\t\t\t\t\t Property Iteration\n\t\t\t\t\t\t ************************/\n\n\t\t\t\t\t\t/* For every element, iterate through each property. */\n\t\t\t\t\t\tfor (var property in tweensContainer) {\n\t\t\t\t\t\t\t/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */\n\t\t\t\t\t\t\tif (tweensContainer.hasOwnProperty(property) && property !== \"element\") {\n\t\t\t\t\t\t\t\tvar tween = tweensContainer[property],\n\t\t\t\t\t\t\t\t\t\tcurrentValue,\n\t\t\t\t\t\t\t\t\t\t/* Easing can either be a pre-genereated function or a string that references a pre-registered easing\n\t\t\t\t\t\t\t\t\t\t on the Velocity.Easings object. In either case, return the appropriate easing *function*. */\n\t\t\t\t\t\t\t\t\t\teasing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;\n\n\t\t\t\t\t\t\t\t/******************************\n\t\t\t\t\t\t\t\t Current Value Calculation\n\t\t\t\t\t\t\t\t ******************************/\n\n\t\t\t\t\t\t\t\tif (Type.isString(tween.pattern)) {\n\t\t\t\t\t\t\t\t\tvar patternReplace = percentComplete === 1 ?\n\t\t\t\t\t\t\t\t\t\t\tfunction($0, index, round) {\n\t\t\t\t\t\t\t\t\t\t\t\tvar result = tween.endValue[index];\n\n\t\t\t\t\t\t\t\t\t\t\t\treturn round ? Math.round(result) : result;\n\t\t\t\t\t\t\t\t\t\t\t} :\n\t\t\t\t\t\t\t\t\t\t\tfunction($0, index, round) {\n\t\t\t\t\t\t\t\t\t\t\t\tvar startValue = tween.startValue[index],\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttweenDelta = tween.endValue[index] - startValue,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));\n\n\t\t\t\t\t\t\t\t\t\t\t\treturn round ? Math.round(result) : result;\n\t\t\t\t\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.pattern.replace(/{(\\d+)(!)?}/g, patternReplace);\n\t\t\t\t\t\t\t\t} else if (percentComplete === 1) {\n\t\t\t\t\t\t\t\t\t/* If this is the last tick pass (if we've reached 100% completion for this tween),\n\t\t\t\t\t\t\t\t\t ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.endValue;\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t/* Otherwise, calculate currentValue based on the current delta from startValue. */\n\t\t\t\t\t\t\t\t\tvar tweenDelta = tween.endValue - tween.startValue;\n\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));\n\t\t\t\t\t\t\t\t\t/* If no value change is occurring, don't proceed with DOM updating. */\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tif (!firstTick && (currentValue === tween.currentValue)) {\n\t\t\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\ttween.currentValue = currentValue;\n\n\t\t\t\t\t\t\t\t/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that\n\t\t\t\t\t\t\t\t it can be passed into the progress callback. */\n\t\t\t\t\t\t\t\tif (property === \"tween\") {\n\t\t\t\t\t\t\t\t\ttweenDummyValue = currentValue;\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t/******************\n\t\t\t\t\t\t\t\t\t Hooks: Part I\n\t\t\t\t\t\t\t\t\t ******************/\n\t\t\t\t\t\t\t\t\tvar hookRoot;\n\n\t\t\t\t\t\t\t\t\t/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used\n\t\t\t\t\t\t\t\t\t for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated\n\t\t\t\t\t\t\t\t\t rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's\n\t\t\t\t\t\t\t\t\t updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that\n\t\t\t\t\t\t\t\t\t subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */\n\t\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\n\t\t\t\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(property);\n\n\t\t\t\t\t\t\t\t\t\tvar rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];\n\n\t\t\t\t\t\t\t\t\t\tif (rootPropertyValueCache) {\n\t\t\t\t\t\t\t\t\t\t\ttween.rootPropertyValue = rootPropertyValueCache;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t/*****************\n\t\t\t\t\t\t\t\t\t DOM Update\n\t\t\t\t\t\t\t\t\t *****************/\n\n\t\t\t\t\t\t\t\t\t/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */\n\t\t\t\t\t\t\t\t\t/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */\n\t\t\t\t\t\t\t\t\tvar adjustedSetData = CSS.setPropertyValue(element, /* SET */\n\t\t\t\t\t\t\t\t\t\t\tproperty,\n\t\t\t\t\t\t\t\t\t\t\ttween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? \"\" : tween.unitType),\n\t\t\t\t\t\t\t\t\t\t\ttween.rootPropertyValue,\n\t\t\t\t\t\t\t\t\t\t\ttween.scrollData);\n\n\t\t\t\t\t\t\t\t\t/*******************\n\t\t\t\t\t\t\t\t\t Hooks: Part II\n\t\t\t\t\t\t\t\t\t *******************/\n\n\t\t\t\t\t\t\t\t\t/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */\n\t\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\n\t\t\t\t\t\t\t\t\t\t/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */\n\t\t\t\t\t\t\t\t\t\tif (CSS.Normalizations.registered[hookRoot]) {\n\t\t\t\t\t\t\t\t\t\t\tData(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot](\"extract\", null, adjustedSetData[1]);\n\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\tData(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t/***************\n\t\t\t\t\t\t\t\t\t Transforms\n\t\t\t\t\t\t\t\t\t ***************/\n\n\t\t\t\t\t\t\t\t\t/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */\n\t\t\t\t\t\t\t\t\tif (adjustedSetData[0] === \"transform\") {\n\t\t\t\t\t\t\t\t\t\ttransformPropertyExists = true;\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/****************\n\t\t\t\t\t\t mobileHA\n\t\t\t\t\t\t ****************/\n\n\t\t\t\t\t\t/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.\n\t\t\t\t\t\t It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */\n\t\t\t\t\t\tif (opts.mobileHA) {\n\t\t\t\t\t\t\t/* Don't set the null transform hack if we've already done so. */\n\t\t\t\t\t\t\tif (Data(element).transformCache.translate3d === undefined) {\n\t\t\t\t\t\t\t\t/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */\n\t\t\t\t\t\t\t\tData(element).transformCache.translate3d = \"(0px, 0px, 0px)\";\n\n\t\t\t\t\t\t\t\ttransformPropertyExists = true;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (transformPropertyExists) {\n\t\t\t\t\t\t\tCSS.flushTransformCache(element);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t/* The non-\"none\" display value is only applied to an element once -- when its associated call is first ticked through.\n\t\t\t\t\t Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */\n\t\t\t\t\tif (opts.display !== undefined && opts.display !== \"none\") {\n\t\t\t\t\t\tVelocity.State.calls[i][2].display = false;\n\t\t\t\t\t}\n\t\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== \"hidden\") {\n\t\t\t\t\t\tVelocity.State.calls[i][2].visibility = false;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */\n\t\t\t\t\tif (opts.progress) {\n\t\t\t\t\t\topts.progress.call(callContainer[1],\n\t\t\t\t\t\t\t\tcallContainer[1],\n\t\t\t\t\t\t\t\tpercentComplete,\n\t\t\t\t\t\t\t\tMath.max(0, (timeStart + opts.duration) - timeCurrent),\n\t\t\t\t\t\t\t\ttimeStart,\n\t\t\t\t\t\t\t\ttweenDummyValue);\n\t\t\t\t\t}\n\n\t\t\t\t\t/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */\n\t\t\t\t\tif (percentComplete === 1) {\n\t\t\t\t\t\tcompleteCall(i);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */\n\t\t\tif (Velocity.State.isTicking) {\n\t\t\t\tticker(tick);\n\t\t\t}\n\t\t}\n\n\t\t/**********************\n\t\t Call Completion\n\t\t **********************/\n\n\t\t/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */\n\t\tfunction completeCall(callIndex, isStopped) {\n\t\t\t/* Ensure the call exists. */\n\t\t\tif (!Velocity.State.calls[callIndex]) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\t/* Pull the metadata from the call. */\n\t\t\tvar call = Velocity.State.calls[callIndex][0],\n\t\t\t\t\telements = Velocity.State.calls[callIndex][1],\n\t\t\t\t\topts = Velocity.State.calls[callIndex][2],\n\t\t\t\t\tresolver = Velocity.State.calls[callIndex][4];\n\n\t\t\tvar remainingCallsExist = false;\n\n\t\t\t/*************************\n\t\t\t Element Finalization\n\t\t\t *************************/\n\n\t\t\tfor (var i = 0, callLength = call.length; i < callLength; i++) {\n\t\t\t\tvar element = call[i].element;\n\n\t\t\t\t/* If the user set display to \"none\" (intending to hide the element), set it now that the animation has completed. */\n\t\t\t\t/* Note: display:none isn't set when calls are manually stopped (via Velocity(\"stop\"). */\n\t\t\t\t/* Note: Display gets ignored with \"reverse\" calls and infinite loops, since this behavior would be undesirable. */\n\t\t\t\tif (!isStopped && !opts.loop) {\n\t\t\t\t\tif (opts.display === \"none\") {\n\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", opts.display);\n\t\t\t\t\t}\n\n\t\t\t\t\tif (opts.visibility === \"hidden\") {\n\t\t\t\t\t\tCSS.setPropertyValue(element, \"visibility\", opts.visibility);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t/* If the element's queue is empty (if only the \"inprogress\" item is left at position 0) or if its queue is about to run\n\t\t\t\t a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter\n\t\t\t\t an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,\n\t\t\t\t we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag\n\t\t\t\t is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */\n\t\t\t\tvar data = Data(element);\n\n\t\t\t\tif (opts.loop !== true && ($.queue(element)[1] === undefined || !/\\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {\n\t\t\t\t\t/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */\n\t\t\t\t\tif (data) {\n\t\t\t\t\t\tdata.isAnimating = false;\n\t\t\t\t\t\t/* Clear the element's rootPropertyValueCache, which will become stale. */\n\t\t\t\t\t\tdata.rootPropertyValueCache = {};\n\n\t\t\t\t\t\tvar transformHAPropertyExists = false;\n\t\t\t\t\t\t/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */\n\t\t\t\t\t\t$.each(CSS.Lists.transforms3D, function(i, transformName) {\n\t\t\t\t\t\t\tvar defaultValue = /^scale/.test(transformName) ? 1 : 0,\n\t\t\t\t\t\t\t\t\tcurrentValue = data.transformCache[transformName];\n\n\t\t\t\t\t\t\tif (data.transformCache[transformName] !== undefined && new RegExp(\"^\\\\(\" + defaultValue + \"[^.]\").test(currentValue)) {\n\t\t\t\t\t\t\t\ttransformHAPropertyExists = true;\n\n\t\t\t\t\t\t\t\tdelete data.transformCache[transformName];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\t/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */\n\t\t\t\t\t\tif (opts.mobileHA) {\n\t\t\t\t\t\t\ttransformHAPropertyExists = true;\n\t\t\t\t\t\t\tdelete data.transformCache.translate3d;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Flush the subproperty removals to the DOM. */\n\t\t\t\t\t\tif (transformHAPropertyExists) {\n\t\t\t\t\t\t\tCSS.flushTransformCache(element);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t/* Remove the \"velocity-animating\" indicator class. */\n\t\t\t\t\t\tCSS.Values.removeClass(element, \"velocity-animating\");\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t/*********************\n\t\t\t\t Option: Complete\n\t\t\t\t *********************/\n\n\t\t\t\t/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */\n\t\t\t\t/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity(\"stop\"). */\n\t\t\t\tif (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {\n\t\t\t\t\t/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */\n\t\t\t\t\ttry {\n\t\t\t\t\t\topts.complete.call(elements, elements);\n\t\t\t\t\t} catch (error) {\n\t\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\t\tthrow error;\n\t\t\t\t\t\t}, 1);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t/**********************\n\t\t\t\t Promise Resolving\n\t\t\t\t **********************/\n\n\t\t\t\t/* Note: Infinite loops don't return promises. */\n\t\t\t\tif (resolver && opts.loop !== true) {\n\t\t\t\t\tresolver(elements);\n\t\t\t\t}\n\n\t\t\t\t/****************************\n\t\t\t\t Option: Loop (Infinite)\n\t\t\t\t ****************************/\n\n\t\t\t\tif (data && opts.loop === true && !isStopped) {\n\t\t\t\t\t/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable\n\t\t\t\t\t continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */\n\t\t\t\t\t$.each(data.tweensContainer, function(propertyName, tweenContainer) {\n\t\t\t\t\t\tif (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {\n\t\t\t\t\t\t\tvar oldStartValue = tweenContainer.startValue;\n\n\t\t\t\t\t\t\ttweenContainer.startValue = tweenContainer.endValue;\n\t\t\t\t\t\t\ttweenContainer.endValue = oldStartValue;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === \"%\") {\n\t\t\t\t\t\t\ttweenContainer.endValue = 0;\n\t\t\t\t\t\t\ttweenContainer.startValue = 100;\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\n\t\t\t\t\tVelocity(element, \"reverse\", {loop: true, delay: opts.delay});\n\t\t\t\t}\n\n\t\t\t\t/***************\n\t\t\t\t Dequeueing\n\t\t\t\t ***************/\n\n\t\t\t\t/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),\n\t\t\t\t which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,\n\t\t\t\t $.dequeue() must still be called in order to completely clear jQuery's animation queue. */\n\t\t\t\tif (opts.queue !== false) {\n\t\t\t\t\t$.dequeue(element, opts.queue);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/************************\n\t\t\t Calls Array Cleanup\n\t\t\t ************************/\n\n\t\t\t/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().\n\t\t\t (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */\n\t\t\tVelocity.State.calls[callIndex] = false;\n\n\t\t\t/* Iterate through the calls array to determine if this was the final in-progress animation.\n\t\t\t If so, set a flag to end ticking and clear the calls array. */\n\t\t\tfor (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {\n\t\t\t\tif (Velocity.State.calls[j] !== false) {\n\t\t\t\t\tremainingCallsExist = true;\n\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (remainingCallsExist === false) {\n\t\t\t\t/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */\n\t\t\t\tVelocity.State.isTicking = false;\n\n\t\t\t\t/* Clear the calls array so that its length is reset. */\n\t\t\t\tdelete Velocity.State.calls;\n\t\t\t\tVelocity.State.calls = [];\n\t\t\t}\n\t\t}\n\n\t\t/******************\n\t\t Frameworks\n\t\t ******************/\n\n\t\t/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.\n\t\t If either framework is loaded, register a \"velocity\" extension pointing to Velocity's core animate() method.  Velocity\n\t\t also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are\n\t\t accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn\n\t\t (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */\n\t\tglobal.Velocity = Velocity;\n\n\t\tif (global !== window) {\n\t\t\t/* Assign the element function to Velocity's core animate() method. */\n\t\t\tglobal.fn.velocity = animate;\n\t\t\t/* Assign the object function's defaults to Velocity's global defaults object. */\n\t\t\tglobal.fn.velocity.defaults = Velocity.defaults;\n\t\t}\n\n\t\t/***********************\n\t\t Packaged Redirects\n\t\t ***********************/\n\n\t\t/* slideUp, slideDown */\n\t\t$.each([\"Down\", \"Up\"], function(i, direction) {\n\t\t\tVelocity.Redirects[\"slide\" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {\n\t\t\t\tvar opts = $.extend({}, options),\n\t\t\t\t\t\tbegin = opts.begin,\n\t\t\t\t\t\tcomplete = opts.complete,\n\t\t\t\t\t\tinlineValues = {},\n\t\t\t\t\t\tcomputedValues = {height: \"\", marginTop: \"\", marginBottom: \"\", paddingTop: \"\", paddingBottom: \"\"};\n\n\t\t\t\tif (opts.display === undefined) {\n\t\t\t\t\t/* Show the element before slideDown begins and hide the element after slideUp completes. */\n\t\t\t\t\t/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */\n\t\t\t\t\topts.display = (direction === \"Down\" ? (Velocity.CSS.Values.getDisplayType(element) === \"inline\" ? \"inline-block\" : \"block\") : \"none\");\n\t\t\t\t}\n\n\t\t\t\topts.begin = function() {\n\t\t\t\t\t/* If the user passed in a begin callback, fire it now. */\n\t\t\t\t\tif (elementsIndex === 0 && begin) {\n\t\t\t\t\t\tbegin.call(elements, elements);\n\t\t\t\t\t}\n\n\t\t\t\t\t/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */\n\t\t\t\t\tfor (var property in computedValues) {\n\t\t\t\t\t\tif (!computedValues.hasOwnProperty(property)) {\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tinlineValues[property] = element.style[property];\n\n\t\t\t\t\t\t/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,\n\t\t\t\t\t\t use forcefeeding to start from computed values and animate down to 0. */\n\t\t\t\t\t\tvar propertyValue = CSS.getPropertyValue(element, property);\n\t\t\t\t\t\tcomputedValues[property] = (direction === \"Down\") ? [propertyValue, 0] : [0, propertyValue];\n\t\t\t\t\t}\n\n\t\t\t\t\t/* Force vertical overflow content to clip so that sliding works as expected. */\n\t\t\t\t\tinlineValues.overflow = element.style.overflow;\n\t\t\t\t\telement.style.overflow = \"hidden\";\n\t\t\t\t};\n\n\t\t\t\topts.complete = function() {\n\t\t\t\t\t/* Reset element to its pre-slide inline values once its slide animation is complete. */\n\t\t\t\t\tfor (var property in inlineValues) {\n\t\t\t\t\t\tif (inlineValues.hasOwnProperty(property)) {\n\t\t\t\t\t\t\telement.style[property] = inlineValues[property];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t/* If the user passed in a complete callback, fire it now. */\n\t\t\t\t\tif (elementsIndex === elementsSize - 1) {\n\t\t\t\t\t\tif (complete) {\n\t\t\t\t\t\t\tcomplete.call(elements, elements);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (promiseData) {\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\n\t\t\t\tVelocity(element, computedValues, opts);\n\t\t\t};\n\t\t});\n\n\t\t/* fadeIn, fadeOut */\n\t\t$.each([\"In\", \"Out\"], function(i, direction) {\n\t\t\tVelocity.Redirects[\"fade\" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {\n\t\t\t\tvar opts = $.extend({}, options),\n\t\t\t\t\t\tcomplete = opts.complete,\n\t\t\t\t\t\tpropertiesMap = {opacity: (direction === \"In\") ? 1 : 0};\n\n\t\t\t\t/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering\n\t\t\t\t callbacks by firing them only when the final element has been reached. */\n\t\t\t\tif (elementsIndex !== 0) {\n\t\t\t\t\topts.begin = null;\n\t\t\t\t}\n\t\t\t\tif (elementsIndex !== elementsSize - 1) {\n\t\t\t\t\topts.complete = null;\n\t\t\t\t} else {\n\t\t\t\t\topts.complete = function() {\n\t\t\t\t\t\tif (complete) {\n\t\t\t\t\t\t\tcomplete.call(elements, elements);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (promiseData) {\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\t/* If a display was passed in, use it. Otherwise, default to \"none\" for fadeOut or the element-specific default for fadeIn. */\n\t\t\t\t/* Note: We allow users to pass in \"null\" to skip display setting altogether. */\n\t\t\t\tif (opts.display === undefined) {\n\t\t\t\t\topts.display = (direction === \"In\" ? \"auto\" : \"none\");\n\t\t\t\t}\n\n\t\t\t\tVelocity(this, propertiesMap, opts);\n\t\t\t};\n\t\t});\n\n\t\treturn Velocity;\n\t}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));\n}));\n\n/******************\n Known Issues\n ******************/\n\n/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.\n Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties\n will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */\n"

/***/ }),

/***/ 749:
/*!**********************************!*\
  !*** ./_src/js/antares_forms.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
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

        self.elements.openSearchFilters();

        self.elements.tablePagination();
        self.elements.searchLogs();
        self.elements.disabledDashboardChartCompareMode();
        self.elements.stopScroll();
        self.elements.updateHeightChartJS();
        self.elements.menuAsideCategoryActiveScroll();
        self.elements.logsCorrectTimelineBorder();

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

        enquire.register('screen and (max-width: 1366px)', {
            //mobile readonly for multiple
            match: function match() {
                $('select').on('select2:open', function () {
                    $('input').prop('focus', 0);
                });
            }
        });

        $(window).on('resize', function () {
            $('select').select2('close');
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
            // enquire.register('screen and (max-width:768px)', {
            //   match: function() {

            // console.log('opensear on');
            $('.tab-search .search-box .zmdi-search').click(function () {
                // console.log('click');
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
                format: 'd.m.Y',
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
            // pagination
            __webpack_require__(/*! ./external/simple_pagination.js */ 750);

            var perPage = 10; // dont change position in code of this variable!

            function currentNumber(number) {
                // after click, variable perPage -> refresh simplePagination
                $('.current' + number).click(function () {
                    perPage = number;
                    var parent = $(this).closest('.datarow');
                    parent.find('.simple-pagination--list').pagination('updateItemsOnPage', number);
                    parent.find('.current10').removeClass('active'); // all disable
                    parent.find('.current25').removeClass('active');
                    parent.find('.current50').removeClass('active');
                    parent.find('.current100').removeClass('active');

                    parent.find('.current' + number).addClass('active'); // enable correct
                    parent.find('> div').perfectScrollbar('update');
                    AntaresForms.elements.logsCorrectTimelineBorder();
                });
            }

            currentNumber(10);
            currentNumber(25);
            currentNumber(50);
            currentNumber(100);

            $('.simple-pagination--list').each(function () {
                var parent = $(this).closest('.datarow');
                var items = parent.find('.timeline li');
                var numItems = items.length;
                items.slice(perPage).hide();
                $(this).pagination({
                    items: numItems,
                    itemsOnPage: perPage,
                    cssStyle: 'antares-pagination',
                    prevText: '<i class="zmdi zmdi-long-arrow-left"></i>',
                    nextText: '<i class="zmdi zmdi-long-arrow-right"></i>',
                    displayedPages: 3,
                    ellipsePageSet: false,
                    edges: 1,
                    onPageClick: function onPageClick(pageNumber) {
                        var showFrom = perPage * (pageNumber - 1);
                        var showTo = showFrom + perPage;
                        items.hide().slice(showFrom, showTo).show();
                        parent.find('> div').perfectScrollbar('update');
                        componentHandler.upgradeAllRegistered();
                        parent.adjustCardHeight();
                        AntaresForms.elements.logsCorrectTimelineBorder();
                    }
                });
                parent.adjustCardHeight();
            });

            componentHandler.upgradeAllRegistered();
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

            (function select2() {
                //select2 - better, faster, harder, stronger

                var select2Base = {
                    dropdownAutoWidth: true,
                    // placeholder: 'Select an option',
                    theme: 'selectAR',
                    allowClear: true,
                    //disable search below
                    minimumResultsForSearch: Infinity
                };

                // $.fn.select2.defaults.set("theme", "AR");

                $('[data-selectAR]').each(function () {
                    var myData = $(this).attr('data-select2--class');
                    if (myData === undefined) {
                        myData = '';
                    }
                    $(this).select2($.extend({}, select2Base, {
                        theme: 'selectAR ' + myData
                    })).on('change', function () {
                        //validation if needed
                        if ($(this).closest('.form-validation').length) {
                            // $(this).valid();
                        }
                        $(this).closest('.input-field').removeClass('error');
                    });
                });

                //WITH SEARCH
                $('[data-selectAR--search]').each(function () {
                    var myData = $(this).attr('data-select2--class');
                    if (myData === undefined) {
                        myData = '';
                    }
                    $(this).select2($.extend({}, select2Base, {
                        theme: 'selectAR ' + myData,
                        minimumResultsForSearch: 1
                    })).on('change', function () {
                        //validation if needed
                        if ($(this).closest('.form-validation').length) {
                            // $(this).valid();
                        }
                        $(this).closest('.input-field').removeClass('error');
                    });
                });

                //MDL
                $('[data-selectAR--mdl]').each(function () {
                    var myData = $(this).attr('data-select2--class');
                    if (myData === undefined) {
                        myData = '';
                    }
                    $(this).select2($.extend({}, select2Base, {
                        theme: 'mdl' + myData
                    })).on('change', function () {
                        //validation if needed
                        if ($(this).closest('.form-validation').length) {
                            // $(this).valid();
                        }
                        $(this).closest('.input-field').removeClass('error');
                    });
                });

                //MDL big
                $('[data-selectAR--mdl-big]').each(function () {
                    var myData = $(this).attr('data-select2--class');
                    if (myData === undefined) {
                        myData = '';
                    }
                    $(this).select2($.extend({}, select2Base, {
                        theme: 'mdl-big ' + myData
                    })).on('change', function () {
                        //validation if needed
                        if ($(this).closest('.form-validation').length) {
                            // $(this).valid();
                        }
                        $(this).closest('.input-field').removeClass('error');
                    });
                });
                //MDL short (v2)
                $('[data-selectAR--mdl-short]').each(function () {
                    var myData = $(this).attr('data-select2--class');
                    if (myData === undefined) {
                        myData = '';
                    }
                    $(this).select2($.extend({}, select2Base, {
                        theme: 'mdl-short ' + myData
                    })).on('change', function () {
                        //validation if needed
                        if ($(this).closest('.form-validation').length) {
                            // $(this).valid();
                        }
                        $(this).closest('.input-field').removeClass('error');
                    });
                });

                //Select - tags
                $('[data-selectAR--tags]').each(function () {
                    var myData = $(this).attr('data-select2--class');
                    if (myData === undefined) {
                        myData = '';
                    }
                    $(this).select2($.extend({}, select2Base, {
                        theme: 'tags ' + myData
                    })).on('change', function () {
                        //validation if needed
                        if ($(this).closest('.form-validation').length) {
                            // $(this).valid();
                        }
                        $(this).closest('.input-field').removeClass('error');
                    });
                });

                //Select - custom input (tags with 1 option)
                $('[data-selectAR--custom-input]').select2($.extend({}, select2Base, {
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
                })).on('change', function () {
                    //validation if needed
                    if ($(this).closest('.form-validation').length) {
                        // $(this).valid();
                    }
                    $(this).closest('.input-field').removeClass('error');
                });

                //https://github.com/select2/select2/issues/3901
                // $('[data-selectAR]').select2(select2Base);
                // //https://github.com/select2/select2/issues/3901
                //Flags integration
                //on init

                $('select[data-flag-select]').each(function () {
                    if ($(this).find('option:selected').length) {
                        var flag = $(this).find('option:selected').data('country');
                    } else {
                        return false;
                    }

                    $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
                });

                $('select[data-flag-select], [data-flag-select-translations]').on('change', function () {
                    if ($(this).find('option:selected').length) {
                        var flag = $(this).find('option:selected').data('country');
                    } else {
                        return false;
                    }

                    $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
                });

                //on init
                $('[data-flag-select]').select2({
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

                //on init
                $('[data-flag-select-translations]').select2({
                    theme: 'translations',
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

                //on init
                // Flag integration with search

                $('select[data-flag-select--search]').each(function () {
                    if ($(this).find('option:selected').length) {
                        var flag = $(this).find('option:selected').data('country');
                    } else {
                        return false;
                    }

                    $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
                });

                $('select[data-flag-select-translations]').each(function () {
                    if ($(this).find('option:selected').length) {
                        var flag = $(this).find('option:selected').data('country');
                    } else {
                        return false;
                    }
                    $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
                });

                $('[data-flag-select--search]').select2({
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

                $('select[data-flag-select--search]').on('change', function () {
                    if ($(this).find('option:selected').length) {
                        var flag = $(this).find('option:selected').data('country');
                    } else {
                        return false;
                    }

                    $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
                });
            })();

            // prefix control

            $('select').each(function () {
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

            enquire.register('screen and (max-width: 1366px)', {
                //mobile readonly for multiple
                match: function match() {
                    if ($('.select2-selection').hasClass('select2-selection--multiple')) {
                        $('.select2-selection--multiple').find('input').attr('readonly', 'true');
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
            });

            function tooltipMobile() {
                enquire.register('screen and (max-width: 1366px)', {
                    match: function match() {
                        $('[data-tooltip-mobile="true"]').each(function () {
                            // Notice the .each() loop, discussed below
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
                                    effect: function effect() {
                                        $(this).fadeOut(300); // "this" refers to the tooltip
                                    }
                                },
                                events: {
                                    show: function show(event, api) {
                                        var $el = $(api.elements.target[0]);
                                        $el.qtip('option', 'position.my', $el.data('tooltip-my-position') == undefined ? 'top center' : $el.data('tooltip-my-position'));
                                        $el.qtip('option', 'position.at', $el.data('tooltip-target-position') == undefined ? 'bottom center' : $el.data('tooltip-target-position'));
                                    }
                                }
                            });
                        });
                        $('[data-tooltip-inline-mobile!=""]').qtip({
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
                                attr: 'data-tooltip-inline-mobile'
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
                    },
                    unmatch: function unmatch() {
                        $('[data-hasqtip]').each(function () {
                            $(this).qtip('destroy');
                        });
                    }
                });
            }

            function tooltipDesktop() {
                enquire.register('screen and (min-width: 1367px)', {
                    match: function match() {
                        $('[data-tooltip-inline!=""]').qtip({
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
                        $('[data-tooltip="true"]').each(function () {
                            // Notice the .each() loop, discussed below
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
                                    effect: function effect() {
                                        $(this).fadeOut(300); // "this" refers to the tooltip
                                    }
                                },
                                events: {
                                    show: function show(event, api) {
                                        var $el = $(api.elements.target[0]);
                                        $el.qtip('option', 'position.my', $el.data('tooltip-my-position') == undefined ? 'top center' : $el.data('tooltip-my-position'));
                                        $el.qtip('option', 'position.at', $el.data('tooltip-target-position') == undefined ? 'bottom center' : $el.data('tooltip-target-position'));
                                    }
                                }
                            });
                        });
                    },

                    unmatch: function unmatch() {
                        var _this = this;

                        $('[data-hasqtip]').each(function () {
                            $(_this).qtip('destroy');
                        });
                    }
                });

                tooltipDesktop();
            }
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
            var table = $('.tbl-c .dataTables_wrapper+.dt-area-bottom.pagination.pagination--type2');
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
        enquire.register('screen and (min-width: 1450px)', {
            match: function match() {
                window.requestAnimationFrame(function () {
                    var thisHeightChart = $('.card--chart').height() - 60;
                    $('.chartjs-render-monitor').css('height', thisHeightChart);
                    function updateHeightCharts(containerTarget) {
                        if (containerTarget === undefined) {
                            return false;
                        }
                        var thisHeightChart = containerTarget.find('.card--chart').height() - 60;
                        containerTarget.find('.chartjs-render-monitor').css('height', thisHeightChart);
                    }

                    var container;
                    $('.ui-resizable-handle').mousedown(function () {
                        container = $(this).closest('.grid-stack-item');
                    });
                    $('.grid-stack').on('change.gridHEightCharts', function (event, ui) {
                        updateHeightCharts(container);
                    });
                });
            },
            unmatch: function unmatch() {
                $('.grid-stack').off('change.gridHEightCharts');
            }
        });
    }), _defineProperty(_elements, 'menuAsideCategoryActiveScroll', function menuAsideCategoryActiveScroll() {
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
    }), _elements)
};

$(function () {
    window.AntaresForms = AntaresForms;
    AntaresForms.init();

    ready('select', function () {
        window.AntaresForms.elements.select();
    });
});

/***/ }),

/***/ 750:
/*!***********************************************!*\
  !*** ./_src/js/external/simple_pagination.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
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

/***/ 751:
/*!***********************************************!*\
  !*** ./_src/js/external/modified/magnific.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
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
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 38)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 752:
/*!*************************************************!*\
  !*** ./_src/js/components/dropzone/dropzone.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


/*jslint browser: true*/
/*global $, jQuery, alert*/

// imports

__webpack_require__(/*! script-loader!dropzone */ 753);

Dropzone.autoDiscover = false;

var DropzoneAntares = function () {
    var defaults = {
        url: '127.0.0.1/target-url/',
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        parallelUploads: 20,
        autoQueue: false,
        init: DropzoneAntares.init
    };

    function DropzoneAntares(handler, attributes) {
        attributes = $.extend({}, defaults, attributes);
        if (handler.length) {
            var srcBase = [];
            Dropzone.autoDiscover = false;
            handler.each(function () {
                new Dropzone($(this).get(0), attributes).on('addedfile', function (file) {
                    var read = new FileReader();
                    read.readAsDataURL(file);

                    read.onloadend = function () {
                        srcBase.push(read.result);
                    };

                    $.each($('.dz-preview'), function (index) {

                        var image = $(this).find('.dz-image img');
                        image.hide();
                        setTimeout(function () {

                            image.attr('src', srcBase[index]);
                            image.show();
                        }, 100);
                    });
                });
            });
        }
    }
    DropzoneAntares.prototype.replaceBase64 = function (data) {
        var image = $('.dz-preview:last-child .dz-image img');
        image.hide();
        setTimeout(function () {

            image.attr('src', data);
            image.show();
        }, 400);
    }, DropzoneAntares.prototype.manualUpload = function () {

        //input file manual
        $('.file-upload').each(function () {

            $(this).find('input.input-upload').on('change', function () {

                var curVal = $(this).val();

                $(this).siblings('.file-path').val(curVal);
            });
        });
    };

    return DropzoneAntares;
}();

$(document).ready(function () {
    var handler = '.dropzone-form';
    var dropzone = new DropzoneAntares($(handler), { url: 'test' });
    dropzone.manualUpload();
    // $('#app-wrapper').on('DOMNodeInserted', handler, function() {
    //     dropzone.manualUpload();
    // });
});

/***/ }),

/***/ 753:
/*!*****************************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/dropzone/dist/dropzone.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ 5)(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/dropzone/dist/dropzone.js */ 754))

/***/ }),

/***/ 754:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/dropzone/dist/dropzone.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "\n/*\n *\n * More info at [www.dropzonejs.com](http://www.dropzonejs.com)\n *\n * Copyright (c) 2012, Matias Meno\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n *\n */\n\n(function() {\n  var Dropzone, Emitter, ExifRestore, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,\n    slice = [].slice,\n    extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n    hasProp = {}.hasOwnProperty;\n\n  noop = function() {};\n\n  Emitter = (function() {\n    function Emitter() {}\n\n    Emitter.prototype.addEventListener = Emitter.prototype.on;\n\n    Emitter.prototype.on = function(event, fn) {\n      this._callbacks = this._callbacks || {};\n      if (!this._callbacks[event]) {\n        this._callbacks[event] = [];\n      }\n      this._callbacks[event].push(fn);\n      return this;\n    };\n\n    Emitter.prototype.emit = function() {\n      var args, callback, callbacks, event, j, len;\n      event = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];\n      this._callbacks = this._callbacks || {};\n      callbacks = this._callbacks[event];\n      if (callbacks) {\n        for (j = 0, len = callbacks.length; j < len; j++) {\n          callback = callbacks[j];\n          callback.apply(this, args);\n        }\n      }\n      return this;\n    };\n\n    Emitter.prototype.removeListener = Emitter.prototype.off;\n\n    Emitter.prototype.removeAllListeners = Emitter.prototype.off;\n\n    Emitter.prototype.removeEventListener = Emitter.prototype.off;\n\n    Emitter.prototype.off = function(event, fn) {\n      var callback, callbacks, i, j, len;\n      if (!this._callbacks || arguments.length === 0) {\n        this._callbacks = {};\n        return this;\n      }\n      callbacks = this._callbacks[event];\n      if (!callbacks) {\n        return this;\n      }\n      if (arguments.length === 1) {\n        delete this._callbacks[event];\n        return this;\n      }\n      for (i = j = 0, len = callbacks.length; j < len; i = ++j) {\n        callback = callbacks[i];\n        if (callback === fn) {\n          callbacks.splice(i, 1);\n          break;\n        }\n      }\n      return this;\n    };\n\n    return Emitter;\n\n  })();\n\n  Dropzone = (function(superClass) {\n    var extend, resolveOption;\n\n    extend1(Dropzone, superClass);\n\n    Dropzone.prototype.Emitter = Emitter;\n\n\n    /*\n    This is a list of all available events you can register on a dropzone object.\n    \n    You can register an event handler like this:\n    \n        dropzone.on(\"dragEnter\", function() { });\n     */\n\n    Dropzone.prototype.events = [\"drop\", \"dragstart\", \"dragend\", \"dragenter\", \"dragover\", \"dragleave\", \"addedfile\", \"addedfiles\", \"removedfile\", \"thumbnail\", \"error\", \"errormultiple\", \"processing\", \"processingmultiple\", \"uploadprogress\", \"totaluploadprogress\", \"sending\", \"sendingmultiple\", \"success\", \"successmultiple\", \"canceled\", \"canceledmultiple\", \"complete\", \"completemultiple\", \"reset\", \"maxfilesexceeded\", \"maxfilesreached\", \"queuecomplete\"];\n\n    Dropzone.prototype.defaultOptions = {\n      url: null,\n      method: \"post\",\n      withCredentials: false,\n      timeout: 30000,\n      parallelUploads: 2,\n      uploadMultiple: false,\n      maxFilesize: 256,\n      paramName: \"file\",\n      createImageThumbnails: true,\n      maxThumbnailFilesize: 10,\n      thumbnailWidth: 120,\n      thumbnailHeight: 120,\n      thumbnailMethod: 'crop',\n      resizeWidth: null,\n      resizeHeight: null,\n      resizeMimeType: null,\n      resizeQuality: 0.8,\n      resizeMethod: 'contain',\n      filesizeBase: 1000,\n      maxFiles: null,\n      params: {},\n      headers: null,\n      clickable: true,\n      ignoreHiddenFiles: true,\n      acceptedFiles: null,\n      acceptedMimeTypes: null,\n      autoProcessQueue: true,\n      autoQueue: true,\n      addRemoveLinks: false,\n      previewsContainer: null,\n      hiddenInputContainer: \"body\",\n      capture: null,\n      renameFilename: null,\n      renameFile: null,\n      forceFallback: false,\n      dictDefaultMessage: \"Drop files here to upload\",\n      dictFallbackMessage: \"Your browser does not support drag'n'drop file uploads.\",\n      dictFallbackText: \"Please use the fallback form below to upload your files like in the olden days.\",\n      dictFileTooBig: \"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.\",\n      dictInvalidFileType: \"You can't upload files of this type.\",\n      dictResponseError: \"Server responded with {{statusCode}} code.\",\n      dictCancelUpload: \"Cancel upload\",\n      dictCancelUploadConfirmation: \"Are you sure you want to cancel this upload?\",\n      dictRemoveFile: \"Remove file\",\n      dictRemoveFileConfirmation: null,\n      dictMaxFilesExceeded: \"You can not upload any more files.\",\n      dictFileSizeUnits: {\n        tb: \"TB\",\n        gb: \"GB\",\n        mb: \"MB\",\n        kb: \"KB\",\n        b: \"b\"\n      },\n      init: function() {\n        return noop;\n      },\n      accept: function(file, done) {\n        return done();\n      },\n      fallback: function() {\n        var child, j, len, messageElement, ref, span;\n        this.element.className = this.element.className + \" dz-browser-not-supported\";\n        ref = this.element.getElementsByTagName(\"div\");\n        for (j = 0, len = ref.length; j < len; j++) {\n          child = ref[j];\n          if (/(^| )dz-message($| )/.test(child.className)) {\n            messageElement = child;\n            child.className = \"dz-message\";\n            continue;\n          }\n        }\n        if (!messageElement) {\n          messageElement = Dropzone.createElement(\"<div class=\\\"dz-message\\\"><span></span></div>\");\n          this.element.appendChild(messageElement);\n        }\n        span = messageElement.getElementsByTagName(\"span\")[0];\n        if (span) {\n          if (span.textContent != null) {\n            span.textContent = this.options.dictFallbackMessage;\n          } else if (span.innerText != null) {\n            span.innerText = this.options.dictFallbackMessage;\n          }\n        }\n        return this.element.appendChild(this.getFallbackForm());\n      },\n      resize: function(file, width, height, resizeMethod) {\n        var info, srcRatio, trgRatio;\n        info = {\n          srcX: 0,\n          srcY: 0,\n          srcWidth: file.width,\n          srcHeight: file.height\n        };\n        srcRatio = file.width / file.height;\n        if ((width == null) && (height == null)) {\n          width = info.srcWidth;\n          height = info.srcHeight;\n        } else if (width == null) {\n          width = height * srcRatio;\n        } else if (height == null) {\n          height = width / srcRatio;\n        }\n        width = Math.min(width, info.srcWidth);\n        height = Math.min(height, info.srcHeight);\n        trgRatio = width / height;\n        if (info.srcWidth > width || info.srcHeight > height) {\n          if (resizeMethod === 'crop') {\n            if (srcRatio > trgRatio) {\n              info.srcHeight = file.height;\n              info.srcWidth = info.srcHeight * trgRatio;\n            } else {\n              info.srcWidth = file.width;\n              info.srcHeight = info.srcWidth / trgRatio;\n            }\n          } else if (resizeMethod === 'contain') {\n            if (srcRatio > trgRatio) {\n              height = width / srcRatio;\n            } else {\n              width = height * srcRatio;\n            }\n          } else {\n            throw new Error(\"Unknown resizeMethod '\" + resizeMethod + \"'\");\n          }\n        }\n        info.srcX = (file.width - info.srcWidth) / 2;\n        info.srcY = (file.height - info.srcHeight) / 2;\n        info.trgWidth = width;\n        info.trgHeight = height;\n        return info;\n      },\n      transformFile: function(file, done) {\n        if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {\n          return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);\n        } else {\n          return done(file);\n        }\n      },\n      previewTemplate: \"<div class=\\\"dz-preview dz-file-preview\\\">\\n  <div class=\\\"dz-image\\\"><img data-dz-thumbnail /></div>\\n  <div class=\\\"dz-details\\\">\\n    <div class=\\\"dz-size\\\"><span data-dz-size></span></div>\\n    <div class=\\\"dz-filename\\\"><span data-dz-name></span></div>\\n  </div>\\n  <div class=\\\"dz-progress\\\"><span class=\\\"dz-upload\\\" data-dz-uploadprogress></span></div>\\n  <div class=\\\"dz-error-message\\\"><span data-dz-errormessage></span></div>\\n  <div class=\\\"dz-success-mark\\\">\\n    <svg width=\\\"54px\\\" height=\\\"54px\\\" viewBox=\\\"0 0 54 54\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xmlns:sketch=\\\"http://www.bohemiancoding.com/sketch/ns\\\">\\n      <title>Check</title>\\n      <defs></defs>\\n      <g id=\\\"Page-1\\\" stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\" sketch:type=\\\"MSPage\\\">\\n        <path d=\\\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\\\" id=\\\"Oval-2\\\" stroke-opacity=\\\"0.198794158\\\" stroke=\\\"#747474\\\" fill-opacity=\\\"0.816519475\\\" fill=\\\"#FFFFFF\\\" sketch:type=\\\"MSShapeGroup\\\"></path>\\n      </g>\\n    </svg>\\n  </div>\\n  <div class=\\\"dz-error-mark\\\">\\n    <svg width=\\\"54px\\\" height=\\\"54px\\\" viewBox=\\\"0 0 54 54\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xmlns:sketch=\\\"http://www.bohemiancoding.com/sketch/ns\\\">\\n      <title>Error</title>\\n      <defs></defs>\\n      <g id=\\\"Page-1\\\" stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\" sketch:type=\\\"MSPage\\\">\\n        <g id=\\\"Check-+-Oval-2\\\" sketch:type=\\\"MSLayerGroup\\\" stroke=\\\"#747474\\\" stroke-opacity=\\\"0.198794158\\\" fill=\\\"#FFFFFF\\\" fill-opacity=\\\"0.816519475\\\">\\n          <path d=\\\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\\\" id=\\\"Oval-2\\\" sketch:type=\\\"MSShapeGroup\\\"></path>\\n        </g>\\n      </g>\\n    </svg>\\n  </div>\\n</div>\",\n\n      /*\n      Those functions register themselves to the events on init and handle all\n      the user interface specific stuff. Overwriting them won't break the upload\n      but can break the way it's displayed.\n      You can overwrite them if you don't like the default behavior. If you just\n      want to add an additional event handler, register it on the dropzone object\n      and don't overwrite those options.\n       */\n      drop: function(e) {\n        return this.element.classList.remove(\"dz-drag-hover\");\n      },\n      dragstart: noop,\n      dragend: function(e) {\n        return this.element.classList.remove(\"dz-drag-hover\");\n      },\n      dragenter: function(e) {\n        return this.element.classList.add(\"dz-drag-hover\");\n      },\n      dragover: function(e) {\n        return this.element.classList.add(\"dz-drag-hover\");\n      },\n      dragleave: function(e) {\n        return this.element.classList.remove(\"dz-drag-hover\");\n      },\n      paste: noop,\n      reset: function() {\n        return this.element.classList.remove(\"dz-started\");\n      },\n      addedfile: function(file) {\n        var j, k, l, len, len1, len2, node, ref, ref1, ref2, removeFileEvent, removeLink, results;\n        if (this.element === this.previewsContainer) {\n          this.element.classList.add(\"dz-started\");\n        }\n        if (this.previewsContainer) {\n          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());\n          file.previewTemplate = file.previewElement;\n          this.previewsContainer.appendChild(file.previewElement);\n          ref = file.previewElement.querySelectorAll(\"[data-dz-name]\");\n          for (j = 0, len = ref.length; j < len; j++) {\n            node = ref[j];\n            node.textContent = file.name;\n          }\n          ref1 = file.previewElement.querySelectorAll(\"[data-dz-size]\");\n          for (k = 0, len1 = ref1.length; k < len1; k++) {\n            node = ref1[k];\n            node.innerHTML = this.filesize(file.size);\n          }\n          if (this.options.addRemoveLinks) {\n            file._removeLink = Dropzone.createElement(\"<a class=\\\"dz-remove\\\" href=\\\"javascript:undefined;\\\" data-dz-remove>\" + this.options.dictRemoveFile + \"</a>\");\n            file.previewElement.appendChild(file._removeLink);\n          }\n          removeFileEvent = (function(_this) {\n            return function(e) {\n              e.preventDefault();\n              e.stopPropagation();\n              if (file.status === Dropzone.UPLOADING) {\n                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {\n                  return _this.removeFile(file);\n                });\n              } else {\n                if (_this.options.dictRemoveFileConfirmation) {\n                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {\n                    return _this.removeFile(file);\n                  });\n                } else {\n                  return _this.removeFile(file);\n                }\n              }\n            };\n          })(this);\n          ref2 = file.previewElement.querySelectorAll(\"[data-dz-remove]\");\n          results = [];\n          for (l = 0, len2 = ref2.length; l < len2; l++) {\n            removeLink = ref2[l];\n            results.push(removeLink.addEventListener(\"click\", removeFileEvent));\n          }\n          return results;\n        }\n      },\n      removedfile: function(file) {\n        var ref;\n        if (file.previewElement) {\n          if ((ref = file.previewElement) != null) {\n            ref.parentNode.removeChild(file.previewElement);\n          }\n        }\n        return this._updateMaxFilesReachedClass();\n      },\n      thumbnail: function(file, dataUrl) {\n        var j, len, ref, thumbnailElement;\n        if (file.previewElement) {\n          file.previewElement.classList.remove(\"dz-file-preview\");\n          ref = file.previewElement.querySelectorAll(\"[data-dz-thumbnail]\");\n          for (j = 0, len = ref.length; j < len; j++) {\n            thumbnailElement = ref[j];\n            thumbnailElement.alt = file.name;\n            thumbnailElement.src = dataUrl;\n          }\n          return setTimeout(((function(_this) {\n            return function() {\n              return file.previewElement.classList.add(\"dz-image-preview\");\n            };\n          })(this)), 1);\n        }\n      },\n      error: function(file, message) {\n        var j, len, node, ref, results;\n        if (file.previewElement) {\n          file.previewElement.classList.add(\"dz-error\");\n          if (typeof message !== \"String\" && message.error) {\n            message = message.error;\n          }\n          ref = file.previewElement.querySelectorAll(\"[data-dz-errormessage]\");\n          results = [];\n          for (j = 0, len = ref.length; j < len; j++) {\n            node = ref[j];\n            results.push(node.textContent = message);\n          }\n          return results;\n        }\n      },\n      errormultiple: noop,\n      processing: function(file) {\n        if (file.previewElement) {\n          file.previewElement.classList.add(\"dz-processing\");\n          if (file._removeLink) {\n            return file._removeLink.textContent = this.options.dictCancelUpload;\n          }\n        }\n      },\n      processingmultiple: noop,\n      uploadprogress: function(file, progress, bytesSent) {\n        var j, len, node, ref, results;\n        if (file.previewElement) {\n          ref = file.previewElement.querySelectorAll(\"[data-dz-uploadprogress]\");\n          results = [];\n          for (j = 0, len = ref.length; j < len; j++) {\n            node = ref[j];\n            if (node.nodeName === 'PROGRESS') {\n              results.push(node.value = progress);\n            } else {\n              results.push(node.style.width = progress + \"%\");\n            }\n          }\n          return results;\n        }\n      },\n      totaluploadprogress: noop,\n      sending: noop,\n      sendingmultiple: noop,\n      success: function(file) {\n        if (file.previewElement) {\n          return file.previewElement.classList.add(\"dz-success\");\n        }\n      },\n      successmultiple: noop,\n      canceled: function(file) {\n        return this.emit(\"error\", file, \"Upload canceled.\");\n      },\n      canceledmultiple: noop,\n      complete: function(file) {\n        if (file._removeLink) {\n          file._removeLink.textContent = this.options.dictRemoveFile;\n        }\n        if (file.previewElement) {\n          return file.previewElement.classList.add(\"dz-complete\");\n        }\n      },\n      completemultiple: noop,\n      maxfilesexceeded: noop,\n      maxfilesreached: noop,\n      queuecomplete: noop,\n      addedfiles: noop\n    };\n\n    extend = function() {\n      var j, key, len, object, objects, target, val;\n      target = arguments[0], objects = 2 <= arguments.length ? slice.call(arguments, 1) : [];\n      for (j = 0, len = objects.length; j < len; j++) {\n        object = objects[j];\n        for (key in object) {\n          val = object[key];\n          target[key] = val;\n        }\n      }\n      return target;\n    };\n\n    function Dropzone(element1, options) {\n      var elementOptions, fallback, ref;\n      this.element = element1;\n      this.version = Dropzone.version;\n      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\\n*/g, \"\");\n      this.clickableElements = [];\n      this.listeners = [];\n      this.files = [];\n      if (typeof this.element === \"string\") {\n        this.element = document.querySelector(this.element);\n      }\n      if (!(this.element && (this.element.nodeType != null))) {\n        throw new Error(\"Invalid dropzone element.\");\n      }\n      if (this.element.dropzone) {\n        throw new Error(\"Dropzone already attached.\");\n      }\n      Dropzone.instances.push(this);\n      this.element.dropzone = this;\n      elementOptions = (ref = Dropzone.optionsForElement(this.element)) != null ? ref : {};\n      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});\n      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {\n        return this.options.fallback.call(this);\n      }\n      if (this.options.url == null) {\n        this.options.url = this.element.getAttribute(\"action\");\n      }\n      if (!this.options.url) {\n        throw new Error(\"No URL provided.\");\n      }\n      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {\n        throw new Error(\"You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.\");\n      }\n      if (this.options.acceptedMimeTypes) {\n        this.options.acceptedFiles = this.options.acceptedMimeTypes;\n        delete this.options.acceptedMimeTypes;\n      }\n      if (this.options.renameFilename != null) {\n        this.options.renameFile = (function(_this) {\n          return function(file) {\n            return _this.options.renameFilename.call(_this, file.name, file);\n          };\n        })(this);\n      }\n      this.options.method = this.options.method.toUpperCase();\n      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {\n        fallback.parentNode.removeChild(fallback);\n      }\n      if (this.options.previewsContainer !== false) {\n        if (this.options.previewsContainer) {\n          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, \"previewsContainer\");\n        } else {\n          this.previewsContainer = this.element;\n        }\n      }\n      if (this.options.clickable) {\n        if (this.options.clickable === true) {\n          this.clickableElements = [this.element];\n        } else {\n          this.clickableElements = Dropzone.getElements(this.options.clickable, \"clickable\");\n        }\n      }\n      this.init();\n    }\n\n    Dropzone.prototype.getAcceptedFiles = function() {\n      var file, j, len, ref, results;\n      ref = this.files;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        if (file.accepted) {\n          results.push(file);\n        }\n      }\n      return results;\n    };\n\n    Dropzone.prototype.getRejectedFiles = function() {\n      var file, j, len, ref, results;\n      ref = this.files;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        if (!file.accepted) {\n          results.push(file);\n        }\n      }\n      return results;\n    };\n\n    Dropzone.prototype.getFilesWithStatus = function(status) {\n      var file, j, len, ref, results;\n      ref = this.files;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        if (file.status === status) {\n          results.push(file);\n        }\n      }\n      return results;\n    };\n\n    Dropzone.prototype.getQueuedFiles = function() {\n      return this.getFilesWithStatus(Dropzone.QUEUED);\n    };\n\n    Dropzone.prototype.getUploadingFiles = function() {\n      return this.getFilesWithStatus(Dropzone.UPLOADING);\n    };\n\n    Dropzone.prototype.getAddedFiles = function() {\n      return this.getFilesWithStatus(Dropzone.ADDED);\n    };\n\n    Dropzone.prototype.getActiveFiles = function() {\n      var file, j, len, ref, results;\n      ref = this.files;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {\n          results.push(file);\n        }\n      }\n      return results;\n    };\n\n    Dropzone.prototype.init = function() {\n      var eventName, j, len, noPropagation, ref, ref1, setupHiddenFileInput;\n      if (this.element.tagName === \"form\") {\n        this.element.setAttribute(\"enctype\", \"multipart/form-data\");\n      }\n      if (this.element.classList.contains(\"dropzone\") && !this.element.querySelector(\".dz-message\")) {\n        this.element.appendChild(Dropzone.createElement(\"<div class=\\\"dz-default dz-message\\\"><span>\" + this.options.dictDefaultMessage + \"</span></div>\"));\n      }\n      if (this.clickableElements.length) {\n        setupHiddenFileInput = (function(_this) {\n          return function() {\n            if (_this.hiddenFileInput) {\n              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);\n            }\n            _this.hiddenFileInput = document.createElement(\"input\");\n            _this.hiddenFileInput.setAttribute(\"type\", \"file\");\n            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {\n              _this.hiddenFileInput.setAttribute(\"multiple\", \"multiple\");\n            }\n            _this.hiddenFileInput.className = \"dz-hidden-input\";\n            if (_this.options.acceptedFiles != null) {\n              _this.hiddenFileInput.setAttribute(\"accept\", _this.options.acceptedFiles);\n            }\n            if (_this.options.capture != null) {\n              _this.hiddenFileInput.setAttribute(\"capture\", _this.options.capture);\n            }\n            _this.hiddenFileInput.style.visibility = \"hidden\";\n            _this.hiddenFileInput.style.position = \"absolute\";\n            _this.hiddenFileInput.style.top = \"0\";\n            _this.hiddenFileInput.style.left = \"0\";\n            _this.hiddenFileInput.style.height = \"0\";\n            _this.hiddenFileInput.style.width = \"0\";\n            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);\n            return _this.hiddenFileInput.addEventListener(\"change\", function() {\n              var file, files, j, len;\n              files = _this.hiddenFileInput.files;\n              if (files.length) {\n                for (j = 0, len = files.length; j < len; j++) {\n                  file = files[j];\n                  _this.addFile(file);\n                }\n              }\n              _this.emit(\"addedfiles\", files);\n              return setupHiddenFileInput();\n            });\n          };\n        })(this);\n        setupHiddenFileInput();\n      }\n      this.URL = (ref = window.URL) != null ? ref : window.webkitURL;\n      ref1 = this.events;\n      for (j = 0, len = ref1.length; j < len; j++) {\n        eventName = ref1[j];\n        this.on(eventName, this.options[eventName]);\n      }\n      this.on(\"uploadprogress\", (function(_this) {\n        return function() {\n          return _this.updateTotalUploadProgress();\n        };\n      })(this));\n      this.on(\"removedfile\", (function(_this) {\n        return function() {\n          return _this.updateTotalUploadProgress();\n        };\n      })(this));\n      this.on(\"canceled\", (function(_this) {\n        return function(file) {\n          return _this.emit(\"complete\", file);\n        };\n      })(this));\n      this.on(\"complete\", (function(_this) {\n        return function(file) {\n          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {\n            return setTimeout((function() {\n              return _this.emit(\"queuecomplete\");\n            }), 0);\n          }\n        };\n      })(this));\n      noPropagation = function(e) {\n        e.stopPropagation();\n        if (e.preventDefault) {\n          return e.preventDefault();\n        } else {\n          return e.returnValue = false;\n        }\n      };\n      this.listeners = [\n        {\n          element: this.element,\n          events: {\n            \"dragstart\": (function(_this) {\n              return function(e) {\n                return _this.emit(\"dragstart\", e);\n              };\n            })(this),\n            \"dragenter\": (function(_this) {\n              return function(e) {\n                noPropagation(e);\n                return _this.emit(\"dragenter\", e);\n              };\n            })(this),\n            \"dragover\": (function(_this) {\n              return function(e) {\n                var efct;\n                try {\n                  efct = e.dataTransfer.effectAllowed;\n                } catch (undefined) {}\n                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';\n                noPropagation(e);\n                return _this.emit(\"dragover\", e);\n              };\n            })(this),\n            \"dragleave\": (function(_this) {\n              return function(e) {\n                return _this.emit(\"dragleave\", e);\n              };\n            })(this),\n            \"drop\": (function(_this) {\n              return function(e) {\n                noPropagation(e);\n                return _this.drop(e);\n              };\n            })(this),\n            \"dragend\": (function(_this) {\n              return function(e) {\n                return _this.emit(\"dragend\", e);\n              };\n            })(this)\n          }\n        }\n      ];\n      this.clickableElements.forEach((function(_this) {\n        return function(clickableElement) {\n          return _this.listeners.push({\n            element: clickableElement,\n            events: {\n              \"click\": function(evt) {\n                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(\".dz-message\")))) {\n                  _this.hiddenFileInput.click();\n                }\n                return true;\n              }\n            }\n          });\n        };\n      })(this));\n      this.enable();\n      return this.options.init.call(this);\n    };\n\n    Dropzone.prototype.destroy = function() {\n      var ref;\n      this.disable();\n      this.removeAllFiles(true);\n      if ((ref = this.hiddenFileInput) != null ? ref.parentNode : void 0) {\n        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);\n        this.hiddenFileInput = null;\n      }\n      delete this.element.dropzone;\n      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);\n    };\n\n    Dropzone.prototype.updateTotalUploadProgress = function() {\n      var activeFiles, file, j, len, ref, totalBytes, totalBytesSent, totalUploadProgress;\n      totalBytesSent = 0;\n      totalBytes = 0;\n      activeFiles = this.getActiveFiles();\n      if (activeFiles.length) {\n        ref = this.getActiveFiles();\n        for (j = 0, len = ref.length; j < len; j++) {\n          file = ref[j];\n          totalBytesSent += file.upload.bytesSent;\n          totalBytes += file.upload.total;\n        }\n        totalUploadProgress = 100 * totalBytesSent / totalBytes;\n      } else {\n        totalUploadProgress = 100;\n      }\n      return this.emit(\"totaluploadprogress\", totalUploadProgress, totalBytes, totalBytesSent);\n    };\n\n    Dropzone.prototype._getParamName = function(n) {\n      if (typeof this.options.paramName === \"function\") {\n        return this.options.paramName(n);\n      } else {\n        return \"\" + this.options.paramName + (this.options.uploadMultiple ? \"[\" + n + \"]\" : \"\");\n      }\n    };\n\n    Dropzone.prototype._renameFile = function(file) {\n      if (typeof this.options.renameFile !== \"function\") {\n        return file.name;\n      }\n      return this.options.renameFile(file);\n    };\n\n    Dropzone.prototype.getFallbackForm = function() {\n      var existingFallback, fields, fieldsString, form;\n      if (existingFallback = this.getExistingFallback()) {\n        return existingFallback;\n      }\n      fieldsString = \"<div class=\\\"dz-fallback\\\">\";\n      if (this.options.dictFallbackText) {\n        fieldsString += \"<p>\" + this.options.dictFallbackText + \"</p>\";\n      }\n      fieldsString += \"<input type=\\\"file\\\" name=\\\"\" + (this._getParamName(0)) + \"\\\" \" + (this.options.uploadMultiple ? 'multiple=\"multiple\"' : void 0) + \" /><input type=\\\"submit\\\" value=\\\"Upload!\\\"></div>\";\n      fields = Dropzone.createElement(fieldsString);\n      if (this.element.tagName !== \"FORM\") {\n        form = Dropzone.createElement(\"<form action=\\\"\" + this.options.url + \"\\\" enctype=\\\"multipart/form-data\\\" method=\\\"\" + this.options.method + \"\\\"></form>\");\n        form.appendChild(fields);\n      } else {\n        this.element.setAttribute(\"enctype\", \"multipart/form-data\");\n        this.element.setAttribute(\"method\", this.options.method);\n      }\n      return form != null ? form : fields;\n    };\n\n    Dropzone.prototype.getExistingFallback = function() {\n      var fallback, getFallback, j, len, ref, tagName;\n      getFallback = function(elements) {\n        var el, j, len;\n        for (j = 0, len = elements.length; j < len; j++) {\n          el = elements[j];\n          if (/(^| )fallback($| )/.test(el.className)) {\n            return el;\n          }\n        }\n      };\n      ref = [\"div\", \"form\"];\n      for (j = 0, len = ref.length; j < len; j++) {\n        tagName = ref[j];\n        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {\n          return fallback;\n        }\n      }\n    };\n\n    Dropzone.prototype.setupEventListeners = function() {\n      var elementListeners, event, j, len, listener, ref, results;\n      ref = this.listeners;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        elementListeners = ref[j];\n        results.push((function() {\n          var ref1, results1;\n          ref1 = elementListeners.events;\n          results1 = [];\n          for (event in ref1) {\n            listener = ref1[event];\n            results1.push(elementListeners.element.addEventListener(event, listener, false));\n          }\n          return results1;\n        })());\n      }\n      return results;\n    };\n\n    Dropzone.prototype.removeEventListeners = function() {\n      var elementListeners, event, j, len, listener, ref, results;\n      ref = this.listeners;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        elementListeners = ref[j];\n        results.push((function() {\n          var ref1, results1;\n          ref1 = elementListeners.events;\n          results1 = [];\n          for (event in ref1) {\n            listener = ref1[event];\n            results1.push(elementListeners.element.removeEventListener(event, listener, false));\n          }\n          return results1;\n        })());\n      }\n      return results;\n    };\n\n    Dropzone.prototype.disable = function() {\n      var file, j, len, ref, results;\n      this.clickableElements.forEach(function(element) {\n        return element.classList.remove(\"dz-clickable\");\n      });\n      this.removeEventListeners();\n      ref = this.files;\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        results.push(this.cancelUpload(file));\n      }\n      return results;\n    };\n\n    Dropzone.prototype.enable = function() {\n      this.clickableElements.forEach(function(element) {\n        return element.classList.add(\"dz-clickable\");\n      });\n      return this.setupEventListeners();\n    };\n\n    Dropzone.prototype.filesize = function(size) {\n      var cutoff, i, j, len, selectedSize, selectedUnit, unit, units;\n      selectedSize = 0;\n      selectedUnit = \"b\";\n      if (size > 0) {\n        units = ['tb', 'gb', 'mb', 'kb', 'b'];\n        for (i = j = 0, len = units.length; j < len; i = ++j) {\n          unit = units[i];\n          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;\n          if (size >= cutoff) {\n            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);\n            selectedUnit = unit;\n            break;\n          }\n        }\n        selectedSize = Math.round(10 * selectedSize) / 10;\n      }\n      return \"<strong>\" + selectedSize + \"</strong> \" + this.options.dictFileSizeUnits[selectedUnit];\n    };\n\n    Dropzone.prototype._updateMaxFilesReachedClass = function() {\n      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {\n        if (this.getAcceptedFiles().length === this.options.maxFiles) {\n          this.emit('maxfilesreached', this.files);\n        }\n        return this.element.classList.add(\"dz-max-files-reached\");\n      } else {\n        return this.element.classList.remove(\"dz-max-files-reached\");\n      }\n    };\n\n    Dropzone.prototype.drop = function(e) {\n      var files, items;\n      if (!e.dataTransfer) {\n        return;\n      }\n      this.emit(\"drop\", e);\n      files = e.dataTransfer.files;\n      this.emit(\"addedfiles\", files);\n      if (files.length) {\n        items = e.dataTransfer.items;\n        if (items && items.length && (items[0].webkitGetAsEntry != null)) {\n          this._addFilesFromItems(items);\n        } else {\n          this.handleFiles(files);\n        }\n      }\n    };\n\n    Dropzone.prototype.paste = function(e) {\n      var items, ref;\n      if ((e != null ? (ref = e.clipboardData) != null ? ref.items : void 0 : void 0) == null) {\n        return;\n      }\n      this.emit(\"paste\", e);\n      items = e.clipboardData.items;\n      if (items.length) {\n        return this._addFilesFromItems(items);\n      }\n    };\n\n    Dropzone.prototype.handleFiles = function(files) {\n      var file, j, len, results;\n      results = [];\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        results.push(this.addFile(file));\n      }\n      return results;\n    };\n\n    Dropzone.prototype._addFilesFromItems = function(items) {\n      var entry, item, j, len, results;\n      results = [];\n      for (j = 0, len = items.length; j < len; j++) {\n        item = items[j];\n        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {\n          if (entry.isFile) {\n            results.push(this.addFile(item.getAsFile()));\n          } else if (entry.isDirectory) {\n            results.push(this._addFilesFromDirectory(entry, entry.name));\n          } else {\n            results.push(void 0);\n          }\n        } else if (item.getAsFile != null) {\n          if ((item.kind == null) || item.kind === \"file\") {\n            results.push(this.addFile(item.getAsFile()));\n          } else {\n            results.push(void 0);\n          }\n        } else {\n          results.push(void 0);\n        }\n      }\n      return results;\n    };\n\n    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {\n      var dirReader, errorHandler, readEntries;\n      dirReader = directory.createReader();\n      errorHandler = function(error) {\n        return typeof console !== \"undefined\" && console !== null ? typeof console.log === \"function\" ? console.log(error) : void 0 : void 0;\n      };\n      readEntries = (function(_this) {\n        return function() {\n          return dirReader.readEntries(function(entries) {\n            var entry, j, len;\n            if (entries.length > 0) {\n              for (j = 0, len = entries.length; j < len; j++) {\n                entry = entries[j];\n                if (entry.isFile) {\n                  entry.file(function(file) {\n                    if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {\n                      return;\n                    }\n                    file.fullPath = path + \"/\" + file.name;\n                    return _this.addFile(file);\n                  });\n                } else if (entry.isDirectory) {\n                  _this._addFilesFromDirectory(entry, path + \"/\" + entry.name);\n                }\n              }\n              readEntries();\n            }\n            return null;\n          }, errorHandler);\n        };\n      })(this);\n      return readEntries();\n    };\n\n    Dropzone.prototype.accept = function(file, done) {\n      if (file.size > this.options.maxFilesize * 1024 * 1024) {\n        return done(this.options.dictFileTooBig.replace(\"{{filesize}}\", Math.round(file.size / 1024 / 10.24) / 100).replace(\"{{maxFilesize}}\", this.options.maxFilesize));\n      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {\n        return done(this.options.dictInvalidFileType);\n      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {\n        done(this.options.dictMaxFilesExceeded.replace(\"{{maxFiles}}\", this.options.maxFiles));\n        return this.emit(\"maxfilesexceeded\", file);\n      } else {\n        return this.options.accept.call(this, file, done);\n      }\n    };\n\n    Dropzone.prototype.addFile = function(file) {\n      file.upload = {\n        progress: 0,\n        total: file.size,\n        bytesSent: 0,\n        filename: this._renameFile(file)\n      };\n      this.files.push(file);\n      file.status = Dropzone.ADDED;\n      this.emit(\"addedfile\", file);\n      this._enqueueThumbnail(file);\n      return this.accept(file, (function(_this) {\n        return function(error) {\n          if (error) {\n            file.accepted = false;\n            _this._errorProcessing([file], error);\n          } else {\n            file.accepted = true;\n            if (_this.options.autoQueue) {\n              _this.enqueueFile(file);\n            }\n          }\n          return _this._updateMaxFilesReachedClass();\n        };\n      })(this));\n    };\n\n    Dropzone.prototype.enqueueFiles = function(files) {\n      var file, j, len;\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        this.enqueueFile(file);\n      }\n      return null;\n    };\n\n    Dropzone.prototype.enqueueFile = function(file) {\n      if (file.status === Dropzone.ADDED && file.accepted === true) {\n        file.status = Dropzone.QUEUED;\n        if (this.options.autoProcessQueue) {\n          return setTimeout(((function(_this) {\n            return function() {\n              return _this.processQueue();\n            };\n          })(this)), 0);\n        }\n      } else {\n        throw new Error(\"This file can't be queued because it has already been processed or was rejected.\");\n      }\n    };\n\n    Dropzone.prototype._thumbnailQueue = [];\n\n    Dropzone.prototype._processingThumbnail = false;\n\n    Dropzone.prototype._enqueueThumbnail = function(file) {\n      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {\n        this._thumbnailQueue.push(file);\n        return setTimeout(((function(_this) {\n          return function() {\n            return _this._processThumbnailQueue();\n          };\n        })(this)), 0);\n      }\n    };\n\n    Dropzone.prototype._processThumbnailQueue = function() {\n      var file;\n      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {\n        return;\n      }\n      this._processingThumbnail = true;\n      file = this._thumbnailQueue.shift();\n      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (function(_this) {\n        return function(dataUrl) {\n          _this.emit(\"thumbnail\", file, dataUrl);\n          _this._processingThumbnail = false;\n          return _this._processThumbnailQueue();\n        };\n      })(this));\n    };\n\n    Dropzone.prototype.removeFile = function(file) {\n      if (file.status === Dropzone.UPLOADING) {\n        this.cancelUpload(file);\n      }\n      this.files = without(this.files, file);\n      this.emit(\"removedfile\", file);\n      if (this.files.length === 0) {\n        return this.emit(\"reset\");\n      }\n    };\n\n    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {\n      var file, j, len, ref;\n      if (cancelIfNecessary == null) {\n        cancelIfNecessary = false;\n      }\n      ref = this.files.slice();\n      for (j = 0, len = ref.length; j < len; j++) {\n        file = ref[j];\n        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {\n          this.removeFile(file);\n        }\n      }\n      return null;\n    };\n\n    Dropzone.prototype.resizeImage = function(file, width, height, resizeMethod, callback) {\n      return this.createThumbnail(file, width, height, resizeMethod, false, (function(_this) {\n        return function(dataUrl, canvas) {\n          var resizeMimeType, resizedDataURL;\n          if (canvas === null) {\n            return callback(file);\n          } else {\n            resizeMimeType = _this.options.resizeMimeType;\n            if (resizeMimeType == null) {\n              resizeMimeType = file.type;\n            }\n            resizedDataURL = canvas.toDataURL(resizeMimeType, _this.options.resizeQuality);\n            if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {\n              resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);\n            }\n            return callback(Dropzone.dataURItoBlob(resizedDataURL));\n          }\n        };\n      })(this));\n    };\n\n    Dropzone.prototype.createThumbnail = function(file, width, height, resizeMethod, fixOrientation, callback) {\n      var fileReader;\n      fileReader = new FileReader;\n      fileReader.onload = (function(_this) {\n        return function() {\n          file.dataURL = fileReader.result;\n          if (file.type === \"image/svg+xml\") {\n            if (callback != null) {\n              callback(fileReader.result);\n            }\n            return;\n          }\n          return _this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);\n        };\n      })(this);\n      return fileReader.readAsDataURL(file);\n    };\n\n    Dropzone.prototype.createThumbnailFromUrl = function(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {\n      var img;\n      img = document.createElement(\"img\");\n      if (crossOrigin) {\n        img.crossOrigin = crossOrigin;\n      }\n      img.onload = (function(_this) {\n        return function() {\n          var loadExif;\n          loadExif = function(callback) {\n            return callback(1);\n          };\n          if ((typeof EXIF !== \"undefined\" && EXIF !== null) && fixOrientation) {\n            loadExif = function(callback) {\n              return EXIF.getData(img, function() {\n                return callback(EXIF.getTag(this, 'Orientation'));\n              });\n            };\n          }\n          return loadExif(function(orientation) {\n            var canvas, ctx, ref, ref1, ref2, ref3, resizeInfo, thumbnail;\n            file.width = img.width;\n            file.height = img.height;\n            resizeInfo = _this.options.resize.call(_this, file, width, height, resizeMethod);\n            canvas = document.createElement(\"canvas\");\n            ctx = canvas.getContext(\"2d\");\n            canvas.width = resizeInfo.trgWidth;\n            canvas.height = resizeInfo.trgHeight;\n            if (orientation > 4) {\n              canvas.width = resizeInfo.trgHeight;\n              canvas.height = resizeInfo.trgWidth;\n            }\n            switch (orientation) {\n              case 2:\n                ctx.translate(canvas.width, 0);\n                ctx.scale(-1, 1);\n                break;\n              case 3:\n                ctx.translate(canvas.width, canvas.height);\n                ctx.rotate(Math.PI);\n                break;\n              case 4:\n                ctx.translate(0, canvas.height);\n                ctx.scale(1, -1);\n                break;\n              case 5:\n                ctx.rotate(0.5 * Math.PI);\n                ctx.scale(1, -1);\n                break;\n              case 6:\n                ctx.rotate(0.5 * Math.PI);\n                ctx.translate(0, -canvas.height);\n                break;\n              case 7:\n                ctx.rotate(0.5 * Math.PI);\n                ctx.translate(canvas.width, -canvas.height);\n                ctx.scale(-1, 1);\n                break;\n              case 8:\n                ctx.rotate(-0.5 * Math.PI);\n                ctx.translate(-canvas.width, 0);\n            }\n            drawImageIOSFix(ctx, img, (ref = resizeInfo.srcX) != null ? ref : 0, (ref1 = resizeInfo.srcY) != null ? ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (ref2 = resizeInfo.trgX) != null ? ref2 : 0, (ref3 = resizeInfo.trgY) != null ? ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);\n            thumbnail = canvas.toDataURL(\"image/png\");\n            if (callback != null) {\n              return callback(thumbnail, canvas);\n            }\n          });\n        };\n      })(this);\n      if (callback != null) {\n        img.onerror = callback;\n      }\n      return img.src = file.dataURL;\n    };\n\n    Dropzone.prototype.processQueue = function() {\n      var i, parallelUploads, processingLength, queuedFiles;\n      parallelUploads = this.options.parallelUploads;\n      processingLength = this.getUploadingFiles().length;\n      i = processingLength;\n      if (processingLength >= parallelUploads) {\n        return;\n      }\n      queuedFiles = this.getQueuedFiles();\n      if (!(queuedFiles.length > 0)) {\n        return;\n      }\n      if (this.options.uploadMultiple) {\n        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));\n      } else {\n        while (i < parallelUploads) {\n          if (!queuedFiles.length) {\n            return;\n          }\n          this.processFile(queuedFiles.shift());\n          i++;\n        }\n      }\n    };\n\n    Dropzone.prototype.processFile = function(file) {\n      return this.processFiles([file]);\n    };\n\n    Dropzone.prototype.processFiles = function(files) {\n      var file, j, len;\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        file.processing = true;\n        file.status = Dropzone.UPLOADING;\n        this.emit(\"processing\", file);\n      }\n      if (this.options.uploadMultiple) {\n        this.emit(\"processingmultiple\", files);\n      }\n      return this.uploadFiles(files);\n    };\n\n    Dropzone.prototype._getFilesWithXhr = function(xhr) {\n      var file, files;\n      return files = (function() {\n        var j, len, ref, results;\n        ref = this.files;\n        results = [];\n        for (j = 0, len = ref.length; j < len; j++) {\n          file = ref[j];\n          if (file.xhr === xhr) {\n            results.push(file);\n          }\n        }\n        return results;\n      }).call(this);\n    };\n\n    Dropzone.prototype.cancelUpload = function(file) {\n      var groupedFile, groupedFiles, j, k, len, len1, ref;\n      if (file.status === Dropzone.UPLOADING) {\n        groupedFiles = this._getFilesWithXhr(file.xhr);\n        for (j = 0, len = groupedFiles.length; j < len; j++) {\n          groupedFile = groupedFiles[j];\n          groupedFile.status = Dropzone.CANCELED;\n        }\n        file.xhr.abort();\n        for (k = 0, len1 = groupedFiles.length; k < len1; k++) {\n          groupedFile = groupedFiles[k];\n          this.emit(\"canceled\", groupedFile);\n        }\n        if (this.options.uploadMultiple) {\n          this.emit(\"canceledmultiple\", groupedFiles);\n        }\n      } else if ((ref = file.status) === Dropzone.ADDED || ref === Dropzone.QUEUED) {\n        file.status = Dropzone.CANCELED;\n        this.emit(\"canceled\", file);\n        if (this.options.uploadMultiple) {\n          this.emit(\"canceledmultiple\", [file]);\n        }\n      }\n      if (this.options.autoProcessQueue) {\n        return this.processQueue();\n      }\n    };\n\n    resolveOption = function() {\n      var args, option;\n      option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];\n      if (typeof option === 'function') {\n        return option.apply(this, args);\n      }\n      return option;\n    };\n\n    Dropzone.prototype.uploadFile = function(file) {\n      return this.uploadFiles([file]);\n    };\n\n    Dropzone.prototype.uploadFiles = function(files) {\n      var doneCounter, doneFunction, file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, j, k, key, l, len, len1, len2, len3, m, method, o, option, progressObj, ref, ref1, ref2, ref3, ref4, ref5, response, results, updateProgress, url, value, xhr;\n      xhr = new XMLHttpRequest();\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        file.xhr = xhr;\n      }\n      method = resolveOption(this.options.method, files);\n      url = resolveOption(this.options.url, files);\n      xhr.open(method, url, true);\n      xhr.timeout = resolveOption(this.options.timeout, files);\n      xhr.withCredentials = !!this.options.withCredentials;\n      response = null;\n      handleError = (function(_this) {\n        return function() {\n          var k, len1, results;\n          results = [];\n          for (k = 0, len1 = files.length; k < len1; k++) {\n            file = files[k];\n            results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace(\"{{statusCode}}\", xhr.status), xhr));\n          }\n          return results;\n        };\n      })(this);\n      updateProgress = (function(_this) {\n        return function(e) {\n          var allFilesFinished, k, l, len1, len2, len3, m, progress, results;\n          if (e != null) {\n            progress = 100 * e.loaded / e.total;\n            for (k = 0, len1 = files.length; k < len1; k++) {\n              file = files[k];\n              file.upload.progress = progress;\n              file.upload.total = e.total;\n              file.upload.bytesSent = e.loaded;\n            }\n          } else {\n            allFilesFinished = true;\n            progress = 100;\n            for (l = 0, len2 = files.length; l < len2; l++) {\n              file = files[l];\n              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {\n                allFilesFinished = false;\n              }\n              file.upload.progress = progress;\n              file.upload.bytesSent = file.upload.total;\n            }\n            if (allFilesFinished) {\n              return;\n            }\n          }\n          results = [];\n          for (m = 0, len3 = files.length; m < len3; m++) {\n            file = files[m];\n            results.push(_this.emit(\"uploadprogress\", file, progress, file.upload.bytesSent));\n          }\n          return results;\n        };\n      })(this);\n      xhr.onload = (function(_this) {\n        return function(e) {\n          var error1, ref;\n          if (files[0].status === Dropzone.CANCELED) {\n            return;\n          }\n          if (xhr.readyState !== 4) {\n            return;\n          }\n          if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {\n            response = xhr.responseText;\n            if (xhr.getResponseHeader(\"content-type\") && ~xhr.getResponseHeader(\"content-type\").indexOf(\"application/json\")) {\n              try {\n                response = JSON.parse(response);\n              } catch (error1) {\n                e = error1;\n                response = \"Invalid JSON response from server.\";\n              }\n            }\n          }\n          updateProgress();\n          if (!((200 <= (ref = xhr.status) && ref < 300))) {\n            return handleError();\n          } else {\n            return _this._finished(files, response, e);\n          }\n        };\n      })(this);\n      xhr.onerror = (function(_this) {\n        return function() {\n          if (files[0].status === Dropzone.CANCELED) {\n            return;\n          }\n          return handleError();\n        };\n      })(this);\n      progressObj = (ref = xhr.upload) != null ? ref : xhr;\n      progressObj.onprogress = updateProgress;\n      headers = {\n        \"Accept\": \"application/json\",\n        \"Cache-Control\": \"no-cache\",\n        \"X-Requested-With\": \"XMLHttpRequest\"\n      };\n      if (this.options.headers) {\n        extend(headers, this.options.headers);\n      }\n      for (headerName in headers) {\n        headerValue = headers[headerName];\n        if (headerValue) {\n          xhr.setRequestHeader(headerName, headerValue);\n        }\n      }\n      formData = new FormData();\n      if (this.options.params) {\n        ref1 = this.options.params;\n        for (key in ref1) {\n          value = ref1[key];\n          formData.append(key, value);\n        }\n      }\n      for (k = 0, len1 = files.length; k < len1; k++) {\n        file = files[k];\n        this.emit(\"sending\", file, xhr, formData);\n      }\n      if (this.options.uploadMultiple) {\n        this.emit(\"sendingmultiple\", files, xhr, formData);\n      }\n      if (this.element.tagName === \"FORM\") {\n        ref2 = this.element.querySelectorAll(\"input, textarea, select, button\");\n        for (l = 0, len2 = ref2.length; l < len2; l++) {\n          input = ref2[l];\n          inputName = input.getAttribute(\"name\");\n          inputType = input.getAttribute(\"type\");\n          if (input.tagName === \"SELECT\" && input.hasAttribute(\"multiple\")) {\n            ref3 = input.options;\n            for (m = 0, len3 = ref3.length; m < len3; m++) {\n              option = ref3[m];\n              if (option.selected) {\n                formData.append(inputName, option.value);\n              }\n            }\n          } else if (!inputType || ((ref4 = inputType.toLowerCase()) !== \"checkbox\" && ref4 !== \"radio\") || input.checked) {\n            formData.append(inputName, input.value);\n          }\n        }\n      }\n      doneCounter = 0;\n      results = [];\n      for (i = o = 0, ref5 = files.length - 1; 0 <= ref5 ? o <= ref5 : o >= ref5; i = 0 <= ref5 ? ++o : --o) {\n        doneFunction = (function(_this) {\n          return function(file, paramName, fileName) {\n            return function(transformedFile) {\n              formData.append(paramName, transformedFile, fileName);\n              if (++doneCounter === files.length) {\n                return _this.submitRequest(xhr, formData, files);\n              }\n            };\n          };\n        })(this);\n        results.push(this.options.transformFile.call(this, files[i], doneFunction(files[i], this._getParamName(i), files[i].upload.filename)));\n      }\n      return results;\n    };\n\n    Dropzone.prototype.submitRequest = function(xhr, formData, files) {\n      return xhr.send(formData);\n    };\n\n    Dropzone.prototype._finished = function(files, responseText, e) {\n      var file, j, len;\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        file.status = Dropzone.SUCCESS;\n        this.emit(\"success\", file, responseText, e);\n        this.emit(\"complete\", file);\n      }\n      if (this.options.uploadMultiple) {\n        this.emit(\"successmultiple\", files, responseText, e);\n        this.emit(\"completemultiple\", files);\n      }\n      if (this.options.autoProcessQueue) {\n        return this.processQueue();\n      }\n    };\n\n    Dropzone.prototype._errorProcessing = function(files, message, xhr) {\n      var file, j, len;\n      for (j = 0, len = files.length; j < len; j++) {\n        file = files[j];\n        file.status = Dropzone.ERROR;\n        this.emit(\"error\", file, message, xhr);\n        this.emit(\"complete\", file);\n      }\n      if (this.options.uploadMultiple) {\n        this.emit(\"errormultiple\", files, message, xhr);\n        this.emit(\"completemultiple\", files);\n      }\n      if (this.options.autoProcessQueue) {\n        return this.processQueue();\n      }\n    };\n\n    return Dropzone;\n\n  })(Emitter);\n\n  Dropzone.version = \"5.1.1\";\n\n  Dropzone.options = {};\n\n  Dropzone.optionsForElement = function(element) {\n    if (element.getAttribute(\"id\")) {\n      return Dropzone.options[camelize(element.getAttribute(\"id\"))];\n    } else {\n      return void 0;\n    }\n  };\n\n  Dropzone.instances = [];\n\n  Dropzone.forElement = function(element) {\n    if (typeof element === \"string\") {\n      element = document.querySelector(element);\n    }\n    if ((element != null ? element.dropzone : void 0) == null) {\n      throw new Error(\"No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.\");\n    }\n    return element.dropzone;\n  };\n\n  Dropzone.autoDiscover = true;\n\n  Dropzone.discover = function() {\n    var checkElements, dropzone, dropzones, j, len, results;\n    if (document.querySelectorAll) {\n      dropzones = document.querySelectorAll(\".dropzone\");\n    } else {\n      dropzones = [];\n      checkElements = function(elements) {\n        var el, j, len, results;\n        results = [];\n        for (j = 0, len = elements.length; j < len; j++) {\n          el = elements[j];\n          if (/(^| )dropzone($| )/.test(el.className)) {\n            results.push(dropzones.push(el));\n          } else {\n            results.push(void 0);\n          }\n        }\n        return results;\n      };\n      checkElements(document.getElementsByTagName(\"div\"));\n      checkElements(document.getElementsByTagName(\"form\"));\n    }\n    results = [];\n    for (j = 0, len = dropzones.length; j < len; j++) {\n      dropzone = dropzones[j];\n      if (Dropzone.optionsForElement(dropzone) !== false) {\n        results.push(new Dropzone(dropzone));\n      } else {\n        results.push(void 0);\n      }\n    }\n    return results;\n  };\n\n  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\\/12/i];\n\n  Dropzone.isBrowserSupported = function() {\n    var capableBrowser, j, len, ref, regex;\n    capableBrowser = true;\n    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {\n      if (!(\"classList\" in document.createElement(\"a\"))) {\n        capableBrowser = false;\n      } else {\n        ref = Dropzone.blacklistedBrowsers;\n        for (j = 0, len = ref.length; j < len; j++) {\n          regex = ref[j];\n          if (regex.test(navigator.userAgent)) {\n            capableBrowser = false;\n            continue;\n          }\n        }\n      }\n    } else {\n      capableBrowser = false;\n    }\n    return capableBrowser;\n  };\n\n  Dropzone.dataURItoBlob = function(dataURI) {\n    var ab, byteString, i, ia, j, mimeString, ref;\n    byteString = atob(dataURI.split(',')[1]);\n    mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];\n    ab = new ArrayBuffer(byteString.length);\n    ia = new Uint8Array(ab);\n    for (i = j = 0, ref = byteString.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {\n      ia[i] = byteString.charCodeAt(i);\n    }\n    return new Blob([ab], {\n      type: mimeString\n    });\n  };\n\n  without = function(list, rejectedItem) {\n    var item, j, len, results;\n    results = [];\n    for (j = 0, len = list.length; j < len; j++) {\n      item = list[j];\n      if (item !== rejectedItem) {\n        results.push(item);\n      }\n    }\n    return results;\n  };\n\n  camelize = function(str) {\n    return str.replace(/[\\-_](\\w)/g, function(match) {\n      return match.charAt(1).toUpperCase();\n    });\n  };\n\n  Dropzone.createElement = function(string) {\n    var div;\n    div = document.createElement(\"div\");\n    div.innerHTML = string;\n    return div.childNodes[0];\n  };\n\n  Dropzone.elementInside = function(element, container) {\n    if (element === container) {\n      return true;\n    }\n    while (element = element.parentNode) {\n      if (element === container) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  Dropzone.getElement = function(el, name) {\n    var element;\n    if (typeof el === \"string\") {\n      element = document.querySelector(el);\n    } else if (el.nodeType != null) {\n      element = el;\n    }\n    if (element == null) {\n      throw new Error(\"Invalid `\" + name + \"` option provided. Please provide a CSS selector or a plain HTML element.\");\n    }\n    return element;\n  };\n\n  Dropzone.getElements = function(els, name) {\n    var e, el, elements, error1, j, k, len, len1, ref;\n    if (els instanceof Array) {\n      elements = [];\n      try {\n        for (j = 0, len = els.length; j < len; j++) {\n          el = els[j];\n          elements.push(this.getElement(el, name));\n        }\n      } catch (error1) {\n        e = error1;\n        elements = null;\n      }\n    } else if (typeof els === \"string\") {\n      elements = [];\n      ref = document.querySelectorAll(els);\n      for (k = 0, len1 = ref.length; k < len1; k++) {\n        el = ref[k];\n        elements.push(el);\n      }\n    } else if (els.nodeType != null) {\n      elements = [els];\n    }\n    if (!((elements != null) && elements.length)) {\n      throw new Error(\"Invalid `\" + name + \"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.\");\n    }\n    return elements;\n  };\n\n  Dropzone.confirm = function(question, accepted, rejected) {\n    if (window.confirm(question)) {\n      return accepted();\n    } else if (rejected != null) {\n      return rejected();\n    }\n  };\n\n  Dropzone.isValidFile = function(file, acceptedFiles) {\n    var baseMimeType, j, len, mimeType, validType;\n    if (!acceptedFiles) {\n      return true;\n    }\n    acceptedFiles = acceptedFiles.split(\",\");\n    mimeType = file.type;\n    baseMimeType = mimeType.replace(/\\/.*$/, \"\");\n    for (j = 0, len = acceptedFiles.length; j < len; j++) {\n      validType = acceptedFiles[j];\n      validType = validType.trim();\n      if (validType.charAt(0) === \".\") {\n        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {\n          return true;\n        }\n      } else if (/\\/\\*$/.test(validType)) {\n        if (baseMimeType === validType.replace(/\\/.*$/, \"\")) {\n          return true;\n        }\n      } else {\n        if (mimeType === validType) {\n          return true;\n        }\n      }\n    }\n    return false;\n  };\n\n  if (typeof jQuery !== \"undefined\" && jQuery !== null) {\n    jQuery.fn.dropzone = function(options) {\n      return this.each(function() {\n        return new Dropzone(this, options);\n      });\n    };\n  }\n\n  if (typeof module !== \"undefined\" && module !== null) {\n    module.exports = Dropzone;\n  } else {\n    window.Dropzone = Dropzone;\n  }\n\n  Dropzone.ADDED = \"added\";\n\n  Dropzone.QUEUED = \"queued\";\n\n  Dropzone.ACCEPTED = Dropzone.QUEUED;\n\n  Dropzone.UPLOADING = \"uploading\";\n\n  Dropzone.PROCESSING = Dropzone.UPLOADING;\n\n  Dropzone.CANCELED = \"canceled\";\n\n  Dropzone.ERROR = \"error\";\n\n  Dropzone.SUCCESS = \"success\";\n\n\n  /*\n  \n  Bugfix for iOS 6 and 7\n  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios\n  based on the work of https://github.com/stomita/ios-imagefile-megapixel\n   */\n\n  detectVerticalSquash = function(img) {\n    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;\n    iw = img.naturalWidth;\n    ih = img.naturalHeight;\n    canvas = document.createElement(\"canvas\");\n    canvas.width = 1;\n    canvas.height = ih;\n    ctx = canvas.getContext(\"2d\");\n    ctx.drawImage(img, 0, 0);\n    data = ctx.getImageData(1, 0, 1, ih).data;\n    sy = 0;\n    ey = ih;\n    py = ih;\n    while (py > sy) {\n      alpha = data[(py - 1) * 4 + 3];\n      if (alpha === 0) {\n        ey = py;\n      } else {\n        sy = py;\n      }\n      py = (ey + sy) >> 1;\n    }\n    ratio = py / ih;\n    if (ratio === 0) {\n      return 1;\n    } else {\n      return ratio;\n    }\n  };\n\n  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {\n    var vertSquashRatio;\n    vertSquashRatio = detectVerticalSquash(img);\n    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);\n  };\n\n  ExifRestore = (function() {\n    function ExifRestore() {}\n\n    ExifRestore.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\n    ExifRestore.encode64 = function(input) {\n      var chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;\n      output = '';\n      chr1 = void 0;\n      chr2 = void 0;\n      chr3 = '';\n      enc1 = void 0;\n      enc2 = void 0;\n      enc3 = void 0;\n      enc4 = '';\n      i = 0;\n      while (true) {\n        chr1 = input[i++];\n        chr2 = input[i++];\n        chr3 = input[i++];\n        enc1 = chr1 >> 2;\n        enc2 = (chr1 & 3) << 4 | chr2 >> 4;\n        enc3 = (chr2 & 15) << 2 | chr3 >> 6;\n        enc4 = chr3 & 63;\n        if (isNaN(chr2)) {\n          enc3 = enc4 = 64;\n        } else if (isNaN(chr3)) {\n          enc4 = 64;\n        }\n        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);\n        chr1 = chr2 = chr3 = '';\n        enc1 = enc2 = enc3 = enc4 = '';\n        if (!(i < input.length)) {\n          break;\n        }\n      }\n      return output;\n    };\n\n    ExifRestore.restore = function(origFileBase64, resizedFileBase64) {\n      var image, rawImage, segments;\n      if (!origFileBase64.match('data:image/jpeg;base64,')) {\n        return resizedFileBase64;\n      }\n      rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));\n      segments = this.slice2Segments(rawImage);\n      image = this.exifManipulation(resizedFileBase64, segments);\n      return 'data:image/jpeg;base64,' + this.encode64(image);\n    };\n\n    ExifRestore.exifManipulation = function(resizedFileBase64, segments) {\n      var aBuffer, exifArray, newImageArray;\n      exifArray = this.getExifArray(segments);\n      newImageArray = this.insertExif(resizedFileBase64, exifArray);\n      aBuffer = new Uint8Array(newImageArray);\n      return aBuffer;\n    };\n\n    ExifRestore.getExifArray = function(segments) {\n      var seg, x;\n      seg = void 0;\n      x = 0;\n      while (x < segments.length) {\n        seg = segments[x];\n        if (seg[0] === 255 & seg[1] === 225) {\n          return seg;\n        }\n        x++;\n      }\n      return [];\n    };\n\n    ExifRestore.insertExif = function(resizedFileBase64, exifArray) {\n      var array, ato, buf, imageData, mae, separatePoint;\n      imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');\n      buf = this.decode64(imageData);\n      separatePoint = buf.indexOf(255, 3);\n      mae = buf.slice(0, separatePoint);\n      ato = buf.slice(separatePoint);\n      array = mae;\n      array = array.concat(exifArray);\n      array = array.concat(ato);\n      return array;\n    };\n\n    ExifRestore.slice2Segments = function(rawImageArray) {\n      var endPoint, head, length, seg, segments;\n      head = 0;\n      segments = [];\n      while (true) {\n        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {\n          break;\n        }\n        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {\n          head += 2;\n        } else {\n          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];\n          endPoint = head + length + 2;\n          seg = rawImageArray.slice(head, endPoint);\n          segments.push(seg);\n          head = endPoint;\n        }\n        if (head > rawImageArray.length) {\n          break;\n        }\n      }\n      return segments;\n    };\n\n    ExifRestore.decode64 = function(input) {\n      var base64test, buf, chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;\n      output = '';\n      chr1 = void 0;\n      chr2 = void 0;\n      chr3 = '';\n      enc1 = void 0;\n      enc2 = void 0;\n      enc3 = void 0;\n      enc4 = '';\n      i = 0;\n      buf = [];\n      base64test = /[^A-Za-z0-9\\+\\/\\=]/g;\n      if (base64test.exec(input)) {\n        console.warning('There were invalid base64 characters in the input text.\\n' + 'Valid base64 characters are A-Z, a-z, 0-9, \\'+\\', \\'/\\',and \\'=\\'\\n' + 'Expect errors in decoding.');\n      }\n      input = input.replace(/[^A-Za-z0-9\\+\\/\\=]/g, '');\n      while (true) {\n        enc1 = this.KEY_STR.indexOf(input.charAt(i++));\n        enc2 = this.KEY_STR.indexOf(input.charAt(i++));\n        enc3 = this.KEY_STR.indexOf(input.charAt(i++));\n        enc4 = this.KEY_STR.indexOf(input.charAt(i++));\n        chr1 = enc1 << 2 | enc2 >> 4;\n        chr2 = (enc2 & 15) << 4 | enc3 >> 2;\n        chr3 = (enc3 & 3) << 6 | enc4;\n        buf.push(chr1);\n        if (enc3 !== 64) {\n          buf.push(chr2);\n        }\n        if (enc4 !== 64) {\n          buf.push(chr3);\n        }\n        chr1 = chr2 = chr3 = '';\n        enc1 = enc2 = enc3 = enc4 = '';\n        if (!(i < input.length)) {\n          break;\n        }\n      }\n      return buf;\n    };\n\n    return ExifRestore;\n\n  })();\n\n\n  /*\n   * contentloaded.js\n   *\n   * Author: Diego Perini (diego.perini at gmail.com)\n   * Summary: cross-browser wrapper for DOMContentLoaded\n   * Updated: 20101020\n   * License: MIT\n   * Version: 1.2\n   *\n   * URL:\n   * http://javascript.nwbox.com/ContentLoaded/\n   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE\n   */\n\n  contentLoaded = function(win, fn) {\n    var add, doc, done, init, poll, pre, rem, root, top;\n    done = false;\n    top = true;\n    doc = win.document;\n    root = doc.documentElement;\n    add = (doc.addEventListener ? \"addEventListener\" : \"attachEvent\");\n    rem = (doc.addEventListener ? \"removeEventListener\" : \"detachEvent\");\n    pre = (doc.addEventListener ? \"\" : \"on\");\n    init = function(e) {\n      if (e.type === \"readystatechange\" && doc.readyState !== \"complete\") {\n        return;\n      }\n      (e.type === \"load\" ? win : doc)[rem](pre + e.type, init, false);\n      if (!done && (done = true)) {\n        return fn.call(win, e.type || e);\n      }\n    };\n    poll = function() {\n      var e, error1;\n      try {\n        root.doScroll(\"left\");\n      } catch (error1) {\n        e = error1;\n        setTimeout(poll, 50);\n        return;\n      }\n      return init(\"poll\");\n    };\n    if (doc.readyState !== \"complete\") {\n      if (doc.createEventObject && root.doScroll) {\n        try {\n          top = !win.frameElement;\n        } catch (undefined) {}\n        if (top) {\n          poll();\n        }\n      }\n      doc[add](pre + \"DOMContentLoaded\", init, false);\n      doc[add](pre + \"readystatechange\", init, false);\n      return win[add](pre + \"load\", init, false);\n    }\n  };\n\n  Dropzone._autoDiscoverFunction = function() {\n    if (Dropzone.autoDiscover) {\n      return Dropzone.discover();\n    }\n  };\n\n  contentLoaded(window, Dropzone._autoDiscoverFunction);\n\n}).call(this);\n"

/***/ })

/******/ });