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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function drawViz(data) {\n\n  // Set margins + canvas size\n  const padding = { top: 5, bottom: 5 };\n  let height = dscc.getHeight();\n  let width = dscc.getWidth();\n\n  // Remove the vis if it already exists so a new one isn't created on top of the old one if a user updates the vis\n  if (document.querySelector(\"svg\")) {\n    let oldSvg = document.querySelector(\"svg\");\n    oldSvg.parentNode.removeChild(oldSvg);\n  }\n  \n  // Create elements\n  const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n  svg.id = \"starsContainer\";\n  document.body.appendChild(svg);\n\n  d3.select('svg#starsContainer').classed('svg-container', true)\n  .attr('preserveAspectRatio', 'xMinYMin meet')\n  // .attr('viewBox', '0 0 ' + width + ' ' + height)\n  .attr('viewBox', '0 0 300 100')\n  .classed('svg-content-responsive', true);\n\n  const rating = document.createElementNS('http://www.w3.org/2000/svg', 'text')\n  rating.id = 'rating';\n  svg.appendChild(rating);\n\n  const gEle = document.createElementNS('http://www.w3.org/2000/svg', 'g')\n  svg.appendChild(gEle);\n\n  const tableData = data.tables.DEFAULT;\n  console.log(data);\n  \n  if (tableData.length < 1 || typeof tableData[0].starMetric === 'undefined') {\n    // no data\n    console.error(\"D3.js visualization failed. No metric provided. There must be one metric within the range of 1 to 5.\");\n\n    d3.select('svg').append(\"text\")\n    .attr('x', '0')\n    .attr('y', '20')\n    .text('Error: There must be one metric within the range of 1 to 5.')\n    .attr('font-size', '5pt');\n\n    return; \n  }\n  const metric = tableData[0].starMetric[0];\n  const starColor = data.style.starColor.value.color;\n  const themeFontColor = data.theme.themeFontColor.color;\n  const themeFontFamily = data.theme.themeFontFamily;\n\n  /** Check that metric is anything from 1 to 5 ONLY\n      If not, show user some kind of error\n  **/\n  \n  if (metric < 1 || metric > 5) {\n    console.error(\"D3.js visualization failed. The metric provided must be within the range of 1 to 5.\");\n    d3.select('svg').append(\"text\")\n        .attr('x', '20')\n        .attr('y', '20')\n        .text('Error: The metric provided must be from 1 to 5.')\n        .attr('font-size', '5pt');\n    return;\n  } \n\n  // Set metric text\n  d3.select('svg#starsContainer text#rating')\n    .text(metric)\n    .attr('transform', 'translate(5, 32)')\n    .style('fill', themeFontColor)\n    .style('font-family', themeFontFamily);\n  \n  // Returns metric without possible decimal\n  const fullStars = parseInt(metric); \n\n  /**\n    Determine whether or not a partially-filled star is needed\n    \n  **/\n  let partialStar;\n  let digits;\n  let partialStarPercentage;\n  let dynamicGradientStop;\n\n  // If decimal, get decimal\n  if (metric.toString().indexOf('.') > -1) { \n    partialStar = metric.toString().split('.')[1];\n    digits = partialStar.length;\n\n    if (digits == 1) {\n        partialStarPercentage = (partialStar * 10).toString() + \"%\";\n    } else if (digits == 2) {\n        partialStarPercentage = (partialStar).toString() + \"%\";\n    }\n\n  }\n  \n  if (partialStar) {\n    dynamicGradientStop = partialStarPercentage;\n  }\n\n  /**\n    Dynamic Gradients\n    Define left and right 'stops' of the gradient. Stops determine where the gradient should end.\n    \n    stop-left class is orange and it starts on the left and goes 50% of the width of the element to the right\n    stop-right class is white and starts on the right and goes 50% of the width of the element to the left\n\n  **/\n\n  if (dynamicGradientStop !== undefined) {\n\n    const dynamicRatingGradient = d3.select('svg').append('defs').append('linearGradient')\n    .attr('id', 'dynamicRatingGradient')\n    .attr(\"x1\", \"0%\").attr(\"x2\", \"100%\").attr(\"y1\", \"100%\").attr(\"y2\", \"100%\");\n\n    dynamicRatingGradient.append('stop')\n    .attr('class', 'stop-left')\n    .attr('offset', dynamicGradientStop);\n\n    dynamicRatingGradient.append('stop')\n    .attr('class', 'stop-right')\n    .attr('offset', dynamicGradientStop);\n\n  }\n\n  /**\n    Create the stars\n    Currently one size only - TODO make this dynamic with \n    the user's resizing of the window\n  **/\n\n  let symbolGenerator = d3.symbol()\n    .type(d3.symbolStar)\n    .size(350);\n\n  const pathData = symbolGenerator();\n\n  // x,y where each star should be placed within its g element\n  const starsByPosition = [\n    [90,20],\n    [130,20],\n    [170,20],\n    [210,20],\n    [250,20]\n  ];\n\n  // Loop through starsByPosition (data), create individual stars   \n  for (var i = 0; i < starsByPosition.length; i++){\n    d3.select('g')\n    .selectAll('path')\n    .data(starsByPosition)\n    .enter()\n    .append('path')\n    .attr('transform', function(d) {\n      // set position\n      return 'translate(' + d + ')';\n    })\n    .attr('class', function(d) {\n      // determine fill\n      if (starsByPosition.indexOf(d) +1 <= fullStars) {\n        return 'percent100';\n\n      } else if (starsByPosition.indexOf(d) +1 === fullStars +1 && partialStar) { \n        // we are one star past full stars and a partial star is needed\n        return 'percentageDynamic';\n      }\n      // Return placementDict[starsByPosition.indexOf(d)];\n    })\n    .attr('d', pathData);  // d = path of the star\n\n  };\n\n  // Update star fill color\n  d3.select('g')\n    .selectAll('path.percent100')\n    .style('fill', starColor);\n\n  d3.select('defs')\n    .selectAll('linearGradient#dynamicRatingGradient stop.stop-left')\n    .style('stop-color', starColor);\n\n}\n\ndscc.subscribeToData(drawViz, {transform: dscc.objectTransform})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });