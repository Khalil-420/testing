import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  $1746a345f3d73bb7$export$f680877a34711e37,
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c,
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $d3863c46a17e8a28$export$20e40289641fbbb6,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  $f1701beae083dbae$export$602eac185826482c,
  Check,
  ChevronsUpDown,
  Combination_default,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  MessageDialog,
  PlusIcon,
  RemoveScrollBar,
  Search,
  TrashIcon,
  __assign,
  __rest,
  __spreadArray,
  createSidecarMedium,
  exportSidecar,
  fullWidthClassName,
  hideOthers,
  styleSingleton,
  useMergeRefs,
  zeroRightClassName
} from "/build/_shared/chunk-XI7XXCOH.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  Button,
  _extends,
  cn,
  cva
} from "/build/_shared/chunk-OCIN7GG6.js";
import {
  useFetcher
} from "/build/_shared/chunk-7KR3KC3F.js";
import {
  require_react_dom
} from "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-E6SGNXN2.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment6 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment6;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err2) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err2 = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err2.name = "Invariant Violation";
                throw err2;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err2 = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err2.name = "Invariant Violation";
              throw err2;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode2(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode2(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode2);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode2(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode2(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/shallow-equal/arrays/index.js
var require_arrays = __commonJS({
  "node_modules/shallow-equal/arrays/index.js"(exports, module) {
    "use strict";
    function shallowEqualArrays(arrA, arrB) {
      if (arrA === arrB) {
        return true;
      }
      if (!arrA || !arrB) {
        return false;
      }
      var len = arrA.length;
      if (arrB.length !== len) {
        return false;
      }
      for (var i = 0; i < len; i++) {
        if (arrA[i] !== arrB[i]) {
          return false;
        }
      }
      return true;
    }
    module.exports = shallowEqualArrays;
  }
});

// node_modules/section-iterator/dist/index.js
var require_dist = __commonJS({
  "node_modules/section-iterator/dist/index.js"(exports, module) {
    "use strict";
    var _slicedToArray4 = function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s5; !(_n = (_s5 = _i.next()).done); _n = true) {
            _arr.push(_s5.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err2) {
          _d = true;
          _e = err2;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    module.exports = function(_ref) {
      var data = _ref.data;
      var multiSection = _ref.multiSection;
      function nextNonEmptySectionIndex(sectionIndex) {
        if (sectionIndex === null) {
          sectionIndex = 0;
        } else {
          sectionIndex++;
        }
        while (sectionIndex < data.length && data[sectionIndex] === 0) {
          sectionIndex++;
        }
        return sectionIndex === data.length ? null : sectionIndex;
      }
      function prevNonEmptySectionIndex(sectionIndex) {
        if (sectionIndex === null) {
          sectionIndex = data.length - 1;
        } else {
          sectionIndex--;
        }
        while (sectionIndex >= 0 && data[sectionIndex] === 0) {
          sectionIndex--;
        }
        return sectionIndex === -1 ? null : sectionIndex;
      }
      function next(position) {
        var _position = _slicedToArray4(position, 2);
        var sectionIndex = _position[0];
        var itemIndex = _position[1];
        if (multiSection) {
          if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
            sectionIndex = nextNonEmptySectionIndex(sectionIndex);
            if (sectionIndex === null) {
              return [null, null];
            }
            return [sectionIndex, 0];
          }
          return [sectionIndex, itemIndex + 1];
        }
        if (data === 0 || itemIndex === data - 1) {
          return [null, null];
        }
        if (itemIndex === null) {
          return [null, 0];
        }
        return [null, itemIndex + 1];
      }
      function prev(position) {
        var _position2 = _slicedToArray4(position, 2);
        var sectionIndex = _position2[0];
        var itemIndex = _position2[1];
        if (multiSection) {
          if (itemIndex === null || itemIndex === 0) {
            sectionIndex = prevNonEmptySectionIndex(sectionIndex);
            if (sectionIndex === null) {
              return [null, null];
            }
            return [sectionIndex, data[sectionIndex] - 1];
          }
          return [sectionIndex, itemIndex - 1];
        }
        if (data === 0 || itemIndex === 0) {
          return [null, null];
        }
        if (itemIndex === null) {
          return [null, data - 1];
        }
        return [null, itemIndex - 1];
      }
      function isLast(position) {
        return next(position)[1] === null;
      }
      return {
        next,
        prev,
        isLast
      };
    };
  }
});

// node_modules/react-themeable/node_modules/object-assign/index.js
var require_object_assign2 = __commonJS({
  "node_modules/react-themeable/node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function ToObject(val) {
      if (val == null) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function ownEnumerableKeys(obj) {
      var keys = Object.getOwnPropertyNames(obj);
      if (Object.getOwnPropertySymbols) {
        keys = keys.concat(Object.getOwnPropertySymbols(obj));
      }
      return keys.filter(function(key) {
        return propIsEnumerable.call(obj, key);
      });
    }
    module.exports = Object.assign || function(target, source) {
      var from;
      var keys;
      var to = ToObject(target);
      for (var s = 1; s < arguments.length; s++) {
        from = arguments[s];
        keys = ownEnumerableKeys(Object(from));
        for (var i = 0; i < keys.length; i++) {
          to[keys[i]] = from[keys[i]];
        }
      }
      return to;
    };
  }
});

// node_modules/react-themeable/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/react-themeable/dist/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _slicedToArray4 = function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s5; !(_n = (_s5 = _i.next()).done); _n = true) {
            _arr.push(_s5.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err2) {
          _d = true;
          _e = err2;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
          arr2[i] = arr[i];
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    var _objectAssign = require_object_assign2();
    var _objectAssign2 = _interopRequireDefault(_objectAssign);
    var truthy = function truthy2(x) {
      return x;
    };
    exports["default"] = function(input) {
      var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];
      var _ref2 = _slicedToArray4(_ref, 2);
      var theme = _ref2[0];
      var classNameDecorator = _ref2[1];
      return function(key) {
        for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          names[_key - 1] = arguments[_key];
        }
        var styles = names.map(function(name) {
          return theme[name];
        }).filter(truthy);
        return typeof styles[0] === "string" || typeof classNameDecorator === "function" ? { key, className: classNameDecorator ? classNameDecorator.apply(void 0, _toConsumableArray(styles)) : styles.join(" ") } : { key, style: _objectAssign2["default"].apply(void 0, [{}].concat(_toConsumableArray(styles))) };
      };
    };
    module.exports = exports["default"];
  }
});

// node_modules/react-autosuggest/dist/compareObjects.js
var require_compareObjects = __commonJS({
  "node_modules/react-autosuggest/dist/compareObjects.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = compareObjects;
    function _typeof4(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof4 = function _typeof5(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof4 = function _typeof5(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof4(obj);
    }
    function compareObjects(objA, objB) {
      var keys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (objA === objB) {
        return false;
      }
      var aKeys = Object.keys(objA);
      var bKeys = Object.keys(objB);
      if (aKeys.length !== bKeys.length) {
        return true;
      }
      var keysMap = {};
      var i, len;
      for (i = 0, len = keys.length; i < len; i++) {
        keysMap[keys[i]] = true;
      }
      for (i = 0, len = aKeys.length; i < len; i++) {
        var key = aKeys[i];
        var aValue = objA[key];
        var bValue = objB[key];
        if (aValue === bValue) {
          continue;
        }
        if (!keysMap[key] || aValue === null || bValue === null || _typeof4(aValue) !== "object" || _typeof4(bValue) !== "object") {
          return true;
        }
        var aValueKeys = Object.keys(aValue);
        var bValueKeys = Object.keys(bValue);
        if (aValueKeys.length !== bValueKeys.length) {
          return true;
        }
        for (var n = 0, length = aValueKeys.length; n < length; n++) {
          var aValueKey = aValueKeys[n];
          if (aValue[aValueKey] !== bValue[aValueKey]) {
            return true;
          }
        }
      }
      return false;
    }
  }
});

// node_modules/react-autosuggest/dist/SectionTitle.js
var require_SectionTitle = __commonJS({
  "node_modules/react-autosuggest/dist/SectionTitle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _compareObjects = _interopRequireDefault(require_compareObjects());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof4(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof4(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof4 = function _typeof5(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof4 = function _typeof5(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof4(obj);
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _createSuper2(Derived) {
      return function() {
        var Super = _getPrototypeOf2(Derived), result;
        if (_isNativeReflectConstruct2()) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof4(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p2) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf2(o, p2);
    }
    function _defineProperty5(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SectionTitle = /* @__PURE__ */ function(_Component) {
      _inherits2(SectionTitle2, _Component);
      var _super = _createSuper2(SectionTitle2);
      function SectionTitle2() {
        _classCallCheck2(this, SectionTitle2);
        return _super.apply(this, arguments);
      }
      _createClass2(SectionTitle2, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          return (0, _compareObjects["default"])(nextProps, this.props);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props, section = _this$props.section, renderSectionTitle = _this$props.renderSectionTitle, theme = _this$props.theme, sectionKeyPrefix = _this$props.sectionKeyPrefix;
          var sectionTitle = renderSectionTitle(section);
          if (!sectionTitle) {
            return null;
          }
          return /* @__PURE__ */ _react["default"].createElement("div", theme("".concat(sectionKeyPrefix, "title"), "sectionTitle"), sectionTitle);
        }
      }]);
      return SectionTitle2;
    }(_react.Component);
    exports["default"] = SectionTitle;
    _defineProperty5(SectionTitle, "propTypes", {
      section: _propTypes["default"].any.isRequired,
      renderSectionTitle: _propTypes["default"].func.isRequired,
      theme: _propTypes["default"].func.isRequired,
      sectionKeyPrefix: _propTypes["default"].string.isRequired
    });
  }
});

