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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

  'use strict';

  function MobileDevEnvironment() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    // Default options
    options = {
      group: typeof options.group !== 'undefined' ? options.group : 'global',
      reload: typeof options.reload !== 'undefined' ? options.reload : true,
      hardReload: typeof options.hardReload !== 'undefined' ? options.hardReload : true,
      logtray: typeof options.logtray !== 'undefined' ? options.logtray : true,
      logErrors: typeof options.logErrors !== 'undefined' ? options.logErrors : true
    };

    // Import modules and tools
    var reloadButton = __webpack_require__(3);
    var logtray = __webpack_require__(4);
    var DB = __webpack_require__(5);
    DB = new DB(options.group);

    // Run modules
    if (options.reload === true) new reloadButton(options);
    if (options.logtray === true) new logtray(options, DB);
  }

  // Attach MDE to window
  window.MobileDevEnvironment = MobileDevEnvironment;

  // Export mde to node
  if (( false ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = MobileDevEnvironment;
  }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var helpers = function () {
  function helpers() {
    _classCallCheck(this, helpers);
  }

  _createClass(helpers, [{
    key: 'fetch',
    value: function fetch(query) {
      return document.querySelector('#mde-' + query);
    }
  }, {
    key: 'query',
    value: function query(elem, _query) {
      return elem.querySelector(_query);
    }
  }, {
    key: 'insert',
    value: function insert(html, elem) {
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'beforeend';

      return elem.insertAdjacentHTML(position, html);
    }
  }, {
    key: 'containsClass',
    value: function containsClass(elem, cls) {
      return elem.classList.contains(cls);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(elem, cls, assert) {
      return elem.classList.toggle(cls, assert);
    }
  }, {
    key: 'getType',
    value: function getType(obj) {
      var type = {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      return Number.isNaN(obj) ? 'NaN' : type;
    }
  }, {
    key: 'toString',
    value: function toString(obj, type) {
      switch (type) {
        case 'string':
          return obj;
        case 'undefined':
          return 'undefined';
        case 'NaN':
          return 'NaN';
        default:
          return JSON.stringify(obj);
      }
    }
  }, {
    key: 'touches',
    value: function touches(e) {
      return e.changedTouches;
    }
  }, {
    key: 'getDragDistance',
    value: function getDragDistance(dragStart, dragEnd) {
      return {
        x: dragStart.pageX - dragEnd.pageX,
        y: dragStart.pageY - dragEnd.pageY
      };
    }
  }, {
    key: 'returnInRange',
    value: function returnInRange(num, min, max) {
      num = num > max ? max : num;
      return num < min ? min : num;
    }
  }, {
    key: 'scrollInfo',
    value: function scrollInfo(elem) {
      var scrollTop = elem.scrollTop,
          scrollHeight = elem.scrollHeight,
          clientHeight = elem.clientHeight;

      return {
        top: scrollTop,
        bottom: scrollTop + clientHeight,
        height: clientHeight,
        atTop: scrollTop === 0,
        atBottom: scrollHeight - scrollTop <= clientHeight + 1,
        fullHeight: scrollHeight
      };
    }
  }, {
    key: 'returnTraceFromError',
    value: function returnTraceFromError(error) {
      // get relevant trace parts
      var bits = error.stack.split(":").slice(4, 9);
      // clear redundant chars at start and end
      var first = bits[0];
      bits[0] = first.substring(first.indexOf('(') + 1, first.length);
      var last = bits[bits.length - 1];
      bits[bits.length - 1] = last.substring(0, last.indexOf(')'));
      // compile
      var fileName = bits[2].replace(/^.*[\\\/]/, '');
      return {
        fileName: fileName.length > 0 ? fileName : 'N/A',
        filePath: fileName.length > 0 ? bits[0] + ':' + bits[1] + ':' + bits[2] : '',
        lineNumber: bits[3]
      };
    }
  }]);

  return helpers;
}();

var reload = function (_helpers) {
  _inherits(reload, _helpers);

  function reload(options) {
    _classCallCheck(this, reload);

    var _this = _possibleConstructorReturn(this, (reload.__proto__ || Object.getPrototypeOf(reload)).call(this));

    var insert = _this.insert,
        fetch = _this.fetch;
    var hardReload = options.hardReload;


    insert('<button id="mde-reload" class="mde"></button>', document.body);
    fetch('reload').addEventListener('click', function (e) {
      location.reload(hardReload);
    }, false);
    return _this;
  }

  return reload;
}(helpers);

module.exports = reload;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var helpers = function () {
  function helpers() {
    _classCallCheck(this, helpers);
  }

  _createClass(helpers, [{
    key: 'fetch',
    value: function fetch(query) {
      return document.querySelector('#mde-' + query);
    }
  }, {
    key: 'query',
    value: function query(elem, _query) {
      return elem.querySelector(_query);
    }
  }, {
    key: 'insert',
    value: function insert(html, elem) {
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'beforeend';

      return elem.insertAdjacentHTML(position, html);
    }
  }, {
    key: 'containsClass',
    value: function containsClass(elem, cls) {
      return elem.classList.contains(cls);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(elem, cls, assert) {
      return elem.classList.toggle(cls, assert);
    }
  }, {
    key: 'getType',
    value: function getType(obj) {
      var type = {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      return Number.isNaN(obj) ? 'NaN' : type;
    }
  }, {
    key: 'toString',
    value: function toString(obj, type) {
      switch (type) {
        case 'string':
          return obj;
        case 'undefined':
          return 'undefined';
        case 'NaN':
          return 'NaN';
        default:
          return JSON.stringify(obj);
      }
    }
  }, {
    key: 'touches',
    value: function touches(e) {
      return e.changedTouches;
    }
  }, {
    key: 'getDragDistance',
    value: function getDragDistance(dragStart, dragEnd) {
      return {
        x: dragStart.pageX - dragEnd.pageX,
        y: dragStart.pageY - dragEnd.pageY
      };
    }
  }, {
    key: 'returnInRange',
    value: function returnInRange(num, min, max) {
      num = num > max ? max : num;
      return num < min ? min : num;
    }
  }, {
    key: 'scrollInfo',
    value: function scrollInfo(elem) {
      var scrollTop = elem.scrollTop,
          scrollHeight = elem.scrollHeight,
          clientHeight = elem.clientHeight;

      return {
        top: scrollTop,
        bottom: scrollTop + clientHeight,
        height: clientHeight,
        atTop: scrollTop === 0,
        atBottom: scrollHeight - scrollTop <= clientHeight + 1,
        fullHeight: scrollHeight
      };
    }
  }, {
    key: 'returnTraceFromError',
    value: function returnTraceFromError(error) {
      // get relevant trace parts
      var bits = error.stack.split(":").slice(4, 9);
      // clear redundant chars at start and end
      var first = bits[0];
      bits[0] = first.substring(first.indexOf('(') + 1, first.length);
      var last = bits[bits.length - 1];
      bits[bits.length - 1] = last.substring(0, last.indexOf(')'));
      // compile
      var fileName = bits[2].replace(/^.*[\\\/]/, '');
      return {
        fileName: fileName.length > 0 ? fileName : 'N/A',
        filePath: fileName.length > 0 ? bits[0] + ':' + bits[1] + ':' + bits[2] : '',
        lineNumber: bits[3]
      };
    }
  }]);

  return helpers;
}();

var logtray = function (_helpers) {
  _inherits(logtray, _helpers);

  function logtray(options, DB) {
    _classCallCheck(this, logtray);

    var _this = _possibleConstructorReturn(this, (logtray.__proto__ || Object.getPrototypeOf(logtray)).call(this));

    _this.options = options;
    _this.DB = DB;

    // Setup variables if not setup already
    DB.set('logtrayOpen', DB.get('logtrayOpen') || false);
    DB.set('logtrayHeight', DB.get('logtrayHeight') || window.innerHeight * 0.25);

    _this.buildlogtrayButton();
    _this.buildlogtray();

    window.console.log = function (message) {
      var trace = _this.returnTraceFromError(new Error());
      _this.log(message, trace);
    };

    if (options.logErrors === true) {
      window.onerror = function (message, filePath, lineNumber) {
        var fileName = filePath.replace(/^.*[\\\/]/, '');
        _this.log(message, { fileName: fileName, filePath: filePath, lineNumber: lineNumber, isError: true });
      };
    }
    return _this;
  }

  _createClass(logtray, [{
    key: 'buildlogtrayButton',
    value: function buildlogtrayButton() {
      var _this2 = this;

      var state = this.state,
          insert = this.insert,
          fetch = this.fetch;

      insert('<button id="mde-open-logtray" class="mde ' + state + '"></button>', document.body);
      fetch('open-logtray').addEventListener('click', function (e) {
        _this2.open();
      }, false);
    }
  }, {
    key: 'buildlogtray',
    value: function buildlogtray() {
      var _this3 = this;

      var state = this.state,
          height = this.height,
          insert = this.insert,
          fetch = this.fetch,
          drag = this.drag;


      insert('<div id="mde-logtray" class="mde ' + state + '">\n          <button id="mde-resize-logtray" class="mde">\xB7\xB7\xB7</button>\n          <button id="mde-close-logtray" class="mde">\u2014</button>\n          <div id="mde-logs"></div>\n        </div>', document.body);

      this.setHeight(height);

      var closeButton = fetch('close-logtray');
      var resizeButton = fetch('resize-logtray');

      window.addEventListener('resize', function (e) {
        _this3.setHeight(_this3.height);
      }, false);
      closeButton.addEventListener('click', function (e) {
        _this3.close();
      }, false);
      resizeButton.addEventListener('touchstart', function (e) {
        resizeButton.classList.add('pressed');
        _this3.resize(e);
        e.preventDefault();
      }, false);
      resizeButton.addEventListener('touchend', function (e) {
        resizeButton.classList.remove('pressed');
      }, false);
    }

    // constants

  }, {
    key: 'setHeight',


    // modify global

    value: function setHeight(height) {
      var fetch = this.fetch,
          minHeight = this.minHeight,
          maxHeight = this.maxHeight,
          returnInRange = this.returnInRange,
          options = this.options;

      height = returnInRange(height, minHeight, maxHeight);
      this.DB.set('logtrayHeight', height);
      fetch('logtray').style.height = height + 'px';
    }

    // actions

  }, {
    key: 'open',
    value: function open() {
      var fetch = this.fetch,
          options = this.options;

      this.DB.set('logtrayOpen', true);
      fetch('open-logtray').classList = true;
      fetch('logtray').classList = true;
    }
  }, {
    key: 'close',
    value: function close() {
      var fetch = this.fetch,
          options = this.options;

      this.DB.set('logtrayOpen', false);
      fetch('open-logtray').classList = false;
      fetch('logtray').classList = false;
    }
  }, {
    key: 'resize',
    value: function resize(e) {
      var _this4 = this;

      var height = this.height,
          fetch = this.fetch,
          touches = this.touches,
          scrollInfo = this.scrollInfo,
          getDragDistance = this.getDragDistance;


      var startHeight = height;
      var startTouch = touches(e)[0];
      var startScroll = scrollInfo(fetch('logs'));

      var onMove = function onMove(e) {
        var distance = getDragDistance(startTouch, touches(e)[0]);
        var newHeight = startHeight + distance.y;
        _this4.setHeight(newHeight);

        if (startScroll.atBottom && distance.y < startScroll.top) {
          fetch('logs').scrollTop = fetch('logs').scrollHeight;
        }
      };

      var onEnd = function onEnd(e) {
        resizeButton.removeEventListener('touchmove', onMove, false);
        resizeButton.removeEventListener('touchend', onEnd, false);
      };

      var resizeButton = fetch('resize-logtray');
      resizeButton.addEventListener('touchmove', onMove, false);
      resizeButton.addEventListener('touchend', onEnd, false);
    }
  }, {
    key: 'log',
    value: function log(message, trace) {
      var filePath = trace.filePath,
          fileName = trace.fileName,
          lineNumber = trace.lineNumber,
          isError = trace.isError;
      var scrollInfo = this.scrollInfo,
          fetch = this.fetch,
          insert = this.insert,
          getType = this.getType,
          toString = this.toString,
          query = this.query,
          containsClass = this.containsClass,
          toggleClass = this.toggleClass;


      var initialScroll = scrollInfo(fetch('logs'));

      var logs = fetch('logs');
      var lastLog = logs.lastChild || false;
      var lastMessage = lastLog ? query(lastLog, '.message').innerText : false;

      var id = 'log-' + logs.children.length;
      var type = isError ? 'error' : getType(message);
      message = toString(message, type);

      if (message !== lastMessage) {
        insert('<div id="mde-' + id + '" class="log ' + type + '">' + '<div class="preview">' + '<div class="stack"></div>' + '<a class="trace" href="' + filePath + '" target="_blank">' + fileName + ':' + lineNumber + '</a>' + '<div class="message"></div>' + '</div>' + '<div class="full"></div>' + '</div>', logs);

        var submitted = this.fetch(id);

        query(submitted, '.preview .message').innerText = message;
        query(submitted, '.full').innerText = message;

        query(submitted, '.preview').addEventListener('click', function (e) {
          if (!containsClass(e.target, 'trace')) {
            var clickedLog = e.target.closest('.log');
            toggleClass(clickedLog, 'expand');
          }
        });
      } else {
        var stackSize = parseInt(query(lastLog, '.stack').innerText) || 1;
        query(lastLog, '.stack').innerText = stackSize + 1;
      }

      if (initialScroll.atBottom) {
        logs.scrollTop = logs.scrollHeight;
      }
    }
  }, {
    key: 'state',
    get: function get() {
      var options = this.options;

      return this.DB.get('logtrayOpen');
    }
  }, {
    key: 'height',
    get: function get() {
      var options = this.options;

      return this.DB.get('logtrayHeight');
    }
  }, {
    key: 'minHeight',
    get: function get() {
      return this.fetch('resize-logtray').offsetHeight;
    }
  }, {
    key: 'maxHeight',
    get: function get() {
      var fetch = this.fetch,
          options = this.options;

      return window.innerHeight - (options.reload ? fetch('reload').offsetHeight + 20 : 10);
    }
  }]);

  return logtray;
}(helpers);

module.exports = logtray;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function DB() {
    var _this = this;

    var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

    // share state information with other instances of mde
    // for seamless use across multiple client pages
    this._group = group;

    // prepare key: {mde-group-key}
    this._getKey = function (key) {
        return 'mde-' + _this._group + '-' + key;
    };

    // retrieve data
    this.get = function (key) {
        var result = localStorage[this._getKey(key)];
        return typeof result !== 'undefined' ? JSON.parse(result) : null;
    };

    // set data
    this.set = function (key, value) {
        return localStorage[this._getKey(key)] = JSON.stringify(value);
    };
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=mde.js.map