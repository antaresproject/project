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
/******/ 	return __webpack_require__(__webpack_require__.s = 679);
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

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
 * @version    0.9.2
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 * 

*/

/* global enquire antaresEvents */

// Edge Helpers

exports.default = {
  // methods

  gridstack: function gridstack() {
    antaresEvents.on('is-edge', function () {
      setTimeout(function () {
        $('.card--logs .pagination-list ul li').eq(0).trigger('click');
      }, 200);
    });
  },
  datatables: function datatables() {
    antaresEvents.on('is-edge', function () {
      setTimeout(function () {
        $('.tbl-c .dt-area-bottom .dataTables_length a').eq(1).trigger('click');
        $('.tbl-c .dt-area-bottom .dataTables_length a').eq(0).trigger('click');
      }, 200);
    });
  }
};

/***/ }),

/***/ 138:
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
        var stringsBase = {
            xs: 'zd--xs',
            xsTxt: 'Extra Small',
            sm: 'zd--sm',
            smTxt: 'Small',
            default: 'zd--default',
            defaultTxt: 'Default',
            lg: 'zd--lg',
            lgTxt: 'Large'
        };
        var adjustZeroDataSize = function adjustZeroDataSize(gsi, $zdElement) {
            var pathToTitle = $zdElement.closest('.grid-stack-item-content').find('.card__header--left span');

            if (gsi.width < 5) {
                $zdElement.attr('class', 'zd ' + stringsBase.xs);
                pathToTitle.length ? pathToTitle.text(stringsBase.xsTxt) : false;
            } else if (gsi.width < 8) {
                $zdElement.attr('class', 'zd ' + stringsBase.sm);
                pathToTitle.length ? pathToTitle.text(stringsBase.smTxt) : false;
            } else if (gsi.width < 12) {
                $zdElement.attr('class', 'zd ' + stringsBase.default);
                pathToTitle.length ? pathToTitle.text(stringsBase.defaultTxt) : false;
            } else {
                $zdElement.attr('class', 'zd ' + stringsBase.lg);
                pathToTitle.length ? pathToTitle.text(stringsBase.lgTxt) : false;
            }
        };

        $(function () {
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

/***/ 139:
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

/***/ 140:
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

/***/ 141:
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

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var classes = __webpack_require__(60),
  events = __webpack_require__(59),
  List = __webpack_require__(66);

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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(list) {

  var Item = __webpack_require__(77)(list);

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

/***/ 144:
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

/***/ 145:
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

/***/ 146:
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

/***/ 147:
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

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {


var classes = __webpack_require__(60),
  events = __webpack_require__(59),
  extend = __webpack_require__(73),
  toString = __webpack_require__(76),
  getByClass = __webpack_require__(72),
  fuzzy = __webpack_require__(149);

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

/***/ 149:
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

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(151))

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "/**\n * gridstack.js 0.2.6\n * http://troolee.github.io/gridstack.js/\n * (c) 2014-2016 Pavel Reznikov\n * gridstack.js may be freely distributed under the MIT license.\n * @preserve\n*/\n!function(a){if(\"function\"==typeof define&&define.amd)define([\"jquery\",\"lodash\",\"jquery-ui/data\",\"jquery-ui/disable-selection\",\"jquery-ui/focusable\",\"jquery-ui/form\",\"jquery-ui/ie\",\"jquery-ui/keycode\",\"jquery-ui/labels\",\"jquery-ui/jquery-1-7\",\"jquery-ui/plugin\",\"jquery-ui/safe-active-element\",\"jquery-ui/safe-blur\",\"jquery-ui/scroll-parent\",\"jquery-ui/tabbable\",\"jquery-ui/unique-id\",\"jquery-ui/version\",\"jquery-ui/widget\",\"jquery-ui/widgets/mouse\",\"jquery-ui/widgets/draggable\",\"jquery-ui/widgets/droppable\",\"jquery-ui/widgets/resizable\"],a);else if(\"undefined\"!=typeof exports){try{jQuery=require(\"jquery\")}catch(b){}try{_=require(\"lodash\")}catch(b){}a(jQuery,_)}else a(jQuery,_)}(function(a,b){var c=window,d=function(a,b,c){var d=function(){return console.warn(\"gridstack.js: Function `\"+b+\"` is deprecated as of v0.2.5 and has been replaced with `\"+c+\"`. It will be **completely** removed in v1.0.\"),a.apply(this,arguments)};return d.prototype=a.prototype,d},e=function(a,b){console.warn(\"gridstack.js: Option `\"+a+\"` is deprecated as of v0.2.5 and has been replaced with `\"+b+\"`. It will be **completely** removed in v1.0.\")},f={isIntercepted:function(a,b){return!(a.x+a.width<=b.x||b.x+b.width<=a.x||a.y+a.height<=b.y||b.y+b.height<=a.y)},sort:function(a,c,d){return d=d||b.chain(a).map(function(a){return a.x+a.width}).max().value(),c=c!=-1?1:-1,b.sortBy(a,function(a){return c*(a.x+a.y*d)})},createStylesheet:function(a){var b=document.createElement(\"style\");return b.setAttribute(\"type\",\"text/css\"),b.setAttribute(\"data-gs-style-id\",a),b.styleSheet?b.styleSheet.cssText=\"\":b.appendChild(document.createTextNode(\"\")),document.getElementsByTagName(\"head\")[0].appendChild(b),b.sheet},removeStylesheet:function(b){a(\"STYLE[data-gs-style-id=\"+b+\"]\").remove()},insertCSSRule:function(a,b,c,d){\"function\"==typeof a.insertRule?a.insertRule(b+\"{\"+c+\"}\",d):\"function\"==typeof a.addRule&&a.addRule(b,c,d)},toBool:function(a){return\"boolean\"==typeof a?a:\"string\"==typeof a?(a=a.toLowerCase(),!(\"\"===a||\"no\"==a||\"false\"==a||\"0\"==a)):Boolean(a)},_collisionNodeCheck:function(a){return a!=this.node&&f.isIntercepted(a,this.nn)},_didCollide:function(a){return f.isIntercepted({x:this.n.x,y:this.newY,width:this.n.width,height:this.n.height},a)},_isAddNodeIntercepted:function(a){return f.isIntercepted({x:this.x,y:this.y,width:this.node.width,height:this.node.height},a)},parseHeight:function(a){var c=a,d=\"px\";if(c&&b.isString(c)){var e=c.match(/^(-[0-9]+\\.[0-9]+|[0-9]*\\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw)?$/);if(!e)throw new Error(\"Invalid height\");d=e[2]||\"px\",c=parseFloat(e[1])}return{height:c,unit:d}}};\n// jscs:disable requireCamelCaseOrUpperCaseIdentifiers\nf.is_intercepted=d(f.isIntercepted,\"is_intercepted\",\"isIntercepted\"),f.create_stylesheet=d(f.createStylesheet,\"create_stylesheet\",\"createStylesheet\"),f.remove_stylesheet=d(f.removeStylesheet,\"remove_stylesheet\",\"removeStylesheet\"),f.insert_css_rule=d(f.insertCSSRule,\"insert_css_rule\",\"insertCSSRule\");\n// jscs:enable requireCamelCaseOrUpperCaseIdentifiers\nvar g=0,h=function(a,b,c,d,e){this.width=a,this[\"float\"]=c||!1,this.height=d||0,this.nodes=e||[],this.onchange=b||function(){},this._updateCounter=0,this._float=this[\"float\"],this._addedNodes=[],this._removedNodes=[]};h.prototype.batchUpdate=function(){this._updateCounter=1,this[\"float\"]=!0},h.prototype.commit=function(){0!==this._updateCounter&&(this._updateCounter=0,this[\"float\"]=this._float,this._packNodes(),this._notify())},\n// For Meteor support: https://github.com/troolee/gridstack.js/pull/272\nh.prototype.getNodeDataByDOMEl=function(a){return b.find(this.nodes,function(b){return a.get(0)===b.el.get(0)})},h.prototype._fixCollisions=function(a){this._sortNodes(-1);var c=a,d=Boolean(b.find(this.nodes,function(a){return a.locked}));for(this[\"float\"]||d||(c={x:0,y:a.y,width:this.width,height:a.height});;){var e=b.find(this.nodes,b.bind(f._collisionNodeCheck,{node:a,nn:c}));if(\"undefined\"==typeof e)return;this.moveNode(e,e.x,a.y+a.height,e.width,e.height,!0)}},h.prototype.isAreaEmpty=function(a,c,d,e){var g={x:a||0,y:c||0,width:d||1,height:e||1},h=b.find(this.nodes,b.bind(function(a){return f.isIntercepted(a,g)},this));return null===h||\"undefined\"==typeof h},h.prototype._sortNodes=function(a){this.nodes=f.sort(this.nodes,a,this.width)},h.prototype._packNodes=function(){this._sortNodes(),this[\"float\"]?b.each(this.nodes,b.bind(function(a,c){if(!a._updating&&\"undefined\"!=typeof a._origY&&a.y!=a._origY)for(var d=a.y;d>=a._origY;){var e=b.chain(this.nodes).find(b.bind(f._didCollide,{n:a,newY:d})).value();e||(a._dirty=!0,a.y=d),--d}},this)):b.each(this.nodes,b.bind(function(a,c){if(!a.locked)for(;a.y>0;){var d=a.y-1,e=0===c;if(c>0){var g=b.chain(this.nodes).take(c).find(b.bind(f._didCollide,{n:a,newY:d})).value();e=\"undefined\"==typeof g}if(!e)break;a._dirty=a.y!=d,a.y=d}},this))},h.prototype._prepareNode=function(a,c){return a=b.defaults(a||{},{width:1,height:1,x:0,y:0}),a.x=parseInt(\"\"+a.x),a.y=parseInt(\"\"+a.y),a.width=parseInt(\"\"+a.width),a.height=parseInt(\"\"+a.height),a.autoPosition=a.autoPosition||!1,a.noResize=a.noResize||!1,a.noMove=a.noMove||!1,a.width>this.width?a.width=this.width:a.width<1&&(a.width=1),a.height<1&&(a.height=1),a.x<0&&(a.x=0),a.x+a.width>this.width&&(c?a.width=this.width-a.x:a.x=this.width-a.width),a.y<0&&(a.y=0),a},h.prototype._notify=function(){var a=Array.prototype.slice.call(arguments,0);if(a[0]=\"undefined\"==typeof a[0]?[]:[a[0]],a[1]=\"undefined\"==typeof a[1]||a[1],!this._updateCounter){var b=a[0].concat(this.getDirtyNodes());this.onchange(b,a[1])}},h.prototype.cleanNodes=function(){this._updateCounter||b.each(this.nodes,function(a){a._dirty=!1})},h.prototype.getDirtyNodes=function(){return b.filter(this.nodes,function(a){return a._dirty})},h.prototype.addNode=function(a,c){if(a=this._prepareNode(a),\"undefined\"!=typeof a.maxWidth&&(a.width=Math.min(a.width,a.maxWidth)),\"undefined\"!=typeof a.maxHeight&&(a.height=Math.min(a.height,a.maxHeight)),\"undefined\"!=typeof a.minWidth&&(a.width=Math.max(a.width,a.minWidth)),\"undefined\"!=typeof a.minHeight&&(a.height=Math.max(a.height,a.minHeight)),a._id=++g,a._dirty=!0,a.autoPosition){this._sortNodes();for(var d=0;;++d){var e=d%this.width,h=Math.floor(d/this.width);if(!(e+a.width>this.width||b.find(this.nodes,b.bind(f._isAddNodeIntercepted,{x:e,y:h,node:a})))){a.x=e,a.y=h;break}}}return this.nodes.push(a),\"undefined\"!=typeof c&&c&&this._addedNodes.push(b.clone(a)),this._fixCollisions(a),this._packNodes(),this._notify(),a},h.prototype.removeNode=function(a,c){c=\"undefined\"==typeof c||c,this._removedNodes.push(b.clone(a)),a._id=null,this.nodes=b.without(this.nodes,a),this._packNodes(),this._notify(a,c)},h.prototype.canMoveNode=function(c,d,e,f,g){var i=Boolean(b.find(this.nodes,function(a){return a.locked}));if(!this.height&&!i)return!0;var j,k=new h(this.width,null,this[\"float\"],0,b.map(this.nodes,function(b){return b==c?j=a.extend({},b):a.extend({},b)}));if(\"undefined\"==typeof j)return!0;k.moveNode(j,d,e,f,g);var l=!0;return i&&(l&=!Boolean(b.find(k.nodes,function(a){return a!=j&&Boolean(a.locked)&&Boolean(a._dirty)}))),this.height&&(l&=k.getGridHeight()<=this.height),l},h.prototype.canBePlacedWithRespectToHeight=function(c){if(!this.height)return!0;var d=new h(this.width,null,this[\"float\"],0,b.map(this.nodes,function(b){return a.extend({},b)}));return d.addNode(c),d.getGridHeight()<=this.height},h.prototype.moveNode=function(a,b,c,d,e,f){if(\"number\"!=typeof b&&(b=a.x),\"number\"!=typeof c&&(c=a.y),\"number\"!=typeof d&&(d=a.width),\"number\"!=typeof e&&(e=a.height),\"undefined\"!=typeof a.maxWidth&&(d=Math.min(d,a.maxWidth)),\"undefined\"!=typeof a.maxHeight&&(e=Math.min(e,a.maxHeight)),\"undefined\"!=typeof a.minWidth&&(d=Math.max(d,a.minWidth)),\"undefined\"!=typeof a.minHeight&&(e=Math.max(e,a.minHeight)),a.x==b&&a.y==c&&a.width==d&&a.height==e)return a;var g=a.width!=d;return a._dirty=!0,a.x=b,a.y=c,a.width=d,a.height=e,a=this._prepareNode(a,g),this._fixCollisions(a),f||(this._packNodes(),this._notify()),a},h.prototype.getGridHeight=function(){return b.reduce(this.nodes,function(a,b){return Math.max(a,b.y+b.height)},0)},h.prototype.beginUpdate=function(a){b.each(this.nodes,function(a){a._origY=a.y}),a._updating=!0},h.prototype.endUpdate=function(){b.each(this.nodes,function(a){a._origY=a.y});var a=b.find(this.nodes,function(a){return a._updating});a&&(a._updating=!1)};var i=function(c,d){var f,g,i=this;d=d||{},this.container=a(c),\n// jscs:disable requireCamelCaseOrUpperCaseIdentifiers\n\"undefined\"!=typeof d.handle_class&&(d.handleClass=d.handle_class,e(\"handle_class\",\"handleClass\")),\"undefined\"!=typeof d.item_class&&(d.itemClass=d.item_class,e(\"item_class\",\"itemClass\")),\"undefined\"!=typeof d.placeholder_class&&(d.placeholderClass=d.placeholder_class,e(\"placeholder_class\",\"placeholderClass\")),\"undefined\"!=typeof d.placeholder_text&&(d.placeholderText=d.placeholder_text,e(\"placeholder_text\",\"placeholderText\")),\"undefined\"!=typeof d.cell_height&&(d.cellHeight=d.cell_height,e(\"cell_height\",\"cellHeight\")),\"undefined\"!=typeof d.vertical_margin&&(d.verticalMargin=d.vertical_margin,e(\"vertical_margin\",\"verticalMargin\")),\"undefined\"!=typeof d.min_width&&(d.minWidth=d.min_width,e(\"min_width\",\"minWidth\")),\"undefined\"!=typeof d.static_grid&&(d.staticGrid=d.static_grid,e(\"static_grid\",\"staticGrid\")),\"undefined\"!=typeof d.is_nested&&(d.isNested=d.is_nested,e(\"is_nested\",\"isNested\")),\"undefined\"!=typeof d.always_show_resize_handle&&(d.alwaysShowResizeHandle=d.always_show_resize_handle,e(\"always_show_resize_handle\",\"alwaysShowResizeHandle\")),\n// jscs:enable requireCamelCaseOrUpperCaseIdentifiers\nd.itemClass=d.itemClass||\"grid-stack-item\";var j=this.container.closest(\".\"+d.itemClass).length>0;if(this.opts=b.defaults(d||{},{width:parseInt(this.container.attr(\"data-gs-width\"))||12,height:parseInt(this.container.attr(\"data-gs-height\"))||0,itemClass:\"grid-stack-item\",placeholderClass:\"grid-stack-placeholder\",placeholderText:\"\",handle:\".grid-stack-item-content\",handleClass:null,cellHeight:60,verticalMargin:20,auto:!0,minWidth:768,\"float\":!1,staticGrid:!1,_class:\"grid-stack-instance-\"+(1e4*Math.random()).toFixed(0),animate:Boolean(this.container.attr(\"data-gs-animate\"))||!1,alwaysShowResizeHandle:d.alwaysShowResizeHandle||!1,resizable:b.defaults(d.resizable||{},{autoHide:!d.alwaysShowResizeHandle,handles:\"se\"}),draggable:b.defaults(d.draggable||{},{handle:(d.handleClass?\".\"+d.handleClass:d.handle?d.handle:\"\")||\".grid-stack-item-content\",scroll:!1,appendTo:\"body\"}),disableDrag:d.disableDrag||!1,disableResize:d.disableResize||!1,rtl:\"auto\",removable:!1,removeTimeout:2e3,verticalMarginUnit:\"px\",cellHeightUnit:\"px\"}),\"auto\"===this.opts.rtl&&(this.opts.rtl=\"rtl\"===this.container.css(\"direction\")),this.opts.rtl&&this.container.addClass(\"grid-stack-rtl\"),this.opts.isNested=j,g=\"auto\"===this.opts.cellHeight,g?i.cellHeight(i.cellWidth(),!0):this.cellHeight(this.opts.cellHeight,!0),this.verticalMargin(this.opts.verticalMargin,!0),this.container.addClass(this.opts._class),this._setStaticClass(),j&&this.container.addClass(\"grid-stack-nested\"),this._initStyles(),this.grid=new h(this.opts.width,function(a,c){c=\"undefined\"==typeof c||c;var d=0;b.each(a,function(a){c&&null===a._id?a.el&&a.el.remove():(a.el.attr(\"data-gs-x\",a.x).attr(\"data-gs-y\",a.y).attr(\"data-gs-width\",a.width).attr(\"data-gs-height\",a.height),d=Math.max(d,a.y+a.height))}),i._updateStyles(d+10)},this.opts[\"float\"],this.opts.height),this.opts.auto){var k=[],l=this;this.container.children(\".\"+this.opts.itemClass+\":not(.\"+this.opts.placeholderClass+\")\").each(function(b,c){c=a(c),k.push({el:c,i:parseInt(c.attr(\"data-gs-x\"))+parseInt(c.attr(\"data-gs-y\"))*l.opts.width})}),b.chain(k).sortBy(function(a){return a.i}).each(function(a){i._prepareElement(a.el)}).value()}if(this.setAnimation(this.opts.animate),this.placeholder=a('<div class=\"'+this.opts.placeholderClass+\" \"+this.opts.itemClass+'\"><div class=\"placeholder-content\">'+this.opts.placeholderText+\"</div></div>\").hide(),this._updateContainerHeight(),this._updateHeightsOnResize=b.throttle(function(){i.cellHeight(i.cellWidth(),!1)},100),this.onResizeHandler=function(){if(g&&i._updateHeightsOnResize(),i._isOneColumnMode()){if(f)return;f=!0,i.grid._sortNodes(),b.each(i.grid.nodes,function(a){i.container.append(a.el),i.opts.staticGrid||((a.noMove||i.opts.disableDrag)&&a.el.draggable(\"disable\"),(a.noResize||i.opts.disableResize)&&a.el.resizable(\"disable\"),a.el.trigger(\"resize\"))})}else{if(!f)return;if(f=!1,i.opts.staticGrid)return;b.each(i.grid.nodes,function(a){a.noMove||i.opts.disableDrag||a.el.draggable(\"enable\"),a.noResize||i.opts.disableResize||a.el.resizable(\"enable\"),a.el.trigger(\"resize\")})}},a(window).resize(this.onResizeHandler),this.onResizeHandler(),!i.opts.staticGrid&&\"string\"==typeof i.opts.removable){var m=a(i.opts.removable);m.data(\"droppable\")||m.droppable({accept:\".\"+i.opts.itemClass}),m.on(\"dropover\",function(b,c){var d=a(c.draggable),e=d.data(\"_gridstack_node\");e._grid===i&&i._setupRemovingTimeout(d)}).on(\"dropout\",function(b,c){var d=a(c.draggable),e=d.data(\"_gridstack_node\");e._grid===i&&i._clearRemovingTimeout(d)})}if(!i.opts.staticGrid&&i.opts.acceptWidgets){var n=null,o=function(a,b){var c=n,d=c.data(\"_gridstack_node\"),e=i.getCellFromPixel(b.offset,!0),f=Math.max(0,e.x),g=Math.max(0,e.y);if(d._added){if(!i.grid.canMoveNode(d,f,g))return;i.grid.moveNode(d,f,g),i._updateContainerHeight()}else d._added=!0,d.el=c,d.x=f,d.y=g,i.grid.cleanNodes(),i.grid.beginUpdate(d),i.grid.addNode(d),i.container.append(i.placeholder),i.placeholder.attr(\"data-gs-x\",d.x).attr(\"data-gs-y\",d.y).attr(\"data-gs-width\",d.width).attr(\"data-gs-height\",d.height).show(),d.el=i.placeholder,d._beforeDragX=d.x,d._beforeDragY=d.y,i._updateContainerHeight()};a(i.container).droppable({accept:function(b){b=a(b);var c=b.data(\"_gridstack_node\");return(!c||c._grid!==i)&&b.is(i.opts.acceptWidgets===!0?\".grid-stack-item\":i.opts.acceptWidgets)},over:function(b,c){var d=(i.container.offset(),a(c.draggable)),e=i.cellWidth(),f=i.cellHeight(),g=d.data(\"_gridstack_node\"),h=g?g.width:Math.ceil(d.outerWidth()/e),j=g?g.height:Math.ceil(d.outerHeight()/f);n=d;var k=i.grid._prepareNode({width:h,height:j,_added:!1,_temporary:!0});d.data(\"_gridstack_node\",k),d.data(\"_gridstack_node_orig\",g),d.on(\"drag\",o)},out:function(b,c){var d=a(c.draggable);d.unbind(\"drag\",o);var e=d.data(\"_gridstack_node\");e.el=null,i.grid.removeNode(e),i.placeholder.detach(),i._updateContainerHeight(),d.data(\"_gridstack_node\",d.data(\"_gridstack_node_orig\"))},drop:function(b,c){i.placeholder.detach();var d=a(c.draggable).data(\"_gridstack_node\");d._grid=i;var e=a(c.draggable).clone(!1);e.data(\"_gridstack_node\",d),a(c.draggable).remove(),d.el=e,i.placeholder.hide(),e.attr(\"data-gs-x\",d.x).attr(\"data-gs-y\",d.y).attr(\"data-gs-width\",d.width).attr(\"data-gs-height\",d.height).addClass(i.opts.itemClass).removeAttr(\"style\").enableSelection().removeData(\"draggable\").removeClass(\"ui-draggable ui-draggable-dragging ui-draggable-disabled\").unbind(\"drag\",o),i.container.append(e),i._prepareElementsByNode(e,d),i._updateContainerHeight(),i._triggerChangeEvent(),i.grid.endUpdate()}})}};\n// jscs:disable requireCamelCaseOrUpperCaseIdentifiers\n// jscs:enable requireCamelCaseOrUpperCaseIdentifiers\nreturn i.prototype._triggerChangeEvent=function(a){var b=this.grid.getDirtyNodes(),c=!1,d=[];b&&b.length&&(d.push(b),c=!0),(c||a===!0)&&this.container.trigger(\"change\",d)},i.prototype._triggerAddEvent=function(){this.grid._addedNodes&&this.grid._addedNodes.length>0&&(this.container.trigger(\"added\",[b.map(this.grid._addedNodes,b.clone)]),this.grid._addedNodes=[])},i.prototype._triggerRemoveEvent=function(){this.grid._removedNodes&&this.grid._removedNodes.length>0&&(this.container.trigger(\"removed\",[b.map(this.grid._removedNodes,b.clone)]),this.grid._removedNodes=[])},i.prototype._initStyles=function(){this._stylesId&&f.removeStylesheet(this._stylesId),this._stylesId=\"gridstack-style-\"+(1e5*Math.random()).toFixed(),this._styles=f.createStylesheet(this._stylesId),null!==this._styles&&(this._styles._max=0)},i.prototype._updateStyles=function(a){if(null!==this._styles&&\"undefined\"!=typeof this._styles){var b,c=\".\"+this.opts._class+\" .\"+this.opts.itemClass,d=this;if(\"undefined\"==typeof a&&(a=this._styles._max,this._initStyles(),this._updateContainerHeight()),this.opts.cellHeight&&!(0!==this._styles._max&&a<=this._styles._max)&&(b=this.opts.verticalMargin&&this.opts.cellHeightUnit!==this.opts.verticalMarginUnit?function(a,b){return a&&b?\"calc(\"+(d.opts.cellHeight*a+d.opts.cellHeightUnit)+\" + \"+(d.opts.verticalMargin*b+d.opts.verticalMarginUnit)+\")\":d.opts.cellHeight*a+d.opts.verticalMargin*b+d.opts.cellHeightUnit}:function(a,b){return d.opts.cellHeight*a+d.opts.verticalMargin*b+d.opts.cellHeightUnit},0===this._styles._max&&f.insertCSSRule(this._styles,c,\"min-height: \"+b(1,0)+\";\",0),a>this._styles._max)){for(var e=this._styles._max;e<a;++e)f.insertCSSRule(this._styles,c+'[data-gs-height=\"'+(e+1)+'\"]',\"height: \"+b(e+1,e)+\";\",e),f.insertCSSRule(this._styles,c+'[data-gs-min-height=\"'+(e+1)+'\"]',\"min-height: \"+b(e+1,e)+\";\",e),f.insertCSSRule(this._styles,c+'[data-gs-max-height=\"'+(e+1)+'\"]',\"max-height: \"+b(e+1,e)+\";\",e),f.insertCSSRule(this._styles,c+'[data-gs-y=\"'+e+'\"]',\"top: \"+b(e,e)+\";\",e);this._styles._max=a}}},i.prototype._updateContainerHeight=function(){if(!this.grid._updateCounter){var a=this.grid.getGridHeight();this.container.attr(\"data-gs-current-height\",a),this.opts.cellHeight&&(this.opts.verticalMargin?this.opts.cellHeightUnit===this.opts.verticalMarginUnit?this.container.css(\"height\",a*(this.opts.cellHeight+this.opts.verticalMargin)-this.opts.verticalMargin+this.opts.cellHeightUnit):this.container.css(\"height\",\"calc(\"+(a*this.opts.cellHeight+this.opts.cellHeightUnit)+\" + \"+(a*(this.opts.verticalMargin-1)+this.opts.verticalMarginUnit)+\")\"):this.container.css(\"height\",a*this.opts.cellHeight+this.opts.cellHeightUnit))}},i.prototype._isOneColumnMode=function(){return(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<=this.opts.minWidth},i.prototype._setupRemovingTimeout=function(b){var c=this,d=a(b).data(\"_gridstack_node\");!d._removeTimeout&&c.opts.removable&&(d._removeTimeout=setTimeout(function(){b.addClass(\"grid-stack-item-removing\"),d._isAboutToRemove=!0},c.opts.removeTimeout))},i.prototype._clearRemovingTimeout=function(b){var c=a(b).data(\"_gridstack_node\");c._removeTimeout&&(clearTimeout(c._removeTimeout),c._removeTimeout=null,b.removeClass(\"grid-stack-item-removing\"),c._isAboutToRemove=!1)},i.prototype._prepareElementsByNode=function(c,d){if(\"undefined\"!=typeof a.ui){var e,f,g=this,h=function(a,b){var h,i,j=Math.round(b.position.left/e),k=Math.floor((b.position.top+f/2)/f);if(\"drag\"!=a.type&&(h=Math.round(b.size.width/e),i=Math.round(b.size.height/f)),\"drag\"==a.type)j<0||j>=g.grid.width||k<0?(g.opts.removable===!0&&g._setupRemovingTimeout(c),j=d._beforeDragX,k=d._beforeDragY,g.placeholder.detach(),g.placeholder.hide(),g.grid.removeNode(d),g._updateContainerHeight(),d._temporaryRemoved=!0):(g._clearRemovingTimeout(c),d._temporaryRemoved&&(g.grid.addNode(d),g.placeholder.attr(\"data-gs-x\",j).attr(\"data-gs-y\",k).attr(\"data-gs-width\",h).attr(\"data-gs-height\",i).show(),g.container.append(g.placeholder),d.el=g.placeholder,d._temporaryRemoved=!1));else if(\"resize\"==a.type&&j<0)return;g.grid.canMoveNode(d,j,k,h,i)&&(g.grid.moveNode(d,j,k,h,i),g._updateContainerHeight())},i=function(b,h){g.container.append(g.placeholder);var i=a(this);g.grid.cleanNodes(),g.grid.beginUpdate(d),e=g.cellWidth();var j=Math.ceil(i.outerHeight()/i.attr(\"data-gs-height\"));f=g.container.height()/parseInt(g.container.attr(\"data-gs-current-height\")),g.placeholder.attr(\"data-gs-x\",i.attr(\"data-gs-x\")).attr(\"data-gs-y\",i.attr(\"data-gs-y\")).attr(\"data-gs-width\",i.attr(\"data-gs-width\")).attr(\"data-gs-height\",i.attr(\"data-gs-height\")).show(),d.el=g.placeholder,d._beforeDragX=d.x,d._beforeDragY=d.y,c.resizable(\"option\",\"minWidth\",e*(d.minWidth||1)),c.resizable(\"option\",\"minHeight\",j*(d.minHeight||1)),\"resizestart\"==b.type&&i.find(\".grid-stack-item\").trigger(\"resizestart\")},j=function(b,e){var f=a(this);if(f.data(\"_gridstack_node\")){var h=!1;g.placeholder.detach(),d.el=f,g.placeholder.hide(),d._isAboutToRemove?(h=!0,c.removeData(\"_gridstack_node\"),c.remove()):(g._clearRemovingTimeout(c),d._temporaryRemoved?(f.attr(\"data-gs-x\",d._beforeDragX).attr(\"data-gs-y\",d._beforeDragY).attr(\"data-gs-width\",d.width).attr(\"data-gs-height\",d.height).removeAttr(\"style\"),d.x=d._beforeDragX,d.y=d._beforeDragY,g.grid.addNode(d)):f.attr(\"data-gs-x\",d.x).attr(\"data-gs-y\",d.y).attr(\"data-gs-width\",d.width).attr(\"data-gs-height\",d.height).removeAttr(\"style\")),g._updateContainerHeight(),g._triggerChangeEvent(h),g.grid.endUpdate();var i=f.find(\".grid-stack\");i.length&&\"resizestop\"==b.type&&(i.each(function(b,c){a(c).data(\"gridstack\").onResizeHandler()}),f.find(\".grid-stack-item\").trigger(\"resizestop\"))}};c.draggable(b.extend({},this.opts.draggable,{containment:this.opts.isNested?this.container.parent():null,start:i,stop:j,drag:h})).resizable(b.extend({},this.opts.resizable,{start:i,stop:j,resize:h})),(d.noMove||this._isOneColumnMode()||this.opts.disableDrag)&&c.draggable(\"disable\"),(d.noResize||this._isOneColumnMode()||this.opts.disableResize)&&c.resizable(\"disable\"),c.attr(\"data-gs-locked\",d.locked?\"yes\":null)}},i.prototype._prepareElement=function(b,c){c=\"undefined\"!=typeof c&&c;var d=this;b=a(b),b.addClass(this.opts.itemClass);var e=d.grid.addNode({x:b.attr(\"data-gs-x\"),y:b.attr(\"data-gs-y\"),width:b.attr(\"data-gs-width\"),height:b.attr(\"data-gs-height\"),maxWidth:b.attr(\"data-gs-max-width\"),minWidth:b.attr(\"data-gs-min-width\"),maxHeight:b.attr(\"data-gs-max-height\"),minHeight:b.attr(\"data-gs-min-height\"),autoPosition:f.toBool(b.attr(\"data-gs-auto-position\")),noResize:f.toBool(b.attr(\"data-gs-no-resize\")),noMove:f.toBool(b.attr(\"data-gs-no-move\")),locked:f.toBool(b.attr(\"data-gs-locked\")),el:b,id:b.attr(\"data-gs-id\"),_grid:d},c);b.data(\"_gridstack_node\",e),this._prepareElementsByNode(b,e)},i.prototype.setAnimation=function(a){a?this.container.addClass(\"grid-stack-animate\"):this.container.removeClass(\"grid-stack-animate\")},i.prototype.addWidget=function(b,c,d,e,f,g,h,i,j,k,l){return b=a(b),\"undefined\"!=typeof c&&b.attr(\"data-gs-x\",c),\"undefined\"!=typeof d&&b.attr(\"data-gs-y\",d),\"undefined\"!=typeof e&&b.attr(\"data-gs-width\",e),\"undefined\"!=typeof f&&b.attr(\"data-gs-height\",f),\"undefined\"!=typeof g&&b.attr(\"data-gs-auto-position\",g?\"yes\":null),\"undefined\"!=typeof h&&b.attr(\"data-gs-min-width\",h),\"undefined\"!=typeof i&&b.attr(\"data-gs-max-width\",i),\"undefined\"!=typeof j&&b.attr(\"data-gs-min-height\",j),\"undefined\"!=typeof k&&b.attr(\"data-gs-max-height\",k),\"undefined\"!=typeof l&&b.attr(\"data-gs-id\",l),this.container.append(b),this._prepareElement(b,!0),this._triggerAddEvent(),this._updateContainerHeight(),this._triggerChangeEvent(!0),b},i.prototype.makeWidget=function(b){return b=a(b),this._prepareElement(b,!0),this._triggerAddEvent(),this._updateContainerHeight(),this._triggerChangeEvent(!0),b},i.prototype.willItFit=function(a,b,c,d,e){var f={x:a,y:b,width:c,height:d,autoPosition:e};return this.grid.canBePlacedWithRespectToHeight(f)},i.prototype.removeWidget=function(b,c){c=\"undefined\"==typeof c||c,b=a(b);var d=b.data(\"_gridstack_node\");\n// For Meteor support: https://github.com/troolee/gridstack.js/pull/272\nd||(d=this.grid.getNodeDataByDOMEl(b)),this.grid.removeNode(d,c),b.removeData(\"_gridstack_node\"),this._updateContainerHeight(),c&&b.remove(),this._triggerChangeEvent(!0),this._triggerRemoveEvent()},i.prototype.removeAll=function(a){b.each(this.grid.nodes,b.bind(function(b){this.removeWidget(b.el,a)},this)),this.grid.nodes=[],this._updateContainerHeight()},i.prototype.destroy=function(b){a(window).off(\"resize\",this.onResizeHandler),this.disable(),\"undefined\"==typeof b||b?this.container.remove():(this.removeAll(!1),this.container.removeData(\"gridstack\")),f.removeStylesheet(this._stylesId),this.grid&&(this.grid=null)},i.prototype.resizable=function(b,c){var d=this;return b=a(b),b.each(function(b,e){e=a(e);var f=e.data(\"_gridstack_node\");\"undefined\"!=typeof f&&null!==f&&\"undefined\"!=typeof a.ui&&(f.noResize=!c,f.noResize||d._isOneColumnMode()?e.resizable(\"disable\"):e.resizable(\"enable\"))}),this},i.prototype.movable=function(b,c){var d=this;return b=a(b),b.each(function(b,e){e=a(e);var f=e.data(\"_gridstack_node\");\"undefined\"!=typeof f&&null!==f&&\"undefined\"!=typeof a.ui&&(f.noMove=!c,f.noMove||d._isOneColumnMode()?(e.draggable(\"disable\"),e.removeClass(\"ui-draggable-handle\")):(e.draggable(\"enable\"),e.addClass(\"ui-draggable-handle\")))}),this},i.prototype.enableMove=function(a,b){this.movable(this.container.children(\".\"+this.opts.itemClass),a),b&&(this.opts.disableDrag=!a)},i.prototype.enableResize=function(a,b){this.resizable(this.container.children(\".\"+this.opts.itemClass),a),b&&(this.opts.disableResize=!a)},i.prototype.disable=function(){this.movable(this.container.children(\".\"+this.opts.itemClass),!1),this.resizable(this.container.children(\".\"+this.opts.itemClass),!1),this.container.trigger(\"disable\")},i.prototype.enable=function(){this.movable(this.container.children(\".\"+this.opts.itemClass),!0),this.resizable(this.container.children(\".\"+this.opts.itemClass),!0),this.container.trigger(\"enable\")},i.prototype.locked=function(b,c){return b=a(b),b.each(function(b,d){d=a(d);var e=d.data(\"_gridstack_node\");\"undefined\"!=typeof e&&null!==e&&(e.locked=c||!1,d.attr(\"data-gs-locked\",e.locked?\"yes\":null))}),this},i.prototype.maxHeight=function(b,c){return b=a(b),b.each(function(b,d){d=a(d);var e=d.data(\"_gridstack_node\");\"undefined\"!=typeof e&&null!==e&&(isNaN(c)||(e.maxHeight=c||!1,d.attr(\"data-gs-max-height\",c)))}),this},i.prototype.minHeight=function(b,c){return b=a(b),b.each(function(b,d){d=a(d);var e=d.data(\"_gridstack_node\");\"undefined\"!=typeof e&&null!==e&&(isNaN(c)||(e.minHeight=c||!1,d.attr(\"data-gs-min-height\",c)))}),this},i.prototype.maxWidth=function(b,c){return b=a(b),b.each(function(b,d){d=a(d);var e=d.data(\"_gridstack_node\");\"undefined\"!=typeof e&&null!==e&&(isNaN(c)||(e.maxWidth=c||!1,d.attr(\"data-gs-max-width\",c)))}),this},i.prototype.minWidth=function(b,c){return b=a(b),b.each(function(b,d){d=a(d);var e=d.data(\"_gridstack_node\");\"undefined\"!=typeof e&&null!==e&&(isNaN(c)||(e.minWidth=c||!1,d.attr(\"data-gs-min-width\",c)))}),this},i.prototype._updateElement=function(b,c){b=a(b).first();var d=b.data(\"_gridstack_node\");if(\"undefined\"!=typeof d&&null!==d){var e=this;e.grid.cleanNodes(),e.grid.beginUpdate(d),c.call(this,b,d),e._updateContainerHeight(),e._triggerChangeEvent(),e.grid.endUpdate()}},i.prototype.resize=function(a,b,c){this._updateElement(a,function(a,d){b=null!==b&&\"undefined\"!=typeof b?b:d.width,c=null!==c&&\"undefined\"!=typeof c?c:d.height,this.grid.moveNode(d,d.x,d.y,b,c)})},i.prototype.move=function(a,b,c){this._updateElement(a,function(a,d){b=null!==b&&\"undefined\"!=typeof b?b:d.x,c=null!==c&&\"undefined\"!=typeof c?c:d.y,this.grid.moveNode(d,b,c,d.width,d.height)})},i.prototype.update=function(a,b,c,d,e){this._updateElement(a,function(a,f){b=null!==b&&\"undefined\"!=typeof b?b:f.x,c=null!==c&&\"undefined\"!=typeof c?c:f.y,d=null!==d&&\"undefined\"!=typeof d?d:f.width,e=null!==e&&\"undefined\"!=typeof e?e:f.height,this.grid.moveNode(f,b,c,d,e)})},i.prototype.verticalMargin=function(a,b){if(\"undefined\"==typeof a)return this.opts.verticalMargin;var c=f.parseHeight(a);this.opts.verticalMarginUnit===c.unit&&this.opts.height===c.height||(this.opts.verticalMarginUnit=c.unit,this.opts.verticalMargin=c.height,b||this._updateStyles())},i.prototype.cellHeight=function(a,b){if(\"undefined\"==typeof a){if(this.opts.cellHeight)return this.opts.cellHeight;var c=this.container.children(\".\"+this.opts.itemClass).first();return Math.ceil(c.outerHeight()/c.attr(\"data-gs-height\"))}var d=f.parseHeight(a);this.opts.cellHeightUnit===d.heightUnit&&this.opts.height===d.height||(this.opts.cellHeightUnit=d.unit,this.opts.cellHeight=d.height,b||this._updateStyles())},i.prototype.cellWidth=function(){return Math.round(this.container.outerWidth()/this.opts.width)},i.prototype.getCellFromPixel=function(a,b){var c=\"undefined\"!=typeof b&&b?this.container.offset():this.container.position(),d=a.left-c.left,e=a.top-c.top,f=Math.floor(this.container.width()/this.opts.width),g=Math.floor(this.container.height()/parseInt(this.container.attr(\"data-gs-current-height\")));return{x:Math.floor(d/f),y:Math.floor(e/g)}},i.prototype.batchUpdate=function(){this.grid.batchUpdate()},i.prototype.commit=function(){this.grid.commit(),this._updateContainerHeight()},i.prototype.isAreaEmpty=function(a,b,c,d){return this.grid.isAreaEmpty(a,b,c,d)},i.prototype.setStatic=function(a){this.opts.staticGrid=a===!0,this.enableMove(!a),this.enableResize(!a),this._setStaticClass()},i.prototype._setStaticClass=function(){var a=\"grid-stack-static\";this.opts.staticGrid===!0?this.container.addClass(a):this.container.removeClass(a)},i.prototype._updateNodeWidths=function(a,b){this.grid._sortNodes(),this.grid.batchUpdate();for(var c={},d=0;d<this.grid.nodes.length;d++)c=this.grid.nodes[d],this.update(c.el,Math.round(c.x*b/a),void 0,Math.round(c.width*b/a),void 0);this.grid.commit()},i.prototype.setGridWidth=function(a,b){this.container.removeClass(\"grid-stack-\"+this.opts.width),b!==!0&&this._updateNodeWidths(this.opts.width,a),this.opts.width=a,this.grid.width=a,this.container.addClass(\"grid-stack-\"+a)},h.prototype.batch_update=d(h.prototype.batchUpdate),h.prototype._fix_collisions=d(h.prototype._fixCollisions,\"_fix_collisions\",\"_fixCollisions\"),h.prototype.is_area_empty=d(h.prototype.isAreaEmpty,\"is_area_empty\",\"isAreaEmpty\"),h.prototype._sort_nodes=d(h.prototype._sortNodes,\"_sort_nodes\",\"_sortNodes\"),h.prototype._pack_nodes=d(h.prototype._packNodes,\"_pack_nodes\",\"_packNodes\"),h.prototype._prepare_node=d(h.prototype._prepareNode,\"_prepare_node\",\"_prepareNode\"),h.prototype.clean_nodes=d(h.prototype.cleanNodes,\"clean_nodes\",\"cleanNodes\"),h.prototype.get_dirty_nodes=d(h.prototype.getDirtyNodes,\"get_dirty_nodes\",\"getDirtyNodes\"),h.prototype.add_node=d(h.prototype.addNode,\"add_node\",\"addNode, \"),h.prototype.remove_node=d(h.prototype.removeNode,\"remove_node\",\"removeNode\"),h.prototype.can_move_node=d(h.prototype.canMoveNode,\"can_move_node\",\"canMoveNode\"),h.prototype.move_node=d(h.prototype.moveNode,\"move_node\",\"moveNode\"),h.prototype.get_grid_height=d(h.prototype.getGridHeight,\"get_grid_height\",\"getGridHeight\"),h.prototype.begin_update=d(h.prototype.beginUpdate,\"begin_update\",\"beginUpdate\"),h.prototype.end_update=d(h.prototype.endUpdate,\"end_update\",\"endUpdate\"),h.prototype.can_be_placed_with_respect_to_height=d(h.prototype.canBePlacedWithRespectToHeight,\"can_be_placed_with_respect_to_height\",\"canBePlacedWithRespectToHeight\"),i.prototype._trigger_change_event=d(i.prototype._triggerChangeEvent,\"_trigger_change_event\",\"_triggerChangeEvent\"),i.prototype._init_styles=d(i.prototype._initStyles,\"_init_styles\",\"_initStyles\"),i.prototype._update_styles=d(i.prototype._updateStyles,\"_update_styles\",\"_updateStyles\"),i.prototype._update_container_height=d(i.prototype._updateContainerHeight,\"_update_container_height\",\"_updateContainerHeight\"),i.prototype._is_one_column_mode=d(i.prototype._isOneColumnMode,\"_is_one_column_mode\",\"_isOneColumnMode\"),i.prototype._prepare_element=d(i.prototype._prepareElement,\"_prepare_element\",\"_prepareElement\"),i.prototype.set_animation=d(i.prototype.setAnimation,\"set_animation\",\"setAnimation\"),i.prototype.add_widget=d(i.prototype.addWidget,\"add_widget\",\"addWidget\"),i.prototype.make_widget=d(i.prototype.makeWidget,\"make_widget\",\"makeWidget\"),i.prototype.will_it_fit=d(i.prototype.willItFit,\"will_it_fit\",\"willItFit\"),i.prototype.remove_widget=d(i.prototype.removeWidget,\"remove_widget\",\"removeWidget\"),i.prototype.remove_all=d(i.prototype.removeAll,\"remove_all\",\"removeAll\"),i.prototype.min_height=d(i.prototype.minHeight,\"min_height\",\"minHeight\"),i.prototype.min_width=d(i.prototype.minWidth,\"min_width\",\"minWidth\"),i.prototype._update_element=d(i.prototype._updateElement,\"_update_element\",\"_updateElement\"),i.prototype.cell_height=d(i.prototype.cellHeight,\"cell_height\",\"cellHeight\"),i.prototype.cell_width=d(i.prototype.cellWidth,\"cell_width\",\"cellWidth\"),i.prototype.get_cell_from_pixel=d(i.prototype.getCellFromPixel,\"get_cell_from_pixel\",\"getCellFromPixel\"),i.prototype.batch_update=d(i.prototype.batchUpdate,\"batch_update\",\"batchUpdate\"),i.prototype.is_area_empty=d(i.prototype.isAreaEmpty,\"is_area_empty\",\"isAreaEmpty\"),i.prototype.set_static=d(i.prototype.setStatic,\"set_static\",\"setStatic\"),i.prototype._set_static_class=d(i.prototype._setStaticClass,\"_set_static_class\",\"_setStaticClass\"),c.GridStackUI=i,c.GridStackUI.Utils=f,c.GridStackUI.Engine=h,a.fn.gridstack=function(b){return this.each(function(){var c=a(this);c.data(\"gridstack\")||c.data(\"gridstack\",new i(this,b))})},c.GridStackUI});\n//# sourceMappingURL=gridstack.min.map"

/***/ }),

/***/ 152:
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

/* global enquire APP */

var AntaresGridstack = {
  init: function init() {
    this.gridStack();
    this.helpers();
    this.stopTouchScroll();
    this.identify();
  },


  // methods
  showInDom: function showInDom() {
    // $('.grid-stack').css('opacity', '1');
  },
  identify: function identify() {
    $('.grid-stack-item').each(function () {
      if ($(this).find('.tbl-c').length) {
        $(this).find('.grid-stack-item-content').addClass('card-datatables');
      }
    });
  },
  stopTouchScroll: function stopTouchScroll() {
    if ($('html').hasClass('is-mobile')) {
      $('.move-button').on('mousedown', function () {
        $('.app-content').perfectScrollbar('destroy');
      });
      $('.move-button').on('mouseup', function () {
        $('.app-content').perfectScrollbar();
      });
      $('.ui-resizable-handle').on('mousedown', function () {
        $('.app-content').perfectScrollbar('destroy');
      });
      $('.ui-resizable-handle').on('mouseup', function () {
        $('.app-content').perfectScrollbar();
      });
    }
  },
  helpers: function helpers() {
    //gridstack height automation jintegrer babel external automation tool scafolding
    $.fn.extend({
      calcHeight: function calcHeight() {
        var gS = $('.grid-stack').data('gridstack');
        var gSCH = gS.cellHeight();
        // console.log('cell height: ' + gSCH);

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
    $('.card__mobile-toggle').on('click', function () {
      if ($(this).hasClass('card__mobile-toggle--open')) {
        $(this).removeClass('card__mobile-toggle--open');
        $(this).closest('.card-container').removeClass('card--mobile-toggled');
      } else {
        $(this).addClass('card__mobile-toggle--open');
        $(this).closest('.card-container').addClass('card--mobile-toggled');
      }
    });
  },
  simulateNewGsi: function simulateNewGsi() {
    // var grid = $('.grid-stack').data('gridstack');
    // var el = $('.card--test');
    // grid.addWidget(el, 0, 0, 3, 12, true);
    // console.log(grid)
  },
  gridStack: function gridStack() {
    __webpack_require__(153);
    var gridstack_options = {
      animate: false,
      minWidth: 768,
      alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      resizable: {
        handles: 'e, se, s, sw, w, n'
      },
      cellHeight: '15px',
      verticalMargin: 20,
      handle: '.move-button',
      width: 24
    };
    var gridStack = $('.grid-stack');
    if (gridStack.length > 0) {
      gridStack.gridstack(gridstack_options);
      var grid = gridStack.data('gridstack');
      grid.disable();
    }

    var gsLoadedEvent = new CustomEvent('antares-gridstack-loaded', { detail: 'gridstack is ready' });
    document.dispatchEvent(gsLoadedEvent);
  }
};

$(function () {
  window.AntaresGridstack = AntaresGridstack;
  AntaresGridstack.init();
});

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '',
    toArray = __webpack_require__(75);

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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var index = __webpack_require__(74);

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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var naturalSort = __webpack_require__(139),
  getByClass = __webpack_require__(72),
  extend = __webpack_require__(73),
  indexOf = __webpack_require__(74),
  events = __webpack_require__(59),
  toString = __webpack_require__(76),
  classes = __webpack_require__(60),
  getAttribute = __webpack_require__(140),
  toArray = __webpack_require__(75);

module.exports = function(id, options, values) {

  var self = this,
    init,
    Item = __webpack_require__(77)(self),
    addAsync = __webpack_require__(141)(self),
    initPagination = __webpack_require__(142)(self);

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

      self.parse        = __webpack_require__(143)(self);
      self.templater    = __webpack_require__(144)(self);
      self.search       = __webpack_require__(145)(self);
      self.filter       = __webpack_require__(146)(self);
      self.sort         = __webpack_require__(147)(self);
      self.fuzzySearch  = __webpack_require__(148)(self, options.fuzzySearch);

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

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(680);


/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _zero_data = __webpack_require__(138);

var _zero_data2 = _interopRequireDefault(_zero_data);

var _widget_control = __webpack_require__(681);

var _widget_control2 = _interopRequireDefault(_widget_control);

var _gridstack_rwd = __webpack_require__(684);

var _gridstack_rwd2 = _interopRequireDefault(_gridstack_rwd);

var _edge = __webpack_require__(134);

var _edge2 = _interopRequireDefault(_edge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(150);

var List = __webpack_require__(66);
window.List = List;

__webpack_require__(152);

$(function () {
    _widget_control2.default.init();
    _zero_data2.default.gridstack();
});

$(window).on('load', function () {
    _edge2.default.gridstack();
});

window.widgetControl = _widget_control2.default;
window.edgeHelpers = _edge2.default;

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _underscore = __webpack_require__(682);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Antares Gridsack Widgets Control
exports.default = {
    init: function init() {
        this.widgetAdd();
        this.filterWidgets();
        this.gsMaximize();
        this.gsHeightAdjust();
        this.gsResize();
        this.gsZeroDataRWD();
        this.gsEditMode();
        this.gsRWDGeneral();
        this.refreshGridstack();
        this.rwdHelperDev();
        this.backend();
        savedPositions: [];

        /** watch on custom refresh gridstack trigger **/
        window.antaresEvents.on('refresh_gridstack', function () {
            this.refreshGridstack();
        });
    },

    // methods

    backend: function backend() {
        window.antaresEvents.on('dt_data_loaded', function (dtInstance) {
            $(dtInstance).find('tbody').adjustCardHeight();
        });
    },
    widgetAdd: function widgetAdd() {
        var self = this;
        var $el = $('.card-bar .card-bar__sgl');
        var $container = $('.main-content .grid-stack');

        $container.droppable({
            accept: $el,
            drop: function drop(event, ui) {
                // console.log('Widget added!');
            }
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
    filterWidgets: function filterWidgets() {
        __webpack_require__(66);

        var options = {
            valueNames: [{
                data: ['widget']
            }],
            searchClass: 'mdl-textfield__input',
            listClass: 'card-bar__items'
        };

        var widgetSort = new List('widgets-list', options);
    },
    gsRWDGeneral: function gsRWDGeneral() {
        enquire.register('screen and (min-width:768px) and (max-width:1220px)', {
            match: function match() {
                $('.card--chart').closest('.grid-stack-item').addClass('grid-size--xs');
                $('.card--logs').closest('.grid-stack-item').addClass('grid-size--xs');
            },
            unmatch: function unmatch() {
                $('.card--chart').closest('.grid-stack-item').removeClass('grid-size--xs');
                $('.card--logs').closest('.grid-stack-item').addClass('grid-size--xs');
            }
        });
    },
    clickClassHelper: function clickClassHelper(arm) {
        if (arm !== false) {
            // selec rects for debugging
            var componentData = [];

            // $(document).bind('keydown', 'alt', e => {

            $('body').on('click.tmp', function (e) {
                // if (e.target === 'undefined') {
                //   return false;
                // }
                var $target = $(e.target);
                var current = $target.attr('class');

                if (current == undefined) {
                    return false;
                }

                componentData.push(current);

                // removeClass();

                // console.log(componentData);
            });
            // });
            $(document).bind('keyup', function (e) {
                $(document).off('click.temp');
            });
        }
    },
    widgetInternalRWD: function widgetInternalRWD() {
        //target = $(.grid-stack-item');
        function clearGridStackRWDClasess($target) {
            // clearGridStackRWDClasess('.')
            //   clearGridStackRWDClasess();
            $target.removeClass('grid-size--xs grid-size--sm grid-size--md grid-size--lg grid-size--xl');
        }

        function addGridStackRWDClasses($target) {
            // init point
            clearGridStackRWDClasess($target);
            window.requestAnimationFrame(function () {
                // const windowW = parseInt($(window).width(), 10);
                var GSWidth = $target.attr('data-gs-width');
                // console.log(windowW);
                if (GSWidth <= 6) {
                    $target.addClass('grid-size--xs');
                } else if (GSWidth <= 8) {
                    $target.addClass('grid-size--sm');
                } else if (GSWidth <= 10) {
                    $target.addClass('grid-size--md');
                } else if (GSWidth <= 12) {
                    $target.addClass('grid-size--lg');
                } else if (GSWidth <= 24) {
                    $target.addClass('grid-size--xl');
                }
            }, 100);
        }

        var grid = $('.grid-stack').data('gridstack');
        var $grid = $('.grid-stack');

        grid.on('change', function (event, items) {
            //   console.log(items);
            // if (items == null) {
            //   return false;
            // }
            // for (let i = 0; i < items.length; i++) {
            //   let $GSItem = $(items[i].el);
            //   addGridStackRWDClasses($GSItem);
            // }
        });
    },
    gsHeightAdjust: function gsHeightAdjust($elem) {
        var self = this;

        $.fn.adjustCardHeight = function (disablePS) {
            var windowW = $(window).width();
            var $self = this;
            var elem = $(this).closest('.grid-stack-item');
            var grid = $('.grid-stack').data('gridstack');
            var gsi = $(this).closest('.grid-stack-item');
            var gsiHeight = gsi.outerHeight(true);
            var card = gsi.find('.card');
            var cardHeight = card.outerHeight(true);

            if ($('.app-content').hasClass('app-content--widgets-movable')) {
                return false;
            }
            if (card.hasClass('card--unadjustable') || gsi.find('.tbl-c').hasClass('card--unadjustable')) {
                return false;
            }

            if (card.hasClass('card--no-adjust')) {
                return false;
            }
            // fail safe data - attr
            var attr = gsi.attr('data-no-adjust');
            if ((typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) !== ( true ? 'undefined' : _typeof(undefined)) && attr !== false) {
                return false;
            }

            if (disablePS === true) {
                this.closest('.grid-stack-item-content').find('.ps').each(function (index, el) {
                    $(el).perfectScrollbar('destroy');
                });
            }

            function heightCalc() {
                var wholeElementHeight = 0;
                var newGsiHeightVal = 0;
                var currentElementHeight = 0;

                // init
                getRealHeight(card.find('.card__content'));

                function getRealHeight() {
                    // if it exists

                    elem.addClass('is-being-calculated');
                    // calc
                    wholeElementHeight = card.outerHeight(true);

                    window.requestAnimationFrame(function () {
                        elem.removeClass('is-being-calculated');
                    });

                    return wholeElementHeight;
                }

                if (grid) {
                    newGsiHeightVal = Math.round((parseInt(wholeElementHeight, 10) + grid.opts.verticalMargin) / (grid.cellHeight() + grid.opts.verticalMargin));
                }

                if (card.hasClass('card--news')) {
                    newGsiHeightVal++;
                }
                //screen and (min-width:768px) and (max-width:1365px)
                enquire.register('screen and (min-width:768px)', {
                    match: function match() {
                        if (!card.hasClass('card--chart')) {
                            window.requestAnimationFrame(function () {
                                gsi.attr('data-gs-height', newGsiHeightVal);

                                if (grid) {
                                    grid.resize(gsi, gsi.attr('data-gs-width'), newGsiHeightVal);
                                }
                            });
                        }
                    },
                    unmatch: function unmatch() {
                        window.requestAnimationFrame(function () {
                            gsi.attr('data-gs-height', newGsiHeightVal);

                            if (grid) {
                                grid.resize(gsi, gsi.attr('data-gs-width'), newGsiHeightVal);
                            }
                        });
                    }
                });
            }

            self.saveGridParams();
            heightCalc();
            return 'Element updated!';
        };

        if (typeof window.oTable === 'function') {
            window.oTable.on('responsive-display', function () {
                $('.tbl-c').adjustCardHeight();
            });
        }

        enquire.register('screen and (min-width:768px) and (max-width:1199px) ', {
            match: function match() {
                // card chart
                $('.card--chart [data-icheck="true"]').on('ifChanged', function () {
                    var _this = this;

                    $(this).closest('.card').find('.card__right .mobile-toogle--target').css('opacity', '0');
                    window.requestAnimationFrame(function () {
                        $(_this).closest('.card').find('.card__content').adjustCardHeight();
                    });
                    window.requestAnimationFrame(function () {
                        $(_this).closest('.card').find('.card__right .mobile-toogle--target').css('opacity', '1');
                    });
                });

                // card system info

                $('.card--info').on('click', '.mobile-toogle--box', function () {
                    window.requestAnimationFrame(function () {
                        $('.card--info .card__content').adjustCardHeight();
                    });
                });

                // card client contacts
                $('.card--contacts').on('click', '.card__mobile-toggle', function () {
                    window.requestAnimationFrame(function () {
                        $('.card--contacts').adjustCardHeight();
                    });
                });
            }
        });

        // card logs

        $('.card--logs').on('click', '.pagination', function (index, el) {
            window.requestAnimationFrame(function () {
                if (parseInt($(window).width(), 10) > 767) {
                    $('.card--logs .card__content').adjustCardHeight();
                    // console.log('should work');
                }
                // console.log('reason');
            });
        });

        // card with filters
        $('.card-datatables').on('click', '.add-filter, .change-filter', function (index, el) {
            window.requestAnimationFrame(function () {
                if (parseInt($(window).width(), 10) > 767) {
                    $('.card-datatables .card').adjustCardHeight();
                }
            });
        });

        $('tbl-c:not(.selected-mode--active)').on('click', 'td:first-of-type', function (index, el) {
            window.requestAnimationFrame(function () {
                if (parseInt($(window).width(), 10) > 767) {
                    $('.card-datatables .card').adjustCardHeight();
                }
            });
        });

        // select in card-ctrls
        $('.select--category').on('select2:select', function (e) {
            $(e.target).closest('.tbl-c').adjustCardHeight();
        });

        var thisWW = $(window).width();

        function gsiAdjust() {
            $('.grid-stack-item').each(function (index, elem) {
                window.requestAnimationFrame(function () {
                    $(elem).find('.card__content').adjustCardHeight();
                    $(elem).find('.tbl-c').adjustCardHeight();
                });
            });
        }

        // on load
        // if (thisWW > 767) {
        //   gsiAdjust();
        // }

        // $(window).resize(
        //   _.debounce(() => {
        //     gsiAdjust();
        //   }, 1150)
        // );
        //   enquire.register('screen and (max-width: 767px)', {
        //       match: function () {
        //           gsiAdjust();
        //       },
        //       unmatch: function () {
        //           gsiAdjust();
        //       }
        //   });
        enquire.register('screen and (min-width: 768px) and (max-width: 1023px)', {
            match: function match() {
                gsiAdjust();
            },
            unmatch: function unmatch() {
                gsiAdjust();
            }
        });
        enquire.register('screen and (min-width: 1024px) and (max-width: 1199px)', {
            match: function match() {
                gsiAdjust();
            },
            unmatch: function unmatch() {
                gsiAdjust();
            }
        });
        enquire.register('screen and (min-width: 1200px) and (max-width: 1349px)', {
            match: function match() {
                gsiAdjust();
            },
            unmatch: function unmatch() {
                gsiAdjust();
            }
        });
        enquire.register('screen and (min-width: 1350px) and (max-width: 1499px)', {
            match: function match() {
                gsiAdjust();
            },
            unmatch: function unmatch() {
                gsiAdjust();
            }
        });
        enquire.register('screen and (min-width: 1500px) and (max-width: 1649px)', {
            match: function match() {
                gsiAdjust();
            },
            unmatch: function unmatch() {
                gsiAdjust();
            }
        });
        enquire.register('screen and (min-width: 1650px)', {
            match: function match() {
                gsiAdjust();
            },
            unmatch: function unmatch() {
                gsiAdjust();
            }
        });
    },
    saveGridParams: function saveGridParams() {
        var self = this;
        if (self.savedPositions === undefined) {
            return;
        }
        $('.grid-stack-item').each(function () {
            var $this = $(this);
            self.savedPositions.push({
                x: $this.attr('data-gs-x'),
                y: $this.attr('data-gs-y'),
                w: $this.attr('data-gs-width'),
                h: $this.attr('data-gs-height')
            });
        });
    },
    gsMaximize: function gsMaximize() {
        //save vars without overwrite with click functions

        var self = this;
        var $maximizeButton = $('#app-wrapper .card .card-maximize');

        $maximizeButton.on('click', function () {
            self.saveGridParams(); //enlarge mechanics
            var $self = $(this);
            var widget = $(this).closest('.grid-stack-item');
            var grid = $(this).closest('.grid-stack').data('gridstack'); //set best height to simulate modal
            var currentCellH = grid.cellHeight();
            var headH = $('.main-head').outerHeight(true);
            var windowH = $(window).height();
            var appropriateHeight = (windowH - headH - 485) / currentCellH;
            var openCloseSwitch = $(this).data('openCloseSwitch'); //identify card number
            var index = widget.index();

            if (!openCloseSwitch) {
                // console.log(widget);
                grid.update(widget, 0, 0, 24, appropriateHeight);
                $('.app-content').scrollTop(0);
                widget.addClass('is-maximized');
                widget.find('.card__content').adjustCardHeight();
            } else {
                $('.grid-stack-item').each(function (index, el) {
                    grid.update(el, parseInt(self.savedPositions[index].x, 10), parseInt(self.savedPositions[index].y, 10), parseInt(self.savedPositions[index].w, 10), parseInt(self.savedPositions[index].h, 10));
                    $(el).removeClass('is-maximized');
                    widget.find('.card__content').adjustCardHeight();
                });
            }
            $(this).data('openCloseSwitch', !openCloseSwitch);
        });
    },
    gsDashboardRWD: function gsDashboardRWD() {
        //enumerate
        $('.grid-stack-item .card--chart').each(function (index, elem) {
            $(elem).attr('data-chart-number', index + 1);
        });

        var grid = $('.grid-stack').data('gridstack');
        var dashboard = $('.page-dashboard');
        var w = $(window).width();
        var c1 = $('.card--chart').eq(0);
        var c2 = $('.card--chart').eq(1);
        var c3 = $('.card--chart').eq(2);
        var c4 = $('.card--chart').eq(3);
        var systemInfo = $('.card--info');
        var news = $('.card--news');
        var systemLogs = $('.card--logs');

        if (dashboard.length) {
            enquire.register('screen and (min-width:1367px) ', {
                match: function match() {
                    window.requestAnimationFrame(function () {
                        $('.card--chart').each(function () {
                            $(this).cardResize($(this).attr('data-gs-x'), $(this).attr('data-gs-y'), $(this).attr('data-gs-width'), 10);
                            $(this).closest('.grid-stack-item').attr('data-gs-min-height', '10');
                        });
                        $('.card--logs').each(function () {
                            $(this).closest('.grid-stack-item').attr('data-gs-min-height', '8');
                        });
                        $('.card--info').each(function () {
                            $(this).closest('.grid-stack-item').attr('data-gs-min-height', '8');
                        });
                        $('[data-scrollable]').perfectScrollbar();
                    });
                }
            });
            enquire.register('screen and (min-width: 1450px)', {
                match: function match() {
                    window.requestAnimationFrame(function () {
                        c1.cardResize(0, 0, 12, 10);
                        c2.cardResize(12, 0, 12, 10);
                        c3.cardResize(0, 10, 12, 10);
                        c4.cardResize(12, 10, 12, 10);
                        systemInfo.cardResize(0, 20, 6, 10);
                        news.cardResize(6, 20, 6, 10);
                        systemLogs.cardResize(12, 20, 12, 12);
                    });
                }
            });
            enquire.register('screen and (min-width:1200px) and (max-width: 1449px)', {
                match: function match() {
                    window.requestAnimationFrame(function () {
                        c1.cardResize(0, 0, 12, 14);
                        c2.cardResize(12, 0, 12, 14);
                        c3.cardResize(0, 14, 12, 14);
                        c4.cardResize(12, 14, 12, 14);
                        systemInfo.cardResize(0, 28, 6, 10);
                        news.cardResize(6, 28, 6, 10);
                        systemLogs.cardResize(12, 28, 12, 12);
                    });
                }
            });
            enquire.register('screen and (max-width:1199px) and (min-width:768px) ', {
                match: function match() {
                    c1.cardResize(0, 0, 12, 14);
                    c2.cardResize(12, 0, 12, 14);
                    c3.cardResize(0, 14, 12, 14);
                    c4.cardResize(12, 14, 12, 14);
                    systemInfo.cardResize(0, 28, 12, 13);
                    news.cardResize(12, 28, 12, 13);
                    systemLogs.cardResize(0, 41, 24, 17);
                }
            });
        }
    },
    gsZeroDataRWD: function gsZeroDataRWD() {
        //enumerate
        $('.grid-stack-item .card--zd').each(function (index, elem) {
            $(elem).attr('data-chart-number', index + 1);
        });

        var grid = $('.grid-stack').data('gridstack');
        var zeroData = $('.page-zero-data');
        var cz1 = $('.card--zd').eq(0);
        var cz2 = $('.card--zd').eq(1);
        var cz3 = $('.card--zd').eq(2);
        var cz4 = $('.card--zd').eq(3);

        if (zeroData.length) {
            enquire.register('screen and (max-width:1449px) and (min-width:1024px) ', {
                match: function match() {
                    setTimeout(function () {
                        // window.requestAnimationFrame(() => {
                        cz1.cardResize(0, 0, 6, 10);
                        cz2.cardResize(0, 10, 10, 12);
                        cz3.cardResize(0, 24, 12, 16);
                        cz4.cardResize(0, 40, 16, 18);
                    }, 300);
                }
            });
            enquire.register('screen and (max-width:1023px) and (min-width:768px) ', {
                match: function match() {
                    setTimeout(function () {
                        // window.requestAnimationFrame(() => {
                        cz1.cardResize(0, 0, 7, 10);
                        cz2.cardResize(0, 10, 10, 12);
                        cz3.cardResize(0, 24, 14, 18);
                        cz4.cardResize(0, 40, 16, 18);
                    }, 300);
                }
            });
        }
    },
    gsEditMode: function gsEditMode() {
        var grid = $('.grid-stack').data('gridstack');

        var $grid = $('.grid-stack');

        function enableGrid() {
            window.requestAnimationFrame(function () {
                $('.app-content').addClass('app-content--widgets-movable');
                $('#widgets-edit').children('i').removeClass('icon--widgets-edit').addClass('icon--widgets-edit-alt');
                grid.enable();
                $grid.find('.grid-stack-item').each(function (index, el) {
                    grid.movable($(el), true);
                });
            });
            // $('.app-content--widgets-movable .grid-stack').draggable(); //active this
        }

        function disableGrid() {
            window.requestAnimationFrame(function () {
                if (grid !== undefined) {
                    grid.disable();
                    $('#widgets-edit').children('i').removeClass('icon--widgets-edit-alt').addClass('icon--widgets-edit');
                    $('.app-content').removeClass('app-content--widgets-movable');
                }
            });
        }

        // Disable on mobile & tabletss
        enquire.register('screen and (max-width:1200px)', {
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

        // remove Widgets
        $(document).on('click', '.remove-button', function () {
            var $el = $(this).closest('.grid-stack-item');

            APP.swal.init('skin1', 'typeInfo', {
                title: 'Are you sure?',
                text: 'Widget will be removed.'
            });

            $('.sweet-container').addClass('widget-remove');
            $('.sweet-container.widget-remove .sweet-confirm').on('click', function () {
                window.requestAnimationFrame(function () {
                    grid.removeWidget($el[0]);
                });
            });
            $('.sweet-container').removeClass('widget-remove');
        });
    },
    gsResize: function gsResize() {
        $.fn.cardResize = function (newX, newY, newWidth, newGsiHeightVal) {
            var grid = $('.grid-stack').data('gridstack');
            var gsi = this.closest('.grid-stack-item');
            var originalX = this.attr('data-gs-x');
            var originalY = this.attr('data-gs-y');
            var originalW = this.attr('data-gs-width');
            var originalH = this.attr('data-gs-height');

            function doTheResize() {
                if (typeof grid !== 'undefined') {
                    // console.log('update:', newX, newY, newWidth, newGsiHeightVal);
                    grid.update(gsi, newX, newY, newWidth, newGsiHeightVal);
                }
            }

            doTheResize();
        };
    },
    gsClientsListRWD: function gsClientsListRWD() {
        if (!$('.page-datatables').length) {
            return false;
        }
        var grid = $('.grid-stack').data('gridstack');
        var cardTable = $('.grid-stack').find('.tbl-c').closest('.card');
        enquire.register('screen and (min-width:1366px)', {
            match: function match() {
                cardTable.cardResize(0, 0, 24, 19);
            }
        });
    },
    refreshGridstack: function refreshGridstack() {
        $('.grid-stack-item').each(function (index, item) {
            var $desktop = $(item).data('desktop'),
                $tablet = $(item).data('tablet'),
                $mobile = $(item).data('mobile');

            if ($desktop !== undefined) {
                enquire.register('screen and (min-width:1366px)', {
                    match: function match() {
                        $(item).cardResize($desktop[0], $desktop[1], $desktop[2], $desktop[3]);
                        window.requestAnimationFrame(function () {
                            $(item).adjustCardHeight();
                        });
                    }
                });
            }
            if ($tablet !== undefined) {
                enquire.register('screen and (min-width:768px) and (max-width:1365px)', {
                    match: function match() {
                        $(item).cardResize($tablet[0], $tablet[1], $tablet[2], $tablet[3]);
                        window.requestAnimationFrame(function () {
                            $(item).adjustCardHeight();
                        });
                    }
                });
            }
            if ($mobile !== undefined) {
                enquire.register('screen and (max-width:768px)', {
                    match: function match() {
                        $(item).cardResize($mobile[0], $mobile[1], $mobile[2], $mobile[3]);
                        window.requestAnimationFrame(function () {
                            $(item).adjustCardHeight();
                        });
                    }
                });
            }
        });
    },
    rwdHelperDev: function rwdHelperDev() {

        __webpack_require__(683);
        var grid = $('.grid-stack').data('gridstack');
        $(document).bind('keydown', 'alt+q', function () {
            var serializedData = _underscore2.default.map($('.grid-stack > .grid-stack-item:visible'), function (el) {
                el = $(el);
                var node = el.data('_gridstack_node');
                return {
                    title: $(el).find('.card').attr('class'),
                    x: node.x,
                    y: node.y,
                    width: node.width,
                    height: node.height
                };
            }, this); // give it to me
        });
    }
};

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}.call(this));


/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*jslint browser: true*/
/*jslint jquery: true*/

/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * https://github.com/tzuryby/jquery.hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 */

/*
 * One small change is: now keys are passed by object { keys: '...' }
 * Might be useful, when you want to pass some other data to your handler
 */

(function (jQuery) {
  jQuery.hotkeys = {
    version: '0.2.0',

    specialKeys: {
      8: 'backspace',
      9: 'tab',
      10: 'return',
      13: 'return',
      16: 'shift',
      17: 'ctrl',
      18: 'alt',
      19: 'pause',
      20: 'capslock',
      27: 'esc',
      32: 'space',
      33: 'pageup',
      34: 'pagedown',
      35: 'end',
      36: 'home',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      45: 'insert',
      46: 'del',
      59: ';',
      61: '=',
      96: '0',
      97: '1',
      98: '2',
      99: '3',
      100: '4',
      101: '5',
      102: '6',
      103: '7',
      104: '8',
      105: '9',
      106: '*',
      107: '+',
      109: '-',
      110: '.',
      111: '/',
      112: 'f1',
      113: 'f2',
      114: 'f3',
      115: 'f4',
      116: 'f5',
      117: 'f6',
      118: 'f7',
      119: 'f8',
      120: 'f9',
      121: 'f10',
      122: 'f11',
      123: 'f12',
      144: 'numlock',
      145: 'scroll',
      173: '-',
      186: ';',
      187: '=',
      188: ',',
      189: '-',
      190: '.',
      191: '/',
      192: '`',
      219: '[',
      220: '\\',
      221: ']',
      222: "'"
    },

    shiftNums: {
      '`': '~',
      '1': '!',
      '2': '@',
      '3': '#',
      '4': '$',
      '5': '%',
      '6': '^',
      '7': '&',
      '8': '*',
      '9': '(',
      '0': ')',
      '-': '_',
      '=': '+',
      ';': ': ',
      "'": '"',
      ',': '<',
      '.': '>',
      '/': '?',
      '\\': '|'
    },

    // excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
    textAcceptingInputTypes: ['text', 'password', 'number', 'email', 'url', 'range', 'date', 'month', 'week', 'time', 'datetime', 'datetime-local', 'search', 'color', 'tel'],

    // default input types not to bind to unless bound directly
    textInputTypes: /textarea|input|select/i,

    options: {
      filterInputAcceptingElements: true,
      filterTextInputs: true,
      filterContentEditable: true
    }
  };

  function keyHandler(handleObj) {
    if (typeof handleObj.data === 'string') {
      handleObj.data = {
        keys: handleObj.data
      };
    }

    // Only care when a possible input has been specified
    if (!handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== 'string') {
      return;
    }

    var origHandler = handleObj.handler,
        keys = handleObj.data.keys.toLowerCase().split(' ');

    handleObj.handler = function (event) {
      //      Don't fire in text-accepting inputs that we didn't directly bind to
      if (this !== event.target && (jQuery.hotkeys.options.filterInputAcceptingElements && jQuery.hotkeys.textInputTypes.test(event.target.nodeName) || jQuery.hotkeys.options.filterContentEditable && jQuery(event.target).attr('contenteditable') || jQuery.hotkeys.options.filterTextInputs && jQuery.inArray(event.target.type, jQuery.hotkeys.textAcceptingInputTypes) > -1)) {
        return;
      }

      var special = event.type !== 'keypress' && jQuery.hotkeys.specialKeys[event.which],
          character = String.fromCharCode(event.which).toLowerCase(),
          modif = '',
          possible = {};

      jQuery.each(['alt', 'ctrl', 'shift'], function (index, specialKey) {
        if (event[specialKey + 'Key'] && special !== specialKey) {
          modif += specialKey + '+';
        }
      });

      // metaKey is triggered off ctrlKey erronously
      if (event.metaKey && !event.ctrlKey && special !== 'meta') {
        modif += 'meta+';
      }

      if (event.metaKey && special !== 'meta' && modif.indexOf('alt+ctrl+shift+') > -1) {
        modif = modif.replace('alt+ctrl+shift+', 'hyper+');
      }

      if (special) {
        possible[modif + special] = true;
      } else {
        possible[modif + character] = true;
        possible[modif + jQuery.hotkeys.shiftNums[character]] = true;

        // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
        if (modif === 'shift+') {
          possible[jQuery.hotkeys.shiftNums[character]] = true;
        }
      }

      for (var i = 0, l = keys.length; i < l; i++) {
        if (possible[keys[i]]) {
          return origHandler.apply(this, arguments);
        }
      }
    };
  }

  jQuery.each(['keydown', 'keyup', 'keypress'], function () {
    jQuery.event.special[this] = {
      add: keyHandler
    };
  });
})(jQuery || undefined.jQuery || window.jQuery);

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
 * @version    0.9.2
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 * 

*/

/* global enquire */

// COMPONENT NAME

exports.default = {
  init: function init() {
    var self = this;
    // this.onWindowLoad();
    // this.onDocReady();
    // $('.ui-resizable-handle').mouseup(function() {
    //   this.updateResizeGridstack($(this));
    // });
    // alert('asd');
    //   this.maksymSoFar();
    // this.letsDoThis();
  },


  // methods

  maksymSoFar: function maksymSoFar() {
    // setTimeout(function () {
    // 	$('.grid-stack-item').each(function () {
    // 		var width = $(this).attr('data-gs-width');
    // 		if (width <= 6) {
    // 			$(this).addClass('grid-size--xs'); //tablet ver - odyn pod drugik pod tretim
    // 			// deleteGridstackItemsIfSizeBig()
    // 		} else if (width <= 8) {
    // 			$(this).addClass('grid-size--sm'); // tablet hor - odyn pod drugim
    // 			// deleteGridstackItemsIfSizeBig()
    // 		} else if (width <= 10) {
    // 			$(this).addClass('grid-size--md'); // laptop - odyn pod drugim
    // 			// deleteGridstackItemsIfSizeBig()
    // 		} else if (width <= 12) {
    // 			$(this).addClass('grid-size--lg'); // desktop -  dwe kolonki
    // 			// deleteGridstackItemsIfSizeBig()
    // 		} else if (width <= 24) {
    // 			$(this).addClass('grid-size--xl');
    // 		}
    // 	});
    // 	console.log('gridstack add classes');
    // }, 1000);
    // function updateResizeGridstack(target) {
    // 	// console.log('checkGridstackSize work');
    // 	// console.log(target);
    // 	// console.log(target.closest('.grid-stack-item'));
    // 	target.closest('.grid-stack-item').removeClass('grid-size--xs');
    // 	target.closest('.grid-stack-item').removeClass('grid-size--sm');
    // 	target.closest('.grid-stack-item').removeClass('grid-size--md');
    // 	target.closest('.grid-stack-item').removeClass('grid-size--lg');
    // 	target.closest('.grid-stack-item').removeClass('grid-size--xl');
    // 	setTimeout(() => {
    // 		const width = target.closest('.grid-stack-item').attr('data-gs-width');
    // 		if (width <= 6) {
    // 			target.closest('.grid-stack-item').addClass('grid-size--xs'); //tablet ver - odyn pod drugik pod tretim
    // 			// deleteGridstackItemsIfSizeBig()
    // 		} else if (width <= 8) {
    // 			target.closest('.grid-stack-item').addClass('grid-size--sm'); // tablet hor - odyn pod drugim
    // 			// deleteGridstackItemsIfSizeBig()
    // 		} else if (width <= 10) {
    // 			target.closest('.grid-stack-item').addClass('grid-size--md'); // laptop - odyn pod drugim
    // 			// deleteGridstackItemsIfSizeBig()
    // 		} else if (width <= 12) {
    // 			target.closest('.grid-stack-item').addClass('grid-size--lg'); // desktop -  dwe kolonki
    // 			// deleteGridstackItemsIfSizeBig()
    // 		} else if (width <= 24) {
    // 			target.closest('.grid-stack-item').addClass('grid-size--xl');
    // 		}
    // 		console.log('gridstack rwd classupdate');
    // 	}, 100);
    // }
    // function checkDevices() {
    // 	enquire.register('screen and (max-width:767px) ', {
    // 		match: function () {
    // 			$('#app-wrapper').addClass('is-mobile');
    // 		},
    // 		unmatch: function () {
    // 			$('#app-wrapper').removeClass('is-mobile');
    // 		}
    // 	});
    // 	enquire.register('screen and (min-width:768px) and (max-width:1023px)', {
    // 		match: function () {
    // 			$('#app-wrapper').addClass('is-tablet-vertical');
    // 			changeGridstackFromDevices();
    // 		},
    // 		unmatch: function () {
    // 			$('#app-wrapper').removeClass('is-tablet-vertical');
    // 		}
    // 	});
    // 	enquire.register('screen and (min-width:1024px) and (max-width:1199px)', {
    // 		match: function () {
    // 			$('#app-wrapper').addClass('is-tablet-horizontal');
    // 			changeGridstackFromDevices();
    // 		},
    // 		unmatch: function () {
    // 			$('#app-wrapper').removeClass('is-tablet-horizontal');
    // 		}
    // 	});
    // 	enquire.register('screen and (min-width:1200px) and (max-width:1366px)', {
    // 		match: function () {
    // 			$('#app-wrapper').addClass('is-laptop');
    // 			changeGridstackFromDevices();
    // 		},
    // 		unmatch: function () {
    // 			$('#app-wrapper').removeClass('is-laptop');
    // 		}
    // 	});
    // 	enquire.register('screen and (min-width:1367px)', {
    // 		match: function () {
    // 			$('.grid-stack-item').each(function () {
    // 				var width = $(this).attr('data-gs-width');
    // 				if (width <= 8) {
    // 					$(this).find('.card').addClass('grid-size--tablet-xs');
    // 				} else if (width <= 12) {
    // 					$(this).find('.card').addClass('grid-size--tablet-sm');
    // 				} else if (width <= 20) {
    // 					$(this).find('.card').addClass('grid-size--tablet-md');
    // 				} else if (width <= 24) {
    // 					$(this).find('.card').addClass('grid-size--tablet-lg');
    // 				}
    // 			});
    // 			$('#app-wrapper').addClass('is-desktop');
    // 			changeGridstackFromDevices();
    // 		},
    // 		unmatch: function () {
    // 			$('#app-wrapper').removeClass('is-desktop');
    // 		}
    // 	});
    // }
    // function changeGridstackFromDevices() {
    // 	// not needed anymore.
    // 	// setTimeout(function() {
    // 	//   if ($('#app-wrapper').hasClass('is-desktop')) {
    // 	//     // console.log('THIS IS DESKTOP');
    // 	//     $('.grid-size--lg').attr('data-gs-width', '12');
    // 	//     $('.grid-size--md').attr('data-gs-width', '10');
    // 	//     $('.grid-size--sm').attr('data-gs-width', '8');
    // 	//     $('.grid-size--xs').attr('data-gs-width', '6');
    // 	//   } else if ($('#app-wrapper').hasClass('is-laptop')) {
    // 	//     // console.log('THIS IS LAPTOP');
    // 	//     $('.grid-size--md').attr('data-gs-width', '12');
    // 	//     $('.grid-size--sm').attr('data-gs-width', '10');
    // 	//     $('.grid-size--xs').attr('data-gs-width', '8');
    // 	//   } else if ($('#app-wrapper').hasClass('is-tablet-horizontal')) {
    // 	//     // console.log('THIS IS TABLET HOR');
    // 	//     $('.grid-size--sm').attr('data-gs-width', '12');
    // 	//     $('.grid-size--xs').attr('data-gs-width', '10');
    // 	//   } else if ($('#app-wrapper').hasClass('is-tablet-vertical')) {
    // 	//     // console.log('THIS IS TABLET VER');
    // 	//     $('.grid-size--xs').attr('data-gs-width', '12');
    // 	//   }
    // 	// }, 300);
    // }
    // function deleteGridstackItemsIfSizeBig() {
    // 	// console.log('delete grid');
    // 	if ($('#app-wrapper').hasClass('is-laptop')) {
    // 		$('.grid-size--lg').remove();
    // 	} else if ($('#app-wrapper').hasClass('is-tablet-horizontal')) {
    // 		$('.grid-size--lg').remove();
    // 		$('.grid-size--md').remove();
    // 	} else if ($('#app-wrapper').hasClass('is-tablet-vertical')) {
    // 		$('.grid-size--lg').remove();
    // 		$('.grid-size--md').remove();
    // 		$('.grid-size--sm').remove();
    // 	}
    // }
    // $('.ui-resizable-handle').mouseup(function () {
    // 	// WORK IF MOUSE ON(!) BTN. WAIT FOR RESIZE
    // 	updateResizeGridstack($(this));
    // });
    // // first start
    // checkDevices();
    // setTimeout(() => {
    // 	changeGridstackFromDevices();
    // }, 2000);
  },


  // Damian Refactor

  changeGridstackFromDevices: function changeGridstackFromDevices() {
    // console.log('test');
    // not needed anymore.
    // setTimeout(function() {
    //   if ($('#app-wrapper').hasClass('is-desktop')) {
    //     // console.log('THIS IS DESKTOP');
    //     $('.grid-size--lg').attr('data-gs-width', '12');
    //     $('.grid-size--md').attr('data-gs-width', '10');
    //     $('.grid-size--sm').attr('data-gs-width', '8');
    //     $('.grid-size--xs').attr('data-gs-width', '6');
    //   } else if ($('#app-wrapper').hasClass('is-laptop')) {
    //     // console.log('THIS IS LAPTOP');
    //     $('.grid-size--md').attr('data-gs-width', '12');
    //     $('.grid-size--sm').attr('data-gs-width', '10');
    //     $('.grid-size--xs').attr('data-gs-width', '8');
    //   } else if ($('#app-wrapper').hasClass('is-tablet-horizontal')) {
    //     // console.log('THIS IS TABLET HOR');
    //     $('.grid-size--sm').attr('data-gs-width', '12');
    //     $('.grid-size--xs').attr('data-gs-width', '10');
    //   } else if ($('#app-wrapper').hasClass('is-tablet-vertical')) {
    //     // console.log('THIS IS TABLET VER');
    //     $('.grid-size--xs').attr('data-gs-width', '12');
    //   }
    // }, 300);
  },
  updateResizeGridstack: function updateResizeGridstack() {
    // console.log('checkGridstackSize work');
    // console.log(target);
    // console.log(target.closest('.grid-stack-item'));
    target.closest('.grid-stack-item').removeClass('grid-size--xs');
    target.closest('.grid-stack-item').removeClass('grid-size--sm');
    target.closest('.grid-stack-item').removeClass('grid-size--md');
    target.closest('.grid-stack-item').removeClass('grid-size--lg');
    target.closest('.grid-stack-item').removeClass('grid-size--xl');

    window.requestAnimationFrame(function () {
      var width = target.closest('.grid-stack-item').attr('data-gs-width');
      if (width <= 6) {
        target.closest('.grid-stack-item').addClass('grid-size--xs'); //tablet ver - odyn pod drugik pod tretim
        // deleteGridstackItemsIfSizeBig()
      } else if (width <= 8) {
        target.closest('.grid-stack-item').addClass('grid-size--sm'); // tablet hor - odyn pod drugim
        // deleteGridstackItemsIfSizeBig()
      } else if (width <= 10) {
        target.closest('.grid-stack-item').addClass('grid-size--md'); // laptop - odyn pod drugim
        // deleteGridstackItemsIfSizeBig()
      } else if (width <= 12) {
        target.closest('.grid-stack-item').addClass('grid-size--lg'); // desktop -  dwe kolonki
        // deleteGridstackItemsIfSizeBig()
      } else if (width <= 24) {
        target.closest('.grid-stack-item').addClass('grid-size--xl');
      }

      console.log('gridstack rwd classupdate');
    });
  },
  deleteGridstackItemsIfSizeBig: function deleteGridstackItemsIfSizeBig() {
    // console.log('delete grid');

    if ($('#app-wrapper').hasClass('is-laptop')) {
      $('.grid-size--lg').remove();
    } else if ($('#app-wrapper').hasClass('is-tablet-horizontal')) {
      $('.grid-size--lg').remove();
      $('.grid-size--md').remove();
    } else if ($('#app-wrapper').hasClass('is-tablet-vertical')) {
      $('.grid-size--lg').remove();
      $('.grid-size--md').remove();
      $('.grid-size--sm').remove();
    }
  },
  checkDevices: function checkDevices() {
    var self = this;
    enquire.register('screen and (max-width:767px) ', {
      match: function match() {
        $('#app-wrapper').addClass('is-mobile');
      },
      unmatch: function unmatch() {
        $('#app-wrapper').removeClass('is-mobile');
      }
    });
    enquire.register('screen and (min-width:768px) and (max-width:1023px)', {
      match: function match() {
        $('#app-wrapper').addClass('is-tablet-vertical');
        // changeGridstackFromDevices();
      },
      unmatch: function unmatch() {
        $('#app-wrapper').removeClass('is-tablet-vertical');
      }
    });
    enquire.register('screen and (min-width:1024px) and (max-width:1199px)', {
      match: function match() {
        $('#app-wrapper').addClass('is-tablet-horizontal');
        // changeGridstackFromDevices();
      },
      unmatch: function unmatch() {
        $('#app-wrapper').removeClass('is-tablet-horizontal');
      }
    });
    enquire.register('screen and (min-width:1200px) and (max-width:1366px)', {
      match: function match() {
        $('#app-wrapper').addClass('is-laptop');
        // changeGridstackFromDevices();
      },
      unmatch: function unmatch() {
        $('#app-wrapper').removeClass('is-laptop');
      }
    });
    enquire.register('screen and (min-width:1367px)', {
      match: function match() {
        $('.grid-stack-item').each(function () {
          var width = $(this).attr('data-gs-width');
          if (width <= 8) {
            $(this).find('.card').addClass('grid-size--tablet-xs');
          } else if (width <= 12) {
            $(this).find('.card').addClass('grid-size--tablet-sm');
          } else if (width <= 20) {
            $(this).find('.card').addClass('grid-size--tablet-md');
          } else if (width <= 24) {
            $(this).find('.card').addClass('grid-size--tablet-lg');
          }
        });
        $('#app-wrapper').addClass('is-desktop');
        self.changeGridstackFromDevices();
      },

      unmatch: function unmatch() {
        $('#app-wrapper').removeClass('is-desktop');
      }
    });
  },
  onDocReady: function onDocReady() {
    var self = this;
    this.checkDevices();
    window.requestAnimationFrame(function () {
      self.changeGridstackFromDevices();
    });
  },
  onWindowLoad: function onWindowLoad() {
    $(window).on('load', function () {
      window.requestAnimationFrame(function () {
        $('.grid-stack-item').each(function () {
          var width = $(this).attr('data-gs-width');
          if (width <= 6) {
            $(this).addClass('grid-size--xs'); //tablet ver - odyn pod drugik pod tretim
            // deleteGridstackItemsIfSizeBig()
          } else if (width <= 8) {
            $(this).addClass('grid-size--sm'); // tablet hor - odyn pod drugim
            // deleteGridstackItemsIfSizeBig()
          } else if (width <= 10) {
            $(this).addClass('grid-size--md'); // laptop - odyn pod drugim
            // deleteGridstackItemsIfSizeBig()
          } else if (width <= 12) {
            $(this).addClass('grid-size--lg'); // desktop -  dwe kolonki
            // deleteGridstackItemsIfSizeBig()
          } else if (width <= 24) {
            $(this).addClass('grid-size--xl');
          }
        });

        // console.log('gridstack add classes');
      });
    });
  }
};

/***/ }),

/***/ 72:
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

/***/ 73:
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

/***/ 74:
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

/***/ 75:
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

/***/ 76:
/***/ (function(module, exports) {

module.exports = function(s) {
  s = (s === undefined) ? "" : s;
  s = (s === null) ? "" : s;
  s = s.toString();
  return s;
};


/***/ }),

/***/ 77:
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


/***/ })

/******/ });