// node_modules/react-autosuggest/dist/Item.js
var require_Item = __commonJS({
  "node_modules/react-autosuggest/dist/Item.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _compareObjects = _interopRequireDefault(require_compareObjects());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof4(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof4(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof4 = function _typeof5(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof4 = function _typeof5(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof4(obj);
    }
    function _extends2() {
      _extends2 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends2.apply(this, arguments);
    }
    function ownKeys5(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread5(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys5(Object(source), true).forEach(function(key) {
            _defineProperty5(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys5(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _objectWithoutProperties2(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose2(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _createSuper2(Derived) {
      return function() {
        var Super = _getPrototypeOf2(Derived), result;
        if (_isNativeReflectConstruct2()) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof4(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p2) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf2(o, p2);
    }
    function _defineProperty5(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var Item = /* @__PURE__ */ function(_Component) {
      _inherits2(Item2, _Component);
      var _super = _createSuper2(Item2);
      function Item2() {
        var _this;
        _classCallCheck2(this, Item2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty5(_assertThisInitialized2(_this), "storeItemReference", function(item) {
          if (item !== null) {
            _this.item = item;
          }
        });
        _defineProperty5(_assertThisInitialized2(_this), "onMouseEnter", function(event) {
          var _this$props = _this.props, sectionIndex = _this$props.sectionIndex, itemIndex = _this$props.itemIndex;
          _this.props.onMouseEnter(event, {
            sectionIndex,
            itemIndex
          });
        });
        _defineProperty5(_assertThisInitialized2(_this), "onMouseLeave", function(event) {
          var _this$props2 = _this.props, sectionIndex = _this$props2.sectionIndex, itemIndex = _this$props2.itemIndex;
          _this.props.onMouseLeave(event, {
            sectionIndex,
            itemIndex
          });
        });
        _defineProperty5(_assertThisInitialized2(_this), "onMouseDown", function(event) {
          var _this$props3 = _this.props, sectionIndex = _this$props3.sectionIndex, itemIndex = _this$props3.itemIndex;
          _this.props.onMouseDown(event, {
            sectionIndex,
            itemIndex
          });
        });
        _defineProperty5(_assertThisInitialized2(_this), "onClick", function(event) {
          var _this$props4 = _this.props, sectionIndex = _this$props4.sectionIndex, itemIndex = _this$props4.itemIndex;
          _this.props.onClick(event, {
            sectionIndex,
            itemIndex
          });
        });
        return _this;
      }
      _createClass2(Item2, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          return (0, _compareObjects["default"])(nextProps, this.props, ["renderItemData"]);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props5 = this.props, isHighlighted = _this$props5.isHighlighted, item = _this$props5.item, renderItem = _this$props5.renderItem, renderItemData = _this$props5.renderItemData, restProps = _objectWithoutProperties2(_this$props5, ["isHighlighted", "item", "renderItem", "renderItemData"]);
          delete restProps.sectionIndex;
          delete restProps.itemIndex;
          if (typeof restProps.onMouseEnter === "function") {
            restProps.onMouseEnter = this.onMouseEnter;
          }
          if (typeof restProps.onMouseLeave === "function") {
            restProps.onMouseLeave = this.onMouseLeave;
          }
          if (typeof restProps.onMouseDown === "function") {
            restProps.onMouseDown = this.onMouseDown;
          }
          if (typeof restProps.onClick === "function") {
            restProps.onClick = this.onClick;
          }
          return /* @__PURE__ */ _react["default"].createElement("li", _extends2({
            role: "option"
          }, restProps, {
            ref: this.storeItemReference
          }), renderItem(item, _objectSpread5({
            isHighlighted
          }, renderItemData)));
        }
      }]);
      return Item2;
    }(_react.Component);
    exports["default"] = Item;
    _defineProperty5(Item, "propTypes", {
      sectionIndex: _propTypes["default"].number,
      isHighlighted: _propTypes["default"].bool.isRequired,
      itemIndex: _propTypes["default"].number.isRequired,
      item: _propTypes["default"].any.isRequired,
      renderItem: _propTypes["default"].func.isRequired,
      renderItemData: _propTypes["default"].object.isRequired,
      onMouseEnter: _propTypes["default"].func,
      onMouseLeave: _propTypes["default"].func,
      onMouseDown: _propTypes["default"].func,
      onClick: _propTypes["default"].func
    });
  }
});

// node_modules/react-autosuggest/dist/ItemList.js
var require_ItemList = __commonJS({
  "node_modules/react-autosuggest/dist/ItemList.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _Item = _interopRequireDefault(require_Item());
    var _compareObjects = _interopRequireDefault(require_compareObjects());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof4(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof4(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof4 = function _typeof5(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof4 = function _typeof5(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof4(obj);
    }
    function _extends2() {
      _extends2 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends2.apply(this, arguments);
    }
    function ownKeys5(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread5(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys5(Object(source), true).forEach(function(key) {
            _defineProperty5(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys5(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _createSuper2(Derived) {
      return function() {
        var Super = _getPrototypeOf2(Derived), result;
        if (_isNativeReflectConstruct2()) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof4(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p2) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf2(o, p2);
    }
    function _defineProperty5(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var ItemsList = /* @__PURE__ */ function(_Component) {
      _inherits2(ItemsList2, _Component);
      var _super = _createSuper2(ItemsList2);
      function ItemsList2() {
        var _this;
        _classCallCheck2(this, ItemsList2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty5(_assertThisInitialized2(_this), "storeHighlightedItemReference", function(highlightedItem) {
          _this.props.onHighlightedItemChange(highlightedItem === null ? null : highlightedItem.item);
        });
        return _this;
      }
      _createClass2(ItemsList2, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          return (0, _compareObjects["default"])(nextProps, this.props, ["itemProps"]);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props, items = _this$props.items, itemProps = _this$props.itemProps, renderItem = _this$props.renderItem, renderItemData = _this$props.renderItemData, sectionIndex = _this$props.sectionIndex, highlightedItemIndex = _this$props.highlightedItemIndex, getItemId = _this$props.getItemId, theme = _this$props.theme, keyPrefix = _this$props.keyPrefix;
          var sectionPrefix = sectionIndex === null ? keyPrefix : "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
          var isItemPropsFunction = typeof itemProps === "function";
          return /* @__PURE__ */ _react["default"].createElement("ul", _extends2({
            role: "listbox"
          }, theme("".concat(sectionPrefix, "items-list"), "itemsList")), items.map(function(item, itemIndex) {
            var isFirst = itemIndex === 0;
            var isHighlighted = itemIndex === highlightedItemIndex;
            var itemKey = "".concat(sectionPrefix, "item-").concat(itemIndex);
            var itemPropsObj = isItemPropsFunction ? itemProps({
              sectionIndex,
              itemIndex
            }) : itemProps;
            var allItemProps = _objectSpread5({
              id: getItemId(sectionIndex, itemIndex),
              "aria-selected": isHighlighted
            }, theme(itemKey, "item", isFirst && "itemFirst", isHighlighted && "itemHighlighted"), {}, itemPropsObj);
            if (isHighlighted) {
              allItemProps.ref = _this2.storeHighlightedItemReference;
            }
            return /* @__PURE__ */ _react["default"].createElement(_Item["default"], _extends2({}, allItemProps, {
              sectionIndex,
              isHighlighted,
              itemIndex,
              item,
              renderItem,
              renderItemData
            }));
          }));
        }
      }]);
      return ItemsList2;
    }(_react.Component);
    exports["default"] = ItemsList;
    _defineProperty5(ItemsList, "propTypes", {
      items: _propTypes["default"].array.isRequired,
      itemProps: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
      renderItem: _propTypes["default"].func.isRequired,
      renderItemData: _propTypes["default"].object.isRequired,
      sectionIndex: _propTypes["default"].number,
      highlightedItemIndex: _propTypes["default"].number,
      onHighlightedItemChange: _propTypes["default"].func.isRequired,
      getItemId: _propTypes["default"].func.isRequired,
      theme: _propTypes["default"].func.isRequired,
      keyPrefix: _propTypes["default"].string.isRequired
    });
    _defineProperty5(ItemsList, "defaultProps", {
      sectionIndex: null
    });
  }
});

// node_modules/react-autosuggest/dist/Autowhatever.js
var require_Autowhatever = __commonJS({
  "node_modules/react-autosuggest/dist/Autowhatever.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _sectionIterator = _interopRequireDefault(require_dist());
    var _reactThemeable = _interopRequireDefault(require_dist2());
    var _SectionTitle = _interopRequireDefault(require_SectionTitle());
    var _ItemList = _interopRequireDefault(require_ItemList());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof4(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys5(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread5(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys5(Object(source), true).forEach(function(key) {
            _defineProperty5(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys5(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _slicedToArray4(arr, i) {
      return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray8(arr, i) || _nonIterableRest4();
    }
    function _nonIterableRest4() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray8(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray8(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray8(o, minLen);
    }
    function _arrayLikeToArray8(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit4(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s5; !(_n = (_s5 = _i.next()).done); _n = true) {
          _arr.push(_s5.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err2) {
        _d = true;
        _e = err2;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles4(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _typeof4(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof4 = function _typeof5(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof4 = function _typeof5(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof4(obj);
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _createSuper2(Derived) {
      return function() {
        var Super = _getPrototypeOf2(Derived), result;
        if (_isNativeReflectConstruct2()) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof4(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p2) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf2(o, p2);
    }
    function _defineProperty5(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var emptyObject = {};
    var defaultRenderInputComponent = function defaultRenderInputComponent2(props) {
      return /* @__PURE__ */ _react["default"].createElement("input", props);
    };
    var defaultRenderItemsContainer = function defaultRenderItemsContainer2(_ref) {
      var containerProps = _ref.containerProps, children = _ref.children;
      return /* @__PURE__ */ _react["default"].createElement("div", containerProps, children);
    };
    var defaultTheme = {
      container: "react-autowhatever__container",
      containerOpen: "react-autowhatever__container--open",
      input: "react-autowhatever__input",
      inputOpen: "react-autowhatever__input--open",
      inputFocused: "react-autowhatever__input--focused",
      itemsContainer: "react-autowhatever__items-container",
      itemsContainerOpen: "react-autowhatever__items-container--open",
      itemsList: "react-autowhatever__items-list",
      item: "react-autowhatever__item",
      itemFirst: "react-autowhatever__item--first",
      itemHighlighted: "react-autowhatever__item--highlighted",
      sectionContainer: "react-autowhatever__section-container",
      sectionContainerFirst: "react-autowhatever__section-container--first",
      sectionTitle: "react-autowhatever__section-title"
    };
    var Autowhatever = /* @__PURE__ */ function(_Component) {
      _inherits2(Autowhatever2, _Component);
      var _super = _createSuper2(Autowhatever2);
      function Autowhatever2(props) {
        var _this;
        _classCallCheck2(this, Autowhatever2);
        _this = _super.call(this, props);
        _defineProperty5(_assertThisInitialized2(_this), "storeInputReference", function(input) {
          if (input !== null) {
            _this.input = input;
          }
          var userRef = _this.props.inputProps.ref;
          if (userRef) {
            if (typeof userRef === "function") {
              userRef(input);
            } else if (_typeof4(userRef) === "object" && Object.prototype.hasOwnProperty.call(userRef, "current")) {
              userRef.current = input;
            }
          }
        });
        _defineProperty5(_assertThisInitialized2(_this), "storeItemsContainerReference", function(itemsContainer) {
          if (itemsContainer !== null) {
            _this.itemsContainer = itemsContainer;
          }
        });
        _defineProperty5(_assertThisInitialized2(_this), "onHighlightedItemChange", function(highlightedItem) {
          _this.highlightedItem = highlightedItem;
        });
        _defineProperty5(_assertThisInitialized2(_this), "getItemId", function(sectionIndex, itemIndex) {
          if (itemIndex === null) {
            return null;
          }
          var id = _this.props.id;
          var section = sectionIndex === null ? "" : "section-".concat(sectionIndex);
          return "react-autowhatever-".concat(id, "-").concat(section, "-item-").concat(itemIndex);
        });
        _defineProperty5(_assertThisInitialized2(_this), "onFocus", function(event) {
          var inputProps = _this.props.inputProps;
          _this.setState({
            isInputFocused: true
          });
          inputProps.onFocus && inputProps.onFocus(event);
        });
        _defineProperty5(_assertThisInitialized2(_this), "onBlur", function(event) {
          var inputProps = _this.props.inputProps;
          _this.setState({
            isInputFocused: false
          });
          inputProps.onBlur && inputProps.onBlur(event);
        });
        _defineProperty5(_assertThisInitialized2(_this), "onKeyDown", function(event) {
          var _this$props = _this.props, inputProps = _this$props.inputProps, highlightedSectionIndex = _this$props.highlightedSectionIndex, highlightedItemIndex = _this$props.highlightedItemIndex;
          var keyCode = event.keyCode;
          switch (keyCode) {
            case 40:
            case 38: {
              var nextPrev = keyCode === 40 ? "next" : "prev";
              var _this$sectionIterator = _this.sectionIterator[nextPrev]([highlightedSectionIndex, highlightedItemIndex]), _this$sectionIterator2 = _slicedToArray4(_this$sectionIterator, 2), newHighlightedSectionIndex = _this$sectionIterator2[0], newHighlightedItemIndex = _this$sectionIterator2[1];
              inputProps.onKeyDown(event, {
                newHighlightedSectionIndex,
                newHighlightedItemIndex
              });
              break;
            }
            default:
              inputProps.onKeyDown(event, {
                highlightedSectionIndex,
                highlightedItemIndex
              });
          }
        });
        _this.highlightedItem = null;
        _this.state = {
          isInputFocused: false
        };
        _this.setSectionsItems(props);
        _this.setSectionIterator(props);
        _this.setTheme(props);
        return _this;
      }
      _createClass2(Autowhatever2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.ensureHighlightedItemIsVisible();
        }
        // eslint-disable-next-line camelcase, react/sort-comp
      }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          if (nextProps.items !== this.props.items) {
            this.setSectionsItems(nextProps);
          }
          if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
            this.setSectionIterator(nextProps);
          }
          if (nextProps.theme !== this.props.theme) {
            this.setTheme(nextProps);
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.ensureHighlightedItemIsVisible();
        }
      }, {
        key: "setSectionsItems",
        value: function setSectionsItems(props) {
          if (props.multiSection) {
            this.sectionsItems = props.items.map(function(section) {
              return props.getSectionItems(section);
            });
            this.sectionsLengths = this.sectionsItems.map(function(items) {
              return items.length;
            });
            this.allSectionsAreEmpty = this.sectionsLengths.every(function(itemsCount) {
              return itemsCount === 0;
            });
          }
        }
      }, {
        key: "setSectionIterator",
        value: function setSectionIterator(props) {
          this.sectionIterator = (0, _sectionIterator["default"])({
            multiSection: props.multiSection,
            data: props.multiSection ? this.sectionsLengths : props.items.length
          });
        }
      }, {
        key: "setTheme",
        value: function setTheme(props) {
          this.theme = (0, _reactThemeable["default"])(props.theme);
        }
      }, {
        key: "renderSections",
        value: function renderSections() {
          var _this2 = this;
          if (this.allSectionsAreEmpty) {
            return null;
          }
          var theme = this.theme;
          var _this$props2 = this.props, id = _this$props2.id, items = _this$props2.items, renderItem = _this$props2.renderItem, renderItemData = _this$props2.renderItemData, renderSectionTitle = _this$props2.renderSectionTitle, highlightedSectionIndex = _this$props2.highlightedSectionIndex, highlightedItemIndex = _this$props2.highlightedItemIndex, itemProps = _this$props2.itemProps;
          return items.map(function(section, sectionIndex) {
            var keyPrefix = "react-autowhatever-".concat(id, "-");
            var sectionKeyPrefix = "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
            var isFirstSection = sectionIndex === 0;
            return /* @__PURE__ */ _react["default"].createElement("div", theme("".concat(sectionKeyPrefix, "container"), "sectionContainer", isFirstSection && "sectionContainerFirst"), /* @__PURE__ */ _react["default"].createElement(_SectionTitle["default"], {
              section,
              renderSectionTitle,
              theme,
              sectionKeyPrefix
            }), /* @__PURE__ */ _react["default"].createElement(_ItemList["default"], {
              items: _this2.sectionsItems[sectionIndex],
              itemProps,
              renderItem,
              renderItemData,
              sectionIndex,
              highlightedItemIndex: highlightedSectionIndex === sectionIndex ? highlightedItemIndex : null,
              onHighlightedItemChange: _this2.onHighlightedItemChange,
              getItemId: _this2.getItemId,
              theme,
              keyPrefix,
              ref: _this2.storeItemsListReference
            }));
          });
        }
      }, {
        key: "renderItems",
        value: function renderItems() {
          var items = this.props.items;
          if (items.length === 0) {
            return null;
          }
          var theme = this.theme;
          var _this$props3 = this.props, id = _this$props3.id, renderItem = _this$props3.renderItem, renderItemData = _this$props3.renderItemData, highlightedSectionIndex = _this$props3.highlightedSectionIndex, highlightedItemIndex = _this$props3.highlightedItemIndex, itemProps = _this$props3.itemProps;
          return /* @__PURE__ */ _react["default"].createElement(_ItemList["default"], {
            items,
            itemProps,
            renderItem,
            renderItemData,
            highlightedItemIndex: highlightedSectionIndex === null ? highlightedItemIndex : null,
            onHighlightedItemChange: this.onHighlightedItemChange,
            getItemId: this.getItemId,
            theme,
            keyPrefix: "react-autowhatever-".concat(id, "-")
          });
        }
      }, {
        key: "ensureHighlightedItemIsVisible",
        value: function ensureHighlightedItemIsVisible() {
          var highlightedItem = this.highlightedItem;
          if (!highlightedItem) {
            return;
          }
          var itemsContainer = this.itemsContainer;
          var itemOffsetRelativeToContainer = highlightedItem.offsetParent === itemsContainer ? highlightedItem.offsetTop : highlightedItem.offsetTop - itemsContainer.offsetTop;
          var scrollTop = itemsContainer.scrollTop;
          if (itemOffsetRelativeToContainer < scrollTop) {
            scrollTop = itemOffsetRelativeToContainer;
          } else if (itemOffsetRelativeToContainer + highlightedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
            scrollTop = itemOffsetRelativeToContainer + highlightedItem.offsetHeight - itemsContainer.offsetHeight;
          }
          if (scrollTop !== itemsContainer.scrollTop) {
            itemsContainer.scrollTop = scrollTop;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var theme = this.theme;
          var _this$props4 = this.props, id = _this$props4.id, multiSection = _this$props4.multiSection, renderInputComponent = _this$props4.renderInputComponent, renderItemsContainer = _this$props4.renderItemsContainer, highlightedSectionIndex = _this$props4.highlightedSectionIndex, highlightedItemIndex = _this$props4.highlightedItemIndex;
          var isInputFocused = this.state.isInputFocused;
          var renderedItems = multiSection ? this.renderSections() : this.renderItems();
          var isOpen = renderedItems !== null;
          var ariaActivedescendant = this.getItemId(highlightedSectionIndex, highlightedItemIndex);
          var itemsContainerId = "react-autowhatever-".concat(id);
          var containerProps = _objectSpread5({
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-owns": itemsContainerId,
            "aria-expanded": isOpen
          }, theme("react-autowhatever-".concat(id, "-container"), "container", isOpen && "containerOpen"), {}, this.props.containerProps);
          var inputComponent = renderInputComponent(_objectSpread5({
            type: "text",
            value: "",
            autoComplete: "off",
            "aria-autocomplete": "list",
            "aria-controls": itemsContainerId,
            "aria-activedescendant": ariaActivedescendant
          }, theme("react-autowhatever-".concat(id, "-input"), "input", isOpen && "inputOpen", isInputFocused && "inputFocused"), {}, this.props.inputProps, {
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
            ref: this.storeInputReference
          }));
          var itemsContainer = renderItemsContainer({
            containerProps: _objectSpread5({
              id: itemsContainerId,
              role: "listbox"
            }, theme("react-autowhatever-".concat(id, "-items-container"), "itemsContainer", isOpen && "itemsContainerOpen"), {
              ref: this.storeItemsContainerReference
            }),
            children: renderedItems
          });
          return /* @__PURE__ */ _react["default"].createElement("div", containerProps, inputComponent, itemsContainer);
        }
      }]);
      return Autowhatever2;
    }(_react.Component);
    exports["default"] = Autowhatever;
    _defineProperty5(Autowhatever, "propTypes", {
      id: _propTypes["default"].string,
      // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
      multiSection: _propTypes["default"].bool,
      // Indicates whether a multi section layout should be rendered.
      renderInputComponent: _propTypes["default"].func,
      // When specified, it is used to render the input element.
      renderItemsContainer: _propTypes["default"].func,
      // Renders the items container.
      items: _propTypes["default"].array.isRequired,
      // Array of items or sections to render.
      renderItem: _propTypes["default"].func,
      // This function renders a single item.
      renderItemData: _propTypes["default"].object,
      // Arbitrary data that will be passed to renderItem()
      renderSectionTitle: _propTypes["default"].func,
      // This function gets a section and renders its title.
      getSectionItems: _propTypes["default"].func,
      // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
      containerProps: _propTypes["default"].object,
      // Arbitrary container props
      inputProps: _propTypes["default"].object,
      // Arbitrary input props
      itemProps: _propTypes["default"].oneOfType([
        // Arbitrary item props
        _propTypes["default"].object,
        _propTypes["default"].func
      ]),
      highlightedSectionIndex: _propTypes["default"].number,
      // Section index of the highlighted item
      highlightedItemIndex: _propTypes["default"].number,
      // Highlighted item index (within a section)
      theme: _propTypes["default"].oneOfType([
        // Styles. See: https://github.com/markdalgleish/react-themeable
        _propTypes["default"].object,
        _propTypes["default"].array
      ])
    });
    _defineProperty5(Autowhatever, "defaultProps", {
      id: "1",
      multiSection: false,
      renderInputComponent: defaultRenderInputComponent,
      renderItemsContainer: defaultRenderItemsContainer,
      renderItem: function renderItem() {
        throw new Error("`renderItem` must be provided");
      },
      renderItemData: emptyObject,
      renderSectionTitle: function renderSectionTitle() {
        throw new Error("`renderSectionTitle` must be provided");
      },
      getSectionItems: function getSectionItems() {
        throw new Error("`getSectionItems` must be provided");
      },
      containerProps: emptyObject,
      inputProps: emptyObject,
      itemProps: emptyObject,
      highlightedSectionIndex: null,
      highlightedItemIndex: null,
      theme: defaultTheme
    });
  }
});

// node_modules/react-autosuggest/dist/theme.js
var require_theme = __commonJS({
  "node_modules/react-autosuggest/dist/theme.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mapToAutowhateverTheme = exports.defaultTheme = void 0;
    var defaultTheme = {
      container: "react-autosuggest__container",
      containerOpen: "react-autosuggest__container--open",
      input: "react-autosuggest__input",
      inputOpen: "react-autosuggest__input--open",
      inputFocused: "react-autosuggest__input--focused",
      suggestionsContainer: "react-autosuggest__suggestions-container",
      suggestionsContainerOpen: "react-autosuggest__suggestions-container--open",
      suggestionsList: "react-autosuggest__suggestions-list",
      suggestion: "react-autosuggest__suggestion",
      suggestionFirst: "react-autosuggest__suggestion--first",
      suggestionHighlighted: "react-autosuggest__suggestion--highlighted",
      sectionContainer: "react-autosuggest__section-container",
      sectionContainerFirst: "react-autosuggest__section-container--first",
      sectionTitle: "react-autosuggest__section-title"
    };
    exports.defaultTheme = defaultTheme;
    var mapToAutowhateverTheme = function mapToAutowhateverTheme2(theme) {
      var result = {};
      for (var key in theme) {
        switch (key) {
          case "suggestionsContainer":
            result["itemsContainer"] = theme[key];
            break;
          case "suggestionsContainerOpen":
            result["itemsContainerOpen"] = theme[key];
            break;
          case "suggestion":
            result["item"] = theme[key];
            break;
          case "suggestionFirst":
            result["itemFirst"] = theme[key];
            break;
          case "suggestionHighlighted":
            result["itemHighlighted"] = theme[key];
            break;
          case "suggestionsList":
            result["itemsList"] = theme[key];
            break;
          default:
            result[key] = theme[key];
        }
      }
      return result;
    };
    exports.mapToAutowhateverTheme = mapToAutowhateverTheme;
  }
});

// node_modules/react-autosuggest/dist/Autosuggest.js
var require_Autosuggest = __commonJS({
  "node_modules/react-autosuggest/dist/Autosuggest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _arrays = _interopRequireDefault(require_arrays());
    var _Autowhatever = _interopRequireDefault(require_Autowhatever());
    var _theme = require_theme();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof4(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof4(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof4 = function _typeof5(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof4 = function _typeof5(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof4(obj);
    }
    function ownKeys5(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread5(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys5(Object(source), true).forEach(function(key) {
            _defineProperty5(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys5(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _createSuper2(Derived) {
      return function() {
        var Super = _getPrototypeOf2(Derived), result;
        if (_isNativeReflectConstruct2()) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof4(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p2) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf2(o, p2);
    }
    function _defineProperty5(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var alwaysTrue = function alwaysTrue2() {
      return true;
    };
    var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions2(value) {
      return value.trim().length > 0;
    };
    var defaultRenderSuggestionsContainer = function defaultRenderSuggestionsContainer2(_ref) {
      var containerProps = _ref.containerProps, children = _ref.children;
      return /* @__PURE__ */ _react["default"].createElement("div", containerProps, children);
    };
    var REASON_SUGGESTIONS_REVEALED = "suggestions-revealed";
    var REASON_SUGGESTIONS_UPDATED = "suggestions-updated";
    var REASON_SUGGESTION_SELECTED = "suggestion-selected";
    var REASON_INPUT_FOCUSED = "input-focused";
    var REASON_INPUT_CHANGED = "input-changed";
    var REASON_INPUT_BLURRED = "input-blurred";
    var REASON_ESCAPE_PRESSED = "escape-pressed";
    var Autosuggest = /* @__PURE__ */ function(_Component) {
      _inherits2(Autosuggest2, _Component);
      var _super = _createSuper2(Autosuggest2);
      function Autosuggest2(_ref2) {
        var _this;
        var _alwaysRenderSuggestions = _ref2.alwaysRenderSuggestions;
        _classCallCheck2(this, Autosuggest2);
        _this = _super.call(this);
        _defineProperty5(_assertThisInitialized2(_this), "onDocumentMouseDown", function(event) {
          _this.justClickedOnSuggestionsContainer = false;
          var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
          event.target;
          while (node !== null && node !== document) {
            if (node.getAttribute && node.getAttribute("data-suggestion-index") !== null) {
              return;
            }
            if (node === _this.suggestionsContainer) {
              _this.justClickedOnSuggestionsContainer = true;
              return;
            }
            node = node.parentNode;
          }
        });
        _defineProperty5(_assertThisInitialized2(_this), "storeAutowhateverRef", function(autowhatever) {
          if (autowhatever !== null) {
            _this.autowhatever = autowhatever;
          }
        });
        _defineProperty5(_assertThisInitialized2(_this), "onSuggestionMouseEnter", function(event, _ref3) {
          var sectionIndex = _ref3.sectionIndex, itemIndex = _ref3.itemIndex;
          _this.updateHighlightedSuggestion(sectionIndex, itemIndex);
          if (event.target === _this.pressedSuggestion) {
            _this.justSelectedSuggestion = true;
          }
          _this.justMouseEntered = true;
          setTimeout(function() {
            _this.justMouseEntered = false;
          });
        });
        _defineProperty5(_assertThisInitialized2(_this), "highlightFirstSuggestion", function() {
          _this.updateHighlightedSuggestion(_this.props.multiSection ? 0 : null, 0);
        });
        _defineProperty5(_assertThisInitialized2(_this), "onDocumentMouseUp", function() {
          if (_this.pressedSuggestion && !_this.justSelectedSuggestion) {
            _this.input.focus();
          }
          _this.pressedSuggestion = null;
        });
        _defineProperty5(_assertThisInitialized2(_this), "onSuggestionMouseDown", function(event) {
          if (!_this.justSelectedSuggestion) {
            _this.justSelectedSuggestion = true;
            _this.pressedSuggestion = event.target;
          }
        });
        _defineProperty5(_assertThisInitialized2(_this), "onSuggestionsClearRequested", function() {
          var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;
          onSuggestionsClearRequested && onSuggestionsClearRequested();
        });
        _defineProperty5(_assertThisInitialized2(_this), "onSuggestionSelected", function(event, data) {
          var _this$props = _this.props, alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions, onSuggestionSelected = _this$props.onSuggestionSelected, onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;
          onSuggestionSelected && onSuggestionSelected(event, data);
          var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(data.suggestion);
          if (alwaysRenderSuggestions || keepSuggestionsOnSelect) {
            onSuggestionsFetchRequested({
              value: data.suggestionValue,
              reason: REASON_SUGGESTION_SELECTED
            });
          } else {
            _this.onSuggestionsClearRequested();
          }
          _this.resetHighlightedSuggestion();
        });
        _defineProperty5(_assertThisInitialized2(_this), "onSuggestionClick", function(event) {
          var _this$props2 = _this.props, alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions, focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick;
          var _this$getSuggestionIn = _this.getSuggestionIndices(_this.findSuggestionElement(event.target)), sectionIndex = _this$getSuggestionIn.sectionIndex, suggestionIndex = _this$getSuggestionIn.suggestionIndex;
          var clickedSuggestion = _this.getSuggestion(sectionIndex, suggestionIndex);
          var clickedSuggestionValue = _this.props.getSuggestionValue(clickedSuggestion);
          _this.maybeCallOnChange(event, clickedSuggestionValue, "click");
          _this.onSuggestionSelected(event, {
            suggestion: clickedSuggestion,
            suggestionValue: clickedSuggestionValue,
            suggestionIndex,
            sectionIndex,
            method: "click"
          });
          var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(clickedSuggestion);
          if (!(alwaysRenderSuggestions || keepSuggestionsOnSelect)) {
            _this.closeSuggestions();
          }
          if (focusInputOnSuggestionClick === true) {
            _this.input.focus();
          } else {
            _this.onBlur();
          }
          setTimeout(function() {
            _this.justSelectedSuggestion = false;
          });
        });
        _defineProperty5(_assertThisInitialized2(_this), "onBlur", function() {
          var _this$props3 = _this.props, inputProps = _this$props3.inputProps, shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
          var value = inputProps.value, onBlur = inputProps.onBlur;
          var highlightedSuggestion = _this.getHighlightedSuggestion();
          var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_BLURRED);
          _this.setState({
            isFocused: false,
            highlightedSectionIndex: null,
            highlightedSuggestionIndex: null,
            highlightedSuggestion: null,
            valueBeforeUpDown: null,
            isCollapsed: !shouldRender
          });
          onBlur && onBlur(_this.blurEvent, {
            highlightedSuggestion
          });
        });
        _defineProperty5(_assertThisInitialized2(_this), "onSuggestionMouseLeave", function(event) {
          _this.resetHighlightedSuggestion(false);
          if (_this.justSelectedSuggestion && event.target === _this.pressedSuggestion) {
            _this.justSelectedSuggestion = false;
          }
        });
        _defineProperty5(_assertThisInitialized2(_this), "onSuggestionTouchStart", function() {
          _this.justSelectedSuggestion = true;
        });
        _defineProperty5(_assertThisInitialized2(_this), "onSuggestionTouchMove", function() {
          _this.justSelectedSuggestion = false;
          _this.pressedSuggestion = null;
          _this.input.focus();
        });
        _defineProperty5(_assertThisInitialized2(_this), "itemProps", function(_ref4) {
          var sectionIndex = _ref4.sectionIndex, itemIndex = _ref4.itemIndex;
          return {
            "data-section-index": sectionIndex,
            "data-suggestion-index": itemIndex,
            onMouseEnter: _this.onSuggestionMouseEnter,
            onMouseLeave: _this.onSuggestionMouseLeave,
            onMouseDown: _this.onSuggestionMouseDown,
            onTouchStart: _this.onSuggestionTouchStart,
            onTouchMove: _this.onSuggestionTouchMove,
            onClick: _this.onSuggestionClick
          };
        });
        _defineProperty5(_assertThisInitialized2(_this), "renderSuggestionsContainer", function(_ref5) {
          var containerProps = _ref5.containerProps, children = _ref5.children;
          var renderSuggestionsContainer = _this.props.renderSuggestionsContainer;
          return renderSuggestionsContainer({
            containerProps,
            children,
            query: _this.getQuery()
          });
        });
        _this.state = {
          isFocused: false,
          isCollapsed: !_alwaysRenderSuggestions,
          highlightedSectionIndex: null,
          highlightedSuggestionIndex: null,
          highlightedSuggestion: null,
          valueBeforeUpDown: null
        };
        _this.justPressedUpDown = false;
        _this.justMouseEntered = false;
        _this.pressedSuggestion = null;
        return _this;
      }
      _createClass2(Autosuggest2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          document.addEventListener("mousedown", this.onDocumentMouseDown);
          document.addEventListener("mouseup", this.onDocumentMouseUp);
          this.input = this.autowhatever.input;
          this.suggestionsContainer = this.autowhatever.itemsContainer;
        }
        // eslint-disable-next-line camelcase, react/sort-comp
      }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          var shouldResetHighlighting = this.state.highlightedSuggestionIndex === 0 && this.props.highlightFirstSuggestion && !nextProps.highlightFirstSuggestion;
          if ((0, _arrays["default"])(nextProps.suggestions, this.props.suggestions)) {
            if (nextProps.highlightFirstSuggestion && nextProps.suggestions.length > 0 && this.justPressedUpDown === false && this.justMouseEntered === false) {
              this.highlightFirstSuggestion();
            } else if (shouldResetHighlighting) {
              this.resetHighlightedSuggestion();
            }
          } else {
            if (this.willRenderSuggestions(nextProps, REASON_SUGGESTIONS_UPDATED)) {
              if (this.state.isCollapsed && !this.justSelectedSuggestion) {
                this.revealSuggestions();
              }
              if (shouldResetHighlighting) {
                this.resetHighlightedSuggestion();
              }
            } else {
              this.resetHighlightedSuggestion();
            }
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          var _this$props4 = this.props, suggestions = _this$props4.suggestions, onSuggestionHighlighted = _this$props4.onSuggestionHighlighted, highlightFirstSuggestion = _this$props4.highlightFirstSuggestion;
          if (!(0, _arrays["default"])(suggestions, prevProps.suggestions) && suggestions.length > 0 && highlightFirstSuggestion) {
            this.highlightFirstSuggestion();
            return;
          }
          if (onSuggestionHighlighted) {
            var highlightedSuggestion = this.getHighlightedSuggestion();
            var prevHighlightedSuggestion = prevState.highlightedSuggestion;
            if (highlightedSuggestion != prevHighlightedSuggestion) {
              onSuggestionHighlighted({
                suggestion: highlightedSuggestion
              });
            }
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.removeEventListener("mousedown", this.onDocumentMouseDown);
          document.removeEventListener("mouseup", this.onDocumentMouseUp);
        }
      }, {
        key: "updateHighlightedSuggestion",
        value: function updateHighlightedSuggestion(sectionIndex, suggestionIndex, prevValue) {
          var _this2 = this;
          this.setState(function(state) {
            var valueBeforeUpDown = state.valueBeforeUpDown;
            if (suggestionIndex === null) {
              valueBeforeUpDown = null;
            } else if (valueBeforeUpDown === null && typeof prevValue !== "undefined") {
              valueBeforeUpDown = prevValue;
            }
            return {
              highlightedSectionIndex: sectionIndex,
              highlightedSuggestionIndex: suggestionIndex,
              highlightedSuggestion: suggestionIndex === null ? null : _this2.getSuggestion(sectionIndex, suggestionIndex),
              valueBeforeUpDown
            };
          });
        }
      }, {
        key: "resetHighlightedSuggestion",
        value: function resetHighlightedSuggestion() {
          var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
          this.setState(function(state) {
            var valueBeforeUpDown = state.valueBeforeUpDown;
            return {
              highlightedSectionIndex: null,
              highlightedSuggestionIndex: null,
              highlightedSuggestion: null,
              valueBeforeUpDown: shouldResetValueBeforeUpDown ? null : valueBeforeUpDown
            };
          });
        }
      }, {
        key: "revealSuggestions",
        value: function revealSuggestions() {
          this.setState({
            isCollapsed: false
          });
        }
      }, {
        key: "closeSuggestions",
        value: function closeSuggestions() {
          this.setState({
            highlightedSectionIndex: null,
            highlightedSuggestionIndex: null,
            highlightedSuggestion: null,
            valueBeforeUpDown: null,
            isCollapsed: true
          });
        }
      }, {
        key: "getSuggestion",
        value: function getSuggestion(sectionIndex, suggestionIndex) {
          var _this$props5 = this.props, suggestions = _this$props5.suggestions, multiSection = _this$props5.multiSection, getSectionSuggestions = _this$props5.getSectionSuggestions;
          if (multiSection) {
            return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
          }
          return suggestions[suggestionIndex];
        }
      }, {
        key: "getHighlightedSuggestion",
        value: function getHighlightedSuggestion() {
          var _this$state = this.state, highlightedSectionIndex = _this$state.highlightedSectionIndex, highlightedSuggestionIndex = _this$state.highlightedSuggestionIndex;
          if (highlightedSuggestionIndex === null) {
            return null;
          }
          return this.getSuggestion(highlightedSectionIndex, highlightedSuggestionIndex);
        }
      }, {
        key: "getSuggestionValueByIndex",
        value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
          var getSuggestionValue = this.props.getSuggestionValue;
          return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
        }
      }, {
        key: "getSuggestionIndices",
        value: function getSuggestionIndices(suggestionElement) {
          var sectionIndex = suggestionElement.getAttribute("data-section-index");
          var suggestionIndex = suggestionElement.getAttribute("data-suggestion-index");
          return {
            sectionIndex: typeof sectionIndex === "string" ? parseInt(sectionIndex, 10) : null,
            suggestionIndex: parseInt(suggestionIndex, 10)
          };
        }
      }, {
        key: "findSuggestionElement",
        value: function findSuggestionElement(startNode) {
          var node = startNode;
          do {
            if (node.getAttribute && node.getAttribute("data-suggestion-index") !== null) {
              return node;
            }
            node = node.parentNode;
          } while (node !== null);
          console.error("Clicked element:", startNode);
          throw new Error("Couldn't find suggestion element");
        }
      }, {
        key: "maybeCallOnChange",
        value: function maybeCallOnChange(event, newValue, method) {
          var _this$props$inputProp = this.props.inputProps, value = _this$props$inputProp.value, onChange = _this$props$inputProp.onChange;
          if (newValue !== value) {
            onChange(event, {
              newValue,
              method
            });
          }
        }
      }, {
        key: "willRenderSuggestions",
        value: function willRenderSuggestions(props, reason) {
          var suggestions = props.suggestions, inputProps = props.inputProps, shouldRenderSuggestions = props.shouldRenderSuggestions;
          var value = inputProps.value;
          return suggestions.length > 0 && shouldRenderSuggestions(value, reason);
        }
      }, {
        key: "getQuery",
        value: function getQuery() {
          var inputProps = this.props.inputProps;
          var value = inputProps.value;
          var valueBeforeUpDown = this.state.valueBeforeUpDown;
          return (valueBeforeUpDown === null ? value : valueBeforeUpDown).trim();
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          var _this$props6 = this.props, suggestions = _this$props6.suggestions, renderInputComponent = _this$props6.renderInputComponent, onSuggestionsFetchRequested = _this$props6.onSuggestionsFetchRequested, renderSuggestion2 = _this$props6.renderSuggestion, inputProps = _this$props6.inputProps, multiSection = _this$props6.multiSection, renderSectionTitle = _this$props6.renderSectionTitle, id = _this$props6.id, getSectionSuggestions = _this$props6.getSectionSuggestions, theme = _this$props6.theme, getSuggestionValue = _this$props6.getSuggestionValue, alwaysRenderSuggestions = _this$props6.alwaysRenderSuggestions, highlightFirstSuggestion = _this$props6.highlightFirstSuggestion, containerProps = _this$props6.containerProps;
          var _this$state2 = this.state, isFocused = _this$state2.isFocused, isCollapsed = _this$state2.isCollapsed, highlightedSectionIndex = _this$state2.highlightedSectionIndex, highlightedSuggestionIndex = _this$state2.highlightedSuggestionIndex, valueBeforeUpDown = _this$state2.valueBeforeUpDown;
          var shouldRenderSuggestions = alwaysRenderSuggestions ? alwaysTrue : this.props.shouldRenderSuggestions;
          var value = inputProps.value, _onFocus = inputProps.onFocus, _onKeyDown = inputProps.onKeyDown;
          var willRenderSuggestions = this.willRenderSuggestions(this.props, "render");
          var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
          var items = isOpen ? suggestions : [];
          var autowhateverInputProps = _objectSpread5({}, inputProps, {
            onFocus: function onFocus(event) {
              if (!_this3.justSelectedSuggestion && !_this3.justClickedOnSuggestionsContainer) {
                var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_FOCUSED);
                _this3.setState({
                  isFocused: true,
                  isCollapsed: !shouldRender
                });
                _onFocus && _onFocus(event);
                if (shouldRender) {
                  onSuggestionsFetchRequested({
                    value,
                    reason: REASON_INPUT_FOCUSED
                  });
                }
              }
            },
            onBlur: function onBlur(event) {
              if (_this3.justClickedOnSuggestionsContainer) {
                _this3.input.focus();
                return;
              }
              _this3.blurEvent = event;
              if (!_this3.justSelectedSuggestion) {
                _this3.onBlur();
                _this3.onSuggestionsClearRequested();
              }
            },
            onChange: function onChange(event) {
              var value2 = event.target.value;
              var shouldRender = shouldRenderSuggestions(value2, REASON_INPUT_CHANGED);
              _this3.maybeCallOnChange(event, value2, "type");
              if (_this3.suggestionsContainer) {
                _this3.suggestionsContainer.scrollTop = 0;
              }
              _this3.setState(_objectSpread5({}, highlightFirstSuggestion ? {} : {
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null
              }, {
                valueBeforeUpDown: null,
                isCollapsed: !shouldRender
              }));
              if (shouldRender) {
                onSuggestionsFetchRequested({
                  value: value2,
                  reason: REASON_INPUT_CHANGED
                });
              } else {
                _this3.onSuggestionsClearRequested();
              }
            },
            onKeyDown: function onKeyDown(event, data) {
              var keyCode = event.keyCode;
              switch (keyCode) {
                case 40:
                case 38:
                  if (isCollapsed) {
                    if (shouldRenderSuggestions(value, REASON_SUGGESTIONS_REVEALED)) {
                      onSuggestionsFetchRequested({
                        value,
                        reason: REASON_SUGGESTIONS_REVEALED
                      });
                      _this3.revealSuggestions();
                      event.preventDefault();
                    }
                  } else if (suggestions.length > 0) {
                    var newHighlightedSectionIndex = data.newHighlightedSectionIndex, newHighlightedItemIndex = data.newHighlightedItemIndex;
                    var newValue;
                    if (newHighlightedItemIndex === null) {
                      newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
                    } else {
                      newValue = _this3.getSuggestionValueByIndex(newHighlightedSectionIndex, newHighlightedItemIndex);
                    }
                    _this3.updateHighlightedSuggestion(newHighlightedSectionIndex, newHighlightedItemIndex, value);
                    _this3.maybeCallOnChange(event, newValue, keyCode === 40 ? "down" : "up");
                    event.preventDefault();
                  }
                  _this3.justPressedUpDown = true;
                  setTimeout(function() {
                    _this3.justPressedUpDown = false;
                  });
                  break;
                case 13: {
                  if (event.keyCode === 229) {
                    break;
                  }
                  var highlightedSuggestion = _this3.getHighlightedSuggestion();
                  if (isOpen && !alwaysRenderSuggestions) {
                    _this3.closeSuggestions();
                  }
                  if (highlightedSuggestion != null) {
                    event.preventDefault();
                    var _newValue = getSuggestionValue(highlightedSuggestion);
                    _this3.maybeCallOnChange(event, _newValue, "enter");
                    _this3.onSuggestionSelected(event, {
                      suggestion: highlightedSuggestion,
                      suggestionValue: _newValue,
                      suggestionIndex: highlightedSuggestionIndex,
                      sectionIndex: highlightedSectionIndex,
                      method: "enter"
                    });
                    _this3.justSelectedSuggestion = true;
                    setTimeout(function() {
                      _this3.justSelectedSuggestion = false;
                    });
                  }
                  break;
                }
                case 27: {
                  if (isOpen) {
                    event.preventDefault();
                  }
                  var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;
                  if (valueBeforeUpDown === null) {
                    if (!willCloseSuggestions) {
                      var _newValue2 = "";
                      _this3.maybeCallOnChange(event, _newValue2, "escape");
                      if (shouldRenderSuggestions(_newValue2, REASON_ESCAPE_PRESSED)) {
                        onSuggestionsFetchRequested({
                          value: _newValue2,
                          reason: REASON_ESCAPE_PRESSED
                        });
                      } else {
                        _this3.onSuggestionsClearRequested();
                      }
                    }
                  } else {
                    _this3.maybeCallOnChange(event, valueBeforeUpDown, "escape");
                  }
                  if (willCloseSuggestions) {
                    _this3.onSuggestionsClearRequested();
                    _this3.closeSuggestions();
                  } else {
                    _this3.resetHighlightedSuggestion();
                  }
                  break;
                }
              }
              _onKeyDown && _onKeyDown(event);
            }
          });
          var renderSuggestionData = {
            query: this.getQuery()
          };
          return /* @__PURE__ */ _react["default"].createElement(_Autowhatever["default"], {
            multiSection,
            items,
            renderInputComponent,
            renderItemsContainer: this.renderSuggestionsContainer,
            renderItem: renderSuggestion2,
            renderItemData: renderSuggestionData,
            renderSectionTitle,
            getSectionItems: getSectionSuggestions,
            highlightedSectionIndex,
            highlightedItemIndex: highlightedSuggestionIndex,
            containerProps,
            inputProps: autowhateverInputProps,
            itemProps: this.itemProps,
            theme: (0, _theme.mapToAutowhateverTheme)(theme),
            id,
            ref: this.storeAutowhateverRef
          });
        }
      }]);
      return Autosuggest2;
    }(_react.Component);
    exports["default"] = Autosuggest;
    _defineProperty5(Autosuggest, "propTypes", {
      suggestions: _propTypes["default"].array.isRequired,
      onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
        var onSuggestionsFetchRequested2 = props[propName];
        if (typeof onSuggestionsFetchRequested2 !== "function") {
          throw new Error("'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp");
        }
      },
      onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
        var onSuggestionsClearRequested2 = props[propName];
        if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested2 !== "function") {
          throw new Error("'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp");
        }
      },
      shouldKeepSuggestionsOnSelect: _propTypes["default"].func,
      onSuggestionSelected: _propTypes["default"].func,
      onSuggestionHighlighted: _propTypes["default"].func,
      renderInputComponent: _propTypes["default"].func,
      renderSuggestionsContainer: _propTypes["default"].func,
      getSuggestionValue: _propTypes["default"].func.isRequired,
      renderSuggestion: _propTypes["default"].func.isRequired,
      inputProps: function inputProps(props, propName) {
        var inputProps2 = props[propName];
        if (!inputProps2) {
          throw new Error("'inputProps' must be passed.");
        }
        if (!Object.prototype.hasOwnProperty.call(inputProps2, "value")) {
          throw new Error("'inputProps' must have 'value'.");
        }
        if (!Object.prototype.hasOwnProperty.call(inputProps2, "onChange")) {
          throw new Error("'inputProps' must have 'onChange'.");
        }
      },
      shouldRenderSuggestions: _propTypes["default"].func,
      alwaysRenderSuggestions: _propTypes["default"].bool,
      multiSection: _propTypes["default"].bool,
      renderSectionTitle: function renderSectionTitle(props, propName) {
        var renderSectionTitle2 = props[propName];
        if (props.multiSection === true && typeof renderSectionTitle2 !== "function") {
          throw new Error("'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp");
        }
      },
      getSectionSuggestions: function getSectionSuggestions(props, propName) {
        var getSectionSuggestions2 = props[propName];
        if (props.multiSection === true && typeof getSectionSuggestions2 !== "function") {
          throw new Error("'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp");
        }
      },
      focusInputOnSuggestionClick: _propTypes["default"].bool,
      highlightFirstSuggestion: _propTypes["default"].bool,
      theme: _propTypes["default"].object,
      id: _propTypes["default"].string,
      containerProps: _propTypes["default"].object
      // Arbitrary container props
    });
    _defineProperty5(Autosuggest, "defaultProps", {
      renderSuggestionsContainer: defaultRenderSuggestionsContainer,
      shouldRenderSuggestions: defaultShouldRenderSuggestions,
      alwaysRenderSuggestions: false,
      multiSection: false,
      shouldKeepSuggestionsOnSelect: function shouldKeepSuggestionsOnSelect() {
        return false;
      },
      focusInputOnSuggestionClick: true,
      highlightFirstSuggestion: false,
      theme: _theme.defaultTheme,
      id: "1",
      containerProps: {}
    });
  }
});

// node_modules/react-autosuggest/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/react-autosuggest/dist/index.js"(exports, module) {
    "use strict";
    module.exports = require_Autosuggest()["default"];
  }
});

// app/components/calculator/Calculator.tsx
var import_react26 = __toESM(require_react());

// app/lib/Transport.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/Transport.ts"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var truckTransportMethods = [
  "truck",
  "etruck"
];
var transportMethods = [
  ...truckTransportMethods,
  "cargoship",
  "aircraft",
  "train"
];
var isTruckTransportMethod = (method) => truckTransportMethods.includes(method);
var getTransportMethodLabel = (method) => {
  switch (method) {
    case "truck":
      return "Truck";
    case "etruck":
      return "Electric Truck";
    case "cargoship":
      return "Cargoship";
    case "aircraft":
      return "Aircraft";
    case "train":
      return "Train";
  }
};
var emptyAddress = {
  city: "",
  country: ""
};

// app/components/ui/label.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-label/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $b73a6c6685e72184$export$b04be29aa201d4f5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends({}, props, {
    ref: forwardedRef,
    onMouseDown: (event) => {
      var _props$onMouseDown;
      (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event);
      if (!event.defaultPrevented && event.detail > 1)
        event.preventDefault();
    }
  }));
});
var $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;

// app/components/ui/label.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/label.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/label.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($b73a6c6685e72184$export$be92b6f5f03c0fe9, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "app/components/ui/label.tsx",
  lineNumber: 30,
  columnNumber: 12
}, this));
_c2 = Label;
Label.displayName = $b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;
var _c;
var _c2;
$RefreshReg$(_c, "Label$React.forwardRef");
$RefreshReg$(_c2, "Label");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/card.tsx
var React2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/card.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Card = React2.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref, className: cn("rounded-xl border bg-card text-card-foreground shadow", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c22 = Card;
Card.displayName = "Card";
var CardHeader = React2.forwardRef(_c32 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c4 = CardHeader;
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { ref, className: cn("font-semibold leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 38,
  columnNumber: 12
}, this));
_c6 = CardTitle;
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 44,
  columnNumber: 12
}, this));
_c8 = CardDescription;
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 50,
  columnNumber: 12
}, this));
_c10 = CardContent;
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 56,
  columnNumber: 12
}, this));
_c12 = CardFooter;
CardFooter.displayName = "CardFooter";
var _c3;
var _c22;
var _c32;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
$RefreshReg$(_c3, "Card$React.forwardRef");
$RefreshReg$(_c22, "Card");
$RefreshReg$(_c32, "CardHeader$React.forwardRef");
$RefreshReg$(_c4, "CardHeader");
$RefreshReg$(_c5, "CardTitle$React.forwardRef");
$RefreshReg$(_c6, "CardTitle");
$RefreshReg$(_c7, "CardDescription$React.forwardRef");
$RefreshReg$(_c8, "CardDescription");
$RefreshReg$(_c9, "CardContent$React.forwardRef");
$RefreshReg$(_c10, "CardContent");
$RefreshReg$(_c11, "CardFooter$React.forwardRef");
$RefreshReg$(_c12, "CardFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Upload/UploadCard.tsx
var import_react4 = __toESM(require_react());

// node_modules/read-excel-file/modules/xml/xmlBrowser.js
var xmlBrowser_default = {
  createDocument: function createDocument(content) {
    return new DOMParser().parseFromString(content.trim(), "text/xml");
  }
};

// node_modules/fflate/esm/browser.js
var u8 = Uint8Array;
var u16 = Uint16Array;
var u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new u32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return [b, r];
};
var _a = freb(fleb, 2);
var fl = _a[0];
var revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b[0];
var revfd = _b[1];
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >>> 1 | (i & 21845) << 1;
  x = (x & 52428) >>> 2 | (x & 13107) << 2;
  x = (x & 61680) >>> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
var x;
var i;
var hMap = function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le2 = new u16(mb);
  for (i = 0; i < mb; ++i) {
    le2[i] = le2[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le2[cd[i] - 1]++ << r_1;
        for (var m2 = v | (1 << r_1) - 1; v <= m2; ++v) {
          co[rev[v] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le2[cd[i] - 1]++] >>> 15 - cd[i];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i = 1; i < a2.length; ++i) {
    if (a2[i] > m2)
      m2 = a2[i];
  }
  return m2;
};
var bits = function(d, p2, m2) {
  var o = p2 / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d, p2) {
  var o = p2 / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  var n = new (v.BYTES_PER_ELEMENT == 2 ? u16 : v.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e - s);
  n.set(v.subarray(s, e));
  return n;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, buf, st) {
  var sl = dat.length;
  if (!sl || st && st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf || st;
  var noSt = !st || st.i;
  if (!st)
    st = {};
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t2 = s + l;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t2), bt);
        st.b = bt += l, st.p = pos = t2 * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >>> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + 131072);
        var end = bt + add;
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
function inflateSync(data, out) {
  return inflt(data, out);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i = 0; ; ) {
    var c = d[i++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length)
      return [r, slc(d, i - 1)];
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
  }
};
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i = 0; i < dat.length; i += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
    return r;
  } else if (td)
    return td.decode(dat);
  else {
    var _a2 = dutf8(dat), out = _a2[0], ext = _a2[1];
    if (ext.length)
      err(8);
    return out;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
  var _a2 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
};
var z64e = function(d, b) {
  for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
    ;
  return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
};
function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      err(13);
  }
  ;
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = o == 4294967295 || c == 65535;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792;
    if (z) {
      c = b4(data, ze + 32);
      o = b4(data, ze + 48);
    }
  }
  var fltr = opts && opts.filter;
  for (var i = 0; i < c; ++i) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2)
        files[fn] = slc(data, b, b + sc);
      else if (c_2 == 8)
        files[fn] = inflateSync(data.subarray(b, b + sc), new u8(su));
      else
        err(14, "unknown compression type " + c_2);
    }
  }
  return files;
}

