(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dyna-ui-styles"), require("react"), require("dyna-guid"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-ui-picker-container", ["dyna-ui-styles", "react", "dyna-guid"], factory);
	else if(typeof exports === 'object')
		exports["dyna-ui-picker-container"] = factory(require("dyna-ui-styles"), require("react"), require("dyna-guid"));
	else
		root["dyna-ui-picker-container"] = factory(root["dyna-ui-styles"], root["react"], root["dyna-guid"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_dyna_ui_styles__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_dyna_guid__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/color.less":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/less-loader/dist/cjs.js!./src/color.less ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dyna-ui-picker-container--color-WHITE_BLACK {\n  color: black;\n  border-color: black;\n  background-color: white;\n}\n.dyna-ui-picker-container--color-WHITE_BLACK:before {\n  border-bottom-color: black;\n}\n.dyna-ui-picker-container--color-WHITE_BLACK:after {\n  border-bottom-color: white;\n}\n.dyna-ui-picker-container--color-GREY_WHITE {\n  color: #434343;\n  border-color: #434343;\n  background-color: white;\n}\n.dyna-ui-picker-container--color-GREY_WHITE:before {\n  border-bottom-color: #434343;\n}\n.dyna-ui-picker-container--color-GREY_WHITE:after {\n  border-bottom-color: white;\n}\n.dyna-ui-picker-container--color-WHITE_RED {\n  color: red;\n  border-color: red;\n  background-color: white;\n}\n.dyna-ui-picker-container--color-WHITE_RED:before {\n  border-bottom-color: red;\n}\n.dyna-ui-picker-container--color-WHITE_RED:after {\n  border-bottom-color: white;\n}\n.dyna-ui-picker-container--color-BLACK_WHITE {\n  color: white;\n  border-color: black;\n  background-color: black;\n}\n.dyna-ui-picker-container--color-BLACK_WHITE:before {\n  border-bottom-color: black;\n}\n.dyna-ui-picker-container--color-BLACK_WHITE:after {\n  border-bottom-color: black;\n}\n.dyna-ui-picker-container--color-TRANSPARENT_WHITE {\n  color: white;\n  border-color: white;\n  background-color: transparent;\n}\n.dyna-ui-picker-container--color-TRANSPARENT_WHITE:before {\n  border-bottom-color: white;\n}\n.dyna-ui-picker-container--color-TRANSPARENT_WHITE:after {\n  border-bottom-color: white;\n}\n.dyna-ui-picker-container--color-WHITE_ORANGE {\n  color: #FF6900;\n  border-color: #FF6900;\n  background-color: #D9D9D6;\n}\n.dyna-ui-picker-container--color-WHITE_ORANGE:before {\n  border-bottom-color: #FF6900;\n}\n.dyna-ui-picker-container--color-WHITE_ORANGE:after {\n  border-bottom-color: #D9D9D6;\n}\n.dyna-ui-picker-container--color-ORANGE_WHITE {\n  color: #D9D9D6;\n  border-color: #D9D9D6;\n  background-color: #FF6900;\n}\n.dyna-ui-picker-container--color-ORANGE_WHITE:before {\n  border-bottom-color: #D9D9D6;\n}\n.dyna-ui-picker-container--color-ORANGE_WHITE:after {\n  border-bottom-color: #FF6900;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/style.less":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/less-loader/dist/cjs.js!./src/style.less ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dyna-ui-picker-container {\n  cursor: default;\n}\n.dyna-ui-picker-container__wrapper {\n  position: relative;\n}\n.dyna-ui-picker-container--style-INLINE_ROUNDED {\n  position: absolute;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 10px;\n  margin-top: 12px;\n}\n.dyna-ui-picker-container--style-INLINE_ROUNDED:before,\n.dyna-ui-picker-container--style-INLINE_ROUNDED:after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  top: -30px;\n  border-color: transparent transparent deeppink transparent;\n  border-width: 15px;\n}\n.dyna-ui-picker-container--style-INLINE_ROUNDED:after {\n  top: -28px;\n  border-width: 14px;\n}\n@media (max-width: 768px) {\n  .dyna-ui-picker-container--style-INLINE_ROUNDED.dyna-ui-picker-container--responsive {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border: none;\n    margin: 0;\n    border-radius: 0;\n  }\n}\n.dyna-ui-picker-container--show {\n  display: block;\n}\n.dyna-ui-picker-container--hide {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = _interopDefault(__webpack_require__(/*! react */ "react"));

function AppContainer(e) {
  return AppContainer.warnAboutHMRDisabled && (AppContainer.warnAboutHMRDisabled = !0, console.error("React-Hot-Loader: misconfiguration detected, using production version in not production environment."), console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")), React.Children.only(e.children);
}

AppContainer.warnAboutHMRDisabled = !1;

var hot = function e() {
  return e.shouldWrapWithAppContainer ? function (e) {
    return function (n) {
      return React.createElement(AppContainer, null, React.createElement(e, n));
    };
  } : function (e) {
    return e;
  };
};

hot.shouldWrapWithAppContainer = !1;

var areComponentsEqual = function (e, n) {
  return e === n;
},
    setConfig = function () {},
    cold = function (e) {
  return e;
},
    configureComponent = function () {};

exports.AppContainer = AppContainer, exports.hot = hot, exports.areComponentsEqual = areComponentsEqual, exports.setConfig = setConfig, exports.cold = cold, exports.configureComponent = configureComponent;

/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else if (false) {} else if (typeof window === 'undefined') {
  // this is just server environment
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else if (true) {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
  module.exports.AppContainer.warnAboutHMRDisabled = true;
  module.exports.hot.shouldWrapWithAppContainer = true;
} else { var jsFeaturesPresent, evalAllowed; }

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/DynaPickerContainer.tsx":
/*!*************************************!*\
  !*** ./src/DynaPickerContainer.tsx ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "react");

var dyna_guid_1 = __webpack_require__(/*! dyna-guid */ "dyna-guid");

var dyna_ui_styles_1 = __webpack_require__(/*! dyna-ui-styles */ "dyna-ui-styles");

exports.EColor = dyna_ui_styles_1.EColor;

__webpack_require__(/*! ./style.less */ "./src/style.less");

__webpack_require__(/*! ./color.less */ "./src/color.less");

var EStyle;

(function (EStyle) {
  EStyle["ROUNDED"] = "INLINE_ROUNDED";
})(EStyle = exports.EStyle || (exports.EStyle = {}));

var EPointerPosition;

(function (EPointerPosition) {
  EPointerPosition["LEFT"] = "LEFT";
  EPointerPosition["MIDDLE"] = "MIDDLE";
  EPointerPosition["RIGHT"] = "RIGHT";
})(EPointerPosition = exports.EPointerPosition || (exports.EPointerPosition = {}));

var SIZE_OF_POINTER = 16;
var EDGE_GAP = 8;
var MIN_POINTER_GAP = 32; // from the picker

var DynaPickerContainer =
/** @class */
function (_super) {
  __extends(DynaPickerContainer, _super);

  function DynaPickerContainer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.id = "id--" + dyna_guid_1.guid();
    _this.containerRef = React.createRef();
    _this.innerStyleRef = React.createRef();

    _this.updatePosition = function () {
      var pointerPosition = _this.getPointerPosition();

      if (pointerPosition === -1) return; // Exit. The ui is not ready or there is no need to locate.

      console.debug('pointer position', pointerPosition);

      _this.locatePicker(pointerPosition);

      _this.locatePointer(pointerPosition);
    };

    _this.getPointerPosition = function () {
      var _a = _this.props,
          show = _a.show,
          pointerPosition = _a.pointerPosition;
      if (!show) return -1;
      var pickerContainer = _this.containerRef.current;
      if (!pickerContainer) return -1;
      var content = pickerContainer.parentElement;
      var contentBCR = content.getBoundingClientRect();
      var contentLeft = contentBCR.left;
      var contentWidth = contentBCR.width;

      switch (pointerPosition) {
        case EPointerPosition.LEFT:
          return contentLeft + MIN_POINTER_GAP + EDGE_GAP;

        case EPointerPosition.RIGHT:
          return contentLeft + (contentWidth - MIN_POINTER_GAP - EDGE_GAP - EDGE_GAP);

        case EPointerPosition.MIDDLE:
        default:
          return contentLeft + contentWidth / 2;
      }
    };

    return _this;
  }

  DynaPickerContainer.prototype.componentDidMount = function () {
    this.updatePosition();
    window.addEventListener("resize", this.updatePosition);
  };

  DynaPickerContainer.prototype.componentWillUnmount = function () {
    window.removeEventListener("resize", this.updatePosition);
  };

  DynaPickerContainer.prototype.componentDidUpdate = function () {
    this.updatePosition();
  };

  DynaPickerContainer.prototype.locatePointer = function (pointerPosition) {
    var show = this.props.show;
    if (!show) return;
    var pickerContainer = this.containerRef.current;
    if (!pickerContainer) return;
    var pickerBCR = pickerContainer.getBoundingClientRect();
    var pickerLeft = pickerBCR.left;
    var localLeft = pointerPosition - pickerLeft - SIZE_OF_POINTER / 2;
    var css = "\n      ." + this.id + "::before{ left: " + localLeft + "px; }\n      ." + this.id + "::after{ left: " + (localLeft + 1) + "px; }\n    ";
    if (this.innerStyleRef.current) this.innerStyleRef.current.innerHTML = css;
  };

  DynaPickerContainer.prototype.locatePicker = function (pointerPosition) {
    var show = this.props.show;
    if (!show) return;
    var pickerContainer = this.containerRef.current;
    if (!pickerContainer) return;
    var windowWidth = window.innerWidth;
    var pickerWidth = pickerContainer.offsetWidth;
    var content = pickerContainer.parentElement;
    var contentBCR = content.getBoundingClientRect();
    var contentLeft = contentBCR.left;
    var pickerLeft = pointerPosition - pickerWidth / 2;
    if (pickerLeft + pickerWidth > windowWidth - EDGE_GAP) pickerLeft = windowWidth - pickerWidth - EDGE_GAP;
    if (pointerPosition - pickerLeft < MIN_POINTER_GAP) pickerLeft = pointerPosition - MIN_POINTER_GAP;
    if (pickerLeft < EDGE_GAP) pickerLeft = EDGE_GAP;
    pickerLeft -= contentLeft;
    pickerContainer.style.left = pickerLeft + "px";
  };

  DynaPickerContainer.prototype.render = function () {
    var _a = this.props,
        show = _a.show,
        children = _a.children,
        style = _a.style,
        color = _a.color,
        responsive = _a.responsive;
    var classNameWrapper = ['dyna-ui-picker-container__wrapper', this.id].filter(Boolean).join(' ');
    var classNameContainer = ['dyna-ui-picker-container', "dyna-ui-picker-container--style-" + style, "dyna-ui-picker-container--color-" + color, "dyna-ui-picker-container--" + (show ? 'show' : 'hide'), "dyna-ui-picker-container--" + (responsive ? 'responsive' : ''), this.id].filter(Boolean).join(' ');
    return React.createElement("div", {
      className: classNameWrapper
    }, React.createElement("style", {
      ref: this.innerStyleRef
    }), React.createElement("div", {
      className: classNameContainer,
      ref: this.containerRef
    }, children));
  };

  DynaPickerContainer.defaultProps = {
    show: true,
    style: EStyle.ROUNDED,
    color: dyna_ui_styles_1.EColor.WHITE_BLACK,
    pointerPosition: EPointerPosition.MIDDLE,
    responsive: true
  };
  return DynaPickerContainer;
}(React.Component);

exports.DynaPickerContainer = DynaPickerContainer;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__extends, "__extends", "/Users/dennis/dev/dyna/dyna-ui-picker-container/src/DynaPickerContainer.tsx");
  reactHotLoader.register(EStyle, "EStyle", "/Users/dennis/dev/dyna/dyna-ui-picker-container/src/DynaPickerContainer.tsx");
  reactHotLoader.register(EPointerPosition, "EPointerPosition", "/Users/dennis/dev/dyna/dyna-ui-picker-container/src/DynaPickerContainer.tsx");
  reactHotLoader.register(SIZE_OF_POINTER, "SIZE_OF_POINTER", "/Users/dennis/dev/dyna/dyna-ui-picker-container/src/DynaPickerContainer.tsx");
  reactHotLoader.register(EDGE_GAP, "EDGE_GAP", "/Users/dennis/dev/dyna/dyna-ui-picker-container/src/DynaPickerContainer.tsx");
  reactHotLoader.register(MIN_POINTER_GAP, "MIN_POINTER_GAP", "/Users/dennis/dev/dyna/dyna-ui-picker-container/src/DynaPickerContainer.tsx");
  reactHotLoader.register(DynaPickerContainer, "DynaPickerContainer", "/Users/dennis/dev/dyna/dyna-ui-picker-container/src/DynaPickerContainer.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/color.less":
/*!************************!*\
  !*** ./src/color.less ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/postcss-loader/lib??ref--8-2!../node_modules/less-loader/dist/cjs.js!./color.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/color.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var DynaPickerContainer_1 = __webpack_require__(/*! ./DynaPickerContainer */ "./src/DynaPickerContainer.tsx");

exports.DynaPickerContainer = DynaPickerContainer_1.DynaPickerContainer;
exports.EStyle = DynaPickerContainer_1.EStyle;
exports.EColor = DynaPickerContainer_1.EColor;
exports.EPointerPosition = DynaPickerContainer_1.EPointerPosition;

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/postcss-loader/lib??ref--8-2!../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/style.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dennis/dev/dyna/dyna-ui-picker-container/src/index.tsx */"./src/index.tsx");


/***/ }),

/***/ "dyna-guid":
/*!****************************!*\
  !*** external "dyna-guid" ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dyna_guid__;

/***/ }),

/***/ "dyna-ui-styles":
/*!*********************************!*\
  !*** external "dyna-ui-styles" ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dyna_ui_styles__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map