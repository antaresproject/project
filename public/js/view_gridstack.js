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
 *  * @package    Files
 *  * @version    0.9.1
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 757);
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
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var naturalSort = __webpack_require__(696),
  getByClass = __webpack_require__(320),
  extend = __webpack_require__(319),
  indexOf = __webpack_require__(321),
  events = __webpack_require__(171),
  toString = __webpack_require__(323),
  classes = __webpack_require__(170),
  getAttribute = __webpack_require__(625),
  toArray = __webpack_require__(322);

module.exports = function(id, options, values) {

  var self = this,
    init,
    Item = __webpack_require__(318)(self),
    addAsync = __webpack_require__(616)(self),
    initPagination = __webpack_require__(619)(self);

  init = {
    start: function() {
      self.listClass      = "list";
      self.searchClass    = "search";
      self.sortClass      = "sort";
      self.page           = 10000;
      self.i              = 1;
      self.items          = [];
      self.visibleItems   = [];
      self.matchingItems  = [];
      self.searched       = false;
      self.filtered       = false;
      self.searchColumns  = undefined;
      self.handlers       = { 'updated': [] };
      self.valueNames     = [];
      self.utils          = {
        getByClass: getByClass,
        extend: extend,
        indexOf: indexOf,
        events: events,
        toString: toString,
        naturalSort: naturalSort,
        classes: classes,
        getAttribute: getAttribute,
        toArray: toArray
      };

      self.utils.extend(self, options);

      self.listContainer = (typeof(id) === 'string') ? document.getElementById(id) : id;
      if (!self.listContainer) { return; }
      self.list       = getByClass(self.listContainer, self.listClass, true);

      self.parse        = __webpack_require__(620)(self);
      self.templater    = __webpack_require__(623)(self);
      self.search       = __webpack_require__(621)(self);
      self.filter       = __webpack_require__(617)(self);
      self.sort         = __webpack_require__(622)(self);
      self.fuzzySearch  = __webpack_require__(618)(self, options.fuzzySearch);

      this.handlers();
      this.items();
      this.pagination();

      self.update();
    },
    handlers: function() {
      for (var handler in self.handlers) {
        if (self[handler]) {
          self.on(handler, self[handler]);
        }
      }
    },
    items: function() {
      self.parse(self.list);
      if (values !== undefined) {
        self.add(values);
      }
    },
    pagination: function() {
      if (options.pagination !== undefined) {
        if (options.pagination === true) {
          options.pagination = [{}];
        }
        if (options.pagination[0] === undefined){
          options.pagination = [options.pagination];
        }
        for (var i = 0, il = options.pagination.length; i < il; i++) {
          initPagination(options.pagination[i]);
        }
      }
    }
  };

  /*
  * Re-parse the List, use if html have changed
  */
  this.reIndex = function() {
    self.items          = [];
    self.visibleItems   = [];
    self.matchingItems  = [];
    self.searched       = false;
    self.filtered       = false;
    self.parse(self.list);
  };

  this.toJSON = function() {
    var json = [];
    for (var i = 0, il = self.items.length; i < il; i++) {
      json.push(self.items[i].values());
    }
    return json;
  };


  /*
  * Add object to list
  */
  this.add = function(values, callback) {
    if (values.length === 0) {
      return;
    }
    if (callback) {
      addAsync(values, callback);
      return;
    }
    var added = [],
      notCreate = false;
    if (values[0] === undefined){
      values = [values];
    }
    for (var i = 0, il = values.length; i < il; i++) {
      var item = null;
      notCreate = (self.items.length > self.page) ? true : false;
      item = new Item(values[i], undefined, notCreate);
      self.items.push(item);
      added.push(item);
    }
    self.update();
    return added;
  };

	this.show = function(i, page) {
		this.i = i;
		this.page = page;
		self.update();
    return self;
	};

  /* Removes object from list.
  * Loops through the list and removes objects where
  * property "valuename" === value
  */
  this.remove = function(valueName, value, options) {
    var found = 0;
    for (var i = 0, il = self.items.length; i < il; i++) {
      if (self.items[i].values()[valueName] == value) {
        self.templater.remove(self.items[i], options);
        self.items.splice(i,1);
        il--;
        i--;
        found++;
      }
    }
    self.update();
    return found;
  };

  /* Gets the objects in the list which
  * property "valueName" === value
  */
  this.get = function(valueName, value) {
    var matchedItems = [];
    for (var i = 0, il = self.items.length; i < il; i++) {
      var item = self.items[i];
      if (item.values()[valueName] == value) {
        matchedItems.push(item);
      }
    }
    return matchedItems;
  };

  /*
  * Get size of the list
  */
  this.size = function() {
    return self.items.length;
  };

  /*
  * Removes all items from the list
  */
  this.clear = function() {
    self.templater.clear();
    self.items = [];
    return self;
  };

  this.on = function(event, callback) {
    self.handlers[event].push(callback);
    return self;
  };

  this.off = function(event, callback) {
    var e = self.handlers[event];
    var index = indexOf(e, callback);
    if (index > -1) {
      e.splice(index, 1);
    }
    return self;
  };

  this.trigger = function(event) {
    var i = self.handlers[event].length;
    while(i--) {
      self.handlers[event][i](self);
    }
    return self;
  };

  this.reset = {
    filter: function() {
      var is = self.items,
        il = is.length;
      while (il--) {
        is[il].filtered = false;
      }
      return self;
    },
    search: function() {
      var is = self.items,
        il = is.length;
      while (il--) {
        is[il].found = false;
      }
      return self;
    }
  };

  this.update = function() {
    var is = self.items,
			il = is.length;

    self.visibleItems = [];
    self.matchingItems = [];
    self.templater.clear();
    for (var i = 0; i < il; i++) {
      if (is[i].matching() && ((self.matchingItems.length+1) >= self.i && self.visibleItems.length < self.page)) {
        is[i].show();
        self.visibleItems.push(is[i]);
        self.matchingItems.push(is[i]);
      } else if (is[i].matching()) {
        self.matchingItems.push(is[i]);
        is[i].hide();
      } else {
        is[i].hide();
      }
    }
    self.trigger('updated');
    return self;
  };

  init.start();
};


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var index = __webpack_require__(321);

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};


/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list ? this.list.contains(name) : !! ~index(this.array(), name);
};


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '',
    toArray = __webpack_require__(322);

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el, NodeList, HTMLCollection or Array
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  el = toArray(el);
  for ( var i = 0; i < el.length; i++ ) {
    el[i][bind](prefix + type, fn, capture || false);
  }
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el, NodeList, HTMLCollection or Array
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  el = toArray(el);
  for ( var i = 0; i < el.length; i++ ) {
    el[i][unbind](prefix + type, fn, capture || false);
  }
};


/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = function(list) {
  return function(initValues, element, notCreate) {
    var item = this;

    this._values = {};

    this.found = false; // Show if list.searched == true and this.found == true
    this.filtered = false;// Show if list.filtered == true and this.filtered == true

    var init = function(initValues, element, notCreate) {
      if (element === undefined) {
        if (notCreate) {
          item.values(initValues, notCreate);
        } else {
          item.values(initValues);
        }
      } else {
        item.elm = element;
        var values = list.templater.get(item, initValues);
        item.values(values);
      }
    };

    this.values = function(newValues, notCreate) {
      if (newValues !== undefined) {
        for(var name in newValues) {
          item._values[name] = newValues[name];
        }
        if (notCreate !== true) {
          list.templater.set(item, item.values());
        }
      } else {
        return item._values;
      }
    };

    this.show = function() {
      list.templater.show(item);
    };

    this.hide = function() {
      list.templater.hide(item);
    };

    this.matching = function() {
      return (
        (list.filtered && list.searched && item.found && item.filtered) ||
        (list.filtered && !list.searched && item.filtered) ||
        (!list.filtered && list.searched && item.found) ||
        (!list.filtered && !list.searched)
      );
    };

    this.visible = function() {
      return (item.elm && (item.elm.parentNode == list.list)) ? true : false;
    };

    init(initValues, element, notCreate);
  };
};


/***/ }),

/***/ 319:
/***/ (function(module, exports) {

/*
 * Source: https://github.com/segmentio/extend
 */

module.exports = function extend (object) {
    // Takes an unlimited number of extenders.
    var args = Array.prototype.slice.call(arguments, 1);

    // For each extender, copy their properties on our object.
    for (var i = 0, source; source = args[i]; i++) {
        if (!source) continue;
        for (var property in source) {
            object[property] = source[property];
        }
    }

    return object;
};


/***/ }),

/***/ 320:
/***/ (function(module, exports) {

/**
 * A cross-browser implementation of getElementsByClass.
 * Heavily based on Dustin Diaz's function: http://dustindiaz.com/getelementsbyclass.
 *
 * Find all elements with class `className` inside `container`.
 * Use `single = true` to increase performance in older browsers
 * when only one element is needed.
 *
 * @param {String} className
 * @param {Element} container
 * @param {Boolean} single
 * @api public
 */

var getElementsByClassName = function(container, className, single) {
  if (single) {
    return container.getElementsByClassName(className)[0];
  } else {
    return container.getElementsByClassName(className);
  }
};

var querySelector = function(container, className, single) {
  className = '.' + className;
  if (single) {
    return container.querySelector(className);
  } else {
    return container.querySelectorAll(className);
  }
};

var polyfill = function(container, className, single) {
  var classElements = [],
    tag = '*';

  var els = container.getElementsByTagName(tag);
  var elsLen = els.length;
  var pattern = new RegExp("(^|\\s)"+className+"(\\s|$)");
  for (var i = 0, j = 0; i < elsLen; i++) {
    if ( pattern.test(els[i].className) ) {
      if (single) {
        return els[i];
      } else {
        classElements[j] = els[i];
        j++;
      }
    }
  }
  return classElements;
};

module.exports = (function() {
  return function(container, className, single, options) {
    options = options || {};
    if ((options.test && options.getElementsByClassName) || (!options.test && document.getElementsByClassName)) {
      return getElementsByClassName(container, className, single);
    } else if ((options.test && options.querySelector) || (!options.test && document.querySelector)) {
      return querySelector(container, className, single);
    } else {
      return polyfill(container, className, single);
    }
  };
})();


/***/ }),

/***/ 321:
/***/ (function(module, exports) {

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};


/***/ }),