// node_modules/read-excel-file/modules/read/unpackXlsxFileBrowser.js
function unpackXlsxFile(input) {
  if (input instanceof File) {
    return input.arrayBuffer().then(unpackXlsxArrayBuffer);
  }
  if (input instanceof Blob) {
    return input.arrayBuffer().then(unpackXlsxArrayBuffer);
  }
  return unpackXlsxArrayBuffer(input);
}
function unpackXlsxArrayBuffer(arrayBuffer) {
  var archive = new Uint8Array(arrayBuffer);
  var contents = unzipSync(archive);
  return Promise.resolve(getContents(contents));
}
function getContents(contents) {
  var unzippedFiles = [];
  for (var _i = 0, _Object$keys = Object.keys(contents); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    unzippedFiles[key] = strFromU8(contents[key]);
  }
  return unzippedFiles;
}

// node_modules/read-excel-file/modules/xml/dom.js
function findChild(node, tagName) {
  var i = 0;
  while (i < node.childNodes.length) {
    var childNode = node.childNodes[i];
    if (childNode.nodeType === 1 && getTagName(childNode) === tagName) {
      return childNode;
    }
    i++;
  }
}
function findChildren(node, tagName) {
  var results = [];
  var i = 0;
  while (i < node.childNodes.length) {
    var childNode = node.childNodes[i];
    if (childNode.nodeType === 1 && getTagName(childNode) === tagName) {
      results.push(childNode);
    }
    i++;
  }
  return results;
}
function forEach(node, tagName, func) {
  var i = 0;
  while (i < node.childNodes.length) {
    var childNode = node.childNodes[i];
    if (tagName) {
      if (childNode.nodeType === 1 && getTagName(childNode) === tagName) {
        func(childNode, i);
      }
    } else {
      func(childNode, i);
    }
    i++;
  }
}
function map(node, tagName, func) {
  var results = [];
  forEach(node, tagName, function(node2, i) {
    results.push(func(node2, i));
  });
  return results;
}
var NAMESPACE_REG_EXP = /.+\:/;
function getTagName(element) {
  return element.tagName.replace(NAMESPACE_REG_EXP, "");
}
function getOuterXml(node) {
  if (node.nodeType !== 1) {
    return node.textContent;
  }
  var xml = "<" + getTagName(node);
  var j = 0;
  while (j < node.attributes.length) {
    xml += " " + node.attributes[j].name + '="' + node.attributes[j].value + '"';
    j++;
  }
  xml += ">";
  var i = 0;
  while (i < node.childNodes.length) {
    xml += getOuterXml(node.childNodes[i]);
    i++;
  }
  xml += "</" + getTagName(node) + ">";
  return xml;
}

// node_modules/read-excel-file/modules/xml/xlsx.js
function getCells(document2) {
  var worksheet = document2.documentElement;
  var sheetData = findChild(worksheet, "sheetData");
  var cells = [];
  forEach(sheetData, "row", function(row) {
    forEach(row, "c", function(cell) {
      cells.push(cell);
    });
  });
  return cells;
}
function getCellValue(document2, node) {
  return findChild(node, "v");
}
function getCellInlineStringValue(document2, node) {
  if (node.firstChild && getTagName(node.firstChild) === "is" && node.firstChild.firstChild && getTagName(node.firstChild.firstChild) === "t") {
    return node.firstChild.firstChild.textContent;
  }
}
function getDimensions(document2) {
  var worksheet = document2.documentElement;
  var dimensions = findChild(worksheet, "dimension");
  if (dimensions) {
    return dimensions.getAttribute("ref");
  }
}
function getBaseStyles(document2) {
  var styleSheet = document2.documentElement;
  var cellStyleXfs = findChild(styleSheet, "cellStyleXfs");
  if (cellStyleXfs) {
    return findChildren(cellStyleXfs, "xf");
  }
  return [];
}
function getCellStyles(document2) {
  var styleSheet = document2.documentElement;
  var cellXfs = findChild(styleSheet, "cellXfs");
  if (!cellXfs) {
    return [];
  }
  return findChildren(cellXfs, "xf");
}
function getNumberFormats(document2) {
  var styleSheet = document2.documentElement;
  var numberFormats = [];
  var numFmts = findChild(styleSheet, "numFmts");
  if (numFmts) {
    return findChildren(numFmts, "numFmt");
  }
  return [];
}
function getSharedStrings(document2) {
  var sst = document2.documentElement;
  return map(sst, "si", function(string) {
    var t2 = findChild(string, "t");
    if (t2) {
      return t2.textContent;
    }
    var value = "";
    forEach(string, "r", function(r) {
      value += findChild(r, "t").textContent;
    });
    return value;
  });
}
function getWorkbookProperties(document2) {
  var workbook = document2.documentElement;
  return findChild(workbook, "workbookPr");
}
function getRelationships(document2) {
  var relationships = document2.documentElement;
  return findChildren(relationships, "Relationship");
}
function getSheets(document2) {
  var workbook = document2.documentElement;
  var sheets = findChild(workbook, "sheets");
  return findChildren(sheets, "sheet");
}

// node_modules/read-excel-file/modules/read/parseProperties.js
function parseProperties(content, xml) {
  var book = xml.createDocument(content);
  var properties = {};
  var workbookProperties = getWorkbookProperties(book);
  if (workbookProperties && workbookProperties.getAttribute("date1904") === "1") {
    properties.epoch1904 = true;
  }
  properties.sheets = [];
  var addSheetInfo = function addSheetInfo2(sheet) {
    if (sheet.getAttribute("name")) {
      properties.sheets.push({
        id: sheet.getAttribute("sheetId"),
        name: sheet.getAttribute("name"),
        relationId: sheet.getAttribute("r:id")
      });
    }
  };
  getSheets(book).forEach(addSheetInfo);
  return properties;
}

// node_modules/read-excel-file/modules/read/parseFilePaths.js
function parseFilePaths(content, xml) {
  var document2 = xml.createDocument(content);
  var filePaths = {
    sheets: {},
    sharedStrings: void 0,
    styles: void 0
  };
  var addFilePathInfo = function addFilePathInfo2(relationship) {
    var filePath = relationship.getAttribute("Target");
    var fileType = relationship.getAttribute("Type");
    switch (fileType) {
      case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles":
        filePaths.styles = getFilePath(filePath);
        break;
      case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings":
        filePaths.sharedStrings = getFilePath(filePath);
        break;
      case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet":
        filePaths.sheets[relationship.getAttribute("Id")] = getFilePath(filePath);
        break;
    }
  };
  getRelationships(document2).forEach(addFilePathInfo);
  return filePaths;
}
function getFilePath(path) {
  if (path[0] === "/") {
    return path.slice("/".length);
  }
  return "xl/" + path;
}

// node_modules/read-excel-file/modules/read/parseStyles.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function parseStyles(content, xml) {
  if (!content) {
    return {};
  }
  var doc = xml.createDocument(content);
  var baseStyles = getBaseStyles(doc).map(parseCellStyle);
  var numberFormats = getNumberFormats(doc).map(parseNumberFormatStyle).reduce(function(formats, format) {
    formats[format.id] = format;
    return formats;
  }, []);
  var getCellStyle = function getCellStyle2(xf) {
    if (xf.hasAttribute("xfId")) {
      return _objectSpread(_objectSpread({}, baseStyles[xf.xfId]), parseCellStyle(xf, numberFormats));
    }
    return parseCellStyle(xf, numberFormats);
  };
  return getCellStyles(doc).map(getCellStyle);
}
function parseNumberFormatStyle(numFmt) {
  return {
    id: numFmt.getAttribute("numFmtId"),
    template: numFmt.getAttribute("formatCode")
  };
}
function parseCellStyle(xf, numFmts) {
  var style = {};
  if (xf.hasAttribute("numFmtId")) {
    var numberFormatId = xf.getAttribute("numFmtId");
    if (numFmts[numberFormatId]) {
      style.numberFormat = numFmts[numberFormatId];
    } else {
      style.numberFormat = {
        id: numberFormatId
      };
    }
  }
  return style;
}

// node_modules/read-excel-file/modules/read/parseSharedStrings.js
function parseSharedStrings(content, xml) {
  if (!content) {
    return [];
  }
  return getSharedStrings(xml.createDocument(content));
}

// node_modules/read-excel-file/modules/read/parseDate.js
function parseExcelDate(excelSerialDate, options) {
  if (options && options.epoch1904) {
    excelSerialDate += 1462;
  }
  var daysBeforeUnixEpoch = 70 * 365 + 19;
  var hour = 60 * 60 * 1e3;
  return new Date(Math.round((excelSerialDate - daysBeforeUnixEpoch) * 24 * hour));
}

// node_modules/read-excel-file/modules/read/isDateTimestamp.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function isDateTimestamp(styleId, styles, options) {
  if (styleId) {
    var style = styles[styleId];
    if (!style) {
      throw new Error("Cell style not found: ".concat(styleId));
    }
    if (!style.numberFormat) {
      return false;
    }
    if (
      // Whether it's a "number format" that's conventionally used for storing date timestamps.
      BUILT_IN_DATE_NUMBER_FORMAT_IDS.indexOf(Number(style.numberFormat.id)) >= 0 || // Whether it's a "number format" that uses a "formatting template"
      // that the developer is certain is a date formatting template.
      options.dateFormat && style.numberFormat.template === options.dateFormat || // Whether the "smart formatting template" feature is not disabled
      // and it has detected that it's a date formatting template by looking at it.
      options.smartDateParser !== false && style.numberFormat.template && isDateTemplate(style.numberFormat.template)
    ) {
      return true;
    }
  }
}
var BUILT_IN_DATE_NUMBER_FORMAT_IDS = [14, 15, 16, 17, 18, 19, 20, 21, 22, 27, 30, 36, 45, 46, 47, 50, 57];
var DATE_FORMAT_WEIRD_PREFIX = /^\[\$-414\]/;
var DATE_FORMAT_WEIRD_POSTFIX = /;@$/;
function isDateTemplate(template) {
  template = template.toLowerCase();
  template = template.replace(DATE_FORMAT_WEIRD_PREFIX, "");
  template = template.replace(DATE_FORMAT_WEIRD_POSTFIX, "");
  var tokens = template.split(/\W+/);
  for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done; ) {
    var token = _step.value;
    if (DATE_TEMPLATE_TOKENS.indexOf(token) < 0) {
      return false;
    }
  }
  return true;
}
var DATE_TEMPLATE_TOKENS = [
  // Seconds (min two digits). Example: "05".
  "ss",
  // Minutes (min two digits). Example: "05". Could also be "Months". Weird.
  "mm",
  // Hours. Example: "1".
  "h",
  // Hours (min two digits). Example: "01".
  "hh",
  // "AM" part of "AM/PM". Lowercased just in case.
  "am",
  // "PM" part of "AM/PM". Lowercased just in case.
  "pm",
  // Day. Example: "1"
  "d",
  // Day (min two digits). Example: "01"
  "dd",
  // Month (numeric). Example: "1".
  "m",
  // Month (numeric, min two digits). Example: "01". Could also be "Minutes". Weird.
  "mm",
  // Month (shortened month name). Example: "Jan".
  "mmm",
  // Month (full month name). Example: "January".
  "mmmm",
  // Two-digit year. Example: "20".
  "yy",
  // Full year. Example: "2020".
  "yyyy",
  // I don't have any idea what "e" means.
  // It's used in "built-in" XLSX formats:
  // * 27 '[$-404]e/m/d';
  // * 36 '[$-404]e/m/d';
  // * 50 '[$-404]e/m/d';
  // * 57 '[$-404]e/m/d';
  "e"
];

