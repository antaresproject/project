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
/******/ 	return __webpack_require__(__webpack_require__.s = 844);
/******/ })
/************************************************************************/
/******/ ({

/***/ 844:
/*!***************************************************************!*\
  !*** multi ./_src/templates/webpack/views/view_error_page.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_src/templates/webpack/views/view_error_page.js */845);


/***/ }),

/***/ 845:
/*!*********************************************************!*\
  !*** ./_src/templates/webpack/views/view_error_page.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./../../../js/components/error_page/error_page.js */ 846);

/***/ }),

/***/ 846:
/*!*****************************************************!*\
  !*** ./_src/js/components/error_page/error_page.js ***!
  \*****************************************************/
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

$(document).ready(function () {
  // $('.open-modal').on('click', function() {
  //   APP.modal.init({
  //     element: '.modal--problem',
  //     title: 'Something went wrong...',
  //     buttons: {
  //       Confirm: {
  //         type: 'primary',
  //         action: function() {
  //           alert('action1');
  //           $.modal.close();
  //         }
  //       },
  //       Cancel: {
  //         type: 'default',
  //         action: function() {
  //           $.modal.close();
  //         }
  //       }
  //     }
  //   });
  // });
  $('.open-modal').on('click', function () {
    var currentDialog = document.querySelector('dialog.is-current');

    APP.dialog.init({
      content: 'Lorem',
      title: 'asdasd',
      actionPosition: 'right',
      width: '95%',
      height: '500px',
      buttons: {
        Confirm: {
          type: 'primary',
          action: function action() {
            alert('Confirmed!');
          }
        },
        Cancel: {
          type: 'default',
          action: function action() {
            window.dialog.close();
          }
        }
      }
    });
  });
});

/***/ })

/******/ });