/***/ 322:
/***/ (function(module, exports) {

/**
 * Source: https://github.com/timoxley/to-array
 *
 * Convert an array-like object into an `Array`.
 * If `collection` is already an `Array`, then will return a clone of `collection`.
 *
 * @param {Array | Mixed} collection An `Array` or array-like object to convert e.g. `arguments` or `NodeList`
 * @return {Array} Naive conversion of `collection` to a new `Array`.
 * @api public
 */

module.exports = function toArray(collection) {
  if (typeof collection === 'undefined') return [];
  if (collection === null) return [null];
  if (collection === window) return [window];
  if (typeof collection === 'string') return [collection];
  if (isArray(collection)) return collection;
  if (typeof collection.length != 'number') return [collection];
  if (typeof collection === 'function' && collection instanceof Function) return [collection];

  var arr = [];
  for (var i = 0; i < collection.length; i++) {
    if (Object.prototype.hasOwnProperty.call(collection, i) || i in collection) {
      arr.push(collection[i]);
    }
  }
  if (!arr.length) return [];
  return arr;
};

function isArray(arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
}


/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = function(s) {
  s = (s === undefined) ? "" : s;
  s = (s === null) ? "" : s;
  s = s.toString();
  return s;
};


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _zero_data = __webpack_require__(364);

var _zero_data2 = _interopRequireDefault(_zero_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = './../../../';

// EXTERNAL DEPS:
__webpack_require__(677);
// require('script-loader!slick-carousel'); // not needed, i guess
// APP COMPONENTS:
var List = __webpack_require__(169);
window.List = List;

__webpack_require__(349);

_zero_data2.default.gridstack();

/***/ }),

/***/ 349:
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
 * @package    Files
 * @version    0.9.0
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 * 

*/

var AntaresGridstack = {
    init: function init() {

        this.gridStack();
        this.editWidgets();
        this.cardResizePlugin();
        this.cardResizeDashboard();
        this.filterWidgets();
        this.addingWidgets();
        this.widgetGridEnlarge();
        this.helpers();
    },


    // methods
    showInDom: function showInDom() {
        $('.grid-stack').css('opacity', '1');
    },
    helpers: function helpers() {

        //gridstack height automation jintegrer babel external automation tool scafolding
        $.fn.extend({

            calcHeight: function calcHeight() {

                var gS = $('.grid-stack').data('gridstack');
                var gSCH = gS.cellHeight();
                console.log('cell height: ' + gSCH);

                $('.grid-stack-item').each(function (index, el) {

                    var itemHeight = $(el).data('gs-height');
                    var updatedHeight = itemHeight * gSCH + 'px';
                    console.log(updatedHeight);
                });
            }
        });

        $('.grid-stack-item').each(function (index, el) {

            if ($(this).find('.pagination').length) {
                $(this).addClass('gs-pagination');
            }
        });

        //card RWD go to widget_rwd_toogle
        $(document).on('click', '.card__mobile-toggle', function () {
            $(this).toggleClass('card__mobile-toggle--open');
            $(this).closest('.card').find('.mobile--toogle-target').toggle();
            $(this).closest('.card').toggleClass('card--mobile-toggled');
        });
    },
    widgetGridEnlarge: function widgetGridEnlarge() {

        //save vars without overwrite with click functions
        var savedPositions = [];
        $('.grid-stack-item').each(function () {
            var $this = $(this);
            savedPositions.push({
                x: $this.attr('data-gs-x'),
                y: $this.attr('data-gs-y'),
                w: $this.attr('data-gs-width'),
                h: $this.attr('data-gs-height')
            });
        });

        //enlarge mechanics
        $('#app-wrapper .card .card-maximize').on('click', function () {

            var self = $(this);
            var widget = $(this).closest('.grid-stack-item');
            var grid = $(this).closest('.grid-stack').data('gridstack');

            //set best height to simulate modal
            var currentCellH = grid.cellHeight();
            var headH = $('.main-head').outerHeight(true);
            var windowH = $(window).height();
            var appropriateHeight = (windowH - headH - 485) / currentCellH;

            var openCloseSwitch = $(this).data('openCloseSwitch');

            //identify card number
            var index = widget.index();

            if (!openCloseSwitch) {
                grid.update(widget, 0, 0, 12, appropriateHeight);
                $('.app-content').scrollTop(0);
                widget.addClass('is-maximized');
            } else {
                $('.grid-stack-item').each(function (index, el) {
                    grid.update(el, parseInt(savedPositions[index].x, 10), parseInt(savedPositions[index].y, 10), parseInt(savedPositions[index].w, 10), parseInt(savedPositions[index].h, 10));
                    $(el).removeClass('is-maximized');
                });
            }

            $(this).data("openCloseSwitch", !openCloseSwitch);
        });
    },
    addingWidgets: function addingWidgets() {

        var self = this;
        //draggable
        var $el = $('.card-bar .card-bar__sgl');
        var $container = $(".main-content .grid-stack");

        $container.droppable({
            accept: $el
        });

        $el.draggable({
            stop: function stop(event, ui) {

                // console.log(ui);
                // console.log(event);

            },
            start: function start() {
                // self.simulateNewGsi();
            },

            revert: function revert(valid, ui) {

                var $self = $(this);

                if (!valid) {
                    return !valid;
                } else {

                    this.velocity({
                        opacity: '0'
                    }, 500, function () {
                        $self.remove();
                        self.filterWidgets();
                    });
                    return valid;
                }
            }
        });
    },
    simulateNewGsi: function simulateNewGsi() {

        var grid = $('.grid-stack').data('gridstack');
        var el = $('.card--test');
        grid.addWidget(el, 0, 0, 3, 12, true);
        // console.log(grid) 
    },
    filterWidgets: function filterWidgets() {

        __webpack_require__(169);

        var options = {
            valueNames: [{
                data: ['widget']
            }],
            searchClass: 'mdl-textfield__input',
            listClass: 'card-bar__items'
        };

        var widgetSort = new List('widgets-list', options);
    },
    gridStack: function gridStack() {

        var grid = $('.grid-stack').data('gridstack');

        var gridstack_options = {
            // verticalMargin: 1,
            animate: false,
            minWidth: 1200,
            // float: false,
            alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            resizable: {
                // handles: 'e, se, s, sw, w'
                handles: 'e, se, s, sw, w, n'
            },
            cellHeight: 15,
            verticalMargin: 20,
            handle: '.move-button'
        };

        $('.grid-stack').gridstack(gridstack_options);
    },
    cardResizePlugin: function cardResizePlugin() {

        $.fn.cardResize = function (newWidth, newHeight, newX, newY) {

            var grid = $('.grid-stack').data('gridstack'),
                cardContainer = this.closest('.grid-stack-item'),
                originalX = this.attr('data-gs-x'),
                originalY = this.attr('data-gs-y'),
                originalW = this.attr('data-gs-width'),
                originalH = this.attr('data-gs-height');

            if (newHeight === null && newX === null && newY === null) {
                grid.update(cardContainer, originalX, originalY, newWidth, originalH);
            } else if (newX === null && newY === null) {
                grid.update(cardContainer, originalX, originalY, newWidth, newHeight);
            } else if (newY === null) {
                grid.update(cardContainer, newX, originalY, newWidth, newHeight);
            } else {
                grid.update(cardContainer, newX, newY, newWidth, newHeight);
            }
        };
    },


    cardResizeDashboard: function cardResizeDashboard() {

        var chart1 = $('.card--chart.card--green'),
            chart2 = $('.card--chart.card--orange'),
            chart3 = $('.card--chart.card--violet'),
            chart4 = $('.card--chart.card--blue'),
            systemInfo = $('.card--info'),
            news = $('.card--news'),
            systemLogs = $('.card--logs'),
            w = $(window).width(),
            grid = $('.grid-stack').data('gridstack');

        if (!grid) {
            return false;
        }

        enquire.register("screen and (min-width:1200px) and (max-width:1500px) ", {

            match: function match() {

                chart1.cardResize(12, 10, 0, 0);
                chart2.cardResize(12, 10, 0, 10);
                chart3.cardResize(12, 10, 0, 20);
                chart4.cardResize(12, 10, 0, 30);

                systemInfo.cardResize(6, 11, 0, 45);
                news.cardResize(6, 11, 6, 45);
                systemLogs.cardResize(12, 11, 0, 56);
            }

        });

        enquire.register("screen and (min-width:1501px)", {

            match: function match() {

                chart1.cardResize(6, 10, 0, 0);
                chart2.cardResize(6, 10, 6, 0);
                chart3.cardResize(6, 10, 0, 10);
                chart4.cardResize(6, 10, 6, 10);

                systemInfo.cardResize(3, 11, 0, 20);
                news.cardResize(3, 11, 3, 20);
                systemLogs.cardResize(6, 11, 6, 20);
            }

        });
    },

    editWidgets: function editWidgets() {

        var grid = $('.grid-stack').data('gridstack');
        var $grid = $('.grid-stack');

        function enableGrid() {

            $('.app-content').addClass('app-content--widgets-movable');
            $(this).children('i').removeClass('icon--widgets-edit').addClass('icon--widgets-edit-alt');
            grid.enable();
            $grid.find('.grid-stack-item').each(function (index, el) {
                grid.movable($(el), true);
            });
        }

        function disableGrid() {

            grid.disable();
            $(this).children('i').removeClass('icon--widgets-edit-alt').addClass('icon--widgets-edit');
            $('.app-content').removeClass('app-content--widgets-movable');
        }

        // cDisable on mobile & tabletss
        enquire.register("screen and (max-width:1200px)", {
            match: function match() {
                disableGrid();
            }
        });

        $('#widgets-edit').on('click', function (e) {

            e.preventDefault();

            if ($('.app-content').hasClass('app-content--widgets-movable')) {

                disableGrid();
            } else {

                enableGrid();
            }
        });

        // manual close button
        $('.card-bar__close').on('click', function (e) {

            disableGrid();
        });

        //widgets editable view
        $(document).on('click', '.remove-button', function () {

            var grid = $('.grid-stack').data('gridstack'),
                $el = $(this).closest('.grid-stack-item');

            var $self = $(this);

            APP.swal.init('skin1', 'typeInfo', {
                title: 'Are you sure?',
                text: 'Widget will be removed.'
            });

            $('.sweet-container').addClass('widget-remove');
            $('.sweet-container.widget-remove .sweet-confirm').on('click', function () {

                grid.removeWidget($el[0], true);
            });

            $('.sweet-container').removeClass('widget-remove');
        });
    }
};

$(function () {
    window.AntaresGridstack = AntaresGridstack;
    AntaresGridstack.init();
});

$(window).on('load', function () {
    AntaresGridstack.showInDom();
});

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
            value: true
});
// 
// Zero Data Component
//


exports.default = {

            // Gridstack Resize Version
            gridstack: function gridstack() {

                        var classes = {

                                    xs: 'zd--xs',
                                    sm: 'zd--sm',
                                    default: 'zd--default',
                                    lg: 'zd--lg'

                        };

                        var adjustZeroDataSize = function adjustZeroDataSize(gsi, $zdElement) {

                                    if (gsi.width < 3) {

                                                $zdElement.attr('class', 'zd ' + classes.xs);
                                    } else if (gsi.width < 5) {

                                                $zdElement.attr('class', 'zd ' + classes.sm);
                                    } else if (gsi.width < 7) {

                                                $zdElement.attr('class', 'zd ' + classes.default);
                                    } else {

                                                $zdElement.attr('class', 'zd ' + classes.lg);
                                    }
                        };

                        $(function () {

                                    // if ( !$(.))            

                                    var grid = $('.grid-stack').data('gridstack');
                                    var $grid = $('.grid-stack');

                                    $grid.on('change', function (event, items) {

                                                if (items === undefined) {
                                                            return false;
                                                }

                                                for (var i = 0; i < items.length; i++) {

                                                            var $zdDiv = $(items[i].el).find('.zd');
                                                            var currentGsi = items[i];

                                                            // check it outs, O.G
                                                            if ($zdDiv !== undefined) {

                                                                        adjustZeroDataSize(currentGsi, $zdDiv);
                                                            }
                                                }
                                    });
                        });
            }

};

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = function(list) {
  var addAsync = function(values, callback, items) {
    var valuesToAdd = values.splice(0, 50);
    items = items || [];
    items = items.concat(list.add(valuesToAdd));
    if (values.length > 0) {
      setTimeout(function() {
        addAsync(values, callback, items);
      }, 1);
    } else {
      list.update();
      callback(items);
    }
  };
  return addAsync;
};


/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = function(list) {

  // Add handlers
  list.handlers.filterStart = list.handlers.filterStart || [];
  list.handlers.filterComplete = list.handlers.filterComplete || [];

  return function(filterFunction) {
    list.trigger('filterStart');
    list.i = 1; // Reset paging
    list.reset.filter();
    if (filterFunction === undefined) {
      list.filtered = false;
    } else {
      list.filtered = true;
      var is = list.items;
      for (var i = 0, il = is.length; i < il; i++) {
        var item = is[i];
        if (filterFunction(item)) {
          item.filtered = true;
        } else {
          item.filtered = false;
        }
      }
    }
    list.update();
    list.trigger('filterComplete');
    return list.visibleItems;
  };
};


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {


var classes = __webpack_require__(170),
  events = __webpack_require__(171),
  extend = __webpack_require__(319),
  toString = __webpack_require__(323),
  getByClass = __webpack_require__(320),
  fuzzy = __webpack_require__(624);

module.exports = function(list, options) {
  options = options || {};

  options = extend({
    location: 0,
    distance: 100,
    threshold: 0.4,
    multiSearch: true,
    searchClass: 'fuzzy-search'
  }, options);



  var fuzzySearch = {
    search: function(searchString, columns) {
      // Substract arguments from the searchString or put searchString as only argument
      var searchArguments = options.multiSearch ? searchString.replace(/ +$/, '').split(/ +/) : [searchString];

      for (var k = 0, kl = list.items.length; k < kl; k++) {
        fuzzySearch.item(list.items[k], columns, searchArguments);
      }
    },
    item: function(item, columns, searchArguments) {
      var found = true;
      for(var i = 0; i < searchArguments.length; i++) {
        var foundArgument = false;
        for (var j = 0, jl = columns.length; j < jl; j++) {
          if (fuzzySearch.values(item.values(), columns[j], searchArguments[i])) {
            foundArgument = true;
          }
        }
        if(!foundArgument) {
          found = false;
        }
      }
      item.found = found;
    },
    values: function(values, value, searchArgument) {
      if (values.hasOwnProperty(value)) {
        var text = toString(values[value]).toLowerCase();

        if (fuzzy(text, searchArgument, options)) {
          return true;
        }
      }
      return false;
    }
  };


  events.bind(getByClass(list.listContainer, options.searchClass), 'keyup', function(e) {
    var target = e.target || e.srcElement; // IE have srcElement
    list.search(target.value, fuzzySearch.search);
  });

  return function(str, columns) {
    list.search(str, columns, fuzzySearch.search);
  };
};


/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

var classes = __webpack_require__(170),
  events = __webpack_require__(171),
  List = __webpack_require__(169);

module.exports = function(list) {

  var refresh = function(pagingList, options) {
    var item,
      l = list.matchingItems.length,
      index = list.i,
      page = list.page,
      pages = Math.ceil(l / page),
      currentPage = Math.ceil((index / page)),
      innerWindow = options.innerWindow || 2,
      left = options.left || options.outerWindow || 0,
      right = options.right || options.outerWindow || 0;

    right = pages - right;

    pagingList.clear();
    for (var i = 1; i <= pages; i++) {
      var className = (currentPage === i) ? "active" : "";

      //console.log(i, left, right, currentPage, (currentPage - innerWindow), (currentPage + innerWindow), className);

      if (is.number(i, left, right, currentPage, innerWindow)) {
        item = pagingList.add({
          page: i,
          dotted: false
        })[0];
        if (className) {
          classes(item.elm).add(className);
        }
        addEvent(item.elm, i, page);
      } else if (is.dotted(pagingList, i, left, right, currentPage, innerWindow, pagingList.size())) {
        item = pagingList.add({
          page: "...",
          dotted: true
        })[0];
        classes(item.elm).add("disabled");
      }
    }
  };

  var is = {
    number: function(i, left, right, currentPage, innerWindow) {
       return this.left(i, left) || this.right(i, right) || this.innerWindow(i, currentPage, innerWindow);
    },
    left: function(i, left) {
      return (i <= left);
    },
    right: function(i, right) {
      return (i > right);
    },
    innerWindow: function(i, currentPage, innerWindow) {
      return ( i >= (currentPage - innerWindow) && i <= (currentPage + innerWindow));
    },
    dotted: function(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {
      return this.dottedLeft(pagingList, i, left, right, currentPage, innerWindow) || (this.dottedRight(pagingList, i, left, right, currentPage, innerWindow, currentPageItem));
    },
    dottedLeft: function(pagingList, i, left, right, currentPage, innerWindow) {
      return ((i == (left + 1)) && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right));
    },
    dottedRight: function(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {
      if (pagingList.items[currentPageItem-1].values().dotted) {
        return false;
      } else {
        return ((i == (right)) && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right));
      }
    }
  };

  var addEvent = function(elm, i, page) {
     events.bind(elm, 'click', function() {
       list.show((i-1)*page + 1, page);
     });
  };

  return function(options) {
    var pagingList = new List(list.listContainer.id, {
      listClass: options.paginationClass || 'pagination',
      item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
      valueNames: ['page', 'dotted'],
      searchClass: 'pagination-search-that-is-not-supposed-to-exist',
      sortClass: 'pagination-sort-that-is-not-supposed-to-exist'
    });

    list.on('updated', function() {
      refresh(pagingList, options);
    });
    refresh(pagingList, options);
  };
};


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(list) {

  var Item = __webpack_require__(318)(list);

  var getChildren = function(parent) {
    var nodes = parent.childNodes,
      items = [];
    for (var i = 0, il = nodes.length; i < il; i++) {
      // Only textnodes have a data attribute
      if (nodes[i].data === undefined) {
        items.push(nodes[i]);
      }
    }
    return items;
  };

  var parse = function(itemElements, valueNames) {
    for (var i = 0, il = itemElements.length; i < il; i++) {
      list.items.push(new Item(valueNames, itemElements[i]));
    }
  };
  var parseAsync = function(itemElements, valueNames) {
    var itemsToIndex = itemElements.splice(0, 50); // TODO: If < 100 items, what happens in IE etc?
    parse(itemsToIndex, valueNames);
    if (itemElements.length > 0) {
      setTimeout(function() {
        parseAsync(itemElements, valueNames);
      }, 1);
    } else {
      list.update();
      list.trigger('parseComplete');
    }
  };

  list.handlers.parseComplete = list.handlers.parseComplete || [];

  return function() {
    var itemsToIndex = getChildren(list.list),
      valueNames = list.valueNames;

    if (list.indexAsync) {
      parseAsync(itemsToIndex, valueNames);
    } else {
      parse(itemsToIndex, valueNames);
    }
  };
};


/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = function(list) {
  var item,
    text,
    columns,
    searchString,
    customSearch;

  var prepare = {
    resetList: function() {
      list.i = 1;
      list.templater.clear();
      customSearch = undefined;
    },
    setOptions: function(args) {
      if (args.length == 2 && args[1] instanceof Array) {
        columns = args[1];
      } else if (args.length == 2 && typeof(args[1]) == "function") {
        columns = undefined;
        customSearch = args[1];
      } else if (args.length == 3) {
        columns = args[1];
        customSearch = args[2];
      } else {
        columns = undefined;
      }
    },
    setColumns: function() {
      if (list.items.length === 0) return;
      if (columns === undefined) {
        columns = (list.searchColumns === undefined) ? prepare.toArray(list.items[0].values()) : list.searchColumns;
      }
    },
    setSearchString: function(s) {
      s = list.utils.toString(s).toLowerCase();
      s = s.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"); // Escape regular expression characters
      searchString = s;
    },
    toArray: function(values) {
      var tmpColumn = [];
      for (var name in values) {
        tmpColumn.push(name);
      }
      return tmpColumn;
    }
  };
  var search = {
    list: function() {
      for (var k = 0, kl = list.items.length; k < kl; k++) {
        search.item(list.items[k]);
      }
    },
    item: function(item) {
      item.found = false;
      for (var j = 0, jl = columns.length; j < jl; j++) {
        if (search.values(item.values(), columns[j])) {
          item.found = true;
          return;
        }
      }
    },
    values: function(values, column) {
      if (values.hasOwnProperty(column)) {
        text = list.utils.toString(values[column]).toLowerCase();
        if ((searchString !== "") && (text.search(searchString) > -1)) {
          return true;
        }
      }
      return false;
    },
    reset: function() {
      list.reset.search();
      list.searched = false;
    }
  };

  var searchMethod = function(str) {
    list.trigger('searchStart');

    prepare.resetList();
    prepare.setSearchString(str);
    prepare.setOptions(arguments); // str, cols|searchFunction, searchFunction
    prepare.setColumns();

    if (searchString === "" ) {
      search.reset();
    } else {
      list.searched = true;
      if (customSearch) {
        customSearch(searchString, columns);
      } else {
        search.list();
      }
    }

    list.update();
    list.trigger('searchComplete');
    return list.visibleItems;
  };

  list.handlers.searchStart = list.handlers.searchStart || [];
  list.handlers.searchComplete = list.handlers.searchComplete || [];

  list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), 'keyup', function(e) {
    var target = e.target || e.srcElement, // IE have srcElement
      alreadyCleared = (target.value === "" && !list.searched);
    if (!alreadyCleared) { // If oninput already have resetted the list, do nothing
      searchMethod(target.value);
    }
  });

  // Used to detect click on HTML5 clear button
  list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), 'input', function(e) {
    var target = e.target || e.srcElement;
    if (target.value === "") {
      searchMethod('');
    }
  });

  return searchMethod;
};