// node_modules/read-excel-file/modules/read/parseCellValue.js
function parseCellValue(value, type, _ref) {
  var getInlineStringValue = _ref.getInlineStringValue, getInlineStringXml = _ref.getInlineStringXml, getStyleId = _ref.getStyleId, styles = _ref.styles, values = _ref.values, properties = _ref.properties, options = _ref.options;
  if (!type) {
    type = "n";
  }
  switch (type) {
    case "str":
      value = parseString(value, options);
      break;
    case "inlineStr":
      value = getInlineStringValue();
      if (value === void 0) {
        throw new Error('Unsupported "inline string" cell value structure: '.concat(getInlineStringXml()));
      }
      value = parseString(value, options);
      break;
    case "s":
      var sharedStringIndex = Number(value);
      if (isNaN(sharedStringIndex)) {
        throw new Error('Invalid "shared" string index: '.concat(value));
      }
      if (sharedStringIndex >= values.length) {
        throw new Error('An out-of-bounds "shared" string index: '.concat(value));
      }
      value = values[sharedStringIndex];
      value = parseString(value, options);
      break;
    case "b":
      if (value === "1") {
        value = true;
      } else if (value === "0") {
        value = false;
      } else {
        throw new Error('Unsupported "boolean" cell value: '.concat(value));
      }
      break;
    case "z":
      value = void 0;
      break;
    case "e":
      value = decodeError(value);
      break;
    case "d":
      if (value === void 0) {
        break;
      }
      var parsedDate = new Date(value);
      if (isNaN(parsedDate.valueOf())) {
        throw new Error('Unsupported "date" cell value: '.concat(value));
      }
      value = parsedDate;
      break;
    case "n":
      if (value === void 0) {
        break;
      }
      var isDateTimestampNumber = isDateTimestamp(getStyleId(), styles, options);
      if (isDateTimestampNumber) {
        value = parseNumberDefault(value);
        value = parseExcelDate(value, properties);
      } else {
        value = (options.parseNumber || parseNumberDefault)(value);
      }
      break;
    default:
      throw new TypeError("Cell type not supported: ".concat(type));
  }
  if (value === void 0) {
    value = null;
  }
  return value;
}
function decodeError(errorCode) {
  switch (errorCode) {
    case 0:
      return "#NULL!";
    case 7:
      return "#DIV/0!";
    case 15:
      return "#VALUE!";
    case 23:
      return "#REF!";
    case 29:
      return "#NAME?";
    case 36:
      return "#NUM!";
    case 42:
      return "#N/A";
    case 43:
      return "#GETTING_DATA";
    default:
      return "#ERROR_".concat(errorCode);
  }
}
function parseString(value, options) {
  if (options.trim !== false) {
    value = value.trim();
  }
  if (value === "") {
    value = void 0;
  }
  return value;
}
function parseNumberDefault(stringifiedNumber) {
  var parsedNumber = Number(stringifiedNumber);
  if (isNaN(parsedNumber)) {
    throw new Error('Invalid "numeric" cell value: '.concat(stringifiedNumber));
  }
  return parsedNumber;
}

// node_modules/read-excel-file/modules/read/coordinates.js
var LETTERS = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function calculateDimensions(cells) {
  var comparator = function comparator2(a2, b) {
    return a2 - b;
  };
  var allRows = cells.map(function(cell) {
    return cell.row;
  }).sort(comparator);
  var allCols = cells.map(function(cell) {
    return cell.column;
  }).sort(comparator);
  var minRow = allRows[0];
  var maxRow = allRows[allRows.length - 1];
  var minCol = allCols[0];
  var maxCol = allCols[allCols.length - 1];
  return [{
    row: minRow,
    column: minCol
  }, {
    row: maxRow,
    column: maxCol
  }];
}
function columnLettersToNumber(columnLetters) {
  var n = 0;
  var i = 0;
  while (i < columnLetters.length) {
    n *= 26;
    n += LETTERS.indexOf(columnLetters[i]);
    i++;
  }
  return n;
}
function parseCellCoordinates(coords) {
  coords = coords.split(/(\d+)/);
  return [
    // Row.
    parseInt(coords[1]),
    // Column.
    columnLettersToNumber(coords[0].trim())
  ];
}

// node_modules/read-excel-file/modules/read/parseCell.js
function parseCell(node, sheet, xml, values, styles, properties, options) {
  var coords = parseCellCoordinates(node.getAttribute("r"));
  var valueElement = getCellValue(sheet, node);
  var value = valueElement && valueElement.textContent;
  var type;
  if (node.hasAttribute("t")) {
    type = node.getAttribute("t");
  }
  return {
    row: coords[0],
    column: coords[1],
    value: parseCellValue(value, type, {
      getInlineStringValue: function getInlineStringValue() {
        return getCellInlineStringValue(sheet, node);
      },
      getInlineStringXml: function getInlineStringXml() {
        return getOuterXml(node);
      },
      getStyleId: function getStyleId() {
        return node.getAttribute("s");
      },
      styles,
      values,
      properties,
      options
    })
  };
}

// node_modules/read-excel-file/modules/read/parseCells.js
function parseCells(sheet, xml, values, styles, properties, options) {
  var cells = getCells(sheet);
  if (cells.length === 0) {
    return [];
  }
  return cells.map(function(node) {
    return parseCell(node, sheet, xml, values, styles, properties, options);
  });
}

// node_modules/read-excel-file/modules/read/parseDimensions.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s5, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s5 = _i.next()).done); _n = true) {
      _arr.push(_s5.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err2) {
    _d = true;
    _e = err2;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function parseDimensions(sheet) {
  var dimensions = getDimensions(sheet);
  if (dimensions) {
    dimensions = dimensions.split(":").map(parseCellCoordinates).map(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), row = _ref2[0], column = _ref2[1];
      return {
        row,
        column
      };
    });
    if (dimensions.length === 1) {
      dimensions = [dimensions[0], dimensions[0]];
    }
    return dimensions;
  }
}

// node_modules/read-excel-file/modules/read/parseSheet.js
function parseSheet(content, xml, values, styles, properties, options) {
  var sheet = xml.createDocument(content);
  var cells = parseCells(sheet, xml, values, styles, properties, options);
  var dimensions = parseDimensions(sheet) || calculateDimensions(cells);
  return {
    cells,
    dimensions
  };
}

// node_modules/read-excel-file/modules/read/dropEmptyRows.js
function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function dropEmptyRows(data) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, rowMap = _ref.rowMap, _ref$accessor = _ref.accessor, accessor = _ref$accessor === void 0 ? function(_2) {
    return _2;
  } : _ref$accessor, onlyTrimAtTheEnd = _ref.onlyTrimAtTheEnd;
  var i = data.length - 1;
  while (i >= 0) {
    var empty = true;
    for (var _iterator = _createForOfIteratorHelperLoose2(data[i]), _step; !(_step = _iterator()).done; ) {
      var cell = _step.value;
      if (accessor(cell) !== null) {
        empty = false;
        break;
      }
    }
    if (empty) {
      data.splice(i, 1);
      if (rowMap) {
        rowMap.splice(i, 1);
      }
    } else if (onlyTrimAtTheEnd) {
      break;
    }
    i--;
  }
  return data;
}

// node_modules/read-excel-file/modules/read/dropEmptyColumns.js
function _createForOfIteratorHelperLoose3(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray4(o, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function dropEmptyColumns(data) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$accessor = _ref.accessor, accessor = _ref$accessor === void 0 ? function(_2) {
    return _2;
  } : _ref$accessor, onlyTrimAtTheEnd = _ref.onlyTrimAtTheEnd;
  var i = data[0].length - 1;
  while (i >= 0) {
    var empty = true;
    for (var _iterator = _createForOfIteratorHelperLoose3(data), _step; !(_step = _iterator()).done; ) {
      var row = _step.value;
      if (accessor(row[i]) !== null) {
        empty = false;
        break;
      }
    }
    if (empty) {
      var j = 0;
      while (j < data.length) {
        data[j].splice(i, 1);
        j++;
      }
    } else if (onlyTrimAtTheEnd) {
      break;
    }
    i--;
  }
  return data;
}

// node_modules/read-excel-file/modules/read/getData.js
function _createForOfIteratorHelperLoose4(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray5(o, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s5, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s5 = _i.next()).done); _n = true) {
      _arr.push(_s5.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err2) {
    _d = true;
    _e = err2;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function getData(sheet, options) {
  var dimensions = sheet.dimensions, cells = sheet.cells;
  if (cells.length === 0) {
    return [];
  }
  var _dimensions = _slicedToArray2(dimensions, 2), leftTop = _dimensions[0], rightBottom = _dimensions[1];
  var colsCount = rightBottom.column;
  var rowsCount = rightBottom.row;
  var data = new Array(rowsCount);
  var i = 0;
  while (i < rowsCount) {
    data[i] = new Array(colsCount);
    var j = 0;
    while (j < colsCount) {
      data[i][j] = null;
      j++;
    }
    i++;
  }
  for (var _iterator = _createForOfIteratorHelperLoose4(cells), _step; !(_step = _iterator()).done; ) {
    var cell = _step.value;
    var rowIndex = cell.row - 1;
    var columnIndex = cell.column - 1;
    if (columnIndex < colsCount && rowIndex < rowsCount) {
      data[rowIndex][columnIndex] = cell.value;
    }
  }
  var rowMap = options.rowMap;
  if (rowMap) {
    var _i2 = 0;
    while (_i2 < data.length) {
      rowMap[_i2] = _i2;
      _i2++;
    }
  }
  data = dropEmptyRows(dropEmptyColumns(data, {
    onlyTrimAtTheEnd: true
  }), {
    onlyTrimAtTheEnd: true,
    rowMap
  });
  if (options.transformData) {
    data = options.transformData(data);
  }
  return data;
}

// node_modules/read-excel-file/modules/read/readXlsx.js
function _createForOfIteratorHelperLoose5(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray6(o, minLen);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function readXlsx(contents, xml) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!options.sheet) {
    options = _objectSpread2({
      sheet: 1
    }, options);
  }
  var getXmlFileContent = function getXmlFileContent2(filePath) {
    if (!contents[filePath]) {
      throw new Error('"'.concat(filePath, '" file not found inside the *.xlsx file zip archive'));
    }
    return contents[filePath];
  };
  var filePaths = parseFilePaths(getXmlFileContent("xl/_rels/workbook.xml.rels"), xml);
  var values = filePaths.sharedStrings ? parseSharedStrings(getXmlFileContent(filePaths.sharedStrings), xml) : [];
  var styles = filePaths.styles ? parseStyles(getXmlFileContent(filePaths.styles), xml) : {};
  var properties = parseProperties(getXmlFileContent("xl/workbook.xml"), xml);
  if (options.getSheets) {
    return properties.sheets.map(function(_ref) {
      var name = _ref.name;
      return {
        name
      };
    });
  }
  var sheetId = getSheetId(options.sheet, properties.sheets);
  if (!sheetId || !filePaths.sheets[sheetId]) {
    throw createSheetNotFoundError(options.sheet, properties.sheets);
  }
  var sheet = parseSheet(getXmlFileContent(filePaths.sheets[sheetId]), xml, values, styles, properties, options);
  var data = getData(sheet, options);
  if (options.properties) {
    return {
      data,
      properties
    };
  }
  return data;
}
function getSheetId(sheet, sheets) {
  if (typeof sheet === "number") {
    var _sheet = sheets[sheet - 1];
    return _sheet && _sheet.relationId;
  }
  for (var _iterator = _createForOfIteratorHelperLoose5(sheets), _step; !(_step = _iterator()).done; ) {
    var _sheet2 = _step.value;
    if (_sheet2.name === sheet) {
      return _sheet2.relationId;
    }
  }
}
function createSheetNotFoundError(sheet, sheets) {
  var sheetsList = sheets && sheets.map(function(sheet2, i) {
    return '"'.concat(sheet2.name, '" (#').concat(i + 1, ")");
  }).join(", ");
  return new Error("Sheet ".concat(typeof sheet === "number" ? "#" + sheet : '"' + sheet + '"', " not found in the *.xlsx file.").concat(sheets ? " Available sheets: " + sheetsList + "." : ""));
}

// node_modules/read-excel-file/modules/types/InvalidError.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a2 = [null];
      a2.push.apply(a2, args2);
      var Constructor = Function.bind.apply(Parent2, a2);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var InvalidError = /* @__PURE__ */ function(_Error) {
  _inherits(InvalidError2, _Error);
  var _super = _createSuper(InvalidError2);
  function InvalidError2(reason) {
    var _this;
    _classCallCheck(this, InvalidError2);
    _this = _super.call(this, "invalid");
    _this.reason = reason;
    return _this;
  }
  return _createClass(InvalidError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));

// node_modules/read-excel-file/modules/types/Number.js
function NumberType(value) {
  if (typeof value === "string") {
    var stringifiedValue = value;
    value = Number(value);
    if (String(value) !== stringifiedValue) {
      throw new InvalidError("not_a_number");
    }
  }
  if (typeof value !== "number") {
    throw new InvalidError("not_a_number");
  }
  if (isNaN(value)) {
    throw new InvalidError("invalid_number");
  }
  if (!isFinite(value)) {
    throw new InvalidError("out_of_bounds");
  }
  return value;
}

// node_modules/read-excel-file/modules/types/String.js
function StringType(value) {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    if (isNaN(value)) {
      throw new InvalidError("invalid_number");
    }
    if (!isFinite(value)) {
      throw new InvalidError("out_of_bounds");
    }
    return String(value);
  }
  throw new InvalidError("not_a_string");
}

// node_modules/read-excel-file/modules/types/Boolean.js
function BooleanType(value) {
  if (typeof value === "boolean") {
    return value;
  }
  throw new InvalidError("not_a_boolean");
}

// node_modules/read-excel-file/modules/types/Date.js
function DateType(value, _ref) {
  var properties = _ref.properties;
  if (value instanceof Date) {
    if (isNaN(value.valueOf())) {
      throw new InvalidError("out_of_bounds");
    }
    return value;
  }
  if (typeof value === "number") {
    if (isNaN(value)) {
      throw new InvalidError("invalid_number");
    }
    if (!isFinite(value)) {
      throw new InvalidError("out_of_bounds");
    }
    var date = parseExcelDate(value, properties);
    if (isNaN(date.valueOf())) {
      throw new InvalidError("out_of_bounds");
    }
    return date;
  }
  throw new InvalidError("not_a_date");
}

