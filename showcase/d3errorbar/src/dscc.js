(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define('dscc', [], factory);
  else if (typeof exports === 'object') exports['dscc'] = factory();
  else root['dscc'] = factory();
})(window, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter,
          /******/
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ Object.defineProperty(exports, '__esModule', {value: true});
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
      (__webpack_require__.s = './src/index.ts')
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './node_modules/querystringify/index.js':
        /*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var has = Object.prototype.hasOwnProperty;

          /**
           * Decode a URI encoded string.
           *
           * @param {String} input The URI encoded string.
           * @returns {String} The decoded string.
           * @api private
           */
          function decode(input) {
            return decodeURIComponent(input.replace(/\+/g, ' '));
          }

          /**
           * Simple query string parser.
           *
           * @param {String} query The query string that needs to be parsed.
           * @returns {Object}
           * @api public
           */
          function querystring(query) {
            var parser = /([^=?&]+)=?([^&]*)/g,
              result = {},
              part;

            while ((part = parser.exec(query))) {
              var key = decode(part[1]),
                value = decode(part[2]);

              //
              // Prevent overriding of existing properties. This ensures that build-in
              // methods like `toString` or __proto__ are not overriden by malicious
              // querystrings.
              //
              if (key in result) continue;
              result[key] = value;
            }

            return result;
          }

          /**
           * Transform a query string to an object.
           *
           * @param {Object} obj Object that should be transformed.
           * @param {String} prefix Optional prefix.
           * @returns {String}
           * @api public
           */
          function querystringify(obj, prefix) {
            prefix = prefix || '';

            var pairs = [];

            //
            // Optionally prefix with a '?' if needed
            //
            if ('string' !== typeof prefix) prefix = '?';

            for (var key in obj) {
              if (has.call(obj, key)) {
                pairs.push(
                  encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
                );
              }
            }

            return pairs.length ? prefix + pairs.join('&') : '';
          }

          //
          // Expose the module.
          //
          exports.stringify = querystringify;
          exports.parse = querystring;

          /***/
        },

      /***/ './node_modules/requires-port/index.js':
        /*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          /**
           * Check if we're required to add a port number.
           *
           * @see https://url.spec.whatwg.org/#default-port
           * @param {Number|String} port Port number we need to check
           * @param {String} protocol Protocol we need to check against.
           * @returns {Boolean} Is it a default port for the given protocol
           * @api private
           */
          module.exports = function required(port, protocol) {
            protocol = protocol.split(':')[0];
            port = +port;

            if (!port) return false;

            switch (protocol) {
              case 'http':
              case 'ws':
                return port !== 80;

              case 'https':
              case 'wss':
                return port !== 443;

              case 'ftp':
                return port !== 21;

              case 'gopher':
                return port !== 70;

              case 'file':
                return false;
            }

            return port !== 0;
          };

          /***/
        },

      /***/ './node_modules/url-parse/index.js':
        /*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          /* WEBPACK VAR INJECTION */ (function(global) {
            var required = __webpack_require__(
                /*! requires-port */ './node_modules/requires-port/index.js'
              ),
              qs = __webpack_require__(
                /*! querystringify */ './node_modules/querystringify/index.js'
              ),
              protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
              slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

            /**
             * These are the parse rules for the URL parser, it informs the parser
             * about:
             *
             * 0. The char it Needs to parse, if it's a string it should be done using
             *    indexOf, RegExp using exec and NaN means set as current value.
             * 1. The property we should set when parsing this value.
             * 2. Indication if it's backwards or forward parsing, when set as number it's
             *    the value of extra chars that should be split off.
             * 3. Inherit from location if non existing in the parser.
             * 4. `toLowerCase` the resulting value.
             */
            var rules = [
              ['#', 'hash'], // Extract from the back.
              ['?', 'query'], // Extract from the back.
              ['/', 'pathname'], // Extract from the back.
              ['@', 'auth', 1], // Extract from the front.
              [NaN, 'host', undefined, 1, 1], // Set left over value.
              [/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
              [NaN, 'hostname', undefined, 1, 1], // Set left over.
            ];

            /**
             * These properties should not be copied or inherited from. This is only needed
             * for all non blob URL's as a blob URL does not include a hash, only the
             * origin.
             *
             * @type {Object}
             * @private
             */
            var ignore = {hash: 1, query: 1};

            /**
             * The location object differs when your code is loaded through a normal page,
             * Worker or through a worker using a blob. And with the blobble begins the
             * trouble as the location object will contain the URL of the blob, not the
             * location of the page where our code is loaded in. The actual origin is
             * encoded in the `pathname` so we can thankfully generate a good "default"
             * location from it so we can generate proper relative URL's again.
             *
             * @param {Object|String} loc Optional default location object.
             * @returns {Object} lolcation object.
             * @api public
             */
            function lolcation(loc) {
              loc = loc || global.location || {};

              var finaldestination = {},
                type = typeof loc,
                key;

              if ('blob:' === loc.protocol) {
                finaldestination = new URL(unescape(loc.pathname), {});
              } else if ('string' === type) {
                finaldestination = new URL(loc, {});
                for (key in ignore) delete finaldestination[key];
              } else if ('object' === type) {
                for (key in loc) {
                  if (key in ignore) continue;
                  finaldestination[key] = loc[key];
                }

                if (finaldestination.slashes === undefined) {
                  finaldestination.slashes = slashes.test(loc.href);
                }
              }

              return finaldestination;
            }

            /**
             * @typedef ProtocolExtract
             * @type Object
             * @property {String} protocol Protocol matched in the URL, in lowercase.
             * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
             * @property {String} rest Rest of the URL that is not part of the protocol.
             */

            /**
             * Extract protocol information from a URL with/without double slash ("//").
             *
             * @param {String} address URL we want to extract from.
             * @return {ProtocolExtract} Extracted information.
             * @api private
             */
            function extractProtocol(address) {
              var match = protocolre.exec(address);

              return {
                protocol: match[1] ? match[1].toLowerCase() : '',
                slashes: !!match[2],
                rest: match[3],
              };
            }

            /**
             * Resolve a relative URL pathname against a base URL pathname.
             *
             * @param {String} relative Pathname of the relative URL.
             * @param {String} base Pathname of the base URL.
             * @return {String} Resolved pathname.
             * @api private
             */
            function resolve(relative, base) {
              var path = (base || '/')
                  .split('/')
                  .slice(0, -1)
                  .concat(relative.split('/')),
                i = path.length,
                last = path[i - 1],
                unshift = false,
                up = 0;

              while (i--) {
                if (path[i] === '.') {
                  path.splice(i, 1);
                } else if (path[i] === '..') {
                  path.splice(i, 1);
                  up++;
                } else if (up) {
                  if (i === 0) unshift = true;
                  path.splice(i, 1);
                  up--;
                }
              }

              if (unshift) path.unshift('');
              if (last === '.' || last === '..') path.push('');

              return path.join('/');
            }

            /**
             * The actual URL instance. Instead of returning an object we've opted-in to
             * create an actual constructor as it's much more memory efficient and
             * faster and it pleases my OCD.
             *
             * @constructor
             * @param {String} address URL we want to parse.
             * @param {Object|String} location Location defaults for relative paths.
             * @param {Boolean|Function} parser Parser for the query string.
             * @api public
             */
            function URL(address, location, parser) {
              if (!(this instanceof URL)) {
                return new URL(address, location, parser);
              }

              var relative,
                extracted,
                parse,
                instruction,
                index,
                key,
                instructions = rules.slice(),
                type = typeof location,
                url = this,
                i = 0;

              //
              // The following if statements allows this module two have compatibility with
              // 2 different API:
              //
              // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
              //    where the boolean indicates that the query string should also be parsed.
              //
              // 2. The `URL` interface of the browser which accepts a URL, object as
              //    arguments. The supplied object will be used as default values / fall-back
              //    for relative paths.
              //
              if ('object' !== type && 'string' !== type) {
                parser = location;
                location = null;
              }

              if (parser && 'function' !== typeof parser) parser = qs.parse;

              location = lolcation(location);

              //
              // Extract protocol information before running the instructions.
              //
              extracted = extractProtocol(address || '');
              relative = !extracted.protocol && !extracted.slashes;
              url.slashes = extracted.slashes || (relative && location.slashes);
              url.protocol = extracted.protocol || location.protocol || '';
              address = extracted.rest;

              //
              // When the authority component is absent the URL starts with a path
              // component.
              //
              if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

              for (; i < instructions.length; i++) {
                instruction = instructions[i];
                parse = instruction[0];
                key = instruction[1];

                if (parse !== parse) {
                  url[key] = address;
                } else if ('string' === typeof parse) {
                  if (~(index = address.indexOf(parse))) {
                    if ('number' === typeof instruction[2]) {
                      url[key] = address.slice(0, index);
                      address = address.slice(index + instruction[2]);
                    } else {
                      url[key] = address.slice(index);
                      address = address.slice(0, index);
                    }
                  }
                } else if ((index = parse.exec(address))) {
                  url[key] = index[1];
                  address = address.slice(0, index.index);
                }

                url[key] =
                  url[key] ||
                  (relative && instruction[3] ? location[key] || '' : '');

                //
                // Hostname, host and protocol should be lowercased so they can be used to
                // create a proper `origin`.
                //
                if (instruction[4]) url[key] = url[key].toLowerCase();
              }

              //
              // Also parse the supplied query string in to an object. If we're supplied
              // with a custom parser as function use that instead of the default build-in
              // parser.
              //
              if (parser) url.query = parser(url.query);

              //
              // If the URL is relative, resolve the pathname against the base URL.
              //
              if (
                relative &&
                location.slashes &&
                url.pathname.charAt(0) !== '/' &&
                (url.pathname !== '' || location.pathname !== '')
              ) {
                url.pathname = resolve(url.pathname, location.pathname);
              }

              //
              // We should not add port numbers if they are already the default port number
              // for a given protocol. As the host also contains the port number we're going
              // override it with the hostname which contains no port number.
              //
              if (!required(url.port, url.protocol)) {
                url.host = url.hostname;
                url.port = '';
              }

              //
              // Parse down the `auth` for the username and password.
              //
              url.username = url.password = '';
              if (url.auth) {
                instruction = url.auth.split(':');
                url.username = instruction[0] || '';
                url.password = instruction[1] || '';
              }

              url.origin =
                url.protocol && url.host && url.protocol !== 'file:'
                  ? url.protocol + '//' + url.host
                  : 'null';

              //
              // The href is just the compiled result.
              //
              url.href = url.toString();
            }

            /**
             * This is convenience method for changing properties in the URL instance to
             * insure that they all propagate correctly.
             *
             * @param {String} part          Property we need to adjust.
             * @param {Mixed} value          The newly assigned value.
             * @param {Boolean|Function} fn  When setting the query, it will be the function
             *                               used to parse the query.
             *                               When setting the protocol, double slash will be
             *                               removed from the final url if it is true.
             * @returns {URL}
             * @api public
             */
            function set(part, value, fn) {
              var url = this;

              switch (part) {
                case 'query':
                  if ('string' === typeof value && value.length) {
                    value = (fn || qs.parse)(value);
                  }

                  url[part] = value;
                  break;

                case 'port':
                  url[part] = value;

                  if (!required(value, url.protocol)) {
                    url.host = url.hostname;
                    url[part] = '';
                  } else if (value) {
                    url.host = url.hostname + ':' + value;
                  }

                  break;

                case 'hostname':
                  url[part] = value;

                  if (url.port) value += ':' + url.port;
                  url.host = value;
                  break;

                case 'host':
                  url[part] = value;

                  if (/:\d+$/.test(value)) {
                    value = value.split(':');
                    url.port = value.pop();
                    url.hostname = value.join(':');
                  } else {
                    url.hostname = value;
                    url.port = '';
                  }

                  break;

                case 'protocol':
                  url.protocol = value.toLowerCase();
                  url.slashes = !fn;
                  break;

                case 'pathname':
                case 'hash':
                  if (value) {
                    var char = part === 'pathname' ? '/' : '#';
                    url[part] = value.charAt(0) !== char ? char + value : value;
                  } else {
                    url[part] = value;
                  }
                  break;

                default:
                  url[part] = value;
              }

              for (var i = 0; i < rules.length; i++) {
                var ins = rules[i];

                if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
              }

              url.origin =
                url.protocol && url.host && url.protocol !== 'file:'
                  ? url.protocol + '//' + url.host
                  : 'null';

              url.href = url.toString();

              return url;
            }

            /**
             * Transform the properties back in to a valid and full URL string.
             *
             * @param {Function} stringify Optional query stringify function.
             * @returns {String}
             * @api public
             */
            function toString(stringify) {
              if (!stringify || 'function' !== typeof stringify)
                stringify = qs.stringify;

              var query,
                url = this,
                protocol = url.protocol;

              if (protocol && protocol.charAt(protocol.length - 1) !== ':')
                protocol += ':';

              var result = protocol + (url.slashes ? '//' : '');

              if (url.username) {
                result += url.username;
                if (url.password) result += ':' + url.password;
                result += '@';
              }

              result += url.host + url.pathname;

              query =
                'object' === typeof url.query
                  ? stringify(url.query)
                  : url.query;
              if (query)
                result += '?' !== query.charAt(0) ? '?' + query : query;

              if (url.hash) result += url.hash;

              return result;
            }

            URL.prototype = {set: set, toString: toString};

            //
            // Expose the URL parser and some additional properties that might be useful for
            // others or testing.
            //
            URL.extractProtocol = extractProtocol;
            URL.location = lolcation;
            URL.qs = qs;

            module.exports = URL;

            /* WEBPACK VAR INJECTION */
          }.call(
            this,
            __webpack_require__(
              /*! ./../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js'
            )
          ));

          /***/
        },

      /***/ './node_modules/webpack/buildin/global.js':
        /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          var g;

          // This works in non-strict mode
          g = (function() {
            return this;
          })();

          try {
            // This works if eval is allowed (see CSP)
            g = g || Function('return this')() || (1, eval)('this');
          } catch (e) {
            // This works if the window reference is available
            if (typeof window === 'object') g = window;
          }

          // g can still be undefined, but nothing to do about it...
          // We return undefined, instead of nothing here, so it's
          // easier to handle this case. if(!global) { ...}

          module.exports = g;

          /***/
        },

      /***/ './src/data-transform.ts':
        /*!*******************************!*\
  !*** ./src/data-transform.ts ***!
  \*******************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {value: true});
          /*!
  Copyright 2018 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
          var impl = __webpack_require__(/*! ./impl */ './src/impl.ts');
          var destructImage = function(value) {
            var _a = value.split('\u00a0\u00a0'),
              originalUrl = _a[0],
              proxiedUrl = _a[1],
              altText = _a[2];
            return {
              originalUrl: originalUrl,
              proxiedUrl: proxiedUrl,
              altText: altText,
            };
          };
          var transformRowsHelper = function(isComparisonRow, rows, schema) {
            return rows.map(function(row) {
              var newRow = {isComparisonRow: isComparisonRow};
              for (var i = 0; i < row.length; i++) {
                var schemaField = schema[i];
                var column =
                  schemaField.semantic === impl.SchemaSemanticType.IMAGE
                    ? // We know that the row is a string if the type is IMAGE.
                      destructImage(row[i])
                    : row[i];
                newRow[schemaField.name] = column;
              }
              return newRow;
            });
          };
          var transformRows = function(rows, schema) {
            var comparisonRows = transformRowsHelper(
              true,
              rows.comparisonRows,
              schema
            );
            var primaryRows = transformRowsHelper(
              false,
              rows.primaryRows,
              schema
            );
            return comparisonRows.concat(primaryRows);
          };
          // TODO(mjhamrick) - there is probably a cleaner way to do this.
          var toFieldType = function(schemaEntry) {
            if (schemaEntry.semantic === impl.SchemaSemanticType.CURRENCY) {
              var fieldType =
                impl.SchemaSemanticType[schemaEntry.semantic] +
                '_' +
                impl.SchemaSemanticOption[schemaEntry.semanticOption];
              return impl.FieldType[fieldType];
            } else {
              return impl.FieldType[
                impl.SchemaSemanticType[schemaEntry.semantic]
              ];
            }
          };
          var schemaToField = function(schemaEntry) {
            return {
              concept: schemaEntry.concept,
              id: schemaEntry.name,
              name: schemaEntry.label,
              type: toFieldType(schemaEntry),
            };
          };
          var transformSchema = function(schema) {
            var fields = {};
            schema.forEach(function(schemaEntry) {
              fields[schemaEntry.name] = schemaToField(schemaEntry);
            });
            return fields;
          };
          exports.transformData = function(receiveMessage) {
            var joinedRows = {
              style: receiveMessage.data.style,
              type: receiveMessage.data.type,
              fieldById: transformSchema(receiveMessage.data.schema),
              fields: receiveMessage.data.schema.map(schemaToField),
              rows: transformRows(
                receiveMessage.data.rows,
                receiveMessage.data.schema
              ),
            };
            return joinedRows;
          };

          /***/
        },

      /***/ './src/impl.ts':
        /*!*********************!*\
  !*** ./src/impl.ts ***!
  \*********************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var __awaiter =
            (this && this.__awaiter) ||
            function(thisArg, _arguments, P, generator) {
              return new (P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function rejected(value) {
                  try {
                    step(generator['throw'](value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function step(result) {
                  result.done
                    ? resolve(result.value)
                    : new P(function(resolve) {
                        resolve(result.value);
                      }).then(fulfilled, rejected);
                }
                step(
                  (generator = generator.apply(
                    thisArg,
                    _arguments || []
                  )).next()
                );
              });
            };
          var __generator =
            (this && this.__generator) ||
            function(thisArg, body) {
              var _ = {
                  label: 0,
                  sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  },
                  trys: [],
                  ops: [],
                },
                f,
                y,
                t,
                g;
              return (
                (g = {next: verb(0), throw: verb(1), return: verb(2)}),
                typeof Symbol === 'function' &&
                  (g[Symbol.iterator] = function() {
                    return this;
                  }),
                g
              );
              function verb(n) {
                return function(v) {
                  return step([n, v]);
                };
              }
              function step(op) {
                if (f) throw new TypeError('Generator is already executing.');
                while (_)
                  try {
                    if (
                      ((f = 1),
                      y &&
                        (t =
                          y[op[0] & 2 ? 'return' : op[0] ? 'throw' : 'next']) &&
                        !(t = t.call(y, op[1])).done)
                    )
                      return t;
                    if (((y = 0), t)) op = [0, t.value];
                    switch (op[0]) {
                      case 0:
                      case 1:
                        t = op;
                        break;
                      case 4:
                        _.label++;
                        return {value: op[1], done: false};
                      case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                      case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                      default:
                        if (
                          !((t = _.trys),
                          (t = t.length > 0 && t[t.length - 1])) &&
                          (op[0] === 6 || op[0] === 2)
                        ) {
                          _ = 0;
                          continue;
                        }
                        if (
                          op[0] === 3 &&
                          (!t || (op[1] > t[0] && op[1] < t[3]))
                        ) {
                          _.label = op[1];
                          break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                          _.label = t[1];
                          t = op;
                          break;
                        }
                        if (t && _.label < t[2]) {
                          _.label = t[2];
                          _.ops.push(op);
                          break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                    }
                    op = body.call(thisArg, _);
                  } catch (e) {
                    op = [6, e];
                    y = 0;
                  } finally {
                    f = t = 0;
                  }
                if (op[0] & 5) throw op[1];
                return {value: op[0] ? op[1] : void 0, done: true};
              }
            };
          var _this = this;
          Object.defineProperty(exports, '__esModule', {value: true});
          /*!
  Copyright 2018 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
          var data_transform_1 = __webpack_require__(
            /*! ./data-transform */ './src/data-transform.ts'
          );
          var parse = __webpack_require__(
            /*! url-parse */ './node_modules/url-parse/index.js'
          );
          // TODO(mjhamrick) - use yarn link so this can work locally, and put a little
          // something in some docs so I can remember how this works later.
          // Messages From Data Studio
          var MessageType;
          (function(MessageType) {
            MessageType['RENDER'] = 'RENDER';
          })((MessageType = exports.MessageType || (exports.MessageType = {})));
          var ConceptType;
          (function(ConceptType) {
            ConceptType['Metric'] = 'METRIC';
            ConceptType['Dimension'] = 'DIMENSION';
          })((ConceptType = exports.ConceptType || (exports.ConceptType = {})));
          var SchemaDataType;
          (function(SchemaDataType) {
            SchemaDataType['STRING'] = 'STRING';
            SchemaDataType['NUMBER'] = 'NUMBER';
            SchemaDataType['BOOLEAN'] = 'BOOLEAN';
          })(
            (SchemaDataType =
              exports.SchemaDataType || (exports.SchemaDataType = {}))
          );
          var SchemaSemanticType;
          (function(SchemaSemanticType) {
            SchemaSemanticType['YEAR'] = 'YEAR';
            SchemaSemanticType['YEAR_QUARTER'] = 'YEAR_QUARTER';
            SchemaSemanticType['YEAR_MONTH'] = 'YEAR_MONTH';
            SchemaSemanticType['YEAR_WEEK'] = 'YEAR_WEEK';
            SchemaSemanticType['YEAR_MONTH_DAY'] = 'YEAR_MONTH_DAY';
            SchemaSemanticType['YEAR_MONTH_DAY_HOUR'] = 'YEAR_MONTH_DAY_HOUR';
            SchemaSemanticType['QUARTER'] = 'QUARTER';
            SchemaSemanticType['MONTH'] = 'MONTH';
            SchemaSemanticType['WEEK'] = 'WEEK';
            SchemaSemanticType['MONTH_DAY'] = 'MONTH_DAY';
            SchemaSemanticType['DAY_OF_WEEK'] = 'DAY_OF_WEEK';
            SchemaSemanticType['DAY'] = 'DAY';
            SchemaSemanticType['HOUR'] = 'HOUR';
            SchemaSemanticType['MINUTE'] = 'MINUTE';
            SchemaSemanticType['DURATION'] = 'DURATION';
            SchemaSemanticType['COUNTRY'] = 'COUNTRY';
            SchemaSemanticType['COUNTRY_CODE'] = 'COUNTRY_CODE';
            SchemaSemanticType['CONTINENT'] = 'CONTINENT';
            SchemaSemanticType['CONTINENT_CODE'] = 'CONTINENT_CODE';
            SchemaSemanticType['SUB_CONTINENT'] = 'SUB_CONTINENT';
            SchemaSemanticType['SUB_CONTINENT_CODE'] = 'SUB_CONTINENT_CODE';
            SchemaSemanticType['REGION'] = 'REGION';
            SchemaSemanticType['REGION_CODE'] = 'REGION_CODE';
            SchemaSemanticType['CITY'] = 'CITY';
            SchemaSemanticType['CITY_CODE'] = 'CITY_CODE';
            SchemaSemanticType['METRO_CODE'] = 'METRO_CODE';
            SchemaSemanticType['LATITUDE_LONGITUDE'] = 'LATITUDE_LONGITUDE';
            SchemaSemanticType['NUMBER'] = 'NUMBER';
            SchemaSemanticType['PERCENT'] = 'PERCENT';
            SchemaSemanticType['TEXT'] = 'TEXT';
            SchemaSemanticType['BOOLEAN'] = 'BOOLEAN';
            SchemaSemanticType['URL'] = 'URL';
            SchemaSemanticType['IMAGE'] = 'IMAGE';
            SchemaSemanticType['CURRENCY'] = 'CURRENCY';
          })(
            (SchemaSemanticType =
              exports.SchemaSemanticType || (exports.SchemaSemanticType = {}))
          );
          var SchemaSemanticOption;
          (function(SchemaSemanticOption) {
            SchemaSemanticOption['AED'] = 'AED';
            SchemaSemanticOption['ALL'] = 'ALL';
            SchemaSemanticOption['ARS'] = 'ARS';
            SchemaSemanticOption['AUD'] = 'AUD';
            SchemaSemanticOption['BDT'] = 'BDT';
            SchemaSemanticOption['BGN'] = 'BGN';
            SchemaSemanticOption['BOB'] = 'BOB';
            SchemaSemanticOption['BRL'] = 'BRL';
            SchemaSemanticOption['CAD'] = 'CAD';
            SchemaSemanticOption['CDF'] = 'CDF';
            SchemaSemanticOption['CHF'] = 'CHF';
            SchemaSemanticOption['CLP'] = 'CLP';
            SchemaSemanticOption['CNY'] = 'CNY';
            SchemaSemanticOption['COP'] = 'COP';
            SchemaSemanticOption['CRC'] = 'CRC';
            SchemaSemanticOption['CZK'] = 'CZK';
            SchemaSemanticOption['DKK'] = 'DKK';
            SchemaSemanticOption['DOP'] = 'DOP';
            SchemaSemanticOption['EGP'] = 'EGP';
            SchemaSemanticOption['ETB'] = 'ETB';
            SchemaSemanticOption['EUR'] = 'EUR';
            SchemaSemanticOption['GBP'] = 'GBP';
            SchemaSemanticOption['HKD'] = 'HKD';
            SchemaSemanticOption['HRK'] = 'HRK';
            SchemaSemanticOption['HUF'] = 'HUF';
            SchemaSemanticOption['IDR'] = 'IDR';
            SchemaSemanticOption['ILS'] = 'ILS';
            SchemaSemanticOption['INR'] = 'INR';
            SchemaSemanticOption['IRR'] = 'IRR';
            SchemaSemanticOption['ISK'] = 'ISK';
            SchemaSemanticOption['JMD'] = 'JMD';
            SchemaSemanticOption['JPY'] = 'JPY';
            SchemaSemanticOption['KRW'] = 'KRW';
            SchemaSemanticOption['LKR'] = 'LKR';
            SchemaSemanticOption['LTL'] = 'LTL';
            SchemaSemanticOption['MNT'] = 'MNT';
            SchemaSemanticOption['MVR'] = 'MVR';
            SchemaSemanticOption['MXN'] = 'MXN';
            SchemaSemanticOption['MYR'] = 'MYR';
            SchemaSemanticOption['NOK'] = 'NOK';
            SchemaSemanticOption['NZD'] = 'NZD';
            SchemaSemanticOption['PAB'] = 'PAB';
            SchemaSemanticOption['PEN'] = 'PEN';
            SchemaSemanticOption['PHP'] = 'PHP';
            SchemaSemanticOption['PKR'] = 'PKR';
            SchemaSemanticOption['PLN'] = 'PLN';
            SchemaSemanticOption['RON'] = 'RON';
            SchemaSemanticOption['RSD'] = 'RSD';
            SchemaSemanticOption['RUB'] = 'RUB';
            SchemaSemanticOption['SAR'] = 'SAR';
            SchemaSemanticOption['SEK'] = 'SEK';
            SchemaSemanticOption['SGD'] = 'SGD';
            SchemaSemanticOption['THB'] = 'THB';
            SchemaSemanticOption['TRY'] = 'TRY';
            SchemaSemanticOption['TWD'] = 'TWD';
            SchemaSemanticOption['TZS'] = 'TZS';
            SchemaSemanticOption['UAH'] = 'UAH';
            SchemaSemanticOption['USD'] = 'USD';
            SchemaSemanticOption['UYU'] = 'UYU';
            SchemaSemanticOption['VEF'] = 'VEF';
            SchemaSemanticOption['VND'] = 'VND';
            SchemaSemanticOption['YER'] = 'YER';
            SchemaSemanticOption['ZAR'] = 'ZAR';
          })(
            (SchemaSemanticOption =
              exports.SchemaSemanticOption ||
              (exports.SchemaSemanticOption = {}))
          );
          var FieldType;
          (function(FieldType) {
            FieldType['YEAR'] = 'YEAR';
            FieldType['YEAR_QUARTER'] = 'YEAR_QUARTER';
            FieldType['YEAR_MONTH'] = 'YEAR_MONTH';
            FieldType['YEAR_WEEK'] = 'YEAR_WEEK';
            FieldType['YEAR_MONTH_DAY'] = 'YEAR_MONTH_DAY';
            FieldType['YEAR_MONTH_DAY_HOUR'] = 'YEAR_MONTH_DAY_HOUR';
            FieldType['QUARTER'] = 'QUARTER';
            FieldType['MONTH'] = 'MONTH';
            FieldType['WEEK'] = 'WEEK';
            FieldType['MONTH_DAY'] = 'MONTH_DAY';
            FieldType['DAY_OF_WEEK'] = 'DAY_OF_WEEK';
            FieldType['DAY'] = 'DAY';
            FieldType['HOUR'] = 'HOUR';
            FieldType['MINUTE'] = 'MINUTE';
            FieldType['DURATION'] = 'DURATION';
            FieldType['COUNTRY'] = 'COUNTRY';
            FieldType['COUNTRY_CODE'] = 'COUNTRY_CODE';
            FieldType['CONTINENT'] = 'CONTINENT';
            FieldType['CONTINENT_CODE'] = 'CONTINENT_CODE';
            FieldType['SUB_CONTINENT'] = 'SUB_CONTINENT';
            FieldType['SUB_CONTINENT_CODE'] = 'SUB_CONTINENT_CODE';
            FieldType['REGION'] = 'REGION';
            FieldType['REGION_CODE'] = 'REGION_CODE';
            FieldType['CITY'] = 'CITY';
            FieldType['CITY_CODE'] = 'CITY_CODE';
            FieldType['METRO_CODE'] = 'METRO_CODE';
            FieldType['LATITUDE_LONGITUDE'] = 'LATITUDE_LONGITUDE';
            FieldType['NUMBER'] = 'NUMBER';
            FieldType['PERCENT'] = 'PERCENT';
            FieldType['TEXT'] = 'TEXT';
            FieldType['BOOLEAN'] = 'BOOLEAN';
            FieldType['URL'] = 'URL';
            FieldType['IMAGE'] = 'IMAGE';
            FieldType['CURRENCY_AED'] = 'CURRENCY_AED';
            FieldType['CURRENCY_ALL'] = 'CURRENCY_ALL';
            FieldType['CURRENCY_ARS'] = 'CURRENCY_ARS';
            FieldType['CURRENCY_AUD'] = 'CURRENCY_AUD';
            FieldType['CURRENCY_BDT'] = 'CURRENCY_BDT';
            FieldType['CURRENCY_BGN'] = 'CURRENCY_BGN';
            FieldType['CURRENCY_BOB'] = 'CURRENCY_BOB';
            FieldType['CURRENCY_BRL'] = 'CURRENCY_BRL';
            FieldType['CURRENCY_CAD'] = 'CURRENCY_CAD';
            FieldType['CURRENCY_CDF'] = 'CURRENCY_CDF';
            FieldType['CURRENCY_CHF'] = 'CURRENCY_CHF';
            FieldType['CURRENCY_CLP'] = 'CURRENCY_CLP';
            FieldType['CURRENCY_CNY'] = 'CURRENCY_CNY';
            FieldType['CURRENCY_COP'] = 'CURRENCY_COP';
            FieldType['CURRENCY_CRC'] = 'CURRENCY_CRC';
            FieldType['CURRENCY_CZK'] = 'CURRENCY_CZK';
            FieldType['CURRENCY_DKK'] = 'CURRENCY_DKK';
            FieldType['CURRENCY_DOP'] = 'CURRENCY_DOP';
            FieldType['CURRENCY_EGP'] = 'CURRENCY_EGP';
            FieldType['CURRENCY_ETB'] = 'CURRENCY_ETB';
            FieldType['CURRENCY_EUR'] = 'CURRENCY_EUR';
            FieldType['CURRENCY_GBP'] = 'CURRENCY_GBP';
            FieldType['CURRENCY_HKD'] = 'CURRENCY_HKD';
            FieldType['CURRENCY_HRK'] = 'CURRENCY_HRK';
            FieldType['CURRENCY_HUF'] = 'CURRENCY_HUF';
            FieldType['CURRENCY_IDR'] = 'CURRENCY_IDR';
            FieldType['CURRENCY_ILS'] = 'CURRENCY_ILS';
            FieldType['CURRENCY_INR'] = 'CURRENCY_INR';
            FieldType['CURRENCY_IRR'] = 'CURRENCY_IRR';
            FieldType['CURRENCY_ISK'] = 'CURRENCY_ISK';
            FieldType['CURRENCY_JMD'] = 'CURRENCY_JMD';
            FieldType['CURRENCY_JPY'] = 'CURRENCY_JPY';
            FieldType['CURRENCY_KRW'] = 'CURRENCY_KRW';
            FieldType['CURRENCY_LKR'] = 'CURRENCY_LKR';
            FieldType['CURRENCY_LTL'] = 'CURRENCY_LTL';
            FieldType['CURRENCY_MNT'] = 'CURRENCY_MNT';
            FieldType['CURRENCY_MVR'] = 'CURRENCY_MVR';
            FieldType['CURRENCY_MXN'] = 'CURRENCY_MXN';
            FieldType['CURRENCY_MYR'] = 'CURRENCY_MYR';
            FieldType['CURRENCY_NOK'] = 'CURRENCY_NOK';
            FieldType['CURRENCY_NZD'] = 'CURRENCY_NZD';
            FieldType['CURRENCY_PAB'] = 'CURRENCY_PAB';
            FieldType['CURRENCY_PEN'] = 'CURRENCY_PEN';
            FieldType['CURRENCY_PHP'] = 'CURRENCY_PHP';
            FieldType['CURRENCY_PKR'] = 'CURRENCY_PKR';
            FieldType['CURRENCY_PLN'] = 'CURRENCY_PLN';
            FieldType['CURRENCY_RON'] = 'CURRENCY_RON';
            FieldType['CURRENCY_RSD'] = 'CURRENCY_RSD';
            FieldType['CURRENCY_RUB'] = 'CURRENCY_RUB';
            FieldType['CURRENCY_SAR'] = 'CURRENCY_SAR';
            FieldType['CURRENCY_SEK'] = 'CURRENCY_SEK';
            FieldType['CURRENCY_SGD'] = 'CURRENCY_SGD';
            FieldType['CURRENCY_THB'] = 'CURRENCY_THB';
            FieldType['CURRENCY_TRY'] = 'CURRENCY_TRY';
            FieldType['CURRENCY_TWD'] = 'CURRENCY_TWD';
            FieldType['CURRENCY_TZS'] = 'CURRENCY_TZS';
            FieldType['CURRENCY_UAH'] = 'CURRENCY_UAH';
            FieldType['CURRENCY_USD'] = 'CURRENCY_USD';
            FieldType['CURRENCY_UYU'] = 'CURRENCY_UYU';
            FieldType['CURRENCY_VEF'] = 'CURRENCY_VEF';
            FieldType['CURRENCY_VND'] = 'CURRENCY_VND';
            FieldType['CURRENCY_YER'] = 'CURRENCY_YER';
            FieldType['CURRENCY_ZAR'] = 'CURRENCY_ZAR';
          })((FieldType = exports.FieldType || (exports.FieldType = {})));
          var ClientMessageType;
          (function(ClientMessageType) {
            ClientMessageType['VIZ_READY'] = 'vizReady';
          })(
            (ClientMessageType =
              exports.ClientMessageType || (exports.ClientMessageType = {}))
          );
          exports.timeout = function(millis) {
            return __awaiter(_this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                return [
                  2 /*return*/,
                  new Promise(function(resolve, reject) {
                    setTimeout(function() {
                      return resolve(millis);
                    }, millis);
                  }),
                ];
              });
            });
          };
          exports.iframeLoaded = function() {
            return __awaiter(_this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                return [
                  2 /*return*/,
                  new Promise(function(resolve, reject) {
                    window.addEventListener('load', function(e) {
                      resolve(e);
                    });
                  }),
                ];
              });
            });
          };
          exports.postMessage = function(clientMessage) {
            window.parent.postMessage(clientMessage, '*');
          };
          exports.getWidth = function() {
            return document.body.clientWidth;
          };
          exports.getHeight = function() {
            return document.body.clientHeight;
          };
          exports.getComponentId = function() {
            var parsed = parse(window.parent.location.href, true);
            return parsed.query.id;
          };
          exports.delayedMessage = function(clientMessage, millis) {
            return __awaiter(_this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, exports.iframeLoaded()];
                  case 1:
                    _a.sent();
                    return [4 /*yield*/, exports.timeout(millis)];
                  case 2:
                    _a.sent();
                    exports.postMessage(clientMessage);
                    return [2 /*return*/];
                }
              });
            });
          };
          exports.subscribeToData = function(callback) {
            return __awaiter(_this, void 0, void 0, function() {
              var onMessage, componentId;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, exports.iframeLoaded()];
                  case 1:
                    _a.sent();
                    onMessage = function(message) {
                      if (message.data.type === 'RENDER') {
                        var xformed = data_transform_1.transformData(message);
                        callback(xformed);
                      }
                    };
                    window.addEventListener('message', onMessage);
                    componentId = exports.getComponentId();
                    exports.postMessage({
                      componentId: componentId,
                      type: ClientMessageType.VIZ_READY,
                    });
                    // Return a function that can be used to unsubscribe to the data stream.
                    return [
                      2 /*return*/,
                      function() {
                        return window.removeEventListener('message', onMessage);
                      },
                    ];
                }
              });
            });
          };

          /***/
        },

      /***/ './src/index.ts':
        /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {value: true});
          /*!
  Copyright 2018 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
          var impl = __webpack_require__(/*! ./impl */ './src/impl.ts');
          exports.delayedMessage = impl.delayedMessage;
          exports.subscribeToData = impl.subscribeToData;
          exports.getWidth = impl.getWidth;
          exports.getHeight = impl.getHeight;

          /***/
        },

      /******/
    }
  );
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzY2MvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmdpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHNjYy8uL25vZGVfbW9kdWxlcy9yZXF1aXJlcy1wb3J0L2luZGV4LmpzIiwid2VicGFjazovL2RzY2MvLi9ub2RlX21vZHVsZXMvdXJsLXBhcnNlL2luZGV4LmpzIiwid2VicGFjazovL2RzY2MvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2RzY2MvLi9zcmMvZGF0YS10cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vZHNjYy8uL3NyYy9pbXBsLnRzIiwid2VicGFjazovL2RzY2MvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdB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bUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSCwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw4REFBOEQ7QUFDbkc7QUFDQSxtREFBbUQseURBQXlELEVBQUU7QUFDOUc7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7O0FDbFZIO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkc2NjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkc2NjXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRzY2NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHNjY1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBEZWNvZGUgYSBVUkkgZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBVUkkgZW5jb2RlZCBzdHJpbmcuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgZGVjb2RlZCBzdHJpbmcuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQucmVwbGFjZSgvXFwrL2csICcgJykpO1xufVxuXG4vKipcbiAqIFNpbXBsZSBxdWVyeSBzdHJpbmcgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBUaGUgcXVlcnkgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgcGFyc2VkLlxuICogQHJldHVybnMge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nKHF1ZXJ5KSB7XG4gIHZhciBwYXJzZXIgPSAvKFtePT8mXSspPT8oW14mXSopL2dcbiAgICAsIHJlc3VsdCA9IHt9XG4gICAgLCBwYXJ0O1xuXG4gIHdoaWxlIChwYXJ0ID0gcGFyc2VyLmV4ZWMocXVlcnkpKSB7XG4gICAgdmFyIGtleSA9IGRlY29kZShwYXJ0WzFdKVxuICAgICAgLCB2YWx1ZSA9IGRlY29kZShwYXJ0WzJdKTtcblxuICAgIC8vXG4gICAgLy8gUHJldmVudCBvdmVycmlkaW5nIG9mIGV4aXN0aW5nIHByb3BlcnRpZXMuIFRoaXMgZW5zdXJlcyB0aGF0IGJ1aWxkLWluXG4gICAgLy8gbWV0aG9kcyBsaWtlIGB0b1N0cmluZ2Agb3IgX19wcm90b19fIGFyZSBub3Qgb3ZlcnJpZGVuIGJ5IG1hbGljaW91c1xuICAgIC8vIHF1ZXJ5c3RyaW5ncy5cbiAgICAvL1xuICAgIGlmIChrZXkgaW4gcmVzdWx0KSBjb250aW51ZTtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBxdWVyeSBzdHJpbmcgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogT2JqZWN0IHRoYXQgc2hvdWxkIGJlIHRyYW5zZm9ybWVkLlxuICogQHBhcmFtIHtTdHJpbmd9IHByZWZpeCBPcHRpb25hbCBwcmVmaXguXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcXVlcnlzdHJpbmdpZnkob2JqLCBwcmVmaXgpIHtcbiAgcHJlZml4ID0gcHJlZml4IHx8ICcnO1xuXG4gIHZhciBwYWlycyA9IFtdO1xuXG4gIC8vXG4gIC8vIE9wdGlvbmFsbHkgcHJlZml4IHdpdGggYSAnPycgaWYgbmVlZGVkXG4gIC8vXG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIHByZWZpeCkgcHJlZml4ID0gJz8nO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsnPScrIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWlycy5sZW5ndGggPyBwcmVmaXggKyBwYWlycy5qb2luKCcmJykgOiAnJztcbn1cblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmV4cG9ydHMuc3RyaW5naWZ5ID0gcXVlcnlzdHJpbmdpZnk7XG5leHBvcnRzLnBhcnNlID0gcXVlcnlzdHJpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UncmUgcmVxdWlyZWQgdG8gYWRkIGEgcG9ydCBudW1iZXIuXG4gKlxuICogQHNlZSBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2RlZmF1bHQtcG9ydFxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBwb3J0IFBvcnQgbnVtYmVyIHdlIG5lZWQgdG8gY2hlY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbCBQcm90b2NvbCB3ZSBuZWVkIHRvIGNoZWNrIGFnYWluc3QuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gSXMgaXQgYSBkZWZhdWx0IHBvcnQgZm9yIHRoZSBnaXZlbiBwcm90b2NvbFxuICogQGFwaSBwcml2YXRlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVxdWlyZWQocG9ydCwgcHJvdG9jb2wpIHtcbiAgcHJvdG9jb2wgPSBwcm90b2NvbC5zcGxpdCgnOicpWzBdO1xuICBwb3J0ID0gK3BvcnQ7XG5cbiAgaWYgKCFwb3J0KSByZXR1cm4gZmFsc2U7XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgJ2h0dHAnOlxuICAgIGNhc2UgJ3dzJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gODA7XG5cbiAgICBjYXNlICdodHRwcyc6XG4gICAgY2FzZSAnd3NzJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gNDQzO1xuXG4gICAgY2FzZSAnZnRwJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gMjE7XG5cbiAgICBjYXNlICdnb3BoZXInOlxuICAgIHJldHVybiBwb3J0ICE9PSA3MDtcblxuICAgIGNhc2UgJ2ZpbGUnOlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBwb3J0ICE9PSAwO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlcXVpcmVkID0gcmVxdWlyZSgncmVxdWlyZXMtcG9ydCcpXG4gICwgcXMgPSByZXF1aXJlKCdxdWVyeXN0cmluZ2lmeScpXG4gICwgcHJvdG9jb2xyZSA9IC9eKFthLXpdW2EtejAtOS4rLV0qOik/KFxcL1xcLyk/KFtcXFNcXHNdKikvaVxuICAsIHNsYXNoZXMgPSAvXltBLVphLXpdW0EtWmEtejAtOSstLl0qOlxcL1xcLy87XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBwYXJzZSBydWxlcyBmb3IgdGhlIFVSTCBwYXJzZXIsIGl0IGluZm9ybXMgdGhlIHBhcnNlclxuICogYWJvdXQ6XG4gKlxuICogMC4gVGhlIGNoYXIgaXQgTmVlZHMgdG8gcGFyc2UsIGlmIGl0J3MgYSBzdHJpbmcgaXQgc2hvdWxkIGJlIGRvbmUgdXNpbmdcbiAqICAgIGluZGV4T2YsIFJlZ0V4cCB1c2luZyBleGVjIGFuZCBOYU4gbWVhbnMgc2V0IGFzIGN1cnJlbnQgdmFsdWUuXG4gKiAxLiBUaGUgcHJvcGVydHkgd2Ugc2hvdWxkIHNldCB3aGVuIHBhcnNpbmcgdGhpcyB2YWx1ZS5cbiAqIDIuIEluZGljYXRpb24gaWYgaXQncyBiYWNrd2FyZHMgb3IgZm9yd2FyZCBwYXJzaW5nLCB3aGVuIHNldCBhcyBudW1iZXIgaXQnc1xuICogICAgdGhlIHZhbHVlIG9mIGV4dHJhIGNoYXJzIHRoYXQgc2hvdWxkIGJlIHNwbGl0IG9mZi5cbiAqIDMuIEluaGVyaXQgZnJvbSBsb2NhdGlvbiBpZiBub24gZXhpc3RpbmcgaW4gdGhlIHBhcnNlci5cbiAqIDQuIGB0b0xvd2VyQ2FzZWAgdGhlIHJlc3VsdGluZyB2YWx1ZS5cbiAqL1xudmFyIHJ1bGVzID0gW1xuICBbJyMnLCAnaGFzaCddLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgYmFjay5cbiAgWyc/JywgJ3F1ZXJ5J10sICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXG4gIFsnLycsICdwYXRobmFtZSddLCAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBiYWNrLlxuICBbJ0AnLCAnYXV0aCcsIDFdLCAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgZnJvbnQuXG4gIFtOYU4sICdob3N0JywgdW5kZWZpbmVkLCAxLCAxXSwgICAgICAgLy8gU2V0IGxlZnQgb3ZlciB2YWx1ZS5cbiAgWy86KFxcZCspJC8sICdwb3J0JywgdW5kZWZpbmVkLCAxXSwgICAgLy8gUmVnRXhwIHRoZSBiYWNrLlxuICBbTmFOLCAnaG9zdG5hbWUnLCB1bmRlZmluZWQsIDEsIDFdICAgIC8vIFNldCBsZWZ0IG92ZXIuXG5dO1xuXG4vKipcbiAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIG5vdCBiZSBjb3BpZWQgb3IgaW5oZXJpdGVkIGZyb20uIFRoaXMgaXMgb25seSBuZWVkZWRcbiAqIGZvciBhbGwgbm9uIGJsb2IgVVJMJ3MgYXMgYSBibG9iIFVSTCBkb2VzIG5vdCBpbmNsdWRlIGEgaGFzaCwgb25seSB0aGVcbiAqIG9yaWdpbi5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIGlnbm9yZSA9IHsgaGFzaDogMSwgcXVlcnk6IDEgfTtcblxuLyoqXG4gKiBUaGUgbG9jYXRpb24gb2JqZWN0IGRpZmZlcnMgd2hlbiB5b3VyIGNvZGUgaXMgbG9hZGVkIHRocm91Z2ggYSBub3JtYWwgcGFnZSxcbiAqIFdvcmtlciBvciB0aHJvdWdoIGEgd29ya2VyIHVzaW5nIGEgYmxvYi4gQW5kIHdpdGggdGhlIGJsb2JibGUgYmVnaW5zIHRoZVxuICogdHJvdWJsZSBhcyB0aGUgbG9jYXRpb24gb2JqZWN0IHdpbGwgY29udGFpbiB0aGUgVVJMIG9mIHRoZSBibG9iLCBub3QgdGhlXG4gKiBsb2NhdGlvbiBvZiB0aGUgcGFnZSB3aGVyZSBvdXIgY29kZSBpcyBsb2FkZWQgaW4uIFRoZSBhY3R1YWwgb3JpZ2luIGlzXG4gKiBlbmNvZGVkIGluIHRoZSBgcGF0aG5hbWVgIHNvIHdlIGNhbiB0aGFua2Z1bGx5IGdlbmVyYXRlIGEgZ29vZCBcImRlZmF1bHRcIlxuICogbG9jYXRpb24gZnJvbSBpdCBzbyB3ZSBjYW4gZ2VuZXJhdGUgcHJvcGVyIHJlbGF0aXZlIFVSTCdzIGFnYWluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbG9jIE9wdGlvbmFsIGRlZmF1bHQgbG9jYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gbG9sY2F0aW9uIG9iamVjdC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGxvbGNhdGlvbihsb2MpIHtcbiAgbG9jID0gbG9jIHx8IGdsb2JhbC5sb2NhdGlvbiB8fCB7fTtcblxuICB2YXIgZmluYWxkZXN0aW5hdGlvbiA9IHt9XG4gICAgLCB0eXBlID0gdHlwZW9mIGxvY1xuICAgICwga2V5O1xuXG4gIGlmICgnYmxvYjonID09PSBsb2MucHJvdG9jb2wpIHtcbiAgICBmaW5hbGRlc3RpbmF0aW9uID0gbmV3IFVSTCh1bmVzY2FwZShsb2MucGF0aG5hbWUpLCB7fSk7XG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGUpIHtcbiAgICBmaW5hbGRlc3RpbmF0aW9uID0gbmV3IFVSTChsb2MsIHt9KTtcbiAgICBmb3IgKGtleSBpbiBpZ25vcmUpIGRlbGV0ZSBmaW5hbGRlc3RpbmF0aW9uW2tleV07XG4gIH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGUpIHtcbiAgICBmb3IgKGtleSBpbiBsb2MpIHtcbiAgICAgIGlmIChrZXkgaW4gaWdub3JlKSBjb250aW51ZTtcbiAgICAgIGZpbmFsZGVzdGluYXRpb25ba2V5XSA9IGxvY1trZXldO1xuICAgIH1cblxuICAgIGlmIChmaW5hbGRlc3RpbmF0aW9uLnNsYXNoZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZmluYWxkZXN0aW5hdGlvbi5zbGFzaGVzID0gc2xhc2hlcy50ZXN0KGxvYy5ocmVmKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmluYWxkZXN0aW5hdGlvbjtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiBQcm90b2NvbEV4dHJhY3RcbiAqIEB0eXBlIE9iamVjdFxuICogQHByb3BlcnR5IHtTdHJpbmd9IHByb3RvY29sIFByb3RvY29sIG1hdGNoZWQgaW4gdGhlIFVSTCwgaW4gbG93ZXJjYXNlLlxuICogQHByb3BlcnR5IHtCb29sZWFufSBzbGFzaGVzIGB0cnVlYCBpZiBwcm90b2NvbCBpcyBmb2xsb3dlZCBieSBcIi8vXCIsIGVsc2UgYGZhbHNlYC5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSByZXN0IFJlc3Qgb2YgdGhlIFVSTCB0aGF0IGlzIG5vdCBwYXJ0IG9mIHRoZSBwcm90b2NvbC5cbiAqL1xuXG4vKipcbiAqIEV4dHJhY3QgcHJvdG9jb2wgaW5mb3JtYXRpb24gZnJvbSBhIFVSTCB3aXRoL3dpdGhvdXQgZG91YmxlIHNsYXNoIChcIi8vXCIpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFVSTCB3ZSB3YW50IHRvIGV4dHJhY3QgZnJvbS5cbiAqIEByZXR1cm4ge1Byb3RvY29sRXh0cmFjdH0gRXh0cmFjdGVkIGluZm9ybWF0aW9uLlxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RQcm90b2NvbChhZGRyZXNzKSB7XG4gIHZhciBtYXRjaCA9IHByb3RvY29scmUuZXhlYyhhZGRyZXNzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3RvY29sOiBtYXRjaFsxXSA/IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCkgOiAnJyxcbiAgICBzbGFzaGVzOiAhIW1hdGNoWzJdLFxuICAgIHJlc3Q6IG1hdGNoWzNdXG4gIH07XG59XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlbGF0aXZlIFVSTCBwYXRobmFtZSBhZ2FpbnN0IGEgYmFzZSBVUkwgcGF0aG5hbWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJlbGF0aXZlIFBhdGhuYW1lIG9mIHRoZSByZWxhdGl2ZSBVUkwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYmFzZSBQYXRobmFtZSBvZiB0aGUgYmFzZSBVUkwuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlc29sdmVkIHBhdGhuYW1lLlxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmUocmVsYXRpdmUsIGJhc2UpIHtcbiAgdmFyIHBhdGggPSAoYmFzZSB8fCAnLycpLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmNvbmNhdChyZWxhdGl2ZS5zcGxpdCgnLycpKVxuICAgICwgaSA9IHBhdGgubGVuZ3RoXG4gICAgLCBsYXN0ID0gcGF0aFtpIC0gMV1cbiAgICAsIHVuc2hpZnQgPSBmYWxzZVxuICAgICwgdXAgPSAwO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAocGF0aFtpXSA9PT0gJy4nKSB7XG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKHBhdGhbaV0gPT09ICcuLicpIHtcbiAgICAgIHBhdGguc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBpZiAoaSA9PT0gMCkgdW5zaGlmdCA9IHRydWU7XG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgaWYgKHVuc2hpZnQpIHBhdGgudW5zaGlmdCgnJyk7XG4gIGlmIChsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJykgcGF0aC5wdXNoKCcnKTtcblxuICByZXR1cm4gcGF0aC5qb2luKCcvJyk7XG59XG5cbi8qKlxuICogVGhlIGFjdHVhbCBVUkwgaW5zdGFuY2UuIEluc3RlYWQgb2YgcmV0dXJuaW5nIGFuIG9iamVjdCB3ZSd2ZSBvcHRlZC1pbiB0b1xuICogY3JlYXRlIGFuIGFjdHVhbCBjb25zdHJ1Y3RvciBhcyBpdCdzIG11Y2ggbW9yZSBtZW1vcnkgZWZmaWNpZW50IGFuZFxuICogZmFzdGVyIGFuZCBpdCBwbGVhc2VzIG15IE9DRC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFVSTCB3ZSB3YW50IHRvIHBhcnNlLlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBsb2NhdGlvbiBMb2NhdGlvbiBkZWZhdWx0cyBmb3IgcmVsYXRpdmUgcGF0aHMuXG4gKiBAcGFyYW0ge0Jvb2xlYW58RnVuY3Rpb259IHBhcnNlciBQYXJzZXIgZm9yIHRoZSBxdWVyeSBzdHJpbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBVUkwoYWRkcmVzcywgbG9jYXRpb24sIHBhcnNlcikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVVJMKSkge1xuICAgIHJldHVybiBuZXcgVVJMKGFkZHJlc3MsIGxvY2F0aW9uLCBwYXJzZXIpO1xuICB9XG5cbiAgdmFyIHJlbGF0aXZlLCBleHRyYWN0ZWQsIHBhcnNlLCBpbnN0cnVjdGlvbiwgaW5kZXgsIGtleVxuICAgICwgaW5zdHJ1Y3Rpb25zID0gcnVsZXMuc2xpY2UoKVxuICAgICwgdHlwZSA9IHR5cGVvZiBsb2NhdGlvblxuICAgICwgdXJsID0gdGhpc1xuICAgICwgaSA9IDA7XG5cbiAgLy9cbiAgLy8gVGhlIGZvbGxvd2luZyBpZiBzdGF0ZW1lbnRzIGFsbG93cyB0aGlzIG1vZHVsZSB0d28gaGF2ZSBjb21wYXRpYmlsaXR5IHdpdGhcbiAgLy8gMiBkaWZmZXJlbnQgQVBJOlxuICAvL1xuICAvLyAxLiBOb2RlLmpzJ3MgYHVybC5wYXJzZWAgYXBpIHdoaWNoIGFjY2VwdHMgYSBVUkwsIGJvb2xlYW4gYXMgYXJndW1lbnRzXG4gIC8vICAgIHdoZXJlIHRoZSBib29sZWFuIGluZGljYXRlcyB0aGF0IHRoZSBxdWVyeSBzdHJpbmcgc2hvdWxkIGFsc28gYmUgcGFyc2VkLlxuICAvL1xuICAvLyAyLiBUaGUgYFVSTGAgaW50ZXJmYWNlIG9mIHRoZSBicm93c2VyIHdoaWNoIGFjY2VwdHMgYSBVUkwsIG9iamVjdCBhc1xuICAvLyAgICBhcmd1bWVudHMuIFRoZSBzdXBwbGllZCBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIGRlZmF1bHQgdmFsdWVzIC8gZmFsbC1iYWNrXG4gIC8vICAgIGZvciByZWxhdGl2ZSBwYXRocy5cbiAgLy9cbiAgaWYgKCdvYmplY3QnICE9PSB0eXBlICYmICdzdHJpbmcnICE9PSB0eXBlKSB7XG4gICAgcGFyc2VyID0gbG9jYXRpb247XG4gICAgbG9jYXRpb24gPSBudWxsO1xuICB9XG5cbiAgaWYgKHBhcnNlciAmJiAnZnVuY3Rpb24nICE9PSB0eXBlb2YgcGFyc2VyKSBwYXJzZXIgPSBxcy5wYXJzZTtcblxuICBsb2NhdGlvbiA9IGxvbGNhdGlvbihsb2NhdGlvbik7XG5cbiAgLy9cbiAgLy8gRXh0cmFjdCBwcm90b2NvbCBpbmZvcm1hdGlvbiBiZWZvcmUgcnVubmluZyB0aGUgaW5zdHJ1Y3Rpb25zLlxuICAvL1xuICBleHRyYWN0ZWQgPSBleHRyYWN0UHJvdG9jb2woYWRkcmVzcyB8fCAnJyk7XG4gIHJlbGF0aXZlID0gIWV4dHJhY3RlZC5wcm90b2NvbCAmJiAhZXh0cmFjdGVkLnNsYXNoZXM7XG4gIHVybC5zbGFzaGVzID0gZXh0cmFjdGVkLnNsYXNoZXMgfHwgcmVsYXRpdmUgJiYgbG9jYXRpb24uc2xhc2hlcztcbiAgdXJsLnByb3RvY29sID0gZXh0cmFjdGVkLnByb3RvY29sIHx8IGxvY2F0aW9uLnByb3RvY29sIHx8ICcnO1xuICBhZGRyZXNzID0gZXh0cmFjdGVkLnJlc3Q7XG5cbiAgLy9cbiAgLy8gV2hlbiB0aGUgYXV0aG9yaXR5IGNvbXBvbmVudCBpcyBhYnNlbnQgdGhlIFVSTCBzdGFydHMgd2l0aCBhIHBhdGhcbiAgLy8gY29tcG9uZW50LlxuICAvL1xuICBpZiAoIWV4dHJhY3RlZC5zbGFzaGVzKSBpbnN0cnVjdGlvbnNbMl0gPSBbLyguKikvLCAncGF0aG5hbWUnXTtcblxuICBmb3IgKDsgaSA8IGluc3RydWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb25zW2ldO1xuICAgIHBhcnNlID0gaW5zdHJ1Y3Rpb25bMF07XG4gICAga2V5ID0gaW5zdHJ1Y3Rpb25bMV07XG5cbiAgICBpZiAocGFyc2UgIT09IHBhcnNlKSB7XG4gICAgICB1cmxba2V5XSA9IGFkZHJlc3M7XG4gICAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHBhcnNlKSB7XG4gICAgICBpZiAofihpbmRleCA9IGFkZHJlc3MuaW5kZXhPZihwYXJzZSkpKSB7XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PT0gdHlwZW9mIGluc3RydWN0aW9uWzJdKSB7XG4gICAgICAgICAgdXJsW2tleV0gPSBhZGRyZXNzLnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZShpbmRleCArIGluc3RydWN0aW9uWzJdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cmxba2V5XSA9IGFkZHJlc3Muc2xpY2UoaW5kZXgpO1xuICAgICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKGluZGV4ID0gcGFyc2UuZXhlYyhhZGRyZXNzKSkpIHtcbiAgICAgIHVybFtrZXldID0gaW5kZXhbMV07XG4gICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleC5pbmRleCk7XG4gICAgfVxuXG4gICAgdXJsW2tleV0gPSB1cmxba2V5XSB8fCAoXG4gICAgICByZWxhdGl2ZSAmJiBpbnN0cnVjdGlvblszXSA/IGxvY2F0aW9uW2tleV0gfHwgJycgOiAnJ1xuICAgICk7XG5cbiAgICAvL1xuICAgIC8vIEhvc3RuYW1lLCBob3N0IGFuZCBwcm90b2NvbCBzaG91bGQgYmUgbG93ZXJjYXNlZCBzbyB0aGV5IGNhbiBiZSB1c2VkIHRvXG4gICAgLy8gY3JlYXRlIGEgcHJvcGVyIGBvcmlnaW5gLlxuICAgIC8vXG4gICAgaWYgKGluc3RydWN0aW9uWzRdKSB1cmxba2V5XSA9IHVybFtrZXldLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICAvL1xuICAvLyBBbHNvIHBhcnNlIHRoZSBzdXBwbGllZCBxdWVyeSBzdHJpbmcgaW4gdG8gYW4gb2JqZWN0LiBJZiB3ZSdyZSBzdXBwbGllZFxuICAvLyB3aXRoIGEgY3VzdG9tIHBhcnNlciBhcyBmdW5jdGlvbiB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGJ1aWxkLWluXG4gIC8vIHBhcnNlci5cbiAgLy9cbiAgaWYgKHBhcnNlcikgdXJsLnF1ZXJ5ID0gcGFyc2VyKHVybC5xdWVyeSk7XG5cbiAgLy9cbiAgLy8gSWYgdGhlIFVSTCBpcyByZWxhdGl2ZSwgcmVzb2x2ZSB0aGUgcGF0aG5hbWUgYWdhaW5zdCB0aGUgYmFzZSBVUkwuXG4gIC8vXG4gIGlmIChcbiAgICAgIHJlbGF0aXZlXG4gICAgJiYgbG9jYXRpb24uc2xhc2hlc1xuICAgICYmIHVybC5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJ1xuICAgICYmICh1cmwucGF0aG5hbWUgIT09ICcnIHx8IGxvY2F0aW9uLnBhdGhuYW1lICE9PSAnJylcbiAgKSB7XG4gICAgdXJsLnBhdGhuYW1lID0gcmVzb2x2ZSh1cmwucGF0aG5hbWUsIGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfVxuXG4gIC8vXG4gIC8vIFdlIHNob3VsZCBub3QgYWRkIHBvcnQgbnVtYmVycyBpZiB0aGV5IGFyZSBhbHJlYWR5IHRoZSBkZWZhdWx0IHBvcnQgbnVtYmVyXG4gIC8vIGZvciBhIGdpdmVuIHByb3RvY29sLiBBcyB0aGUgaG9zdCBhbHNvIGNvbnRhaW5zIHRoZSBwb3J0IG51bWJlciB3ZSdyZSBnb2luZ1xuICAvLyBvdmVycmlkZSBpdCB3aXRoIHRoZSBob3N0bmFtZSB3aGljaCBjb250YWlucyBubyBwb3J0IG51bWJlci5cbiAgLy9cbiAgaWYgKCFyZXF1aXJlZCh1cmwucG9ydCwgdXJsLnByb3RvY29sKSkge1xuICAgIHVybC5ob3N0ID0gdXJsLmhvc3RuYW1lO1xuICAgIHVybC5wb3J0ID0gJyc7XG4gIH1cblxuICAvL1xuICAvLyBQYXJzZSBkb3duIHRoZSBgYXV0aGAgZm9yIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQuXG4gIC8vXG4gIHVybC51c2VybmFtZSA9IHVybC5wYXNzd29yZCA9ICcnO1xuICBpZiAodXJsLmF1dGgpIHtcbiAgICBpbnN0cnVjdGlvbiA9IHVybC5hdXRoLnNwbGl0KCc6Jyk7XG4gICAgdXJsLnVzZXJuYW1lID0gaW5zdHJ1Y3Rpb25bMF0gfHwgJyc7XG4gICAgdXJsLnBhc3N3b3JkID0gaW5zdHJ1Y3Rpb25bMV0gfHwgJyc7XG4gIH1cblxuICB1cmwub3JpZ2luID0gdXJsLnByb3RvY29sICYmIHVybC5ob3N0ICYmIHVybC5wcm90b2NvbCAhPT0gJ2ZpbGU6J1xuICAgID8gdXJsLnByb3RvY29sICsnLy8nKyB1cmwuaG9zdFxuICAgIDogJ251bGwnO1xuXG4gIC8vXG4gIC8vIFRoZSBocmVmIGlzIGp1c3QgdGhlIGNvbXBpbGVkIHJlc3VsdC5cbiAgLy9cbiAgdXJsLmhyZWYgPSB1cmwudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgY2hhbmdpbmcgcHJvcGVydGllcyBpbiB0aGUgVVJMIGluc3RhbmNlIHRvXG4gKiBpbnN1cmUgdGhhdCB0aGV5IGFsbCBwcm9wYWdhdGUgY29ycmVjdGx5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJ0ICAgICAgICAgIFByb3BlcnR5IHdlIG5lZWQgdG8gYWRqdXN0LlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgICAgICAgICAgVGhlIG5ld2x5IGFzc2lnbmVkIHZhbHVlLlxuICogQHBhcmFtIHtCb29sZWFufEZ1bmN0aW9ufSBmbiAgV2hlbiBzZXR0aW5nIHRoZSBxdWVyeSwgaXQgd2lsbCBiZSB0aGUgZnVuY3Rpb25cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQgdG8gcGFyc2UgdGhlIHF1ZXJ5LlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiBzZXR0aW5nIHRoZSBwcm90b2NvbCwgZG91YmxlIHNsYXNoIHdpbGwgYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQgZnJvbSB0aGUgZmluYWwgdXJsIGlmIGl0IGlzIHRydWUuXG4gKiBAcmV0dXJucyB7VVJMfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gc2V0KHBhcnQsIHZhbHVlLCBmbikge1xuICB2YXIgdXJsID0gdGhpcztcblxuICBzd2l0Y2ggKHBhcnQpIHtcbiAgICBjYXNlICdxdWVyeSc6XG4gICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAoZm4gfHwgcXMucGFyc2UpKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvcnQnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICghcmVxdWlyZWQodmFsdWUsIHVybC5wcm90b2NvbCkpIHtcbiAgICAgICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWU7XG4gICAgICAgIHVybFtwYXJ0XSA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZSArJzonKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdob3N0bmFtZSc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKHVybC5wb3J0KSB2YWx1ZSArPSAnOicrIHVybC5wb3J0O1xuICAgICAgdXJsLmhvc3QgPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaG9zdCc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKC86XFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgdXJsLnBvcnQgPSB2YWx1ZS5wb3AoKTtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWUuam9pbignOicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWU7XG4gICAgICAgIHVybC5wb3J0ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncHJvdG9jb2wnOlxuICAgICAgdXJsLnByb3RvY29sID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHVybC5zbGFzaGVzID0gIWZuO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXRobmFtZSc6XG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBwYXJ0ID09PSAncGF0aG5hbWUnID8gJy8nIDogJyMnO1xuICAgICAgICB1cmxbcGFydF0gPSB2YWx1ZS5jaGFyQXQoMCkgIT09IGNoYXIgPyBjaGFyICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGlucyA9IHJ1bGVzW2ldO1xuXG4gICAgaWYgKGluc1s0XSkgdXJsW2luc1sxXV0gPSB1cmxbaW5zWzFdXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdXJsLm9yaWdpbiA9IHVybC5wcm90b2NvbCAmJiB1cmwuaG9zdCAmJiB1cmwucHJvdG9jb2wgIT09ICdmaWxlOidcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcbiAgICA6ICdudWxsJztcblxuICB1cmwuaHJlZiA9IHVybC50b1N0cmluZygpO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBwcm9wZXJ0aWVzIGJhY2sgaW4gdG8gYSB2YWxpZCBhbmQgZnVsbCBVUkwgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZ2lmeSBPcHRpb25hbCBxdWVyeSBzdHJpbmdpZnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcoc3RyaW5naWZ5KSB7XG4gIGlmICghc3RyaW5naWZ5IHx8ICdmdW5jdGlvbicgIT09IHR5cGVvZiBzdHJpbmdpZnkpIHN0cmluZ2lmeSA9IHFzLnN0cmluZ2lmeTtcblxuICB2YXIgcXVlcnlcbiAgICAsIHVybCA9IHRoaXNcbiAgICAsIHByb3RvY29sID0gdXJsLnByb3RvY29sO1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5jaGFyQXQocHJvdG9jb2wubGVuZ3RoIC0gMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonO1xuXG4gIHZhciByZXN1bHQgPSBwcm90b2NvbCArICh1cmwuc2xhc2hlcyA/ICcvLycgOiAnJyk7XG5cbiAgaWYgKHVybC51c2VybmFtZSkge1xuICAgIHJlc3VsdCArPSB1cmwudXNlcm5hbWU7XG4gICAgaWYgKHVybC5wYXNzd29yZCkgcmVzdWx0ICs9ICc6JysgdXJsLnBhc3N3b3JkO1xuICAgIHJlc3VsdCArPSAnQCc7XG4gIH1cblxuICByZXN1bHQgKz0gdXJsLmhvc3QgKyB1cmwucGF0aG5hbWU7XG5cbiAgcXVlcnkgPSAnb2JqZWN0JyA9PT0gdHlwZW9mIHVybC5xdWVyeSA/IHN0cmluZ2lmeSh1cmwucXVlcnkpIDogdXJsLnF1ZXJ5O1xuICBpZiAocXVlcnkpIHJlc3VsdCArPSAnPycgIT09IHF1ZXJ5LmNoYXJBdCgwKSA/ICc/JysgcXVlcnkgOiBxdWVyeTtcblxuICBpZiAodXJsLmhhc2gpIHJlc3VsdCArPSB1cmwuaGFzaDtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5VUkwucHJvdG90eXBlID0geyBzZXQ6IHNldCwgdG9TdHJpbmc6IHRvU3RyaW5nIH07XG5cbi8vXG4vLyBFeHBvc2UgdGhlIFVSTCBwYXJzZXIgYW5kIHNvbWUgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRoYXQgbWlnaHQgYmUgdXNlZnVsIGZvclxuLy8gb3RoZXJzIG9yIHRlc3RpbmcuXG4vL1xuVVJMLmV4dHJhY3RQcm90b2NvbCA9IGV4dHJhY3RQcm90b2NvbDtcblVSTC5sb2NhdGlvbiA9IGxvbGNhdGlvbjtcblVSTC5xcyA9IHFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVSTDtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qIVxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbnZhciBpbXBsID0gcmVxdWlyZShcIi4vaW1wbFwiKTtcbnZhciBkZXN0cnVjdEltYWdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIF9hID0gdmFsdWUuc3BsaXQoJ1xcdTAwYTBcXHUwMGEwJyksIG9yaWdpbmFsVXJsID0gX2FbMF0sIHByb3hpZWRVcmwgPSBfYVsxXSwgYWx0VGV4dCA9IF9hWzJdO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9yaWdpbmFsVXJsOiBvcmlnaW5hbFVybCxcbiAgICAgICAgcHJveGllZFVybDogcHJveGllZFVybCxcbiAgICAgICAgYWx0VGV4dDogYWx0VGV4dCxcbiAgICB9O1xufTtcbnZhciB0cmFuc2Zvcm1Sb3dzSGVscGVyID0gZnVuY3Rpb24gKGlzQ29tcGFyaXNvblJvdywgcm93cywgc2NoZW1hKSB7XG4gICAgcmV0dXJuIHJvd3MubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIG5ld1JvdyA9IHsgaXNDb21wYXJpc29uUm93OiBpc0NvbXBhcmlzb25Sb3cgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzY2hlbWFGaWVsZCA9IHNjaGVtYVtpXTtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSBzY2hlbWFGaWVsZC5zZW1hbnRpYyA9PT0gaW1wbC5TY2hlbWFTZW1hbnRpY1R5cGUuSU1BR0VcbiAgICAgICAgICAgICAgICA/IC8vIFdlIGtub3cgdGhhdCB0aGUgcm93IGlzIGEgc3RyaW5nIGlmIHRoZSB0eXBlIGlzIElNQUdFLlxuICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdEltYWdlKHJvd1tpXSlcbiAgICAgICAgICAgICAgICA6IHJvd1tpXTtcbiAgICAgICAgICAgIG5ld1Jvd1tzY2hlbWFGaWVsZC5uYW1lXSA9IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3Um93O1xuICAgIH0pO1xufTtcbnZhciB0cmFuc2Zvcm1Sb3dzID0gZnVuY3Rpb24gKHJvd3MsIHNjaGVtYSkge1xuICAgIHZhciBjb21wYXJpc29uUm93cyA9IHRyYW5zZm9ybVJvd3NIZWxwZXIodHJ1ZSwgcm93cy5jb21wYXJpc29uUm93cywgc2NoZW1hKTtcbiAgICB2YXIgcHJpbWFyeVJvd3MgPSB0cmFuc2Zvcm1Sb3dzSGVscGVyKGZhbHNlLCByb3dzLnByaW1hcnlSb3dzLCBzY2hlbWEpO1xuICAgIHJldHVybiBjb21wYXJpc29uUm93cy5jb25jYXQocHJpbWFyeVJvd3MpO1xufTtcbi8vIFRPRE8obWpoYW1yaWNrKSAtIHRoZXJlIGlzIHByb2JhYmx5IGEgY2xlYW5lciB3YXkgdG8gZG8gdGhpcy5cbnZhciB0b0ZpZWxkVHlwZSA9IGZ1bmN0aW9uIChzY2hlbWFFbnRyeSkge1xuICAgIGlmIChzY2hlbWFFbnRyeS5zZW1hbnRpYyA9PT0gaW1wbC5TY2hlbWFTZW1hbnRpY1R5cGUuQ1VSUkVOQ1kpIHtcbiAgICAgICAgdmFyIGZpZWxkVHlwZSA9IGltcGwuU2NoZW1hU2VtYW50aWNUeXBlW3NjaGVtYUVudHJ5LnNlbWFudGljXSArXG4gICAgICAgICAgICAnXycgK1xuICAgICAgICAgICAgaW1wbC5TY2hlbWFTZW1hbnRpY09wdGlvbltzY2hlbWFFbnRyeS5zZW1hbnRpY09wdGlvbl07XG4gICAgICAgIHJldHVybiBpbXBsLkZpZWxkVHlwZVtmaWVsZFR5cGVdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGltcGwuRmllbGRUeXBlW2ltcGwuU2NoZW1hU2VtYW50aWNUeXBlW3NjaGVtYUVudHJ5LnNlbWFudGljXV07XG4gICAgfVxufTtcbnZhciBzY2hlbWFUb0ZpZWxkID0gZnVuY3Rpb24gKHNjaGVtYUVudHJ5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29uY2VwdDogc2NoZW1hRW50cnkuY29uY2VwdCxcbiAgICAgICAgaWQ6IHNjaGVtYUVudHJ5Lm5hbWUsXG4gICAgICAgIG5hbWU6IHNjaGVtYUVudHJ5LmxhYmVsLFxuICAgICAgICB0eXBlOiB0b0ZpZWxkVHlwZShzY2hlbWFFbnRyeSksXG4gICAgfTtcbn07XG52YXIgdHJhbnNmb3JtU2NoZW1hID0gZnVuY3Rpb24gKHNjaGVtYSkge1xuICAgIHZhciBmaWVsZHMgPSB7fTtcbiAgICBzY2hlbWEuZm9yRWFjaChmdW5jdGlvbiAoc2NoZW1hRW50cnkpIHtcbiAgICAgICAgZmllbGRzW3NjaGVtYUVudHJ5Lm5hbWVdID0gc2NoZW1hVG9GaWVsZChzY2hlbWFFbnRyeSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpZWxkcztcbn07XG5leHBvcnRzLnRyYW5zZm9ybURhdGEgPSBmdW5jdGlvbiAocmVjZWl2ZU1lc3NhZ2UpIHtcbiAgICB2YXIgam9pbmVkUm93cyA9IHtcbiAgICAgICAgc3R5bGU6IHJlY2VpdmVNZXNzYWdlLmRhdGEuc3R5bGUsXG4gICAgICAgIHR5cGU6IHJlY2VpdmVNZXNzYWdlLmRhdGEudHlwZSxcbiAgICAgICAgZmllbGRCeUlkOiB0cmFuc2Zvcm1TY2hlbWEocmVjZWl2ZU1lc3NhZ2UuZGF0YS5zY2hlbWEpLFxuICAgICAgICBmaWVsZHM6IHJlY2VpdmVNZXNzYWdlLmRhdGEuc2NoZW1hLm1hcChzY2hlbWFUb0ZpZWxkKSxcbiAgICAgICAgcm93czogdHJhbnNmb3JtUm93cyhyZWNlaXZlTWVzc2FnZS5kYXRhLnJvd3MsIHJlY2VpdmVNZXNzYWdlLmRhdGEuc2NoZW1hKSxcbiAgICB9O1xuICAgIHJldHVybiBqb2luZWRSb3dzO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX3RoaXMgPSB0aGlzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyohXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xudmFyIGRhdGFfdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi9kYXRhLXRyYW5zZm9ybVwiKTtcbnZhciBwYXJzZSA9IHJlcXVpcmUoXCJ1cmwtcGFyc2VcIik7XG4vLyBUT0RPKG1qaGFtcmljaykgLSB1c2UgeWFybiBsaW5rIHNvIHRoaXMgY2FuIHdvcmsgbG9jYWxseSwgYW5kIHB1dCBhIGxpdHRsZVxuLy8gc29tZXRoaW5nIGluIHNvbWUgZG9jcyBzbyBJIGNhbiByZW1lbWJlciBob3cgdGhpcyB3b3JrcyBsYXRlci5cbi8vIE1lc3NhZ2VzIEZyb20gRGF0YSBTdHVkaW9cbnZhciBNZXNzYWdlVHlwZTtcbihmdW5jdGlvbiAoTWVzc2FnZVR5cGUpIHtcbiAgICBNZXNzYWdlVHlwZVtcIlJFTkRFUlwiXSA9IFwiUkVOREVSXCI7XG59KShNZXNzYWdlVHlwZSA9IGV4cG9ydHMuTWVzc2FnZVR5cGUgfHwgKGV4cG9ydHMuTWVzc2FnZVR5cGUgPSB7fSkpO1xudmFyIENvbmNlcHRUeXBlO1xuKGZ1bmN0aW9uIChDb25jZXB0VHlwZSkge1xuICAgIENvbmNlcHRUeXBlW1wiTWV0cmljXCJdID0gXCJNRVRSSUNcIjtcbiAgICBDb25jZXB0VHlwZVtcIkRpbWVuc2lvblwiXSA9IFwiRElNRU5TSU9OXCI7XG59KShDb25jZXB0VHlwZSA9IGV4cG9ydHMuQ29uY2VwdFR5cGUgfHwgKGV4cG9ydHMuQ29uY2VwdFR5cGUgPSB7fSkpO1xudmFyIFNjaGVtYURhdGFUeXBlO1xuKGZ1bmN0aW9uIChTY2hlbWFEYXRhVHlwZSkge1xuICAgIFNjaGVtYURhdGFUeXBlW1wiU1RSSU5HXCJdID0gXCJTVFJJTkdcIjtcbiAgICBTY2hlbWFEYXRhVHlwZVtcIk5VTUJFUlwiXSA9IFwiTlVNQkVSXCI7XG4gICAgU2NoZW1hRGF0YVR5cGVbXCJCT09MRUFOXCJdID0gXCJCT09MRUFOXCI7XG59KShTY2hlbWFEYXRhVHlwZSA9IGV4cG9ydHMuU2NoZW1hRGF0YVR5cGUgfHwgKGV4cG9ydHMuU2NoZW1hRGF0YVR5cGUgPSB7fSkpO1xudmFyIFNjaGVtYVNlbWFudGljVHlwZTtcbihmdW5jdGlvbiAoU2NoZW1hU2VtYW50aWNUeXBlKSB7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiWUVBUlwiXSA9IFwiWUVBUlwiO1xuICAgIFNjaGVtYVNlbWFudGljVHlwZVtcIllFQVJfUVVBUlRFUlwiXSA9IFwiWUVBUl9RVUFSVEVSXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiWUVBUl9NT05USFwiXSA9IFwiWUVBUl9NT05USFwiO1xuICAgIFNjaGVtYVNlbWFudGljVHlwZVtcIllFQVJfV0VFS1wiXSA9IFwiWUVBUl9XRUVLXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiWUVBUl9NT05USF9EQVlcIl0gPSBcIllFQVJfTU9OVEhfREFZXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiWUVBUl9NT05USF9EQVlfSE9VUlwiXSA9IFwiWUVBUl9NT05USF9EQVlfSE9VUlwiO1xuICAgIFNjaGVtYVNlbWFudGljVHlwZVtcIlFVQVJURVJcIl0gPSBcIlFVQVJURVJcIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJNT05USFwiXSA9IFwiTU9OVEhcIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJXRUVLXCJdID0gXCJXRUVLXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiTU9OVEhfREFZXCJdID0gXCJNT05USF9EQVlcIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJEQVlfT0ZfV0VFS1wiXSA9IFwiREFZX09GX1dFRUtcIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJEQVlcIl0gPSBcIkRBWVwiO1xuICAgIFNjaGVtYVNlbWFudGljVHlwZVtcIkhPVVJcIl0gPSBcIkhPVVJcIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJNSU5VVEVcIl0gPSBcIk1JTlVURVwiO1xuICAgIFNjaGVtYVNlbWFudGljVHlwZVtcIkRVUkFUSU9OXCJdID0gXCJEVVJBVElPTlwiO1xuICAgIFNjaGVtYVNlbWFudGljVHlwZVtcIkNPVU5UUllcIl0gPSBcIkNPVU5UUllcIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJDT1VOVFJZX0NPREVcIl0gPSBcIkNPVU5UUllfQ09ERVwiO1xuICAgIFNjaGVtYVNlbWFudGljVHlwZVtcIkNPTlRJTkVOVFwiXSA9IFwiQ09OVElORU5UXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiQ09OVElORU5UX0NPREVcIl0gPSBcIkNPTlRJTkVOVF9DT0RFXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiU1VCX0NPTlRJTkVOVFwiXSA9IFwiU1VCX0NPTlRJTkVOVFwiO1xuICAgIFNjaGVtYVNlbWFudGljVHlwZVtcIlNVQl9DT05USU5FTlRfQ09ERVwiXSA9IFwiU1VCX0NPTlRJTkVOVF9DT0RFXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiUkVHSU9OXCJdID0gXCJSRUdJT05cIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJSRUdJT05fQ09ERVwiXSA9IFwiUkVHSU9OX0NPREVcIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJDSVRZXCJdID0gXCJDSVRZXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiQ0lUWV9DT0RFXCJdID0gXCJDSVRZX0NPREVcIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJNRVRST19DT0RFXCJdID0gXCJNRVRST19DT0RFXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiTEFUSVRVREVfTE9OR0lUVURFXCJdID0gXCJMQVRJVFVERV9MT05HSVRVREVcIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJOVU1CRVJcIl0gPSBcIk5VTUJFUlwiO1xuICAgIFNjaGVtYVNlbWFudGljVHlwZVtcIlBFUkNFTlRcIl0gPSBcIlBFUkNFTlRcIjtcbiAgICBTY2hlbWFTZW1hbnRpY1R5cGVbXCJURVhUXCJdID0gXCJURVhUXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiQk9PTEVBTlwiXSA9IFwiQk9PTEVBTlwiO1xuICAgIFNjaGVtYVNlbWFudGljVHlwZVtcIlVSTFwiXSA9IFwiVVJMXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiSU1BR0VcIl0gPSBcIklNQUdFXCI7XG4gICAgU2NoZW1hU2VtYW50aWNUeXBlW1wiQ1VSUkVOQ1lcIl0gPSBcIkNVUlJFTkNZXCI7XG59KShTY2hlbWFTZW1hbnRpY1R5cGUgPSBleHBvcnRzLlNjaGVtYVNlbWFudGljVHlwZSB8fCAoZXhwb3J0cy5TY2hlbWFTZW1hbnRpY1R5cGUgPSB7fSkpO1xudmFyIFNjaGVtYVNlbWFudGljT3B0aW9uO1xuKGZ1bmN0aW9uIChTY2hlbWFTZW1hbnRpY09wdGlvbikge1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiQUVEXCJdID0gXCJBRURcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIkFMTFwiXSA9IFwiQUxMXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJBUlNcIl0gPSBcIkFSU1wiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiQVVEXCJdID0gXCJBVURcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIkJEVFwiXSA9IFwiQkRUXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJCR05cIl0gPSBcIkJHTlwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiQk9CXCJdID0gXCJCT0JcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIkJSTFwiXSA9IFwiQlJMXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJDQURcIl0gPSBcIkNBRFwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiQ0RGXCJdID0gXCJDREZcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIkNIRlwiXSA9IFwiQ0hGXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJDTFBcIl0gPSBcIkNMUFwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiQ05ZXCJdID0gXCJDTllcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIkNPUFwiXSA9IFwiQ09QXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJDUkNcIl0gPSBcIkNSQ1wiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiQ1pLXCJdID0gXCJDWktcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIkRLS1wiXSA9IFwiREtLXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJET1BcIl0gPSBcIkRPUFwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiRUdQXCJdID0gXCJFR1BcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIkVUQlwiXSA9IFwiRVRCXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJFVVJcIl0gPSBcIkVVUlwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiR0JQXCJdID0gXCJHQlBcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIkhLRFwiXSA9IFwiSEtEXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJIUktcIl0gPSBcIkhSS1wiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiSFVGXCJdID0gXCJIVUZcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIklEUlwiXSA9IFwiSURSXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJJTFNcIl0gPSBcIklMU1wiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiSU5SXCJdID0gXCJJTlJcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIklSUlwiXSA9IFwiSVJSXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJJU0tcIl0gPSBcIklTS1wiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiSk1EXCJdID0gXCJKTURcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIkpQWVwiXSA9IFwiSlBZXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJLUldcIl0gPSBcIktSV1wiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiTEtSXCJdID0gXCJMS1JcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIkxUTFwiXSA9IFwiTFRMXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJNTlRcIl0gPSBcIk1OVFwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiTVZSXCJdID0gXCJNVlJcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIk1YTlwiXSA9IFwiTVhOXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJNWVJcIl0gPSBcIk1ZUlwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiTk9LXCJdID0gXCJOT0tcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIk5aRFwiXSA9IFwiTlpEXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJQQUJcIl0gPSBcIlBBQlwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiUEVOXCJdID0gXCJQRU5cIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIlBIUFwiXSA9IFwiUEhQXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJQS1JcIl0gPSBcIlBLUlwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiUExOXCJdID0gXCJQTE5cIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIlJPTlwiXSA9IFwiUk9OXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJSU0RcIl0gPSBcIlJTRFwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiUlVCXCJdID0gXCJSVUJcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIlNBUlwiXSA9IFwiU0FSXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJTRUtcIl0gPSBcIlNFS1wiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiU0dEXCJdID0gXCJTR0RcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIlRIQlwiXSA9IFwiVEhCXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJUUllcIl0gPSBcIlRSWVwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiVFdEXCJdID0gXCJUV0RcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIlRaU1wiXSA9IFwiVFpTXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJVQUhcIl0gPSBcIlVBSFwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiVVNEXCJdID0gXCJVU0RcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIlVZVVwiXSA9IFwiVVlVXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJWRUZcIl0gPSBcIlZFRlwiO1xuICAgIFNjaGVtYVNlbWFudGljT3B0aW9uW1wiVk5EXCJdID0gXCJWTkRcIjtcbiAgICBTY2hlbWFTZW1hbnRpY09wdGlvbltcIllFUlwiXSA9IFwiWUVSXCI7XG4gICAgU2NoZW1hU2VtYW50aWNPcHRpb25bXCJaQVJcIl0gPSBcIlpBUlwiO1xufSkoU2NoZW1hU2VtYW50aWNPcHRpb24gPSBleHBvcnRzLlNjaGVtYVNlbWFudGljT3B0aW9uIHx8IChleHBvcnRzLlNjaGVtYVNlbWFudGljT3B0aW9uID0ge30pKTtcbnZhciBGaWVsZFR5cGU7XG4oZnVuY3Rpb24gKEZpZWxkVHlwZSkge1xuICAgIEZpZWxkVHlwZVtcIllFQVJcIl0gPSBcIllFQVJcIjtcbiAgICBGaWVsZFR5cGVbXCJZRUFSX1FVQVJURVJcIl0gPSBcIllFQVJfUVVBUlRFUlwiO1xuICAgIEZpZWxkVHlwZVtcIllFQVJfTU9OVEhcIl0gPSBcIllFQVJfTU9OVEhcIjtcbiAgICBGaWVsZFR5cGVbXCJZRUFSX1dFRUtcIl0gPSBcIllFQVJfV0VFS1wiO1xuICAgIEZpZWxkVHlwZVtcIllFQVJfTU9OVEhfREFZXCJdID0gXCJZRUFSX01PTlRIX0RBWVwiO1xuICAgIEZpZWxkVHlwZVtcIllFQVJfTU9OVEhfREFZX0hPVVJcIl0gPSBcIllFQVJfTU9OVEhfREFZX0hPVVJcIjtcbiAgICBGaWVsZFR5cGVbXCJRVUFSVEVSXCJdID0gXCJRVUFSVEVSXCI7XG4gICAgRmllbGRUeXBlW1wiTU9OVEhcIl0gPSBcIk1PTlRIXCI7XG4gICAgRmllbGRUeXBlW1wiV0VFS1wiXSA9IFwiV0VFS1wiO1xuICAgIEZpZWxkVHlwZVtcIk1PTlRIX0RBWVwiXSA9IFwiTU9OVEhfREFZXCI7XG4gICAgRmllbGRUeXBlW1wiREFZX09GX1dFRUtcIl0gPSBcIkRBWV9PRl9XRUVLXCI7XG4gICAgRmllbGRUeXBlW1wiREFZXCJdID0gXCJEQVlcIjtcbiAgICBGaWVsZFR5cGVbXCJIT1VSXCJdID0gXCJIT1VSXCI7XG4gICAgRmllbGRUeXBlW1wiTUlOVVRFXCJdID0gXCJNSU5VVEVcIjtcbiAgICBGaWVsZFR5cGVbXCJEVVJBVElPTlwiXSA9IFwiRFVSQVRJT05cIjtcbiAgICBGaWVsZFR5cGVbXCJDT1VOVFJZXCJdID0gXCJDT1VOVFJZXCI7XG4gICAgRmllbGRUeXBlW1wiQ09VTlRSWV9DT0RFXCJdID0gXCJDT1VOVFJZX0NPREVcIjtcbiAgICBGaWVsZFR5cGVbXCJDT05USU5FTlRcIl0gPSBcIkNPTlRJTkVOVFwiO1xuICAgIEZpZWxkVHlwZVtcIkNPTlRJTkVOVF9DT0RFXCJdID0gXCJDT05USU5FTlRfQ09ERVwiO1xuICAgIEZpZWxkVHlwZVtcIlNVQl9DT05USU5FTlRcIl0gPSBcIlNVQl9DT05USU5FTlRcIjtcbiAgICBGaWVsZFR5cGVbXCJTVUJfQ09OVElORU5UX0NPREVcIl0gPSBcIlNVQl9DT05USU5FTlRfQ09ERVwiO1xuICAgIEZpZWxkVHlwZVtcIlJFR0lPTlwiXSA9IFwiUkVHSU9OXCI7XG4gICAgRmllbGRUeXBlW1wiUkVHSU9OX0NPREVcIl0gPSBcIlJFR0lPTl9DT0RFXCI7XG4gICAgRmllbGRUeXBlW1wiQ0lUWVwiXSA9IFwiQ0lUWVwiO1xuICAgIEZpZWxkVHlwZVtcIkNJVFlfQ09ERVwiXSA9IFwiQ0lUWV9DT0RFXCI7XG4gICAgRmllbGRUeXBlW1wiTUVUUk9fQ09ERVwiXSA9IFwiTUVUUk9fQ09ERVwiO1xuICAgIEZpZWxkVHlwZVtcIkxBVElUVURFX0xPTkdJVFVERVwiXSA9IFwiTEFUSVRVREVfTE9OR0lUVURFXCI7XG4gICAgRmllbGRUeXBlW1wiTlVNQkVSXCJdID0gXCJOVU1CRVJcIjtcbiAgICBGaWVsZFR5cGVbXCJQRVJDRU5UXCJdID0gXCJQRVJDRU5UXCI7XG4gICAgRmllbGRUeXBlW1wiVEVYVFwiXSA9IFwiVEVYVFwiO1xuICAgIEZpZWxkVHlwZVtcIkJPT0xFQU5cIl0gPSBcIkJPT0xFQU5cIjtcbiAgICBGaWVsZFR5cGVbXCJVUkxcIl0gPSBcIlVSTFwiO1xuICAgIEZpZWxkVHlwZVtcIklNQUdFXCJdID0gXCJJTUFHRVwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0FFRFwiXSA9IFwiQ1VSUkVOQ1lfQUVEXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfQUxMXCJdID0gXCJDVVJSRU5DWV9BTExcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9BUlNcIl0gPSBcIkNVUlJFTkNZX0FSU1wiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0FVRFwiXSA9IFwiQ1VSUkVOQ1lfQVVEXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfQkRUXCJdID0gXCJDVVJSRU5DWV9CRFRcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9CR05cIl0gPSBcIkNVUlJFTkNZX0JHTlwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0JPQlwiXSA9IFwiQ1VSUkVOQ1lfQk9CXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfQlJMXCJdID0gXCJDVVJSRU5DWV9CUkxcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9DQURcIl0gPSBcIkNVUlJFTkNZX0NBRFwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0NERlwiXSA9IFwiQ1VSUkVOQ1lfQ0RGXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfQ0hGXCJdID0gXCJDVVJSRU5DWV9DSEZcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9DTFBcIl0gPSBcIkNVUlJFTkNZX0NMUFwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0NOWVwiXSA9IFwiQ1VSUkVOQ1lfQ05ZXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfQ09QXCJdID0gXCJDVVJSRU5DWV9DT1BcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9DUkNcIl0gPSBcIkNVUlJFTkNZX0NSQ1wiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0NaS1wiXSA9IFwiQ1VSUkVOQ1lfQ1pLXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfREtLXCJdID0gXCJDVVJSRU5DWV9ES0tcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9ET1BcIl0gPSBcIkNVUlJFTkNZX0RPUFwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0VHUFwiXSA9IFwiQ1VSUkVOQ1lfRUdQXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfRVRCXCJdID0gXCJDVVJSRU5DWV9FVEJcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9FVVJcIl0gPSBcIkNVUlJFTkNZX0VVUlwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0dCUFwiXSA9IFwiQ1VSUkVOQ1lfR0JQXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfSEtEXCJdID0gXCJDVVJSRU5DWV9IS0RcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9IUktcIl0gPSBcIkNVUlJFTkNZX0hSS1wiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0hVRlwiXSA9IFwiQ1VSUkVOQ1lfSFVGXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfSURSXCJdID0gXCJDVVJSRU5DWV9JRFJcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9JTFNcIl0gPSBcIkNVUlJFTkNZX0lMU1wiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0lOUlwiXSA9IFwiQ1VSUkVOQ1lfSU5SXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfSVJSXCJdID0gXCJDVVJSRU5DWV9JUlJcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9JU0tcIl0gPSBcIkNVUlJFTkNZX0lTS1wiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0pNRFwiXSA9IFwiQ1VSUkVOQ1lfSk1EXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfSlBZXCJdID0gXCJDVVJSRU5DWV9KUFlcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9LUldcIl0gPSBcIkNVUlJFTkNZX0tSV1wiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX0xLUlwiXSA9IFwiQ1VSUkVOQ1lfTEtSXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfTFRMXCJdID0gXCJDVVJSRU5DWV9MVExcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9NTlRcIl0gPSBcIkNVUlJFTkNZX01OVFwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX01WUlwiXSA9IFwiQ1VSUkVOQ1lfTVZSXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfTVhOXCJdID0gXCJDVVJSRU5DWV9NWE5cIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9NWVJcIl0gPSBcIkNVUlJFTkNZX01ZUlwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX05PS1wiXSA9IFwiQ1VSUkVOQ1lfTk9LXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfTlpEXCJdID0gXCJDVVJSRU5DWV9OWkRcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9QQUJcIl0gPSBcIkNVUlJFTkNZX1BBQlwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX1BFTlwiXSA9IFwiQ1VSUkVOQ1lfUEVOXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfUEhQXCJdID0gXCJDVVJSRU5DWV9QSFBcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9QS1JcIl0gPSBcIkNVUlJFTkNZX1BLUlwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX1BMTlwiXSA9IFwiQ1VSUkVOQ1lfUExOXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfUk9OXCJdID0gXCJDVVJSRU5DWV9ST05cIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9SU0RcIl0gPSBcIkNVUlJFTkNZX1JTRFwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX1JVQlwiXSA9IFwiQ1VSUkVOQ1lfUlVCXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfU0FSXCJdID0gXCJDVVJSRU5DWV9TQVJcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9TRUtcIl0gPSBcIkNVUlJFTkNZX1NFS1wiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX1NHRFwiXSA9IFwiQ1VSUkVOQ1lfU0dEXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfVEhCXCJdID0gXCJDVVJSRU5DWV9USEJcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9UUllcIl0gPSBcIkNVUlJFTkNZX1RSWVwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX1RXRFwiXSA9IFwiQ1VSUkVOQ1lfVFdEXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfVFpTXCJdID0gXCJDVVJSRU5DWV9UWlNcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9VQUhcIl0gPSBcIkNVUlJFTkNZX1VBSFwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX1VTRFwiXSA9IFwiQ1VSUkVOQ1lfVVNEXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfVVlVXCJdID0gXCJDVVJSRU5DWV9VWVVcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9WRUZcIl0gPSBcIkNVUlJFTkNZX1ZFRlwiO1xuICAgIEZpZWxkVHlwZVtcIkNVUlJFTkNZX1ZORFwiXSA9IFwiQ1VSUkVOQ1lfVk5EXCI7XG4gICAgRmllbGRUeXBlW1wiQ1VSUkVOQ1lfWUVSXCJdID0gXCJDVVJSRU5DWV9ZRVJcIjtcbiAgICBGaWVsZFR5cGVbXCJDVVJSRU5DWV9aQVJcIl0gPSBcIkNVUlJFTkNZX1pBUlwiO1xufSkoRmllbGRUeXBlID0gZXhwb3J0cy5GaWVsZFR5cGUgfHwgKGV4cG9ydHMuRmllbGRUeXBlID0ge30pKTtcbnZhciBDbGllbnRNZXNzYWdlVHlwZTtcbihmdW5jdGlvbiAoQ2xpZW50TWVzc2FnZVR5cGUpIHtcbiAgICBDbGllbnRNZXNzYWdlVHlwZVtcIlZJWl9SRUFEWVwiXSA9IFwidml6UmVhZHlcIjtcbn0pKENsaWVudE1lc3NhZ2VUeXBlID0gZXhwb3J0cy5DbGllbnRNZXNzYWdlVHlwZSB8fCAoZXhwb3J0cy5DbGllbnRNZXNzYWdlVHlwZSA9IHt9KSk7XG5leHBvcnRzLnRpbWVvdXQgPSBmdW5jdGlvbiAobWlsbGlzKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZShtaWxsaXMpOyB9LCBtaWxsaXMpO1xuICAgICAgICAgICAgfSldO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnRzLmlmcmFtZUxvYWRlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSldO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnRzLnBvc3RNZXNzYWdlID0gZnVuY3Rpb24gKGNsaWVudE1lc3NhZ2UpIHtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGNsaWVudE1lc3NhZ2UsICcqJyk7XG59O1xuZXhwb3J0cy5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7IH07XG5leHBvcnRzLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0OyB9O1xuZXhwb3J0cy5nZXRDb21wb25lbnRJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2Uod2luZG93LnBhcmVudC5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICByZXR1cm4gcGFyc2VkLnF1ZXJ5LmlkO1xufTtcbmV4cG9ydHMuZGVsYXllZE1lc3NhZ2UgPSBmdW5jdGlvbiAoY2xpZW50TWVzc2FnZSwgbWlsbGlzKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGV4cG9ydHMuaWZyYW1lTG9hZGVkKCldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBleHBvcnRzLnRpbWVvdXQobWlsbGlzKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGV4cG9ydHMucG9zdE1lc3NhZ2UoY2xpZW50TWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydHMuc3Vic2NyaWJlVG9EYXRhID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9uTWVzc2FnZSwgY29tcG9uZW50SWQ7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGV4cG9ydHMuaWZyYW1lTG9hZGVkKCldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBvbk1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhLnR5cGUgPT09ICdSRU5ERVInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgeGZvcm1lZCA9IGRhdGFfdHJhbnNmb3JtXzEudHJhbnNmb3JtRGF0YShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHhmb3JtZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50SWQgPSBleHBvcnRzLmdldENvbXBvbmVudElkKCk7XG4gICAgICAgICAgICAgICAgZXhwb3J0cy5wb3N0TWVzc2FnZSh7IGNvbXBvbmVudElkOiBjb21wb25lbnRJZCwgdHlwZTogQ2xpZW50TWVzc2FnZVR5cGUuVklaX1JFQURZIH0pO1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdG8gdGhlIGRhdGEgc3RyZWFtLlxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSk7IH1dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyohXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xudmFyIGltcGwgPSByZXF1aXJlKFwiLi9pbXBsXCIpO1xuZXhwb3J0cy5kZWxheWVkTWVzc2FnZSA9IGltcGwuZGVsYXllZE1lc3NhZ2U7XG5leHBvcnRzLnN1YnNjcmliZVRvRGF0YSA9IGltcGwuc3Vic2NyaWJlVG9EYXRhO1xuZXhwb3J0cy5nZXRXaWR0aCA9IGltcGwuZ2V0V2lkdGg7XG5leHBvcnRzLmdldEhlaWdodCA9IGltcGwuZ2V0SGVpZ2h0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