/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = function(list) {

  var buttons = {
    els: undefined,
    clear: function() {
      for (var i = 0, il = buttons.els.length; i < il; i++) {
        list.utils.classes(buttons.els[i]).remove('asc');
        list.utils.classes(buttons.els[i]).remove('desc');
      }
    },
    getOrder: function(btn) {
      var predefinedOrder = list.utils.getAttribute(btn, 'data-order');
      if (predefinedOrder == "asc" || predefinedOrder == "desc") {
        return predefinedOrder;
      } else if (list.utils.classes(btn).has('desc')) {
        return "asc";
      } else if (list.utils.classes(btn).has('asc')) {
        return "desc";
      } else {
        return "asc";
      }
    },
    getInSensitive: function(btn, options) {
      var insensitive = list.utils.getAttribute(btn, 'data-insensitive');
      if (insensitive === "false") {
        options.insensitive = false;
      } else {
        options.insensitive = true;
      }
    },
    setOrder: function(options) {
      for (var i = 0, il = buttons.els.length; i < il; i++) {
        var btn = buttons.els[i];
        if (list.utils.getAttribute(btn, 'data-sort') !== options.valueName) {
          continue;
        }
        var predefinedOrder = list.utils.getAttribute(btn, 'data-order');
        if (predefinedOrder == "asc" || predefinedOrder == "desc") {
          if (predefinedOrder == options.order) {
            list.utils.classes(btn).add(options.order);
          }
        } else {
          list.utils.classes(btn).add(options.order);
        }
      }
    }
  };

  var sort = function() {
    list.trigger('sortStart');
    var options = {};

    var target = arguments[0].currentTarget || arguments[0].srcElement || undefined;

    if (target) {
      options.valueName = list.utils.getAttribute(target, 'data-sort');
      buttons.getInSensitive(target, options);
      options.order = buttons.getOrder(target);
    } else {
      options = arguments[1] || options;
      options.valueName = arguments[0];
      options.order = options.order || "asc";
      options.insensitive = (typeof options.insensitive == "undefined") ? true : options.insensitive;
    }

    buttons.clear();
    buttons.setOrder(options);


    // caseInsensitive
    // alphabet
    var customSortFunction = (options.sortFunction || list.sortFunction || null),
        multi = ((options.order === 'desc') ? -1 : 1),
        sortFunction;

    if (customSortFunction) {
      sortFunction = function(itemA, itemB) {
        return customSortFunction(itemA, itemB, options) * multi;
      };
    } else {
      sortFunction = function(itemA, itemB) {
        var sort = list.utils.naturalSort;
        sort.alphabet = list.alphabet || options.alphabet || undefined;
        if (!sort.alphabet && options.insensitive) {
          sort = list.utils.naturalSort.caseInsensitive;
        }
        return sort(itemA.values()[options.valueName], itemB.values()[options.valueName]) * multi;
      };
    }

    list.items.sort(sortFunction);
    list.update();
    list.trigger('sortComplete');
  };

  // Add handlers
  list.handlers.sortStart = list.handlers.sortStart || [];
  list.handlers.sortComplete = list.handlers.sortComplete || [];

  buttons.els = list.utils.getByClass(list.listContainer, list.sortClass);
  list.utils.events.bind(buttons.els, 'click', sort);
  list.on('searchStart', buttons.clear);
  list.on('filterStart', buttons.clear);

  return sort;
};


/***/ }),

/***/ 623:
/***/ (function(module, exports) {

var Templater = function(list) {
  var itemSource,
    templater = this;

  var init = function() {
    itemSource = templater.getItemSource(list.item);
    if (itemSource) {
      itemSource = templater.clearSourceItem(itemSource, list.valueNames);
    }
  };

  this.clearSourceItem = function(el, valueNames) {
    for(var i = 0, il = valueNames.length; i < il; i++) {
      var elm;
      if (valueNames[i].data) {
        for (var j = 0, jl = valueNames[i].data.length; j < jl; j++) {
          el.setAttribute('data-'+valueNames[i].data[j], '');
        }
      } else if (valueNames[i].attr && valueNames[i].name) {
        elm = list.utils.getByClass(el, valueNames[i].name, true);
        if (elm) {
          elm.setAttribute(valueNames[i].attr, "");
        }
      } else {
        elm = list.utils.getByClass(el, valueNames[i], true);
        if (elm) {
          elm.innerHTML = "";
        }
      }
      elm = undefined;
    }
    return el;
  };

  this.getItemSource = function(item) {
    if (item === undefined) {
      var nodes = list.list.childNodes,
        items = [];

      for (var i = 0, il = nodes.length; i < il; i++) {
        // Only textnodes have a data attribute
        if (nodes[i].data === undefined) {
          return nodes[i].cloneNode(true);
        }
      }
    } else if (/<tr[\s>]/g.exec(item)) {
      var tbody = document.createElement('tbody');
      tbody.innerHTML = item;
      return tbody.firstChild;
    } else if (item.indexOf("<") !== -1) {
      var div = document.createElement('div');
      div.innerHTML = item;
      return div.firstChild;
    } else {
      var source = document.getElementById(list.item);
      if (source) {
        return source;
      }
    }
    return undefined;
  };

  this.get = function(item, valueNames) {
    templater.create(item);
    var values = {};
    for(var i = 0, il = valueNames.length; i < il; i++) {
      var elm;
      if (valueNames[i].data) {
        for (var j = 0, jl = valueNames[i].data.length; j < jl; j++) {
          values[valueNames[i].data[j]] = list.utils.getAttribute(item.elm, 'data-'+valueNames[i].data[j]);
        }
      } else if (valueNames[i].attr && valueNames[i].name) {
        elm = list.utils.getByClass(item.elm, valueNames[i].name, true);
        values[valueNames[i].name] = elm ? list.utils.getAttribute(elm, valueNames[i].attr) : "";
      } else {
        elm = list.utils.getByClass(item.elm, valueNames[i], true);
        values[valueNames[i]] = elm ? elm.innerHTML : "";
      }
      elm = undefined;
    }
    return values;
  };

  this.set = function(item, values) {
    var getValueName = function(name) {
      for (var i = 0, il = list.valueNames.length; i < il; i++) {
        if (list.valueNames[i].data) {
          var data = list.valueNames[i].data;
          for (var j = 0, jl = data.length; j < jl; j++) {
            if (data[j] === name) {
              return { data: name };
            }
          }
        } else if (list.valueNames[i].attr && list.valueNames[i].name && list.valueNames[i].name == name) {
          return list.valueNames[i];
        } else if (list.valueNames[i] === name) {
          return name;
        }
      }
    };
    var setValue = function(name, value) {
      var elm;
      var valueName = getValueName(name);
      if (!valueName)
        return;
      if (valueName.data) {
        item.elm.setAttribute('data-'+valueName.data, value);
      } else if (valueName.attr && valueName.name) {
        elm = list.utils.getByClass(item.elm, valueName.name, true);
        if (elm) {
          elm.setAttribute(valueName.attr, value);
        }
      } else {
        elm = list.utils.getByClass(item.elm, valueName, true);
        if (elm) {
          elm.innerHTML = value;
        }
      }
      elm = undefined;
    };
    if (!templater.create(item)) {
      for(var v in values) {
        if (values.hasOwnProperty(v)) {
          setValue(v, values[v]);
        }
      }
    }
  };

  this.create = function(item) {
    if (item.elm !== undefined) {
      return false;
    }
    if (itemSource === undefined) {
      throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
    }
    /* If item source does not exists, use the first item in list as
    source for new items */
    var newItem = itemSource.cloneNode(true);
    newItem.removeAttribute('id');
    item.elm = newItem;
    templater.set(item, item.values());
    return true;
  };
  this.remove = function(item) {
    if (item.elm.parentNode === list.list) {
      list.list.removeChild(item.elm);
    }
  };
  this.show = function(item) {
    templater.create(item);
    list.list.appendChild(item.elm);
  };
  this.hide = function(item) {
    if (item.elm !== undefined && item.elm.parentNode === list.list) {
      list.list.removeChild(item.elm);
    }
  };
  this.clear = function() {
    /* .innerHTML = ''; fucks up IE */
    if (list.list.hasChildNodes()) {
      while (list.list.childNodes.length >= 1)
      {
        list.list.removeChild(list.list.firstChild);
      }
    }
  };

  init();
};

module.exports = function(list) {
  return new Templater(list);
};


/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = function(text, pattern, options) {
    // Aproximately where in the text is the pattern expected to be found?
    var Match_Location = options.location || 0;

    //Determines how close the match must be to the fuzzy location (specified above). An exact letter match which is 'distance' characters away from the fuzzy location would score as a complete mismatch. A distance of '0' requires the match be at the exact location specified, a threshold of '1000' would require a perfect match to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    var Match_Distance = options.distance || 100;

    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match (of both letters and location), a threshold of '1.0' would match anything.
    var Match_Threshold = options.threshold || 0.4;

    if (pattern === text) return true; // Exact match
    if (pattern.length > 32) return false; // This algorithm cannot be used

    // Set starting location at beginning text and initialise the alphabet.
    var loc = Match_Location,
        s = (function() {
            var q = {},
                i;

            for (i = 0; i < pattern.length; i++) {
                q[pattern.charAt(i)] = 0;
            }

            for (i = 0; i < pattern.length; i++) {
                q[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
            }

            return q;
        }());

    // Compute and return the score for a match with e errors and x location.
    // Accesses loc and pattern through being a closure.

    function match_bitapScore_(e, x) {
        var accuracy = e / pattern.length,
            proximity = Math.abs(loc - x);

        if (!Match_Distance) {
            // Dodge divide by zero error.
            return proximity ? 1.0 : accuracy;
        }
        return accuracy + (proximity / Match_Distance);
    }

    var score_threshold = Match_Threshold, // Highest score beyond which we give up.
        best_loc = text.indexOf(pattern, loc); // Is there a nearby exact match? (speedup)

    if (best_loc != -1) {
        score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
        // What about in the other direction? (speedup)
        best_loc = text.lastIndexOf(pattern, loc + pattern.length);

        if (best_loc != -1) {
            score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
        }
    }

    // Initialise the bit arrays.
    var matchmask = 1 << (pattern.length - 1);
    best_loc = -1;

    var bin_min, bin_mid;
    var bin_max = pattern.length + text.length;
    var last_rd;
    for (var d = 0; d < pattern.length; d++) {
        // Scan for the best match; each iteration allows for one more error.
        // Run a binary search to determine how far from 'loc' we can stray at this
        // error level.
        bin_min = 0;
        bin_mid = bin_max;
        while (bin_min < bin_mid) {
            if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
                bin_min = bin_mid;
            } else {
                bin_max = bin_mid;
            }
            bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
        }
        // Use the result from this iteration as the maximum for the next.
        bin_max = bin_mid;
        var start = Math.max(1, loc - bin_mid + 1);
        var finish = Math.min(loc + bin_mid, text.length) + pattern.length;

        var rd = Array(finish + 2);
        rd[finish + 1] = (1 << d) - 1;
        for (var j = finish; j >= start; j--) {
            // The alphabet (s) is a sparse hash, so the following line generates
            // warnings.
            var charMatch = s[text.charAt(j - 1)];
            if (d === 0) {    // First pass: exact match.
                rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
            } else {    // Subsequent passes: fuzzy match.
                rd[j] = (((rd[j + 1] << 1) | 1) & charMatch) |
                                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
                                last_rd[j + 1];
            }
            if (rd[j] & matchmask) {
                var score = match_bitapScore_(d, j - 1);
                // This match will almost certainly be better than any existing match.
                // But check anyway.
                if (score <= score_threshold) {
                    // Told you so.
                    score_threshold = score;
                    best_loc = j - 1;
                    if (best_loc > loc) {
                        // When passing loc, don't exceed our current distance from loc.
                        start = Math.max(1, 2 * loc - best_loc);
                    } else {
                        // Already passed loc, downhill from here on in.
                        break;
                    }
                }
            }
        }
        // No hope for a (better) match at greater error levels.
        if (match_bitapScore_(d + 1, loc) > score_threshold) {
            break;
        }
        last_rd = rd;
    }

    return (best_loc < 0) ? false : true;
};


/***/ }),