// node_modules/read-excel-file/modules/read/schema/convertToJson.js
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s5, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s5 = _i.next()).done); _n = true) {
      _arr.push(_s5.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err2) {
    _d = true;
    _e = err2;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
function _createForOfIteratorHelperLoose6(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray7(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray7(o, minLen);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DEFAULT_OPTIONS = {
  isColumnOriented: false
};
function convertToJson_default(data, schema, options) {
  if (options) {
    options = _objectSpread3(_objectSpread3({}, DEFAULT_OPTIONS), options);
  } else {
    options = DEFAULT_OPTIONS;
  }
  var _options = options, isColumnOriented = _options.isColumnOriented, rowMap = _options.rowMap, ignoreEmptyRows = _options.ignoreEmptyRows;
  validateSchema(schema);
  if (isColumnOriented) {
    data = transpose(data);
  }
  var columns = data[0];
  var results = [];
  var errors = [];
  for (var i = 1; i < data.length; i++) {
    var result = read(schema, data[i], i, columns, errors, options);
    if (result !== null || ignoreEmptyRows === false) {
      results.push(result);
    }
  }
  if (rowMap) {
    for (var _iterator = _createForOfIteratorHelperLoose6(errors), _step; !(_step = _iterator()).done; ) {
      var error = _step.value;
      error.row = rowMap[error.row - 1] + 1;
    }
  }
  return {
    rows: results,
    errors
  };
}
function read(schema, row, rowIndex, columns, errors, options) {
  var object = {};
  var isEmptyObject = true;
  var createError = function createError2(_ref) {
    var column2 = _ref.column, value = _ref.value, errorMessage = _ref.error, reason = _ref.reason;
    var error = {
      error: errorMessage,
      row: rowIndex + 1,
      column: column2,
      value
    };
    if (reason) {
      error.reason = reason;
    }
    if (schema[column2].type) {
      error.type = schema[column2].type;
    }
    return error;
  };
  var pendingRequiredChecks = [];
  var _loop = function _loop2() {
    var key = _Object$keys[_i];
    var schemaEntry = schema[key];
    var isNestedSchema = _typeof2(schemaEntry.type) === "object" && !Array.isArray(schemaEntry.type);
    var rawValue = row[columns.indexOf(key)];
    if (rawValue === void 0) {
      rawValue = null;
    }
    var value = void 0;
    var error = void 0;
    var reason = void 0;
    if (isNestedSchema) {
      value = read(schemaEntry.type, row, rowIndex, columns, errors, options);
    } else {
      if (rawValue === null) {
        value = null;
      } else if (Array.isArray(schemaEntry.type)) {
        var notEmpty = false;
        var array = parseArray(rawValue).map(function(_value) {
          var result2 = parseValue(_value, schemaEntry, options);
          if (result2.error) {
            value = _value;
            error = result2.error;
            reason = result2.reason;
          }
          if (result2.value !== null) {
            notEmpty = true;
          }
          return result2.value;
        });
        if (!error) {
          value = notEmpty ? array : null;
        }
      } else {
        var result = parseValue(rawValue, schemaEntry, options);
        error = result.error;
        reason = result.reason;
        value = error ? rawValue : result.value;
      }
    }
    if (!error && value === null) {
      if (typeof schemaEntry.required === "function") {
        pendingRequiredChecks.push({
          column: key
        });
      } else if (schemaEntry.required === true) {
        error = "required";
      }
    }
    if (error) {
      errors.push(createError({
        column: key,
        value,
        error,
        reason
      }));
    } else {
      if (isEmptyObject && value !== null) {
        isEmptyObject = false;
      }
      if (value !== null || options.includeNullValues) {
        object[schemaEntry.prop] = value;
      }
    }
  };
  for (var _i = 0, _Object$keys = Object.keys(schema); _i < _Object$keys.length; _i++) {
    _loop();
  }
  if (isEmptyObject) {
    return null;
  }
  for (var _i2 = 0, _pendingRequiredCheck = pendingRequiredChecks; _i2 < _pendingRequiredCheck.length; _i2++) {
    var column = _pendingRequiredCheck[_i2].column;
    var required = schema[column].required(object);
    if (required) {
      errors.push(createError({
        column,
        value: null,
        error: "required"
      }));
    }
  }
  return object;
}
function parseValue(value, schemaEntry, options) {
  if (value === null) {
    return {
      value: null
    };
  }
  var result;
  if (schemaEntry.parse) {
    result = parseCustomValue(value, schemaEntry.parse);
  } else if (schemaEntry.type) {
    result = parseValueOfType(
      value,
      // Supports parsing array types.
      // See `parseArray()` function for more details.
      // Example `type`: String[]
      // Input: 'Barack Obama, "String, with, colons", Donald Trump'
      // Output: ['Barack Obama', 'String, with, colons', 'Donald Trump']
      Array.isArray(schemaEntry.type) ? schemaEntry.type[0] : schemaEntry.type,
      options
    );
  } else {
    result = {
      value
    };
  }
  if (result.error) {
    return result;
  }
  if (result.value !== null) {
    if (schemaEntry.oneOf && schemaEntry.oneOf.indexOf(result.value) < 0) {
      return {
        error: "invalid",
        reason: "unknown"
      };
    }
    if (schemaEntry.validate) {
      try {
        schemaEntry.validate(result.value);
      } catch (error) {
        return {
          error: error.message
        };
      }
    }
  }
  return result;
}
function parseCustomValue(value, parse) {
  try {
    value = parse(value);
    if (value === void 0) {
      return {
        value: null
      };
    }
    return {
      value
    };
  } catch (error) {
    var result = {
      error: error.message
    };
    if (error.reason) {
      result.reason = error.reason;
    }
    return result;
  }
}
function parseValueOfType(value, type, options) {
  switch (type) {
    case String:
      return parseCustomValue(value, StringType);
    case Number:
      return parseCustomValue(value, NumberType);
    case Date:
      return parseCustomValue(value, function(value2) {
        return DateType(value2, {
          properties: options.properties
        });
      });
    case Boolean:
      return parseCustomValue(value, BooleanType);
    default:
      if (typeof type === "function") {
        return parseCustomValue(value, type);
      }
      throw new Error("Unsupported schema type: ".concat(type && type.name || type));
  }
}
function getBlock(string, endCharacter, startIndex) {
  var i = 0;
  var substring = "";
  var character;
  while (startIndex + i < string.length) {
    var _character = string[startIndex + i];
    if (_character === endCharacter) {
      return [substring, i];
    } else if (_character === '"') {
      var block = getBlock(string, '"', startIndex + i + 1);
      substring += block[0];
      i += '"'.length + block[1] + '"'.length;
    } else {
      substring += _character;
      i++;
    }
  }
  return [substring, i];
}
function parseArray(string) {
  var blocks = [];
  var index2 = 0;
  while (index2 < string.length) {
    var _getBlock = getBlock(string, ",", index2), _getBlock2 = _slicedToArray3(_getBlock, 2), substring = _getBlock2[0], length = _getBlock2[1];
    index2 += length + ",".length;
    blocks.push(substring.trim());
  }
  return blocks;
}
var transpose = function transpose2(array) {
  return array[0].map(function(_2, i) {
    return array.map(function(row) {
      return row[i];
    });
  });
};
function validateSchema(schema) {
  for (var _i3 = 0, _Object$keys2 = Object.keys(schema); _i3 < _Object$keys2.length; _i3++) {
    var key = _Object$keys2[_i3];
    var entry = schema[key];
    if (!entry.prop) {
      throw new Error('"prop" not defined for schema entry "'.concat(key, '".'));
    }
  }
}

// node_modules/read-excel-file/modules/read/schema/convertMapToSchema.js
function _typeof3(obj) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof3(obj);
}
function convertMapToSchema(map2) {
  var schema = {};
  for (var _i = 0, _Object$keys = Object.keys(map2); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    var prop = map2[key];
    var type = void 0;
    if (_typeof3(prop) === "object") {
      prop = Object.keys(map2[key])[0];
      type = convertMapToSchema(map2[key][prop]);
    }
    schema[key] = {
      prop
    };
    if (type) {
      schema[key].type = type;
    }
  }
  return schema;
}

// node_modules/read-excel-file/modules/read/readXlsxFileContents.js
var _excluded = ["schema", "map"];
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys4(Object(source), true).forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function readXlsxFileContents(entries, xml, _ref) {
  var schema = _ref.schema, map2 = _ref.map, options = _objectWithoutProperties(_ref, _excluded);
  if (!schema && map2) {
    schema = convertMapToSchema(map2);
  }
  var result = readXlsx(entries, xml, _objectSpread4(_objectSpread4({}, options), {}, {
    properties: schema || options.properties
  }));
  if (schema) {
    return convertToJson_default(result.data, schema, _objectSpread4(_objectSpread4({}, options), {}, {
      properties: result.properties
    }));
  }
  return result;
}

// node_modules/read-excel-file/modules/read/readXlsxFileBrowser.js
function readXlsxFile(file) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return unpackXlsxFile(file).then(function(entries) {
    return readXlsxFileContents(entries, xmlBrowser_default, options);
  });
}

// app/components/ui/switch.tsx
var React3 = __toESM(require_react());

// node_modules/@radix-ui/react-switch/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size3, setSize] = (0, import_react2.useState)(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size3;
}

// node_modules/@radix-ui/react-switch/dist/index.mjs
var $6be4966fd9bbc698$var$SWITCH_NAME = "Switch";
var [$6be4966fd9bbc698$var$createSwitchContext, $6be4966fd9bbc698$export$cf7f5f17f69cbd43] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6be4966fd9bbc698$var$SWITCH_NAME);
var [$6be4966fd9bbc698$var$SwitchProvider, $6be4966fd9bbc698$var$useSwitchContext] = $6be4966fd9bbc698$var$createSwitchContext($6be4966fd9bbc698$var$SWITCH_NAME);
var $6be4966fd9bbc698$export$b5d5cf8927ab7262 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...switchProps } = props;
  const [button, setButton] = (0, import_react3.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react3.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  return /* @__PURE__ */ (0, import_react3.createElement)($6be4966fd9bbc698$var$SwitchProvider, {
    scope: __scopeSwitch,
    checked,
    disabled
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-required": required,
    "data-state": $6be4966fd9bbc698$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, switchProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ (0, import_react3.createElement)($6be4966fd9bbc698$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
var $6be4966fd9bbc698$var$THUMB_NAME = "SwitchThumb";
var $6be4966fd9bbc698$export$4d07bf653ea69106 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSwitch, ...thumbProps } = props;
  const context = $6be4966fd9bbc698$var$useSwitchContext($6be4966fd9bbc698$var$THUMB_NAME, __scopeSwitch);
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $6be4966fd9bbc698$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, thumbProps, {
    ref: forwardedRef
  }));
});
var $6be4966fd9bbc698$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react3.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react3.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)("input", _extends({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $6be4966fd9bbc698$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
var $6be4966fd9bbc698$export$be92b6f5f03c0fe9 = $6be4966fd9bbc698$export$b5d5cf8927ab7262;
var $6be4966fd9bbc698$export$6521433ed15a34db = $6be4966fd9bbc698$export$4d07bf653ea69106;

// app/components/ui/switch.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/switch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/switch.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Switch = React3.forwardRef(_c13 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($6be4966fd9bbc698$export$be92b6f5f03c0fe9, { className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className), ...props, ref, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($6be4966fd9bbc698$export$6521433ed15a34db, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") }, void 0, false, {
  fileName: "app/components/ui/switch.tsx",
  lineNumber: 29,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/switch.tsx",
  lineNumber: 28,
  columnNumber: 12
}, this));
_c23 = Switch;
Switch.displayName = $6be4966fd9bbc698$export$be92b6f5f03c0fe9.displayName;
var _c13;
var _c23;
$RefreshReg$(_c13, "Switch$React.forwardRef");
$RefreshReg$(_c23, "Switch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Upload/UploadCard.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Upload/UploadCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Upload/UploadCard.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var isValidFileSize = (method) => {
  if (method.size <= 1048576) {
    return true;
  } else {
    return false;
  }
};
var UploadCard = ({
  setChainData,
  chain
}) => {
  _s();
  const [_stages, setStage] = (0, import_react4.useState)([]);
  const [hasUploaded, setHasUploaded] = (0, import_react4.useState)(false);
  const [onHover, setOnHover] = (0, import_react4.useState)(false);
  const [isDistanceMode, setIsDistanceMode] = (0, import_react4.useState)(false);
  var [file, setFile] = (0, import_react4.useState)(null);
  const dataMap = /* @__PURE__ */ new Map();
  function dropHandler(ev) {
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          file = item.getAsFile();
          setFile(file);
          if (file) {
            if (file.name.endsWith(".xls") || file.name.endsWith(".xlsx")) {
              console.log(`\u2026 file[${i}].name = ${file.name}`);
              setHasUploaded(true);
            } else {
              console.log(`file rejected: ${file.name}`);
              alert("Not in a valid .xls/.xlsx format!");
              setHasUploaded(false);
            }
          }
        }
      });
    } else {
      [...ev.dataTransfer.files].forEach((file2, i) => {
        console.log(`\u2026 file[${i}].name = ${file2.name}`);
      });
    }
    setOnHover(false);
  }
  function handleUploadClick() {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
      fileInput.addEventListener("change", (event) => {
        const file2 = event.target.files?.[0];
        if (file2) {
          setFile(file2);
          console.log("Chosen file: " + file2.name);
          if (!file2.name.toLowerCase().endsWith(".xls") && !file2.name.endsWith(".xlsx")) {
            console.log(`file rejected: ${file2.name}`);
            alert("Not in a valid .xls/.xlsx format!");
            setHasUploaded(false);
            setFile(null);
            fileInput.value = "";
          } else {
            setHasUploaded(true);
          }
        }
      });
    }
  }
  async function readUploadedFile() {
    if (file != null) {
      if (isValidFileSize(file)) {
        await readFile();
      } else {
        alert("Please upload a file less than 15 MB!");
      }
    }
  }
  function deleteUpload() {
    console.log("Deleting file: " + file);
    setFile(null);
    setHasUploaded(false);
    if (document.getElementById("fileInput")) {
      document.getElementById("fileInput").value = "";
    }
  }
  function dragOverHandler(ev) {
    setOnHover(true);
    ev.preventDefault();
  }
  function dragHoverEnd(ev) {
    setOnHover(false);
    ev.preventDefault();
  }
  async function ReadExcel(file2) {
    const rows = await readXlsxFile(file2);
    console.log(rows.length);
    const newStages = [];
    for (let i = 1; i < rows.length; i++) {
      var from;
      var to;
      var getDistance;
      try {
        from = {
          city: rows[i][0].toString(),
          country: rows[i][1].toString(),
          exists: true
        };
        to = {
          city: rows[i][2].toString(),
          country: rows[i][3].toString(),
          exists: true
        };
        console.log(from.city, ", ", from.country, ", ", to.city, ", ", to.country);
      } catch (error) {
        getDistance = rows[i][0];
        console.log(i + " -> Distance: ", getDistance);
      }
      const stage = isDistanceMode ? {
        usesAddress: false,
        transportMethod: "truck",
        distance: getDistance,
        key: Math.random(),
        emission: void 0
      } : {
        usesAddress: true,
        transportMethod: "truck",
        from,
        to,
        key: Math.random(),
        emission: void 0,
        impossible: false
      };
      newStages.push(stage);
    }
    setStage((oldStages) => [...oldStages, ...newStages]);
    console.log("newStages: " + newStages);
    setChainData((oldChain) => {
      return {
        ...oldChain,
        routes: [{
          name: "Route " + (oldChain.routes.length - 1 + 1),
          stages: newStages,
          key: Math.random(),
          emission: void 0
        }]
      };
    });
  }
  async function readFile() {
    if (file) {
      if (file.name.endsWith(".xls") || file.name.endsWith(".xlsx")) {
        await ReadExcel(file);
      }
    } else {
      deleteUpload();
      console.error("Unsupported file extension!");
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " flex items-center justify-center ", id: "drop_zone", onDrop: dropHandler, onDragOver: dragOverHandler, onDragLeave: dragHoverEnd, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { className: "w-[450px]", style: {
    backgroundColor: onHover ? "lightgray" : "white"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Upload your file here" }, void 0, false, {
        fileName: "app/components/Upload/UploadCard.tsx",
        lineNumber: 252,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Upload/UploadCard.tsx",
        lineNumber: 251,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardDescription, { children: "You can drag and drop your file here. Alternatively, you can click the 'Choose file' button below:" }, void 0, false, {
        fileName: "app/components/Upload/UploadCard.tsx",
        lineNumber: 254,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Upload/UploadCard.tsx",
      lineNumber: 250,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid w-full items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col space-y-1.5", children: [
      file?.name === null || !hasUploaded ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: "name", children: "File name:" }, void 0, false, {
        fileName: "app/components/Upload/UploadCard.tsx",
        lineNumber: 263,
        columnNumber: 56
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: "name", children: [
        "File name: ",
        file?.name
      ] }, void 0, true, {
        fileName: "app/components/Upload/UploadCard.tsx",
        lineNumber: 263,
        columnNumber: 99
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "file", id: "fileInput", style: {
        display: "none"
      } }, void 0, false, {
        fileName: "app/components/Upload/UploadCard.tsx",
        lineNumber: 264,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Upload/UploadCard.tsx",
      lineNumber: 262,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Upload/UploadCard.tsx",
      lineNumber: 261,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Upload/UploadCard.tsx",
      lineNumber: 260,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Upload/UploadCard.tsx",
      lineNumber: 259,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardFooter, { className: "flex justify-between gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "ibm_green", onClick: readUploadedFile, disabled: !hasUploaded, children: "Upload" }, void 0, false, {
          fileName: "app/components/Upload/UploadCard.tsx",
          lineNumber: 273,
          columnNumber: 13
        }, this),
        hasUploaded && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "destructive", onClick: deleteUpload, children: "Cancel" }, void 0, false, {
          fileName: "app/components/Upload/UploadCard.tsx",
          lineNumber: 276,
          columnNumber: 29
        }, this),
        hasUploaded && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "ibm_green", disabled: true, children: "Choose file" }, void 0, false, {
          fileName: "app/components/Upload/UploadCard.tsx",
          lineNumber: 279,
          columnNumber: 29
        }, this),
        !hasUploaded && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "ibm_green", onClick: handleUploadClick, children: "Choose file" }, void 0, false, {
          fileName: "app/components/Upload/UploadCard.tsx",
          lineNumber: 282,
          columnNumber: 30
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Upload/UploadCard.tsx",
        lineNumber: 272,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: "use-distance", children: "Use distance?" }, void 0, false, {
          fileName: "app/components/Upload/UploadCard.tsx",
          lineNumber: 287,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Switch, { id: "use-distance", checked: isDistanceMode, onCheckedChange: setIsDistanceMode }, void 0, false, {
          fileName: "app/components/Upload/UploadCard.tsx",
          lineNumber: 289,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Upload/UploadCard.tsx",
        lineNumber: 286,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Upload/UploadCard.tsx",
      lineNumber: 271,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " flex flex-start ml-5 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "/template", className: " text-blue-500 text-sm", children: "Which files are supported?" }, void 0, false, {
      fileName: "app/components/Upload/UploadCard.tsx",
      lineNumber: 293,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Upload/UploadCard.tsx",
      lineNumber: 292,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Upload/UploadCard.tsx",
    lineNumber: 247,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Upload/UploadCard.tsx",
    lineNumber: 246,
    columnNumber: 10
  }, this);
};
_s(UploadCard, "7fNazRXFWY3W6abrFKqTiqK4g3Y=");
_c14 = UploadCard;
var UploadCard_default = UploadCard;
var _c14;
$RefreshReg$(_c14, "UploadCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Upload/UploadPopUp.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Upload/UploadPopUp.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Upload/UploadPopUp.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var UploadPopUp = ({
  setChainData,
  chain
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogTrigger, { className: " mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { type: "button", variant: "submit_button2", children: "Upload file" }, void 0, false, {
      fileName: "app/components/Upload/UploadPopUp.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Upload/UploadPopUp.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogContent, { className: "bg-transparent border-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(UploadCard_default, { setChainData, chain }, void 0, false, {
        fileName: "app/components/Upload/UploadPopUp.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogClose, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "destructive", children: "cancel" }, void 0, false, {
        fileName: "app/components/Upload/UploadPopUp.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Upload/UploadPopUp.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Upload/UploadPopUp.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Upload/UploadPopUp.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c15 = UploadPopUp;
var UploadPopUp_default = UploadPopUp;
var _c15;
$RefreshReg$(_c15, "UploadPopUp");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/dialogs/createproject.tsx
var import_react6 = __toESM(require_react());

// app/components/ui/input.tsx
var React5 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/input.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Input = React5.forwardRef(_c16 = ({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type, className: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/input.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
});
_c24 = Input;
Input.displayName = "Input";
var _c16;
var _c24;
$RefreshReg$(_c16, "Input$React.forwardRef");
$RefreshReg$(_c24, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/dialogs/createproject.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/dialogs/createproject.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/dialogs/createproject.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var CreateProject = ({
  UserId,
  chain,
  className,
  ...props
}) => {
  _s2();
  const [titleProject, setTitleProject] = (0, import_react6.useState)("");
  const [descriptionProject, setDescriptionProject] = (0, import_react6.useState)("");
  const fetcher = useFetcher();
  const handleCreateProject = () => {
    const project = {
      title: titleProject,
      descriptionProject,
      userId: UserId,
      calc: JSON.stringify(chain)
    };
    fetcher.submit(project, {
      method: "POST",
      action: "/api/project"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { variant: "outline", className: "flex items-center justify-between " + className, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "mr-2", children: "Create a project" }, void 0, false, {
        fileName: "app/components/dashboard/dialogs/createproject.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PlusIcon, {}, void 0, false, {
        fileName: "app/components/dashboard/dialogs/createproject.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/dialogs/createproject.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/dashboard/dialogs/createproject.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogContent, { className: "h-2/3 overflow-y-auto max-w-md md:max-w-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogTitle, { children: "Create a project" }, void 0, false, {
        fileName: "app/components/dashboard/dialogs/createproject.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-4 max-w-md md:max-w-xl", style: {
        maxHeight: "90vh"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { type: "text", placeholder: "Title", className: "w-full", onChange: (e) => setTitleProject(e.target.value) }, void 0, false, {
          fileName: "app/components/dashboard/dialogs/createproject.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { type: "text", placeholder: "Description", className: "w-full", onChange: (e) => setDescriptionProject(e.target.value) }, void 0, false, {
          fileName: "app/components/dashboard/dialogs/createproject.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { className: "border-black border rounded", variant: "default", onClick: handleCreateProject, children: "Create" }, void 0, false, {
          fileName: "app/components/dashboard/dialogs/createproject.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/dialogs/createproject.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { className: "border-black border rounded", variant: "destructive", children: "Cancel" }, void 0, false, {
          fileName: "app/components/dashboard/dialogs/createproject.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/dialogs/createproject.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/dialogs/createproject.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/dialogs/createproject.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/dialogs/createproject.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/dashboard/dialogs/createproject.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/dialogs/createproject.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
};
_s2(CreateProject, "8d2ZZ0F+6goGG6nM0ajZ/X8AmEQ=", false, function() {
  return [useFetcher];
});
_c17 = CreateProject;
var createproject_default = CreateProject;
var _c17;
$RefreshReg$(_c17, "CreateProject");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/calculator/ChainCard.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/calculator/ChainCard.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var ChainCard_default = ({
  isProject,
  userId,
  chain,
  selectedRoute,
  onSelectRoute,
  onAddRoute,
  setChain
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Label, { className: "text-lg font text-gray-900 dark:text-gray-100", children: "Logistics Chain" }, void 0, false, {
      fileName: "app/components/calculator/ChainCard.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col gap-6 lg:w-[300px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-[300px] lg:h-[550px] overflow-auto", children: chain.routes.map((route, routeIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pt-1 basis-1/4 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        Card,
        {
          onClick: onSelectRoute(routeIndex),
          className: "backdrop-blur-md mx-[3px]" + (routeIndex === selectedRoute ? " outline outline-offset-0 outline-blue-500" : " outline-none"),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: route.name }, void 0, false, {
              fileName: "app/components/calculator/ChainCard.tsx",
              lineNumber: 57,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/calculator/ChainCard.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/calculator/ChainCard.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardContent, { children: [
              route.emission !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: [
                  "Emission: ",
                  route.emission,
                  " kg"
                ] }, void 0, true, {
                  fileName: "app/components/calculator/ChainCard.tsx",
                  lineNumber: 63,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/components/calculator/ChainCard.tsx",
                  lineNumber: 66,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/calculator/ChainCard.tsx",
                lineNumber: 62,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: [
                "Stages: ",
                route.stages.length
              ] }, void 0, true, {
                fileName: "app/components/calculator/ChainCard.tsx",
                lineNumber: 69,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/calculator/ChainCard.tsx",
              lineNumber: 60,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/calculator/ChainCard.tsx",
          lineNumber: 48,
          columnNumber: 15
        },
        this
      ) }, route.key, false, {
        fileName: "app/components/calculator/ChainCard.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/components/calculator/ChainCard.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      chain.emission !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: [
        "Total estimated emission: ",
        chain.emission,
        " kg"
      ] }, void 0, true, {
        fileName: "app/components/calculator/ChainCard.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        Button,
        {
          className: "w-full",
          variant: "ibm_green",
          type: "button",
          onClick: onAddRoute,
          children: "Add Route"
        },
        void 0,
        false,
        {
          fileName: "app/components/calculator/ChainCard.tsx",
          lineNumber: 82,
          columnNumber: 9
        },
        this
      ),
      !isProject && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-sm w-full", children: [
          "Need help gettings started? Check out our \xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "a",
            {
              className: "text-blue-500 underline",
              href: "/guide",
              children: "How to Guide"
            },
            void 0,
            false,
            {
              fileName: "app/components/calculator/ChainCard.tsx",
              lineNumber: 94,
              columnNumber: 15
            },
            this
          ),
          "."
        ] }, void 0, true, {
          fileName: "app/components/calculator/ChainCard.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        userId !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          createproject_default,
          {
            className: "w-full",
            UserId: userId,
            chain,
            type: "button"
          },
          void 0,
          false,
          {
            fileName: "app/components/calculator/ChainCard.tsx",
            lineNumber: 103,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/calculator/ChainCard.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(UploadPopUp_default, { setChainData: setChain, chain }, void 0, false, {
        fileName: "app/components/calculator/ChainCard.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/calculator/ChainCard.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/calculator/ChainCard.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
};

// node_modules/@radix-ui/react-aspect-ratio/dist/index.mjs
var import_react7 = __toESM(require_react(), 1);
var $c1b5f66aac50e106$export$e840e8869344ca38 = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { ratio = 1, style, ...aspectRatioProps } = props;
  return /* @__PURE__ */ (0, import_react7.createElement)("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / ratio}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ (0, import_react7.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, aspectRatioProps, {
    ref: forwardedRef,
    style: {
      ...style,
      // ensures children expand in ratio
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  })));
});
var $c1b5f66aac50e106$export$be92b6f5f03c0fe9 = $c1b5f66aac50e106$export$e840e8869344ca38;

// app/components/ui/aspect-ratio.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/aspect-ratio.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var AspectRatio = $c1b5f66aac50e106$export$be92b6f5f03c0fe9;

// app/assets/truck-green.svg
var truck_green_default = "/build/_assets/truck-green-YFS7Q2Y3.svg";

// app/components/calculator/RouteCard.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/calculator/RouteCard.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var RouteCard_default = ({
  chain,
  selectedRoute,
  selectedStage,
  onSelectStage,
  onInsertStageAfter,
  onRemoveRoute
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: chain.routes[selectedRoute].name }, void 0, false, {
      fileName: "app/components/calculator/RouteCard.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col flex-grow justify-between gap-4 min-h-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-4 overflow-scroll scrollbar-hide h-[500px] lg:h-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          Button,
          {
            className: "w-full",
            variant: "ibm_green",
            type: "button",
            onClick: onInsertStageAfter(selectedRoute, -1),
            children: "Add Stage"
          },
          void 0,
          false,
          {
            fileName: "app/components/calculator/RouteCard.tsx",
            lineNumber: 49,
            columnNumber: 11
          },
          this
        ),
        chain.routes[selectedRoute].stages.map((stage, stageIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "div",
          {
            className: "flex flex-col gap-4 basis-1/3",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                Card,
                {
                  onClick: onSelectStage(stageIndex),
                  className: "mx-[3px]" + (stageIndex === selectedStage ? " outline outline-offset-0 outline-blue-500" : " outline-none"),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AspectRatio, { ratio: 16 / 7, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: truck_green_default }, void 0, false, {
                      fileName: "app/components/calculator/RouteCard.tsx",
                      lineNumber: 70,
                      columnNumber: 19
                    }, this) }, void 0, false, {
                      fileName: "app/components/calculator/RouteCard.tsx",
                      lineNumber: 69,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: [
                      "Stage ",
                      stageIndex + 1
                    ] }, void 0, true, {
                      fileName: "app/components/calculator/RouteCard.tsx",
                      lineNumber: 74,
                      columnNumber: 21
                    }, this) }, void 0, false, {
                      fileName: "app/components/calculator/RouteCard.tsx",
                      lineNumber: 73,
                      columnNumber: 19
                    }, this) }, void 0, false, {
                      fileName: "app/components/calculator/RouteCard.tsx",
                      lineNumber: 72,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CardContent, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: [
                        "Transport Method:",
                        " ",
                        getTransportMethodLabel(stage.transportMethod)
                      ] }, void 0, true, {
                        fileName: "app/components/calculator/RouteCard.tsx",
                        lineNumber: 78,
                        columnNumber: 19
                      }, this),
                      stage.cargo !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, false, {
                          fileName: "app/components/calculator/RouteCard.tsx",
                          lineNumber: 84,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: [
                          "Cargo: ",
                          stage.cargo,
                          " t"
                        ] }, void 0, true, {
                          fileName: "app/components/calculator/RouteCard.tsx",
                          lineNumber: 85,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/calculator/RouteCard.tsx",
                        lineNumber: 83,
                        columnNumber: 21
                      }, this),
                      stage.emission !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, false, {
                          fileName: "app/components/calculator/RouteCard.tsx",
                          lineNumber: 92,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: [
                          "Emission: ",
                          stage.emission,
                          " kg"
                        ] }, void 0, true, {
                          fileName: "app/components/calculator/RouteCard.tsx",
                          lineNumber: 93,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/calculator/RouteCard.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/calculator/RouteCard.tsx",
                      lineNumber: 77,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/calculator/RouteCard.tsx",
                  lineNumber: 62,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                Button,
                {
                  className: "w-full",
                  variant: "ibm_green",
                  type: "button",
                  onClick: onInsertStageAfter(selectedRoute, stageIndex),
                  children: "Add Stage"
                },
                void 0,
                false,
                {
                  fileName: "app/components/calculator/RouteCard.tsx",
                  lineNumber: 100,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          stage.key,
          true,
          {
            fileName: "app/components/calculator/RouteCard.tsx",
            lineNumber: 58,
            columnNumber: 13
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "app/components/calculator/RouteCard.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      chain.routes.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        Button,
        {
          className: "w-full",
          variant: "destructive",
          type: "button",
          onClick: onRemoveRoute(selectedRoute),
          children: [
            "Remove ",
            chain.routes[selectedRoute].name,
            " \xA0",
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TrashIcon, { fill: "white" }, void 0, false, {
              fileName: "app/components/calculator/RouteCard.tsx",
              lineNumber: 119,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/calculator/RouteCard.tsx",
          lineNumber: 112,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/calculator/RouteCard.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/calculator/RouteCard.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
};

// app/components/ui/combobox.tsx
var React13 = __toESM(require_react());

// app/components/ui/command.tsx
var React10 = __toESM(require_react());

// node_modules/cmdk/dist/chunk-XJATAMEX.mjs
var U = 1;
var Y = 0.9;
var a = 0.8;
var H = 0.17;
var p = 0.1;
var u = 0.999;
var J = 0.9999;
var k = 0.99;
var m = /[\\\/_+.#"@\[\(\{&]/;
var B = /[\\\/_+.#"@\[\(\{&]/g;
var K = /[\s-]/;
var X = /[\s-]/g;
function G(c, f, P, C, h, A2, O2) {
  if (A2 === f.length)
    return h === c.length ? U : k;
  var T = `${h},${A2}`;
  if (O2[T] !== void 0)
    return O2[T];
  for (var L2 = C.charAt(A2), E = P.indexOf(L2, h), S2 = 0, _2, N, R, M; E >= 0; )
    _2 = G(c, f, P, C, E + 1, A2 + 1, O2), _2 > S2 && (E === h ? _2 *= U : m.test(c.charAt(E - 1)) ? (_2 *= a, R = c.slice(h, E - 1).match(B), R && h > 0 && (_2 *= Math.pow(u, R.length))) : K.test(c.charAt(E - 1)) ? (_2 *= Y, M = c.slice(h, E - 1).match(X), M && h > 0 && (_2 *= Math.pow(u, M.length))) : (_2 *= H, h > 0 && (_2 *= Math.pow(u, E - h))), c.charAt(E) !== f.charAt(A2) && (_2 *= J)), (_2 < p && P.charAt(E - 1) === C.charAt(A2 + 1) || C.charAt(A2 + 1) === C.charAt(A2) && P.charAt(E - 1) !== C.charAt(A2)) && (N = G(c, f, P, C, E + 1, A2 + 2, O2), N * p > _2 && (_2 = N * p)), _2 > S2 && (S2 = _2), E = P.indexOf(L2, E + 1);
  return O2[T] = S2, S2;
}
function D(c) {
  return c.toLowerCase().replace(X, " ");
}
function W(c, f) {
  return G(c, f, D(c), D(f), 0, 0, {});
}

// node_modules/cmdk/node_modules/@radix-ui/react-dialog/dist/index.module.js
var import_react21 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/primitive/dist/index.module.js
function $e42e1063c40fb3ef$export$b9ecd428b558ff102(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/cmdk/node_modules/@radix-ui/react-compose-refs/dist/index.module.js
var import_react8 = __toESM(require_react());
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d052(...refs) {
  return (0, import_react8.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/cmdk/node_modules/@radix-ui/react-context/dist/index.module.js
var import_react9 = __toESM(require_react());
function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
  const Context = /* @__PURE__ */ (0, import_react9.createContext)(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = (0, import_react9.useMemo)(
      () => context,
      Object.values(context)
    );
    return /* @__PURE__ */ (0, import_react9.createElement)(Context.Provider, {
      value
    }, children);
  }
  function useContext2(consumerName) {
    const context = (0, import_react9.useContext)(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [
    Provider,
    useContext2
  ];
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c12(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae11092(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ (0, import_react9.createContext)(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = (0, import_react9.useMemo)(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_react9.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext2(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = (0, import_react9.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext2
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ (0, import_react9.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react9.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae11092,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react9.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/cmdk/node_modules/@radix-ui/react-id/dist/index.module.js
var $2AODx$react = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
var import_react10 = __toESM(require_react());
var $9f79659886946c16$export$e5c5a5f917a5871c2 = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react10.useLayoutEffect : () => {
};

// node_modules/cmdk/node_modules/@radix-ui/react-id/dist/index.module.js
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e372(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c2(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
var import_react12 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
var import_react11 = __toESM(require_react());
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a2(callback) {
  const callbackRef = (0, import_react11.useRef)(callback);
  (0, import_react11.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react11.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
function $71cd76cc60e0454e$export$6f32135080cb4c32({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a2(onChange);
  const setValue = (0, import_react12.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react12.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react12.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a2(onChange);
  (0, import_react12.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/cmdk/node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var import_react16 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.module.js
var import_react14 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/cmdk/node_modules/@radix-ui/react-slot/dist/index.module.js
var import_react13 = __toESM(require_react());
var $5e63c961fc1ce211$export$8c6ed5c666ac13602 = /* @__PURE__ */ (0, import_react13.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = import_react13.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (import_react13.Children.count(newElement) > 1)
          return import_react13.Children.only(null);
        return /* @__PURE__ */ (0, import_react13.isValidElement)(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ (0, import_react13.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ (0, import_react13.isValidElement)(newElement) ? /* @__PURE__ */ (0, import_react13.cloneElement)(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ (0, import_react13.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac13602.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ (0, import_react13.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ (0, import_react13.isValidElement)(children))
    return /* @__PURE__ */ (0, import_react13.cloneElement)(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
    });
  return import_react13.Children.count(children) > 1 ? import_react13.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ (0, import_react13.createElement)(import_react13.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ (0, import_react13.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler)
      overrideProps[propName] = (...args) => {
        childPropValue === null || childPropValue === void 0 || childPropValue(...args);
        slotPropValue === null || slotPropValue === void 0 || slotPropValue(...args);
      };
    else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.module.js
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d0342 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node2 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac13602 : node;
    (0, import_react14.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ (0, import_react14.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node2.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node2
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
var import_react15 = __toESM(require_react());
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a2(onEscapeKeyDownProp);
  (0, import_react15.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown
  ]);
}

// node_modules/cmdk/node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ (0, import_react16.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f222 = /* @__PURE__ */ (0, import_react16.forwardRef)((props, forwardedRef) => {
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react16.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react16.useState)(null);
  const [, force] = (0, import_react16.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  });
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  });
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  });
  (0, import_react16.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = document.body.style.pointerEvents;
        document.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        document.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react16.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react16.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ (0, import_react16.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a2(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react16.useRef)(false);
  const handleClickRef = (0, import_react16.useRef)(() => {
  });
  (0, import_react16.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          document.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          document.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      document.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("click", handleClickRef.current);
    };
  }, [
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a2(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react16.useRef)(false);
  (0, import_react16.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, [
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/cmdk/node_modules/@radix-ui/react-focus-scope/dist/index.module.js
var import_react17 = __toESM(require_react());
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb62 = /* @__PURE__ */ (0, import_react17.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react17.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a2(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a2(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react17.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react17.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react17.useEffect)(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        if (!container1.contains(event.relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react17.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react17.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ (0, import_react17.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1)
    updatedArray.splice(index2, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/cmdk/node_modules/@radix-ui/react-portal/dist/index.module.js
var import_react18 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var $f1701beae083dbae$export$602eac185826482c2 = /* @__PURE__ */ (0, import_react18.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ import_react_dom2.default.createPortal(/* @__PURE__ */ (0, import_react18.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});

// node_modules/cmdk/node_modules/@radix-ui/react-presence/dist/index.module.js
var import_react19 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react19.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b2 = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react19.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ (0, import_react19.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b2.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react19.useState)();
  const stylesRef = (0, import_react19.useRef)({});
  const prevPresentRef = (0, import_react19.useRef)(present);
  const prevAnimationNameRef = (0, import_react19.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react19.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c2(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom3.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react19.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/cmdk/node_modules/@radix-ui/react-focus-guards/dist/index.module.js
var import_react20 = __toESM(require_react());
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c2() {
  (0, import_react20.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React9 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/UI.js
var React7 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React7.forwardRef(function(props, parentRef) {
  var ref = React7.useRef(null);
  var _a2 = React7.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a2[0], setCallbacks = _a2[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b2 = props.as, Container = _b2 === void 0 ? "div" : _b2, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React7.createElement(
    React7.Fragment,
    null,
    enabled && React7.createElement(SideCar, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React7.cloneElement(React7.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React7.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React8 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err2) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var elementCouldBeVScrolled = function(node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowY !== "hidden" && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowY === "visible");
};
var elementCouldBeHScrolled = function(node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowX !== "hidden" && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowX === "visible");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a2 = getScrollVariables(axis, current), s = _a2[1], d = _a2[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a2) {
  var scrollTop = _a2.scrollTop, scrollHeight = _a2.scrollHeight, clientHeight = _a2.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a2) {
  var scrollLeft = _a2.scrollLeft, scrollWidth = _a2.scrollWidth, clientWidth = _a2.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a2 = getScrollVariables(axis, target), position = _a2[0], scroll_1 = _a2[1], capacity = _a2[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React8.useRef([]);
  var touchStartRef = React8.useRef([0, 0]);
  var activeAxis = React8.useRef();
  var id = React8.useState(idCounter++)[0];
  var Style = React8.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React8.useRef(props);
  React8.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React8.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React8.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React8.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      event.preventDefault();
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        event.preventDefault();
      }
    }
  }, []);
  var shouldCancel = React8.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React8.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React8.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React8.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React8.useEffect(function() {
    lockStack.push(Style);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React8.createElement(
    React8.Fragment,
    null,
    inert ? React8.createElement(Style, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React8.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React9.forwardRef(function(props, ref) {
  return React9.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default2 = ReactRemoveScroll;

// node_modules/cmdk/node_modules/@radix-ui/react-dialog/dist/index.module.js
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c12($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react21.useRef)(null);
  const contentRef = (0, import_react21.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c32({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react21.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e372(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e372(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e372(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react21.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
var $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react21.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, import_react21.Children.map(
    children,
    (child) => /* @__PURE__ */ (0, import_react21.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b2, {
      present: forceMount || context.open
    }, /* @__PURE__ */ (0, import_react21.createElement)($f1701beae083dbae$export$602eac185826482c2, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ (0, import_react21.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b2, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react21.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, import_react21.createElement)(Combination_default2, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac13602,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ (0, import_react21.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_react21.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b2, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react21.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react21.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = (0, import_react21.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(forwardedRef, context.contentRef, contentRef);
  (0, import_react21.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react21.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff102(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = (0, import_react21.useRef)(false);
  return /* @__PURE__ */ (0, import_react21.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented)
        hasInteractedOutsideRef.current = true;
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
    }
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = (0, import_react21.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c2();
  return /* @__PURE__ */ (0, import_react21.createElement)(import_react21.Fragment, null, /* @__PURE__ */ (0, import_react21.createElement)($d3863c46a17e8a28$export$20e40289641fbbb62, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react21.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f222, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
var $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
var $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
var $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;

// node_modules/cmdk/dist/index.mjs
var t = __toESM(require_react(), 1);
var fe = '[cmdk-list-sizer=""]';
var O = '[cmdk-group=""]';
var U2 = '[cmdk-group-items=""]';
var me = '[cmdk-group-heading=""]';
var W2 = '[cmdk-item=""]';
var ae = `${W2}:not([aria-disabled="true"])`;
var B2 = "cmdk-item-select";
var S = "data-value";
var pe = (r, c) => W(r, c);
var se = t.createContext(void 0);
var A = () => t.useContext(se);
var ie = t.createContext(void 0);
var J2 = () => t.useContext(ie);
var ce = t.createContext(void 0);
var le = t.forwardRef((r, c) => {
  let n = t.useRef(null), o = w(() => {
    var e, s, a2;
    return { search: "", value: (a2 = (s = r.value) != null ? s : (e = r.defaultValue) == null ? void 0 : e.toLowerCase()) != null ? a2 : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), l = w(() => /* @__PURE__ */ new Set()), d = w(() => /* @__PURE__ */ new Map()), f = w(() => /* @__PURE__ */ new Map()), g = w(() => /* @__PURE__ */ new Set()), u2 = ue(r), { label: b, children: p2, value: R, onValueChange: T, filter: I, shouldFilter: C, vimBindings: F = true, ...P } = r, Q = t.useId(), K2 = t.useId(), V = t.useId(), E = Le();
  D2(() => {
    if (R !== void 0) {
      let e = R.trim().toLowerCase();
      o.current.value = e, E(6, Y2), m2.emit();
    }
  }, [R]);
  let m2 = t.useMemo(() => ({ subscribe: (e) => (g.current.add(e), () => g.current.delete(e)), snapshot: () => o.current, setState: (e, s, a2) => {
    var i, v, h;
    if (!Object.is(o.current[e], s)) {
      if (o.current[e] = s, e === "search")
        $(), N(), E(1, j);
      else if (e === "value")
        if (((i = u2.current) == null ? void 0 : i.value) !== void 0) {
          let x = s != null ? s : "";
          (h = (v = u2.current).onValueChange) == null || h.call(v, x);
          return;
        } else
          a2 || E(5, Y2);
      m2.emit();
    }
  }, emit: () => {
    g.current.forEach((e) => e());
  } }), []), M = t.useMemo(() => ({ value: (e, s) => {
    s !== f.current.get(e) && (f.current.set(e, s), o.current.filtered.items.set(e, X2(s)), E(2, () => {
      N(), m2.emit();
    }));
  }, item: (e, s) => (l.current.add(e), s && (d.current.has(s) ? d.current.get(s).add(e) : d.current.set(s, /* @__PURE__ */ new Set([e]))), E(3, () => {
    $(), N(), o.current.value || j(), m2.emit();
  }), () => {
    f.current.delete(e), l.current.delete(e), o.current.filtered.items.delete(e);
    let a2 = k2();
    E(4, () => {
      $(), (a2 == null ? void 0 : a2.getAttribute("id")) === e && j(), m2.emit();
    });
  }), group: (e) => (d.current.has(e) || d.current.set(e, /* @__PURE__ */ new Set()), () => {
    f.current.delete(e), d.current.delete(e);
  }), filter: () => u2.current.shouldFilter, label: b || r["aria-label"], commandRef: n, listId: Q, inputId: V, labelId: K2 }), []);
  function X2(e) {
    var a2, i;
    let s = (i = (a2 = u2.current) == null ? void 0 : a2.filter) != null ? i : pe;
    return e ? s(e, o.current.search) : 0;
  }
  function N() {
    if (!n.current || !o.current.search || u2.current.shouldFilter === false)
      return;
    let e = o.current.filtered.items, s = [];
    o.current.filtered.groups.forEach((i) => {
      let v = d.current.get(i), h = 0;
      v.forEach((x) => {
        let G2 = e.get(x);
        h = Math.max(G2, h);
      }), s.push([i, h]);
    });
    let a2 = n.current.querySelector(fe);
    H2().sort((i, v) => {
      var G2, re;
      let h = i.getAttribute(S), x = v.getAttribute(S);
      return ((G2 = e.get(x)) != null ? G2 : 0) - ((re = e.get(h)) != null ? re : 0);
    }).forEach((i) => {
      let v = i.closest(U2);
      v ? v.appendChild(i.parentElement === v ? i : i.closest(`${U2} > *`)) : a2.appendChild(i.parentElement === a2 ? i : i.closest(`${U2} > *`));
    }), s.sort((i, v) => v[1] - i[1]).forEach((i) => {
      let v = n.current.querySelector(`${O}[${S}="${i[0]}"]`);
      v == null || v.parentElement.appendChild(v);
    });
  }
  function j() {
    let e = H2().find((a2) => !a2.ariaDisabled), s = e == null ? void 0 : e.getAttribute(S);
    m2.setState("value", s || void 0);
  }
  function $() {
    if (!o.current.search || u2.current.shouldFilter === false) {
      o.current.filtered.count = l.current.size;
      return;
    }
    o.current.filtered.groups = /* @__PURE__ */ new Set();
    let e = 0;
    for (let s of l.current) {
      let a2 = f.current.get(s), i = X2(a2);
      o.current.filtered.items.set(s, i), i > 0 && e++;
    }
    for (let [s, a2] of d.current)
      for (let i of a2)
        if (o.current.filtered.items.get(i) > 0) {
          o.current.filtered.groups.add(s);
          break;
        }
    o.current.filtered.count = e;
  }
  function Y2() {
    var s, a2, i;
    let e = k2();
    e && (((s = e.parentElement) == null ? void 0 : s.firstChild) === e && ((i = (a2 = e.closest(O)) == null ? void 0 : a2.querySelector(me)) == null || i.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
  }
  function k2() {
    var e;
    return (e = n.current) == null ? void 0 : e.querySelector(`${W2}[aria-selected="true"]`);
  }
  function H2() {
    return Array.from(n.current.querySelectorAll(ae));
  }
  function q(e) {
    let a2 = H2()[e];
    a2 && m2.setState("value", a2.getAttribute(S));
  }
  function z(e) {
    var h;
    let s = k2(), a2 = H2(), i = a2.findIndex((x) => x === s), v = a2[i + e];
    (h = u2.current) != null && h.loop && (v = i + e < 0 ? a2[a2.length - 1] : i + e === a2.length ? a2[0] : a2[i + e]), v && m2.setState("value", v.getAttribute(S));
  }
  function Z(e) {
    let s = k2(), a2 = s == null ? void 0 : s.closest(O), i;
    for (; a2 && !i; )
      a2 = e > 0 ? ye(a2, O) : xe(a2, O), i = a2 == null ? void 0 : a2.querySelector(ae);
    i ? m2.setState("value", i.getAttribute(S)) : z(e);
  }
  let ee = () => q(H2().length - 1), te = (e) => {
    e.preventDefault(), e.metaKey ? ee() : e.altKey ? Z(1) : z(1);
  }, ne = (e) => {
    e.preventDefault(), e.metaKey ? q(0) : e.altKey ? Z(-1) : z(-1);
  };
  return t.createElement("div", { ref: _([n, c]), ...P, "cmdk-root": "", onKeyDown: (e) => {
    var s;
    if ((s = P.onKeyDown) == null || s.call(P, e), !e.defaultPrevented)
      switch (e.key) {
        case "n":
        case "j": {
          F && e.ctrlKey && te(e);
          break;
        }
        case "ArrowDown": {
          te(e);
          break;
        }
        case "p":
        case "k": {
          F && e.ctrlKey && ne(e);
          break;
        }
        case "ArrowUp": {
          ne(e);
          break;
        }
        case "Home": {
          e.preventDefault(), q(0);
          break;
        }
        case "End": {
          e.preventDefault(), ee();
          break;
        }
        case "Enter":
          if (!e.nativeEvent.isComposing) {
            e.preventDefault();
            let a2 = k2();
            if (a2) {
              let i = new Event(B2);
              a2.dispatchEvent(i);
            }
          }
      }
  } }, t.createElement("label", { "cmdk-label": "", htmlFor: M.inputId, id: M.labelId, style: Te }, b), t.createElement(ie.Provider, { value: m2 }, t.createElement(se.Provider, { value: M }, p2)));
});
var ve = t.forwardRef((r, c) => {
  var V, E;
  let n = t.useId(), o = t.useRef(null), l = t.useContext(ce), d = A(), f = ue(r), g = (E = (V = f.current) == null ? void 0 : V.forceMount) != null ? E : l == null ? void 0 : l.forceMount;
  D2(() => d.item(n, l == null ? void 0 : l.id), []);
  let u2 = de(n, o, [r.value, r.children, o]), b = J2(), p2 = L((m2) => m2.value && m2.value === u2.current), R = L((m2) => g || d.filter() === false ? true : m2.search ? m2.filtered.items.get(n) > 0 : true);
  t.useEffect(() => {
    let m2 = o.current;
    if (!(!m2 || r.disabled))
      return m2.addEventListener(B2, T), () => m2.removeEventListener(B2, T);
  }, [R, r.onSelect, r.disabled]);
  function T() {
    var m2, M;
    I(), (M = (m2 = f.current).onSelect) == null || M.call(m2, u2.current);
  }
  function I() {
    b.setState("value", u2.current, true);
  }
  if (!R)
    return null;
  let { disabled: C, value: F, onSelect: P, forceMount: Q, ...K2 } = r;
  return t.createElement("div", { ref: _([o, c]), ...K2, id: n, "cmdk-item": "", role: "option", "aria-disabled": C || void 0, "aria-selected": p2 || void 0, "data-disabled": C || void 0, "data-selected": p2 || void 0, onPointerMove: C ? void 0 : I, onClick: C ? void 0 : T }, r.children);
});
var ge = t.forwardRef((r, c) => {
  let { heading: n, children: o, forceMount: l, ...d } = r, f = t.useId(), g = t.useRef(null), u2 = t.useRef(null), b = t.useId(), p2 = A(), R = L((C) => l || p2.filter() === false ? true : C.search ? C.filtered.groups.has(f) : true);
  D2(() => p2.group(f), []), de(f, g, [r.value, r.heading, u2]);
  let T = t.useMemo(() => ({ id: f, forceMount: l }), [l]), I = t.createElement(ce.Provider, { value: T }, o);
  return t.createElement("div", { ref: _([g, c]), ...d, "cmdk-group": "", role: "presentation", hidden: R ? void 0 : true }, n && t.createElement("div", { ref: u2, "cmdk-group-heading": "", "aria-hidden": true, id: b }, n), t.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? b : void 0 }, I));
});
var Re = t.forwardRef((r, c) => {
  let { alwaysRender: n, ...o } = r, l = t.useRef(null), d = L((f) => !f.search);
  return !n && !d ? null : t.createElement("div", { ref: _([l, c]), ...o, "cmdk-separator": "", role: "separator" });
});
var be = t.forwardRef((r, c) => {
  let { onValueChange: n, ...o } = r, l = r.value != null, d = J2(), f = L((p2) => p2.search), g = L((p2) => p2.value), u2 = A(), b = t.useMemo(() => {
    var R;
    let p2 = (R = u2.commandRef.current) == null ? void 0 : R.querySelector(`${W2}[${S}="${g}"]`);
    return p2 == null ? void 0 : p2.getAttribute("id");
  }, [g, u2.commandRef]);
  return t.useEffect(() => {
    r.value != null && d.setState("search", r.value);
  }, [r.value]), t.createElement("input", { ref: c, ...o, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": u2.listId, "aria-labelledby": u2.labelId, "aria-activedescendant": b, id: u2.inputId, type: "text", value: l ? r.value : f, onChange: (p2) => {
    l || d.setState("search", p2.target.value), n == null || n(p2.target.value);
  } });
});
var he = t.forwardRef((r, c) => {
  let { children: n, ...o } = r, l = t.useRef(null), d = t.useRef(null), f = A();
  return t.useEffect(() => {
    if (d.current && l.current) {
      let g = d.current, u2 = l.current, b, p2 = new ResizeObserver(() => {
        b = requestAnimationFrame(() => {
          let R = g.offsetHeight;
          u2.style.setProperty("--cmdk-list-height", R.toFixed(1) + "px");
        });
      });
      return p2.observe(g), () => {
        cancelAnimationFrame(b), p2.unobserve(g);
      };
    }
  }, []), t.createElement("div", { ref: _([l, c]), ...o, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: f.listId, "aria-labelledby": f.inputId }, t.createElement("div", { ref: d, "cmdk-list-sizer": "" }, n));
});
var Ee = t.forwardRef((r, c) => {
  let { open: n, onOpenChange: o, overlayClassName: l, contentClassName: d, container: f, ...g } = r;
  return t.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open: n, onOpenChange: o }, t.createElement($5d3850c4d0b4e6c7$export$602eac185826482c, { container: f }, t.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { "cmdk-overlay": "", className: l }), t.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { "aria-label": r.label, "cmdk-dialog": "", className: d }, t.createElement(le, { ref: c, ...g }))));
});
var Se = t.forwardRef((r, c) => {
  let n = t.useRef(true), o = L((l) => l.filtered.count === 0);
  return t.useEffect(() => {
    n.current = false;
  }, []), n.current || !o ? null : t.createElement("div", { ref: c, ...r, "cmdk-empty": "", role: "presentation" });
});
var Ce = t.forwardRef((r, c) => {
  let { progress: n, children: o, ...l } = r;
  return t.createElement("div", { ref: c, ...l, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, t.createElement("div", { "aria-hidden": true }, o));
});
var we = Object.assign(le, { List: he, Item: ve, Input: be, Group: ge, Separator: Re, Dialog: Ee, Empty: Se, Loading: Ce });
function ye(r, c) {
  let n = r.nextElementSibling;
  for (; n; ) {
    if (n.matches(c))
      return n;
    n = n.nextElementSibling;
  }
}
function xe(r, c) {
  let n = r.previousElementSibling;
  for (; n; ) {
    if (n.matches(c))
      return n;
    n = n.previousElementSibling;
  }
}
function ue(r) {
  let c = t.useRef(r);
  return D2(() => {
    c.current = r;
  }), c;
}
var D2 = typeof window == "undefined" ? t.useEffect : t.useLayoutEffect;
function w(r) {
  let c = t.useRef();
  return c.current === void 0 && (c.current = r()), c;
}
function _(r) {
  return (c) => {
    r.forEach((n) => {
      typeof n == "function" ? n(c) : n != null && (n.current = c);
    });
  };
}
function L(r) {
  let c = J2(), n = () => r(c.snapshot());
  return t.useSyncExternalStore(c.subscribe, n, n);
}
function de(r, c, n) {
  let o = t.useRef(), l = A();
  return D2(() => {
    var f;
    let d = (() => {
      var g;
      for (let u2 of n) {
        if (typeof u2 == "string")
          return u2.trim().toLowerCase();
        if (typeof u2 == "object" && "current" in u2)
          return u2.current ? (g = u2.current.textContent) == null ? void 0 : g.trim().toLowerCase() : o.current;
      }
    })();
    l.value(r, d), (f = c.current) == null || f.setAttribute(S, d), o.current = d;
  }), o;
}
var Le = () => {
  let [r, c] = t.useState(), n = w(() => /* @__PURE__ */ new Map());
  return D2(() => {
    n.current.forEach((o) => o()), n.current = /* @__PURE__ */ new Map();
  }, [r]), (o, l) => {
    n.current.set(o, l), c({});
  };
};
var Te = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };

// app/components/ui/command.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/command.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/command.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Command = React10.forwardRef(_c18 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we, { ref, className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 30,
  columnNumber: 12
}, this));
_c25 = Command;
Command.displayName = we.displayName;
var CommandDialog = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Dialog, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_c33 = CommandDialog;
var CommandInput = React10.forwardRef(_c42 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.Input, { ref, className: cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className), ...props }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 49,
  columnNumber: 12
}, this));
_c52 = CommandInput;
CommandInput.displayName = we.Input.displayName;
var CommandList = React10.forwardRef(_c62 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.List, { ref, className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 58,
  columnNumber: 12
}, this));
_c72 = CommandList;
CommandList.displayName = we.List.displayName;
var CommandEmpty = React10.forwardRef(_c82 = (props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.Empty, { ref, className: "py-6 text-center text-sm", ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 61,
  columnNumber: 61
}, this));
_c92 = CommandEmpty;
CommandEmpty.displayName = we.Empty.displayName;
var CommandGroup = React10.forwardRef(_c102 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.Group, { ref, className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 67,
  columnNumber: 12
}, this));
_c112 = CommandGroup;
CommandGroup.displayName = we.Group.displayName;
var CommandSeparator = React10.forwardRef(_c122 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.Separator, { ref, className: cn("-mx-1 h-px bg-border", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 73,
  columnNumber: 12
}, this));
_c132 = CommandSeparator;
CommandSeparator.displayName = we.Separator.displayName;
var CommandItem = React10.forwardRef(_c142 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.Item, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 79,
  columnNumber: 12
}, this));
_c152 = CommandItem;
CommandItem.displayName = we.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className), ...props }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 86,
    columnNumber: 10
  }, this);
};
_c162 = CommandShortcut;
CommandShortcut.displayName = "CommandShortcut";
var _c18;
var _c25;
var _c33;
var _c42;
var _c52;
var _c62;
var _c72;
var _c82;
var _c92;
var _c102;
var _c112;
var _c122;
var _c132;
var _c142;
var _c152;
var _c162;
$RefreshReg$(_c18, "Command$React.forwardRef");
$RefreshReg$(_c25, "Command");
$RefreshReg$(_c33, "CommandDialog");
$RefreshReg$(_c42, "CommandInput$React.forwardRef");
$RefreshReg$(_c52, "CommandInput");
$RefreshReg$(_c62, "CommandList$React.forwardRef");
$RefreshReg$(_c72, "CommandList");
$RefreshReg$(_c82, "CommandEmpty$React.forwardRef");
$RefreshReg$(_c92, "CommandEmpty");
$RefreshReg$(_c102, "CommandGroup$React.forwardRef");
$RefreshReg$(_c112, "CommandGroup");
$RefreshReg$(_c122, "CommandSeparator$React.forwardRef");
$RefreshReg$(_c132, "CommandSeparator");
$RefreshReg$(_c142, "CommandItem$React.forwardRef");
$RefreshReg$(_c152, "CommandItem");
$RefreshReg$(_c162, "CommandShortcut");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/popover.tsx
var React12 = __toESM(require_react());

// node_modules/@radix-ui/react-popover/dist/index.mjs
var import_react24 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-popper/dist/index.mjs
var import_react23 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max2 = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max2(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max3 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max3);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max3 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a2, b) => a2.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b) => a2[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max2(overflow.left, 0);
        const xMax = max2(overflow.right, 0);
        const yMin = max2(overflow.top, 0);
        const yMax = max2(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max2(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max2(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(floating) {
  return topLayerSelectors.some((selector) => {
    try {
      return floating.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions2(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element) || isTopLayer(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(data.floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions: getDimensions2,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max2(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React11 = __toESM(require_react(), 1);
var import_react22 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var arrow3 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? import_react22.useLayoutEffect : import_react22.useEffect;
function deepEqual(a2, b) {
  if (a2 === b) {
    return true;
  }
  if (typeof a2 !== typeof b) {
    return false;
  }
  if (typeof a2 === "function" && a2.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a2 && b && typeof a2 === "object") {
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a2[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a2.$$typeof) {
        continue;
      }
      if (!deepEqual(a2[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React11.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React11.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React11.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React11.useState(null);
  const [_floating, _setFloating] = React11.useState(null);
  const setReference = React11.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React11.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React11.useRef(null);
  const floatingRef = React11.useRef(null);
  const dataRef = React11.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React11.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React11.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React11.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React11.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React11.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React11.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
var [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
var [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
var $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = (0, import_react23.useState)(null);
  return /* @__PURE__ */ (0, import_react23.createElement)($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
var $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
var $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ (0, import_react23.forwardRef)((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = (0, import_react23.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react23.useEffect)(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : /* @__PURE__ */ (0, import_react23.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
    ref: composedRefs
  }));
});
var $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
var [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
var $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ (0, import_react23.forwardRef)((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = (0, import_react23.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow4, setArrow] = (0, import_react23.useState)(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow4);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: updatePositionStrategy === "always"
      });
      return cleanup;
    },
    elements: {
      reference: context.anchor
    },
    middleware: [
      offset({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions && shift2({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift2() : void 0,
        ...detectOverflowOptions
      }),
      avoidCollisions && flip2({
        ...detectOverflowOptions
      }),
      size2({
        ...detectOverflowOptions,
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      }),
      arrow4 && arrow3({
        element: arrow4,
        padding: arrowPadding
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached && hide2({
        strategy: "referenceHidden",
        ...detectOverflowOptions
      })
    ]
  });
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPositioned)
      handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPositioned,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = (0, import_react23.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  return /* @__PURE__ */ (0, import_react23.createElement)("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props.dir
  }, /* @__PURE__ */ (0, import_react23.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, /* @__PURE__ */ (0, import_react23.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-side": placedSide,
    "data-align": placedAlign
  }, contentProps, {
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPositioned ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  }))));
});
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
var $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x,
        y
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
var $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
var $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
var $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;

// node_modules/@radix-ui/react-popover/dist/index.mjs
var $cb5cc270b50c6fcd$var$POPOVER_NAME = "Popover";
var [$cb5cc270b50c6fcd$var$createPopoverContext, $cb5cc270b50c6fcd$export$c8393c9e73286932] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cb5cc270b50c6fcd$var$POPOVER_NAME, [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cb5cc270b50c6fcd$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cb5cc270b50c6fcd$var$PopoverProvider, $cb5cc270b50c6fcd$var$usePopoverContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$POPOVER_NAME);
var $cb5cc270b50c6fcd$export$5b6b19405a83ff9d = (props) => {
  const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const triggerRef = (0, import_react24.useRef)(null);
  const [hasCustomAnchor, setHasCustomAnchor] = (0, import_react24.useState)(false);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react24.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react24.createElement)($cb5cc270b50c6fcd$var$PopoverProvider, {
    scope: __scopePopover,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerRef,
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react24.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    hasCustomAnchor,
    onCustomAnchorAdd: (0, import_react24.useCallback)(
      () => setHasCustomAnchor(true),
      []
    ),
    onCustomAnchorRemove: (0, import_react24.useCallback)(
      () => setHasCustomAnchor(false),
      []
    ),
    modal
  }, children));
};
var $cb5cc270b50c6fcd$var$TRIGGER_NAME = "PopoverTrigger";
var $cb5cc270b50c6fcd$export$7dacb05d26466c3 = /* @__PURE__ */ (0, import_react24.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...triggerProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$TRIGGER_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  const trigger = /* @__PURE__ */ (0, import_react24.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
  return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_react24.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), trigger);
});
var $cb5cc270b50c6fcd$var$PORTAL_NAME = "PopoverPortal";
var [$cb5cc270b50c6fcd$var$PortalProvider, $cb5cc270b50c6fcd$var$usePortalContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, {
  forceMount: void 0
});
var $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ (0, import_react24.createElement)($cb5cc270b50c6fcd$var$PortalProvider, {
    scope: __scopePopover,
    forceMount
  }, /* @__PURE__ */ (0, import_react24.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react24.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
var $cb5cc270b50c6fcd$var$CONTENT_NAME = "PopoverContent";
var $cb5cc270b50c6fcd$export$d7e1f420b25549ff = /* @__PURE__ */ (0, import_react24.forwardRef)((props, forwardedRef) => {
  const portalContext = $cb5cc270b50c6fcd$var$usePortalContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  return /* @__PURE__ */ (0, import_react24.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react24.createElement)($cb5cc270b50c6fcd$var$PopoverContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react24.createElement)($cb5cc270b50c6fcd$var$PopoverContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $cb5cc270b50c6fcd$var$PopoverContentModal = /* @__PURE__ */ (0, import_react24.forwardRef)((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const contentRef = (0, import_react24.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const isRightClickOutsideRef = (0, import_react24.useRef)(false);
  (0, import_react24.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react24.createElement)(Combination_default, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, /* @__PURE__ */ (0, import_react24.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      if (!isRightClickOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      isRightClickOutsideRef.current = isRightClick;
    }, {
      checkForDefaultPrevented: false
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
var $cb5cc270b50c6fcd$var$PopoverContentNonModal = /* @__PURE__ */ (0, import_react24.forwardRef)((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const hasInteractedOutsideRef = (0, import_react24.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react24.useRef)(false);
  return /* @__PURE__ */ (0, import_react24.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
var $cb5cc270b50c6fcd$var$PopoverContentImpl = /* @__PURE__ */ (0, import_react24.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ (0, import_react24.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react24.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onDismiss: () => context.onOpenChange(false)
  }, /* @__PURE__ */ (0, import_react24.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open),
    role: "dialog",
    id: context.contentId
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function $cb5cc270b50c6fcd$var$getState(open) {
  return open ? "open" : "closed";
}
var $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 = $cb5cc270b50c6fcd$export$5b6b19405a83ff9d;
var $cb5cc270b50c6fcd$export$41fb9f06171c75f4 = $cb5cc270b50c6fcd$export$7dacb05d26466c3;
var $cb5cc270b50c6fcd$export$602eac185826482c = $cb5cc270b50c6fcd$export$dd679ffb4362d2d4;
var $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 = $cb5cc270b50c6fcd$export$d7e1f420b25549ff;

// app/components/ui/popover.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/popover.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/popover.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Popover = $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9;
var PopoverTrigger = $cb5cc270b50c6fcd$export$41fb9f06171c75f4;
var PopoverContent = React12.forwardRef(_c19 = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)($cb5cc270b50c6fcd$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)($cb5cc270b50c6fcd$export$7c6e2c02157bb7d2, { ref, align, sideOffset, className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/popover.tsx",
  lineNumber: 33,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/popover.tsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c26 = PopoverContent;
PopoverContent.displayName = $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2.displayName;
var _c19;
var _c26;
$RefreshReg$(_c19, "PopoverContent$React.forwardRef");
$RefreshReg$(_c26, "PopoverContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/combobox.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/combobox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/combobox.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
function Combobox({
  options,
  defaultOption,
  type,
  onChange
}) {
  _s3();
  const [open, setOpen] = React13.useState(false);
  const [value, setValue] = React13.useState(defaultOption.value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: "w-full justify-between", children: [
      options.find((option) => option.value === value)?.label,
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
        fileName: "app/components/ui/combobox.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/combobox.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ui/combobox.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PopoverContent, { className: "w-full p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Command, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CommandInput, { placeholder: "Search Vehicle ... " }, void 0, false, {
        fileName: "app/components/ui/combobox.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CommandEmpty, { children: "No framework found." }, void 0, false, {
        fileName: "app/components/ui/combobox.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CommandGroup, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CommandItem, { value: option.value, onSelect: (inputValue) => {
        setValue(inputValue);
        onChange(type, inputValue);
        setOpen(false);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Check, { className: cn("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0") }, void 0, false, {
          fileName: "app/components/ui/combobox.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        option.label
      ] }, option.value, true, {
        fileName: "app/components/ui/combobox.tsx",
        lineNumber: 50,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/components/ui/combobox.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/combobox.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ui/combobox.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/combobox.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s3(Combobox, "y5jOybTrYzEwZkqgECTkbMDtZFI=");
_c20 = Combobox;
var _c20;
$RefreshReg$(_c20, "Combobox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/calculator/StageCard.tsx
var import_react_autosuggest = __toESM(require_dist3());

// app/components/ui/progress.tsx
var React14 = __toESM(require_react());

// node_modules/@radix-ui/react-progress/dist/index.mjs
var import_react25 = __toESM(require_react(), 1);
var $67824d98245208a0$var$PROGRESS_NAME = "Progress";
var $67824d98245208a0$var$DEFAULT_MAX = 100;
var [$67824d98245208a0$var$createProgressContext, $67824d98245208a0$export$388eb2d8f6d3261f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($67824d98245208a0$var$PROGRESS_NAME);
var [$67824d98245208a0$var$ProgressProvider, $67824d98245208a0$var$useProgressContext] = $67824d98245208a0$var$createProgressContext($67824d98245208a0$var$PROGRESS_NAME);
var $67824d98245208a0$export$b25a304ec7d746bb = /* @__PURE__ */ (0, import_react25.forwardRef)((props, forwardedRef) => {
  const { __scopeProgress, value: valueProp, max: maxProp, getValueLabel = $67824d98245208a0$var$defaultGetValueLabel, ...progressProps } = props;
  const max3 = $67824d98245208a0$var$isValidMaxNumber(maxProp) ? maxProp : $67824d98245208a0$var$DEFAULT_MAX;
  const value = $67824d98245208a0$var$isValidValueNumber(valueProp, max3) ? valueProp : null;
  const valueLabel = $67824d98245208a0$var$isNumber(value) ? getValueLabel(value, max3) : void 0;
  return /* @__PURE__ */ (0, import_react25.createElement)($67824d98245208a0$var$ProgressProvider, {
    scope: __scopeProgress,
    value,
    max: max3
  }, /* @__PURE__ */ (0, import_react25.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-valuemax": max3,
    "aria-valuemin": 0,
    "aria-valuenow": $67824d98245208a0$var$isNumber(value) ? value : void 0,
    "aria-valuetext": valueLabel,
    role: "progressbar",
    "data-state": $67824d98245208a0$var$getProgressState(value, max3),
    "data-value": value !== null && value !== void 0 ? value : void 0,
    "data-max": max3
  }, progressProps, {
    ref: forwardedRef
  })));
});
$67824d98245208a0$export$b25a304ec7d746bb.propTypes = {
  max(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !$67824d98245208a0$var$isValidMaxNumber(propValue))
      return new Error($67824d98245208a0$var$getInvalidMaxError(strVal, componentName));
    return null;
  },
  value(props, propName, componentName) {
    const valueProp = props[propName];
    const strVal = String(valueProp);
    const max3 = $67824d98245208a0$var$isValidMaxNumber(props.max) ? props.max : $67824d98245208a0$var$DEFAULT_MAX;
    if (valueProp != null && !$67824d98245208a0$var$isValidValueNumber(valueProp, max3))
      return new Error($67824d98245208a0$var$getInvalidValueError(strVal, componentName));
    return null;
  }
};
var $67824d98245208a0$var$INDICATOR_NAME = "ProgressIndicator";
var $67824d98245208a0$export$2b776f7e7ee60dbd = /* @__PURE__ */ (0, import_react25.forwardRef)((props, forwardedRef) => {
  var _context$value;
  const { __scopeProgress, ...indicatorProps } = props;
  const context = $67824d98245208a0$var$useProgressContext($67824d98245208a0$var$INDICATOR_NAME, __scopeProgress);
  return /* @__PURE__ */ (0, import_react25.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $67824d98245208a0$var$getProgressState(context.value, context.max),
    "data-value": (_context$value = context.value) !== null && _context$value !== void 0 ? _context$value : void 0,
    "data-max": context.max
  }, indicatorProps, {
    ref: forwardedRef
  }));
});
function $67824d98245208a0$var$defaultGetValueLabel(value, max3) {
  return `${Math.round(value / max3 * 100)}%`;
}
function $67824d98245208a0$var$getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function $67824d98245208a0$var$isNumber(value) {
  return typeof value === "number";
}
function $67824d98245208a0$var$isValidMaxNumber(max3) {
  return $67824d98245208a0$var$isNumber(max3) && !isNaN(max3) && max3 > 0;
}
function $67824d98245208a0$var$isValidValueNumber(value, max3) {
  return $67824d98245208a0$var$isNumber(value) && !isNaN(value) && value <= max3 && value >= 0;
}
function $67824d98245208a0$var$getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$67824d98245208a0$var$DEFAULT_MAX}\`.`;
}
function $67824d98245208a0$var$getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$67824d98245208a0$var$DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var $67824d98245208a0$export$be92b6f5f03c0fe9 = $67824d98245208a0$export$b25a304ec7d746bb;
var $67824d98245208a0$export$adb584737d712b70 = $67824d98245208a0$export$2b776f7e7ee60dbd;

// app/components/ui/progress.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/progress.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/progress.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var Progress = React14.forwardRef(_c21 = ({
  className,
  value,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)($67824d98245208a0$export$be92b6f5f03c0fe9, { ref, className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)($67824d98245208a0$export$adb584737d712b70, { className: "h-full w-full flex-1 bg-primary transition-all", style: {
  transform: `translateX(-${100 - (value || 0)}%)`
} }, void 0, false, {
  fileName: "app/components/ui/progress.tsx",
  lineNumber: 30,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/progress.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c27 = Progress;
Progress.displayName = $67824d98245208a0$export$be92b6f5f03c0fe9.displayName;
var _c21;
var _c27;
$RefreshReg$(_c21, "Progress$React.forwardRef");
$RefreshReg$(_c27, "Progress");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/calculator/StageCard.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/calculator/StageCard.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var renderSuggestion = (suggestion, data) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "span",
    {
      className: data.isHighlighted ? "bg-blue-200 relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" : "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: [
        suggestion.city,
        ", ",
        suggestion.country
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/calculator/StageCard.tsx",
      lineNumber: 65,
      columnNumber: 5
    },
    this
  );
};
var StageCard_default = ({
  chain,
  selectedRoute,
  selectedStage,
  suggestions,
  onTransportMethodChange,
  onCargoChanged,
  onSuggestionsRequested,
  onSuggestionsClear,
  onSuggestionSelected,
  onAddressChange,
  onDistanceChange,
  onToggleUsesAddress,
  onRemoveStage,
  progress
}) => {
  const route = chain.routes[selectedRoute];
  const stage = route.stages[selectedStage];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: [
      "Stage ",
      selectedStage + 1
    ] }, void 0, true, {
      fileName: "app/components/calculator/StageCard.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col flex-grow justify-between gap-4 overflow-y-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          Combobox,
          {
            options: transportMethodOptions,
            defaultOption: transportMethodOptions.find(
              (option) => option.value === "truck"
            ),
            type: "transportType",
            onChange: onTransportMethodChange(selectedRoute, selectedStage)
          },
          void 0,
          false,
          {
            fileName: "app/components/calculator/StageCard.tsx",
            lineNumber: 101,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Cargo Weight (tons):" }, void 0, false, {
          fileName: "app/components/calculator/StageCard.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          Input,
          {
            type: "number",
            id: "cargo",
            name: "cargo",
            className: "w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100",
            placeholder: "Weight",
            value: stage.cargo,
            onChange: onCargoChanged(selectedRoute, selectedStage)
          },
          void 0,
          false,
          {
            fileName: "app/components/calculator/StageCard.tsx",
            lineNumber: 112,
            columnNumber: 11
          },
          this
        ),
        stage.usesAddress ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Origin Address:" }, void 0, false, {
            fileName: "app/components/calculator/StageCard.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react_autosuggest.default,
            {
              suggestions: suggestions.values,
              onSuggestionsFetchRequested: onSuggestionsRequested(
                selectedRoute,
                selectedStage,
                "from"
              ),
              onSuggestionsClearRequested: onSuggestionsClear,
              onSuggestionSelected: onSuggestionSelected(
                selectedRoute,
                selectedStage,
                "from"
              ),
              getSuggestionValue: (suggestion) => suggestion.city,
              renderSuggestion,
              renderSuggestionsContainer: ({ containerProps, children, query }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { ...containerProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "max-h-[300px] overflow-y-auto overflow-x-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", children }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 148,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 147,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 146,
                columnNumber: 21
              }, this),
              focusInputOnSuggestionClick: false,
              inputProps: {
                value: stage.from.city,
                type: "string",
                id: "from",
                name: "from",
                className: "w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" + (!stage.from.exists ? " outline outline-offset-0 outline-red-500" : " outline-none "),
                placeholder: "City",
                onChange: onAddressChange(
                  selectedRoute,
                  selectedStage,
                  "from",
                  "city"
                )
              },
              renderInputComponent: (inputProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Input, { ...inputProps }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 174,
                columnNumber: 21
              }, this),
              id: String(stage.key) + "from city"
            },
            void 0,
            false,
            {
              fileName: "app/components/calculator/StageCard.tsx",
              lineNumber: 128,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react_autosuggest.default,
            {
              suggestions: suggestions.values,
              onSuggestionsFetchRequested: onSuggestionsRequested(
                selectedRoute,
                selectedStage,
                "from"
              ),
              onSuggestionsClearRequested: onSuggestionsClear,
              onSuggestionSelected: onSuggestionSelected(
                selectedRoute,
                selectedStage,
                "from"
              ),
              getSuggestionValue: (suggestion) => suggestion.country,
              renderSuggestion,
              renderSuggestionsContainer: ({ containerProps, children, query }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { ...containerProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "max-h-[300px] overflow-y-auto overflow-x-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", children }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 199,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 198,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 197,
                columnNumber: 21
              }, this),
              focusInputOnSuggestionClick: false,
              inputProps: {
                value: stage.from.country,
                type: "string",
                id: "from",
                name: "from",
                className: "w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" + (!stage.from.exists ? " outline outline-offset-0 outline-red-500" : " outline-none "),
                placeholder: "Country",
                onChange: onAddressChange(
                  selectedRoute,
                  selectedStage,
                  "from",
                  "country"
                )
              },
              renderInputComponent: (inputProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Input, { ...inputProps }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 225,
                columnNumber: 21
              }, this),
              id: String(stage.key) + "from country"
            },
            void 0,
            false,
            {
              fileName: "app/components/calculator/StageCard.tsx",
              lineNumber: 179,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Destination Address:" }, void 0, false, {
            fileName: "app/components/calculator/StageCard.tsx",
            lineNumber: 229,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react_autosuggest.default,
            {
              suggestions: suggestions.values,
              onSuggestionsFetchRequested: onSuggestionsRequested(
                selectedRoute,
                selectedStage,
                "to"
              ),
              onSuggestionsClearRequested: onSuggestionsClear,
              onSuggestionSelected: onSuggestionSelected(
                selectedRoute,
                selectedStage,
                "to"
              ),
              renderSuggestionsContainer: ({ containerProps, children, query }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { ...containerProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "max-h-[300px] overflow-y-auto overflow-x-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", children }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 250,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 249,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 248,
                columnNumber: 21
              }, this),
              getSuggestionValue: (suggestion) => suggestion.city,
              renderSuggestion,
              focusInputOnSuggestionClick: false,
              inputProps: {
                value: stage.to.city,
                type: "string",
                id: "to",
                name: "to",
                className: "w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" + (!stage.to.exists ? " outline outline-offset-0 outline-red-500" : " outline-none "),
                placeholder: "City",
                onChange: onAddressChange(
                  selectedRoute,
                  selectedStage,
                  "to",
                  "city"
                )
              },
              renderInputComponent: (inputProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Input, { ...inputProps }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 278,
                columnNumber: 21
              }, this),
              id: String(stage.key) + "to city"
            },
            void 0,
            false,
            {
              fileName: "app/components/calculator/StageCard.tsx",
              lineNumber: 232,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react_autosuggest.default,
            {
              suggestions: suggestions.values,
              onSuggestionsFetchRequested: onSuggestionsRequested(
                selectedRoute,
                selectedStage,
                "to"
              ),
              onSuggestionsClearRequested: onSuggestionsClear,
              onSuggestionSelected: onSuggestionSelected(
                selectedRoute,
                selectedStage,
                "to"
              ),
              getSuggestionValue: (suggestion) => suggestion.country,
              renderSuggestion,
              renderSuggestionsContainer: ({ containerProps, children, query }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { ...containerProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "max-h-[300px] overflow-y-auto overflow-x-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", children }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 302,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 301,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 300,
                columnNumber: 21
              }, this),
              focusInputOnSuggestionClick: false,
              inputProps: {
                value: stage.to.country,
                type: "string",
                id: "to",
                name: "to",
                className: "w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" + (!stage.to.exists ? " outline outline-offset-0 outline-red-500" : " outline-none "),
                placeholder: "Country",
                onChange: onAddressChange(
                  selectedRoute,
                  selectedStage,
                  "to",
                  "country"
                )
              },
              renderInputComponent: (inputProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Input, { ...inputProps }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 328,
                columnNumber: 21
              }, this),
              id: String(stage.key) + "to country"
            },
            void 0,
            false,
            {
              fileName: "app/components/calculator/StageCard.tsx",
              lineNumber: 282,
              columnNumber: 17
            },
            this
          ),
          stage.impossible && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Label, { className: "text-base font-medium text-red-500 dark:text-gray-100", children: "Error: Could not connect these addresses" }, void 0, false, {
            fileName: "app/components/calculator/StageCard.tsx",
            lineNumber: 333,
            columnNumber: 19
          }, this),
          isTruckTransportMethod(stage.transportMethod) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            Button,
            {
              className: "w-full",
              variant: "secondary",
              type: "button",
              onClick: onToggleUsesAddress(
                selectedRoute,
                selectedStage,
                "distance"
              ),
              children: "Use Distance?"
            },
            void 0,
            false,
            {
              fileName: "app/components/calculator/StageCard.tsx",
              lineNumber: 339,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/calculator/StageCard.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Label, { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Distance (km):" }, void 0, false, {
            fileName: "app/components/calculator/StageCard.tsx",
            lineNumber: 356,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            Input,
            {
              value: stage.distance,
              type: "number",
              id: "distance",
              name: "distance",
              className: "w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100",
              onChange: onDistanceChange(selectedRoute, selectedStage)
            },
            void 0,
            false,
            {
              fileName: "app/components/calculator/StageCard.tsx",
              lineNumber: 359,
              columnNumber: 17
            },
            this
          ),
          isTruckTransportMethod(stage.transportMethod) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            Button,
            {
              className: "w-full",
              variant: "secondary",
              type: "button",
              onClick: onToggleUsesAddress(
                selectedRoute,
                selectedStage,
                "address"
              ),
              children: "Use Addresses?"
            },
            void 0,
            false,
            {
              fileName: "app/components/calculator/StageCard.tsx",
              lineNumber: 369,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/calculator/StageCard.tsx",
          lineNumber: 355,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/calculator/StageCard.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
        route.stages.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          Button,
          {
            onClick: onRemoveStage(selectedRoute, selectedStage),
            className: "w-full",
            variant: "destructive",
            type: "button",
            children: [
              "Remove Stage \xA0",
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(TrashIcon, { fill: "white" }, void 0, false, {
                fileName: "app/components/calculator/StageCard.tsx",
                lineNumber: 394,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/calculator/StageCard.tsx",
            lineNumber: 387,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          Button,
          {
            className: "px-10",
            variant: "submit_button",
            type: "submit",
            children: "Calculate"
          },
          void 0,
          false,
          {
            fileName: "app/components/calculator/StageCard.tsx",
            lineNumber: 397,
            columnNumber: 11
          },
          this
        ),
        progress !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Progress, { value: progress }, void 0, false, {
          fileName: "app/components/calculator/StageCard.tsx",
          lineNumber: 404,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/calculator/StageCard.tsx",
        lineNumber: 385,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/calculator/StageCard.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/calculator/StageCard.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
};

// app/components/ui/errordialog.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/errordialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/errordialog.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var ErrorDialog = ({
  message,
  open,
  setopen
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Dialog, { open, onOpenChange: setopen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DialogContent, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "text-red-500", children: message }, void 0, false, {
      fileName: "app/components/ui/errordialog.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DialogClose, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { variant: "destructive", children: "Dismiss" }, void 0, false, {
      fileName: "app/components/ui/errordialog.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ui/errordialog.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/errordialog.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/errordialog.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c28 = ErrorDialog;
var _c28;
$RefreshReg$(_c28, "ErrorDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/calculator/Calculator.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/calculator/Calculator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/calculator/Calculator.tsx"
  );
  import.meta.hot.lastModified = "1728767387048.1558";
}
var emptySuggestions = () => ({
  values: [],
  time: Date.now()
});
var defaultChain = (from, to) => ({
  routes: [{
    name: "Route 1",
    stages: [{
      usesAddress: true,
      transportMethod: "truck",
      cargo: void 0,
      from: from ? {
        ...from,
        exists: true
      } : {
        ...emptyAddress,
        exists: true
      },
      to: to ? {
        ...to,
        exists: true
      } : {
        ...emptyAddress,
        exists: true
      },
      impossible: false,
      key: Math.random(),
      emission: void 0,
      distance_km: void 0
    }],
    key: Math.random(),
    emission: void 0
  }],
  emission: void 0
});
var transportMethodOptions = truckTransportMethods.map((method) => ({
  value: method,
  label: getTransportMethodLabel(method)
}));
var loadChain = (chain) => ({
  routes: chain.routes.map((route, index2) => ({
    ...route,
    name: route.name,
    stages: route.stages.map((stage, index3) => stage.usesAddress ? {
      ...stage,
      from: {
        ...stage.from,
        exists: true
      },
      to: {
        ...stage.to,
        exists: true
      },
      impossible: false,
      key: index3,
      emission: void 0,
      distance_km: void 0
    } : {
      ...stage,
      key: index3,
      emission: void 0
    }),
    key: index2,
    emission: void 0
  })),
  emission: void 0
});
var Calculator = ({
  isProject,
  userId,
  chain,
  setChain
}) => {
  _s4();
  const [error, setError] = (0, import_react26.useState)();
  const [message, setMessage] = (0, import_react26.useState)();
  const [suggestions, setSuggestions] = (0, import_react26.useState)(emptySuggestions());
  const [openMessage, setOpenMessage] = (0, import_react26.useState)(false);
  const [openError, setOpenError] = (0, import_react26.useState)(false);
  const [progress, setProgress] = (0, import_react26.useState)();
  const [selectedRoute, setSelectedRoute] = (0, import_react26.useState)(0);
  const [selectedStage, setSelectedStage] = (0, import_react26.useState)(0);
  const onSelectRoute = (routeIndex) => () => {
    setSelectedRoute(routeIndex);
    setSelectedStage(0);
  };
  const onSelectStage = (stageIndex) => () => {
    setSelectedStage(stageIndex);
  };
  const onTransportMethodChange = (routeIndex, stageIndex) => (_2, comboboxValue) => {
    if (!comboboxValue) {
      if (chain.routes[routeIndex].stages[stageIndex].transportMethod) {
        return;
      }
      comboboxValue = "truck";
    }
    setChain((oldChain) => {
      const oldRoute = oldChain.routes[routeIndex];
      const oldStage = oldRoute.stages[stageIndex];
      if (oldStage.usesAddress) {
        if (isTruckTransportMethod(comboboxValue)) {
          return {
            ...oldChain,
            routes: oldChain.routes.with(routeIndex, {
              ...oldRoute,
              stages: oldRoute.stages.with(stageIndex, {
                ...oldStage,
                transportMethod: comboboxValue
              })
            })
          };
        } else {
          return {
            ...oldChain,
            routes: oldChain.routes.with(routeIndex, {
              ...oldRoute,
              stages: oldRoute.stages.with(stageIndex, {
                ...oldStage,
                usesAddress: false,
                transportMethod: comboboxValue,
                distance: 0
              })
            })
          };
        }
      } else {
        return {
          ...oldChain,
          routes: oldChain.routes.with(routeIndex, {
            ...oldRoute,
            stages: oldRoute.stages.with(stageIndex, {
              ...oldStage,
              transportMethod: comboboxValue
            })
          })
        };
      }
    });
  };
  const onCargoChanged = (routeIndex, stageIndex) => ({
    target: {
      value: inputValue
    }
  }) => {
    let inputNumber;
    if (inputValue === "") {
      inputNumber = void 0;
    } else {
      inputNumber = Number(inputValue);
      if (isNaN(inputNumber) || inputNumber < 0) {
        inputNumber = void 0;
      }
    }
    setChain((oldChain) => {
      const oldRoute = oldChain.routes[routeIndex];
      const oldStage = oldRoute.stages[stageIndex];
      return {
        ...oldChain,
        routes: oldChain.routes.with(routeIndex, {
          ...oldRoute,
          stages: oldRoute.stages.with(stageIndex, {
            ...oldStage,
            cargo: inputNumber
          })
        })
      };
    });
  };
  const onSuggestionsClear = () => {
    setSuggestions(emptySuggestions());
  };
  const onSuggestionsRequested = (routeIndex, stageIndex, fromOrTo) => async ({
    value
  }) => {
    const timeOfRequest = Date.now();
    const route = chain.routes[routeIndex];
    const stage = route.stages[stageIndex];
    if (!stage.usesAddress)
      throw Error("Stage uses distance");
    setError(void 0);
    if (value.length === 0) {
      onSuggestionsClear();
      return;
    }
    const address = fromOrTo === "from" ? stage.from : stage.to;
    const input = {
      city: address.city,
      country: address.country
    };
    const response = await fetch("/api/fuzzy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    });
    if (!response.ok) {
      console.error("Error! Got response code: " + response.status + " " + await response.text());
      onSuggestionsClear();
      return;
    }
    const output = await response.json();
    setSuggestions((oldSuggestions) => {
      if (timeOfRequest <= oldSuggestions.time)
        return oldSuggestions;
      if (output.length === 0) {
        setChain((oldChain) => {
          const oldRoute = oldChain.routes[routeIndex];
          const oldStage = oldRoute.stages[stageIndex];
          if (!oldStage.usesAddress)
            throw Error("Stage uses distance");
          if (fromOrTo === "from")
            oldStage.from.exists = false;
          else
            oldStage.to.exists = false;
          return {
            ...oldChain,
            routes: oldChain.routes.with(routeIndex, {
              ...oldRoute,
              stages: oldRoute.stages.with(stageIndex, oldStage)
            })
          };
        });
        return emptySuggestions();
      }
      setChain((oldChain) => {
        const oldRoute = oldChain.routes[routeIndex];
        const oldStage = oldRoute.stages[stageIndex];
        if (!oldStage.usesAddress)
          throw Error("Stage uses distance");
        return {
          ...oldChain,
          routes: oldChain.routes.with(routeIndex, {
            ...oldRoute,
            stages: oldRoute.stages.with(stageIndex, {
              ...oldStage,
              from: {
                ...oldStage.from,
                exists: fromOrTo === "from" ? true : oldStage.from.exists
              },
              to: {
                ...oldStage.to,
                exists: fromOrTo === "to" ? true : oldStage.to.exists
              }
            })
          })
        };
      });
      const values = output.map((suggestion) => ({
        ...suggestion,
        exists: true
      }));
      return {
        values,
        time: timeOfRequest
      };
    });
  };
  const onSuggestionSelected = (routeIndex, stageIndex, fromOrTo) => (_2, {
    suggestion
  }) => {
    setChain((oldChain) => {
      const oldRoute = oldChain.routes[routeIndex];
      const oldStage = oldRoute.stages[stageIndex];
      if (!oldStage.usesAddress)
        throw new Error("Stage uses distance");
      if (fromOrTo === "from")
        oldStage.from = suggestion;
      else
        oldStage.to = suggestion;
      return {
        ...oldChain,
        routes: oldChain.routes.with(routeIndex, {
          ...oldRoute,
          stages: oldRoute.stages.with(stageIndex, oldStage)
        })
      };
    });
  };
  const onAddressChange = (routeIndex, stageIndex, fromOrTo, place) => (_2, data) => {
    const inputValue = data.newValue;
    if (inputValue === void 0)
      return;
    setChain((oldChain) => {
      const oldRoute = oldChain.routes[routeIndex];
      const oldStage = oldRoute.stages[stageIndex];
      if (!oldStage.usesAddress)
        throw Error("Stage uses distance");
      if (inputValue !== void 0) {
        const addressToUpdate = fromOrTo === "from" ? oldStage.from : oldStage.to;
        if (place === "city")
          addressToUpdate.city = inputValue;
        else
          addressToUpdate.country = inputValue;
      }
      oldStage.impossible = false;
      return {
        ...oldChain,
        routes: oldChain.routes.with(routeIndex, {
          ...oldRoute,
          stages: oldRoute.stages.with(stageIndex, oldStage)
        })
      };
    });
  };
  const onDistanceChange = (routeIndex, stageIndex) => ({
    target: {
      value: inputValue
    }
  }) => {
    let inputNumber = Number(inputValue);
    if (inputValue === "") {
      inputNumber = void 0;
    } else {
      inputNumber = Number(inputValue);
      if (isNaN(inputNumber) || inputNumber < 0) {
        inputNumber = void 0;
      }
    }
    setChain((oldChain) => {
      const oldRoute = oldChain.routes[routeIndex];
      const oldStage = oldRoute.stages[stageIndex];
      if (oldStage.usesAddress)
        throw Error("Stage uses addresses");
      return {
        ...oldChain,
        routes: oldChain.routes.with(routeIndex, {
          ...oldRoute,
          stages: oldRoute.stages.with(stageIndex, {
            ...oldStage,
            distance: inputNumber
          })
        })
      };
    });
  };
  const onToggleUsesAddress = (routeIndex, stageIndex, use) => () => {
    setChain((oldChain) => {
      const oldRoute = oldChain.routes[routeIndex];
      const oldStage = oldRoute.stages[stageIndex];
      if (use === "address") {
        if (oldStage.usesAddress) {
          throw Error("Stage already uses addresses");
        }
        if (!isTruckTransportMethod(oldStage.transportMethod)) {
          throw Error("Stage uses non-truck transport method");
        }
        return {
          ...oldChain,
          routes: oldChain.routes.with(routeIndex, {
            ...oldRoute,
            stages: oldRoute.stages.with(stageIndex, {
              ...oldStage,
              usesAddress: true,
              transportMethod: oldStage.transportMethod,
              from: {
                ...emptyAddress,
                exists: true
              },
              to: {
                ...emptyAddress,
                exists: true
              },
              impossible: false,
              distance_km: void 0
            })
          })
        };
      } else {
        if (!oldStage.usesAddress) {
          throw new Error("Stage already uses distances");
        }
        return {
          ...oldChain,
          routes: oldChain.routes.with(routeIndex, {
            ...oldRoute,
            stages: oldRoute.stages.with(stageIndex, {
              ...oldStage,
              usesAddress: false,
              distance: 0
            })
          })
        };
      }
    });
  };
  const onInsertStageAfter = (routeIndex, stageIndex) => () => {
    setChain((oldChain) => {
      const oldRoute = oldChain.routes[routeIndex];
      if (stageIndex === -1) {
        return {
          ...oldChain,
          routes: oldChain.routes.with(routeIndex, {
            ...oldRoute,
            stages: [{
              usesAddress: true,
              transportMethod: "truck",
              cargo: void 0,
              from: {
                ...emptyAddress,
                exists: true
              },
              to: {
                ...emptyAddress,
                exists: true
              },
              impossible: false,
              key: Math.random(),
              emission: void 0,
              distance_km: void 0
            }, ...oldRoute.stages]
          })
        };
      }
      const beforeStage = oldRoute.stages[stageIndex];
      const newStage = beforeStage.usesAddress ? {
        usesAddress: true,
        transportMethod: beforeStage.transportMethod,
        cargo: void 0,
        from: {
          ...beforeStage.to,
          exists: true
        },
        to: {
          ...emptyAddress,
          exists: true
        },
        impossible: false,
        key: Math.random(),
        emission: void 0
      } : {
        usesAddress: false,
        transportMethod: beforeStage.transportMethod,
        cargo: void 0,
        distance: 0,
        key: Math.random(),
        emission: void 0
      };
      return {
        ...oldChain,
        routes: oldChain.routes.with(routeIndex, {
          ...oldRoute,
          stages: [...oldRoute.stages.slice(0, stageIndex + 1), newStage, ...oldRoute.stages.slice(stageIndex + 1)]
        })
      };
    });
  };
  const onRemoveStage = (routeIndex, stageIndex) => () => {
    setChain((oldChain) => {
      const oldRoute = oldChain.routes[routeIndex];
      if (stageIndex < 0 || stageIndex >= oldRoute.stages.length || oldRoute.stages.length <= 1) {
        throw Error("Cannot remove stage index: " + stageIndex);
      }
      console.log("routeIndex = " + routeIndex + ", stageIndex = " + stageIndex + ", oldRoute.stages.length = " + oldRoute.stages.length);
      if (selectedStage === oldRoute.stages.length - 1 && selectedStage === stageIndex) {
        setSelectedStage(selectedStage - 1);
      }
      return {
        ...oldChain,
        routes: oldChain.routes.with(routeIndex, {
          ...oldRoute,
          stages: [...oldRoute.stages.slice(0, stageIndex), ...oldRoute.stages.slice(stageIndex + 1)]
        })
      };
    });
  };
  const onAddRoute = () => {
    setChain((oldChain) => {
      const used_numbers = [];
      for (const route of oldChain.routes) {
        if (route.name.startsWith("Route ")) {
          const number = parseInt(route.name.substring(6));
          if (!isNaN(number)) {
            used_numbers.push(number);
          }
        }
      }
      let suffix_number = 1;
      next_number:
        while (true) {
          for (const number of used_numbers) {
            console.log(number, " === ", suffix_number);
            if (number === suffix_number) {
              suffix_number++;
              continue next_number;
            }
          }
          break;
        }
      return {
        ...oldChain,
        routes: [...oldChain.routes, {
          name: "Route " + suffix_number,
          stages: [{
            usesAddress: true,
            transportMethod: "truck",
            cargo: void 0,
            from: {
              ...emptyAddress,
              exists: true
            },
            to: {
              ...emptyAddress,
              exists: true
            },
            impossible: false,
            key: Math.random(),
            emission: void 0,
            distance_km: void 0
          }],
          key: Math.random(),
          emission: void 0
        }]
      };
    });
  };
  const onRemoveRoute = (routeIndex) => () => {
    setChain((oldChain) => {
      if (routeIndex < 0 || routeIndex >= oldChain.routes.length || oldChain.routes.length <= 1) {
        throw Error("Cannot remove route index: " + routeIndex);
      }
      if (selectedRoute === oldChain.routes.length - 1 && selectedRoute === routeIndex) {
        setSelectedRoute(selectedRoute - 1);
      }
      return {
        ...oldChain,
        routes: [...oldChain.routes.slice(0, routeIndex), ...oldChain.routes.slice(routeIndex + 1)]
      };
    });
  };
  const onCalculate = async (e) => {
    e.preventDefault();
    for (let routeIndex = 0; routeIndex < chain.routes.length; routeIndex++) {
      const route = chain.routes[routeIndex];
      for (let stageIndex = 0; stageIndex < route.stages.length; stageIndex++) {
        const stage = route.stages[stageIndex];
        if (stage.usesAddress) {
          const noFrom = !stage.from.city;
          const noTo = !stage.to.city;
          if (noFrom || noTo) {
            const label = noFrom && noTo ? "origin and destination" : noFrom ? "origin" : "destination";
            setError("Error! Missing " + label + " address in stage " + (stageIndex + 1) + ' of route "' + route.name + '".');
            setOpenError(true);
            setMessage(void 0);
            setChain((oldChain) => {
              const oldRoute = oldChain.routes[routeIndex];
              const oldStage = oldRoute.stages[stageIndex];
              if (!oldStage.usesAddress)
                throw Error("Stage uses distance");
              if (!oldStage.from.city)
                oldStage.from.exists = false;
              if (!oldStage.to.city)
                oldStage.to.exists = false;
              return {
                ...oldChain,
                routes: oldChain.routes.with(routeIndex, {
                  ...oldRoute,
                  stages: oldRoute.stages.with(stageIndex, oldStage)
                })
              };
            });
            return;
          }
        }
      }
    }
    setProgress(10);
    try {
      const input = chain.routes.map((route) => ({
        id: route.name,
        stages: route.stages.map((stage) => ({
          cargo_t: stage.cargo,
          ...stage.usesAddress ? {
            transport_form: stage.transportMethod,
            from: {
              city: stage.from.city,
              country: stage.from.country
            },
            to: {
              city: stage.to.city,
              country: stage.to.country
            }
          } : {
            transport_form: stage.transportMethod,
            distance_km: stage.distance || 0
          }
        }))
      }));
      setProgress(50);
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      });
      setProgress(80);
      const output = await response.json();
      if ("error" in output) {
        switch (output.error) {
          case "Could not connect locations":
            {
              if (!("route_id" in output))
                throw Error("Invalid error type");
              setChain((oldChain) => {
                const routeIndex = oldChain.routes.findIndex((route) => route.name === output.route_id);
                const oldRoute = oldChain.routes[routeIndex];
                const oldStage = oldRoute.stages[output.stage_index];
                if (!oldStage.usesAddress)
                  throw Error("Stage uses distance");
                const fromAddress = !oldStage.from.country ? '"' + oldStage.from.city + '"' : '"' + oldStage.from.city + '" in "' + oldStage.from.country + '"';
                const toAddress = !oldStage.to.country ? '"' + oldStage.to.city + '"' : '"' + oldStage.to.city + '" in "' + oldStage.to.country + '"';
                setError("Error! Could not connect city " + fromAddress + " to " + toAddress + ". Please make sure the stage is connected by roads.");
                setOpenError(true);
                setMessage(void 0);
                return {
                  ...oldChain,
                  routes: oldChain.routes.with(routeIndex, {
                    ...oldRoute,
                    stages: oldRoute.stages.with(output.stage_index, {
                      ...oldStage,
                      impossible: true
                    })
                  })
                };
              });
            }
            break;
          case "No such address":
          case "Ambiguous address":
            {
              if (!("fromOrTo" in output))
                throw Error("Invalid error type");
              setChain((oldChain) => {
                const routeIndex = oldChain.routes.findIndex((route) => route.name === output.route_id);
                const oldRoute = oldChain.routes[routeIndex];
                const oldStage = oldRoute.stages[output.stage_index];
                if (!oldStage.usesAddress)
                  throw Error("Stage uses distance");
                const address = output.fromOrTo === "from" ? oldStage.from : oldStage.to;
                if (output.error === "No such address") {
                  if (!address.country) {
                    setError('Error! Could find city that matched "' + address.city + '". Please make sure the address is correct.');
                    setOpenError(true);
                  } else {
                    setError('Error! Could find city that matched "' + address.city + '" in "' + address.country + '". Please make sure the address is correct.');
                    setOpenError(true);
                  }
                } else {
                  if (!address.country) {
                    setError('Error! Found multiple cities that matched "' + address.city + '". Please specify the country.');
                    setOpenError(true);
                  } else {
                    setError('Error! Found multiple cities that matched "' + address.city + '" in "' + address.country + '". Please make sure the address is correct.');
                    setOpenError(true);
                  }
                }
                setMessage(void 0);
                return {
                  ...oldChain,
                  routes: oldChain.routes.with(routeIndex, {
                    ...oldRoute,
                    stages: oldRoute.stages.with(output.stage_index, {
                      ...oldStage,
                      ...output.fromOrTo === "from" ? {
                        from: {
                          ...oldStage.from,
                          exists: false
                        }
                      } : {
                        to: {
                          ...oldStage.to,
                          exists: false
                        }
                      }
                    })
                  })
                };
              });
            }
            break;
          default:
            {
              setError("Error! Failed to calculate emissions. Please try again.");
              setOpenError(true);
              setMessage(void 0);
              console.error("Error! Got response code: " + response.status + " " + await response.text());
            }
            break;
        }
        return;
      }
      if (!response.ok) {
        setError("Error! Failed to calculate emissions. Please try again.");
        setOpenError(true);
        setMessage(void 0);
        console.error("Error! Got response code: " + response.status + " " + await response.text());
      }
      setChain((oldChain) => {
        return {
          ...oldChain,
          emission: output.chain_kg,
          routes: oldChain.routes.map((oldRoute) => {
            const outputRoute = output.routes.find((route) => route.id === oldRoute.name);
            if (outputRoute === void 0)
              throw Error("Route not found");
            return {
              ...oldRoute,
              emission: outputRoute.route_kg,
              stages: oldRoute.stages.map((oldStage, index2) => ({
                ...oldStage,
                emission: outputRoute.stages[index2].stage_kg,
                ...oldStage.usesAddress && {
                  from: {
                    ...oldStage.from,
                    exists: true
                  },
                  to: {
                    ...oldStage.to,
                    exists: true
                  },
                  cargo: outputRoute.stages[index2].cargo_t,
                  distance_km: outputRoute.stages[index2].distance_km
                }
              }))
            };
          })
        };
      });
      setProgress(100);
      setMessage("Total estimated CO2 emission: " + output.chain_kg + " kg.");
      setOpenMessage(true);
      setProgress(void 0);
      setError(void 0);
    } catch (error2) {
      console.error("Error:", error2);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col gap-9 font-mono justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("form", { onSubmit: onCalculate, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col lg:flex-row w-screen ml-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "px-16 flex-0 pt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ChainCard_default, { isProject, userId, chain, selectedRoute, onSelectRoute, onAddRoute, setChain }, void 0, false, {
        fileName: "app/components/calculator/Calculator.tsx",
        lineNumber: 892,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/calculator/Calculator.tsx",
        lineNumber: 891,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col lg:flex-row lg:px-64 gap-4 pt-10 lg:max-h-[800px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Card, { className: "border-2 p-3 mx-10 lg:mx-0 flex flex-col gap-4 lg:w-[400px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RouteCard_default, { chain, selectedRoute, selectedStage, onSelectStage, onInsertStageAfter, onRemoveRoute }, void 0, false, {
          fileName: "app/components/calculator/Calculator.tsx",
          lineNumber: 896,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/calculator/Calculator.tsx",
          lineNumber: 895,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Card, { className: "border-2 p-3 mx-10 flex flex-col gap-4 lg:w-[400px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(StageCard_default, { chain, selectedRoute, selectedStage, suggestions, onTransportMethodChange, onCargoChanged, onSuggestionsRequested, onSuggestionsClear, onSuggestionSelected, onAddressChange, onDistanceChange, onToggleUsesAddress, onRemoveStage, progress }, void 0, false, {
          fileName: "app/components/calculator/Calculator.tsx",
          lineNumber: 899,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/calculator/Calculator.tsx",
          lineNumber: 898,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/calculator/Calculator.tsx",
        lineNumber: 894,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/calculator/Calculator.tsx",
      lineNumber: 883,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(MessageDialog, { message, open: openMessage, setopen: setOpenMessage }, void 0, false, {
      fileName: "app/components/calculator/Calculator.tsx",
      lineNumber: 903,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ErrorDialog, { message: error, open: openError, setopen: setOpenError }, void 0, false, {
      fileName: "app/components/calculator/Calculator.tsx",
      lineNumber: 905,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/calculator/Calculator.tsx",
    lineNumber: 882,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/calculator/Calculator.tsx",
    lineNumber: 881,
    columnNumber: 10
  }, this);
};
_s4(Calculator, "35LGljTWJTNe6pcD4Y7pX5GCsTw=");
_c29 = Calculator;
var Calculator_default = Calculator;
var _c29;
$RefreshReg$(_c29, "Calculator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  getTransportMethodLabel,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  createproject_default,
  defaultChain,
  loadChain,
  Calculator_default
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=/build/_shared/chunk-MSB7Y2RR.js.map
