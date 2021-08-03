var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true})), module2);
};

// node_modules/@aws-sdk/client-dynamodb/node_modules/tslib/tslib.js
var require_tslib = __commonJS((exports2, module2) => {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar2;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __spreadArray;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __createBinding;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports3) {
        factory(createExporter(root, createExporter(exports3)));
      });
    } else if (typeof module2 === "object" && typeof module2.exports === "object") {
      factory(createExporter(root, createExporter(module2.exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports3, previous) {
      if (exports3 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports3, "__esModule", {value: true});
        } else {
          exports3.__esModule = true;
        }
      }
      return function(id, v) {
        return exports3[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
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
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = {label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: []}, f, y, t, g;
      return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
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
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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
                if (t[2])
                  _.ops.pop();
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
        if (op[0] & 5)
          throw op[1];
        return {value: op[0] ? op[1] : void 0, done: true};
      }
    };
    __exportStar2 = function(m, o) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
          __createBinding(o, m, p);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {value: o && o[i++], done: !o};
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {error};
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __spreadArray = function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? {value: __await(o[n](v)), done: n === "return"} : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({value: v2, done: d});
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {value: raw});
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {enumerable: true, value: v});
    } : function(o, v) {
      o["default"] = v;
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : {default: mod};
    };
    __classPrivateFieldGet = function(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar2);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
  });
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/package.json
var require_package = __commonJS((exports2, module2) => {
  module2.exports = {
    name: "@aws-sdk/client-dynamodb",
    description: "AWS SDK for JavaScript Dynamodb Client for Node.js, Browser and React Native",
    version: "3.5.0",
    scripts: {
      clean: "yarn remove-definitions && yarn remove-dist && yarn remove-documentation",
      "build-documentation": "yarn remove-documentation && typedoc ./",
      prepublishOnly: "yarn build",
      pretest: "yarn build:cjs",
      "remove-definitions": "rimraf ./types",
      "remove-dist": "rimraf ./dist",
      "remove-documentation": "rimraf ./docs",
      test: "exit 0",
      "build:cjs": "tsc -p tsconfig.json",
      "build:es": "tsc -p tsconfig.es.json",
      build: "yarn build:cjs && yarn build:es",
      postbuild: "downlevel-dts types types/ts3.4"
    },
    main: "./dist/cjs/index.js",
    types: "./types/index.d.ts",
    module: "./dist/es/index.js",
    browser: {
      "./runtimeConfig": "./runtimeConfig.browser"
    },
    "react-native": {
      "./runtimeConfig": "./runtimeConfig.native"
    },
    sideEffects: false,
    dependencies: {
      "@aws-crypto/sha256-browser": "^1.0.0",
      "@aws-crypto/sha256-js": "^1.0.0",
      "@aws-sdk/config-resolver": "3.5.0",
      "@aws-sdk/credential-provider-node": "3.4.1",
      "@aws-sdk/fetch-http-handler": "3.5.0",
      "@aws-sdk/hash-node": "3.4.1",
      "@aws-sdk/invalid-dependency": "3.4.1",
      "@aws-sdk/middleware-content-length": "3.5.0",
      "@aws-sdk/middleware-host-header": "3.5.0",
      "@aws-sdk/middleware-logger": "3.5.0",
      "@aws-sdk/middleware-retry": "3.5.0",
      "@aws-sdk/middleware-serde": "3.4.1",
      "@aws-sdk/middleware-signing": "3.5.0",
      "@aws-sdk/middleware-stack": "3.4.1",
      "@aws-sdk/middleware-user-agent": "3.5.0",
      "@aws-sdk/node-config-provider": "3.4.1",
      "@aws-sdk/node-http-handler": "3.5.0",
      "@aws-sdk/protocol-http": "3.5.0",
      "@aws-sdk/smithy-client": "3.5.0",
      "@aws-sdk/types": "3.4.1",
      "@aws-sdk/url-parser": "3.4.1",
      "@aws-sdk/url-parser-native": "3.4.1",
      "@aws-sdk/util-base64-browser": "3.4.1",
      "@aws-sdk/util-base64-node": "3.4.1",
      "@aws-sdk/util-body-length-browser": "3.4.1",
      "@aws-sdk/util-body-length-node": "3.4.1",
      "@aws-sdk/util-user-agent-browser": "3.5.0",
      "@aws-sdk/util-user-agent-node": "3.5.0",
      "@aws-sdk/util-utf8-browser": "3.4.1",
      "@aws-sdk/util-utf8-node": "3.4.1",
      "@aws-sdk/util-waiter": "3.4.1",
      tslib: "^2.0.0",
      uuid: "^3.0.0"
    },
    devDependencies: {
      "@aws-sdk/client-documentation-generator": "3.4.1",
      "@types/node": "^12.7.5",
      "@types/uuid": "^3.0.0",
      "downlevel-dts": "0.7.0",
      jest: "^26.1.0",
      rimraf: "^3.0.0",
      typedoc: "^0.19.2",
      typescript: "~4.1.2"
    },
    engines: {
      node: ">=10.0.0"
    },
    typesVersions: {
      "<4.0": {
        "types/*": [
          "types/ts3.4/*"
        ]
      }
    },
    author: {
      name: "AWS SDK for JavaScript Team",
      url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/master/clients/client-dynamodb",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-dynamodb"
    }
  };
});

// node_modules/tslib/tslib.js
var require_tslib2 = __commonJS((exports2, module2) => {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar2;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __createBinding;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports3) {
        factory(createExporter(root, createExporter(exports3)));
      });
    } else if (typeof module2 === "object" && typeof module2.exports === "object") {
      factory(createExporter(root, createExporter(module2.exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports3, previous) {
      if (exports3 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports3, "__esModule", {value: true});
        } else {
          exports3.__esModule = true;
        }
      }
      return function(id, v) {
        return exports3[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
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
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = {label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: []}, f, y, t, g;
      return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
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
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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
                if (t[2])
                  _.ops.pop();
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
        if (op[0] & 5)
          throw op[1];
        return {value: op[0] ? op[1] : void 0, done: true};
      }
    };
    __createBinding = function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __exportStar2 = function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !exports3.hasOwnProperty(p))
          exports3[p] = m[p];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {value: o && o[i++], done: !o};
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {error};
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? {value: __await(o[n](v)), done: n === "return"} : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({value: v2, done: d});
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {value: raw});
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (Object.hasOwnProperty.call(mod, k))
            result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : {default: mod};
    };
    __classPrivateFieldGet = function(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar2);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
  });
});

// node_modules/@aws-sdk/config-resolver/dist/cjs/EndpointsConfig.js
var require_EndpointsConfig = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.resolveEndpointsConfig = void 0;
  var resolveEndpointsConfig = (input) => {
    var _a;
    return {
      ...input,
      tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true,
      endpoint: input.endpoint ? normalizeEndpoint(input) : () => getEndPointFromRegion(input),
      isCustomEndpoint: input.endpoint ? true : false
    };
  };
  exports2.resolveEndpointsConfig = resolveEndpointsConfig;
  var normalizeEndpoint = (input) => {
    const {endpoint, urlParser} = input;
    if (typeof endpoint === "string") {
      const promisified = Promise.resolve(urlParser(endpoint));
      return () => promisified;
    } else if (typeof endpoint === "object") {
      const promisified = Promise.resolve(endpoint);
      return () => promisified;
    }
    return endpoint;
  };
  var getEndPointFromRegion = async (input) => {
    var _a;
    const {tls = true} = input;
    const region = await input.region();
    const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
    if (!dnsHostRegex.test(region)) {
      throw new Error("Invalid region in client config");
    }
    const {hostname} = (_a = await input.regionInfoProvider(region)) !== null && _a !== void 0 ? _a : {};
    if (!hostname) {
      throw new Error("Cannot resolve hostname from client config");
    }
    return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
  };
});

// node_modules/@aws-sdk/config-resolver/dist/cjs/RegionConfig.js
var require_RegionConfig = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.resolveRegionConfig = exports2.NODE_REGION_CONFIG_FILE_OPTIONS = exports2.NODE_REGION_CONFIG_OPTIONS = exports2.REGION_INI_NAME = exports2.REGION_ENV_NAME = void 0;
  exports2.REGION_ENV_NAME = "AWS_REGION";
  exports2.REGION_INI_NAME = "region";
  exports2.NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[exports2.REGION_ENV_NAME],
    configFileSelector: (profile) => profile[exports2.REGION_INI_NAME],
    default: () => {
      throw new Error("Region is missing");
    }
  };
  exports2.NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials"
  };
  var resolveRegionConfig = (input) => {
    if (!input.region) {
      throw new Error("Region is missing");
    }
    return {
      ...input,
      region: normalizeRegion(input.region)
    };
  };
  exports2.resolveRegionConfig = resolveRegionConfig;
  var normalizeRegion = (region) => {
    if (typeof region === "string") {
      const promisified = Promise.resolve(region);
      return () => promisified;
    }
    return region;
  };
});

// node_modules/@aws-sdk/config-resolver/dist/cjs/index.js
var require_cjs = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_EndpointsConfig(), exports2);
  tslib_1.__exportStar(require_RegionConfig(), exports2);
});

// node_modules/@aws-sdk/property-provider/dist/cjs/ProviderError.js
var require_ProviderError = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ProviderError = void 0;
  var ProviderError = class extends Error {
    constructor(message, tryNextLink = true) {
      super(message);
      this.tryNextLink = tryNextLink;
    }
  };
  exports2.ProviderError = ProviderError;
});

// node_modules/@aws-sdk/property-provider/dist/cjs/chain.js
var require_chain = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.chain = void 0;
  var ProviderError_1 = require_ProviderError();
  function chain(...providers) {
    return () => {
      let promise = Promise.reject(new ProviderError_1.ProviderError("No providers in chain"));
      for (const provider of providers) {
        promise = promise.catch((err) => {
          if (err === null || err === void 0 ? void 0 : err.tryNextLink) {
            return provider();
          }
          throw err;
        });
      }
      return promise;
    };
  }
  exports2.chain = chain;
});

// node_modules/@aws-sdk/property-provider/dist/cjs/fromStatic.js
var require_fromStatic = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.fromStatic = void 0;
  var fromStatic = (staticValue) => () => Promise.resolve(staticValue);
  exports2.fromStatic = fromStatic;
});

// node_modules/@aws-sdk/property-provider/dist/cjs/memoize.js
var require_memoize = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.memoize = void 0;
  var memoize = (provider, isExpired2, requiresRefresh) => {
    let result;
    let hasResult;
    if (isExpired2 === void 0) {
      return () => {
        if (!hasResult) {
          result = provider();
          hasResult = true;
        }
        return result;
      };
    }
    let isConstant = false;
    return async () => {
      if (!hasResult) {
        result = provider();
        hasResult = true;
      }
      if (isConstant) {
        return result;
      }
      const resolved = await result;
      if (requiresRefresh && !requiresRefresh(resolved)) {
        isConstant = true;
        return resolved;
      }
      if (isExpired2(resolved)) {
        return result = provider();
      }
      return resolved;
    };
  };
  exports2.memoize = memoize;
});

// node_modules/@aws-sdk/property-provider/dist/cjs/index.js
var require_cjs2 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_chain(), exports2);
  tslib_1.__exportStar(require_fromStatic(), exports2);
  tslib_1.__exportStar(require_memoize(), exports2);
  tslib_1.__exportStar(require_ProviderError(), exports2);
});

// node_modules/@aws-sdk/credential-provider-env/dist/cjs/index.js
var require_cjs3 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.fromEnv = exports2.ENV_EXPIRATION = exports2.ENV_SESSION = exports2.ENV_SECRET = exports2.ENV_KEY = void 0;
  var property_provider_1 = require_cjs2();
  exports2.ENV_KEY = "AWS_ACCESS_KEY_ID";
  exports2.ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
  exports2.ENV_SESSION = "AWS_SESSION_TOKEN";
  exports2.ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
  function fromEnv() {
    return () => {
      const accessKeyId = process.env[exports2.ENV_KEY];
      const secretAccessKey = process.env[exports2.ENV_SECRET];
      const expiry = process.env[exports2.ENV_EXPIRATION];
      if (accessKeyId && secretAccessKey) {
        return Promise.resolve({
          accessKeyId,
          secretAccessKey,
          sessionToken: process.env[exports2.ENV_SESSION],
          expiration: expiry ? new Date(expiry) : void 0
        });
      }
      return Promise.reject(new property_provider_1.ProviderError("Unable to find environment variable credentials."));
    };
  }
  exports2.fromEnv = fromEnv;
});

// node_modules/@aws-sdk/credential-provider-imds/dist/cjs/remoteProvider/httpRequest.js
var require_httpRequest = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.httpRequest = void 0;
  var property_provider_1 = require_cjs2();
  var buffer_1 = require("buffer");
  var http_1 = require("http");
  function httpRequest(options) {
    return new Promise((resolve, reject) => {
      const req = http_1.request({method: "GET", ...options});
      req.on("error", (err) => {
        reject(Object.assign(new property_provider_1.ProviderError("Unable to connect to instance metadata service"), err));
      });
      req.on("timeout", () => {
        reject(new Error("TimeoutError"));
      });
      req.on("response", (res) => {
        const {statusCode = 400} = res;
        if (statusCode < 200 || 300 <= statusCode) {
          reject(Object.assign(new property_provider_1.ProviderError("Error response received from instance metadata service"), {statusCode}));
        }
        const chunks = [];
        res.on("data", (chunk) => {
          chunks.push(chunk);
        });
        res.on("end", () => {
          resolve(buffer_1.Buffer.concat(chunks));
        });
      });
      req.end();
    });
  }
  exports2.httpRequest = httpRequest;
});

// node_modules/@aws-sdk/credential-provider-imds/dist/cjs/remoteProvider/ImdsCredentials.js
var require_ImdsCredentials = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.fromImdsCredentials = exports2.isImdsCredentials = void 0;
  var isImdsCredentials = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string";
  exports2.isImdsCredentials = isImdsCredentials;
  var fromImdsCredentials = (creds) => ({
    accessKeyId: creds.AccessKeyId,
    secretAccessKey: creds.SecretAccessKey,
    sessionToken: creds.Token,
    expiration: new Date(creds.Expiration)
  });
  exports2.fromImdsCredentials = fromImdsCredentials;
});

// node_modules/@aws-sdk/credential-provider-imds/dist/cjs/remoteProvider/RemoteProviderInit.js
var require_RemoteProviderInit = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.providerConfigFromInit = exports2.DEFAULT_MAX_RETRIES = exports2.DEFAULT_TIMEOUT = void 0;
  exports2.DEFAULT_TIMEOUT = 1e3;
  exports2.DEFAULT_MAX_RETRIES = 0;
  var providerConfigFromInit = ({maxRetries = exports2.DEFAULT_MAX_RETRIES, timeout = exports2.DEFAULT_TIMEOUT}) => ({maxRetries, timeout});
  exports2.providerConfigFromInit = providerConfigFromInit;
});

// node_modules/@aws-sdk/credential-provider-imds/dist/cjs/remoteProvider/retry.js
var require_retry = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.retry = void 0;
  var retry = (toRetry, maxRetries) => {
    let promise = toRetry();
    for (let i = 0; i < maxRetries; i++) {
      promise = promise.catch(toRetry);
    }
    return promise;
  };
  exports2.retry = retry;
});

// node_modules/@aws-sdk/credential-provider-imds/dist/cjs/fromContainerMetadata.js
var require_fromContainerMetadata = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.fromContainerMetadata = exports2.ENV_CMDS_AUTH_TOKEN = exports2.ENV_CMDS_RELATIVE_URI = exports2.ENV_CMDS_FULL_URI = void 0;
  var property_provider_1 = require_cjs2();
  var url_1 = require("url");
  var httpRequest_1 = require_httpRequest();
  var ImdsCredentials_1 = require_ImdsCredentials();
  var RemoteProviderInit_1 = require_RemoteProviderInit();
  var retry_1 = require_retry();
  exports2.ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
  exports2.ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
  exports2.ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
  function fromContainerMetadata(init = {}) {
    const {timeout, maxRetries} = RemoteProviderInit_1.providerConfigFromInit(init);
    return () => {
      return getCmdsUri().then((url) => retry_1.retry(async () => {
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, url));
        if (!ImdsCredentials_1.isImdsCredentials(credsResponse)) {
          throw new property_provider_1.ProviderError("Invalid response received from instance metadata service.");
        }
        return ImdsCredentials_1.fromImdsCredentials(credsResponse);
      }, maxRetries));
    };
  }
  exports2.fromContainerMetadata = fromContainerMetadata;
  function requestFromEcsImds(timeout, options) {
    if (process.env[exports2.ENV_CMDS_AUTH_TOKEN]) {
      const {headers = {}} = options;
      headers.Authorization = process.env[exports2.ENV_CMDS_AUTH_TOKEN];
      options.headers = headers;
    }
    return httpRequest_1.httpRequest({
      ...options,
      timeout
    }).then((buffer) => buffer.toString());
  }
  var CMDS_IP = "169.254.170.2";
  var GREENGRASS_HOSTS = {
    localhost: true,
    "127.0.0.1": true
  };
  var GREENGRASS_PROTOCOLS = {
    "http:": true,
    "https:": true
  };
  function getCmdsUri() {
    if (process.env[exports2.ENV_CMDS_RELATIVE_URI]) {
      return Promise.resolve({
        hostname: CMDS_IP,
        path: process.env[exports2.ENV_CMDS_RELATIVE_URI]
      });
    }
    if (process.env[exports2.ENV_CMDS_FULL_URI]) {
      const parsed = url_1.parse(process.env[exports2.ENV_CMDS_FULL_URI]);
      if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
        return Promise.reject(new property_provider_1.ProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, false));
      }
      if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
        return Promise.reject(new property_provider_1.ProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, false));
      }
      return Promise.resolve({
        ...parsed,
        port: parsed.port ? parseInt(parsed.port, 10) : void 0
      });
    }
    return Promise.reject(new property_provider_1.ProviderError(`The container metadata credential provider cannot be used unless the ${exports2.ENV_CMDS_RELATIVE_URI} or ${exports2.ENV_CMDS_FULL_URI} environment variable is set`, false));
  }
});

// node_modules/@aws-sdk/credential-provider-imds/dist/cjs/fromInstanceMetadata.js
var require_fromInstanceMetadata = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.fromInstanceMetadata = void 0;
  var property_provider_1 = require_cjs2();
  var httpRequest_1 = require_httpRequest();
  var ImdsCredentials_1 = require_ImdsCredentials();
  var RemoteProviderInit_1 = require_RemoteProviderInit();
  var retry_1 = require_retry();
  var IMDS_IP = "169.254.169.254";
  var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
  var IMDS_TOKEN_PATH = "/latest/api/token";
  var fromInstanceMetadata = (init = {}) => {
    let disableFetchToken = false;
    const {timeout, maxRetries} = RemoteProviderInit_1.providerConfigFromInit(init);
    const getCredentials = async (maxRetries2, options) => {
      const profile = (await retry_1.retry(async () => {
        let profile2;
        try {
          profile2 = await getProfile(options);
        } catch (err) {
          if (err.statusCode === 401) {
            disableFetchToken = false;
          }
          throw err;
        }
        return profile2;
      }, maxRetries2)).trim();
      return retry_1.retry(async () => {
        let creds;
        try {
          creds = await getCredentialsFromProfile(profile, options);
        } catch (err) {
          if (err.statusCode === 401) {
            disableFetchToken = false;
          }
          throw err;
        }
        return creds;
      }, maxRetries2);
    };
    return async () => {
      if (disableFetchToken) {
        return getCredentials(maxRetries, {timeout});
      } else {
        let token;
        try {
          token = (await getMetadataToken({timeout})).toString();
        } catch (error) {
          if ((error === null || error === void 0 ? void 0 : error.statusCode) === 400) {
            throw Object.assign(error, {
              message: "EC2 Metadata token request returned error"
            });
          } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
            disableFetchToken = true;
          }
          return getCredentials(maxRetries, {timeout});
        }
        return getCredentials(maxRetries, {
          timeout,
          headers: {
            "x-aws-ec2-metadata-token": token
          }
        });
      }
    };
  };
  exports2.fromInstanceMetadata = fromInstanceMetadata;
  var getMetadataToken = async (options) => httpRequest_1.httpRequest({
    ...options,
    host: IMDS_IP,
    path: IMDS_TOKEN_PATH,
    method: "PUT",
    headers: {
      "x-aws-ec2-metadata-token-ttl-seconds": "21600"
    }
  });
  var getProfile = async (options) => (await httpRequest_1.httpRequest({...options, host: IMDS_IP, path: IMDS_PATH})).toString();
  var getCredentialsFromProfile = async (profile, options) => {
    const credsResponse = JSON.parse((await httpRequest_1.httpRequest({
      ...options,
      host: IMDS_IP,
      path: IMDS_PATH + profile
    })).toString());
    if (!ImdsCredentials_1.isImdsCredentials(credsResponse)) {
      throw new property_provider_1.ProviderError("Invalid response received from instance metadata service.");
    }
    return ImdsCredentials_1.fromImdsCredentials(credsResponse);
  };
});

// node_modules/@aws-sdk/credential-provider-imds/dist/cjs/index.js
var require_cjs4 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_fromContainerMetadata(), exports2);
  tslib_1.__exportStar(require_fromInstanceMetadata(), exports2);
  tslib_1.__exportStar(require_RemoteProviderInit(), exports2);
});

// node_modules/@aws-sdk/shared-ini-file-loader/dist/cjs/index.js
var require_cjs5 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.loadSharedConfigFiles = exports2.ENV_CONFIG_PATH = exports2.ENV_CREDENTIALS_PATH = void 0;
  var fs_1 = require("fs");
  var os_1 = require("os");
  var path_1 = require("path");
  exports2.ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
  exports2.ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
  var swallowError = () => ({});
  var loadSharedConfigFiles = (init = {}) => {
    const {filepath = process.env[exports2.ENV_CREDENTIALS_PATH] || path_1.join(getHomeDir(), ".aws", "credentials"), configFilepath = process.env[exports2.ENV_CONFIG_PATH] || path_1.join(getHomeDir(), ".aws", "config")} = init;
    return Promise.all([
      slurpFile(configFilepath).then(parseIni).then(normalizeConfigFile).catch(swallowError),
      slurpFile(filepath).then(parseIni).catch(swallowError)
    ]).then((parsedFiles) => {
      const [configFile, credentialsFile] = parsedFiles;
      return {
        configFile,
        credentialsFile
      };
    });
  };
  exports2.loadSharedConfigFiles = loadSharedConfigFiles;
  var profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
  var normalizeConfigFile = (data) => {
    const map = {};
    for (const key of Object.keys(data)) {
      let matches;
      if (key === "default") {
        map.default = data.default;
      } else if (matches = profileKeyRegex.exec(key)) {
        const [_1, _2, normalizedKey] = matches;
        if (normalizedKey) {
          map[normalizedKey] = data[key];
        }
      }
    }
    return map;
  };
  var profileNameBlockList = ["__proto__", "profile __proto__"];
  var parseIni = (iniData) => {
    const map = {};
    let currentSection;
    for (let line of iniData.split(/\r?\n/)) {
      line = line.split(/(^|\s)[;#]/)[0];
      const section = line.match(/^\s*\[([^\[\]]+)]\s*$/);
      if (section) {
        currentSection = section[1];
        if (profileNameBlockList.includes(currentSection)) {
          throw new Error(`Found invalid profile name "${currentSection}"`);
        }
      } else if (currentSection) {
        const item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
        if (item) {
          map[currentSection] = map[currentSection] || {};
          map[currentSection][item[1]] = item[2];
        }
      }
    }
    return map;
  };
  var slurpFile = (path) => new Promise((resolve, reject) => {
    fs_1.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  var getHomeDir = () => {
    const {HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}`} = process.env;
    if (HOME)
      return HOME;
    if (USERPROFILE)
      return USERPROFILE;
    if (HOMEPATH)
      return `${HOMEDRIVE}${HOMEPATH}`;
    return os_1.homedir();
  };
});

// node_modules/@aws-sdk/credential-provider-ini/dist/cjs/index.js
var require_cjs6 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.parseKnownFiles = exports2.getMasterProfileName = exports2.fromIni = exports2.ENV_PROFILE = void 0;
  var property_provider_1 = require_cjs2();
  var shared_ini_file_loader_1 = require_cjs5();
  var DEFAULT_PROFILE = "default";
  exports2.ENV_PROFILE = "AWS_PROFILE";
  function isStaticCredsProfile(arg) {
    return Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
  }
  function isAssumeRoleProfile(arg) {
    return Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && typeof arg.source_profile === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1;
  }
  function fromIni(init = {}) {
    return () => parseKnownFiles(init).then((profiles) => resolveProfileData(getMasterProfileName(init), profiles, init));
  }
  exports2.fromIni = fromIni;
  function getMasterProfileName(init) {
    return init.profile || process.env[exports2.ENV_PROFILE] || DEFAULT_PROFILE;
  }
  exports2.getMasterProfileName = getMasterProfileName;
  async function resolveProfileData(profileName, profiles, options, visitedProfiles = {}) {
    const data = profiles[profileName];
    if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
      return resolveStaticCredentials(data);
    }
    if (isAssumeRoleProfile(data)) {
      const {external_id: ExternalId, mfa_serial, role_arn: RoleArn, role_session_name: RoleSessionName = "aws-sdk-js-" + Date.now(), source_profile} = data;
      if (!options.roleAssumer) {
        throw new property_provider_1.ProviderError(`Profile ${profileName} requires a role to be assumed, but no role assumption callback was provided.`, false);
      }
      if (source_profile in visitedProfiles) {
        throw new property_provider_1.ProviderError(`Detected a cycle attempting to resolve credentials for profile ${getMasterProfileName(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), false);
      }
      const sourceCreds = resolveProfileData(source_profile, profiles, options, {
        ...visitedProfiles,
        [source_profile]: true
      });
      const params = {RoleArn, RoleSessionName, ExternalId};
      if (mfa_serial) {
        if (!options.mfaCodeProvider) {
          throw new property_provider_1.ProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
      }
      return options.roleAssumer(await sourceCreds, params);
    }
    if (isStaticCredsProfile(data)) {
      return resolveStaticCredentials(data);
    }
    throw new property_provider_1.ProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
  }
  function parseKnownFiles(init) {
    const {loadedConfig = shared_ini_file_loader_1.loadSharedConfigFiles(init)} = init;
    return loadedConfig.then((parsedFiles) => {
      const {configFile, credentialsFile} = parsedFiles;
      return {
        ...configFile,
        ...credentialsFile
      };
    });
  }
  exports2.parseKnownFiles = parseKnownFiles;
  function resolveStaticCredentials(profile) {
    return Promise.resolve({
      accessKeyId: profile.aws_access_key_id,
      secretAccessKey: profile.aws_secret_access_key,
      sessionToken: profile.aws_session_token
    });
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist/cjs/index.js
var require_cjs7 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.fromProcess = exports2.ENV_PROFILE = void 0;
  var credential_provider_ini_1 = require_cjs6();
  var property_provider_1 = require_cjs2();
  var child_process_1 = require("child_process");
  exports2.ENV_PROFILE = "AWS_PROFILE";
  function fromProcess(init = {}) {
    return () => credential_provider_ini_1.parseKnownFiles(init).then((profiles) => resolveProcessCredentials(credential_provider_ini_1.getMasterProfileName(init), profiles, init));
  }
  exports2.fromProcess = fromProcess;
  async function resolveProcessCredentials(profileName, profiles, options) {
    const profile = profiles[profileName];
    if (profiles[profileName]) {
      const credentialProcess = profile["credential_process"];
      if (credentialProcess !== void 0) {
        return await execPromise(credentialProcess).then((processResult) => {
          let data;
          try {
            data = JSON.parse(processResult);
          } catch (_a) {
            throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
          }
          const {Version: version, AccessKeyId: accessKeyId, SecretAccessKey: secretAccessKey, SessionToken: sessionToken, Expiration: expiration} = data;
          if (version !== 1) {
            throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
          }
          if (accessKeyId === void 0 || secretAccessKey === void 0) {
            throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
          }
          let expirationUnix;
          if (expiration) {
            const currentTime = new Date();
            const expireTime = new Date(expiration);
            if (expireTime < currentTime) {
              throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
            }
            expirationUnix = Math.floor(new Date(expiration).valueOf() / 1e3);
          }
          return {
            accessKeyId,
            secretAccessKey,
            sessionToken,
            expirationUnix
          };
        }).catch((error) => {
          throw new property_provider_1.ProviderError(error.message);
        });
      } else {
        throw new property_provider_1.ProviderError(`Profile ${profileName} did not contain credential_process.`);
      }
    } else {
      throw new property_provider_1.ProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
    }
  }
  function execPromise(command) {
    return new Promise(function(resolve, reject) {
      child_process_1.exec(command, (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout.trim());
      });
    });
  }
});

// node_modules/@aws-sdk/credential-provider-node/dist/cjs/index.js
var require_cjs8 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.defaultProvider = exports2.ENV_IMDS_DISABLED = void 0;
  var credential_provider_env_1 = require_cjs3();
  var credential_provider_imds_1 = require_cjs4();
  var credential_provider_ini_1 = require_cjs6();
  var credential_provider_process_1 = require_cjs7();
  var property_provider_1 = require_cjs2();
  exports2.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
  function defaultProvider(init = {}) {
    const {profile = process.env[credential_provider_ini_1.ENV_PROFILE]} = init;
    const providerChain = profile ? property_provider_1.chain(credential_provider_ini_1.fromIni(init), credential_provider_process_1.fromProcess(init)) : property_provider_1.chain(credential_provider_env_1.fromEnv(), credential_provider_ini_1.fromIni(init), credential_provider_process_1.fromProcess(init), remoteProvider(init));
    return property_provider_1.memoize(providerChain, (credentials) => credentials.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5, (credentials) => credentials.expiration !== void 0);
  }
  exports2.defaultProvider = defaultProvider;
  function remoteProvider(init) {
    if (process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] || process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI]) {
      return credential_provider_imds_1.fromContainerMetadata(init);
    }
    if (process.env[exports2.ENV_IMDS_DISABLED]) {
      return () => Promise.reject(new property_provider_1.ProviderError("EC2 Instance Metadata Service access disabled"));
    }
    return credential_provider_imds_1.fromInstanceMetadata(init);
  }
});

// node_modules/@aws-sdk/is-array-buffer/dist/cjs/index.js
var require_cjs9 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.isArrayBuffer = void 0;
  var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
  exports2.isArrayBuffer = isArrayBuffer;
});

// node_modules/@aws-sdk/util-buffer-from/dist/cjs/index.js
var require_cjs10 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.fromString = exports2.fromArrayBuffer = void 0;
  var is_array_buffer_1 = require_cjs9();
  var buffer_1 = require("buffer");
  var fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!is_array_buffer_1.isArrayBuffer(input)) {
      throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return buffer_1.Buffer.from(input, offset, length);
  };
  exports2.fromArrayBuffer = fromArrayBuffer;
  var fromString = (input, encoding) => {
    if (typeof input !== "string") {
      throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? buffer_1.Buffer.from(input, encoding) : buffer_1.Buffer.from(input);
  };
  exports2.fromString = fromString;
});

// node_modules/@aws-sdk/hash-node/dist/cjs/index.js
var require_cjs11 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.Hash = void 0;
  var util_buffer_from_1 = require_cjs10();
  var buffer_1 = require("buffer");
  var crypto_1 = require("crypto");
  var Hash = class {
    constructor(algorithmIdentifier, secret) {
      this.hash = secret ? crypto_1.createHmac(algorithmIdentifier, castSourceData(secret)) : crypto_1.createHash(algorithmIdentifier);
    }
    update(toHash, encoding) {
      this.hash.update(castSourceData(toHash, encoding));
    }
    digest() {
      return Promise.resolve(this.hash.digest());
    }
  };
  exports2.Hash = Hash;
  function castSourceData(toCast, encoding) {
    if (buffer_1.Buffer.isBuffer(toCast)) {
      return toCast;
    }
    if (typeof toCast === "string") {
      return util_buffer_from_1.fromString(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
      return util_buffer_from_1.fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return util_buffer_from_1.fromArrayBuffer(toCast);
  }
});

// node_modules/@aws-sdk/middleware-retry/dist/cjs/retryMiddleware.js
var require_retryMiddleware = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getRetryPlugin = exports2.retryMiddlewareOptions = exports2.retryMiddleware = void 0;
  var retryMiddleware = (options) => (next, context) => async (args) => {
    var _a;
    if ((_a = options === null || options === void 0 ? void 0 : options.retryStrategy) === null || _a === void 0 ? void 0 : _a.mode)
      context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", options.retryStrategy.mode]];
    return options.retryStrategy.retry(next, args);
  };
  exports2.retryMiddleware = retryMiddleware;
  exports2.retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true
  };
  var getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(exports2.retryMiddleware(options), exports2.retryMiddlewareOptions);
    }
  });
  exports2.getRetryPlugin = getRetryPlugin;
});

// node_modules/@aws-sdk/protocol-http/dist/cjs/httpResponse.js
var require_httpResponse = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.HttpResponse = void 0;
  var HttpResponse = class {
    constructor(options) {
      this.statusCode = options.statusCode;
      this.headers = options.headers || {};
      this.body = options.body;
    }
    static isInstance(response) {
      if (!response)
        return false;
      const resp = response;
      return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
  };
  exports2.HttpResponse = HttpResponse;
});

// node_modules/@aws-sdk/protocol-http/dist/cjs/httpRequest.js
var require_httpRequest2 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.HttpRequest = void 0;
  var HttpRequest = class {
    constructor(options) {
      this.method = options.method || "GET";
      this.hostname = options.hostname || "localhost";
      this.port = options.port;
      this.query = options.query || {};
      this.headers = options.headers || {};
      this.body = options.body;
      this.protocol = options.protocol ? options.protocol.substr(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
      this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    }
    static isInstance(request) {
      if (!request)
        return false;
      const req = request;
      return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
      const cloned = new HttpRequest({
        ...this,
        headers: {...this.headers}
      });
      if (cloned.query)
        cloned.query = cloneQuery(cloned.query);
      return cloned;
    }
  };
  exports2.HttpRequest = HttpRequest;
  function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {});
  }
});

// node_modules/@aws-sdk/protocol-http/dist/cjs/httpHandler.js
var require_httpHandler = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
});

// node_modules/@aws-sdk/protocol-http/dist/cjs/isValidHostname.js
var require_isValidHostname = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.isValidHostname = void 0;
  function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
  }
  exports2.isValidHostname = isValidHostname;
});

// node_modules/@aws-sdk/protocol-http/dist/cjs/index.js
var require_cjs12 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_httpResponse(), exports2);
  tslib_1.__exportStar(require_httpRequest2(), exports2);
  tslib_1.__exportStar(require_httpHandler(), exports2);
  tslib_1.__exportStar(require_isValidHostname(), exports2);
});

// node_modules/@aws-sdk/middleware-retry/dist/cjs/constants.js
var require_constants = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.REQUEST_HEADER = exports2.INVOCATION_ID_HEADER = exports2.NO_RETRY_INCREMENT = exports2.TIMEOUT_RETRY_COST = exports2.RETRY_COST = exports2.INITIAL_RETRY_TOKENS = exports2.THROTTLING_RETRY_DELAY_BASE = exports2.MAXIMUM_RETRY_DELAY = exports2.DEFAULT_RETRY_DELAY_BASE = void 0;
  exports2.DEFAULT_RETRY_DELAY_BASE = 100;
  exports2.MAXIMUM_RETRY_DELAY = 20 * 1e3;
  exports2.THROTTLING_RETRY_DELAY_BASE = 500;
  exports2.INITIAL_RETRY_TOKENS = 500;
  exports2.RETRY_COST = 5;
  exports2.TIMEOUT_RETRY_COST = 10;
  exports2.NO_RETRY_INCREMENT = 1;
  exports2.INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
  exports2.REQUEST_HEADER = "amz-sdk-request";
});

// node_modules/@aws-sdk/middleware-retry/dist/cjs/omitRetryHeadersMiddleware.js
var require_omitRetryHeadersMiddleware = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getOmitRetryHeadersPlugin = exports2.omitRetryHeadersMiddlewareOptions = exports2.omitRetryHeadersMiddleware = void 0;
  var protocol_http_1 = require_cjs12();
  var constants_1 = require_constants();
  var omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const {request} = args;
    if (protocol_http_1.HttpRequest.isInstance(request)) {
      delete request.headers[constants_1.INVOCATION_ID_HEADER];
      delete request.headers[constants_1.REQUEST_HEADER];
    }
    return next(args);
  };
  exports2.omitRetryHeadersMiddleware = omitRetryHeadersMiddleware;
  exports2.omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true
  };
  var getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(exports2.omitRetryHeadersMiddleware(), exports2.omitRetryHeadersMiddlewareOptions);
    }
  });
  exports2.getOmitRetryHeadersPlugin = getOmitRetryHeadersPlugin;
});

// node_modules/@aws-sdk/service-error-classification/dist/cjs/constants.js
var require_constants2 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.TRANSIENT_ERROR_STATUS_CODES = exports2.TRANSIENT_ERROR_CODES = exports2.THROTTLING_ERROR_CODES = exports2.CLOCK_SKEW_ERROR_CODES = void 0;
  exports2.CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch"
  ];
  exports2.THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException"
  ];
  exports2.TRANSIENT_ERROR_CODES = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"];
  exports2.TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
});

// node_modules/@aws-sdk/service-error-classification/dist/cjs/index.js
var require_cjs13 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.isTransientError = exports2.isThrottlingError = exports2.isClockSkewError = exports2.isRetryableByTrait = void 0;
  var constants_1 = require_constants2();
  var isRetryableByTrait = (error) => error.$retryable !== void 0;
  exports2.isRetryableByTrait = isRetryableByTrait;
  var isClockSkewError = (error) => constants_1.CLOCK_SKEW_ERROR_CODES.includes(error.name);
  exports2.isClockSkewError = isClockSkewError;
  var isThrottlingError = (error) => {
    var _a, _b;
    return ((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 429 || constants_1.THROTTLING_ERROR_CODES.includes(error.name) || ((_b = error.$retryable) === null || _b === void 0 ? void 0 : _b.throttling) == true;
  };
  exports2.isThrottlingError = isThrottlingError;
  var isTransientError = (error) => {
    var _a;
    return constants_1.TRANSIENT_ERROR_CODES.includes(error.name) || constants_1.TRANSIENT_ERROR_STATUS_CODES.includes(((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) || 0);
  };
  exports2.isTransientError = isTransientError;
});

// node_modules/uuid/lib/rng.js
var require_rng = __commonJS((exports2, module2) => {
  var crypto = require("crypto");
  module2.exports = function nodeRNG() {
    return crypto.randomBytes(16);
  };
});

// node_modules/uuid/lib/bytesToUuid.js
var require_bytesToUuid = __commonJS((exports2, module2) => {
  var byteToHex = [];
  for (var i = 0; i < 256; ++i) {
    byteToHex[i] = (i + 256).toString(16).substr(1);
  }
  function bytesToUuid(buf, offset) {
    var i2 = offset || 0;
    var bth = byteToHex;
    return [
      bth[buf[i2++]],
      bth[buf[i2++]],
      bth[buf[i2++]],
      bth[buf[i2++]],
      "-",
      bth[buf[i2++]],
      bth[buf[i2++]],
      "-",
      bth[buf[i2++]],
      bth[buf[i2++]],
      "-",
      bth[buf[i2++]],
      bth[buf[i2++]],
      "-",
      bth[buf[i2++]],
      bth[buf[i2++]],
      bth[buf[i2++]],
      bth[buf[i2++]],
      bth[buf[i2++]],
      bth[buf[i2++]]
    ].join("");
  }
  module2.exports = bytesToUuid;
});

// node_modules/uuid/v1.js
var require_v1 = __commonJS((exports2, module2) => {
  var rng = require_rng();
  var bytesToUuid = require_bytesToUuid();
  var _nodeId;
  var _clockseq;
  var _lastMSecs = 0;
  var _lastNSecs = 0;
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];
    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
    if (node == null || clockseq == null) {
      var seedBytes = rng();
      if (node == null) {
        node = _nodeId = [
          seedBytes[0] | 1,
          seedBytes[1],
          seedBytes[2],
          seedBytes[3],
          seedBytes[4],
          seedBytes[5]
        ];
      }
      if (clockseq == null) {
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
      }
    }
    var msecs = options.msecs !== void 0 ? options.msecs : new Date().getTime();
    var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
    if (dt < 0 && options.clockseq === void 0) {
      clockseq = clockseq + 1 & 16383;
    }
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
      nsecs = 0;
    }
    if (nsecs >= 1e4) {
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    msecs += 122192928e5;
    var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
    b[i++] = tl >>> 24 & 255;
    b[i++] = tl >>> 16 & 255;
    b[i++] = tl >>> 8 & 255;
    b[i++] = tl & 255;
    var tmh = msecs / 4294967296 * 1e4 & 268435455;
    b[i++] = tmh >>> 8 & 255;
    b[i++] = tmh & 255;
    b[i++] = tmh >>> 24 & 15 | 16;
    b[i++] = tmh >>> 16 & 255;
    b[i++] = clockseq >>> 8 | 128;
    b[i++] = clockseq & 255;
    for (var n = 0; n < 6; ++n) {
      b[i + n] = node[n];
    }
    return buf ? buf : bytesToUuid(b);
  }
  module2.exports = v1;
});

// node_modules/uuid/v4.js
var require_v4 = __commonJS((exports2, module2) => {
  var rng = require_rng();
  var bytesToUuid = require_bytesToUuid();
  function v4(options, buf, offset) {
    var i = buf && offset || 0;
    if (typeof options == "string") {
      buf = options === "binary" ? new Array(16) : null;
      options = null;
    }
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      for (var ii = 0; ii < 16; ++ii) {
        buf[i + ii] = rnds[ii];
      }
    }
    return buf || bytesToUuid(rnds);
  }
  module2.exports = v4;
});

// node_modules/uuid/index.js
var require_uuid = __commonJS((exports2, module2) => {
  var v1 = require_v1();
  var v4 = require_v4();
  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;
  module2.exports = uuid;
});

// node_modules/@aws-sdk/middleware-retry/dist/cjs/defaultRetryQuota.js
var require_defaultRetryQuota = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getDefaultRetryQuota = void 0;
  var constants_1 = require_constants();
  var getDefaultRetryQuota = (initialRetryTokens) => {
    const MAX_CAPACITY = initialRetryTokens;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => error.name === "TimeoutError" ? constants_1.TIMEOUT_RETRY_COST : constants_1.RETRY_COST;
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
      if (!hasRetryTokens(error)) {
        throw new Error("No retry token available");
      }
      const capacityAmount = getCapacityAmount(error);
      availableCapacity -= capacityAmount;
      return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
      availableCapacity += capacityReleaseAmount !== null && capacityReleaseAmount !== void 0 ? capacityReleaseAmount : constants_1.NO_RETRY_INCREMENT;
      availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
      hasRetryTokens,
      retrieveRetryTokens,
      releaseRetryTokens
    });
  };
  exports2.getDefaultRetryQuota = getDefaultRetryQuota;
});

// node_modules/@aws-sdk/middleware-retry/dist/cjs/delayDecider.js
var require_delayDecider = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.defaultDelayDecider = void 0;
  var constants_1 = require_constants();
  var defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(constants_1.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
  exports2.defaultDelayDecider = defaultDelayDecider;
});

// node_modules/@aws-sdk/middleware-retry/dist/cjs/retryDecider.js
var require_retryDecider = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.defaultRetryDecider = void 0;
  var service_error_classification_1 = require_cjs13();
  var defaultRetryDecider = (error) => {
    if (!error) {
      return false;
    }
    return service_error_classification_1.isRetryableByTrait(error) || service_error_classification_1.isClockSkewError(error) || service_error_classification_1.isThrottlingError(error) || service_error_classification_1.isTransientError(error);
  };
  exports2.defaultRetryDecider = defaultRetryDecider;
});

// node_modules/@aws-sdk/middleware-retry/dist/cjs/defaultStrategy.js
var require_defaultStrategy = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.StandardRetryStrategy = exports2.DEFAULT_RETRY_MODE = exports2.DEFAULT_MAX_ATTEMPTS = void 0;
  var protocol_http_1 = require_cjs12();
  var service_error_classification_1 = require_cjs13();
  var uuid_1 = require_uuid();
  var constants_1 = require_constants();
  var defaultRetryQuota_1 = require_defaultRetryQuota();
  var delayDecider_1 = require_delayDecider();
  var retryDecider_1 = require_retryDecider();
  exports2.DEFAULT_MAX_ATTEMPTS = 3;
  exports2.DEFAULT_RETRY_MODE = "standard";
  var StandardRetryStrategy = class {
    constructor(maxAttemptsProvider, options) {
      var _a, _b, _c;
      this.maxAttemptsProvider = maxAttemptsProvider;
      this.mode = exports2.DEFAULT_RETRY_MODE;
      this.retryDecider = (_a = options === null || options === void 0 ? void 0 : options.retryDecider) !== null && _a !== void 0 ? _a : retryDecider_1.defaultRetryDecider;
      this.delayDecider = (_b = options === null || options === void 0 ? void 0 : options.delayDecider) !== null && _b !== void 0 ? _b : delayDecider_1.defaultDelayDecider;
      this.retryQuota = (_c = options === null || options === void 0 ? void 0 : options.retryQuota) !== null && _c !== void 0 ? _c : defaultRetryQuota_1.getDefaultRetryQuota(constants_1.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(error, attempts, maxAttempts) {
      return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
      let maxAttempts;
      try {
        maxAttempts = await this.maxAttemptsProvider();
      } catch (error) {
        maxAttempts = exports2.DEFAULT_MAX_ATTEMPTS;
      }
      return maxAttempts;
    }
    async retry(next, args) {
      let retryTokenAmount;
      let attempts = 0;
      let totalDelay = 0;
      const maxAttempts = await this.getMaxAttempts();
      const {request} = args;
      if (protocol_http_1.HttpRequest.isInstance(request)) {
        request.headers[constants_1.INVOCATION_ID_HEADER] = uuid_1.v4();
      }
      while (true) {
        try {
          if (protocol_http_1.HttpRequest.isInstance(request)) {
            request.headers[constants_1.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
          }
          const {response, output} = await next(args);
          this.retryQuota.releaseRetryTokens(retryTokenAmount);
          output.$metadata.attempts = attempts + 1;
          output.$metadata.totalRetryDelay = totalDelay;
          return {response, output};
        } catch (err) {
          attempts++;
          if (this.shouldRetry(err, attempts, maxAttempts)) {
            retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
            const delay = this.delayDecider(service_error_classification_1.isThrottlingError(err) ? constants_1.THROTTLING_RETRY_DELAY_BASE : constants_1.DEFAULT_RETRY_DELAY_BASE, attempts);
            totalDelay += delay;
            await new Promise((resolve) => setTimeout(resolve, delay));
            continue;
          }
          if (!err.$metadata) {
            err.$metadata = {};
          }
          err.$metadata.attempts = attempts;
          err.$metadata.totalRetryDelay = totalDelay;
          throw err;
        }
      }
    }
  };
  exports2.StandardRetryStrategy = StandardRetryStrategy;
});

// node_modules/@aws-sdk/middleware-retry/dist/cjs/configurations.js
var require_configurations = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.NODE_RETRY_MODE_CONFIG_OPTIONS = exports2.CONFIG_RETRY_MODE = exports2.ENV_RETRY_MODE = exports2.resolveRetryConfig = exports2.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = exports2.CONFIG_MAX_ATTEMPTS = exports2.ENV_MAX_ATTEMPTS = void 0;
  var defaultStrategy_1 = require_defaultStrategy();
  exports2.ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
  exports2.CONFIG_MAX_ATTEMPTS = "max_attempts";
  exports2.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
      const value = env[exports2.ENV_MAX_ATTEMPTS];
      if (!value)
        return void 0;
      const maxAttempt = parseInt(value);
      if (Number.isNaN(maxAttempt)) {
        throw new Error(`Environment variable ${exports2.ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
      }
      return maxAttempt;
    },
    configFileSelector: (profile) => {
      const value = profile[exports2.CONFIG_MAX_ATTEMPTS];
      if (!value)
        return void 0;
      const maxAttempt = parseInt(value);
      if (Number.isNaN(maxAttempt)) {
        throw new Error(`Shared config file entry ${exports2.CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
      }
      return maxAttempt;
    },
    default: defaultStrategy_1.DEFAULT_MAX_ATTEMPTS
  };
  var resolveRetryConfig = (input) => {
    const maxAttempts = normalizeMaxAttempts(input.maxAttempts);
    return {
      ...input,
      maxAttempts,
      retryStrategy: input.retryStrategy || new defaultStrategy_1.StandardRetryStrategy(maxAttempts)
    };
  };
  exports2.resolveRetryConfig = resolveRetryConfig;
  var normalizeMaxAttempts = (maxAttempts = defaultStrategy_1.DEFAULT_MAX_ATTEMPTS) => {
    if (typeof maxAttempts === "number") {
      const promisified = Promise.resolve(maxAttempts);
      return () => promisified;
    }
    return maxAttempts;
  };
  exports2.ENV_RETRY_MODE = "AWS_RETRY_MODE";
  exports2.CONFIG_RETRY_MODE = "retry_mode";
  exports2.NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[exports2.ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[exports2.CONFIG_RETRY_MODE],
    default: defaultStrategy_1.DEFAULT_RETRY_MODE
  };
});

// node_modules/@aws-sdk/middleware-retry/dist/cjs/index.js
var require_cjs14 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_retryMiddleware(), exports2);
  tslib_1.__exportStar(require_omitRetryHeadersMiddleware(), exports2);
  tslib_1.__exportStar(require_defaultStrategy(), exports2);
  tslib_1.__exportStar(require_configurations(), exports2);
  tslib_1.__exportStar(require_delayDecider(), exports2);
  tslib_1.__exportStar(require_retryDecider(), exports2);
});

// node_modules/@aws-sdk/node-config-provider/dist/cjs/fromEnv.js
var require_fromEnv = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.fromEnv = void 0;
  var property_provider_1 = require_cjs2();
  var fromEnv = (envVarSelector) => async () => {
    try {
      const config = envVarSelector(process.env);
      if (config === void 0) {
        throw new Error();
      }
      return config;
    } catch (e) {
      throw new property_provider_1.ProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
    }
  };
  exports2.fromEnv = fromEnv;
});

// node_modules/@aws-sdk/node-config-provider/dist/cjs/fromSharedConfigFiles.js
var require_fromSharedConfigFiles = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.fromSharedConfigFiles = exports2.ENV_PROFILE = void 0;
  var property_provider_1 = require_cjs2();
  var shared_ini_file_loader_1 = require_cjs5();
  var DEFAULT_PROFILE = "default";
  exports2.ENV_PROFILE = "AWS_PROFILE";
  var fromSharedConfigFiles = (configSelector, {preferredFile = "config", ...init} = {}) => async () => {
    const {loadedConfig = shared_ini_file_loader_1.loadSharedConfigFiles(init), profile = process.env[exports2.ENV_PROFILE] || DEFAULT_PROFILE} = init;
    const {configFile, credentialsFile} = await loadedConfig;
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config" ? {...profileFromCredentials, ...profileFromConfig} : {...profileFromConfig, ...profileFromCredentials};
    try {
      const configValue = configSelector(mergedProfile);
      if (configValue === void 0) {
        throw new Error();
      }
      return configValue;
    } catch (e) {
      throw new property_provider_1.ProviderError(e.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
    }
  };
  exports2.fromSharedConfigFiles = fromSharedConfigFiles;
});

// node_modules/@aws-sdk/node-config-provider/dist/cjs/fromStatic.js
var require_fromStatic2 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.fromStatic = void 0;
  var property_provider_1 = require_cjs2();
  var isFunction = (func) => typeof func === "function";
  var fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => defaultValue() : property_provider_1.fromStatic(defaultValue);
  exports2.fromStatic = fromStatic;
});

// node_modules/@aws-sdk/node-config-provider/dist/cjs/configLoader.js
var require_configLoader = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.loadConfig = void 0;
  var property_provider_1 = require_cjs2();
  var fromEnv_1 = require_fromEnv();
  var fromSharedConfigFiles_1 = require_fromSharedConfigFiles();
  var fromStatic_1 = require_fromStatic2();
  var loadConfig = ({environmentVariableSelector, configFileSelector, default: defaultValue}, configuration = {}) => property_provider_1.memoize(property_provider_1.chain(fromEnv_1.fromEnv(environmentVariableSelector), fromSharedConfigFiles_1.fromSharedConfigFiles(configFileSelector, configuration), fromStatic_1.fromStatic(defaultValue)));
  exports2.loadConfig = loadConfig;
});

// node_modules/@aws-sdk/node-config-provider/dist/cjs/index.js
var require_cjs15 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_configLoader(), exports2);
});

// node_modules/@aws-sdk/util-uri-escape/dist/cjs/escape-uri.js
var require_escape_uri = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.escapeUri = void 0;
  var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
  exports2.escapeUri = escapeUri;
  var hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;
});

// node_modules/@aws-sdk/util-uri-escape/dist/cjs/escape-uri-path.js
var require_escape_uri_path = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.escapeUriPath = void 0;
  var escape_uri_1 = require_escape_uri();
  var escapeUriPath = (uri) => uri.split("/").map(escape_uri_1.escapeUri).join("/");
  exports2.escapeUriPath = escapeUriPath;
});

// node_modules/@aws-sdk/util-uri-escape/dist/cjs/index.js
var require_cjs16 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_escape_uri(), exports2);
  tslib_1.__exportStar(require_escape_uri_path(), exports2);
});

// node_modules/@aws-sdk/querystring-builder/dist/cjs/index.js
var require_cjs17 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.buildQueryString = void 0;
  var util_uri_escape_1 = require_cjs16();
  function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
      const value = query[key];
      key = util_uri_escape_1.escapeUri(key);
      if (Array.isArray(value)) {
        for (let i = 0, iLen = value.length; i < iLen; i++) {
          parts.push(`${key}=${util_uri_escape_1.escapeUri(value[i])}`);
        }
      } else {
        let qsEntry = key;
        if (value || typeof value === "string") {
          qsEntry += `=${util_uri_escape_1.escapeUri(value)}`;
        }
        parts.push(qsEntry);
      }
    }
    return parts.join("&");
  }
  exports2.buildQueryString = buildQueryString;
});

// node_modules/@aws-sdk/node-http-handler/dist/cjs/constants.js
var require_constants3 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.NODEJS_TIMEOUT_ERROR_CODES = void 0;
  exports2.NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
});

// node_modules/@aws-sdk/node-http-handler/dist/cjs/get-transformed-headers.js
var require_get_transformed_headers = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getTransformedHeaders = void 0;
  var getTransformedHeaders = (headers) => {
    const transformedHeaders = {};
    for (const name of Object.keys(headers)) {
      const headerValues = headers[name];
      transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
    }
    return transformedHeaders;
  };
  exports2.getTransformedHeaders = getTransformedHeaders;
});

// node_modules/@aws-sdk/node-http-handler/dist/cjs/set-connection-timeout.js
var require_set_connection_timeout = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.setConnectionTimeout = void 0;
  var setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
    if (!timeoutInMs) {
      return;
    }
    request.on("socket", (socket) => {
      if (socket.connecting) {
        const timeoutId = setTimeout(() => {
          request.destroy();
          reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
            name: "TimeoutError"
          }));
        }, timeoutInMs);
        socket.on("connect", () => {
          clearTimeout(timeoutId);
        });
      }
    });
  };
  exports2.setConnectionTimeout = setConnectionTimeout;
});

// node_modules/@aws-sdk/node-http-handler/dist/cjs/set-socket-timeout.js
var require_set_socket_timeout = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.setSocketTimeout = void 0;
  var setSocketTimeout = (request, reject, timeoutInMs = 0) => {
    request.setTimeout(timeoutInMs, () => {
      request.destroy();
      reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), {name: "TimeoutError"}));
    });
  };
  exports2.setSocketTimeout = setSocketTimeout;
});

// node_modules/@aws-sdk/node-http-handler/dist/cjs/write-request-body.js
var require_write_request_body = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.writeRequestBody = void 0;
  var stream_1 = require("stream");
  function writeRequestBody(httpRequest, request) {
    const expect = request.headers["Expect"] || request.headers["expect"];
    if (expect === "100-continue") {
      httpRequest.on("continue", () => {
        writeBody(httpRequest, request.body);
      });
    } else {
      writeBody(httpRequest, request.body);
    }
  }
  exports2.writeRequestBody = writeRequestBody;
  function writeBody(httpRequest, body) {
    if (body instanceof stream_1.Readable) {
      body.pipe(httpRequest);
    } else if (body) {
      httpRequest.end(Buffer.from(body));
    } else {
      httpRequest.end();
    }
  }
});

// node_modules/@aws-sdk/node-http-handler/dist/cjs/node-http-handler.js
var require_node_http_handler = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.NodeHttpHandler = void 0;
  var protocol_http_1 = require_cjs12();
  var querystring_builder_1 = require_cjs17();
  var http_1 = require("http");
  var https_1 = require("https");
  var constants_1 = require_constants3();
  var get_transformed_headers_1 = require_get_transformed_headers();
  var set_connection_timeout_1 = require_set_connection_timeout();
  var set_socket_timeout_1 = require_set_socket_timeout();
  var write_request_body_1 = require_write_request_body();
  var NodeHttpHandler = class {
    constructor({connectionTimeout, socketTimeout, httpAgent, httpsAgent} = {}) {
      this.metadata = {handlerProtocol: "http/1.1"};
      this.connectionTimeout = connectionTimeout;
      this.socketTimeout = socketTimeout;
      const keepAlive = true;
      const maxSockets = 50;
      this.httpAgent = httpAgent || new http_1.Agent({keepAlive, maxSockets});
      this.httpsAgent = httpsAgent || new https_1.Agent({keepAlive, maxSockets});
    }
    destroy() {
      this.httpAgent.destroy();
      this.httpsAgent.destroy();
    }
    handle(request, {abortSignal} = {}) {
      return new Promise((resolve, reject) => {
        if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
          return;
        }
        const isSSL = request.protocol === "https:";
        const queryString = querystring_builder_1.buildQueryString(request.query || {});
        const nodeHttpsOptions = {
          headers: request.headers,
          host: request.hostname,
          method: request.method,
          path: queryString ? `${request.path}?${queryString}` : request.path,
          port: request.port,
          agent: isSSL ? this.httpsAgent : this.httpAgent
        };
        const requestFunc = isSSL ? https_1.request : http_1.request;
        const req = requestFunc(nodeHttpsOptions, (res) => {
          const httpResponse = new protocol_http_1.HttpResponse({
            statusCode: res.statusCode || -1,
            headers: get_transformed_headers_1.getTransformedHeaders(res.headers),
            body: res
          });
          resolve({response: httpResponse});
        });
        req.on("error", (err) => {
          if (constants_1.NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
            reject(Object.assign(err, {name: "TimeoutError"}));
          } else {
            reject(err);
          }
        });
        set_connection_timeout_1.setConnectionTimeout(req, reject, this.connectionTimeout);
        set_socket_timeout_1.setSocketTimeout(req, reject, this.socketTimeout);
        if (abortSignal) {
          abortSignal.onabort = () => {
            req.abort();
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
          };
        }
        write_request_body_1.writeRequestBody(req, request);
      });
    }
  };
  exports2.NodeHttpHandler = NodeHttpHandler;
});

// node_modules/@aws-sdk/node-http-handler/dist/cjs/node-http2-handler.js
var require_node_http2_handler = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.NodeHttp2Handler = void 0;
  var protocol_http_1 = require_cjs12();
  var querystring_builder_1 = require_cjs17();
  var http2_1 = require("http2");
  var get_transformed_headers_1 = require_get_transformed_headers();
  var write_request_body_1 = require_write_request_body();
  var NodeHttp2Handler = class {
    constructor({requestTimeout, sessionTimeout} = {}) {
      this.metadata = {handlerProtocol: "h2"};
      this.requestTimeout = requestTimeout;
      this.sessionTimeout = sessionTimeout;
      this.connectionPool = new Map();
    }
    destroy() {
      for (const [_, http2Session] of this.connectionPool) {
        http2Session.destroy();
      }
      this.connectionPool.clear();
    }
    handle(request, {abortSignal} = {}) {
      return new Promise((resolve, reject) => {
        if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
          return;
        }
        const {hostname, method, port, protocol, path, query} = request;
        const queryString = querystring_builder_1.buildQueryString(query || {});
        const req = this.getSession(`${protocol}//${hostname}${port ? `:${port}` : ""}`).request({
          ...request.headers,
          [http2_1.constants.HTTP2_HEADER_PATH]: queryString ? `${path}?${queryString}` : path,
          [http2_1.constants.HTTP2_HEADER_METHOD]: method
        });
        req.on("response", (headers) => {
          const httpResponse = new protocol_http_1.HttpResponse({
            statusCode: headers[":status"] || -1,
            headers: get_transformed_headers_1.getTransformedHeaders(headers),
            body: req
          });
          resolve({response: httpResponse});
        });
        req.on("error", reject);
        req.on("frameError", reject);
        req.on("aborted", reject);
        const requestTimeout = this.requestTimeout;
        if (requestTimeout) {
          req.setTimeout(requestTimeout, () => {
            req.close();
            const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
            timeoutError.name = "TimeoutError";
            reject(timeoutError);
          });
        }
        if (abortSignal) {
          abortSignal.onabort = () => {
            req.close();
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
          };
        }
        write_request_body_1.writeRequestBody(req, request);
      });
    }
    getSession(authority) {
      const connectionPool = this.connectionPool;
      const existingSession = connectionPool.get(authority);
      if (existingSession)
        return existingSession;
      const newSession = http2_1.connect(authority);
      connectionPool.set(authority, newSession);
      const sessionTimeout = this.sessionTimeout;
      if (sessionTimeout) {
        newSession.setTimeout(sessionTimeout, () => {
          newSession.close();
          connectionPool.delete(authority);
        });
      }
      return newSession;
    }
  };
  exports2.NodeHttp2Handler = NodeHttp2Handler;
});

// node_modules/@aws-sdk/node-http-handler/dist/cjs/stream-collector/collector.js
var require_collector = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.Collector = void 0;
  var stream_1 = require("stream");
  var Collector = class extends stream_1.Writable {
    constructor() {
      super(...arguments);
      this.bufferedBytes = [];
    }
    _write(chunk, encoding, callback) {
      this.bufferedBytes.push(chunk);
      callback();
    }
  };
  exports2.Collector = Collector;
});

// node_modules/@aws-sdk/node-http-handler/dist/cjs/stream-collector/index.js
var require_stream_collector = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.streamCollector = void 0;
  var collector_1 = require_collector();
  var streamCollector = (stream) => new Promise((resolve, reject) => {
    const collector = new collector_1.Collector();
    stream.pipe(collector);
    stream.on("error", (err) => {
      collector.end();
      reject(err);
    });
    collector.on("error", reject);
    collector.on("finish", function() {
      const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
      resolve(bytes);
    });
  });
  exports2.streamCollector = streamCollector;
});

// node_modules/@aws-sdk/node-http-handler/dist/cjs/index.js
var require_cjs18 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_node_http_handler(), exports2);
  tslib_1.__exportStar(require_node_http2_handler(), exports2);
  tslib_1.__exportStar(require_stream_collector(), exports2);
});

// node_modules/@aws-sdk/util-base64-node/dist/cjs/index.js
var require_cjs19 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.toBase64 = exports2.fromBase64 = void 0;
  var util_buffer_from_1 = require_cjs10();
  function fromBase64(input) {
    const buffer = util_buffer_from_1.fromString(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  }
  exports2.fromBase64 = fromBase64;
  function toBase64(input) {
    return util_buffer_from_1.fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
  }
  exports2.toBase64 = toBase64;
});

// node_modules/@aws-sdk/util-body-length-node/dist/cjs/index.js
var require_cjs20 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.calculateBodyLength = void 0;
  var fs_1 = require("fs");
  function calculateBodyLength(body) {
    if (!body) {
      return 0;
    }
    if (typeof body === "string") {
      return Buffer.from(body).length;
    } else if (typeof body.byteLength === "number") {
      return body.byteLength;
    } else if (typeof body.size === "number") {
      return body.size;
    } else if (typeof body.path === "string") {
      return fs_1.lstatSync(body.path).size;
    }
  }
  exports2.calculateBodyLength = calculateBodyLength;
});

// node_modules/@aws-sdk/util-user-agent-node/dist/cjs/index.js
var require_cjs21 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.defaultUserAgent = exports2.UA_APP_ID_INI_NAME = exports2.UA_APP_ID_ENV_NAME = void 0;
  var node_config_provider_1 = require_cjs15();
  var os_1 = require("os");
  var process_1 = require("process");
  exports2.UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
  exports2.UA_APP_ID_INI_NAME = "sdk-ua-app-id";
  var defaultUserAgent = ({serviceId, clientVersion}) => async () => {
    const sections = [
      ["aws-sdk-js", clientVersion],
      [`os/${os_1.platform()}`, os_1.release()],
      ["lang/js"],
      ["md/nodejs", `${process_1.versions.node}`]
    ];
    if (serviceId) {
      sections.push([`api/${serviceId}`, clientVersion]);
    }
    if (process_1.env.AWS_EXECUTION_ENV) {
      sections.push([`exec-env/${process_1.env.AWS_EXECUTION_ENV}`]);
    }
    const appId = await node_config_provider_1.loadConfig({
      environmentVariableSelector: (env) => env[exports2.UA_APP_ID_ENV_NAME],
      configFileSelector: (profile) => profile[exports2.UA_APP_ID_INI_NAME],
      default: void 0
    })();
    if (appId) {
      sections.push([`app/${appId}`]);
    }
    return sections;
  };
  exports2.defaultUserAgent = defaultUserAgent;
});

// node_modules/@aws-sdk/util-utf8-node/dist/cjs/index.js
var require_cjs22 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.toUtf8 = exports2.fromUtf8 = void 0;
  var util_buffer_from_1 = require_cjs10();
  var fromUtf8 = (input) => {
    const buf = util_buffer_from_1.fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  };
  exports2.fromUtf8 = fromUtf8;
  var toUtf8 = (input) => util_buffer_from_1.fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
  exports2.toUtf8 = toUtf8;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/endpoints.js
var require_endpoints = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.defaultRegionInfoProvider = void 0;
  var AWS_TEMPLATE = "dynamodb.{region}.amazonaws.com";
  var AWS_CN_TEMPLATE = "dynamodb.{region}.amazonaws.com.cn";
  var AWS_ISO_TEMPLATE = "dynamodb.{region}.c2s.ic.gov";
  var AWS_ISO_B_TEMPLATE = "dynamodb.{region}.sc2s.sgov.gov";
  var AWS_US_GOV_TEMPLATE = "dynamodb.{region}.amazonaws.com";
  var AWS_REGIONS = new Set([
    "af-south-1",
    "ap-east-1",
    "ap-northeast-1",
    "ap-northeast-2",
    "ap-south-1",
    "ap-southeast-1",
    "ap-southeast-2",
    "ca-central-1",
    "eu-central-1",
    "eu-north-1",
    "eu-south-1",
    "eu-west-1",
    "eu-west-2",
    "eu-west-3",
    "me-south-1",
    "sa-east-1",
    "us-east-1",
    "us-east-2",
    "us-west-1",
    "us-west-2"
  ]);
  var AWS_CN_REGIONS = new Set(["cn-north-1", "cn-northwest-1"]);
  var AWS_ISO_REGIONS = new Set(["us-iso-east-1"]);
  var AWS_ISO_B_REGIONS = new Set(["us-isob-east-1"]);
  var AWS_US_GOV_REGIONS = new Set(["us-gov-east-1", "us-gov-west-1"]);
  var defaultRegionInfoProvider = (region, options) => {
    let regionInfo = void 0;
    switch (region) {
      case "af-south-1":
        regionInfo = {
          hostname: "dynamodb.af-south-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "ap-east-1":
        regionInfo = {
          hostname: "dynamodb.ap-east-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "ap-northeast-1":
        regionInfo = {
          hostname: "dynamodb.ap-northeast-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "ap-northeast-2":
        regionInfo = {
          hostname: "dynamodb.ap-northeast-2.amazonaws.com",
          partition: "aws"
        };
        break;
      case "ap-south-1":
        regionInfo = {
          hostname: "dynamodb.ap-south-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "ap-southeast-1":
        regionInfo = {
          hostname: "dynamodb.ap-southeast-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "ap-southeast-2":
        regionInfo = {
          hostname: "dynamodb.ap-southeast-2.amazonaws.com",
          partition: "aws"
        };
        break;
      case "ca-central-1":
        regionInfo = {
          hostname: "dynamodb.ca-central-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "ca-central-1-fips":
        regionInfo = {
          hostname: "dynamodb-fips.ca-central-1.amazonaws.com",
          partition: "aws",
          signingRegion: "ca-central-1"
        };
        break;
      case "cn-north-1":
        regionInfo = {
          hostname: "dynamodb.cn-north-1.amazonaws.com.cn",
          partition: "aws-cn"
        };
        break;
      case "cn-northwest-1":
        regionInfo = {
          hostname: "dynamodb.cn-northwest-1.amazonaws.com.cn",
          partition: "aws-cn"
        };
        break;
      case "eu-central-1":
        regionInfo = {
          hostname: "dynamodb.eu-central-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "eu-north-1":
        regionInfo = {
          hostname: "dynamodb.eu-north-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "eu-south-1":
        regionInfo = {
          hostname: "dynamodb.eu-south-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "eu-west-1":
        regionInfo = {
          hostname: "dynamodb.eu-west-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "eu-west-2":
        regionInfo = {
          hostname: "dynamodb.eu-west-2.amazonaws.com",
          partition: "aws"
        };
        break;
      case "eu-west-3":
        regionInfo = {
          hostname: "dynamodb.eu-west-3.amazonaws.com",
          partition: "aws"
        };
        break;
      case "local":
        regionInfo = {
          hostname: "localhost:8000",
          partition: "aws",
          signingRegion: "us-east-1"
        };
        break;
      case "me-south-1":
        regionInfo = {
          hostname: "dynamodb.me-south-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "sa-east-1":
        regionInfo = {
          hostname: "dynamodb.sa-east-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "us-east-1":
        regionInfo = {
          hostname: "dynamodb.us-east-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "us-east-1-fips":
        regionInfo = {
          hostname: "dynamodb-fips.us-east-1.amazonaws.com",
          partition: "aws",
          signingRegion: "us-east-1"
        };
        break;
      case "us-east-2":
        regionInfo = {
          hostname: "dynamodb.us-east-2.amazonaws.com",
          partition: "aws"
        };
        break;
      case "us-east-2-fips":
        regionInfo = {
          hostname: "dynamodb-fips.us-east-2.amazonaws.com",
          partition: "aws",
          signingRegion: "us-east-2"
        };
        break;
      case "us-gov-east-1":
        regionInfo = {
          hostname: "dynamodb.us-gov-east-1.amazonaws.com",
          partition: "aws-us-gov"
        };
        break;
      case "us-gov-east-1-fips":
        regionInfo = {
          hostname: "dynamodb.us-gov-east-1.amazonaws.com",
          partition: "aws-us-gov",
          signingRegion: "us-gov-east-1"
        };
        break;
      case "us-gov-west-1":
        regionInfo = {
          hostname: "dynamodb.us-gov-west-1.amazonaws.com",
          partition: "aws-us-gov"
        };
        break;
      case "us-gov-west-1-fips":
        regionInfo = {
          hostname: "dynamodb.us-gov-west-1.amazonaws.com",
          partition: "aws-us-gov",
          signingRegion: "us-gov-west-1"
        };
        break;
      case "us-iso-east-1":
        regionInfo = {
          hostname: "dynamodb.us-iso-east-1.c2s.ic.gov",
          partition: "aws-iso"
        };
        break;
      case "us-isob-east-1":
        regionInfo = {
          hostname: "dynamodb.us-isob-east-1.sc2s.sgov.gov",
          partition: "aws-iso-b"
        };
        break;
      case "us-west-1":
        regionInfo = {
          hostname: "dynamodb.us-west-1.amazonaws.com",
          partition: "aws"
        };
        break;
      case "us-west-1-fips":
        regionInfo = {
          hostname: "dynamodb-fips.us-west-1.amazonaws.com",
          partition: "aws",
          signingRegion: "us-west-1"
        };
        break;
      case "us-west-2":
        regionInfo = {
          hostname: "dynamodb.us-west-2.amazonaws.com",
          partition: "aws"
        };
        break;
      case "us-west-2-fips":
        regionInfo = {
          hostname: "dynamodb-fips.us-west-2.amazonaws.com",
          partition: "aws",
          signingRegion: "us-west-2"
        };
        break;
      default:
        if (AWS_REGIONS.has(region)) {
          regionInfo = {
            hostname: AWS_TEMPLATE.replace("{region}", region),
            partition: "aws"
          };
        }
        if (AWS_CN_REGIONS.has(region)) {
          regionInfo = {
            hostname: AWS_CN_TEMPLATE.replace("{region}", region),
            partition: "aws-cn"
          };
        }
        if (AWS_ISO_REGIONS.has(region)) {
          regionInfo = {
            hostname: AWS_ISO_TEMPLATE.replace("{region}", region),
            partition: "aws-iso"
          };
        }
        if (AWS_ISO_B_REGIONS.has(region)) {
          regionInfo = {
            hostname: AWS_ISO_B_TEMPLATE.replace("{region}", region),
            partition: "aws-iso-b"
          };
        }
        if (AWS_US_GOV_REGIONS.has(region)) {
          regionInfo = {
            hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region),
            partition: "aws-us-gov"
          };
        }
        if (regionInfo === void 0) {
          regionInfo = {
            hostname: AWS_TEMPLATE.replace("{region}", region),
            partition: "aws"
          };
        }
    }
    return Promise.resolve({signingService: "dynamodb", ...regionInfo});
  };
  exports2.defaultRegionInfoProvider = defaultRegionInfoProvider;
});

// node_modules/@aws-sdk/querystring-parser/dist/cjs/index.js
var require_cjs23 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.parseQueryString = void 0;
  function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
      for (const pair of querystring.split("&")) {
        let [key, value = null] = pair.split("=");
        key = decodeURIComponent(key);
        if (value) {
          value = decodeURIComponent(value);
        }
        if (!(key in query)) {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [query[key], value];
        }
      }
    }
    return query;
  }
  exports2.parseQueryString = parseQueryString;
});

// node_modules/@aws-sdk/url-parser/dist/cjs/index.js
var require_cjs24 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.parseUrl = void 0;
  var querystring_parser_1 = require_cjs23();
  var parseUrl = (url) => {
    const {hostname, pathname, port, protocol, search} = new URL(url);
    let query;
    if (search) {
      query = querystring_parser_1.parseQueryString(search);
    }
    return {
      hostname,
      port: port ? parseInt(port) : void 0,
      protocol,
      path: pathname,
      query
    };
  };
  exports2.parseUrl = parseUrl;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ClientSharedValues = void 0;
  var endpoints_1 = require_endpoints();
  var url_parser_1 = require_cjs24();
  exports2.ClientSharedValues = {
    apiVersion: "2012-08-10",
    disableHostPrefix: false,
    logger: {},
    regionInfoProvider: endpoints_1.defaultRegionInfoProvider,
    serviceId: "DynamoDB",
    urlParser: url_parser_1.parseUrl
  };
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/runtimeConfig.js
var require_runtimeConfig = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ClientDefaultValues = void 0;
  var tslib_1 = require_tslib();
  var package_json_1 = tslib_1.__importDefault(require_package());
  var config_resolver_1 = require_cjs();
  var credential_provider_node_1 = require_cjs8();
  var hash_node_1 = require_cjs11();
  var middleware_retry_1 = require_cjs14();
  var node_config_provider_1 = require_cjs15();
  var node_http_handler_1 = require_cjs18();
  var util_base64_node_1 = require_cjs19();
  var util_body_length_node_1 = require_cjs20();
  var util_user_agent_node_1 = require_cjs21();
  var util_utf8_node_1 = require_cjs22();
  var runtimeConfig_shared_1 = require_runtimeConfig_shared();
  exports2.ClientDefaultValues = {
    ...runtimeConfig_shared_1.ClientSharedValues,
    runtime: "node",
    base64Decoder: util_base64_node_1.fromBase64,
    base64Encoder: util_base64_node_1.toBase64,
    bodyLengthChecker: util_body_length_node_1.calculateBodyLength,
    credentialDefaultProvider: credential_provider_node_1.defaultProvider,
    defaultUserAgentProvider: util_user_agent_node_1.defaultUserAgent({
      serviceId: runtimeConfig_shared_1.ClientSharedValues.serviceId,
      clientVersion: package_json_1.default.version
    }),
    maxAttempts: node_config_provider_1.loadConfig(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: node_config_provider_1.loadConfig(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: new node_http_handler_1.NodeHttpHandler(),
    sha256: hash_node_1.Hash.bind(null, "sha256"),
    streamCollector: node_http_handler_1.streamCollector,
    utf8Decoder: util_utf8_node_1.fromUtf8,
    utf8Encoder: util_utf8_node_1.toUtf8
  };
});

// node_modules/@aws-sdk/middleware-content-length/dist/cjs/index.js
var require_cjs25 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getContentLengthPlugin = exports2.contentLengthMiddlewareOptions = exports2.contentLengthMiddleware = void 0;
  var protocol_http_1 = require_cjs12();
  var CONTENT_LENGTH_HEADER = "content-length";
  function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
      const request = args.request;
      if (protocol_http_1.HttpRequest.isInstance(request)) {
        const {body, headers} = request;
        if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
          const length = bodyLengthChecker(body);
          if (length !== void 0) {
            request.headers = {
              ...request.headers,
              [CONTENT_LENGTH_HEADER]: String(length)
            };
          }
        }
      }
      return next({
        ...args,
        request
      });
    };
  }
  exports2.contentLengthMiddleware = contentLengthMiddleware;
  exports2.contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true
  };
  var getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), exports2.contentLengthMiddlewareOptions);
    }
  });
  exports2.getContentLengthPlugin = getContentLengthPlugin;
});

// node_modules/@aws-sdk/middleware-host-header/dist/cjs/index.js
var require_cjs26 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getHostHeaderPlugin = exports2.hostHeaderMiddlewareOptions = exports2.hostHeaderMiddleware = exports2.resolveHostHeaderConfig = void 0;
  var protocol_http_1 = require_cjs12();
  function resolveHostHeaderConfig(input) {
    return input;
  }
  exports2.resolveHostHeaderConfig = resolveHostHeaderConfig;
  var hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!protocol_http_1.HttpRequest.isInstance(args.request))
      return next(args);
    const {request} = args;
    const {handlerProtocol = ""} = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
      delete request.headers["host"];
      request.headers[":authority"] = "";
    } else if (!request.headers["host"]) {
      request.headers["host"] = request.hostname;
    }
    return next(args);
  };
  exports2.hostHeaderMiddleware = hostHeaderMiddleware;
  exports2.hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true
  };
  var getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(exports2.hostHeaderMiddleware(options), exports2.hostHeaderMiddlewareOptions);
    }
  });
  exports2.getHostHeaderPlugin = getHostHeaderPlugin;
});

// node_modules/@aws-sdk/middleware-logger/dist/cjs/loggerMiddleware.js
var require_loggerMiddleware = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getLoggerPlugin = exports2.loggerMiddlewareOptions = exports2.loggerMiddleware = void 0;
  var loggerMiddleware = () => (next, context) => async (args) => {
    const {clientName, commandName, inputFilterSensitiveLog, logger, outputFilterSensitiveLog} = context;
    const response = await next(args);
    if (!logger) {
      return response;
    }
    if (typeof logger.info === "function") {
      const {$metadata, ...outputWithoutMetadata} = response.output;
      logger.info({
        clientName,
        commandName,
        input: inputFilterSensitiveLog(args.input),
        output: outputFilterSensitiveLog(outputWithoutMetadata),
        metadata: $metadata
      });
    }
    return response;
  };
  exports2.loggerMiddleware = loggerMiddleware;
  exports2.loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true
  };
  var getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(exports2.loggerMiddleware(), exports2.loggerMiddlewareOptions);
    }
  });
  exports2.getLoggerPlugin = getLoggerPlugin;
});

// node_modules/@aws-sdk/middleware-logger/dist/cjs/index.js
var require_cjs27 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_loggerMiddleware(), exports2);
});

// node_modules/@aws-sdk/util-hex-encoding/dist/cjs/index.js
var require_cjs28 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.toHex = exports2.fromHex = void 0;
  var SHORT_TO_HEX = {};
  var HEX_TO_SHORT = {};
  for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
      encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
  }
  function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
      throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
      const encodedByte = encoded.substr(i, 2).toLowerCase();
      if (encodedByte in HEX_TO_SHORT) {
        out[i / 2] = HEX_TO_SHORT[encodedByte];
      } else {
        throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
      }
    }
    return out;
  }
  exports2.fromHex = fromHex;
  function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
  }
  exports2.toHex = toHex;
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/constants.js
var require_constants4 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.MAX_PRESIGNED_TTL = exports2.KEY_TYPE_IDENTIFIER = exports2.MAX_CACHE_SIZE = exports2.UNSIGNED_PAYLOAD = exports2.EVENT_ALGORITHM_IDENTIFIER = exports2.ALGORITHM_IDENTIFIER = exports2.UNSIGNABLE_PATTERNS = exports2.SEC_HEADER_PATTERN = exports2.PROXY_HEADER_PATTERN = exports2.ALWAYS_UNSIGNABLE_HEADERS = exports2.HOST_HEADER = exports2.TOKEN_HEADER = exports2.SHA256_HEADER = exports2.SIGNATURE_HEADER = exports2.GENERATED_HEADERS = exports2.DATE_HEADER = exports2.AMZ_DATE_HEADER = exports2.AUTH_HEADER = exports2.TOKEN_QUERY_PARAM = exports2.SIGNATURE_QUERY_PARAM = exports2.EXPIRES_QUERY_PARAM = exports2.SIGNED_HEADERS_QUERY_PARAM = exports2.AMZ_DATE_QUERY_PARAM = exports2.CREDENTIAL_QUERY_PARAM = exports2.ALGORITHM_QUERY_PARAM = void 0;
  exports2.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
  exports2.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
  exports2.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
  exports2.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
  exports2.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
  exports2.SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
  exports2.TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
  exports2.AUTH_HEADER = "authorization";
  exports2.AMZ_DATE_HEADER = exports2.AMZ_DATE_QUERY_PARAM.toLowerCase();
  exports2.DATE_HEADER = "date";
  exports2.GENERATED_HEADERS = [exports2.AUTH_HEADER, exports2.AMZ_DATE_HEADER, exports2.DATE_HEADER];
  exports2.SIGNATURE_HEADER = exports2.SIGNATURE_QUERY_PARAM.toLowerCase();
  exports2.SHA256_HEADER = "x-amz-content-sha256";
  exports2.TOKEN_HEADER = exports2.TOKEN_QUERY_PARAM.toLowerCase();
  exports2.HOST_HEADER = "host";
  exports2.ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true
  };
  exports2.PROXY_HEADER_PATTERN = /^proxy-/;
  exports2.SEC_HEADER_PATTERN = /^sec-/;
  exports2.UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
  exports2.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
  exports2.EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
  exports2.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
  exports2.MAX_CACHE_SIZE = 50;
  exports2.KEY_TYPE_IDENTIFIER = "aws4_request";
  exports2.MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/credentialDerivation.js
var require_credentialDerivation = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.clearCredentialCache = exports2.getSigningKey = exports2.createScope = void 0;
  var util_hex_encoding_1 = require_cjs28();
  var constants_1 = require_constants4();
  var signingKeyCache = {};
  var cacheQueue = [];
  function createScope(shortDate, region, service) {
    return `${shortDate}/${region}/${service}/${constants_1.KEY_TYPE_IDENTIFIER}`;
  }
  exports2.createScope = createScope;
  var getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${util_hex_encoding_1.toHex(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
      return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > constants_1.MAX_CACHE_SIZE) {
      delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, constants_1.KEY_TYPE_IDENTIFIER]) {
      key = await hmac(sha256Constructor, key, signable);
    }
    return signingKeyCache[cacheKey] = key;
  };
  exports2.getSigningKey = getSigningKey;
  function clearCredentialCache() {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
      delete signingKeyCache[cacheKey];
    });
  }
  exports2.clearCredentialCache = clearCredentialCache;
  function hmac(ctor, secret, data) {
    const hash = new ctor(secret);
    hash.update(data);
    return hash.digest();
  }
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/getCanonicalHeaders.js
var require_getCanonicalHeaders = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getCanonicalHeaders = void 0;
  var constants_1 = require_constants4();
  function getCanonicalHeaders({headers}, unsignableHeaders, signableHeaders) {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
      const canonicalHeaderName = headerName.toLowerCase();
      if (canonicalHeaderName in constants_1.ALWAYS_UNSIGNABLE_HEADERS || (unsignableHeaders === null || unsignableHeaders === void 0 ? void 0 : unsignableHeaders.has(canonicalHeaderName)) || constants_1.PROXY_HEADER_PATTERN.test(canonicalHeaderName) || constants_1.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
        if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
          continue;
        }
      }
      canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
  }
  exports2.getCanonicalHeaders = getCanonicalHeaders;
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/getCanonicalQuery.js
var require_getCanonicalQuery = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getCanonicalQuery = void 0;
  var util_uri_escape_1 = require_cjs16();
  var constants_1 = require_constants4();
  function getCanonicalQuery({query = {}}) {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
      if (key.toLowerCase() === constants_1.SIGNATURE_HEADER) {
        continue;
      }
      keys.push(key);
      const value = query[key];
      if (typeof value === "string") {
        serialized[key] = `${util_uri_escape_1.escapeUri(key)}=${util_uri_escape_1.escapeUri(value)}`;
      } else if (Array.isArray(value)) {
        serialized[key] = value.slice(0).sort().reduce((encoded, value2) => encoded.concat([`${util_uri_escape_1.escapeUri(key)}=${util_uri_escape_1.escapeUri(value2)}`]), []).join("&");
      }
    }
    return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
  }
  exports2.getCanonicalQuery = getCanonicalQuery;
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/getPayloadHash.js
var require_getPayloadHash = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getPayloadHash = void 0;
  var is_array_buffer_1 = require_cjs9();
  var util_hex_encoding_1 = require_cjs28();
  var constants_1 = require_constants4();
  async function getPayloadHash({headers, body}, hashConstructor) {
    for (const headerName of Object.keys(headers)) {
      if (headerName.toLowerCase() === constants_1.SHA256_HEADER) {
        return headers[headerName];
      }
    }
    if (body == void 0) {
      return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    } else if (typeof body === "string" || ArrayBuffer.isView(body) || is_array_buffer_1.isArrayBuffer(body)) {
      const hashCtor = new hashConstructor();
      hashCtor.update(body);
      return util_hex_encoding_1.toHex(await hashCtor.digest());
    }
    return constants_1.UNSIGNED_PAYLOAD;
  }
  exports2.getPayloadHash = getPayloadHash;
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/hasHeader.js
var require_hasHeader = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.hasHeader = void 0;
  function hasHeader(soughtHeader, headers) {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
      if (soughtHeader === headerName.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
  exports2.hasHeader = hasHeader;
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/cloneRequest.js
var require_cloneRequest = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.cloneRequest = void 0;
  function cloneRequest({headers, query, ...rest}) {
    return {
      ...rest,
      headers: {...headers},
      query: query ? cloneQuery(query) : void 0
    };
  }
  exports2.cloneRequest = cloneRequest;
  function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {});
  }
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/moveHeadersToQuery.js
var require_moveHeadersToQuery = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.moveHeadersToQuery = void 0;
  var cloneRequest_1 = require_cloneRequest();
  function moveHeadersToQuery(request, options = {}) {
    var _a;
    const {headers, query = {}} = typeof request.clone === "function" ? request.clone() : cloneRequest_1.cloneRequest(request);
    for (const name of Object.keys(headers)) {
      const lname = name.toLowerCase();
      if (lname.substr(0, 6) === "x-amz-" && !((_a = options.unhoistableHeaders) === null || _a === void 0 ? void 0 : _a.has(lname))) {
        query[name] = headers[name];
        delete headers[name];
      }
    }
    return {
      ...request,
      headers,
      query
    };
  }
  exports2.moveHeadersToQuery = moveHeadersToQuery;
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/prepareRequest.js
var require_prepareRequest = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.prepareRequest = void 0;
  var cloneRequest_1 = require_cloneRequest();
  var constants_1 = require_constants4();
  function prepareRequest(request) {
    request = typeof request.clone === "function" ? request.clone() : cloneRequest_1.cloneRequest(request);
    for (const headerName of Object.keys(request.headers)) {
      if (constants_1.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
        delete request.headers[headerName];
      }
    }
    return request;
  }
  exports2.prepareRequest = prepareRequest;
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/utilDate.js
var require_utilDate = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.toDate = exports2.iso8601 = void 0;
  function iso8601(time) {
    return toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
  }
  exports2.iso8601 = iso8601;
  function toDate(time) {
    if (typeof time === "number") {
      return new Date(time * 1e3);
    }
    if (typeof time === "string") {
      if (Number(time)) {
        return new Date(Number(time) * 1e3);
      }
      return new Date(time);
    }
    return time;
  }
  exports2.toDate = toDate;
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/SignatureV4.js
var require_SignatureV4 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.SignatureV4 = void 0;
  var util_hex_encoding_1 = require_cjs28();
  var constants_1 = require_constants4();
  var credentialDerivation_1 = require_credentialDerivation();
  var getCanonicalHeaders_1 = require_getCanonicalHeaders();
  var getCanonicalQuery_1 = require_getCanonicalQuery();
  var getPayloadHash_1 = require_getPayloadHash();
  var hasHeader_1 = require_hasHeader();
  var moveHeadersToQuery_1 = require_moveHeadersToQuery();
  var prepareRequest_1 = require_prepareRequest();
  var utilDate_1 = require_utilDate();
  var SignatureV4 = class {
    constructor({applyChecksum, credentials, region, service, sha256, uriEscapePath = true}) {
      this.service = service;
      this.sha256 = sha256;
      this.uriEscapePath = uriEscapePath;
      this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
      this.regionProvider = normalizeRegionProvider(region);
      this.credentialProvider = normalizeCredentialsProvider(credentials);
    }
    async presign(originalRequest, options = {}) {
      const {signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService} = options;
      const credentials = await this.credentialProvider();
      const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
      const {longDate, shortDate} = formatDate(signingDate);
      if (expiresIn > constants_1.MAX_PRESIGNED_TTL) {
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
      }
      const scope = credentialDerivation_1.createScope(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
      const request = moveHeadersToQuery_1.moveHeadersToQuery(prepareRequest_1.prepareRequest(originalRequest), {unhoistableHeaders});
      if (credentials.sessionToken) {
        request.query[constants_1.TOKEN_QUERY_PARAM] = credentials.sessionToken;
      }
      request.query[constants_1.ALGORITHM_QUERY_PARAM] = constants_1.ALGORITHM_IDENTIFIER;
      request.query[constants_1.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
      request.query[constants_1.AMZ_DATE_QUERY_PARAM] = longDate;
      request.query[constants_1.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
      const canonicalHeaders = getCanonicalHeaders_1.getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
      request.query[constants_1.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
      request.query[constants_1.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash_1.getPayloadHash(originalRequest, this.sha256)));
      return request;
    }
    async sign(toSign, options) {
      if (typeof toSign === "string") {
        return this.signString(toSign, options);
      } else if (toSign.headers && toSign.payload) {
        return this.signEvent(toSign, options);
      } else {
        return this.signRequest(toSign, options);
      }
    }
    async signEvent({headers, payload}, {signingDate = new Date(), priorSignature, signingRegion, signingService}) {
      const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
      const {shortDate, longDate} = formatDate(signingDate);
      const scope = credentialDerivation_1.createScope(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
      const hashedPayload = await getPayloadHash_1.getPayloadHash({headers: {}, body: payload}, this.sha256);
      const hash = new this.sha256();
      hash.update(headers);
      const hashedHeaders = util_hex_encoding_1.toHex(await hash.digest());
      const stringToSign = [
        constants_1.EVENT_ALGORITHM_IDENTIFIER,
        longDate,
        scope,
        priorSignature,
        hashedHeaders,
        hashedPayload
      ].join("\n");
      return this.signString(stringToSign, {signingDate, signingRegion: region, signingService});
    }
    async signString(stringToSign, {signingDate = new Date(), signingRegion, signingService} = {}) {
      const credentials = await this.credentialProvider();
      const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
      const {shortDate} = formatDate(signingDate);
      const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
      hash.update(stringToSign);
      return util_hex_encoding_1.toHex(await hash.digest());
    }
    async signRequest(requestToSign, {signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService} = {}) {
      const credentials = await this.credentialProvider();
      const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
      const request = prepareRequest_1.prepareRequest(requestToSign);
      const {longDate, shortDate} = formatDate(signingDate);
      const scope = credentialDerivation_1.createScope(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
      request.headers[constants_1.AMZ_DATE_HEADER] = longDate;
      if (credentials.sessionToken) {
        request.headers[constants_1.TOKEN_HEADER] = credentials.sessionToken;
      }
      const payloadHash = await getPayloadHash_1.getPayloadHash(request, this.sha256);
      if (!hasHeader_1.hasHeader(constants_1.SHA256_HEADER, request.headers) && this.applyChecksum) {
        request.headers[constants_1.SHA256_HEADER] = payloadHash;
      }
      const canonicalHeaders = getCanonicalHeaders_1.getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
      const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
      request.headers[constants_1.AUTH_HEADER] = `${constants_1.ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
      return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
      const sortedHeaders = Object.keys(canonicalHeaders).sort();
      return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery_1.getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
      const hash = new this.sha256();
      hash.update(canonicalRequest);
      const hashedRequest = await hash.digest();
      return `${constants_1.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${util_hex_encoding_1.toHex(hashedRequest)}`;
    }
    getCanonicalPath({path}) {
      if (this.uriEscapePath) {
        const doubleEncoded = encodeURIComponent(path.replace(/^\//, ""));
        return `/${doubleEncoded.replace(/%2F/g, "/")}`;
      }
      return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
      const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
      const hash = new this.sha256(await keyPromise);
      hash.update(stringToSign);
      return util_hex_encoding_1.toHex(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
      return credentialDerivation_1.getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
  };
  exports2.SignatureV4 = SignatureV4;
  var formatDate = (now) => {
    const longDate = utilDate_1.iso8601(now).replace(/[\-:]/g, "");
    return {
      longDate,
      shortDate: longDate.substr(0, 8)
    };
  };
  var getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");
  var normalizeRegionProvider = (region) => {
    if (typeof region === "string") {
      const promisified = Promise.resolve(region);
      return () => promisified;
    } else {
      return region;
    }
  };
  var normalizeCredentialsProvider = (credentials) => {
    if (typeof credentials === "object") {
      const promisified = Promise.resolve(credentials);
      return () => promisified;
    } else {
      return credentials;
    }
  };
});

// node_modules/@aws-sdk/signature-v4/dist/cjs/index.js
var require_cjs29 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_credentialDerivation(), exports2);
  tslib_1.__exportStar(require_SignatureV4(), exports2);
});

// node_modules/@aws-sdk/middleware-signing/dist/cjs/configurations.js
var require_configurations2 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.resolveAwsAuthConfig = void 0;
  var signature_v4_1 = require_cjs29();
  function resolveAwsAuthConfig(input) {
    const credentials = input.credentials || input.credentialDefaultProvider(input);
    const normalizedCreds = normalizeProvider(credentials);
    const {signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256} = input;
    let signer;
    if (input.signer) {
      signer = normalizeProvider(input.signer);
    } else {
      signer = () => normalizeProvider(input.region)().then(async (region) => [await input.regionInfoProvider(region) || {}, region]).then(([regionInfo, region]) => {
        const {signingRegion, signingService} = regionInfo;
        input.signingRegion = input.signingRegion || signingRegion || region;
        input.signingName = input.signingName || signingService || input.serviceId;
        return new signature_v4_1.SignatureV4({
          credentials: normalizedCreds,
          region: input.signingRegion,
          service: input.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        });
      });
    }
    return {
      ...input,
      systemClockOffset,
      signingEscapePath,
      credentials: normalizedCreds,
      signer
    };
  }
  exports2.resolveAwsAuthConfig = resolveAwsAuthConfig;
  function normalizeProvider(input) {
    if (typeof input === "object") {
      const promisified = Promise.resolve(input);
      return () => promisified;
    }
    return input;
  }
});

// node_modules/@aws-sdk/middleware-signing/dist/cjs/middleware.js
var require_middleware = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getAwsAuthPlugin = exports2.awsAuthMiddlewareOptions = exports2.awsAuthMiddleware = void 0;
  var protocol_http_1 = require_cjs12();
  var isClockSkewed = (newServerTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - newServerTime) >= 3e5;
  var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
  function awsAuthMiddleware(options) {
    return (next, context) => async function(args) {
      if (!protocol_http_1.HttpRequest.isInstance(args.request))
        return next(args);
      const signer = typeof options.signer === "function" ? await options.signer() : options.signer;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, {
          signingDate: new Date(Date.now() + options.systemClockOffset),
          signingRegion: context["signing_region"],
          signingService: context["signing_service"]
        })
      });
      const {headers} = output.response;
      const dateHeader = headers && (headers.date || headers.Date);
      if (dateHeader) {
        const serverTime = Date.parse(dateHeader);
        if (isClockSkewed(serverTime, options.systemClockOffset)) {
          options.systemClockOffset = serverTime - Date.now();
        }
      }
      return output;
    };
  }
  exports2.awsAuthMiddleware = awsAuthMiddleware;
  exports2.awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true
  };
  var getAwsAuthPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(awsAuthMiddleware(options), exports2.awsAuthMiddlewareOptions);
    }
  });
  exports2.getAwsAuthPlugin = getAwsAuthPlugin;
});

// node_modules/@aws-sdk/middleware-signing/dist/cjs/index.js
var require_cjs30 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_configurations2(), exports2);
  tslib_1.__exportStar(require_middleware(), exports2);
});

// node_modules/@aws-sdk/middleware-user-agent/dist/cjs/configurations.js
var require_configurations3 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.resolveUserAgentConfig = void 0;
  function resolveUserAgentConfig(input) {
    return {
      ...input,
      customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent
    };
  }
  exports2.resolveUserAgentConfig = resolveUserAgentConfig;
});

// node_modules/@aws-sdk/middleware-user-agent/dist/cjs/constants.js
var require_constants5 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.UA_ESCAPE_REGEX = exports2.SPACE = exports2.X_AMZ_USER_AGENT = exports2.USER_AGENT = void 0;
  exports2.USER_AGENT = "user-agent";
  exports2.X_AMZ_USER_AGENT = "x-amz-user-agent";
  exports2.SPACE = " ";
  exports2.UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
});

// node_modules/@aws-sdk/middleware-user-agent/dist/cjs/user-agent-middleware.js
var require_user_agent_middleware = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getUserAgentPlugin = exports2.getUserAgentMiddlewareOptions = exports2.userAgentMiddleware = void 0;
  var protocol_http_1 = require_cjs12();
  var constants_1 = require_constants5();
  var userAgentMiddleware = (options) => (next, context) => async (args) => {
    var _a, _b;
    const {request} = args;
    if (!protocol_http_1.HttpRequest.isInstance(request))
      return next(args);
    const {headers} = request;
    const userAgent = ((_a = context === null || context === void 0 ? void 0 : context.userAgent) === null || _a === void 0 ? void 0 : _a.map(escapeUserAgent)) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    const customUserAgent = ((_b = options === null || options === void 0 ? void 0 : options.customUserAgent) === null || _b === void 0 ? void 0 : _b.map(escapeUserAgent)) || [];
    headers[constants_1.X_AMZ_USER_AGENT] = [...defaultUserAgent, ...userAgent, ...customUserAgent].join(constants_1.SPACE);
    const normalUAValue = [
      ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
      ...customUserAgent
    ].join(constants_1.SPACE);
    if (options.runtime !== "browser" && normalUAValue) {
      headers[constants_1.USER_AGENT] = headers[constants_1.USER_AGENT] ? `${headers[constants_1.USER_AGENT]} ${normalUAValue}` : normalUAValue;
    }
    return next({
      ...args,
      request
    });
  };
  exports2.userAgentMiddleware = userAgentMiddleware;
  var escapeUserAgent = ([name, version]) => {
    const prefixSeparatorIndex = name.indexOf("/");
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
      uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version].filter((item) => item && item.length > 0).map((item) => item === null || item === void 0 ? void 0 : item.replace(constants_1.UA_ESCAPE_REGEX, "_")).join("/");
  };
  exports2.getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true
  };
  var getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.add(exports2.userAgentMiddleware(config), exports2.getUserAgentMiddlewareOptions);
    }
  });
  exports2.getUserAgentPlugin = getUserAgentPlugin;
});

// node_modules/@aws-sdk/middleware-user-agent/dist/cjs/index.js
var require_cjs31 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_configurations3(), exports2);
  tslib_1.__exportStar(require_user_agent_middleware(), exports2);
});

// node_modules/@aws-sdk/middleware-stack/dist/cjs/MiddlewareStack.js
var require_MiddlewareStack = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.constructStack = void 0;
  var constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] || priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        if (entry.name && entry.name === toRemove) {
          isRemoved = true;
          entriesNameSet.delete(toRemove);
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    };
    const removeByReference = (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        if (entry.middleware === toRemove) {
          isRemoved = true;
          if (entry.name)
            entriesNameSet.delete(entry.name);
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    };
    const cloneTo = (toStack) => {
      absoluteEntries.forEach((entry) => {
        toStack.add(entry.middleware, {...entry});
      });
      relativeEntries.forEach((entry) => {
        toStack.addRelativeTo(entry.middleware, {...entry});
      });
      return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
      const expandedMiddlewareList = [];
      from.before.forEach((entry) => {
        if (entry.before.length === 0 && entry.after.length === 0) {
          expandedMiddlewareList.push(entry);
        } else {
          expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
        }
      });
      expandedMiddlewareList.push(from);
      from.after.reverse().forEach((entry) => {
        if (entry.before.length === 0 && entry.after.length === 0) {
          expandedMiddlewareList.push(entry);
        } else {
          expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
        }
      });
      return expandedMiddlewareList;
    };
    const getMiddlewareList = () => {
      const normalizedAbsoluteEntries = [];
      const normalizedRelativeEntries = [];
      const normalizedEntriesNameMap = {};
      absoluteEntries.forEach((entry) => {
        const normalizedEntry = {
          ...entry,
          before: [],
          after: []
        };
        if (normalizedEntry.name)
          normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
        normalizedAbsoluteEntries.push(normalizedEntry);
      });
      relativeEntries.forEach((entry) => {
        const normalizedEntry = {
          ...entry,
          before: [],
          after: []
        };
        if (normalizedEntry.name)
          normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
        normalizedRelativeEntries.push(normalizedEntry);
      });
      normalizedRelativeEntries.forEach((entry) => {
        if (entry.toMiddleware) {
          const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
          if (toMiddleware === void 0) {
            throw new Error(`${entry.toMiddleware} is not found when adding ${entry.name || "anonymous"} middleware ${entry.relation} ${entry.toMiddleware}`);
          }
          if (entry.relation === "after") {
            toMiddleware.after.push(entry);
          }
          if (entry.relation === "before") {
            toMiddleware.before.push(entry);
          }
        }
      });
      const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expendedMiddlewareList) => {
        wholeList.push(...expendedMiddlewareList);
        return wholeList;
      }, []);
      return mainChain.map((entry) => entry.middleware);
    };
    const stack = {
      add: (middleware, options = {}) => {
        const {name, override} = options;
        const entry = {
          step: "initialize",
          priority: "normal",
          middleware,
          ...options
        };
        if (name) {
          if (entriesNameSet.has(name)) {
            if (!override)
              throw new Error(`Duplicate middleware name '${name}'`);
            const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === name);
            const toOverride = absoluteEntries[toOverrideIndex];
            if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
              throw new Error(`"${name}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by same-name middleware with ${entry.priority} priority in ${entry.step} step.`);
            }
            absoluteEntries.splice(toOverrideIndex, 1);
          }
          entriesNameSet.add(name);
        }
        absoluteEntries.push(entry);
      },
      addRelativeTo: (middleware, options) => {
        const {name, override} = options;
        const entry = {
          middleware,
          ...options
        };
        if (name) {
          if (entriesNameSet.has(name)) {
            if (!override)
              throw new Error(`Duplicate middleware name '${name}'`);
            const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === name);
            const toOverride = relativeEntries[toOverrideIndex];
            if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
              throw new Error(`"${name}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by same-name middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
            }
            relativeEntries.splice(toOverrideIndex, 1);
          }
          entriesNameSet.add(name);
        }
        relativeEntries.push(entry);
      },
      clone: () => cloneTo(exports2.constructStack()),
      use: (plugin) => {
        plugin.applyToStack(stack);
      },
      remove: (toRemove) => {
        if (typeof toRemove === "string")
          return removeByName(toRemove);
        else
          return removeByReference(toRemove);
      },
      removeByTag: (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const {tags, name} = entry;
          if (tags && tags.includes(toRemove)) {
            if (name)
              entriesNameSet.delete(name);
            isRemoved = true;
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      },
      concat: (from) => {
        const cloned = cloneTo(exports2.constructStack());
        cloned.use(from);
        return cloned;
      },
      applyToStack: cloneTo,
      resolve: (handler, context) => {
        for (const middleware of getMiddlewareList().reverse()) {
          handler = middleware(handler, context);
        }
        return handler;
      }
    };
    return stack;
  };
  exports2.constructStack = constructStack;
  var stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1
  };
  var priorityWeights = {
    high: 3,
    normal: 2,
    low: 1
  };
});

// node_modules/@aws-sdk/middleware-stack/dist/cjs/index.js
var require_cjs32 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_MiddlewareStack(), exports2);
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/client.js
var require_client = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.Client = void 0;
  var middleware_stack_1 = require_cjs32();
  var Client = class {
    constructor(config) {
      this.middlewareStack = middleware_stack_1.constructStack();
      this.config = config;
    }
    send(command, optionsOrCb, cb) {
      const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
      const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
      const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
      if (callback) {
        handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
        });
      } else {
        return handler(command).then((result) => result.output);
      }
    }
    destroy() {
      if (this.config.requestHandler.destroy)
        this.config.requestHandler.destroy();
    }
  };
  exports2.Client = Client;
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/command.js
var require_command = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.Command = void 0;
  var middleware_stack_1 = require_cjs32();
  var Command = class {
    constructor() {
      this.middlewareStack = middleware_stack_1.constructStack();
    }
  };
  exports2.Command = Command;
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/document-type.js
var require_document_type = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/exception.js
var require_exception = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/extended-encode-uri-component.js
var require_extended_encode_uri_component = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.extendedEncodeURIComponent = void 0;
  function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return "%" + c.charCodeAt(0).toString(16);
    });
  }
  exports2.extendedEncodeURIComponent = extendedEncodeURIComponent;
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/get-array-if-single-item.js
var require_get_array_if_single_item = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getArrayIfSingleItem = void 0;
  var getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];
  exports2.getArrayIfSingleItem = getArrayIfSingleItem;
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/get-value-from-text-node.js
var require_get_value_from_text_node = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getValueFromTextNode = void 0;
  var getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
        obj[key] = obj[key][textNodeName];
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        obj[key] = exports2.getValueFromTextNode(obj[key]);
      }
    }
    return obj;
  };
  exports2.getValueFromTextNode = getValueFromTextNode;
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/lazy-json.js
var require_lazy_json = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.LazyJsonString = exports2.StringWrapper = void 0;
  var StringWrapper = function() {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [null, ...arguments]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
  };
  exports2.StringWrapper = StringWrapper;
  exports2.StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
      value: exports2.StringWrapper,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  Object.setPrototypeOf(exports2.StringWrapper, String);
  var LazyJsonString = class extends exports2.StringWrapper {
    deserializeJSON() {
      return JSON.parse(super.toString());
    }
    toJSON() {
      return super.toString();
    }
    static fromObject(object) {
      if (object instanceof LazyJsonString) {
        return object;
      } else if (object instanceof String || typeof object === "string") {
        return new LazyJsonString(object);
      }
      return new LazyJsonString(JSON.stringify(object));
    }
  };
  exports2.LazyJsonString = LazyJsonString;
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/date-utils.js
var require_date_utils = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.dateToUtcString = void 0;
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${days[dayOfWeek]}, ${dayOfMonthString} ${months[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
  }
  exports2.dateToUtcString = dateToUtcString;
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/split-every.js
var require_split_every = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.splitEvery = void 0;
  function splitEvery(value, delimiter2, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
      throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter2);
    if (numDelimiters === 1) {
      return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for (let i = 0; i < segments.length; i++) {
      if (currentSegment === "") {
        currentSegment = segments[i];
      } else {
        currentSegment += delimiter2 + segments[i];
      }
      if ((i + 1) % numDelimiters === 0) {
        compoundSegments.push(currentSegment);
        currentSegment = "";
      }
    }
    if (currentSegment !== "") {
      compoundSegments.push(currentSegment);
    }
    return compoundSegments;
  }
  exports2.splitEvery = splitEvery;
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/constants.js
var require_constants6 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.SENSITIVE_STRING = void 0;
  exports2.SENSITIVE_STRING = "***SensitiveInformation***";
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/retryable-trait.js
var require_retryable_trait = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/sdk-error.js
var require_sdk_error = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
});

// node_modules/@aws-sdk/smithy-client/dist/cjs/index.js
var require_cjs33 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_client(), exports2);
  tslib_1.__exportStar(require_command(), exports2);
  tslib_1.__exportStar(require_document_type(), exports2);
  tslib_1.__exportStar(require_exception(), exports2);
  tslib_1.__exportStar(require_extended_encode_uri_component(), exports2);
  tslib_1.__exportStar(require_get_array_if_single_item(), exports2);
  tslib_1.__exportStar(require_get_value_from_text_node(), exports2);
  tslib_1.__exportStar(require_lazy_json(), exports2);
  tslib_1.__exportStar(require_date_utils(), exports2);
  tslib_1.__exportStar(require_split_every(), exports2);
  tslib_1.__exportStar(require_constants6(), exports2);
  tslib_1.__exportStar(require_retryable_trait(), exports2);
  tslib_1.__exportStar(require_sdk_error(), exports2);
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/DynamoDBClient.js
var require_DynamoDBClient = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DynamoDBClient = void 0;
  var runtimeConfig_1 = require_runtimeConfig();
  var config_resolver_1 = require_cjs();
  var middleware_content_length_1 = require_cjs25();
  var middleware_host_header_1 = require_cjs26();
  var middleware_logger_1 = require_cjs27();
  var middleware_retry_1 = require_cjs14();
  var middleware_signing_1 = require_cjs30();
  var middleware_user_agent_1 = require_cjs31();
  var smithy_client_1 = require_cjs33();
  var DynamoDBClient = class extends smithy_client_1.Client {
    constructor(configuration) {
      let _config_0 = {
        ...runtimeConfig_1.ClientDefaultValues,
        ...configuration
      };
      let _config_1 = config_resolver_1.resolveRegionConfig(_config_0);
      let _config_2 = config_resolver_1.resolveEndpointsConfig(_config_1);
      let _config_3 = middleware_signing_1.resolveAwsAuthConfig(_config_2);
      let _config_4 = middleware_retry_1.resolveRetryConfig(_config_3);
      let _config_5 = middleware_host_header_1.resolveHostHeaderConfig(_config_4);
      let _config_6 = middleware_user_agent_1.resolveUserAgentConfig(_config_5);
      super(_config_6);
      this.config = _config_6;
      this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(this.config));
      this.middlewareStack.use(middleware_retry_1.getRetryPlugin(this.config));
      this.middlewareStack.use(middleware_content_length_1.getContentLengthPlugin(this.config));
      this.middlewareStack.use(middleware_host_header_1.getHostHeaderPlugin(this.config));
      this.middlewareStack.use(middleware_logger_1.getLoggerPlugin(this.config));
      this.middlewareStack.use(middleware_user_agent_1.getUserAgentPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
  exports2.DynamoDBClient = DynamoDBClient;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/models/models_0.js
var require_models_0 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ProvisionedThroughputOverride = exports2.CreateGlobalTableInput = exports2.Replica = exports2.CreateGlobalSecondaryIndexAction = exports2.TableNotFoundException = exports2.TableInUseException = exports2.LimitExceededException = exports2.CreateBackupOutput = exports2.CreateBackupInput = exports2.ContributorInsightsSummary = exports2.ContinuousBackupsUnavailableException = exports2.ContinuousBackupsDescription = exports2.PointInTimeRecoveryDescription = exports2.ConditionalCheckFailedException = exports2.BillingModeSummary = exports2.ItemCollectionSizeLimitExceededException = exports2.ResourceNotFoundException = exports2.ProvisionedThroughputExceededException = exports2.InvalidEndpointException = exports2.ConsumedCapacity = exports2.Capacity = exports2.RequestLimitExceeded = exports2.InternalServerError = exports2.BatchStatementError = exports2.BatchStatementErrorCodeEnum = exports2.BackupTypeFilter = exports2.BackupSummary = exports2.BackupNotFoundException = exports2.BackupInUseException = exports2.BackupDescription = exports2.SourceTableFeatureDetails = exports2.TimeToLiveDescription = exports2.StreamSpecification = exports2.SSEDescription = exports2.LocalSecondaryIndexInfo = exports2.GlobalSecondaryIndexInfo = exports2.Projection = exports2.SourceTableDetails = exports2.ProvisionedThroughput = exports2.KeySchemaElement = exports2.BackupDetails = exports2.BackupType = exports2.AutoScalingSettingsUpdate = exports2.AutoScalingSettingsDescription = exports2.AutoScalingPolicyUpdate = exports2.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = exports2.AutoScalingPolicyDescription = exports2.AutoScalingTargetTrackingScalingPolicyConfigurationDescription = exports2.AttributeDefinition = exports2.ArchivalSummary = void 0;
  exports2.ReplicaSettingsDescription = exports2.ReplicaGlobalSecondaryIndexSettingsDescription = exports2.DescribeGlobalTableSettingsInput = exports2.GlobalTableNotFoundException = exports2.DescribeGlobalTableOutput = exports2.DescribeGlobalTableInput = exports2.ExportNotFoundException = exports2.DescribeExportOutput = exports2.ExportDescription = exports2.ExportStatus = exports2.ExportFormat = exports2.DescribeExportInput = exports2.DescribeEndpointsResponse = exports2.Endpoint = exports2.DescribeEndpointsRequest = exports2.DescribeContributorInsightsOutput = exports2.FailureException = exports2.DescribeContributorInsightsInput = exports2.DescribeContinuousBackupsOutput = exports2.DescribeContinuousBackupsInput = exports2.DescribeBackupOutput = exports2.DescribeBackupInput = exports2.DeleteTableOutput = exports2.DeleteTableInput = exports2.DeleteReplicationGroupMemberAction = exports2.DeleteReplicaAction = exports2.TransactionConflictException = exports2.DeleteGlobalSecondaryIndexAction = exports2.DeleteBackupOutput = exports2.DeleteBackupInput = exports2.ResourceInUseException = exports2.CreateTableOutput = exports2.TableDescription = exports2.RestoreSummary = exports2.LocalSecondaryIndexDescription = exports2.GlobalSecondaryIndexDescription = exports2.ProvisionedThroughputDescription = exports2.CreateTableInput = exports2.Tag = exports2.SSESpecification = exports2.LocalSecondaryIndex = exports2.GlobalSecondaryIndex = exports2.CreateReplicationGroupMemberAction = exports2.ReplicaGlobalSecondaryIndex = exports2.CreateReplicaAction = exports2.GlobalTableAlreadyExistsException = exports2.CreateGlobalTableOutput = exports2.GlobalTableDescription = exports2.ReplicaDescription = exports2.ReplicaGlobalSecondaryIndexDescription = void 0;
  exports2.UpdateContinuousBackupsOutput = exports2.UpdateContinuousBackupsInput = exports2.PointInTimeRecoverySpecification = exports2.UntagResourceInput = exports2.TagResourceInput = exports2.RestoreTableToPointInTimeOutput = exports2.RestoreTableToPointInTimeInput = exports2.InvalidRestoreTimeException = exports2.TableAlreadyExistsException = exports2.RestoreTableFromBackupOutput = exports2.RestoreTableFromBackupInput = exports2.ListTagsOfResourceOutput = exports2.ListTagsOfResourceInput = exports2.ListTablesOutput = exports2.ListTablesInput = exports2.ListGlobalTablesOutput = exports2.GlobalTable = exports2.ListGlobalTablesInput = exports2.ListExportsOutput = exports2.ExportSummary = exports2.ListExportsInput = exports2.ListContributorInsightsOutput = exports2.ListContributorInsightsInput = exports2.ListBackupsOutput = exports2.ListBackupsInput = exports2.PointInTimeRecoveryUnavailableException = exports2.InvalidExportTimeException = exports2.ExportTableToPointInTimeOutput = exports2.ExportTableToPointInTimeInput = exports2.ExportConflictException = exports2.TransactionInProgressException = exports2.IdempotentParameterMismatchException = exports2.DuplicateItemException = exports2.KinesisStreamingDestinationOutput = exports2.KinesisStreamingDestinationInput = exports2.DescribeTimeToLiveOutput = exports2.DescribeTimeToLiveInput = exports2.DescribeTableReplicaAutoScalingOutput = exports2.TableAutoScalingDescription = exports2.ReplicaAutoScalingDescription = exports2.ReplicaGlobalSecondaryIndexAutoScalingDescription = exports2.DescribeTableReplicaAutoScalingInput = exports2.DescribeTableOutput = exports2.DescribeTableInput = exports2.DescribeLimitsOutput = exports2.DescribeLimitsInput = exports2.DescribeKinesisStreamingDestinationOutput = exports2.KinesisDataStreamDestination = exports2.DescribeKinesisStreamingDestinationInput = exports2.DescribeGlobalTableSettingsOutput = void 0;
  exports2.TransactGetItemsOutput = exports2.ExecuteTransactionOutput = exports2.ExecuteTransactionInput = exports2.BatchExecuteStatementOutput = exports2.BatchExecuteStatementInput = exports2.TransactGetItem = exports2.KeysAndAttributes = exports2.ExecuteStatementOutput = exports2.PutRequest = exports2.ParameterizedStatement = exports2.ItemResponse = exports2.ItemCollectionMetrics = exports2.GetItemOutput = exports2.GetItemInput = exports2.Get = exports2.ExecuteStatementInput = exports2.DeleteRequest = exports2.Condition = exports2.CancellationReason = exports2.BatchStatementResponse = exports2.BatchStatementRequest = exports2.AttributeValueUpdate = exports2.AttributeValue = exports2.UpdateTimeToLiveOutput = exports2.UpdateTimeToLiveInput = exports2.TimeToLiveSpecification = exports2.UpdateTableReplicaAutoScalingOutput = exports2.UpdateTableReplicaAutoScalingInput = exports2.ReplicaAutoScalingUpdate = exports2.ReplicaGlobalSecondaryIndexAutoScalingUpdate = exports2.GlobalSecondaryIndexAutoScalingUpdate = exports2.UpdateTableOutput = exports2.UpdateTableInput = exports2.ReplicationGroupUpdate = exports2.UpdateReplicationGroupMemberAction = exports2.GlobalSecondaryIndexUpdate = exports2.UpdateGlobalSecondaryIndexAction = exports2.UpdateGlobalTableSettingsOutput = exports2.UpdateGlobalTableSettingsInput = exports2.ReplicaSettingsUpdate = exports2.ReplicaGlobalSecondaryIndexSettingsUpdate = exports2.GlobalTableGlobalSecondaryIndexSettingsUpdate = exports2.IndexNotFoundException = exports2.UpdateGlobalTableOutput = exports2.UpdateGlobalTableInput = exports2.ReplicaUpdate = exports2.ReplicaNotFoundException = exports2.ReplicaAlreadyExistsException = exports2.UpdateContributorInsightsOutput = exports2.UpdateContributorInsightsInput = void 0;
  exports2.TransactWriteItemsInput = exports2.TransactWriteItem = exports2.UpdateItemInput = exports2.BatchWriteItemOutput = exports2.QueryInput = exports2.PutItemInput = exports2.DeleteItemInput = exports2.BatchWriteItemInput = exports2.ScanInput = exports2.BatchGetItemOutput = exports2.WriteRequest = exports2.UpdateItemOutput = exports2.ScanOutput = exports2.QueryOutput = exports2.PutItemOutput = exports2.DeleteItemOutput = exports2.Update = exports2.Put = exports2.Delete = exports2.ConditionCheck = exports2.TransactWriteItemsOutput = exports2.TransactGetItemsInput = exports2.ExpectedAttributeValue = exports2.BatchGetItemInput = exports2.TransactionCanceledException = void 0;
  var ArchivalSummary;
  (function(ArchivalSummary2) {
    ArchivalSummary2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ArchivalSummary = exports2.ArchivalSummary || (exports2.ArchivalSummary = {}));
  var AttributeDefinition;
  (function(AttributeDefinition2) {
    AttributeDefinition2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(AttributeDefinition = exports2.AttributeDefinition || (exports2.AttributeDefinition = {}));
  var AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
  (function(AutoScalingTargetTrackingScalingPolicyConfigurationDescription2) {
    AutoScalingTargetTrackingScalingPolicyConfigurationDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(AutoScalingTargetTrackingScalingPolicyConfigurationDescription = exports2.AutoScalingTargetTrackingScalingPolicyConfigurationDescription || (exports2.AutoScalingTargetTrackingScalingPolicyConfigurationDescription = {}));
  var AutoScalingPolicyDescription;
  (function(AutoScalingPolicyDescription2) {
    AutoScalingPolicyDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(AutoScalingPolicyDescription = exports2.AutoScalingPolicyDescription || (exports2.AutoScalingPolicyDescription = {}));
  var AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
  (function(AutoScalingTargetTrackingScalingPolicyConfigurationUpdate2) {
    AutoScalingTargetTrackingScalingPolicyConfigurationUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = exports2.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate || (exports2.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = {}));
  var AutoScalingPolicyUpdate;
  (function(AutoScalingPolicyUpdate2) {
    AutoScalingPolicyUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(AutoScalingPolicyUpdate = exports2.AutoScalingPolicyUpdate || (exports2.AutoScalingPolicyUpdate = {}));
  var AutoScalingSettingsDescription;
  (function(AutoScalingSettingsDescription2) {
    AutoScalingSettingsDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(AutoScalingSettingsDescription = exports2.AutoScalingSettingsDescription || (exports2.AutoScalingSettingsDescription = {}));
  var AutoScalingSettingsUpdate;
  (function(AutoScalingSettingsUpdate2) {
    AutoScalingSettingsUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(AutoScalingSettingsUpdate = exports2.AutoScalingSettingsUpdate || (exports2.AutoScalingSettingsUpdate = {}));
  var BackupType;
  (function(BackupType2) {
    BackupType2["AWS_BACKUP"] = "AWS_BACKUP";
    BackupType2["SYSTEM"] = "SYSTEM";
    BackupType2["USER"] = "USER";
  })(BackupType = exports2.BackupType || (exports2.BackupType = {}));
  var BackupDetails;
  (function(BackupDetails2) {
    BackupDetails2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BackupDetails = exports2.BackupDetails || (exports2.BackupDetails = {}));
  var KeySchemaElement;
  (function(KeySchemaElement2) {
    KeySchemaElement2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(KeySchemaElement = exports2.KeySchemaElement || (exports2.KeySchemaElement = {}));
  var ProvisionedThroughput;
  (function(ProvisionedThroughput2) {
    ProvisionedThroughput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ProvisionedThroughput = exports2.ProvisionedThroughput || (exports2.ProvisionedThroughput = {}));
  var SourceTableDetails;
  (function(SourceTableDetails2) {
    SourceTableDetails2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(SourceTableDetails = exports2.SourceTableDetails || (exports2.SourceTableDetails = {}));
  var Projection;
  (function(Projection2) {
    Projection2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(Projection = exports2.Projection || (exports2.Projection = {}));
  var GlobalSecondaryIndexInfo;
  (function(GlobalSecondaryIndexInfo2) {
    GlobalSecondaryIndexInfo2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(GlobalSecondaryIndexInfo = exports2.GlobalSecondaryIndexInfo || (exports2.GlobalSecondaryIndexInfo = {}));
  var LocalSecondaryIndexInfo;
  (function(LocalSecondaryIndexInfo2) {
    LocalSecondaryIndexInfo2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(LocalSecondaryIndexInfo = exports2.LocalSecondaryIndexInfo || (exports2.LocalSecondaryIndexInfo = {}));
  var SSEDescription;
  (function(SSEDescription2) {
    SSEDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(SSEDescription = exports2.SSEDescription || (exports2.SSEDescription = {}));
  var StreamSpecification;
  (function(StreamSpecification2) {
    StreamSpecification2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(StreamSpecification = exports2.StreamSpecification || (exports2.StreamSpecification = {}));
  var TimeToLiveDescription;
  (function(TimeToLiveDescription2) {
    TimeToLiveDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TimeToLiveDescription = exports2.TimeToLiveDescription || (exports2.TimeToLiveDescription = {}));
  var SourceTableFeatureDetails;
  (function(SourceTableFeatureDetails2) {
    SourceTableFeatureDetails2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(SourceTableFeatureDetails = exports2.SourceTableFeatureDetails || (exports2.SourceTableFeatureDetails = {}));
  var BackupDescription;
  (function(BackupDescription2) {
    BackupDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BackupDescription = exports2.BackupDescription || (exports2.BackupDescription = {}));
  var BackupInUseException;
  (function(BackupInUseException2) {
    BackupInUseException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BackupInUseException = exports2.BackupInUseException || (exports2.BackupInUseException = {}));
  var BackupNotFoundException;
  (function(BackupNotFoundException2) {
    BackupNotFoundException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BackupNotFoundException = exports2.BackupNotFoundException || (exports2.BackupNotFoundException = {}));
  var BackupSummary;
  (function(BackupSummary2) {
    BackupSummary2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BackupSummary = exports2.BackupSummary || (exports2.BackupSummary = {}));
  var BackupTypeFilter;
  (function(BackupTypeFilter2) {
    BackupTypeFilter2["ALL"] = "ALL";
    BackupTypeFilter2["AWS_BACKUP"] = "AWS_BACKUP";
    BackupTypeFilter2["SYSTEM"] = "SYSTEM";
    BackupTypeFilter2["USER"] = "USER";
  })(BackupTypeFilter = exports2.BackupTypeFilter || (exports2.BackupTypeFilter = {}));
  var BatchStatementErrorCodeEnum;
  (function(BatchStatementErrorCodeEnum2) {
    BatchStatementErrorCodeEnum2["AccessDenied"] = "AccessDenied";
    BatchStatementErrorCodeEnum2["ConditionalCheckFailed"] = "ConditionalCheckFailed";
    BatchStatementErrorCodeEnum2["DuplicateItem"] = "DuplicateItem";
    BatchStatementErrorCodeEnum2["InternalServerError"] = "InternalServerError";
    BatchStatementErrorCodeEnum2["ItemCollectionSizeLimitExceeded"] = "ItemCollectionSizeLimitExceeded";
    BatchStatementErrorCodeEnum2["ProvisionedThroughputExceeded"] = "ProvisionedThroughputExceeded";
    BatchStatementErrorCodeEnum2["RequestLimitExceeded"] = "RequestLimitExceeded";
    BatchStatementErrorCodeEnum2["ResourceNotFound"] = "ResourceNotFound";
    BatchStatementErrorCodeEnum2["ThrottlingError"] = "ThrottlingError";
    BatchStatementErrorCodeEnum2["TransactionConflict"] = "TransactionConflict";
    BatchStatementErrorCodeEnum2["ValidationError"] = "ValidationError";
  })(BatchStatementErrorCodeEnum = exports2.BatchStatementErrorCodeEnum || (exports2.BatchStatementErrorCodeEnum = {}));
  var BatchStatementError;
  (function(BatchStatementError2) {
    BatchStatementError2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BatchStatementError = exports2.BatchStatementError || (exports2.BatchStatementError = {}));
  var InternalServerError;
  (function(InternalServerError2) {
    InternalServerError2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(InternalServerError = exports2.InternalServerError || (exports2.InternalServerError = {}));
  var RequestLimitExceeded;
  (function(RequestLimitExceeded2) {
    RequestLimitExceeded2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(RequestLimitExceeded = exports2.RequestLimitExceeded || (exports2.RequestLimitExceeded = {}));
  var Capacity;
  (function(Capacity2) {
    Capacity2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(Capacity = exports2.Capacity || (exports2.Capacity = {}));
  var ConsumedCapacity;
  (function(ConsumedCapacity2) {
    ConsumedCapacity2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ConsumedCapacity = exports2.ConsumedCapacity || (exports2.ConsumedCapacity = {}));
  var InvalidEndpointException;
  (function(InvalidEndpointException2) {
    InvalidEndpointException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(InvalidEndpointException = exports2.InvalidEndpointException || (exports2.InvalidEndpointException = {}));
  var ProvisionedThroughputExceededException;
  (function(ProvisionedThroughputExceededException2) {
    ProvisionedThroughputExceededException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ProvisionedThroughputExceededException = exports2.ProvisionedThroughputExceededException || (exports2.ProvisionedThroughputExceededException = {}));
  var ResourceNotFoundException;
  (function(ResourceNotFoundException2) {
    ResourceNotFoundException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ResourceNotFoundException = exports2.ResourceNotFoundException || (exports2.ResourceNotFoundException = {}));
  var ItemCollectionSizeLimitExceededException;
  (function(ItemCollectionSizeLimitExceededException2) {
    ItemCollectionSizeLimitExceededException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ItemCollectionSizeLimitExceededException = exports2.ItemCollectionSizeLimitExceededException || (exports2.ItemCollectionSizeLimitExceededException = {}));
  var BillingModeSummary;
  (function(BillingModeSummary2) {
    BillingModeSummary2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BillingModeSummary = exports2.BillingModeSummary || (exports2.BillingModeSummary = {}));
  var ConditionalCheckFailedException;
  (function(ConditionalCheckFailedException2) {
    ConditionalCheckFailedException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ConditionalCheckFailedException = exports2.ConditionalCheckFailedException || (exports2.ConditionalCheckFailedException = {}));
  var PointInTimeRecoveryDescription;
  (function(PointInTimeRecoveryDescription2) {
    PointInTimeRecoveryDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(PointInTimeRecoveryDescription = exports2.PointInTimeRecoveryDescription || (exports2.PointInTimeRecoveryDescription = {}));
  var ContinuousBackupsDescription;
  (function(ContinuousBackupsDescription2) {
    ContinuousBackupsDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ContinuousBackupsDescription = exports2.ContinuousBackupsDescription || (exports2.ContinuousBackupsDescription = {}));
  var ContinuousBackupsUnavailableException;
  (function(ContinuousBackupsUnavailableException2) {
    ContinuousBackupsUnavailableException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ContinuousBackupsUnavailableException = exports2.ContinuousBackupsUnavailableException || (exports2.ContinuousBackupsUnavailableException = {}));
  var ContributorInsightsSummary;
  (function(ContributorInsightsSummary2) {
    ContributorInsightsSummary2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ContributorInsightsSummary = exports2.ContributorInsightsSummary || (exports2.ContributorInsightsSummary = {}));
  var CreateBackupInput;
  (function(CreateBackupInput2) {
    CreateBackupInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(CreateBackupInput = exports2.CreateBackupInput || (exports2.CreateBackupInput = {}));
  var CreateBackupOutput;
  (function(CreateBackupOutput2) {
    CreateBackupOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(CreateBackupOutput = exports2.CreateBackupOutput || (exports2.CreateBackupOutput = {}));
  var LimitExceededException;
  (function(LimitExceededException2) {
    LimitExceededException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(LimitExceededException = exports2.LimitExceededException || (exports2.LimitExceededException = {}));
  var TableInUseException;
  (function(TableInUseException2) {
    TableInUseException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TableInUseException = exports2.TableInUseException || (exports2.TableInUseException = {}));
  var TableNotFoundException;
  (function(TableNotFoundException2) {
    TableNotFoundException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TableNotFoundException = exports2.TableNotFoundException || (exports2.TableNotFoundException = {}));
  var CreateGlobalSecondaryIndexAction;
  (function(CreateGlobalSecondaryIndexAction2) {
    CreateGlobalSecondaryIndexAction2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(CreateGlobalSecondaryIndexAction = exports2.CreateGlobalSecondaryIndexAction || (exports2.CreateGlobalSecondaryIndexAction = {}));
  var Replica;
  (function(Replica2) {
    Replica2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(Replica = exports2.Replica || (exports2.Replica = {}));
  var CreateGlobalTableInput;
  (function(CreateGlobalTableInput2) {
    CreateGlobalTableInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(CreateGlobalTableInput = exports2.CreateGlobalTableInput || (exports2.CreateGlobalTableInput = {}));
  var ProvisionedThroughputOverride;
  (function(ProvisionedThroughputOverride2) {
    ProvisionedThroughputOverride2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ProvisionedThroughputOverride = exports2.ProvisionedThroughputOverride || (exports2.ProvisionedThroughputOverride = {}));
  var ReplicaGlobalSecondaryIndexDescription;
  (function(ReplicaGlobalSecondaryIndexDescription2) {
    ReplicaGlobalSecondaryIndexDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaGlobalSecondaryIndexDescription = exports2.ReplicaGlobalSecondaryIndexDescription || (exports2.ReplicaGlobalSecondaryIndexDescription = {}));
  var ReplicaDescription;
  (function(ReplicaDescription2) {
    ReplicaDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaDescription = exports2.ReplicaDescription || (exports2.ReplicaDescription = {}));
  var GlobalTableDescription;
  (function(GlobalTableDescription2) {
    GlobalTableDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(GlobalTableDescription = exports2.GlobalTableDescription || (exports2.GlobalTableDescription = {}));
  var CreateGlobalTableOutput;
  (function(CreateGlobalTableOutput2) {
    CreateGlobalTableOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(CreateGlobalTableOutput = exports2.CreateGlobalTableOutput || (exports2.CreateGlobalTableOutput = {}));
  var GlobalTableAlreadyExistsException;
  (function(GlobalTableAlreadyExistsException2) {
    GlobalTableAlreadyExistsException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(GlobalTableAlreadyExistsException = exports2.GlobalTableAlreadyExistsException || (exports2.GlobalTableAlreadyExistsException = {}));
  var CreateReplicaAction;
  (function(CreateReplicaAction2) {
    CreateReplicaAction2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(CreateReplicaAction = exports2.CreateReplicaAction || (exports2.CreateReplicaAction = {}));
  var ReplicaGlobalSecondaryIndex;
  (function(ReplicaGlobalSecondaryIndex2) {
    ReplicaGlobalSecondaryIndex2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaGlobalSecondaryIndex = exports2.ReplicaGlobalSecondaryIndex || (exports2.ReplicaGlobalSecondaryIndex = {}));
  var CreateReplicationGroupMemberAction;
  (function(CreateReplicationGroupMemberAction2) {
    CreateReplicationGroupMemberAction2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(CreateReplicationGroupMemberAction = exports2.CreateReplicationGroupMemberAction || (exports2.CreateReplicationGroupMemberAction = {}));
  var GlobalSecondaryIndex;
  (function(GlobalSecondaryIndex2) {
    GlobalSecondaryIndex2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(GlobalSecondaryIndex = exports2.GlobalSecondaryIndex || (exports2.GlobalSecondaryIndex = {}));
  var LocalSecondaryIndex;
  (function(LocalSecondaryIndex2) {
    LocalSecondaryIndex2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(LocalSecondaryIndex = exports2.LocalSecondaryIndex || (exports2.LocalSecondaryIndex = {}));
  var SSESpecification;
  (function(SSESpecification2) {
    SSESpecification2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(SSESpecification = exports2.SSESpecification || (exports2.SSESpecification = {}));
  var Tag;
  (function(Tag2) {
    Tag2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(Tag = exports2.Tag || (exports2.Tag = {}));
  var CreateTableInput;
  (function(CreateTableInput2) {
    CreateTableInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(CreateTableInput = exports2.CreateTableInput || (exports2.CreateTableInput = {}));
  var ProvisionedThroughputDescription;
  (function(ProvisionedThroughputDescription2) {
    ProvisionedThroughputDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ProvisionedThroughputDescription = exports2.ProvisionedThroughputDescription || (exports2.ProvisionedThroughputDescription = {}));
  var GlobalSecondaryIndexDescription;
  (function(GlobalSecondaryIndexDescription2) {
    GlobalSecondaryIndexDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(GlobalSecondaryIndexDescription = exports2.GlobalSecondaryIndexDescription || (exports2.GlobalSecondaryIndexDescription = {}));
  var LocalSecondaryIndexDescription;
  (function(LocalSecondaryIndexDescription2) {
    LocalSecondaryIndexDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(LocalSecondaryIndexDescription = exports2.LocalSecondaryIndexDescription || (exports2.LocalSecondaryIndexDescription = {}));
  var RestoreSummary;
  (function(RestoreSummary2) {
    RestoreSummary2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(RestoreSummary = exports2.RestoreSummary || (exports2.RestoreSummary = {}));
  var TableDescription;
  (function(TableDescription2) {
    TableDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TableDescription = exports2.TableDescription || (exports2.TableDescription = {}));
  var CreateTableOutput;
  (function(CreateTableOutput2) {
    CreateTableOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(CreateTableOutput = exports2.CreateTableOutput || (exports2.CreateTableOutput = {}));
  var ResourceInUseException;
  (function(ResourceInUseException2) {
    ResourceInUseException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ResourceInUseException = exports2.ResourceInUseException || (exports2.ResourceInUseException = {}));
  var DeleteBackupInput;
  (function(DeleteBackupInput2) {
    DeleteBackupInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DeleteBackupInput = exports2.DeleteBackupInput || (exports2.DeleteBackupInput = {}));
  var DeleteBackupOutput;
  (function(DeleteBackupOutput2) {
    DeleteBackupOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DeleteBackupOutput = exports2.DeleteBackupOutput || (exports2.DeleteBackupOutput = {}));
  var DeleteGlobalSecondaryIndexAction;
  (function(DeleteGlobalSecondaryIndexAction2) {
    DeleteGlobalSecondaryIndexAction2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DeleteGlobalSecondaryIndexAction = exports2.DeleteGlobalSecondaryIndexAction || (exports2.DeleteGlobalSecondaryIndexAction = {}));
  var TransactionConflictException;
  (function(TransactionConflictException2) {
    TransactionConflictException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TransactionConflictException = exports2.TransactionConflictException || (exports2.TransactionConflictException = {}));
  var DeleteReplicaAction;
  (function(DeleteReplicaAction2) {
    DeleteReplicaAction2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DeleteReplicaAction = exports2.DeleteReplicaAction || (exports2.DeleteReplicaAction = {}));
  var DeleteReplicationGroupMemberAction;
  (function(DeleteReplicationGroupMemberAction2) {
    DeleteReplicationGroupMemberAction2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DeleteReplicationGroupMemberAction = exports2.DeleteReplicationGroupMemberAction || (exports2.DeleteReplicationGroupMemberAction = {}));
  var DeleteTableInput;
  (function(DeleteTableInput2) {
    DeleteTableInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DeleteTableInput = exports2.DeleteTableInput || (exports2.DeleteTableInput = {}));
  var DeleteTableOutput;
  (function(DeleteTableOutput2) {
    DeleteTableOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DeleteTableOutput = exports2.DeleteTableOutput || (exports2.DeleteTableOutput = {}));
  var DescribeBackupInput;
  (function(DescribeBackupInput2) {
    DescribeBackupInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeBackupInput = exports2.DescribeBackupInput || (exports2.DescribeBackupInput = {}));
  var DescribeBackupOutput;
  (function(DescribeBackupOutput2) {
    DescribeBackupOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeBackupOutput = exports2.DescribeBackupOutput || (exports2.DescribeBackupOutput = {}));
  var DescribeContinuousBackupsInput;
  (function(DescribeContinuousBackupsInput2) {
    DescribeContinuousBackupsInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeContinuousBackupsInput = exports2.DescribeContinuousBackupsInput || (exports2.DescribeContinuousBackupsInput = {}));
  var DescribeContinuousBackupsOutput;
  (function(DescribeContinuousBackupsOutput2) {
    DescribeContinuousBackupsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeContinuousBackupsOutput = exports2.DescribeContinuousBackupsOutput || (exports2.DescribeContinuousBackupsOutput = {}));
  var DescribeContributorInsightsInput;
  (function(DescribeContributorInsightsInput2) {
    DescribeContributorInsightsInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeContributorInsightsInput = exports2.DescribeContributorInsightsInput || (exports2.DescribeContributorInsightsInput = {}));
  var FailureException;
  (function(FailureException2) {
    FailureException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(FailureException = exports2.FailureException || (exports2.FailureException = {}));
  var DescribeContributorInsightsOutput;
  (function(DescribeContributorInsightsOutput2) {
    DescribeContributorInsightsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeContributorInsightsOutput = exports2.DescribeContributorInsightsOutput || (exports2.DescribeContributorInsightsOutput = {}));
  var DescribeEndpointsRequest;
  (function(DescribeEndpointsRequest2) {
    DescribeEndpointsRequest2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeEndpointsRequest = exports2.DescribeEndpointsRequest || (exports2.DescribeEndpointsRequest = {}));
  var Endpoint;
  (function(Endpoint2) {
    Endpoint2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(Endpoint = exports2.Endpoint || (exports2.Endpoint = {}));
  var DescribeEndpointsResponse;
  (function(DescribeEndpointsResponse2) {
    DescribeEndpointsResponse2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeEndpointsResponse = exports2.DescribeEndpointsResponse || (exports2.DescribeEndpointsResponse = {}));
  var DescribeExportInput;
  (function(DescribeExportInput2) {
    DescribeExportInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeExportInput = exports2.DescribeExportInput || (exports2.DescribeExportInput = {}));
  var ExportFormat;
  (function(ExportFormat2) {
    ExportFormat2["DYNAMODB_JSON"] = "DYNAMODB_JSON";
    ExportFormat2["ION"] = "ION";
  })(ExportFormat = exports2.ExportFormat || (exports2.ExportFormat = {}));
  var ExportStatus;
  (function(ExportStatus2) {
    ExportStatus2["COMPLETED"] = "COMPLETED";
    ExportStatus2["FAILED"] = "FAILED";
    ExportStatus2["IN_PROGRESS"] = "IN_PROGRESS";
  })(ExportStatus = exports2.ExportStatus || (exports2.ExportStatus = {}));
  var ExportDescription;
  (function(ExportDescription2) {
    ExportDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ExportDescription = exports2.ExportDescription || (exports2.ExportDescription = {}));
  var DescribeExportOutput;
  (function(DescribeExportOutput2) {
    DescribeExportOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeExportOutput = exports2.DescribeExportOutput || (exports2.DescribeExportOutput = {}));
  var ExportNotFoundException;
  (function(ExportNotFoundException2) {
    ExportNotFoundException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ExportNotFoundException = exports2.ExportNotFoundException || (exports2.ExportNotFoundException = {}));
  var DescribeGlobalTableInput;
  (function(DescribeGlobalTableInput2) {
    DescribeGlobalTableInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeGlobalTableInput = exports2.DescribeGlobalTableInput || (exports2.DescribeGlobalTableInput = {}));
  var DescribeGlobalTableOutput;
  (function(DescribeGlobalTableOutput2) {
    DescribeGlobalTableOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeGlobalTableOutput = exports2.DescribeGlobalTableOutput || (exports2.DescribeGlobalTableOutput = {}));
  var GlobalTableNotFoundException;
  (function(GlobalTableNotFoundException2) {
    GlobalTableNotFoundException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(GlobalTableNotFoundException = exports2.GlobalTableNotFoundException || (exports2.GlobalTableNotFoundException = {}));
  var DescribeGlobalTableSettingsInput;
  (function(DescribeGlobalTableSettingsInput2) {
    DescribeGlobalTableSettingsInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeGlobalTableSettingsInput = exports2.DescribeGlobalTableSettingsInput || (exports2.DescribeGlobalTableSettingsInput = {}));
  var ReplicaGlobalSecondaryIndexSettingsDescription;
  (function(ReplicaGlobalSecondaryIndexSettingsDescription2) {
    ReplicaGlobalSecondaryIndexSettingsDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaGlobalSecondaryIndexSettingsDescription = exports2.ReplicaGlobalSecondaryIndexSettingsDescription || (exports2.ReplicaGlobalSecondaryIndexSettingsDescription = {}));
  var ReplicaSettingsDescription;
  (function(ReplicaSettingsDescription2) {
    ReplicaSettingsDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaSettingsDescription = exports2.ReplicaSettingsDescription || (exports2.ReplicaSettingsDescription = {}));
  var DescribeGlobalTableSettingsOutput;
  (function(DescribeGlobalTableSettingsOutput2) {
    DescribeGlobalTableSettingsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeGlobalTableSettingsOutput = exports2.DescribeGlobalTableSettingsOutput || (exports2.DescribeGlobalTableSettingsOutput = {}));
  var DescribeKinesisStreamingDestinationInput;
  (function(DescribeKinesisStreamingDestinationInput2) {
    DescribeKinesisStreamingDestinationInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeKinesisStreamingDestinationInput = exports2.DescribeKinesisStreamingDestinationInput || (exports2.DescribeKinesisStreamingDestinationInput = {}));
  var KinesisDataStreamDestination;
  (function(KinesisDataStreamDestination2) {
    KinesisDataStreamDestination2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(KinesisDataStreamDestination = exports2.KinesisDataStreamDestination || (exports2.KinesisDataStreamDestination = {}));
  var DescribeKinesisStreamingDestinationOutput;
  (function(DescribeKinesisStreamingDestinationOutput2) {
    DescribeKinesisStreamingDestinationOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeKinesisStreamingDestinationOutput = exports2.DescribeKinesisStreamingDestinationOutput || (exports2.DescribeKinesisStreamingDestinationOutput = {}));
  var DescribeLimitsInput;
  (function(DescribeLimitsInput2) {
    DescribeLimitsInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeLimitsInput = exports2.DescribeLimitsInput || (exports2.DescribeLimitsInput = {}));
  var DescribeLimitsOutput;
  (function(DescribeLimitsOutput2) {
    DescribeLimitsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeLimitsOutput = exports2.DescribeLimitsOutput || (exports2.DescribeLimitsOutput = {}));
  var DescribeTableInput;
  (function(DescribeTableInput2) {
    DescribeTableInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeTableInput = exports2.DescribeTableInput || (exports2.DescribeTableInput = {}));
  var DescribeTableOutput;
  (function(DescribeTableOutput2) {
    DescribeTableOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeTableOutput = exports2.DescribeTableOutput || (exports2.DescribeTableOutput = {}));
  var DescribeTableReplicaAutoScalingInput;
  (function(DescribeTableReplicaAutoScalingInput2) {
    DescribeTableReplicaAutoScalingInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeTableReplicaAutoScalingInput = exports2.DescribeTableReplicaAutoScalingInput || (exports2.DescribeTableReplicaAutoScalingInput = {}));
  var ReplicaGlobalSecondaryIndexAutoScalingDescription;
  (function(ReplicaGlobalSecondaryIndexAutoScalingDescription2) {
    ReplicaGlobalSecondaryIndexAutoScalingDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaGlobalSecondaryIndexAutoScalingDescription = exports2.ReplicaGlobalSecondaryIndexAutoScalingDescription || (exports2.ReplicaGlobalSecondaryIndexAutoScalingDescription = {}));
  var ReplicaAutoScalingDescription;
  (function(ReplicaAutoScalingDescription2) {
    ReplicaAutoScalingDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaAutoScalingDescription = exports2.ReplicaAutoScalingDescription || (exports2.ReplicaAutoScalingDescription = {}));
  var TableAutoScalingDescription;
  (function(TableAutoScalingDescription2) {
    TableAutoScalingDescription2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TableAutoScalingDescription = exports2.TableAutoScalingDescription || (exports2.TableAutoScalingDescription = {}));
  var DescribeTableReplicaAutoScalingOutput;
  (function(DescribeTableReplicaAutoScalingOutput2) {
    DescribeTableReplicaAutoScalingOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeTableReplicaAutoScalingOutput = exports2.DescribeTableReplicaAutoScalingOutput || (exports2.DescribeTableReplicaAutoScalingOutput = {}));
  var DescribeTimeToLiveInput;
  (function(DescribeTimeToLiveInput2) {
    DescribeTimeToLiveInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeTimeToLiveInput = exports2.DescribeTimeToLiveInput || (exports2.DescribeTimeToLiveInput = {}));
  var DescribeTimeToLiveOutput;
  (function(DescribeTimeToLiveOutput2) {
    DescribeTimeToLiveOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DescribeTimeToLiveOutput = exports2.DescribeTimeToLiveOutput || (exports2.DescribeTimeToLiveOutput = {}));
  var KinesisStreamingDestinationInput;
  (function(KinesisStreamingDestinationInput2) {
    KinesisStreamingDestinationInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(KinesisStreamingDestinationInput = exports2.KinesisStreamingDestinationInput || (exports2.KinesisStreamingDestinationInput = {}));
  var KinesisStreamingDestinationOutput;
  (function(KinesisStreamingDestinationOutput2) {
    KinesisStreamingDestinationOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(KinesisStreamingDestinationOutput = exports2.KinesisStreamingDestinationOutput || (exports2.KinesisStreamingDestinationOutput = {}));
  var DuplicateItemException;
  (function(DuplicateItemException2) {
    DuplicateItemException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(DuplicateItemException = exports2.DuplicateItemException || (exports2.DuplicateItemException = {}));
  var IdempotentParameterMismatchException;
  (function(IdempotentParameterMismatchException2) {
    IdempotentParameterMismatchException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(IdempotentParameterMismatchException = exports2.IdempotentParameterMismatchException || (exports2.IdempotentParameterMismatchException = {}));
  var TransactionInProgressException;
  (function(TransactionInProgressException2) {
    TransactionInProgressException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TransactionInProgressException = exports2.TransactionInProgressException || (exports2.TransactionInProgressException = {}));
  var ExportConflictException;
  (function(ExportConflictException2) {
    ExportConflictException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ExportConflictException = exports2.ExportConflictException || (exports2.ExportConflictException = {}));
  var ExportTableToPointInTimeInput;
  (function(ExportTableToPointInTimeInput2) {
    ExportTableToPointInTimeInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ExportTableToPointInTimeInput = exports2.ExportTableToPointInTimeInput || (exports2.ExportTableToPointInTimeInput = {}));
  var ExportTableToPointInTimeOutput;
  (function(ExportTableToPointInTimeOutput2) {
    ExportTableToPointInTimeOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ExportTableToPointInTimeOutput = exports2.ExportTableToPointInTimeOutput || (exports2.ExportTableToPointInTimeOutput = {}));
  var InvalidExportTimeException;
  (function(InvalidExportTimeException2) {
    InvalidExportTimeException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(InvalidExportTimeException = exports2.InvalidExportTimeException || (exports2.InvalidExportTimeException = {}));
  var PointInTimeRecoveryUnavailableException;
  (function(PointInTimeRecoveryUnavailableException2) {
    PointInTimeRecoveryUnavailableException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(PointInTimeRecoveryUnavailableException = exports2.PointInTimeRecoveryUnavailableException || (exports2.PointInTimeRecoveryUnavailableException = {}));
  var ListBackupsInput;
  (function(ListBackupsInput2) {
    ListBackupsInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListBackupsInput = exports2.ListBackupsInput || (exports2.ListBackupsInput = {}));
  var ListBackupsOutput;
  (function(ListBackupsOutput2) {
    ListBackupsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListBackupsOutput = exports2.ListBackupsOutput || (exports2.ListBackupsOutput = {}));
  var ListContributorInsightsInput;
  (function(ListContributorInsightsInput2) {
    ListContributorInsightsInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListContributorInsightsInput = exports2.ListContributorInsightsInput || (exports2.ListContributorInsightsInput = {}));
  var ListContributorInsightsOutput;
  (function(ListContributorInsightsOutput2) {
    ListContributorInsightsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListContributorInsightsOutput = exports2.ListContributorInsightsOutput || (exports2.ListContributorInsightsOutput = {}));
  var ListExportsInput;
  (function(ListExportsInput2) {
    ListExportsInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListExportsInput = exports2.ListExportsInput || (exports2.ListExportsInput = {}));
  var ExportSummary;
  (function(ExportSummary2) {
    ExportSummary2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ExportSummary = exports2.ExportSummary || (exports2.ExportSummary = {}));
  var ListExportsOutput;
  (function(ListExportsOutput2) {
    ListExportsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListExportsOutput = exports2.ListExportsOutput || (exports2.ListExportsOutput = {}));
  var ListGlobalTablesInput;
  (function(ListGlobalTablesInput2) {
    ListGlobalTablesInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListGlobalTablesInput = exports2.ListGlobalTablesInput || (exports2.ListGlobalTablesInput = {}));
  var GlobalTable;
  (function(GlobalTable2) {
    GlobalTable2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(GlobalTable = exports2.GlobalTable || (exports2.GlobalTable = {}));
  var ListGlobalTablesOutput;
  (function(ListGlobalTablesOutput2) {
    ListGlobalTablesOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListGlobalTablesOutput = exports2.ListGlobalTablesOutput || (exports2.ListGlobalTablesOutput = {}));
  var ListTablesInput;
  (function(ListTablesInput2) {
    ListTablesInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListTablesInput = exports2.ListTablesInput || (exports2.ListTablesInput = {}));
  var ListTablesOutput;
  (function(ListTablesOutput2) {
    ListTablesOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListTablesOutput = exports2.ListTablesOutput || (exports2.ListTablesOutput = {}));
  var ListTagsOfResourceInput;
  (function(ListTagsOfResourceInput2) {
    ListTagsOfResourceInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListTagsOfResourceInput = exports2.ListTagsOfResourceInput || (exports2.ListTagsOfResourceInput = {}));
  var ListTagsOfResourceOutput;
  (function(ListTagsOfResourceOutput2) {
    ListTagsOfResourceOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ListTagsOfResourceOutput = exports2.ListTagsOfResourceOutput || (exports2.ListTagsOfResourceOutput = {}));
  var RestoreTableFromBackupInput;
  (function(RestoreTableFromBackupInput2) {
    RestoreTableFromBackupInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(RestoreTableFromBackupInput = exports2.RestoreTableFromBackupInput || (exports2.RestoreTableFromBackupInput = {}));
  var RestoreTableFromBackupOutput;
  (function(RestoreTableFromBackupOutput2) {
    RestoreTableFromBackupOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(RestoreTableFromBackupOutput = exports2.RestoreTableFromBackupOutput || (exports2.RestoreTableFromBackupOutput = {}));
  var TableAlreadyExistsException;
  (function(TableAlreadyExistsException2) {
    TableAlreadyExistsException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TableAlreadyExistsException = exports2.TableAlreadyExistsException || (exports2.TableAlreadyExistsException = {}));
  var InvalidRestoreTimeException;
  (function(InvalidRestoreTimeException2) {
    InvalidRestoreTimeException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(InvalidRestoreTimeException = exports2.InvalidRestoreTimeException || (exports2.InvalidRestoreTimeException = {}));
  var RestoreTableToPointInTimeInput;
  (function(RestoreTableToPointInTimeInput2) {
    RestoreTableToPointInTimeInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(RestoreTableToPointInTimeInput = exports2.RestoreTableToPointInTimeInput || (exports2.RestoreTableToPointInTimeInput = {}));
  var RestoreTableToPointInTimeOutput;
  (function(RestoreTableToPointInTimeOutput2) {
    RestoreTableToPointInTimeOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(RestoreTableToPointInTimeOutput = exports2.RestoreTableToPointInTimeOutput || (exports2.RestoreTableToPointInTimeOutput = {}));
  var TagResourceInput;
  (function(TagResourceInput2) {
    TagResourceInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TagResourceInput = exports2.TagResourceInput || (exports2.TagResourceInput = {}));
  var UntagResourceInput;
  (function(UntagResourceInput2) {
    UntagResourceInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UntagResourceInput = exports2.UntagResourceInput || (exports2.UntagResourceInput = {}));
  var PointInTimeRecoverySpecification;
  (function(PointInTimeRecoverySpecification2) {
    PointInTimeRecoverySpecification2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(PointInTimeRecoverySpecification = exports2.PointInTimeRecoverySpecification || (exports2.PointInTimeRecoverySpecification = {}));
  var UpdateContinuousBackupsInput;
  (function(UpdateContinuousBackupsInput2) {
    UpdateContinuousBackupsInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateContinuousBackupsInput = exports2.UpdateContinuousBackupsInput || (exports2.UpdateContinuousBackupsInput = {}));
  var UpdateContinuousBackupsOutput;
  (function(UpdateContinuousBackupsOutput2) {
    UpdateContinuousBackupsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateContinuousBackupsOutput = exports2.UpdateContinuousBackupsOutput || (exports2.UpdateContinuousBackupsOutput = {}));
  var UpdateContributorInsightsInput;
  (function(UpdateContributorInsightsInput2) {
    UpdateContributorInsightsInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateContributorInsightsInput = exports2.UpdateContributorInsightsInput || (exports2.UpdateContributorInsightsInput = {}));
  var UpdateContributorInsightsOutput;
  (function(UpdateContributorInsightsOutput2) {
    UpdateContributorInsightsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateContributorInsightsOutput = exports2.UpdateContributorInsightsOutput || (exports2.UpdateContributorInsightsOutput = {}));
  var ReplicaAlreadyExistsException;
  (function(ReplicaAlreadyExistsException2) {
    ReplicaAlreadyExistsException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaAlreadyExistsException = exports2.ReplicaAlreadyExistsException || (exports2.ReplicaAlreadyExistsException = {}));
  var ReplicaNotFoundException;
  (function(ReplicaNotFoundException2) {
    ReplicaNotFoundException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaNotFoundException = exports2.ReplicaNotFoundException || (exports2.ReplicaNotFoundException = {}));
  var ReplicaUpdate;
  (function(ReplicaUpdate2) {
    ReplicaUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaUpdate = exports2.ReplicaUpdate || (exports2.ReplicaUpdate = {}));
  var UpdateGlobalTableInput;
  (function(UpdateGlobalTableInput2) {
    UpdateGlobalTableInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateGlobalTableInput = exports2.UpdateGlobalTableInput || (exports2.UpdateGlobalTableInput = {}));
  var UpdateGlobalTableOutput;
  (function(UpdateGlobalTableOutput2) {
    UpdateGlobalTableOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateGlobalTableOutput = exports2.UpdateGlobalTableOutput || (exports2.UpdateGlobalTableOutput = {}));
  var IndexNotFoundException;
  (function(IndexNotFoundException2) {
    IndexNotFoundException2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(IndexNotFoundException = exports2.IndexNotFoundException || (exports2.IndexNotFoundException = {}));
  var GlobalTableGlobalSecondaryIndexSettingsUpdate;
  (function(GlobalTableGlobalSecondaryIndexSettingsUpdate2) {
    GlobalTableGlobalSecondaryIndexSettingsUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(GlobalTableGlobalSecondaryIndexSettingsUpdate = exports2.GlobalTableGlobalSecondaryIndexSettingsUpdate || (exports2.GlobalTableGlobalSecondaryIndexSettingsUpdate = {}));
  var ReplicaGlobalSecondaryIndexSettingsUpdate;
  (function(ReplicaGlobalSecondaryIndexSettingsUpdate2) {
    ReplicaGlobalSecondaryIndexSettingsUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaGlobalSecondaryIndexSettingsUpdate = exports2.ReplicaGlobalSecondaryIndexSettingsUpdate || (exports2.ReplicaGlobalSecondaryIndexSettingsUpdate = {}));
  var ReplicaSettingsUpdate;
  (function(ReplicaSettingsUpdate2) {
    ReplicaSettingsUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaSettingsUpdate = exports2.ReplicaSettingsUpdate || (exports2.ReplicaSettingsUpdate = {}));
  var UpdateGlobalTableSettingsInput;
  (function(UpdateGlobalTableSettingsInput2) {
    UpdateGlobalTableSettingsInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateGlobalTableSettingsInput = exports2.UpdateGlobalTableSettingsInput || (exports2.UpdateGlobalTableSettingsInput = {}));
  var UpdateGlobalTableSettingsOutput;
  (function(UpdateGlobalTableSettingsOutput2) {
    UpdateGlobalTableSettingsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateGlobalTableSettingsOutput = exports2.UpdateGlobalTableSettingsOutput || (exports2.UpdateGlobalTableSettingsOutput = {}));
  var UpdateGlobalSecondaryIndexAction;
  (function(UpdateGlobalSecondaryIndexAction2) {
    UpdateGlobalSecondaryIndexAction2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateGlobalSecondaryIndexAction = exports2.UpdateGlobalSecondaryIndexAction || (exports2.UpdateGlobalSecondaryIndexAction = {}));
  var GlobalSecondaryIndexUpdate;
  (function(GlobalSecondaryIndexUpdate2) {
    GlobalSecondaryIndexUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(GlobalSecondaryIndexUpdate = exports2.GlobalSecondaryIndexUpdate || (exports2.GlobalSecondaryIndexUpdate = {}));
  var UpdateReplicationGroupMemberAction;
  (function(UpdateReplicationGroupMemberAction2) {
    UpdateReplicationGroupMemberAction2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateReplicationGroupMemberAction = exports2.UpdateReplicationGroupMemberAction || (exports2.UpdateReplicationGroupMemberAction = {}));
  var ReplicationGroupUpdate;
  (function(ReplicationGroupUpdate2) {
    ReplicationGroupUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicationGroupUpdate = exports2.ReplicationGroupUpdate || (exports2.ReplicationGroupUpdate = {}));
  var UpdateTableInput;
  (function(UpdateTableInput2) {
    UpdateTableInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateTableInput = exports2.UpdateTableInput || (exports2.UpdateTableInput = {}));
  var UpdateTableOutput;
  (function(UpdateTableOutput2) {
    UpdateTableOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateTableOutput = exports2.UpdateTableOutput || (exports2.UpdateTableOutput = {}));
  var GlobalSecondaryIndexAutoScalingUpdate;
  (function(GlobalSecondaryIndexAutoScalingUpdate2) {
    GlobalSecondaryIndexAutoScalingUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(GlobalSecondaryIndexAutoScalingUpdate = exports2.GlobalSecondaryIndexAutoScalingUpdate || (exports2.GlobalSecondaryIndexAutoScalingUpdate = {}));
  var ReplicaGlobalSecondaryIndexAutoScalingUpdate;
  (function(ReplicaGlobalSecondaryIndexAutoScalingUpdate2) {
    ReplicaGlobalSecondaryIndexAutoScalingUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaGlobalSecondaryIndexAutoScalingUpdate = exports2.ReplicaGlobalSecondaryIndexAutoScalingUpdate || (exports2.ReplicaGlobalSecondaryIndexAutoScalingUpdate = {}));
  var ReplicaAutoScalingUpdate;
  (function(ReplicaAutoScalingUpdate2) {
    ReplicaAutoScalingUpdate2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ReplicaAutoScalingUpdate = exports2.ReplicaAutoScalingUpdate || (exports2.ReplicaAutoScalingUpdate = {}));
  var UpdateTableReplicaAutoScalingInput;
  (function(UpdateTableReplicaAutoScalingInput2) {
    UpdateTableReplicaAutoScalingInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateTableReplicaAutoScalingInput = exports2.UpdateTableReplicaAutoScalingInput || (exports2.UpdateTableReplicaAutoScalingInput = {}));
  var UpdateTableReplicaAutoScalingOutput;
  (function(UpdateTableReplicaAutoScalingOutput2) {
    UpdateTableReplicaAutoScalingOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateTableReplicaAutoScalingOutput = exports2.UpdateTableReplicaAutoScalingOutput || (exports2.UpdateTableReplicaAutoScalingOutput = {}));
  var TimeToLiveSpecification;
  (function(TimeToLiveSpecification2) {
    TimeToLiveSpecification2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TimeToLiveSpecification = exports2.TimeToLiveSpecification || (exports2.TimeToLiveSpecification = {}));
  var UpdateTimeToLiveInput;
  (function(UpdateTimeToLiveInput2) {
    UpdateTimeToLiveInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateTimeToLiveInput = exports2.UpdateTimeToLiveInput || (exports2.UpdateTimeToLiveInput = {}));
  var UpdateTimeToLiveOutput;
  (function(UpdateTimeToLiveOutput2) {
    UpdateTimeToLiveOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(UpdateTimeToLiveOutput = exports2.UpdateTimeToLiveOutput || (exports2.UpdateTimeToLiveOutput = {}));
  var AttributeValue;
  (function(AttributeValue2) {
    AttributeValue2.visit = (value, visitor) => {
      if (value.S !== void 0)
        return visitor.S(value.S);
      if (value.N !== void 0)
        return visitor.N(value.N);
      if (value.B !== void 0)
        return visitor.B(value.B);
      if (value.SS !== void 0)
        return visitor.SS(value.SS);
      if (value.NS !== void 0)
        return visitor.NS(value.NS);
      if (value.BS !== void 0)
        return visitor.BS(value.BS);
      if (value.M !== void 0)
        return visitor.M(value.M);
      if (value.L !== void 0)
        return visitor.L(value.L);
      if (value.NULL !== void 0)
        return visitor.NULL(value.NULL);
      if (value.BOOL !== void 0)
        return visitor.BOOL(value.BOOL);
      return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    AttributeValue2.filterSensitiveLog = (obj) => {
      if (obj.S !== void 0)
        return {S: obj.S};
      if (obj.N !== void 0)
        return {N: obj.N};
      if (obj.B !== void 0)
        return {B: obj.B};
      if (obj.SS !== void 0)
        return {SS: obj.SS};
      if (obj.NS !== void 0)
        return {NS: obj.NS};
      if (obj.BS !== void 0)
        return {BS: obj.BS};
      if (obj.M !== void 0)
        return {
          M: Object.entries(obj.M).reduce((acc, [key, value]) => ({
            ...acc,
            [key]: AttributeValue2.filterSensitiveLog(value)
          }), {})
        };
      if (obj.L !== void 0)
        return {L: obj.L.map((item) => AttributeValue2.filterSensitiveLog(item))};
      if (obj.NULL !== void 0)
        return {NULL: obj.NULL};
      if (obj.BOOL !== void 0)
        return {BOOL: obj.BOOL};
      if (obj.$unknown !== void 0)
        return {[obj.$unknown[0]]: "UNKNOWN"};
    };
  })(AttributeValue = exports2.AttributeValue || (exports2.AttributeValue = {}));
  var AttributeValueUpdate;
  (function(AttributeValueUpdate2) {
    AttributeValueUpdate2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Value && {Value: AttributeValue.filterSensitiveLog(obj.Value)}
    });
  })(AttributeValueUpdate = exports2.AttributeValueUpdate || (exports2.AttributeValueUpdate = {}));
  var BatchStatementRequest;
  (function(BatchStatementRequest2) {
    BatchStatementRequest2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Parameters && {Parameters: obj.Parameters.map((item) => AttributeValue.filterSensitiveLog(item))}
    });
  })(BatchStatementRequest = exports2.BatchStatementRequest || (exports2.BatchStatementRequest = {}));
  var BatchStatementResponse;
  (function(BatchStatementResponse2) {
    BatchStatementResponse2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Item && {
        Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(BatchStatementResponse = exports2.BatchStatementResponse || (exports2.BatchStatementResponse = {}));
  var CancellationReason;
  (function(CancellationReason2) {
    CancellationReason2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Item && {
        Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(CancellationReason = exports2.CancellationReason || (exports2.CancellationReason = {}));
  var Condition;
  (function(Condition2) {
    Condition2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.AttributeValueList && {
        AttributeValueList: obj.AttributeValueList.map((item) => AttributeValue.filterSensitiveLog(item))
      }
    });
  })(Condition = exports2.Condition || (exports2.Condition = {}));
  var DeleteRequest;
  (function(DeleteRequest2) {
    DeleteRequest2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Key && {
        Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(DeleteRequest = exports2.DeleteRequest || (exports2.DeleteRequest = {}));
  var ExecuteStatementInput;
  (function(ExecuteStatementInput2) {
    ExecuteStatementInput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Parameters && {Parameters: obj.Parameters.map((item) => AttributeValue.filterSensitiveLog(item))}
    });
  })(ExecuteStatementInput = exports2.ExecuteStatementInput || (exports2.ExecuteStatementInput = {}));
  var Get;
  (function(Get2) {
    Get2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Key && {
        Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(Get = exports2.Get || (exports2.Get = {}));
  var GetItemInput;
  (function(GetItemInput2) {
    GetItemInput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Key && {
        Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(GetItemInput = exports2.GetItemInput || (exports2.GetItemInput = {}));
  var GetItemOutput;
  (function(GetItemOutput2) {
    GetItemOutput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Item && {
        Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(GetItemOutput = exports2.GetItemOutput || (exports2.GetItemOutput = {}));
  var ItemCollectionMetrics;
  (function(ItemCollectionMetrics2) {
    ItemCollectionMetrics2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.ItemCollectionKey && {
        ItemCollectionKey: Object.entries(obj.ItemCollectionKey).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(ItemCollectionMetrics = exports2.ItemCollectionMetrics || (exports2.ItemCollectionMetrics = {}));
  var ItemResponse;
  (function(ItemResponse2) {
    ItemResponse2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Item && {
        Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(ItemResponse = exports2.ItemResponse || (exports2.ItemResponse = {}));
  var ParameterizedStatement;
  (function(ParameterizedStatement2) {
    ParameterizedStatement2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Parameters && {Parameters: obj.Parameters.map((item) => AttributeValue.filterSensitiveLog(item))}
    });
  })(ParameterizedStatement = exports2.ParameterizedStatement || (exports2.ParameterizedStatement = {}));
  var PutRequest;
  (function(PutRequest2) {
    PutRequest2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Item && {
        Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(PutRequest = exports2.PutRequest || (exports2.PutRequest = {}));
  var ExecuteStatementOutput;
  (function(ExecuteStatementOutput2) {
    ExecuteStatementOutput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Items && {
        Items: obj.Items.map((item) => Object.entries(item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {}))
      }
    });
  })(ExecuteStatementOutput = exports2.ExecuteStatementOutput || (exports2.ExecuteStatementOutput = {}));
  var KeysAndAttributes;
  (function(KeysAndAttributes2) {
    KeysAndAttributes2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Keys && {
        Keys: obj.Keys.map((item) => Object.entries(item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {}))
      }
    });
  })(KeysAndAttributes = exports2.KeysAndAttributes || (exports2.KeysAndAttributes = {}));
  var TransactGetItem;
  (function(TransactGetItem2) {
    TransactGetItem2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Get && {Get: Get.filterSensitiveLog(obj.Get)}
    });
  })(TransactGetItem = exports2.TransactGetItem || (exports2.TransactGetItem = {}));
  var BatchExecuteStatementInput;
  (function(BatchExecuteStatementInput2) {
    BatchExecuteStatementInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BatchExecuteStatementInput = exports2.BatchExecuteStatementInput || (exports2.BatchExecuteStatementInput = {}));
  var BatchExecuteStatementOutput;
  (function(BatchExecuteStatementOutput2) {
    BatchExecuteStatementOutput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Responses && {Responses: obj.Responses.map((item) => BatchStatementResponse.filterSensitiveLog(item))}
    });
  })(BatchExecuteStatementOutput = exports2.BatchExecuteStatementOutput || (exports2.BatchExecuteStatementOutput = {}));
  var ExecuteTransactionInput;
  (function(ExecuteTransactionInput2) {
    ExecuteTransactionInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(ExecuteTransactionInput = exports2.ExecuteTransactionInput || (exports2.ExecuteTransactionInput = {}));
  var ExecuteTransactionOutput;
  (function(ExecuteTransactionOutput2) {
    ExecuteTransactionOutput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Responses && {Responses: obj.Responses.map((item) => ItemResponse.filterSensitiveLog(item))}
    });
  })(ExecuteTransactionOutput = exports2.ExecuteTransactionOutput || (exports2.ExecuteTransactionOutput = {}));
  var TransactGetItemsOutput;
  (function(TransactGetItemsOutput2) {
    TransactGetItemsOutput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Responses && {Responses: obj.Responses.map((item) => ItemResponse.filterSensitiveLog(item))}
    });
  })(TransactGetItemsOutput = exports2.TransactGetItemsOutput || (exports2.TransactGetItemsOutput = {}));
  var TransactionCanceledException;
  (function(TransactionCanceledException2) {
    TransactionCanceledException2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.CancellationReasons && {
        CancellationReasons: obj.CancellationReasons.map((item) => CancellationReason.filterSensitiveLog(item))
      }
    });
  })(TransactionCanceledException = exports2.TransactionCanceledException || (exports2.TransactionCanceledException = {}));
  var BatchGetItemInput;
  (function(BatchGetItemInput2) {
    BatchGetItemInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BatchGetItemInput = exports2.BatchGetItemInput || (exports2.BatchGetItemInput = {}));
  var ExpectedAttributeValue;
  (function(ExpectedAttributeValue2) {
    ExpectedAttributeValue2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Value && {Value: AttributeValue.filterSensitiveLog(obj.Value)},
      ...obj.AttributeValueList && {
        AttributeValueList: obj.AttributeValueList.map((item) => AttributeValue.filterSensitiveLog(item))
      }
    });
  })(ExpectedAttributeValue = exports2.ExpectedAttributeValue || (exports2.ExpectedAttributeValue = {}));
  var TransactGetItemsInput;
  (function(TransactGetItemsInput2) {
    TransactGetItemsInput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.TransactItems && {
        TransactItems: obj.TransactItems.map((item) => TransactGetItem.filterSensitiveLog(item))
      }
    });
  })(TransactGetItemsInput = exports2.TransactGetItemsInput || (exports2.TransactGetItemsInput = {}));
  var TransactWriteItemsOutput;
  (function(TransactWriteItemsOutput2) {
    TransactWriteItemsOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(TransactWriteItemsOutput = exports2.TransactWriteItemsOutput || (exports2.TransactWriteItemsOutput = {}));
  var ConditionCheck;
  (function(ConditionCheck2) {
    ConditionCheck2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Key && {
        Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExpressionAttributeValues && {
        ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(ConditionCheck = exports2.ConditionCheck || (exports2.ConditionCheck = {}));
  var Delete;
  (function(Delete2) {
    Delete2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Key && {
        Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExpressionAttributeValues && {
        ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(Delete = exports2.Delete || (exports2.Delete = {}));
  var Put;
  (function(Put2) {
    Put2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Item && {
        Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExpressionAttributeValues && {
        ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(Put = exports2.Put || (exports2.Put = {}));
  var Update;
  (function(Update2) {
    Update2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Key && {
        Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExpressionAttributeValues && {
        ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(Update = exports2.Update || (exports2.Update = {}));
  var DeleteItemOutput;
  (function(DeleteItemOutput2) {
    DeleteItemOutput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Attributes && {
        Attributes: Object.entries(obj.Attributes).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ItemCollectionMetrics && {
        ItemCollectionMetrics: ItemCollectionMetrics.filterSensitiveLog(obj.ItemCollectionMetrics)
      }
    });
  })(DeleteItemOutput = exports2.DeleteItemOutput || (exports2.DeleteItemOutput = {}));
  var PutItemOutput;
  (function(PutItemOutput2) {
    PutItemOutput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Attributes && {
        Attributes: Object.entries(obj.Attributes).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ItemCollectionMetrics && {
        ItemCollectionMetrics: ItemCollectionMetrics.filterSensitiveLog(obj.ItemCollectionMetrics)
      }
    });
  })(PutItemOutput = exports2.PutItemOutput || (exports2.PutItemOutput = {}));
  var QueryOutput;
  (function(QueryOutput2) {
    QueryOutput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Items && {
        Items: obj.Items.map((item) => Object.entries(item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {}))
      },
      ...obj.LastEvaluatedKey && {
        LastEvaluatedKey: Object.entries(obj.LastEvaluatedKey).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(QueryOutput = exports2.QueryOutput || (exports2.QueryOutput = {}));
  var ScanOutput;
  (function(ScanOutput2) {
    ScanOutput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Items && {
        Items: obj.Items.map((item) => Object.entries(item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {}))
      },
      ...obj.LastEvaluatedKey && {
        LastEvaluatedKey: Object.entries(obj.LastEvaluatedKey).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(ScanOutput = exports2.ScanOutput || (exports2.ScanOutput = {}));
  var UpdateItemOutput;
  (function(UpdateItemOutput2) {
    UpdateItemOutput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Attributes && {
        Attributes: Object.entries(obj.Attributes).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ItemCollectionMetrics && {
        ItemCollectionMetrics: ItemCollectionMetrics.filterSensitiveLog(obj.ItemCollectionMetrics)
      }
    });
  })(UpdateItemOutput = exports2.UpdateItemOutput || (exports2.UpdateItemOutput = {}));
  var WriteRequest;
  (function(WriteRequest2) {
    WriteRequest2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.PutRequest && {PutRequest: PutRequest.filterSensitiveLog(obj.PutRequest)},
      ...obj.DeleteRequest && {DeleteRequest: DeleteRequest.filterSensitiveLog(obj.DeleteRequest)}
    });
  })(WriteRequest = exports2.WriteRequest || (exports2.WriteRequest = {}));
  var BatchGetItemOutput;
  (function(BatchGetItemOutput2) {
    BatchGetItemOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BatchGetItemOutput = exports2.BatchGetItemOutput || (exports2.BatchGetItemOutput = {}));
  var ScanInput2;
  (function(ScanInput3) {
    ScanInput3.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.ScanFilter && {
        ScanFilter: Object.entries(obj.ScanFilter).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: Condition.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExclusiveStartKey && {
        ExclusiveStartKey: Object.entries(obj.ExclusiveStartKey).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExpressionAttributeValues && {
        ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(ScanInput2 = exports2.ScanInput || (exports2.ScanInput = {}));
  var BatchWriteItemInput;
  (function(BatchWriteItemInput2) {
    BatchWriteItemInput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BatchWriteItemInput = exports2.BatchWriteItemInput || (exports2.BatchWriteItemInput = {}));
  var DeleteItemInput;
  (function(DeleteItemInput2) {
    DeleteItemInput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Key && {
        Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.Expected && {
        Expected: Object.entries(obj.Expected).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: ExpectedAttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExpressionAttributeValues && {
        ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(DeleteItemInput = exports2.DeleteItemInput || (exports2.DeleteItemInput = {}));
  var PutItemInput;
  (function(PutItemInput2) {
    PutItemInput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Item && {
        Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.Expected && {
        Expected: Object.entries(obj.Expected).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: ExpectedAttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExpressionAttributeValues && {
        ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(PutItemInput = exports2.PutItemInput || (exports2.PutItemInput = {}));
  var QueryInput2;
  (function(QueryInput3) {
    QueryInput3.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.KeyConditions && {
        KeyConditions: Object.entries(obj.KeyConditions).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: Condition.filterSensitiveLog(value)
        }), {})
      },
      ...obj.QueryFilter && {
        QueryFilter: Object.entries(obj.QueryFilter).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: Condition.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExclusiveStartKey && {
        ExclusiveStartKey: Object.entries(obj.ExclusiveStartKey).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExpressionAttributeValues && {
        ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(QueryInput2 = exports2.QueryInput || (exports2.QueryInput = {}));
  var BatchWriteItemOutput;
  (function(BatchWriteItemOutput2) {
    BatchWriteItemOutput2.filterSensitiveLog = (obj) => ({
      ...obj
    });
  })(BatchWriteItemOutput = exports2.BatchWriteItemOutput || (exports2.BatchWriteItemOutput = {}));
  var UpdateItemInput;
  (function(UpdateItemInput2) {
    UpdateItemInput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Key && {
        Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.AttributeUpdates && {
        AttributeUpdates: Object.entries(obj.AttributeUpdates).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValueUpdate.filterSensitiveLog(value)
        }), {})
      },
      ...obj.Expected && {
        Expected: Object.entries(obj.Expected).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: ExpectedAttributeValue.filterSensitiveLog(value)
        }), {})
      },
      ...obj.ExpressionAttributeValues && {
        ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value)
        }), {})
      }
    });
  })(UpdateItemInput = exports2.UpdateItemInput || (exports2.UpdateItemInput = {}));
  var TransactWriteItem;
  (function(TransactWriteItem2) {
    TransactWriteItem2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.ConditionCheck && {ConditionCheck: ConditionCheck.filterSensitiveLog(obj.ConditionCheck)},
      ...obj.Put && {Put: Put.filterSensitiveLog(obj.Put)},
      ...obj.Delete && {Delete: Delete.filterSensitiveLog(obj.Delete)},
      ...obj.Update && {Update: Update.filterSensitiveLog(obj.Update)}
    });
  })(TransactWriteItem = exports2.TransactWriteItem || (exports2.TransactWriteItem = {}));
  var TransactWriteItemsInput;
  (function(TransactWriteItemsInput2) {
    TransactWriteItemsInput2.filterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.TransactItems && {
        TransactItems: obj.TransactItems.map((item) => TransactWriteItem.filterSensitiveLog(item))
      }
    });
  })(TransactWriteItemsInput = exports2.TransactWriteItemsInput || (exports2.TransactWriteItemsInput = {}));
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/protocols/Aws_json1_0.js
var require_Aws_json1_0 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.serializeAws_json1_0UpdateTimeToLiveCommand = exports2.serializeAws_json1_0UpdateTableReplicaAutoScalingCommand = exports2.serializeAws_json1_0UpdateTableCommand = exports2.serializeAws_json1_0UpdateItemCommand = exports2.serializeAws_json1_0UpdateGlobalTableSettingsCommand = exports2.serializeAws_json1_0UpdateGlobalTableCommand = exports2.serializeAws_json1_0UpdateContributorInsightsCommand = exports2.serializeAws_json1_0UpdateContinuousBackupsCommand = exports2.serializeAws_json1_0UntagResourceCommand = exports2.serializeAws_json1_0TransactWriteItemsCommand = exports2.serializeAws_json1_0TransactGetItemsCommand = exports2.serializeAws_json1_0TagResourceCommand = exports2.serializeAws_json1_0ScanCommand = exports2.serializeAws_json1_0RestoreTableToPointInTimeCommand = exports2.serializeAws_json1_0RestoreTableFromBackupCommand = exports2.serializeAws_json1_0QueryCommand = exports2.serializeAws_json1_0PutItemCommand = exports2.serializeAws_json1_0ListTagsOfResourceCommand = exports2.serializeAws_json1_0ListTablesCommand = exports2.serializeAws_json1_0ListGlobalTablesCommand = exports2.serializeAws_json1_0ListExportsCommand = exports2.serializeAws_json1_0ListContributorInsightsCommand = exports2.serializeAws_json1_0ListBackupsCommand = exports2.serializeAws_json1_0GetItemCommand = exports2.serializeAws_json1_0ExportTableToPointInTimeCommand = exports2.serializeAws_json1_0ExecuteTransactionCommand = exports2.serializeAws_json1_0ExecuteStatementCommand = exports2.serializeAws_json1_0EnableKinesisStreamingDestinationCommand = exports2.serializeAws_json1_0DisableKinesisStreamingDestinationCommand = exports2.serializeAws_json1_0DescribeTimeToLiveCommand = exports2.serializeAws_json1_0DescribeTableReplicaAutoScalingCommand = exports2.serializeAws_json1_0DescribeTableCommand = exports2.serializeAws_json1_0DescribeLimitsCommand = exports2.serializeAws_json1_0DescribeKinesisStreamingDestinationCommand = exports2.serializeAws_json1_0DescribeGlobalTableSettingsCommand = exports2.serializeAws_json1_0DescribeGlobalTableCommand = exports2.serializeAws_json1_0DescribeExportCommand = exports2.serializeAws_json1_0DescribeEndpointsCommand = exports2.serializeAws_json1_0DescribeContributorInsightsCommand = exports2.serializeAws_json1_0DescribeContinuousBackupsCommand = exports2.serializeAws_json1_0DescribeBackupCommand = exports2.serializeAws_json1_0DeleteTableCommand = exports2.serializeAws_json1_0DeleteItemCommand = exports2.serializeAws_json1_0DeleteBackupCommand = exports2.serializeAws_json1_0CreateTableCommand = exports2.serializeAws_json1_0CreateGlobalTableCommand = exports2.serializeAws_json1_0CreateBackupCommand = exports2.serializeAws_json1_0BatchWriteItemCommand = exports2.serializeAws_json1_0BatchGetItemCommand = exports2.serializeAws_json1_0BatchExecuteStatementCommand = void 0;
  exports2.deserializeAws_json1_0UpdateTimeToLiveCommand = exports2.deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand = exports2.deserializeAws_json1_0UpdateTableCommand = exports2.deserializeAws_json1_0UpdateItemCommand = exports2.deserializeAws_json1_0UpdateGlobalTableSettingsCommand = exports2.deserializeAws_json1_0UpdateGlobalTableCommand = exports2.deserializeAws_json1_0UpdateContributorInsightsCommand = exports2.deserializeAws_json1_0UpdateContinuousBackupsCommand = exports2.deserializeAws_json1_0UntagResourceCommand = exports2.deserializeAws_json1_0TransactWriteItemsCommand = exports2.deserializeAws_json1_0TransactGetItemsCommand = exports2.deserializeAws_json1_0TagResourceCommand = exports2.deserializeAws_json1_0ScanCommand = exports2.deserializeAws_json1_0RestoreTableToPointInTimeCommand = exports2.deserializeAws_json1_0RestoreTableFromBackupCommand = exports2.deserializeAws_json1_0QueryCommand = exports2.deserializeAws_json1_0PutItemCommand = exports2.deserializeAws_json1_0ListTagsOfResourceCommand = exports2.deserializeAws_json1_0ListTablesCommand = exports2.deserializeAws_json1_0ListGlobalTablesCommand = exports2.deserializeAws_json1_0ListExportsCommand = exports2.deserializeAws_json1_0ListContributorInsightsCommand = exports2.deserializeAws_json1_0ListBackupsCommand = exports2.deserializeAws_json1_0GetItemCommand = exports2.deserializeAws_json1_0ExportTableToPointInTimeCommand = exports2.deserializeAws_json1_0ExecuteTransactionCommand = exports2.deserializeAws_json1_0ExecuteStatementCommand = exports2.deserializeAws_json1_0EnableKinesisStreamingDestinationCommand = exports2.deserializeAws_json1_0DisableKinesisStreamingDestinationCommand = exports2.deserializeAws_json1_0DescribeTimeToLiveCommand = exports2.deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand = exports2.deserializeAws_json1_0DescribeTableCommand = exports2.deserializeAws_json1_0DescribeLimitsCommand = exports2.deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand = exports2.deserializeAws_json1_0DescribeGlobalTableSettingsCommand = exports2.deserializeAws_json1_0DescribeGlobalTableCommand = exports2.deserializeAws_json1_0DescribeExportCommand = exports2.deserializeAws_json1_0DescribeEndpointsCommand = exports2.deserializeAws_json1_0DescribeContributorInsightsCommand = exports2.deserializeAws_json1_0DescribeContinuousBackupsCommand = exports2.deserializeAws_json1_0DescribeBackupCommand = exports2.deserializeAws_json1_0DeleteTableCommand = exports2.deserializeAws_json1_0DeleteItemCommand = exports2.deserializeAws_json1_0DeleteBackupCommand = exports2.deserializeAws_json1_0CreateTableCommand = exports2.deserializeAws_json1_0CreateGlobalTableCommand = exports2.deserializeAws_json1_0CreateBackupCommand = exports2.deserializeAws_json1_0BatchWriteItemCommand = exports2.deserializeAws_json1_0BatchGetItemCommand = exports2.deserializeAws_json1_0BatchExecuteStatementCommand = void 0;
  var models_0_1 = require_models_0();
  var protocol_http_1 = require_cjs12();
  var uuid_1 = require_uuid();
  var serializeAws_json1_0BatchExecuteStatementCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.BatchExecuteStatement"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0BatchExecuteStatementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0BatchExecuteStatementCommand = serializeAws_json1_0BatchExecuteStatementCommand;
  var serializeAws_json1_0BatchGetItemCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.BatchGetItem"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0BatchGetItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0BatchGetItemCommand = serializeAws_json1_0BatchGetItemCommand;
  var serializeAws_json1_0BatchWriteItemCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.BatchWriteItem"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0BatchWriteItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0BatchWriteItemCommand = serializeAws_json1_0BatchWriteItemCommand;
  var serializeAws_json1_0CreateBackupCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.CreateBackup"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0CreateBackupCommand = serializeAws_json1_0CreateBackupCommand;
  var serializeAws_json1_0CreateGlobalTableCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.CreateGlobalTable"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateGlobalTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0CreateGlobalTableCommand = serializeAws_json1_0CreateGlobalTableCommand;
  var serializeAws_json1_0CreateTableCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.CreateTable"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0CreateTableCommand = serializeAws_json1_0CreateTableCommand;
  var serializeAws_json1_0DeleteBackupCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DeleteBackup"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DeleteBackupCommand = serializeAws_json1_0DeleteBackupCommand;
  var serializeAws_json1_0DeleteItemCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DeleteItem"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DeleteItemCommand = serializeAws_json1_0DeleteItemCommand;
  var serializeAws_json1_0DeleteTableCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DeleteTable"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DeleteTableCommand = serializeAws_json1_0DeleteTableCommand;
  var serializeAws_json1_0DescribeBackupCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeBackup"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeBackupCommand = serializeAws_json1_0DescribeBackupCommand;
  var serializeAws_json1_0DescribeContinuousBackupsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeContinuousBackups"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeContinuousBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeContinuousBackupsCommand = serializeAws_json1_0DescribeContinuousBackupsCommand;
  var serializeAws_json1_0DescribeContributorInsightsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeContributorInsights"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeContributorInsightsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeContributorInsightsCommand = serializeAws_json1_0DescribeContributorInsightsCommand;
  var serializeAws_json1_0DescribeEndpointsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeEndpoints"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeEndpointsCommand = serializeAws_json1_0DescribeEndpointsCommand;
  var serializeAws_json1_0DescribeExportCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeExport"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeExportInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeExportCommand = serializeAws_json1_0DescribeExportCommand;
  var serializeAws_json1_0DescribeGlobalTableCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeGlobalTable"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeGlobalTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeGlobalTableCommand = serializeAws_json1_0DescribeGlobalTableCommand;
  var serializeAws_json1_0DescribeGlobalTableSettingsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeGlobalTableSettings"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeGlobalTableSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeGlobalTableSettingsCommand = serializeAws_json1_0DescribeGlobalTableSettingsCommand;
  var serializeAws_json1_0DescribeKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeKinesisStreamingDestination"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeKinesisStreamingDestinationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeKinesisStreamingDestinationCommand = serializeAws_json1_0DescribeKinesisStreamingDestinationCommand;
  var serializeAws_json1_0DescribeLimitsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeLimits"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeLimitsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeLimitsCommand = serializeAws_json1_0DescribeLimitsCommand;
  var serializeAws_json1_0DescribeTableCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeTable"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeTableCommand = serializeAws_json1_0DescribeTableCommand;
  var serializeAws_json1_0DescribeTableReplicaAutoScalingCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeTableReplicaAutoScaling"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeTableReplicaAutoScalingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeTableReplicaAutoScalingCommand = serializeAws_json1_0DescribeTableReplicaAutoScalingCommand;
  var serializeAws_json1_0DescribeTimeToLiveCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DescribeTimeToLive"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeTimeToLiveInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DescribeTimeToLiveCommand = serializeAws_json1_0DescribeTimeToLiveCommand;
  var serializeAws_json1_0DisableKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.DisableKinesisStreamingDestination"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0KinesisStreamingDestinationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0DisableKinesisStreamingDestinationCommand = serializeAws_json1_0DisableKinesisStreamingDestinationCommand;
  var serializeAws_json1_0EnableKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.EnableKinesisStreamingDestination"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0KinesisStreamingDestinationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0EnableKinesisStreamingDestinationCommand = serializeAws_json1_0EnableKinesisStreamingDestinationCommand;
  var serializeAws_json1_0ExecuteStatementCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.ExecuteStatement"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ExecuteStatementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0ExecuteStatementCommand = serializeAws_json1_0ExecuteStatementCommand;
  var serializeAws_json1_0ExecuteTransactionCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.ExecuteTransaction"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ExecuteTransactionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0ExecuteTransactionCommand = serializeAws_json1_0ExecuteTransactionCommand;
  var serializeAws_json1_0ExportTableToPointInTimeCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.ExportTableToPointInTime"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ExportTableToPointInTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0ExportTableToPointInTimeCommand = serializeAws_json1_0ExportTableToPointInTimeCommand;
  var serializeAws_json1_0GetItemCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.GetItem"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0GetItemCommand = serializeAws_json1_0GetItemCommand;
  var serializeAws_json1_0ListBackupsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.ListBackups"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0ListBackupsCommand = serializeAws_json1_0ListBackupsCommand;
  var serializeAws_json1_0ListContributorInsightsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.ListContributorInsights"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListContributorInsightsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0ListContributorInsightsCommand = serializeAws_json1_0ListContributorInsightsCommand;
  var serializeAws_json1_0ListExportsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.ListExports"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListExportsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0ListExportsCommand = serializeAws_json1_0ListExportsCommand;
  var serializeAws_json1_0ListGlobalTablesCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.ListGlobalTables"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListGlobalTablesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0ListGlobalTablesCommand = serializeAws_json1_0ListGlobalTablesCommand;
  var serializeAws_json1_0ListTablesCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.ListTables"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTablesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0ListTablesCommand = serializeAws_json1_0ListTablesCommand;
  var serializeAws_json1_0ListTagsOfResourceCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.ListTagsOfResource"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsOfResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0ListTagsOfResourceCommand = serializeAws_json1_0ListTagsOfResourceCommand;
  var serializeAws_json1_0PutItemCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.PutItem"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0PutItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0PutItemCommand = serializeAws_json1_0PutItemCommand;
  var serializeAws_json1_0QueryCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.Query"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0QueryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0QueryCommand = serializeAws_json1_0QueryCommand;
  var serializeAws_json1_0RestoreTableFromBackupCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.RestoreTableFromBackup"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RestoreTableFromBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0RestoreTableFromBackupCommand = serializeAws_json1_0RestoreTableFromBackupCommand;
  var serializeAws_json1_0RestoreTableToPointInTimeCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.RestoreTableToPointInTime"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0RestoreTableToPointInTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0RestoreTableToPointInTimeCommand = serializeAws_json1_0RestoreTableToPointInTimeCommand;
  var serializeAws_json1_0ScanCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.Scan"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ScanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0ScanCommand = serializeAws_json1_0ScanCommand;
  var serializeAws_json1_0TagResourceCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.TagResource"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
  var serializeAws_json1_0TransactGetItemsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.TransactGetItems"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TransactGetItemsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0TransactGetItemsCommand = serializeAws_json1_0TransactGetItemsCommand;
  var serializeAws_json1_0TransactWriteItemsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.TransactWriteItems"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TransactWriteItemsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0TransactWriteItemsCommand = serializeAws_json1_0TransactWriteItemsCommand;
  var serializeAws_json1_0UntagResourceCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.UntagResource"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
  var serializeAws_json1_0UpdateContinuousBackupsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.UpdateContinuousBackups"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateContinuousBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0UpdateContinuousBackupsCommand = serializeAws_json1_0UpdateContinuousBackupsCommand;
  var serializeAws_json1_0UpdateContributorInsightsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.UpdateContributorInsights"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateContributorInsightsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0UpdateContributorInsightsCommand = serializeAws_json1_0UpdateContributorInsightsCommand;
  var serializeAws_json1_0UpdateGlobalTableCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.UpdateGlobalTable"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateGlobalTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0UpdateGlobalTableCommand = serializeAws_json1_0UpdateGlobalTableCommand;
  var serializeAws_json1_0UpdateGlobalTableSettingsCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.UpdateGlobalTableSettings"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateGlobalTableSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0UpdateGlobalTableSettingsCommand = serializeAws_json1_0UpdateGlobalTableSettingsCommand;
  var serializeAws_json1_0UpdateItemCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.UpdateItem"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0UpdateItemCommand = serializeAws_json1_0UpdateItemCommand;
  var serializeAws_json1_0UpdateTableCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.UpdateTable"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0UpdateTableCommand = serializeAws_json1_0UpdateTableCommand;
  var serializeAws_json1_0UpdateTableReplicaAutoScalingCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.UpdateTableReplicaAutoScaling"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateTableReplicaAutoScalingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0UpdateTableReplicaAutoScalingCommand = serializeAws_json1_0UpdateTableReplicaAutoScalingCommand;
  var serializeAws_json1_0UpdateTimeToLiveCommand = async (input, context) => {
    const headers = {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": "DynamoDB_20120810.UpdateTimeToLive"
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateTimeToLiveInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", void 0, body);
  };
  exports2.serializeAws_json1_0UpdateTimeToLiveCommand = serializeAws_json1_0UpdateTimeToLiveCommand;
  var deserializeAws_json1_0BatchExecuteStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0BatchExecuteStatementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0BatchExecuteStatementOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0BatchExecuteStatementCommand = deserializeAws_json1_0BatchExecuteStatementCommand;
  var deserializeAws_json1_0BatchExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0BatchGetItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0BatchGetItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0BatchGetItemOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0BatchGetItemCommand = deserializeAws_json1_0BatchGetItemCommand;
  var deserializeAws_json1_0BatchGetItemCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0BatchWriteItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0BatchWriteItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0BatchWriteItemOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0BatchWriteItemCommand = deserializeAws_json1_0BatchWriteItemCommand;
  var deserializeAws_json1_0BatchWriteItemCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ItemCollectionSizeLimitExceededException":
      case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
        response = {
          ...await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0CreateBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0CreateBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateBackupOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0CreateBackupCommand = deserializeAws_json1_0CreateBackupCommand;
  var deserializeAws_json1_0CreateBackupCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "BackupInUseException":
      case "com.amazonaws.dynamodb#BackupInUseException":
        response = {
          ...await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ContinuousBackupsUnavailableException":
      case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
        response = {
          ...await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableInUseException":
      case "com.amazonaws.dynamodb#TableInUseException":
        response = {
          ...await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableNotFoundException":
      case "com.amazonaws.dynamodb#TableNotFoundException":
        response = {
          ...await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0CreateGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0CreateGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateGlobalTableOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0CreateGlobalTableCommand = deserializeAws_json1_0CreateGlobalTableCommand;
  var deserializeAws_json1_0CreateGlobalTableCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "GlobalTableAlreadyExistsException":
      case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
        response = {
          ...await deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableNotFoundException":
      case "com.amazonaws.dynamodb#TableNotFoundException":
        response = {
          ...await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0CreateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0CreateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateTableOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0CreateTableCommand = deserializeAws_json1_0CreateTableCommand;
  var deserializeAws_json1_0CreateTableCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        response = {
          ...await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DeleteBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DeleteBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteBackupOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DeleteBackupCommand = deserializeAws_json1_0DeleteBackupCommand;
  var deserializeAws_json1_0DeleteBackupCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "BackupInUseException":
      case "com.amazonaws.dynamodb#BackupInUseException":
        response = {
          ...await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "BackupNotFoundException":
      case "com.amazonaws.dynamodb#BackupNotFoundException":
        response = {
          ...await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DeleteItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DeleteItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteItemOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DeleteItemCommand = deserializeAws_json1_0DeleteItemCommand;
  var deserializeAws_json1_0DeleteItemCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "ConditionalCheckFailedException":
      case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
        response = {
          ...await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ItemCollectionSizeLimitExceededException":
      case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
        response = {
          ...await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TransactionConflictException":
      case "com.amazonaws.dynamodb#TransactionConflictException":
        response = {
          ...await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DeleteTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DeleteTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteTableOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DeleteTableCommand = deserializeAws_json1_0DeleteTableCommand;
  var deserializeAws_json1_0DeleteTableCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        response = {
          ...await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeBackupOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeBackupCommand = deserializeAws_json1_0DescribeBackupCommand;
  var deserializeAws_json1_0DescribeBackupCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "BackupNotFoundException":
      case "com.amazonaws.dynamodb#BackupNotFoundException":
        response = {
          ...await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeContinuousBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeContinuousBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeContinuousBackupsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeContinuousBackupsCommand = deserializeAws_json1_0DescribeContinuousBackupsCommand;
  var deserializeAws_json1_0DescribeContinuousBackupsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableNotFoundException":
      case "com.amazonaws.dynamodb#TableNotFoundException":
        response = {
          ...await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeContributorInsightsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeContributorInsightsCommand = deserializeAws_json1_0DescribeContributorInsightsCommand;
  var deserializeAws_json1_0DescribeContributorInsightsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeEndpointsResponse(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeEndpointsCommand = deserializeAws_json1_0DescribeEndpointsCommand;
  var deserializeAws_json1_0DescribeEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeExportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeExportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeExportOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeExportCommand = deserializeAws_json1_0DescribeExportCommand;
  var deserializeAws_json1_0DescribeExportCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "ExportNotFoundException":
      case "com.amazonaws.dynamodb#ExportNotFoundException":
        response = {
          ...await deserializeAws_json1_0ExportNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeGlobalTableOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeGlobalTableCommand = deserializeAws_json1_0DescribeGlobalTableCommand;
  var deserializeAws_json1_0DescribeGlobalTableCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "GlobalTableNotFoundException":
      case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
        response = {
          ...await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeGlobalTableSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeGlobalTableSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeGlobalTableSettingsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeGlobalTableSettingsCommand = deserializeAws_json1_0DescribeGlobalTableSettingsCommand;
  var deserializeAws_json1_0DescribeGlobalTableSettingsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "GlobalTableNotFoundException":
      case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
        response = {
          ...await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeKinesisStreamingDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeKinesisStreamingDestinationOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand = deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand;
  var deserializeAws_json1_0DescribeKinesisStreamingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeLimitsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeLimitsCommand = deserializeAws_json1_0DescribeLimitsCommand;
  var deserializeAws_json1_0DescribeLimitsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeTableOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeTableCommand = deserializeAws_json1_0DescribeTableCommand;
  var deserializeAws_json1_0DescribeTableCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand = deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand;
  var deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DescribeTimeToLiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DescribeTimeToLiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeTimeToLiveOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DescribeTimeToLiveCommand = deserializeAws_json1_0DescribeTimeToLiveCommand;
  var deserializeAws_json1_0DescribeTimeToLiveCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0DisableKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0DisableKinesisStreamingDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0KinesisStreamingDestinationOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0DisableKinesisStreamingDestinationCommand = deserializeAws_json1_0DisableKinesisStreamingDestinationCommand;
  var deserializeAws_json1_0DisableKinesisStreamingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        response = {
          ...await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0EnableKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0EnableKinesisStreamingDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0KinesisStreamingDestinationOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0EnableKinesisStreamingDestinationCommand = deserializeAws_json1_0EnableKinesisStreamingDestinationCommand;
  var deserializeAws_json1_0EnableKinesisStreamingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        response = {
          ...await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0ExecuteStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0ExecuteStatementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ExecuteStatementOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0ExecuteStatementCommand = deserializeAws_json1_0ExecuteStatementCommand;
  var deserializeAws_json1_0ExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "ConditionalCheckFailedException":
      case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
        response = {
          ...await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "DuplicateItemException":
      case "com.amazonaws.dynamodb#DuplicateItemException":
        response = {
          ...await deserializeAws_json1_0DuplicateItemExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ItemCollectionSizeLimitExceededException":
      case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
        response = {
          ...await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TransactionConflictException":
      case "com.amazonaws.dynamodb#TransactionConflictException":
        response = {
          ...await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0ExecuteTransactionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0ExecuteTransactionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ExecuteTransactionOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0ExecuteTransactionCommand = deserializeAws_json1_0ExecuteTransactionCommand;
  var deserializeAws_json1_0ExecuteTransactionCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "IdempotentParameterMismatchException":
      case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
        response = {
          ...await deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TransactionCanceledException":
      case "com.amazonaws.dynamodb#TransactionCanceledException":
        response = {
          ...await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TransactionInProgressException":
      case "com.amazonaws.dynamodb#TransactionInProgressException":
        response = {
          ...await deserializeAws_json1_0TransactionInProgressExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0ExportTableToPointInTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0ExportTableToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ExportTableToPointInTimeOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0ExportTableToPointInTimeCommand = deserializeAws_json1_0ExportTableToPointInTimeCommand;
  var deserializeAws_json1_0ExportTableToPointInTimeCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "ExportConflictException":
      case "com.amazonaws.dynamodb#ExportConflictException":
        response = {
          ...await deserializeAws_json1_0ExportConflictExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidExportTimeException":
      case "com.amazonaws.dynamodb#InvalidExportTimeException":
        response = {
          ...await deserializeAws_json1_0InvalidExportTimeExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "PointInTimeRecoveryUnavailableException":
      case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
        response = {
          ...await deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableNotFoundException":
      case "com.amazonaws.dynamodb#TableNotFoundException":
        response = {
          ...await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0GetItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0GetItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetItemOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0GetItemCommand = deserializeAws_json1_0GetItemCommand;
  var deserializeAws_json1_0GetItemCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0ListBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0ListBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListBackupsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0ListBackupsCommand = deserializeAws_json1_0ListBackupsCommand;
  var deserializeAws_json1_0ListBackupsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0ListContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0ListContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListContributorInsightsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0ListContributorInsightsCommand = deserializeAws_json1_0ListContributorInsightsCommand;
  var deserializeAws_json1_0ListContributorInsightsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0ListExportsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0ListExportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListExportsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0ListExportsCommand = deserializeAws_json1_0ListExportsCommand;
  var deserializeAws_json1_0ListExportsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0ListGlobalTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0ListGlobalTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListGlobalTablesOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0ListGlobalTablesCommand = deserializeAws_json1_0ListGlobalTablesCommand;
  var deserializeAws_json1_0ListGlobalTablesCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0ListTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0ListTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTablesOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0ListTablesCommand = deserializeAws_json1_0ListTablesCommand;
  var deserializeAws_json1_0ListTablesCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0ListTagsOfResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0ListTagsOfResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTagsOfResourceOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0ListTagsOfResourceCommand = deserializeAws_json1_0ListTagsOfResourceCommand;
  var deserializeAws_json1_0ListTagsOfResourceCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0PutItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0PutItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0PutItemOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0PutItemCommand = deserializeAws_json1_0PutItemCommand;
  var deserializeAws_json1_0PutItemCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "ConditionalCheckFailedException":
      case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
        response = {
          ...await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ItemCollectionSizeLimitExceededException":
      case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
        response = {
          ...await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TransactionConflictException":
      case "com.amazonaws.dynamodb#TransactionConflictException":
        response = {
          ...await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0QueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0QueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0QueryOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0QueryCommand = deserializeAws_json1_0QueryCommand;
  var deserializeAws_json1_0QueryCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0RestoreTableFromBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0RestoreTableFromBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0RestoreTableFromBackupOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0RestoreTableFromBackupCommand = deserializeAws_json1_0RestoreTableFromBackupCommand;
  var deserializeAws_json1_0RestoreTableFromBackupCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "BackupInUseException":
      case "com.amazonaws.dynamodb#BackupInUseException":
        response = {
          ...await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "BackupNotFoundException":
      case "com.amazonaws.dynamodb#BackupNotFoundException":
        response = {
          ...await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableAlreadyExistsException":
      case "com.amazonaws.dynamodb#TableAlreadyExistsException":
        response = {
          ...await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableInUseException":
      case "com.amazonaws.dynamodb#TableInUseException":
        response = {
          ...await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0RestoreTableToPointInTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0RestoreTableToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0RestoreTableToPointInTimeOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0RestoreTableToPointInTimeCommand = deserializeAws_json1_0RestoreTableToPointInTimeCommand;
  var deserializeAws_json1_0RestoreTableToPointInTimeCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidRestoreTimeException":
      case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
        response = {
          ...await deserializeAws_json1_0InvalidRestoreTimeExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "PointInTimeRecoveryUnavailableException":
      case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
        response = {
          ...await deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableAlreadyExistsException":
      case "com.amazonaws.dynamodb#TableAlreadyExistsException":
        response = {
          ...await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableInUseException":
      case "com.amazonaws.dynamodb#TableInUseException":
        response = {
          ...await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableNotFoundException":
      case "com.amazonaws.dynamodb#TableNotFoundException":
        response = {
          ...await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0ScanCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0ScanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ScanOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0ScanCommand = deserializeAws_json1_0ScanCommand;
  var deserializeAws_json1_0ScanCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0TagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
      $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0TagResourceCommand = deserializeAws_json1_0TagResourceCommand;
  var deserializeAws_json1_0TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        response = {
          ...await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0TransactGetItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0TransactGetItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0TransactGetItemsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0TransactGetItemsCommand = deserializeAws_json1_0TransactGetItemsCommand;
  var deserializeAws_json1_0TransactGetItemsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TransactionCanceledException":
      case "com.amazonaws.dynamodb#TransactionCanceledException":
        response = {
          ...await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0TransactWriteItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0TransactWriteItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0TransactWriteItemsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0TransactWriteItemsCommand = deserializeAws_json1_0TransactWriteItemsCommand;
  var deserializeAws_json1_0TransactWriteItemsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "IdempotentParameterMismatchException":
      case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
        response = {
          ...await deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TransactionCanceledException":
      case "com.amazonaws.dynamodb#TransactionCanceledException":
        response = {
          ...await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TransactionInProgressException":
      case "com.amazonaws.dynamodb#TransactionInProgressException":
        response = {
          ...await deserializeAws_json1_0TransactionInProgressExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0UntagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
      $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0UntagResourceCommand = deserializeAws_json1_0UntagResourceCommand;
  var deserializeAws_json1_0UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        response = {
          ...await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0UpdateContinuousBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0UpdateContinuousBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateContinuousBackupsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0UpdateContinuousBackupsCommand = deserializeAws_json1_0UpdateContinuousBackupsCommand;
  var deserializeAws_json1_0UpdateContinuousBackupsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "ContinuousBackupsUnavailableException":
      case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
        response = {
          ...await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableNotFoundException":
      case "com.amazonaws.dynamodb#TableNotFoundException":
        response = {
          ...await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0UpdateContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0UpdateContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateContributorInsightsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0UpdateContributorInsightsCommand = deserializeAws_json1_0UpdateContributorInsightsCommand;
  var deserializeAws_json1_0UpdateContributorInsightsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0UpdateGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0UpdateGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateGlobalTableOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0UpdateGlobalTableCommand = deserializeAws_json1_0UpdateGlobalTableCommand;
  var deserializeAws_json1_0UpdateGlobalTableCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "GlobalTableNotFoundException":
      case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
        response = {
          ...await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ReplicaAlreadyExistsException":
      case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
        response = {
          ...await deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ReplicaNotFoundException":
      case "com.amazonaws.dynamodb#ReplicaNotFoundException":
        response = {
          ...await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TableNotFoundException":
      case "com.amazonaws.dynamodb#TableNotFoundException":
        response = {
          ...await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0UpdateGlobalTableSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0UpdateGlobalTableSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateGlobalTableSettingsOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0UpdateGlobalTableSettingsCommand = deserializeAws_json1_0UpdateGlobalTableSettingsCommand;
  var deserializeAws_json1_0UpdateGlobalTableSettingsCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "GlobalTableNotFoundException":
      case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
        response = {
          ...await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "IndexNotFoundException":
      case "com.amazonaws.dynamodb#IndexNotFoundException":
        response = {
          ...await deserializeAws_json1_0IndexNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ReplicaNotFoundException":
      case "com.amazonaws.dynamodb#ReplicaNotFoundException":
        response = {
          ...await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        response = {
          ...await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0UpdateItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0UpdateItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateItemOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0UpdateItemCommand = deserializeAws_json1_0UpdateItemCommand;
  var deserializeAws_json1_0UpdateItemCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "ConditionalCheckFailedException":
      case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
        response = {
          ...await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ItemCollectionSizeLimitExceededException":
      case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
        response = {
          ...await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        response = {
          ...await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        response = {
          ...await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "TransactionConflictException":
      case "com.amazonaws.dynamodb#TransactionConflictException":
        response = {
          ...await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0UpdateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0UpdateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateTableOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0UpdateTableCommand = deserializeAws_json1_0UpdateTableCommand;
  var deserializeAws_json1_0UpdateTableCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        response = {
          ...await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand = deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand;
  var deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        response = {
          ...await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0UpdateTimeToLiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return deserializeAws_json1_0UpdateTimeToLiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateTimeToLiveOutput(data, context);
    const response = {
      $metadata: deserializeMetadata(output),
      ...contents
    };
    return Promise.resolve(response);
  };
  exports2.deserializeAws_json1_0UpdateTimeToLiveCommand = deserializeAws_json1_0UpdateTimeToLiveCommand;
  var deserializeAws_json1_0UpdateTimeToLiveCommandError = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        response = {
          ...await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        response = {
          ...await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        response = {
          ...await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        response = {
          ...await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        response = {
          ...await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context),
          name: errorCode,
          $metadata: deserializeMetadata(output)
        };
        break;
      default:
        const parsedBody = parsedOutput.body;
        errorCode = parsedBody.code || parsedBody.Code || errorCode;
        response = {
          ...parsedBody,
          name: `${errorCode}`,
          message: parsedBody.message || parsedBody.Message || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
  };
  var deserializeAws_json1_0BackupInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0BackupInUseException(body, context);
    const contents = {
      name: "BackupInUseException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0BackupNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0BackupNotFoundException(body, context);
    const contents = {
      name: "BackupNotFoundException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0ConditionalCheckFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ConditionalCheckFailedException(body, context);
    const contents = {
      name: "ConditionalCheckFailedException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ContinuousBackupsUnavailableException(body, context);
    const contents = {
      name: "ContinuousBackupsUnavailableException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0DuplicateItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0DuplicateItemException(body, context);
    const contents = {
      name: "DuplicateItemException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0ExportConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExportConflictException(body, context);
    const contents = {
      name: "ExportConflictException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0ExportNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExportNotFoundException(body, context);
    const contents = {
      name: "ExportNotFoundException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0GlobalTableAlreadyExistsException(body, context);
    const contents = {
      name: "GlobalTableAlreadyExistsException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0GlobalTableNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0GlobalTableNotFoundException(body, context);
    const contents = {
      name: "GlobalTableNotFoundException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0IdempotentParameterMismatchException(body, context);
    const contents = {
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0IndexNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0IndexNotFoundException(body, context);
    const contents = {
      name: "IndexNotFoundException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InternalServerError(body, context);
    const contents = {
      name: "InternalServerError",
      $fault: "server",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0InvalidEndpointExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidEndpointException(body, context);
    const contents = {
      name: "InvalidEndpointException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0InvalidExportTimeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidExportTimeException(body, context);
    const contents = {
      name: "InvalidExportTimeException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0InvalidRestoreTimeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidRestoreTimeException(body, context);
    const contents = {
      name: "InvalidRestoreTimeException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ItemCollectionSizeLimitExceededException(body, context);
    const contents = {
      name: "ItemCollectionSizeLimitExceededException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededException(body, context);
    const contents = {
      name: "LimitExceededException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0PointInTimeRecoveryUnavailableException(body, context);
    const contents = {
      name: "PointInTimeRecoveryUnavailableException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ProvisionedThroughputExceededException(body, context);
    const contents = {
      name: "ProvisionedThroughputExceededException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ReplicaAlreadyExistsException(body, context);
    const contents = {
      name: "ReplicaAlreadyExistsException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0ReplicaNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ReplicaNotFoundException(body, context);
    const contents = {
      name: "ReplicaNotFoundException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0RequestLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0RequestLimitExceeded(body, context);
    const contents = {
      name: "RequestLimitExceeded",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceInUseException(body, context);
    const contents = {
      name: "ResourceInUseException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
    const contents = {
      name: "ResourceNotFoundException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0TableAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TableAlreadyExistsException(body, context);
    const contents = {
      name: "TableAlreadyExistsException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0TableInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TableInUseException(body, context);
    const contents = {
      name: "TableInUseException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0TableNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TableNotFoundException(body, context);
    const contents = {
      name: "TableNotFoundException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0TransactionCanceledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TransactionCanceledException(body, context);
    const contents = {
      name: "TransactionCanceledException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0TransactionConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TransactionConflictException(body, context);
    const contents = {
      name: "TransactionConflictException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var deserializeAws_json1_0TransactionInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TransactionInProgressException(body, context);
    const contents = {
      name: "TransactionInProgressException",
      $fault: "client",
      $metadata: deserializeMetadata(parsedOutput),
      ...deserialized
    };
    return contents;
  };
  var serializeAws_json1_0AttributeDefinition = (input, context) => {
    return {
      ...input.AttributeName !== void 0 && input.AttributeName !== null && {AttributeName: input.AttributeName},
      ...input.AttributeType !== void 0 && input.AttributeType !== null && {AttributeType: input.AttributeType}
    };
  };
  var serializeAws_json1_0AttributeDefinitions = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0AttributeDefinition(entry, context);
    });
  };
  var serializeAws_json1_0AttributeNameList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var serializeAws_json1_0AttributeUpdates = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_0AttributeValueUpdate(value, context)
      };
    }, {});
  };
  var serializeAws_json1_0AttributeValue = (input, context) => {
    return models_0_1.AttributeValue.visit(input, {
      B: (value) => ({B: context.base64Encoder(value)}),
      BOOL: (value) => ({BOOL: value}),
      BS: (value) => ({BS: serializeAws_json1_0BinarySetAttributeValue(value, context)}),
      L: (value) => ({L: serializeAws_json1_0ListAttributeValue(value, context)}),
      M: (value) => ({M: serializeAws_json1_0MapAttributeValue(value, context)}),
      N: (value) => ({N: value}),
      NS: (value) => ({NS: serializeAws_json1_0NumberSetAttributeValue(value, context)}),
      NULL: (value) => ({NULL: value}),
      S: (value) => ({S: value}),
      SS: (value) => ({SS: serializeAws_json1_0StringSetAttributeValue(value, context)}),
      _: (name, value) => ({name: value})
    });
  };
  var serializeAws_json1_0AttributeValueList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0AttributeValue(entry, context);
    });
  };
  var serializeAws_json1_0AttributeValueUpdate = (input, context) => {
    return {
      ...input.Action !== void 0 && input.Action !== null && {Action: input.Action},
      ...input.Value !== void 0 && input.Value !== null && {Value: serializeAws_json1_0AttributeValue(input.Value, context)}
    };
  };
  var serializeAws_json1_0AutoScalingPolicyUpdate = (input, context) => {
    return {
      ...input.PolicyName !== void 0 && input.PolicyName !== null && {PolicyName: input.PolicyName},
      ...input.TargetTrackingScalingPolicyConfiguration !== void 0 && input.TargetTrackingScalingPolicyConfiguration !== null && {
        TargetTrackingScalingPolicyConfiguration: serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(input.TargetTrackingScalingPolicyConfiguration, context)
      }
    };
  };
  var serializeAws_json1_0AutoScalingSettingsUpdate = (input, context) => {
    return {
      ...input.AutoScalingDisabled !== void 0 && input.AutoScalingDisabled !== null && {AutoScalingDisabled: input.AutoScalingDisabled},
      ...input.AutoScalingRoleArn !== void 0 && input.AutoScalingRoleArn !== null && {AutoScalingRoleArn: input.AutoScalingRoleArn},
      ...input.MaximumUnits !== void 0 && input.MaximumUnits !== null && {MaximumUnits: input.MaximumUnits},
      ...input.MinimumUnits !== void 0 && input.MinimumUnits !== null && {MinimumUnits: input.MinimumUnits},
      ...input.ScalingPolicyUpdate !== void 0 && input.ScalingPolicyUpdate !== null && {
        ScalingPolicyUpdate: serializeAws_json1_0AutoScalingPolicyUpdate(input.ScalingPolicyUpdate, context)
      }
    };
  };
  var serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (input, context) => {
    return {
      ...input.DisableScaleIn !== void 0 && input.DisableScaleIn !== null && {DisableScaleIn: input.DisableScaleIn},
      ...input.ScaleInCooldown !== void 0 && input.ScaleInCooldown !== null && {ScaleInCooldown: input.ScaleInCooldown},
      ...input.ScaleOutCooldown !== void 0 && input.ScaleOutCooldown !== null && {ScaleOutCooldown: input.ScaleOutCooldown},
      ...input.TargetValue !== void 0 && input.TargetValue !== null && {TargetValue: input.TargetValue}
    };
  };
  var serializeAws_json1_0BatchExecuteStatementInput = (input, context) => {
    return {
      ...input.Statements !== void 0 && input.Statements !== null && {Statements: serializeAws_json1_0PartiQLBatchRequest(input.Statements, context)}
    };
  };
  var serializeAws_json1_0BatchGetItemInput = (input, context) => {
    return {
      ...input.RequestItems !== void 0 && input.RequestItems !== null && {
        RequestItems: serializeAws_json1_0BatchGetRequestMap(input.RequestItems, context)
      },
      ...input.ReturnConsumedCapacity !== void 0 && input.ReturnConsumedCapacity !== null && {ReturnConsumedCapacity: input.ReturnConsumedCapacity}
    };
  };
  var serializeAws_json1_0BatchGetRequestMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_0KeysAndAttributes(value, context)
      };
    }, {});
  };
  var serializeAws_json1_0BatchStatementRequest = (input, context) => {
    return {
      ...input.ConsistentRead !== void 0 && input.ConsistentRead !== null && {ConsistentRead: input.ConsistentRead},
      ...input.Parameters !== void 0 && input.Parameters !== null && {
        Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context)
      },
      ...input.Statement !== void 0 && input.Statement !== null && {Statement: input.Statement}
    };
  };
  var serializeAws_json1_0BatchWriteItemInput = (input, context) => {
    return {
      ...input.RequestItems !== void 0 && input.RequestItems !== null && {
        RequestItems: serializeAws_json1_0BatchWriteItemRequestMap(input.RequestItems, context)
      },
      ...input.ReturnConsumedCapacity !== void 0 && input.ReturnConsumedCapacity !== null && {ReturnConsumedCapacity: input.ReturnConsumedCapacity},
      ...input.ReturnItemCollectionMetrics !== void 0 && input.ReturnItemCollectionMetrics !== null && {ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics}
    };
  };
  var serializeAws_json1_0BatchWriteItemRequestMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_0WriteRequests(value, context)
      };
    }, {});
  };
  var serializeAws_json1_0BinarySetAttributeValue = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return context.base64Encoder(entry);
    });
  };
  var serializeAws_json1_0Condition = (input, context) => {
    return {
      ...input.AttributeValueList !== void 0 && input.AttributeValueList !== null && {
        AttributeValueList: serializeAws_json1_0AttributeValueList(input.AttributeValueList, context)
      },
      ...input.ComparisonOperator !== void 0 && input.ComparisonOperator !== null && {ComparisonOperator: input.ComparisonOperator}
    };
  };
  var serializeAws_json1_0ConditionCheck = (input, context) => {
    return {
      ...input.ConditionExpression !== void 0 && input.ConditionExpression !== null && {ConditionExpression: input.ConditionExpression},
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.ExpressionAttributeValues !== void 0 && input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context)
      },
      ...input.Key !== void 0 && input.Key !== null && {Key: serializeAws_json1_0Key(input.Key, context)},
      ...input.ReturnValuesOnConditionCheckFailure !== void 0 && input.ReturnValuesOnConditionCheckFailure !== null && {
        ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure
      },
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0CreateBackupInput = (input, context) => {
    return {
      ...input.BackupName !== void 0 && input.BackupName !== null && {BackupName: input.BackupName},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0CreateGlobalSecondaryIndexAction = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.KeySchema !== void 0 && input.KeySchema !== null && {KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context)},
      ...input.Projection !== void 0 && input.Projection !== null && {Projection: serializeAws_json1_0Projection(input.Projection, context)},
      ...input.ProvisionedThroughput !== void 0 && input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context)
      }
    };
  };
  var serializeAws_json1_0CreateGlobalTableInput = (input, context) => {
    return {
      ...input.GlobalTableName !== void 0 && input.GlobalTableName !== null && {GlobalTableName: input.GlobalTableName},
      ...input.ReplicationGroup !== void 0 && input.ReplicationGroup !== null && {
        ReplicationGroup: serializeAws_json1_0ReplicaList(input.ReplicationGroup, context)
      }
    };
  };
  var serializeAws_json1_0CreateReplicaAction = (input, context) => {
    return {
      ...input.RegionName !== void 0 && input.RegionName !== null && {RegionName: input.RegionName}
    };
  };
  var serializeAws_json1_0CreateReplicationGroupMemberAction = (input, context) => {
    return {
      ...input.GlobalSecondaryIndexes !== void 0 && input.GlobalSecondaryIndexes !== null && {
        GlobalSecondaryIndexes: serializeAws_json1_0ReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context)
      },
      ...input.KMSMasterKeyId !== void 0 && input.KMSMasterKeyId !== null && {KMSMasterKeyId: input.KMSMasterKeyId},
      ...input.ProvisionedThroughputOverride !== void 0 && input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context)
      },
      ...input.RegionName !== void 0 && input.RegionName !== null && {RegionName: input.RegionName}
    };
  };
  var serializeAws_json1_0CreateTableInput = (input, context) => {
    return {
      ...input.AttributeDefinitions !== void 0 && input.AttributeDefinitions !== null && {
        AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context)
      },
      ...input.BillingMode !== void 0 && input.BillingMode !== null && {BillingMode: input.BillingMode},
      ...input.GlobalSecondaryIndexes !== void 0 && input.GlobalSecondaryIndexes !== null && {
        GlobalSecondaryIndexes: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context)
      },
      ...input.KeySchema !== void 0 && input.KeySchema !== null && {KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context)},
      ...input.LocalSecondaryIndexes !== void 0 && input.LocalSecondaryIndexes !== null && {
        LocalSecondaryIndexes: serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexes, context)
      },
      ...input.ProvisionedThroughput !== void 0 && input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context)
      },
      ...input.SSESpecification !== void 0 && input.SSESpecification !== null && {
        SSESpecification: serializeAws_json1_0SSESpecification(input.SSESpecification, context)
      },
      ...input.StreamSpecification !== void 0 && input.StreamSpecification !== null && {
        StreamSpecification: serializeAws_json1_0StreamSpecification(input.StreamSpecification, context)
      },
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName},
      ...input.Tags !== void 0 && input.Tags !== null && {Tags: serializeAws_json1_0TagList(input.Tags, context)}
    };
  };
  var serializeAws_json1_0Delete = (input, context) => {
    return {
      ...input.ConditionExpression !== void 0 && input.ConditionExpression !== null && {ConditionExpression: input.ConditionExpression},
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.ExpressionAttributeValues !== void 0 && input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context)
      },
      ...input.Key !== void 0 && input.Key !== null && {Key: serializeAws_json1_0Key(input.Key, context)},
      ...input.ReturnValuesOnConditionCheckFailure !== void 0 && input.ReturnValuesOnConditionCheckFailure !== null && {
        ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure
      },
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0DeleteBackupInput = (input, context) => {
    return {
      ...input.BackupArn !== void 0 && input.BackupArn !== null && {BackupArn: input.BackupArn}
    };
  };
  var serializeAws_json1_0DeleteGlobalSecondaryIndexAction = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName}
    };
  };
  var serializeAws_json1_0DeleteItemInput = (input, context) => {
    return {
      ...input.ConditionExpression !== void 0 && input.ConditionExpression !== null && {ConditionExpression: input.ConditionExpression},
      ...input.ConditionalOperator !== void 0 && input.ConditionalOperator !== null && {ConditionalOperator: input.ConditionalOperator},
      ...input.Expected !== void 0 && input.Expected !== null && {Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context)},
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.ExpressionAttributeValues !== void 0 && input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context)
      },
      ...input.Key !== void 0 && input.Key !== null && {Key: serializeAws_json1_0Key(input.Key, context)},
      ...input.ReturnConsumedCapacity !== void 0 && input.ReturnConsumedCapacity !== null && {ReturnConsumedCapacity: input.ReturnConsumedCapacity},
      ...input.ReturnItemCollectionMetrics !== void 0 && input.ReturnItemCollectionMetrics !== null && {ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics},
      ...input.ReturnValues !== void 0 && input.ReturnValues !== null && {ReturnValues: input.ReturnValues},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0DeleteReplicaAction = (input, context) => {
    return {
      ...input.RegionName !== void 0 && input.RegionName !== null && {RegionName: input.RegionName}
    };
  };
  var serializeAws_json1_0DeleteReplicationGroupMemberAction = (input, context) => {
    return {
      ...input.RegionName !== void 0 && input.RegionName !== null && {RegionName: input.RegionName}
    };
  };
  var serializeAws_json1_0DeleteRequest = (input, context) => {
    return {
      ...input.Key !== void 0 && input.Key !== null && {Key: serializeAws_json1_0Key(input.Key, context)}
    };
  };
  var serializeAws_json1_0DeleteTableInput = (input, context) => {
    return {
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0DescribeBackupInput = (input, context) => {
    return {
      ...input.BackupArn !== void 0 && input.BackupArn !== null && {BackupArn: input.BackupArn}
    };
  };
  var serializeAws_json1_0DescribeContinuousBackupsInput = (input, context) => {
    return {
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0DescribeContributorInsightsInput = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0DescribeEndpointsRequest = (input, context) => {
    return {};
  };
  var serializeAws_json1_0DescribeExportInput = (input, context) => {
    return {
      ...input.ExportArn !== void 0 && input.ExportArn !== null && {ExportArn: input.ExportArn}
    };
  };
  var serializeAws_json1_0DescribeGlobalTableInput = (input, context) => {
    return {
      ...input.GlobalTableName !== void 0 && input.GlobalTableName !== null && {GlobalTableName: input.GlobalTableName}
    };
  };
  var serializeAws_json1_0DescribeGlobalTableSettingsInput = (input, context) => {
    return {
      ...input.GlobalTableName !== void 0 && input.GlobalTableName !== null && {GlobalTableName: input.GlobalTableName}
    };
  };
  var serializeAws_json1_0DescribeKinesisStreamingDestinationInput = (input, context) => {
    return {
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0DescribeLimitsInput = (input, context) => {
    return {};
  };
  var serializeAws_json1_0DescribeTableInput = (input, context) => {
    return {
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0DescribeTableReplicaAutoScalingInput = (input, context) => {
    return {
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0DescribeTimeToLiveInput = (input, context) => {
    return {
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0ExecuteStatementInput = (input, context) => {
    return {
      ...input.ConsistentRead !== void 0 && input.ConsistentRead !== null && {ConsistentRead: input.ConsistentRead},
      ...input.NextToken !== void 0 && input.NextToken !== null && {NextToken: input.NextToken},
      ...input.Parameters !== void 0 && input.Parameters !== null && {
        Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context)
      },
      ...input.Statement !== void 0 && input.Statement !== null && {Statement: input.Statement}
    };
  };
  var serializeAws_json1_0ExecuteTransactionInput = (input, context) => {
    var _a;
    return {
      ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
      ...input.TransactStatements !== void 0 && input.TransactStatements !== null && {
        TransactStatements: serializeAws_json1_0ParameterizedStatements(input.TransactStatements, context)
      }
    };
  };
  var serializeAws_json1_0ExpectedAttributeMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_0ExpectedAttributeValue(value, context)
      };
    }, {});
  };
  var serializeAws_json1_0ExpectedAttributeValue = (input, context) => {
    return {
      ...input.AttributeValueList !== void 0 && input.AttributeValueList !== null && {
        AttributeValueList: serializeAws_json1_0AttributeValueList(input.AttributeValueList, context)
      },
      ...input.ComparisonOperator !== void 0 && input.ComparisonOperator !== null && {ComparisonOperator: input.ComparisonOperator},
      ...input.Exists !== void 0 && input.Exists !== null && {Exists: input.Exists},
      ...input.Value !== void 0 && input.Value !== null && {Value: serializeAws_json1_0AttributeValue(input.Value, context)}
    };
  };
  var serializeAws_json1_0ExportTableToPointInTimeInput = (input, context) => {
    var _a;
    return {
      ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
      ...input.ExportFormat !== void 0 && input.ExportFormat !== null && {ExportFormat: input.ExportFormat},
      ...input.ExportTime !== void 0 && input.ExportTime !== null && {ExportTime: Math.round(input.ExportTime.getTime() / 1e3)},
      ...input.S3Bucket !== void 0 && input.S3Bucket !== null && {S3Bucket: input.S3Bucket},
      ...input.S3BucketOwner !== void 0 && input.S3BucketOwner !== null && {S3BucketOwner: input.S3BucketOwner},
      ...input.S3Prefix !== void 0 && input.S3Prefix !== null && {S3Prefix: input.S3Prefix},
      ...input.S3SseAlgorithm !== void 0 && input.S3SseAlgorithm !== null && {S3SseAlgorithm: input.S3SseAlgorithm},
      ...input.S3SseKmsKeyId !== void 0 && input.S3SseKmsKeyId !== null && {S3SseKmsKeyId: input.S3SseKmsKeyId},
      ...input.TableArn !== void 0 && input.TableArn !== null && {TableArn: input.TableArn}
    };
  };
  var serializeAws_json1_0ExpressionAttributeNameMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: value
      };
    }, {});
  };
  var serializeAws_json1_0ExpressionAttributeValueMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_0AttributeValue(value, context)
      };
    }, {});
  };
  var serializeAws_json1_0FilterConditionMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_0Condition(value, context)
      };
    }, {});
  };
  var serializeAws_json1_0Get = (input, context) => {
    return {
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.Key !== void 0 && input.Key !== null && {Key: serializeAws_json1_0Key(input.Key, context)},
      ...input.ProjectionExpression !== void 0 && input.ProjectionExpression !== null && {ProjectionExpression: input.ProjectionExpression},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0GetItemInput = (input, context) => {
    return {
      ...input.AttributesToGet !== void 0 && input.AttributesToGet !== null && {
        AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context)
      },
      ...input.ConsistentRead !== void 0 && input.ConsistentRead !== null && {ConsistentRead: input.ConsistentRead},
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.Key !== void 0 && input.Key !== null && {Key: serializeAws_json1_0Key(input.Key, context)},
      ...input.ProjectionExpression !== void 0 && input.ProjectionExpression !== null && {ProjectionExpression: input.ProjectionExpression},
      ...input.ReturnConsumedCapacity !== void 0 && input.ReturnConsumedCapacity !== null && {ReturnConsumedCapacity: input.ReturnConsumedCapacity},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0GlobalSecondaryIndex = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.KeySchema !== void 0 && input.KeySchema !== null && {KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context)},
      ...input.Projection !== void 0 && input.Projection !== null && {Projection: serializeAws_json1_0Projection(input.Projection, context)},
      ...input.ProvisionedThroughput !== void 0 && input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context)
      }
    };
  };
  var serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.ProvisionedWriteCapacityAutoScalingUpdate !== void 0 && input.ProvisionedWriteCapacityAutoScalingUpdate !== null && {
        ProvisionedWriteCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingUpdate, context)
      }
    };
  };
  var serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
  };
  var serializeAws_json1_0GlobalSecondaryIndexList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0GlobalSecondaryIndex(entry, context);
    });
  };
  var serializeAws_json1_0GlobalSecondaryIndexUpdate = (input, context) => {
    return {
      ...input.Create !== void 0 && input.Create !== null && {Create: serializeAws_json1_0CreateGlobalSecondaryIndexAction(input.Create, context)},
      ...input.Delete !== void 0 && input.Delete !== null && {Delete: serializeAws_json1_0DeleteGlobalSecondaryIndexAction(input.Delete, context)},
      ...input.Update !== void 0 && input.Update !== null && {Update: serializeAws_json1_0UpdateGlobalSecondaryIndexAction(input.Update, context)}
    };
  };
  var serializeAws_json1_0GlobalSecondaryIndexUpdateList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0GlobalSecondaryIndexUpdate(entry, context);
    });
  };
  var serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.ProvisionedWriteCapacityAutoScalingSettingsUpdate !== void 0 && input.ProvisionedWriteCapacityAutoScalingSettingsUpdate !== null && {
        ProvisionedWriteCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingSettingsUpdate, context)
      },
      ...input.ProvisionedWriteCapacityUnits !== void 0 && input.ProvisionedWriteCapacityUnits !== null && {
        ProvisionedWriteCapacityUnits: input.ProvisionedWriteCapacityUnits
      }
    };
  };
  var serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
  };
  var serializeAws_json1_0Key = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_0AttributeValue(value, context)
      };
    }, {});
  };
  var serializeAws_json1_0KeyConditions = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_0Condition(value, context)
      };
    }, {});
  };
  var serializeAws_json1_0KeyList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0Key(entry, context);
    });
  };
  var serializeAws_json1_0KeysAndAttributes = (input, context) => {
    return {
      ...input.AttributesToGet !== void 0 && input.AttributesToGet !== null && {
        AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context)
      },
      ...input.ConsistentRead !== void 0 && input.ConsistentRead !== null && {ConsistentRead: input.ConsistentRead},
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.Keys !== void 0 && input.Keys !== null && {Keys: serializeAws_json1_0KeyList(input.Keys, context)},
      ...input.ProjectionExpression !== void 0 && input.ProjectionExpression !== null && {ProjectionExpression: input.ProjectionExpression}
    };
  };
  var serializeAws_json1_0KeySchema = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0KeySchemaElement(entry, context);
    });
  };
  var serializeAws_json1_0KeySchemaElement = (input, context) => {
    return {
      ...input.AttributeName !== void 0 && input.AttributeName !== null && {AttributeName: input.AttributeName},
      ...input.KeyType !== void 0 && input.KeyType !== null && {KeyType: input.KeyType}
    };
  };
  var serializeAws_json1_0KinesisStreamingDestinationInput = (input, context) => {
    return {
      ...input.StreamArn !== void 0 && input.StreamArn !== null && {StreamArn: input.StreamArn},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0ListAttributeValue = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0AttributeValue(entry, context);
    });
  };
  var serializeAws_json1_0ListBackupsInput = (input, context) => {
    return {
      ...input.BackupType !== void 0 && input.BackupType !== null && {BackupType: input.BackupType},
      ...input.ExclusiveStartBackupArn !== void 0 && input.ExclusiveStartBackupArn !== null && {ExclusiveStartBackupArn: input.ExclusiveStartBackupArn},
      ...input.Limit !== void 0 && input.Limit !== null && {Limit: input.Limit},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName},
      ...input.TimeRangeLowerBound !== void 0 && input.TimeRangeLowerBound !== null && {
        TimeRangeLowerBound: Math.round(input.TimeRangeLowerBound.getTime() / 1e3)
      },
      ...input.TimeRangeUpperBound !== void 0 && input.TimeRangeUpperBound !== null && {
        TimeRangeUpperBound: Math.round(input.TimeRangeUpperBound.getTime() / 1e3)
      }
    };
  };
  var serializeAws_json1_0ListContributorInsightsInput = (input, context) => {
    return {
      ...input.MaxResults !== void 0 && input.MaxResults !== null && {MaxResults: input.MaxResults},
      ...input.NextToken !== void 0 && input.NextToken !== null && {NextToken: input.NextToken},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0ListExportsInput = (input, context) => {
    return {
      ...input.MaxResults !== void 0 && input.MaxResults !== null && {MaxResults: input.MaxResults},
      ...input.NextToken !== void 0 && input.NextToken !== null && {NextToken: input.NextToken},
      ...input.TableArn !== void 0 && input.TableArn !== null && {TableArn: input.TableArn}
    };
  };
  var serializeAws_json1_0ListGlobalTablesInput = (input, context) => {
    return {
      ...input.ExclusiveStartGlobalTableName !== void 0 && input.ExclusiveStartGlobalTableName !== null && {
        ExclusiveStartGlobalTableName: input.ExclusiveStartGlobalTableName
      },
      ...input.Limit !== void 0 && input.Limit !== null && {Limit: input.Limit},
      ...input.RegionName !== void 0 && input.RegionName !== null && {RegionName: input.RegionName}
    };
  };
  var serializeAws_json1_0ListTablesInput = (input, context) => {
    return {
      ...input.ExclusiveStartTableName !== void 0 && input.ExclusiveStartTableName !== null && {ExclusiveStartTableName: input.ExclusiveStartTableName},
      ...input.Limit !== void 0 && input.Limit !== null && {Limit: input.Limit}
    };
  };
  var serializeAws_json1_0ListTagsOfResourceInput = (input, context) => {
    return {
      ...input.NextToken !== void 0 && input.NextToken !== null && {NextToken: input.NextToken},
      ...input.ResourceArn !== void 0 && input.ResourceArn !== null && {ResourceArn: input.ResourceArn}
    };
  };
  var serializeAws_json1_0LocalSecondaryIndex = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.KeySchema !== void 0 && input.KeySchema !== null && {KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context)},
      ...input.Projection !== void 0 && input.Projection !== null && {Projection: serializeAws_json1_0Projection(input.Projection, context)}
    };
  };
  var serializeAws_json1_0LocalSecondaryIndexList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0LocalSecondaryIndex(entry, context);
    });
  };
  var serializeAws_json1_0MapAttributeValue = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_0AttributeValue(value, context)
      };
    }, {});
  };
  var serializeAws_json1_0NonKeyAttributeNameList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var serializeAws_json1_0NumberSetAttributeValue = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var serializeAws_json1_0ParameterizedStatement = (input, context) => {
    return {
      ...input.Parameters !== void 0 && input.Parameters !== null && {
        Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context)
      },
      ...input.Statement !== void 0 && input.Statement !== null && {Statement: input.Statement}
    };
  };
  var serializeAws_json1_0ParameterizedStatements = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0ParameterizedStatement(entry, context);
    });
  };
  var serializeAws_json1_0PartiQLBatchRequest = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0BatchStatementRequest(entry, context);
    });
  };
  var serializeAws_json1_0PointInTimeRecoverySpecification = (input, context) => {
    return {
      ...input.PointInTimeRecoveryEnabled !== void 0 && input.PointInTimeRecoveryEnabled !== null && {PointInTimeRecoveryEnabled: input.PointInTimeRecoveryEnabled}
    };
  };
  var serializeAws_json1_0PreparedStatementParameters = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0AttributeValue(entry, context);
    });
  };
  var serializeAws_json1_0Projection = (input, context) => {
    return {
      ...input.NonKeyAttributes !== void 0 && input.NonKeyAttributes !== null && {
        NonKeyAttributes: serializeAws_json1_0NonKeyAttributeNameList(input.NonKeyAttributes, context)
      },
      ...input.ProjectionType !== void 0 && input.ProjectionType !== null && {ProjectionType: input.ProjectionType}
    };
  };
  var serializeAws_json1_0ProvisionedThroughput = (input, context) => {
    return {
      ...input.ReadCapacityUnits !== void 0 && input.ReadCapacityUnits !== null && {ReadCapacityUnits: input.ReadCapacityUnits},
      ...input.WriteCapacityUnits !== void 0 && input.WriteCapacityUnits !== null && {WriteCapacityUnits: input.WriteCapacityUnits}
    };
  };
  var serializeAws_json1_0ProvisionedThroughputOverride = (input, context) => {
    return {
      ...input.ReadCapacityUnits !== void 0 && input.ReadCapacityUnits !== null && {ReadCapacityUnits: input.ReadCapacityUnits}
    };
  };
  var serializeAws_json1_0Put = (input, context) => {
    return {
      ...input.ConditionExpression !== void 0 && input.ConditionExpression !== null && {ConditionExpression: input.ConditionExpression},
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.ExpressionAttributeValues !== void 0 && input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context)
      },
      ...input.Item !== void 0 && input.Item !== null && {Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context)},
      ...input.ReturnValuesOnConditionCheckFailure !== void 0 && input.ReturnValuesOnConditionCheckFailure !== null && {
        ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure
      },
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0PutItemInput = (input, context) => {
    return {
      ...input.ConditionExpression !== void 0 && input.ConditionExpression !== null && {ConditionExpression: input.ConditionExpression},
      ...input.ConditionalOperator !== void 0 && input.ConditionalOperator !== null && {ConditionalOperator: input.ConditionalOperator},
      ...input.Expected !== void 0 && input.Expected !== null && {Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context)},
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.ExpressionAttributeValues !== void 0 && input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context)
      },
      ...input.Item !== void 0 && input.Item !== null && {Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context)},
      ...input.ReturnConsumedCapacity !== void 0 && input.ReturnConsumedCapacity !== null && {ReturnConsumedCapacity: input.ReturnConsumedCapacity},
      ...input.ReturnItemCollectionMetrics !== void 0 && input.ReturnItemCollectionMetrics !== null && {ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics},
      ...input.ReturnValues !== void 0 && input.ReturnValues !== null && {ReturnValues: input.ReturnValues},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0PutItemInputAttributeMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_0AttributeValue(value, context)
      };
    }, {});
  };
  var serializeAws_json1_0PutRequest = (input, context) => {
    return {
      ...input.Item !== void 0 && input.Item !== null && {Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context)}
    };
  };
  var serializeAws_json1_0QueryInput = (input, context) => {
    return {
      ...input.AttributesToGet !== void 0 && input.AttributesToGet !== null && {
        AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context)
      },
      ...input.ConditionalOperator !== void 0 && input.ConditionalOperator !== null && {ConditionalOperator: input.ConditionalOperator},
      ...input.ConsistentRead !== void 0 && input.ConsistentRead !== null && {ConsistentRead: input.ConsistentRead},
      ...input.ExclusiveStartKey !== void 0 && input.ExclusiveStartKey !== null && {
        ExclusiveStartKey: serializeAws_json1_0Key(input.ExclusiveStartKey, context)
      },
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.ExpressionAttributeValues !== void 0 && input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context)
      },
      ...input.FilterExpression !== void 0 && input.FilterExpression !== null && {FilterExpression: input.FilterExpression},
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.KeyConditionExpression !== void 0 && input.KeyConditionExpression !== null && {KeyConditionExpression: input.KeyConditionExpression},
      ...input.KeyConditions !== void 0 && input.KeyConditions !== null && {
        KeyConditions: serializeAws_json1_0KeyConditions(input.KeyConditions, context)
      },
      ...input.Limit !== void 0 && input.Limit !== null && {Limit: input.Limit},
      ...input.ProjectionExpression !== void 0 && input.ProjectionExpression !== null && {ProjectionExpression: input.ProjectionExpression},
      ...input.QueryFilter !== void 0 && input.QueryFilter !== null && {
        QueryFilter: serializeAws_json1_0FilterConditionMap(input.QueryFilter, context)
      },
      ...input.ReturnConsumedCapacity !== void 0 && input.ReturnConsumedCapacity !== null && {ReturnConsumedCapacity: input.ReturnConsumedCapacity},
      ...input.ScanIndexForward !== void 0 && input.ScanIndexForward !== null && {ScanIndexForward: input.ScanIndexForward},
      ...input.Select !== void 0 && input.Select !== null && {Select: input.Select},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0Replica = (input, context) => {
    return {
      ...input.RegionName !== void 0 && input.RegionName !== null && {RegionName: input.RegionName}
    };
  };
  var serializeAws_json1_0ReplicaAutoScalingUpdate = (input, context) => {
    return {
      ...input.RegionName !== void 0 && input.RegionName !== null && {RegionName: input.RegionName},
      ...input.ReplicaGlobalSecondaryIndexUpdates !== void 0 && input.ReplicaGlobalSecondaryIndexUpdates !== null && {
        ReplicaGlobalSecondaryIndexUpdates: serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList(input.ReplicaGlobalSecondaryIndexUpdates, context)
      },
      ...input.ReplicaProvisionedReadCapacityAutoScalingUpdate !== void 0 && input.ReplicaProvisionedReadCapacityAutoScalingUpdate !== null && {
        ReplicaProvisionedReadCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ReplicaProvisionedReadCapacityAutoScalingUpdate, context)
      }
    };
  };
  var serializeAws_json1_0ReplicaAutoScalingUpdateList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0ReplicaAutoScalingUpdate(entry, context);
    });
  };
  var serializeAws_json1_0ReplicaGlobalSecondaryIndex = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.ProvisionedThroughputOverride !== void 0 && input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context)
      }
    };
  };
  var serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.ProvisionedReadCapacityAutoScalingUpdate !== void 0 && input.ProvisionedReadCapacityAutoScalingUpdate !== null && {
        ProvisionedReadCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedReadCapacityAutoScalingUpdate, context)
      }
    };
  };
  var serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
  };
  var serializeAws_json1_0ReplicaGlobalSecondaryIndexList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0ReplicaGlobalSecondaryIndex(entry, context);
    });
  };
  var serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.ProvisionedReadCapacityAutoScalingSettingsUpdate !== void 0 && input.ProvisionedReadCapacityAutoScalingSettingsUpdate !== null && {
        ProvisionedReadCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedReadCapacityAutoScalingSettingsUpdate, context)
      },
      ...input.ProvisionedReadCapacityUnits !== void 0 && input.ProvisionedReadCapacityUnits !== null && {
        ProvisionedReadCapacityUnits: input.ProvisionedReadCapacityUnits
      }
    };
  };
  var serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
  };
  var serializeAws_json1_0ReplicaList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0Replica(entry, context);
    });
  };
  var serializeAws_json1_0ReplicaSettingsUpdate = (input, context) => {
    return {
      ...input.RegionName !== void 0 && input.RegionName !== null && {RegionName: input.RegionName},
      ...input.ReplicaGlobalSecondaryIndexSettingsUpdate !== void 0 && input.ReplicaGlobalSecondaryIndexSettingsUpdate !== null && {
        ReplicaGlobalSecondaryIndexSettingsUpdate: serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList(input.ReplicaGlobalSecondaryIndexSettingsUpdate, context)
      },
      ...input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate !== void 0 && input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate !== null && {
        ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate, context)
      },
      ...input.ReplicaProvisionedReadCapacityUnits !== void 0 && input.ReplicaProvisionedReadCapacityUnits !== null && {
        ReplicaProvisionedReadCapacityUnits: input.ReplicaProvisionedReadCapacityUnits
      }
    };
  };
  var serializeAws_json1_0ReplicaSettingsUpdateList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0ReplicaSettingsUpdate(entry, context);
    });
  };
  var serializeAws_json1_0ReplicationGroupUpdate = (input, context) => {
    return {
      ...input.Create !== void 0 && input.Create !== null && {
        Create: serializeAws_json1_0CreateReplicationGroupMemberAction(input.Create, context)
      },
      ...input.Delete !== void 0 && input.Delete !== null && {
        Delete: serializeAws_json1_0DeleteReplicationGroupMemberAction(input.Delete, context)
      },
      ...input.Update !== void 0 && input.Update !== null && {
        Update: serializeAws_json1_0UpdateReplicationGroupMemberAction(input.Update, context)
      }
    };
  };
  var serializeAws_json1_0ReplicationGroupUpdateList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0ReplicationGroupUpdate(entry, context);
    });
  };
  var serializeAws_json1_0ReplicaUpdate = (input, context) => {
    return {
      ...input.Create !== void 0 && input.Create !== null && {Create: serializeAws_json1_0CreateReplicaAction(input.Create, context)},
      ...input.Delete !== void 0 && input.Delete !== null && {Delete: serializeAws_json1_0DeleteReplicaAction(input.Delete, context)}
    };
  };
  var serializeAws_json1_0ReplicaUpdateList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0ReplicaUpdate(entry, context);
    });
  };
  var serializeAws_json1_0RestoreTableFromBackupInput = (input, context) => {
    return {
      ...input.BackupArn !== void 0 && input.BackupArn !== null && {BackupArn: input.BackupArn},
      ...input.BillingModeOverride !== void 0 && input.BillingModeOverride !== null && {BillingModeOverride: input.BillingModeOverride},
      ...input.GlobalSecondaryIndexOverride !== void 0 && input.GlobalSecondaryIndexOverride !== null && {
        GlobalSecondaryIndexOverride: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexOverride, context)
      },
      ...input.LocalSecondaryIndexOverride !== void 0 && input.LocalSecondaryIndexOverride !== null && {
        LocalSecondaryIndexOverride: serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexOverride, context)
      },
      ...input.ProvisionedThroughputOverride !== void 0 && input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughputOverride, context)
      },
      ...input.SSESpecificationOverride !== void 0 && input.SSESpecificationOverride !== null && {
        SSESpecificationOverride: serializeAws_json1_0SSESpecification(input.SSESpecificationOverride, context)
      },
      ...input.TargetTableName !== void 0 && input.TargetTableName !== null && {TargetTableName: input.TargetTableName}
    };
  };
  var serializeAws_json1_0RestoreTableToPointInTimeInput = (input, context) => {
    return {
      ...input.BillingModeOverride !== void 0 && input.BillingModeOverride !== null && {BillingModeOverride: input.BillingModeOverride},
      ...input.GlobalSecondaryIndexOverride !== void 0 && input.GlobalSecondaryIndexOverride !== null && {
        GlobalSecondaryIndexOverride: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexOverride, context)
      },
      ...input.LocalSecondaryIndexOverride !== void 0 && input.LocalSecondaryIndexOverride !== null && {
        LocalSecondaryIndexOverride: serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexOverride, context)
      },
      ...input.ProvisionedThroughputOverride !== void 0 && input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughputOverride, context)
      },
      ...input.RestoreDateTime !== void 0 && input.RestoreDateTime !== null && {RestoreDateTime: Math.round(input.RestoreDateTime.getTime() / 1e3)},
      ...input.SSESpecificationOverride !== void 0 && input.SSESpecificationOverride !== null && {
        SSESpecificationOverride: serializeAws_json1_0SSESpecification(input.SSESpecificationOverride, context)
      },
      ...input.SourceTableArn !== void 0 && input.SourceTableArn !== null && {SourceTableArn: input.SourceTableArn},
      ...input.SourceTableName !== void 0 && input.SourceTableName !== null && {SourceTableName: input.SourceTableName},
      ...input.TargetTableName !== void 0 && input.TargetTableName !== null && {TargetTableName: input.TargetTableName},
      ...input.UseLatestRestorableTime !== void 0 && input.UseLatestRestorableTime !== null && {UseLatestRestorableTime: input.UseLatestRestorableTime}
    };
  };
  var serializeAws_json1_0ScanInput = (input, context) => {
    return {
      ...input.AttributesToGet !== void 0 && input.AttributesToGet !== null && {
        AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context)
      },
      ...input.ConditionalOperator !== void 0 && input.ConditionalOperator !== null && {ConditionalOperator: input.ConditionalOperator},
      ...input.ConsistentRead !== void 0 && input.ConsistentRead !== null && {ConsistentRead: input.ConsistentRead},
      ...input.ExclusiveStartKey !== void 0 && input.ExclusiveStartKey !== null && {
        ExclusiveStartKey: serializeAws_json1_0Key(input.ExclusiveStartKey, context)
      },
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.ExpressionAttributeValues !== void 0 && input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context)
      },
      ...input.FilterExpression !== void 0 && input.FilterExpression !== null && {FilterExpression: input.FilterExpression},
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.Limit !== void 0 && input.Limit !== null && {Limit: input.Limit},
      ...input.ProjectionExpression !== void 0 && input.ProjectionExpression !== null && {ProjectionExpression: input.ProjectionExpression},
      ...input.ReturnConsumedCapacity !== void 0 && input.ReturnConsumedCapacity !== null && {ReturnConsumedCapacity: input.ReturnConsumedCapacity},
      ...input.ScanFilter !== void 0 && input.ScanFilter !== null && {ScanFilter: serializeAws_json1_0FilterConditionMap(input.ScanFilter, context)},
      ...input.Segment !== void 0 && input.Segment !== null && {Segment: input.Segment},
      ...input.Select !== void 0 && input.Select !== null && {Select: input.Select},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName},
      ...input.TotalSegments !== void 0 && input.TotalSegments !== null && {TotalSegments: input.TotalSegments}
    };
  };
  var serializeAws_json1_0SSESpecification = (input, context) => {
    return {
      ...input.Enabled !== void 0 && input.Enabled !== null && {Enabled: input.Enabled},
      ...input.KMSMasterKeyId !== void 0 && input.KMSMasterKeyId !== null && {KMSMasterKeyId: input.KMSMasterKeyId},
      ...input.SSEType !== void 0 && input.SSEType !== null && {SSEType: input.SSEType}
    };
  };
  var serializeAws_json1_0StreamSpecification = (input, context) => {
    return {
      ...input.StreamEnabled !== void 0 && input.StreamEnabled !== null && {StreamEnabled: input.StreamEnabled},
      ...input.StreamViewType !== void 0 && input.StreamViewType !== null && {StreamViewType: input.StreamViewType}
    };
  };
  var serializeAws_json1_0StringSetAttributeValue = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var serializeAws_json1_0Tag = (input, context) => {
    return {
      ...input.Key !== void 0 && input.Key !== null && {Key: input.Key},
      ...input.Value !== void 0 && input.Value !== null && {Value: input.Value}
    };
  };
  var serializeAws_json1_0TagKeyList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var serializeAws_json1_0TagList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0Tag(entry, context);
    });
  };
  var serializeAws_json1_0TagResourceInput = (input, context) => {
    return {
      ...input.ResourceArn !== void 0 && input.ResourceArn !== null && {ResourceArn: input.ResourceArn},
      ...input.Tags !== void 0 && input.Tags !== null && {Tags: serializeAws_json1_0TagList(input.Tags, context)}
    };
  };
  var serializeAws_json1_0TimeToLiveSpecification = (input, context) => {
    return {
      ...input.AttributeName !== void 0 && input.AttributeName !== null && {AttributeName: input.AttributeName},
      ...input.Enabled !== void 0 && input.Enabled !== null && {Enabled: input.Enabled}
    };
  };
  var serializeAws_json1_0TransactGetItem = (input, context) => {
    return {
      ...input.Get !== void 0 && input.Get !== null && {Get: serializeAws_json1_0Get(input.Get, context)}
    };
  };
  var serializeAws_json1_0TransactGetItemList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0TransactGetItem(entry, context);
    });
  };
  var serializeAws_json1_0TransactGetItemsInput = (input, context) => {
    return {
      ...input.ReturnConsumedCapacity !== void 0 && input.ReturnConsumedCapacity !== null && {ReturnConsumedCapacity: input.ReturnConsumedCapacity},
      ...input.TransactItems !== void 0 && input.TransactItems !== null && {
        TransactItems: serializeAws_json1_0TransactGetItemList(input.TransactItems, context)
      }
    };
  };
  var serializeAws_json1_0TransactWriteItem = (input, context) => {
    return {
      ...input.ConditionCheck !== void 0 && input.ConditionCheck !== null && {
        ConditionCheck: serializeAws_json1_0ConditionCheck(input.ConditionCheck, context)
      },
      ...input.Delete !== void 0 && input.Delete !== null && {Delete: serializeAws_json1_0Delete(input.Delete, context)},
      ...input.Put !== void 0 && input.Put !== null && {Put: serializeAws_json1_0Put(input.Put, context)},
      ...input.Update !== void 0 && input.Update !== null && {Update: serializeAws_json1_0Update(input.Update, context)}
    };
  };
  var serializeAws_json1_0TransactWriteItemList = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0TransactWriteItem(entry, context);
    });
  };
  var serializeAws_json1_0TransactWriteItemsInput = (input, context) => {
    var _a;
    return {
      ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
      ...input.ReturnConsumedCapacity !== void 0 && input.ReturnConsumedCapacity !== null && {ReturnConsumedCapacity: input.ReturnConsumedCapacity},
      ...input.ReturnItemCollectionMetrics !== void 0 && input.ReturnItemCollectionMetrics !== null && {ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics},
      ...input.TransactItems !== void 0 && input.TransactItems !== null && {
        TransactItems: serializeAws_json1_0TransactWriteItemList(input.TransactItems, context)
      }
    };
  };
  var serializeAws_json1_0UntagResourceInput = (input, context) => {
    return {
      ...input.ResourceArn !== void 0 && input.ResourceArn !== null && {ResourceArn: input.ResourceArn},
      ...input.TagKeys !== void 0 && input.TagKeys !== null && {TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context)}
    };
  };
  var serializeAws_json1_0Update = (input, context) => {
    return {
      ...input.ConditionExpression !== void 0 && input.ConditionExpression !== null && {ConditionExpression: input.ConditionExpression},
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.ExpressionAttributeValues !== void 0 && input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context)
      },
      ...input.Key !== void 0 && input.Key !== null && {Key: serializeAws_json1_0Key(input.Key, context)},
      ...input.ReturnValuesOnConditionCheckFailure !== void 0 && input.ReturnValuesOnConditionCheckFailure !== null && {
        ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure
      },
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName},
      ...input.UpdateExpression !== void 0 && input.UpdateExpression !== null && {UpdateExpression: input.UpdateExpression}
    };
  };
  var serializeAws_json1_0UpdateContinuousBackupsInput = (input, context) => {
    return {
      ...input.PointInTimeRecoverySpecification !== void 0 && input.PointInTimeRecoverySpecification !== null && {
        PointInTimeRecoverySpecification: serializeAws_json1_0PointInTimeRecoverySpecification(input.PointInTimeRecoverySpecification, context)
      },
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0UpdateContributorInsightsInput = (input, context) => {
    return {
      ...input.ContributorInsightsAction !== void 0 && input.ContributorInsightsAction !== null && {ContributorInsightsAction: input.ContributorInsightsAction},
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0UpdateGlobalSecondaryIndexAction = (input, context) => {
    return {
      ...input.IndexName !== void 0 && input.IndexName !== null && {IndexName: input.IndexName},
      ...input.ProvisionedThroughput !== void 0 && input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context)
      }
    };
  };
  var serializeAws_json1_0UpdateGlobalTableInput = (input, context) => {
    return {
      ...input.GlobalTableName !== void 0 && input.GlobalTableName !== null && {GlobalTableName: input.GlobalTableName},
      ...input.ReplicaUpdates !== void 0 && input.ReplicaUpdates !== null && {
        ReplicaUpdates: serializeAws_json1_0ReplicaUpdateList(input.ReplicaUpdates, context)
      }
    };
  };
  var serializeAws_json1_0UpdateGlobalTableSettingsInput = (input, context) => {
    return {
      ...input.GlobalTableBillingMode !== void 0 && input.GlobalTableBillingMode !== null && {GlobalTableBillingMode: input.GlobalTableBillingMode},
      ...input.GlobalTableGlobalSecondaryIndexSettingsUpdate !== void 0 && input.GlobalTableGlobalSecondaryIndexSettingsUpdate !== null && {
        GlobalTableGlobalSecondaryIndexSettingsUpdate: serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList(input.GlobalTableGlobalSecondaryIndexSettingsUpdate, context)
      },
      ...input.GlobalTableName !== void 0 && input.GlobalTableName !== null && {GlobalTableName: input.GlobalTableName},
      ...input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate !== void 0 && input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate !== null && {
        GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate, context)
      },
      ...input.GlobalTableProvisionedWriteCapacityUnits !== void 0 && input.GlobalTableProvisionedWriteCapacityUnits !== null && {
        GlobalTableProvisionedWriteCapacityUnits: input.GlobalTableProvisionedWriteCapacityUnits
      },
      ...input.ReplicaSettingsUpdate !== void 0 && input.ReplicaSettingsUpdate !== null && {
        ReplicaSettingsUpdate: serializeAws_json1_0ReplicaSettingsUpdateList(input.ReplicaSettingsUpdate, context)
      }
    };
  };
  var serializeAws_json1_0UpdateItemInput = (input, context) => {
    return {
      ...input.AttributeUpdates !== void 0 && input.AttributeUpdates !== null && {
        AttributeUpdates: serializeAws_json1_0AttributeUpdates(input.AttributeUpdates, context)
      },
      ...input.ConditionExpression !== void 0 && input.ConditionExpression !== null && {ConditionExpression: input.ConditionExpression},
      ...input.ConditionalOperator !== void 0 && input.ConditionalOperator !== null && {ConditionalOperator: input.ConditionalOperator},
      ...input.Expected !== void 0 && input.Expected !== null && {Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context)},
      ...input.ExpressionAttributeNames !== void 0 && input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context)
      },
      ...input.ExpressionAttributeValues !== void 0 && input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context)
      },
      ...input.Key !== void 0 && input.Key !== null && {Key: serializeAws_json1_0Key(input.Key, context)},
      ...input.ReturnConsumedCapacity !== void 0 && input.ReturnConsumedCapacity !== null && {ReturnConsumedCapacity: input.ReturnConsumedCapacity},
      ...input.ReturnItemCollectionMetrics !== void 0 && input.ReturnItemCollectionMetrics !== null && {ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics},
      ...input.ReturnValues !== void 0 && input.ReturnValues !== null && {ReturnValues: input.ReturnValues},
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName},
      ...input.UpdateExpression !== void 0 && input.UpdateExpression !== null && {UpdateExpression: input.UpdateExpression}
    };
  };
  var serializeAws_json1_0UpdateReplicationGroupMemberAction = (input, context) => {
    return {
      ...input.GlobalSecondaryIndexes !== void 0 && input.GlobalSecondaryIndexes !== null && {
        GlobalSecondaryIndexes: serializeAws_json1_0ReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context)
      },
      ...input.KMSMasterKeyId !== void 0 && input.KMSMasterKeyId !== null && {KMSMasterKeyId: input.KMSMasterKeyId},
      ...input.ProvisionedThroughputOverride !== void 0 && input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context)
      },
      ...input.RegionName !== void 0 && input.RegionName !== null && {RegionName: input.RegionName}
    };
  };
  var serializeAws_json1_0UpdateTableInput = (input, context) => {
    return {
      ...input.AttributeDefinitions !== void 0 && input.AttributeDefinitions !== null && {
        AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context)
      },
      ...input.BillingMode !== void 0 && input.BillingMode !== null && {BillingMode: input.BillingMode},
      ...input.GlobalSecondaryIndexUpdates !== void 0 && input.GlobalSecondaryIndexUpdates !== null && {
        GlobalSecondaryIndexUpdates: serializeAws_json1_0GlobalSecondaryIndexUpdateList(input.GlobalSecondaryIndexUpdates, context)
      },
      ...input.ProvisionedThroughput !== void 0 && input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context)
      },
      ...input.ReplicaUpdates !== void 0 && input.ReplicaUpdates !== null && {
        ReplicaUpdates: serializeAws_json1_0ReplicationGroupUpdateList(input.ReplicaUpdates, context)
      },
      ...input.SSESpecification !== void 0 && input.SSESpecification !== null && {
        SSESpecification: serializeAws_json1_0SSESpecification(input.SSESpecification, context)
      },
      ...input.StreamSpecification !== void 0 && input.StreamSpecification !== null && {
        StreamSpecification: serializeAws_json1_0StreamSpecification(input.StreamSpecification, context)
      },
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0UpdateTableReplicaAutoScalingInput = (input, context) => {
    return {
      ...input.GlobalSecondaryIndexUpdates !== void 0 && input.GlobalSecondaryIndexUpdates !== null && {
        GlobalSecondaryIndexUpdates: serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList(input.GlobalSecondaryIndexUpdates, context)
      },
      ...input.ProvisionedWriteCapacityAutoScalingUpdate !== void 0 && input.ProvisionedWriteCapacityAutoScalingUpdate !== null && {
        ProvisionedWriteCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingUpdate, context)
      },
      ...input.ReplicaUpdates !== void 0 && input.ReplicaUpdates !== null && {
        ReplicaUpdates: serializeAws_json1_0ReplicaAutoScalingUpdateList(input.ReplicaUpdates, context)
      },
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName}
    };
  };
  var serializeAws_json1_0UpdateTimeToLiveInput = (input, context) => {
    return {
      ...input.TableName !== void 0 && input.TableName !== null && {TableName: input.TableName},
      ...input.TimeToLiveSpecification !== void 0 && input.TimeToLiveSpecification !== null && {
        TimeToLiveSpecification: serializeAws_json1_0TimeToLiveSpecification(input.TimeToLiveSpecification, context)
      }
    };
  };
  var serializeAws_json1_0WriteRequest = (input, context) => {
    return {
      ...input.DeleteRequest !== void 0 && input.DeleteRequest !== null && {
        DeleteRequest: serializeAws_json1_0DeleteRequest(input.DeleteRequest, context)
      },
      ...input.PutRequest !== void 0 && input.PutRequest !== null && {PutRequest: serializeAws_json1_0PutRequest(input.PutRequest, context)}
    };
  };
  var serializeAws_json1_0WriteRequests = (input, context) => {
    return input.filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0WriteRequest(entry, context);
    });
  };
  var deserializeAws_json1_0ArchivalSummary = (output, context) => {
    return {
      ArchivalBackupArn: output.ArchivalBackupArn !== void 0 && output.ArchivalBackupArn !== null ? output.ArchivalBackupArn : void 0,
      ArchivalDateTime: output.ArchivalDateTime !== void 0 && output.ArchivalDateTime !== null ? new Date(Math.round(output.ArchivalDateTime * 1e3)) : void 0,
      ArchivalReason: output.ArchivalReason !== void 0 && output.ArchivalReason !== null ? output.ArchivalReason : void 0
    };
  };
  var deserializeAws_json1_0AttributeDefinition = (output, context) => {
    return {
      AttributeName: output.AttributeName !== void 0 && output.AttributeName !== null ? output.AttributeName : void 0,
      AttributeType: output.AttributeType !== void 0 && output.AttributeType !== null ? output.AttributeType : void 0
    };
  };
  var deserializeAws_json1_0AttributeDefinitions = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0AttributeDefinition(entry, context);
    });
  };
  var deserializeAws_json1_0AttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_0AttributeValue(value, context)
      };
    }, {});
  };
  var deserializeAws_json1_0AttributeNameList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var deserializeAws_json1_0AttributeValue = (output, context) => {
    if (output.B !== void 0 && output.B !== null) {
      return {
        B: context.base64Decoder(output.B)
      };
    }
    if (output.BOOL !== void 0 && output.BOOL !== null) {
      return {
        BOOL: output.BOOL
      };
    }
    if (output.BS !== void 0 && output.BS !== null) {
      return {
        BS: deserializeAws_json1_0BinarySetAttributeValue(output.BS, context)
      };
    }
    if (output.L !== void 0 && output.L !== null) {
      return {
        L: deserializeAws_json1_0ListAttributeValue(output.L, context)
      };
    }
    if (output.M !== void 0 && output.M !== null) {
      return {
        M: deserializeAws_json1_0MapAttributeValue(output.M, context)
      };
    }
    if (output.N !== void 0 && output.N !== null) {
      return {
        N: output.N
      };
    }
    if (output.NS !== void 0 && output.NS !== null) {
      return {
        NS: deserializeAws_json1_0NumberSetAttributeValue(output.NS, context)
      };
    }
    if (output.NULL !== void 0 && output.NULL !== null) {
      return {
        NULL: output.NULL
      };
    }
    if (output.S !== void 0 && output.S !== null) {
      return {
        S: output.S
      };
    }
    if (output.SS !== void 0 && output.SS !== null) {
      return {
        SS: deserializeAws_json1_0StringSetAttributeValue(output.SS, context)
      };
    }
    return {$unknown: Object.entries(output)[0]};
  };
  var deserializeAws_json1_0AutoScalingPolicyDescription = (output, context) => {
    return {
      PolicyName: output.PolicyName !== void 0 && output.PolicyName !== null ? output.PolicyName : void 0,
      TargetTrackingScalingPolicyConfiguration: output.TargetTrackingScalingPolicyConfiguration !== void 0 && output.TargetTrackingScalingPolicyConfiguration !== null ? deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription(output.TargetTrackingScalingPolicyConfiguration, context) : void 0
    };
  };
  var deserializeAws_json1_0AutoScalingPolicyDescriptionList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0AutoScalingPolicyDescription(entry, context);
    });
  };
  var deserializeAws_json1_0AutoScalingSettingsDescription = (output, context) => {
    return {
      AutoScalingDisabled: output.AutoScalingDisabled !== void 0 && output.AutoScalingDisabled !== null ? output.AutoScalingDisabled : void 0,
      AutoScalingRoleArn: output.AutoScalingRoleArn !== void 0 && output.AutoScalingRoleArn !== null ? output.AutoScalingRoleArn : void 0,
      MaximumUnits: output.MaximumUnits !== void 0 && output.MaximumUnits !== null ? output.MaximumUnits : void 0,
      MinimumUnits: output.MinimumUnits !== void 0 && output.MinimumUnits !== null ? output.MinimumUnits : void 0,
      ScalingPolicies: output.ScalingPolicies !== void 0 && output.ScalingPolicies !== null ? deserializeAws_json1_0AutoScalingPolicyDescriptionList(output.ScalingPolicies, context) : void 0
    };
  };
  var deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (output, context) => {
    return {
      DisableScaleIn: output.DisableScaleIn !== void 0 && output.DisableScaleIn !== null ? output.DisableScaleIn : void 0,
      ScaleInCooldown: output.ScaleInCooldown !== void 0 && output.ScaleInCooldown !== null ? output.ScaleInCooldown : void 0,
      ScaleOutCooldown: output.ScaleOutCooldown !== void 0 && output.ScaleOutCooldown !== null ? output.ScaleOutCooldown : void 0,
      TargetValue: output.TargetValue !== void 0 && output.TargetValue !== null ? output.TargetValue : void 0
    };
  };
  var deserializeAws_json1_0BackupDescription = (output, context) => {
    return {
      BackupDetails: output.BackupDetails !== void 0 && output.BackupDetails !== null ? deserializeAws_json1_0BackupDetails(output.BackupDetails, context) : void 0,
      SourceTableDetails: output.SourceTableDetails !== void 0 && output.SourceTableDetails !== null ? deserializeAws_json1_0SourceTableDetails(output.SourceTableDetails, context) : void 0,
      SourceTableFeatureDetails: output.SourceTableFeatureDetails !== void 0 && output.SourceTableFeatureDetails !== null ? deserializeAws_json1_0SourceTableFeatureDetails(output.SourceTableFeatureDetails, context) : void 0
    };
  };
  var deserializeAws_json1_0BackupDetails = (output, context) => {
    return {
      BackupArn: output.BackupArn !== void 0 && output.BackupArn !== null ? output.BackupArn : void 0,
      BackupCreationDateTime: output.BackupCreationDateTime !== void 0 && output.BackupCreationDateTime !== null ? new Date(Math.round(output.BackupCreationDateTime * 1e3)) : void 0,
      BackupExpiryDateTime: output.BackupExpiryDateTime !== void 0 && output.BackupExpiryDateTime !== null ? new Date(Math.round(output.BackupExpiryDateTime * 1e3)) : void 0,
      BackupName: output.BackupName !== void 0 && output.BackupName !== null ? output.BackupName : void 0,
      BackupSizeBytes: output.BackupSizeBytes !== void 0 && output.BackupSizeBytes !== null ? output.BackupSizeBytes : void 0,
      BackupStatus: output.BackupStatus !== void 0 && output.BackupStatus !== null ? output.BackupStatus : void 0,
      BackupType: output.BackupType !== void 0 && output.BackupType !== null ? output.BackupType : void 0
    };
  };
  var deserializeAws_json1_0BackupInUseException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0BackupNotFoundException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0BackupSummaries = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0BackupSummary(entry, context);
    });
  };
  var deserializeAws_json1_0BackupSummary = (output, context) => {
    return {
      BackupArn: output.BackupArn !== void 0 && output.BackupArn !== null ? output.BackupArn : void 0,
      BackupCreationDateTime: output.BackupCreationDateTime !== void 0 && output.BackupCreationDateTime !== null ? new Date(Math.round(output.BackupCreationDateTime * 1e3)) : void 0,
      BackupExpiryDateTime: output.BackupExpiryDateTime !== void 0 && output.BackupExpiryDateTime !== null ? new Date(Math.round(output.BackupExpiryDateTime * 1e3)) : void 0,
      BackupName: output.BackupName !== void 0 && output.BackupName !== null ? output.BackupName : void 0,
      BackupSizeBytes: output.BackupSizeBytes !== void 0 && output.BackupSizeBytes !== null ? output.BackupSizeBytes : void 0,
      BackupStatus: output.BackupStatus !== void 0 && output.BackupStatus !== null ? output.BackupStatus : void 0,
      BackupType: output.BackupType !== void 0 && output.BackupType !== null ? output.BackupType : void 0,
      TableArn: output.TableArn !== void 0 && output.TableArn !== null ? output.TableArn : void 0,
      TableId: output.TableId !== void 0 && output.TableId !== null ? output.TableId : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0
    };
  };
  var deserializeAws_json1_0BatchExecuteStatementOutput = (output, context) => {
    return {
      Responses: output.Responses !== void 0 && output.Responses !== null ? deserializeAws_json1_0PartiQLBatchResponse(output.Responses, context) : void 0
    };
  };
  var deserializeAws_json1_0BatchGetItemOutput = (output, context) => {
    return {
      ConsumedCapacity: output.ConsumedCapacity !== void 0 && output.ConsumedCapacity !== null ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context) : void 0,
      Responses: output.Responses !== void 0 && output.Responses !== null ? deserializeAws_json1_0BatchGetResponseMap(output.Responses, context) : void 0,
      UnprocessedKeys: output.UnprocessedKeys !== void 0 && output.UnprocessedKeys !== null ? deserializeAws_json1_0BatchGetRequestMap(output.UnprocessedKeys, context) : void 0
    };
  };
  var deserializeAws_json1_0BatchGetRequestMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_0KeysAndAttributes(value, context)
      };
    }, {});
  };
  var deserializeAws_json1_0BatchGetResponseMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_0ItemList(value, context)
      };
    }, {});
  };
  var deserializeAws_json1_0BatchStatementError = (output, context) => {
    return {
      Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
      Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
    };
  };
  var deserializeAws_json1_0BatchStatementResponse = (output, context) => {
    return {
      Error: output.Error !== void 0 && output.Error !== null ? deserializeAws_json1_0BatchStatementError(output.Error, context) : void 0,
      Item: output.Item !== void 0 && output.Item !== null ? deserializeAws_json1_0AttributeMap(output.Item, context) : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0
    };
  };
  var deserializeAws_json1_0BatchWriteItemOutput = (output, context) => {
    return {
      ConsumedCapacity: output.ConsumedCapacity !== void 0 && output.ConsumedCapacity !== null ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context) : void 0,
      ItemCollectionMetrics: output.ItemCollectionMetrics !== void 0 && output.ItemCollectionMetrics !== null ? deserializeAws_json1_0ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context) : void 0,
      UnprocessedItems: output.UnprocessedItems !== void 0 && output.UnprocessedItems !== null ? deserializeAws_json1_0BatchWriteItemRequestMap(output.UnprocessedItems, context) : void 0
    };
  };
  var deserializeAws_json1_0BatchWriteItemRequestMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_0WriteRequests(value, context)
      };
    }, {});
  };
  var deserializeAws_json1_0BillingModeSummary = (output, context) => {
    return {
      BillingMode: output.BillingMode !== void 0 && output.BillingMode !== null ? output.BillingMode : void 0,
      LastUpdateToPayPerRequestDateTime: output.LastUpdateToPayPerRequestDateTime !== void 0 && output.LastUpdateToPayPerRequestDateTime !== null ? new Date(Math.round(output.LastUpdateToPayPerRequestDateTime * 1e3)) : void 0
    };
  };
  var deserializeAws_json1_0BinarySetAttributeValue = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return context.base64Decoder(entry);
    });
  };
  var deserializeAws_json1_0CancellationReason = (output, context) => {
    return {
      Code: output.Code !== void 0 && output.Code !== null ? output.Code : void 0,
      Item: output.Item !== void 0 && output.Item !== null ? deserializeAws_json1_0AttributeMap(output.Item, context) : void 0,
      Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
    };
  };
  var deserializeAws_json1_0CancellationReasonList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0CancellationReason(entry, context);
    });
  };
  var deserializeAws_json1_0Capacity = (output, context) => {
    return {
      CapacityUnits: output.CapacityUnits !== void 0 && output.CapacityUnits !== null ? output.CapacityUnits : void 0,
      ReadCapacityUnits: output.ReadCapacityUnits !== void 0 && output.ReadCapacityUnits !== null ? output.ReadCapacityUnits : void 0,
      WriteCapacityUnits: output.WriteCapacityUnits !== void 0 && output.WriteCapacityUnits !== null ? output.WriteCapacityUnits : void 0
    };
  };
  var deserializeAws_json1_0ConditionalCheckFailedException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ConsumedCapacity = (output, context) => {
    return {
      CapacityUnits: output.CapacityUnits !== void 0 && output.CapacityUnits !== null ? output.CapacityUnits : void 0,
      GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== void 0 && output.GlobalSecondaryIndexes !== null ? deserializeAws_json1_0SecondaryIndexesCapacityMap(output.GlobalSecondaryIndexes, context) : void 0,
      LocalSecondaryIndexes: output.LocalSecondaryIndexes !== void 0 && output.LocalSecondaryIndexes !== null ? deserializeAws_json1_0SecondaryIndexesCapacityMap(output.LocalSecondaryIndexes, context) : void 0,
      ReadCapacityUnits: output.ReadCapacityUnits !== void 0 && output.ReadCapacityUnits !== null ? output.ReadCapacityUnits : void 0,
      Table: output.Table !== void 0 && output.Table !== null ? deserializeAws_json1_0Capacity(output.Table, context) : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0,
      WriteCapacityUnits: output.WriteCapacityUnits !== void 0 && output.WriteCapacityUnits !== null ? output.WriteCapacityUnits : void 0
    };
  };
  var deserializeAws_json1_0ConsumedCapacityMultiple = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ConsumedCapacity(entry, context);
    });
  };
  var deserializeAws_json1_0ContinuousBackupsDescription = (output, context) => {
    return {
      ContinuousBackupsStatus: output.ContinuousBackupsStatus !== void 0 && output.ContinuousBackupsStatus !== null ? output.ContinuousBackupsStatus : void 0,
      PointInTimeRecoveryDescription: output.PointInTimeRecoveryDescription !== void 0 && output.PointInTimeRecoveryDescription !== null ? deserializeAws_json1_0PointInTimeRecoveryDescription(output.PointInTimeRecoveryDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0ContinuousBackupsUnavailableException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ContributorInsightsRuleList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var deserializeAws_json1_0ContributorInsightsSummaries = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ContributorInsightsSummary(entry, context);
    });
  };
  var deserializeAws_json1_0ContributorInsightsSummary = (output, context) => {
    return {
      ContributorInsightsStatus: output.ContributorInsightsStatus !== void 0 && output.ContributorInsightsStatus !== null ? output.ContributorInsightsStatus : void 0,
      IndexName: output.IndexName !== void 0 && output.IndexName !== null ? output.IndexName : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0
    };
  };
  var deserializeAws_json1_0CreateBackupOutput = (output, context) => {
    return {
      BackupDetails: output.BackupDetails !== void 0 && output.BackupDetails !== null ? deserializeAws_json1_0BackupDetails(output.BackupDetails, context) : void 0
    };
  };
  var deserializeAws_json1_0CreateGlobalTableOutput = (output, context) => {
    return {
      GlobalTableDescription: output.GlobalTableDescription !== void 0 && output.GlobalTableDescription !== null ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0CreateTableOutput = (output, context) => {
    return {
      TableDescription: output.TableDescription !== void 0 && output.TableDescription !== null ? deserializeAws_json1_0TableDescription(output.TableDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0DeleteBackupOutput = (output, context) => {
    return {
      BackupDescription: output.BackupDescription !== void 0 && output.BackupDescription !== null ? deserializeAws_json1_0BackupDescription(output.BackupDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0DeleteItemOutput = (output, context) => {
    return {
      Attributes: output.Attributes !== void 0 && output.Attributes !== null ? deserializeAws_json1_0AttributeMap(output.Attributes, context) : void 0,
      ConsumedCapacity: output.ConsumedCapacity !== void 0 && output.ConsumedCapacity !== null ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context) : void 0,
      ItemCollectionMetrics: output.ItemCollectionMetrics !== void 0 && output.ItemCollectionMetrics !== null ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context) : void 0
    };
  };
  var deserializeAws_json1_0DeleteRequest = (output, context) => {
    return {
      Key: output.Key !== void 0 && output.Key !== null ? deserializeAws_json1_0Key(output.Key, context) : void 0
    };
  };
  var deserializeAws_json1_0DeleteTableOutput = (output, context) => {
    return {
      TableDescription: output.TableDescription !== void 0 && output.TableDescription !== null ? deserializeAws_json1_0TableDescription(output.TableDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0DescribeBackupOutput = (output, context) => {
    return {
      BackupDescription: output.BackupDescription !== void 0 && output.BackupDescription !== null ? deserializeAws_json1_0BackupDescription(output.BackupDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0DescribeContinuousBackupsOutput = (output, context) => {
    return {
      ContinuousBackupsDescription: output.ContinuousBackupsDescription !== void 0 && output.ContinuousBackupsDescription !== null ? deserializeAws_json1_0ContinuousBackupsDescription(output.ContinuousBackupsDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0DescribeContributorInsightsOutput = (output, context) => {
    return {
      ContributorInsightsRuleList: output.ContributorInsightsRuleList !== void 0 && output.ContributorInsightsRuleList !== null ? deserializeAws_json1_0ContributorInsightsRuleList(output.ContributorInsightsRuleList, context) : void 0,
      ContributorInsightsStatus: output.ContributorInsightsStatus !== void 0 && output.ContributorInsightsStatus !== null ? output.ContributorInsightsStatus : void 0,
      FailureException: output.FailureException !== void 0 && output.FailureException !== null ? deserializeAws_json1_0FailureException(output.FailureException, context) : void 0,
      IndexName: output.IndexName !== void 0 && output.IndexName !== null ? output.IndexName : void 0,
      LastUpdateDateTime: output.LastUpdateDateTime !== void 0 && output.LastUpdateDateTime !== null ? new Date(Math.round(output.LastUpdateDateTime * 1e3)) : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0
    };
  };
  var deserializeAws_json1_0DescribeEndpointsResponse = (output, context) => {
    return {
      Endpoints: output.Endpoints !== void 0 && output.Endpoints !== null ? deserializeAws_json1_0Endpoints(output.Endpoints, context) : void 0
    };
  };
  var deserializeAws_json1_0DescribeExportOutput = (output, context) => {
    return {
      ExportDescription: output.ExportDescription !== void 0 && output.ExportDescription !== null ? deserializeAws_json1_0ExportDescription(output.ExportDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0DescribeGlobalTableOutput = (output, context) => {
    return {
      GlobalTableDescription: output.GlobalTableDescription !== void 0 && output.GlobalTableDescription !== null ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0DescribeGlobalTableSettingsOutput = (output, context) => {
    return {
      GlobalTableName: output.GlobalTableName !== void 0 && output.GlobalTableName !== null ? output.GlobalTableName : void 0,
      ReplicaSettings: output.ReplicaSettings !== void 0 && output.ReplicaSettings !== null ? deserializeAws_json1_0ReplicaSettingsDescriptionList(output.ReplicaSettings, context) : void 0
    };
  };
  var deserializeAws_json1_0DescribeKinesisStreamingDestinationOutput = (output, context) => {
    return {
      KinesisDataStreamDestinations: output.KinesisDataStreamDestinations !== void 0 && output.KinesisDataStreamDestinations !== null ? deserializeAws_json1_0KinesisDataStreamDestinations(output.KinesisDataStreamDestinations, context) : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0
    };
  };
  var deserializeAws_json1_0DescribeLimitsOutput = (output, context) => {
    return {
      AccountMaxReadCapacityUnits: output.AccountMaxReadCapacityUnits !== void 0 && output.AccountMaxReadCapacityUnits !== null ? output.AccountMaxReadCapacityUnits : void 0,
      AccountMaxWriteCapacityUnits: output.AccountMaxWriteCapacityUnits !== void 0 && output.AccountMaxWriteCapacityUnits !== null ? output.AccountMaxWriteCapacityUnits : void 0,
      TableMaxReadCapacityUnits: output.TableMaxReadCapacityUnits !== void 0 && output.TableMaxReadCapacityUnits !== null ? output.TableMaxReadCapacityUnits : void 0,
      TableMaxWriteCapacityUnits: output.TableMaxWriteCapacityUnits !== void 0 && output.TableMaxWriteCapacityUnits !== null ? output.TableMaxWriteCapacityUnits : void 0
    };
  };
  var deserializeAws_json1_0DescribeTableOutput = (output, context) => {
    return {
      Table: output.Table !== void 0 && output.Table !== null ? deserializeAws_json1_0TableDescription(output.Table, context) : void 0
    };
  };
  var deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput = (output, context) => {
    return {
      TableAutoScalingDescription: output.TableAutoScalingDescription !== void 0 && output.TableAutoScalingDescription !== null ? deserializeAws_json1_0TableAutoScalingDescription(output.TableAutoScalingDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0DescribeTimeToLiveOutput = (output, context) => {
    return {
      TimeToLiveDescription: output.TimeToLiveDescription !== void 0 && output.TimeToLiveDescription !== null ? deserializeAws_json1_0TimeToLiveDescription(output.TimeToLiveDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0DuplicateItemException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0Endpoint = (output, context) => {
    return {
      Address: output.Address !== void 0 && output.Address !== null ? output.Address : void 0,
      CachePeriodInMinutes: output.CachePeriodInMinutes !== void 0 && output.CachePeriodInMinutes !== null ? output.CachePeriodInMinutes : void 0
    };
  };
  var deserializeAws_json1_0Endpoints = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0Endpoint(entry, context);
    });
  };
  var deserializeAws_json1_0ExecuteStatementOutput = (output, context) => {
    return {
      Items: output.Items !== void 0 && output.Items !== null ? deserializeAws_json1_0ItemList(output.Items, context) : void 0,
      NextToken: output.NextToken !== void 0 && output.NextToken !== null ? output.NextToken : void 0
    };
  };
  var deserializeAws_json1_0ExecuteTransactionOutput = (output, context) => {
    return {
      Responses: output.Responses !== void 0 && output.Responses !== null ? deserializeAws_json1_0ItemResponseList(output.Responses, context) : void 0
    };
  };
  var deserializeAws_json1_0ExportConflictException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ExportDescription = (output, context) => {
    return {
      BilledSizeBytes: output.BilledSizeBytes !== void 0 && output.BilledSizeBytes !== null ? output.BilledSizeBytes : void 0,
      ClientToken: output.ClientToken !== void 0 && output.ClientToken !== null ? output.ClientToken : void 0,
      EndTime: output.EndTime !== void 0 && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1e3)) : void 0,
      ExportArn: output.ExportArn !== void 0 && output.ExportArn !== null ? output.ExportArn : void 0,
      ExportFormat: output.ExportFormat !== void 0 && output.ExportFormat !== null ? output.ExportFormat : void 0,
      ExportManifest: output.ExportManifest !== void 0 && output.ExportManifest !== null ? output.ExportManifest : void 0,
      ExportStatus: output.ExportStatus !== void 0 && output.ExportStatus !== null ? output.ExportStatus : void 0,
      ExportTime: output.ExportTime !== void 0 && output.ExportTime !== null ? new Date(Math.round(output.ExportTime * 1e3)) : void 0,
      FailureCode: output.FailureCode !== void 0 && output.FailureCode !== null ? output.FailureCode : void 0,
      FailureMessage: output.FailureMessage !== void 0 && output.FailureMessage !== null ? output.FailureMessage : void 0,
      ItemCount: output.ItemCount !== void 0 && output.ItemCount !== null ? output.ItemCount : void 0,
      S3Bucket: output.S3Bucket !== void 0 && output.S3Bucket !== null ? output.S3Bucket : void 0,
      S3BucketOwner: output.S3BucketOwner !== void 0 && output.S3BucketOwner !== null ? output.S3BucketOwner : void 0,
      S3Prefix: output.S3Prefix !== void 0 && output.S3Prefix !== null ? output.S3Prefix : void 0,
      S3SseAlgorithm: output.S3SseAlgorithm !== void 0 && output.S3SseAlgorithm !== null ? output.S3SseAlgorithm : void 0,
      S3SseKmsKeyId: output.S3SseKmsKeyId !== void 0 && output.S3SseKmsKeyId !== null ? output.S3SseKmsKeyId : void 0,
      StartTime: output.StartTime !== void 0 && output.StartTime !== null ? new Date(Math.round(output.StartTime * 1e3)) : void 0,
      TableArn: output.TableArn !== void 0 && output.TableArn !== null ? output.TableArn : void 0,
      TableId: output.TableId !== void 0 && output.TableId !== null ? output.TableId : void 0
    };
  };
  var deserializeAws_json1_0ExportNotFoundException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ExportSummaries = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ExportSummary(entry, context);
    });
  };
  var deserializeAws_json1_0ExportSummary = (output, context) => {
    return {
      ExportArn: output.ExportArn !== void 0 && output.ExportArn !== null ? output.ExportArn : void 0,
      ExportStatus: output.ExportStatus !== void 0 && output.ExportStatus !== null ? output.ExportStatus : void 0
    };
  };
  var deserializeAws_json1_0ExportTableToPointInTimeOutput = (output, context) => {
    return {
      ExportDescription: output.ExportDescription !== void 0 && output.ExportDescription !== null ? deserializeAws_json1_0ExportDescription(output.ExportDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0ExpressionAttributeNameMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: value
      };
    }, {});
  };
  var deserializeAws_json1_0FailureException = (output, context) => {
    return {
      ExceptionDescription: output.ExceptionDescription !== void 0 && output.ExceptionDescription !== null ? output.ExceptionDescription : void 0,
      ExceptionName: output.ExceptionName !== void 0 && output.ExceptionName !== null ? output.ExceptionName : void 0
    };
  };
  var deserializeAws_json1_0GetItemOutput = (output, context) => {
    return {
      ConsumedCapacity: output.ConsumedCapacity !== void 0 && output.ConsumedCapacity !== null ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context) : void 0,
      Item: output.Item !== void 0 && output.Item !== null ? deserializeAws_json1_0AttributeMap(output.Item, context) : void 0
    };
  };
  var deserializeAws_json1_0GlobalSecondaryIndexDescription = (output, context) => {
    return {
      Backfilling: output.Backfilling !== void 0 && output.Backfilling !== null ? output.Backfilling : void 0,
      IndexArn: output.IndexArn !== void 0 && output.IndexArn !== null ? output.IndexArn : void 0,
      IndexName: output.IndexName !== void 0 && output.IndexName !== null ? output.IndexName : void 0,
      IndexSizeBytes: output.IndexSizeBytes !== void 0 && output.IndexSizeBytes !== null ? output.IndexSizeBytes : void 0,
      IndexStatus: output.IndexStatus !== void 0 && output.IndexStatus !== null ? output.IndexStatus : void 0,
      ItemCount: output.ItemCount !== void 0 && output.ItemCount !== null ? output.ItemCount : void 0,
      KeySchema: output.KeySchema !== void 0 && output.KeySchema !== null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : void 0,
      Projection: output.Projection !== void 0 && output.Projection !== null ? deserializeAws_json1_0Projection(output.Projection, context) : void 0,
      ProvisionedThroughput: output.ProvisionedThroughput !== void 0 && output.ProvisionedThroughput !== null ? deserializeAws_json1_0ProvisionedThroughputDescription(output.ProvisionedThroughput, context) : void 0
    };
  };
  var deserializeAws_json1_0GlobalSecondaryIndexDescriptionList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0GlobalSecondaryIndexDescription(entry, context);
    });
  };
  var deserializeAws_json1_0GlobalSecondaryIndexes = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0GlobalSecondaryIndexInfo(entry, context);
    });
  };
  var deserializeAws_json1_0GlobalSecondaryIndexInfo = (output, context) => {
    return {
      IndexName: output.IndexName !== void 0 && output.IndexName !== null ? output.IndexName : void 0,
      KeySchema: output.KeySchema !== void 0 && output.KeySchema !== null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : void 0,
      Projection: output.Projection !== void 0 && output.Projection !== null ? deserializeAws_json1_0Projection(output.Projection, context) : void 0,
      ProvisionedThroughput: output.ProvisionedThroughput !== void 0 && output.ProvisionedThroughput !== null ? deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context) : void 0
    };
  };
  var deserializeAws_json1_0GlobalTable = (output, context) => {
    return {
      GlobalTableName: output.GlobalTableName !== void 0 && output.GlobalTableName !== null ? output.GlobalTableName : void 0,
      ReplicationGroup: output.ReplicationGroup !== void 0 && output.ReplicationGroup !== null ? deserializeAws_json1_0ReplicaList(output.ReplicationGroup, context) : void 0
    };
  };
  var deserializeAws_json1_0GlobalTableAlreadyExistsException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0GlobalTableDescription = (output, context) => {
    return {
      CreationDateTime: output.CreationDateTime !== void 0 && output.CreationDateTime !== null ? new Date(Math.round(output.CreationDateTime * 1e3)) : void 0,
      GlobalTableArn: output.GlobalTableArn !== void 0 && output.GlobalTableArn !== null ? output.GlobalTableArn : void 0,
      GlobalTableName: output.GlobalTableName !== void 0 && output.GlobalTableName !== null ? output.GlobalTableName : void 0,
      GlobalTableStatus: output.GlobalTableStatus !== void 0 && output.GlobalTableStatus !== null ? output.GlobalTableStatus : void 0,
      ReplicationGroup: output.ReplicationGroup !== void 0 && output.ReplicationGroup !== null ? deserializeAws_json1_0ReplicaDescriptionList(output.ReplicationGroup, context) : void 0
    };
  };
  var deserializeAws_json1_0GlobalTableList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0GlobalTable(entry, context);
    });
  };
  var deserializeAws_json1_0GlobalTableNotFoundException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0IdempotentParameterMismatchException = (output, context) => {
    return {
      Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
    };
  };
  var deserializeAws_json1_0IndexNotFoundException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0InternalServerError = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0InvalidEndpointException = (output, context) => {
    return {
      Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
    };
  };
  var deserializeAws_json1_0InvalidExportTimeException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0InvalidRestoreTimeException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ItemCollectionKeyAttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_0AttributeValue(value, context)
      };
    }, {});
  };
  var deserializeAws_json1_0ItemCollectionMetrics = (output, context) => {
    return {
      ItemCollectionKey: output.ItemCollectionKey !== void 0 && output.ItemCollectionKey !== null ? deserializeAws_json1_0ItemCollectionKeyAttributeMap(output.ItemCollectionKey, context) : void 0,
      SizeEstimateRangeGB: output.SizeEstimateRangeGB !== void 0 && output.SizeEstimateRangeGB !== null ? deserializeAws_json1_0ItemCollectionSizeEstimateRange(output.SizeEstimateRangeGB, context) : void 0
    };
  };
  var deserializeAws_json1_0ItemCollectionMetricsMultiple = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ItemCollectionMetrics(entry, context);
    });
  };
  var deserializeAws_json1_0ItemCollectionMetricsPerTable = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_0ItemCollectionMetricsMultiple(value, context)
      };
    }, {});
  };
  var deserializeAws_json1_0ItemCollectionSizeEstimateRange = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var deserializeAws_json1_0ItemCollectionSizeLimitExceededException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ItemList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0AttributeMap(entry, context);
    });
  };
  var deserializeAws_json1_0ItemResponse = (output, context) => {
    return {
      Item: output.Item !== void 0 && output.Item !== null ? deserializeAws_json1_0AttributeMap(output.Item, context) : void 0
    };
  };
  var deserializeAws_json1_0ItemResponseList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ItemResponse(entry, context);
    });
  };
  var deserializeAws_json1_0Key = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_0AttributeValue(value, context)
      };
    }, {});
  };
  var deserializeAws_json1_0KeyList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0Key(entry, context);
    });
  };
  var deserializeAws_json1_0KeysAndAttributes = (output, context) => {
    return {
      AttributesToGet: output.AttributesToGet !== void 0 && output.AttributesToGet !== null ? deserializeAws_json1_0AttributeNameList(output.AttributesToGet, context) : void 0,
      ConsistentRead: output.ConsistentRead !== void 0 && output.ConsistentRead !== null ? output.ConsistentRead : void 0,
      ExpressionAttributeNames: output.ExpressionAttributeNames !== void 0 && output.ExpressionAttributeNames !== null ? deserializeAws_json1_0ExpressionAttributeNameMap(output.ExpressionAttributeNames, context) : void 0,
      Keys: output.Keys !== void 0 && output.Keys !== null ? deserializeAws_json1_0KeyList(output.Keys, context) : void 0,
      ProjectionExpression: output.ProjectionExpression !== void 0 && output.ProjectionExpression !== null ? output.ProjectionExpression : void 0
    };
  };
  var deserializeAws_json1_0KeySchema = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0KeySchemaElement(entry, context);
    });
  };
  var deserializeAws_json1_0KeySchemaElement = (output, context) => {
    return {
      AttributeName: output.AttributeName !== void 0 && output.AttributeName !== null ? output.AttributeName : void 0,
      KeyType: output.KeyType !== void 0 && output.KeyType !== null ? output.KeyType : void 0
    };
  };
  var deserializeAws_json1_0KinesisDataStreamDestination = (output, context) => {
    return {
      DestinationStatus: output.DestinationStatus !== void 0 && output.DestinationStatus !== null ? output.DestinationStatus : void 0,
      DestinationStatusDescription: output.DestinationStatusDescription !== void 0 && output.DestinationStatusDescription !== null ? output.DestinationStatusDescription : void 0,
      StreamArn: output.StreamArn !== void 0 && output.StreamArn !== null ? output.StreamArn : void 0
    };
  };
  var deserializeAws_json1_0KinesisDataStreamDestinations = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0KinesisDataStreamDestination(entry, context);
    });
  };
  var deserializeAws_json1_0KinesisStreamingDestinationOutput = (output, context) => {
    return {
      DestinationStatus: output.DestinationStatus !== void 0 && output.DestinationStatus !== null ? output.DestinationStatus : void 0,
      StreamArn: output.StreamArn !== void 0 && output.StreamArn !== null ? output.StreamArn : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0
    };
  };
  var deserializeAws_json1_0LimitExceededException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ListAttributeValue = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0AttributeValue(entry, context);
    });
  };
  var deserializeAws_json1_0ListBackupsOutput = (output, context) => {
    return {
      BackupSummaries: output.BackupSummaries !== void 0 && output.BackupSummaries !== null ? deserializeAws_json1_0BackupSummaries(output.BackupSummaries, context) : void 0,
      LastEvaluatedBackupArn: output.LastEvaluatedBackupArn !== void 0 && output.LastEvaluatedBackupArn !== null ? output.LastEvaluatedBackupArn : void 0
    };
  };
  var deserializeAws_json1_0ListContributorInsightsOutput = (output, context) => {
    return {
      ContributorInsightsSummaries: output.ContributorInsightsSummaries !== void 0 && output.ContributorInsightsSummaries !== null ? deserializeAws_json1_0ContributorInsightsSummaries(output.ContributorInsightsSummaries, context) : void 0,
      NextToken: output.NextToken !== void 0 && output.NextToken !== null ? output.NextToken : void 0
    };
  };
  var deserializeAws_json1_0ListExportsOutput = (output, context) => {
    return {
      ExportSummaries: output.ExportSummaries !== void 0 && output.ExportSummaries !== null ? deserializeAws_json1_0ExportSummaries(output.ExportSummaries, context) : void 0,
      NextToken: output.NextToken !== void 0 && output.NextToken !== null ? output.NextToken : void 0
    };
  };
  var deserializeAws_json1_0ListGlobalTablesOutput = (output, context) => {
    return {
      GlobalTables: output.GlobalTables !== void 0 && output.GlobalTables !== null ? deserializeAws_json1_0GlobalTableList(output.GlobalTables, context) : void 0,
      LastEvaluatedGlobalTableName: output.LastEvaluatedGlobalTableName !== void 0 && output.LastEvaluatedGlobalTableName !== null ? output.LastEvaluatedGlobalTableName : void 0
    };
  };
  var deserializeAws_json1_0ListTablesOutput = (output, context) => {
    return {
      LastEvaluatedTableName: output.LastEvaluatedTableName !== void 0 && output.LastEvaluatedTableName !== null ? output.LastEvaluatedTableName : void 0,
      TableNames: output.TableNames !== void 0 && output.TableNames !== null ? deserializeAws_json1_0TableNameList(output.TableNames, context) : void 0
    };
  };
  var deserializeAws_json1_0ListTagsOfResourceOutput = (output, context) => {
    return {
      NextToken: output.NextToken !== void 0 && output.NextToken !== null ? output.NextToken : void 0,
      Tags: output.Tags !== void 0 && output.Tags !== null ? deserializeAws_json1_0TagList(output.Tags, context) : void 0
    };
  };
  var deserializeAws_json1_0LocalSecondaryIndexDescription = (output, context) => {
    return {
      IndexArn: output.IndexArn !== void 0 && output.IndexArn !== null ? output.IndexArn : void 0,
      IndexName: output.IndexName !== void 0 && output.IndexName !== null ? output.IndexName : void 0,
      IndexSizeBytes: output.IndexSizeBytes !== void 0 && output.IndexSizeBytes !== null ? output.IndexSizeBytes : void 0,
      ItemCount: output.ItemCount !== void 0 && output.ItemCount !== null ? output.ItemCount : void 0,
      KeySchema: output.KeySchema !== void 0 && output.KeySchema !== null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : void 0,
      Projection: output.Projection !== void 0 && output.Projection !== null ? deserializeAws_json1_0Projection(output.Projection, context) : void 0
    };
  };
  var deserializeAws_json1_0LocalSecondaryIndexDescriptionList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0LocalSecondaryIndexDescription(entry, context);
    });
  };
  var deserializeAws_json1_0LocalSecondaryIndexes = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0LocalSecondaryIndexInfo(entry, context);
    });
  };
  var deserializeAws_json1_0LocalSecondaryIndexInfo = (output, context) => {
    return {
      IndexName: output.IndexName !== void 0 && output.IndexName !== null ? output.IndexName : void 0,
      KeySchema: output.KeySchema !== void 0 && output.KeySchema !== null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : void 0,
      Projection: output.Projection !== void 0 && output.Projection !== null ? deserializeAws_json1_0Projection(output.Projection, context) : void 0
    };
  };
  var deserializeAws_json1_0MapAttributeValue = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_0AttributeValue(value, context)
      };
    }, {});
  };
  var deserializeAws_json1_0NonKeyAttributeNameList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var deserializeAws_json1_0NumberSetAttributeValue = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var deserializeAws_json1_0PartiQLBatchResponse = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0BatchStatementResponse(entry, context);
    });
  };
  var deserializeAws_json1_0PointInTimeRecoveryDescription = (output, context) => {
    return {
      EarliestRestorableDateTime: output.EarliestRestorableDateTime !== void 0 && output.EarliestRestorableDateTime !== null ? new Date(Math.round(output.EarliestRestorableDateTime * 1e3)) : void 0,
      LatestRestorableDateTime: output.LatestRestorableDateTime !== void 0 && output.LatestRestorableDateTime !== null ? new Date(Math.round(output.LatestRestorableDateTime * 1e3)) : void 0,
      PointInTimeRecoveryStatus: output.PointInTimeRecoveryStatus !== void 0 && output.PointInTimeRecoveryStatus !== null ? output.PointInTimeRecoveryStatus : void 0
    };
  };
  var deserializeAws_json1_0PointInTimeRecoveryUnavailableException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0Projection = (output, context) => {
    return {
      NonKeyAttributes: output.NonKeyAttributes !== void 0 && output.NonKeyAttributes !== null ? deserializeAws_json1_0NonKeyAttributeNameList(output.NonKeyAttributes, context) : void 0,
      ProjectionType: output.ProjectionType !== void 0 && output.ProjectionType !== null ? output.ProjectionType : void 0
    };
  };
  var deserializeAws_json1_0ProvisionedThroughput = (output, context) => {
    return {
      ReadCapacityUnits: output.ReadCapacityUnits !== void 0 && output.ReadCapacityUnits !== null ? output.ReadCapacityUnits : void 0,
      WriteCapacityUnits: output.WriteCapacityUnits !== void 0 && output.WriteCapacityUnits !== null ? output.WriteCapacityUnits : void 0
    };
  };
  var deserializeAws_json1_0ProvisionedThroughputDescription = (output, context) => {
    return {
      LastDecreaseDateTime: output.LastDecreaseDateTime !== void 0 && output.LastDecreaseDateTime !== null ? new Date(Math.round(output.LastDecreaseDateTime * 1e3)) : void 0,
      LastIncreaseDateTime: output.LastIncreaseDateTime !== void 0 && output.LastIncreaseDateTime !== null ? new Date(Math.round(output.LastIncreaseDateTime * 1e3)) : void 0,
      NumberOfDecreasesToday: output.NumberOfDecreasesToday !== void 0 && output.NumberOfDecreasesToday !== null ? output.NumberOfDecreasesToday : void 0,
      ReadCapacityUnits: output.ReadCapacityUnits !== void 0 && output.ReadCapacityUnits !== null ? output.ReadCapacityUnits : void 0,
      WriteCapacityUnits: output.WriteCapacityUnits !== void 0 && output.WriteCapacityUnits !== null ? output.WriteCapacityUnits : void 0
    };
  };
  var deserializeAws_json1_0ProvisionedThroughputExceededException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ProvisionedThroughputOverride = (output, context) => {
    return {
      ReadCapacityUnits: output.ReadCapacityUnits !== void 0 && output.ReadCapacityUnits !== null ? output.ReadCapacityUnits : void 0
    };
  };
  var deserializeAws_json1_0PutItemInputAttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_0AttributeValue(value, context)
      };
    }, {});
  };
  var deserializeAws_json1_0PutItemOutput = (output, context) => {
    return {
      Attributes: output.Attributes !== void 0 && output.Attributes !== null ? deserializeAws_json1_0AttributeMap(output.Attributes, context) : void 0,
      ConsumedCapacity: output.ConsumedCapacity !== void 0 && output.ConsumedCapacity !== null ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context) : void 0,
      ItemCollectionMetrics: output.ItemCollectionMetrics !== void 0 && output.ItemCollectionMetrics !== null ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context) : void 0
    };
  };
  var deserializeAws_json1_0PutRequest = (output, context) => {
    return {
      Item: output.Item !== void 0 && output.Item !== null ? deserializeAws_json1_0PutItemInputAttributeMap(output.Item, context) : void 0
    };
  };
  var deserializeAws_json1_0QueryOutput = (output, context) => {
    return {
      ConsumedCapacity: output.ConsumedCapacity !== void 0 && output.ConsumedCapacity !== null ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context) : void 0,
      Count: output.Count !== void 0 && output.Count !== null ? output.Count : void 0,
      Items: output.Items !== void 0 && output.Items !== null ? deserializeAws_json1_0ItemList(output.Items, context) : void 0,
      LastEvaluatedKey: output.LastEvaluatedKey !== void 0 && output.LastEvaluatedKey !== null ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context) : void 0,
      ScannedCount: output.ScannedCount !== void 0 && output.ScannedCount !== null ? output.ScannedCount : void 0
    };
  };
  var deserializeAws_json1_0Replica = (output, context) => {
    return {
      RegionName: output.RegionName !== void 0 && output.RegionName !== null ? output.RegionName : void 0
    };
  };
  var deserializeAws_json1_0ReplicaAlreadyExistsException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ReplicaAutoScalingDescription = (output, context) => {
    return {
      GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== void 0 && output.GlobalSecondaryIndexes !== null ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(output.GlobalSecondaryIndexes, context) : void 0,
      RegionName: output.RegionName !== void 0 && output.RegionName !== null ? output.RegionName : void 0,
      ReplicaProvisionedReadCapacityAutoScalingSettings: output.ReplicaProvisionedReadCapacityAutoScalingSettings !== void 0 && output.ReplicaProvisionedReadCapacityAutoScalingSettings !== null ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedReadCapacityAutoScalingSettings, context) : void 0,
      ReplicaProvisionedWriteCapacityAutoScalingSettings: output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== void 0 && output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== null ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedWriteCapacityAutoScalingSettings, context) : void 0,
      ReplicaStatus: output.ReplicaStatus !== void 0 && output.ReplicaStatus !== null ? output.ReplicaStatus : void 0
    };
  };
  var deserializeAws_json1_0ReplicaAutoScalingDescriptionList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ReplicaAutoScalingDescription(entry, context);
    });
  };
  var deserializeAws_json1_0ReplicaDescription = (output, context) => {
    return {
      GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== void 0 && output.GlobalSecondaryIndexes !== null ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context) : void 0,
      KMSMasterKeyId: output.KMSMasterKeyId !== void 0 && output.KMSMasterKeyId !== null ? output.KMSMasterKeyId : void 0,
      ProvisionedThroughputOverride: output.ProvisionedThroughputOverride !== void 0 && output.ProvisionedThroughputOverride !== null ? deserializeAws_json1_0ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context) : void 0,
      RegionName: output.RegionName !== void 0 && output.RegionName !== null ? output.RegionName : void 0,
      ReplicaInaccessibleDateTime: output.ReplicaInaccessibleDateTime !== void 0 && output.ReplicaInaccessibleDateTime !== null ? new Date(Math.round(output.ReplicaInaccessibleDateTime * 1e3)) : void 0,
      ReplicaStatus: output.ReplicaStatus !== void 0 && output.ReplicaStatus !== null ? output.ReplicaStatus : void 0,
      ReplicaStatusDescription: output.ReplicaStatusDescription !== void 0 && output.ReplicaStatusDescription !== null ? output.ReplicaStatusDescription : void 0,
      ReplicaStatusPercentProgress: output.ReplicaStatusPercentProgress !== void 0 && output.ReplicaStatusPercentProgress !== null ? output.ReplicaStatusPercentProgress : void 0
    };
  };
  var deserializeAws_json1_0ReplicaDescriptionList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ReplicaDescription(entry, context);
    });
  };
  var deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription = (output, context) => {
    return {
      IndexName: output.IndexName !== void 0 && output.IndexName !== null ? output.IndexName : void 0,
      IndexStatus: output.IndexStatus !== void 0 && output.IndexStatus !== null ? output.IndexStatus : void 0,
      ProvisionedReadCapacityAutoScalingSettings: output.ProvisionedReadCapacityAutoScalingSettings !== void 0 && output.ProvisionedReadCapacityAutoScalingSettings !== null ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedReadCapacityAutoScalingSettings, context) : void 0,
      ProvisionedWriteCapacityAutoScalingSettings: output.ProvisionedWriteCapacityAutoScalingSettings !== void 0 && output.ProvisionedWriteCapacityAutoScalingSettings !== null ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedWriteCapacityAutoScalingSettings, context) : void 0
    };
  };
  var deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context);
    });
  };
  var deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription = (output, context) => {
    return {
      IndexName: output.IndexName !== void 0 && output.IndexName !== null ? output.IndexName : void 0,
      ProvisionedThroughputOverride: output.ProvisionedThroughputOverride !== void 0 && output.ProvisionedThroughputOverride !== null ? deserializeAws_json1_0ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context) : void 0
    };
  };
  var deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription(entry, context);
    });
  };
  var deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription = (output, context) => {
    return {
      IndexName: output.IndexName !== void 0 && output.IndexName !== null ? output.IndexName : void 0,
      IndexStatus: output.IndexStatus !== void 0 && output.IndexStatus !== null ? output.IndexStatus : void 0,
      ProvisionedReadCapacityAutoScalingSettings: output.ProvisionedReadCapacityAutoScalingSettings !== void 0 && output.ProvisionedReadCapacityAutoScalingSettings !== null ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedReadCapacityAutoScalingSettings, context) : void 0,
      ProvisionedReadCapacityUnits: output.ProvisionedReadCapacityUnits !== void 0 && output.ProvisionedReadCapacityUnits !== null ? output.ProvisionedReadCapacityUnits : void 0,
      ProvisionedWriteCapacityAutoScalingSettings: output.ProvisionedWriteCapacityAutoScalingSettings !== void 0 && output.ProvisionedWriteCapacityAutoScalingSettings !== null ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedWriteCapacityAutoScalingSettings, context) : void 0,
      ProvisionedWriteCapacityUnits: output.ProvisionedWriteCapacityUnits !== void 0 && output.ProvisionedWriteCapacityUnits !== null ? output.ProvisionedWriteCapacityUnits : void 0
    };
  };
  var deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription(entry, context);
    });
  };
  var deserializeAws_json1_0ReplicaList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0Replica(entry, context);
    });
  };
  var deserializeAws_json1_0ReplicaNotFoundException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ReplicaSettingsDescription = (output, context) => {
    return {
      RegionName: output.RegionName !== void 0 && output.RegionName !== null ? output.RegionName : void 0,
      ReplicaBillingModeSummary: output.ReplicaBillingModeSummary !== void 0 && output.ReplicaBillingModeSummary !== null ? deserializeAws_json1_0BillingModeSummary(output.ReplicaBillingModeSummary, context) : void 0,
      ReplicaGlobalSecondaryIndexSettings: output.ReplicaGlobalSecondaryIndexSettings !== void 0 && output.ReplicaGlobalSecondaryIndexSettings !== null ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList(output.ReplicaGlobalSecondaryIndexSettings, context) : void 0,
      ReplicaProvisionedReadCapacityAutoScalingSettings: output.ReplicaProvisionedReadCapacityAutoScalingSettings !== void 0 && output.ReplicaProvisionedReadCapacityAutoScalingSettings !== null ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedReadCapacityAutoScalingSettings, context) : void 0,
      ReplicaProvisionedReadCapacityUnits: output.ReplicaProvisionedReadCapacityUnits !== void 0 && output.ReplicaProvisionedReadCapacityUnits !== null ? output.ReplicaProvisionedReadCapacityUnits : void 0,
      ReplicaProvisionedWriteCapacityAutoScalingSettings: output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== void 0 && output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== null ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedWriteCapacityAutoScalingSettings, context) : void 0,
      ReplicaProvisionedWriteCapacityUnits: output.ReplicaProvisionedWriteCapacityUnits !== void 0 && output.ReplicaProvisionedWriteCapacityUnits !== null ? output.ReplicaProvisionedWriteCapacityUnits : void 0,
      ReplicaStatus: output.ReplicaStatus !== void 0 && output.ReplicaStatus !== null ? output.ReplicaStatus : void 0
    };
  };
  var deserializeAws_json1_0ReplicaSettingsDescriptionList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ReplicaSettingsDescription(entry, context);
    });
  };
  var deserializeAws_json1_0RequestLimitExceeded = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ResourceInUseException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0RestoreSummary = (output, context) => {
    return {
      RestoreDateTime: output.RestoreDateTime !== void 0 && output.RestoreDateTime !== null ? new Date(Math.round(output.RestoreDateTime * 1e3)) : void 0,
      RestoreInProgress: output.RestoreInProgress !== void 0 && output.RestoreInProgress !== null ? output.RestoreInProgress : void 0,
      SourceBackupArn: output.SourceBackupArn !== void 0 && output.SourceBackupArn !== null ? output.SourceBackupArn : void 0,
      SourceTableArn: output.SourceTableArn !== void 0 && output.SourceTableArn !== null ? output.SourceTableArn : void 0
    };
  };
  var deserializeAws_json1_0RestoreTableFromBackupOutput = (output, context) => {
    return {
      TableDescription: output.TableDescription !== void 0 && output.TableDescription !== null ? deserializeAws_json1_0TableDescription(output.TableDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0RestoreTableToPointInTimeOutput = (output, context) => {
    return {
      TableDescription: output.TableDescription !== void 0 && output.TableDescription !== null ? deserializeAws_json1_0TableDescription(output.TableDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0ScanOutput = (output, context) => {
    return {
      ConsumedCapacity: output.ConsumedCapacity !== void 0 && output.ConsumedCapacity !== null ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context) : void 0,
      Count: output.Count !== void 0 && output.Count !== null ? output.Count : void 0,
      Items: output.Items !== void 0 && output.Items !== null ? deserializeAws_json1_0ItemList(output.Items, context) : void 0,
      LastEvaluatedKey: output.LastEvaluatedKey !== void 0 && output.LastEvaluatedKey !== null ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context) : void 0,
      ScannedCount: output.ScannedCount !== void 0 && output.ScannedCount !== null ? output.ScannedCount : void 0
    };
  };
  var deserializeAws_json1_0SecondaryIndexesCapacityMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_0Capacity(value, context)
      };
    }, {});
  };
  var deserializeAws_json1_0SourceTableDetails = (output, context) => {
    return {
      BillingMode: output.BillingMode !== void 0 && output.BillingMode !== null ? output.BillingMode : void 0,
      ItemCount: output.ItemCount !== void 0 && output.ItemCount !== null ? output.ItemCount : void 0,
      KeySchema: output.KeySchema !== void 0 && output.KeySchema !== null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : void 0,
      ProvisionedThroughput: output.ProvisionedThroughput !== void 0 && output.ProvisionedThroughput !== null ? deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context) : void 0,
      TableArn: output.TableArn !== void 0 && output.TableArn !== null ? output.TableArn : void 0,
      TableCreationDateTime: output.TableCreationDateTime !== void 0 && output.TableCreationDateTime !== null ? new Date(Math.round(output.TableCreationDateTime * 1e3)) : void 0,
      TableId: output.TableId !== void 0 && output.TableId !== null ? output.TableId : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0,
      TableSizeBytes: output.TableSizeBytes !== void 0 && output.TableSizeBytes !== null ? output.TableSizeBytes : void 0
    };
  };
  var deserializeAws_json1_0SourceTableFeatureDetails = (output, context) => {
    return {
      GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== void 0 && output.GlobalSecondaryIndexes !== null ? deserializeAws_json1_0GlobalSecondaryIndexes(output.GlobalSecondaryIndexes, context) : void 0,
      LocalSecondaryIndexes: output.LocalSecondaryIndexes !== void 0 && output.LocalSecondaryIndexes !== null ? deserializeAws_json1_0LocalSecondaryIndexes(output.LocalSecondaryIndexes, context) : void 0,
      SSEDescription: output.SSEDescription !== void 0 && output.SSEDescription !== null ? deserializeAws_json1_0SSEDescription(output.SSEDescription, context) : void 0,
      StreamDescription: output.StreamDescription !== void 0 && output.StreamDescription !== null ? deserializeAws_json1_0StreamSpecification(output.StreamDescription, context) : void 0,
      TimeToLiveDescription: output.TimeToLiveDescription !== void 0 && output.TimeToLiveDescription !== null ? deserializeAws_json1_0TimeToLiveDescription(output.TimeToLiveDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0SSEDescription = (output, context) => {
    return {
      InaccessibleEncryptionDateTime: output.InaccessibleEncryptionDateTime !== void 0 && output.InaccessibleEncryptionDateTime !== null ? new Date(Math.round(output.InaccessibleEncryptionDateTime * 1e3)) : void 0,
      KMSMasterKeyArn: output.KMSMasterKeyArn !== void 0 && output.KMSMasterKeyArn !== null ? output.KMSMasterKeyArn : void 0,
      SSEType: output.SSEType !== void 0 && output.SSEType !== null ? output.SSEType : void 0,
      Status: output.Status !== void 0 && output.Status !== null ? output.Status : void 0
    };
  };
  var deserializeAws_json1_0StreamSpecification = (output, context) => {
    return {
      StreamEnabled: output.StreamEnabled !== void 0 && output.StreamEnabled !== null ? output.StreamEnabled : void 0,
      StreamViewType: output.StreamViewType !== void 0 && output.StreamViewType !== null ? output.StreamViewType : void 0
    };
  };
  var deserializeAws_json1_0StringSetAttributeValue = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var deserializeAws_json1_0TableAlreadyExistsException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0TableAutoScalingDescription = (output, context) => {
    return {
      Replicas: output.Replicas !== void 0 && output.Replicas !== null ? deserializeAws_json1_0ReplicaAutoScalingDescriptionList(output.Replicas, context) : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0,
      TableStatus: output.TableStatus !== void 0 && output.TableStatus !== null ? output.TableStatus : void 0
    };
  };
  var deserializeAws_json1_0TableDescription = (output, context) => {
    return {
      ArchivalSummary: output.ArchivalSummary !== void 0 && output.ArchivalSummary !== null ? deserializeAws_json1_0ArchivalSummary(output.ArchivalSummary, context) : void 0,
      AttributeDefinitions: output.AttributeDefinitions !== void 0 && output.AttributeDefinitions !== null ? deserializeAws_json1_0AttributeDefinitions(output.AttributeDefinitions, context) : void 0,
      BillingModeSummary: output.BillingModeSummary !== void 0 && output.BillingModeSummary !== null ? deserializeAws_json1_0BillingModeSummary(output.BillingModeSummary, context) : void 0,
      CreationDateTime: output.CreationDateTime !== void 0 && output.CreationDateTime !== null ? new Date(Math.round(output.CreationDateTime * 1e3)) : void 0,
      GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== void 0 && output.GlobalSecondaryIndexes !== null ? deserializeAws_json1_0GlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context) : void 0,
      GlobalTableVersion: output.GlobalTableVersion !== void 0 && output.GlobalTableVersion !== null ? output.GlobalTableVersion : void 0,
      ItemCount: output.ItemCount !== void 0 && output.ItemCount !== null ? output.ItemCount : void 0,
      KeySchema: output.KeySchema !== void 0 && output.KeySchema !== null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : void 0,
      LatestStreamArn: output.LatestStreamArn !== void 0 && output.LatestStreamArn !== null ? output.LatestStreamArn : void 0,
      LatestStreamLabel: output.LatestStreamLabel !== void 0 && output.LatestStreamLabel !== null ? output.LatestStreamLabel : void 0,
      LocalSecondaryIndexes: output.LocalSecondaryIndexes !== void 0 && output.LocalSecondaryIndexes !== null ? deserializeAws_json1_0LocalSecondaryIndexDescriptionList(output.LocalSecondaryIndexes, context) : void 0,
      ProvisionedThroughput: output.ProvisionedThroughput !== void 0 && output.ProvisionedThroughput !== null ? deserializeAws_json1_0ProvisionedThroughputDescription(output.ProvisionedThroughput, context) : void 0,
      Replicas: output.Replicas !== void 0 && output.Replicas !== null ? deserializeAws_json1_0ReplicaDescriptionList(output.Replicas, context) : void 0,
      RestoreSummary: output.RestoreSummary !== void 0 && output.RestoreSummary !== null ? deserializeAws_json1_0RestoreSummary(output.RestoreSummary, context) : void 0,
      SSEDescription: output.SSEDescription !== void 0 && output.SSEDescription !== null ? deserializeAws_json1_0SSEDescription(output.SSEDescription, context) : void 0,
      StreamSpecification: output.StreamSpecification !== void 0 && output.StreamSpecification !== null ? deserializeAws_json1_0StreamSpecification(output.StreamSpecification, context) : void 0,
      TableArn: output.TableArn !== void 0 && output.TableArn !== null ? output.TableArn : void 0,
      TableId: output.TableId !== void 0 && output.TableId !== null ? output.TableId : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0,
      TableSizeBytes: output.TableSizeBytes !== void 0 && output.TableSizeBytes !== null ? output.TableSizeBytes : void 0,
      TableStatus: output.TableStatus !== void 0 && output.TableStatus !== null ? output.TableStatus : void 0
    };
  };
  var deserializeAws_json1_0TableInUseException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0TableNameList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
  };
  var deserializeAws_json1_0TableNotFoundException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0Tag = (output, context) => {
    return {
      Key: output.Key !== void 0 && output.Key !== null ? output.Key : void 0,
      Value: output.Value !== void 0 && output.Value !== null ? output.Value : void 0
    };
  };
  var deserializeAws_json1_0TagList = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  };
  var deserializeAws_json1_0TimeToLiveDescription = (output, context) => {
    return {
      AttributeName: output.AttributeName !== void 0 && output.AttributeName !== null ? output.AttributeName : void 0,
      TimeToLiveStatus: output.TimeToLiveStatus !== void 0 && output.TimeToLiveStatus !== null ? output.TimeToLiveStatus : void 0
    };
  };
  var deserializeAws_json1_0TimeToLiveSpecification = (output, context) => {
    return {
      AttributeName: output.AttributeName !== void 0 && output.AttributeName !== null ? output.AttributeName : void 0,
      Enabled: output.Enabled !== void 0 && output.Enabled !== null ? output.Enabled : void 0
    };
  };
  var deserializeAws_json1_0TransactGetItemsOutput = (output, context) => {
    return {
      ConsumedCapacity: output.ConsumedCapacity !== void 0 && output.ConsumedCapacity !== null ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context) : void 0,
      Responses: output.Responses !== void 0 && output.Responses !== null ? deserializeAws_json1_0ItemResponseList(output.Responses, context) : void 0
    };
  };
  var deserializeAws_json1_0TransactionCanceledException = (output, context) => {
    return {
      CancellationReasons: output.CancellationReasons !== void 0 && output.CancellationReasons !== null ? deserializeAws_json1_0CancellationReasonList(output.CancellationReasons, context) : void 0,
      Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
    };
  };
  var deserializeAws_json1_0TransactionConflictException = (output, context) => {
    return {
      message: output.message !== void 0 && output.message !== null ? output.message : void 0
    };
  };
  var deserializeAws_json1_0TransactionInProgressException = (output, context) => {
    return {
      Message: output.Message !== void 0 && output.Message !== null ? output.Message : void 0
    };
  };
  var deserializeAws_json1_0TransactWriteItemsOutput = (output, context) => {
    return {
      ConsumedCapacity: output.ConsumedCapacity !== void 0 && output.ConsumedCapacity !== null ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context) : void 0,
      ItemCollectionMetrics: output.ItemCollectionMetrics !== void 0 && output.ItemCollectionMetrics !== null ? deserializeAws_json1_0ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context) : void 0
    };
  };
  var deserializeAws_json1_0UpdateContinuousBackupsOutput = (output, context) => {
    return {
      ContinuousBackupsDescription: output.ContinuousBackupsDescription !== void 0 && output.ContinuousBackupsDescription !== null ? deserializeAws_json1_0ContinuousBackupsDescription(output.ContinuousBackupsDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0UpdateContributorInsightsOutput = (output, context) => {
    return {
      ContributorInsightsStatus: output.ContributorInsightsStatus !== void 0 && output.ContributorInsightsStatus !== null ? output.ContributorInsightsStatus : void 0,
      IndexName: output.IndexName !== void 0 && output.IndexName !== null ? output.IndexName : void 0,
      TableName: output.TableName !== void 0 && output.TableName !== null ? output.TableName : void 0
    };
  };
  var deserializeAws_json1_0UpdateGlobalTableOutput = (output, context) => {
    return {
      GlobalTableDescription: output.GlobalTableDescription !== void 0 && output.GlobalTableDescription !== null ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0UpdateGlobalTableSettingsOutput = (output, context) => {
    return {
      GlobalTableName: output.GlobalTableName !== void 0 && output.GlobalTableName !== null ? output.GlobalTableName : void 0,
      ReplicaSettings: output.ReplicaSettings !== void 0 && output.ReplicaSettings !== null ? deserializeAws_json1_0ReplicaSettingsDescriptionList(output.ReplicaSettings, context) : void 0
    };
  };
  var deserializeAws_json1_0UpdateItemOutput = (output, context) => {
    return {
      Attributes: output.Attributes !== void 0 && output.Attributes !== null ? deserializeAws_json1_0AttributeMap(output.Attributes, context) : void 0,
      ConsumedCapacity: output.ConsumedCapacity !== void 0 && output.ConsumedCapacity !== null ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context) : void 0,
      ItemCollectionMetrics: output.ItemCollectionMetrics !== void 0 && output.ItemCollectionMetrics !== null ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context) : void 0
    };
  };
  var deserializeAws_json1_0UpdateTableOutput = (output, context) => {
    return {
      TableDescription: output.TableDescription !== void 0 && output.TableDescription !== null ? deserializeAws_json1_0TableDescription(output.TableDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput = (output, context) => {
    return {
      TableAutoScalingDescription: output.TableAutoScalingDescription !== void 0 && output.TableAutoScalingDescription !== null ? deserializeAws_json1_0TableAutoScalingDescription(output.TableAutoScalingDescription, context) : void 0
    };
  };
  var deserializeAws_json1_0UpdateTimeToLiveOutput = (output, context) => {
    return {
      TimeToLiveSpecification: output.TimeToLiveSpecification !== void 0 && output.TimeToLiveSpecification !== null ? deserializeAws_json1_0TimeToLiveSpecification(output.TimeToLiveSpecification, context) : void 0
    };
  };
  var deserializeAws_json1_0WriteRequest = (output, context) => {
    return {
      DeleteRequest: output.DeleteRequest !== void 0 && output.DeleteRequest !== null ? deserializeAws_json1_0DeleteRequest(output.DeleteRequest, context) : void 0,
      PutRequest: output.PutRequest !== void 0 && output.PutRequest !== null ? deserializeAws_json1_0PutRequest(output.PutRequest, context) : void 0
    };
  };
  var deserializeAws_json1_0WriteRequests = (output, context) => {
    return (output || []).filter((e) => e != null).map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0WriteRequest(entry, context);
    });
  };
  var deserializeMetadata = (output) => {
    var _a;
    return {
      httpStatusCode: output.statusCode,
      requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    };
  };
  var collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
      return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
  };
  var collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
  var buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const {hostname, protocol = "https", port} = await context.endpoint();
    const contents = {
      protocol,
      hostname,
      port,
      method: "POST",
      path,
      headers
    };
    if (resolvedHostname !== void 0) {
      contents.hostname = resolvedHostname;
    }
    if (body !== void 0) {
      contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
  };
  var parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
  var loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
      let cleanValue = rawValue;
      if (cleanValue.indexOf(":") >= 0) {
        cleanValue = cleanValue.split(":")[0];
      }
      if (cleanValue.indexOf("#") >= 0) {
        cleanValue = cleanValue.split("#")[1];
      }
      return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== void 0) {
      return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== void 0) {
      return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== void 0) {
      return sanitizeErrorCode(data["__type"]);
    }
    return "";
  };
});

// node_modules/@aws-sdk/middleware-serde/dist/cjs/deserializerMiddleware.js
var require_deserializerMiddleware = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.deserializerMiddleware = void 0;
  var deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
    const {response} = await next(args);
    const parsed = await deserializer(response, options);
    return {
      response,
      output: parsed
    };
  };
  exports2.deserializerMiddleware = deserializerMiddleware;
});

// node_modules/@aws-sdk/middleware-serde/dist/cjs/serializerMiddleware.js
var require_serializerMiddleware = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.serializerMiddleware = void 0;
  var serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const request = await serializer(args.input, options);
    return next({
      ...args,
      request
    });
  };
  exports2.serializerMiddleware = serializerMiddleware;
});

// node_modules/@aws-sdk/middleware-serde/dist/cjs/serdePlugin.js
var require_serdePlugin = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.getSerdePlugin = exports2.serializerMiddlewareOption = exports2.deserializerMiddlewareOption = void 0;
  var deserializerMiddleware_1 = require_deserializerMiddleware();
  var serializerMiddleware_1 = require_serializerMiddleware();
  exports2.deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true
  };
  exports2.serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true
  };
  function getSerdePlugin(config, serializer, deserializer) {
    return {
      applyToStack: (commandStack) => {
        commandStack.add(deserializerMiddleware_1.deserializerMiddleware(config, deserializer), exports2.deserializerMiddlewareOption);
        commandStack.add(serializerMiddleware_1.serializerMiddleware(config, serializer), exports2.serializerMiddlewareOption);
      }
    };
  }
  exports2.getSerdePlugin = getSerdePlugin;
});

// node_modules/@aws-sdk/middleware-serde/dist/cjs/index.js
var require_cjs34 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_deserializerMiddleware(), exports2);
  tslib_1.__exportStar(require_serializerMiddleware(), exports2);
  tslib_1.__exportStar(require_serdePlugin(), exports2);
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/BatchExecuteStatementCommand.js
var require_BatchExecuteStatementCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.BatchExecuteStatementCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var BatchExecuteStatementCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "BatchExecuteStatementCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.BatchExecuteStatementInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.BatchExecuteStatementOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0BatchExecuteStatementCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0BatchExecuteStatementCommand(output, context);
    }
  };
  exports2.BatchExecuteStatementCommand = BatchExecuteStatementCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/BatchGetItemCommand.js
var require_BatchGetItemCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.BatchGetItemCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var BatchGetItemCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "BatchGetItemCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.BatchGetItemInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.BatchGetItemOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0BatchGetItemCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0BatchGetItemCommand(output, context);
    }
  };
  exports2.BatchGetItemCommand = BatchGetItemCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/BatchWriteItemCommand.js
var require_BatchWriteItemCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.BatchWriteItemCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var BatchWriteItemCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "BatchWriteItemCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.BatchWriteItemInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.BatchWriteItemOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0BatchWriteItemCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0BatchWriteItemCommand(output, context);
    }
  };
  exports2.BatchWriteItemCommand = BatchWriteItemCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/CreateBackupCommand.js
var require_CreateBackupCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.CreateBackupCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var CreateBackupCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "CreateBackupCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.CreateBackupInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.CreateBackupOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0CreateBackupCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0CreateBackupCommand(output, context);
    }
  };
  exports2.CreateBackupCommand = CreateBackupCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/CreateGlobalTableCommand.js
var require_CreateGlobalTableCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.CreateGlobalTableCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var CreateGlobalTableCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "CreateGlobalTableCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.CreateGlobalTableInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.CreateGlobalTableOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0CreateGlobalTableCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0CreateGlobalTableCommand(output, context);
    }
  };
  exports2.CreateGlobalTableCommand = CreateGlobalTableCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/CreateTableCommand.js
var require_CreateTableCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.CreateTableCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var CreateTableCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "CreateTableCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.CreateTableInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.CreateTableOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0CreateTableCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0CreateTableCommand(output, context);
    }
  };
  exports2.CreateTableCommand = CreateTableCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DeleteBackupCommand.js
var require_DeleteBackupCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DeleteBackupCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DeleteBackupCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DeleteBackupCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DeleteBackupInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DeleteBackupOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DeleteBackupCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DeleteBackupCommand(output, context);
    }
  };
  exports2.DeleteBackupCommand = DeleteBackupCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DeleteItemCommand.js
var require_DeleteItemCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DeleteItemCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DeleteItemCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DeleteItemCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DeleteItemInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DeleteItemOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DeleteItemCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DeleteItemCommand(output, context);
    }
  };
  exports2.DeleteItemCommand = DeleteItemCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DeleteTableCommand.js
var require_DeleteTableCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DeleteTableCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DeleteTableCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DeleteTableCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DeleteTableInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DeleteTableOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DeleteTableCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DeleteTableCommand(output, context);
    }
  };
  exports2.DeleteTableCommand = DeleteTableCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeBackupCommand.js
var require_DescribeBackupCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeBackupCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeBackupCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeBackupCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeBackupInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeBackupOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeBackupCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeBackupCommand(output, context);
    }
  };
  exports2.DescribeBackupCommand = DescribeBackupCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeContinuousBackupsCommand.js
var require_DescribeContinuousBackupsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeContinuousBackupsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeContinuousBackupsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeContinuousBackupsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeContinuousBackupsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeContinuousBackupsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeContinuousBackupsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeContinuousBackupsCommand(output, context);
    }
  };
  exports2.DescribeContinuousBackupsCommand = DescribeContinuousBackupsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeContributorInsightsCommand.js
var require_DescribeContributorInsightsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeContributorInsightsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeContributorInsightsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeContributorInsightsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeContributorInsightsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeContributorInsightsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeContributorInsightsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeContributorInsightsCommand(output, context);
    }
  };
  exports2.DescribeContributorInsightsCommand = DescribeContributorInsightsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeEndpointsCommand.js
var require_DescribeEndpointsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeEndpointsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeEndpointsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeEndpointsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeEndpointsRequest.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeEndpointsResponse.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeEndpointsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeEndpointsCommand(output, context);
    }
  };
  exports2.DescribeEndpointsCommand = DescribeEndpointsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeExportCommand.js
var require_DescribeExportCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeExportCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeExportCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeExportCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeExportInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeExportOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeExportCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeExportCommand(output, context);
    }
  };
  exports2.DescribeExportCommand = DescribeExportCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeGlobalTableCommand.js
var require_DescribeGlobalTableCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeGlobalTableCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeGlobalTableCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeGlobalTableCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeGlobalTableInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeGlobalTableOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeGlobalTableCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeGlobalTableCommand(output, context);
    }
  };
  exports2.DescribeGlobalTableCommand = DescribeGlobalTableCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeGlobalTableSettingsCommand.js
var require_DescribeGlobalTableSettingsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeGlobalTableSettingsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeGlobalTableSettingsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeGlobalTableSettingsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeGlobalTableSettingsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeGlobalTableSettingsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeGlobalTableSettingsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeGlobalTableSettingsCommand(output, context);
    }
  };
  exports2.DescribeGlobalTableSettingsCommand = DescribeGlobalTableSettingsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeKinesisStreamingDestinationCommand.js
var require_DescribeKinesisStreamingDestinationCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeKinesisStreamingDestinationCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeKinesisStreamingDestinationCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeKinesisStreamingDestinationCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeKinesisStreamingDestinationInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeKinesisStreamingDestinationOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeKinesisStreamingDestinationCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand(output, context);
    }
  };
  exports2.DescribeKinesisStreamingDestinationCommand = DescribeKinesisStreamingDestinationCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeLimitsCommand.js
var require_DescribeLimitsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeLimitsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeLimitsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeLimitsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeLimitsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeLimitsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeLimitsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeLimitsCommand(output, context);
    }
  };
  exports2.DescribeLimitsCommand = DescribeLimitsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeTableCommand.js
var require_DescribeTableCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeTableCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeTableCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeTableCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeTableInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeTableOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeTableCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeTableCommand(output, context);
    }
  };
  exports2.DescribeTableCommand = DescribeTableCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeTableReplicaAutoScalingCommand.js
var require_DescribeTableReplicaAutoScalingCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeTableReplicaAutoScalingCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeTableReplicaAutoScalingCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeTableReplicaAutoScalingCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeTableReplicaAutoScalingInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeTableReplicaAutoScalingOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeTableReplicaAutoScalingCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand(output, context);
    }
  };
  exports2.DescribeTableReplicaAutoScalingCommand = DescribeTableReplicaAutoScalingCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DescribeTimeToLiveCommand.js
var require_DescribeTimeToLiveCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DescribeTimeToLiveCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DescribeTimeToLiveCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DescribeTimeToLiveCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.DescribeTimeToLiveInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.DescribeTimeToLiveOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DescribeTimeToLiveCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DescribeTimeToLiveCommand(output, context);
    }
  };
  exports2.DescribeTimeToLiveCommand = DescribeTimeToLiveCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/DisableKinesisStreamingDestinationCommand.js
var require_DisableKinesisStreamingDestinationCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DisableKinesisStreamingDestinationCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var DisableKinesisStreamingDestinationCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "DisableKinesisStreamingDestinationCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.KinesisStreamingDestinationInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.KinesisStreamingDestinationOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0DisableKinesisStreamingDestinationCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0DisableKinesisStreamingDestinationCommand(output, context);
    }
  };
  exports2.DisableKinesisStreamingDestinationCommand = DisableKinesisStreamingDestinationCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/EnableKinesisStreamingDestinationCommand.js
var require_EnableKinesisStreamingDestinationCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.EnableKinesisStreamingDestinationCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var EnableKinesisStreamingDestinationCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "EnableKinesisStreamingDestinationCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.KinesisStreamingDestinationInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.KinesisStreamingDestinationOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0EnableKinesisStreamingDestinationCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0EnableKinesisStreamingDestinationCommand(output, context);
    }
  };
  exports2.EnableKinesisStreamingDestinationCommand = EnableKinesisStreamingDestinationCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/ExecuteStatementCommand.js
var require_ExecuteStatementCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ExecuteStatementCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var ExecuteStatementCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "ExecuteStatementCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.ExecuteStatementInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.ExecuteStatementOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0ExecuteStatementCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0ExecuteStatementCommand(output, context);
    }
  };
  exports2.ExecuteStatementCommand = ExecuteStatementCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/ExecuteTransactionCommand.js
var require_ExecuteTransactionCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ExecuteTransactionCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var ExecuteTransactionCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "ExecuteTransactionCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.ExecuteTransactionInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.ExecuteTransactionOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0ExecuteTransactionCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0ExecuteTransactionCommand(output, context);
    }
  };
  exports2.ExecuteTransactionCommand = ExecuteTransactionCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/ExportTableToPointInTimeCommand.js
var require_ExportTableToPointInTimeCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ExportTableToPointInTimeCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var ExportTableToPointInTimeCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "ExportTableToPointInTimeCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.ExportTableToPointInTimeInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.ExportTableToPointInTimeOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0ExportTableToPointInTimeCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0ExportTableToPointInTimeCommand(output, context);
    }
  };
  exports2.ExportTableToPointInTimeCommand = ExportTableToPointInTimeCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/GetItemCommand.js
var require_GetItemCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.GetItemCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var GetItemCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "GetItemCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.GetItemInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.GetItemOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0GetItemCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0GetItemCommand(output, context);
    }
  };
  exports2.GetItemCommand = GetItemCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/ListBackupsCommand.js
var require_ListBackupsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ListBackupsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var ListBackupsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "ListBackupsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.ListBackupsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.ListBackupsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0ListBackupsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0ListBackupsCommand(output, context);
    }
  };
  exports2.ListBackupsCommand = ListBackupsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/ListContributorInsightsCommand.js
var require_ListContributorInsightsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ListContributorInsightsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var ListContributorInsightsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "ListContributorInsightsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.ListContributorInsightsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.ListContributorInsightsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0ListContributorInsightsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0ListContributorInsightsCommand(output, context);
    }
  };
  exports2.ListContributorInsightsCommand = ListContributorInsightsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/ListExportsCommand.js
var require_ListExportsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ListExportsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var ListExportsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "ListExportsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.ListExportsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.ListExportsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0ListExportsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0ListExportsCommand(output, context);
    }
  };
  exports2.ListExportsCommand = ListExportsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/ListGlobalTablesCommand.js
var require_ListGlobalTablesCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ListGlobalTablesCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var ListGlobalTablesCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "ListGlobalTablesCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.ListGlobalTablesInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.ListGlobalTablesOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0ListGlobalTablesCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0ListGlobalTablesCommand(output, context);
    }
  };
  exports2.ListGlobalTablesCommand = ListGlobalTablesCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/ListTablesCommand.js
var require_ListTablesCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ListTablesCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var ListTablesCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "ListTablesCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.ListTablesInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.ListTablesOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0ListTablesCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0ListTablesCommand(output, context);
    }
  };
  exports2.ListTablesCommand = ListTablesCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/ListTagsOfResourceCommand.js
var require_ListTagsOfResourceCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ListTagsOfResourceCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var ListTagsOfResourceCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "ListTagsOfResourceCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.ListTagsOfResourceInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.ListTagsOfResourceOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0ListTagsOfResourceCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0ListTagsOfResourceCommand(output, context);
    }
  };
  exports2.ListTagsOfResourceCommand = ListTagsOfResourceCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/PutItemCommand.js
var require_PutItemCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.PutItemCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var PutItemCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "PutItemCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.PutItemInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.PutItemOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0PutItemCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0PutItemCommand(output, context);
    }
  };
  exports2.PutItemCommand = PutItemCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/QueryCommand.js
var require_QueryCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.QueryCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var QueryCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "QueryCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.QueryInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.QueryOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0QueryCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0QueryCommand(output, context);
    }
  };
  exports2.QueryCommand = QueryCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/RestoreTableFromBackupCommand.js
var require_RestoreTableFromBackupCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.RestoreTableFromBackupCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var RestoreTableFromBackupCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "RestoreTableFromBackupCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.RestoreTableFromBackupInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.RestoreTableFromBackupOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0RestoreTableFromBackupCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0RestoreTableFromBackupCommand(output, context);
    }
  };
  exports2.RestoreTableFromBackupCommand = RestoreTableFromBackupCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/RestoreTableToPointInTimeCommand.js
var require_RestoreTableToPointInTimeCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.RestoreTableToPointInTimeCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var RestoreTableToPointInTimeCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "RestoreTableToPointInTimeCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.RestoreTableToPointInTimeInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.RestoreTableToPointInTimeOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0RestoreTableToPointInTimeCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0RestoreTableToPointInTimeCommand(output, context);
    }
  };
  exports2.RestoreTableToPointInTimeCommand = RestoreTableToPointInTimeCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/ScanCommand.js
var require_ScanCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.ScanCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var ScanCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "ScanCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.ScanInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.ScanOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0ScanCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0ScanCommand(output, context);
    }
  };
  exports2.ScanCommand = ScanCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/TagResourceCommand.js
var require_TagResourceCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.TagResourceCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var TagResourceCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "TagResourceCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.TagResourceInput.filterSensitiveLog,
        outputFilterSensitiveLog: (output) => output
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0TagResourceCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0TagResourceCommand(output, context);
    }
  };
  exports2.TagResourceCommand = TagResourceCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/TransactGetItemsCommand.js
var require_TransactGetItemsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.TransactGetItemsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var TransactGetItemsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "TransactGetItemsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.TransactGetItemsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.TransactGetItemsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0TransactGetItemsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0TransactGetItemsCommand(output, context);
    }
  };
  exports2.TransactGetItemsCommand = TransactGetItemsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/TransactWriteItemsCommand.js
var require_TransactWriteItemsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.TransactWriteItemsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var TransactWriteItemsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "TransactWriteItemsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.TransactWriteItemsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.TransactWriteItemsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0TransactWriteItemsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0TransactWriteItemsCommand(output, context);
    }
  };
  exports2.TransactWriteItemsCommand = TransactWriteItemsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/UntagResourceCommand.js
var require_UntagResourceCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.UntagResourceCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var UntagResourceCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "UntagResourceCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.UntagResourceInput.filterSensitiveLog,
        outputFilterSensitiveLog: (output) => output
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0UntagResourceCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0UntagResourceCommand(output, context);
    }
  };
  exports2.UntagResourceCommand = UntagResourceCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/UpdateContinuousBackupsCommand.js
var require_UpdateContinuousBackupsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.UpdateContinuousBackupsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var UpdateContinuousBackupsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "UpdateContinuousBackupsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.UpdateContinuousBackupsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.UpdateContinuousBackupsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0UpdateContinuousBackupsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0UpdateContinuousBackupsCommand(output, context);
    }
  };
  exports2.UpdateContinuousBackupsCommand = UpdateContinuousBackupsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/UpdateContributorInsightsCommand.js
var require_UpdateContributorInsightsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.UpdateContributorInsightsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var UpdateContributorInsightsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "UpdateContributorInsightsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.UpdateContributorInsightsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.UpdateContributorInsightsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0UpdateContributorInsightsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0UpdateContributorInsightsCommand(output, context);
    }
  };
  exports2.UpdateContributorInsightsCommand = UpdateContributorInsightsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/UpdateGlobalTableCommand.js
var require_UpdateGlobalTableCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.UpdateGlobalTableCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var UpdateGlobalTableCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "UpdateGlobalTableCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.UpdateGlobalTableInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.UpdateGlobalTableOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0UpdateGlobalTableCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0UpdateGlobalTableCommand(output, context);
    }
  };
  exports2.UpdateGlobalTableCommand = UpdateGlobalTableCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/UpdateGlobalTableSettingsCommand.js
var require_UpdateGlobalTableSettingsCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.UpdateGlobalTableSettingsCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var UpdateGlobalTableSettingsCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "UpdateGlobalTableSettingsCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.UpdateGlobalTableSettingsInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.UpdateGlobalTableSettingsOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0UpdateGlobalTableSettingsCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0UpdateGlobalTableSettingsCommand(output, context);
    }
  };
  exports2.UpdateGlobalTableSettingsCommand = UpdateGlobalTableSettingsCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/UpdateItemCommand.js
var require_UpdateItemCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.UpdateItemCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var UpdateItemCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "UpdateItemCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.UpdateItemInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.UpdateItemOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0UpdateItemCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0UpdateItemCommand(output, context);
    }
  };
  exports2.UpdateItemCommand = UpdateItemCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/UpdateTableCommand.js
var require_UpdateTableCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.UpdateTableCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var UpdateTableCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "UpdateTableCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.UpdateTableInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.UpdateTableOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0UpdateTableCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0UpdateTableCommand(output, context);
    }
  };
  exports2.UpdateTableCommand = UpdateTableCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/UpdateTableReplicaAutoScalingCommand.js
var require_UpdateTableReplicaAutoScalingCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.UpdateTableReplicaAutoScalingCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var UpdateTableReplicaAutoScalingCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "UpdateTableReplicaAutoScalingCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.UpdateTableReplicaAutoScalingInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.UpdateTableReplicaAutoScalingOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0UpdateTableReplicaAutoScalingCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand(output, context);
    }
  };
  exports2.UpdateTableReplicaAutoScalingCommand = UpdateTableReplicaAutoScalingCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/commands/UpdateTimeToLiveCommand.js
var require_UpdateTimeToLiveCommand = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.UpdateTimeToLiveCommand = void 0;
  var models_0_1 = require_models_0();
  var Aws_json1_0_1 = require_Aws_json1_0();
  var middleware_serde_1 = require_cjs34();
  var smithy_client_1 = require_cjs33();
  var UpdateTimeToLiveCommand = class extends smithy_client_1.Command {
    constructor(input) {
      super();
      this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
      this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
      const stack = clientStack.concat(this.middlewareStack);
      const {logger} = configuration;
      const clientName = "DynamoDBClient";
      const commandName = "UpdateTimeToLiveCommand";
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog: models_0_1.UpdateTimeToLiveInput.filterSensitiveLog,
        outputFilterSensitiveLog: models_0_1.UpdateTimeToLiveOutput.filterSensitiveLog
      };
      const {requestHandler} = configuration;
      return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
      return Aws_json1_0_1.serializeAws_json1_0UpdateTimeToLiveCommand(input, context);
    }
    deserialize(output, context) {
      return Aws_json1_0_1.deserializeAws_json1_0UpdateTimeToLiveCommand(output, context);
    }
  };
  exports2.UpdateTimeToLiveCommand = UpdateTimeToLiveCommand;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/DynamoDB.js
var require_DynamoDB = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.DynamoDB = void 0;
  var DynamoDBClient_1 = require_DynamoDBClient();
  var BatchExecuteStatementCommand_1 = require_BatchExecuteStatementCommand();
  var BatchGetItemCommand_1 = require_BatchGetItemCommand();
  var BatchWriteItemCommand_1 = require_BatchWriteItemCommand();
  var CreateBackupCommand_1 = require_CreateBackupCommand();
  var CreateGlobalTableCommand_1 = require_CreateGlobalTableCommand();
  var CreateTableCommand_1 = require_CreateTableCommand();
  var DeleteBackupCommand_1 = require_DeleteBackupCommand();
  var DeleteItemCommand_1 = require_DeleteItemCommand();
  var DeleteTableCommand_1 = require_DeleteTableCommand();
  var DescribeBackupCommand_1 = require_DescribeBackupCommand();
  var DescribeContinuousBackupsCommand_1 = require_DescribeContinuousBackupsCommand();
  var DescribeContributorInsightsCommand_1 = require_DescribeContributorInsightsCommand();
  var DescribeEndpointsCommand_1 = require_DescribeEndpointsCommand();
  var DescribeExportCommand_1 = require_DescribeExportCommand();
  var DescribeGlobalTableCommand_1 = require_DescribeGlobalTableCommand();
  var DescribeGlobalTableSettingsCommand_1 = require_DescribeGlobalTableSettingsCommand();
  var DescribeKinesisStreamingDestinationCommand_1 = require_DescribeKinesisStreamingDestinationCommand();
  var DescribeLimitsCommand_1 = require_DescribeLimitsCommand();
  var DescribeTableCommand_1 = require_DescribeTableCommand();
  var DescribeTableReplicaAutoScalingCommand_1 = require_DescribeTableReplicaAutoScalingCommand();
  var DescribeTimeToLiveCommand_1 = require_DescribeTimeToLiveCommand();
  var DisableKinesisStreamingDestinationCommand_1 = require_DisableKinesisStreamingDestinationCommand();
  var EnableKinesisStreamingDestinationCommand_1 = require_EnableKinesisStreamingDestinationCommand();
  var ExecuteStatementCommand_1 = require_ExecuteStatementCommand();
  var ExecuteTransactionCommand_1 = require_ExecuteTransactionCommand();
  var ExportTableToPointInTimeCommand_1 = require_ExportTableToPointInTimeCommand();
  var GetItemCommand_1 = require_GetItemCommand();
  var ListBackupsCommand_1 = require_ListBackupsCommand();
  var ListContributorInsightsCommand_1 = require_ListContributorInsightsCommand();
  var ListExportsCommand_1 = require_ListExportsCommand();
  var ListGlobalTablesCommand_1 = require_ListGlobalTablesCommand();
  var ListTablesCommand_1 = require_ListTablesCommand();
  var ListTagsOfResourceCommand_1 = require_ListTagsOfResourceCommand();
  var PutItemCommand_1 = require_PutItemCommand();
  var QueryCommand_1 = require_QueryCommand();
  var RestoreTableFromBackupCommand_1 = require_RestoreTableFromBackupCommand();
  var RestoreTableToPointInTimeCommand_1 = require_RestoreTableToPointInTimeCommand();
  var ScanCommand_1 = require_ScanCommand();
  var TagResourceCommand_1 = require_TagResourceCommand();
  var TransactGetItemsCommand_1 = require_TransactGetItemsCommand();
  var TransactWriteItemsCommand_1 = require_TransactWriteItemsCommand();
  var UntagResourceCommand_1 = require_UntagResourceCommand();
  var UpdateContinuousBackupsCommand_1 = require_UpdateContinuousBackupsCommand();
  var UpdateContributorInsightsCommand_1 = require_UpdateContributorInsightsCommand();
  var UpdateGlobalTableCommand_1 = require_UpdateGlobalTableCommand();
  var UpdateGlobalTableSettingsCommand_1 = require_UpdateGlobalTableSettingsCommand();
  var UpdateItemCommand_1 = require_UpdateItemCommand();
  var UpdateTableCommand_1 = require_UpdateTableCommand();
  var UpdateTableReplicaAutoScalingCommand_1 = require_UpdateTableReplicaAutoScalingCommand();
  var UpdateTimeToLiveCommand_1 = require_UpdateTimeToLiveCommand();
  var DynamoDB = class extends DynamoDBClient_1.DynamoDBClient {
    batchExecuteStatement(args, optionsOrCb, cb) {
      const command = new BatchExecuteStatementCommand_1.BatchExecuteStatementCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    batchGetItem(args, optionsOrCb, cb) {
      const command = new BatchGetItemCommand_1.BatchGetItemCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    batchWriteItem(args, optionsOrCb, cb) {
      const command = new BatchWriteItemCommand_1.BatchWriteItemCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    createBackup(args, optionsOrCb, cb) {
      const command = new CreateBackupCommand_1.CreateBackupCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    createGlobalTable(args, optionsOrCb, cb) {
      const command = new CreateGlobalTableCommand_1.CreateGlobalTableCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    createTable(args, optionsOrCb, cb) {
      const command = new CreateTableCommand_1.CreateTableCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    deleteBackup(args, optionsOrCb, cb) {
      const command = new DeleteBackupCommand_1.DeleteBackupCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    deleteItem(args, optionsOrCb, cb) {
      const command = new DeleteItemCommand_1.DeleteItemCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    deleteTable(args, optionsOrCb, cb) {
      const command = new DeleteTableCommand_1.DeleteTableCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeBackup(args, optionsOrCb, cb) {
      const command = new DescribeBackupCommand_1.DescribeBackupCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeContinuousBackups(args, optionsOrCb, cb) {
      const command = new DescribeContinuousBackupsCommand_1.DescribeContinuousBackupsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeContributorInsights(args, optionsOrCb, cb) {
      const command = new DescribeContributorInsightsCommand_1.DescribeContributorInsightsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeEndpoints(args, optionsOrCb, cb) {
      const command = new DescribeEndpointsCommand_1.DescribeEndpointsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeExport(args, optionsOrCb, cb) {
      const command = new DescribeExportCommand_1.DescribeExportCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeGlobalTable(args, optionsOrCb, cb) {
      const command = new DescribeGlobalTableCommand_1.DescribeGlobalTableCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeGlobalTableSettings(args, optionsOrCb, cb) {
      const command = new DescribeGlobalTableSettingsCommand_1.DescribeGlobalTableSettingsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeKinesisStreamingDestination(args, optionsOrCb, cb) {
      const command = new DescribeKinesisStreamingDestinationCommand_1.DescribeKinesisStreamingDestinationCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeLimits(args, optionsOrCb, cb) {
      const command = new DescribeLimitsCommand_1.DescribeLimitsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeTable(args, optionsOrCb, cb) {
      const command = new DescribeTableCommand_1.DescribeTableCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeTableReplicaAutoScaling(args, optionsOrCb, cb) {
      const command = new DescribeTableReplicaAutoScalingCommand_1.DescribeTableReplicaAutoScalingCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    describeTimeToLive(args, optionsOrCb, cb) {
      const command = new DescribeTimeToLiveCommand_1.DescribeTimeToLiveCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    disableKinesisStreamingDestination(args, optionsOrCb, cb) {
      const command = new DisableKinesisStreamingDestinationCommand_1.DisableKinesisStreamingDestinationCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    enableKinesisStreamingDestination(args, optionsOrCb, cb) {
      const command = new EnableKinesisStreamingDestinationCommand_1.EnableKinesisStreamingDestinationCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    executeStatement(args, optionsOrCb, cb) {
      const command = new ExecuteStatementCommand_1.ExecuteStatementCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    executeTransaction(args, optionsOrCb, cb) {
      const command = new ExecuteTransactionCommand_1.ExecuteTransactionCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    exportTableToPointInTime(args, optionsOrCb, cb) {
      const command = new ExportTableToPointInTimeCommand_1.ExportTableToPointInTimeCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    getItem(args, optionsOrCb, cb) {
      const command = new GetItemCommand_1.GetItemCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    listBackups(args, optionsOrCb, cb) {
      const command = new ListBackupsCommand_1.ListBackupsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    listContributorInsights(args, optionsOrCb, cb) {
      const command = new ListContributorInsightsCommand_1.ListContributorInsightsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    listExports(args, optionsOrCb, cb) {
      const command = new ListExportsCommand_1.ListExportsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    listGlobalTables(args, optionsOrCb, cb) {
      const command = new ListGlobalTablesCommand_1.ListGlobalTablesCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    listTables(args, optionsOrCb, cb) {
      const command = new ListTablesCommand_1.ListTablesCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    listTagsOfResource(args, optionsOrCb, cb) {
      const command = new ListTagsOfResourceCommand_1.ListTagsOfResourceCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    putItem(args, optionsOrCb, cb) {
      const command = new PutItemCommand_1.PutItemCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    query(args, optionsOrCb, cb) {
      const command = new QueryCommand_1.QueryCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    restoreTableFromBackup(args, optionsOrCb, cb) {
      const command = new RestoreTableFromBackupCommand_1.RestoreTableFromBackupCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    restoreTableToPointInTime(args, optionsOrCb, cb) {
      const command = new RestoreTableToPointInTimeCommand_1.RestoreTableToPointInTimeCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    scan(args, optionsOrCb, cb) {
      const command = new ScanCommand_1.ScanCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    tagResource(args, optionsOrCb, cb) {
      const command = new TagResourceCommand_1.TagResourceCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    transactGetItems(args, optionsOrCb, cb) {
      const command = new TransactGetItemsCommand_1.TransactGetItemsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    transactWriteItems(args, optionsOrCb, cb) {
      const command = new TransactWriteItemsCommand_1.TransactWriteItemsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    untagResource(args, optionsOrCb, cb) {
      const command = new UntagResourceCommand_1.UntagResourceCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    updateContinuousBackups(args, optionsOrCb, cb) {
      const command = new UpdateContinuousBackupsCommand_1.UpdateContinuousBackupsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    updateContributorInsights(args, optionsOrCb, cb) {
      const command = new UpdateContributorInsightsCommand_1.UpdateContributorInsightsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    updateGlobalTable(args, optionsOrCb, cb) {
      const command = new UpdateGlobalTableCommand_1.UpdateGlobalTableCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    updateGlobalTableSettings(args, optionsOrCb, cb) {
      const command = new UpdateGlobalTableSettingsCommand_1.UpdateGlobalTableSettingsCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    updateItem(args, optionsOrCb, cb) {
      const command = new UpdateItemCommand_1.UpdateItemCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    updateTable(args, optionsOrCb, cb) {
      const command = new UpdateTableCommand_1.UpdateTableCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    updateTableReplicaAutoScaling(args, optionsOrCb, cb) {
      const command = new UpdateTableReplicaAutoScalingCommand_1.UpdateTableReplicaAutoScalingCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
    updateTimeToLive(args, optionsOrCb, cb) {
      const command = new UpdateTimeToLiveCommand_1.UpdateTimeToLiveCommand(args);
      if (typeof optionsOrCb === "function") {
        this.send(command, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
        this.send(command, optionsOrCb || {}, cb);
      } else {
        return this.send(command, optionsOrCb);
      }
    }
  };
  exports2.DynamoDB = DynamoDB;
});

// node_modules/@aws-sdk/util-waiter/dist/cjs/utils/sleep.js
var require_sleep = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.sleep = void 0;
  var sleep = (seconds) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1e3));
  };
  exports2.sleep = sleep;
});

// node_modules/@aws-sdk/util-waiter/dist/cjs/waiter.js
var require_waiter = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.WaiterState = exports2.waiterServiceDefaults = void 0;
  exports2.waiterServiceDefaults = {
    minDelay: 2,
    maxDelay: 120
  };
  var WaiterState;
  (function(WaiterState2) {
    WaiterState2["ABORTED"] = "ABORTED";
    WaiterState2["FAILURE"] = "FAILURE";
    WaiterState2["SUCCESS"] = "SUCCESS";
    WaiterState2["RETRY"] = "RETRY";
    WaiterState2["TIMEOUT"] = "TIMEOUT";
  })(WaiterState = exports2.WaiterState || (exports2.WaiterState = {}));
});

// node_modules/@aws-sdk/util-waiter/dist/cjs/poller.js
var require_poller = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.runPolling = void 0;
  var sleep_1 = require_sleep();
  var waiter_1 = require_waiter();
  var exponentialBackoffWithJitter = (minDelay, maxDelay, attemptCeiling, attempt) => {
    if (attempt > attemptCeiling)
      return maxDelay;
    const delay = minDelay * 2 ** (attempt - 1);
    return randomInRange(minDelay, delay);
  };
  var randomInRange = (min, max) => min + Math.random() * (max - min);
  var runPolling = async ({minDelay, maxDelay, maxWaitTime, abortController, client}, input, acceptorChecks) => {
    var _a;
    const {state} = await acceptorChecks(client, input);
    if (state !== waiter_1.WaiterState.RETRY) {
      return {state};
    }
    let currentAttempt = 1;
    const waitUntil = Date.now() + maxWaitTime * 1e3;
    const attemptCeiling = Math.log(maxDelay / minDelay) / Math.log(2) + 1;
    while (true) {
      if ((_a = abortController === null || abortController === void 0 ? void 0 : abortController.signal) === null || _a === void 0 ? void 0 : _a.aborted) {
        return {state: waiter_1.WaiterState.ABORTED};
      }
      const delay = exponentialBackoffWithJitter(minDelay, maxDelay, attemptCeiling, currentAttempt);
      if (Date.now() + delay * 1e3 > waitUntil) {
        return {state: waiter_1.WaiterState.TIMEOUT};
      }
      await sleep_1.sleep(delay);
      const {state: state2} = await acceptorChecks(client, input);
      if (state2 !== waiter_1.WaiterState.RETRY) {
        return {state: state2};
      }
      currentAttempt += 1;
    }
  };
  exports2.runPolling = runPolling;
});

// node_modules/@aws-sdk/util-waiter/dist/cjs/utils/validate.js
var require_validate = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.validateWaiterOptions = void 0;
  var validateWaiterOptions = (options) => {
    if (options.maxWaitTime < 1) {
      throw new Error(`WaiterConfiguration.maxWaitTime must be greater than 0`);
    } else if (options.minDelay < 1) {
      throw new Error(`WaiterConfiguration.minDelay must be greater than 0`);
    } else if (options.maxDelay < 1) {
      throw new Error(`WaiterConfiguration.maxDelay must be greater than 0`);
    } else if (options.maxWaitTime <= options.minDelay) {
      throw new Error(`WaiterConfiguration.maxWaitTime [${options.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`);
    } else if (options.maxDelay < options.minDelay) {
      throw new Error(`WaiterConfiguration.maxDelay [${options.maxDelay}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`);
    }
  };
  exports2.validateWaiterOptions = validateWaiterOptions;
});

// node_modules/@aws-sdk/util-waiter/dist/cjs/utils/index.js
var require_utils = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_sleep(), exports2);
  tslib_1.__exportStar(require_validate(), exports2);
});

// node_modules/@aws-sdk/util-waiter/dist/cjs/createWaiter.js
var require_createWaiter = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.createWaiter = void 0;
  var poller_1 = require_poller();
  var utils_1 = require_utils();
  var waiter_1 = require_waiter();
  var abortTimeout = async (abortSignal) => {
    return new Promise((resolve) => {
      abortSignal.onabort = () => resolve({state: waiter_1.WaiterState.ABORTED});
    });
  };
  var createWaiter = async (options, input, acceptorChecks) => {
    const params = {
      ...waiter_1.waiterServiceDefaults,
      ...options
    };
    utils_1.validateWaiterOptions(params);
    const exitConditions = [poller_1.runPolling(params, input, acceptorChecks)];
    if (options.abortController) {
      exitConditions.push(abortTimeout(options.abortController.signal));
    }
    return Promise.race(exitConditions);
  };
  exports2.createWaiter = createWaiter;
});

// node_modules/@aws-sdk/util-waiter/dist/cjs/index.js
var require_cjs35 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_createWaiter(), exports2);
  tslib_1.__exportStar(require_waiter(), exports2);
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/waiters/waitForTableExists.js
var require_waitForTableExists = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.waitForTableExists = void 0;
  var DescribeTableCommand_1 = require_DescribeTableCommand();
  var util_waiter_1 = require_cjs35();
  var checkState = async (client, input) => {
    try {
      let result = await client.send(new DescribeTableCommand_1.DescribeTableCommand(input));
      try {
        let returnComparator = () => {
          return result.Table.TableStatus;
        };
        if (returnComparator() === "ACTIVE") {
          return {state: util_waiter_1.WaiterState.SUCCESS};
        }
      } catch (e) {
      }
    } catch (exception) {
      if (exception.name && exception.name == "ResourceNotFoundException") {
        return {state: util_waiter_1.WaiterState.RETRY};
      }
    }
    return {state: util_waiter_1.WaiterState.RETRY};
  };
  var waitForTableExists = async (params, input) => {
    const serviceDefaults = {minDelay: 20, maxDelay: 120};
    return util_waiter_1.createWaiter({...serviceDefaults, ...params}, input, checkState);
  };
  exports2.waitForTableExists = waitForTableExists;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/waiters/waitForTableNotExists.js
var require_waitForTableNotExists = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.waitForTableNotExists = void 0;
  var DescribeTableCommand_1 = require_DescribeTableCommand();
  var util_waiter_1 = require_cjs35();
  var checkState = async (client, input) => {
    try {
      let result = await client.send(new DescribeTableCommand_1.DescribeTableCommand(input));
    } catch (exception) {
      if (exception.name && exception.name == "ResourceNotFoundException") {
        return {state: util_waiter_1.WaiterState.SUCCESS};
      }
    }
    return {state: util_waiter_1.WaiterState.RETRY};
  };
  var waitForTableNotExists = async (params, input) => {
    const serviceDefaults = {minDelay: 20, maxDelay: 120};
    return util_waiter_1.createWaiter({...serviceDefaults, ...params}, input, checkState);
  };
  exports2.waitForTableNotExists = waitForTableNotExists;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/pagination/ListContributorInsightsPaginator.js
var require_ListContributorInsightsPaginator = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.paginateListContributorInsights = void 0;
  var DynamoDB_1 = require_DynamoDB();
  var DynamoDBClient_1 = require_DynamoDBClient();
  var ListContributorInsightsCommand_1 = require_ListContributorInsightsCommand();
  var makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListContributorInsightsCommand_1.ListContributorInsightsCommand(input), ...args);
  };
  var makePagedRequest = async (client, input, ...args) => {
    return await client.listContributorInsights(input, ...args);
  };
  async function* paginateListContributorInsights(config, input, ...additionalArguments) {
    let token = config.startingToken || void 0;
    let hasNext = true;
    let page;
    while (hasNext) {
      input.NextToken = token;
      input["MaxResults"] = config.pageSize;
      if (config.client instanceof DynamoDB_1.DynamoDB) {
        page = await makePagedRequest(config.client, input, ...additionalArguments);
      } else if (config.client instanceof DynamoDBClient_1.DynamoDBClient) {
        page = await makePagedClientRequest(config.client, input, ...additionalArguments);
      } else {
        throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
      }
      yield page;
      token = page.NextToken;
      hasNext = !!token;
    }
    return void 0;
  }
  exports2.paginateListContributorInsights = paginateListContributorInsights;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/pagination/ListExportsPaginator.js
var require_ListExportsPaginator = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.paginateListExports = void 0;
  var DynamoDB_1 = require_DynamoDB();
  var DynamoDBClient_1 = require_DynamoDBClient();
  var ListExportsCommand_1 = require_ListExportsCommand();
  var makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListExportsCommand_1.ListExportsCommand(input), ...args);
  };
  var makePagedRequest = async (client, input, ...args) => {
    return await client.listExports(input, ...args);
  };
  async function* paginateListExports(config, input, ...additionalArguments) {
    let token = config.startingToken || void 0;
    let hasNext = true;
    let page;
    while (hasNext) {
      input.NextToken = token;
      input["MaxResults"] = config.pageSize;
      if (config.client instanceof DynamoDB_1.DynamoDB) {
        page = await makePagedRequest(config.client, input, ...additionalArguments);
      } else if (config.client instanceof DynamoDBClient_1.DynamoDBClient) {
        page = await makePagedClientRequest(config.client, input, ...additionalArguments);
      } else {
        throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
      }
      yield page;
      token = page.NextToken;
      hasNext = !!token;
    }
    return void 0;
  }
  exports2.paginateListExports = paginateListExports;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/pagination/ListTablesPaginator.js
var require_ListTablesPaginator = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.paginateListTables = void 0;
  var DynamoDB_1 = require_DynamoDB();
  var DynamoDBClient_1 = require_DynamoDBClient();
  var ListTablesCommand_1 = require_ListTablesCommand();
  var makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListTablesCommand_1.ListTablesCommand(input), ...args);
  };
  var makePagedRequest = async (client, input, ...args) => {
    return await client.listTables(input, ...args);
  };
  async function* paginateListTables(config, input, ...additionalArguments) {
    let token = config.startingToken || void 0;
    let hasNext = true;
    let page;
    while (hasNext) {
      input.ExclusiveStartTableName = token;
      input["Limit"] = config.pageSize;
      if (config.client instanceof DynamoDB_1.DynamoDB) {
        page = await makePagedRequest(config.client, input, ...additionalArguments);
      } else if (config.client instanceof DynamoDBClient_1.DynamoDBClient) {
        page = await makePagedClientRequest(config.client, input, ...additionalArguments);
      } else {
        throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
      }
      yield page;
      token = page.LastEvaluatedTableName;
      hasNext = !!token;
    }
    return void 0;
  }
  exports2.paginateListTables = paginateListTables;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/pagination/QueryPaginator.js
var require_QueryPaginator = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.paginateQuery = void 0;
  var DynamoDB_1 = require_DynamoDB();
  var DynamoDBClient_1 = require_DynamoDBClient();
  var QueryCommand_1 = require_QueryCommand();
  var makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new QueryCommand_1.QueryCommand(input), ...args);
  };
  var makePagedRequest = async (client, input, ...args) => {
    return await client.query(input, ...args);
  };
  async function* paginateQuery(config, input, ...additionalArguments) {
    let token = config.startingToken || void 0;
    let hasNext = true;
    let page;
    while (hasNext) {
      input.ExclusiveStartKey = token;
      input["Limit"] = config.pageSize;
      if (config.client instanceof DynamoDB_1.DynamoDB) {
        page = await makePagedRequest(config.client, input, ...additionalArguments);
      } else if (config.client instanceof DynamoDBClient_1.DynamoDBClient) {
        page = await makePagedClientRequest(config.client, input, ...additionalArguments);
      } else {
        throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
      }
      yield page;
      token = page.LastEvaluatedKey;
      hasNext = !!token;
    }
    return void 0;
  }
  exports2.paginateQuery = paginateQuery;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/pagination/ScanPaginator.js
var require_ScanPaginator = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.paginateScan = void 0;
  var DynamoDB_1 = require_DynamoDB();
  var DynamoDBClient_1 = require_DynamoDBClient();
  var ScanCommand_1 = require_ScanCommand();
  var makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ScanCommand_1.ScanCommand(input), ...args);
  };
  var makePagedRequest = async (client, input, ...args) => {
    return await client.scan(input, ...args);
  };
  async function* paginateScan(config, input, ...additionalArguments) {
    let token = config.startingToken || void 0;
    let hasNext = true;
    let page;
    while (hasNext) {
      input.ExclusiveStartKey = token;
      input["Limit"] = config.pageSize;
      if (config.client instanceof DynamoDB_1.DynamoDB) {
        page = await makePagedRequest(config.client, input, ...additionalArguments);
      } else if (config.client instanceof DynamoDBClient_1.DynamoDBClient) {
        page = await makePagedClientRequest(config.client, input, ...additionalArguments);
      } else {
        throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
      }
      yield page;
      token = page.LastEvaluatedKey;
      hasNext = !!token;
    }
    return void 0;
  }
  exports2.paginateScan = paginateScan;
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/pagination/Interfaces.js
var require_Interfaces = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/models/index.js
var require_models = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib();
  tslib_1.__exportStar(require_models_0(), exports2);
});

// node_modules/@aws-sdk/client-dynamodb/dist/cjs/index.js
var require_cjs36 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib();
  tslib_1.__exportStar(require_DynamoDBClient(), exports2);
  tslib_1.__exportStar(require_DynamoDB(), exports2);
  tslib_1.__exportStar(require_BatchExecuteStatementCommand(), exports2);
  tslib_1.__exportStar(require_BatchGetItemCommand(), exports2);
  tslib_1.__exportStar(require_BatchWriteItemCommand(), exports2);
  tslib_1.__exportStar(require_CreateBackupCommand(), exports2);
  tslib_1.__exportStar(require_CreateGlobalTableCommand(), exports2);
  tslib_1.__exportStar(require_CreateTableCommand(), exports2);
  tslib_1.__exportStar(require_DeleteBackupCommand(), exports2);
  tslib_1.__exportStar(require_DeleteItemCommand(), exports2);
  tslib_1.__exportStar(require_DeleteTableCommand(), exports2);
  tslib_1.__exportStar(require_DescribeBackupCommand(), exports2);
  tslib_1.__exportStar(require_DescribeContinuousBackupsCommand(), exports2);
  tslib_1.__exportStar(require_DescribeContributorInsightsCommand(), exports2);
  tslib_1.__exportStar(require_DescribeEndpointsCommand(), exports2);
  tslib_1.__exportStar(require_DescribeExportCommand(), exports2);
  tslib_1.__exportStar(require_DescribeGlobalTableCommand(), exports2);
  tslib_1.__exportStar(require_DescribeGlobalTableSettingsCommand(), exports2);
  tslib_1.__exportStar(require_DescribeKinesisStreamingDestinationCommand(), exports2);
  tslib_1.__exportStar(require_DescribeLimitsCommand(), exports2);
  tslib_1.__exportStar(require_DescribeTableCommand(), exports2);
  tslib_1.__exportStar(require_waitForTableExists(), exports2);
  tslib_1.__exportStar(require_waitForTableNotExists(), exports2);
  tslib_1.__exportStar(require_DescribeTableReplicaAutoScalingCommand(), exports2);
  tslib_1.__exportStar(require_DescribeTimeToLiveCommand(), exports2);
  tslib_1.__exportStar(require_DisableKinesisStreamingDestinationCommand(), exports2);
  tslib_1.__exportStar(require_EnableKinesisStreamingDestinationCommand(), exports2);
  tslib_1.__exportStar(require_ExecuteStatementCommand(), exports2);
  tslib_1.__exportStar(require_ExecuteTransactionCommand(), exports2);
  tslib_1.__exportStar(require_ExportTableToPointInTimeCommand(), exports2);
  tslib_1.__exportStar(require_GetItemCommand(), exports2);
  tslib_1.__exportStar(require_ListBackupsCommand(), exports2);
  tslib_1.__exportStar(require_ListContributorInsightsCommand(), exports2);
  tslib_1.__exportStar(require_ListContributorInsightsPaginator(), exports2);
  tslib_1.__exportStar(require_ListExportsCommand(), exports2);
  tslib_1.__exportStar(require_ListExportsPaginator(), exports2);
  tslib_1.__exportStar(require_ListGlobalTablesCommand(), exports2);
  tslib_1.__exportStar(require_ListTablesCommand(), exports2);
  tslib_1.__exportStar(require_ListTablesPaginator(), exports2);
  tslib_1.__exportStar(require_ListTagsOfResourceCommand(), exports2);
  tslib_1.__exportStar(require_PutItemCommand(), exports2);
  tslib_1.__exportStar(require_QueryCommand(), exports2);
  tslib_1.__exportStar(require_QueryPaginator(), exports2);
  tslib_1.__exportStar(require_RestoreTableFromBackupCommand(), exports2);
  tslib_1.__exportStar(require_RestoreTableToPointInTimeCommand(), exports2);
  tslib_1.__exportStar(require_ScanCommand(), exports2);
  tslib_1.__exportStar(require_ScanPaginator(), exports2);
  tslib_1.__exportStar(require_TagResourceCommand(), exports2);
  tslib_1.__exportStar(require_TransactGetItemsCommand(), exports2);
  tslib_1.__exportStar(require_TransactWriteItemsCommand(), exports2);
  tslib_1.__exportStar(require_UntagResourceCommand(), exports2);
  tslib_1.__exportStar(require_UpdateContinuousBackupsCommand(), exports2);
  tslib_1.__exportStar(require_UpdateContributorInsightsCommand(), exports2);
  tslib_1.__exportStar(require_UpdateGlobalTableCommand(), exports2);
  tslib_1.__exportStar(require_UpdateGlobalTableSettingsCommand(), exports2);
  tslib_1.__exportStar(require_UpdateItemCommand(), exports2);
  tslib_1.__exportStar(require_UpdateTableCommand(), exports2);
  tslib_1.__exportStar(require_UpdateTableReplicaAutoScalingCommand(), exports2);
  tslib_1.__exportStar(require_UpdateTimeToLiveCommand(), exports2);
  tslib_1.__exportStar(require_Interfaces(), exports2);
  tslib_1.__exportStar(require_models(), exports2);
});

// node_modules/@aws-sdk/util-dynamodb/dist/cjs/convertToAttr.js
var require_convertToAttr = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.convertToAttr = void 0;
  var convertToAttr = (data, options) => {
    var _a, _b, _c, _d, _e, _f;
    if (data === void 0) {
      throw new Error(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
    } else if (data === null && typeof data === "object") {
      return convertToNullAttr();
    } else if (Array.isArray(data)) {
      return convertToListAttr(data, options);
    } else if (((_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name) === "Set") {
      return convertToSetAttr(data, options);
    } else if (((_b = data === null || data === void 0 ? void 0 : data.constructor) === null || _b === void 0 ? void 0 : _b.name) === "Map") {
      return convertToMapAttrFromIterable(data, options);
    } else if (((_c = data === null || data === void 0 ? void 0 : data.constructor) === null || _c === void 0 ? void 0 : _c.name) === "Object" || !data.constructor && typeof data === "object") {
      return convertToMapAttrFromEnumerableProps(data, options);
    } else if (isBinary(data)) {
      if (data.length === 0 && (options === null || options === void 0 ? void 0 : options.convertEmptyValues)) {
        return convertToNullAttr();
      }
      return convertToBinaryAttr(data);
    } else if (typeof data === "boolean" || ((_d = data === null || data === void 0 ? void 0 : data.constructor) === null || _d === void 0 ? void 0 : _d.name) === "Boolean") {
      return {BOOL: data.valueOf()};
    } else if (typeof data === "number" || ((_e = data === null || data === void 0 ? void 0 : data.constructor) === null || _e === void 0 ? void 0 : _e.name) === "Number") {
      return convertToNumberAttr(data);
    } else if (typeof data === "bigint") {
      return convertToBigIntAttr(data);
    } else if (typeof data === "string" || ((_f = data === null || data === void 0 ? void 0 : data.constructor) === null || _f === void 0 ? void 0 : _f.name) === "String") {
      if (data.length === 0 && (options === null || options === void 0 ? void 0 : options.convertEmptyValues)) {
        return convertToNullAttr();
      }
      return convertToStringAttr(data);
    } else if ((options === null || options === void 0 ? void 0 : options.convertClassInstanceToMap) && typeof data === "object") {
      return convertToMapAttrFromEnumerableProps(data, options);
    }
    throw new Error(`Unsupported type passed: ${data}. Pass options.convertClassInstanceToMap=true to marshall typeof object as map attribute.`);
  };
  exports2.convertToAttr = convertToAttr;
  var convertToListAttr = (data, options) => ({
    L: data.filter((item) => !(options === null || options === void 0 ? void 0 : options.removeUndefinedValues) || (options === null || options === void 0 ? void 0 : options.removeUndefinedValues) && item !== void 0).map((item) => exports2.convertToAttr(item, options))
  });
  var convertToSetAttr = (set, options) => {
    const setToOperate = (options === null || options === void 0 ? void 0 : options.removeUndefinedValues) ? new Set([...set].filter((value) => value !== void 0)) : set;
    if (!(options === null || options === void 0 ? void 0 : options.removeUndefinedValues) && setToOperate.has(void 0)) {
      throw new Error(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
    }
    if (setToOperate.size === 0) {
      if (options === null || options === void 0 ? void 0 : options.convertEmptyValues) {
        return convertToNullAttr();
      }
      throw new Error(`Pass a non-empty set, or options.convertEmptyValues=true.`);
    }
    const item = setToOperate.values().next().value;
    if (typeof item === "number") {
      return {
        NS: Array.from(setToOperate).map(convertToNumberAttr).map((item2) => item2.N)
      };
    } else if (typeof item === "bigint") {
      return {
        NS: Array.from(setToOperate).map(convertToBigIntAttr).map((item2) => item2.N)
      };
    } else if (typeof item === "string") {
      return {
        SS: Array.from(setToOperate).map(convertToStringAttr).map((item2) => item2.S)
      };
    } else if (isBinary(item)) {
      return {
        BS: Array.from(setToOperate).map(convertToBinaryAttr).map((item2) => item2.B)
      };
    } else {
      throw new Error(`Only Number Set (NS), Binary Set (BS) or String Set (SS) are allowed.`);
    }
  };
  var convertToMapAttrFromIterable = (data, options) => ({
    M: ((data2) => {
      const map = {};
      for (const [key, value] of data2) {
        if (typeof value !== "function" && (value !== void 0 || !(options === null || options === void 0 ? void 0 : options.removeUndefinedValues))) {
          map[key] = exports2.convertToAttr(value, options);
        }
      }
      return map;
    })(data)
  });
  var convertToMapAttrFromEnumerableProps = (data, options) => ({
    M: ((data2) => {
      const map = {};
      for (const key in data2) {
        const value = data2[key];
        if (typeof value !== "function" && (value !== void 0 || !(options === null || options === void 0 ? void 0 : options.removeUndefinedValues))) {
          map[key] = exports2.convertToAttr(value, options);
        }
      }
      return map;
    })(data)
  });
  var convertToNullAttr = () => ({NULL: true});
  var convertToBinaryAttr = (data) => ({B: data});
  var convertToStringAttr = (data) => ({S: data.toString()});
  var convertToBigIntAttr = (data) => ({N: data.toString()});
  var validateBigIntAndThrow = (errorPrefix) => {
    throw new Error(`${errorPrefix} ${typeof BigInt === "function" ? "Use BigInt." : "Pass string value instead."} `);
  };
  var convertToNumberAttr = (num) => {
    if ([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].map((val) => val.toString()).includes(num.toString())) {
      throw new Error(`Special numeric value ${num.toString()} is not allowed`);
    } else if (num > Number.MAX_SAFE_INTEGER) {
      validateBigIntAndThrow(`Number ${num.toString()} is greater than Number.MAX_SAFE_INTEGER.`);
    } else if (num < Number.MIN_SAFE_INTEGER) {
      validateBigIntAndThrow(`Number ${num.toString()} is lesser than Number.MIN_SAFE_INTEGER.`);
    }
    return {N: num.toString()};
  };
  var isBinary = (data) => {
    const binaryTypes = [
      "ArrayBuffer",
      "Blob",
      "Buffer",
      "DataView",
      "File",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "Float32Array",
      "Float64Array",
      "BigInt64Array",
      "BigUint64Array"
    ];
    if (data === null || data === void 0 ? void 0 : data.constructor) {
      return binaryTypes.includes(data.constructor.name);
    }
    return false;
  };
});

// node_modules/@aws-sdk/util-dynamodb/dist/cjs/convertToNative.js
var require_convertToNative = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.convertToNative = void 0;
  var convertToNative = (data, options) => {
    for (const [key, value] of Object.entries(data)) {
      if (value !== void 0) {
        switch (key) {
          case "NULL":
            return null;
          case "BOOL":
            return Boolean(value);
          case "N":
            return convertNumber(value, options);
          case "B":
            return convertBinary(value);
          case "S":
            return convertString(value);
          case "L":
            return convertList(value, options);
          case "M":
            return convertMap(value, options);
          case "NS":
            return new Set(value.map((item) => convertNumber(item, options)));
          case "BS":
            return new Set(value.map(convertBinary));
          case "SS":
            return new Set(value.map(convertString));
          default:
            throw new Error(`Unsupported type passed: ${key}`);
        }
      }
    }
    throw new Error(`No value defined: ${JSON.stringify(data)}`);
  };
  exports2.convertToNative = convertToNative;
  var convertNumber = (numString, options) => {
    if (options === null || options === void 0 ? void 0 : options.wrapNumbers) {
      return {value: numString};
    }
    const num = Number(numString);
    const infinityValues = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
    if ((num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) && !infinityValues.includes(num)) {
      if (typeof BigInt === "function") {
        try {
          return BigInt(numString);
        } catch (error) {
          throw new Error(`${numString} can't be converted to BigInt. Set options.wrapNumbers to get string value.`);
        }
      } else {
        throw new Error(`${numString} is outside SAFE_INTEGER bounds. Set options.wrapNumbers to get string value.`);
      }
    }
    return num;
  };
  var convertString = (stringValue) => stringValue;
  var convertBinary = (binaryValue) => binaryValue;
  var convertList = (list, options) => list.map((item) => exports2.convertToNative(item, options));
  var convertMap = (map, options) => Object.entries(map).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: exports2.convertToNative(value, options)
  }), {});
});

// node_modules/@aws-sdk/util-dynamodb/dist/cjs/marshall.js
var require_marshall = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.marshall = void 0;
  var convertToAttr_1 = require_convertToAttr();
  var marshall = (data, options) => convertToAttr_1.convertToAttr(data, options).M;
  exports2.marshall = marshall;
});

// node_modules/@aws-sdk/util-dynamodb/dist/cjs/models.js
var require_models2 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
});

// node_modules/@aws-sdk/util-dynamodb/dist/cjs/unmarshall.js
var require_unmarshall = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.unmarshall = void 0;
  var convertToNative_1 = require_convertToNative();
  var unmarshall = (data, options) => convertToNative_1.convertToNative({M: data}, options);
  exports2.unmarshall = unmarshall;
});

// node_modules/@aws-sdk/util-dynamodb/dist/cjs/index.js
var require_cjs37 = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var tslib_1 = require_tslib2();
  tslib_1.__exportStar(require_convertToAttr(), exports2);
  tslib_1.__exportStar(require_convertToNative(), exports2);
  tslib_1.__exportStar(require_marshall(), exports2);
  tslib_1.__exportStar(require_models2(), exports2);
  tslib_1.__exportStar(require_unmarshall(), exports2);
});

// node_modules/dynamo-butter/lib/main.js
var require_main = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var clientDynamodb = require_cjs36();
  var utilDynamodb = require_cjs37();
  function marshalKeys(params, keys, options) {
    return keys.reduce((output, key) => {
      output[key] = params[key] ? marshallValue(params[key], options) : void 0;
      return output;
    }, {...params});
  }
  function marshallValue(value, options) {
    return Array.isArray(value) ? value.map((v) => utilDynamodb.marshall(v, options)) : utilDynamodb.marshall(value, options);
  }
  var ButterClient = class {
    constructor(dynamo, options) {
      if (!dynamo)
        throw new Error('"dynamo" is required');
      this._dynamo = dynamo;
      this._options = options;
    }
    marshall(item, keys) {
      var _a, _b;
      return marshalKeys(item, keys, {
        convertEmptyValues: (_a = this._options.convertEmptyValues) !== null && _a !== void 0 ? _a : true,
        removeUndefinedValues: (_b = this._options.removeUndefinedValues) !== null && _b !== void 0 ? _b : true
      });
    }
    unmarshall(item) {
      return utilDynamodb.unmarshall(item);
    }
    async query(params) {
      const response = await this._dynamo.send(new clientDynamodb.QueryCommand(this.marshall(params, ["ExpressionAttributeValues", "ExclusiveStartKey"])));
      response.Items = response.Items && response.Items.map(this.unmarshall);
      response.LastEvaluatedKey = response.LastEvaluatedKey && this.unmarshall(response.LastEvaluatedKey);
      return response;
    }
    async queryAll(params) {
      params = {...params};
      let result = void 0;
      const queryLimit = params.QueryLimit;
      const itemLimit = params.ItemLimit;
      delete params.QueryLimit;
      delete params.ItemLimit;
      let response = {};
      let workRemaining;
      do {
        response = await this.query({
          ...params,
          ExclusiveStartKey: response.LastEvaluatedKey
        });
        if (result === void 0) {
          result = response;
        } else {
          result.Count = optionalAdd(result.Count, response.Count);
          result.ScannedCount = optionalAdd(result.ScannedCount, response.ScannedCount);
          result.Items = ((result === null || result === void 0 ? void 0 : result.Items) || []).concat((response === null || response === void 0 ? void 0 : response.Items) || []);
          result.LastEvaluatedKey = response.LastEvaluatedKey;
        }
        workRemaining = response.LastEvaluatedKey && (queryLimit === void 0 || (result === null || result === void 0 ? void 0 : result.ScannedCount) || 0 < queryLimit) && (itemLimit === void 0 || (result === null || result === void 0 ? void 0 : result.Count) || 0 < itemLimit);
      } while (workRemaining);
      return result;
    }
    async scan(params) {
      const response = await this._dynamo.send(new clientDynamodb.ScanCommand(this.marshall(params, ["ExpressionAttributeValues", "ExclusiveStartKey"])));
      response.Items = response.Items && response.Items.map(this.unmarshall);
      response.LastEvaluatedKey = response.LastEvaluatedKey && this.unmarshall(response.LastEvaluatedKey);
      return response;
    }
    async scanAll(params) {
      params = {...params};
      let result = void 0;
      const scanLimit = params.ScanLimit;
      const itemLimit = params.ItemLimit;
      delete params.ScanLimit;
      delete params.ItemLimit;
      let response = {};
      let workRemaining;
      do {
        response = await this.scan({
          ...params,
          ExclusiveStartKey: response.LastEvaluatedKey
        });
        if (result === void 0) {
          result = response;
        } else {
          result.Count = optionalAdd(result.Count, response.Count);
          result.ScannedCount = optionalAdd(result.ScannedCount, response.ScannedCount);
          result.Items = ((result === null || result === void 0 ? void 0 : result.Items) || []).concat((response === null || response === void 0 ? void 0 : response.Items) || []);
          result.LastEvaluatedKey = response.LastEvaluatedKey;
        }
        workRemaining = response.LastEvaluatedKey && (scanLimit === void 0 || (result === null || result === void 0 ? void 0 : result.ScannedCount) || 0 < scanLimit) && (itemLimit === void 0 || (result === null || result === void 0 ? void 0 : result.Count) || 0 < itemLimit);
      } while (workRemaining);
      return result;
    }
    async get(params) {
      const response = await this._dynamo.send(new clientDynamodb.GetItemCommand(this.marshall(params, ["Key"])));
      response.Item = response.Item && this.unmarshall(response.Item);
      return response;
    }
    async put(params) {
      const response = await this._dynamo.send(new clientDynamodb.PutItemCommand(this.marshall(params, ["Item"])));
      response.Attributes = response.Attributes && this.unmarshall(response.Attributes);
      return response;
    }
    async update(params) {
      const dynamoParams = this.marshall({
        ...params,
        AttributeUpdates: params.AttributeUpdates && Object.fromEntries(Object.entries(params.AttributeUpdates).map(([prop, attr]) => [
          prop,
          this.marshall(attr, ["Value"])
        ]))
      }, ["Key"]);
      const response = await this._dynamo.send(new clientDynamodb.UpdateItemCommand(dynamoParams));
      response.Attributes = response.Attributes && this.unmarshall(response.Attributes);
      return response;
    }
    async delete(params) {
      const response = await this._dynamo.send(new clientDynamodb.GetItemCommand(this.marshall(params, ["Key"])));
      response.Item = response.Item && this.unmarshall(response.Item);
      return response;
    }
    async batchGet(params) {
      const dynamoParams = {
        ...params,
        RequestItems: params.RequestItems && Object.fromEntries(Object.entries(params.RequestItems).map(([prop, attr]) => [
          prop,
          this.marshall(attr, ["Keys"])
        ]))
      };
      const response = await this._dynamo.send(new clientDynamodb.BatchGetItemCommand(dynamoParams));
      response.Responses = response.Responses && Object.fromEntries(Object.entries(response.Responses).map(([table, items]) => [
        table,
        items.map(this.unmarshall)
      ]));
      response.UnprocessedKeys = response.UnprocessedKeys && Object.fromEntries(Object.entries(response.UnprocessedKeys).map(([table, attrs]) => {
        var _a;
        return [
          table,
          {
            ...attrs,
            Keys: (_a = attrs.Keys) === null || _a === void 0 ? void 0 : _a.map(this.unmarshall)
          }
        ];
      }));
      return response;
    }
    async batchGetAll(params) {
      const requestPool = {
        ...params.RequestItems
      };
      const pageSize = params.PageSize;
      delete params.PageSize;
      const responses = {};
      while (true) {
        const batch = sliceGetBatch(requestPool, pageSize);
        if (batch === void 0 || Object.keys(batch).length === 0)
          break;
        const response = await this.batchGet({
          ...params,
          RequestItems: batch
        });
        if (response.Responses) {
          eachObj(response.Responses, (table, items) => {
            if (!responses[table])
              responses[table] = [];
            responses[table] = responses[table].concat(items);
          });
        }
        const unprocessed = response.UnprocessedKeys && Object.keys(response.UnprocessedKeys).length !== 0 ? response.UnprocessedKeys : null;
        if (!unprocessed)
          continue;
        eachObj(unprocessed, (table, items) => {
          var _a;
          const processed = this.marshall(items, ["Keys"]);
          if (!processed.Keys)
            return;
          (_a = requestPool === null || requestPool === void 0 ? void 0 : requestPool[table].Keys) === null || _a === void 0 ? void 0 : _a.push(...processed.Keys);
        });
      }
      return {Responses: responses};
    }
    async batchWrite(params) {
      const response = await this._dynamo.send(new clientDynamodb.BatchWriteItemCommand({
        ...params,
        RequestItems: params.RequestItems && marshallBatchRequests(this, params.RequestItems)
      }));
      response.UnprocessedItems = response.UnprocessedItems && Object.fromEntries(Object.entries(response.UnprocessedItems).map(([table, requests]) => [
        table,
        requests.map((request) => ({
          PutRequest: request.PutRequest && request.PutRequest.Item && {
            Item: this.unmarshall(request.PutRequest.Item)
          },
          DeleteRequest: request.DeleteRequest && request.DeleteRequest.Key && {
            Key: this.unmarshall(request.DeleteRequest.Key)
          }
        }))
      ]));
      return response;
    }
    async batchWriteAll(params) {
      const requestPool = Object.assign({}, params.RequestItems);
      const pageSize = params.PageSize;
      delete params.PageSize;
      while (true) {
        const batch = sliceWriteBatch(requestPool, pageSize);
        if (batch === void 0 || Object.keys(batch).length === 0)
          return;
        const response = await this.batchWrite({
          ...params,
          RequestItems: batch
        });
        const unprocessed = response.UnprocessedItems && Object.keys(response.UnprocessedItems).length !== 0 ? response.UnprocessedItems : null;
        if (!unprocessed)
          continue;
        eachObj(unprocessed, (table, items) => {
          requestPool[table] = requestPool[table].concat(items);
        });
      }
    }
  };
  function up2(dynamoClientOrConfig, butterOptions = {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    useKeepAlive: true
  }) {
    if (!dynamoClientOrConfig)
      throw new Error('"dynamoClientOrConfig" parameter is required');
    let dynamo;
    if (isFunction(dynamoClientOrConfig.send)) {
      dynamo = dynamoClientOrConfig;
    } else {
      if (!dynamoClientOrConfig.region)
        throw new Error('"region" is required when providing a configuration parameter');
      if ((butterOptions === null || butterOptions === void 0 ? void 0 : butterOptions.useKeepAlive) !== false) {
        dynamo = new clientDynamodb.DynamoDBClient(dynamoClientOrConfig);
      } else {
        const {Agent} = require("https");
        const {NodeHttpHandler} = require_cjs18();
        dynamo = new clientDynamodb.DynamoDBClient({
          ...dynamoClientOrConfig,
          requestHandler: new NodeHttpHandler({
            httpsAgent: new Agent({keepAlive: false})
          })
        });
      }
    }
    const client = new ButterClient(dynamo, butterOptions);
    return client;
  }
  function sliceGetBatch(pool, pageSize = 25) {
    if (!pool)
      return;
    let requestCount = 0;
    const batch = {};
    const tables = Object.keys(pool);
    if (tables.length === 0)
      return;
    tables.forEach((tableName) => {
      var _a;
      const table = pool[tableName];
      if (!((_a = table === null || table === void 0 ? void 0 : table.Keys) === null || _a === void 0 ? void 0 : _a.length) || requestCount === pageSize)
        return;
      const keys = table.Keys.splice(0, pageSize - requestCount);
      if (keys.length === 0)
        return;
      requestCount += keys.length;
      if (!batch[tableName])
        batch[tableName] = Object.assign({}, table, {Keys: []});
      batch[tableName].Keys = batch[tableName].Keys.concat(keys);
    });
    return batch;
  }
  function sliceWriteBatch(pool, pageSize = 25) {
    if (!pool)
      return;
    let requestCount = 0;
    const batch = {};
    const tables = Object.keys(pool);
    if (tables.length === 0)
      return;
    tables.forEach((tableName) => {
      const table = pool[tableName];
      if (requestCount === pageSize || !table.length)
        return;
      const items = table.splice(0, pageSize - requestCount);
      if (items.length === 0)
        return;
      requestCount += items.length;
      batch[tableName] = batch[tableName] !== void 0 ? batch[tableName].concat(items) : items;
    });
    return batch;
  }
  function eachObj(obj, func) {
    Object.entries(obj).forEach(([key, val]) => func(key, val));
  }
  function isFunction(func) {
    return typeof func === "function";
  }
  function optionalAdd(...args) {
    return args.reduce((sum, arg) => sum += arg || 0, 0);
  }
  function marshallBatchRequests(butterClient, requestItems) {
    if (!requestItems)
      return;
    return Object.fromEntries(Object.entries(requestItems).map(([table, requests]) => [
      table,
      requests.map((request) => ({
        PutRequest: request.PutRequest && butterClient.marshall(request.PutRequest, ["Item"]),
        DeleteRequest: request.DeleteRequest && butterClient.marshall(request.DeleteRequest, ["Key"])
      }))
    ]));
  }
  exports2.churn = up2;
  exports2.up = up2;
});

// src/main.ts
__markAsModule(exports);
__export(exports, {
  BaseStore: () => BaseStore,
  BatchGetItemOutputNative: () => import_dynamo_butter.BatchGetItemOutputNative,
  BatchWriteItemOutputNative: () => import_dynamo_butter.BatchWriteItemOutputNative,
  Cache: () => Cache,
  WriteRequestNative: () => import_dynamo_butter.WriteRequestNative,
  _delimiter: () => _delimiter,
  _dynamo: () => _dynamo,
  _idField: () => _idField,
  _idKey: () => _idKey,
  _logger: () => _logger,
  _sortField: () => _sortField,
  _sortKey: () => _sortKey,
  _tableName: () => _tableName,
  _ttlField: () => _ttlField,
  _type: () => _type,
  _typeIndex: () => _typeIndex,
  asKey: () => asKey,
  clientSymbols: () => clientSymbols,
  defaultCacheTtl: () => defaultCacheTtl,
  makeClient: () => makeClient,
  storeSymbols: () => storeSymbols
});

// src/dynamo.ts
var import_dynamo_butter = __toModule(require_main());

// src/logger.ts
var logLevels = ["debug", "info", "warn", "error"];
function wrapper(logger = {}) {
  validateLogLevel(logger);
  return {
    error: makeLogWrapper(logger, "error"),
    warn: makeLogWrapper(logger, "warn"),
    info: makeLogWrapper(logger, "info"),
    debug: makeLogWrapper(logger, "debug")
  };
}
function makeLogWrapper(logger, prop) {
  return (...args) => {
    if (shouldSkipLog(logger, prop))
      return;
    const self2 = logger;
    return self2[prop] && typeof self2[prop] === "function" ? self2[prop](...args) : (console[prop] || console.log)(...args);
  };
}
function shouldSkipLog(logger, prop) {
  validateLogLevel(logger);
  const self2 = logger;
  return self2.minimumLogLevel && logLevels.indexOf(self2.minimumLogLevel) > logLevels.indexOf(prop);
}
function validateLogLevel(logger) {
  const self2 = logger;
  if (self2.minimumLogLevel && logLevels.indexOf(self2.minimumLogLevel) === -1) {
    throw new Error(`"minimumLogLevel" must be one of: ${logLevels.join(", ")} or falsy`);
  }
}

// src/dynamo.ts
var _tableName = Symbol("_tableName");
var _typeIndex = Symbol("_typeIndex");
var _idField = Symbol("_idField");
var _sortField = Symbol("_sortField");
var _ttlField = Symbol("_ttlField");
var _type = Symbol("_type");
var _dynamo = Symbol("_dynamo");
var _logger = Symbol("_logger");
var _idKey = Symbol("_idKey");
var _sortKey = Symbol("_sortKey");
var _delimiter = Symbol("_delimiter");
function makeClient({
  dynamoConfig,
  butterConfig,
  tableConfig: {
    tableName,
    idField = "id",
    sortField = "sort_key",
    typeIndex = "type-index",
    ttlField = "ttl",
    hasTtlField = true,
    hasSortField = true
  }
}) {
  if (!dynamoConfig)
    throw new Error('"dynamoConfig" is required');
  if (!dynamoConfig.region)
    throw new Error('"dynamoConfig.region" is required');
  if (!tableName)
    throw new Error('"tableConfig.tableName" is required');
  const client = import_dynamo_butter.up(dynamoConfig, butterConfig);
  client[_tableName] = tableName;
  client[_typeIndex] = typeIndex;
  client[_idField] = idField;
  client[_sortField] = hasSortField ? sortField : void 0;
  client[_ttlField] = hasTtlField ? ttlField : void 0;
  client.getTableName = () => client[_tableName];
  return client;
}
var BaseStore = class {
  constructor({logger, dynamo, type, sortKey, idKey, delimiter: delimiter2 = ":"}) {
    if (!idKey) {
      throw new Error('"idKey" is required');
    }
    this[_type] = type;
    this[_dynamo] = dynamo;
    this[_logger] = wrapper(logger);
    this[_idKey] = idKey;
    this[_sortKey] = sortKey;
    this[_delimiter] = delimiter2;
  }
  getTableName() {
    return this[_dynamo].getTableName();
  }
  join(...idParts) {
    return idParts.join(this[_delimiter]);
  }
  typeKey(...id) {
    return this.join(this[_type], ...id);
  }
  asKey(id, sortKey) {
    return asKey(this[_dynamo], this.typeKey(id), sortKey);
  }
  getKey(item) {
    return asKey(this[_dynamo], this.typeKey(item[this[_idKey]]), this[_sortKey] ? item[this[_sortKey]] : void 0);
  }
  fromDb(item) {
    if (!item || !item.data)
      return null;
    const result = item.data;
    return result;
  }
  toDb(item) {
    const id = item[this[_idKey]];
    const data = {...item};
    const dbItem = {
      ...this.getKey(item),
      type: this[_type],
      typeId: id,
      createdOn: item.createdOn,
      updatedOn: Date.now(),
      data
    };
    return dbItem;
  }
  async get(id, sortKey) {
    const response = await this[_dynamo].get({
      TableName: this.getTableName(),
      Key: this.asKey(id, sortKey)
    });
    return this.fromDb(response.Item);
  }
  async put(item) {
    await this[_dynamo].put({
      TableName: this.getTableName(),
      Item: this.toDb(item)
    });
    return item;
  }
  async putAll(items) {
    await this.batchWriteAll(items.map((item) => ({
      PutRequest: {Item: this.toDb(item)}
    })));
  }
  async delete(id, sortKey) {
    await this[_dynamo].delete({
      TableName: this.getTableName(),
      Key: this.asKey(id, sortKey)
    });
  }
  async deleteAll(items) {
    await this.batchWriteAll(items.map((item) => ({
      DeleteRequest: {Key: this.getKey(item)}
    })));
  }
  async query(params) {
    var _a;
    const response = await this[_dynamo].query({
      TableName: this.getTableName(),
      ...params
    });
    if (!((_a = response == null ? void 0 : response.Items) == null ? void 0 : _a.length))
      return [];
    return response.Items.map(this.fromDb);
  }
  async queryAll(params) {
    var _a;
    const response = await this[_dynamo].queryAll({
      TableName: this.getTableName(),
      ...params
    });
    if (!((_a = response == null ? void 0 : response.Items) == null ? void 0 : _a.length))
      return [];
    return response.Items.map(this.fromDb);
  }
  async scan(params) {
    var _a;
    const response = await this[_dynamo].scan({
      TableName: this.getTableName(),
      ...params
    });
    if (!((_a = response == null ? void 0 : response.Items) == null ? void 0 : _a.length))
      return [];
    return response.Items.map(this.fromDb);
  }
  async scanAll(params) {
    var _a;
    const response = await this[_dynamo].scanAll({
      TableName: this.getTableName(),
      ...params
    });
    if (!((_a = response == null ? void 0 : response.Items) == null ? void 0 : _a.length))
      return [];
    return response.Items.map(this.fromDb);
  }
  async batchGet(keys) {
    if (!keys || !Array.isArray(keys))
      throw new Error('"keys" parameter must be an array');
    if (!keys.length)
      return {
        Responses: {[this.getTableName()]: []}
      };
    return this[_dynamo].batchGet({
      RequestItems: {
        [this.getTableName()]: {
          Keys: keys
        }
      }
    });
  }
  async batchGetAll(keys) {
    var _a, _b;
    if (!keys || !Array.isArray(keys))
      throw new Error('"keys" parameter must be an array');
    if (!keys.length)
      return [];
    const response = await this[_dynamo].batchGetAll({
      RequestItems: {
        [this.getTableName()]: {
          Keys: keys
        }
      }
    });
    if (!((_b = (_a = response == null ? void 0 : response.Responses) == null ? void 0 : _a[this.getTableName()]) == null ? void 0 : _b.length))
      return [];
    return response.Responses[this.getTableName()].map(this.fromDb);
  }
  async batchWrite(changes) {
    if (!changes || !Array.isArray(changes))
      throw new Error('"changes" parameter must be an array');
    if (!changes.length)
      return {};
    return this[_dynamo].batchWrite({
      RequestItems: {
        [this.getTableName()]: changes
      }
    });
  }
  async batchWriteAll(changes) {
    if (!changes || !Array.isArray(changes))
      throw new Error('"changes" parameter must be an array');
    if (!changes.length)
      return;
    return this[_dynamo].batchWriteAll({
      RequestItems: {
        [this.getTableName()]: changes
      }
    });
  }
  async getAll() {
    var _a;
    const typeIndex = this[_dynamo][_typeIndex];
    const response = await this[_dynamo].queryAll({
      TableName: this.getTableName(),
      IndexName: typeIndex,
      KeyConditionExpression: "#type = :type",
      ExpressionAttributeNames: {"#type": "type"},
      ExpressionAttributeValues: {":type": this[_type]}
    });
    if (!((_a = response == null ? void 0 : response.Items) == null ? void 0 : _a.length))
      return [];
    return response.Items.map(this.fromDb);
  }
  async forEachPage(pageFn, pageSize = 100) {
    var _a;
    const typeIndex = this[_dynamo][_typeIndex];
    let lastKey;
    do {
      const dbResult = await this[_dynamo].query({
        TableName: this.getTableName(),
        IndexName: typeIndex,
        KeyConditionExpression: "#type = :type",
        ExpressionAttributeNames: {"#type": "type"},
        ExpressionAttributeValues: {":type": this[_type]},
        Limit: pageSize,
        ExclusiveStartKey: lastKey
      });
      if ((_a = dbResult == null ? void 0 : dbResult.Items) == null ? void 0 : _a.length) {
        await pageFn(dbResult.Items.map(this.fromDb));
      }
      lastKey = dbResult.LastEvaluatedKey;
    } while (lastKey);
  }
};
_type, _dynamo, _logger, _idKey, _sortKey, _delimiter;
function asKey(dynamo, id, sortKey) {
  const idField = dynamo[_idField];
  const sortField = dynamo[_sortField];
  const key = {[idField]: id};
  if (sortField)
    key[sortField] = sortKey != null ? sortKey : "_";
  return key;
}

// src/cache.ts
var defaultCacheTtl = 3e5;
var delimiter = ":";
var CACHE_TYPE = "_CACHE-KEY_";
var asDynamoKey = (key) => [CACHE_TYPE, key].join(delimiter);
var Cache = class {
  constructor({dynamo, logger, metrics}) {
    this[_dynamo] = dynamo;
    this[_logger] = wrapper(logger);
    this.metrics = metricsWrapper(metrics, this[_logger]);
  }
  asKey(id) {
    return asKey(this[_dynamo], asDynamoKey(id));
  }
  async get(key, cacheMissFn, options = {}) {
    validateOptions(options);
    const ttlField = this[_dynamo][_ttlField];
    const cacheResult = await this[_dynamo].get({
      TableName: this[_dynamo].getTableName(),
      Key: this.asKey(key)
    }).then((r) => r.Item).catch((e) => {
      if (!/resource not found/i.test(e.toString())) {
        throw e;
      }
      return null;
    });
    const isItemExpired = isExpired(cacheResult || {}, options, ttlField);
    if (cacheResult && !isItemExpired) {
      this.metrics.cacheHit(key);
      return cacheResult.data;
    }
    this.metrics.cacheMiss(key, {isItemExpired});
    let fnResult;
    try {
      fnResult = await cacheMissFn();
    } catch (e) {
      this[_logger].error("error getting cache fn", e.message, e.stack);
      if (options.allowStale && cacheResult)
        return cacheResult.data;
      throw e;
    }
    await this.set(key, fnResult, options);
    return fnResult;
  }
  async set(key, value, options = {}) {
    const ttlField = this[_dynamo][_ttlField];
    await this[_dynamo].put({
      TableName: this[_dynamo].getTableName(),
      Item: {
        ...this.asKey(key),
        type: CACHE_TYPE,
        data: value,
        createdOn: Date.now(),
        [ttlField]: getTtl(options)
      }
    });
    return value;
  }
  async clear(key) {
    await this[_dynamo].delete({
      TableName: this[_dynamo].getTableName(),
      Key: this.asKey(key)
    });
  }
  async batchGet(keys, cacheMissFn) {
    const idField = this[_dynamo][_idField];
    const ttlField = this[_dynamo][_ttlField];
    const cacheKeys = keys.map((key) => asKey(this[_dynamo], asDynamoKey(key.id)));
    this[_logger].debug("batchGet - checking cache");
    const RequestItems = {
      [this[_dynamo].getTableName()]: {Keys: cacheKeys}
    };
    const cacheResult = await this[_dynamo].batchGet({RequestItems}).then((r) => {
      var _a;
      return ((_a = r.Responses) == null ? void 0 : _a[this[_dynamo].getTableName()]) || [];
    }).catch((e) => {
      if (!/resource not found/i.test(e.toString())) {
        throw e;
      }
      return [];
    });
    if (cacheResult.length) {
      const matcher = (dbKey) => keys.findIndex((k) => dbKey[idField] === asKey(this[_dynamo], asDynamoKey(k.id))[idField]);
      cacheResult.filter((r) => !isExpired(r, keys[matcher(r)], ttlField)).sort((a, b) => matcher(a) - matcher(b));
      return cacheResult[0].data;
    }
    this[_logger].debug("batchGet - cache miss");
    const fnResult = await cacheMissFn();
    await this[_dynamo].batchWrite({
      RequestItems: {
        [this[_dynamo].getTableName()]: keys.map((key) => {
          return {
            PutRequest: {
              Item: {
                ...this.asKey(key.id),
                type: CACHE_TYPE,
                data: fnResult,
                [ttlField]: getTtl(key)
              }
            }
          };
        })
      }
    });
    return fnResult;
  }
};
_dynamo, _logger;
function isExpired(item, options = {}, ttlField) {
  const isTtlExpired = item[ttlField] && item[ttlField] * 1e3 < Date.now();
  const isStale = options.staleAfter && Date.now() - item.createdOn > options.staleAfter;
  return isTtlExpired || isStale;
}
function getTtl(options) {
  if (options.permanent)
    return void 0;
  let ttl;
  if (options.ttl)
    ttl = options.ttl;
  else if (options.clearAfter)
    ttl = Date.now() + options.clearAfter;
  else
    ttl = Date.now() + defaultCacheTtl;
  return Math.floor(ttl / 1e3);
}
function metricsWrapper(metrics, logger) {
  return metrics || {
    cacheHit: (key) => logger.debug(`cache hit: ${key}`),
    cacheMiss: (key) => logger.debug(`cache miss: ${key}`)
  };
}
function validateOptions(options) {
  if (!options)
    return;
  if (options.ttl && options.clearAfter)
    throw new Error('cache options "ttl" and "clearAfter" are mutually exclusive');
}

// src/main.ts
var clientSymbols = {
  _tableName,
  _typeIndex,
  _idField,
  _sortField,
  _ttlField
};
var storeSymbols = {
  _type,
  _dynamo,
  _logger,
  _idKey,
  _sortKey,
  _delimiter
};