/***/ 625:
/***/ (function(module, exports) {

/**
 * A cross-browser implementation of getAttribute.
 * Source found here: http://stackoverflow.com/a/3755343/361337 written by Vivin Paliath
 *
 * Return the value for `attr` at `element`.
 *
 * @param {Element} el
 * @param {String} attr
 * @api public
 */

module.exports = function(el, attr) {
  var result = (el.getAttribute && el.getAttribute(attr)) || null;
  if( !result ) {
    var attrs = el.attributes;
    var length = attrs.length;
    for(var i = 0; i < length; i++) {
      if (attr[i] !== undefined) {
        if(attr[i].nodeName === attr) {
          result = attr[i].nodeValue;
        }
      }
    }
  }
  return result;
};


/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports = "/**\n * gridstack.js 0.3.0\n * http://troolee.github.io/gridstack.js/\n * (c) 2014-2016 Pavel Reznikov, Dylan Weiss\n * gridstack.js may be freely distributed under the MIT license.\n * @preserve\n*/\n(function(factory) {\n    if (typeof define === 'function' && define.amd) {\n        define(['jquery', 'lodash'], factory);\n    } else if (typeof exports !== 'undefined') {\n        try { jQuery = require('jquery'); } catch (e) {}\n        try { _ = require('lodash'); } catch (e) {}\n        factory(jQuery, _);\n    } else {\n        factory(jQuery, _);\n    }\n})(function($, _) {\n\n    var scope = window;\n\n    var obsolete = function(f, oldName, newName) {\n        var wrapper = function() {\n            console.warn('gridstack.js: Function `' + oldName + '` is deprecated as of v0.2.5 and has been replaced ' +\n            'with `' + newName + '`. It will be **completely** removed in v1.0.');\n            return f.apply(this, arguments);\n        };\n        wrapper.prototype = f.prototype;\n\n        return wrapper;\n    };\n\n    var obsoleteOpts = function(oldName, newName) {\n        console.warn('gridstack.js: Option `' + oldName + '` is deprecated as of v0.2.5 and has been replaced with `' +\n            newName + '`. It will be **completely** removed in v1.0.');\n    };\n\n    var Utils = {\n        isIntercepted: function(a, b) {\n            return !(a.x + a.width <= b.x || b.x + b.width <= a.x || a.y + a.height <= b.y || b.y + b.height <= a.y);\n        },\n\n        sort: function(nodes, dir, width) {\n            width = width || _.chain(nodes).map(function(node) { return node.x + node.width; }).max().value();\n            dir = dir != -1 ? 1 : -1;\n            return _.sortBy(nodes, function(n) { return dir * (n.x + n.y * width); });\n        },\n\n        createStylesheet: function(id) {\n            var style = document.createElement('style');\n            style.setAttribute('type', 'text/css');\n            style.setAttribute('data-gs-style-id', id);\n            if (style.styleSheet) {\n                style.styleSheet.cssText = '';\n            } else {\n                style.appendChild(document.createTextNode(''));\n            }\n            document.getElementsByTagName('head')[0].appendChild(style);\n            return style.sheet;\n        },\n\n        removeStylesheet: function(id) {\n            $('STYLE[data-gs-style-id=' + id + ']').remove();\n        },\n\n        insertCSSRule: function(sheet, selector, rules, index) {\n            if (typeof sheet.insertRule === 'function') {\n                sheet.insertRule(selector + '{' + rules + '}', index);\n            } else if (typeof sheet.addRule === 'function') {\n                sheet.addRule(selector, rules, index);\n            }\n        },\n\n        toBool: function(v) {\n            if (typeof v == 'boolean') {\n                return v;\n            }\n            if (typeof v == 'string') {\n                v = v.toLowerCase();\n                return !(v === '' || v == 'no' || v == 'false' || v == '0');\n            }\n            return Boolean(v);\n        },\n\n        _collisionNodeCheck: function(n) {\n            return n != this.node && Utils.isIntercepted(n, this.nn);\n        },\n\n        _didCollide: function(bn) {\n            return Utils.isIntercepted({x: this.n.x, y: this.newY, width: this.n.width, height: this.n.height}, bn);\n        },\n\n        _isAddNodeIntercepted: function(n) {\n            return Utils.isIntercepted({x: this.x, y: this.y, width: this.node.width, height: this.node.height}, n);\n        },\n\n        parseHeight: function(val) {\n            var height = val;\n            var heightUnit = 'px';\n            if (height && _.isString(height)) {\n                var match = height.match(/^(-[0-9]+\\.[0-9]+|[0-9]*\\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw)?$/);\n                if (!match) {\n                    throw new Error('Invalid height');\n                }\n                heightUnit = match[2] || 'px';\n                height = parseFloat(match[1]);\n            }\n            return {height: height, unit: heightUnit};\n        }\n    };\n\n    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers\n    Utils.is_intercepted = obsolete(Utils.isIntercepted, 'is_intercepted', 'isIntercepted');\n\n    Utils.create_stylesheet = obsolete(Utils.createStylesheet, 'create_stylesheet', 'createStylesheet');\n\n    Utils.remove_stylesheet = obsolete(Utils.removeStylesheet, 'remove_stylesheet', 'removeStylesheet');\n\n    Utils.insert_css_rule = obsolete(Utils.insertCSSRule, 'insert_css_rule', 'insertCSSRule');\n    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers\n\n    /**\n    * @class GridStackDragDropPlugin\n    * Base class for drag'n'drop plugin.\n    */\n    function GridStackDragDropPlugin(grid) {\n        this.grid = grid;\n    }\n\n    GridStackDragDropPlugin.registeredPlugins = [];\n\n    GridStackDragDropPlugin.registerPlugin = function(pluginClass) {\n        GridStackDragDropPlugin.registeredPlugins.push(pluginClass);\n    };\n\n    GridStackDragDropPlugin.prototype.resizable = function(el, opts) {\n        return this;\n    };\n\n    GridStackDragDropPlugin.prototype.draggable = function(el, opts) {\n        return this;\n    };\n\n    GridStackDragDropPlugin.prototype.droppable = function(el, opts) {\n        return this;\n    };\n\n    GridStackDragDropPlugin.prototype.isDroppable = function(el) {\n        return false;\n    };\n\n    GridStackDragDropPlugin.prototype.on = function(el, eventName, callback) {\n        return this;\n    };\n\n\n    var idSeq = 0;\n\n    var GridStackEngine = function(width, onchange, floatMode, height, items) {\n        this.width = width;\n        this.float = floatMode || false;\n        this.height = height || 0;\n\n        this.nodes = items || [];\n        this.onchange = onchange || function() {};\n\n        this._updateCounter = 0;\n        this._float = this.float;\n\n        this._addedNodes = [];\n        this._removedNodes = [];\n    };\n\n    GridStackEngine.prototype.batchUpdate = function() {\n        this._updateCounter = 1;\n        this.float = true;\n    };\n\n    GridStackEngine.prototype.commit = function() {\n        if (this._updateCounter !== 0) {\n            this._updateCounter = 0;\n            this.float = this._float;\n            this._packNodes();\n            this._notify();\n        }\n    };\n\n    // For Meteor support: https://github.com/troolee/gridstack.js/pull/272\n    GridStackEngine.prototype.getNodeDataByDOMEl = function(el) {\n        return _.find(this.nodes, function(n) { return el.get(0) === n.el.get(0); });\n    };\n\n    GridStackEngine.prototype._fixCollisions = function(node) {\n        var self = this;\n        this._sortNodes(-1);\n\n        var nn = node;\n        var hasLocked = Boolean(_.find(this.nodes, function(n) { return n.locked; }));\n        if (!this.float && !hasLocked) {\n            nn = {x: 0, y: node.y, width: this.width, height: node.height};\n        }\n        while (true) {\n            var collisionNode = _.find(this.nodes, _.bind(Utils._collisionNodeCheck, {node: node, nn: nn}));\n            if (typeof collisionNode == 'undefined') {\n                return;\n            }\n            this.moveNode(collisionNode, collisionNode.x, node.y + node.height,\n                collisionNode.width, collisionNode.height, true);\n        }\n    };\n\n    GridStackEngine.prototype.isAreaEmpty = function(x, y, width, height) {\n        var nn = {x: x || 0, y: y || 0, width: width || 1, height: height || 1};\n        var collisionNode = _.find(this.nodes, _.bind(function(n) {\n            return Utils.isIntercepted(n, nn);\n        }, this));\n        return collisionNode === null || typeof collisionNode === 'undefined';\n    };\n\n    GridStackEngine.prototype._sortNodes = function(dir) {\n        this.nodes = Utils.sort(this.nodes, dir, this.width);\n    };\n\n    GridStackEngine.prototype._packNodes = function() {\n        this._sortNodes();\n\n        if (this.float) {\n            _.each(this.nodes, _.bind(function(n, i) {\n                if (n._updating || typeof n._origY == 'undefined' || n.y == n._origY) {\n                    return;\n                }\n\n                var newY = n.y;\n                while (newY >= n._origY) {\n                    var collisionNode = _.chain(this.nodes)\n                        .find(_.bind(Utils._didCollide, {n: n, newY: newY}))\n                        .value();\n\n                    if (!collisionNode) {\n                        n._dirty = true;\n                        n.y = newY;\n                    }\n                    --newY;\n                }\n            }, this));\n        } else {\n            _.each(this.nodes, _.bind(function(n, i) {\n                if (n.locked) {\n                    return;\n                }\n                while (n.y > 0) {\n                    var newY = n.y - 1;\n                    var canBeMoved = i === 0;\n\n                    if (i > 0) {\n                        var collisionNode = _.chain(this.nodes)\n                            .take(i)\n                            .find(_.bind(Utils._didCollide, {n: n, newY: newY}))\n                            .value();\n                        canBeMoved = typeof collisionNode == 'undefined';\n                    }\n\n                    if (!canBeMoved) {\n                        break;\n                    }\n                    n._dirty = n.y != newY;\n                    n.y = newY;\n                }\n            }, this));\n        }\n    };\n\n    GridStackEngine.prototype._prepareNode = function(node, resizing) {\n        node = _.defaults(node || {}, {width: 1, height: 1, x: 0, y: 0});\n\n        node.x = parseInt('' + node.x);\n        node.y = parseInt('' + node.y);\n        node.width = parseInt('' + node.width);\n        node.height = parseInt('' + node.height);\n        node.autoPosition = node.autoPosition || false;\n        node.noResize = node.noResize || false;\n        node.noMove = node.noMove || false;\n\n        if (node.width > this.width) {\n            node.width = this.width;\n        } else if (node.width < 1) {\n            node.width = 1;\n        }\n\n        if (node.height < 1) {\n            node.height = 1;\n        }\n\n        if (node.x < 0) {\n            node.x = 0;\n        }\n\n        if (node.x + node.width > this.width) {\n            if (resizing) {\n                node.width = this.width - node.x;\n            } else {\n                node.x = this.width - node.width;\n            }\n        }\n\n        if (node.y < 0) {\n            node.y = 0;\n        }\n\n        return node;\n    };\n\n    GridStackEngine.prototype._notify = function() {\n        var args = Array.prototype.slice.call(arguments, 0);\n        args[0] = typeof args[0] === 'undefined' ? [] : [args[0]];\n        args[1] = typeof args[1] === 'undefined' ? true : args[1];\n        if (this._updateCounter) {\n            return;\n        }\n        var deletedNodes = args[0].concat(this.getDirtyNodes());\n        this.onchange(deletedNodes, args[1]);\n    };\n\n    GridStackEngine.prototype.cleanNodes = function() {\n        if (this._updateCounter) {\n            return;\n        }\n        _.each(this.nodes, function(n) {n._dirty = false; });\n    };\n\n    GridStackEngine.prototype.getDirtyNodes = function() {\n        return _.filter(this.nodes, function(n) { return n._dirty; });\n    };\n\n    GridStackEngine.prototype.addNode = function(node, triggerAddEvent) {\n        node = this._prepareNode(node);\n\n        if (typeof node.maxWidth != 'undefined') { node.width = Math.min(node.width, node.maxWidth); }\n        if (typeof node.maxHeight != 'undefined') { node.height = Math.min(node.height, node.maxHeight); }\n        if (typeof node.minWidth != 'undefined') { node.width = Math.max(node.width, node.minWidth); }\n        if (typeof node.minHeight != 'undefined') { node.height = Math.max(node.height, node.minHeight); }\n\n        node._id = ++idSeq;\n        node._dirty = true;\n\n        if (node.autoPosition) {\n            this._sortNodes();\n\n            for (var i = 0;; ++i) {\n                var x = i % this.width;\n                var y = Math.floor(i / this.width);\n                if (x + node.width > this.width) {\n                    continue;\n                }\n                if (!_.find(this.nodes, _.bind(Utils._isAddNodeIntercepted, {x: x, y: y, node: node}))) {\n                    node.x = x;\n                    node.y = y;\n                    break;\n                }\n            }\n        }\n\n        this.nodes.push(node);\n        if (typeof triggerAddEvent != 'undefined' && triggerAddEvent) {\n            this._addedNodes.push(_.clone(node));\n        }\n\n        this._fixCollisions(node);\n        this._packNodes();\n        this._notify();\n        return node;\n    };\n\n    GridStackEngine.prototype.removeNode = function(node, detachNode) {\n        detachNode = typeof detachNode === 'undefined' ? true : detachNode;\n        this._removedNodes.push(_.clone(node));\n        node._id = null;\n        this.nodes = _.without(this.nodes, node);\n        this._packNodes();\n        this._notify(node, detachNode);\n    };\n\n    GridStackEngine.prototype.canMoveNode = function(node, x, y, width, height) {\n        if (!this.isNodeChangedPosition(node, x, y, width, height)) {\n            return false;\n        }\n        var hasLocked = Boolean(_.find(this.nodes, function(n) { return n.locked; }));\n\n        if (!this.height && !hasLocked) {\n            return true;\n        }\n\n        var clonedNode;\n        var clone = new GridStackEngine(\n            this.width,\n            null,\n            this.float,\n            0,\n            _.map(this.nodes, function(n) {\n                if (n == node) {\n                    clonedNode = $.extend({}, n);\n                    return clonedNode;\n                }\n                return $.extend({}, n);\n            }));\n\n        if (typeof clonedNode === 'undefined') {\n            return true;\n        }\n\n        clone.moveNode(clonedNode, x, y, width, height);\n\n        var res = true;\n\n        if (hasLocked) {\n            res &= !Boolean(_.find(clone.nodes, function(n) {\n                return n != clonedNode && Boolean(n.locked) && Boolean(n._dirty);\n            }));\n        }\n        if (this.height) {\n            res &= clone.getGridHeight() <= this.height;\n        }\n\n        return res;\n    };\n\n    GridStackEngine.prototype.canBePlacedWithRespectToHeight = function(node) {\n        if (!this.height) {\n            return true;\n        }\n\n        var clone = new GridStackEngine(\n            this.width,\n            null,\n            this.float,\n            0,\n            _.map(this.nodes, function(n) { return $.extend({}, n); }));\n        clone.addNode(node);\n        return clone.getGridHeight() <= this.height;\n    };\n\n    GridStackEngine.prototype.isNodeChangedPosition = function(node, x, y, width, height) {\n        if (typeof x != 'number') { x = node.x; }\n        if (typeof y != 'number') { y = node.y; }\n        if (typeof width != 'number') { width = node.width; }\n        if (typeof height != 'number') { height = node.height; }\n\n        if (typeof node.maxWidth != 'undefined') { width = Math.min(width, node.maxWidth); }\n        if (typeof node.maxHeight != 'undefined') { height = Math.min(height, node.maxHeight); }\n        if (typeof node.minWidth != 'undefined') { width = Math.max(width, node.minWidth); }\n        if (typeof node.minHeight != 'undefined') { height = Math.max(height, node.minHeight); }\n\n        if (node.x == x && node.y == y && node.width == width && node.height == height) {\n            return false;\n        }\n        return true;\n    };\n\n    GridStackEngine.prototype.moveNode = function(node, x, y, width, height, noPack) {\n        if (!this.isNodeChangedPosition(node, x, y, width, height)) {\n            return node;\n        }\n        if (typeof x != 'number') { x = node.x; }\n        if (typeof y != 'number') { y = node.y; }\n        if (typeof width != 'number') { width = node.width; }\n        if (typeof height != 'number') { height = node.height; }\n\n        if (typeof node.maxWidth != 'undefined') { width = Math.min(width, node.maxWidth); }\n        if (typeof node.maxHeight != 'undefined') { height = Math.min(height, node.maxHeight); }\n        if (typeof node.minWidth != 'undefined') { width = Math.max(width, node.minWidth); }\n        if (typeof node.minHeight != 'undefined') { height = Math.max(height, node.minHeight); }\n\n        if (node.x == x && node.y == y && node.width == width && node.height == height) {\n            return node;\n        }\n\n        var resizing = node.width != width;\n        node._dirty = true;\n\n        node.x = x;\n        node.y = y;\n        node.width = width;\n        node.height = height;\n\n        node.lastTriedX = x;\n        node.lastTriedY = y;\n        node.lastTriedWidth = width;\n        node.lastTriedHeight = height;\n\n        node = this._prepareNode(node, resizing);\n\n        this._fixCollisions(node);\n        if (!noPack) {\n            this._packNodes();\n            this._notify();\n        }\n        return node;\n    };\n\n    GridStackEngine.prototype.getGridHeight = function() {\n        return _.reduce(this.nodes, function(memo, n) { return Math.max(memo, n.y + n.height); }, 0);\n    };\n\n    GridStackEngine.prototype.beginUpdate = function(node) {\n        _.each(this.nodes, function(n) {\n            n._origY = n.y;\n        });\n        node._updating = true;\n    };\n\n    GridStackEngine.prototype.endUpdate = function() {\n        _.each(this.nodes, function(n) {\n            n._origY = n.y;\n        });\n        var n = _.find(this.nodes, function(n) { return n._updating; });\n        if (n) {\n            n._updating = false;\n        }\n    };\n\n    var GridStack = function(el, opts) {\n        var self = this;\n        var oneColumnMode, isAutoCellHeight;\n\n        opts = opts || {};\n\n        this.container = $(el);\n\n        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers\n        if (typeof opts.handle_class !== 'undefined') {\n            opts.handleClass = opts.handle_class;\n            obsoleteOpts('handle_class', 'handleClass');\n        }\n        if (typeof opts.item_class !== 'undefined') {\n            opts.itemClass = opts.item_class;\n            obsoleteOpts('item_class', 'itemClass');\n        }\n        if (typeof opts.placeholder_class !== 'undefined') {\n            opts.placeholderClass = opts.placeholder_class;\n            obsoleteOpts('placeholder_class', 'placeholderClass');\n        }\n        if (typeof opts.placeholder_text !== 'undefined') {\n            opts.placeholderText = opts.placeholder_text;\n            obsoleteOpts('placeholder_text', 'placeholderText');\n        }\n        if (typeof opts.cell_height !== 'undefined') {\n            opts.cellHeight = opts.cell_height;\n            obsoleteOpts('cell_height', 'cellHeight');\n        }\n        if (typeof opts.vertical_margin !== 'undefined') {\n            opts.verticalMargin = opts.vertical_margin;\n            obsoleteOpts('vertical_margin', 'verticalMargin');\n        }\n        if (typeof opts.min_width !== 'undefined') {\n            opts.minWidth = opts.min_width;\n            obsoleteOpts('min_width', 'minWidth');\n        }\n        if (typeof opts.static_grid !== 'undefined') {\n            opts.staticGrid = opts.static_grid;\n            obsoleteOpts('static_grid', 'staticGrid');\n        }\n        if (typeof opts.is_nested !== 'undefined') {\n            opts.isNested = opts.is_nested;\n            obsoleteOpts('is_nested', 'isNested');\n        }\n        if (typeof opts.always_show_resize_handle !== 'undefined') {\n            opts.alwaysShowResizeHandle = opts.always_show_resize_handle;\n            obsoleteOpts('always_show_resize_handle', 'alwaysShowResizeHandle');\n        }\n        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers\n\n        opts.itemClass = opts.itemClass || 'grid-stack-item';\n        var isNested = this.container.closest('.' + opts.itemClass).length > 0;\n\n        this.opts = _.defaults(opts || {}, {\n            width: parseInt(this.container.attr('data-gs-width')) || 12,\n            height: parseInt(this.container.attr('data-gs-height')) || 0,\n            itemClass: 'grid-stack-item',\n            placeholderClass: 'grid-stack-placeholder',\n            placeholderText: '',\n            handle: '.grid-stack-item-content',\n            handleClass: null,\n            cellHeight: 60,\n            verticalMargin: 20,\n            auto: true,\n            minWidth: 768,\n            float: false,\n            staticGrid: false,\n            _class: 'grid-stack-instance-' + (Math.random() * 10000).toFixed(0),\n            animate: Boolean(this.container.attr('data-gs-animate')) || false,\n            alwaysShowResizeHandle: opts.alwaysShowResizeHandle || false,\n            resizable: _.defaults(opts.resizable || {}, {\n                autoHide: !(opts.alwaysShowResizeHandle || false),\n                handles: 'se'\n            }),\n            draggable: _.defaults(opts.draggable || {}, {\n                handle: (opts.handleClass ? '.' + opts.handleClass : (opts.handle ? opts.handle : '')) ||\n                    '.grid-stack-item-content',\n                scroll: false,\n                appendTo: 'body'\n            }),\n            disableDrag: opts.disableDrag || false,\n            disableResize: opts.disableResize || false,\n            rtl: 'auto',\n            removable: false,\n            removeTimeout: 2000,\n            verticalMarginUnit: 'px',\n            cellHeightUnit: 'px',\n            disableOneColumnMode: opts.disableOneColumnMode || false,\n            oneColumnModeClass: opts.oneColumnModeClass || 'grid-stack-one-column-mode',\n            ddPlugin: null\n        });\n\n        if (this.opts.ddPlugin === false) {\n            this.opts.ddPlugin = GridStackDragDropPlugin;\n        } else if (this.opts.ddPlugin === null) {\n            this.opts.ddPlugin = _.first(GridStackDragDropPlugin.registeredPlugins) || GridStackDragDropPlugin;\n        }\n\n        this.dd = new this.opts.ddPlugin(this);\n\n        if (this.opts.rtl === 'auto') {\n            this.opts.rtl = this.container.css('direction') === 'rtl';\n        }\n\n        if (this.opts.rtl) {\n            this.container.addClass('grid-stack-rtl');\n        }\n\n        this.opts.isNested = isNested;\n\n        isAutoCellHeight = this.opts.cellHeight === 'auto';\n        if (isAutoCellHeight) {\n            self.cellHeight(self.cellWidth(), true);\n        } else {\n            this.cellHeight(this.opts.cellHeight, true);\n        }\n        this.verticalMargin(this.opts.verticalMargin, true);\n\n        this.container.addClass(this.opts._class);\n\n        this._setStaticClass();\n\n        if (isNested) {\n            this.container.addClass('grid-stack-nested');\n        }\n\n        this._initStyles();\n\n        this.grid = new GridStackEngine(this.opts.width, function(nodes, detachNode) {\n            detachNode = typeof detachNode === 'undefined' ? true : detachNode;\n            var maxHeight = 0;\n            _.each(nodes, function(n) {\n                if (detachNode && n._id === null) {\n                    if (n.el) {\n                        n.el.remove();\n                    }\n                } else {\n                    n.el\n                        .attr('data-gs-x', n.x)\n                        .attr('data-gs-y', n.y)\n                        .attr('data-gs-width', n.width)\n                        .attr('data-gs-height', n.height);\n                    maxHeight = Math.max(maxHeight, n.y + n.height);\n                }\n            });\n            self._updateStyles(maxHeight + 10);\n        }, this.opts.float, this.opts.height);\n\n        if (this.opts.auto) {\n            var elements = [];\n            var _this = this;\n            this.container.children('.' + this.opts.itemClass + ':not(.' + this.opts.placeholderClass + ')')\n                .each(function(index, el) {\n                el = $(el);\n                elements.push({\n                    el: el,\n                    i: parseInt(el.attr('data-gs-x')) + parseInt(el.attr('data-gs-y')) * _this.opts.width\n                });\n            });\n            _.chain(elements).sortBy(function(x) { return x.i; }).each(function(i) {\n                self._prepareElement(i.el);\n            }).value();\n        }\n\n        this.setAnimation(this.opts.animate);\n\n        this.placeholder = $(\n            '<div class=\"' + this.opts.placeholderClass + ' ' + this.opts.itemClass + '\">' +\n            '<div class=\"placeholder-content\">' + this.opts.placeholderText + '</div></div>').hide();\n\n        this._updateContainerHeight();\n\n        this._updateHeightsOnResize = _.throttle(function() {\n            self.cellHeight(self.cellWidth(), false);\n        }, 100);\n\n        this.onResizeHandler = function() {\n            if (isAutoCellHeight) {\n                self._updateHeightsOnResize();\n            }\n\n            if (self._isOneColumnMode() && !self.opts.disableOneColumnMode) {\n                if (oneColumnMode) {\n                    return;\n                }\n                self.container.addClass(self.opts.oneColumnModeClass);\n                oneColumnMode = true;\n\n                self.grid._sortNodes();\n                _.each(self.grid.nodes, function(node) {\n                    self.container.append(node.el);\n\n                    if (self.opts.staticGrid) {\n                        return;\n                    }\n                    self.dd.draggable(node.el, 'disable');\n                    self.dd.resizable(node.el, 'disable');\n\n                    node.el.trigger('resize');\n                });\n            } else {\n                if (!oneColumnMode) {\n                    return;\n                }\n\n                self.container.removeClass(self.opts.oneColumnModeClass);\n                oneColumnMode = false;\n\n                if (self.opts.staticGrid) {\n                    return;\n                }\n\n                _.each(self.grid.nodes, function(node) {\n                    if (!node.noMove && !self.opts.disableDrag) {\n                        self.dd.draggable(node.el, 'enable');\n                    }\n                    if (!node.noResize && !self.opts.disableResize) {\n                        self.dd.resizable(node.el, 'enable');\n                    }\n\n                    node.el.trigger('resize');\n                });\n            }\n        };\n\n        $(window).resize(this.onResizeHandler);\n        this.onResizeHandler();\n\n        if (!self.opts.staticGrid && typeof self.opts.removable === 'string') {\n            var trashZone = $(self.opts.removable);\n            if (!this.dd.isDroppable(trashZone)) {\n                this.dd.droppable(trashZone, {\n                    accept: '.' + self.opts.itemClass\n                });\n            }\n            this.dd\n                .on(trashZone, 'dropover', function(event, ui) {\n                    var el = $(ui.draggable);\n                    var node = el.data('_gridstack_node');\n                    if (node._grid !== self) {\n                        return;\n                    }\n                    self._setupRemovingTimeout(el);\n                })\n                .on(trashZone, 'dropout', function(event, ui) {\n                    var el = $(ui.draggable);\n                    var node = el.data('_gridstack_node');\n                    if (node._grid !== self) {\n                        return;\n                    }\n                    self._clearRemovingTimeout(el);\n                });\n        }\n\n        if (!self.opts.staticGrid && self.opts.acceptWidgets) {\n            var draggingElement = null;\n\n            var onDrag = function(event, ui) {\n                var el = draggingElement;\n                var node = el.data('_gridstack_node');\n                var pos = self.getCellFromPixel(ui.offset, true);\n                var x = Math.max(0, pos.x);\n                var y = Math.max(0, pos.y);\n                if (!node._added) {\n                    node._added = true;\n\n                    node.el = el;\n                    node.x = x;\n                    node.y = y;\n                    self.grid.cleanNodes();\n                    self.grid.beginUpdate(node);\n                    self.grid.addNode(node);\n\n                    self.container.append(self.placeholder);\n                    self.placeholder\n                        .attr('data-gs-x', node.x)\n                        .attr('data-gs-y', node.y)\n                        .attr('data-gs-width', node.width)\n                        .attr('data-gs-height', node.height)\n                        .show();\n                    node.el = self.placeholder;\n                    node._beforeDragX = node.x;\n                    node._beforeDragY = node.y;\n\n                    self._updateContainerHeight();\n                } else {\n                    if (!self.grid.canMoveNode(node, x, y)) {\n                        return;\n                    }\n                    self.grid.moveNode(node, x, y);\n                    self._updateContainerHeight();\n                }\n            };\n\n            this.dd\n                .droppable(self.container, {\n                    accept: function(el) {\n                        el = $(el);\n                        var node = el.data('_gridstack_node');\n                        if (node && node._grid === self) {\n                            return false;\n                        }\n                        return el.is(self.opts.acceptWidgets === true ? '.grid-stack-item' : self.opts.acceptWidgets);\n                    }\n                })\n                .on(self.container, 'dropover', function(event, ui) {\n                    var offset = self.container.offset();\n                    var el = $(ui.draggable);\n                    var cellWidth = self.cellWidth();\n                    var cellHeight = self.cellHeight();\n                    var origNode = el.data('_gridstack_node');\n\n                    var width = origNode ? origNode.width : (Math.ceil(el.outerWidth() / cellWidth));\n                    var height = origNode ? origNode.height : (Math.ceil(el.outerHeight() / cellHeight));\n\n                    draggingElement = el;\n\n                    var node = self.grid._prepareNode({width: width, height: height, _added: false, _temporary: true});\n                    el.data('_gridstack_node', node);\n                    el.data('_gridstack_node_orig', origNode);\n\n                    el.on('drag', onDrag);\n                })\n                .on(self.container, 'dropout', function(event, ui) {\n                    var el = $(ui.draggable);\n                    el.unbind('drag', onDrag);\n                    var node = el.data('_gridstack_node');\n                    node.el = null;\n                    self.grid.removeNode(node);\n                    self.placeholder.detach();\n                    self._updateContainerHeight();\n                    el.data('_gridstack_node', el.data('_gridstack_node_orig'));\n                })\n                .on(self.container, 'drop', function(event, ui) {\n                    self.placeholder.detach();\n\n                    var node = $(ui.draggable).data('_gridstack_node');\n                    node._grid = self;\n                    var el = $(ui.draggable).clone(false);\n                    el.data('_gridstack_node', node);\n                    var originalNode = $(ui.draggable).data('_gridstack_node_orig');\n                    if (typeof originalNode !== 'undefined') {\n                        originalNode._grid._triggerRemoveEvent();\n                    }\n                    $(ui.draggable).remove();\n                    node.el = el;\n                    self.placeholder.hide();\n                    el\n                        .attr('data-gs-x', node.x)\n                        .attr('data-gs-y', node.y)\n                        .attr('data-gs-width', node.width)\n                        .attr('data-gs-height', node.height)\n                        .addClass(self.opts.itemClass)\n                        .removeAttr('style')\n                        .enableSelection()\n                        .removeData('draggable')\n                        .removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled')\n                        .unbind('drag', onDrag);\n                    self.container.append(el);\n                    self._prepareElementsByNode(el, node);\n                    self._updateContainerHeight();\n                    self.grid._addedNodes.push(node);\n                    self._triggerAddEvent();\n                    self._triggerChangeEvent();\n\n                    self.grid.endUpdate();\n                });\n        }\n    };\n\n    GridStack.prototype._triggerChangeEvent = function(forceTrigger) {\n        var elements = this.grid.getDirtyNodes();\n        var hasChanges = false;\n\n        var eventParams = [];\n        if (elements && elements.length) {\n            eventParams.push(elements);\n            hasChanges = true;\n        }\n\n        if (hasChanges || forceTrigger === true) {\n            this.container.trigger('change', eventParams);\n        }\n    };\n\n    GridStack.prototype._triggerAddEvent = function() {\n        if (this.grid._addedNodes && this.grid._addedNodes.length > 0) {\n            this.container.trigger('added', [_.map(this.grid._addedNodes, _.clone)]);\n            this.grid._addedNodes = [];\n        }\n    };\n\n    GridStack.prototype._triggerRemoveEvent = function() {\n        if (this.grid._removedNodes && this.grid._removedNodes.length > 0) {\n            this.container.trigger('removed', [_.map(this.grid._removedNodes, _.clone)]);\n            this.grid._removedNodes = [];\n        }\n    };\n\n    GridStack.prototype._initStyles = function() {\n        if (this._stylesId) {\n            Utils.removeStylesheet(this._stylesId);\n        }\n        this._stylesId = 'gridstack-style-' + (Math.random() * 100000).toFixed();\n        this._styles = Utils.createStylesheet(this._stylesId);\n        if (this._styles !== null) {\n            this._styles._max = 0;\n        }\n    };\n\n    GridStack.prototype._updateStyles = function(maxHeight) {\n        if (this._styles === null || typeof this._styles === 'undefined') {\n            return;\n        }\n\n        var prefix = '.' + this.opts._class + ' .' + this.opts.itemClass;\n        var self = this;\n        var getHeight;\n\n        if (typeof maxHeight == 'undefined') {\n            maxHeight = this._styles._max;\n        }\n        this._initStyles();\n        this._updateContainerHeight();\n        if (!this.opts.cellHeight) { // The rest will be handled by CSS\n            return ;\n        }\n        if (this._styles._max !== 0 && maxHeight <= this._styles._max) {\n            return ;\n        }\n\n        if (!this.opts.verticalMargin || this.opts.cellHeightUnit === this.opts.verticalMarginUnit) {\n            getHeight = function(nbRows, nbMargins) {\n                return (self.opts.cellHeight * nbRows + self.opts.verticalMargin * nbMargins) +\n                    self.opts.cellHeightUnit;\n            };\n        } else {\n            getHeight = function(nbRows, nbMargins) {\n                if (!nbRows || !nbMargins) {\n                    return (self.opts.cellHeight * nbRows + self.opts.verticalMargin * nbMargins) +\n                        self.opts.cellHeightUnit;\n                }\n                return 'calc(' + ((self.opts.cellHeight * nbRows) + self.opts.cellHeightUnit) + ' + ' +\n                    ((self.opts.verticalMargin * nbMargins) + self.opts.verticalMarginUnit) + ')';\n            };\n        }\n\n        if (this._styles._max === 0) {\n            Utils.insertCSSRule(this._styles, prefix, 'min-height: ' + getHeight(1, 0) + ';', 0);\n        }\n\n        if (maxHeight > this._styles._max) {\n            for (var i = this._styles._max; i < maxHeight; ++i) {\n                Utils.insertCSSRule(this._styles,\n                    prefix + '[data-gs-height=\"' + (i + 1) + '\"]',\n                    'height: ' + getHeight(i + 1, i) + ';',\n                    i\n                );\n                Utils.insertCSSRule(this._styles,\n                    prefix + '[data-gs-min-height=\"' + (i + 1) + '\"]',\n                    'min-height: ' + getHeight(i + 1, i) + ';',\n                    i\n                );\n                Utils.insertCSSRule(this._styles,\n                    prefix + '[data-gs-max-height=\"' + (i + 1) + '\"]',\n                    'max-height: ' + getHeight(i + 1, i) + ';',\n                    i\n                );\n                Utils.insertCSSRule(this._styles,\n                    prefix + '[data-gs-y=\"' + i + '\"]',\n                    'top: ' + getHeight(i, i) + ';',\n                    i\n                );\n            }\n            this._styles._max = maxHeight;\n        }\n    };\n\n    GridStack.prototype._updateContainerHeight = function() {\n        if (this.grid._updateCounter) {\n            return;\n        }\n        var height = this.grid.getGridHeight();\n        this.container.attr('data-gs-current-height', height);\n        if (!this.opts.cellHeight) {\n            return ;\n        }\n        if (!this.opts.verticalMargin) {\n            this.container.css('height', (height * (this.opts.cellHeight)) + this.opts.cellHeightUnit);\n        } else if (this.opts.cellHeightUnit === this.opts.verticalMarginUnit) {\n            this.container.css('height', (height * (this.opts.cellHeight + this.opts.verticalMargin) -\n                this.opts.verticalMargin) + this.opts.cellHeightUnit);\n        } else {\n            this.container.css('height', 'calc(' + ((height * (this.opts.cellHeight)) + this.opts.cellHeightUnit) +\n                ' + ' + ((height * (this.opts.verticalMargin - 1)) + this.opts.verticalMarginUnit) + ')');\n        }\n    };\n\n    GridStack.prototype._isOneColumnMode = function() {\n        return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <=\n            this.opts.minWidth;\n    };\n\n    GridStack.prototype._setupRemovingTimeout = function(el) {\n        var self = this;\n        var node = $(el).data('_gridstack_node');\n\n        if (node._removeTimeout || !self.opts.removable) {\n            return;\n        }\n        node._removeTimeout = setTimeout(function() {\n            el.addClass('grid-stack-item-removing');\n            node._isAboutToRemove = true;\n        }, self.opts.removeTimeout);\n    };\n\n    GridStack.prototype._clearRemovingTimeout = function(el) {\n        var node = $(el).data('_gridstack_node');\n\n        if (!node._removeTimeout) {\n            return;\n        }\n        clearTimeout(node._removeTimeout);\n        node._removeTimeout = null;\n        el.removeClass('grid-stack-item-removing');\n        node._isAboutToRemove = false;\n    };\n\n    GridStack.prototype._prepareElementsByNode = function(el, node) {\n        var self = this;\n\n        var cellWidth;\n        var cellHeight;\n\n        var dragOrResize = function(event, ui) {\n            var x = Math.round(ui.position.left / cellWidth);\n            var y = Math.floor((ui.position.top + cellHeight / 2) / cellHeight);\n            var width;\n            var height;\n\n            if (event.type != 'drag') {\n                width = Math.round(ui.size.width / cellWidth);\n                height = Math.round(ui.size.height / cellHeight);\n            }\n\n            if (event.type == 'drag') {\n                if (x < 0 || x >= self.grid.width || y < 0 || (!self.grid.float && y > self.grid.getGridHeight())) {\n                    if (!node._temporaryRemoved) {\n                        if (self.opts.removable === true) {\n                            self._setupRemovingTimeout(el);\n                        }\n\n                        x = node._beforeDragX;\n                        y = node._beforeDragY;\n\n                        self.placeholder.detach();\n                        self.placeholder.hide();\n                        self.grid.removeNode(node);\n                        self._updateContainerHeight();\n\n                        node._temporaryRemoved = true;\n                    }\n                } else {\n                    self._clearRemovingTimeout(el);\n\n                    if (node._temporaryRemoved) {\n                        self.grid.addNode(node);\n                        self.placeholder\n                            .attr('data-gs-x', x)\n                            .attr('data-gs-y', y)\n                            .attr('data-gs-width', width)\n                            .attr('data-gs-height', height)\n                            .show();\n                        self.container.append(self.placeholder);\n                        node.el = self.placeholder;\n                        node._temporaryRemoved = false;\n                    }\n                }\n            } else if (event.type == 'resize')  {\n                if (x < 0) {\n                    return;\n                }\n            }\n            // width and height are undefined if not resizing\n            var lastTriedWidth = typeof width !== 'undefined' ? width : node.lastTriedWidth;\n            var lastTriedHeight = typeof height !== 'undefined' ? height : node.lastTriedHeight;\n            if (!self.grid.canMoveNode(node, x, y, width, height) ||\n                (node.lastTriedX === x && node.lastTriedY === y &&\n                node.lastTriedWidth === lastTriedWidth && node.lastTriedHeight === lastTriedHeight)) {\n                return;\n            }\n            node.lastTriedX = x;\n            node.lastTriedY = y;\n            node.lastTriedWidth = width;\n            node.lastTriedHeight = height;\n            self.grid.moveNode(node, x, y, width, height);\n            self._updateContainerHeight();\n        };\n\n        var onStartMoving = function(event, ui) {\n            self.container.append(self.placeholder);\n            var o = $(this);\n            self.grid.cleanNodes();\n            self.grid.beginUpdate(node);\n            cellWidth = self.cellWidth();\n            var strictCellHeight = Math.ceil(o.outerHeight() / o.attr('data-gs-height'));\n            cellHeight = self.container.height() / parseInt(self.container.attr('data-gs-current-height'));\n            self.placeholder\n                .attr('data-gs-x', o.attr('data-gs-x'))\n                .attr('data-gs-y', o.attr('data-gs-y'))\n                .attr('data-gs-width', o.attr('data-gs-width'))\n                .attr('data-gs-height', o.attr('data-gs-height'))\n                .show();\n            node.el = self.placeholder;\n            node._beforeDragX = node.x;\n            node._beforeDragY = node.y;\n\n            self.dd.resizable(el, 'option', 'minWidth', cellWidth * (node.minWidth || 1));\n            self.dd.resizable(el, 'option', 'minHeight', strictCellHeight * (node.minHeight || 1));\n\n            if (event.type == 'resizestart') {\n                o.find('.grid-stack-item').trigger('resizestart');\n            }\n        };\n\n        var onEndMoving = function(event, ui) {\n            var o = $(this);\n            if (!o.data('_gridstack_node')) {\n                return;\n            }\n\n            var forceNotify = false;\n            self.placeholder.detach();\n            node.el = o;\n            self.placeholder.hide();\n\n            if (node._isAboutToRemove) {\n                forceNotify = true;\n                var gridToNotify = el.data('_gridstack_node')._grid;\n                gridToNotify._triggerRemoveEvent();\n                el.removeData('_gridstack_node');\n                el.remove();\n            } else {\n                self._clearRemovingTimeout(el);\n                if (!node._temporaryRemoved) {\n                    o\n                        .attr('data-gs-x', node.x)\n                        .attr('data-gs-y', node.y)\n                        .attr('data-gs-width', node.width)\n                        .attr('data-gs-height', node.height)\n                        .removeAttr('style');\n                } else {\n                    o\n                        .attr('data-gs-x', node._beforeDragX)\n                        .attr('data-gs-y', node._beforeDragY)\n                        .attr('data-gs-width', node.width)\n                        .attr('data-gs-height', node.height)\n                        .removeAttr('style');\n                    node.x = node._beforeDragX;\n                    node.y = node._beforeDragY;\n                    self.grid.addNode(node);\n                }\n            }\n            self._updateContainerHeight();\n            self._triggerChangeEvent(forceNotify);\n\n            self.grid.endUpdate();\n\n            var nestedGrids = o.find('.grid-stack');\n            if (nestedGrids.length && event.type == 'resizestop') {\n                nestedGrids.each(function(index, el) {\n                    $(el).data('gridstack').onResizeHandler();\n                });\n                o.find('.grid-stack-item').trigger('resizestop');\n                o.find('.grid-stack-item').trigger('gsresizestop');\n            }\n            if (event.type == 'resizestop') {\n                self.container.trigger('gsresizestop', o);\n            }\n        };\n\n        this.dd\n            .draggable(el, {\n                start: onStartMoving,\n                stop: onEndMoving,\n                drag: dragOrResize\n            })\n            .resizable(el, {\n                start: onStartMoving,\n                stop: onEndMoving,\n                resize: dragOrResize\n            });\n\n        if (node.noMove || (this._isOneColumnMode() && !self.opts.disableOneColumnMode) || this.opts.disableDrag) {\n            this.dd.draggable(el, 'disable');\n        }\n\n        if (node.noResize || (this._isOneColumnMode() && !self.opts.disableOneColumnMode) || this.opts.disableResize) {\n            this.dd.resizable(el, 'disable');\n        }\n\n        el.attr('data-gs-locked', node.locked ? 'yes' : null);\n    };\n\n    GridStack.prototype._prepareElement = function(el, triggerAddEvent) {\n        triggerAddEvent = typeof triggerAddEvent != 'undefined' ? triggerAddEvent : false;\n        var self = this;\n        el = $(el);\n\n        el.addClass(this.opts.itemClass);\n        var node = self.grid.addNode({\n            x: el.attr('data-gs-x'),\n            y: el.attr('data-gs-y'),\n            width: el.attr('data-gs-width'),\n            height: el.attr('data-gs-height'),\n            maxWidth: el.attr('data-gs-max-width'),\n            minWidth: el.attr('data-gs-min-width'),\n            maxHeight: el.attr('data-gs-max-height'),\n            minHeight: el.attr('data-gs-min-height'),\n            autoPosition: Utils.toBool(el.attr('data-gs-auto-position')),\n            noResize: Utils.toBool(el.attr('data-gs-no-resize')),\n            noMove: Utils.toBool(el.attr('data-gs-no-move')),\n            locked: Utils.toBool(el.attr('data-gs-locked')),\n            el: el,\n            id: el.attr('data-gs-id'),\n            _grid: self\n        }, triggerAddEvent);\n        el.data('_gridstack_node', node);\n\n        this._prepareElementsByNode(el, node);\n    };\n\n    GridStack.prototype.setAnimation = function(enable) {\n        if (enable) {\n            this.container.addClass('grid-stack-animate');\n        } else {\n            this.container.removeClass('grid-stack-animate');\n        }\n    };\n\n    GridStack.prototype.addWidget = function(el, x, y, width, height, autoPosition, minWidth, maxWidth,\n        minHeight, maxHeight, id) {\n        el = $(el);\n        if (typeof x != 'undefined') { el.attr('data-gs-x', x); }\n        if (typeof y != 'undefined') { el.attr('data-gs-y', y); }\n        if (typeof width != 'undefined') { el.attr('data-gs-width', width); }\n        if (typeof height != 'undefined') { el.attr('data-gs-height', height); }\n        if (typeof autoPosition != 'undefined') { el.attr('data-gs-auto-position', autoPosition ? 'yes' : null); }\n        if (typeof minWidth != 'undefined') { el.attr('data-gs-min-width', minWidth); }\n        if (typeof maxWidth != 'undefined') { el.attr('data-gs-max-width', maxWidth); }\n        if (typeof minHeight != 'undefined') { el.attr('data-gs-min-height', minHeight); }\n        if (typeof maxHeight != 'undefined') { el.attr('data-gs-max-height', maxHeight); }\n        if (typeof id != 'undefined') { el.attr('data-gs-id', id); }\n        this.container.append(el);\n        this._prepareElement(el, true);\n        this._triggerAddEvent();\n        this._updateContainerHeight();\n        this._triggerChangeEvent(true);\n\n        return el;\n    };\n\n    GridStack.prototype.makeWidget = function(el) {\n        el = $(el);\n        this._prepareElement(el, true);\n        this._triggerAddEvent();\n        this._updateContainerHeight();\n        this._triggerChangeEvent(true);\n\n        return el;\n    };\n\n    GridStack.prototype.willItFit = function(x, y, width, height, autoPosition) {\n        var node = {x: x, y: y, width: width, height: height, autoPosition: autoPosition};\n        return this.grid.canBePlacedWithRespectToHeight(node);\n    };\n\n    GridStack.prototype.removeWidget = function(el, detachNode) {\n        detachNode = typeof detachNode === 'undefined' ? true : detachNode;\n        el = $(el);\n        var node = el.data('_gridstack_node');\n\n        // For Meteor support: https://github.com/troolee/gridstack.js/pull/272\n        if (!node) {\n            node = this.grid.getNodeDataByDOMEl(el);\n        }\n\n        this.grid.removeNode(node, detachNode);\n        el.removeData('_gridstack_node');\n        this._updateContainerHeight();\n        if (detachNode) {\n            el.remove();\n        }\n        this._triggerChangeEvent(true);\n        this._triggerRemoveEvent();\n    };\n\n    GridStack.prototype.removeAll = function(detachNode) {\n        _.each(this.grid.nodes, _.bind(function(node) {\n            this.removeWidget(node.el, detachNode);\n        }, this));\n        this.grid.nodes = [];\n        this._updateContainerHeight();\n    };\n\n    GridStack.prototype.destroy = function(detachGrid) {\n        $(window).off('resize', this.onResizeHandler);\n        this.disable();\n        if (typeof detachGrid != 'undefined' && !detachGrid) {\n            this.removeAll(false);\n            this.container.removeData('gridstack');\n        } else {\n            this.container.remove();\n        }\n        Utils.removeStylesheet(this._stylesId);\n        if (this.grid) {\n            this.grid = null;\n        }\n    };\n\n    GridStack.prototype.resizable = function(el, val) {\n        var self = this;\n        el = $(el);\n        el.each(function(index, el) {\n            el = $(el);\n            var node = el.data('_gridstack_node');\n            if (typeof node == 'undefined' || node === null) {\n                return;\n            }\n\n            node.noResize = !(val || false);\n            if (node.noResize || (self._isOneColumnMode() && !self.opts.disableOneColumnMode)) {\n                self.dd.resizable(el, 'disable');\n            } else {\n                self.dd.resizable(el, 'enable');\n            }\n        });\n        return this;\n    };\n\n    GridStack.prototype.movable = function(el, val) {\n        var self = this;\n        el = $(el);\n        el.each(function(index, el) {\n            el = $(el);\n            var node = el.data('_gridstack_node');\n            if (typeof node == 'undefined' || node === null) {\n                return;\n            }\n\n            node.noMove = !(val || false);\n            if (node.noMove || (self._isOneColumnMode() && !self.opts.disableOneColumnMode)) {\n                self.dd.draggable(el, 'disable');\n                el.removeClass('ui-draggable-handle');\n            } else {\n                self.dd.draggable(el, 'enable');\n                el.addClass('ui-draggable-handle');\n            }\n        });\n        return this;\n    };\n\n    GridStack.prototype.enableMove = function(doEnable, includeNewWidgets) {\n        this.movable(this.container.children('.' + this.opts.itemClass), doEnable);\n        if (includeNewWidgets) {\n            this.opts.disableDrag = !doEnable;\n        }\n    };\n\n    GridStack.prototype.enableResize = function(doEnable, includeNewWidgets) {\n        this.resizable(this.container.children('.' + this.opts.itemClass), doEnable);\n        if (includeNewWidgets) {\n            this.opts.disableResize = !doEnable;\n        }\n    };\n\n    GridStack.prototype.disable = function() {\n        this.movable(this.container.children('.' + this.opts.itemClass), false);\n        this.resizable(this.container.children('.' + this.opts.itemClass), false);\n        this.container.trigger('disable');\n    };\n\n    GridStack.prototype.enable = function() {\n        this.movable(this.container.children('.' + this.opts.itemClass), true);\n        this.resizable(this.container.children('.' + this.opts.itemClass), true);\n        this.container.trigger('enable');\n    };\n\n    GridStack.prototype.locked = function(el, val) {\n        el = $(el);\n        el.each(function(index, el) {\n            el = $(el);\n            var node = el.data('_gridstack_node');\n            if (typeof node == 'undefined' || node === null) {\n                return;\n            }\n\n            node.locked = (val || false);\n            el.attr('data-gs-locked', node.locked ? 'yes' : null);\n        });\n        return this;\n    };\n\n    GridStack.prototype.maxHeight = function(el, val) {\n        el = $(el);\n        el.each(function(index, el) {\n            el = $(el);\n            var node = el.data('_gridstack_node');\n            if (typeof node === 'undefined' || node === null) {\n                return;\n            }\n\n            if (!isNaN(val)) {\n                node.maxHeight = (val || false);\n                el.attr('data-gs-max-height', val);\n            }\n        });\n        return this;\n    };\n\n    GridStack.prototype.minHeight = function(el, val) {\n        el = $(el);\n        el.each(function(index, el) {\n            el = $(el);\n            var node = el.data('_gridstack_node');\n            if (typeof node === 'undefined' || node === null) {\n                return;\n            }\n\n            if (!isNaN(val)) {\n                node.minHeight = (val || false);\n                el.attr('data-gs-min-height', val);\n            }\n        });\n        return this;\n    };\n\n    GridStack.prototype.maxWidth = function(el, val) {\n        el = $(el);\n        el.each(function(index, el) {\n            el = $(el);\n            var node = el.data('_gridstack_node');\n            if (typeof node === 'undefined' || node === null) {\n                return;\n            }\n\n            if (!isNaN(val)) {\n                node.maxWidth = (val || false);\n                el.attr('data-gs-max-width', val);\n            }\n        });\n        return this;\n    };\n\n    GridStack.prototype.minWidth = function(el, val) {\n        el = $(el);\n        el.each(function(index, el) {\n            el = $(el);\n            var node = el.data('_gridstack_node');\n            if (typeof node === 'undefined' || node === null) {\n                return;\n            }\n\n            if (!isNaN(val)) {\n                node.minWidth = (val || false);\n                el.attr('data-gs-min-width', val);\n            }\n        });\n        return this;\n    };\n\n    GridStack.prototype._updateElement = function(el, callback) {\n        el = $(el).first();\n        var node = el.data('_gridstack_node');\n        if (typeof node == 'undefined' || node === null) {\n            return;\n        }\n\n        var self = this;\n\n        self.grid.cleanNodes();\n        self.grid.beginUpdate(node);\n\n        callback.call(this, el, node);\n\n        self._updateContainerHeight();\n        self._triggerChangeEvent();\n\n        self.grid.endUpdate();\n    };\n\n    GridStack.prototype.resize = function(el, width, height) {\n        this._updateElement(el, function(el, node) {\n            width = (width !== null && typeof width != 'undefined') ? width : node.width;\n            height = (height !== null && typeof height != 'undefined') ? height : node.height;\n\n            this.grid.moveNode(node, node.x, node.y, width, height);\n        });\n    };\n\n    GridStack.prototype.move = function(el, x, y) {\n        this._updateElement(el, function(el, node) {\n            x = (x !== null && typeof x != 'undefined') ? x : node.x;\n            y = (y !== null && typeof y != 'undefined') ? y : node.y;\n\n            this.grid.moveNode(node, x, y, node.width, node.height);\n        });\n    };\n\n    GridStack.prototype.update = function(el, x, y, width, height) {\n        this._updateElement(el, function(el, node) {\n            x = (x !== null && typeof x != 'undefined') ? x : node.x;\n            y = (y !== null && typeof y != 'undefined') ? y : node.y;\n            width = (width !== null && typeof width != 'undefined') ? width : node.width;\n            height = (height !== null && typeof height != 'undefined') ? height : node.height;\n\n            this.grid.moveNode(node, x, y, width, height);\n        });\n    };\n\n    GridStack.prototype.verticalMargin = function(val, noUpdate) {\n        if (typeof val == 'undefined') {\n            return this.opts.verticalMargin;\n        }\n\n        var heightData = Utils.parseHeight(val);\n\n        if (this.opts.verticalMarginUnit === heightData.unit && this.opts.height === heightData.height) {\n            return ;\n        }\n        this.opts.verticalMarginUnit = heightData.unit;\n        this.opts.verticalMargin = heightData.height;\n\n        if (!noUpdate) {\n            this._updateStyles();\n        }\n    };\n\n    GridStack.prototype.cellHeight = function(val, noUpdate) {\n        if (typeof val == 'undefined') {\n            if (this.opts.cellHeight) {\n                return this.opts.cellHeight;\n            }\n            var o = this.container.children('.' + this.opts.itemClass).first();\n            return Math.ceil(o.outerHeight() / o.attr('data-gs-height'));\n        }\n        var heightData = Utils.parseHeight(val);\n\n        if (this.opts.cellHeightUnit === heightData.heightUnit && this.opts.height === heightData.height) {\n            return ;\n        }\n        this.opts.cellHeightUnit = heightData.unit;\n        this.opts.cellHeight = heightData.height;\n\n        if (!noUpdate) {\n            this._updateStyles();\n        }\n\n    };\n\n    GridStack.prototype.cellWidth = function() {\n        return Math.round(this.container.outerWidth() / this.opts.width);\n    };\n\n    GridStack.prototype.getCellFromPixel = function(position, useOffset) {\n        var containerPos = (typeof useOffset != 'undefined' && useOffset) ?\n            this.container.offset() : this.container.position();\n        var relativeLeft = position.left - containerPos.left;\n        var relativeTop = position.top - containerPos.top;\n\n        var columnWidth = Math.floor(this.container.width() / this.opts.width);\n        var rowHeight = Math.floor(this.container.height() / parseInt(this.container.attr('data-gs-current-height')));\n\n        return {x: Math.floor(relativeLeft / columnWidth), y: Math.floor(relativeTop / rowHeight)};\n    };\n\n    GridStack.prototype.batchUpdate = function() {\n        this.grid.batchUpdate();\n    };\n\n    GridStack.prototype.commit = function() {\n        this.grid.commit();\n        this._updateContainerHeight();\n    };\n\n    GridStack.prototype.isAreaEmpty = function(x, y, width, height) {\n        return this.grid.isAreaEmpty(x, y, width, height);\n    };\n\n    GridStack.prototype.setStatic = function(staticValue) {\n        this.opts.staticGrid = (staticValue === true);\n        this.enableMove(!staticValue);\n        this.enableResize(!staticValue);\n        this._setStaticClass();\n    };\n\n    GridStack.prototype._setStaticClass = function() {\n        var staticClassName = 'grid-stack-static';\n\n        if (this.opts.staticGrid === true) {\n            this.container.addClass(staticClassName);\n        } else {\n            this.container.removeClass(staticClassName);\n        }\n    };\n\n    GridStack.prototype._updateNodeWidths = function(oldWidth, newWidth) {\n        this.grid._sortNodes();\n        this.grid.batchUpdate();\n        var node = {};\n        for (var i = 0; i < this.grid.nodes.length; i++) {\n            node = this.grid.nodes[i];\n            this.update(node.el, Math.round(node.x * newWidth / oldWidth), undefined,\n                Math.round(node.width * newWidth / oldWidth), undefined);\n        }\n        this.grid.commit();\n    };\n\n    GridStack.prototype.setGridWidth = function(gridWidth,doNotPropagate) {\n        this.container.removeClass('grid-stack-' + this.opts.width);\n        if (doNotPropagate !== true) {\n            this._updateNodeWidths(this.opts.width, gridWidth);\n        }\n        this.opts.width = gridWidth;\n        this.grid.width = gridWidth;\n        this.container.addClass('grid-stack-' + gridWidth);\n    };\n\n    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers\n    GridStackEngine.prototype.batch_update = obsolete(GridStackEngine.prototype.batchUpdate);\n    GridStackEngine.prototype._fix_collisions = obsolete(GridStackEngine.prototype._fixCollisions,\n        '_fix_collisions', '_fixCollisions');\n    GridStackEngine.prototype.is_area_empty = obsolete(GridStackEngine.prototype.isAreaEmpty,\n        'is_area_empty', 'isAreaEmpty');\n    GridStackEngine.prototype._sort_nodes = obsolete(GridStackEngine.prototype._sortNodes,\n        '_sort_nodes', '_sortNodes');\n    GridStackEngine.prototype._pack_nodes = obsolete(GridStackEngine.prototype._packNodes,\n        '_pack_nodes', '_packNodes');\n    GridStackEngine.prototype._prepare_node = obsolete(GridStackEngine.prototype._prepareNode,\n        '_prepare_node', '_prepareNode');\n    GridStackEngine.prototype.clean_nodes = obsolete(GridStackEngine.prototype.cleanNodes,\n        'clean_nodes', 'cleanNodes');\n    GridStackEngine.prototype.get_dirty_nodes = obsolete(GridStackEngine.prototype.getDirtyNodes,\n        'get_dirty_nodes', 'getDirtyNodes');\n    GridStackEngine.prototype.add_node = obsolete(GridStackEngine.prototype.addNode,\n        'add_node', 'addNode, ');\n    GridStackEngine.prototype.remove_node = obsolete(GridStackEngine.prototype.removeNode,\n        'remove_node', 'removeNode');\n    GridStackEngine.prototype.can_move_node = obsolete(GridStackEngine.prototype.canMoveNode,\n        'can_move_node', 'canMoveNode');\n    GridStackEngine.prototype.move_node = obsolete(GridStackEngine.prototype.moveNode,\n        'move_node', 'moveNode');\n    GridStackEngine.prototype.get_grid_height = obsolete(GridStackEngine.prototype.getGridHeight,\n        'get_grid_height', 'getGridHeight');\n    GridStackEngine.prototype.begin_update = obsolete(GridStackEngine.prototype.beginUpdate,\n        'begin_update', 'beginUpdate');\n    GridStackEngine.prototype.end_update = obsolete(GridStackEngine.prototype.endUpdate,\n        'end_update', 'endUpdate');\n    GridStackEngine.prototype.can_be_placed_with_respect_to_height =\n        obsolete(GridStackEngine.prototype.canBePlacedWithRespectToHeight,\n        'can_be_placed_with_respect_to_height', 'canBePlacedWithRespectToHeight');\n    GridStack.prototype._trigger_change_event = obsolete(GridStack.prototype._triggerChangeEvent,\n        '_trigger_change_event', '_triggerChangeEvent');\n    GridStack.prototype._init_styles = obsolete(GridStack.prototype._initStyles,\n        '_init_styles', '_initStyles');\n    GridStack.prototype._update_styles = obsolete(GridStack.prototype._updateStyles,\n        '_update_styles', '_updateStyles');\n    GridStack.prototype._update_container_height = obsolete(GridStack.prototype._updateContainerHeight,\n        '_update_container_height', '_updateContainerHeight');\n    GridStack.prototype._is_one_column_mode = obsolete(GridStack.prototype._isOneColumnMode,\n        '_is_one_column_mode','_isOneColumnMode');\n    GridStack.prototype._prepare_element = obsolete(GridStack.prototype._prepareElement,\n        '_prepare_element', '_prepareElement');\n    GridStack.prototype.set_animation = obsolete(GridStack.prototype.setAnimation,\n        'set_animation', 'setAnimation');\n    GridStack.prototype.add_widget = obsolete(GridStack.prototype.addWidget,\n        'add_widget', 'addWidget');\n    GridStack.prototype.make_widget = obsolete(GridStack.prototype.makeWidget,\n        'make_widget', 'makeWidget');\n    GridStack.prototype.will_it_fit = obsolete(GridStack.prototype.willItFit,\n        'will_it_fit', 'willItFit');\n    GridStack.prototype.remove_widget = obsolete(GridStack.prototype.removeWidget,\n        'remove_widget', 'removeWidget');\n    GridStack.prototype.remove_all = obsolete(GridStack.prototype.removeAll,\n        'remove_all', 'removeAll');\n    GridStack.prototype.min_height = obsolete(GridStack.prototype.minHeight,\n        'min_height', 'minHeight');\n    GridStack.prototype.min_width = obsolete(GridStack.prototype.minWidth,\n        'min_width', 'minWidth');\n    GridStack.prototype._update_element = obsolete(GridStack.prototype._updateElement,\n        '_update_element', '_updateElement');\n    GridStack.prototype.cell_height = obsolete(GridStack.prototype.cellHeight,\n        'cell_height', 'cellHeight');\n    GridStack.prototype.cell_width = obsolete(GridStack.prototype.cellWidth,\n        'cell_width', 'cellWidth');\n    GridStack.prototype.get_cell_from_pixel = obsolete(GridStack.prototype.getCellFromPixel,\n        'get_cell_from_pixel', 'getCellFromPixel');\n    GridStack.prototype.batch_update = obsolete(GridStack.prototype.batchUpdate,\n        'batch_update', 'batchUpdate');\n    GridStack.prototype.is_area_empty = obsolete(GridStack.prototype.isAreaEmpty,\n        'is_area_empty', 'isAreaEmpty');\n    GridStack.prototype.set_static = obsolete(GridStack.prototype.setStatic,\n        'set_static', 'setStatic');\n    GridStack.prototype._set_static_class = obsolete(GridStack.prototype._setStaticClass,\n        '_set_static_class', '_setStaticClass');\n    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers\n\n    scope.GridStackUI = GridStack;\n\n    scope.GridStackUI.Utils = Utils;\n    scope.GridStackUI.Engine = GridStackEngine;\n    scope.GridStackUI.GridStackDragDropPlugin = GridStackDragDropPlugin;\n\n    $.fn.gridstack = function(opts) {\n        return this.each(function() {\n            var o = $(this);\n            if (!o.data('gridstack')) {\n                o\n                    .data('gridstack', new GridStack(this, opts));\n            }\n        });\n    };\n\n    return scope.GridStackUI;\n});\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(649))

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet;
var alphabetIndexMap;
var alphabetIndexMapLength = 0;

function isNumberCode(code) {
  return code >= 48 && code <= 57;
}

function naturalCompare(a, b) {
  var lengthA = (a += '').length;
  var lengthB = (b += '').length;
  var aIndex = 0;
  var bIndex = 0;

  while (aIndex < lengthA && bIndex < lengthB) {
    var charCodeA = a.charCodeAt(aIndex);
    var charCodeB = b.charCodeAt(bIndex);

    if (isNumberCode(charCodeA)) {
      if (!isNumberCode(charCodeB)) {
        return charCodeA - charCodeB;
      }

      var numStartA = aIndex;
      var numStartB = bIndex;

      while (charCodeA === 48 && ++numStartA < lengthA) {
        charCodeA = a.charCodeAt(numStartA);
      }
      while (charCodeB === 48 && ++numStartB < lengthB) {
        charCodeB = b.charCodeAt(numStartB);
      }

      var numEndA = numStartA;
      var numEndB = numStartB;

      while (numEndA < lengthA && isNumberCode(a.charCodeAt(numEndA))) {
        ++numEndA;
      }
      while (numEndB < lengthB && isNumberCode(b.charCodeAt(numEndB))) {
        ++numEndB;
      }

      var difference = numEndA - numStartA - numEndB + numStartB; // numA length - numB length
      if (difference) {
        return difference;
      }

      while (numStartA < numEndA) {
        difference = a.charCodeAt(numStartA++) - b.charCodeAt(numStartB++);
        if (difference) {
          return difference;
        }
      }

      aIndex = numEndA;
      bIndex = numEndB;
      continue;
    }

    if (charCodeA !== charCodeB) {
      if (
        charCodeA < alphabetIndexMapLength &&
        charCodeB < alphabetIndexMapLength &&
        alphabetIndexMap[charCodeA] !== -1 &&
        alphabetIndexMap[charCodeB] !== -1
      ) {
        return alphabetIndexMap[charCodeA] - alphabetIndexMap[charCodeB];
      }

      return charCodeA - charCodeB;
    }

    ++aIndex;
    ++bIndex;
  }

  return lengthA - lengthB;
}

naturalCompare.caseInsensitive = naturalCompare.i = function(a, b) {
  return naturalCompare(('' + a).toLowerCase(), ('' + b).toLowerCase());
};

Object.defineProperties(naturalCompare, {
  alphabet: {
    get: function() {
      return alphabet;
    },
    set: function(value) {
      alphabet = value;
      alphabetIndexMap = [];
      var i = 0;
      if (alphabet) {
        for (; i < alphabet.length; i++) {
          alphabetIndexMap[alphabet.charCodeAt(i)] = i;
        }
      }
      alphabetIndexMapLength = alphabetIndexMap.length;
      for (i = 0; i < alphabetIndexMapLength; i++) {
        if (alphabetIndexMap[i] === undefined) {
          alphabetIndexMap[i] = -1;
        }
      }
    },
  },
});

module.exports = naturalCompare;


/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);


/***/ })

/******/ });